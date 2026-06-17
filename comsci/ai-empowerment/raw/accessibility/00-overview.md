# Accessibility AI for Disability: Capability Overview

Raw research notes for the disability-accessibility AI category, 2023-2026.

## The shift

Accessibility tooling sat in a peculiar place pre-2023. Specialized hardware (eye-gaze rigs, dedicated AAC tablets, refreshable braille displays) was expensive and insurance-gated. Software was either narrow (single-purpose OCR, single-purpose color identifier) or it depended on humans (Be My Eyes routed video calls to volunteers; Aira routed them to paid agents). The general-purpose computer-vision and language-model components had not yet matured to the point where one app could read a pill bottle, describe a street scene, summarize a menu in your second language, and answer follow-up questions about any of them.

The unhobbling came in three discrete jumps:

1. **March 2023: GPT-4 with Vision through Be My Eyes ("Be My AI").** First production deployment of a frontier multimodal model in an accessibility app. Free for blind users. Killed the "wait for a volunteer to be available" floor for visual interpretation tasks.
2. **November 2024: Nature Communications / Google SpeakFaster.** First peer-reviewed demonstration that fine-tuned LLMs let eye-gaze ALS users hit text-entry rates 29-60% above the predictive-keyboard baseline, with 57% fewer motor actions. Eye-gaze typing went from ~10 wpm ceiling toward conversational pace.
3. **2024-2026: ElevenLabs "1 Million Voices" + Bridging Voice + slurred-to-clear.** Voice restoration from old voicemails, home videos, podcasts. Free Pro licenses to ALS patients. Flash v2.5 STS pipeline (announced 2026) takes dysarthric input and outputs the patient's pre-disease voice in real time.

## Populations served

- **Blind / low-vision (~340 million worldwide, WHO).** Be My AI, Seeing AI, Aira, Meta Ray-Ban smart-glass integrations.
- **Deaf / hard-of-hearing (~430 million worldwide).** Apple Live Captions, Google Live Transcribe, Otter, Granola; sign-language translation still research-grade.
- **Speech-impairment (ALS ~30k US patients at any time; laryngectomy ~50k US/year; stroke aphasia ~1M US).** ElevenLabs, Acapela My-Own-Voice, Bridging Voice.
- **Motor impairment (CP ~1M US, SCI ~300k US, ALS, MS).** Tobii Dynavox + LLM, SpeakFaster, Smyle Mouse, switch-control prediction.
- **Cognitive (ADHD ~15M US adults, dyslexia ~40M US).** Speechify, ChatGPT as executive-function scaffold, Voice Dream Reader, Audible AI narration.

## What an individual could not do in 2022 vs can do in 2026

| Task | 2022 method | 2026 method | Cost |
|------|-------------|-------------|------|
| Read pill bottle independently | Wait for sighted help or use barcode scanner with limited DB | Phone camera + Be My AI / Seeing AI / GPT-4o | Free |
| Get described street scene at 2am | Aira agent ($$ subscription) or unavailable | Be My AI / Be My Eyes on Ray-Ban Meta | Free |
| Caption an in-person conversation at a noisy cafe | Lipread / hire CART transcriber | Apple Live Captions on iPhone (on-device) | Free |
| Restore voice of advanced ALS patient | Impossible if no banking pre-symptom | ElevenLabs from old voicemails / videos | Free for qualifying patients |
| Eye-gaze type at conversational rate | ~10 wpm with letter prediction | SpeakFaster abbreviation expansion: 29-60% faster | Research, rolling out |
| Identify medications from a pile of unmarked pills | Pharmacist visit | GPT-4o multimodal scan | Free / sub |
| Sign-language to spoken English in real time | Hire ASL interpreter ($75-100/hr) | Still research; no production-grade tool | N/A |

## Top tools (ranked by individual leverage)

1. **Be My Eyes / Be My AI.** Free, GPT-4-based vision QA for blind users; partnered with Meta for Ray-Ban hands-free.
2. **Microsoft Seeing AI.** Free, on-device + cloud, longest-running, multi-channel (text, scene, product, person, currency, color, light, handwriting).
3. **Apple Live Captions.** Free, on-device, no internet, runs in any app system-wide on iPhone / iPad / Mac.
4. **ElevenLabs 1 Million Voices program.** Free Pro to ALS patients; voice cloning from minimal audio; slurred-to-clear STS in 2026.
5. **Aira.** Paid sighted interpreter service; free at thousands of partner venues; integrated with Ray-Ban Meta via WhatsApp video.
6. **SpeakFaster (Google + Team Gleason).** LLM-accelerated eye-gaze AAC. Research, rolling out.
7. **Tobii Dynavox + Snap Core First.** Production AAC; integrating LLM phrase prediction in 2025-2026.
8. **Speechify.** Apple Design Award 2025; default ADHD/dyslexia text-to-speech with executive-function features.
9. **Google Live Transcribe.** Free Android, on-device, deaf-focused, with sound-event notifications.
10. **Smyle Mouse.** Webcam head/face mouse for severe motor impairment; partners with Tobii Dynavox.

## Honest limits

- **Sign-language translation is not solved.** Best research models hit ~92% accuracy on 200-sign vocabularies in controlled webcam conditions. Continuous ASL with classifiers, role-shift, non-manual markers: still research.
- **Face-recognition bias is real.** Commercial systems misclassify dark-skinned women at 34% vs 0.8% for light-skinned men (MIT Media Lab). Same models power "describe the person in front of me" features.
- **AAC voice quality vs latency tradeoff.** Banked / cloned voices sound great but typing speed bottlenecks the conversation. LLM phrase prediction helps; turn-taking still feels stilted.
- **Cloud dependence.** Be My AI, Aira AI features, ChatGPT-based tools fail without internet. Apple Live Captions and on-device Seeing AI features are the exception.
- **Insurance funding lags AI tools.** Medicare funds one SGD per 5 years; AI app subscriptions are not durable medical equipment; many users pay out of pocket.
- **Privacy.** Cameras pointed at everything you read or look at, uploaded to a frontier-model API. Be My AI processes images on OpenAI servers.

## Sources

Web searches conducted May 2026 against bemyeyes.com, microsoft.com/seeing-ai, aira.io, apple.com/accessibility, elevenlabs.io, nature.com (SpeakFaster paper), teamgleason.org, acapela-group.com, smylemouse.com, speechify.com, ec.europa.eu (EAA), section508.gov, MIT Media Lab face-recognition bias studies.
