# Personal RAG Stacks: LlamaIndex, LangChain, Continue.dev

The DIY layer. Frameworks for users who want to build their own personal-RAG application rather than use a vendor product.

## LlamaIndex

**Vendor:** LlamaIndex Inc. (open source core, hosted offering for enterprise).
**Access:** Open source (MIT). Python and TypeScript.
**Cost:** Free for self-hosted; usage-based for hosted (LlamaCloud).
**Maturity:** Production. Most-used Python RAG framework.
**Distinctive trait:** Data-first design. Connectors for hundreds of data sources, sophisticated indexing strategies (hierarchical chunking, auto-merging retrieval, sub-question decomposition).

For personal use: drop your notes/PDFs/email into LlamaIndex, build a vector index, query via Python. Maybe 100 lines of code for a working personal RAG system. The 2026 sweet spot is LlamaIndex for ingestion + indexing, with thinner orchestration layered on top (or no orchestration framework at all if a single agent is doing the work).

## LangChain / LangGraph

**Vendor:** LangChain Inc.
**Access:** Open source. Python and TypeScript.
**Cost:** Free for self-hosted; usage-based for LangSmith (observability) and LangGraph Cloud.
**Maturity:** Production. Most-used agent-orchestration framework.
**Distinctive trait:** Workflow / agent / tool-use orchestration. Where LlamaIndex is data-pipeline-shaped, LangChain is agent-shaped.

For personal use: less directly useful than LlamaIndex for a vanilla "ask questions over my notes" setup. More useful if you want a multi-step agentic flow ("find the relevant notes, summarize, draft an email, save the draft to disk"). Many production teams pair LlamaIndex (ingest/index) with LangGraph (orchestration).

## Continue.dev

**Vendor:** Continue (open source, with hosted offering).
**Access:** Open source VS Code and JetBrains plugin.
**Cost:** Free; bring-your-own-API-key for cloud models, or use local models via Ollama/LM Studio.
**Maturity:** Production. Active development.
**Distinctive trait:** Cursor-style AI coding assistant but plugin-based, model-agnostic, and indexes your codebase locally. Can be configured to index a notes folder as well, turning VS Code into an Obsidian-like Karpathy-pattern environment.

For PKM: less direct fit than the other two. Useful if your PKM happens to live in a code repo (technical wiki, code+docs project) and you want inline AI assistance.

## DIY trade-offs

A personal RAG stack built on these frameworks gets you:

- Full control over chunking, retrieval, and prompting.
- Choice of any embedding/LLM model, including local (Ollama, llama.cpp, LM Studio).
- No vendor lock-in or pricing changes.
- Integration with your existing data wherever it lives.

In exchange for:

- Maintenance burden. Frameworks change APIs every few months.
- No UI by default. You're building chat or query interfaces yourself, or using a notebook.
- Setup time: realistically a weekend for a working system, plus ongoing tuning.

## When to DIY vs. use a product

| Scenario | Use |
|---|---|
| Just want answers over my docs | NotebookLM |
| Want a personal wiki with AI | Karpathy pattern + Claude Code |
| Want a polished note app | Mem / Reflect / Tana |
| Want local-first markdown + AI | Obsidian + Copilot |
| Want full customization | LlamaIndex (or Karpathy pattern) |
| Need a domain-specific app (legal, medical) | LlamaIndex + custom UI |
| Hate building UI | Stay with NotebookLM or Karpathy pattern |

## Honest limits of DIY

- **The "agent SDK" trend is eroding the framework value prop.** Anthropic, OpenAI, and Google all ship first-party agent SDKs (Anthropic Agent SDK, OpenAI Agents SDK, Google ADK) that handle tool use and orchestration directly. Many use cases that needed LangChain in 2023-2024 now need only an SDK plus a few tools.
- **Vector RAG fundamentals are getting commoditized.** Long-context models reduce the need for sophisticated retrieval; many tasks that demanded LlamaIndex's hierarchical chunking now fit in context.
- **Personal-scale corpora rarely need it.** For a folder under ~10k pages, the Karpathy pattern (no embeddings, just file reads) usually outperforms vector RAG on quality and is simpler to maintain.

## Individual-empowerment angle

These frameworks are the "build your own NotebookLM" path. Most individuals shouldn't bother in 2026: the products are good enough. The remaining audience is developers and power users who want a setup that exactly matches their data, models, and workflow. For them, LlamaIndex + a long-context model + a thin custom UI is a 2-day project that produces a tool the user owns forever.
