# Devin (Cognition AI)

**Date verified:** 2026-05-03

## Vendor

Cognition AI (San Francisco). Launched March 2024 with a much-hyped demo of an "autonomous AI software engineer" that drew massive controversy over staged-vs-real claims. Devin 2.0 in 2025 was a substantial reset.

## What it does

Async autonomous engineer. User files an issue or task in Slack / web UI; Devin opens a virtual workstation, plans, codes, runs tests, opens PRs, monitors deploys. Targets the "developer hands off a ticket" workflow rather than the "interactive vibe coding" workflow.

For greenfield app building specifically: Devin can scaffold and ship a project end-to-end if given a sufficiently scoped brief. In practice it's more often used for code migrations, framework upgrades, dependency updates: well-defined repetitive work.

## Access

- Web: https://devin.ai
- Slack integration; CLI; web UI.
- No waitlist as of 2026; was waitlisted through most of 2024.

## Cost (2026)

| Plan | Price | Notes |
|---|---|---|
| Core | $20/mo + $2.25/ACU | "Agent Compute Unit" pay-as-you-go |
| Team | $500/mo | 250 ACUs included at $2.00 each |
| Enterprise | custom | VPC, SAML SSO |

Pricing dropped sharply (from $500/mo entry) when Devin 2.0 launched. ACU model is widely criticized as opaque.

Cost tier: **mid** for individual exploration, **high** for sustained use.

## Maturity

**Beta-to-production for well-scoped tasks; preview for open-ended autonomy.** Cognition's internal benchmark claims 83% more junior-level tasks completed per ACU vs. Devin 1.x. Independent reviews put Devin at 8.7/10 as the most technically mature autonomous engineer, but flag that supervision from senior engineers is a hidden cost.

## Distinctive trait

True async autonomy on a virtual workstation, with a planning layer that survives long-horizon tasks. Most other tools in this category lose coherence past a few hours of work; Devin is built for the multi-hour ticket.

## Target user

Engineering teams offloading well-defined work; less suited to non-technical solo builders (target user usually has a senior eng to supervise).

## Sources

- https://devin.ai/pricing/
- https://venturebeat.com/programming-development/devin-2-0-is-here-cognition-slashes-price-of-ai-software-engineer-to-20-per-month-from-500
- https://www.eesel.ai/blog/cognition-ai
- https://aiagentsquare.com/agents/devin.html
