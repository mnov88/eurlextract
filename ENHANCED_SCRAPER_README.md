# Enhanced GDPRhub Scraper

An enhanced version of the GDPRhub scraper with significant performance improvements and new data extraction capabilities.

## 🚀 New Features

### 1. Full HTML Storage
- **Complete HTML preservation**: Every scraped page is saved as a full HTML file
- **Organized directory structure**: HTML files stored in `html_pages/` subdirectory  
- **Filename sanitization**: Safe filenames generated from page titles or URLs
- **Metadata tracking**: File paths, sizes, and SHA256 hashes tracked in CSV output
- **Deduplication**: Automatic filename collision handling

### 2. Machine Translation Extraction
- **Translation download**: Automatically downloads English machine translation pages
- **Content extraction**: Extracts the actual translated text content, not just links
- **Multiple extraction methods**: Tries various content selectors to find translation text
- **Storage**: Both HTML files and extracted text saved separately
- **Metadata**: Translation URLs, file info, and extraction timestamps tracked

### 3. Concurrent Processing 
- **Batch processing**: Cases processed in configurable batches for speed
- **Thread pooling**: Configurable number of concurrent workers (default: 3)
- **Respectful crawling**: Built-in delays and rate limiting to avoid overwhelming servers
- **Error handling**: Robust error handling for individual failed requests
- **Progress reporting**: Better progress indicators for batch operations

### 4. GDPR Article Number Extraction ⭐ NEW!
- **Integer extraction**: Extracts main GDPR article numbers as integers from text fields
- **Smart parsing**: Ignores subparagraphs and non-GDPR laws
- **Two new columns**: `article_category_int` and `relevant_law_texts_gdpr_int`
- **Post-processing support**: Can add columns to existing CSV files

## 📊 Enhanced Data Output

### Original Data (maintained):
- `gdprhub_cases.csv` - Main case data
- `gdprhub_cases.json` - JSON format case data  
- `gdprhub_case_articles.csv` - Case-to-GDPR article mappings
- `gdprhub_case_sources.csv` - Case source documents
- `gdprhub_summary_by_article.csv` - Summary statistics

### New Data Files:
- `gdprhub_html_files.csv` - Metadata for all saved HTML files
- `gdprhub_machine_translations.csv` - Machine translation metadata
- `gdprhub_machine_translations.json` - Full translation data with text content
- `html_pages/` directory - Full HTML files for all scraped pages
- `machine_translations/` directory - Downloaded translation pages

### Enhanced Columns ⭐ NEW!:
- `article_category_int` - Main GDPR article number as integer 
  - Example: "Article 6(1)(a) GDPR" → `6`
- `relevant_law_texts_gdpr_int` - GDPR article numbers from relevant law as integers
  - Example: "Article 1 GDPR; Article 5 GDPR; § 1 DSG" → `"1; 5"`

#### GDPR Integer Column Examples:

| Input (relevant_law_texts) | Output (relevant_law_texts_gdpr_int) |
|----------------------------|--------------------------------------|
| Article 1 GDPR; Article 5 GDPR; Article 12 GDPR; § 1 DSG | 1; 5; 12 |
| Article 1 GDPR; Article 4(1) GDPR | 1; 4 |
| Article 23(1)(j) GDPR; 230618 | 23 |
| § 1 DSG; § 56 DSG | (empty) |

| Input (article_category) | Output (article_category_int) |
|-------------------------|-------------------------------|
| Article 1(1)(b) GDPR | 1 |
| Article 10 GDPR | 10 |
| Article 23(1)(j) GDPR | 23 |

## 🛠 Usage

### CLI Usage (Recommended)

```bash
# Display all available options
python gdprhub_enhanced_scraper.py --help

# Quick test run (Article 6 only)
python gdprhub_enhanced_scraper.py --test

# Full scrape with default settings
python gdprhub_enhanced_scraper.py

# Custom article range
python gdprhub_enhanced_scraper.py --start-article 6 --end-article 10

# Fast scraping with more workers
python gdprhub_enhanced_scraper.py --max-workers 8 --output-dir fast_data

# Conservative scraping (fewer workers, safer for servers)
python gdprhub_enhanced_scraper.py --max-workers 2 --start-article 1 --end-article 10

# Disable features to save disk space
python gdprhub_enhanced_scraper.py --no-html-storage --no-machine-translations

# Quiet mode (minimal output)
python gdprhub_enhanced_scraper.py --quiet --test

# Custom output location and filenames
python gdprhub_enhanced_scraper.py --output-dir /my/path --cases-csv custom_cases.csv
```

### CLI Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--start-article` | int | 1 | Starting GDPR article number (1-99) |
| `--end-article` | int | 99 | Ending GDPR article number (1-99) |
| `--max-workers` | int | 3 | Concurrent workers (1-20) |
| `--output-dir` | str | gdprhub_enhanced_data | Output directory |
| `--cases-csv` | str | gdprhub_cases.csv | Cases CSV filename |
| `--cases-json` | str | gdprhub_cases.json | Cases JSON filename |
| `--no-html-storage` | flag | False | Disable HTML file storage |
| `--no-machine-translations` | flag | False | Skip machine translation extraction |
| `--verbose, -v` | flag | False | Enable verbose output |
| `--quiet, -q` | flag | False | Suppress output except errors |
| `--test` | flag | False | Run test mode (Article 6 only) |

### Post-Processing Existing Files ⭐ NEW!

Add GDPR integer columns to existing CSV files:

```bash
# Add columns to existing CSV
python add_gdpr_int_columns.py gdprhub_cases.csv

# Specify output filename
python add_gdpr_int_columns.py gdprhub_cases.csv --output enhanced_cases.csv

# Show help
python add_gdpr_int_columns.py --help
```

### Python API Usage
```python
from gdprhub_enhanced_scraper import EnhancedGDPRHubScraper

# Create scraper with custom settings
scraper = EnhancedGDPRHubScraper(
    max_workers=3,           # Number of concurrent workers
    output_dir="my_data"     # Output directory name
)

# Run full scrape (Articles 1-99)
scraper.run(1, 99)

# Save all outputs (includes new integer columns automatically)
scraper.save_outputs()
```

## 📁 Output Structure

```
gdprhub_enhanced_data/
├── gdprhub_cases.csv (with new integer columns!)
├── gdprhub_cases.json
├── gdprhub_case_articles.csv
├── gdprhub_case_sources.csv
├── gdprhub_summary_by_article.csv
├── gdprhub_html_files.csv
├── gdprhub_machine_translations.csv
├── gdprhub_machine_translations.json
├── html_pages/
│   ├── APD_GBA_Belgium_45_2023.html
│   ├── Another_Case_Name.html
│   └── ...
└── machine_translations/
    ├── MT_APD_GBA_Belgium_45_2023.html
    ├── MT_Another_Case_Name.html
    └── ...
```

## 🧪 Testing

### Test Article Extraction
```bash
python test_article_extraction.py
```

### Test Enhanced Scraper
```bash
python test_enhanced_scraper.py
```

### Test Post-Processing
```bash
# Create a sample CSV first, then test post-processing
python add_gdpr_int_columns.py --help
```

## ⚡ Performance Comparison

**Original Scraper:**
- Sequential processing: ~2-3 seconds per case
- No HTML storage
- Basic machine translation links only
- No integer extraction
- Estimated total time: 8-12 hours for full run

**Enhanced Scraper:**
- Concurrent processing: ~0.5-1 second per case (with 3 workers)
- Full HTML and translation storage
- Rich metadata extraction
- GDPR integer columns
- Estimated total time: 2-4 hours for full run

## 🔧 Technical Features

### GDPR Article Number Extraction
- **Regex-based parsing**: Robust pattern matching for "Article X GDPR"
- **Deduplication**: Removes duplicate article numbers
- **Sorting**: Consistent ordering of extracted numbers
- **Non-GDPR filtering**: Ignores DSG, WTBG, and other non-GDPR laws
- **Subparagraph removal**: Strips (1), (2), (a), (j) etc. to get main article numbers

### Performance Optimizations
- **Concurrent HTTP requests**: Multiple cases processed simultaneously
- **Batch processing**: Intelligent batching to balance speed vs. server load
- **Connection reuse**: Session-based HTTP connections
- **Memory efficiency**: Streaming file writes for large HTML content

### Error Handling
- **Graceful degradation**: Failed requests don't stop entire process
- **Retry logic**: Automatic retries for network errors
- **Thread safety**: Safe concurrent access to shared data structures
- **Comprehensive logging**: Detailed error reporting

## 📋 Requirements

Same as original scraper:
- requests
- beautifulsoup4
- pandas
- Standard library modules

No additional dependencies required for new features.

## 🤝 Compatibility

- **Fully backward compatible** with original scraper
- **Enhanced CSV output** with additional columns (existing tools still work)
- **Post-processing support** for existing data files
- **Drop-in replacement** for original scraper