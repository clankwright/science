# Clinical and research evidence for AI eldercare interventions

## What it is

A summary of what's actually been measured in 2024-2026 about AI-mediated eldercare, separated honestly from vendor marketing.

## Headline state of evidence

A 2022 systematic review (Liu et al., PMC) of all AI-in-clinical-practice RCTs found **39 RCTs out of 11,839 candidate articles** — 0.33%. Eldercare-specific AI is an even thinner subset. The category is overwhelmingly evidence-poor, dominated by uncontrolled vendor pilots and observational deployments.

A 2025 Innovation in Aging review ("Navigating the future of artificial intelligence technologies for improving the care of older adults") and a May 2025 scoping review on engagement of older adults in AI design (J Gerontol A) both flag the same gaps: (a) older adults rarely involved in design, (b) heterogeneity of older populations not modeled, (c) very few comparative trials.

A July 2025 arXiv paper (2507.14912, "Redefining Elderly Care with Agentic AI: Challenges and Opportunities") is largely speculative; the agentic-AI eldercare research literature is roughly where general-AI eldercare was in 2018.

## What's actually been measured

Reasonable evidence:
- **ElliQ**: NY State Office for the Aging deployment, ~900 participants, 95% reduction in self-reported loneliness at 30+ days, 60 daily interactions average, expanded to FL and NJ. Not RCT, observational, self-report. PMC 2024 paper documents method. Strongest population-scale eldercare-AI evidence to date.
- **Apple Watch fall detection**: PMC ED study (PMID 8519485) and follow-on: detected ~4.7% of all falls (95.3% false negative rate). Catches hard falls reliably, soft falls poorly. Clinically useful but not a substitute for a dedicated PERS for high-risk individuals.
- **PERS broadly**: medical alert devices detect ~80% of falls, ~1 false alarm per 40 hours (older meta).
- **SenseCam for hippocampal amnesia**: small-N case studies (Berry et al., Brindley et al.) showed durable autobiographical recall improvement with regular image review. Strong effect, small studies, didn't generalize past the original research group's clinical population.
- **Companion robots / Paro**: Cochrane-style reviews show small-to-moderate effects on agitation in dementia in institutional settings. Modest, real, well-replicated.
- **Spaced retrieval therapy** (the technique, not the app): substantial evidence base in cognitive rehab, predates AI.

Weak / vendor-only:
- **Sensi.AI** outcome claims (revenue lift, 911 reduction): vendor case studies, no independent replication.
- **Hero adherence**: vendor data shows ~95% adherence among device users; selection bias enormous (people who buy and keep using a $45/month dispenser are not the average elder).
- **Pixel scam detection**: zero published outcome data on actual scam losses prevented. Reasonable mechanistic story; no measured effect size.

Missing entirely:
- RCTs of AI-augmented caregiver coordination platforms vs. usual care.
- Population-level cost-effectiveness studies of any AI eldercare modality.
- Long-term (>1 year) retention and outcome data for almost all consumer products.
- Studies in low-income or non-English-speaking older populations.

## AARP and AgeTech Collaborative

AARP runs the AgeTech Collaborative, ~700 member companies, with annual visibility at CES. AARP publishes consumer surveys (the most-cited: AI use among 50+ doubled from 18% in 2024 to 30% in 2025; older adults most interested in AI health monitoring and AI-assisted health questions). AARP Innovation Labs funds and tests products but does not run RCTs. The relationship with AARP is more "industry consortium and consumer trust signal" than "clinical evidence body."

## Specific unlocks (research-side)

- An 80%-likely UTI detection from voice + pattern data alone — the kind of preventive signal the geriatrics literature has wanted since the 1990s but never had a sensor stack to deliver — is now technically feasible and being piloted (Sensi-style ambient).
- LLMs translate caregiver notes from any language to the visiting-nurse's chart language, eliminating a documented quality-of-care barrier in immigrant-heavy elder cohorts.
- Population-scale loneliness intervention measurable for the first time, because ElliQ-style devices log every interaction. Pre-AI, "did your loneliness program work?" was a survey artifact.

## Pre-AI baseline

Eldercare evidence has historically been thin overall — geriatrics is undertrialed because the population is heterogeneous, comorbid, and hard to consent through cognitive change. AI eldercare is inheriting all those problems plus tech-industry's habit of declaring victory from pilot data.

## Cost / access

Free (most of these reviews are open-access).

## Maturity

The clinical evidence base is roughly at the maturity of digital health pre-2015 — lots of activity, few rigorous studies. The 2024-2026 expectation: NIH and CMS are starting to fund RCTs of AI-assisted home care; first results expected 2027-2028.

## Sources
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9459941/
- https://academic.oup.com/innovateage/article/9/Supplement_1/S24/8263970
- https://academic.oup.com/biomedgerontology/article/80/5/glaf024/8002957
- https://arxiv.org/abs/2507.14912
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8979827/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10917141/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8519485/
- https://www.prnewswire.com/news-releases/the-agetech-collaborative-from-aarp-leads-ces-2026-with-visionary-look-at-how-ai-will-shape-the-future-of-aging-302648017.html
- https://aging.ny.gov/news/nysofas-rollout-ai-companion-robot-elliq-shows-95-reduction-loneliness
