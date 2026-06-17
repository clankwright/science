# Browser-Use / Computer-Use Agents — Capability Overview

**Source date:** verified 2026-05-03
**URLs:**
- https://leaderboard.steel.dev/
- https://awesomeagents.ai/leaderboards/web-agent-benchmarks-leaderboard/
- https://www.darkreading.com/application-security/ai-agents-undermine-progress-browser-security
- https://www.hcaptcha.com/post/hcaptcha-captchas-are-highly-effective-against-bots-and-agents-in-2026
- https://browser-use.com/posts/bot-detection
- https://benchlm.ai/benchmarks/webVoyager

## What this category is

An LLM (usually with vision) is given control of a real browser or full desktop. It receives screenshots and/or DOM/accessibility trees, decides what to click, type, scroll, and submit, and operates a UI exactly the way a human would. No API integration needed: if a human can use the site, the agent can.

Two flavors:
- **Computer use**: full OS desktop. Mouse coordinates, arbitrary apps, file system. (Claude Computer Use, UI-TARS desktop, OpenAI Operator's underlying model.)
- **Browser use**: scoped to a Chromium/WebKit browser. Cleaner sandbox, easier deployment, dominant commercial form factor. (Browser Use, Stagehand, Skyvern, ChatGPT Agent, Mariner.)

## Pre-AI baseline (what existed in 2022-2023)

- **Selenium / Playwright scripts.** Required CSS selectors or XPath. Broke on every UI change. A site's "Login" button being renamed to "Sign in" was a P1 incident. Maintenance was the dominant cost.
- **RPA tools (UiPath, Automation Anywhere, Blue Prism).** Recorded mouse macros plus brittle image matching. Per-seat licenses ran $1,500–$5,000/year/bot. Required RPA developers; not consumer software.
- **Headless scrapers (Puppeteer, Scrapy).** Required the engineer to reverse-engineer each site's structure. Anti-bot defenses (Cloudflare, Datadome, hCaptcha) had been winning since ~2020.
- **No-API services were inaccessible.** Government portals, insurance dashboards, school systems, utility billing, niche listing sites — none had APIs, none could be automated affordably.

## What the LLM unhobbled

1. **Vision over screenshots.** A model reads the rendered page like a person and reasons about which element is the "Submit" button, even if the underlying class is `btn-7f3a-primary--xl`. UI changes no longer break the agent.
2. **Natural-language goals.** "Apply to the 5 most recent senior backend roles on this page" replaces 200 lines of selectors and conditionals.
3. **Reasoning over multi-step flows.** The model handles modals, redirects, OTP fields, and paginated forms without a programmer enumerating every branch.
4. **MCP and tool standardization.** Model Context Protocol (Anthropic, late 2024) defined a vendor-neutral way for any model to call browser tools. Playwright MCP (Microsoft) became the de facto reference server.
5. **Coordinate grounding got reliable.** Specialist models (UI-TARS, ShowUI, OS-Atlas) trained specifically to map "click the third row's edit icon" to pixel coordinates. OSWorld scores went from <15% (early 2024) to >70% (Q1 2026, Claude Opus 4.7).

## Maturity (May 2026)

- **Production for narrow workflows**: form filling, structured data extraction, scheduled scrapes from known sites, internal-tool automation. Anthropic reports 94% accuracy on insurance form-filling tasks.
- **Beta for general "just do this for me" tasks.** ChatGPT Agent, Claude Computer Use, Mariner all still ship with explicit "may fail or take wrong action" warnings. Human supervision recommended on anything irreversible.
- **OSWorld**: 72.5% (Claude Opus 4.7, Q1 2026) vs 87% human baseline.
- **WebVoyager**: 97% top commercial (Surfer 2 / H Company), 93.9% Magnitude, 89-90% Browser Use and Browserable, 87% Operator. Effectively saturated; no longer differentiates leaders.
- **Newer benchmarks** (BrowseComp, WebChoreArena, Online-Mind2Web) are where 2026 progress is being measured.

## Honest limits

- **Cost per task**: $0.10–$1.00+ for typical multi-step browser tasks via frontier models. Tasks requiring 50+ steps with vision can hit $2–5. Self-hosting open-weight models (UI-TARS-1.5-7B) drops marginal cost to electricity but needs a GPU.
- **Latency**: 30 seconds to 10 minutes per task. No agent is real-time interactive.
- **Reliability ceiling**: ~75% on well-defined tasks, drops to 50–60% on flaky UIs (loading states, drag handles, tooltips, custom modals). Always design retry-on-failure.
- **CAPTCHAs**: hCaptcha and reCAPTCHA v3 still defeat naive agents. Stealth-browser cloud services (Browser Use Cloud, Browserbase) and CAPTCHA-solving APIs (CapSolver, 2Captcha) are the workarounds; not free.
- **Anti-bot scoring**: detection runs continuous fingerprint scoring on TLS, canvas, mouse-movement entropy, request timing. Residential proxies and human-like jitter required at scale.
- **Security risk**: a logged-in agent is a confused-deputy. Prompt-injection payloads in any web page or email the agent reads can hijack the session. Researchers (hCaptcha, Brave) have demonstrated account manipulation, session hijack, and exfiltration attacks against major commercial agents in 2025-2026 with little or no jailbreaking. Same-origin policy gets undone the moment an agent reads one tab and acts on another.

## Individual-empowerment angle

What a person without a team can now do in an afternoon:
- **Scrape any no-API site** (real estate listings, court records, niche product catalogs) into a CSV, just by describing the columns.
- **Apply to N jobs** with one resume across LinkedIn / Workday / Greenhouse / Lever, even when each portal's form is different.
- **Process personal admin in batch**: file insurance claims, schedule DMV appointments, dispute charges across multiple credit cards, refresh visas, request medical records.
- **Run periodic checks** on government and bureaucratic portals (USCIS case status, parking-ticket portals, utility bills) and pipe results to email/SMS.
- **Drive legacy internal tools** without writing a Selenium suite — point an agent at the existing UI.

The category sits high on the unhobbling axis: it converts "I would have to hire a VA or write 500 lines of brittle code" into "I describe the task and supervise the result". Cost ceiling ($0.10–$1/task) makes consumer use tractable for tens to hundreds of tasks per month.

## Tools covered (one file each)

- 01-claude-computer-use.md
- 02-openai-operator-chatgpt-agent.md
- 03-browser-use.md
- 04-browserbase-stagehand.md
- 05-playwright-mcp.md
- 06-skyvern.md
- 07-multion.md
- 08-google-mariner.md
- 09-open-weight-models.md
