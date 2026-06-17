# Oura Advisor

## What it is

LLM-powered conversational interface inside the Oura app that draws on the ring's continuous PPG, body temperature, motion, SpO2, and derived Sleep/Readiness/Resilience scores. Launched in Oura Labs late 2024, promoted to a full feature March 2025. Available to Gen3 and Ring 4 members. As of 2025, Oura also shipped its first proprietary in-house LLM, focused on women's health (cycle, perimenopause, pregnancy contexts).

## Specific unlocks

- Memories: tell Advisor "I'm recovering from a torn meniscus" or "training for Ironman Wisconsin Sept 2026" and that context persists across conversations and shapes every future recommendation. Closest consumer analogue to a coach who knows your history.
- "Why was my sleep score 62 last night?" gets back a specific answer pointing to elevated resting HR, body-temperature deviation from baseline, or restlessness windows, instead of a generic tip.
- Longitudinal narrative: "How has my Resilience changed since I started lifting weights in January?" pulls 4-month trends and produces prose, not a chart.
- Cycle-aware coaching from the women's-health model that adjusts training/recovery framing across menstrual phases without the user having to set anything.
- Meals integration: dietary entries get folded into Advisor's data scope so it can correlate late dinners with sleep latency.

## Pre-AI baseline

Either an unread Oura dashboard, or a $300/session functional-medicine practitioner staring at your CSV export. Cycle-aware physical-training adjustment in particular required either a niche human coach or paid programs like FitrWoman. Oura now bundles it.

## Cost / access

Ring 4 hardware $349-499. Oura Membership $5.99/mo or $69.99/yr is required for Advisor and most features. The hardware is purchased outright (no Whoop-style bundle).

## Maturity

Where it works: 2025 Oura beta data showed >60% of users interacting weekly, ~20% daily; 60% reported Advisor helped them understand metrics, 56% reported it helped them apply that information. These are self-reported, not RCT-validated, but engagement is unusually high for a chatbot feature.

Sleep accuracy: Oura Ring Gen3 with Sleep Staging Algorithm 2.0 (validated 2024, 96 participants, 421k epochs of ambulatory PSG) shows sensitivity 76-80% and precision 77-80% for stage discrimination, no significant difference vs PSG for total sleep time, deep, light, or REM in aggregate. Best-in-consumer-class for sleep staging. Advisor's narration of sleep is therefore on a stronger sensor base than Whoop's.

Where it's marketing: Resilience as a metric is novel and not externally validated. The proprietary women's-health LLM is recent (2025) and specific clinical performance is not published. "Clinically grounded" appears in marketing but Oura is not a medical device for cycle tracking or anything else.

## Sources

- [Oura: Introducing Oura Advisor](https://ouraring.com/blog/oura-advisor/)
- [Oura: Proprietary AI model for women's health](https://ouraring.com/blog/womens-health-ai-model/)
- [9to5Google: Advisor moves from Labs to full feature Mar 2025](https://9to5google.com/2025/03/31/oura-ring-app-launches-advisor-ai/)
- [Athletech News on Oura Advisor launch](https://athletechnews.com/oura-introduces-oura-advisor/)
- [Oura Ring Gen3 + OSSA 2.0 PSG validation](https://pubmed.ncbi.nlm.nih.gov/38382312/)
- [Oura Ring vs medical-grade sleep studies systematic review/meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC12602993/)
