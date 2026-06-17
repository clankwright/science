# Voice Banking and Voice Restoration

## What it is

For people with progressive speech loss (ALS / MND, laryngeal cancer pre-laryngectomy, MSA, Parkinson-plus syndromes, Huntington's), preserving or recreating their natural voice for use in an AAC device. Two phases:
- **Voice banking**: record yourself before voice loss; bank a synthetic clone for later use. Established practice; multiple vendors.
- **Voice restoration**: rebuild the voice *after* loss using whatever audio survives (old voicemails, home videos, podcasts, social-media clips). New since 2023; only possible with frontier voice-cloning models.

Major actors: **ElevenLabs** (1 Million Voices initiative + Bridging Voice partnership), **Acapela My-Own-Voice** (Sweden, traditional voice banking), **VocaliD** (now Veritone Voice; offered "voice donor" matching), **Team Gleason** (NPO that funds devices for ALS patients), **MND Association** (UK).

## Specific unlocks

- **Restore the voice of an ALS patient who never banked**, from old voicemails their family pulled off cell phone backups, or from a YouTube video of them giving a wedding toast in 2015. ElevenLabs needs as little as 10 minutes of usable reference audio. This was *technically impossible* before zero-shot voice cloning matured (2023).
- **ElevenLabs "1 Million Voices" initiative**: $1B in committed free voice-restoration access; supported 7,000 individuals across 49 countries with 780 partner organizations (as of early 2026). Free Pro tier for ALS patients; expanding to mouth cancer, MSA, and other speech-loss conditions.
- **Slurred-to-clear speech-to-speech (ElevenLabs Flash v2.5, 2026)**: a patient with advanced dysarthria speaks (slurred, hard to understand) into a microphone; the AI maps prosody, emotion, intent onto the patient's pre-disease cloned voice in real time. The patient sounds like themselves before the disease, while still controlling cadence and emphasis through their own (impaired) speech rather than typing.
- **Acapela My-Own-Voice (v3, 2024)**: voice banking from **50 recorded sentences** (down from 350 in earlier versions). DNN-based. Free for ALS patients via partnerships with Team Gleason, MND Association, ALS Society of Canada, others. Funding flag at signup auto-routes the request to qualifying NPOs.
- **Bridging Voice + ElevenLabs**: NPO that pairs ALS patients with the ElevenLabs cloning workflow; handles the consent, audio collection, and AAC integration. Free.
- **Photorealistic talking-head extension** (ElevenLabs + Lenovo prototype, late 2025): patient's restored voice plus a video avatar that mimics their facial expressions in real time, so they can show up to family video calls with both voice and face.

## Pre-AI baseline

- **ModelTalker** (free, since ~2002): record ~1600 sentences over many hours; concatenative TTS produces a voice that sounds *kind of* like you. Quality plateaued in the 2010s.
- **Acapela MOV pre-2024**: required 350+ sentences. Many ALS patients lose the ability to produce clean recordings before they finish.
- **CereProc, Cepstral, Nuance Vocalizer**: stock synthetic voices; not your voice. Default for most SGD users prior to 2023.
- **Voice donors** (VocaliD): a sighted-volunteer-style program that matched a patient with a similar-pitch healthy donor and synthesized a hybrid voice. Only an approximation.
- If you didn't bank in time, you got a stock voice. There was no path back.

## Cost / access

- ElevenLabs 1 Million Voices: **free** for qualifying ALS / cancer / stroke / MSA patients via NPO partners.
- Acapela My-Own-Voice: ~$99 retail; **free** with NPO funding through Team Gleason, MND Association, etc.
- ModelTalker: free.
- ElevenLabs commercial Pro tier (without disability program): $22/mo.
- Bridging Voice: free, NPO-funded.

## Maturity

**Production for English; rolling out for major languages.** Voice banking from scratch with healthy voice: solved (50 sentences, DNN). Voice restoration from old recordings: solved at usable quality for English; quality varies with reference-audio quality. Slurred-to-clear STS in real time: 2026 frontier, deployment is small but growing. Integration with eye-gaze / switch SGDs is mostly mature; latency from text-to-voice ranges from sub-second (ElevenLabs Flash) to 1-3 sec (older banked-voice TTS).

Open issues: emotion / laughter / crying still hit-or-miss; long-tail languages (Tamil, Yoruba, Bengali) still produce artifacts; consent and identity-theft concerns around cloning from public audio.

## Sources

- https://markets.financialcontent.com/wral/article/tokenring-2025-12-31-the-gift-of-gab-how-elevenlabs-is-restoring-lost-voices-for-als-patients
- https://markets.financialcontent.com/stocks/article/tokenring-2026-2-5-the-new-sound-of-resilience-elevenlabs-and-the-ethical-revolution-in-als-voice-preservation
- https://bridgingvoice.org/elevenlabs/
- https://www.acapela-group.com/solutions/my-own-voice/
- https://mov.acapela-group.com/news/voice-banking-in-50-sentences-introducing-version-3-of-My-Own-Voice-from-acapela-group/
- https://teamgleason.org/team-gleason-adds-My-Own-Voice/
- https://www.als.org/sites/default/files/2021-02/Voice_Banking_Through_The_ALS_Association.pdf
- https://www.susanmastals.org/evolving-technologies-a-growth-of-options-for-voice-banking/
- https://eatspeakthink.com/voice-banking-tutorial/
