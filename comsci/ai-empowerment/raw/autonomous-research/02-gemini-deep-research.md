# Google Gemini Deep Research

- **Vendor:** Google DeepMind
- **First shipped:** December 2024 (in Gemini Advanced); upgraded to Gemini 2.0 Flash Thinking in Feb 2025; Deep Research Max tier added late 2025
- **Underlying model:** Gemini 3.1 Pro (as of late 2025)
- **URL:** https://gemini.google/overview/deep-research/

## Access and pricing

| Tier | Cost | Notes |
|---|---|---|
| Google AI Free | $0 | Limited Deep Research |
| Google AI Pro | $19.99/mo | Full Deep Research, 1M context, Gemini 3.1 Pro |
| Google AI Ultra | ~$125/3mo | Higher quotas, Deep Research Max |
| Gemini API | $2-15 per research task | Pay-per-use, devs/integrators |

## How it works

User submits a topic. Gemini drafts a multi-step research plan (visible in the UI) and asks for confirmation or edits before running. Plan execution browses 100-300 sites in parallel, takes 5-15 minutes typically. Output is a structured report with section-level citations.

## Distinctive features

- **1M-token context window.** Largest of any production research agent. Allows the agent to keep entire papers and multiple long sources in memory simultaneously, rather than RAG-chunking them. The 1M context is paired with a RAG layer for follow-up Q&A so the agent "remembers" everything from the session.
- **Editable plan.** User can revise the plan before execution starts — unique vs OpenAI's "trust the agent" approach.
- **Deep Research Max (Ultra tier).** Adds MCP (Model Context Protocol) support, native data visualizations, and longer-horizon workflows. Targeted at users who want the agent to call into their own tools/data.
- **Tight Workspace integration.** Reports export cleanly to Google Docs.
- **Cost.** $20/mo Pro tier is the cheapest serious tier among the big-three.

## Weaknesses

- Output style tends toward listicles / bullet-heavy structure; less narrative cohesion than OpenAI DR.
- Source weighting biased toward Google-indexed open web; weaker on Reddit, Twitter, and academic.
- Plan editing is great for power users, friction for casual ones.

## Sources

- https://blog.google/innovation-and-ai/models-and-research/gemini-models/next-generation-gemini-deep-research/
- https://gemini.google/overview/deep-research/
- https://gemini.google/subscriptions/
- https://ai.google.dev/gemini-api/docs/pricing
- https://www.mindstudio.ai/blog/google-gemini-deep-research-max-api-review
