# Voice Cloning + Voice Agents: Capability Overview

Raw research notes for the voice synthesis / voice-agent capability category, 2024-2026.

## The shift

Voice was famously a moat. As recently as early 2023, plausible voice cloning required either (a) a paid voice actor at hundreds of dollars per finished minute, (b) hours of reference audio fed into a fine-tuning pipeline at a research lab, or (c) accepting the obviously-robotic output of Amazon Polly / Google Cloud TTS / macOS `say`. By mid-2024, ElevenLabs sold zero-shot cloning from 30 seconds of audio for $5/month. By late 2024, Sesame open-weighted a 1B-parameter conversational speech model (CSM) under Apache 2.0. By late 2025, Cartesia Sonic-3 hit ~90 ms time-to-first-audio with sub-200 ms first-chunk latency, fast enough for genuinely conversational voice agents. By Q1 2026 OpenAI's gpt-realtime ran a single-model speech-to-speech pipeline (not the old STT -> LLM -> TTS chain) with prosody and tool-calling.

The unhobbling is in three pieces:

1. **Cloning floor dropped from hours -> seconds.** XTTS-v2 (open) and ElevenLabs Instant Voice Clone both work from <30s. Cartesia advertises 3s. Sesame CSM-1B works from ~1 minute and preserves conversational context.
2. **Latency floor dropped from "wait several seconds" -> "sub-second turn-taking."** Cartesia Sonic Turbo claims 40 ms TTFA. OpenAI Realtime and ElevenLabs Conversational AI ship production agents that interrupt and resume like a human. The 200-800 ms full-roundtrip floor is now the practical ceiling on natural-feeling phone agents.
3. **Multilingual transfer became free.** HeyGen dubs into 175+ languages preserving the original speaker's voice and lip-syncing. Rask covers 130+. ElevenLabs supports 30+ languages from a single English voice clone. NotebookLM Audio Overviews extended to 80+ languages in September 2025.

## Pre-AI baseline (what an individual had to do, 2022 and earlier)

- Hire a voice actor: $200-500 per finished minute for professional narration; $50-150 for hobbyist quality on Fiverr.
- Use stiff TTS: Amazon Polly ($4/1M chars), Google Cloud TTS, or macOS `say`. Recognizably synthetic. No emotion. No voice identity.
- Record yourself: free but slow; no multilingual transfer; no realtime agent option.
- Voice agents: not a category. Phone IVR systems were rule-based DTMF trees. "Conversational" meant Siri / Alexa, not goal-directed.

## What an individual can do now (2024-2026)

| Task | 2022 method | 2024-2026 method | Cost |
|------|-------------|------------------|------|
| Audiobook of a 100k-word draft | Hire narrator: $5-10k | ElevenLabs / Kokoro: $22-50 | 1 day, end-to-end |
| Dub a YouTube channel into 30 languages | Impossible solo | HeyGen / ElevenLabs Dubbing | $24-99/mo |
| Personal phone agent that takes calls | N/A | Vapi / Bland / Retell | $0.07-0.35/min |
| Voice characters in hobby game | Per-line voice actors | XTTS-v2 / Sesame CSM (free, local) | $0 |
| Preserve a loved one's voice | Tape recorder | Clone from any old recording | $5/mo |
| Narrate any text on demand | Read it yourself | Kokoro on a laptop CPU | $0 |
| Real-time conversational tutor | N/A | OpenAI Realtime / Hume EVI | $0.06-0.32/min |

## Top tools (ranked by individual leverage)

1. **ElevenLabs.** Default for most individuals. Cloning, multilingual, agents, dubbing all in one product. $5-22/mo gets you everything except the highest-volume API tier.
2. **OpenAI Realtime API + Voice Mode.** Best in-app experience (Voice Mode in ChatGPT mobile, free for Plus subscribers). Realtime API for builders. Sets the conversational quality bar.
3. **Cartesia Sonic-3.** Latency king. The choice when you're building real-time voice agents and the round-trip floor matters.
4. **NotebookLM Audio Overviews.** Free, instant, no learning curve. Turns any document into a two-host AI podcast. Most viral voice product of 2024-2025.
5. **Kokoro-82M (open weights).** 82M parameters, Apache 2.0, runs on CPU, hit #1 on TTS Arena. The "good enough for most things" floor for self-hosters.
6. **Sesame CSM-1B (open weights).** First open conversational-speech model that preserves multi-turn prosody. The "Llama moment" for voice.
7. **HeyGen / Rask.** Video dubbing with lip-sync. The killer app for solo creators going multilingual.
8. **Hume EVI.** Empathic / emotional voice interface. Niche but unique: reads vocal affect and responds to it.
9. **Vapi / Retell / Bland.** Voice agent platforms for phone numbers. Build a voice agent that actually answers your phone.
10. **Suno v5.5 (voice cloning).** Music adjacency: clones your singing voice into generated tracks. $8-10/mo.

## Honest limits

- **Ethics / consent.** Cloning without consent is trivial; the NO FAKES Act (US, reintroduced April 2025) and state laws like Tennessee's ELVIS Act are the regulatory response but coverage is patchwork. Tennessee, California, and a handful of other states have right-of-publicity protections; most don't.
- **Scam / fraud risk.** AI voice in vishing attacks ("Mom, it's me, I need bail money") is now a routine FBI advisory. The Baltimore high school principal deepfake case (2024) is a canonical example of weaponized cloning.
- **Language coverage uneven.** English is solved. Spanish, French, German, Mandarin, Japanese are very good. Long-tail languages (Tamil, Yoruba, Bengali) still produce noticeable artifacts.
- **Latency floor.** Real-time conversation still hits 200-800 ms round-trip floors. Below ~250 ms feels human; 400 ms feels like a slightly-slow human; 800 ms+ feels like a robot.
- **Emotion control still imperfect.** Prosody is great for neutral narration. Crying, laughter, anger remain hit-or-miss outside of Sonic-3 and Hume EVI.
- **Watermarking and detection.** ElevenLabs and OpenAI watermark output, but watermarks are easily stripped by re-recording or transcoding. No reliable detection in the wild.

## Sources

Web searches conducted May 2026 against vendor sites, eesel.ai pricing breakdowns, Hugging Face model cards, OpenAI / Cartesia / ElevenLabs / Hume blog posts, RecordingAcademy / Coons.senate.gov for NO FAKES Act, TTS Arena leaderboards.
