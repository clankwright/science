# Claude Desktop and Claude Code MCP Setup

## What it is
The canonical client-side MCP experience. Claude Desktop (the consumer chat app) and Claude Code (the terminal/IDE coding agent) are how most individuals first wire up MCP. Both load servers from JSON config files; both support stdio (local subprocess) and Streamable HTTP (remote) transports.

## Config file locations
- **Claude Desktop macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Claude Desktop Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Claude Code project scope**: `.mcp.json` in the project root (committed, shared with team)
- **Claude Code user scope**: managed via `claude mcp add` CLI, stored under user profile

## Specific unlocks
- "Three lines of JSON, agent has filesystem access" — paste a `filesystem` server entry into the config, restart, the model can read/write files in the allowed roots.
- "One double-click, server installed" — Desktop Extensions (`.mcpb` files, formerly `.dxt`) bundle an MCP server plus dependencies. Anthropic shipped this June 2025; the Claude Desktop UI now has an extension installer.
- `claude mcp add github -- npx -y @modelcontextprotocol/server-github` adds GitHub access to Claude Code in one shell command.
- Project-scoped `.mcp.json` lets a team commit "this repo uses Postgres + Linear + Sentry MCP" and every developer's Claude Code picks them up automatically.

## Pre-AI baseline
Pre-MCP, the Claude Desktop app could see only what you pasted. Claude Code as a coding agent existed but talked only to your filesystem and terminal. Connecting to GitHub, Linear, or Notion required custom shell wrappers and prompt engineering. Now you list a server in JSON, restart, done.

## Common config gotchas
- Claude Desktop launches MCP servers with a minimal PATH; use absolute paths to executables (e.g., `/opt/homebrew/bin/npx` not `npx`) or stdio fails silently.
- Restart Claude Desktop fully after every config edit; UI does not hot-reload.
- The MCP server runs in your local user context; treat its credentials as yours.
- For Windows users, the `.mcpb` Desktop Extensions installer avoids npm/Python install pain that breaks ~30% of fresh setups.

## Cost / access
Claude Desktop is free with a Claude.ai account. Claude Code requires a Pro/Max subscription or pay-per-use API. MCP servers themselves are free; per-call cost is just LLM tokens used while the agent talks to the server.

## Maturity
Claude Desktop's MCP support is the reference client implementation; everything else is measured against it. Desktop Extensions (.mcpb) are stable; the November 2025 spec's OAuth 2.1 and async tool-call features are rolling out through 2026. Claude Code's `mcp` CLI commands (add/list/remove) are stable.

## Sources
- https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop
- https://code.claude.com/docs/en/mcp
- https://modelcontextprotocol.io/docs/develop/connect-local-servers
- https://www.anthropic.com/engineering/desktop-extensions
- https://github.com/modelcontextprotocol/mcpb
