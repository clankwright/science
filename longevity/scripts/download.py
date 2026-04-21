"""Download all sources in sources.json to sources/{html,pdf}/.

Strategy:
  - arXiv: grab PDF from pdf_url.
  - Everything else: GET the canonical URL with a real UA. If the response
    looks like a landing page (Nature/Cell) and an alt_url (PMC) exists,
    also fetch the alt_url.
  - Writes sources/download_log.json with per-source status.

Skips downloads that already exist on disk. Re-run is safe.
"""
from __future__ import annotations

import json
import pathlib
import sys
import time
import urllib.parse

import requests

ROOT = pathlib.Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "sources.json"
HTML_DIR = ROOT / "sources" / "html"
PDF_DIR = ROOT / "sources" / "pdf"
LOG = ROOT / "sources" / "download_log.json"

UA = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
)
HEADERS = {
    "User-Agent": UA,
    "Accept": "text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}


def fetch(url: str, timeout: int = 40) -> requests.Response | None:
    try:
        r = requests.get(url, headers=HEADERS, timeout=timeout, allow_redirects=True)
        r.raise_for_status()
        return r
    except requests.RequestException as e:
        print(f"  ! fetch failed: {url} -> {e}", file=sys.stderr)
        return None


def save(path: pathlib.Path, content: bytes) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(content)


def is_pdf(resp: requests.Response) -> bool:
    ct = resp.headers.get("Content-Type", "").lower()
    return "pdf" in ct or resp.url.lower().endswith(".pdf")


def download_one(src: dict) -> dict:
    sid = src["id"]
    urls: list[tuple[str, str]] = []
    if "pdf_url" in src:
        urls.append(("pdf", src["pdf_url"]))
    urls.append(("primary", src["url"]))
    if "alt_url" in src:
        urls.append(("alt", src["alt_url"]))

    record = {"id": sid, "attempts": []}
    for label, url in urls:
        html_path = HTML_DIR / f"{sid}__{label}.html"
        pdf_path = PDF_DIR / f"{sid}__{label}.pdf"
        if html_path.exists() or pdf_path.exists():
            record["attempts"].append({"label": label, "url": url, "status": "cached"})
            continue
        print(f"  [{sid}][{label}] -> {url}")
        resp = fetch(url)
        if resp is None:
            record["attempts"].append({"label": label, "url": url, "status": "error"})
            continue
        if is_pdf(resp):
            save(pdf_path, resp.content)
            record["attempts"].append(
                {"label": label, "url": url, "status": "ok", "path": str(pdf_path.relative_to(ROOT)), "bytes": len(resp.content)}
            )
        else:
            save(html_path, resp.content)
            record["attempts"].append(
                {"label": label, "url": url, "status": "ok", "path": str(html_path.relative_to(ROOT)), "bytes": len(resp.content)}
            )
        time.sleep(1.0)
    return record


def main() -> int:
    manifest = json.loads(MANIFEST.read_text())
    HTML_DIR.mkdir(parents=True, exist_ok=True)
    PDF_DIR.mkdir(parents=True, exist_ok=True)

    log = []
    for src in manifest["sources"]:
        print(f"[{src['id']}] {src['title']}")
        log.append(download_one(src))

    LOG.write_text(json.dumps(log, indent=2))
    print(f"\nDownload log: {LOG}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
