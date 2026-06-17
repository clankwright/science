---
id: agentic-coding
title: "Agentic Coding"
kind: capability
year_first_practical: 2024
last_verified: 2026-05-03
---

# Agentic Coding

> **Summary:** AI agents that take a natural-language goal, plan a sequence of edits and shell commands, execute them against a real repository, run tests, react to failures, and produce a commit or PR. Distinct from line-level autocomplete (Copilot 2021-2023). The category went from research demos to production-relied-upon tooling between early 2024 and 2026; SWE-bench Verified scores moved from single digits in 2023 to 87.6% (Claude Opus 4.7 Adaptive) and 93.9% (Claude Mythos Preview) by May 2026.

**Sources:** [[raw/agentic-coding/00-overview.md]], [[raw/agentic-coding/swe-bench-and-evaluation.md]], [[raw/agentic-coding/claude-code.md]], [[raw/agentic-coding/cursor.md]], [[raw/agentic-coding/cline.md]], [[raw/agentic-coding/aider.md]], [[raw/agentic-coding/openai-codex.md]], [[raw/agentic-coding/devin.md]], [[raw/agentic-coding/github-copilot-agent.md]], [[raw/agentic-coding/replit-agent.md]], [[raw/agentic-coding/roo-code-and-continue.md]]

---

## What changed

Pre-AI baseline (2022, the year before tool-using LLMs):

- Multi-file refactors required a human to hold the call graph in their head; Copilot 2021 only saw the current buffer.
- Cross-repo issue triage (read issue, find culprit code, fix, push PR) was entirely manual.
- "Run a failing test until it passes" loops needed the developer to read traces, edit, re-run; LLMs of that era could not invoke a shell.
- Net-new project scaffolding beyond a snippet was out of reach: GPT-3.5 / Codex API drafted functions but did not stand up working repos with tests, CI, and a deployable artifact.
- SWE-bench scored single digits in 2023; Devin's 13.86% in March 2024 was state of the art and a 7x jump over prior best.

Seven unhobbling moves landed in 2024-2025 and crystallized the category:

1. Tool use / function calling. Anthropic and OpenAI both shipped general-purpose tool calling in 2024, letting models invoke `bash`, `read_file`, `edit_file` instead of only emitting text.
2. Long context windows (200K-1M tokens) made it practical to load a full repo into one conversation.
3. RL on agentic traces. Claude 3.5/4/4.5/4.6, GPT-5-Codex, and Cursor's Composer 2 were trained on long-horizon coding rollouts (Composer 2 cites "hundreds of actions" per task), fixing the 2023-era "lost in the second tool call" failure mode.
4. Plan / execute decomposition: Cline's Plan/Act split, Roo Code's custom modes, Aider's architect/editor pair.
5. Computer use / browser tools (Claude's October 2024 computer-use model and similar in Cline) so agents can drive web UIs visually. See [browser use](browser-use.md).
6. Sub-agents and parallel context (Claude Code, Cursor 2.4, Replit Agent 3) to delegate research without polluting the main context window.
7. Hooks and safety classifiers. Claude Code's built-in classifiers and user-defined hooks let users run agents at higher autonomy without an `rm -rf /` accident.

## Notable tools

| Tool | Surface | Distinct edge |
|---|---|---|
| [Claude Code](../tools/claude-code.md) | CLI + IDE + web | Highest published SWE-bench, native MCP, hooks for harness-enforced policy |
| [Cursor](../tools/cursor.md) | IDE (VS Code fork) | Best-in-class IDE UX; Composer 2 in-house frontier model |
| [OpenAI Codex](../tools/openai-codex.md) | CLI + ChatGPT cloud | Bundled with paid ChatGPT; cloud parallel agents with worktrees |
| [Cline](../tools/cline.md) | VS Code (and others) | Open-source, 30+ providers, Plan/Act mode, MCP-first, local-LLM-friendly |
| [Aider](../tools/aider.md) | CLI | Atomic git commits per change; vendor-agnostic; SSH-friendly |
| [Devin](../tools/devin.md) | Web + Slack | "Fire and forget" delegation; Slack-first UX |
| [Replit Agent](../tools/replit-agent.md) | Replit web | Self-healing browser testing; full editor + DB + deploy in one platform |

## Maturity and limits

Production tier (May 2026): Claude Code, Cursor with Composer 2, GitHub Copilot Coding Agent (GA September 2025), Aider, Cline, Roo Code, Continue, OpenAI Codex (GA via ChatGPT Plus/Pro), Replit Agent 3. Devin is production but contested, with reviews flagging that it overpromises on novel work.

Headline benchmark caveats:
- SWE-bench Verified is near-saturated. SWE-bench Pro (Scale's harder variant) drops top scores to roughly 23%, indicating Verified overstates real-world performance on novel codebases.
- Scaffold matters as much as the model. The same model in different harnesses can swing 10+ points; "Claude 4.5 + Live-SWE-agent" outscores raw Claude 4.5.
- Time-to-solve is unmeasured. A 90% score that takes 30 minutes per issue is not the same product as a 70% score that takes 90 seconds.

Quality drops sharply past a few thousand lines of generated code. Past that point, an agent in an IDE (Cursor, Claude Code) outperforms a code-free builder on maintainability.

## Individual empowerment

A solo developer in 2026 can:

- Ship a working full-stack app in a weekend without writing the boilerplate ([Replit Agent](../tools/replit-agent.md), [Cursor](../tools/cursor.md), [Claude Code](../tools/claude-code.md)).
- Maintain a multi-language open-source library by triaging issues to a Copilot Coding Agent or [Devin](../tools/devin.md) and reviewing PRs rather than writing patches.
- Refactor a 100K-LOC codebase across files in one evening (Cursor, Claude Code, [Cline](../tools/cline.md) with a frontier model).
- Run a fully local agentic stack (Cline plus Continue plus Roo Code with Ollama-served DeepSeek-Coder or Qwen3-Coder) for code that cannot leave a laptop, at zero marginal API cost.
- Spend $20-100/mo on tooling (Pro tiers) to do work that previously needed a junior engineer.

## See also

- [Browser use](browser-use.md): the related capability that lets coding agents drive a UI.
- [Code-free app building](code-free-app-building.md): adjacent category targeted at non-developers.
