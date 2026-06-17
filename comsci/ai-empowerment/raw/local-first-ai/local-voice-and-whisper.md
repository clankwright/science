# Local voice: Whisper.cpp, faster-whisper, Piper, XTTS

## What it is
The offline voice stack. Speech-to-text via OpenAI's Whisper running locally (whisper.cpp, faster-whisper, MLX-Whisper). Text-to-speech via Piper (fast neural ONNX voices), Coqui XTTS-v2 (voice cloning, 16 languages), Kokoro (newer fast TTS), Bark (expressive but slow), Tortoise (high quality, slow). End result: a voice assistant that runs without ever sending audio off the device.

## Specific unlocks
- Transcribe a confidential client interview entirely on a laptop with whisper.cpp `large-v3` in real time (faster than playback on any GPU, near-real-time on CPU). Lawyers, therapists, journalists, and doctors actually use this.
- Clone a specific voice from a 6-second sample with XTTS-v2 and generate arbitrary speech in that voice in 16 languages, on a 12 GB VRAM GPU, locally.
- Build a voice-controlled local assistant: whisper.cpp -> Ollama LLM -> Piper TTS, all on a Raspberry Pi 5 with a USB mic, no internet.
- Subtitle a 2-hour video with faster-whisper INT8 in 5-15 minutes on a 4090, with word-level timestamps for editing.
- Run a real-time call dictation tool inside a SCIF or a hospital where cloud transcription is forbidden by policy.
- Voice-clone yourself for accessibility (ALS patients have used this pattern to preserve voice before disease progression eliminates speech) without depending on a vendor's continued operation.

## The stack pieces (May 2026)
- **whisper.cpp:** Georgi Gerganov's C++ port of Whisper. Runs on CPU + Metal + CUDA + Vulkan. The universal STT engine for local use.
- **faster-whisper:** Python rewrite using CTranslate2; 2-4x faster than openai/whisper, better GPU utilization. Standard for batch transcription.
- **MLX-Whisper:** Apple Silicon native; fastest on M-series Macs.
- **Distil-Whisper:** distilled smaller variants (~39M / 166M / 756M params) at near-large quality for fast use.
- **Piper TTS:** small VITS-trained voices in ONNX; CPU-fast (real-time on Raspberry Pi). Voices for 30+ languages from the Rhasspy/Home Assistant project.
- **Kokoro TTS:** 82M-parameter newer model that runs at real-time on CPU and beats Piper on quality.
- **Coqui XTTS-v2:** the voice-cloning workhorse. Coqui the company sunset in 2024 but the model and code remain freely available; community fine-tunes continue.
- **OpenVoice v2 (MyShell):** alternative voice-cloning model with cross-lingual transfer.

## Pre-AI baseline
Pre-Whisper (2022): commercial transcription cost $1-3/audio-minute, with humans listening to your audio. Voice cloning required studio-quality recordings of hours of training data and a research budget. Local TTS was robotic (eSpeak, Festival) or required SAPI voices.

## Hardware / cost
All free, open-source.
- **Whisper.cpp tiny/base/small:** runs real-time on a Raspberry Pi 5, no GPU.
- **Whisper.cpp large-v3:** real-time on any modern laptop CPU, 5-10x real-time on a consumer GPU.
- **faster-whisper INT8 large:** 30-50x real-time on a 4090.
- **Piper / Kokoro:** real-time on Raspberry Pi CPU; no GPU needed.
- **XTTS-v2:** ~12 GB VRAM for comfortable use; runs slower on CPU.

## Maturity
Production-ready: Whisper for transcription is at human-parity for many languages and acoustic conditions. Piper and Kokoro for TTS are production-grade for assistive tech and voice assistants. XTTS-v2 voice cloning is good enough for podcast/audiobook narration in 16 languages.

Breaks / weak: speaker diarization (who-said-what) still needs separate models (pyannote-audio); Whisper hallucinates on long silences and cross-talk; XTTS-v2 has occasional unnatural prosody on long passages; voice-clone consent and deepfake misuse are unresolved policy issues.

## Sources
- https://huggingface.co/coqui/XTTS-v2
- https://localaimaster.com/models/coqui-tts
- https://pidiylab.com/text-to-speech-raspberry-pi-piper/
- https://www.insiderllm.com/guides/voice-chat-local-llms-whisper-tts/
- https://smallest.ai/blog/open-source-tts-alternatives-compared
- https://github.com/coqui-ai/TTS
- https://docs.coqui.ai/en/latest/models/xtts.html
