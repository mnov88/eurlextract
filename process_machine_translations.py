#!/usr/bin/env python3
"""
Process machine translations: HTML → Markdown → Enhanced CSV
Integrates HTML-to-Markdown conversion with the enhanced scraper workflow
"""

import subprocess
import sys
import os
from pathlib import Path
import pandas as pd
import json

def run_html_to_markdown(html_dir, md_dir):
    """Run the HTML to Markdown conversion"""
    
    html_path = Path(html_dir)
    if not html_path.exists():
        print(f"❌ HTML directory not found: {html_dir}")
        return False
    
    print(f"🔄 Converting HTML files to Markdown...")
    print(f"   Source: {html_dir}")
    print(f"   Target: {md_dir}")
    
    try:
        # Get the correct path to html-to-md.js
        script_dir = Path(__file__).parent
        html_to_md_script = script_dir / 'html-to-md.js'
        
        # Run the html-to-md.js script
        result = subprocess.run([
            'node', 
            str(html_to_md_script), 
            html_dir, 
            md_dir
        ], capture_output=True, text=True)
        
        if result.returncode == 0:
            print("✅ HTML to Markdown conversion completed successfully!")
            print(result.stdout)
            return True
        else:
            print("❌ HTML to Markdown conversion failed!")
            print(result.stderr)
            return False
            
    except Exception as e:
        print(f"❌ Error running conversion: {e}")
        return False

def update_translations_csv(csv_file, md_dir):
    """Update the machine translations CSV with Markdown file paths"""
    
    csv_path = Path(csv_file)
    md_path = Path(md_dir)
    
    if not csv_path.exists():
        print(f"❌ CSV file not found: {csv_file}")
        return False
        
    if not md_path.exists():
        print(f"❌ Markdown directory not found: {md_dir}")
        return False
    
    print(f"📊 Updating machine translations CSV...")
    
    try:
        # Read the CSV
        df = pd.read_csv(csv_file)
        print(f"   Loaded {len(df)} translation records")
        
        # Add markdown file path column
        def get_md_path(html_filename):
            if pd.isna(html_filename):
                return None
            md_filename = html_filename.replace('.html', '.md')
            md_file = md_path / md_filename
            if md_file.exists():
                return str(md_file.relative_to(md_path.parent))
            return None
        
        df['markdown_file_path'] = df['filename'].apply(get_md_path)
        
        # Count successful conversions
        successful = df['markdown_file_path'].notna().sum()
        print(f"   Markdown files found: {successful}/{len(df)}")
        
        # Save updated CSV
        output_file = csv_path.parent / f"{csv_path.stem}_with_markdown.csv"
        df.to_csv(output_file, index=False, encoding='utf-8')
        print(f"✅ Updated CSV saved to: {output_file}")
        
        return True
        
    except Exception as e:
        print(f"❌ Error updating CSV: {e}")
        return False

def generate_summary_report(html_dir, md_dir, csv_file=None):
    """Generate a summary report of the processing"""
    
    html_path = Path(html_dir)
    md_path = Path(md_dir)
    
    print("\n" + "="*60)
    print("📋 MACHINE TRANSLATION PROCESSING SUMMARY")
    print("="*60)
    
    # File counts
    html_files = list(html_path.glob("*.html")) if html_path.exists() else []
    md_files = list(md_path.glob("*.md")) if md_path.exists() else []
    
    print(f"📁 File Statistics:")
    print(f"   HTML files: {len(html_files)}")
    print(f"   Markdown files: {len(md_files)}")
    print(f"   Conversion rate: {len(md_files)/len(html_files)*100:.1f}%" if html_files else "N/A")
    
    # Size statistics
    if html_files and md_files:
        html_size = sum(f.stat().st_size for f in html_files)
        md_size = sum(f.stat().st_size for f in md_files)
        
        print(f"\n💾 Size Analysis:")
        print(f"   Total HTML: {html_size/1024/1024:.1f} MB")
        print(f"   Total Markdown: {md_size/1024/1024:.1f} MB")
        print(f"   Size reduction: {(1-md_size/html_size)*100:.1f}%")
        print(f"   Space saved: {(html_size-md_size)/1024/1024:.1f} MB")
    
    # CSV statistics
    if csv_file and Path(csv_file).exists():
        try:
            df = pd.read_csv(csv_file)
            print(f"\n📊 CSV Integration:")
            print(f"   Translation records: {len(df)}")
            if 'markdown_file_path' in df.columns:
                linked = df['markdown_file_path'].notna().sum()
                print(f"   Linked to Markdown: {linked} ({linked/len(df)*100:.1f}%)")
        except Exception as e:
            print(f"   CSV analysis failed: {e}")
    
    print(f"\n🎯 Next Steps:")
    print(f"   1. Use Markdown files for analysis: {md_dir}/")
    print(f"   2. Enhanced CSV with Markdown links available")
    print(f"   3. Original HTML files preserved in: {html_dir}/")
    print("="*60)

def main():
    print("🚀 Machine Translation Processor")
    print("Converts HTML → Markdown and updates CSV files")
    print("-" * 50)
    
    # Default paths (can be customized)
    html_dir = "machine_translations"
    md_dir = "machine_translations_md"
    csv_file = "gdprhub_machine_translations_fixed.csv"
    
    # Check if we're in the right directory
    if not Path(html_dir).exists():
        print(f"❌ HTML directory not found: {html_dir}")
        print("   Make sure you're running this from the data directory")
        print("   (e.g., fast_scrape/)")
        return
    
    # Step 1: Convert HTML to Markdown
    success = run_html_to_markdown(html_dir, md_dir)
    if not success:
        return
    
    # Step 2: Update CSV file if it exists
    if Path(csv_file).exists():
        update_translations_csv(csv_file, md_dir)
    else:
        print(f"⚠️  CSV file not found: {csv_file}")
        print("   Skipping CSV update")
    
    # Step 3: Generate summary report
    generate_summary_report(html_dir, md_dir, csv_file)
    
    print("\n🎉 Machine translation processing completed!")

if __name__ == "__main__":
    main()
