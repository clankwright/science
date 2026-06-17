# Cline

**Compiled:** 2026-05-03

## Vendor & Access

- **Vendor:** Cline (the company; founded by Saoud Rizwan and Nik Pash). Originally released as the "Claude Dev" extension by Saoud Rizwan.
- **Access:** Open source (Apache 2.0). VS Code extension; also runs in JetBrains, Cursor, Windsurf, Zed, Neovim, and a preview CLI for macOS and Linux as of 2026.
- **Cost:** Extension is free. User pays the LLM provider directly (Anthropic, OpenAI, Google Gemini, AWS Bedrock, Azure, OpenRouter, DeepSeek, Moonshot, Qwen, xAI Grok, Mistral, Groq, Fireworks, Together, Baseten, SambaNova, Nebius, Hugging Face, plus Ollama and LM Studio for local models). 30+ providers supported by 2026.

## Year First Public

- Released mid-2024 as "Claude Dev" by Saoud Rizwan.
- Renamed Cline late 2024 / early 2025.
- v3.82 as of May 2026 (251 releases tracked).

## Maturity

Production. 5M+ installs; 61.3K GitHub stars; near 2M downloads in the six months after the rebrand.

## What It Does

- Autonomous agent inside the IDE: creates / edits files (with diff previews), runs terminal commands (with feedback monitoring), drives a browser via Claude's Computer Use for visual UI debugging.
- **Plan mode and Act mode:** explicit separation of "reason about what to do" from "do it." Plan reads and reasons; Act executes with per-step approval. This split is widely credited with reducing flailing on multi-step tasks.
- **MCP integration:** Cline can connect to MCP servers and even create new MCP tools to extend its own capabilities at runtime.
- **Checkpoints:** snapshots workspace state for compare / restore between iterations.
- Per-step approval is the default; auto-approve is configurable per tool.

## Pricing Tier

Free (the extension) plus usage-based (the LLM API). A power user running Cline on Claude Sonnet 4.6 typically spends $50-300/mo in API costs. Running it on Ollama with Qwen3-Coder or DeepSeek-Coder is zero marginal cost after hardware.

## Distinct Edge

The leading open-source agentic-coding extension by adoption. Provider-agnostic (the most providers of any agent), explicit Plan/Act separation, MCP-first, and the only mainstream agent that supports fully local execution as a first-class workflow. The Apache 2.0 license matters: forks (Roo Code, Kilo Code) have shipped meaningful additions on top.

## Sources

- https://cline.bot/
- https://github.com/cline/cline
- https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev
- https://www.latent.space/p/cline
- https://visualstudiomagazine.com/articles/2025/10/07/top-agentic-ai-tools-for-vs-code-according-to-installs.aspx
- https://www.deployhq.com/guides/cline
