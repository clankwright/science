# Tabletop RPG GM tools (Foundry VTT, Roll20, plugins)

## What it is

The "AI GM in a box" category from the previous note is for people who have nobody to play with. This category is for people who have a table but want AI to help the human GM run it. Foundry VTT and Roll20 are the dominant virtual tabletops; both have plugin/module ecosystems where AI tools have piled in over 2024-2026.

Concrete plugins (Foundry):
- **D&D5e NPC Maker / PF2E NPC Auto-Builder** — text prompt -> complete game-ready NPC sheet (level-appropriate ability scores, class features, spells, skills, equipment) imported into the world in seconds.
- **NPC Generator (GPT)** — uses ChatGPT API to spin random NPCs.
- **AI Generated NPCs (aactors)** — generates the NPC sheet plus a portrait from DALL-E or MidJourney.
- **AI Actors** — actors, items, armor, generated end-to-end.
- **Coriolis NPC Generator**, **Shuggaloaf's Simple NPC Generator**, etc., for various non-D&D systems.

Roll20 has a smaller AI-plugin ecosystem (Roll20's API is more locked-down) but third-party tools like RoleForge and MacerAI offer Roll20 export. NPC and encounter generators (LegendKeeper, World Anvil, Kanka) handle the lore side.

LegendKeeper specifically is the leading collaborative worldbuilding tool with real-time multiplayer wiki, interactive maps, free-form whiteboards. As of 2026 it's primarily a structured information tool — the "AI brain" pairs with it via external LLMs (ChatGPT, Claude, NovelAI, Sudowrite). World Anvil similar but async.

## Specific unlocks
- "Player walks into a tavern you didn't prep; type 'tense barkeep, suspicious of strangers, has a secret about the local lord' and have a stat-blocked NPC with portrait in 10 seconds."
- "Run a session prep in 20 minutes instead of 3 hours: generate 5 named NPCs, 2 encounters, a battle map, and a sidequest hook."
- "Convert a whole module's worth of stat blocks from 5e to PF2E by feeding both rulesets to an LLM and asking for re-conversion."
- "Real-time wiki edits during the session in LegendKeeper while another player updates the family tree on the same page."
- "Auto-journal what happened this session by feeding the chat log to GPT and getting a clean recap email to the players."

## Pre-AI baseline

Session prep was the GM's main work — 2-4 hours per hour of play was typical. NPC stat blocks were copy-paste from the Monster Manual or hand-rolled. Portraits meant Pinterest hoarding or paying an artist.

## Cost / access

Foundry VTT: $50 one-time license. Most AI plugins are free; some require your own OpenAI/Anthropic API key (so GM pays per usage, typically pennies per NPC). Roll20: free tier, $5-10/mo paid. LegendKeeper: $9/mo. World Anvil: free tier + paid tiers $4-25/mo.

## Maturity

Production. Foundry's module ecosystem is mature, the AI modules have been iterating for 2+ years. Quality of generated NPCs varies with how good your prompt is and which model you wire up. Encounter balancing is hit-or-miss — most modules generate the NPC then leave CR-balancing to the GM.

## Sources
- https://foundryvtt.com/packages/npc-generator-gpt
- https://foundryvtt.com/packages/aactors
- https://foundryvtt.com/packages/ai-actors
- https://foundryvtt.com/packages/DnD5eNpcMaker
- https://foundryvtt.com/packages/Pf2eNpcMaker
- https://foundryvtt.com/packages/coriolis-npc-generator
- https://github.com/Halftonex/npc-generator-gpt
- https://www.legendkeeper.com/
- https://www.legendkeeper.com/world-anvil-alternative
- https://char-gen.com/alternatives/world-anvil
- https://aidungeonmaster.ai/blog/dnd-ai-tools-guide-2026
