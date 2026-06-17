# Health and Personal Data MCP

## What it is
MCP servers that expose your private body, finance, and home data to an LLM, locally hosted, so the data does not pass through a third party. The pattern: self-host the server, point your client at it, ask natural-language questions of data that previously sat in five disconnected apps.

## Notable servers

### Open Wearables (the-momentum)
Started as Apple Health MCP (queries Apple Health XML exports via DuckDB) in 2025; expanded January 2026 into Open Wearables, a self-hosted platform unifying Apple Health, Garmin, Polar, Whoop, Suunto, Samsung Health Connect. Built-in MCP server for Claude/ChatGPT, Flutter SDK for continuous Apple Health sync (no manual XML export), backend + storage + UI. ~915 GitHub stars.

### Plaid MCP
Two main implementations: `wilderfield/plaid-mcp` and `ID45/finance-plaid-mcp`. Connects an LLM to Plaid's 12,000+ financial institutions for transaction history, balances, liabilities. Read-only; tokens stay local. Used to ask Claude "what subscriptions am I paying for that I haven't used in 90 days?"

### Perplexity + Plaid (managed)
April 2026: Perplexity's "Computer" product integrated Plaid for bank/credit/loan accounts inside Perplexity directly. Data stays on Plaid's infrastructure, not Perplexity's. The first "AI as personal CFO" managed offering.

### Home Assistant MCP
Exposes your smart home (lights, locks, thermostats, sensors) to an agent. "Turn off the lights if no one's home and it's after sunset" becomes a natural-language rule, not YAML automation.

### Obsidian / Logseq MCP
Read/write your personal notes vault. Agent can search across years of journals, append daily logs, link related notes.

## Specific unlocks
- "Why am I tired this week?" — Open Wearables agent cross-references HRV, sleep stages, training load across 6 wearable ecosystems and answers in prose.
- "Cancel anything I haven't used in 90 days" — Plaid MCP agent finds recurring charges, cross-references with email receipts (Gmail MCP), drafts cancellation emails.
- "Block 90 minutes when my next deep-work window historically lands" — Calendar MCP + Open Wearables agent schedules around your circadian peak.
- "Summarize this week from my journal and last 50 emails" — Obsidian MCP + Gmail MCP agent writes a Sunday review.

## Pre-AI baseline
Pre-MCP, "my AI sees my health data" required Apple to ship the integration (they didn't), or a custom shortcut that exported XML and uploaded to ChatGPT (worked once, not continuously). Personal finance was Mint or YNAB in their own walled garden. Home automation was YAML. Now an LLM is the unified UI.

## The personal-data-vault pattern
Self-host the server on your machine or a cheap VPS. Server holds the credentials and exposes a scoped MCP interface. Multiple LLM clients (Claude, ChatGPT, Cursor) can connect. Data flows: your devices → your server → MCP → LLM. The vendor never sees raw data, only the model's tool-call results filtered through your server's view layer.

## Cost / access
- Open Wearables: free, self-host
- Plaid MCP: free; Plaid sandbox is free for personal use, production Plaid keys cost ~$0.30 per linked account
- Home Assistant MCP: free
- Perplexity + Plaid: bundled with Perplexity Pro ($20/mo)

## Maturity
Open Wearables and Plaid MCP are usable today but rough edges: Apple Health continuous sync requires a Flutter companion app, Plaid OAuth has surprising token rotation behavior. Self-hosting still excludes ~95% of users on convenience grounds. Perplexity's managed model is the bridge for non-technical users.

## Sources
- https://github.com/the-momentum/apple-health-mcp-server
- https://www.themomentum.ai/open-source/mcp-apple-health-server
- https://chatforest.com/reviews/fitness-wearables-mcp-servers/
- https://glama.ai/mcp/servers/wilderfield/plaid-mcp
- https://www.perplexity.ai/hub/blog/plaid-integration-provides-full-view-of-personal-finances
- https://plaid.com/blog/plaid-perplexity-ai-financial-insights-integration/
