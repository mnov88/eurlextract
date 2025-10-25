#!/usr/bin/env python3

import os
import sys
from pathlib import Path
import statistics

def analyze_directories(html_dir, old_md_dir, new_md_dir):
    """Analyze and compare the old vs new markdown conversions"""
    
    html_files = list(Path(html_dir).glob("*.html"))
    old_md_files = list(Path(old_md_dir).glob("*.md"))
    new_md_files = list(Path(new_md_dir).glob("*.md"))
    
    print("🔍 Conversion Analysis Comparison")
    print("=" * 50)
    print(f"HTML files: {len(html_files)}")
    print(f"Old Markdown files: {len(old_md_files)}")
    print(f"New Markdown files: {len(new_md_files)}")
    
    # Calculate size statistics
    html_sizes = [f.stat().st_size for f in html_files]
    old_md_sizes = [f.stat().st_size for f in old_md_files if f.exists()]
    new_md_sizes = [f.stat().st_size for f in new_md_files if f.exists()]
    
    total_html_size = sum(html_sizes) / (1024 * 1024)  # MB
    total_old_md_size = sum(old_md_sizes) / (1024 * 1024)  # MB
    total_new_md_size = sum(new_md_sizes) / (1024 * 1024)  # MB
    
    print(f"\n📊 Size Analysis:")
    print(f"Total HTML size: {total_html_size:.1f} MB")
    print(f"Total old Markdown size: {total_old_md_size:.1f} MB")
    print(f"Total new Markdown size: {total_new_md_size:.1f} MB")
    print(f"Old conversion reduction: {((total_html_size - total_old_md_size) / total_html_size * 100):.1f}%")
    print(f"New conversion reduction: {((total_html_size - total_new_md_size) / total_html_size * 100):.1f}%")
    print(f"Additional reduction from cleaning: {((total_old_md_size - total_new_md_size) / total_old_md_size * 100):.1f}%")
    
    # Average file sizes
    avg_html = statistics.mean(html_sizes) / 1024  # KB
    avg_old_md = statistics.mean(old_md_sizes) / 1024 if old_md_sizes else 0  # KB
    avg_new_md = statistics.mean(new_md_sizes) / 1024 if new_md_sizes else 0  # KB
    
    print(f"\n📁 Average File Sizes:")
    print(f"Average HTML file: {avg_html:.1f} KB")
    print(f"Average old Markdown file: {avg_old_md:.1f} KB")
    print(f"Average new Markdown file: {avg_new_md:.1f} KB")
    
    # Compare specific files
    print(f"\n🔍 Content Quality Analysis:")
    
    # Find matching files
    sample_files = []
    for new_md in list(new_md_files)[:5]:  # Check first 5 files
        base_name = new_md.stem
        old_md = Path(old_md_dir) / f"{base_name}.md"
        if old_md.exists():
            sample_files.append((old_md, new_md))
    
    for old_file, new_file in sample_files:
        old_content = old_file.read_text(encoding='utf-8', errors='ignore')
        new_content = new_file.read_text(encoding='utf-8', errors='ignore')
        
        # Check for key sections
        old_has_js = 'document.documentElement.className' in old_content
        new_has_js = 'document.documentElement.className' in new_content
        
        old_has_nav = '[Start Page]' in old_content or '[Advanced Search]' in old_content
        new_has_nav = '[Start Page]' in new_content or '[Advanced Search]' in new_content
        
        old_has_summary = '## English Summary' in old_content
        new_has_summary = '## English Summary' in new_content
        
        old_has_machine = '## English Machine Translation' in old_content
        new_has_machine = '## English Machine Translation' in new_content
        
        print(f"\n📄 {new_file.name}:")
        print(f"  JavaScript removed: {old_has_js} → {new_has_js}")
        print(f"  Navigation removed: {old_has_nav} → {new_has_nav}")
        print(f"  English Summary preserved: {old_has_summary} → {new_has_summary}")
        print(f"  Machine Translation preserved: {old_has_machine} → {new_has_machine}")
        print(f"  Size reduction: {old_file.stat().st_size} → {new_file.stat().st_size} bytes " +
              f"({((old_file.stat().st_size - new_file.stat().st_size) / old_file.stat().st_size * 100):.1f}% smaller)")

def main():
    if len(sys.argv) != 4:
        print("Usage: python analyze_clean_conversion.py <html_dir> <old_md_dir> <new_md_dir>")
        sys.exit(1)
    
    html_dir, old_md_dir, new_md_dir = sys.argv[1:4]
    analyze_directories(html_dir, old_md_dir, new_md_dir)

if __name__ == "__main__":
    main()












