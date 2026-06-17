# Cartesia (Sonic family)

## Vendor / access
- Cartesia AI (US, founded 2023 by ex-Stanford / ex-Mamba / SSM researchers including Karan Goel and Albert Gu).
- https://cartesia.ai
- API + self-serve signup. Free tier; usage-based paid.

## Products
- **Sonic** (original, 2024). First low-latency model.
- **Sonic 2** (2025). Improved quality, ~90 ms TTFA.
- **Sonic Turbo.** ~40 ms TTFA — fastest commercial TTS in market.
- **Sonic-3** (late 2025). Current flagship. ~90 ms TTFA, sub-200 ms first-chunk, 40+ languages, AI-generated laughter and emotion, 3-second voice cloning.
- Voice cloning, custom voices, voice library.

## Architecture
Built on **State Space Models (SSM)**, not transformers. Cartesia's founders co-authored the Mamba paper. SSMs are O(L) instead of O(L^2) for sequence length, hence the latency advantage. Architectural bet that paid off.

## Pricing (May 2026)
- Free: 10k credits/mo (~50 min audio).
- Pro: $5/mo for hobbyists.
- Startup: $49/mo.
- Scale: $299/mo.
- Usage-based API: ~$0.03-0.05 per 1k characters.
- Voice cloning included in paid tiers.

## Maturity
**Production**, especially for voice-agent backends. Adopted by Vapi, Retell, and other voice-agent platforms as their TTS layer of choice when latency matters.

## Distinctive trait
Latency. Time-to-first-audio of 40-90 ms is genuinely an order of magnitude better than ElevenLabs Multilingual v2 (~400-800 ms). For voice agents where you want sub-second total round-trip, Cartesia is the only realistic TTS layer.

Also: 3-second voice clones — shorter than anyone else publicly advertises.

## What an individual unlocks
- Build a voice agent that feels human in latency
- Real-time interactive narration (think: AI dungeon master)
- Self-hostable embedding into custom apps via API

## Limits
- Less polished consumer experience than ElevenLabs (no Studio, no Dubbing).
- English quality leads; long-tail language quality lags ElevenLabs.
- Smaller voice library than ElevenLabs.

## Sources
- https://cartesia.ai/sonic
- https://docs.cartesia.ai/build-with-cartesia/tts-models/latest
- https://cartesia.ai/blog/sonic
- https://www.eesel.ai/blog/cartesia-sonic-3-pricing
- https://news.aibase.com/news/22332
