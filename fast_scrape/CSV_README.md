## CSV and data structuring utilities - quick guide

Location of CLI scripts:
- `fast_scrape/scripts/enrich_with_sector_mapping.py`
- `fast_scrape/scripts/build_sector_mapping_from_csv.py`

Prerequisites:
- Python 3.8+ available as `python3`

### 1) Enrich CSV from a JSON mapping
Adds sector columns to a CSV by joining on an `id` column.

Default mapping fields copied from JSON (written with `sector_` prefix):
- `sector_type`, `sector_type_confidence`
- `sector_core_activity`, `sector_core_activity_confidence`
- `sector_size`, `sector_size_confidence`

Required input CSV column:
- `id` (e.g., `ES_3`, `DE_12`)

Basic usage (authorities):
```bash
python3 fast_scrape/scripts/enrich_with_sector_mapping.py \
  --input fast_scrape/authorities_summary.csv \
  --mapping fast_scrape/organized_mt/sector-mappings.json \
  --output fast_scrape/authorities_summary_enriched.csv \
  --fill-unknown
```

Basic usage (courts):
```bash
python3 fast_scrape/scripts/enrich_with_sector_mapping.py \
  --input fast_scrape/courts_summary.csv \
  --mapping fast_scrape/organized_mt/sector-mappings.json \
  --output fast_scrape/courts_summary_enriched.csv
```

Common flags:
- `--id-column` name of id field in CSV (default: `id`)
- `--fields` names to copy from JSON (default: type, type_confidence, core_activity, core_activity_confidence, size, size_confidence)
- `--prefix` prefix for added columns (default: `sector_`)
- `--fill-unknown` set unmatched ids to `Unknown` instead of empty

### 2) Build or refresh the JSON mapping from CSVs
Creates/updates a JSON mapping by reading `sector_*` columns from one or more CSVs and merging by `id`.

Basic usage (merge authorities and courts, later overrides earlier on conflicts):
```bash
python3 fast_scrape/scripts/build_sector_mapping_from_csv.py \
  --inputs fast_scrape/authorities_summary_enriched.csv fast_scrape/courts_summary_enriched.csv \
  --output fast_scrape/organized_mt/sector-mappings.json
```

Common flags:
- `--prefix` sector column prefix in CSVs (default: `sector_`)
- `--fields` field names to extract without prefix (default: type, type_confidence, core_activity, core_activity_confidence, size, size_confidence)

### Typical workflows

- Refresh enriched CSV after mapping JSON is updated:
```bash
python3 fast_scrape/scripts/enrich_with_sector_mapping.py \
  --input fast_scrape/authorities_summary.csv \
  --mapping fast_scrape/organized_mt/sector-mappings.json \
  --output fast_scrape/authorities_summary_enriched.csv \
  --fill-unknown
```

- Update mapping JSON from the latest enriched CSVs:
```bash
python3 fast_scrape/scripts/build_sector_mapping_from_csv.py \
  --inputs fast_scrape/authorities_summary_enriched.csv fast_scrape/courts_summary_enriched.csv \
  --output fast_scrape/organized_mt/sector-mappings.json
```

- Chain both (rebuild JSON, then re-enrich):
```bash
python3 fast_scrape/scripts/build_sector_mapping_from_csv.py \
  --inputs fast_scrape/authorities_summary_enriched.csv fast_scrape/courts_summary_enriched.csv \
  --output fast_scrape/organized_mt/sector-mappings.json

python3 fast_scrape/scripts/enrich_with_sector_mapping.py \
  --input fast_scrape/authorities_summary.csv \
  --mapping fast_scrape/organized_mt/sector-mappings.json \
  --output fast_scrape/authorities_summary_enriched.csv
```

### Upstream CSVs (reference schemas)

Authorities CSV typical columns:
- `id`, `file_name`, `source_path`, `jurisdiction`, `authority`, `title`, `relevant_law`, `gdpr_articles`, `type`, `outcome`, `started`, `decided`, `published`, `fine`, `fine_amount`, `fine_currency`, `parties`, `national_case_number_name`, `european_case_law_identifier`, `original_languages`, `original_source`

Courts CSV typical columns:
- `id`, `file_name`, `source_path`, `jurisdiction`, `court`, `title`, `relevant_law`, `gdpr_articles`, `decided`, `published`, `fine`, `fine_amount`, `fine_currency`, `parties`, `national_case_number_name`, `european_case_law_identifier`, `appeal_from`, `appeal_to`, `original_languages`, `original_source`

Notes:
- Dates are normalized to `dd/mm/yyyy` where present.
- `gdpr_articles` contains unique article numbers (integers) parsed from `relevant_law` (subparagraphs ignored).
- Fines are split into `fine_amount` (integer if parsable) and `fine_currency` (ISO code where detected).

### Troubleshooting
- "Missing 'id' column" → ensure the input CSV includes an `id` field (e.g., `DE_1`).
- No changes after enrich → verify the `id` matches entries in the JSON mapping.
- Python not found → use `python3` instead of `python`.












