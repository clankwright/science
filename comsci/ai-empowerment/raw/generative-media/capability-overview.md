# Generative Media: Capability Overview

**Last verified:** 2026-05-03

Synthesis of the image / video / music / avatar landscape as of mid-2026, written for the capability page.

## Pre-AI baseline (2022 and earlier)

To get a usable image, video, song, or talking-head video at any kind of professional quality, an individual had three options:

1. **Hire a specialist:** illustrator $50-500/image, photographer $200-2000/shoot, videographer $500-5000/day, composer $100-500/track, voice actor $100-500/script.
2. **Use stock:** Shutterstock $30+/mo for limited image rights, Epidemic Sound $20/mo for music, Storyblocks $15/mo for video (limited library; no custom intent).
3. **Learn the craft:** years of practice in Photoshop, Premiere, Logic, or DSLR photography.

For a small business, a single 30-second video ad with custom imagery, original music, voice-over, and motion graphics easily hit $5,000-50,000.

## What changed (the unhobbling)

Three technical lineages converged 2022-2026:

**Diffusion + flow-matching scaling laws.** Latent diffusion (Stable Diffusion, 2022) made image generation tractable on consumer hardware. Flow matching and rectified flow simplified training and sampling. By 2024, scaling these with MMDiT (multimodal diffusion transformer) architectures (FLUX, SD3) and DiT for video (Sora, Veo) crossed the photoreal threshold.

**Classifier-free guidance and conditioning controls.** ControlNet, IP-Adapter, and Reference modules let users specify pose, depth, edge, and style. Made models steerable, not just generators of vague aesthetic interpretations.

**Audio diffusion.** Suno's v3 (Mar 2024) was the music inflection. Veo 3 (May 2025) was the video-with-audio inflection. By 2026 the text-only-prompt -> finished-multimedia-asset pipeline closed.

## Maturity by modality (May 2026)

| Modality | Production line | Near-production | Leading-edge |
|---|---|---|---|
| Image (static) | All major commercial uses (ads, books, web, packaging) | Multi-character composition, hand-text in non-English | Real-time multi-turn editing |
| Short video (5-15 sec) | Social, ads, B-roll, music videos | Coherent dialogue with sync | n/a (this is solved) |
| Medium video (15-60 sec) | Social shorts, explainers | Single-take narrative scenes | Multi-cut sequences with consistent characters |
| Long video (1-10 min) | Talking-head explainers (HeyGen, Synthesia) | Scripted shorts with mixed assets | Coherent narrative film |
| Music (full songs) | Demo-quality, indie-release-quality | Album-quality mastering | Studio-tier production with stems |
| Talking heads | Production for Western languages, business contexts | Full-body realism | Real-time avatars |

## Top tools per modality (shortlist)

**Image:**
- Midjourney V8: aesthetic / illustration default. $10-120/mo.
- gpt-image-1: best multimodal / instructed editing. ChatGPT or API.
- Imagen 4: best text rendering, tied for best photoreal. $0.02-0.06/image.
- FLUX (open): self-host or API, best ecosystem. Free locally.
- Ideogram: typography. Recraft: vector / brand. SD 3.5: niche / NSFW / legacy.

**Video:**
- Veo 3: best with audio. $0.10-0.40/sec.
- Runway Gen-4.5: best for narrative pipelines. $15-95/mo + credits.
- Kling 2.x: best physics, longest clips.
- Sora 2: best ChatGPT integration.
- Wan 2.1 (open): best for self-hosters. Free.

**Music:**
- Suno v5: best song quality. $0.012-0.016/song.
- Udio: best alternative; UMG/Warner-licensed.
- ElevenLabs Music: integrated workflow with voice / video.
- Stable Audio 2.5: ethically-trained; instrumental / SFX.

**Avatars:**
- HeyGen (Avatar IV): solo creator default. $29-99/mo.
- Synthesia: corporate-training default.
- Hedra: most flexible (any image as source) + real-time live mode.

**Editing:**
- Adobe Generative Fill: industry default for surgical edits.
- Topaz Photo AI: real-photo restoration upscaling.
- Magnific: creative upscaling for AI-generated source.

## Honest limits

- **Compositional control still iffy.** Hands and text are largely fixed; multi-character interactions, precise spatial layout, "the person on the left holds X while the person on the right does Y" still requires multiple regenerations or ControlNet workflows.
- **Copyright lawsuits unresolved.** RIAA v Suno/Udio (filed Jun 2024); NYT v OpenAI; Getty v Stability. UMG/Warner settled with Udio (2025), establishing a precedent path but not law. Sony case ruling expected summer 2026.
- **Detectable AI look.** Skin smoothness, subtle motion artifacts, "Veo lighting", overly-clean photo composition. Detection tools exist (and can be evaded), but for now most viewers can spot AI imagery on careful inspection.
- **Cost per video clip still meaningful.** $0.50-3 per short clip; a 10-minute YouTube video using AI B-roll runs $20-100 in generation costs. Not free; meaningful for hobbyists.
- **Long-form coherence is the open frontier.** A 1-minute single-take narrative video with consistent characters and physics is leading-edge as of 2026; multi-cut narrative film with the same character across scenes works for 5-10 cuts but degrades.
- **Vendor concentration risk.** Most production-grade tools are closed APIs; pricing and availability shift quarterly. Open-weights options (FLUX, Wan 2.1, SD 3.5) are competitive but require hardware.

## Individual empowerment angle

The capability category most directly substitutes for an entire industry of paid creative work. A solo content creator now produces what an agency used to: videos with original music, B-roll, voice-overs, talking-head intros, all with consistent branding, in an afternoon.

Concrete examples enabled by 2024-2026 stack:

- **Solo YouTuber:** Suno for intro music + Veo 3 for B-roll + ElevenLabs for narration + HeyGen for talking-head segments. Replaces a small production team. ~$70/mo combined cost.
- **Hobbyist game / film maker:** Wan 2.1 + FLUX self-hosted for unlimited assets at hardware cost only. Makes indie short films viable for one-person teams.
- **Small business brand assets:** Recraft for logo/icon system + Ideogram for ad creative + Generative Fill for product-photo cleanup. Replaces $5-50k brand identity contract.
- **Solopreneur / consultant:** HeyGen Avatar IV for spokesperson video in 50 languages + Suno for intro/outro music. Replaces video crew + voice actors + composer.
- **Stock-image refusenik:** $10/mo Midjourney sub gives unlimited custom imagery indexed to exact creative intent, instead of $30+/mo Shutterstock with whatever they happen to stock.

The cost-per-asset reduction across all four modalities is roughly two orders of magnitude vs hiring specialists, and roughly one order of magnitude vs buying stock.
