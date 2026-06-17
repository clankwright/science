---
id: generative-music
title: "Generative music"
kind: capability
year_first_practical: 2024
last_verified: 2026-05-03
---

# Generative music

> **Summary:** Text-to-music diffusion and autoregressive models producing full songs with vocals, structure, and song-quality production. Suno v3 (March 2024) was the song-quality inflection: outputs that an unattuned listener cannot distinguish from indie-release recordings. Cost per song dropped from "hire a composer plus session musicians at thousands per track" to ~$0.012-0.016 per generation on Suno or Udio.

**Sources:** [[raw/generative-media/capability-overview.md]], [[raw/generative-media/music/suno.md]], [[raw/generative-media/music/udio-elevenlabs-stable-audio.md]]

---

## What changed

Pre-AI baseline: hire a composer ($500-5,000/track), buy royalty-free library tracks (limited variety), or compose yourself (years of skill). Music generation in 2023 was research-grade (MusicLM, Stable Audio early versions): coherent for 30s, breaks down past that, no real vocals.

The unhobbling:

1. Audio diffusion at scale (Suno's v3 model, March 2024).
2. Vocal generation that produces convincing lead and harmony (Suno, Udio).
3. Style transfer and genre control via natural-language prompts.
4. Long-form coherence (3-5 minute structured songs with verse-chorus-bridge).
5. Voice cloning for personalized lead vocals (Suno v5.5 with verification, March 2026).

## Notable tools

| Tool | Vendor | Distinctive trait | Cost (May 2026) |
|---|---|---|---|
| [Suno](../tools/suno.md) v5/v5.5 | Suno | Song-quality leader; voice cloning with verification | $0.012-0.016/song; Pro $8-10/mo |
| [Udio](../tools/udio.md) | Udio | UMG/Warner-licensed (Oct 2025); higher production polish | Subscription |
| ElevenLabs Music | ElevenLabs | Integrated with voice agent stack | Bundled with [ElevenLabs](../tools/elevenlabs.md) |
| Stable Audio 2.5 | Stability AI | Only "ethically trained" option (licensed-data corpus) | Subscription |
| Riffusion | Riffusion | Real-time iteration on stems | Subscription |

## Maturity and limits

Production for demo-quality and indie-release quality. Album-quality mastering, full stem control for serious production work, and full studio-tier output remain near-production: mastering engineers still add value.

The major open question is copyright. RIAA filed against Suno and Udio in June 2024; Sony settlement / Udio licensing in October 2025; Sony case ruling expected summer 2026. Until that resolves, commercial use of Suno/Udio output for paid music release carries unresolved risk. Stable Audio 2.5 trained only on licensed data is the conservative answer.

Other limits:

- Lyrics quality is uneven; many users hand-write lyrics and let the model do composition + vocals.
- Vocal tonal control is still coarse; "give me a Tom Waits voice on this" works only for famous-voice approximations.
- Detection of AI music (for streaming-platform policy enforcement) is an active arms race.

## Individual empowerment

An indie YouTuber, podcaster, or game-maker generates custom backing tracks at zero marginal cost vs. royalty-free libraries. A solo musician explores genres outside their playable range without hiring session players. A film hobbyist scores a short with custom music for the same price as a stock subscription. The cost-per-finished-track dropped from $500-5,000 to ~$0.02 of API calls plus a $10/mo subscription.

For commercial release of AI-generated music, the legal picture is unresolved as of May 2026; treat current outputs as personal-use or wait for the Sony v. Udio ruling.

## See also

- [Voice cloning and voice agents](voice-cloning-and-voice-agents.md): adjacent category; Suno's voice cloning crosses over.
- [Generative video](generative-video.md): pairs naturally for music videos.
- [Shortlist](../analysis/shortlist.md)
