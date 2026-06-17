# Logseq + AI Plugins

**Vendor (host):** Logseq (open source).
**Access:** Free, MIT-licensed desktop app (Mac/Win/Linux/Android/iOS).
**Cost:** Free; AI plugins use user's API keys.
**Maturity:** Host app: stable but slow-development. Plugins: mostly beta or pre-alpha.
**Distinctive trait:** Outliner-style PKM (like Roam) but local-first and open source. Plugins are scriptable and the data is just markdown + EDN.

## Plugin ecosystem (May 2026)

Logseq Marketplace lists ~486 plugins. AI-focused ones include:

- **logseq-plugin-gpt3-openai** (briansunter): the original GPT plugin. Generate text from prompts in any block. Stable but feature-frozen.
- **logseq-plugin-ai-assistant** (ahonn): more flexible prompt-and-transform tool. Supports OpenAI models.
- **AssistSeq**: multi-provider (OpenAI, Gemini, Ollama, Groq). Good local-model support.
- **logseq-ai** (HarrisonTotty): newer. Combines an MCP server (so external Claude Code/Codex agents can query the graph) with an embedded "Lain" assistant in the UI. The MCP angle is the most interesting recent move.
- **logseq-ai** (shovon): pre-alpha; OpenAI-only.

## Status of the host app (2026)

Logseq's official development pace has lagged. Community threads through late 2025 and early 2026 ask repeatedly when the team will commit to first-party agentic AI features; answers have been thin. Most AI value comes from third-party plugins.

The MCP-server plugin is the most forward-looking development: it lets a coding agent (Claude Code, Codex) treat the Logseq graph as a queryable data source, effectively bringing the Karpathy pattern to outliner data.

## Honest limits

- **Slow upstream development.** The Logseq team has been quiet on AI roadmap. Power users are forking or migrating.
- **Plugin quality variance.** Many AI plugins are weekend projects; broken with each Logseq update.
- **Outliner format friction.** Some AI tasks (long-form synthesis, multi-paragraph analysis) fit a document model better than an outline-of-blocks model.
- **Block reference fragility.** Logseq's strength (block-level addressing) doesn't survive export well, complicating Karpathy-style migration to plain markdown.

## Individual-empowerment angle

For users already deep in Logseq, AssistSeq + the MCP-server plugin gets you ~80% of the Obsidian-Copilot experience without leaving the outliner. For new users in 2026, Obsidian is the better starting point: more active ecosystem, better AI plugins, document model fits LLM workflows more naturally.

## vs. Obsidian

Obsidian wins on AI plugin maturity and active development. Logseq wins on philosophical purity (fully open source, daily-notes outliner native). For AI-PKM specifically, Obsidian is the safer 2026 bet.
