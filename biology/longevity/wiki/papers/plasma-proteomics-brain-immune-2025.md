---
id: plasma-proteomics-brain-immune-2025
title: "Plasma proteomics links brain and immune system aging with healthspan and longevity"
year: 2025
venue: "Nature Medicine"
url: https://www.nature.com/articles/s41591-025-03798-1
alt_url: https://www.biorxiv.org/content/10.1101/2024.06.07.597771v1
access: gated
kind: paper
topics: [aging-clocks, proteomics, organ-specific, uk-biobank, brain-rejuvenation, immune-rejuvenation]
evidence_tier: T1
endpoint: n/a

---

# Brain and immune proteomic ages predict healthspan in 44k UKB participants

## Summary
Proteomic biological ages of **11 organs** in **44,498 UK Biobank**
participants. Brain and immune-system proteomic ages emerge as the
**strongest predictors of healthspan and longevity**, beyond clinical and
genetic risk factors. Organ-age estimates respond to lifestyle and
medications, and predict onset of heart failure, COPD, type 2 diabetes,
and Alzheimer's disease.

## Why it matters
Complements [[papers/organ-proteomic-clocks-2025]] (a separate group's
parallel UKB analysis) by zooming in on **brain and immune** as the
load-bearing organs for healthspan. Together they provide independent
confirmation that organ-resolved proteomic clocks beat single
whole-body biological-age clocks for prognosis.

## Key findings
- **Brain age** is the strongest single mortality predictor among 11
  organ clocks.
- **Immune age** is the second strongest; both are sensitive to
  lifestyle and pharmacology.
- Organ ages predict future onset of heart failure, COPD, T2D, and
  Alzheimer's disease.
- Identifies subgroups with **exceptionally young brain proteomic age**
  who are **resilient even when carrying APOE4** — points to modifiable
  brain-aging trajectories.

## Computational leverage
The Olink panel and the proteomic-age model are public; a CS
contributor can:
- Re-train the brain / immune clocks with deep-learning architectures
  ([[papers/scageclock-2026]]-style).
- Use the longitudinal organ-age trajectory as the response variable
  for an intervention-effect estimator.

## Related
- [[papers/organ-proteomic-clocks-2025]] — parallel UKB organ-clock
  analysis.
- [[papers/ukb-nmr-metabolomic-2024]] — UKB metabolomic-age cohort.
- [[papers/scimmuaging-immune-clocks-2025]] — single-cell view of
  immune aging.
- [[topics/aging-clocks]], [[topics/proteomics]],
  [[topics/organ-specific]], [[topics/uk-biobank]],
  [[topics/brain-rejuvenation]], [[topics/immune-rejuvenation]].
