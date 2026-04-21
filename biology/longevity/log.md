# Operation Log

Append-only. Format: `YYYY-MM-DD OPERATION: description`.

2026-04-21 INIT: Wiki scaffold created. sources.json manifest with initial source set; wiki/ with papers/, topics/, analysis/, index.md; scripts/ for download, convert, index, lint.
2026-04-21 INGEST: Expanded sources.json to 40 entries biased toward open-access preprints and PMC PDFs across aging clocks, senolytics, reprogramming, parabiosis, drug repurposing, cohorts, and active competitions.
2026-04-21 COMPILE: Wiki at 88 pages: 40 papers/, 46 topics/, 1 analysis/, 1 index. 579 wikilink edges.
2026-04-21 ANALYSIS: Wrote analysis/promising-reverse-aging with tier ranking of current reverse-aging technologies.
2026-04-21 LICENSES: Added per-source license field in sources.json and scripts/licenses.py to regenerate LICENSES.md. 24 redistributable, 5 varies-per-paper, 11 not-redistributable.
2026-04-21 RELOCATE: Moved from top-level longevity/ to biology/longevity/. Untracked gitignored artifacts (wiki/build/, sources/download_log.json, __pycache__/). Updated internal path references.
2026-04-21 INGEST: Ran scripts/download.py then scripts/convert.py. Download: 70 OK attempts, 23 errors (paywalled hosts), 33/40 sources with at least one successful fetch. Convert: 70 markdown files written to sources/md/ (4.7 MB).
2026-04-21 LINT: 0 warnings, 0 errors across 88 pages.
2026-04-21 SCHEMA: Added CLAUDE.md (LLM operational spec) and log.md (this file) per Karpathy LLM-wiki pattern.
2026-04-21 REFOCUS: Rewrote wiki/index.md. Replaced "Highest-leverage projects" section with a 6-step "Grok the field" reading path. Graph grew from 579 to 583 wikilink edges. Lint clean.
