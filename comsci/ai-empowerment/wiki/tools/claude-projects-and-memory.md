---
id: claude-projects-and-memory
title: "Claude Projects and Memory"
kind: tool
vendor: Anthropic
access: bundled with Claude tier
maturity: production
cost_tier: free (March 2026 onwards)
year_first_public: 2024
last_verified: 2026-05-03
---

# Claude Projects and Memory

> **Summary:** Per-topic context containers with attached documents (Projects), plus transparent 24-hour batch synthesis personal context (Memory). Made free March 2026. The lightweight personal-context layer that 90% of users will ever need.

**Sources:** [[raw/pkm-wikis/claude-memory-and-projects.md]], [[raw/pkm-wikis/00-overview.md]]

## What it does

Projects: attach up to ~20MB of documents (PDFs, code, transcripts) to a named project, then chat with Claude with that context loaded automatically. Memory: Claude maintains a human-readable Memory profile updated nightly from your conversations; you can read and edit it.

## Access and cost

Free since March 2026 (originally Pro-only). Pro and Max tiers raise document-attachment limits and Memory size.

## Distinctive trait

Transparency. Unlike ChatGPT's opaque implicit memory, Claude's Memory profile is human-readable text the user can inspect and edit. Memory Import (March 2026) accepts ChatGPT and Gemini exports, the first serious attempt to break vendor lock-in on personal AI context.

## Limits

- Document attachment is hard-capped (~20MB per project); not a full PKM.
- Memory profile is built nightly, not real-time; recent conversations may not yet be incorporated.
- Cloud-only; documents and Memory live on Anthropic infrastructure.

## See also

- [Personal knowledge management](../capabilities/personal-knowledge-management.md)
- [NotebookLM](notebooklm.md): heavier-weight RAG alternative.
- [Karpathy LLM-wiki pattern](karpathy-llm-wiki-pattern.md): owned, persistent alternative.
- [Shortlist](../analysis/shortlist.md)
