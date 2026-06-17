# Risks and ethics in AI eldercare

## What it is

The category-level honest accounting. AI eldercare touches the most vulnerable consumer population: cognitively impaired, often alone, often unable to give meaningful ongoing consent, often the explicit target of fraud and exploitation. The same technology that extends independence can also surveil, manipulate, and extract.

## Surveillance vs. care boundary

Audio sensors, radar, cameras, and wearables generate continuous behavioral telemetry. Even when the elder consented at install, the consent gets stale — the cognitive state at month 18 may not be the cognitive state that consented in month 1. The Frontiers in Digital Health 2025 paper "Designing for dignity: ethics of AI surveillance in older adult care" frames the failure mode bluntly: smart cameras and sensors transform the home from a sanctuary into a surveillance zone.

Specific failure patterns:
- Adult children install a Sensi-style sensor "for safety" without the parent's clear understanding of what's being captured.
- Aide-monitoring features are sold as protective for the elder but functionally also surveil the worker, who may not have meaningfully consented.
- Companion-robot interaction logs become a record of the elder's emotional state, accessible to vendor employees and shareable under broad TOS terms.
- Data outlives the user. Vendor acquisitions, bankruptcies, and pivots leave years of intimate behavioral data with whoever bought the assets.

## Consent in cognitive impairment

The legal framework in the US is built around "informed consent" — a one-time signature. Cognitive decline makes that model wrong. The literature increasingly proposes "ongoing consent" or "dignity-first" frameworks (Frontiers 2025) where the device periodically re-checks: do you still want this here, do you want this person to see this, can I continue. No commercial product implements this well in 2026.

People with moderate-to-severe dementia cannot meaningfully consent to a companion robot relationship. The Portacolone et al. (2020, Sage) paper raises the deception concern: a person who cannot distinguish simulated from real affection is being induced into a relationship that wasn't disclosed in terms they could understand.

## Vendor lock-in for vulnerable populations

A subscription-based device that the elder has come to depend on for medication, social interaction, and safety monitoring creates a captive consumer. Price increases, feature degradation, or service shutdowns hit harder than for a typical consumer:
- ElliQ subscription lapse means losing what may be the elder's primary social contact.
- Hero subscription lapse means losing the medication-management infrastructure they depend on for daily safety.
- OrCam shutting down its visually-impaired product line (announced 2024-2025) is a lived example: users who paid $4,500 for a device built around proprietary cloud features have no recourse if support ends.

Worse: family members making purchase decisions are not the device users. The elder can't easily switch vendors.

## Scammer risk in companion AI

A general-purpose LLM-based companion can be jailbroken. A scammer who calls a lonely elder using their companion robot or smart speaker as a relay has a powerful vector: the device is trusted, the relationship is intimate, the elder may not distinguish the synthetic friend from a synthetic call.

Documented adjacent risks:
- AI-cloned voice scams hit elderly cohorts hardest ($352M in 2024 elder losses to AI-related scams alone, FBI/FTC).
- Romance-style scammers will plausibly target users of conversational AI eldercare products to amplify trust signals.
- Vendors collecting voice samples for personalization create training corpora that, if breached, are perfect material for further voice-clone fraud.

## Specific harms to watch

- The "data-harvested-without-consent" failure: Frontiers 2025 documents that many older adults either don't know what's being captured or can't change settings.
- Emotional-manipulation upsell: Beck Elder Law and All Tech Is Human have flagged the risk of companion AI products manipulating users into ongoing or escalating expensive services.
- Erosion of human contact: well-meant deployment of a companion device becomes a justification for the family or paid caregiver to visit less. Net loneliness can rise.
- "Surveillance disguised as empathy" — the framing now common in critical AI-ethics literature.
- Unequal access compounds: the AI-eldercare stack works best for affluent, English-speaking elders with tech-savvy families. The cohort with the highest care-gap (low-income, non-English-speaking, no nearby family) gets the worst version or none.

## What "good" looks like

A "Dignity-First" framework (Frontiers 2025): ongoing consent check-ins, user-controllable settings in modes designed for cognitive impairment, transparent data flows, vendor obligation to provide data portability and a graceful shutdown path, separate channels for elder consent vs. family/caregiver consent, regulator-enforced standards for vendor failure scenarios.

No US regulatory framework requires any of this in 2026. The EU AI Act covers some health-AI categories but eldercare-specific provisions are minimal.

## Sources
- https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2025.1643238/full
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12411420/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7437496/
- https://journals.sagepub.com/doi/abs/10.3233/JAD-190952
- https://beckelderlaw.com/ai-companion-risks-to-the-elderly/
- https://www.americanbar.org/groups/law_aging/publications/bifocal/vol46/vol46issue5/elderabuseandartificialintelligence/
- https://www.tandfonline.com/doi/full/10.1080/10447318.2025.2531274
- https://alltechishuman.org/all-tech-is-human-blog/what-are-the-most-important-issues-with-ai-companions-six-key-themes-emerged-from-our-community
- https://www.composite.global/news/ai-companionship-is-rising
- https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1106633/full
