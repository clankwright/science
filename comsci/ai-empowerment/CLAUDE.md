# AI-Empowerment Knowledge Base

Catalogs the AI-enabled tools and workflows that became realistic for an individual to operate in the 2024-2026 wave: things that were either entirely new (LLM-curated wikis, agentic coding, browser-use agents, voice cloning at consumer prices) or only theoretical before frontier LLMs and diffusion models matured.

The operational target: a curated shortlist of the most "unhobbling" applications, the ones that meaningfully expand what a single person without a team or budget can do on their own behalf. "Unhobbling" follows Aschenbrenner's usage: removing constraints that hid the underlying capability, e.g., letting a model use tools, run code, browse, plan multi-step. An unhobbling application is one where the AI shifts a task from "I cannot do this" or "I would have to hire someone" to "I can do this myself in an afternoon".

The wiki must answer:

1. What categories of AI-enabled capability are newly practical (not just theoretical, not just available to research labs)?
2. Which concrete tools deliver each capability today, and at what maturity (toy, beta, production)?
3. Which of these most empower an individual to act on their own behalf, and what is the shortlist?

## Structure

```
raw/                     # Source articles, papers, product docs, blog posts. Never edit.
                         #   Organize by source: raw/<source-org>/<slug>.md when ingesting many from one org.
wiki/                    # LLM-compiled knowledge base. All files here are LLM-authored.
  index.md               # Master catalog: every page with one-line summary, by section.
  capabilities/          # One page per AI-unlocked capability category (agentic-coding,
                         #   voice-cloning, autonomous-research, browser-use, ...).
                         #   Focus: what is now possible that was not, why now.
  tools/                 # One page per notable concrete tool (Claude Code, ElevenLabs,
                         #   Suno, Cursor, NotebookLM, Browser Use, ...).
                         #   Focus: maturity, individual access, cost, what it actually does.
  analysis/              # Syntheses: the shortlist, the unhobbling thesis, capability gaps,
                         #   "what an individual can now do that they could not in 2022".
log.md                   # Append-only operation log (INIT, INGEST, QUERY, LINT entries).
```

## Wiki Article Format

Every article follows this template:

```markdown
# Article Title

> **Summary:** One-paragraph overview.

**Sources:** [[raw/source.md]], ...

---

## Section Heading

Body with cross-references using relative markdown links:
[Claude Code](../tools/claude-code.md), [agentic-coding](../capabilities/agentic-coding.md).

## See Also

- [Related Article](../category/related-article.md)
```

YAML front matter is optional on this wiki (middle variant) but recommended on tool pages where maturity, cost, license, and access tier are load-bearing:

```yaml
---
id: claude-code
title: "Claude Code"
kind: tool
vendor: Anthropic
access: subscription | api | open-source | freemium
maturity: production | beta | preview | research
cost_tier: free | low ($0-30/mo) | mid ($30-200/mo) | high ($200+/mo) | usage-based
year_first_public: 2025
---
```

## Naming Conventions

- Filenames: kebab-case, `.md` extension (e.g., `agentic-coding.md`, `claude-code.md`, `browser-use.md`).
- One topic per file. Capabilities and tools are separate pages even when a tool defines its category (e.g., `capabilities/agentic-coding.md` and `tools/claude-code.md` cross-link).
- Subdirectories: `capabilities/`, `tools/`, `analysis/`. Resist adding more; orthogonality matters less than greppability.

## Workflows

### Ingest

1. Drop source(s) into `raw/<source-slug>.md` (or `raw/<org>/<slug>.md` if many from one org).
   For URLs, fetch with the harness's web tool; for PDFs, convert to markdown first.
2. Read the source end-to-end. Extract: what capability it demonstrates, what tool it covers, what was previously hard or impossible, current maturity, individual-access angle (price, sign-up friction, hardware needs), date.
3. Decide: does this surface a new capability category page, a new tool page, both, or just extend existing pages?
4. Write or update the relevant `capabilities/<slug>.md` and/or `tools/<slug>.md`.
5. Cross-reference: every tool page links to its capability page(s); every capability page lists its notable tools with one-line summaries.
6. If the source shifts the shortlist (e.g., reveals a tool that meaningfully unhobbles a category previously rated low), update `analysis/shortlist.md`.
7. Update `wiki/index.md`.
8. Append to `log.md`: `YYYY-MM-DD INGEST: <one-line description>`.

### Query

1. Search relevant wiki pages first (grep + index.md). Do not re-derive from `raw/` if a wiki page already covers it.
2. Synthesize a response citing specific articles.
3. If the analysis is novel and load-bearing, file it as an `analysis/` page.
4. Append to `log.md`: `YYYY-MM-DD QUERY: <question summary>`.

### Lint

1. Scan all wiki articles for:
   - Stale claims (this domain moves monthly; tool pricing, model versions, "best in class" rankings rot fast).
   - Contradictions between articles (one tool page claims production maturity, the capability page lists it as beta).
   - Missing cross-references (a capability page mentions a tool with no link, or vice versa).
   - Orphaned pages (no inbound links).
   - Gaps: capabilities or tools mentioned in `raw/` without a dedicated wiki page.
   - Broken relative links.
   - Shortlist drift: tools on the shortlist that have lost their edge, or new tools that should be added.
2. Produce a lint report at `wiki/LINT-REPORT.md`.
3. Append to `log.md`: `YYYY-MM-DD LINT: <summary of findings>`.

## Domain-Specific Conventions

- **Date everything.** Every page records the source's publication date and the date of last verification. AI tools change pricing, capability tiers, and even existence on monthly cadences.
- **Distinguish capability from product.** A capability (e.g., "browser-use agent") outlives any single tool; a tool (e.g., "Browser Use 0.x") may be deprecated within 12 months. Write capability pages to be tool-agnostic.
- **Record the "what was hard before" angle explicitly.** Every capability page has a section titled "What changed" naming the prior state and the unlock. If you can't articulate what was previously impractical, the capability is not unhobbling, it is just convenient.
- **Maturity scale**: `research` (paper or demo only), `preview` (signups, may break), `beta` (works for early adopters, gaps remain), `production` (relied on by paying customers). Be conservative; hype is the enemy of this wiki.
- **Cost tier**: `free`, `low` ($0-30/mo equivalent), `mid` ($30-200/mo), `high` ($200+/mo), or `usage-based` with a typical monthly figure for individual use. Individual-affordability is a core axis.
- **Access friction**: note sign-up gates, API-key requirements, waitlists, regional restrictions. A capability that needs an enterprise contract is not "available to individuals" no matter how powerful.
- **Empowerment angle**: each tool/capability page has a section "Individual empowerment" naming what a single person can now do that previously required a team, budget, or specialist hire.

## Writing Style

- NEVER use em dashes. Use colons, semicolons, commas, or restructure.
- Concise, technically confident. No fluff or hedging.
- No "I believe", "perhaps", "it seems", "in order to", "utilize".
- No marketing language: avoid "revolutionary", "game-changing", "unprecedented", "transformative" unless directly quoting a source. The wiki rates capabilities; vendors do the marketing.
- Cross-reference liberally; isolated articles are less useful.
- Every claim must trace back to a file in `raw/`.
- Raw sources are immutable; all curation happens in `wiki/`.
- Prefer factual, evidence-weighted language; note where sources disagree.
- The wiki is a living document; expect monthly rewrites of tool pages and quarterly rewrites of the shortlist.

## Out of Scope

- Frontier-lab-only capabilities not yet accessible to individuals (e.g., training a 70B model from scratch).
- Pure infrastructure plays (cloud GPU pricing, model-serving frameworks) unless they directly enable an individual-facing capability.
- Generic AI hype articles. Source must describe a concrete tool, capability, or workflow.
- AI safety / policy debates. Other wikis cover those.
- Enterprise-only tooling (SOC2-required, six-figure ACV) without an individual-tier offering.
