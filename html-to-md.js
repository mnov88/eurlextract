#!/usr/bin/env node

/*
 * html-to-md.js – v2.2 (2025-07-20)
 * --------------------------------------------------------------
 *  + Converts HTML → Markdown with Turndown.
 *  + Cleans list-number noise (unchanged from original script).
 *  + Detects CJEU-style headings via ordered regexes and prefixes
 *    them with `## ` unless they already carry a Markdown hash.
 *  + Promotes elements that already have heading-CSS classes
 *    (coj-title-grseq-1/-2, C05Titre1/2 **and now**  
 *    C75Debutdesmotifs, C04Titre1, C06Titre3, C41DispositifIntroduction,
 *    coj-title-grseq-3, conditional coj-sum-title-1)  
 *    to <h2>/<h3>/<h4> **before** Turndown, so regex detection
 *    is skipped if CSS is present.
 * --------------------------------------------------------------
 *  False-positives are avoided by strict patterns & execution
 *  order.  Feel free to tighten/loosen HEADING_PATTERNS.
 */

const fs            = require('fs');
const path          = require('path');
const TurndownService = require('turndown');

// Initialise Turndown
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

// --------------------------------------------------------------
// 1.  Optional HTML pre-processing (CSS-class headings) ---------
// --------------------------------------------------------------
function injectCssClassHeadings(html) {
  /*
   * Promote elements that *look* like headings by CSS class to true
   * <h2>/<h3>/<h4> tags so that Turndown emits proper Markdown headings.
   *
   *  H2  → coj-title-grseq-1 • C05Titre1 • C75Debutdesmotifs •
   *         C04Titre1 • C41DispositifIntroduction (+ conditional coj-sum-title-1)
   *  H3  → coj-title-grseq-2 • C05Titre2
   *  H4  → C06Titre3 • coj-title-grseq-3
   *
   * Works on <p>, <div>, <span>… any opening tag.
   */

  // ★ ADD: expanded class lists for H2, H3, H4
  html = html
    // H2 classes
    .replace(
      /<([a-z][\w\-]*)([^>]*\bclass="[^"]*(?:coj-title-grseq-1|C05Titre1|C75Debutdesmotifs|C04Titre1|C41DispositifIntroduction)[^"]*"[^>]*)>([\s\S]*?)<\/\1>/gi,
      '<h2$2>$3</h2>'
    )
    // H3 classes (unchanged + new alias already present)
    .replace(
      /<([a-z][\w\-]*)([^>]*\bclass="[^"]*(?:coj-title-grseq-2|C05Titre2)[^"]*"[^>]*)>([\s\S]*?)<\/\1>/gi,
      '<h3$2>$3</h3>'
    )
    // ★ ADD: H4 classes
    .replace(
      /<([a-z][\w\-]*)([^>]*\bclass="[^"]*(?:C06Titre3|coj-title-grseq-3)[^"]*"[^>]*)>([\s\S]*?)<\/\1>/gi,
      '<h4$2>$3</h4>'
    );

  // ★ ADD: conditional promotion for <* class="coj-sum-title-1">
  html = html.replace(
    /<([a-z][\w\-]*)([^>]*\bclass="[^"]*coj-sum-title-1[^"]*"[^>]*)>([\s\S]*?)<\/\1>/gi,
    (match, tag, attrs, inner) => {
      // strip inner HTML, collapse whitespace
      const text = inner.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

      // cover block heuristics: skip rubric lines & dates
      if (/^[A-Z]+ OF THE COURT/.test(text)) return match;
      if (/^\d{1,2}\s+\w+\s+\d{4}/.test(text)) return match;

      // everything else becomes <h2>
      return `<h2${attrs}>${inner}</h2>`;
    }
  );

  return html;
}

// --------------------------------------------------------------
// 2.  Heading-detection regexes (strict ➜ loose) ----------------
// --------------------------------------------------------------
const NBSP = '\u00A0';
const ORD  = '(?:first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth)';

// ★ ADD: operative-intro detector (`On those grounds, …`)
const HEADING_PATTERNS = [
  /^(\[[^\]]+\])$/u,                                              // [Text rectified …]
  /^ORDER OF THE COURT(?: \([^)]+\))?$/u,                          // ORDER OF THE COURT (Sixth Chamber)
  /^(Judgment|Order)$/u,
  /^(Costs|Substance|Joinder|Admissibility)$/u,
  /^On those grounds,? the Court.*$/u,                            // ★ ADD
  new RegExp(`^(?:The )?(Regulation|Directive|Decision)(?: ${NBSP}?\\((?:EC|EU)\\))? ${NBSP}?(?:No ${NBSP}?)?\\d+/\\d{2,4}(?:/[A-Z]{2,3})?$`, 'u'),
  /^(?:The )?(Brussels|Lugano|Munich) Convention$/u,
  /^(?:The )?(GDPR|CMR)$/u,
  /^(?:Interpretation of |Combined reading of )?Article \d+(?: ?\([\dA-Za-z]+\))*?(?: and Article \d+(?: ?\([\dA-Za-z]+\))*)*(?: of .*)?$/u,
  new RegExp(`^(?:On the |The )?${ORD}(?:,? (?:and |to )?${ORD})* questions?(?: in Case C[\u2011\-]?\\d+(?:/\\d+)?)?(?: and the only question in Case C[\u2011\-]?\\d+(?:/\\d+)?)?$`, 'u'),
  /^Questions? \d+(?:\([a-z]\))?(?: (?:and|to) \d+(?:\([a-z]\))?)*$/u,
  new RegExp(`^The ${ORD} part of the ${ORD} question$`, 'u'),
  /^(?:The )?admissibility of the request for a preliminary ruling$/iu,
  /^(?:[A-Za-zÀ-ÖØ-öø-ÿ’'\-]+’s )?(?:request|application) .*reopen(?:ed)?$/u,
  /^(Observations submitted to the Court|The Court’s reply|Reply of the Court|Consideration of the questions? referred(?: for a preliminary ruling)?)$/u,
  /^(?:The )?(dispute in the main proceedings|proceedings? brought in [A-Z][a-z]+(?: by .*?)?|(?:main )?proceedings .*?|the request for a preliminary ruling|procedure before the Court)$/u,
  new RegExp(`^(Legal framework|Legal context|EU legal framework|Community (?:law|legislation)|European Union (?:law|legislation)|International (?:law|rules|legislation)|National (?:law|legislation)|[A-Z][a-z]+(?: [A-Z][a-z]+)* (?:procedural )?law)$`, 'u'),
  /^(Table of contents|Pre[- ]litigation procedure|Procedure before the Court)$/u
];
const isHeading = ln => HEADING_PATTERNS.some(rx => rx.test(ln));

// --------------------------------------------------------------
// 3.  List-number clean-up (original patterns) ------------------
// --------------------------------------------------------------
const LIST_NOISE_PATTERNS = [
  /^\d+\.$/, /^\d+$/, /^\(\d+\)$/, /^\([a-zA-Z]\)$/, /^[ivxIVX]+\.$/,
  /^\([ivxIVX]+\)$/, /^[a-zA-Z]\.$/, /^\([a-zA-Z]{1,2}\)$/, /^\*$/, /^•$/, /^–$/, /^—$/,
  /^[:;.,!?"'()]+$/, /^[:;.,!?"'()\d]+$/, /^\d+-[a-zA-Z]$/, /^\d+[a-zA-Z]+$/, /^\d+\)$/,
  /^[a-zA-Z]\)$/, /^\d+-\d+$/, /^\d+-[a-zA-Z]+$/, /^[a-zA-Z]+-\d+$/, /^[a-zA-Z]+\d+$/,
  /^[a-zA-Z]{1,2}\d+\)$/, /^\d+[a-zA-Z]{1,2}\)$/, /^[a-zA-Z]{1,2}\d+$/, /^[a-zA-Z]\d+-[a-zA-Z]\d+$/
];

// --------------------------------------------------------------
// 4.  Pipeline: clean ➜ heading ➜ paragraph normalisation --------
// --------------------------------------------------------------
function postProcessMarkdown(markdown) {
  // 4.1  list-noise merge (unchanged)
  const srcLines = markdown.split('\n');
  const merged = [];
  for (let i = 0; i < srcLines.length;) {
    const cur = srcLines[i].trim();
    const isNoise = LIST_NOISE_PATTERNS.some(rx => rx.test(cur));
    if (isNoise) {
      let j = i + 1;
      while (j < srcLines.length && srcLines[j].trim() === '') j++;
      if (j < srcLines.length) {
        merged.push(`${cur} ${srcLines[j].trim()}`);
        i = j + 1;
      } else {
        merged.push(cur);
        i++;
      }
    } else {
      merged.push(srcLines[i]);
      i++;
    }
  }

  // 4.2  heading detection
  const headed = [];
  merged.forEach((ln, idx) => {
    const t = ln.trim();
    if (t === '') { headed.push(''); return; }
    if (isHeading(t) && !t.startsWith('#')) {                // guard against CSS-promoted h*
      headed.push(`## ${t}`);
      if (idx + 1 < merged.length && merged[idx + 1].trim() !== '') headed.push('');
    } else {
      headed.push(ln);
    }
  });

  // 4.3  collapse 3+ blank lines → 2, unescape dots in lists
  return headed.join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^(\s*\d+)\\\./gm, '$1.');
}

// --------------------------------------------------------------
// 5.  Turndown wrapper & HTML-file conversion -------------------
// --------------------------------------------------------------
function convertHTMLToMarkdown(html) {
  return turndownService.turndown(html);
}

function convertFile(inputPath, outputPath) {
  try {
    if (!outputPath) outputPath = inputPath.replace(path.extname(inputPath), '.md');

    const rawHtml   = fs.readFileSync(inputPath, 'utf8');
    const prepped   = injectCssClassHeadings(rawHtml);      // ★ still step 1
    const md        = convertHTMLToMarkdown(prepped);       // step 2
    const finalMD   = postProcessMarkdown(md);              // step 3

    fs.writeFileSync(outputPath, finalMD, 'utf8');
  } catch (err) {
    console.error(`Error converting ${inputPath}: ${err.message}`);
  }
}

// --------------------------------------------------------------
// 6.  Directory conversion (unchanged) --------------------------
// --------------------------------------------------------------
function convertDirectory(inputDir, outputDir) {
  try {
    if (!outputDir) outputDir = `${inputDir}-md`;
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const files = fs.readdirSync(inputDir).filter(f =>
      fs.statSync(path.join(inputDir, f)).isFile() && path.extname(f).toLowerCase() === '.html'
    );
    console.log(`Found ${files.length} HTML files in ${inputDir} to convert`);

    files.forEach(f =>
      convertFile(path.join(inputDir, f), path.join(outputDir, f.replace(/\.html$/i, '.md')))
    );
    if (files.length) console.log(`Converted ${files.length} files to ${outputDir}`);
    else console.log('No HTML files found');
  } catch (err) {
    console.error(`Error converting directory ${inputDir}: ${err.message}`);
  }
}

// --------------------------------------------------------------
// 7.  CLI entry point & exports --------------------------------
// --------------------------------------------------------------
function main() {
  const args = process.argv.slice(2);
  if (!args.length) {
    console.log('Usage:');
    console.log('  node html-to-md.js file.html [output.md]');
    console.log('  node html-to-md.js input-dir [output-dir]');
    return;
  }

  const input  = args[0];
  const output = args[1];
  if (!fs.existsSync(input)) {
    console.error(`Error: ${input} does not exist`);
    return;
  }

  const stat = fs.statSync(input);
  if (stat.isFile()) convertFile(input, output);
  else if (stat.isDirectory()) convertDirectory(input, output);
  else console.error('Error: input is neither file nor directory');
}

if (require.main === module) main();

module.exports = { convertFile, convertDirectory, convertHTMLToMarkdown };
