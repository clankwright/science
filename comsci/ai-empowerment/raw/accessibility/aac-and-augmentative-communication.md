# AAC and LLM-Assisted Augmentative Communication

## What it is

Augmentative and Alternative Communication: software / hardware that lets non-speaking or minimally-speaking individuals (autism, cerebral palsy, intellectual disability, ALS, post-stroke aphasia, Down syndrome) communicate by selecting symbols, words, or phrases. Major products: **Proloquo / Proloquo2Go / Proloquo4Text** (AssistiveWare), **Snap Core First** (Tobii Dynavox), **TouchChat**, **TalkTablet**, **LAMP Words for Life**. The 2024-2026 unhobbling: LLMs as **phrase predictors** that turn cumbersome icon sequences into fluent sentences.

## Specific unlocks

- **SpeakFaster (Google + Team Gleason)**: user types abbreviated initials (e.g., "ilttptb" for "I'd like to put the toaster back"); LLM expands to full phrase given conversational context. Field-tested on ALS users, **29-60% faster text entry, 57% fewer motor actions** vs traditional next-word prediction. Published in Nature Communications 2024.
- **AssistiveWare Proloquo + LLM**: 2024-2025 updates added LLM-driven novel-sentence generation from selected core-vocabulary symbols; also LLM-powered phrase-bank suggestions tuned to the user's prior conversations.
- **Tobii Dynavox Snap Core First + AI assistant** (2025-2026): partner brand integrating LLM-driven phrase suggestion and topic-aware vocabulary surfacing into the eye-gaze / touch / switch interface.
- **LLM as conversation expander**: user selects 3-4 symbols; the AAC system proposes a complete utterance; user picks one with a single switch press. Cuts typical AAC turn time from 30-60 sec to 5-15 sec.
- **Topic-aware vocabulary**: AI infers the topic of conversation from prior turns and re-orders vocabulary tiles so likely words surface first. Matters because the cost of finding a tile in a multi-thousand-symbol grid is non-trivial for an eye-gaze user.
- **Voice output with banked / cloned voice** (see voice-banking-and-restoration.md): pairs with the AAC text engine so the spoken output sounds like the user, not a generic synthetic voice.
- **AAC for emergent literacy**: LLM-driven scaffolding for users with intellectual disability who are still building vocabulary; suggests symbol-to-text mappings tuned to the user's developmental level.

## Pre-AI baseline

- Symbol-by-symbol selection. A non-speaking user with CP using a head-pointer or eye-gaze might construct a single sentence in 30-90 seconds.
- Word prediction (n-gram, frequency-based) since the 1990s; modest gains.
- "Speed-keys" and "stored-phrases": pre-recorded phrases ("I need the bathroom") triggered by a single switch. Useful but rigid; non-speakers have always needed novel utterance generation, not just canned phrases.
- Eye-gaze ALS communicators routinely topped out around 8-12 wpm; severe CP users much lower.
- Conversation partners often spoke for the AAC user out of impatience; the social cost of slow AAC is enormous.

## Cost / access

- **Proloquo2Go**: $250 one-time iPad app (no subscription).
- **Snap Core First** (Tobii Dynavox): bundled with $7-15k dedicated SGD hardware; Medicare / insurance funded once per 5 years.
- **TouchChat**: ~$300 iPad app.
- **LAMP Words for Life**: ~$300 iPad app.
- **SpeakFaster**: research, not commercial; Team Gleason participants.
- **Standalone iPad / iPad Pro + AAC app**: ~$700-1500 total. ABLE Act / state Medicaid waivers / private insurance / school-district AT funding all cover this in the US.
- **Stock LLMs as personal AAC assistants**: ChatGPT, Claude on iPad with a switch interface. Free / $20/mo. Increasing reports of non-speaking adults using ChatGPT as a phrase generator outside of formal AAC products.

## Maturity

**Production for the established AAC products; LLM integration in production preview, 2024-2026 rollout.** SpeakFaster is research → pilot. The bigger story is that small product teams (AssistiveWare, Tobii Dynavox, Smartbox) are quietly absorbing LLM features into existing flows; users see incremental quality improvements without changing apps.

Real-world friction: LLM hallucinations are unacceptable when the user is trying to say a specific medical thing. Many users want the AI to *suggest* not *substitute*; the UX puts the user in control of the final selection. Latency (cloud LLM round-trip) competes with banked-voice latency for the conversational floor. Internet outage takes the AI features offline; the base AAC keeps working.

## Sources

- https://www.nature.com/articles/s41467-024-53873-3 (SpeakFaster, Nature Communications, 2024)
- https://research.google/blog/speakfaster-revolutionizing-communication-for-people-with-severe-motor-impairments/
- https://us.tobiidynavox.com/
- https://dl.acm.org/doi/fullHtml/10.1145/3544548.3581560 ("The less I type, the better": LLMs in AAC, CHI 2023)
- https://wjarr.com/sites/default/files/WJARR-2024-3308.pdf (ML for predictive AAC, 2024)
- https://www.iaaic.org/blog/future-prospects-ai-powered-augmentative-and-alternative-communication-aac-tools-in-the-next-decade
- https://justkeepstimming.com/2022/01/07/aac-reviews/ (autistic-adult perspective on AAC)
