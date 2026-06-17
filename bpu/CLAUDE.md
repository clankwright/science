# BPU / Connectome-Inspired Neural Architectures Knowledge Base

## Structure

```
raw/          # Source papers (PDF + markdown conversions). Never edit these.
wiki/         # LLM-compiled knowledge base. All files here are LLM-authored.
  index.md    # Master catalog: every wiki page with one-line summary, by category
  concepts/   # Core ideas: connectome, effectome, neuromorphic computing, etc.
  entities/   # People, organizations, organisms, projects
  methods/    # Architectures and techniques: BPU, DCN, LTC, FlyGM, etc.
log.md        # Append-only operation log (ingest, query, lint)
```

## Wiki Article Format

Every wiki article follows this template:

```markdown
# Article Title

> **Summary:** One-paragraph overview of the topic.

**Sources:** [[raw/paper_filename.md]], ...

---

## Section Heading

Body text with cross-references to other wiki articles using relative links:
[BPU](../methods/biological-processing-units.md), [C. elegans](../entities/c-elegans.md), etc.

## See Also

- [Related Article](../category/related-article.md)
```

## Naming Conventions

- Filenames: kebab-case, `.md` extension (e.g., `biological-processing-units.md`)
- One topic per file. Prefer focused articles over mega-pages.
- Category subdirectories: `concepts/`, `entities/`, `methods/`

## Workflows

### Ingest
1. Download paper PDF to `raw/`, convert to markdown with pymupdf4llm
2. Read the converted markdown
3. Extract key methods, entities, concepts, and claims
4. Create new wiki articles or update existing ones in the appropriate subdirectory
5. Add cross-references between related articles
6. Update `wiki/index.md` with any new or changed pages
7. Append to `log.md`: `YYYY-MM-DD INGEST: <description>`

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
   - Broken relative links
2. Produce a lint report
3. Append to `log.md`: `YYYY-MM-DD LINT: <summary of findings>`

## Writing Style

- NEVER use em dashes. Use colons, semicolons, commas, or restructure.
- Concise, technically confident. No fluff or hedging.
- No "I believe", "perhaps", "it seems", "in order to", "utilize".
- Cross-reference liberally; isolated articles are less useful.
- Every claim must trace back to a file in `raw/`.
- Raw sources are immutable; all curation happens in `wiki/`.
- Prefer factual, evidence-weighted language; note where sources disagree.
- The wiki is a living document; expect incremental updates as new sources are ingested.
