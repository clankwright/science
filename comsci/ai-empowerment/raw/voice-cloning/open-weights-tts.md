# Open-Weight TTS Models

The 2024-2026 open-weight TTS landscape. All free for personal use; most permissive licenses.

## XTTS-v2 (Coqui)

- Vendor: Coqui AI (the company shut down in early 2024 but the model lives on; community maintenance via idiap/coqui-ai-tts and forks).
- License: **Coqui Public Model License** (CPML) — free for personal/research, commercial requires paid agreement (orphaned now).
- 467M params. Supports 17+ languages, zero-shot cloning from ~6 seconds of audio.
- Strong cross-language transfer: clone an English voice, generate Japanese with the same speaker.
- The de facto open-source baseline through 2024. Powers many ComfyUI + open voice projects.
- Distinctive trait: best multilingual zero-shot cloning in the open ecosystem.

## Kokoro-82M (hexgrad)

- Vendor: hexgrad (independent dev). Hugging Face: hexgrad/Kokoro-82M.
- License: **Apache 2.0** — fully commercial-use friendly.
- 82M params — runs comfortably on CPU; <0.3s generation for typical short texts.
- Released v1.0 January 2025 with 54 voices in 8 languages.
- **Hit #1 on TTS Arena leaderboard in January 2026**, beating XTTS (467M), MetaVoice (1.2B), and many proprietary services.
- Total claimed training cost: ~$1,000.
- Distinctive trait: tiny, fast, Apache, surprisingly good. Now the default open TTS for new projects.
- Hosted API (Together, DeepInfra): under $1 per million characters of text input.

## F5-TTS

- Vendor: SWivid (academic / research origin, China).
- License: open weights (MIT / similar).
- ~330M params. Flow-matching architecture. Supports voice cloning.
- Strong English + Chinese; good prosody.
- Sub-7-second processing on most inputs.
- Distinctive trait: very high quality for the parameter count; competitive with proprietary on benchmarks.

## Orpheus (Canopy Labs)

- Vendor: Canopy Labs (open release Q1 2025).
- License: open weights.
- Sizes: ~150M to 3B params; 3B variant is flagship.
- Built on Llama-style backbone, optimized for low-latency streaming TTS.
- Distinctive trait: streaming-first, expressive — designed for interactive / real-time apps where TFB and prosody both matter. Often paired with whisper-cpp on the input side for fully open voice agents.

## Sesame CSM-1B

- Covered in own file. Bears mention here as the only open conversational (multi-turn) speech model.

## Bark (Suno, 2023)

- Older but still relevant; non-commercial license. Pioneer of expressive sounds (laughs, sighs) in open TTS. Largely superseded by F5-TTS / Kokoro / CSM by 2025.

## Comparison summary

| Model | Params | License | Speed | Cloning | Best at |
|-------|--------|---------|-------|---------|---------|
| XTTS-v2 | 467M | CPML (limited) | medium | yes, ~6s | multilingual cloning |
| Kokoro-82M | 82M | Apache 2.0 | fastest | no (preset voices) | speed + quality at low param count |
| F5-TTS | ~330M | open | fast | yes | quality / English+Chinese |
| Orpheus-3B | 3B | open | streaming | yes | interactive / streaming apps |
| Sesame CSM-1B | 1B | Apache 2.0 | medium | yes, ~1 min | conversational / multi-turn |
| Bark | ~1B | non-commercial | slow | partial | expressive sounds (legacy) |

## What an individual unlocks (open ecosystem)

- Run TTS on a laptop with no API bills
- Privacy-preserving voice synthesis (audio never leaves the machine)
- Custom fine-tunes on a specific voice / accent / style
- Build voice agents whose marginal cost is electricity, not API tokens
- Game characters voiced at scale without per-line royalties

## Limits

- Quality gap vs ElevenLabs Multilingual v2 / OpenAI Realtime is closing but real, especially for emotion + long-form prosody.
- Setup friction: GPU drivers, CUDA, Python deps. Not zero-friction like a SaaS sign-up.
- No built-in consent / safety controls — user is fully responsible.
- Multilingual coverage on most open models still trails the long tail of proprietary.

## Sources
- https://huggingface.co/hexgrad/Kokoro-82M
- https://www.inferless.com/learn/comparing-different-text-to-speech---tts--models-part-2
- https://www.bentoml.com/blog/exploring-the-world-of-open-source-text-to-speech-models
- https://www.ttsinsider.com/xtts-v2-vs-kokoro/
- https://www.resemble.ai/best-open-source-text-to-speech-models/
- https://layercode.com/blog/tts-voice-ai-model-guide
