# Devin (Cognition)

**Compiled:** 2026-05-03

## Vendor & Access

- **Vendor:** Cognition Labs.
- **Access:** SaaS, web-based. No CLI / IDE deep integration as a primary surface; designed as a "delegate the whole task" agent that runs in the cloud.
- **Open source:** No.

## Year First Public

- Announced March 2024 as "the first AI software engineer." Initial waitlist; limited access.
- Devin 2.0 (April 2025) dropped pricing dramatically and made it accessible to individuals.
- Cognition acquired Windsurf (formerly Codeium) in 2026 for ~$250M, putting Devin and Windsurf under one roof.

## Maturity

Production but contested. Reviews in 2025 and 2026 consistently note that Devin overpromises and underdelivers on novel tasks, while excelling at delegated, well-scoped work like dependency upgrades and routine refactors. Cognition raised valuation to ~$4B by March 2025.

## What It Does

- Autonomous SWE agent: take a task (Slack message, Linear ticket, GitHub issue), Devin plans, codes across multiple files, runs tests, debugs, and opens a PR.
- Slack and Linear integrations are first-party.
- Devin Review (PR review) and DeepWiki (codebase Q&A) are sub-products.
- Agent runs in a cloud sandbox; user reviews the PR rather than approving each step.

## Pricing (2026)

- Free: limited usage, Devin Review, DeepWiki.
- Pro: $20/mo with usage quota.
- Max: $200/mo with higher quota.
- Teams: $80/mo (recommended) with unlimited team members and collaboration.
- Enterprise: custom.
- **ACU (Agent Compute Unit) overage:** Pro overage at $2.25/ACU. Teams overage cheaper. Devin 2.0 reportedly completes ~83% more junior-level tasks per ACU than Devin 1.x.

The April 2025 price drop from $500/mo (original Devin Teams-only) to $20/mo Pro was the moment Devin became viable for individuals.

## Benchmarks

- SWE-bench original: 13.86% (Mar 2024 — state of the art at the time, 7x prior best).
- Cognition does not publish current SWE-bench Verified scores prominently; independent reviews place Devin behind frontier general-purpose agents like Claude Code and Codex on raw benchmark scores in 2026.

## Distinct Edge

The "fire and forget" agent. Where Claude Code, Cursor, and Cline expect a developer at the wheel, Devin is designed for full delegation: assign issue, walk away, review PR. The Slack-first UX means non-developers (PMs, founders) can issue tasks. Best fit: routine well-scoped work (upgrade React 18 to 19; add a feature flag), backlog grooming, and teams that want to assign issues to an "AI engineer" rather than queue them on humans.

## Contrarian Notes

- Highest hype-to-substance ratio of any tool in this space. Reviews regularly flag that for novel work or large refactors, a developer steering Cursor or Claude Code outperforms Devin.
- ACU billing creates unpredictable costs; "$20/mo" undersells real spend for active users.
- Acquisition of Windsurf suggests Cognition's strategic answer to the agent-vs-IDE tension is "buy the IDE."

## Sources

- https://devin.ai/pricing/
- https://cognition.ai/
- https://www.digitalapplied.com/blog/devin-ai-autonomous-coding-complete-guide
- https://aitoolsdevpro.com/ai-tools/devin-guide/
- https://www.eesel.ai/blog/cognition-ai
- https://www.eesel.ai/blog/cognition-ai-pricing
- https://trickle.so/blog/devin-ai-review
- https://brainroad.com/devin-pricing-in-2026-real-cost-hidden-spend-and-alternatives/
- https://www.openaitoolshub.org/en/blog/devin-ai-review
