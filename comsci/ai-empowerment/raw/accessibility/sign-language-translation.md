# Sign Language Translation AI

## What it is

Computer-vision pipelines that try to translate sign language (ASL, BSL, DGS, JSL, etc.) to spoken / written language in real time. As of May 2026 this is **the least-mature accessibility AI category**: there is no production-grade general ASL-to-English system. Major players: **SLAIT** (Aachen University spinoff, ~200 ASL signs), **SignAll** (multi-camera booth, single-camera SDK with MediaPipe), Google **MediaPipe Hand Landmarker** (open-source pose pipeline used as a building block), and a long tail of academic projects on transformers / LSTM over MediaPipe keypoints.

## Specific unlocks (and limits)

- **MediaPipe Hand Landmarker + Pose Landmarker** (Google, open-source, free): 21-keypoint hand model, 33-keypoint pose model. Builds the input layer for almost every modern sign-recognition pipeline. Runs in-browser via MediaPipe Tasks, on-phone, on Raspberry Pi.
- **SLAIT**: claims 92% accuracy on a 200-ASL-sign vocabulary in real time using a webcam. Focuses on *isolated signs* and short sentences. Not signed-language-as-language: cannot handle classifiers, role-shift, non-manual markers, fingerspelling at speed.
- **SignAll SDK**: developer-facing; can be embedded in apps. Best results require multi-camera 3D rigs; the single-camera MediaPipe version is more deployable but loses accuracy.
- **What you can actually do today**: build a kiosk that recognizes a few dozen signs in a constrained domain (a McDonald's drive-through could deploy a sign-vocabulary that maps to menu items). Not: have a free-form conversation with a deaf person.
- **What you cannot do today**: translate a deaf user's spontaneous ASL into spoken English over a video call. Hands-down still requires a human ASL interpreter ($75-150/hr Video Relay Service in US is federally subsidized).
- 2024-2025 academic work explores transformer-based Sign2Gloss → Gloss2Text pipelines; published claims of high BLEU scores on benchmark datasets (RWTH-PHOENIX, How2Sign), but real-world deployment lags badly.

## Pre-AI baseline

- **Video Relay Service (VRS)**: deaf user signs to a live human interpreter on video, who voices to the hearing party on phone. Federally funded in the US (FCC). Available 24/7. Free to deaf users, ~$1.10-3.50/min reimbursed by FCC.
- **In-person ASL interpreters**: $75-150/hr, often 2-hour minimum, scheduled in advance. ADA accommodation for medical, legal, employment.
- **Glove-based sign recognition** (early 2010s): bulky, low accuracy, abandoned by deaf community for being designed by hearing people who didn't understand that ASL is not just hand-shapes.

## Cost / access

- MediaPipe components: free, open-source.
- SLAIT: limited public release; mostly demos and pilots.
- SignAll SDK: enterprise sales, no individual pricing.
- No consumer app today that a deaf person can rely on for spontaneous translation.

## Maturity

**Research / preview.** This category is the canonical example of why "AI can do anything" is wrong. Sign languages are not gesture pantomime; they are full natural languages with grammar that uses space, facial expression, body shift. The language-modeling side (Sign-Gloss-to-Text) lags ASL data scarcity vs spoken-language corpora (RWTH-PHOENIX has ~9 hours; LibriSpeech for English has 1000+ hours). Cultural concerns: the Deaf community is appropriately skeptical of hearing-led "fix" projects.

The **realistic 2026 state**: AI is good at reading printed/spoken text *to* deaf users (see live-captioning.md). AI is not good at reading deaf signers' production *for* hearing people. The asymmetry is significant and not closing fast.

## Sources

- https://techcrunch.com/2021/04/26/slaits-real-time-sign-language-translation-promises-more-accessible-online-communication/
- https://developers.googleblog.com/signall-sdk-sign-language-interface-using-mediapipe-is-now-available-for-developers/
- https://www.tpgi.com/german-startup-creates-real-time-sign-language-translation-engine/ (SLAIT review)
- https://www.sciencedirect.com/science/article/abs/pii/S0925231225010938 (MediaPipe + transformers, 2025)
- https://www.ijert.org/ai-powered-real-time-sign-language-translator-using-mediapipe-and-deep-learning-ijertv15is040352 (2026 paper)
- https://github.com/sign-language-translator/sign-language-translator (open-source library)
