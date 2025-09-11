#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
GDPRhub Articles 1–99 Scraper (no umbrella discovery)
- Seeds Category:Article_1_GDPR ... Category:Article_99_GDPR directly
- Recurses subcategories (paragraphs/letters) + handles pagination
- Extracts rich, normalized case data + many-to-many mapping to GDPR provisions
- Robust to missing infobox fields (no IndexError on empty lists)
- Outputs tidy CSV/JSON for downstream analysis

Author: AI Assistant
Date: 2025-08-29
"""

import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import random
import re
import json
import hashlib
from urllib.parse import urljoin, unquote
from datetime import datetime
from typing import List, Dict, Optional, Tuple, Any

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


def rand_sleep(a=0.4, b=1.0):
    time.sleep(random.uniform(a, b))


def sha256_hex(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()


# --------------------------- Scraper ---------------------------

class GDPRHubScraper:
    def __init__(self):
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

        # Storage
        self.visited_case_pages = set()  # dedupe on case URL
        self.visited_cat_pages = set()   # dedupe category/pagination recursion
        self.cases: List[Dict[str, Any]] = []
        self.case_articles: List[Dict[str, Any]] = []
        self.case_sources: List[Dict[str, Any]] = []

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

        # English Machine Translation link
        emt_url = None
        emt_hdr = soup.find(lambda tag: tag.name in ("h2", "h3") and tag.get_text(strip=True) == "English Machine Translation of the Decision")
        if emt_hdr:
            a = emt_hdr.find_next("a", href=True)
            if a:
                emt_url = urljoin(self.base_url, a["href"])

        page_categories = self.parse_categories_on_page(soup)
        page_oldid = self.get_page_oldid(soup)

        scraped_at = datetime.utcnow().replace(microsecond=0).isoformat() + "Z"

        rec = {
            "case_url": case_url,
            "page_title": page_title,
            "article_category": article_category_label,  # e.g., "Article 6(1)(a) GDPR"
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

            # Pages (cases)
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
                    rec = self.extract_case_details(case_url, label)
                    if rec:
                        self.cases.append(rec)
                        rand_sleep(0.5, 1.2)

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
        print("🎯 GDPRhub — Articles 1–99 Scrape (no umbrella discovery)")
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

    # --------------------------- Save ---------------------------

    def save_outputs(self,
                     cases_csv="gdprhub_cases.csv",
                     cases_json="gdprhub_cases.json",
                     case_articles_csv="gdprhub_case_articles.csv",
                     case_sources_csv="gdprhub_case_sources.csv",
                     summary_csv="gdprhub_summary_by_article.csv"):
        if not self.cases:
            print("❌ No cases to save.")
            return

        df_cases = pd.DataFrame(self.cases)
        df_cases = df_cases.drop_duplicates(subset=["case_url"]).sort_values(
            ["article_category", "page_title"], na_position="last"
        )
        df_cases.to_csv(cases_csv, index=False, encoding="utf-8")
        with open(cases_json, "w", encoding="utf-8") as f:
            json.dump(self.cases, f, ensure_ascii=False, indent=2)

        df_links = pd.DataFrame(self.case_articles)
        if not df_links.empty:
            df_links = df_links.drop_duplicates(subset=["case_url", "article_label"]).sort_values(
                ["article_label", "page_title"], na_position="last"
            )
            df_links.to_csv(case_articles_csv, index=False, encoding="utf-8")
        else:
            pd.DataFrame(columns=["case_url","page_title","article_label","article","paragraph","letter","article_category"]).to_csv(case_articles_csv, index=False)

        df_src = pd.DataFrame(self.case_sources)
        if not df_src.empty:
            df_src = df_src.drop_duplicates().sort_values(["case_url", "source_type"], na_position="last")
            df_src.to_csv(case_sources_csv, index=False, encoding="utf-8")
        else:
            pd.DataFrame(columns=["case_url","label","url","source_type","notes"]).to_csv(case_sources_csv, index=False)

        if not df_links.empty:
            df_summary = (df_links.groupby("article_label")
                                  .size()
                                  .reset_index(name="case_count")
                                  .sort_values(["article_label"]))
            df_summary.to_csv(summary_csv, index=False, encoding="utf-8")
        else:
            pd.DataFrame(columns=["article_label","case_count"]).to_csv(summary_csv, index=False)

        print("\n📁 Saved:")
        print(f"  - {cases_csv}")
        print(f"  - {cases_json}")
        print(f"  - {case_articles_csv}")
        print(f"  - {case_sources_csv}")
        print(f"  - {summary_csv}")

# --------------------------- CLI ---------------------------

def main():
    scraper = GDPRHubScraper()
    # You can pass narrower ranges here if testing: scraper.run(6, 6)
    scraper.run(1, 99)
    scraper.save_outputs()

if __name__ == "__main__":
    main()
