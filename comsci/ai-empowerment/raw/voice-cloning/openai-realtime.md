# OpenAI Realtime API + Voice Mode

## Vendor / access
- OpenAI. https://openai.com/api/
- Two consumer-facing surfaces: **ChatGPT Voice Mode** (Standard + Advanced) inside the ChatGPT mobile app, and the **Realtime API** for developers.
- Voice Mode Advanced: included with ChatGPT Plus ($20/mo), Pro ($200/mo), Teams.
- Realtime API: usage-based, no subscription required.

## Products
- **Voice Mode (Standard).** Older STT -> LLM -> TTS pipeline. Higher latency, less expressive.
- **Voice Mode (Advanced).** Single-model speech-to-speech, sub-second latency, can hear tone and laugh / sigh / sing back.
- **Realtime API (gpt-realtime).** Production speech-to-speech model, released August 2025, refreshed late 2025. Single-pass audio in / audio out, supports tool calling, instruction following, multimodal.
- **gpt-realtime-mini.** Cheaper, near-instant latency, optimized for translation and intent routing.

## Pricing (May 2026, Realtime API)
- gpt-realtime audio input: $32 / 1M tokens ($0.40 cached input).
- gpt-realtime audio output: $64 / 1M tokens.
- Cached audio input: $20 / 1M tokens.
- ChatGPT Plus subscribers get Advanced Voice Mode bundled.

## Maturity
**Production.** This is the reference implementation other voice-agent platforms benchmark against. Latency, expressiveness, and instruction-following all best-in-class as of May 2026.

## Distinctive trait
Speech-to-speech in a single model — not a chained pipeline. Hears emotion in user voice, can match tone, can laugh and whisper. Voice Mode in ChatGPT Mobile is the most-shipped consumer voice-AI product on the planet (hundreds of millions of users).

## What an individual unlocks
- Real-time language tutor that hears your accent and corrects it
- Conversational reasoning partner during a walk or commute
- Voice-driven coding assistant (combine with Codex / Claude Code)
- Voice agent backend for any custom phone product (via Realtime API)

## Limits
- Voice cloning is **not** offered in the public API. OpenAI ships ~9 preset voices.
- Privacy: Voice Mode conversations are used for training unless opted out.
- Audio token pricing is high vs text — running an agent at 1 hour/day costs ~$5-10/day.
- No on-device option.

## Sources
- https://openai.com/api/pricing/
- https://openai.com/index/introducing-gpt-realtime/
- https://openai.com/index/introducing-the-realtime-api/
- https://developers.openai.com/blog/updates-audio-models
