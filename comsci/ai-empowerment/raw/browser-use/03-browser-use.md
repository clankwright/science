# Browser Use (browser-use.com)

**Source date:** verified 2026-05-03
**URLs:**
- https://github.com/browser-use/browser-use
- https://browser-use.com/
- https://browser-use.com/posts/sota-technical-report
- https://browser-use.com/posts/bot-detection
- https://jess-writes-about-tech.medium.com/an-open-source-browser-agent-called-browser-use-the-most-important-ai-tool-for-2026-d86c028d4516

## What it is

Open-source Python library that turns any LLM into a browser agent. Wraps Playwright; feeds the model a structured representation of the page (DOM elements with assigned numeric IDs) plus screenshots; lets the model emit `click(id)`, `input(id, text)`, `scroll`, etc. Designed to be model-agnostic: works with OpenAI, Anthropic, Google, Groq, DeepSeek, or local models via Ollama.

## Vendor / Access

- Vendor: Browser Use Inc. (YC-backed startup, 2024 founding)
- License: MIT
- Repository: github.com/browser-use/browser-use, ~78k stars (2026), the most-starred browser-agent project on GitHub
- Cloud product at browser-use.com: managed browser sessions, stealth mode, scheduling, web UI

## Cost

- Library: free
- BYO LLM: pay your provider directly. A typical task with GPT-4o or Sonnet: $0.05–$0.50.
- Cloud: $10 free credits, then pay-as-you-go on browser-time and LLM passthrough. Stealth browsers and CAPTCHA-evasion add cost.
- Self-hosted with a local model (UI-TARS, Qwen-VL): no marginal LLM cost, needs a GPU.

## Maturity

- Beta to production for technical users. Active weekly releases.
- WebVoyager: 89.1%, beating OpenAI Operator (87%) per Browser Use's published benchmarks.
- Reliability strong on standard sites; degrades on heavy JS / shadow-DOM / canvas-rendered apps.

## Distinctive trait

Best open-source / commercial-product score on WebVoyager. Strongest community momentum (stars, contributors, weekly releases). Model-agnostic by design; the abstraction is "give me an LLM client, I'll give you a browser agent". Has become the default integration target for downstream frameworks (CrewAI, LangChain, AutoGen all ship Browser Use bindings).

## Individual-empowerment angle

The category's reference open-source tool. A developer with $5 of API credit can spin up a working browser agent in 10 minutes. For non-technical individuals, the cloud product offers a no-code task description UI plus scheduled runs. Pairs naturally with personal-automation use cases: "scrape this listings site daily and email me new entries," "fill this form for each row of this CSV."
