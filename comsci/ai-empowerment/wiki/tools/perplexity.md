---
id: perplexity
title: "Perplexity"
kind: tool
vendor: Perplexity AI
access: subscription + free tier
maturity: production
cost_tier: low ($0-20/mo)
year_first_public: 2022
last_verified: 2026-05-03
---

# Perplexity

> **Summary:** Conversational search and autonomous research product. Pro tier ($20/mo) includes unlimited Deep Research, the strongest source diversity and ranking among consumer agents, and citation density that is easy to verify. The default autonomous-research recommendation for most individuals.

**Sources:** [[raw/autonomous-research/03-perplexity.md]], [[raw/autonomous-research/00-overview.md]], [[raw/autonomous-research/08-limits-and-evals.md]]

## What it does

Answers questions with cited sources from the open web. Pro tier adds Deep Research (multi-step agent that browses, reads, and synthesizes a cited report), Spaces (per-topic context with shared sources), and Comet (an agentic browser; with security caveats).

## Access and cost

Free tier with daily query limits; Pro $20/mo (unlimited Deep Research); Enterprise tiers above.

## Distinctive trait

Source diversity and ranking are noticeably better than OpenAI Deep Research and Gemini Deep Research; cites a wider mix of sources and weights them more sensibly. Citation density is the highest in the category, making verification easy.

## Limits

- Citation hallucination still happens (12-37% across studies; lower with extended thinking).
- Comet (agentic browser) has had security disclosures in 2026 (Google Drive wipe via crafted email; 4-min phishing demo). The agent-as-passive-reader pattern is materially safer than agent-as-actor-on-your-accounts.
- Domain-specific danger zones: legal hallucination 18.7%, medical 15.6%; specialized tools (Westlaw AI, [Elicit](elicit.md)) outperform for those domains.

## See also

- [Autonomous research](../capabilities/autonomous-research.md)
- [OpenAI Deep Research](openai-deep-research.md), [Gemini Deep Research](gemini-deep-research.md): closed alternatives.
- [Elicit](elicit.md): peer-reviewed-paper specialist.
- [Shortlist](../analysis/shortlist.md)
