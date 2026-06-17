# Udio, ElevenLabs Music, Stable Audio, Riffusion

**Last verified:** 2026-05-03
**Sources:**
- riaa.com Udio complaint (Jun 24 2024)
- musically.com, "UMG settles Udio lawsuit" (Oct 30 2025)
- elevenlabs.io/pricing
- help.elevenlabs.io, "How much does Eleven Music cost"
- analyticsvidhya.com, "Stable Audio 2.0" (Apr 2024)
- riffusion.com, github.com/riffusion

## Udio

**Vendor:** Uncharted Labs (founded by ex-Google DeepMind, NYC). Launched Apr 2024.

**Specialty:** edge over Suno on certain genres (electronic, jazz, hip-hop) and arguably better vocal quality on holds and emotional delivery. Strong "extend" feature (continue an existing track in style).

**Pricing:** $10-30/mo tiers comparable to Suno.

**Lawsuits:** also sued by RIAA Jun 2024. Settled with UMG Oct 2025; co-launching a licensed AI music platform with UMG in 2026. Warner license late 2025. Sony still in litigation.

The UMG settlement is the bigger 2025 story for AI music: it normalizes the path forward (AI vendor pays / shares revenue, gets training-data license, major labels become partners not adversaries).

## ElevenLabs Music

**Vendor:** ElevenLabs (UK, primarily known for voice cloning).

**Released:** mid-2025. Full songs from text prompts. Nov 17 2025 release added unified Studio with image generation, video clips, lipsync (the company's first push into multimodal).

**Pricing:** integrated with main ElevenLabs subscriptions ($5-330/mo tiers); music billed per generation against shared credit pool.

**Distinctive:** the integration story. A creator already using ElevenLabs for narration / voice cloning gets music generation in the same tool with the same credit pool. Less feature-rich than Suno on song length and variety, but improving fast.

## Stable Audio (Stability AI)

**Released:** Stable Audio 1.0 (Sep 2023), Stable Audio 2.0 (Apr 2024), Stable Audio 2.5 (current).

**Specialty:** high-fidelity instrumental music and sound effects (no vocals at v2.0; v2.5 added some vocal capability). 3-min tracks with structure. Trained on licensed AudioSparx dataset (the only major model with clean training-data provenance).

**Pricing:** subscription tiers via stability.ai; API access via partners.

**Distinctive:** the "ethically trained" option. Used by film/TV and ad agencies that need legal-cleanliness guarantees. Best for sound design, scoring, ambient.

## Riffusion

**Vendor:** small open-source project (riffusion.com), now also a paid product.

**Origin:** clever 2022 hack — train Stable Diffusion on spectrogram images, generate spectrograms from text, convert spectrograms to audio. Was the proof-of-concept that diffusion could do music.

**Current state:** runs as a free / freemium consumer app (no login, browser-based) competitive on short loops. Open-source code on GitHub (Apache 2.0).

**Distinctive:** free tier with no signup. Specializes in loops and ambient beds. Niche but useful for indie game devs needing royalty-free background music.

## Comparison summary

| Tool | Vocals | Length | Pricing | Legal status |
|---|---|---|---|---|
| Suno v5 | Yes, strong | 8 min | $0.012-0.016/song | Litigation pending |
| Udio | Yes, strong | 5+ min | $10-30/mo | UMG/Warner settled, Sony pending |
| ElevenLabs Music | Yes | shorter | per-credit | Limited training disclosure |
| Stable Audio 2.5 | Limited | 3 min | sub | Cleanest legal status |
| Riffusion | Limited | loops | Free / freemium | Open source |
