# Claude Code (Anthropic)

**Compiled:** 2026-05-03

## Vendor & Access

- **Vendor:** Anthropic.
- **Access:** Subscription (Pro $20/mo, Max $100-200/mo) or API (usage-based, Claude Sonnet 4.6 at $3/$15 per MTok, Opus 4.7 at $5/$25 per MTok with 1M context).
- **Open source:** No (the CLI is distributed via npm but the model is proprietary).

## Year First Public

- **February 2025:** limited research preview.
- **May 2025:** general availability.
- By November 2025 Anthropic reported Claude Code had crossed $1B in annualized revenue, an unusually fast scale for a developer tool.

## Maturity

Production. Used by Anthropic internally, paying enterprises, and individual developers; the dominant CLI agent for paying users in 2026 alongside OpenAI Codex.

## What It Does (distinct features)

- Reads full codebases and plans multi-file approaches.
- Executes via integrated tools: bash, file edits, git, GitHub/GitLab CLI, Kubernetes, MCP servers.
- Runs tests, monitors CI, commits fixes automatically.
- **Sub-agents:** can spawn focused sub-agents that work in their own context window and report back, parallelizing research while keeping the primary context clean.
- **Hooks:** user-defined shell hooks fire on events (PreToolUse, PostToolUse, Stop) so the harness, not the model, enforces policy.
- **MCP integration:** Model Context Protocol servers extend the agent with custom tools.
- **Plan mode:** explicit "plan-only, no edits" mode for large changes.
- Distinguishes safe from risky actions through built-in classifiers; adjustable autonomy from approval-required to fully automatic.
- Runs as a CLI on macOS / Linux / Windows; also a VS Code extension that works inside Cursor and Windsurf; Claude desktop app and browser interfaces; web-based Claude Code is in flight.
- 1M token context window (Sonnet 4.6 and Opus 4.7).

## Benchmarks

- Claude Opus 4.6: ~80.8% SWE-bench Verified (per Anthropic).
- Claude Opus 4.7 (Adaptive scaffold): 87.6% SWE-bench Verified (May 2026).
- Claude Mythos Preview: 93.9% SWE-bench Verified (top of leaderboard May 2026).
- Opus 4 in mid-2025: 72.5% SWE-bench, 43.2% Terminal-bench.

## Pricing Tier

Mid. Pro at $20/mo includes Claude Code with usage caps; Max at $100-200/mo for higher caps. API is usage-based; heavy users (multiple hours of agent runs daily) report API spend in the $200-2000/mo range.

## Pricing Confusion (Apr 2026)

Anthropic briefly tested removing Claude Code from the $20 Pro tier, restricting it to $100-200 Max plans, on ~2% of new prosumer signups. Reversed after backlash. As of May 2026 Pro still includes Claude Code. (Simon Willison flagged the trust hit and noted that competing tools like Codex remain more affordable.)

## Distinct Edge

Highest published SWE-bench scores in 2026, deepest IDE / CLI / web surface area, mature MCP ecosystem, and the only major agent with first-party hooks for harness-enforced policy. The native Anthropic model integration means the same vendor builds the model and the agent, which shows in tighter tool-call reliability than third-party harnesses.

## Sources

- https://www.anthropic.com/product/claude-code
- https://techjacksolutions.com/ai-tools/anthropic-claude/claude-code/
- https://www.cometapi.com/what-model-does-claude-code-use/
- https://platform.claude.com/docs/en/about-claude/pricing
- https://simonwillison.net/2026/apr/22/claude-code-confusion/
- https://venturebeat.com/orchestration/claude-code-2-1-0-arrives-with-smoother-workflows-and-smarter-agents
- https://medium.com/@lmpo/the-evolution-of-claude-code-in-2025-a7355dcb7f70
- https://www.anthropic.com/news/claude-opus-4-6
