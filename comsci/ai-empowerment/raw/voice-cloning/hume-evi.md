# Hume AI (EVI — Empathic Voice Interface)

## Vendor / access
- Hume AI (US, founded by Alan Cowen, ex-Google research; spinoff focused on emotion AI).
- https://www.hume.ai
- API + web playground. Self-serve signup.

## Products
- **EVI (Empathic Voice Interface).** Voice agent that reads vocal affect (tone, pitch, energy, pauses) and adjusts response style. Successive versions: EVI, EVI 2, EVI 3 (2025).
- **Octave / Octave 2** (Oct 2025). Hume's TTS model. Octave 2 cut cost ~50% vs Octave 1.
- **Expression Measurement API.** Detects emotion from voice, face, language. Used independently of EVI.

## Pricing (May 2026)
- Free: 10k chars/mo TTS, 5 min EVI/mo.
- Starter: $3/mo, ~30 min audio.
- Creator: $14/mo, **unlimited voice cloning**, 140k chars.
- Pro tier and Business tier with higher caps.
- Business: 12,500 EVI min/mo, 10M chars; overage $0.05/1k chars.
- EVI per-minute overage: $0.07/min standard, drops to $0.05/min at higher tiers.
- Enterprise: custom.

## Maturity
**Production for niche use cases.** Less mainstream than ElevenLabs or OpenAI but the only vendor whose product is meaningfully different on the emotion axis. Used in mental-health-adjacent products, customer-care voice agents that need to detect frustration, and research applications.

## Distinctive trait
Hears how the user feels and responds in kind. If you sound stressed, EVI slows down and lowers tone. If you sound excited, it matches energy. This is implemented via Hume's empathic large language model (eLLM) layered with prosody-aware TTS. No other major vendor commercialized this.

## What an individual unlocks
- A voice journal / therapy-adjacent companion that reads emotional state
- Customer-support voice agent that detects when user is angry / sad
- Research tool for measuring emotional response to media

## Limits
- "Empathic" reads of voice are correlative, not diagnostic. Don't use for clinical anything.
- Smaller language coverage than ElevenLabs.
- Niche product — fewer integrations.
- Quality of base TTS (Octave) is good but not best-in-class vs ElevenLabs Multilingual v2 or OpenAI Realtime.

## Sources
- https://www.hume.ai/pricing
- https://www.hume.ai/empathic-voice-interface
- https://www.hume.ai/blog/introducing-hume-evi-api
- https://autogpt.net/hume-ai-pricing-every-plan-explained-2026/
- https://www.eesel.ai/blog/hume-ai
