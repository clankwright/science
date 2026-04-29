---
id: scageclock-2026
title: "scAgeClock: a single-cell transcriptome-based human aging clock model using gated multi-head attention neural networks"
year: 2026
venue: "npj Aging"
url: https://www.nature.com/articles/s41514-026-00379-5
access: open
kind: paper
topics: [aging-clocks, single-cell, transcriptomics, deep-learning]
evidence_tier: T0
endpoint: n/a

---

# scAgeClock: attention-based single-cell aging clock at atlas scale

## Summary
A **gated multi-head attention** neural network trained on **>16M
single-cell transcriptome profiles** spanning **>40 human tissues and
>400 cell types**. Per-cell-type MAE drops to ~2 years for the best
populations. Introduces an **Aging Deviation Index (ADI)** as a per-cell
biomarker and identifies **ribosome / translation / programmed cell death**
gene modules driving the age signal.

## Why it matters
Largest single-cell aging clock to date and the first to apply a
foundation-model-style attention architecture at this scale. Enables
**per-cell-type intervention readouts** that bulk DNA-methylation clocks
cannot give. Sets up the foundation-model framing of
[[papers/longevity-llm-2026]] from the single-cell side.

## Key findings
- Trained on 16M+ scRNA-seq cells across diverse human atlases.
- Per-cell-type MAE as low as ~2 years; aging signal varies sharply
  between cell types.
- **Aging Deviation Index** per cell: continuous biomarker for
  intervention scoring.
- Top age-associated gene modules: ribosome biogenesis, translation,
  programmed cell death.

## Computational leverage
- Drop in as the scoring function for a [[papers/clockbase-agent-2025]]-
  style intervention-discovery loop.
- Combine with [[papers/x-atlas-orion-perturbseq-2025]] (Perturb-seq
  atlas) to score per-cell-type rejuvenation effects of every gene KD.
- Pair with [[papers/scimmuaging-immune-clocks-2025]] for cell-type-
  specific immune comparisons.

## Related
- [[papers/scbayesage-2025]] — earlier Bayesian single-cell clock.
- [[papers/spatial-aging-clocks-brain-2024]] — adds spatial context.
- [[papers/longevity-llm-2026]] — adjacent foundation-model framing.
- [[topics/aging-clocks]], [[topics/single-cell]],
  [[topics/transcriptomics]], [[topics/deep-learning]].
