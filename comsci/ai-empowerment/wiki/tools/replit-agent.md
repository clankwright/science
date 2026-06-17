---
id: replit-agent
title: "Replit Agent"
kind: tool
vendor: Replit
access: subscription
maturity: production
cost_tier: low ($20/mo Core + usage credits)
year_first_public: 2024
last_verified: 2026-06-17
---

# Replit Agent (Agent 4)

> **Summary:** Browser-based natural-language app builder. Agent 4 (March 2026) designs UI variants on an infinite canvas, runs multiple agents in parallel on different components, and ships web apps, mobile apps, landing pages, decks, videos, and data apps in one project with built-in database, auth, and hosting. No local setup.

**Sources:** [[raw/2026-06-update/replit-agent-4.md]]

## What it does

Describe an app in natural language; Agent 4 proposes design variants on a canvas before building, then parallelizes agents across components. Output spans web and mobile apps plus adjacent artifacts (landing pages, decks), with database, authentication, and hosting provisioned inside the project.

## Access and cost

Replit Core (~$20/mo) plus usage credits. Parallel-task execution is gated to Pro/Core tiers. Fully browser-based.

## What changed

Earlier no-code builders ([Bolt.new](bolt-new.md), [Lovable](lovable.md)) produced web prototypes. Agent 4 adds design-before-build, parallel agents, and mobile-app output, narrowing the gap to a full product team for a non-engineer.

## Individual empowerment

A non-engineer can design, build, host, and ship a multi-surface app (including mobile) end-to-end in an afternoon without a designer, backend engineer, or devops hire.

## Limits

- Production-grade SaaS still benefits from developer review, the standing caveat on [code-free app building](../capabilities/code-free-app-building.md).
- Usage-credit costs can climb on large parallel builds.

## See also

- [Code-free app building](../capabilities/code-free-app-building.md)
- [Bolt.new](bolt-new.md), [Lovable](lovable.md): web-focused predecessors.
- [Agentic coding](../capabilities/agentic-coding.md)
