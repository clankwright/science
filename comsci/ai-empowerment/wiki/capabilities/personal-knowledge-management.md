---
id: personal-knowledge-management
title: "Personal Knowledge Management"
kind: capability
last_verified: 2026-05-03
---

# Personal Knowledge Management

> **Summary:** An AI agent ingests a personal corpus (notes, papers, articles, transcripts, screenshots, browser history) and provides synthesis, cross-reference, on-demand re-organization, and grounded Q&A over it. The 2024-2026 wave collapsed the synthesis tax that killed most PKM efforts past ~500 notes. Hallucination over your own corpus is real: NotebookLM (the strictest grounded tool) still misses ~13% of the time; general chatbots over the same documents miss ~40%.

**Sources:** [[raw/pkm-wikis/00-overview.md]], [[raw/pkm-wikis/01-karpathy-wiki-pattern.md]], [[raw/pkm-wikis/02-notebooklm.md]], [[raw/pkm-wikis/07-chatgpt-claude-memory.md]], [[raw/pkm-wikis/08-meeting-tools-granola.md]]

---

## What changed

Pre-AI baseline (2022): a motivated individual accumulating notes from hundreds of sources had three options.

1. Hand-curated wiki (DokuWiki, MediaWiki, Notion, TiddlyWiki). Required hours per week of filing, linking, refactoring, deduping. Almost nobody sustained it past 6 months; the few who did (Andy Matuschak, Maggie Appleton, Gwern Branwen) became known for the discipline.
2. Append-only note dumps with full-text search (Evernote, Apple Notes, plain markdown plus grep). Easy to capture; impossible to synthesize. Past ~500 notes the synthesis tax exceeded the capture value; most users abandoned long-term notes apps within 18 months.
3. Hire it out (research assistants $30-80/hr; boutique firms $300-1500/hr). Inaccessible for personal use.

Two failure modes recurred in option 2: the "where did I read that" problem (full-text search fails because recalled phrasing differs from the original) and the cross-source synthesis gap (five notes touch a topic; the user can find them all but lacks time to combine them).

Four capability stacks landed between Q3 2024 and Q2 2026 and made synthesis automatic:

- **Long context windows.** Gemini 1.5 (1M, Feb 2024), Claude 3 (200k), Claude 4 (1M, 2025). For corpora under ~5000 pages, the entire personal library fits in context, sidestepping vector-RAG chunking brittleness.
- **Source-grounded RAG with citation training.** [NotebookLM](../tools/notebooklm.md) (GA Dec 2024) post-trained Gemini to refuse to answer outside the uploaded sources and to cite the exact passage. Hallucination dropped to ~13% versus ~40% for general chat over the same documents.
- **Agentic ingest and filing.** Coding agents (Claude Code, OpenAI Codex, Cursor agent mode) read a folder of markdown, propose a schema, write new files, refactor old ones, and maintain an index. This is the [Karpathy LLM-wiki pattern](../tools/karpathy-llm-wiki-pattern.md): the agent does what a hand-curating maintainer would do, on demand.
- **Audio overviews.** NotebookLM's two-host podcast generation made dense source material consumable in passive listening mode.

## Notable tools

- [NotebookLM](../tools/notebooklm.md). Free + $20/mo Plus. Source-grounded RAG with audio overviews. The most direct path from "pile of PDFs" to "ask questions about the pile."
- [Karpathy LLM-wiki pattern](../tools/karpathy-llm-wiki-pattern.md). Workflow on top of any coding agent. No vector DB; persistent markdown wiki maintained by the agent.
- [Obsidian with AI plugins](../tools/obsidian-with-ai.md). Smart Connections, Copilot, Smart Composer. Local-first markdown, portable.
- [Claude Projects and Memory](../tools/claude-projects-and-memory.md). Per-project context container; March 2026 free Memory profile. Closest mass-market analog to a lightweight personal wiki.
- [Granola](../tools/granola.md). Bot-free meeting capture from device audio; structured summaries; feeds downstream PKM.
- AI-native note apps: Mem ($15/mo, chat-with-your-notes), Reflect ($10/mo, end-to-end encrypted), Tana ($10/mo, supertags + structured queries).
- Logseq with AI plugins (AssistSeq, MCP-server plugin) for outliner users; slower upstream development than Obsidian.
- Screen capture: Microsoft Recall (Copilot+ PCs, on-device), Screenpipe (open source, cross-platform, the de facto Rewind successor since Rewind was killed by Meta acquisition Dec 2025).
- Personal RAG stacks: LlamaIndex, LangChain/LangGraph, Continue.dev for users who build their own.

## Maturity and limits

Production at the consumer tier; mass-market via NotebookLM and chatbot Memory features.

Honest limits, with numbers from the raw notes:

- **Hallucination over your own corpus is real.** NotebookLM ~13% in independent testing; general chatbots over the same docs ~40%. Failure mode skews toward interpretive overconfidence: turning attributed opinions into flat factual claims; adding unsupported characterizations. NotebookLM's citation accuracy is ~95% in clinical evaluation; the residual is misattribution of which source a claim came from.
- **Vector RAG chunking is brittle for short questions over long sources.** Where the answer crosses chunk boundaries, retrieval misses it. The long-context approach (NotebookLM's 300-source full-context window for "very specific" queries hits 0% hallucination) is the workaround.
- **Lock-in tradeoffs.** Notion and Tana own your data structurally; Mem is closed. Obsidian, Logseq, and the Karpathy-pattern markdown folder are portable. Portable options have weaker AI integration; AI-native options trap your corpus.
- **Agent quality ceiling.** A coding agent maintaining your wiki inherits the agent's reasoning quality. Claude Sonnet/Opus 4.7, GPT-5, and Gemini 3 are good enough; one tier down produces plausible-looking but structurally weak rewrites.
- **Capture is still manual for most workflows.** Rewind got acquired and shut down Dec 2025; Recall is opt-in. Most users still copy-paste, save-as, or upload.
- **Privacy gradient.** NotebookLM, Mem, ChatGPT Memory, Claude Memory store on vendor cloud. Reflect is end-to-end encrypted. Obsidian, Logseq, Screenpipe, and local-LLM Karpathy setups are local-first.
- **The audio-overview novelty wears off.** Most users revert to text within 2-3 weeks.

## Individual empowerment

Single-person workflows that were impractical in 2022:

- Living research corpus across hundreds of papers. A grad student or independent researcher drops every PDF they've read into NotebookLM (300-source cap on Plus) or a Karpathy-pattern Claude Code folder and asks cross-paper synthesis questions.
- "Everything I've ever read about X." ChatGPT/Claude Memory plus a personal wiki folder is the first practical realization of Vannevar Bush's Memex (1945).
- Meeting transcript to briefing pipeline. Granola captures meetings from device audio (no bot joins), produces structured notes, feeds Claude Projects for cross-meeting synthesis. A solo founder runs the operations layer that previously required an executive assistant.
- Field-expert recall. A doctor, lawyer, or engineer maintains a corpus of reference material plus their own case notes; the LLM answers "have I seen a case like this before" in seconds.
- Cross-modal recall. Microsoft Recall plus Screenpipe answer "what was on my screen when I was looking at that paper last Tuesday."

The qualitative shift: PKM stops being a hobby for disciplined power users and becomes a default for anyone who reads or talks for a living. The maintenance tax dropped by ~95%; the synthesis ceiling rose from "what one human can hold in working memory" to "what an LLM can hold in 1M tokens."

## See also

- [Autonomous research](autonomous-research.md)
- [Personalized education](personalized-education.md)
- [Email and inbox management](email-and-inbox-management.md)
