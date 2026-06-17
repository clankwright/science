# ChatGPT Memory & Claude Projects/Memory

The lightweight personal-context layer baked into the major chatbots. Not a wiki, but the closest thing most users will ever set up.

## ChatGPT Memory

**Vendor:** OpenAI.
**Access:** Bundled with ChatGPT (free + paid tiers).
**Cost:** Included.
**Maturity:** Production. Launched Feb 2024, expanded throughout 2025.
**Distinctive trait:** Implicit memory. The model decides what to save from conversations without asking. User can review, edit, or delete entries via Settings.

What it stores: facts about the user (profession, location, preferences), recurring topics, ongoing projects, writing style preferences. Used to personalize all future responses.

Strengths: zero-friction. No setup. The user just talks to ChatGPT and it gradually learns context.
Weakness: opaque about what gets stored when. Users find surprising entries on review. Memory bleeds across contexts (work topics show up in personal queries).

## Claude Memory

**Vendor:** Anthropic.
**Access:** All Claude.ai plans (made free March 2026).
**Cost:** Included.
**Maturity:** Production. GA March 2026.
**Distinctive trait:** Explicit, transparent memory file. Claude synthesizes a Memory profile from your conversations every 24 hours. The profile is human-readable markdown, fully visible and editable in Settings.

Comparison to ChatGPT: less ambient (24-hour batch vs. real-time), more transparent (you see the profile), more controllable. Includes a Memory Import tool that pulls context from ChatGPT and Gemini exports — Anthropic's explicit pitch to ChatGPT power users.

## Claude Projects

**Vendor:** Anthropic.
**Access:** Pro and above.
**Cost:** Bundled with Pro ($20/mo) and higher.
**Maturity:** Production since 2024.
**Distinctive trait:** Per-project context container. Each project has a custom system prompt, attached documents (kept out of the conversation context window so they don't burn tokens), and an isolated chat history with its own memory.

What it does: closest mass-market product to a "lightweight personal wiki per topic." Drop reference docs, set the system prompt ("you are helping me manage my home renovation project, here are the contractor quotes and floor plans"), then chat freely without losing context across sessions.

Limits:
- Document attachments cap (~20 docs per project, varies).
- No web fetching from within a project (you must paste sources).
- No cross-project queries; each project is siloed.
- No file-system-style folder of markdown — just a flat list of attached docs.

## OpenAI Custom GPTs

Comparable to Claude Projects: per-GPT system prompt, knowledge files, optional actions/tools. Free for the GPT-Plus subscriber to create; usable by anyone the creator shares with.

## Gemini Notebooks (different from NotebookLM)

Google's analog to Claude Projects, integrated with Gemini chat. Less mature than Claude's offering as of May 2026.

## Honest limits

- **None of these is a corpus tool.** They handle dozens of attached docs, not hundreds. For a real personal library, NotebookLM or the Karpathy pattern is required.
- **Memory drift.** All implicit-memory systems accumulate stale facts. A move, a job change, or a project pivot means the user has to manually prune.
- **Vendor lock-in.** Memory does not migrate cleanly between ChatGPT, Claude, and Gemini, despite Claude's import tool. Each system's notion of "what's worth remembering" differs.
- **Privacy tradeoffs.** Memory contents are vendor-readable. Enterprise/Team plans offer "no training on your data" guarantees; individual tiers vary.

## Individual-empowerment angle

For 90% of users, ChatGPT Memory + a few Claude Projects is the only AI-PKM they'll ever use. It's good enough that the marginal value of setting up Obsidian + Smart Connections is small for casual users. The remaining 10% (researchers, writers, technical users with hundreds of sources) outgrow this layer and graduate to NotebookLM, Mem, or a Karpathy-pattern wiki.

The fact that Claude made Memory free in March 2026 — explicitly to compete with ChatGPT — confirms the category is now table-stakes for any chat assistant.
