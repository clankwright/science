---
id: veo
title: "Veo (Google)"
kind: tool
vendor: Google DeepMind
access: API + Google AI subscription
maturity: production
cost_tier: usage-based ($0.10-0.40/sec)
year_first_public: 2024
last_verified: 2026-05-03
---

# Veo

> **Summary:** Google's text-to-video model. Veo 3 (May 2025) was the first widely-available model with native synced audio (not a separate audio pass). Production tier for short-form clips with sound; the strongest single video product for solo creators making content with dialogue or sound design.

**Sources:** [[raw/generative-media/video/veo-3.md]], [[raw/generative-media/capability-overview.md]]

## What it does

Generates video from text prompts or image+text. Veo 3 includes native synced audio (dialogue, ambient, music) generated jointly with the video. Output durations in the 5-60s range as of May 2026; longer requires multi-clip stitching.

## Access and cost

Available via Google AI Studio, the Gemini API, and bundled in Google AI Ultra ($249/mo) for unlimited use. Per-second pricing $0.10-0.40 depending on resolution and tier.

## Distinctive trait

Only model with native synced audio in May 2026. Eliminates the brittle audio-overlay pipeline that competitors (Sora, Runway, Kling) require.

## Limits

- 1+ minute coherent narrative video with consistent characters across cuts is still leading-edge.
- Cost adds up: $0.50-3 per short clip; full music videos can hit $20-50.
- Generation latency 30s-3min per clip slows iteration.
- Vendor-API only; no open-weight equivalent matches the audio sync.

## See also

- [Generative video](../capabilities/generative-video.md)
- [Sora](sora.md), [Runway](runway.md), [Kling](kling.md): alternatives.
- [Wan 2.1](wan-2-1.md): open-weight option.
- [Shortlist](../analysis/shortlist.md)
