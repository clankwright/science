# Roblox Code Assist and Roblox Assistant

## What it is

Two related in-Studio AI features:
- **Code Assist**: inline LLM autocomplete and code generation for Luau (Roblox's Lua dialect), inside Roblox Studio. Acts like Copilot but trained on Roblox APIs and idioms.
- **Roblox Assistant**: a chat panel that can read your game's code and data model, answer questions, generate and edit scripts, build scenes, and (as of April 2026) plan multi-step builds. Adds Mesh Generation and Procedural Model Generation: you prompt "a Victorian bookcase, 5 shelves" and get a fully textured, parametrically editable 3D mesh inside the editor.

April 2026 launched **Planning Mode**: Assistant analyzes your existing project, asks clarifying questions, produces a reviewable/editable action plan, then executes. It runs its own playtest: simulates keyboard/mouse, takes screenshots, reads logs, feeds errors back into iteration.

## Specific unlocks
- "Ship a playable Roblox game without writing a line of Lua by chatting with Code Assist."
- "A kid prompts 'make a tycoon game where you run a sushi restaurant'; Planning Mode scaffolds the whole thing, then Assistant playtests it and fixes its own bugs."
- "Generate a fully UV-mapped 3D bookcase in 10 seconds; tweak shelf count and material via parameters, no Blender."
- "Voice-prompt your way through scripting an inventory system on an iPad while sitting on the couch."
- "Convert a 200-line monolithic script into a typed, modular ServerScriptService layout in one Assistant turn."

## The school-age dev demographic

Roblox is the world's largest non-pro game-dev population. The platform's new tiered accounts (April 2026: Roblox Kids 5-8, Roblox Select 9-15, rolled out globally June 2026) put hard chat/communication restrictions on minors but do not restrict creation. Codakid, iD Tech, JetLearn, Codingal, and Codingal all sell "Roblox Lua + AI" 2026 curricula explicitly aimed at 9-14 year olds. The pedagogy: prompt -> read generated Luau -> modify parameters -> playtest. The teacher-led debate on whether kids who never write Luau by hand are "really learning to code" is unresolved.

The platform exposes ~70M daily active users as a free distribution channel: a kid who ships a game can plausibly get hundreds of plays in a day with no marketing.

## Pre-AI baseline

A teenager could learn Luau via YouTube tutorials over months, copy-paste from DevForum, and ship something. Pre-2024 typical first-game time-to-ship: weeks-to-months of after-school work. Now: hours-to-days for a comparable prototype.

## Cost / access

Free to use Roblox Studio. Code Assist is free. Roblox Assistant is free with usage limits; heavier use is gated behind Robux/usage tiers (specifics shift). Mesh Generation has per-generation Robux costs.

## Maturity

Production. Code Assist has been GA since 2023 and is the most-used AI assistant inside any consumer game-dev tool by raw user count (Roblox Studio MAU). Planning Mode is in active rollout (April 2026). Mesh and Procedural Model Generation are in beta but in production use. Generated Luau quality is uneven on systems-level design but solid for component scripts.

## Sources
- https://about.roblox.com/newsroom/2026/04/roblox-studio-going-agentic
- https://devforum.roblox.com/t/announcing-planning-mode-for-roblox-assistant/4580715
- https://techcrunch.com/2026/04/16/robloxs-ai-assistant-gets-new-agentic-tools-to-plan-build-and-test-games/
- https://www.technology.org/2026/04/17/roblox-assistant-now-plans-your-game-builds-it-plays-it-and-judges-itself/
- https://dataconomy.com/2026/04/17/roblox-adds-agentic-ai-tools-to-assist-game-developers/
- https://codakid.com/blog/roblox/roblox-lua-scripting-guide-kids-2025/
- https://www.idtech.com/courses/roblox-lua-coding-and-game-scripts
- https://about.roblox.com/newsroom/2026/04/introducing-roblox-kids-and-select-accounts
