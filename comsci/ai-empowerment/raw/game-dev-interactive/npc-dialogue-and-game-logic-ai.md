# NPC dialogue and game-logic AI (Convai, Inworld, Charisma.ai, NVIDIA ACE)

## What it is

Runtime AI for in-game characters. Player talks to an NPC (text or voice), the NPC responds with generated speech, lip-sync, facial animation, and sometimes triggers in-game actions (move, attack, pick up item). The NPC's "brain" is an LLM, optionally with a memory system, persona, and tool-use bindings for game actions.

Players in 2026:
- **Convai** — leading independent NPC platform. Unity Asset Store + Unreal Fab plugin. Dialog + actions + voice + lipsync, MetaHuman integration. Partnership with NVIDIA. ~$6.5M revenue 2024.
- **Inworld AI** — broader voice AI / Agent Runtime platform. Started in NPCs; now in Google, NVIDIA, Meta, Ubisoft, Xbox products. Quotes 200ms response time vs 1-2s for stock cloud APIs. Consumption pricing: orchestration is free; you pay per million tokens for the LLM, per million chars for TTS, per unit for STT.
- **NVIDIA ACE for Games** — NVIDIA's bundle (Riva STT/TTS, NeMo LLM, Audio2Face). Embedded in titles from KRAFTON, Ubisoft, NetEase, Perfect World.
- **Charisma.ai** — story editor + AI conversation engine, leans interactive entertainment / theme parks rather than mainstream game NPCs.

Distinct from the AI Game Master category: those generate the *story*. These run the *characters at runtime* once a designer-written story exists.

## Specific unlocks
- "Have an NPC that genuinely converses about anything in the game world, remembers previous conversations with the player, and reacts to the player's current quest."
- "Voice-controlled dialogue: speak to an NPC; they answer with lip-synced facial animation 200ms later."
- "Bind 'attack', 'follow', 'give item' to LLM tool-calls so an AI companion physically responds to natural-language instructions."
- "Drop a generic NPC into a Unity scene from the Asset Store and have a fully voiced character without writing dialogue trees."
- "Player tries something the designer never anticipated; the NPC handles it plausibly instead of breaking."

## Pricing realities

Inworld's published rates (mid-2026): TTS-1.5 Mini ~$5/1M chars, ~$0.005/min; LLM access at provider pass-through ($0.01-$150 per million input tokens depending on model). For a 2-hour gaming session with moderate dialogue you're looking at single-digit pennies of TTS plus whatever LLM tokens. At scale this matters: a free-to-play title with 500K daily players could rack up real bills if every NPC is generative.

Note the May 7, 2026 deadline: Founder Plan TTS prices end and rates jump (Mini $25/1M, Max $50/1M).

## Pre-AI baseline

Hand-written dialogue trees by a narrative designer: $50-200K of writer time for a mid-size game. Voice acting: $200-500/hr per actor in a studio. Branching dialogue still rigid — players who phrased questions slightly off the dialogue tree got nothing.

## Cost / access

Convai: free tier, plugin free, runtime usage-based. Inworld: free start, consumption-based. NVIDIA ACE: free for developers using NVIDIA-only stack, hosted-model costs apply. Charisma.ai: subscription tiers.

## Maturity

Production for indie and select AAA deployments. The latency, cost, and quality have all crossed the "shippable" line in 2025-2026. Holdouts: latency is still a UX issue on slow connections, and "the NPC says the wrong thing on stream" is a real risk that AAA studios mitigate with safety filters and topic-locking.

## Sources
- https://convai.com/
- https://assetstore.unity.com/packages/tools/behavior-ai/npc-ai-engine-dialog-actions-voice-and-lipsync-convai-235621
- https://www.fab.com/listings/ba3145af-d2ef-434a-8bc3-f3fa1dfe7d5c
- https://inworld.ai/pricing
- https://inworld.ai/founder-pricing
- https://www.eesel.ai/blog/inworld-ai
- https://developer.nvidia.com/ace-for-games
- https://naavik.co/digest/ai-npcs-the-future-of-game-characters/
- https://www.gladecore.com/blog/the-4-best-convai-alternatives-for-ai-npcs
- https://powerupgaming.co.uk/2026/02/16/chat-controlled-and-ai-driven-games-are-going-mainstream-in-2026/
