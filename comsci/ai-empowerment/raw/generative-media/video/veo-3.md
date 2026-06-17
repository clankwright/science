# Google Veo 3 (and Veo 3.1)

**Last verified:** 2026-05-03
**Sources:**
- Google Developers Blog, "Veo 3 and Veo 3 Fast – new pricing"
- ai-basics.com/veo-3-faq (Complete Guide to Pricing, Access & Features)
- max-productive.ai/blog/google-veo-3-1-release (Oct 2025)
- costgoat.com/pricing/google-veo

## Vendor / access

Google DeepMind. Announced Google I/O May 20 2025. Available via:
- Gemini API and AI Studio (developers).
- Flow (Google's filmmaking app, bundled with AI Pro / Ultra subs).
- Vertex AI (enterprise).

Geographic launch: US first, broader rollout through 2025.

## Models / timeline

- **Veo 2** (Dec 2024): silent video, image-to-video, up to 4K.
- **Veo 3** (May 2025): native synced audio. Generates dialogue, sound effects, music in lockstep with video. The headline 2025 release; first model where prompt "two people arguing in a coffee shop" returns video with sounds of the cafe and lip-synced dialogue.
- **Veo 3 Fast** (Aug 2025): cheaper, slightly lower quality, still with audio.
- **Veo 3.1** (Oct 2025): 1080p HD, 9:16 vertical, lower pricing.

## Pricing

API (per second of generated video):
- Veo 3 Fast: $0.10/sec ($0.50 for 5 sec, $1 for 10 sec)
- Veo 3 Standard with audio: $0.40/sec
- Lower than launch pricing of $0.75/sec.

Subscription:
- Google AI Pro: $19.99/mo, 1000 credits, limited Veo 3 access.
- Google AI Ultra: $249.99/mo, full Veo 3 + Flow filmmaking app.

## Distinctive trait

The audio. Until Veo 3 every video model required a separate ElevenLabs / Suno / dialogue-actor pipeline; Veo 3 generates a complete a/v clip from a text prompt in one shot. This was the largest single capability jump in 2025 video AI.

Quality is also state-of-the-art on physics, character consistency in short clips, and camera-motion control.

## Limits

- Clips capped at 8 sec (Veo 3 standard) at launch; extended later.
- Audio sometimes mismatched on lip-sync edge cases.
- Watermarking on consumer outputs unless on Ultra.
- Cost: a 30-second ad with audio = ~$12 in API calls.

## Maturity

Production for short clips with audio. Best-in-class for any use case where audio matters.

## Individual empowerment

A solo content creator produces fully-narrated short videos for $1-3 each. A small ad agency drops the $5,000 voice-actor + sound-design line item from a video budget. An indie game dev generates cinematic cutscenes with dialogue for ~$10/clip.
