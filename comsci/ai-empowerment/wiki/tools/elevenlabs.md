---
id: elevenlabs
title: "ElevenLabs"
kind: tool
vendor: ElevenLabs
access: subscription + API
maturity: production
cost_tier: low ($5-22/mo Creator; usage above)
year_first_public: 2022
last_verified: 2026-05-03
---

# ElevenLabs

> **Summary:** The category-default voice product. Voice cloning from <30 seconds of reference audio, multilingual TTS, conversational voice agents, and dubbing in one unified product. Industry-default for solo creators and the most-integrated voice stack for individual workflows.

**Sources:** [[raw/voice-cloning/elevenlabs.md]], [[raw/voice-cloning/00-overview.md]]

## What it does

Text-to-speech in 30+ languages, Instant Voice Clone from <30s audio, Professional Voice Clone for higher quality, Conversational AI agents that combine STT + LLM + TTS in one pipeline, dubbing for video with speaker-voice preservation, and a music product (mid-2025).

## Access and cost

Free tier with 10k chars/month. Starter $5/mo. Creator $22/mo. Pro $99/mo. Higher tiers above. API usage billed per character.

## Distinctive trait

Most complete voice product on the market: cloning, TTS, conversational agents, dubbing, and music in one vendor. Voice quality and multilingual transfer remain category-leading.

## Limits

- Cloning consent enforcement is ToS-only (no audio-watermark guarantee that survives re-recording).
- Real-time agents have ~200-800ms latency floors; sub-100ms is not achievable through this stack.
- Pricing climbs quickly for heavy commercial use; per-character billing surprises new users.
- Long-tail languages (Tamil, Yoruba, Vietnamese) have noticeable artifacts.

## See also

- [Voice cloning and voice agents](../capabilities/voice-cloning-and-voice-agents.md)
- [OpenAI Realtime](openai-realtime.md): low-latency competitor.
- [Cartesia Sonic](cartesia-sonic.md): the latency leader.
- [Shortlist](../analysis/shortlist.md)
