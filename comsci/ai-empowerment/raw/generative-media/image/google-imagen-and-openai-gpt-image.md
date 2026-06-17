# Google Imagen 4 and OpenAI gpt-image-1

**Last verified:** 2026-05-03
**Sources:**
- Google Developers Blog, "Imagen 4 generally available in the Gemini API" (Aug 15 2025)
- Google Developers Blog, "Announcing Imagen 4 Fast"
- OpenAI, "Introducing our latest image generation model in the API" (Apr 2025)
- platform.openai.com/docs/models/gpt-image-1
- IntuitionLabs, AI image pricing 2026

The two frontier-lab native image models. Both shipped late and lacked the open ecosystem of FLUX, but each crossed the photoreal-and-instruction-following bar by mid-2025.

## Google Imagen 4

**Release:** preview Jun 24 2025, GA Aug 15 2025 in Gemini API and AI Studio.

**Variants & pricing per image:**
- Imagen 4 Fast: $0.02
- Imagen 4 Standard: $0.04
- Imagen 4 Ultra: $0.06

**Access:** free tier in Google AI Studio; paid via Gemini API and Vertex AI. Bundled into Gemini consumer app.

**Distinctive trait:** the strongest text rendering of any image model in late 2025; close-to-perfect typography in posters and product mockups. Best photorealism for human faces. Imagen 4 Ultra's prompt adherence beats Midjourney V7 in head-to-head benchmarks.

## OpenAI gpt-image-1

**Release:** Apr 2025 (API launch; image features in ChatGPT existed earlier as DALL-E 3, then native to GPT-4o from Mar 2025).

**Pricing:** token-based.
- Low quality (1024x1024): ~$0.02/image
- Medium: ~$0.07/image
- High: ~$0.19/image
- gpt-image-1 mini: 55-78% cheaper

**Access:** OpenAI API; ChatGPT (free tier limited, Plus unlocked).

**Distinctive trait:** native multimodality. Same model handles text input, image input, and image output, so it composes new images that integrate uploaded references at a level FLUX/Imagen can only approximate. The "Studio Ghibli photo" viral moment (Mar 2025) was this model. Best at multi-turn conversational editing ("now make her smile, keep everything else the same"). Weakness: slow (10-30s/image) and most expensive of the frontier set at high quality.

## Maturity

Both production. Heavy enterprise adoption via API.

## Individual empowerment

Free tier of either lets a non-designer produce wedding invitations, restaurant menus, and Etsy listing photos with embedded readable text, replacing a $50-300 Fiverr gig per asset. ChatGPT integration means no separate signup or workflow learning.
