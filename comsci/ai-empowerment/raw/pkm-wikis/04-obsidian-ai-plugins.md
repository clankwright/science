# Obsidian + AI Plugins

**Vendor (host):** Obsidian (Dynalist Inc.). Plugins by independent developers.
**Access:** Obsidian itself is free for personal use; AI plugins free or freemium.
**Cost:** $0 for plugins; AI calls billed via user's own API keys (OpenAI/Anthropic/Google) or local models.
**Maturity:** Production for the host app; production-to-beta for major plugins.
**Distinctive trait:** Local-first markdown vault, owned by the user, augmented by a thriving plugin ecosystem. Most "private and portable" path to AI-PKM.

## Smart Connections (brianpetro/obsidian-smart-connections)

What it does: generates embeddings of every note in the vault (using local models via transformers.js or remote OpenAI/Anthropic embeddings), then surfaces semantically related notes in a sidebar as you write. Includes a chat panel for vault-wide Q&A.

Distinctive: embedding generation can run fully offline with bundled local models. No data leaves the machine on the default config. Premium "Smart Plugins" bundle (Connections + Chat + Context) at ~$20/mo for the more powerful version.

## Copilot for Obsidian (logancyang/obsidian-copilot)

What it does: chat panel inside Obsidian. Vault-wide Q&A, custom prompts, inline text generation/transformation. Supports OpenAI, Anthropic, Google, plus LM Studio and Ollama for local models.

Distinctive: ~100k installs (largest user base of any Obsidian AI plugin). Most flexible model backend. Recently added agentic vault operations (file creation, refactoring) inspired by the Karpathy pattern.

## Smart Composer

Newer entrant. Multi-step AI editing with diff preview before applying changes. Cursor-like experience but for prose.

## Khoj AI

Self-hosted personal AI that indexes Obsidian (and other sources: email, browser bookmarks). Heavier setup than Smart Connections but does cross-source indexing across more than just the vault.

## Honest limits

- **Plugin sprawl.** Five different plugins doing overlapping work. No clear winner; users assemble their own stack.
- **Embedding staleness.** Vault changes don't auto-reindex in real time on most plugins; manual reindex needed.
- **Mobile gap.** Obsidian Mobile supports plugins but battery and performance hits make AI plugins painful on phone.
- **Model fragmentation.** Each plugin reimplements model integration; users juggle keys across plugins.
- **No agentic ingest.** None of these will reach out and pull articles, fetch URLs, or transcribe meetings. They work over what's already in the vault.

## vs. Karpathy pattern

Obsidian + Copilot is the Karpathy pattern with a GUI. The plugin author has done the schema work and tooling for you. Tradeoff: less flexible, but immediately usable by non-developers. For a user who wants the markdown-folder approach but doesn't want to live in a terminal, Obsidian + Copilot is the answer.

## Individual-empowerment angle

This stack is the highest-leverage choice for users who want AI-PKM but reject vendor lock-in. Vault is plain markdown in a local folder. AI is opt-in per plugin. User can quit any plugin or even Obsidian itself without data loss. The combination matches NotebookLM's chat capability for most queries while keeping the corpus owned and portable.
