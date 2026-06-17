# Browserbase / Stagehand

**Source date:** verified 2026-05-03
**URLs:**
- https://www.browserbase.com/
- https://www.browserbase.com/pricing
- https://www.browserbase.com/stagehand
- https://github.com/browserbase/stagehand
- https://www.stagehand.dev/
- https://docs.stagehand.dev/v3/basics/agent
- https://www.nxcode.io/resources/news/stagehand-vs-browser-use-vs-playwright-ai-browser-automation-2026

## What they are

Two products from the same company, sold as a stack:

- **Browserbase**: managed cloud headless browsers as infrastructure. Each session is an isolated Chromium VM with a residential IP, stealth fingerprint, session replay, captcha-solving, and an Agent Identity feature for persistent login state. The "AWS for browsers" pitch.
- **Stagehand**: open-source SDK (TypeScript and Python) on top of Playwright that adds four AI primitives: `act("click the apply button")`, `extract({schema})`, `observe()` (suggest next actions), and `agent()` (multi-step loop). Lets developers mix deterministic Playwright code with LLM-driven steps in the same script.

## Vendor / Access

- Vendor: Browserbase Inc. (Y Combinator W24)
- Stagehand license: MIT, github.com/browserbase/stagehand
- Browserbase: SaaS, signup at browserbase.com

## Cost

- Stagehand: free
- Browserbase: free tier, then Developer $20/mo, Startup $99/mo, Scale custom. Some sources cite a $39 Hobby tier with $0.10–$0.12/hour browser overage.
- LLM costs separate (pay OpenAI / Anthropic / etc.). At 10k extractions/day, LLM bill alone runs $50–$200/day per published estimates.

## Maturity

- Production. Browserbase powers commercial agents from many startups and is the reference cloud-browser substrate.
- Stagehand v3 (2026) is stable, has typed schemas for extraction, and a dedicated agent loop.

## Distinctive trait

Hybrid model: developers get to choose, line by line, whether to use deterministic Playwright (fast, free) or AI primitives (resilient, costly). Not "all AI all the time". This is the SDK people pick when an off-the-shelf agent is too slow or too unreliable, but pure Playwright is too brittle.

Browserbase's infrastructure (residential IPs, fingerprint rotation, session replay, captcha solving) is the productivity multiplier; running your own stealth browser farm is non-trivial.

## Individual-empowerment angle

Less consumer-facing than Browser Use or ChatGPT Agent. Developer tool. The win is for individuals building their own micro-SaaS or automation: a one-person product can use Browserbase as its scraping infra without operating a Chromium fleet. Free tier is enough for a personal project; the moment you need stealth proxies or scale, the pricing scales accordingly.
