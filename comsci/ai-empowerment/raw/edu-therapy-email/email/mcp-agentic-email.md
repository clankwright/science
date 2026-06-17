# Agentic email: Claude Gmail MCP, Gemini Workspace, and the DIY pattern

**Captured:** 2026-05-03
**Sources:**
- https://composio.dev/toolkits/gmail/framework/claude-agents-sdk
- https://composio.dev/toolkits/gmail/framework/claude-code
- https://github.com/GongRzhe/Gmail-MCP-Server
- https://raf.dev/blog/gmail-cli/
- https://medium.com/@emilio.delgiudice/a-personal-email-assistant-ac1a502d50fd
- https://skywork.ai/skypage/en/google-gemini-ai-assistant/2034272483900936192
- https://tactiq.io/learn/claude-vs-gemini
- https://mcpmarket.com/tools/skills/email-agent-for-atris

## What changed in 2025

Anthropic shipped Model Context Protocol (MCP) in late 2024. By 2025 a dozen Gmail MCP servers existed (GongRzhe's reference implementation, Composio's hosted version, the Atris email agent skill, etc.). Anyone running Claude Desktop, Claude Code, or the Claude Agent SDK can connect their Gmail in 5-30 minutes and let the model:

- Search mail by sender, label, date, content.
- Read full threads.
- Draft, send, reply.
- Apply/remove labels.
- Archive, delete, trash.
- Manage contacts.

Same pattern for Google Calendar (read events, create meetings, find free slots) and Google Drive (read/write docs).

Google Gemini's Workspace-native equivalent: Gemini in Gmail can draft, summarize, polish, search, all without an MCP layer because Google owns both ends. Less flexible than Claude+MCP for power users; less setup friction for anyone already in Workspace.

## Capability story

Pre-2024: programmatic Gmail access required a Google Cloud project, OAuth setup, custom Python, and your own logic. Available to developers, not normal users.

Pre-2025: even with API access, you had to write the LLM glue yourself.

2025: MCP standardized the glue. Now a user installs a Claude Desktop extension or runs a single command, and Claude can act on Gmail. Same for Slack, Notion, GitHub, Linear, Calendar.

The unhobbling is the protocol, not the model. Models could already write good email; what was missing was a clean way for them to act on a real account without each user reinventing the auth dance.

## Use patterns

- "Reply to all unread emails from my mother with a brief warm response and ask about her garden."
- "Find the contract draft John sent last week, summarize the changes from the prior version, and draft a reply."
- "Every morning, summarize new mail in three buckets: must-reply, FYI, ignore."
- "Schedule 30 minutes with Alex next week, prefer mornings, send a Meet link, and confirm via email."

## Limits

- Authorization scope is dangerous; an over-permissive MCP server with full mailbox access could leak credentials, get prompt-injected by a malicious email, or send unintended replies. As of 2025-2026 prompt-injection-via-email is the leading attack vector.
- Latency: agent loops to read 50 emails, summarize, and draft replies take minutes, not seconds.
- Cost: each agent call hits the LLM API (Anthropic, OpenAI, etc.); a daily inbox triage routine runs $0.50-3 in tokens.
- The user must approve sent mail in most well-designed setups. Fully autonomous send is not yet trustable.

## Individual-empowerment angle

The DIY agentic-email pattern is the most powerful and the most overlooked option in the category. A technically-comfortable user gets functionality that exceeds Superhuman's, customized to their specific inbox idioms, for the marginal cost of API tokens. No subscription. No third-party reading their mail. The Composio/Atris hosted versions reduce setup to OAuth plus a config file.

For non-technical users this is still beyond reach in mid-2026. The expected 2026-2027 development: Claude Desktop and ChatGPT bundling first-party Gmail MCP integrations as a one-click connect. Once that ships, the DIY/Superhuman gap closes for the median user.
