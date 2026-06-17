---
id: browser-use
title: "Browser Use and Computer Use"
kind: capability
year_first_practical: 2024
last_verified: 2026-05-03
---

# Browser Use and Computer Use

> **Summary:** A vision-capable LLM is given control of a real browser or full desktop. It receives screenshots and/or DOM/accessibility trees, decides what to click, type, scroll, or submit, and operates a UI exactly the way a human would. No API integration needed: if a human can use the site, the agent can. The category sits high on the unhobbling axis: it converts "I would have to hire a VA or write 500 lines of brittle code" into "I describe the task and supervise the result." OSWorld scores went from under 15% (early 2024) to 72.5% (Claude Opus 4.7, Q1 2026) against an 87% human baseline.

**Sources:** [[raw/browser-use/00-overview.md]], [[raw/browser-use/01-claude-computer-use.md]], [[raw/browser-use/02-openai-operator-chatgpt-agent.md]], [[raw/browser-use/03-browser-use.md]], [[raw/browser-use/04-browserbase-stagehand.md]], [[raw/browser-use/05-playwright-mcp.md]], [[raw/browser-use/06-skyvern.md]], [[raw/browser-use/07-multion.md]], [[raw/browser-use/08-google-mariner.md]], [[raw/browser-use/09-open-weight-models.md]]

---

## What changed

Pre-AI baseline (2022-2023):

- Selenium / Playwright scripts required CSS selectors or XPath and broke on every UI change. A "Login" button being renamed to "Sign in" was a P1 incident; maintenance dominated cost.
- RPA tools (UiPath, Automation Anywhere, Blue Prism) recorded mouse macros plus brittle image matching. Per-seat licenses ran $1,500-$5,000/year/bot. Required RPA developers; not consumer software.
- Headless scrapers (Puppeteer, Scrapy) needed an engineer to reverse-engineer each site. Anti-bot defenses (Cloudflare, Datadome, hCaptcha) had been winning since around 2020.
- No-API services (government portals, insurance dashboards, school systems, utility billing, niche listing sites) could not be automated affordably.

What the LLM unhobbled:

1. Vision over screenshots. A model reads the rendered page like a person and picks the "Submit" button even when the underlying class is `btn-7f3a-primary--xl`. UI changes no longer break the agent.
2. Natural-language goals replace 200 lines of selectors and conditionals.
3. Reasoning over multi-step flows: modals, redirects, OTP fields, paginated forms handled without enumerating every branch.
4. MCP and tool standardization. Model Context Protocol (Anthropic, late 2024) defined a vendor-neutral way for any model to call browser tools; [Playwright MCP](../tools/playwright-mcp.md) became the de facto reference server.
5. Coordinate grounding got reliable. Specialist models (UI-TARS, ShowUI, OS-Atlas) trained specifically to map "click the third row's edit icon" to pixel coordinates.

Two flavors of the category exist:
- **Computer use:** full OS desktop, mouse coordinates, arbitrary apps, file system. [Claude Computer Use](../tools/claude-computer-use.md), UI-TARS desktop, OpenAI's underlying CUA model.
- **Browser use:** scoped to a Chromium/WebKit browser. Cleaner sandbox, easier deployment, dominant commercial form factor. [Browser Use](../tools/browser-use-lib.md), Stagehand, [Skyvern](../tools/skyvern.md), [ChatGPT Agent](../tools/chatgpt-agent.md), Mariner.

## Notable tools

| Tool | Form factor | Distinct edge |
|---|---|---|
| [Claude Computer Use](../tools/claude-computer-use.md) | API + Docker reference container | First production frontier model with computer use as a primitive; full desktop, not just browser |
| [ChatGPT Agent](../tools/chatgpt-agent.md) | Inside ChatGPT app | Tightest consumer integration; lives in the subscription users already pay for |
| [Browser Use](../tools/browser-use-lib.md) | Open-source Python library | Most-starred browser-agent project on GitHub; model-agnostic; ~89% WebVoyager |
| [Playwright MCP](../tools/playwright-mcp.md) | MCP server | Free, local, accessibility-tree based; ~10x cheaper per step than vision-based agents |
| [Skyvern](../tools/skyvern.md) | Open source + cloud | Vision-first, oriented at one-form-many-sites workflows |
| [Manus](../tools/manus.md) | Desktop app + cloud | Consumer general agent with permissioned local-machine control (files, terminal); GAIA 86.5/70.1/57.7 |

Other relevant entrants noted in the raw materials but not given dedicated tool pages here: Browserbase / Stagehand (cloud browser infrastructure plus AI-augmented Playwright SDK), Google Project Mariner (research prototype, Google AI Ultra), MultiOn / AGI Inc. (early entrant, now niche), and open-weight UI-TARS, OS-Atlas, ShowUI for self-hosted execution.

## Maturity and limits

- **Production for narrow workflows:** form filling, structured data extraction, scheduled scrapes from known sites, internal-tool automation. Anthropic reports 94% accuracy on insurance form-filling.
- **Beta for general "just do this for me" tasks.** ChatGPT Agent, Claude Computer Use, Mariner all still ship with explicit "may fail or take wrong action" warnings; human supervision recommended on anything irreversible.
- **WebVoyager** is effectively saturated: 97% top commercial (Surfer 2 / H Company), 93.9% Magnitude, 89-90% Browser Use and Browserable, 87% Operator. Newer benchmarks (BrowseComp, WebChoreArena, Online-Mind2Web) are where 2026 progress is measured.

Honest limits:

- **Cost per task:** $0.10-$1.00+ for typical multi-step browser tasks via frontier models; 50+ step vision tasks can hit $2-5. Self-hosting open-weight models (UI-TARS-1.5-7B) drops marginal cost to electricity.
- **Latency:** 30 seconds to 10 minutes per task. No agent is real-time interactive.
- **Reliability ceiling:** about 75% on well-defined tasks, 50-60% on flaky UIs (loading states, drag handles, tooltips, custom modals). Always design retry-on-failure.
- **CAPTCHAs:** hCaptcha and reCAPTCHA v3 still defeat naive agents. Stealth-browser cloud services (Browser Use Cloud, Browserbase) and CAPTCHA-solving APIs (CapSolver, 2Captcha) are workarounds; not free.
- **Anti-bot scoring:** detection runs continuous fingerprint scoring on TLS, canvas, mouse-movement entropy, request timing. Residential proxies and human-like jitter required at scale.
- **Security risk:** a logged-in agent is a confused deputy. Prompt-injection payloads in any web page or email the agent reads can hijack the session. hCaptcha and Brave researchers have demonstrated account manipulation, session hijack, and exfiltration against major commercial agents in 2025-2026 with little or no jailbreaking.

## Individual empowerment

What a person without a team can now do in an afternoon:

- Scrape any no-API site (real estate listings, court records, niche product catalogs) into a CSV by describing the columns.
- Apply to N jobs with one resume across LinkedIn / Workday / Greenhouse / Lever, even when each portal's form differs.
- Process personal admin in batch: file insurance claims, schedule DMV appointments, dispute charges across multiple credit cards, refresh visas, request medical records.
- Run periodic checks on government and bureaucratic portals (USCIS case status, parking-ticket portals, utility bills) and pipe results to email/SMS.
- Drive legacy internal tools without writing a Selenium suite.

Cost ceiling ($0.10-$1/task) makes consumer use tractable for tens to hundreds of tasks per month.

## See also

- [Agentic coding](agentic-coding.md): coding agents increasingly embed browser-use tools to test their own UIs.
- [Code-free app building](code-free-app-building.md): related individual-empowerment category.
