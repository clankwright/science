# Game asset generation (Scenario, Layer AI, Leonardo, sprite/texture pipelines)

## What it is

AI image and 3D asset tools positioned specifically for game-dev workflows: sprites, sprite sheets, character portraits, textures, tileable backgrounds, UI elements, concept art, and (more recently) UV-mapped 3D textures and full 3D meshes.

Leading 2026 tools:
- **Scenario** (scenario.com) — fine-tuned models trained on your *own* art bible for stylistic consistency at scale. Sprite sheets, video-to-frame production pipeline, image+video+audio+3D chains. Unity plugin. Pricing $20-200/mo. The pitch: "if you have a visual style and need to scale to match it, train a custom model."
- **Leonardo.ai** — broader generative platform with strong game tilt. Trained models for pixel art, hand-painted, realistic. 3D texture generation (albedo, normal, roughness UV-mapped) directly importable to Unity/Unreal. Custom fine-tunes from 10-20 images. Background removal, sprite variation, pixel art generator.
- **Layer AI** — game-asset-focused gen, sprite and animation specialty.
- **Midjourney, FLUX, Imagen 3** for general concept art.
- **Tripo, Meshy, Rodin** for text-to-3D mesh.
- Roblox's own Mesh Generation and Procedural Model Generation (covered separately) for in-Studio 3D.

## Specific unlocks
- "Train a Scenario model on 30 of your concept-artist's drawings; generate 500 stylistically-consistent enemy sprites in an afternoon."
- "Type 'mossy stone wall, 4K seamless' in Leonardo; download albedo + normal + roughness; drop into Unreal as a working PBR material in 30 seconds."
- "A solo dev ships a 3D game with 200 unique character portraits because each one cost ~$0.05 and 10 seconds."
- "Generate 60 frames of a walking-cycle animation by chaining image gen with a video model."
- "Turn a kid's crayon drawing into a UV-mapped 3D mesh of their imaginary creature."

## The licensing / IP question

This is the live problem. Three layers:

1. **Training data**: Most large image models trained on scraped data. Lawsuits ongoing (Getty v Stability, NYT v OpenAI, Disney/Universal v Midjourney filed June 2025). Outcome unsettled. Indie devs typically ignore; AAA studios increasingly require model vendor to indemnify.
2. **Output copyright**: US Copyright Office position (2023 onward) is that purely AI-generated images are not copyrightable. Mixed human-AI work can be, in the human-edited portions. Practical impact: you can't sue a competitor for ripping your AI-gen sprite.
3. **Platform disclosure**: Steam (rules rewritten Jan 2026) requires disclosure of "AI-generated content the player sees, hears, or interacts with." Tools that "help build" (code assistants) don't need disclosure. Itch.io (2025-2026) requires AI disclosure tags and lets users filter out AI content.

Custom-trained-on-your-own-art models (Scenario's pitch) sidestep some of this — you own the training data, output style is yours.

## Pre-AI baseline

A character portrait from a freelance artist: $50-500. A sprite sheet for a 2D character: $200-2000. PBR materials: $5-30 each from Substance Source / Quixel. Pre-AI indie 2D games typically used asset packs (Kenney.nl, OpenGameArt) and looked it.

## Cost / access

Scenario: $20-200/mo. Leonardo: $12-60/mo. Layer: $30+/mo. Per-asset cost at scale: $0.01-0.10 of compute equivalent.

## Maturity

Production for indie and mobile. AAA still uses these primarily for concept art and ideation, not final assets — partly quality, partly IP risk.

## Sources
- https://www.scenario.com/
- https://www.scenario.com/blog/ai-sprite-generator
- https://leonardo.ai/news/how-to-generate-a-full-game-asset-suite-with-leonardo-ai/
- https://aiguerrilla.net/tutorials/how-to-use-leonardo-ai-for-game-assets/
- https://aitoolsdevpro.com/ai-tools/leonardo-ai-guide/
- https://www.bydfi.com/en/cointalk/leonardo-ai-2026-creative-infrastructure-report
- https://www.seeles.ai/resources/blogs/ai-asset-generator-comparison-2026
- https://www.buildbox.com/best-ai-art-generators-for-game-developers/
- https://www.hashmeta.ai/en/generative-ai/generative-ai-gaming
