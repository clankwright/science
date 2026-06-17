# Anthropic Claude — Web search + Extended thinking + Research

- **Vendor:** Anthropic
- **Web search GA:** May 2025
- **Research feature:** Mid-2025, expanded through 2026
- **URL:** https://claude.ai

## Three overlapping capabilities

Anthropic ships this as three composable features rather than one branded product:

1. **Web search tool.** Real-time web access; Claude generates targeted queries, reads results, returns a cited answer. Available on Claude 3.5/3.7 Sonnet, Haiku, and Claude 4/4.6/4.7 Opus.
2. **Extended thinking.** Visible reasoning trace before answering; better for complex multi-step problems. Can interleave with tool use, including web search.
3. **Research mode.** A multi-agent workflow that spans web + Google Workspace + connected integrations (Notion, GitHub, etc.) over 1-3 minutes and 5+ tool calls. Enabling Research auto-enables extended thinking.

## Access and pricing

| Tier | Cost | Notes |
|---|---|---|
| Free | $0 | Limited web search |
| Pro | $20/mo | Web search + extended thinking + Research |
| Max 5x | $100/mo | Higher rate limits |
| Max 20x | $200/mo | Highest rate limits, priority models |
| API | Pay-per-use | Web search billed as a tool call |

## Distinctive features

- **Multi-agent architecture.** Anthropic's published engineering writeup describes a lead Claude agent that spawns parallel sub-agents for different research threads, then synthesizes. Closer to the OpenAI DR architecture than Perplexity's single-shot model.
- **Workspace + integrations as first-class sources.** Research can pull from your Google Drive, Gmail, Notion, GitHub etc. alongside the open web. None of the others integrate private data this cleanly at the consumer tier.
- **Extended thinking visible.** User can read the agent's reasoning trace.
- **No prominent "Deep Research" branding.** Less marketed than OpenAI's offering — the capability is real but discovery is weaker.

## Weaknesses

- Less polished report formatting than OpenAI DR or You.com ARI.
- Shorter typical runtimes (1-3 min vs OpenAI's 5-30 min) means less depth.
- The three-feature decomposition is powerful for power users but confusing for newcomers ("which mode do I want?").

## Sources

- https://support.claude.com/en/articles/11095361-when-should-i-use-web-search-extended-thinking-and-research
- https://www.anthropic.com/engineering/multi-agent-research-system
- https://www.anthropic.com/news/visible-extended-thinking
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool
- https://www.infoq.com/news/2025/05/anthropic-web-search/
