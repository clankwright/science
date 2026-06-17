# PKM + LLM-Curated Wikis — Overview

Capability: An AI agent ingests a personal corpus (notes, papers, articles, transcripts, screenshots, browser history) and provides synthesis, cross-reference, on-demand re-organization, and grounded Q&A over it. The agent does the curation work that previously required either a research assistant or thousands of hours of hand-wiki maintenance.

## Pre-AI baseline (2022)

A motivated individual accumulating notes from hundreds of sources had three options:

1. **Hand-curated wiki** (DokuWiki, MediaWiki, Notion, TiddlyWiki). Worked, but required hours per week of maintenance: filing, linking, refactoring, deduping. Almost nobody sustained it past 6 months. The few who did (Andy Matuschak, Maggie Appleton, Gwern Branwen) became known specifically for the discipline.
2. **Append-only note dumps + full-text search** (Evernote, Apple Notes, OneNote, plain markdown + grep). Easy to capture; impossible to synthesize. Search returned a flat list of hits; the human still had to read them, hold them in working memory, and write the synthesis. For corpora past ~500 notes, the synthesis tax exceeded the capture value. Most users abandoned long-term notes apps within 18 months.
3. **Hire it out**. Personal research assistants ($30-80/hr), boutique research firms (AlphaSights, GLG: $300-1500/hr), or ghostwriting/editorial services for the synthesis step. Inaccessible for personal use.

Two specific failure modes recurred in option 2:

- **The "where did I read that" problem.** A user remembers reading something germane to a current question but can't find it. Full-text search fails because the recalled phrasing differs from the original.
- **The cross-source synthesis gap.** Five notes touch on a topic from different angles; the user can find them all but lacks the time to actually combine them into a coherent picture.

PKM tools (Roam Research, Obsidian, Logseq) addressed the first problem partially with bidirectional links, but the user still did all the linking by hand.

## What changed (the unhobbling moves)

Four capability stacks landed between Q3 2024 and Q2 2026 that, combined, made the synthesis step automatic:

- **Long context windows.** Gemini 1.5 (1M tokens, Feb 2024), Claude 3 (200k), then Claude 4 series (1M, 2025). For corpora under ~5000 pages, the entire personal library fits in context, sidestepping the chunking/retrieval brittleness that hobbled vector RAG.
- **Source-grounded RAG with citation training.** NotebookLM (GA Dec 2024) post-trained Gemini to refuse to answer outside the uploaded sources and to cite the exact passage. Hallucination rate dropped to ~13% versus ~40% for general-purpose chat over the same documents.
- **Agentic ingest and filing.** Coding agents (Claude Code, OpenAI Codex, Cursor agent mode) can read a folder of markdown, propose a schema, write new files, refactor old ones, and maintain an index. This is the Karpathy LLM-wiki pattern: the agent does what a hand-curating wiki maintainer would do, but on demand.
- **Audio overviews.** NotebookLM's two-host podcast generation made dense source material consumable in a passive listening mode, opening the corpus to commute/exercise time.

## Maturity (May 2026)

| Tier | Tools |
|---|---|
| Production, mass-market | NotebookLM (free + $20/mo Plus), ChatGPT Memory, Claude Memory + Projects |
| Production, niche | Mem ($15/mo), Reflect ($10/mo), Tana ($10/mo), Granola ($14-35/mo) |
| Workflow-grade (you write it) | Karpathy LLM-wiki pattern with Claude Code / Codex over a markdown folder |
| Plugin / DIY | Obsidian + Smart Connections + Copilot, Logseq + AI plugins, LlamaIndex/LangChain stacks |
| Disrupted / shut down | Rewind.ai (Meta-acquired Dec 2025, capture disabled); Heyday (defunct) |
| OS-bundled | Microsoft Recall (Copilot+ PCs, opt-in, on-device) |

## Honest limits

- **Hallucination over your own corpus is real.** Even NotebookLM (the strictest) hallucinates ~13% of the time. Failures skew toward "interpretive overconfidence": converting an attributed opinion into a flat factual claim, or adding unsupported characterizations. Errors are subtler than open-web hallucination because the surface form looks grounded.
- **Vector RAG chunking is brittle for short questions over long sources.** Where a question's answer crosses chunk boundaries, retrieval misses it. The long-context approach (NotebookLM's 300-source full-context window for "very specific" queries hits 0% hallucination) is the workaround.
- **Lock-in tradeoffs.** Notion and Tana own your data structurally; Mem is closed. Obsidian, Logseq, and the Karpathy-pattern markdown folder are portable. The portable options have weaker AI integration; the AI-native options trap your corpus.
- **Agent quality ceiling.** A coding agent maintaining your wiki inherits the agent's reasoning quality. As of May 2026, Claude Sonnet/Opus 4.7, GPT-5, and Gemini 3 are good enough for prose curation; one tier down still produces plausible-looking but structurally weak rewrites.
- **Capture is still manual for most workflows.** The screen-capture-everything tools (Rewind, Recall) promised passive ingest but Rewind got acquired and shuttered; Recall is opt-in only. Most users still copy-paste, save-as, or upload.
- **Privacy gradient.** NotebookLM, Mem, ChatGPT Memory, Claude Memory all store on vendor cloud. Reflect is end-to-end encrypted. Obsidian, Logseq, Screenpipe, and the local-LLM Karpathy-pattern setup are local-first.
- **The audio overview novelty wears off.** Two-host podcast generation is impressive once. For routine consumption, most users revert to text within 2-3 weeks.

## Individual-empowerment angle

Single-person workflows that were impractical in 2022:

- **Living research corpus across hundreds of papers.** A grad student or independent researcher can drop every PDF they've ever read into NotebookLM (300-source cap on Plus) or a Karpathy-pattern Claude Code folder, and ask cross-paper synthesis questions ("which papers contradict the 2019 Smith result on X").
- **"Everything I've ever read about X."** Combined ChatGPT/Claude Memory + a personal wiki folder = the first practical realization of Vannevar Bush's Memex (1945).
- **Meeting transcript -> briefing pipeline.** Granola captures meetings from device audio (no bot joins), produces structured notes, and now feeds Claude Projects for cross-meeting synthesis. A single founder runs the operations layer that previously required an executive assistant.
- **Field-expert recall.** A doctor, lawyer, or engineer maintains a personal corpus of reference material plus their own case notes; the LLM answers "have I seen a case like this before" in seconds.
- **Cross-modal recall.** Microsoft Recall + Screenpipe answer "what was on my screen when I was looking at that paper last Tuesday."

The qualitative shift: PKM stops being a hobby for disciplined power users and becomes a default for anyone who reads or talks for a living. The maintenance tax dropped by ~95%; the synthesis ceiling rose from "what one human can hold in working memory" to "what an LLM can hold in 1M tokens."

## Files in this directory

- `01-karpathy-wiki-pattern.md` — the founding pattern (Aug 2024 / Apr 2026 update)
- `02-notebooklm.md` — Google's source-grounded RAG product
- `03-mem-reflect-tana.md` — AI-native note apps
- `04-obsidian-ai-plugins.md` — Smart Connections, Copilot, Smart Composer
- `05-logseq-ai-plugins.md` — outliner ecosystem
- `06-screen-capture-recall.md` — Rewind shutdown, Recall, Screenpipe
- `07-chatgpt-claude-memory.md` — lightweight personal context in chatbots
- `08-meeting-tools-granola.md` — Granola, Otter, Fireflies as PKM-adjacent ingest
- `09-personal-rag-stacks.md` — LlamaIndex, LangChain, Continue.dev DIY
