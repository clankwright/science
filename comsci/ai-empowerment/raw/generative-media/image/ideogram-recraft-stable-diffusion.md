# Ideogram, Recraft, Stable Diffusion 3.5

**Last verified:** 2026-05-03
**Sources:**
- ideogram.ai/features/3.0
- recraft.ai/pricing, recraft.ai/blog
- HuggingFace stabilityai/stable-diffusion-3.5-large
- InfoQ, "Stable Diffusion 3.5 improves text rendering" (Oct 2024)
- Decrypt, "Stable Diffusion 3 license revamped"

The three remaining notable players in the image generator space, each with a specialty niche.

## Ideogram (3.0, Mar 26 2025)

**Vendor:** Ideogram AI (Toronto startup, ex-Google Imagen team).

**Specialty:** typography. Best-in-class for posters, product packaging, social media graphics with embedded text. Style References (upload up to 3 images to control aesthetic).

**Pricing:**
- Turbo: $0.03/image
- Default: $0.0375/image
- Quality: $0.09/image
- Free tier available; subscription Pro plan unlocks full features.

**Maturity:** production. Marketers and small-business owners use it for ad creative.

## Recraft (V3, Oct 2024)

**Vendor:** Recraft.ai.

**Specialty:** brand asset generation. Only mainstream model that outputs native vector (SVG) art; unique among image generators. Brand-style consistency: train a custom style on a few reference images, generate on-brand assets indefinitely. Topped HuggingFace text-to-image benchmark in late 2024 (ELO 1172, ahead of Midjourney and DALL-E 3 at the time).

**Pricing:**
- Free: 50 daily credits
- Pro: $10/mo (annual)
- Teams: $55/mo
- API: $0.04/raster, $0.08/vector

**Maturity:** production. Particular fit for design teams and solopreneurs who need logos, icons, illustrations.

## Stable Diffusion 3.5 (Stability AI, Nov 2024)

**Models:** SD3.5 Large, Large Turbo, Medium. Open weights on HuggingFace.

**License:** Stability AI Community License. Free for individuals and any org earning under $1M/yr. Custom enterprise license above that. Cannot be used to train competing foundational models, but LoRAs / fine-tunes / hypernetworks are explicitly fine.

**API pricing:** SD 3.5 Large = 6.5 credits = $0.065/image via Stability API.

**Status:** technically still maintained but ceded the open-weights crown to FLUX in 2024. Major SD ecosystem (Automatic1111, ComfyUI, Civitai LoRA library) has largely pivoted to FLUX as its base. SD remains relevant for legacy fine-tunes and specialized community models (anime: Pony, illustrious; realism: Juggernaut, RealVis).

## Maturity summary

| Tool | Maturity | Best for |
|---|---|---|
| Ideogram 3 | Production | Text-heavy designs, posters, packaging |
| Recraft V3 | Production | Vector / brand assets |
| SD 3.5 | Production (declining share) | Self-hosting, NSFW, LoRA ecosystem |

## Individual empowerment

Recraft replaces a junior brand designer for a small business owner. Ideogram lets anyone make professional-looking social posts in minutes. SD 3.5 + Civitai gives a hobbyist with a gaming GPU unlimited generation in any style with zero per-image cost.
