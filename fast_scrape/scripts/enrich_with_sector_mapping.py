#!/usr/bin/env python3
"""
Enrich a CSV with sector mapping data from a JSON file.

Usage examples:

  python fast_scrape/scripts/enrich_with_sector_mapping.py \
    --input fast_scrape/authorities_summary.csv \
    --mapping fast_scrape/organized_mt/sector-mappings.json \
    --output fast_scrape/authorities_summary_enriched.csv \
    --id-column id \
    --prefix sector_

  python fast_scrape/scripts/enrich_with_sector_mapping.py \
    --input fast_scrape/courts_summary.csv \
    --mapping fast_scrape/organized_mt/sector-mappings.json \
    --output fast_scrape/courts_summary_enriched.csv

By default, the script copies these fields from the mapping JSON for each id:
  - type
  - type_confidence
  - core_activity
  - core_activity_confidence
  - size
  - size_confidence

They will be written to the output CSV with the given --prefix (default: sector_).
Missing matches are filled with empty strings unless --fill-unknown is provided.
"""

import argparse
import csv
import json
from pathlib import Path
from typing import Dict, List


DEFAULT_FIELDS: List[str] = [
    "type",
    "type_confidence",
    "core_activity",
    "core_activity_confidence",
    "size",
    "size_confidence",
]


def load_mapping(mapping_path: Path, id_key: str = "id") -> Dict[str, dict]:
    with mapping_path.open("r", encoding="utf-8") as f:
        data = json.load(f)
    index: Dict[str, dict] = {}
    for item in data:
        if isinstance(item, dict) and id_key in item and item[id_key]:
            index[str(item[id_key]).strip()] = item
    return index


def enrich(
    input_csv: Path,
    output_csv: Path,
    mapping_index: Dict[str, dict],
    id_column: str,
    fields: List[str],
    prefix: str,
    fill_unknown: bool,
) -> None:
    with input_csv.open("r", encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f)
        base_fields = reader.fieldnames or []
        if id_column not in base_fields:
            raise SystemExit(f"Missing '{id_column}' column in {input_csv}")

        added_fields = [f"{prefix}{name}" for name in fields]
        out_fields = base_fields + [c for c in added_fields if c not in base_fields]

        rows_out: List[dict] = []
        for row in reader:
            record_id = (row.get(id_column) or "").strip()
            mapping = mapping_index.get(record_id)
            if mapping:
                for name in fields:
                    row[f"{prefix}{name}"] = mapping.get(name, "")
            else:
                for name in fields:
                    row.setdefault(f"{prefix}{name}", ("Unknown" if fill_unknown else ""))
            rows_out.append(row)

    with output_csv.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=out_fields)
        writer.writeheader()
        writer.writerows(rows_out)


def main() -> None:
    parser = argparse.ArgumentParser(description="Enrich a CSV with sector mapping data from JSON")
    parser.add_argument("--input", required=True, type=Path, help="Path to input CSV")
    parser.add_argument("--mapping", required=True, type=Path, help="Path to mapping JSON (list of objects with 'id')")
    parser.add_argument("--output", required=True, type=Path, help="Path to output CSV")
    parser.add_argument("--id-column", default="id", help="Name of id column in the input CSV")
    parser.add_argument("--fields", nargs="*", default=DEFAULT_FIELDS, help="Fields to copy from JSON mapping")
    parser.add_argument("--prefix", default="sector_", help="Prefix for added columns in output CSV")
    parser.add_argument("--fill-unknown", action="store_true", help="Fill missing mappings with 'Unknown' instead of empty")

    args = parser.parse_args()

    mapping_index = load_mapping(args.mapping)
    enrich(
        input_csv=args.input,
        output_csv=args.output,
        mapping_index=mapping_index,
        id_column=args.id_column,
        fields=args.fields,
        prefix=args.prefix,
        fill_unknown=args.fill_unknown,
    )


if __name__ == "__main__":
    main()


