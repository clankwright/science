# Skyvern

**Source date:** verified 2026-05-03
**URLs:**
- https://github.com/Skyvern-AI/skyvern
- https://www.skyvern.com/
- https://www.skyvern.com/pricing
- https://www.skyvern.com/blog/skyvern-we-raised-2-7m-to-fix-browser-automation-open-source/
- https://www.ycombinator.com/companies/skyvern

## What it is

Open-source AI agent (Apache 2.0) that automates browser workflows by combining vision LLMs with traditional element analysis. Launched as YC S23. Designed primarily for repeatable, structured tasks (form filling, application submission, scraping with login flows) rather than open-ended exploration. Exposes a REST API: `POST /tasks` with a goal, get back a status and extracted data.

## Vendor / Access

- Vendor: Skyvern AI (YC S23)
- License: Apache 2.0, github.com/Skyvern-AI/skyvern
- SDK v1+ released Jan 2026 (Launch Week): Python and TypeScript clients, embedded (local) or remote (cloud) modes, browser state sharing via Chrome DevTools Protocol
- Hosted cloud at skyvern.com

## Cost

- Open source: free, BYO LLM
- Cloud: Free (1,000 credits) → Hobby $29/mo → Pro $149/mo → Enterprise
- Cloud LLM costs bundled into credits; no separate provider account needed

## Maturity

- Beta to production for the form-filling use case it was designed for.
- WebVoyager 85.85% with Skyvern 2.0.
- Best-in-class on WRITE-type tasks (form completion) per the company's own benchmarks; weaker on exploratory navigation.

## Distinctive trait

Vision-first design oriented at one job: making one repeated form work across many websites. Strongest fit for "I have 500 of these to submit" workloads (insurance applications, government filings, vendor onboarding portals, job apps). The product roadmap stays narrow rather than chasing general-purpose agent territory.

## Individual-empowerment angle

The open-source tier handles unlimited tasks if you bring your own LLM key. Practical individual use case: write one Skyvern workflow that fills a job application from your structured profile, run it across hundreds of postings. The $29 Hobby tier removes the LLM-key friction for non-developers. Distinct from Browser Use in that the workflow is more declarative ("here is the goal and the data") and less programmatic.
