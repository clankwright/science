---
id: notebooklm
title: "NotebookLM"
kind: tool
vendor: Google
access: free + subscription
maturity: production
cost_tier: free (Plus $20/mo for higher limits)
year_first_public: 2023
last_verified: 2026-05-03
---

# NotebookLM

> **Summary:** Google's source-grounded RAG product. Upload sources (PDFs, docs, URLs, audio), get a chatbot that answers from those sources only with inline citations. ~13% hallucination rate, best in class for RAG over user content. Audio Overviews generate two-host AI podcasts from any document. Free; Plus tier $20/mo unlocks higher source counts and Mind Maps.

**Sources:** [[raw/pkm-wikis/notebooklm.md]], [[raw/pkm-wikis/00-overview.md]]

## What it does

Take a user-uploaded corpus (up to 50 sources free, 300 with Plus), build a chatbot that answers grounded only in those sources with inline citations, generate Mind Maps and structured study guides, and produce two-host conversational Audio Overviews (extended to 80+ languages, Sept 2025).

## Access and cost

Free tier covers 50 sources per notebook. Plus ($20/mo, bundled in Google AI Pro) raises to 300 sources, adds Mind Maps, longer Audio Overviews. Education tier free for verified users.

## Distinctive trait

Lowest hallucination rate of any consumer RAG product (~13% in published evaluations); the first product where talk-to-your-sources actually works without the system inventing claims. Audio Overviews drove tens of millions of users in 2024-2025 and remain the most-recognizable product feature.

## Limits

- Cloud-only; uploaded sources sit on Google infrastructure (privacy considerations).
- 13% hallucination is best-in-class but not zero.
- Synthesis is ephemeral; not a replacement for an owned, persistent corpus (use the [Karpathy LLM-wiki pattern](karpathy-llm-wiki-pattern.md) for that).
- Audio Overviews are impressive once; most users revert to text within 2-3 weeks.

## See also

- [Personal knowledge management](../capabilities/personal-knowledge-management.md)
- [Karpathy LLM-wiki pattern](karpathy-llm-wiki-pattern.md): the persistent-corpus alternative.
- [Granola](granola.md): meeting capture upstream.
- [Shortlist](../analysis/shortlist.md)
