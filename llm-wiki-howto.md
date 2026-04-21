# LLM-Managed Wiki: How-To

A concrete recipe for building a new knowledge base in this repo, following the
pattern Karpathy describes in his [LLM Wiki gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

Reference implementations already in the repo, ordered by tooling density:

- `bpu/` (connectome-inspired neural architectures): minimal variant. No
  scripts, no source manifest, no linter. Sources are plain markdown in
  `raw/`; the LLM does all curation by hand. Cleanest starting point. Read
  `bpu/CLAUDE.md` first.
- `aliens/wiki/` (UFO/UAP knowledge base): middle ground. Raw Grokipedia
  dumps in `raw/grokipedia/`, curated wiki with `concepts/`, `entities/`,
  `events/`, `culture/` subdirectories, a lint report, no scripts.
- `biology/longevity/wiki/` (longevity research): scripted variant. Full
  pipeline: `sources.json` manifest, `download.py`, `convert.py`,
  `index.py` (TF-IDF + graph), `lint.py`, `licenses.py`. YAML front matter
  on every page. Use when you have a defined corpus of primary sources and
  want automated ingestion and integrity checks.

**Pick the minimal variant (bpu-style) unless you already know you need the
scripted one.** Adding scripts later is cheap; removing them is not.

## When to use this pattern

A domain where you want to:

- Accumulate knowledge across many sources instead of re-deriving it every query.
- Keep the corpus greppable, diffable, and portable (no vendor lock-in, no vector DB).
- Have an LLM agent do maintenance (summaries, cross-references, filing).
- Stay under ~200 pages without needing extra retrieval infrastructure.

If the domain is code, use a code repo. If the domain is tabular data, use a
spreadsheet. This is for prose knowledge.

## Three-layer architecture

1. **`raw/` or `sources/`**: immutable source documents. Articles, PDFs, HTML
   dumps, images. Never edit. Typically gitignored once it grows.
2. **`wiki/`**: LLM-generated markdown pages. Papers, topics, entities,
   events, analyses. This is the working layer.
3. **Schema file (`AGENTS.md` or project-scoped `CLAUDE.md`)**: operational
   spec the LLM reads before doing work. Covers ingest workflow, entity
   types, wikilink convention, contradiction handling, lint expectations.

Example structure:

```
<domain>/
├── AGENTS.md              # schema for the LLM
├── README.md              # human-facing docs
├── log.md                 # append-only operational log
├── sources.json           # source manifest (id, url, license, topics)
├── sources/               # raw downloads, gitignored
│   ├── html/
│   ├── pdf/
│   └── md/                # converted to clean markdown
├── wiki/
│   ├── index.md           # catalog + one-line summaries
│   ├── papers/            # one page per source
│   ├── topics/            # one page per concept
│   ├── analysis/          # syntheses, rankings, open questions
│   └── build/             # generated index artifacts, gitignored
└── scripts/
    ├── _wiki.py           # shared front-matter + wikilink parsing
    ├── download.py        # fetch sources listed in sources.json
    ├── convert.py         # HTML/PDF to markdown
    ├── index.py           # build TF-IDF + wikilink graph + keyword index
    ├── lint.py            # link/metadata/parity/license checks
    └── licenses.py        # apply license fields + regenerate LICENSES.md
```

Exact subdirectory names under `wiki/` are domain-specific. `aliens/wiki/`
uses `concepts/`, `entities/`, `events/`, `culture/`. `biology/longevity/wiki/`
uses `papers/`, `topics/`, `analysis/`. Both work.

## Top-level files

### `index.md`

A catalog of every wiki page with one-line summaries, grouped by section.
The agent updates it on every ingest. Scales well to ~100 sources and a few
hundred pages before it stops fitting cleanly in a prompt. Past that, split
by section and link from the root index.

### `log.md`

Append-only chronological record. One entry per ingest, query, or lint pass.
Entries start with a date so unix tools can parse them. Two common formats:

```
# single-line per event (bpu-style)
2026-04-21 INGEST: ai-aging-review-2026 added; linked into aging-clocks, deep-learning
2026-04-21 LINT: 0 warnings, 0 errors across 88 pages
```

```
# section per event (Karpathy gist style)
## [2026-04-21] ingest | ai-aging-review-2026
Added paper page; linked into topics/aging-clocks, topics/deep-learning.
License = CC-BY-4.0, full-text redistributable.
```

Both grep cleanly. Pick one per wiki and stick with it.

### `CLAUDE.md` or `AGENTS.md`

The LLM's operational spec for this wiki. `CLAUDE.md` is what `bpu/` uses
and what Claude Code auto-loads; use it unless you want an agent-agnostic
name. Covers:

- Entity/page types and what goes in each.
- Ingest workflow: source to paper page to topic links to index update.
- Wikilink convention (`[[slug]]` vs `[text](path.md)`).
- YAML front-matter fields required per page type.
- Contradiction handling: when two sources disagree, what does a topic page do.
- Lint expectations: what checks must pass before a change is considered done.

Keep it short. Everything the LLM needs, nothing it can infer from examples.

## File conventions

### Naming

- Paper pages: `<slug>.md` where slug matches the `id` in `sources.json`.
  Keep slugs short, lowercase, hyphenated, version-agnostic.
- Topic pages: `<topic-slug>.md`, stable English names.
- No numeric prefixes, no dates in filenames.

### YAML front matter

Every page starts with front matter the linter and indexer can parse.
Required fields differ by page type. Minimum:

```yaml
---
id: <slug>
title: "<human title>"
kind: paper | topic | analysis | entity | event | concept
---
```

Paper pages add `url`, `year`, `venue`, `access`, `license`, `topics:`.
Topic pages add `topic: <slug>`.

### Cross-references

Two styles work; pick one and be consistent within a wiki.

- **Wikilinks**: `[[slug]]` or `[[dir/slug]]`. Parsed by `scripts/index.py`
  in the longevity wiki. Good when you have a linter that enforces them.
- **Relative markdown links**: `[Title](../methods/foo.md)`. No tooling
  required. What `bpu/` uses.

External links are always normal markdown `[text](url)`.

### Page length

Favor long, self-contained pages over many stubs. Karpathy's code repos are
flat with long single files. Same principle: if a topic page is a paragraph
plus three wikilinks, merge it into a sibling. The linter's orphan-topic and
low-inbound-link signals surface these.

## Ingest workflow

### Minimal variant (bpu-style)

1. Download paper to `raw/<slug>.md` (PDF + converted markdown).
2. Read the converted markdown.
3. Extract key methods, entities, concepts, claims.
4. Create or update wiki articles in the relevant subdirectory.
5. Add cross-references between new and existing articles.
6. Update `wiki/index.md` with any new pages.
7. Append to `log.md`: `YYYY-MM-DD INGEST: <description>`.

All steps are LLM work.

### Scripted variant (longevity-style)

1. Add an entry to `sources.json` with `id`, URLs, `topics:`, stable metadata.
2. Add a `LICENSE_MAP` entry in `scripts/licenses.py`.
3. Run `python3 scripts/licenses.py all` to fill the `license` field and
   regenerate `LICENSES.md`.
4. Run `python3 scripts/download.py` to fetch HTML/PDF into `sources/`.
5. Run `python3 scripts/convert.py` to turn HTML/PDF into clean markdown.
6. Read the converted markdown, then write `wiki/papers/<id>.md` with YAML
   front matter plus summary, key findings, and wikilinks to relevant topics.
7. Link the new paper into each topic page listed in its `topics:` field.
8. Run `python3 scripts/index.py && python3 scripts/lint.py`. Fix any errors.
9. Append to `log.md`: `YYYY-MM-DD INGEST: <description>`.

Steps 6 and 7 are LLM work. Everything else is scripted.

## Tooling contract

Scripts write to conventional paths so the layout stays regular across
wikis. Copy the scripts from `biology/longevity/scripts/` when bootstrapping
a new wiki; they assume the directory shape above.

- `scripts/index.py` writes `wiki/build/{index,graph,keywords,pages}.json`
  plus `tfidf.npz` and `tfidf_vocab.json`. Load from a notebook with one
  line of numpy. No server, no vector DB.
- `scripts/lint.py` exits non-zero on: broken wikilinks, missing required
  front-matter fields, orphan topic pages, papers nothing links to,
  `sources.json` to `wiki/papers/` id parity mismatch, malformed URL
  fields, missing licenses.
- `scripts/licenses.py` treats `sources.json` as the source of truth for
  per-source licenses. Regenerates `LICENSES.md` at `<domain>/LICENSES.md`
  and inside `<domain>/wiki/` on demand.

## Gitignore rules

Track scripts, manifests, and the curated wiki. Do not track:

- `sources/html/`, `sources/pdf/`, `sources/md/`: large, reproducible by
  running `download.py` + `convert.py`.
- `sources/download_log.json`: regenerated on every download.
- `wiki/build/`: regenerated by `index.py`.
- `__pycache__/`, `*.pyc`.

Committed full-text of a source only when the `license` field permits
redistribution (CC-BY-*, public-domain). Keep license + DOI in the page's
YAML front matter if you do.

## Human vs LLM roles

Per Karpathy: the human curates sources, directs analysis, asks questions,
decides what matters. The LLM does summarizing, cross-referencing, filing,
and bookkeeping. A single new source often touches 10 to 15 wiki pages;
that fan-out is why LLM maintenance is load-bearing.

Do not hand-maintain `[[wikilinks]]` or the index. That is the agent's job.

## Anti-patterns

- **Embedding-based RAG over a personal corpus.** RAG makes the LLM
  rediscover knowledge every query; no accumulation. Use a local TF-IDF
  index plus wikilinks plus greppable files instead.
- **Tool lock-in.** No Obsidian plugins, no Notion, no Roam. Plain
  markdown in git. Obsidian is fine as a viewer, not as the source of truth.
- **Fragmenting a topic into many stubs.** Prefer one dense page.
- **Hand-curated cross-references.** The agent maintains them; humans
  review the diff.
- **Deep nesting.** Two levels under `wiki/` is plenty.

## Scale guidance

- Under 50 pages: a single `index.md` is all the retrieval you need.
- 50 to 200 pages: `index.md` plus wikilinks plus `scripts/index.py`
  output is still comfortable in-context.
- Over 200 pages: split `index.md` by section, each linking to a section
  index. Add a local BM25/TF-IDF query CLI if you need it. Still no
  embeddings.

## Starting a new wiki in this repo

### Minimal variant

1. Create `<domain>/` at the repo root (e.g. `chemistry/`, `materials/`).
2. Copy `bpu/CLAUDE.md` into `<domain>/CLAUDE.md` and adapt the section
   names and workflow rules to the new domain.
3. `mkdir <domain>/raw <domain>/wiki` and add your first one or two
   source markdown files to `raw/`.
4. Write `<domain>/log.md` with a seed `YYYY-MM-DD INIT:` entry.
5. Have the LLM draft the first wiki articles and an `index.md`.
6. Commit.

### Scripted variant

1. Create `<domain>/` at the repo root.
2. Copy `biology/longevity/scripts/`, `biology/longevity/.gitignore`,
   and `biology/longevity/CLAUDE.md` into it.
3. Write a minimal `sources.json` with one or two seed sources.
4. Write `<domain>/README.md` by adapting `biology/longevity/README.md`.
5. Run the ingest workflow. Commit.

The first commit for a scripted wiki should be runnable end-to-end:
`licenses.py all && download.py && convert.py && index.py && lint.py`
with zero errors.
