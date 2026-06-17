# Perplexity (Pro, Deep Research, Spaces, Comet)

- **Vendor:** Perplexity AI
- **Deep Research launched:** February 2025 (consumer); Sonar Deep Research API March 7, 2025
- **URL:** https://perplexity.ai

## Access and pricing

| Tier | Cost | Notes |
|---|---|---|
| Free | $0 | Basic searches, limited Deep Research |
| Pro | $20/mo or $200/yr | Unlimited Deep Research, file uploads, model picker |
| Max | $200/mo or $2000/yr | Priority access to o3-pro, Claude Opus 4, Comet browser |
| Enterprise Pro | $40/seat/mo | Team Spaces |
| Enterprise Max | $325/seat/mo | 5000 files per Space |

API: $2/M input tokens, $8/M output tokens; typical Deep Research run ~$0.15.

## Product surfaces

- **Standard search.** Single-query answer with citations. ~5-15 sec.
- **Deep Research.** Multi-step run, ~3-10 min, browses 30-200 sources, returns a structured report. Faster than OpenAI but typically less depth per source.
- **Spaces.** Persistent workspaces holding uploaded files + custom instructions + chat history. Effectively a per-project research notebook with team sharing in Enterprise tiers.
- **Comet browser.** Agentic browser launched mid-2025 at $200/mo, went free across iOS / Android / Mac / Windows in 2026. Browser sees the page you're on, can run multi-step tasks across tabs (book travel, fill forms, summarize and act).
- **Model picker.** Pro and Max users can route queries to GPT-5, Claude Opus 4.6, Gemini 3, etc.

## Distinctive features

- **Source diversity and quality.** Strongest of the consumer tools at pulling from across Reddit, news, blogs, papers, official docs — not just the SEO top-10. Source ranking is Perplexity's technical edge.
- **Citation density.** Inline citations on nearly every sentence; easiest of the consumer tools to verify.
- **Speed.** Standard search is conversational-fast; Deep Research is faster than OpenAI's.
- **Comet integration.** Research → action loop in the same surface.

## Weaknesses

- Reports are usually shorter and less narrative than OpenAI Deep Research.
- 2026 has surfaced security issues with Comet's agentic capabilities (prompt injection from emails, phishing demos, a Google Drive wipe attack via crafted email). Affects the agentic browser, not the research feature itself, but worth knowing.
- Max tier is expensive for what amounts to model-routing convenience.

## Sources

- https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you
- https://www.finout.io/blog/perplexity-pricing-in-2026
- https://pricepertoken.com/pricing-page/model/perplexity-sonar-deep-research
- https://www.perplexity.ai/comet
- https://thehackernews.com/2026/03/researchers-trick-perplexitys-comet-ai.html
- https://brave.com/blog/comet-prompt-injection/
