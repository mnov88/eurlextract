#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Enhanced GDPRhub Articles 1–99 Scraper
- Seeds Category:Article_1_GDPR ... Category:Article_99_GDPR directly
- Recurses subcategories (paragraphs/letters) + handles pagination
- Extracts rich, normalized case data + many-to-many mapping to GDPR provisions
- Robust to missing infobox fields (no IndexError on empty lists)
- Outputs tidy CSV/JSON for downstream analysis
- NEW: Saves full HTML content of all scraped pages
- NEW: Downloads and extracts machine translation content
- NEW: Concurrent HTTP requests for faster performance

Author: AI Assistant
Date: 2025-08-29 (Enhanced)
"""

import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import random
import re
import json
import hashlib
import os
import argparse
from pathlib import Path
from urllib.parse import urljoin, unquote, urlparse
from datetime import datetime, timezone
from typing import List, Dict, Optional, Tuple, Any
from concurrent.futures import ThreadPoolExecutor, as_completed
import threading

# --------------------------- Utilities ---------------------------

def iso_or_none(s: Optional[str]) -> Optional[str]:
    if not s:
        return None
    s = s.strip()
    if not s or s.lower() in {"n/a", "na", "unknown"}:
        return None
    try:
        for fmt in ("%d %B %Y", "%d %b %Y", "%d-%m-%Y", "%d/%m/%Y", "%Y-%m-%d"):
            try:
                return datetime.strptime(s, fmt).date().isoformat()
            except ValueError:
                pass
        for fmt in ("%B %Y", "%b %Y", "%m/%Y", "%Y-%m"):
            try:
                dt = datetime.strptime(s, fmt)
                return f"{dt.year:04d}-{dt.month:02d}-01"
            except ValueError:
                pass
        if re.fullmatch(r"\d{4}", s):
            return f"{s}-01-01"
    except Exception:
        return None
    return None


def money_to_eur(s: Optional[str]) -> Optional[float]:
    if not s:
        return None
    s = s.strip()
    if not s or s.lower() in {"n/a", "na", "unknown"}:
        return None
    if "€" in s or "eur" in s.lower():
        m = re.findall(r"[\d]+", s.replace(",", ""))
        if not m:
            return None
        try:
            return float("".join(m))
        except Exception:
            return None
    return None


def text_join(items: Optional[List[str]]) -> str:
    return "; ".join([i for i in (items or []) if i])


def clean_csv_text(text: Optional[str]) -> Optional[str]:
    """
    Clean text for safe CSV storage by normalizing whitespace and removing problematic characters.
    """
    if not text:
        return text
    
    # Replace multiple whitespace (including newlines) with single spaces
    cleaned = re.sub(r'\s+', ' ', text.strip())
    
    # Limit length to prevent extremely long cells
    if len(cleaned) > 10000:
        cleaned = cleaned[:10000] + "... [truncated]"
    
    return cleaned


def rand_sleep(a=0.4, b=1.0):
    time.sleep(random.uniform(a, b))


def sha256_hex(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()


def sanitize_filename(name: str) -> str:
    """Sanitize filename for safe storage"""
    # Remove or replace problematic characters
    sanitized = re.sub(r'[<>:"/\\|?*]', '_', name)
    sanitized = re.sub(r'[^\w\s\-_\.]', '', sanitized)
    sanitized = re.sub(r'\s+', '_', sanitized)
    return sanitized[:200]  # Limit length


def extract_gdpr_article_numbers(text: Optional[str]) -> List[int]:
    """
    Extract main GDPR article numbers (integers only) from text.
    
    Examples:
    - "Article 1 GDPR; Article 5 GDPR; Article 12 GDPR" -> [1, 5, 12]
    - "Article 1(2) GDPR; Article 12(3) GDPR" -> [1, 12]
    - "Article 23(1)(j) GDPR" -> [23]
    - "§ 1 DSG; § 56 DSG" -> [] (no GDPR articles)
    """
    if not text:
        return []
    
    # Pattern to match "Article X GDPR" (with optional parenthetical parts)
    # Matches: Article 1 GDPR, Article 12(3) GDPR, Article 23(1)(j) GDPR
    pattern = r'Article\s+(\d+)(?:\([^)]*\))*\s+GDPR'
    matches = re.findall(pattern, text, re.IGNORECASE)
    
    # Convert to integers and remove duplicates while preserving order
    seen = set()
    result = []
    for match in matches:
        article_num = int(match)
        if article_num not in seen:
            seen.add(article_num)
            result.append(article_num)
    
    return sorted(result)  # Sort for consistent output


def extract_article_category_number(text: Optional[str]) -> Optional[int]:
    """
    Extract the main GDPR article number from article_category field.
    
    Examples:
    - "Article 1(1)(b) GDPR" -> 1
    - "Article 10 GDPR" -> 10
    - "Article 23(1)(j) GDPR" -> 23
    - None or empty -> None
    """
    if not text:
        return None
    
    # Pattern to match "Article X" at the start (with optional parenthetical parts)
    pattern = r'^Article\s+(\d+)'
    match = re.search(pattern, text, re.IGNORECASE)
    
    if match:
        return int(match.group(1))
    
    return None


def format_int_list(numbers: List[int]) -> str:
    """Format list of integers as semicolon-separated string"""
    if not numbers:
        return ""
    return "; ".join(map(str, numbers))


# --------------------------- Enhanced Scraper ---------------------------

class EnhancedGDPRHubScraper:
    def __init__(self, max_workers: int = 5, output_dir: str = "gdprhub_data"):
        self.base_url = "https://gdprhub.eu"
        self.session = requests.Session()
        self.session.headers.update({
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/115.0 Safari/537.36"
            ),
            "Accept-Language": "en;q=0.9,*;q=0.8"
        })
        
        # Concurrency settings
        self.max_workers = max_workers
        self.lock = threading.Lock()
        
        # Output directory setup
        self.output_dir = Path(output_dir)
        self.html_dir = self.output_dir / "html_pages"
        self.translations_dir = self.output_dir / "machine_translations"
        self._setup_directories()

        # Storage
        self.visited_case_pages = set()  # dedupe on case URL
        self.visited_cat_pages = set()   # dedupe category/pagination recursion
        self.cases: List[Dict[str, Any]] = []
        self.case_articles: List[Dict[str, Any]] = []
        self.case_sources: List[Dict[str, Any]] = []
        self.html_files: List[Dict[str, Any]] = []  # NEW: Track HTML files
        self.machine_translations: List[Dict[str, Any]] = []  # NEW: Track translations
        
    def _setup_directories(self):
        """Create necessary directories for output"""
        self.output_dir.mkdir(exist_ok=True)
        self.html_dir.mkdir(exist_ok=True)
        self.translations_dir.mkdir(exist_ok=True)

    # ----------------------- HTTP helpers -----------------------

    def get_soup_and_bytes(self, url: str, retries: int = 3, timeout: int = 15) -> Tuple[Optional[BeautifulSoup], Optional[bytes]]:
        last_exc = None
        for attempt in range(retries):
            try:
                resp = self.session.get(url, timeout=timeout, allow_redirects=True)
                resp.raise_for_status()
                content = resp.content
                soup = BeautifulSoup(content, "html.parser")
                return soup, content
            except requests.RequestException as e:
                last_exc = e
                time.sleep(1.5 * (attempt + 1))
        print(f"❌ Failed to fetch: {url} ({last_exc})")
        return None, None

    def get_soup(self, url: str, **kw) -> Optional[BeautifulSoup]:
        soup, _ = self.get_soup_and_bytes(url, **kw)
        return soup

    def fetch_multiple_urls(self, urls: List[str]) -> Dict[str, Tuple[Optional[BeautifulSoup], Optional[bytes]]]:
        """Fetch multiple URLs concurrently"""
        results = {}
        
        with ThreadPoolExecutor(max_workers=self.max_workers) as executor:
            # Submit all requests
            future_to_url = {
                executor.submit(self.get_soup_and_bytes, url): url 
                for url in urls
            }
            
            # Collect results
            for future in as_completed(future_to_url):
                url = future_to_url[future]
                try:
                    soup, content = future.result()
                    results[url] = (soup, content)
                    # Add small delay to be respectful
                    time.sleep(0.1)
                except Exception as e:
                    print(f"❌ Error fetching {url}: {e}")
                    results[url] = (None, None)
                    
        return results

    # ---------------------- File Storage helpers ---------------------

    def save_html_file(self, url: str, content: bytes, page_title: str = None) -> Optional[str]:
        """Save HTML content to file and return the file path"""
        if not content:
            return None
            
        try:
            # Create filename from URL or title
            if page_title:
                filename = sanitize_filename(page_title) + ".html"
            else:
                parsed = urlparse(url)
                path_parts = parsed.path.strip('/').split('/')
                filename = sanitize_filename('_'.join(path_parts)) + ".html"
                
            # Ensure unique filename
            file_path = self.html_dir / filename
            counter = 1
            original_path = file_path
            while file_path.exists():
                stem = original_path.stem
                suffix = original_path.suffix
                file_path = self.html_dir / f"{stem}_{counter}{suffix}"
                counter += 1
                
            # Save file
            with open(file_path, 'wb') as f:
                f.write(content)
                
            # Track the saved file
            with self.lock:
                self.html_files.append({
                    "url": url,
                    "file_path": str(file_path.relative_to(self.output_dir)),
                    "filename": file_path.name,
                    "file_size": len(content),
                    "html_sha256": sha256_hex(content),
                    "saved_at": datetime.now(timezone.utc).replace(microsecond=0).isoformat()
                })
                
            return str(file_path.relative_to(self.output_dir))
            
        except Exception as e:
            print(f"❌ Error saving HTML for {url}: {e}")
            return None

    def extract_and_save_machine_translation(self, case_url: str, emt_url: str, page_title: str = None) -> Optional[Dict[str, Any]]:
        """Download and extract machine translation content"""
        if not emt_url:
            return None
            
        try:
            soup, content = self.get_soup_and_bytes(emt_url)
            if not soup or not content:
                return None
                
            # Save the HTML file
            mt_filename = f"MT_{sanitize_filename(page_title or 'translation')}.html"
            mt_file_path = self.translations_dir / mt_filename
            
            # Ensure unique filename
            counter = 1
            original_path = mt_file_path
            while mt_file_path.exists():
                stem = original_path.stem
                suffix = original_path.suffix
                mt_file_path = self.translations_dir / f"{stem}_{counter}{suffix}"
                counter += 1
                
            with open(mt_file_path, 'wb') as f:
                f.write(content)
                
            # Extract text content from the translation
            # Look for main content areas
            translation_text = None
            
            # Try different selectors for content
            content_selectors = [
                "#mw-content-text",
                ".mw-parser-output", 
                "#bodyContent",
                "pre",  # Often machine translations are in <pre> tags
                ".mw-body-content"
            ]
            
            for selector in content_selectors:
                content_element = soup.select_one(selector)
                if content_element:
                    translation_text = content_element.get_text(separator="\n", strip=True)
                    if translation_text and len(translation_text) > 100:  # Ensure we got substantial content
                        break
                        
            if not translation_text:
                # Fallback: get all text from body
                body = soup.find('body')
                if body:
                    translation_text = body.get_text(separator="\n", strip=True)
                    
            translation_record = {
                "case_url": case_url,
                "translation_url": emt_url,
                "file_path": str(mt_file_path.relative_to(self.output_dir)),
                "filename": mt_file_path.name,
                "file_size": len(content),
                "html_sha256": sha256_hex(content),
                "translation_text": clean_csv_text(translation_text),
                "extracted_at": datetime.now(timezone.utc).replace(microsecond=0).isoformat()
            }
            
            with self.lock:
                self.machine_translations.append(translation_record)
                
            return translation_record
            
        except Exception as e:
            print(f"❌ Error extracting machine translation from {emt_url}: {e}")
            return None

    # ---------------------- Parsing helpers ---------------------

    def parse_infobox(self, soup: BeautifulSoup) -> Dict[str, Dict[str, Any]]:
        """
        Returns dict: key -> {'texts': [...], 'links': [{'text':..., 'url':...}, ...]}
        """
        info = {}
        box = soup.find("table", class_=["wikitable", "infobox"])
        if not box:
            return info
        for tr in box.find_all("tr"):
            cells = tr.find_all(["th", "td"])
            if len(cells) >= 2:
                key = cells[0].get_text(strip=True).rstrip(":")
                val_cell = cells[1]
                texts = [
                    t.strip()
                    for t in val_cell.get_text(separator="|", strip=True).split("|")
                    if t.strip()
                ]
                links = []
                for a in val_cell.find_all("a", href=True):
                    links.append({
                        "text": a.get_text(strip=True),
                        "url": urljoin(self.base_url, a["href"])
                    })
                info[key] = {"texts": texts, "links": links}
        return info

    # ---- SAFE getters (fixes IndexError on empty 'texts' lists) ----

    def info_first_text(self, info: Dict[str, Dict[str, Any]], *keys: str) -> Optional[str]:
        """
        Return the first non-empty text for the first present key; else None.
        """
        for key in keys:
            entry = info.get(key) or {}
            texts = entry.get("texts") or []
            if texts:
                return texts[0]
        return None

    def info_all_texts(self, info: Dict[str, Dict[str, Any]], *keys: str) -> List[str]:
        """
        Return all non-empty texts concatenated across the provided keys.
        """
        out = []
        for key in keys:
            entry = info.get(key) or {}
            texts = entry.get("texts") or []
            out.extend([t for t in texts if t])
        return out

    def info_first_link_url(self, info: Dict[str, Dict[str, Any]], *keys: str) -> Optional[str]:
        for key in keys:
            entry = info.get(key) or {}
            links = entry.get("links") or []
            if links:
                return links[0].get("url")
        return None

    def extract_section_text(self, soup: BeautifulSoup, heading_text: str) -> Optional[str]:
        hdr = soup.find(lambda tag: tag.name in ("h2", "h3") and tag.get_text(strip=True) == heading_text)
        if not hdr:
            return None
        out = []
        for sib in hdr.find_all_next():
            if sib.name in ("h2", "h3"):
                break
            if sib.name == "p":
                t = sib.get_text(" ", strip=True)
                if t:
                    out.append(t)
        return "\n".join(out).strip() or None

    def get_page_oldid(self, soup: BeautifulSoup) -> Optional[str]:
        perm = soup.select_one('li#t-permalink a[href*="oldid="]')
        if perm and perm.get("href"):
            return perm["href"].split("oldid=")[-1]
        pf = soup.select_one('.printfooter a[href*="oldid="]')
        if pf and pf.get("href"):
            return pf["href"].split("oldid=")[-1]
        return None

    def parse_categories_on_page(self, soup: BeautifulSoup) -> List[str]:
        cats = []
        c = soup.find("div", id="mw-normal-catlinks")
        if c:
            for a in c.select("ul li a"):
                cats.append(a.get_text(strip=True))
        return cats

    # --- GDPR refs from "Relevant Law": robust text+URL parsing ---

    def _parse_gdpr_label_from_text(self, text: str) -> Optional[Dict[str, Any]]:
        """
        Fallback: parse labels like "Article 6(1)(a) GDPR" from link text.
        """
        if not text:
            return None
        m = re.search(r"Article\s+(\d+)(?:\s*\((\d+)\))?(?:\s*\(([a-zA-Z])\))?\s*GDPR", text)
        if not m:
            return None
        art = int(m.group(1))
        para = m.group(2) if m.group(2) else None
        letter = m.group(3).lower() if m.group(3) else None
        label = f"{art}" + (f"({para})" if para else "") + (f"({letter})" if letter else "")
        return {"article": art, "paragraph": para, "letter": letter, "label": label}

    def normalize_gdpr_refs(self, info: Dict[str, Dict[str, Any]]) -> Tuple[List[Dict[str, Any]], List[Dict[str, Any]]]:
        gdpr, non_gdpr = [], []
        rl = info.get("Relevant Law") or info.get("Relevant law") or {}
        for link in rl.get("links", []):
            url = link.get("url", "")
            text = link.get("text", "")
            record = None
            if "Article_" in url and "_GDPR" in url:
                m = re.search(r"Article_(\d+)_GDPR(?:#([\w\d\(\)]+))?", url)
                if m:
                    art = int(m.group(1))
                    para, letter = None, None
                    if m.group(2):
                        anchor = m.group(2)
                        # accept 1a OR 1(a) OR 1f etc.
                        p = re.match(r"(\d+)(?:[\(\)]?([a-zA-Z]))?", anchor)
                        if p:
                            para = p.group(1)
                            letter = p.group(2).lower() if p.group(2) else None
                    label = f"{art}" + (f"({para})" if para else "") + (f"({letter})" if letter else "")
                    record = {"article": art, "paragraph": para, "letter": letter, "label": label}
            if not record:
                record = self._parse_gdpr_label_from_text(text)

            if record:
                gdpr.append(record)
            else:
                non_gdpr.append({"text": text, "url": url})

        # Dedup by label
        uniq, seen = [], set()
        for r in gdpr:
            if r["label"] not in seen:
                uniq.append(r); seen.add(r["label"])
        return uniq, non_gdpr

    # ------------------ Case details extraction -----------------

    def extract_case_details(self, case_url: str, article_category_label: str) -> Optional[Dict[str, Any]]:
        if case_url in self.visited_case_pages:
            return None

        soup, raw = self.get_soup_and_bytes(case_url)
        if not soup or raw is None:
            return None

        html_hash = sha256_hex(raw)
        title_el = soup.find("h1", id="firstHeading")
        page_title = title_el.get_text(strip=True) if title_el else None

        # Save HTML file
        html_file_path = self.save_html_file(case_url, raw, page_title)

        info = self.parse_infobox(soup)

        authority_name = self.info_first_text(info, "Authority", "Court")
        authority_url  = self.info_first_link_url(info, "Authority", "Court")

        jurisdiction_country = self.info_first_text(info, "Jurisdiction", "Country")

        decision_type = self.info_first_text(info, "Type")
        outcome       = self.info_first_text(info, "Outcome")

        date_started   = iso_or_none(self.info_first_text(info, "Started"))
        date_decided   = iso_or_none(self.info_first_text(info, "Decided"))
        date_published = iso_or_none(self.info_first_text(info, "Published"))

        fine_eur = money_to_eur(self.info_first_text(info, "Fine"))

        parties = self.info_all_texts(info, "Parties")
        parties_joined = text_join(parties) if parties else None

        national_case_number = self.info_first_text(info, "National Case Number/Name", "National Case Number")

        ecli = self.info_first_text(info, "European Case Law Identifier", "ECLI")

        appeal_status = self.info_first_text(info, "Appeal", "Appeal to")

        original_languages = text_join(self.info_all_texts(info, "Original Language(s)", "Original Language")) or None

        sources = (info.get("Original Source") or info.get("Source") or {}).get("links", [])
        source_docs_texts = text_join([s.get("text") for s in sources]) if sources else None
        source_docs_urls  = text_join([s.get("url")  for s in sources]) if sources else None

        relevant_law_texts  = (info.get("Relevant Law") or info.get("Relevant law") or {}).get("texts", [])
        relevant_law_joined = text_join(relevant_law_texts) if relevant_law_texts else None

        gdpr_refs, non_gdpr_law = self.normalize_gdpr_refs(info)

        summary_facts   = self.extract_section_text(soup, "Facts")
        summary_holding = self.extract_section_text(soup, "Holding")
        summary_comment = self.extract_section_text(soup, "Comment")

        # Further Resources
        fr_links = []
        fr_section = self.extract_section_text(soup, "Further Resources")
        if fr_section:
            hdr = soup.find(lambda tag: tag.name in ("h2", "h3") and tag.get_text(strip=True) == "Further Resources")
            if hdr:
                for a in hdr.find_all_next("a", href=True):
                    # stop at next heading
                    if a.find_previous(lambda tag: tag.name in ("h2", "h3") and tag.get_text(strip=True) == "Further Resources") != hdr:
                        break
                    fr_links.append({"text": a.get_text(strip=True), "url": urljoin(self.base_url, a["href"])})

        # English Machine Translation link and content extraction
        emt_url = None
        machine_translation_record = None
        emt_hdr = soup.find(lambda tag: tag.name in ("h2", "h3") and tag.get_text(strip=True) == "English Machine Translation of the Decision")
        if emt_hdr:
            a = emt_hdr.find_next("a", href=True)
            if a:
                emt_url = urljoin(self.base_url, a["href"])
                # Extract machine translation content
                machine_translation_record = self.extract_and_save_machine_translation(case_url, emt_url, page_title)

        page_categories = self.parse_categories_on_page(soup)
        page_oldid = self.get_page_oldid(soup)

        scraped_at = datetime.now(timezone.utc).replace(microsecond=0).isoformat()

        # Extract GDPR article numbers as integers for new columns
        relevant_law_gdpr_ints = extract_gdpr_article_numbers(relevant_law_joined)
        article_category_int = extract_article_category_number(article_category_label)

        rec = {
            "case_url": case_url,
            "page_title": page_title,
            "article_category": article_category_label,  # e.g., "Article 6(1)(a) GDPR"
            "article_category_int": article_category_int,  # NEW: Main article number as int
            "authority_name": authority_name,
            "authority_url": authority_url,
            "jurisdiction_country": jurisdiction_country,
            "decision_type": decision_type,
            "outcome": outcome,
            "date_started": date_started,
            "date_decided": date_decided,
            "date_published": date_published,
            "fine_eur": fine_eur,
            "parties": parties_joined,
            "national_case_number": national_case_number,
            "ecli": ecli,
            "appeal_status": appeal_status,
            "original_languages": original_languages,
            "source_document_texts": source_docs_texts,
            "source_document_urls": source_docs_urls,
            "relevant_law_texts": relevant_law_joined,
            "relevant_law_texts_gdpr_int": format_int_list(relevant_law_gdpr_ints),  # NEW: GDPR articles as ints
            "gdpr_articles_labels": text_join([r["label"] for r in gdpr_refs]),
            "non_gdpr_law_urls": text_join([x["url"] for x in non_gdpr_law]),
            "summary_facts": summary_facts,
            "summary_holding": summary_holding,
            "summary_comment": summary_comment,
            "further_resources_texts": text_join([l["text"] for l in fr_links]) if fr_links else None,
            "further_resources_urls": text_join([l["url"] for l in fr_links]) if fr_links else None,
            "machine_translation_url": emt_url,
            "page_categories": text_join(page_categories),
            "page_oldid": page_oldid,
            "html_sha256": html_hash,
            "html_file_path": html_file_path,  # NEW: Path to saved HTML file
            "machine_translation_extracted": machine_translation_record is not None,  # NEW: Flag
            "scraped_at": scraped_at
        }

        # case↔article mapping
        for r in gdpr_refs:
            self.case_articles.append({
                "case_url": case_url,
                "page_title": page_title,
                "article_label": r["label"],   # e.g., "6(1)(a)"
                "article": r["article"],
                "paragraph": r["paragraph"],
                "letter": r["letter"],
                "article_category": article_category_label
            })

        # sources table
        for s in sources:
            self.case_sources.append({
                "case_url": case_url,
                "label": s.get("text"),
                "url": s.get("url"),
                "source_type": "original_source",
                "notes": None
            })
        for s in fr_links:
            self.case_sources.append({
                "case_url": case_url,
                "label": s.get("text"),
                "url": s.get("url"),
                "source_type": "further_resources",
                "notes": None
            })
        if emt_url:
            self.case_sources.append({
                "case_url": case_url,
                "label": "English Machine Translation",
                "url": emt_url,
                "source_type": "machine_translation",
                "notes": None
            })

        self.visited_case_pages.add(case_url)
        return rec

    # -------------------- Category/page walking -----------------

    def _pretty_article_name(self, cat_url: str) -> str:
        # "...Category:Article_6(1)(a)_GDPR" -> "Article 6(1)(a) GDPR"
        name = unquote(cat_url.rsplit(":", 1)[-1]).replace("_", " ")
        return name

    def process_article_category(self, cat_url: str):
        """
        BFS over an article category and its subcategories (paragraphs/letters) with pagination.
        Enhanced with concurrent processing for case pages.
        """
        queue = [cat_url]
        while queue:
            url = queue.pop(0)
            if url in self.visited_cat_pages:
                continue
            self.visited_cat_pages.add(url)

            soup = self.get_soup(url)
            if not soup:
                continue

            # Skip non-existent categories
            if soup.find("div", class_="noarticletext"):
                continue

            label = self._pretty_article_name(url)

            # Subcategories (e.g., Article_6(1)_GDPR → Article_6(1)(a)_GDPR)
            sub = soup.find("div", id="mw-subcategories")
            if sub:
                for a in sub.find_all("a", href=True):
                    href = a["href"]
                    if "Category:" in href and "Article_" in href and "_GDPR" in href:
                        sub_url = urljoin(self.base_url, href)
                        if sub_url not in self.visited_cat_pages:
                            queue.append(sub_url)

            # Pages (cases) - collect all case URLs first
            case_urls = []
            pages_section = soup.find("div", id="mw-pages")
            if pages_section:
                for a in pages_section.find_all("a", href=True):
                    href = a["href"]
                    if "Category:" in href:
                        continue
                    if "/index.php?title=" not in href and "/wiki/" not in href:
                        continue
                    # exclude obvious non-content namespaces
                    if any(ns in href for ns in ("Special:", "Talk:", "Help:", "User:", "File:", "Template:")):
                        continue
                    case_url = urljoin(self.base_url, href)
                    if "#mw-pages" in case_url:   # this filters prev/next page links
                        continue
                    if case_url not in self.visited_case_pages:
                        case_urls.append(case_url)

            # Process case URLs in batches with concurrent requests
            batch_size = min(self.max_workers, 10)  # Don't overwhelm the server
            for i in range(0, len(case_urls), batch_size):
                batch = case_urls[i:i + batch_size]
                print(f"  📄 Processing {len(batch)} cases in batch {i//batch_size + 1}...")
                
                # Extract case details for each URL in the batch
                with ThreadPoolExecutor(max_workers=self.max_workers) as executor:
                    future_to_url = {
                        executor.submit(self.extract_case_details, case_url, label): case_url 
                        for case_url in batch
                    }
                    
                    for future in as_completed(future_to_url):
                        case_url = future_to_url[future]
                        try:
                            rec = future.result()
                            if rec:
                                with self.lock:
                                    self.cases.append(rec)
                        except Exception as e:
                            print(f"❌ Error processing case {case_url}: {e}")
                
                # Be respectful - pause between batches
                if i + batch_size < len(case_urls):
                    time.sleep(1.0)

            # Pagination: next page
            next_link = soup.find("a", string=re.compile(r"next\s*page", re.I))
            if next_link and next_link.get("href"):
                next_url = urljoin(self.base_url, next_link["href"])
                if next_url not in self.visited_cat_pages:
                    queue.append(next_url)

            rand_sleep(0.25, 0.8)

    # ---------------------------- Run ---------------------------

    def run(self, start_article: int = 1, end_article: int = 99):
        print("=" * 70)
        print("🚀 Enhanced GDPRhub — Articles 1–99 Scrape")
        print("   ✅ Full HTML storage")
        print("   ✅ Machine translation extraction") 
        print("   ✅ Concurrent processing")
        print("=" * 70)
        seeds = [
            f"{self.base_url}/index.php?title=Category:Article_{i}_GDPR"
            for i in range(start_article, end_article + 1)
        ]

        print(f"🔎 Seeding {len(seeds)} article categories...")
        for idx, cat_url in enumerate(seeds, 1):
            print(f"[{idx}/{len(seeds)}] 📂 {self._pretty_article_name(cat_url)}")
            self.process_article_category(cat_url)

        print("\n✅ Extraction complete.")
        print(f"📄 Cases: {len(self.cases)}")
        print(f"🔗 Case↔Article links: {len(self.case_articles)}")
        print(f"📎 Case sources: {len(self.case_sources)}")
        print(f"💾 HTML files saved: {len(self.html_files)}")
        print(f"🌐 Machine translations: {len(self.machine_translations)}")

    # --------------------------- Save ---------------------------

    def save_outputs(self,
                     cases_csv="gdprhub_cases.csv",
                     cases_json="gdprhub_cases.json",
                     case_articles_csv="gdprhub_case_articles.csv",
                     case_sources_csv="gdprhub_case_sources.csv",
                     summary_csv="gdprhub_summary_by_article.csv",
                     html_files_csv="gdprhub_html_files.csv",
                     machine_translations_csv="gdprhub_machine_translations.csv",
                     machine_translations_json="gdprhub_machine_translations.json"):
        
        # Ensure output directory exists
        output_path = self.output_dir
        
        if not self.cases:
            print("❌ No cases to save.")
            return

        # Save cases data
        df_cases = pd.DataFrame(self.cases)
        df_cases = df_cases.drop_duplicates(subset=["case_url"]).sort_values(
            ["article_category", "page_title"], na_position="last"
        )
        df_cases.to_csv(output_path / cases_csv, index=False, encoding="utf-8")
        with open(output_path / cases_json, "w", encoding="utf-8") as f:
            json.dump(self.cases, f, ensure_ascii=False, indent=2)

        # Save case articles mapping
        df_links = pd.DataFrame(self.case_articles)
        if not df_links.empty:
            df_links = df_links.drop_duplicates(subset=["case_url", "article_label"]).sort_values(
                ["article_label", "page_title"], na_position="last"
            )
            df_links.to_csv(output_path / case_articles_csv, index=False, encoding="utf-8")
        else:
            pd.DataFrame(columns=["case_url","page_title","article_label","article","paragraph","letter","article_category"]).to_csv(output_path / case_articles_csv, index=False)

        # Save case sources
        df_src = pd.DataFrame(self.case_sources)
        if not df_src.empty:
            df_src = df_src.drop_duplicates().sort_values(["case_url", "source_type"], na_position="last")
            df_src.to_csv(output_path / case_sources_csv, index=False, encoding="utf-8")
        else:
            pd.DataFrame(columns=["case_url","label","url","source_type","notes"]).to_csv(output_path / case_sources_csv, index=False)

        # Save summary by article
        if not df_links.empty:
            df_summary = (df_links.groupby("article_label")
                                  .size()
                                  .reset_index(name="case_count")
                                  .sort_values(["article_label"]))
            df_summary.to_csv(output_path / summary_csv, index=False, encoding="utf-8")
        else:
            pd.DataFrame(columns=["article_label","case_count"]).to_csv(output_path / summary_csv, index=False)

        # Save HTML files metadata
        df_html = pd.DataFrame(self.html_files)
        if not df_html.empty:
            df_html.to_csv(output_path / html_files_csv, index=False, encoding="utf-8")
        else:
            pd.DataFrame(columns=["url","file_path","filename","file_size","html_sha256","saved_at"]).to_csv(output_path / html_files_csv, index=False)

        # Save machine translations
        df_mt = pd.DataFrame(self.machine_translations)
        if not df_mt.empty:
            # Use proper CSV escaping to handle text with commas/newlines
            df_mt.to_csv(output_path / machine_translations_csv, index=False, encoding="utf-8", 
                        quoting=1, escapechar='\\')  # QUOTE_ALL to properly escape all fields
            with open(output_path / machine_translations_json, "w", encoding="utf-8") as f:
                json.dump(self.machine_translations, f, ensure_ascii=False, indent=2)
        else:
            pd.DataFrame(columns=["case_url","translation_url","file_path","filename","file_size","html_sha256","translation_text","extracted_at"]).to_csv(output_path / machine_translations_csv, index=False)

        print(f"\n📁 Saved to {output_path}:")
        print(f"  - {cases_csv}")
        print(f"  - {cases_json}")
        print(f"  - {case_articles_csv}")
        print(f"  - {case_sources_csv}")
        print(f"  - {summary_csv}")
        print(f"  - {html_files_csv}")
        print(f"  - {machine_translations_csv}")
        print(f"  - {machine_translations_json}")
        print(f"  - html_pages/ ({len(self.html_files)} files)")
        print(f"  - machine_translations/ ({len(self.machine_translations)} files)")

# --------------------------- CLI ---------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Enhanced GDPRhub Articles Scraper with HTML storage, machine translation extraction, and concurrent processing",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Full scrape with default settings
  python %(prog)s

  # Test with Article 6 only
  python %(prog)s --start-article 6 --end-article 6

  # Fast scrape with more workers
  python %(prog)s --max-workers 8 --output-dir fast_scrape

  # Conservative scrape with fewer workers
  python %(prog)s --max-workers 2 --start-article 1 --end-article 10

  # Custom output location
  python %(prog)s --output-dir /path/to/my/data --start-article 20 --end-article 25
        """
    )
    
    # Article range parameters
    parser.add_argument(
        "--start-article", 
        type=int, 
        default=1,
        help="Starting GDPR article number to scrape (default: 1)"
    )
    parser.add_argument(
        "--end-article", 
        type=int, 
        default=99,
        help="Ending GDPR article number to scrape (default: 99)"
    )
    
    # Performance parameters
    parser.add_argument(
        "--max-workers", 
        type=int, 
        default=3,
        help="Number of concurrent workers for faster processing (default: 3, recommended: 2-8)"
    )
    
    # Output parameters
    parser.add_argument(
        "--output-dir", 
        type=str, 
        default="gdprhub_enhanced_data",
        help="Output directory for all scraped data (default: gdprhub_enhanced_data)"
    )
    
    # Output file customization
    parser.add_argument(
        "--cases-csv", 
        type=str, 
        default="gdprhub_cases.csv",
        help="Filename for cases CSV output (default: gdprhub_cases.csv)"
    )
    parser.add_argument(
        "--cases-json", 
        type=str, 
        default="gdprhub_cases.json",
        help="Filename for cases JSON output (default: gdprhub_cases.json)"
    )
    
    # Feature toggles
    parser.add_argument(
        "--no-html-storage", 
        action="store_true",
        help="Disable HTML file storage to save disk space"
    )
    parser.add_argument(
        "--no-machine-translations", 
        action="store_true",
        help="Skip machine translation extraction"
    )
    
    # Verbose output
    parser.add_argument(
        "--verbose", "-v", 
        action="store_true",
        help="Enable verbose output with detailed progress information"
    )
    parser.add_argument(
        "--quiet", "-q", 
        action="store_true",
        help="Suppress all output except errors"
    )
    
    # Test mode
    parser.add_argument(
        "--test", 
        action="store_true",
        help="Run in test mode (equivalent to --start-article 6 --end-article 6)"
    )
    
    args = parser.parse_args()
    
    # Handle test mode
    if args.test:
        args.start_article = 6
        args.end_article = 6
        if not args.quiet:
            print("🧪 Running in TEST MODE - Article 6 only")
    
    # Validate arguments
    if args.start_article < 1 or args.start_article > 99:
        parser.error("start-article must be between 1 and 99")
    if args.end_article < 1 or args.end_article > 99:
        parser.error("end-article must be between 1 and 99")
    if args.start_article > args.end_article:
        parser.error("start-article must be <= end-article")
    if args.max_workers < 1 or args.max_workers > 20:
        parser.error("max-workers must be between 1 and 20")
    if args.verbose and args.quiet:
        parser.error("Cannot use both --verbose and --quiet")
    
    # Configure output level
    if args.quiet:
        import sys
        sys.stdout = open(os.devnull, 'w')
    
    # Create scraper with custom settings
    scraper = EnhancedGDPRHubScraper(
        max_workers=args.max_workers, 
        output_dir=args.output_dir
    )
    
    # Apply feature toggles by monkey-patching methods if needed
    if args.no_html_storage:
        # Override save_html_file to do nothing
        original_save_html = scraper.save_html_file
        scraper.save_html_file = lambda url, content, page_title=None: None
        if not args.quiet:
            print("📝 HTML storage disabled")
    
    if args.no_machine_translations:
        # Override machine translation extraction
        original_extract_mt = scraper.extract_and_save_machine_translation
        scraper.extract_and_save_machine_translation = lambda case_url, emt_url, page_title=None: None
        if not args.quiet:
            print("🌐 Machine translation extraction disabled")
    
    if not args.quiet:
        print(f"🚀 Starting scrape:")
        print(f"   Articles: {args.start_article} to {args.end_article}")
        print(f"   Workers: {args.max_workers}")
        print(f"   Output: {args.output_dir}")
        if args.verbose:
            print(f"   HTML storage: {'disabled' if args.no_html_storage else 'enabled'}")
            print(f"   Machine translations: {'disabled' if args.no_machine_translations else 'enabled'}")
    
    # Run the scraper
    scraper.run(start_article=args.start_article, end_article=args.end_article)
    
    # Save outputs with custom filenames
    scraper.save_outputs(
        cases_csv=args.cases_csv,
        cases_json=args.cases_json,
        case_articles_csv="gdprhub_case_articles.csv",
        case_sources_csv="gdprhub_case_sources.csv", 
        summary_csv="gdprhub_summary_by_article.csv",
        html_files_csv="gdprhub_html_files.csv",
        machine_translations_csv="gdprhub_machine_translations.csv",
        machine_translations_json="gdprhub_machine_translations.json"
    )
    
    if not args.quiet:
        print(f"\n🎉 Scraping completed successfully!")
        print(f"📁 Results saved to: {args.output_dir}")


if __name__ == "__main__":
    main()
