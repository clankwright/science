---
id: chatgpt-agent
title: "ChatGPT Agent"
kind: tool
vendor: OpenAI
access: subscription
maturity: production (still labeled beta)
cost_tier: bundled with $20/mo Plus
year_first_public: 2025
last_verified: 2026-05-03
---

# ChatGPT Agent

> **Summary:** OpenAI's browser-use agent. Lives as an "agent mode" dropdown inside the existing ChatGPT subscription; lowest friction to browser automation for non-developers. Replaced standalone Operator on Aug 31, 2025. Caps: 40 tasks/mo on Plus, 400 on Pro ($200).

**Sources:** [[raw/browser-use/00-overview.md]], [[raw/browser-use/02-chatgpt-agent.md]]

## What it does

Inside the ChatGPT app, switch to Agent mode and give a goal that requires browsing the web (research a product, fill a form, book an appointment, scrape a page into a doc). The agent drives a sandboxed browser, asks for confirmation on irreversible actions, and returns results.

## Access and cost

Bundled with ChatGPT Plus ($20/mo, 40 tasks/mo) and Pro ($200/mo, 400 tasks/mo). No standalone tier as of May 2026.

## Distinctive trait

Lowest friction for non-developers. No setup, no MCP, no API key; just a dropdown in the chat app most users already pay for. Confirmation gates on consequential actions are well-implemented.

## Limits

- Capped at 40 tasks/mo on Plus, which fills quickly.
- Slow per-task (often several minutes).
- Same security and prompt-injection risks as all browser-use agents.
- Browser is sandboxed; the agent does not act directly on your logged-in personal sessions unless you explicitly sign in inside the agent's browser (which has its own risk profile).

## See also

- [Browser use](../capabilities/browser-use.md)
- [Playwright MCP](playwright-mcp.md): technical alternative.
- [Claude Computer Use](claude-computer-use.md): Anthropic's equivalent.
- [Shortlist](../analysis/shortlist.md)
