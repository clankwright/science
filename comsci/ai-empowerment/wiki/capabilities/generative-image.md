---
id: generative-image
title: "Generative image"
kind: capability
year_first_practical: 2023
last_verified: 2026-05-03
---

# Generative image

> **Summary:** Text-to-image and image-to-image diffusion models that produce photographic, illustrative, or stylized output indistinguishable from professional work in most consumer contexts. The category crossed the perceptual-quality threshold between Stable Diffusion 1.5 (Aug 2022) and FLUX / Imagen 4 (2024-2025). Cost per image dropped from "hire an illustrator at $50-500/asset" to $0.01-0.19/asset on hosted APIs, or zero marginal cost on local FLUX with consumer GPUs.

**Sources:** [[raw/generative-media/capability-overview.md]], [[raw/generative-media/image/midjourney.md]], [[raw/generative-media/image/flux-bfl.md]], [[raw/generative-media/image/google-imagen-and-openai-gpt-image.md]], [[raw/generative-media/image/ideogram-recraft-stable-diffusion.md]]

---

## What changed

Pre-AI baseline: hire an illustrator, designer, or stock-photo subscription. DALL·E 2 (mid-2022) was uncanny but cool; Midjourney v3-v4 (early 2023) crossed the "good enough for marketing" line; FLUX and Imagen 4 (2024-2025) crossed "indistinguishable from photography" for most prompts.

The unhobbling moves:

1. Latent-diffusion scaling laws (the same scaling-up that worked for LLMs).
2. Classifier-free guidance and flow matching for sharper, more controllable outputs.
3. MMDiT and rectified-flow architectures (Stable Diffusion 3, FLUX) for text rendering and prompt adherence.
4. ControlNet and IP-Adapter for spatial and identity control.
5. Multimodal foundation models (gpt-image-1, Imagen) bringing instructed-edit capability that pure-diffusion stacks lacked.

## Notable tools

| Tool | Vendor | Distinctive trait | Cost (May 2026) |
|---|---|---|---|
| [Midjourney](../tools/midjourney.md) | Midjourney | Aesthetic default; v7/v8 | $10-120/mo |
| [FLUX](../tools/flux.md) | Black Forest Labs | Open-weights backbone for open-source ecosystem | Free (self-host) or $0.025-0.05/img hosted |
| [Imagen 4](../tools/google-imagen.md) | Google | Best in-image text rendering | $0.02-0.06/img |
| [gpt-image-1](../tools/openai-gpt-image.md) | OpenAI | Best multimodal/instructed editing | ~$0.02-0.19/img |
| Ideogram | Ideogram | Typography specialist | $8-48/mo |
| Recraft | Recraft | Vector and brand workflows | $10-48/mo |
| Stable Diffusion 3.5 | Stability AI | Legacy; NSFW and uncensored ecosystems | Free (self-host) |

## Maturity and limits

Production tier for almost all individual use cases: marketing assets, blog illustrations, concept art, product mockups, social media. The remaining failure modes are narrow:

- Compositional control (multi-character interactions, precise spatial layout) still requires ControlNet workflows or many regenerations.
- "AI look" detectable on careful inspection; matters for some commercial contexts and not others.
- Copyright lawsuits unresolved (Andersen v. Stability AI, Getty v. Stability AI ongoing); use within commercial workflows carries some legal uncertainty in 2026.
- Identity preservation across edits (consistent character) requires LoRA training or specific products (Recraft Brand, Midjourney character ref).

## Individual empowerment

A solo content creator now produces what an agency used to: brand visuals, marketing illustrations, blog covers, social posts, presentation graphics. A small business buys Midjourney Pro at $30/mo instead of a $500-5,000/yr stock-photo subscription plus designer hours. A hobbyist game-maker generates concept art at the rate previously available only to studios. Individual capacity for visual storytelling went up roughly two orders of magnitude on a cost-per-asset basis.

## See also

- [Generative video](generative-video.md): the moving-image counterpart, one generation behind on quality.
- [Generative music](generative-music.md)
- [AI avatars and dubbing](ai-avatars-and-dubbing.md)
- [Shortlist](../analysis/shortlist.md)
