---
id: playwright-mcp
title: "Playwright MCP"
kind: tool
vendor: Microsoft
access: open-source (free)
maturity: production
cost_tier: free (LLM API costs separate)
year_first_public: 2024
last_verified: 2026-05-03
---

# Playwright MCP

> **Summary:** Microsoft's MCP server wrapping Playwright. Installs in one `npx` command. Lets any MCP-aware LLM host (Claude Desktop, Claude Code, Cursor, Cline) drive a real browser via accessibility-tree snapshots, ~10x cheaper per step than vision-based agents. Best entry point for technical users into browser automation; pair with [Claude Code](claude-code.md) for the highest-leverage individual workflow.

**Sources:** [[raw/browser-use/00-overview.md]], [[raw/browser-use/01-claude-computer-use.md]]

## What it does

Runs a Playwright-controlled browser as an MCP server. The LLM host gets tools like `browser_navigate`, `browser_snapshot`, `browser_click`, `browser_type`. Uses accessibility-tree snapshots (text representation of the page structure) rather than screenshots, which is faster and cheaper for the LLM to reason over.

## Access and cost

Free; install via `npx @playwright/mcp`. Bring your own LLM (Anthropic API, OpenAI API, etc.); cost is just the LLM tokens, no per-task fee.

## Distinctive trait

Cheapest per-step browser automation in the category because it avoids vision tokens. Works in any MCP-compatible host so the user is not locked to one vendor.

## Limits

- Accessibility-tree representation breaks for canvas-heavy or aggressively-styled apps; vision-based agents (e.g., [Claude Computer Use](claude-computer-use.md)) handle those better.
- Requires the user to be comfortable with a terminal and an MCP-aware client.
- Same prompt-injection and confused-deputy security risks as all browser-use agents: a logged-in agent reading hostile page content can be hijacked.

## See also

- [Browser use](../capabilities/browser-use.md)
- [Claude Computer Use](claude-computer-use.md), [ChatGPT Agent](chatgpt-agent.md): vendor-managed alternatives.
- [Browser Use lib](browser-use-lib.md): open-source Python library alternative.
- [Shortlist](../analysis/shortlist.md)
