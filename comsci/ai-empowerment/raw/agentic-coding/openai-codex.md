# OpenAI Codex (the 2025 product) and ChatGPT Agent

**Compiled:** 2026-05-03

> Disambiguation: this is the 2025 Codex product (a coding agent powered by GPT-5-Codex), not the original 2021 Codex API that powered the first GitHub Copilot and was deprecated.

## Vendor & Access

- **Vendor:** OpenAI.
- **Access:** Bundled with paid ChatGPT plans (Plus, Pro, Business, Edu, Enterprise). CLI and cloud (web) experiences. Also available via OpenAI API (per-token).
- **Open source:** The Codex CLI is open source (https://github.com/openai/codex). The model (GPT-5-Codex) is proprietary.

## Year First Public

- **June 3, 2025:** the new Codex made available to ChatGPT Plus users.
- 2025: GPT-5-Codex announced as a version of GPT-5 specifically optimized for agentic coding.
- 2026: continued upgrades; CLI gained worktrees, cloud environments for parallel agent runs.

## Maturity

Production. Roughly tied with Claude Code as the dominant CLI agent for paying users in 2026.

## What It Does

- Codex CLI: lightweight terminal coding agent; reads, writes, runs code, commits.
- Cloud Codex (in ChatGPT): "command center for agentic coding" with built-in worktrees and cloud environments for parallel work across projects.
- Asynchronous, autonomous: assign tasks, agents work in parallel, return PRs.
- GPT-5-Codex specifically trained for real-world software engineering work (long-horizon RL on coding traces).

## Pricing

- Free with paid ChatGPT plans, capped by usage tier.
- Plus ($20/mo): a few focused coding sessions per week.
- Pro ($200/mo): supports a full workweek across multiple projects; gets 2x Codex usage through May 31, 2026 (10x vs standard 5x).
- Business / Edu: similar to Plus tier in coverage.
- API: GPT-5.4 at $2.50 input / $15 output per MTok with a 272K input window (2x/1.5x multipliers above 272K). GPT-5.3-Codex / GPT-5.2-Codex pricing similar.

## Cost Tier

Low to high depending on usage: free for ChatGPT subscribers within caps, low-to-mid via API for individuals, high for power users on Pro.

## Distinct Edge

Bundled with the most popular paid LLM subscription (ChatGPT). For a user already paying $20/mo for ChatGPT Plus, Codex is "free." Cloud parallel agents with worktrees are the most polished implementation of "many agents in flight at once" outside Cursor. CLI is open source, which lowers lock-in.

## SWE-bench

- GPT-5.3 Codex ~85% SWE-bench Verified (May 2026).
- GPT-5.4 ~75.1% Terminal-Bench 2.0 (per Cursor Composer 2 comparison).

## Sources

- https://openai.com/codex/
- https://openai.com/index/introducing-codex/
- https://openai.com/index/introducing-upgrades-to-codex/
- https://developers.openai.com/codex/pricing
- https://developers.openai.com/codex/changelog
- https://github.com/openai/codex
- https://www.mindstudio.ai/blog/codex-vs-claude-code-2026
- https://blakecrosley.com/blog/codex-vs-claude-code-2026
- https://uibakery.io/blog/openai-codex-pricing
