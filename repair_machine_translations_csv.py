#!/usr/bin/env python3
"""
Repair script for corrupted machine translations CSV file
Fixes CSV format issues by properly escaping text content
"""

import pandas as pd
import json
import re
import argparse
import sys
from pathlib import Path

def clean_csv_text(text):
    """Clean text for safe CSV storage by normalizing whitespace."""
    if not text or pd.isna(text):
        return text
    
    if not isinstance(text, str):
        text = str(text)
    
    # Replace multiple whitespace (including newlines) with single spaces
    cleaned = re.sub(r'\s+', ' ', text.strip())
    
    # Limit length to prevent extremely long cells
    if len(cleaned) > 10000:
        cleaned = cleaned[:10000] + "... [truncated]"
    
    return cleaned

def repair_machine_translations_csv(input_file, output_file=None, json_file=None):
    """
    Repair the machine translations CSV by reading the JSON file (which should be intact)
    and recreating the CSV with proper escaping.
    """
    
    input_path = Path(input_file)
    if not input_path.exists():
        print(f"❌ Input file not found: {input_file}")
        return False
    
    # Try to find the corresponding JSON file
    if not json_file:
        json_file = input_path.parent / input_path.name.replace('.csv', '.json')
    
    json_path = Path(json_file)
    if not json_path.exists():
        print(f"❌ JSON file not found: {json_file}")
        print("   Attempting to parse CSV directly...")
        return repair_from_csv_directly(input_file, output_file)
    
    try:
        # Load data from JSON file (should be intact)
        print(f"📖 Loading data from JSON: {json_file}")
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        print(f"✅ Loaded {len(data)} translation records")
        
        # Clean the translation text in each record
        for record in data:
            if 'translation_text' in record:
                record['translation_text'] = clean_csv_text(record['translation_text'])
        
        # Create DataFrame
        df = pd.DataFrame(data)
        
        # Set output file
        if not output_file:
            output_file = input_path.parent / f"{input_path.stem}_repaired.csv"
        
        # Save with proper CSV escaping
        print(f"💾 Saving repaired CSV: {output_file}")
        df.to_csv(output_file, index=False, encoding='utf-8', quoting=1, escapechar='\\')
        
        print(f"✅ Successfully repaired CSV file!")
        print(f"   Original: {input_file}")
        print(f"   Repaired: {output_file}")
        print(f"   Records: {len(df)}")
        
        return True
        
    except Exception as e:
        print(f"❌ Error repairing from JSON: {e}")
        print("   Attempting to parse CSV directly...")
        return repair_from_csv_directly(input_file, output_file)

def repair_from_csv_directly(input_file, output_file=None):
    """
    Attempt to repair CSV by reading it with error handling and cleaning the data.
    """
    try:
        input_path = Path(input_file)
        
        # Try to read CSV with different parameters
        print("🔧 Attempting to read CSV with error handling...")
        
        # Try reading with error_bad_lines=False (older pandas) or on_bad_lines='skip' (newer pandas)
        try:
            df = pd.read_csv(input_file, encoding='utf-8', on_bad_lines='skip')
        except TypeError:
            # Older pandas version
            df = pd.read_csv(input_file, encoding='utf-8', error_bad_lines=False, warn_bad_lines=True)
        
        print(f"✅ Successfully read {len(df)} rows from corrupted CSV")
        
        # Clean text columns
        if 'translation_text' in df.columns:
            print("🧹 Cleaning translation text...")
            df['translation_text'] = df['translation_text'].apply(clean_csv_text)
        
        # Set output file
        if not output_file:
            output_file = input_path.parent / f"{input_path.stem}_repaired.csv"
        
        # Save with proper CSV escaping
        print(f"💾 Saving repaired CSV: {output_file}")
        df.to_csv(output_file, index=False, encoding='utf-8', quoting=1, escapechar='\\')
        
        print(f"✅ Successfully repaired CSV file!")
        print(f"   Original: {input_file}")
        print(f"   Repaired: {output_file}")
        print(f"   Records: {len(df)}")
        
        return True
        
    except Exception as e:
        print(f"❌ Error repairing CSV directly: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(
        description="Repair corrupted machine translations CSV file",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Repair using JSON file (recommended)
  python %(prog)s fast_scrape/gdprhub_machine_translations.csv
  
  # Specify output file
  python %(prog)s corrupted.csv --output repaired.csv
  
  # Specify JSON file location
  python %(prog)s corrupted.csv --json-file data.json
        """
    )
    
    parser.add_argument(
        "input_csv",
        help="Path to corrupted CSV file"
    )
    parser.add_argument(
        "--output", "-o",
        help="Path to output repaired CSV file (default: input_repaired.csv)"
    )
    parser.add_argument(
        "--json-file", "-j",
        help="Path to JSON file with intact data (default: same name as CSV but .json)"
    )
    
    args = parser.parse_args()
    
    print("🔧 Machine Translations CSV Repair Tool")
    print("=" * 50)
    
    success = repair_machine_translations_csv(args.input_csv, args.output, args.json_file)
    
    if success:
        print(f"\n🎉 Repair completed successfully!")
    else:
        print(f"\n💥 Repair failed!")
        sys.exit(1)

if __name__ == "__main__":
    main()


