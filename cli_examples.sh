#!/bin/bash
# CLI Examples for Enhanced GDPRhub Scraper

echo "🚀 Enhanced GDPRhub Scraper - CLI Examples"
echo "=========================================="
echo ""

echo "📖 Display help:"
echo "python gdprhub_enhanced_scraper.py --help"
echo ""

echo "🧪 Quick test (Article 6 only):"
echo "python gdprhub_enhanced_scraper.py --test"
echo ""

echo "🎯 Custom article range:"
echo "python gdprhub_enhanced_scraper.py --start-article 6 --end-article 10"
echo ""

echo "⚡ Fast scraping with more workers:"
echo "python gdprhub_enhanced_scraper.py --max-workers 8 --start-article 1 --end-article 20"
echo ""

echo "💾 Custom output directory:"
echo "python gdprhub_enhanced_scraper.py --output-dir /path/to/my/data --start-article 6 --end-article 6"
echo ""

echo "🔇 Quiet mode (minimal output):"
echo "python gdprhub_enhanced_scraper.py --quiet --start-article 6 --end-article 6"
echo ""

echo "📝 Disable HTML storage (save disk space):"
echo "python gdprhub_enhanced_scraper.py --no-html-storage --start-article 6 --end-article 6"
echo ""

echo "🌐 Skip machine translations:"
echo "python gdprhub_enhanced_scraper.py --no-machine-translations --start-article 6 --end-article 6"
echo ""

echo "🎛️ Conservative scraping (fewer workers, safer):"
echo "python gdprhub_enhanced_scraper.py --max-workers 2 --start-article 1 --end-article 10"
echo ""

echo "📊 Custom output filenames:"
echo "python gdprhub_enhanced_scraper.py --cases-csv my_cases.csv --cases-json my_cases.json --test"
echo ""

echo "🔧 Full production run:"
echo "python gdprhub_enhanced_scraper.py --max-workers 5 --output-dir production_data"
echo ""

echo "Note: Use --help to see all available options and detailed descriptions."














