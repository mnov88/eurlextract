#!/usr/bin/env python3
"""
Test script for the enhanced GDPRhub scraper
Tests on a small subset to validate all new features
"""

import sys
import os
from pathlib import Path

# Add current directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from gdprhub_enhanced_scraper import EnhancedGDPRHubScraper

def test_enhanced_scraper():
    print("🧪 Testing Enhanced GDPRhub Scraper")
    print("=" * 50)
    
    # Create scraper with test settings
    scraper = EnhancedGDPRHubScraper(
        max_workers=2,  # Reduced for testing
        output_dir="test_gdprhub_data"
    )
    
    # Test on a small range (just Article 6 which should have cases)
    print("Testing with Article 6 GDPR (should contain cases)...")
    scraper.run(start_article=6, end_article=6)
    
    # Print results
    print(f"\n📊 Test Results:")
    print(f"   Cases found: {len(scraper.cases)}")
    print(f"   HTML files saved: {len(scraper.html_files)}")
    print(f"   Machine translations: {len(scraper.machine_translations)}")
    print(f"   Case-article mappings: {len(scraper.case_articles)}")
    print(f"   Case sources: {len(scraper.case_sources)}")
    
    # Check if directories were created
    test_dir = Path("test_gdprhub_data")
    html_dir = test_dir / "html_pages"
    translations_dir = test_dir / "machine_translations"
    
    print(f"\n📁 Directory Structure:")
    print(f"   Output dir exists: {test_dir.exists()}")
    print(f"   HTML dir exists: {html_dir.exists()}")
    print(f"   Translations dir exists: {translations_dir.exists()}")
    
    if html_dir.exists():
        html_files = list(html_dir.glob("*.html"))
        print(f"   HTML files in directory: {len(html_files)}")
        if html_files:
            print(f"   Example HTML file: {html_files[0].name}")
    
    if translations_dir.exists():
        translation_files = list(translations_dir.glob("*.html"))
        print(f"   Translation files in directory: {len(translation_files)}")
        if translation_files:
            print(f"   Example translation file: {translation_files[0].name}")
    
    # Save outputs
    scraper.save_outputs(
        cases_csv="test_cases.csv",
        cases_json="test_cases.json",
        case_articles_csv="test_case_articles.csv",
        case_sources_csv="test_case_sources.csv",
        summary_csv="test_summary.csv",
        html_files_csv="test_html_files.csv",
        machine_translations_csv="test_machine_translations.csv",
        machine_translations_json="test_machine_translations.json"
    )
    
    print(f"\n✅ Test completed successfully!")
    print(f"   Check the 'test_gdprhub_data' directory for all outputs")
    
    # Show a sample case if available
    if scraper.cases:
        sample_case = scraper.cases[0]
        print(f"\n📄 Sample Case:")
        print(f"   Title: {sample_case.get('page_title', 'N/A')}")
        print(f"   URL: {sample_case.get('case_url', 'N/A')}")
        print(f"   Authority: {sample_case.get('authority_name', 'N/A')}")
        print(f"   HTML saved: {sample_case.get('html_file_path', 'N/A')}")
        print(f"   Machine translation: {sample_case.get('machine_translation_extracted', False)}")

if __name__ == "__main__":
    test_enhanced_scraper()














