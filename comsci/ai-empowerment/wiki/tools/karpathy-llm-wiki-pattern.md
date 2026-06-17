---
id: karpathy-llm-wiki-pattern
title: "Karpathy LLM-managed wiki pattern"
kind: pattern
vendor: n/a (workflow)
access: open (any LLM-with-filesystem)
maturity: workflow-grade
cost_tier: free + LLM API costs
year_first_public: 2024
last_verified: 2026-05-03
---

# Karpathy LLM-managed wiki pattern

> **Summary:** Karpathy's August 2024 gist on letting an LLM agent maintain a personal markdown wiki. Not a product, but a workflow that produces persistent, owned, portable knowledge as plain markdown files in git, maintained by an agent that ingests sources, writes summary pages, cross-references, and lints. The choice for serious knowledge workers willing to live in a terminal; outlives any LLM provider.

**Sources:** [[raw/pkm-wikis/karpathy-wiki-pattern.md]], [[raw/pkm-wikis/00-overview.md]]

## What it does

A directory of plain markdown files: `raw/` (immutable source documents) and `wiki/` (LLM-authored summary pages with cross-references). An agent (Claude Code, Codex, Cursor agent mode) reads via filesystem tools, ingests new sources into `raw/`, writes or updates summary pages in `wiki/`, maintains an index, lints for staleness. The agent's "memory" lives entirely in the filesystem.

## Access and cost

Free pattern; cost is the LLM tokens consumed by the agent (typically $5-50/mo for an active personal wiki via [Claude Code](claude-code.md) or similar).

## Distinctive trait

Persistent, owned, portable: markdown in git outlives the LLM provider. Greppable, diffable, version-controllable. No vector DB, no embeddings, no vendor lock-in. The wiki you are reading is built with this pattern.

## Limits

- Requires terminal comfort and an agent host (Claude Code, Codex, Cursor).
- The agent's quality ceiling determines synthesis quality.
- Per-source ingest takes 5-20 minutes of agent time even when automated.

## See also

- [Personal knowledge management](../capabilities/personal-knowledge-management.md)
- [NotebookLM](notebooklm.md): the productized RAG alternative (ephemeral synthesis, vendor-cloud).
- [Obsidian + AI](obsidian-with-ai.md): the GUI variant.
- [Claude Code](claude-code.md): the typical agent host.
- [Shortlist](../analysis/shortlist.md)
