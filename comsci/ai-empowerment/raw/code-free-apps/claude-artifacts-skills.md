# Claude Artifacts and Agent Skills

**Date verified:** 2026-05-03

## Vendor

Anthropic. Artifacts launched June 2024 (Claude 3.5 Sonnet release); evolved through 2025 to support interactive AI-powered apps embedded in Claude itself. Agent Skills launched October 2025; Skills-as-runtime extended in December 2025.

## What it does

Three overlapping pieces:

1. **Artifacts (June 2024 → present).** Claude generates a single-file React / HTML / SVG artifact and renders it in a side panel. User iterates by chat. Used for one-off interactive widgets, calculators, games, dashboards.
2. **Interactive AI-powered apps in Artifacts (2025).** Artifacts can call Claude itself as an embedded API. The user builds a chat-driven app whose runtime *is* a Claude call. Half a billion artifacts created since launch (per Anthropic blog).
3. **Agent Skills (Oct 2025 → present).** A `SKILL.md` packaging format: instructions + scripts + resources that Claude loads on demand. Skills run inside Claude Code, claude.ai, and the API. Community library at >22k GitHub stars, >1,200 community skills as of March 2026. The official Anthropic frontend-design Skill alone has 277k+ installs.

For "build an app" specifically: Artifacts cover the "I need a tiny tool right now" use case better than any standalone builder; Skills cover the "I want Claude to behave consistently across many builds" use case.

## Access

- Claude.ai web, mobile, desktop.
- Artifacts: free tier and paid.
- Skills: Pro+ for claude.ai; available on the API and in Claude Code by default.

## Cost (2026)

- Free tier: limited.
- Pro: $20/mo.
- Max: $100/mo (5x), $200/mo (20x).
- API: pay-per-token.

Cost tier: **free-to-mid**.

## Maturity

**Production for Artifacts; production for Skills.** The interactive-Claude-app pattern in Artifacts is the most polished "non-developer ships a thing" experience available, but the things you can ship are smaller in scope than what Bolt or Lovable produce: single-page tools, no persistent backend by default (MCP + persistent storage in Artifacts is in beta).

## Distinctive trait

The runtime is Claude. An Artifact app can call the model on every interaction, so "the app" is essentially "a frontend wrapping a prompt." This is qualitatively different from Bolt / Lovable, which generate static-architecture apps. For tools whose core IP *is* a clever prompt (taxonomy generators, language tutors, brainstorm partners), this is the right shape.

## Target user

Anyone with Claude Pro and an idea for a small interactive tool. Engineering teams building reusable Skills for their internal Claude use.

## Sources

- https://claude.com/blog/build-artifacts
- https://claude.com/blog/skills
- https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- https://github.com/VoltAgent/awesome-agent-skills
