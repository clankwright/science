# AI-Empowerment Wiki

A curated knowledge base of AI-enabled tools and workflows that became realistic for an individual to operate in the 2024-2026 wave. The end-goal: a shortlist of the most "unhobbling" applications, the ones that meaningfully shift what a single person without a team or budget can do on their own behalf.

## What this wiki tracks

- **Capabilities**: AI-unlocked categories that were previously impractical or impossible for individuals (agentic coding, autonomous research, voice cloning, browser-use agents, code-free app building, etc.).
- **Tools**: concrete implementations of those capabilities, with maturity, cost, access friction, and individual-empowerment angle.
- **Analysis**: the shortlist itself, plus syntheses on the unhobbling thesis, capability gaps, and second-order effects.

## What this wiki does not track

- Frontier-lab-only research not yet shipped to individuals.
- Generic AI hype. Sources must describe a concrete tool, capability, or workflow.
- Enterprise-only tooling without an individual tier.
- AI policy / safety debates.

## How it is maintained

- Plain markdown in git. No embeddings, no Notion, no Obsidian plugins.
- Operational contract: see [CLAUDE.md](CLAUDE.md). Workflows for ingest, query, and lint.
- Every claim traces to a file in `raw/`.
- LLM agent maintains cross-references and the index; humans curate sources and direct analysis.
- Append-only `log.md` records every ingest, query, and lint pass.

## Adding a source

1. Drop the article / paper / product doc as markdown into `raw/<slug>.md` (or `raw/<source-org>/<slug>.md`).
2. Read the [ingest workflow](CLAUDE.md#ingest) in `CLAUDE.md`.
3. Write or extend the relevant `wiki/capabilities/<slug>.md` and `wiki/tools/<slug>.md`.
4. Update `wiki/index.md` and append a line to `log.md`.
5. Commit.

## Querying

Start with [wiki/index.md](wiki/index.md), then grep across `wiki/`. The shortlist lives at [wiki/analysis/shortlist.md](wiki/analysis/shortlist.md).
