#!/usr/bin/env python3
"""
Analyze the HTML to Markdown conversion results
"""

import os
import sys
from pathlib import Path

def analyze_conversion(html_dir, md_dir):
    """Analyze the conversion results"""
    
    html_path = Path(html_dir)
    md_path = Path(md_dir)
    
    if not html_path.exists():
        print(f"❌ HTML directory not found: {html_dir}")
        return
        
    if not md_path.exists():
        print(f"❌ Markdown directory not found: {md_dir}")
        return
    
    # Count files
    html_files = list(html_path.glob("*.html"))
    md_files = list(md_path.glob("*.md"))
    
    print("📊 Conversion Analysis")
    print("=" * 50)
    print(f"HTML files found: {len(html_files)}")
    print(f"Markdown files created: {len(md_files)}")
    print(f"Conversion success rate: {len(md_files)/len(html_files)*100:.1f}%")
    
    # Size analysis
    total_html_size = sum(f.stat().st_size for f in html_files)
    total_md_size = sum(f.stat().st_size for f in md_files)
    
    print(f"\n📁 File Size Analysis:")
    print(f"Total HTML size: {total_html_size / 1024 / 1024:.1f} MB")
    print(f"Total Markdown size: {total_md_size / 1024 / 1024:.1f} MB")
    print(f"Size reduction: {(1 - total_md_size/total_html_size)*100:.1f}%")
    print(f"Average HTML file: {total_html_size/len(html_files)/1024:.1f} KB")
    print(f"Average Markdown file: {total_md_size/len(md_files)/1024:.1f} KB")
    
    # Sample content analysis
    if md_files:
        sample_file = md_files[0]
        with open(sample_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        print(f"\n📄 Sample Content Analysis ({sample_file.name}):")
        print(f"Lines: {len(content.split(chr(10)))}")
        print(f"Characters: {len(content)}")
        
        # Check for key sections
        has_summary = "English Summary" in content
        has_translation = "Machine Translation" in content
        has_facts = "Facts" in content
        has_holding = "Holding" in content
        
        print(f"Contains English Summary: {'✅' if has_summary else '❌'}")
        print(f"Contains Machine Translation: {'✅' if has_translation else '❌'}")
        print(f"Contains Facts section: {'✅' if has_facts else '❌'}")
        print(f"Contains Holding section: {'✅' if has_holding else '❌'}")
        
        # Show first few lines
        lines = content.split('\n')[:10]
        print(f"\n📝 First 10 lines of {sample_file.name}:")
        for i, line in enumerate(lines, 1):
            print(f"  {i:2d}: {line[:80]}{'...' if len(line) > 80 else ''}")

def main():
    if len(sys.argv) != 3:
        print("Usage: python analyze_conversion.py <html_dir> <markdown_dir>")
        print("Example: python analyze_conversion.py machine_translations sample_md_output")
        return
        
    html_dir = sys.argv[1]
    md_dir = sys.argv[2]
    
    analyze_conversion(html_dir, md_dir)

if __name__ == "__main__":
    main()


