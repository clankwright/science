# Replit Agent

**Compiled:** 2026-05-03

## Vendor & Access

- **Vendor:** Replit.
- **Access:** Subscription on Replit's web platform. No CLI, no local IDE; runs entirely in Replit's cloud.
- **Open source:** No.

## Year First Public

- **September 2024:** Replit Agent first launched.
- 2025: Agent 2 (longer autonomy windows, ~20 min sessions).
- 2025-2026: Agent 3 (up to 200 min autonomy, sub-agents, three effort modes).

## Pricing (post-Feb 2026 overhaul)

- Free $0: limited features.
- Core $25/mo (or $20/mo annual): $25 monthly credits, 5 collaborators.
- Pro $100/mo (or $95/mo annual): $100 monthly credits, 15 collaborators, 50 viewers, Turbo mode.

The Teams tier was retired in February 2026 in favor of effort-based credits tied to Agent usage.

## Cost Tier

Mid. Subscription headline understates real cost: independent reviews flag typical 3-5x cost multipliers from credit overages on heavy AI Agent usage.

## Maturity

Production. Mature for the "non-developer building a working app" use case; less mature for traditional engineering work.

## What It Does

- Describe an app or website in chat; Replit Agent builds it end to end inside Replit.
- **Agent 3 capabilities:** autonomous for up to 200 minutes per session (vs 2 min Agent 1, 20 min Agent 2). Spawns sub-agents for specialized tasks. Three effort modes (Economy, Power, Turbo) trading capability against credit consumption. Tests and fixes its own code in a reflection loop.
- **Built-in services:** Database, User Auth, third-party integrations (Stripe, OpenAI, etc.).
- **Web search:** agent can pull current information mid-task.
- **Agent-builds-agents:** can create other agents and automation workflows from natural language.
- Self-testing reportedly "3x faster and 10x more cost effective" than Computer-Use-style models for the in-Replit use case.

## Distinct Edge

The strongest "non-developer to working app" pipeline of any tool here. The full stack (editor, runtime, database, auth, deploy, custom domain, payments) is in one platform, so Replit Agent doesn't have to leave its environment to ship a working product. For someone with no local dev setup, no GitHub account, and no AWS / Vercel knowledge, Replit Agent is the shortest path from "I have an idea" to "it's live on a URL."

## Overlap with Code-Free Building

Replit Agent straddles the agentic-coding category (because it does write code under the hood) and the "code-free app builder" category (because the user never sees the code unless they want to). The wiki should cross-reference this on the capability page.

## Contrarian Notes

- Credit-system pricing makes real costs hard to predict; the $25 Core tier is rapidly exhausted by an enthusiastic user.
- For developers who already have a local stack, Replit Agent's lock-in to Replit's hosting is friction, not a feature.
- App quality on novel problems is variable; works best for CRUD apps and known patterns.

## Sources

- https://replit.com/pricing
- https://replit.com/products/agent
- https://blog.replit.com/effort-based-pricing
- https://www.taskade.com/blog/replit-review
- https://www.superblocks.com/blog/replit-pricing
- https://hackceleration.com/replit-review/
- https://costbench.com/software/developer-tools/replit/
- https://www.eesel.ai/blog/replit-pricing
