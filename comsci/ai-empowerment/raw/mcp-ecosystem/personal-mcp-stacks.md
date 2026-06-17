# Personal MCP Stacks

## What it is
The set of MCP servers a power user actually wires up. By Q1 2026 community-shared "stacks" have settled into a few archetypes. The pattern: 4-8 servers covering inbox, calendar, code, knowledge, and filesystem, plus one browser server for everything else.

## Common archetypes

### Knowledge worker stack
- `taylorwilsdon/google_workspace_mcp` (Gmail + Calendar + Docs + Sheets + Drive in one)
- `notion-mcp` (workspace search/read/write)
- `slack-mcp-server` (zencoderai fork, since Anthropic's reference Slack server is unmaintained)
- `filesystem` server scoped to `~/Documents`
- `fetch` for general web reads
Result: agent that triages email, drafts replies, finds the right Notion page, summarizes a Slack thread, and writes notes back to Drive.

### Developer stack
- `github` (PRs, issues, search)
- `linear-mcp` (issue tracking)
- `git` + `filesystem` (local repo work)
- `sentry-mcp` (errors and events)
- `postgres` or `sqlite` (read-only DB access)
- `playwright` MCP (browser testing)
Result: agent that triages production errors, opens linked Linear tickets, drafts a fix branch, runs tests, and opens a PR.

### Personal-life stack
- `google_workspace_mcp` (Gmail + Calendar)
- `apple-health-mcp-server` or Open Wearables (fitness/sleep data)
- `plaid-mcp` (bank accounts, transactions, net worth)
- `obsidian-mcp` or `logseq-mcp` (personal notes)
- `home-assistant-mcp` (lights, thermostat, locks)
Result: agent that schedules around your sleep, reminds you of unusual spending, files receipts to your notes vault.

### Research stack
- `arxiv-mcp` (paper search and download)
- `zotero-mcp` (reference manager)
- `fetch` + `brave-search` or `tavily-mcp` (web research)
- `filesystem` scoped to `~/papers`
- `obsidian-mcp` (note-taking)
Result: agent that finds papers, pulls PDFs, extracts citations, writes literature notes.

## Specific unlocks
- "Two-config-file portability" — copy your `claude_desktop_config.json` between machines and your entire agent stack moves with you. Same agent on laptop, desktop, and a friend's machine.
- "Trial a friend's stack in five minutes" — paste their JSON into your config, run `npm install` once, restart. Now you have their workflow.
- Stacks get shared as gists, in Discord pinned messages, and increasingly as `.mcpb` bundles.
- `awesome-mcp-servers` repos curate stacks by use-case; PulseMCP's "Collections" feature does the same.

## Pre-AI baseline
Pre-MCP, "my AI assistant works with all my tools" required either Zapier-style triggers (limited and async), per-app browser extensions, or an enterprise Copilot license. None offered the "share a config file" portability.

## Cost / access
Free, aside from LLM subscription. Most servers are open-source; some (Composio, Plaid via Perplexity) bundle hosted convenience for $20-30/mo.

## Maturity
Personal stacks are real; thousands of users share configs publicly. Two friction points remain: (1) credential management (each server reads its own env vars; no unified vault), (2) tool name collisions when many servers expose similar tools (`search`, `list`). 1Password and Doppler integrations and tool-namespacing in the November 2025 spec are addressing both.

## Sources
- https://github.com/appcypher/awesome-mcp-servers
- https://github.com/tolkonepiu/best-of-mcp-servers
- https://github.com/taylorwilsdon/google_workspace_mcp
- https://github.com/nspady/google-calendar-mcp
- https://blog.skyvia.com/best-mcp-servers/
- https://blog.premai.io/25-best-mcp-servers-for-ai-agents-complete-setup-guide-2026/
