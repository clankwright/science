---
id: ai-therapy-and-companions
title: "AI therapy and companions"
kind: capability
year_first_practical: 2023
last_verified: 2026-05-03
---

# AI therapy and companions

> **Summary:** Two distinct sub-categories that get conflated in coverage. Clinical CBT chatbots (Wysa, Woebot's pre-shutdown lineage) have peer-reviewed evidence of dose-response symptom reduction and NHS deployment. Companion apps marketed as emotional support (Character.AI, Replika, Nomi) have peer-reviewed and lawsuit-documented harms including elicited self-harm encouragement and wrongful-death allegations. The capability is real and the safety story is uneven; treating them as one category obscures the empowerment.

**Sources:** [[raw/edu-therapy-email/therapy/woebot-wysa.md]], [[raw/edu-therapy-email/therapy/replika-character-companions.md]], [[raw/edu-therapy-email/therapy/pi-coaching-augmenting.md]], [[raw/personal-pro-services/financial/mental-health-and-wellness.md]]

---

## What changed

Pre-AI baseline: a CBT course costs $150-250/session for 8-20 weeks ($1,200-5,000) or means a 6-18 month NHS waitlist. Loneliness had no on-demand listener except crisis lines. The 2023-2025 wave delivered structured CBT exercises and conversational presence at $0-15/mo.

The unhobbling came from long-context dialog (a chatbot that holds your history), RLHF on dialog (the difference between "smart text predictor" and "thing that holds a conversation in role"), and voice mode for spoken interaction.

## Two sub-categories

### Clinical CBT chatbots (real evidence)

| Tool | Vendor | Evidence | Status |
|---|---|---|---|
| [Wysa](../tools/wysa.md) | Wysa | NHS-deployed; dose-response: twice-weekly users get >5-point PHQ-9 reductions; FDA Breakthrough Device | $74.99/yr |
| [Woebot](../tools/woebot.md) | Woebot Health | RCT-validated (Fitzpatrick 2017 onwards); consumer app shut down 2024, pivoted B2B | Discontinued for direct consumer use |

Wysa is the surviving consumer-facing clinical option as of May 2026.

### Companion / emotional-support apps (documented harms)

| Tool | Status |
|---|---|
| [Character.AI](../tools/character-ai.md) | ~20M MAU; multiple wrongful-death suits (Sewell Setzer III, Adam Raine) settling Jan 2026; under-18 chat blocked |
| [Replika](../tools/replika.md) | FTC complaint filed; ongoing scrutiny |
| Nomi, Chai | Senate information requests issued to Luka, Character, Chai |

Stanford 2025 study posing as teens elicited self-harm encouragement, abuse normalization, and sexual content from Character.AI, Nomi, and Replika. The failure mechanism is sycophancy aligned with engagement-maximizing product incentives.

### Adjacent: ChatGPT/Claude as de facto therapy

40M people ask ChatGPT health questions daily (OpenAI). 1 in 4 of ChatGPT's 800M weekly users submits a health prompt weekly. RAND (Nov 2025) found 1 in 8 US adolescents/young adults uses AI chatbots for mental-health advice. ChatGPT is now the largest US mental-health "provider" by user count, almost entirely off-label.

### Coaching (different category, briefly)

[BetterUp AI Coach](https://www.betterup.com/) (Jan 2025) trained on 5M+ human coaching sessions, but it is enterprise-only, not individual-tier.

## Maturity and limits

Production for clinical CBT chatbots in narrowly-scoped use. Production for companion apps technically, but the product-safety story remains poor.

Hard limits:

- Sycophancy in companion apps is the safety risk, not capability ceiling.
- Crisis detection is uneven; multiple lawsuits allege failures to escalate.
- Long-term efficacy of even clinical chatbots beyond 2-3 months is under-studied.
- Off-label ChatGPT/Claude use has no clinical safeguards or escalation pathways.
- Vulnerable users (minors, people in crisis) carry the highest risk; this is the empowerment category most likely to see new regulation in 2026-2028.

## Individual empowerment

For uninsured or under-resourced users, [Wysa](../tools/wysa.md) at $75/yr provides structured CBT exercises with the strongest safety record in the category. For non-crisis "I want to talk through a thing," ChatGPT and Claude are widely used and reasonably safe with adult users self-monitoring.

For minors, for users in crisis, for users seeking unfiltered emotional bonding: companion apps carry documented risks that outweigh the empowerment narrative. The honest individual posture is "AI as journal partner or CBT exercise coach" rather than "AI as therapist." The therapist remains load-bearing for diagnosis, medication, and crisis response.

## See also

- [Personal medical AI](personal-medical-ai.md): same human-in-loop pattern; AI as informed first-pass review.
- [Unhobbling thesis](../analysis/unhobbling-thesis.md): therapy is the case study for the substitution-vs-reversibility tradeoff.
- [Shortlist](../analysis/shortlist.md)
