# MCP Ecosystem State, May 2026

## What it is
Snapshot of where the MCP ecosystem stands 18 months after the November 2024 launch.

## Numbers
- **97 million monthly SDK downloads** as of March 2026 (vs. 100K at launch — 970x in 16 months). Fastest adoption curve of any AI infrastructure standard.
- **Server registry sizes**: Glama 21K+, mcp.so 19.7K+, PulseMCP 11.8K+, Smithery 7K+. Heavy overlap; a Q1 2026 cross-registry census put unique published servers at ~5,950, while Nerq's deeper crawl indexed 17,468 across all known registries.
- **Q1 2025 to April 2026 main-registry growth**: 1,200 → 9,400+ (+18% MoM in Q1 2026).
- **78% of enterprise AI teams** have at least one MCP-backed agent in production (April 2026 survey).
- **67% of CTOs** name MCP their default agent integration standard.
- **100-server stress test** (Feb-Apr 2026, 12,000 trials): significant variance in uptime, error handling, schema correctness. Top quartile production-ready; bottom quartile abandonware.

## Biggest deployments
- **Anthropic Claude Desktop / Claude Code**: reference client; biggest individual user base.
- **OpenAI ChatGPT Apps**: rolled to all Business/Enterprise/Edu plans November 2025; full MCP since December 2025.
- **Google Gemini Enterprise Agent Platform**: replaced Vertex AI in April 2026; native MCP across the platform.
- **Cursor / Windsurf / Cline / Zed / VS Code Copilot agent mode / JetBrains AI**: every major coding agent ships MCP support.
- **Microsoft Copilot Studio + Foundry**: GA December 2025.
- **Vercel AI SDK, OpenAI Agents SDK, LangChain, LlamaIndex**: framework-level adapters.

## Governance
- December 2025: Anthropic donated MCP to **Agentic AI Foundation under the Linux Foundation**. Founding members: Anthropic, OpenAI, Google, Microsoft, AWS, Block. Removes single-vendor governance concerns.
- Spec versions: 2025-03-26 (Streamable HTTP transport), 2025-06-18 (first stable connector model), 2025-11-25 (OAuth 2.1, async, capability scoping).

## Where standardization still has gaps
- **Tool naming**: no global namespace; many servers ship a `search` or `list` tool. Model picks wrong one. Some clients prefix tools with the server name; not universal.
- **Auth and identity**: per-server OAuth flows, no unified vault. Doppler/1Password integrations partial.
- **UI extensions**: ChatGPT Apps SDK adds renderable UI (cards, forms) on top of MCP; other clients ignore it. Not yet in the spec.
- **Long-running tasks**: November 2025 spec added async, but client support uneven.
- **Agent-to-agent**: Google's A2A protocol overlays MCP for inter-agent calls. Not yet standardized cross-vendor.
- **Permissions UX**: most clients show "approve every tool call" or "auto-approve all"; no fine-grained per-tool policies in the consumer UIs.
- **Registry trust**: no signing, no verified-publisher badges, no centralized vulnerability disclosure for servers. PulseMCP's hand-curation is the de-facto trust layer.

## Specific unlocks (state of the world)
- "Any LLM, any tool" is essentially solved for the popular 100+ tools and the popular 6 clients.
- "Wire up your stack in one afternoon" is a real claim for a non-developer who can edit one JSON file.
- "Build a custom MCP server in an afternoon" is a real claim for any developer who knows Python or TypeScript.
- "Share your stack as a `.mcpb` file" is shipping in Claude Desktop and being adopted by other clients.

## What to expect by end of 2026
- Cross-vendor UI extensions (ChatGPT Apps SDK pattern) likely standardized.
- Signed servers, verified publishers, and a default trust list in major clients.
- A2A or successor protocol likely formally adopted by the Linux Foundation alongside MCP.
- Per-tool fine-grained permission UX in consumer clients.
- Continued long-tail server proliferation; expect 30K+ unique published servers.

## Pre-AI baseline
None. There was no equivalent "tools standard for AI" before MCP; ChatGPT plugins was the closest attempt and failed at protocol-level adoption. The whole ecosystem is 18 months old.

## Cost / access
Free protocol, free SDKs, free reference servers. Hosted gateways (Composio, Smithery hosted, Pipedream) charge for convenience. Vendor clients have their own pricing (Claude Pro $20, ChatGPT Plus $20, Cursor $20, etc.).

## Maturity
Past tipping point in March 2025 with OpenAI's adoption. Past consolidation point in December 2025 with Linux Foundation governance. Now in the "boring infrastructure" phase: improvements in spec, security hygiene, and UX rather than wholesale changes.

## Sources
- https://www.digitalapplied.com/blog/mcp-adoption-statistics-2026-model-context-protocol
- https://www.pulsemcp.com/statistics
- https://workos.com/blog/everything-your-team-needs-to-know-about-mcp-in-2026
- https://www.pento.ai/blog/a-year-of-mcp-2025-review
- https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/
- https://www.digitalapplied.com/blog/mcp-server-reliability-100-server-stress-test-study
- https://medium.com/@dave-patten/mcps-next-phase-inside-the-november-2025-specification-49f298502b03
