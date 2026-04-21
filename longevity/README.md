# Longevity Research — Knowledge Tree

A markdown-source knowledge base of computational entry points into
longevity research for a non-biologist, computer-scientist contributor.

Design pattern: **plain markdown with YAML front matter + wikilinks →
build step produces a TF-IDF / graph index → a linter keeps it
consistent**. No database, no server.

## Layout

```
longevity/
├── sources.json          # canonical source manifest (18 sources)
├── sources/              # raw downloads (produced by scripts/download.py)
│   ├── html/             # HTML captures
│   ├── pdf/              # PDFs (arXiv, etc.)
│   └── md/               # converted markdown
├── wiki/
│   ├── index.md          # root, topic taxonomy, starting projects
│   ├── papers/*.md       # one page per source
│   ├── topics/*.md       # one page per research topic
│   └── build/            # produced by scripts/index.py (gitignored)
└── scripts/
    ├── _wiki.py          # shared front-matter / wikilink parsing
    ├── download.py       # fetch HTML/PDF for every source
    ├── convert.py        # HTML→md (trafilatura) / PDF→md (pdftotext)
    ├── index.py          # TF-IDF + wikilink graph + keyword index
    └── lint.py           # link/metadata/orphan checks
```

## Quick start

```bash
# Install deps
pip install beautifulsoup4 markdownify trafilatura scikit-learn lxml requests
apt-get install -y poppler-utils   # pdftotext

# Build index and lint the wiki
python3 scripts/index.py
python3 scripts/lint.py

# Download the primary sources (PDFs + HTML)
python3 scripts/download.py
python3 scripts/convert.py
```

## Sandbox note

`scripts/download.py` and `scripts/convert.py` require direct HTTP
egress to arXiv, bioRxiv, medRxiv, PMC, Nature, MDPI, etc. Some
execution environments (including the one this wiki was initially
seeded in) enforce an egress firewall that blocks these hosts with
`403 host_not_allowed`. In those environments, run the download step on
an unrestricted machine and commit the resulting files under `sources/`.

The initial seed of `wiki/papers/*.md` was therefore populated from
search-engine summaries rather than primary full text; the scripts are
the path to replace each stub with the converted primary content.

## Karpathy-style querying

There is no query CLI. Query the wiki by reading the markdown directly
(it *is* the interface), by `grep`-ing `wiki/`, or by consuming
`wiki/build/index.json` / `wiki/build/tfidf.npz` from a notebook.

The build outputs:

| file | contents |
|---|---|
| `wiki/build/index.json` | per-page metadata, wikilinks, URLs |
| `wiki/build/graph.json` | adjacency list over wikilinks |
| `wiki/build/keywords.json` | topic → page ids |
| `wiki/build/tfidf.npz` | sparse TF-IDF matrix (scipy) |
| `wiki/build/tfidf_vocab.json` | term → column |
| `wiki/build/pages.json` | page id → row |

## Linter checks

1. Broken `[[wikilinks]]`
2. Paper pages missing `url:` front matter
3. Paper pages missing `topics:`
4. Orphan topic pages
5. Papers not referenced by any other page
6. `sources.json` ↔ `wiki/papers/*.md` id parity
7. Front-matter URL-valued fields that aren't actually URLs

Run `python3 scripts/lint.py`; exit code = number of errors.

## Adding a new paper

1. Append an entry to `sources.json` with a stable `id` slug.
2. Create `wiki/papers/<id>.md` with the YAML front matter already
   present (id, title, url, year, venue, access, kind, topics).
3. Link it from the relevant `wiki/topics/*.md` pages.
4. Re-run `scripts/index.py` and `scripts/lint.py`.
