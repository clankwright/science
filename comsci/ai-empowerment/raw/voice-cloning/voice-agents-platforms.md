# Voice Agent Platforms (Vapi, Retell, Bland AI)

The 2024-2026 stack for "an AI that actually answers your phone." All three sit on top of TTS providers (Cartesia, ElevenLabs, OpenAI), STT providers (Deepgram, Whisper), LLMs (GPT-4/5, Claude), and telephony (Twilio).

## Vapi

- Vendor: Vapi.ai
- https://vapi.ai
- Developer-first orchestration layer. Most flexibility — bring your own LLM / TTS / STT.
- Pricing: **$0.05/min** advertised for the orchestration layer. Real all-in cost (with STT + LLM + TTS + telephony) reaches $0.12-0.35/min.
- Maturity: production. Used by indie devs and small teams.
- Distinctive trait: maximum configurability. Pick any TTS provider, swap models per call, full webhook support.

## Retell AI

- Vendor: Retell AI
- https://www.retellai.com
- $0.07/min usage-based, no mandatory subscription. Roughly $1,050 for 5,000 calls of 3-min average.
- Lower-friction than Vapi: opinionated stack, integrated TTS/STT/LLM choices, faster to ship.
- Distinctive trait: best balance of flexibility + ease of setup. Good docs.

## Bland AI

- Vendor: Bland AI
- https://www.bland.ai
- Switched to plan-based pricing December 2025. Build plan: $359/mo for 500 min ($299 + $60 minutes). Scale: $499/mo + $0.11/min.
- Closed ecosystem — proprietary stack, less swappable.
- Distinctive trait: highest concurrency, designed for outbound call campaigns at scale (sales, surveys, reminders). The "call center in a box" play.
- Reviews 2025-2026 cite latency issues vs Retell + Vapi.

## What an individual unlocks

- **Personal phone agent** that answers your calls when you can't, screens spam, takes messages, books appointments
- **Outbound calls** for routine tasks: dentist appointments, restaurant reservations, customer service holds (the original Google Duplex demo, now commodity)
- **Hobbyist phone product**: a phone number that runs a custom AI agent — a tarot reading line, a fan-fiction roleplay line, a study-buddy line
- **Small business voice front-end** without hiring a receptionist

## All-in cost reality

The clean per-minute headline numbers hide the stack:

| Layer | Cost contribution |
|-------|-------------------|
| Telephony (Twilio) | $0.013-0.02/min |
| STT (Deepgram) | $0.005-0.01/min |
| LLM (GPT-4o-mini) | $0.005-0.05/min |
| TTS (Cartesia / ElevenLabs) | $0.03-0.10/min |
| Orchestration (Vapi/Retell/Bland) | $0.05-0.11/min |
| **Total** | **$0.10-0.30/min realistic** |

For an individual, $0.15/min means a 30-minute test call costs $4.50. Easy to experiment.

## Limits

- Latency floor: 200-800 ms total round-trip even with best providers.
- Hallucination risk on bookings / appointments — the agent will sometimes confidently confirm wrong dates.
- Regulatory: TCPA in US restricts outbound calls; some states require disclosure that caller is AI.
- Scam-call adjacency: same tech powers vishing, which means consumers are increasingly suspicious of AI-sounding callers.
- Voice agents fail badly when interrupted mid-sentence on noisy lines.

## Sources
- https://www.retellai.com/blog/ai-voice-agent-pricing-full-cost-breakdown-platform-comparison-roi-analysis
- https://www.retellai.com/comparisons/retell-vs-vapi
- https://www.jahanzaib.ai/blog/ai-voice-agent-pricing-breakdown
- https://edesy.in/tools/voice-agent-pricing-comparison
- https://www.retellai.com/blog/bland-ai-reviews
