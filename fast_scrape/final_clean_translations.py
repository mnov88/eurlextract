#!/usr/bin/env python3

import sys
import re
import os
from pathlib import Path
from typing import Optional, Tuple

HEADER_PATTERNS = [
    r"^##\s+English Machine Translation of the Decision\s*$",
    r"^##\s+English Machine Translation\b.*$",
]

FENCE_START_RE = re.compile(r"^\s*```.*$", re.MULTILINE)
FENCE_END_RE = re.compile(r"^\s*```\s*$", re.MULTILINE)


def find_header_index(text: str) -> Optional[int]:
    for pat in HEADER_PATTERNS:
        m = re.search(pat, text, flags=re.MULTILINE)
        if m:
            return m.end()
    return None


def extract_first_fenced_block(text: str, start_pos: int = 0) -> Optional[Tuple[int, int, str]]:
    """Find the first fenced code block (``` ... ```) in text starting at start_pos.
    Returns (block_start_idx, block_end_idx, inner_content) or None.
    """
    m_start = FENCE_START_RE.search(text, pos=start_pos)
    if not m_start:
        return None
    # Search for the closing fence after the start
    m_end = FENCE_END_RE.search(text, pos=m_start.end())
    if not m_end:
        return None
    # Content between start and end fences (exclude newline right after opening if present)
    inner = text[m_start.end():m_end.start()]
    # Normalize leading/trailing newlines
    inner = inner.strip('\n')
    return (m_start.start(), m_end.end(), inner)


def extract_translation(text: str) -> Optional[str]:
    """Extract only the English machine translation content from markdown text.
    Strategy:
      1) Find the 'English Machine Translation' header (if present)
      2) From there, capture the first fenced code block (``` ... ```)
      3) Fallback: if no header, capture the first fenced code block anywhere
    Returns the inner content of the fenced block (without ```), stripped.
    """
    idx = find_header_index(text)
    if idx is not None:
        block = extract_first_fenced_block(text, start_pos=idx)
        if block:
            return block[2].strip()
        # Fallback within section (no fence) → try until next H2
        # Find next H2 after header
        next_h2 = re.search(r"^##\s+", text[idx:], flags=re.MULTILINE)
        end_idx = idx + next_h2.start() if next_h2 else len(text)
        section = text[idx:end_idx].strip()
        return section if section else None

    # No header found → take the first fenced block anywhere
    block = extract_first_fenced_block(text, start_pos=0)
    if block:
        return block[2].strip()

    # Last resort: None
    return None


def clean_file(input_path: Path, output_path: Path) -> Tuple[bool, str]:
    try:
        raw = input_path.read_text(encoding='utf-8')
    except Exception as e:
        return False, f"read_error: {e}"

    content = extract_translation(raw)
    if content is None or content.strip() == "":
        return False, "no_translation_found"

    # Ensure parent dir
    output_path.parent.mkdir(parents=True, exist_ok=True)

    try:
        # Write only the translation content, no fences, no headers
        output_path.write_text(content.rstrip() + "\n", encoding='utf-8')
        return True, "ok"
    except Exception as e:
        return False, f"write_error: {e}"


def main():
    # Args: [input_dir] [output_dir]
    if len(sys.argv) >= 3:
        in_dir = Path(sys.argv[1])
        out_dir = Path(sys.argv[2])
    else:
        # Defaults aligned with project structure
        in_dir = Path("/Users/milos/Downloads/eurlextract/fast_scrape/machine_translations_md_clean")
        out_dir = Path("/Users/milos/Downloads/eurlextract/fast_scrape/machine_translations_md_final")

    if not in_dir.exists() or not in_dir.is_dir():
        print(f"❌ Input directory not found or not a directory: {in_dir}")
        sys.exit(1)

    out_dir.mkdir(parents=True, exist_ok=True)

    md_files = sorted([p for p in in_dir.iterdir() if p.suffix.lower() == '.md'])
    total = len(md_files)
    ok = 0
    failed = 0
    skipped = 0

    for i, md in enumerate(md_files, start=1):
        rel_name = md.name
        out_path = out_dir / rel_name
        success, msg = clean_file(md, out_path)
        if success:
            ok += 1
        else:
            failed += 1
            # Create an empty marker or copy nothing; report
            # Do not write partial content
        if i % 100 == 0 or i == total:
            print(f"Progress: {i}/{total} (ok={ok}, failed={failed})")

    print("=" * 60)
    print(f"Processed: {total}")
    print(f"  ✅ Cleaned: {ok}")
    print(f"  ❌ Failed:  {failed}")
    print(f"Output dir: {out_dir}")


if __name__ == "__main__":
    main()











