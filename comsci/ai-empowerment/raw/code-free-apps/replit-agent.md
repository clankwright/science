# Replit Agent (v3)

**Date verified:** 2026-05-03

## Vendor

Replit, Inc. Founded 2016 as a browser IDE; pivoted hard to AI-agentic build-and-deploy through 2024-2025. CEO Amjad Masad.

## What it does

End-to-end app build + deploy from natural language. User describes the app; Agent provisions a Repl (Linux container), generates code, installs deps, configures DB and secrets, runs the app, and ships to a Replit Deployment URL. Agent 3 (released late 2025) added:

- **200 minutes of continuous autonomous work** (10x Agent 2)
- **Self-healing browser testing**: the agent loads its own app in a headless browser, observes what happens, and fixes errors without user intervention
- **Agent-builds-agents**: Agent 3 can scaffold other AI agents

## Access

- Web + native apps: https://replit.com
- Account required; free tier available.

## Cost (2026)

| Plan | Price | Notes |
|---|---|---|
| Starter | Free | limited Agent intelligence; 1 published app |
| Core | $20/mo | $20/mo usage credits, 5 collaborators |
| Pro | $100/mo | up to 15 builders, credit rollover, priority |
| Enterprise | custom | SSO, SCIM |

Deployments charged separately: static free; scheduled/autoscale from $1/mo; reserved VM from $20/mo. Active builders report $50-150/mo overage on top of subscription.

Cost tier: **mid-to-high** when actually used in earnest.

## Maturity

**Beta for autonomous build; production for the underlying IDE+deploy plumbing.** Replit has been a real production hosting target since 2018. Agent-3-built apps are usable but inherit the same security caveats as Lovable / Bolt output.

## Distinctive trait

The agent + the runtime are the same product. Bolt and Lovable bolt deploy onto a hosting layer; Replit *is* the hosting layer, so the agent has full access to the running app. Self-healing browser testing is enabled by this: Agent 3 can load its own URL and watch.

## Target user

Existing Replit users (large educational and indie-developer base), solo founders willing to pay for autonomy, agencies prototyping for clients.

## Sources

- https://replit.com/pricing
- https://leaveit2ai.com/ai-tools/code-development/replit-agent-v3
- https://hackceleration.com/replit-review/
- https://www.superblocks.com/blog/replit-pricing
