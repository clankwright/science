# Agentic Coding: Capability Overview

**Compiled:** 2026-05-03
**Scope:** AI agents that autonomously read, write, run, test, and commit code, distinct from line-level autocomplete (Copilot 2021-2023).

## Definition

Agentic coding tools take a natural-language goal, plan a sequence of steps, execute them by calling tools (file edits, shell commands, test runs, web fetches), evaluate results, iterate on failures, and produce a deliverable (a PR, a commit, a working app) with little or no per-step human approval. The 2024 academic literature dates the inflection point to the year 2024 itself: 53% of academic references in agentic-programming surveys were published that year, reflecting how rapidly the field crystallized once tool-using LLMs became reliable.

## What Was Hard or Impossible Before (2022 baseline)

- **Multi-file refactors** required a human to hold the call graph in their head; Copilot 2021 only saw the current buffer.
- **Cross-repo issue triage** (read issue, find culprit code, fix, push PR) was entirely manual.
- **"Run a failing test until it passes" loops** required the developer to read the trace, edit, re-run; LLMs of that era could not invoke a shell.
- **Net-new project scaffolding** beyond a snippet: GPT-3.5 / Codex API could draft a function but not stand up a working repo with tests, CI, and a deployable artifact.
- **SWE-bench (the agentic-coding benchmark introduced 2023)** scored single digits in 2023 (Devin's 13.86% in early 2024 was state of the art and a 7x jump over prior best).

## The Unhobbling Moves That Mattered

1. **Tool use / function calling** (Anthropic and OpenAI both shipped general-purpose tool calling in 2024). This let the model invoke `bash`, `read_file`, `edit_file` instead of only emitting text.
2. **Long context windows** (200K-1M tokens). Made it practical to load an entire repo or large chunks of one into a single conversation, so the agent reasons over the actual code rather than guessing at API surfaces.
3. **RL on agentic traces.** Anthropic's Claude 3.5/4/4.5/4.6 series, OpenAI's GPT-5-Codex, and Cursor's Composer 2 were all explicitly trained on long-horizon coding rollouts (Composer 2 mentions "hundreds of actions" per task). This is what fixed the "lost in the second tool call" failure mode of 2023 era agents.
4. **Plan / execute decomposition.** Cline's Plan/Act split, Roo Code's custom modes (Architect, Code, Debug), and Aider's architect/editor pair separate "decide what to do" from "do it," which sharply reduced flailing.
5. **Computer use / browser tool.** Claude's October 2024 computer-use model and similar capabilities in Cline let agents drive a browser to test web UIs visually.
6. **Sub-agents and parallel context.** Claude Code's sub-agents, Cursor's sub-agents (2.4), and Replit Agent 3's spawned agents allow one main agent to delegate research to children with their own contexts, sidestepping context-window pollution.
7. **Hooks / safety classifiers.** Claude Code's "distinguishes safe from risky actions through built-in classifiers" lets a user run agents at higher autonomy without an `rm -rf /` accident.

## SWE-bench Verified Score Progression (selected)

- 2023: Single digits.
- Mar 2024: Devin 13.86%.
- Mid 2025: Claude Opus 4 ~72.5%.
- Late 2025: Claude Opus 4.5 + Live-SWE-agent 79.2%; GPT-5-Codex family in similar range.
- Early 2026: Claude Opus 4.6 ~80.8% on SWE-bench (per Anthropic).
- May 2026: Claude Mythos Preview leads at 93.9%; Claude Opus 4.7 (Adaptive) 87.6%; GPT-5.3 Codex ~85%.

Caveat: SWE-bench Verified is now near-saturated. The harder SWE-bench Pro (Scale's harder variant) drops top scores to ~23%, indicating that headline numbers overstate real-world capability for novel codebases.

## Current Maturity Tiers (May 2026)

- **Production:** Claude Code, Cursor (with Composer 2 / Claude integration), GitHub Copilot Coding Agent (GA Sep 2025), Aider, Cline, Roo Code, Continue, OpenAI Codex (GA via ChatGPT Plus/Pro), Replit Agent 3.
- **Production but expensive / niche:** Devin (Cognition).
- **Preview / new entrants:** Cursor Glass (alpha), web-based Claude Code variants.

## Individual Empowerment Angle

A solo developer in 2026 can:

- Ship a working full-stack app in a weekend without writing the boilerplate (Replit Agent, Cursor, Claude Code).
- Maintain a multi-language open-source library by triaging issues to a Copilot Coding Agent or Devin and reviewing PRs (rather than writing the patches).
- Refactor a 100K-LOC codebase across files in one evening (Cursor, Claude Code, Cline with a frontier model).
- Run a fully local agentic stack (Cline + Continue + Roo Code + Ollama-served DeepSeek-Coder or Qwen3-Coder) for code that cannot leave a laptop, at zero marginal API cost.
- Spend $20-100/mo on tooling (Pro tiers) to do work that previously required a junior engineer.

## Sources

- https://arxiv.org/html/2508.11126v1 (AI Agentic Programming: A Survey of Techniques, Challenges, and Opportunities)
- https://magazine.sebastianraschka.com/p/components-of-a-coding-agent
- https://www.swebench.com/
- https://llm-stats.com/benchmarks/swe-bench-verified
- https://benchlm.ai/benchmarks/sweVerified
- https://medium.com/@sahin.samia/what-is-agentic-coding-complete-guide-to-tools-use-cases-and-challenges-8e902ee5ebea
