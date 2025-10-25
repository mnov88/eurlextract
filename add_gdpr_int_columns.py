#!/usr/bin/env python3
"""
Post-processing script to add GDPR integer columns to existing CSV files
This can be used to update previously scraped data with the new columns
"""

import pandas as pd
import argparse
import sys
import os
from pathlib import Path

# Add current directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from gdprhub_enhanced_scraper import extract_gdpr_article_numbers, extract_article_category_number, format_int_list

def add_gdpr_int_columns(input_csv: str, output_csv: str = None):
    """
    Add GDPR integer columns to an existing CSV file.
    
    Args:
        input_csv: Path to input CSV file
        output_csv: Path to output CSV file (defaults to input_csv with _with_ints suffix)
    """
    
    # Read the CSV file
    try:
        df = pd.read_csv(input_csv)
        print(f"📊 Loaded {len(df)} rows from {input_csv}")
    except Exception as e:
        print(f"❌ Error reading {input_csv}: {e}")
        return False
    
    # Check if required columns exist
    required_cols = ['relevant_law_texts', 'article_category']
    missing_cols = [col for col in required_cols if col not in df.columns]
    if missing_cols:
        print(f"❌ Missing required columns: {missing_cols}")
        print(f"Available columns: {list(df.columns)}")
        return False
    
    # Check if new columns already exist
    new_cols = ['relevant_law_texts_gdpr_int', 'article_category_int']
    existing_new_cols = [col for col in new_cols if col in df.columns]
    if existing_new_cols:
        print(f"⚠️  Columns already exist and will be overwritten: {existing_new_cols}")
    
    print("🔍 Extracting GDPR article numbers...")
    
    # Extract GDPR article numbers from relevant_law_texts
    df['relevant_law_texts_gdpr_int'] = df['relevant_law_texts'].apply(
        lambda x: format_int_list(extract_gdpr_article_numbers(x))
    )
    
    # Extract article number from article_category
    df['article_category_int'] = df['article_category'].apply(
        lambda x: extract_article_category_number(x)
    )
    
    # Generate output filename if not provided
    if output_csv is None:
        input_path = Path(input_csv)
        output_csv = input_path.parent / f"{input_path.stem}_with_ints{input_path.suffix}"
    
    # Save the updated CSV
    try:
        df.to_csv(output_csv, index=False, encoding='utf-8')
        print(f"✅ Saved updated CSV to {output_csv}")
        
        # Show sample results
        print(f"\n📈 Sample results (first 5 rows):")
        print("=" * 80)
        sample_cols = ['article_category', 'article_category_int', 'relevant_law_texts_gdpr_int']
        available_cols = [col for col in sample_cols if col in df.columns]
        print(df[available_cols].head().to_string(index=False))
        
        # Show statistics
        print(f"\n📊 Statistics:")
        print(f"   Total rows: {len(df)}")
        print(f"   Rows with article_category_int: {df['article_category_int'].notna().sum()}")
        print(f"   Rows with relevant_law GDPR articles: {(df['relevant_law_texts_gdpr_int'] != '').sum()}")
        
        return True
        
    except Exception as e:
        print(f"❌ Error saving {output_csv}: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(
        description="Add GDPR integer columns to existing CSV files",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Add columns to existing CSV
  python %(prog)s gdprhub_cases.csv
  
  # Specify output filename
  python %(prog)s gdprhub_cases.csv --output gdprhub_cases_enhanced.csv
  
  # Process file in different directory
  python %(prog)s /path/to/data/gdprhub_cases.csv
        """
    )
    
    parser.add_argument(
        "input_csv",
        help="Path to input CSV file containing relevant_law_texts and article_category columns"
    )
    parser.add_argument(
        "--output", "-o",
        help="Path to output CSV file (default: input file with _with_ints suffix)"
    )
    
    args = parser.parse_args()
    
    # Check if input file exists
    if not os.path.exists(args.input_csv):
        print(f"❌ Input file not found: {args.input_csv}")
        sys.exit(1)
    
    print("🚀 GDPR Integer Columns Post-Processor")
    print("=" * 50)
    
    success = add_gdpr_int_columns(args.input_csv, args.output)
    
    if success:
        print(f"\n🎉 Processing completed successfully!")
        print(f"   New columns added: relevant_law_texts_gdpr_int, article_category_int")
    else:
        print(f"\n💥 Processing failed!")
        sys.exit(1)

if __name__ == "__main__":
    main()












