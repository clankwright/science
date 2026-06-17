# Sesame CSM (Maya / Conversational Speech Model)

## Vendor / access
- Sesame AI (US, voice-AI startup, ex-Oculus founder Brendan Iribe; raised $57M+).
- https://www.sesame.com
- Hosted demo (Maya), open-weight 1B model on Hugging Face.

## The model
- **CSM (Conversational Speech Model)**, 1B parameter variant.
- Released **March 13, 2025** under Apache 2.0 license — fully open weights, commercial use allowed.
- Architecture: Llama backbone + smaller audio decoder producing Mimi audio codes (1.1 kbps codec).
- Voice cloning from ~1 minute of source audio.
- Critical novelty: **maintains conversational context across turns.** Adapts tone, pacing, expressiveness to the conversation flow when given previous utterances. Most TTS systems are turn-isolated; CSM is not.

## Maya
- Sesame's hosted virtual-assistant demo, powered by CSM.
- Went viral in early 2025: many users described it as the first AI voice that "felt human" — natural breathing, hesitation, mid-sentence prosody shifts.
- Free demo on sesame.com.

## Pricing
- **Free / open weights.** Local inference: ~6 GB VRAM for the 1B model.
- Maya hosted demo: free.
- Sesame is rumored to be developing AI eyewear hardware as the long-term product; the model is open as community / talent draw.

## Maturity
- **Open-weight foundation model.** Production-grade for English; multilingual support limited vs proprietary competitors.
- The "Llama moment" for conversational voice — first open model that produces genuinely conversational (not just narration-quality) speech.
- Active community building wrappers, ComfyUI nodes, fine-tunes.

## Distinctive trait
Open weights for conversational (multi-turn, context-aware) speech. Every other product on this list either (a) is closed source and API-only, or (b) is open but turn-isolated TTS (XTTS, Kokoro). CSM-1B is the only one that does both.

## What an individual unlocks
- Local voice agent with no per-minute API costs
- Custom-voiced characters for indie games / interactive fiction with full context
- Privacy-preserving voice cloning (audio never leaves the device)
- Foundation for fine-tunes (e.g. cloning a specific accent, emotional style)

## Limits
- 1B model still requires a decent GPU (~RTX 4060+ for realtime).
- English-centric; other languages much weaker than ElevenLabs.
- No built-in safety / consent verification — fully on the user.
- Latency not best-in-class (Cartesia Sonic still leads).

## Sources
- https://github.com/SesameAILabs/csm
- https://huggingface.co/sesame/csm-1b
- https://www.digitalocean.com/community/tutorials/sesame-csm
- https://www.rdworldonline.com/the-rd-story-behind-sesame-ai-the-startup-that-just-open-sourced-its-groundbreaking-voice-generation-model/
- https://fusionchat.ai/news/revolutionizing-voice-ai-sesames-breakthrough-with-maya
