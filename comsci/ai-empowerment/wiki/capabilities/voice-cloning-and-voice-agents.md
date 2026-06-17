# Voice Cloning and Voice Agents

> **Summary:** Between mid-2024 and Q1 2026, voice synthesis crossed three thresholds at once: cloning needs only seconds of reference audio, time-to-first-audio dropped under 100 ms for production systems, and multilingual transfer now preserves a single speaker's identity across 80+ languages. The combined effect turns work that previously required hiring a voice actor, a dubbing studio, or an offshore call center into a $5-30/month consumer tool. The same unhobbling created an industrial-scale fraud surface, which is now the subject of pending US federal legislation (NO FAKES Act), state laws (Tennessee ELVIS Act), and EU labeling rules (AI Act).

**Sources:** [[raw/voice-cloning/00-overview.md]], [[raw/voice-cloning/elevenlabs.md]], [[raw/voice-cloning/cartesia-sonic.md]], [[raw/voice-cloning/openai-realtime.md]], [[raw/voice-cloning/sesame-csm.md]], [[raw/voice-cloning/open-weights-tts.md]], [[raw/voice-cloning/notebooklm-audio.md]], [[raw/voice-cloning/voice-agents-platforms.md]], [[raw/voice-cloning/dubbing-heygen-rask.md]], [[raw/voice-cloning/ethics-and-regulation.md]], [[raw/voice-cloning/hume-evi.md]], [[raw/voice-cloning/suno-music-voice.md]]

---

## What changed

In 2022, plausible voice cloning required either a paid voice actor at $200-500 per finished minute, hours of reference audio fed into a research-lab fine-tuning pipeline, or accepting the obviously synthetic output of Amazon Polly, Google Cloud TTS, or macOS `say`. Phone-based "conversational AI" meant rule-based DTMF trees; voice agents as a product category did not exist outside Siri and Alexa.

Three independent floor-drops landed by mid-2026:

1. **Cloning floor: hours to seconds.** ElevenLabs Instant Voice Cloning works from 1-5 minutes of audio; Cartesia advertises 3 seconds; XTTS-v2 (open) clones from ~6 seconds; Sesame CSM-1B from ~1 minute and preserves multi-turn context.
2. **Latency floor: seconds to sub-second.** Cartesia Sonic Turbo claims ~40 ms time-to-first-audio. OpenAI's gpt-realtime (released Aug 2025) runs a single-pass speech-to-speech model rather than the older STT then LLM then TTS chain; full-roundtrip floor of 200-800 ms is now the practical ceiling on natural-feeling phone agents.
3. **Multilingual transfer: free.** HeyGen dubs into 175+ languages with lip-sync; ElevenLabs supports 30+ languages from a single English voice clone; NotebookLM Audio Overviews extended to 80+ languages in September 2025.

## Notable tools

- [ElevenLabs](../tools/elevenlabs.md): default consumer/prosumer platform; bundles cloning, TTS, agents, and dubbing from $5/mo.
- [OpenAI Realtime API and Voice Mode](../tools/openai-realtime.md): single-model speech-to-speech; ChatGPT Voice Mode is the largest deployed consumer voice product.
- [Cartesia Sonic](../tools/cartesia-sonic.md): SSM-based architecture, latency king, the TTS layer of choice when round-trip matters.
- [Sesame CSM](../tools/sesame-csm.md): first open-weight conversational (multi-turn, context-aware) speech model; Apache 2.0.
- [Kokoro TTS](../tools/kokoro-tts.md): 82M-parameter open-weight model; runs on CPU; hit #1 on TTS Arena.
- [NotebookLM Audio Overviews](../tools/notebooklm-audio.md): free two-host AI podcast generator from any document; viral consumer hit of late 2024.
- [Voice agent platforms (Vapi, Retell, Bland)](../tools/voice-agent-platforms.md): orchestration layer over TTS, STT, LLM, and telephony for phone-based agents.
- [HeyGen](../tools/heygen.md) and [Synthesia](../tools/synthesia.md): video dubbing and avatar talking heads (covered also under [AI avatars and dubbing](ai-avatars-and-dubbing.md)).
- Hume EVI: empathic voice interface that reads vocal affect (niche but unique).
- [Suno](../tools/suno.md): singing-voice cloning (overlap with [generative music](generative-music.md)).

## Maturity and limits

Production-grade for English narration, multilingual transfer across the top ~30 languages, and short-clip cloning. Long-tail languages (Tamil, Yoruba, Bengali) still produce noticeable artifacts. Emotion control is good for neutral prosody and improving for laughter, crying, and anger (Sonic-3, Hume EVI lead this axis). The 200-800 ms round-trip floor is real: below ~250 ms feels human, 400 ms feels slightly slow, 800 ms+ feels robotic. Watermarking exists on ElevenLabs and OpenAI outputs but is easily stripped by re-recording or transcoding.

## Ethics and regulation

The unhobbling cuts both ways. Cheap zero-shot cloning is also cheap zero-shot fraud, and the regulatory response is mid-flight rather than settled.

**Real-world harms.** Family-emergency vishing scams ("Mom, I'm in jail, wire money") were a billion-dollar US fraud category by 2025 per FBI/FTC advisories. The Baltimore high school principal deepfake (2024), where an athletic director cloned his principal's voice into a fabricated racist recording, is the canonical case. AI-generated Biden robocalls in the January 2024 New Hampshire primary led the FCC to ban AI-voice robocalls under TCPA. The Scarlett Johansson vs OpenAI "Sky" voice incident (May 2024) made the celebrity-likeness fight visible.

**US federal: NO FAKES Act.** The "Nurture Originals, Foster Art, and Keep Entertainment Safe" Act (Coons, Blackburn, Klobuchar, Tillis) was reintroduced in April 2025. It creates a federal property right in voice and likeness, allows civil action against producers, hosts, and distributors of unauthorized digital replicas, and includes DMCA-style notice-and-takedown. EFF, CDT, ALA, and CCIA argue the takedown regime risks chilling protected speech (parody, criticism, journalism). As of May 2026 the bill is still in committee.

**US states.** Tennessee's ELVIS Act (Ensuring Likeness Voice and Image Security, 2024) was the first state law to extend right-of-publicity protections explicitly to AI voice clones, driven by Nashville music-industry lobbying. California and New York have amended pre-existing right-of-publicity statutes. Most states have no AI-voice-specific law; protection derives from general right-of-publicity case law.

**EU AI Act.** In force since August 2024 with staged application. Requires labeling of AI-generated audio content; deep-fake labeling obligations effective August 2026. GDPR treats voice as biometric data when used for identification.

**Detection.** ElevenLabs and OpenAI watermark outputs but watermarks are not robust to re-recording, transcoding, or significant editing. Open detectors (Pindrop, Resemble Detect) exist; none is reliable enough to base accusations on. Expect the detection arms race to favor the generator side indefinitely.

## Individual empowerment

| Task | 2022 method | 2024-2026 method | Cost |
|---|---|---|---|
| Audiobook of a 100k-word draft | Hire narrator: $5-10k | ElevenLabs / Kokoro | $22-50 |
| Dub a YouTube channel into 30 languages | Impossible solo | HeyGen / ElevenLabs Dubbing | $24-99/mo |
| Personal phone agent that takes calls | Not a category | Vapi / Bland / Retell | $0.07-0.35/min |
| Game character voices | Per-line voice actors | XTTS-v2 / Sesame CSM (local) | $0 |
| Real-time conversational tutor | Not a category | OpenAI Realtime / Hume EVI | $0.06-0.32/min |
| Narrate any text on demand | Read it yourself | Kokoro on a laptop CPU | $0 |

Self-defense practice: set a code-word with family for emergency calls; vishing scams can replicate a loved one's voice from a 30-second TikTok clip.

## See Also

- [AI avatars and dubbing](ai-avatars-and-dubbing.md)
- [Generative music](generative-music.md)
- [Generative video](generative-video.md)
