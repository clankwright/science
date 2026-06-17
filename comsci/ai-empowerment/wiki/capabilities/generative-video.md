---
id: generative-video
title: "Generative video"
kind: capability
year_first_practical: 2024
last_verified: 2026-05-03
---

# Generative video

> **Summary:** Text-to-video and image-to-video diffusion models producing coherent clips with motion, physics, and (with Veo 3) synced audio. The category leapt from "Will Smith eating spaghetti" memes (early 2023) to coherent 5-15s clips with synced audio (Veo 3, May 2025) and 2-min single-take clips (Kling 2.x). Production-line for short-form social and YouTube B-roll; leading-edge for narrative film with consistent characters across cuts.

**Sources:** [[raw/generative-media/capability-overview.md]], [[raw/generative-media/video/sora.md]], [[raw/generative-media/video/veo-3.md]], [[raw/generative-media/video/runway.md]], [[raw/generative-media/video/kling-pika-luma-hailuo.md]]

---

## What changed

Pre-AI baseline: hire videographer + editor at thousands per minute, or use stock video libraries. Generative video in 2023 was research-demo quality; Sora's Feb 2024 OpenAI announcement set the public expectation, and Veo 3's May 2025 release with synced native audio (not a separate audio pass) was the production-line inflection.

The unhobbling moves:

1. Video DiT (Diffusion Transformer) architectures scaled successfully (Sora, Veo, Kling).
2. Synced audio generation in the same model (Veo 3) eliminated the brittle audio-overlay pipeline.
3. Character-consistency tools (Runway Gen-4 references, Kling face-locking) made multi-shot narrative possible.
4. Open-weights releases (Wan 2.1 from Alibaba, Apache 2.0) democratized the category just two years after closed labs led.

## Notable tools

| Tool | Vendor | Distinctive trait | Cost (May 2026) |
|---|---|---|---|
| [Veo 3](../tools/veo.md) | Google | Only model with native synced audio | $0.10-0.40/sec |
| [Runway](../tools/runway.md) Gen-4.5 | Runway | Best narrative pipelines, character consistency | $15-95/mo |
| [Kling](../tools/kling.md) 2.x | Kuaishou | Best physics; 2-min clips | Pay-as-you-go |
| [Sora](../tools/sora.md) 2 | OpenAI | ChatGPT-integrated; default for OpenAI users | Bundled with ChatGPT Pro |
| [Wan 2.1](../tools/wan-2-1.md) | Alibaba | Open Apache-2.0; beats Sora on VBench | Free (self-host) |
| Pika / Luma / Hailuo | Various | Short-clip specialists, niche stylistic looks | $10-95/mo |

## Maturity and limits

Production tier: short-form clips (5-15s) including with audio, talking-head explainers, social-media B-roll, YouTube cutaways, prototyping for storyboarding. Near-production: medium video (15-60s) with single-take narrative, music videos, ad spots.

Leading-edge / not yet production: 1+ minute coherent narrative video with consistent characters and physics across multiple cuts; high-fidelity dialogue scenes. The character-consistency problem across hard cuts is the open frontier as of May 2026.

Other limits:

- Cost per clip ($0.50-3 for short Veo 3, more for 4K) still meaningful for hobbyists.
- Slow iteration: 30s-3min generation latency makes prompt experimentation expensive.
- Audio sync (when separate from Veo 3) and lip-sync for dialogue still require [HeyGen](../tools/heygen.md)-style avatar tools.

## Individual empowerment

A solo YouTuber or short-form creator now generates B-roll, transitions, and intros at near-zero marginal cost ($0.50-3/clip), replacing $500-5,000/episode in stock or contracted video. An indie filmmaker self-hosts FLUX + Wan 2.1 for unlimited generation at hardware cost. A small business produces ad-grade video without a production team. The cost-per-second of finished video dropped roughly two orders of magnitude vs. hiring a videographer.

## See also

- [Generative image](generative-image.md)
- [Generative music](generative-music.md): the audio counterpart.
- [AI avatars and dubbing](ai-avatars-and-dubbing.md): the talking-head and multilingual layer.
- [Shortlist](../analysis/shortlist.md)
