---
id: manus
title: "Manus"
kind: tool
vendor: Manus (MainFunc/Monica)
access: freemium
maturity: production
cost_tier: free / low ($20/mo) to high ($200/mo)
year_first_public: 2025
last_verified: 2026-06-17
---

# Manus (1.5, Desktop "My Computer")

> **Summary:** General autonomous agent that browses, codes, analyzes data, and writes documents. The 1.5 Desktop release (March 2026) adds "My Computer": permissioned control of the user's local machine (read/write files, run terminal commands, drive Python/Node/Xcode) with per-command Allow Once / Always Allow gating. GAIA scores 86.5 / 70.1 / 57.7% across levels.

**Sources:** [[raw/2026-06-update/manus-desktop.md]]

## What it does

Give Manus a multi-step goal; it plans and executes across the web and, on desktop, the local environment. The Desktop app exposes file-system and terminal access behind explicit per-command approval, so the agent can run real local workflows (data pipelines, multi-step coding) rather than only a cloud sandbox.

## Access and cost

Free tier (300 daily credits), $20/mo (4,000 credits), up to $200/mo. Desktop app for macOS/Windows; globally accessible. Meta's reported ~$2B acquisition was blocked April 2026, leaving it independent.

## What changed

Cloud agents like [ChatGPT Agent](chatgpt-agent.md) operate in a sandbox and cannot touch the user's machine. Manus Desktop gives a consumer agent gated control of the real local environment, a different capability tier.

## Individual empowerment

One person can hand off multi-hour local workflows (data pipelines, multi-step coding, long research) to an agent that operates their actual machine, with per-command approval as the safety boundary.

## Limits

- Local-machine access is powerful and dangerous; an over-broad "Always Allow" plus a prompt injection can do real damage.
- Credit-based pricing throttles long autonomous runs.
- Quality below frontier on the hardest GAIA level (57.7%).

## See also

- [Browser use](../capabilities/browser-use.md)
- [ChatGPT Agent](chatgpt-agent.md): cloud-sandboxed comparison.
- [Agentic coding](../capabilities/agentic-coding.md)
