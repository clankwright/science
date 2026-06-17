# MCP (Model Context Protocol) Overview

## What it is
An open protocol introduced by Anthropic in November 2024 that lets any LLM client discover and call any tool from any provider over a standardized JSON-RPC interface. Compared to "USB-C for AI": one cable, many devices. Donated to a Linux Foundation body (Agentic AI Foundation) in December 2025, which removed Anthropic-specific governance and accelerated cross-vendor support.

## Protocol design (the three primitives)
- **Tools**: executable actions an agent can call (`list_emails`, `send_message`, `query_db`). Each tool exposes a JSON schema for arguments. The model decides when to call.
- **Resources**: read-only data the host can fetch and inject as context (a file, a Notion page, a calendar). Identified by URI; clients list and read on demand.
- **Prompts**: reusable templates the server exposes (`/summarize-thread`, `/draft-pr-description`). User-triggered, not model-triggered.

A separate `sampling` primitive lets the server ask the client's model to do an LLM call back, enabling agent loops inside the server. Transports are stdio (local) and Streamable HTTP (remote, replaced SSE in the 2025-03-26 spec). The November 2025 spec added OAuth 2.1 with PKCE, async long-running tasks, and tighter capability scoping.

## Specific unlocks
- One config file (`claude_desktop_config.json` or `.mcp.json`) wires Claude / Cursor / Windsurf / VS Code Copilot / ChatGPT into Gmail, GitHub, your filesystem, and a Postgres database in five minutes, no per-tool integration code.
- Switching LLM clients keeps your tool stack: same MCP servers work in Claude Desktop, ChatGPT, Cursor, and Zed.
- Sharing a `.mcpb` bundle with a friend gives them an identical agent setup with one double-click.
- Custom internal tools (your scripts, your DB) become first-class agent capabilities by wrapping them in ~50 lines of FastMCP Python.

## The 2024-2026 adoption arc
- Nov 2024: Anthropic open-sources MCP, ships reference servers (filesystem, git, GitHub, Slack, fetch, memory, sequential-thinking).
- Mar 2025: OpenAI adopts MCP across Agents SDK, Responses API, ChatGPT desktop. ChatGPT "Connectors" launches.
- Jun 2025: Anthropic ships DXT (later renamed MCPB) one-click install bundles for Claude Desktop.
- Dec 2025: Google announces fully managed remote MCP servers for Maps, BigQuery, Compute Engine, GKE. Microsoft GAs MCP across Copilot Studio and Foundry. Anthropic donates MCP to Agentic AI Foundation under Linux Foundation.
- Mar 2026: 97M monthly SDK downloads (vs. 100K at launch, 970x in 16 months).
- Apr 2026: ChatGPT renames Connectors to "Apps", supports MCP across all Business/Enterprise/Edu plans. Google retires Vertex AI brand into Gemini Enterprise Agent Platform with full MCP support. Public registries: Glama 21K+, mcp.so 19.7K+, Smithery 7K+, PulseMCP 11.8K+ (heavy overlap; ~5,950 unique servers across the four main registries per Q1 2026 census).

## Why it matters for individuals
Pre-MCP, every "AI assistant connects to my Gmail" claim meant the assistant vendor had built that one integration. Most things never got integrated. MCP collapses the integration cost: any tool with an MCP server is usable by any MCP-compatible client. An individual can wire up their inbox, calendar, GitHub, bank, browser, code editor, and a self-hosted knowledge base into one agent surface in under an hour, free aside from the LLM subscription.

## Sources
- https://www.anthropic.com/news/model-context-protocol
- https://modelcontextprotocol.io/specification/2025-11-25
- https://en.wikipedia.org/wiki/Model_Context_Protocol
- https://www.pento.ai/blog/a-year-of-mcp-2025-review
- https://thenewstack.io/why-the-model-context-protocol-won/
- https://workos.com/blog/everything-your-team-needs-to-know-about-mcp-in-2026
