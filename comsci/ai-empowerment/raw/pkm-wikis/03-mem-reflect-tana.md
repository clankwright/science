# Mem, Reflect, Tana — AI-Native Note Apps

Three different bets on what an AI-native PKM app should be.

## Mem (mem.ai)

**Vendor:** Mem Labs (YC + OpenAI investment).
**Access:** Web, iOS, Mac. Sign-up required.
**Cost:** Free tier with unlimited notes; Pro $15/mo.
**Maturity:** Production. Founded 2020; AI-pivoted hard in 2023; stable through 2026.
**Distinctive trait:** Chat-with-your-notes is the primary UI. Auto-organizes by AI; minimal user-imposed structure.

What it does: Drop notes in. Mem's AI tags, links, and surfaces them automatically. The main interaction is asking the AI questions; results are grounded in your notes with citations. Less of a graph than Roam/Tana; less of a folder than Obsidian. Closer to "chatbot with your notes as the only context."

Strength: lowest-effort capture-to-recall flow. Drop a note, ask about it later, get an answer. No filing required.
Weakness: closed ecosystem, vendor-hosted, no portable export to a graph format. If Mem goes away, you get text but lose the structure.

## Reflect (reflect.app)

**Vendor:** Reflect Notes (independent, ~5-person team).
**Access:** Web, iOS, Mac.
**Cost:** $10/mo (no free tier; 14-day trial).
**Maturity:** Production. Stable indie product since 2021.
**Distinctive trait:** End-to-end encrypted. Notes stored encrypted on Reflect's servers; only the user can decrypt. AI features run via the user's own OpenAI/Anthropic API key.

What it does: Roam-style backlinked daily-notes outliner with calendar integration, voice transcription, and AI features (summarize, transform, generate from prompt). Opinionated and minimal: no databases, no advanced queries, no plugin system.

Strength: strongest privacy posture in the AI-PKM space. Your notes are not training data, full stop.
Weakness: AI features are weaker than Tana/Mem because the encrypted-data constraint limits server-side processing. No deep Q&A over the full corpus.

## Tana (tana.inc)

**Vendor:** Tana AS (Norwegian; ex-Roam alumni).
**Access:** Web, desktop apps. Invite-gated through 2024; open since.
**Cost:** Free with limits; Pro $10/mo; Plus tiers higher.
**Maturity:** Production. Out of beta in 2024.
**Distinctive trait:** "Supertags" turn every node into a typed object with structured fields. Live queries over the graph. Strongest AI integration of the three.

What it does: Outliner-plus-database hybrid. Every block can be tagged as a typed entity (Person, Project, Meeting, Paper) with fields. Live queries return matching blocks. AI features include voice-to-structured-note ("dictate a meeting, get a structured `#meeting` block with `#person` references and `#action_item` extractions"), AI-generated outlines, and chat over the graph.

Strength: most powerful AI features of the three for users willing to invest in schema. Voice ingestion to structured data is genuinely novel.
Weakness: steep learning curve. Users who don't define supertags get a worse outliner than Reflect or Logseq. Lock-in is severe.

## Choice matrix

| User profile | Pick |
|---|---|
| Wants AI to do the work, hates filing | Mem |
| Privacy-paranoid, wants journaling + light AI | Reflect |
| Power user, wants structured-data AI workflows | Tana |
| Wants portability above all | None of these — use Obsidian or Karpathy pattern |
| Wants the lowest cost | Mem free tier |

## What none of them do

None of these tools handle a 500-PDF research library well. They're optimized for short notes (paragraph to page scale). For long-source synthesis, NotebookLM and the Karpathy pattern still win.
