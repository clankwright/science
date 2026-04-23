---
id: scimmuaging-immune-clocks-2025
title: "Single-cell immune aging clocks reveal inter-individual heterogeneity during infection and vaccination"
year: 2025
venue: "Nature Aging"
url: https://www.nature.com/articles/s43587-025-00819-z
alt_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12003178/
access: open
kind: paper
topics: [aging-clocks, single-cell, immune-rejuvenation, transcriptomics, interpretability, machine-learning, datasets]
---

# scImmuAging: per-cell-type immune aging clocks, longitudinal

## Summary
**Cell-type-specific scRNA-seq aging clocks** for **monocytes, CD4+ /
CD8+ T cells, NK cells, and B cells**. Trained across **1,081 donors,
ages 18–97**. Severe **COVID-19 accelerates monocyte aging** and
**reverses during recovery**. **BCG vaccination causes age
rejuvenation in CD8+ T cells in inflamed individuals** — first
longitudinal demonstration that an aging clock can move backward in
humans on a tractable timescale. Code openly released.

## Why it matters
First **per-cell-type immune aging clock** trained at population scale,
applied to **longitudinal perturbations**. Demonstrates **clock
reversibility** — a precondition for using clocks as intervention
endpoints. Distinct from bulk inflammation clocks
([[papers/epinflammage]]) by giving **cell-type resolution** that
lets you ask "which cells in the immune system aged backwards under
this intervention?"

## Key findings
- Per-cell-type scRNA-seq clocks for monocyte, CD4+ T, CD8+ T, NK, B.
- 1,081 donors, ages 18–97 (largest single-cell aging cohort).
- COVID-19 severity → accelerated monocyte aging; reversible during
  recovery.
- BCG vaccination → CD8+ T-cell rejuvenation in inflamed subjects.
- Open code: github.com/CiiM-Bioinformatics-group/scImmuAging.

## Computational leverage
- Use as the readout for any human intervention with PBMCs collected
  pre / post (very common in trials).
- Compare to [[papers/scageclock-2026]]'s per-cell-type ADI on the same
  tissue; combine cross-tissue.
- Evaluate immune-rejuvenation hits like [[papers/urolithin-a-immune-2025]]
  and [[papers/tpe-ivig-biological-age-rct-2025]] at single-cell
  resolution.

## Related
- [[papers/epinflammage]] — bulk inflammation clock.
- [[papers/scageclock-2026]] — broader single-cell foundation clock.
- [[papers/urolithin-a-immune-2025]] — immune-rejuvenation intervention.
- [[topics/aging-clocks]], [[topics/single-cell]],
  [[topics/immune-rejuvenation]], [[topics/transcriptomics]],
  [[topics/interpretability]], [[topics/machine-learning]],
  [[topics/datasets]].
