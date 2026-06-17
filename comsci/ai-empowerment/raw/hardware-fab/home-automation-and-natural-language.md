# Home Assistant + local LLM voice control

## What it is

Home Assistant (HA) is the dominant open-source home automation hub. As of 2024.4 it has native Ollama integration; through 2025-2026 the Voice Assistant pipeline (called Assist) added per-device LLM assignment, room-aware context, and the Voice Preview Edition hardware ($59 puck). The result: the "talk to your house" pattern that smart-speaker companies promised for a decade now actually works, locally, without cloud round-trips, in 51 languages.

## Specific unlocks

- "Turn off the living room lights and set the bedroom to 68 degrees" runs entirely on a mini-PC in your closet. No Amazon, no Google.
- Per-device LLM assignment: a Voice PE in the kid's room runs a smaller model, the kitchen runs Llama 3.1 70B on a 4090. Same Home Assistant.
- Room-aware context: the LLM knows which room it's in and which devices are in that room. "Turn off the lights" disambiguates correctly.
- Voice chapter 10 (June 2025) and the AI in HA architecture post (Sept 2025) added dynamic personality presets via OpenAI/Anthropic conversation agents.
- Wyoming protocol decouples wake-word, STT (Whisper), LLM, and TTS so each can run on different machines or as cloud fallbacks.
- A Raspberry Pi 4 handles basic Whisper STT. A modest mini-PC with a mid-range GPU delivers cloud-comparable response times entirely locally.
- Self-hosted blueprints (`kunalganglani.com` 2026 guide) document the full local stack: Whisper + Piper + Ollama + Llama 3.x, no SaaS.

## Concrete weird unlocks

- "Hey Jarvis, when the back door opens after sunset and the dog is in the garage, flash the porch light twice" parsed by an LLM into a Home Assistant automation YAML, deployed on the spot.
- Voice control of arbitrary scripts: "make me a coffee" triggers a script that turns on the smart plug for the espresso machine, runs a 30-second timer, sends a phone notification.
- Local LLM picks up that "I'm cold" should bump the thermostat, not just answer the literal question. Intent-based control without brittle regex parsing.

## Pre-AI baseline

Pre-LLM Assist required hand-crafted intent files in YAML for every phrase variant. Voice control existed but was brittle ("turn off lights" worked, "kill the lights" did not). Cloud assistants (Alexa, Google Home) handled phrasing but required cloud round-trips and could not see local state.

## Hardware / cost

- Home Assistant Green: $99 hub. HA Yellow: $149+.
- Voice Preview Edition puck: $59.
- Local LLM mini-PC: $400-$1,500 (GMKtec, Beelink with iGPU; or used 3060/4060 box).
- Ollama: free.
- Whisper / Piper / Faster-Whisper: free.
- Optional cloud LLM: $5-$20/mo via OpenAI, Anthropic, or Google.

## Maturity

Production. The Voice PE puck is shipping. Local-only voice pipelines work. Latency is a function of model size and hardware; sub-second TTFT is achievable with quantized 7-8B models on mid-range GPUs. The remaining sharp edges: wake-word false positives in noisy rooms, multilingual mixing, and very-long-tail intents.

## Sources

- https://www.home-assistant.io/blog/2025/09/11/ai-in-home-assistant/
- https://www.home-assistant.io/voice-pe/
- https://www.home-assistant.io/voice_control/
- https://www.home-assistant.io/voice_control/voice_remote_local_assistant/
- https://www.home-assistant.io/blog/2025/06/25/voice-chapter-10/
- https://www.kunalganglani.com/blog/self-hosted-voice-assistant-home-assistant-2026-guide
- https://www.xda-developers.com/local-llms-changed-how-i-use-home-assistant/
