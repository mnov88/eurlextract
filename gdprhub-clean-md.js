#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');

class GDPRHubCleaner {
    constructor() {
        this.turndownService = new TurndownService({
            headingStyle: 'atx',
            bulletListMarker: '*',
            codeBlockStyle: 'fenced',
            emDelimiter: '_',
            strongDelimiter: '**'
        });
        this.setupCustomRules();
    }

    setupCustomRules() {
        // Remove script tags completely
        this.turndownService.addRule('removeScripts', {
            filter: 'script',
            replacement: () => ''
        });

        // Remove style tags completely  
        this.turndownService.addRule('removeStyles', {
            filter: 'style',
            replacement: () => ''
        });

        // Remove navigation elements
        this.turndownService.addRule('removeNav', {
            filter: function(node) {
                if (node.nodeName === 'NAV') return true;
                if (node.classList && (
                    node.classList.contains('mw-navigation') ||
                    node.classList.contains('navigation') ||
                    node.classList.contains('navbar') ||
                    node.classList.contains('menu')
                )) return true;
                return false;
            },
            replacement: () => ''
        });

        // Enhanced infobox handling for wikitable
        this.turndownService.addRule('gdprInfobox', {
            filter: function(node) {
                return node.nodeName === 'TABLE' &&
                       node.classList &&
                       node.classList.contains('wikitable');
            },
            replacement: function(content, node) {
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

        // Preserve pre tags as code blocks for machine translations
        this.turndownService.addRule('preservePreBlocks', {
            filter: 'pre',
            replacement: function(content) {
                return '\n```\n' + content + '\n```\n';
            }
        });

        // Remove edit links and other meta content
        this.turndownService.addRule('removeEditLinks', {
            filter: function(node) {
                if (node.classList && (
                    node.classList.contains('mw-editsection') ||
                    node.classList.contains('edit-link') ||
                    node.classList.contains('mw-jump')
                )) return true;
                return false;
            },
            replacement: () => ''
        });
    }

    extractMainContent(html) {
        // Remove JavaScript injection at the beginning
        html = html.replace(/^[^<]*document\.documentElement\.className[^>]*?>/, '');
        
        // Find the main content area
        const bodyMatch = html.match(/<body[^>]*?>([\s\S]*?)<\/body>/i);
        if (bodyMatch) {
            html = bodyMatch[1];
        }

        // Remove navigation sections more aggressively
        html = html.replace(/<nav[\s\S]*?<\/nav>/gi, '');
        html = html.replace(/<div[^>]*class="[^"]*mw-navigation[^"]*"[\s\S]*?<\/div>/gi, '');
        html = html.replace(/<div[^>]*class="[^"]*navigation[^"]*"[\s\S]*?<\/div>/gi, '');
        
        // Remove the entire header navigation block (up to the main heading)
        html = html.replace(/^[\s\S]*?(<h1[^>]*>.*?<\/h1>)/i, '$1');
        
        // Remove edit history information
        html = html.replace(/Revision as of[\s\S]*?Jump to:/i, '');
        html = html.replace(/\(diff\)[\s\S]*?Jump to:/i, '');
        html = html.replace(/Jump to:\s*\[navigation\][\s\S]*?\[search\]/i, '');
        
        // Remove the top navigation links section
        html = html.replace(/<a[^>]*href="[^"]*Welcome_to_GDPRhub[^"]*"[\s\S]*?(?=<h1|<table|<div[^>]*class="[^"]*wikitable)/i, '');
        
        return html;
    }

    cleanMarkdown(markdown) {
        // Remove empty lines at the beginning
        markdown = markdown.replace(/^\s*\n+/, '');
        
        // Remove excessive whitespace
        markdown = markdown.replace(/\n{4,}/g, '\n\n\n');
        
        // Remove navigation links that might have slipped through
        markdown = markdown.replace(/\[Start Page\].*?\n/g, '');
        markdown = markdown.replace(/\[Advanced Search\].*?\n/g, '');
        markdown = markdown.replace(/\[Get Case Updates!\].*?\n/g, '');
        markdown = markdown.replace(/\[LinkedIn\].*?\n/g, '');
        markdown = markdown.replace(/\[Mastodon\].*?\n/g, '');
        markdown = markdown.replace(/\[X \/ Twitter\].*?\n/g, '');
        markdown = markdown.replace(/\[RSS feed\].*?\n/g, '');
        
        // Remove Wikipedia-style navigation
        markdown = markdown.replace(/\[navigation\]\(#mw-navigation\), \[search\]\(#p-search\)/g, '');
        markdown = markdown.replace(/From GDPRhub\n*/g, '');
        
        // Remove GDPRhub logo references
        markdown = markdown.replace(/!\[GDPRhub\].*?\n/g, '');
        markdown = markdown.replace(/!\[Banner2\.png\].*?\n/g, '');
        
        // Remove edit-related links
        markdown = markdown.replace(/\[Discussion\].*?\n/g, '');
        markdown = markdown.replace(/\[View source\].*?\n/g, '');
        markdown = markdown.replace(/\[View history\].*?\n/g, '');
        markdown = markdown.replace(/\[Log in\].*?\n/g, '');
        
        // Remove empty link references
        markdown = markdown.replace(/\[\]\(# .*?\)/g, '');
        
        // Clean up excessive newlines again
        markdown = markdown.replace(/\n{3,}/g, '\n\n');
        
        return markdown.trim();
    }

    convertFile(inputPath, outputPath) {
        try {
            const html = fs.readFileSync(inputPath, 'utf8');
            const cleanedHtml = this.extractMainContent(html);
            let markdown = this.turndownService.turndown(cleanedHtml);
            markdown = this.cleanMarkdown(markdown);
            
            // Ensure output directory exists
            const outputDir = path.dirname(outputPath);
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
            }
            
            fs.writeFileSync(outputPath, markdown, 'utf8');
            return true;
        } catch (error) {
            console.error(`Error converting ${inputPath}:`, error.message);
            return false;
        }
    }

    convertDirectory(inputDir, outputDir) {
        if (!fs.existsSync(inputDir)) {
            console.error(`Input directory does not exist: ${inputDir}`);
            return;
        }

        // Create output directory if it doesn't exist
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const files = fs.readdirSync(inputDir).filter(file => 
            file.toLowerCase().endsWith('.html')
        );

        console.log(`Found ${files.length} HTML files in ${inputDir} to convert`);
        
        let converted = 0;
        let failed = 0;

        files.forEach(file => {
            const inputPath = path.join(inputDir, file);
            const outputPath = path.join(outputDir, file.replace(/\.html$/i, '.md'));
            
            if (this.convertFile(inputPath, outputPath)) {
                converted++;
            } else {
                failed++;
            }
        });

        console.log(`Conversion complete: ${converted} files converted, ${failed} failed`);
        
        if (failed > 0) {
            console.log(`${failed} files failed to convert`);
        }
    }
}

function main() {
    const args = process.argv.slice(2);
    
    if (args.length < 2) {
        console.log('Usage: node gdprhub-clean-md.js <input> <output>');
        console.log('  <input>  - HTML file or directory containing HTML files');
        console.log('  <output> - Output file or directory for Markdown files');
        process.exit(1);
    }

    const [input, output] = args;
    const cleaner = new GDPRHubCleaner();

    if (fs.statSync(input).isDirectory()) {
        cleaner.convertDirectory(input, output);
    } else {
        cleaner.convertFile(input, output);
    }
}

if (require.main === module) {
    main();
}
