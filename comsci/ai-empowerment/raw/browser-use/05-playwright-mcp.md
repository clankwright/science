# Playwright MCP (Microsoft)

**Source date:** verified 2026-05-03
**URLs:**
- https://github.com/microsoft/playwright-mcp
- https://playwright.dev/docs/getting-started-mcp
- https://playwright.dev/mcp/introduction
- https://claude.com/plugins/playwright
- https://www.builder.io/blog/playwright-mcp-server-claude-code
- https://lalatenduswain.medium.com/playwright-mcp-vs-claude-in-chrome-which-browser-testing-tool-should-you-use-in-2026-e502bee0067a
- https://testomat.io/blog/playwright-mcp-claude-code/

## What it is

Microsoft's official Model Context Protocol server that exposes Playwright's full API as MCP tools to any compatible LLM client (Claude Desktop, Claude Code, Cursor, Cline, Windsurf, Continue, Zed). Instead of feeding the model raw screenshots, it sends a structured accessibility-tree snapshot of the page; the model picks elements by role/name and the tool resolves them. ~40 tools covering navigation, forms, network mocking, storage, tracing, video, downloads.

## Vendor / Access

- Vendor: Microsoft (the Playwright team)
- License: Apache 2.0
- Install: `npx @playwright/mcp@latest` or via the Claude plugins marketplace
- Companion: **Playwright CLI** (2026), a shell-tool variant that saves snapshots to disk instead of streaming into context, for ~4x token savings on long sessions

## Cost

- Free. Pays only for the LLM client.
- Persistent sessions reuse cookies and login state across runs by default.

## Maturity

- Production. Maintained by the Playwright team itself; treated as a first-class deliverable alongside Playwright Test.
- Standard reference for "give Claude / Cursor / etc. a browser" in 2026 dev workflows.

## Distinctive trait

Accessibility-tree snapshots, not pixel screenshots. Two consequences:
1. ~10x cheaper per step than vision-based agents; tokens scale with DOM depth, not image size.
2. Skips a whole class of grounding errors: the model never has to guess pixel coordinates.

Tradeoff: cannot operate canvas-rendered apps (Figma, Google Maps, in-browser games), pixel-precise drag, or sites that block accessibility introspection.

## Individual-empowerment angle

The "free, local, just works" option. Anyone with Claude Desktop or Claude Code can install Playwright MCP in one command and start asking the model to operate a browser. No cloud account, no per-task fee, no waitlist. For technical users, this is the single most impactful browser-agent setup precisely because there is nothing to procure: the model client they already pay for plus an `npx` install.

Common use: ask Claude Code to open a localhost dev server, click through a UI, take screenshots of broken layouts, extract text from a third-party site for a script. Effectively replaces a junior QA seat for personal projects.
