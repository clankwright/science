# Duolingo Max

**Captured:** 2026-05-03
**Vendor:** Duolingo (powered by OpenAI GPT-4)
**Sources:**
- https://blog.duolingo.com/duolingo-max/
- https://openai.com/index/duolingo/
- https://copycatcafe.com/blog/duolingo-max
- https://www.jaideepass.com/guides/duolingo-max-review-is-it-worth-it
- https://cheapersgames.medium.com/duolingo-max-review-how-ai-makes-language-learning-2-faster-in-2025-64fafe992424
- https://medium.com/design-bootcamp/how-ai-roleplay-is-redesigning-language-learning-experience-90522a8a68f1

## What it is

Top-tier Duolingo subscription ($168/yr) layered on top of Super. Two flagship AI features:

1. **Roleplay**: open-ended scripted scenes (order coffee in Paris, complain to a hotel desk in Tokyo). The AI plays the counterparty; the user types or speaks. Closes with feedback on what was awkward.
2. **Explain My Answer**: when you get a question wrong, ask the AI why. It explains the grammar rule, contrasts your answer with the correct one, gives an example.
3. (2024-2025 add) **Video Call** with Lily (animated character) for spoken practice.

As of January 2026, Explain My Answer is free for all users; Roleplay and Video Call remain paid.

## Maturity

Production. ~1M paying Max subscribers per Duolingo's late-2025 disclosures. GPT-4 calls are the cost driver and the reason Max is priced 2x Super.

## Capability story

Pre-AI: Duolingo could mark answers right/wrong but could not explain *why* a sentence felt off. Speaking practice required a tutor on iTalki or Preply ($15-30/hr) or a language exchange partner.

The unhobbling is dialog memory plus voice. RLHF-tuned GPT-4 can hold a multi-turn conversation in basic French and stay in role. Whisper handles imperfect L2 pronunciation well enough to score it. Both were research demos in 2021.

## Evidence

Duolingo's internal numbers (treat as marketing):
- 78% of Roleplay users feel more prepared for real conversations after 4 weeks.
- 65% of Max users adopt Explain My Answer; +15% course completion.
- 20-30% retention lift in AI-exposed cohorts.

No independent RCT yet. Selection bias is obvious: Max users are higher-intent.

## Limits

- Roleplay scenes are scripted at the scenario level; the AI improvises within bounds but will not just freeform.
- Voice grading is forgiving; a lot of mediocre pronunciations get full credit.
- Cost: $168/yr is competitive vs. a tutor but expensive vs. free Duolingo or Anki + comprehensible input on YouTube.

## Individual-empowerment angle

Anyone learning a language gets unlimited cheap conversation practice without a tutor. For learners in countries where the target language is not spoken locally (English learner in rural Vietnam, Japanese learner in Iowa), Roleplay is the closest a free-tier user has come to live human conversation practice.
