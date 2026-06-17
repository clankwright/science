# Unity AI (Muse + Sentis successor)

## What it is

Unity Muse and Unity Sentis launched separately in 2023. As of Unity 6.2 (rolled out 2025), both were folded into a unified product called **Unity AI**. Muse-the-product is deprecated; the generators (Texture, Sprite, Animation, Behavior, Code/Chat) live under Unity AI now. Sentis is still the underlying inference engine, exposed as the runtime for shipping ONNX neural networks inside built games.

What Unity AI does inside the Editor:
- Generate PBR textures from prompts.
- Generate 2D sprites and sprite sheets.
- Generate animation clips from natural-language descriptions of motion.
- Code/Chat assistant: explains errors, writes C# scripts, edits scenes via tool calls.
- Behavior generator: creates state machines / behavior trees.

Sentis (runtime): drop an ONNX model into your project, do on-device inference. Used for things like in-game image classification, NPC behavior policies, voice intent recognition without a server round-trip.

## Specific unlocks
- "Generate a normal-mapped stone-wall texture in 5 seconds without opening Substance."
- "Drop a small vision model into your build and have an enemy AI 'see' the game world from screen pixels, no engine code."
- "Voice-control a prototype: prompt the Code Assistant 'make this enemy chase the player but stop at gaps' and get a working C# component."
- "Train a tiny RL policy offline, ship it via Sentis, and have NPCs that learned their own movement on a player's phone."

## Pricing model change

Pre-2026 Muse: $30/month subscription. Unity AI (current): no separate subscription. Uses **Unity Points**, included with paid Unity subscriptions and purchasable separately. Each generator action consumes points. Sentis runtime is free; you only pay if you use cloud-hosted models, otherwise it's pure on-device.

Free Unity Personal still gets some allotment of Unity Points monthly.

## Pre-AI baseline

Texture work meant Substance Designer (steep learning curve) or buying packs. Sprites meant Aseprite skill or asset-store purchases. Behavior trees meant a paid asset like Behavior Designer or hand-coded FSMs. On-device ML inference meant building a custom Barracuda pipeline or shipping a server.

## Maturity

Unity AI is production as of Unity 6.2. Sentis has been GA since 2024 and is in shipped commercial games. The generators are useful but produce visibly-AI-styled output unless you fine-tune; for a polished commercial look most studios still use them as starting points, not finals. Code Assistant inside the Editor lags behind Cursor/Claude Code for raw quality but is convenient because it has scene-graph context.

## Sources
- https://unity.com/features/ai
- https://unity.com/blog/engine-platform/introducing-unity-muse-and-unity-sentis-ai
- https://www.cgchannel.com/2025/08/unity-rolls-out-unity-ai-in-unity-6-2/
- https://web3.gate.com/crypto-wiki/article/what-is-unity-sentis-and-how-does-it-compare-to-other-ai-tools-for-game-development
- https://discussions.unity.com/t/question-about-sentis-pricing/351377
- https://www.engadget.com/unity-launches-a-suite-of-ai-tools-intended-to-simplify-game-creation-100039970.html
