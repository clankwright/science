# FLUX (Black Forest Labs)

**Last verified:** 2026-05-03
**Sources:**
- bfl.ai/pricing
- VentureBeat, "Black Forest Labs releases Flux 1.1 Pro and an API"
- HuggingFace black-forest-labs/FLUX.1-dev
- AI Free API, FLUX 2025 guide
- github.com/black-forest-labs/flux

## Vendor / access

Black Forest Labs (German startup founded 2024 by ex-Stability AI core team that built Stable Diffusion). Three access modes:

1. **Hosted API** at bfl.ai (pay-per-image).
2. **Open weights** for FLUX.1 [schnell] (Apache 2.0) and FLUX.1 [dev] (non-commercial license) on HuggingFace.
3. **Partner APIs**: Replicate, fal.ai, together.ai, Freepik.

## Models

- **FLUX.1 [schnell]** (Aug 2024): 12B param, 1-4 step distilled, Apache 2.0. Free to self-host.
- **FLUX.1 [dev]** (Aug 2024): full quality, non-commercial open weights.
- **FLUX.1 [pro]** (Aug 2024): hosted only, $0.05/image.
- **FLUX 1.1 [pro]** (Oct 2024): faster, higher quality, $0.04/image.
- **FLUX 1.1 [pro] Ultra** (Nov 2024): up to 4 megapixel output.
- **FLUX.1 Kontext** (May 2025): in-context image editing (instructed edits like "change shirt color"). Major step in controllability.
- **FLUX.2** (late 2025): credit-based pricing, 1 credit = $0.01, API from $0.014/image.

## Pricing

API: $0.014-0.05/image depending on model. Self-hosted: free (one-time GPU cost; runs on a single 24GB consumer card for [schnell] or [dev]).

## Distinctive trait

Best open-weights image model in 2024-2025. The de facto base for the Stable-Diffusion-displacement ecosystem (LoRAs, ComfyUI workflows, fine-tunes). Strong text rendering, anatomy, prompt adherence. Kontext competes with gpt-image-1 on instructed editing.

## Maturity

Production. Backbone for thousands of downstream apps (Freepik AI, Krea, Leonardo, Ideogram's underlying compute partners).

## Individual empowerment

Open weights mean a hobbyist with a single RTX 4090 can run unlimited image generation locally with no per-image cost, including NSFW or restricted styles. Fine-tuning a LoRA on 10-30 reference images of a person, product, or art style takes ~30 minutes and lets a small business produce on-brand assets without a designer.
