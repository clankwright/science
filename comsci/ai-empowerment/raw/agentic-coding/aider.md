# Aider

**Compiled:** 2026-05-03

## Vendor & Access

- **Vendor:** Aider AI (originally Paul Gauthier; now community + Aider AI org).
- **Access:** Open source, Apache 2.0. CLI tool installed via pip.
- **Cost:** Free; user pays LLM provider directly. Works with Claude (3.7 Sonnet, 4.x), DeepSeek, OpenAI o1/o3-mini, GPT-5, Gemini 2.5 Pro, and local LLMs (Ollama).

## Year First Public

- Originally released by Paul Gauthier in 2023.
- Continuously developed; recent releases credit upstream Aider for 62-88% of their own diff (i.e., the tool writes most of itself).

## Maturity

Production for individual users; widely respected as the cleanest CLI pair-programmer.

## What It Does

- Terminal-based AI pair programmer that edits code directly in a local Git repo.
- **Automatic Git commits:** every change is an atomic Git commit with a descriptive message. This is the design choice that distinguishes Aider from competitors and makes its iterations safely reversible.
- **Repo map:** statically analyzes the codebase and feeds a compressed map of the call graph to the LLM, enabling work on larger projects without loading every file.
- **Architect / editor pair:** a stronger model plans (architect) and a cheaper model executes the edits (editor), reducing cost without losing quality.
- **Watch mode:** monitors files for AI comments (e.g., `# AI: refactor this`); when found, executes the request automatically.
- **Voice and /web:** voice-to-code, web page fetching as context.
- **Polyglot leaderboard:** Aider maintains its own benchmark covering 6 languages.
- **`.aider.conf.yml`:** version-controlled configuration so AI-coding policy is part of the repo.
- 100+ programming languages supported.

## Pricing Tier

Free + usage-based API. A typical solo developer running Aider on Claude Sonnet for daily work spends $30-150/mo in API.

## Distinct Edge

The most vendor-agnostic, lightest-weight, and Git-disciplined of the major agents. No proprietary backend, no editor lock-in, no SaaS account; the only network calls are to LLM providers the user configures. Best fit for: SSH-only workflows (Vim over SSH, tmux on a build server), minimalist developers, and anyone who wants every agent action to be a reviewable Git commit by default. The architect / editor split was a distinctive cost-control idea years before the major IDE agents adopted similar patterns.

## Sources

- https://aider.chat/
- https://aider.chat/docs/
- https://aider.chat/docs/usage.html
- https://github.com/Aider-AI/aider
- https://www.deployhq.com/guides/aider
- https://voipnuggets.com/2025/03/25/aider-your-open-source-fully-local-and-100-free-ai-pair-programmer-with-ollama/
