# Browser and Automation MCP

## What it is
MCP servers that drive a real browser (Chromium, Firefox, WebKit) under agent control. The dominant implementation is `microsoft/playwright-mcp`; older Puppeteer-based servers exist but Microsoft's official Playwright MCP became the standard once it shipped.

## How it works
Playwright MCP exposes the browser's accessibility tree (the same structure screen readers use) as structured snapshots, not screenshots. The agent calls tools like `browser_navigate`, `browser_click`, `browser_type`, `browser_fill_form`, `browser_snapshot`. The model reads element labels and roles from accessibility data, decides which to interact with, and the server executes via Playwright. No vision model required.

## Specific unlocks
- "Book my flight" — agent navigates United, fills passenger details from your Notion profile, picks the saved card, stops at confirmation for human approval.
- "Apply to these 20 LinkedIn jobs with my resume" — agent opens each posting, fills Easy Apply forms, uploads the right resume version per job.
- "Pull data from this site that has no API" — agent navigates, clicks through pagination, extracts data into JSON without you writing a scraper.
- "Run my web app's smoke tests every morning" — agent walks through the critical user paths, screenshots failures, files Linear tickets.
- Skip CAPTCHA-prone scrapers: the browser is real, cookies persist, sessions stay logged in.

## Playwright MCP vs Puppeteer MCP
- Playwright: official Microsoft server, accessibility-snapshot-based, Chromium + Firefox + WebKit, preconfigured in GitHub Copilot, native in VS Code agent mode.
- Puppeteer: Anthropic shipped a reference server in November 2024, deprecated in practice, Chrome-only, no accessibility snapshots.
- New in 2026: Microsoft now recommends `@playwright/cli` over MCP for coding agents because CLI uses 4x fewer tokens per session. Plain shell commands instead of JSON-RPC over the protocol. MCP version remains the right choice for non-coding agents (e.g., Claude Desktop driving a browser for a casual user).

## Pre-AI baseline
Pre-MCP, browser automation for non-coders meant Zapier (no real browser, just APIs) or paying a developer for a Selenium script. AI vision agents (Anthropic's "computer use" beta, Browserbase, Skyvern) drove screens via screenshots, slow and brittle. Accessibility-snapshot MCP is faster, cheaper, and more reliable than screenshot-based vision.

## Cost / access
Free. Install: `npx -y @microsoft/playwright-mcp` plus `npx playwright install` to download browsers (~400MB). Hosted browser-as-a-service options (Browserbase, Hyperbrowser) cost ~$1-2 per agent-hour and let you skip running browsers locally.

## Notable adjacent servers
- `browserbase-mcp`: hosted Chromium with stealth, useful when sites block automation
- `firecrawl-mcp`: scrape-and-clean for large-scale data extraction
- `apify-mcp`: 5000+ pre-built actors for specific sites
- `skyvern-mcp`: vision-based fallback when accessibility tree is missing or scrambled

## Maturity
Playwright MCP is production-grade. The accessibility-snapshot approach handles maybe 80% of public sites cleanly; sites with heavy custom canvas rendering (Figma, Google Docs deep edits) still need vision-model fallback. CAPTCHAs and bot detection are an arms race; for any consumer site (Amazon, banks) expect occasional friction.

## Sources
- https://github.com/microsoft/playwright-mcp
- https://www.pulsemcp.com/servers/microsoft-playwright-browser-automation
- https://www.morphllm.com/comparisons/playwright-vs-puppeteer
- https://testcollab.com/blog/playwright-mcp
- https://bug0.com/blog/playwright-mcp-changes-ai-testing-2026
