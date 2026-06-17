# Risks and realistic limits

## Hallucination on personal health data

Current AI hallucination benchmarks: 0.7% on basic summarization, 15.6% on medical queries, 18.7% on legal. That is the failure rate of frontier models on textbook-style questions. On personal-health questions where the model is interpreting noisy biometric streams and citing health literature, the rate is plausibly higher.

A documented failure mode: leading models manipulated to produce dangerously false medical claims (sunscreen causes cancer, 5G linked to infertility) with fabricated citations from real journals like The Lancet. None of the consumer health coaches (Whoop, Oura, Function, Bevel, Superpower) have published red-team results on adversarial-prompt robustness. The user has to assume the chat layer can be wrong with high confidence and false citations.

Practical implications:
- Treat chat-coach outputs as a starting point, not a clinical recommendation.
- Anything supplement-specific or dose-specific is in the highest-risk band.
- "Optimal range" framing on blood panels can over-confidently call normal values "suboptimal" and drive unnecessary intervention.

## The sensor-trust problem

Wearables are confidently reporting numbers that have known accuracy issues. A coach narrating those numbers compounds the confidence error.

Sleep stage classification (2025 PSG validation, 6 wearables, 62 adults):
- Whoop 4.0 Cohen's kappa 0.37 (fair agreement) for stage scoring.
- Wake/sleep discrimination is fine (>95% sensitivity for all devices).
- Stage breakdowns (REM, deep, light) are fair-at-best.

Oura Ring Gen3 with OSSA 2.0 (96 participants, 421k epochs) is the best in class but still 76-80% sensitivity for stage discrimination. Better than Whoop, not infallible.

The "your wearable said 6 hours, you slept 8" problem: users routinely report their wearable disagreeing with subjective experience. Coaches narrating "you didn't get enough deep sleep" can be narrating a measurement error. Total sleep time is generally accurate; specific stage durations are not.

HRV: generally reliable from chest straps and finger-PPG (Oura), less reliable from wrist-PPG during motion (Apple Watch, Whoop in some conditions).

Glucose (CGM): medical-grade. Less of an issue.

Blood panels: the assay is reliable; the interpretation layer is where errors enter.

## FDA and dietary supplement claims

The FDA in 2026 is updating Quality Management System Regulation alignment with ISO 13485:2016 and has clarified limited oversight of low-risk AI health software. Most consumer coaches sit outside FDA jurisdiction by design (wellness, not medical device). This means:
- No premarket safety/efficacy review.
- No required disclosure of model training data, intended use, error rates.
- Marketing claims are constrained by FTC, not FDA, which is a weaker regime for vague wellness language.

Function Health, Superpower, and similar offer "discuss with your doctor" as the disclaimer for protocol suggestions. Specific supplement recommendations bump up against DSHEA (dietary supplement) constraints; the AI coach format makes it easier to drift into structure-function claims without realizing it.

## Privacy

Health data is among the most sensitive categories. The privacy posture varies:
- Apple HealthKit: data stays on device by default, encrypted in iCloud sync, granular per-app permissioning. Strong.
- Whoop, Oura: data on vendor servers, used to train models (per ToS), shared with third parties per privacy policy. Standard SaaS posture.
- Aggregators (Bevel, Superpower): pull from many sources, expand the attack surface and data-broker exposure proportionally.
- ChatGPT Health: subject to OpenAI's data policies, which permit (with opt-out) using conversations for model training. Potentially the worst posture for sensitive longitudinal health data.
- Self-hosted MCP server (Open Wearables): the data never leaves your machine except in prompts to whichever LLM you choose. Best posture if you trust the LLM provider.

## The placebo and over-engagement problem

Some users develop unhealthy patterns from constant biometric feedback:
- Orthosomnia (anxiety about sleep scores hurting actual sleep).
- Disordered eating from chasing flat glucose curves on a CGM.
- Training avoidance from low Recovery scores creating learned helplessness.
- "Health hypochondria" from over-interpreting marker trends within normal ranges.

The category does not currently warn well about these failure modes. They are particularly common in the high-engagement minority (Oura's daily 20%) that vendors market as success cases.

## Sources

- [AI hallucination rates and benchmarks 2026](https://suprmind.ai/hub/ai-hallucination-rates-and-benchmarks/)
- [The Ghost in the Machine: AI hallucination in clinical practice (Biolife)](https://www.biolifehealthcenter.com/post/the-ghost-in-the-machine-ai-s-hallucination-problem-in-clinical-practice)
- [FDA Oversight of Health AI Tools (Bipartisan Policy Center)](https://bipartisanpolicy.org/issue-brief/fda-oversight-understanding-the-regulation-of-health-ai-tools/)
- [FDA limits oversight of AI health software and wearables (Telehealth.org)](https://telehealth.org/news/fda-clarifies-oversight-of-ai-health-software-and-wearables-limiting-regulation-of-low-risk-devices/)
- [6-device wrist-wearable PSG validation 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12038347/)
- [Oura Ring Gen3 + OSSA 2.0 PSG validation 2024](https://pubmed.ncbi.nlm.nih.gov/38382312/)
- [Oura Ring vs medical-grade sleep studies meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC12602993/)
- [A Call to Address AI Hallucinations in Healthcare (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10552880/)
