# OpenAI Deep Research

- **Vendor:** OpenAI
- **Launched:** February 2, 2025
- **Underlying model:** Fine-tuned variant of o3, post-trained on browsing + reasoning tasks
- **URL:** https://openai.com/index/introducing-deep-research/

## Access tiers and pricing (as of mid-2026)

| Tier | Monthly cost | Deep Research queries/month |
|---|---|---|
| Free | $0 | 5 |
| Plus | $20 | 25 |
| Pro | $200 | 250 |
| Team | $25-30/seat | 25 |
| Enterprise / Edu | Custom | 25 |

(Quotas were lower at launch — Pro started at 100/mo, Plus at 10/mo; expanded in two stages through April 2025.)

## How it works

User submits a question. Model first asks 1-3 clarifying questions (scope, depth, format). Then runs autonomously for typically 5-30 minutes:

- Plans a research outline.
- Issues web searches via OpenAI's browse tool.
- Opens pages, reads, takes notes in its scratchpad.
- Iterates: identifies gaps, runs follow-up searches.
- Synthesizes a long-form report (often 5-30 pages) with inline citations.

User can watch the live activity feed (search queries, page titles being read, the model's own reasoning summary).

## Performance

- 26.6% on Humanity's Last Exam at launch — the SOTA score at the time, beating DeepSeek R1 by 177%.
- Strong on domains with rich open-web sources (tech, business, current events).
- Weaker on academic literature where the best sources are paywalled.

## Distinctive features

- **Long autonomous runtime.** 5-30 min is the longest of the consumer-facing tools. Trades latency for depth.
- **Live activity stream.** User sees the agent's reasoning steps in real time, building trust.
- **Image and PDF handling.** Can read charts and analyze uploaded PDFs as part of the loop.
- **Output quality.** Generally rated highest for "looks like a McKinsey deck" polish.

## Weaknesses

- Slowest of the consumer agents.
- Citation accuracy roughly in line with other frontier models — non-trivial fabrication rate.
- Pro-tier price ($200/mo) was the gate at launch; even with the Plus tier opening, 25/mo isn't a lot for a power user.
- No private-data integration in consumer tier (vs Claude Research, which integrates Google Workspace).

## Sources

- https://openai.com/index/introducing-deep-research/
- https://techcrunch.com/2025/02/25/openai-rolls-out-deep-research-to-paying-chatgpt-users/
- https://openai.com/business/chatgpt-pricing/
- https://www.constellationr.com/blog-news/insights/openais-launch-deep-research-starts-make-chatgpt-pro-subscription-worth-it
