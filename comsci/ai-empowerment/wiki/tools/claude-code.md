---
id: claude-code
title: "Claude Code"
kind: tool
vendor: Anthropic
access: subscription + API
maturity: production
cost_tier: low to mid ($20-200/mo)
year_first_public: 2025
last_verified: 2026-05-03
---

# Claude Code

> **Summary:** Anthropic's flagship agentic-coding product, available as a CLI, IDE integration, and web surface. Highest published SWE-bench Verified scores in May 2026; first-class MCP support; user-defined hooks for harness-enforced policy. Reportedly $1B revenue/year run rate by November 2025. The default professional-tier choice for solo developers and small teams paying for AI coding tools.

**Sources:** [[raw/agentic-coding/00-overview.md]], [[raw/agentic-coding/claude-code.md]], [[raw/agentic-coding/swe-bench-and-evaluation.md]]

## What it does

Claude Code reads, writes, runs, tests, and commits code across whole repositories. The agent plans multi-step tasks, invokes shell and editor tools, runs tests, reacts to failures, and produces commits or PRs. Native MCP support lets users add custom tools (Gmail, Slack, internal APIs) in minutes. Hooks let users enforce harness policies (mandatory tests, no-secret commits, restricted commands).

## Access and cost

Bundled in Claude Pro ($20/mo) and Max ($100-200/mo) subscriptions, with usage tied to subscription tier. Available via raw API for usage-based billing. April 2026 saw a brief test of removing Claude Code from $20 Pro for a small percentage of new signups, reversed after backlash; as of May 2026 still in Pro.

## Distinctive trait

Highest SWE-bench Verified scores (87.6% Claude Opus 4.7 Adaptive; 93.9% Mythos Preview, May 2026). Combination of frontier model + first-party harness + MCP + hooks is unmatched by competitors as a single-vendor offering.

## Limits

- SWE-bench Verified is near-saturated; private codebase performance is lower (SWE-bench Pro top scores ~23%).
- Subscription pricing trust took damage in April 2026 with the brief Pro-tier removal test.
- Local-LLM users are second-class (Claude Code is Anthropic-API-first).

## See also

- [Agentic coding](../capabilities/agentic-coding.md)
- [Cursor](cursor.md): the leading IDE-native alternative.
- [Cline](cline.md), [Aider](aider.md): open-source alternatives.
- [Shortlist](../analysis/shortlist.md)
