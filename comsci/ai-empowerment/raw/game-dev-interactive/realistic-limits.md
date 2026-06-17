# Realistic limits: vibe-coded games, IP risk, monetization

## What it is

The honest counterweight to the rest of these notes. AI lets non-coders ship more than ever before. It does not let them ship hits with no skill, no taste, and no work, and the marketplace is starting to push back.

## What "vibe-coded" actually ships

The term: code generated end-to-end by an AI assistant (Cursor, Claude Code, Roblox Assistant) where the human gives prompts and accepts outputs without deeply understanding the code. Coined informally in early 2025; itch.io has a `vibe-coding` tag with hundreds of submissions by mid-2026.

What ships well:
- 2D platformers, puzzles, top-down shooters, visual novels, hyper-casual mobile-style games.
- Game-jam-scale projects (48-hour Ludum Dare, weekend GMTK).
- Prototypes that prove out a mechanic before a real engine port.
- Personal-use games, kid-made games for friends and family.

What doesn't ship well:
- Anything requiring tight performance (3D action, physics-heavy, networked).
- Long-running save systems, complex state, content scale beyond a few thousand lines.
- Anything with monetization complexity (real IAP, account systems, anti-cheat).
- Polish, balance, difficulty tuning. AI generates, humans curate.

A widely-cited 2026 quote about Cursor for game-dev: "like asking a blind genius junior engineer who can code pretty much anything, but is unable to test or view the result of its own code." The newer agentic loops (Roblox Planning Mode, Claude Code with screenshot tools) directly attack this — they let the agent see what it built — but coverage is partial.

## Performance constraints

LLM-generated code is usually correct-ish and rarely well-optimized. Mobile and console targets punish this. A game that "works" on a developer's RTX 4090 may stutter on a Switch or a mid-tier Android. Without a dev who reads profilers, you end up with 30 FPS slop. The Sentis / on-device-ML route partially helps because inference is cheap once compiled.

## IP and monetization risk

Steam disclosure (rewritten Jan 2026): AI-generated content the player sees/hears/interacts with must be disclosed. Code assistants do not. Itch.io (2025-2026) requires AI tags and filters.

Practical consequences:
- AI-disclosed games have lower wishlist conversion in some genres; in others (visual novels, casual) it's a non-issue.
- Disney/Universal v Midjourney, Getty v Stability, NYT v OpenAI lawsuits are unresolved. Indie devs mostly ignore. A surprise unfavorable ruling could retroactively poison shipped games using model X.
- US Copyright Office position: pure AI output not copyrightable. You can't legally stop a knockoff of your AI-gen sprite sheet.
- Knockoff speed has gone up: a developer reportedly had her prototype ripped and re-uploaded as a vibe-coded knockoff within 5 hours.

## Marketplace numbers

About 1,000 Steam games disclosed AI in all of 2024. About 8,000 disclosed in the first half of 2025. The category is growing fast. Most of those games sell modestly; AI doesn't relax the discovery problem.

## Honest unlocks vs honest limits
- **Real unlock**: 10x more people can ship something playable.
- **Real limit**: ~99% of what they ship will not find a market, exactly as before.
- **Real unlock**: prototype velocity is genuinely 10-100x.
- **Real limit**: shipping a polished commercial title is still measured in person-years.

## Sources
- https://itch.io/games/new-and-popular/tag-ai-generated/tag-vibe-coding
- https://itch.io/t/4711391/prevent-itchio-from-ai-slop
- https://itch.io/t/4527500/im-dismayed-that-itchio-decided-to-hide-which-gamesassets-are-ai-and-which-arent
- https://everydayaiblog.com/steam-ai-disclosure-rules-2026-update/
- https://www.pcgamer.com/software/platforms/indie-distribution-platform-itch-io-now-requires-asset-creators-to-disclose-the-use-of-generative-ai-in-their-work/
- https://itch.io/t/4975370/lets-talk-about-ai-in-game-dev
- https://itch.io/t/6299369/i-know-ai-disclosure-is-optional-for-games
