# Smithery and MCP Discovery Registries

## What it is
Public directories where users browse, search, and install MCP servers. The four largest as of Q1 2026:
- **Glama.ai/mcp/servers**: 21,000+ servers, largest by raw count, daily updates, visual previews.
- **mcp.so**: 19,700+ servers, community-submitted, strong on third-party/unofficial tools.
- **PulseMCP**: 11,840+ servers, hand-reviewed by the founder, best signal-to-noise.
- **Smithery.ai**: 7,000+ servers, app-store UX, one-click install commands, hosted remote servers.

Heavy overlap: an independent Q1 2026 census across the four registries counted ~5,950 unique servers; Nerq's deeper crawl across all known registries indexed 17,468.

## Specific unlocks
- "Find an MCP server for X" — search Glama or mcp.so, filter by stars/recency, copy the install snippet straight into your `claude_desktop_config.json`.
- Smithery hosts the server for you: paste a remote URL into your client instead of running anything locally. Skips dependency hell on Windows.
- PulseMCP's hand-curation catches tool poisoning early; Glama is where you go for "does this niche thing exist yet."
- `mcpfinder` is itself an MCP server: install it, then ask your agent "find me an MCP for Postgres with row-level security" and it queries all four registries and installs the chosen one.

## Pre-AI baseline
Pre-MCP, finding "the right" SaaS integration for an agent meant scrolling Zapier or IFTTT and hoping the trigger you needed existed. The MCP equivalent is broader (any tool, any data source, not just trigger-action) and free.

## How discovery actually works
1. Browse a registry web UI, find the server.
2. Copy install command (e.g., `npx -y @some/server`) and required env vars into your client's MCP config.
3. Restart client. Tools appear in the model's tool list.
4. Smithery and DXT-style installers compress steps 1-3 into "click install."

## Cost / access
All four registries are free to browse. Smithery monetizes hosting; the rest take sponsorship/paid placement. Most listed servers are MIT/Apache.

## Maturity
Discovery is genuinely solved for popular tools. Long tail is uneven: many registry entries are abandoned, single-author, or thin wrappers around an HTTP API. Reliability varies wildly — a Q1 2026 stress test of 100 production servers across 12K trials found significant variation in uptime and error handling. Quality filtering (PulseMCP's curation, Glama's star counts) is necessary.

## A meta-tool worth naming
**mcpfinder.dev** ships an MCP server whose only job is to discover and install other MCP servers across all four major registries. It is the right answer to "I want my agent to extend its own capabilities."

## Sources
- https://www.pulsemcp.com/statistics
- https://glama.ai/mcp/servers
- https://smithery.ai/
- https://mcp.so/
- https://github.com/mcpfinder/mcpfinder
- https://www.truefoundry.com/blog/best-mcp-registries
- https://automationswitch.com/ai-workflows/where-to-find-mcp-servers-2026
