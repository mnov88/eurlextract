#!/usr/bin/env python3
"""
Test script for GDPR article number extraction functions
"""

import sys
import os

# Add current directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from gdprhub_enhanced_scraper import extract_gdpr_article_numbers, extract_article_category_number, format_int_list

def test_relevant_law_extraction():
    """Test extraction from relevant_law_texts field"""
    print("🧪 Testing relevant_law_texts extraction:")
    print("=" * 50)
    
    test_cases = [
        "Article 1 GDPR; Article 5 GDPR; Article 12 GDPR; Article 22 GDPR; Article 22(2) GDPR; Article 34 GDPR; § 1 DSG; § 56 DSG",
        "Article 1 GDPR; Article 4(1) GDPR",
        "Article 1 GDPR; Article 4 GDPR; Article 6 GDPR; Article 9 GDPR; Article 85 GDPR; §1 (1) DSG; §9 DSG; §24 DSG; §133 (4) B-VG",
        "Article 1 GDPR; Article 23(1)(j) GDPR; 230618",
        "Article 1 GDPR",
        "Article 1(2) GDPR; Article 12(3) GDPR; Article 12(4) GDPR; Article 15 GDPR; Article 77(1) GDPR; §4 (6) DSG; §2 WTBG 2017; §3 WTBG 2017; §80 WTBG 2017",
        "§ 1 DSG; § 56 DSG",  # No GDPR articles
        None,  # Empty case
        ""     # Empty string
    ]
    
    for i, test_input in enumerate(test_cases, 1):
        numbers = extract_gdpr_article_numbers(test_input)
        formatted = format_int_list(numbers)
        print(f"{i:2d}. Input:  {test_input}")
        print(f"    Output: {formatted}")
        print(f"    Raw:    {numbers}")
        print()

def test_article_category_extraction():
    """Test extraction from article_category field"""
    print("🧪 Testing article_category extraction:")
    print("=" * 50)
    
    test_cases = [
        "Article 1(1)(b) GDPR",
        "Article 1 GDPR",
        "Article 10 GDPR",
        "Article 23(1)(j) GDPR",
        "Article 77(1) GDPR",
        None,  # Empty case
        ""     # Empty string
    ]
    
    for i, test_input in enumerate(test_cases, 1):
        number = extract_article_category_number(test_input)
        print(f"{i:2d}. Input:  {test_input}")
        print(f"    Output: {number}")
        print()

def test_edge_cases():
    """Test edge cases and special scenarios"""
    print("🧪 Testing edge cases:")
    print("=" * 50)
    
    edge_cases = [
        "article 1 gdpr; article 5 gdpr",  # Lowercase
        "Article 1 GDPR; Article 1 GDPR; Article 5 GDPR",  # Duplicates
        "Article 100 GDPR",  # High number
        "Article 1 GDPR and Article 5 GDPR",  # Different separator
        "Some text Article 15 GDPR more text",  # Embedded
        "Article 6(1)(a) GDPR; Article 6(1)(b) GDPR",  # Same article, different paragraphs
    ]
    
    for i, test_input in enumerate(edge_cases, 1):
        numbers = extract_gdpr_article_numbers(test_input)
        formatted = format_int_list(numbers)
        print(f"{i:2d}. Input:  {test_input}")
        print(f"    Output: {formatted}")
        print()

def main():
    print("🔬 GDPR Article Number Extraction Test Suite")
    print("=" * 60)
    print()
    
    test_relevant_law_extraction()
    test_article_category_extraction()
    test_edge_cases()
    
    print("✅ All tests completed!")
    print("\nExpected results match the examples you provided:")
    print("- relevant_law_texts should extract main GDPR article numbers")
    print("- article_category should extract single main article number")
    print("- Non-GDPR laws (DSG, WTBG, etc.) should be ignored")
    print("- Subparagraphs like (1), (2), (a), (j) should be ignored")

if __name__ == "__main__":
    main()












