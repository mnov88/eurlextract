import io
import json
from typing import Any, Dict, Iterable, List, Optional, Tuple

import pandas as pd
import streamlit as st


def decode_bytes_to_text(file_bytes: bytes) -> str:
    """Decode uploaded file bytes into text using utf-8 with fallbacks."""
    try:
        return file_bytes.decode("utf-8")
    except UnicodeDecodeError:
        try:
            return file_bytes.decode("utf-16")
        except UnicodeDecodeError:
            return file_bytes.decode("latin-1", errors="ignore")


def is_probably_jsonl(text: str, file_name: Optional[str]) -> bool:
    """Heuristic to detect JSONL versus single JSON."""
    if file_name and file_name.lower().endswith(".jsonl"):
        return True
    stripped = text.lstrip()
    if stripped.startswith("[") or stripped.startswith("{"):
        return False
    lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
    if not lines:
        return False
    if all(ln.startswith("{") and ln.endswith("}") for ln in lines[: min(5, len(lines))]):
        return True
    return False


def iter_json_records(text: str, file_name: Optional[str]) -> Iterable[Dict[str, Any]]:
    """Yield JSON records from either JSONL or JSON (list or object)."""
    if is_probably_jsonl(text, file_name):
        for ln in text.splitlines():
            ln = ln.strip()
            if not ln:
                continue
            try:
                yield json.loads(ln)
            except json.JSONDecodeError:
                continue
        return

    try:
        data = json.loads(text)
    except json.JSONDecodeError:
        return

    if isinstance(data, list):
        for item in data:
            if isinstance(item, dict):
                yield item
    elif isinstance(data, dict):
        yield data


def find_first_string_with_answers_block(value: Any) -> Optional[str]:
    """Recursively search a nested structure for an answers block starting with 'Answer 1:'."""
    if isinstance(value, str):
        lowered = value.lower()
        if "answer 1:" in lowered:
            return value
        return None
    if isinstance(value, dict):
        # Prefer content tagged as output_text
        if value.get("type") == "output_text" and isinstance(value.get("text"), str):
            text = value.get("text")
            if text and "Answer 1:" in text:
                return text
        for v in value.values():
            found = find_first_string_with_answers_block(v)
            if found:
                return found
    elif isinstance(value, list):
        for v in value:
            found = find_first_string_with_answers_block(v)
            if found:
                return found
    return None


def extract_answers_text(record: Dict[str, Any]) -> Optional[str]:
    """Extract the multi-line answers text from a record, handling multiple known shapes."""
    # Fast path via the documented nested location
    body = (
        record.get("response", {})
        .get("body", {})
    )
    # Try known shapes first
    output = body.get("output")
    if isinstance(output, list):
        text = find_first_string_with_answers_block(output)
        if text:
            return text

    # Generic recursive search across the body
    text = find_first_string_with_answers_block(body)
    if text:
        return text

    # Fallback: search entire record
    return find_first_string_with_answers_block(record)


def extract_custom_id(record: Dict[str, Any]) -> Optional[str]:
    """Prefer the top-level custom_id; fallback to top-level id if needed."""
    value = record.get("custom_id")
    if isinstance(value, str) and value.strip():
        return value.strip()
    value = record.get("id")
    if isinstance(value, str) and value.strip():
        return value.strip()
    return None


def records_to_dataframe(records: Iterable[Dict[str, Any]]) -> pd.DataFrame:
    """Convert iterable of raw records into a normalized DataFrame with id and text columns."""
    rows: List[Dict[str, Any]] = []
    for rec in records:
        cid = extract_custom_id(rec)
        text = extract_answers_text(rec)
        if cid is None and text is None:
            continue
        rows.append({"id": cid, "text": text})
    return pd.DataFrame(rows, columns=["id", "text"]) if rows else pd.DataFrame(columns=["id", "text"])


st.set_page_config(page_title="JSON/JSONL → CSV (custom_id, answers)", page_icon="📄", layout="centered")
st.title("JSON/JSONL → CSV: Extract custom_id and Answers Text")

uploaded = st.file_uploader("Upload a JSON or JSONL file", type=["json", "jsonl"]) 

if uploaded is not None:
    raw_bytes = uploaded.read()
    text = decode_bytes_to_text(raw_bytes)

    records = list(iter_json_records(text, uploaded.name))
    df = records_to_dataframe(records)

    st.caption(f"Parsed {len(records)} records. Extracted {len(df)} rows with either id or text present.")

    if not df.empty:
        st.subheader("Preview")
        st.dataframe(df.head(50), use_container_width=True)

        csv_bytes = df.to_csv(index=False).encode("utf-8")
        default_name = uploaded.name.rsplit(".", 1)[0] + ".csv"
        st.download_button(
            label="Download CSV",
            data=csv_bytes,
            file_name=default_name,
            mime="text/csv",
        )
    else:
        st.info("No rows to display. Could not find 'custom_id' or answers text in the uploaded data.")
else:
    st.write("Upload a file to begin. The app will locate the 50-line answers block per record and output a CSV with columns 'id' (from custom_id) and 'text'.")












