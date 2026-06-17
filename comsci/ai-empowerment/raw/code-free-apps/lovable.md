# Lovable (lovable.dev)

**Date verified:** 2026-05-03

## Vendor

Lovable AB, Stockholm. Co-founder & CEO Anton Osika (previously CEO of GPT-Engineer, an early autonomous coding project). Founded late 2024.

## What it does

Conversational full-stack app builder. User describes the app in plain language; Lovable generates a React + Tailwind frontend, Supabase backend (Postgres, auth, storage), and deploys to a `*.lovable.app` subdomain or a custom domain. Iteration is by chat; the user rarely if ever sees code unless they ask.

GitHub export available; the underlying code is real React, not a proprietary runtime.

## Access

- Web: https://lovable.dev
- Free tier with 5 credits/day.
- No waitlist.

## Cost (2026)

| Plan | Price | Credits |
|---|---|---|
| Free | $0 | 5/day |
| Pro | $25/mo | 100/mo, custom domain, private projects |
| Business | $50/mo | larger credit pool |
| Enterprise | custom | SSO, training opt-out |

A medium-complexity app reportedly consumes 70-90 credits in active development.

Cost tier: **low** for prototypes; **mid** for sustained use.

## Maturity

**Beta-to-production for prototypes; preview for production SaaS.** The tool ships paying-customer apps daily (Lovable's own revenue is the existence proof) but the May 2025 security audit found 170 of 1645 sampled Lovable apps exposed personal data. A non-technical founder cannot rely on default output for security.

## Distinctive trait

Speed and conversational fidelity. Lovable became the **fastest software company ever to $100M ARR** (8 months, July 2025), then $200M (Nov 2025), then $400M (Feb 2026) with ~146 employees. Revenue per employee at the $200M mark was $2.2M, among the highest ever recorded for SaaS.

The product feels less like an IDE and more like a design partner; the UX choice (no code panel by default) is what makes it land with non-developers.

## Target user

Non-technical founders, indie hackers, designers, PMs. Less suited to developers who want IDE-grade control (those use Cursor or Claude Code).

## Sources

- https://techcrunch.com/2025/11/19/as-lovable-hits-200m-arr-its-ceo-credits-staying-in-europe-for-its-success/
- https://techcrunch.com/2026/03/11/lovable-says-it-added-100m-in-revenue-last-month-alone-with-just-146-employees/
- https://tech.eu/2025/07/23/lovable-becomes-fastest-software-company-ever-to-reach-100m-arr/
- https://lovable.dev/pricing
- https://en.wikipedia.org/wiki/Vibe_coding (security study)
