# Composio MCP

## What it is
A hosted MCP gateway that exposes 850+ pre-built tool integrations (Gmail, Slack, GitHub, Notion, Linear, Jira, Salesforce, HubSpot, Stripe, Figma, Airtable, etc.) behind a single MCP endpoint. Handles OAuth, token refresh, retries, and per-tool permission scoping so a user does not maintain dozens of separate MCP servers and credential files.

## Specific unlocks
- "One auth flow, 850 integrations" — connect Composio to Claude Desktop once, then add Gmail, Slack, Linear, and Notion through Composio's web UI; tokens stay in Composio's vault.
- Skip the per-tool MCP server install: instead of running 6 npx processes locally, Composio is one remote server entry in your config.
- Scoped predefined actions ("send_email_with_attachment") rather than raw API access — reduces the agent's blast radius if it gets prompt-injected.
- Free tier covers 20K tool calls/month, enough for daily personal use.

## Pre-AI baseline
Pre-MCP and pre-Composio, integrating an agent with even three SaaS tools meant: register OAuth apps with each, store refresh tokens, write retry/backoff per service, handle rate limit headers per service, deal with each provider's pagination. A weekend project per integration. Composio collapses this into a checkbox per tool.

## Cost / access
- Free: 20K tool calls/month
- Standard: $29/mo, 200K calls
- Professional: $229/mo, 2M calls
- Enterprise: custom

All tiers get the full integration catalog; pricing is on volume, not feature gating.

## Maturity
Production-grade as of mid-2025. Used as the default integration layer for many no-code agent builders. Main risks: vendor lock-in (your tokens live in Composio), and a single point of failure for your agent's tool access. Composio also publishes an open-source MCP gateway you can self-host if that bothers you.

## Notable alternatives
- **Rube** (by Composio's competitor): 500+ apps, similar single-endpoint model
- **Nango**: open-source, self-host friendly, fewer pre-built tools
- **StackOne** and **Truto**: enterprise-leaning, deeper per-vertical integration (HR, ATS)
- **Pipedream MCP**: 2,500+ apps via existing Pipedream connectors

## Sources
- https://composio.dev/
- https://composio.dev/mcp-gateway
- https://composio.dev/content/best-mcp-gateway-for-developers
- https://nango.dev/blog/composio-alternatives/
- https://truto.one/blog/stackone-vs-composio-vs-truto-best-mcp-server-platform-in-2026/
