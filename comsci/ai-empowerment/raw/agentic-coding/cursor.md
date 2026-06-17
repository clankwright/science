# Cursor (with Composer 2 and Agent Mode)

**Compiled:** 2026-05-03

## Vendor & Access

- **Vendor:** Anysphere (the company behind Cursor).
- **Access:** Subscription. Hobby (free, limited), Pro ($20/mo), Business ($40/mo per seat), Ultra (~$200/mo).
- **Open source:** No. Cursor is a proprietary fork of VS Code; Composer 2 is a proprietary in-house model.

## Year First Public

- Cursor launched in 2023 as an AI-first VS Code fork.
- Agent mode arrived in 2024 (Composer feature).
- Composer 2 (in-house frontier model) released **March 19, 2026**.
- CLI agent shipped January 2026; Cursor 3 with dedicated Agents Window April 2, 2026.

## Maturity

Production. One of the two dominant agentic-coding products by paid users in 2026 alongside Claude Code.

## What It Does

- Full IDE with AI-native UX: chat, inline edit, multi-file edit, full agent mode.
- **Agent mode:** plans across files, executes multi-step tasks, iterates on failures inside the editor.
- **Sub-agents:** shipped in Cursor 2.4 (late 2025).
- **CLI agent:** January 2026 release lets the same agent run from terminal.
- **Cloud agents:** run on Cursor's infrastructure or your own; a dedicated Agents Window (Cursor 3, April 2026) tracks parallel runs.
- Multi-model: defaults to Composer 2 but supports Claude (Opus, Sonnet), GPT-5 family, Gemini, etc.

## Composer 2 Benchmarks (March 2026)

- CursorBench: 61.3 (vs 38.0 for Composer 1).
- Terminal-Bench 2.0: 61.7.
- SWE-bench Multilingual: 73.7.
- Beats Claude Opus 4.6 on Terminal-Bench (58.0); trails GPT-5.4 (75.1) on the same.
- Composer 2 was trained with RL on long-horizon coding tasks "requiring hundreds of actions."

## Pricing

- Pro $20/mo: standard for individual professional use.
- Composer 2 API pricing for power users: $0.50/M input, $2.50/M output; fast variant $1.50/$7.50.
- Business $40/seat; Ultra ~$200/mo.

## Cost Tier

Low to mid. The $20/mo tier is the practical individual entry point. Composer 2's drastic cost drop (86% cheaper than Composer 1) made power-user workflows viable on Pro for most.

## Distinct Edge

Best-in-class IDE UX of any agent product. The editor-native experience (tab-complete + chat + agent in one tool, with cursor positioning, diff review, and IDE intelligence) reduces friction below CLI tools for developers who want IDE workflows. Composer 2 added a proprietary frontier model competitive with Claude/GPT, removing the dependency on third-party APIs.

## Sources

- https://cursor.com/blog/composer-2
- https://cursor.com/blog/composer
- https://www.vantage.sh/blog/cursor-composer-2
- https://devops.com/cursor-ships-composer-2-frontier-level-coding-performance-at-a-fraction-of-the-cost/
- https://www.datacamp.com/blog/composer-2
- https://cursor.com/docs/models-and-pricing
- https://fordelstudios.com/research/cursor-vs-claude-code-april-2026-what-changed
