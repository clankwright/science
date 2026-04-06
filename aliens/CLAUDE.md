# UFO/UAP LLM Knowledge Base

## Structure

```
raw/          # Immutable source documents. Never edit these.
  grokipedia/ # Scraped Grokipedia pages (22 files, April 2026)
wiki/         # LLM-compiled knowledge base. All files here are LLM-authored.
  index.md    # Master catalog: every wiki page with one-line summary, by category
  concepts/   # Core ideas: UFO/UAP definitions, hypotheses, phenomena
  entities/   # People, organizations, places, alien types
  events/     # Incidents, programs, hearings, investigations
  culture/    # Fiction, religion, hoaxes, media
log.md        # Append-only operation log (ingest, query, lint)
```

## Wiki Article Format

Every wiki article follows this template:

```markdown
# Article Title

> **Summary:** One-paragraph overview of the topic.

**Sources:** [[raw/grokipedia/Source_File.md]], ...

---

## Section Heading

Body text with cross-references to other wiki articles using relative links:
[Bob Lazar](../entities/bob-lazar.md), [Area 51](../entities/area-51.md), etc.

## See Also

- [Related Article](../category/related-article.md)
- [Another Article](../category/another.md)
```

## Naming Conventions

- Filenames: kebab-case, `.md` extension (e.g., `bob-lazar.md`, `ufo-uap-overview.md`)
- One topic per file. Prefer focused articles over mega-pages.
- Category subdirectories: `concepts/`, `entities/`, `events/`, `culture/`

## Workflows

### Ingest
1. Read the raw source file
2. Extract key entities, concepts, events, and claims
3. Create new wiki articles or update existing ones in the appropriate subdirectory
4. Add cross-references between related articles
5. Update `wiki/index.md` with any new or changed pages
6. Append to `log.md`: `YYYY-MM-DD INGEST: <description>`

### Query
1. Search relevant wiki pages to answer the question
2. Synthesize a response citing specific wiki articles
3. If the analysis is valuable, file it as a new wiki page
4. Append to `log.md`: `YYYY-MM-DD QUERY: <question summary>`

### Lint
1. Scan all wiki articles for:
   - Contradictions between articles
   - Missing cross-references (topics mentioned but not linked)
   - Orphaned pages (no inbound links from other articles)
   - Stale claims or outdated information
   - Gaps: topics referenced in raw sources without dedicated wiki pages
2. Produce a lint report
3. Append to `log.md`: `YYYY-MM-DD LINT: <summary of findings>`

## Principles

- Every claim in the wiki must trace back to a file in `raw/`
- Raw sources are immutable; all curation happens in `wiki/`
- Cross-reference liberally; isolated articles are less useful
- Prefer factual, evidence-weighted language; note where sources disagree
- The wiki is a living document; expect incremental updates as new sources are ingested
