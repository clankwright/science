---
id: gemini-deep-research
title: "Gemini Deep Research"
kind: tool
vendor: Google
access: subscription
maturity: production
cost_tier: low ($20/mo via Google AI Pro)
year_first_public: 2024
last_verified: 2026-05-03
---

# Gemini Deep Research

> **Summary:** Google's autonomous-research product, bundled with Google AI Pro ($20/mo). 1M-token context window handles long documents others have to chunk. Editable research plan before execution. Best when the question requires synthesizing multiple long sources end-to-end.

**Sources:** [[raw/autonomous-research/02-gemini-deep-research.md]], [[raw/autonomous-research/00-overview.md]]

## What it does

User submits a research question; Gemini drafts an editable research plan, then executes it (browse + read + synthesize) and returns a cited report. The 1M-token context lets it ingest very long sources whole rather than chunking.

## Access and cost

Bundled with Google AI Pro ($20/mo). Effectively unlimited reports per month at that tier (no published cap as of May 2026).

## Distinctive trait

1M-token context is the only consumer agent that handles 200+ page sources without chunking. Editable research plan is unique in the category: lets the user tighten scope before paying for a 5-30 min run.

## Limits

- Source quality ranking weaker than [Perplexity](perplexity.md); weights blogs and primary sources more equally.
- Citation hallucination still happens (12-37% across studies).
- Locked to the Google ecosystem.

## See also

- [Autonomous research](../capabilities/autonomous-research.md)
- [Perplexity](perplexity.md), [OpenAI Deep Research](openai-deep-research.md): alternatives.
- [Shortlist](../analysis/shortlist.md)
