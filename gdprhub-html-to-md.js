#!/usr/bin/env node

/*
 * gdprhub-html-to-md.js – GDPRhub Machine Translation Cleaner
 * --------------------------------------------------------------
 *  + Customized version of html-to-md.js for GDPRhub machine translations
 *  + Extracts only the main content area from MediaWiki pages
 *  + Removes navigation, footers, scripts, and other UI elements
 *  + Preserves case structure and machine translation content
 *  + Outputs clean, readable Markdown files
 */

const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');

// Initialize Turndown with GDPRhub-specific settings
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  emDelimiter: '*'
});

// Custom rule to preserve machine translation content in code blocks
turndownService.addRule('machineTranslation', {
  filter: 'pre',
  replacement: function(content) {
    // Keep machine translation text as code blocks for readability
    return '\n```\n' + content + '\n```\n';
  }
});

// Custom rule to handle GDPRhub infoboxes (case details tables)
turndownService.addRule('gdprInfobox', {
  filter: function(node) {
    return node.nodeName === 'TABLE' && 
           node.classList && 
           node.classList.contains('wikitable');
  },
  replacement: function(content, node) {
    // Convert infobox to simple key-value format
    const rows = Array.from(node.querySelectorAll('tr'));
    let result = '\n## Case Information\n\n';
    
    rows.forEach(row => {
      const cells = Array.from(row.querySelectorAll('td, th'));
      if (cells.length >= 2) {
        const key = cells[0].textContent.trim().replace(':', '');
        const value = cells[1].textContent.trim();
        if (key && value && key !== value) {
          result += `**${key}:** ${value}\n\n`;
        }
      }
    });
    
    return result;
  }
});

// --------------------------------------------------------------
// Content extraction and cleaning
// --------------------------------------------------------------
function extractMainContent(html) {
  /*
   * Extract only the main content from GDPRhub MediaWiki pages
   * Removes navigation, scripts, footers, and other UI elements
   */
  
  // Remove script tags and their content
  html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  
  // Remove style tags and their content
  html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  
  // Remove comments
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  
  // Try to extract just the main content area
  const contentPatterns = [
    /<div id="mw-content-text"[^>]*>([\s\S]*?)<\/div>/i,
    /<div class="mw-parser-output"[^>]*>([\s\S]*?)<\/div>/i,
    /<div id="bodyContent"[^>]*>([\s\S]*?)<\/div>/i
  ];
  
  for (const pattern of contentPatterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  // Fallback: return the whole HTML if we can't extract main content
  return html;
}

function cleanGDPRhubContent(html) {
  /*
   * GDPRhub-specific cleaning
   */
  
  // Remove navigation elements
  html = html.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '');
  
  // Remove footer elements
  html = html.replace(/<div[^>]*footer[^>]*>[\s\S]*?<\/div>/gi, '');
  
  // Remove category links at bottom
  html = html.replace(/<div id="catlinks"[^>]*>[\s\S]*?<\/div>/gi, '');
  
  // Remove printfooter
  html = html.replace(/<div class="printfooter"[^>]*>[\s\S]*?<\/div>/gi, '');
  
  // Remove "Retrieved from" links
  html = html.replace(/Retrieved from "[^"]*"/gi, '');
  
  // Remove table of contents (it will be regenerated from headings)
  html = html.replace(/<div id="toc"[^>]*>[\s\S]*?<\/div>/gi, '');
  
  // Remove edit links and other UI elements
  html = html.replace(/<span class="mw-editsection"[^>]*>[\s\S]*?<\/span>/gi, '');
  
  // Remove jump-to-nav elements
  html = html.replace(/<div[^>]*jump-to-nav[^>]*>[\s\S]*?<\/div>/gi, '');
  
  return html;
}

// --------------------------------------------------------------
// File processing
// --------------------------------------------------------------
function convertGDPRhubFile(inputPath, outputPath) {
  try {
    if (!outputPath) outputPath = inputPath.replace(path.extname(inputPath), '.md');

    console.log(`Converting: ${path.basename(inputPath)}`);

    const rawHtml = fs.readFileSync(inputPath, 'utf8');
    
    // Extract main content
    const mainContent = extractMainContent(rawHtml);
    
    // Clean GDPRhub-specific elements
    const cleanedHtml = cleanGDPRhubContent(mainContent);
    
    // Convert to Markdown
    const markdown = turndownService.turndown(cleanedHtml);
    
    // Post-process Markdown
    const finalMarkdown = postProcessGDPRhubMarkdown(markdown);

    fs.writeFileSync(outputPath, finalMarkdown, 'utf8');
    
  } catch (err) {
    console.error(`Error converting ${inputPath}: ${err.message}`);
  }
}

function postProcessGDPRhubMarkdown(markdown) {
  /*
   * GDPRhub-specific post-processing
   */
  
  // Clean up excessive whitespace
  let processed = markdown.replace(/\n{4,}/g, '\n\n\n');
  
  // Fix heading spacing
  processed = processed.replace(/^(#{1,6})\s*(.+)$/gm, '$1 $2');
  
  // Clean up list formatting
  processed = processed.replace(/^\s*[-*+]\s+$/gm, '');
  
  // Remove empty table cells
  processed = processed.replace(/\|\s*\|/g, '| |');
  
  // Add title at the beginning if not present
  if (!processed.match(/^#\s/)) {
    // Try to extract title from the content
    const titleMatch = processed.match(/## Case Information[\s\S]*?\*\*([^:]*?):\*\*\s*([^\n]+)/);
    if (titleMatch) {
      processed = `# ${titleMatch[2]}\n\n${processed}`;
    }
  }
  
  return processed.trim() + '\n';
}

// --------------------------------------------------------------
// Directory processing
// --------------------------------------------------------------
function convertGDPRhubDirectory(inputDir, outputDir) {
  try {
    if (!outputDir) outputDir = `${inputDir}_markdown`;
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const files = fs.readdirSync(inputDir).filter(f =>
      fs.statSync(path.join(inputDir, f)).isFile() && 
      path.extname(f).toLowerCase() === '.html'
    );
    
    console.log(`🔄 Converting ${files.length} GDPRhub machine translation files...`);

    let successful = 0;
    files.forEach(f => {
      try {
        convertGDPRhubFile(
          path.join(inputDir, f), 
          path.join(outputDir, f.replace(/\.html$/i, '.md'))
        );
        successful++;
      } catch (err) {
        console.error(`❌ Failed to convert ${f}: ${err.message}`);
      }
    });
    
    if (successful > 0) {
      console.log(`✅ Successfully converted ${successful}/${files.length} files to ${outputDir}`);
    } else {
      console.log('❌ No files were successfully converted');
    }
    
  } catch (err) {
    console.error(`Error processing directory ${inputDir}: ${err.message}`);
  }
}

// --------------------------------------------------------------
// CLI interface
// --------------------------------------------------------------
function main() {
  const args = process.argv.slice(2);
  if (!args.length) {
    console.log('GDPRhub Machine Translation HTML to Markdown Converter');
    console.log('');
    console.log('Usage:');
    console.log('  node gdprhub-html-to-md.js file.html [output.md]');
    console.log('  node gdprhub-html-to-md.js input-dir [output-dir]');
    console.log('');
    console.log('Examples:');
    console.log('  node gdprhub-html-to-md.js machine_translations/ cleaned_translations/');
    console.log('  node gdprhub-html-to-md.js single_file.html cleaned_file.md');
    return;
  }

  const input = args[0];
  const output = args[1];
  
  if (!fs.existsSync(input)) {
    console.error(`❌ Error: ${input} does not exist`);
    return;
  }

  const stat = fs.statSync(input);
  if (stat.isFile()) {
    convertGDPRhubFile(input, output);
    console.log('✅ File conversion completed');
  } else if (stat.isDirectory()) {
    convertGDPRhubDirectory(input, output);
  } else {
    console.error('❌ Error: input is neither file nor directory');
  }
}

if (require.main === module) main();

module.exports = { 
  convertGDPRhubFile, 
  convertGDPRhubDirectory 
};
