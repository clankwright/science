# Karpathy LLM-Wiki Pattern

**Vendor:** None (workflow pattern, not a product). Author: Andrej Karpathy.
**Access:** Free; requires a coding agent (Claude Code, OpenAI Codex, OpenCode, Cursor agent mode, etc.) and a markdown editor.
**Cost:** $0-200/mo depending on the underlying agent's API or subscription cost.
**Maturity:** Workflow-grade. Pattern is documented in a public gist; thousands of users have implemented variants.
**Distinctive trait:** No vector DB, no chunking, no embedding step. The LLM agent reads files directly via filesystem tools. Knowledge accumulates as structured markdown rather than being re-derived from raw documents at every query.

## Origin

Karpathy first floated the idea in an August 2024 tweet noting that he was using LLMs less for code generation and more for organizing his idea notes. On April 3, 2026, he posted "LLM Knowledge Bases" on X and the next day published the gist `karpathy/442a6bf555914893e9891c11519de94f` ("llm-wiki") laying out the full pattern as a copy-paste prompt.

## Core argument

RAG re-derives the same answer from raw documents on every query. There's no accumulation. Ask a synthesis question requiring five sources, the LLM finds and reassembles the relevant fragments every time. This wastes context, loses subtle cross-references, and produces inconsistent answers across sessions.

The wiki pattern instead builds and maintains a persistent set of interlinked markdown files. Source ingestion happens once (the agent reads a new article, writes a `raw/<source>.md` file verbatim, then updates or creates the relevant `wiki/<topic>.md` synthesis page). Queries hit the wiki first, the raw sources only if needed. Over time, the wiki accumulates the user's actual understanding; raw sources become a citation trail.

## Reference structure

```
raw/                # Source articles, papers, transcripts. Verbatim. Never edited.
wiki/               # LLM-curated synthesis. All files LLM-authored.
  index.md          # Master catalog
  <topics>/         # One page per topic, cross-linked
log.md              # Append-only INGEST/QUERY/LINT log
CLAUDE.md           # Schema spec the agent reads on every session
```

Every page links via relative markdown links. Every claim traces to a `raw/` source.

## What it actually does

A single user with a folder structured this way and Claude Code pointed at it can:

- Drop a URL or PDF: agent fetches/converts, writes `raw/`, updates wiki pages, refreshes index.
- Ask "what do I know about X": agent greps wiki, returns synthesis with cross-references, falls back to `raw/` only when wiki is silent.
- Ask "lint the wiki": agent finds stale claims, broken links, contradictions, orphan pages, gaps where `raw/` exceeds wiki coverage.
- Reorganize: "split the model-evals page into one per benchmark family" — agent does the refactor, updates inbound links.

## Why it works (vs. NotebookLM, vector RAG)

- **No chunking.** The agent reads whole files. Cross-source synthesis happens in context, not via cosine similarity.
- **Persistent.** The wiki is your output, not a vendor's index. Outlives any LLM provider.
- **Inspectable.** Every page is plain markdown. You can read, edit, version-control, share, or migrate it.
- **Self-improving.** The agent rewrites stale pages on demand. With NotebookLM you're stuck with whatever Google's chat returns this session.

## Honest limits

- **Manual.** You decide when to ingest, when to lint, when to reorganize. There's no scheduled background agent (yet) doing it for you. This is "workflow-grade," not "product-grade."
- **Agent quality ceiling.** Synthesis quality = agent quality. Sub-frontier models produce plausible-looking but structurally weak pages.
- **Cost.** A heavy ingest session over a long folder can run $1-5 in Claude API spend. Subscription tiers (Claude Pro, ChatGPT Plus) cap usage but cover most users.
- **No good UI.** You're in a terminal or VS Code with an agent. Not for the non-technical.

## Implementation notes seen in the wild

- Most users put a `CLAUDE.md` (or `AGENTS.md`) at the root explaining the schema and writing conventions, so the agent self-bootstraps each session.
- A `log.md` of INGEST/QUERY/LINT entries gives a usage history without polluting the wiki.
- The pattern is recursive: this `ai-empowerment` knowledge base IS a Karpathy-style LLM wiki.

## Variants

- **rohitg00's "LLM Wiki v2"** (gist) extends the pattern with explicit memory primitives drawn from agentmemory experiments.
- **MindStudio, Antigravity Codes, Analytics Vidhya** all published "build your own" walkthroughs in April 2026 after Karpathy's tweet.
- The `sst-wiki-curator` skill in the user's local Claude Code setup automates scaffolding new wikis in this style.
