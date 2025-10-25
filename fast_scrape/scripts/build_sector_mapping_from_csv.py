#!/usr/bin/env python3
"""
Build or update a sector-mappings JSON from one or more CSVs.

This tool reads CSVs that contain an `id` column (e.g., DE_1, ES_3) and
sector columns (typically created by the enrich script with prefix `sector_`).
It merges all rows by `id` and outputs a JSON array with objects like:

{
  "id": "ES_3",
  "type": "PRIVATE",
  "type_confidence": 95,
  "core_activity": "J62.01 (Computer programming activities)",
  "core_activity_confidence": 75,
  "size": "SMALL OR MEDIUM",
  "size_confidence": 65
}

Usage example:

  python fast_scrape/scripts/build_sector_mapping_from_csv.py \
    --inputs fast_scrape/authorities_summary_enriched.csv fast_scrape/courts_summary_enriched.csv \
    --output fast_scrape/organized_mt/sector-mappings.json \
    --prefix sector_

If an id appears multiple times across CSVs, later files override earlier ones.
"""

import argparse
import csv
import json
from pathlib import Path
from typing import Dict, List


DEFAULT_FIELDS = [
    "type",
    "type_confidence",
    "core_activity",
    "core_activity_confidence",
    "size",
    "size_confidence",
]


def build_mapping_from_csv(inputs: List[Path], prefix: str, fields: List[str]) -> List[dict]:
    index: Dict[str, dict] = {}
    for csv_path in inputs:
        with csv_path.open("r", encoding="utf-8", newline="") as f:
            reader = csv.DictReader(f)
            if "id" not in (reader.fieldnames or []):
                raise SystemExit(f"Missing 'id' column in {csv_path}")
            for row in reader:
                rid = (row.get("id") or "").strip()
                if not rid:
                    continue
                entry = index.get(rid, {"id": rid})
                # copy any sector_* columns that match our fields
                for name in fields:
                    col = f"{prefix}{name}"
                    if col in row and row[col] != "":
                        # Try to cast numeric confidences
                        if name.endswith("_confidence"):
                            try:
                                entry[name] = int(float(row[col]))
                            except Exception:
                                entry[name] = row[col]
                        else:
                            entry[name] = row[col]
                index[rid] = entry
    return list(index.values())


def main() -> None:
    parser = argparse.ArgumentParser(description="Build sector-mappings JSON from CSVs with sector_* columns")
    parser.add_argument("--inputs", nargs="+", type=Path, required=True, help="Input CSV files")
    parser.add_argument("--output", type=Path, required=True, help="Output JSON path")
    parser.add_argument("--prefix", default="sector_", help="Prefix for sector columns in CSVs")
    parser.add_argument("--fields", nargs="*", default=DEFAULT_FIELDS, help="Field names to extract (without prefix)")

    args = parser.parse_args()

    mapping = build_mapping_from_csv(args.inputs, args.prefix, args.fields)
    # Sort by id for stability
    mapping.sort(key=lambda x: x.get("id", ""))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", encoding="utf-8") as f:
        json.dump(mapping, f, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    main()












