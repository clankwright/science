# Anthropic Reference MCP Servers

## What it is
The foundational set of open-source MCP servers Anthropic published alongside the November 2024 protocol launch, hosted at `github.com/modelcontextprotocol/servers`. They serve two purposes: (1) reference implementations of every protocol primitive, (2) immediately useful tools that most users wire up first. Most have been migrated into community-maintained "archived" form as third-party drop-in replacements matured, but the reference list still defines the canonical default stack.

## The reference set
- **filesystem**: read/write/list files under configurable allow-listed roots. The single most-installed MCP server.
- **git**: repo introspection, diff, log, blame, status, commit. Local repos only.
- **github**: full GitHub API: PRs, issues, branches, file contents, search. OAuth or PAT.
- **slack**: list channels, post messages, reply to threads, add reactions, fetch history.
- **fetch**: pull a URL and return cleaned markdown. Lets a model "browse" any public page.
- **memory**: knowledge-graph persistent memory. Long-lived facts across sessions.
- **sequential-thinking**: forces the model into explicit step-by-step reasoning slots; useful as a planning scaffold.
- **everything**: a test/reference server exercising every primitive (tools, resources, prompts, sampling).
- **postgres** and **sqlite**: read-only SQL query tools.
- **brave-search**: web search via Brave's API.
- **google-drive**, **google-maps**, **gdrive**: workspace/maps integrations (some moved to Google's own hosted servers in Dec 2025).
- **puppeteer** (now superseded by Microsoft's Playwright MCP for browser work).

## Specific unlocks
- "Give Claude write access to one folder" — drop the filesystem server pointed at `~/projects/scratch`, and the agent edits, creates, and refactors files in that scope only.
- "Have Claude review a local repo" — git server + filesystem server: the model reads `git log`, diffs branches, opens files, and proposes a commit message without ever touching GitHub.
- "Triage GitHub notifications" — github server: agent reads your inbox, labels issues, drafts PR review comments.
- "Pin a long-running fact" — memory server stores `user.timezone = JST`, `user.editor = nvim` and the agent recalls them in every future session.

## Pre-AI baseline
Pre-MCP, "let an AI read my filesystem" was a custom integration each chat app built once and shipped under their brand. ChatGPT Code Interpreter only saw uploaded files; Claude only saw pasted text. The reference servers normalized this so any client could grant filesystem/git/GitHub access via an identical config.

## Cost / access
Free, MIT-licensed. Need Node.js or Python locally for stdio servers, plus credentials (GitHub PAT, Slack bot token, etc.) for ones that hit external APIs. Most install via `npx -y @modelcontextprotocol/server-filesystem /path/to/dir` with no global install.

## Maturity
Production-grade for filesystem/git/github/fetch/memory; these are the most battle-tested servers in the ecosystem. The Slack reference server has been deprecated in favor of `zencoderai/slack-mcp-server` and similar community forks. Many third-party servers (e.g., `taylorwilsdon/google_workspace_mcp`) now exceed the official ones in feature coverage.

## Sources
- https://github.com/modelcontextprotocol/servers
- https://modelcontextprotocol.io/examples
- https://www.pulsemcp.com/servers/modelcontextprotocol-git
- https://www.pulsemcp.com/servers/modelcontextprotocol-github
- https://www.taskade.com/blog/mcp-servers
