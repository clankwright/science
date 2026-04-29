---
id: spatial-aging-clocks-brain-2024
title: "Spatial transcriptomic clocks reveal cell proximity effects in brain ageing"
year: 2024
venue: "Nature 638"
url: https://www.nature.com/articles/s41586-024-08334-8
alt_url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11798877/
access: open
kind: paper
topics: [aging-clocks, single-cell, brain-rejuvenation, transcriptomics, interpretability, machine-learning, organ-specific]
evidence_tier: T1
endpoint: n/a

---

# First spatial aging clock — and a "T cell shadow" on the aging brain

## Summary
Brunet / Rando / Zou (Stanford). **Spatial transcriptomic aging clocks**
trained across **4.2 million brain cells** spanning the mouse lifespan,
**preserving spatial coordinates**. Two large findings:
- **T cells exert a pro-aging proximity effect** on neighbouring cells
  (STAT1-mediated).
- **Neural stem cells exert a pro-rejuvenating proximity effect**
  (CD9 / CPT1A pathway).

## Why it matters
First spatial aging clock published. Moves the field from "what's the
biological age of this organ?" to "**what's the biological age of this
cell, given its neighbours?**" — a step change in resolution. Enables
intervention readouts at sub-tissue scale and identifies **cell-cell
interactions that drive aging** rather than just correlate with it.

## Key findings
- 4.2M-cell mouse brain spatial atlas across the lifespan.
- **Spatial aging clock** has lower per-cell error than non-spatial
  baselines because neighbour identity is informative.
- **T cell shadow**: aged T cells infiltrating the brain accelerate
  aging in nearby cells via STAT1 signalling.
- **NSC halo**: neural stem cells reduce aging score in nearby cells
  via CD9 / CPT1A.
- Together imply that **clearing T cells** and **boosting NSC niche
  signalling** are both legitimate intervention targets.

## Computational leverage
- Adapt the spatial-clock architecture to other tissues (muscle, gut,
  skin) with existing Visium / MERFISH atlases.
- Use the cell-proximity score as the readout for a
  [[papers/clockbase-agent-2025]]-style intervention search.

## Related
- [[papers/scageclock-2026]] — non-spatial single-cell foundation
  clock.
- [[papers/scbayesage-2025]] — Bayesian single-cell clock.
- [[papers/scimmuaging-immune-clocks-2025]] — single-cell immune
  clocks.
- [[papers/fgf17-young-csf-2022]] — single-factor brain rejuvenation
  precedent.
- [[topics/aging-clocks]], [[topics/single-cell]],
  [[topics/brain-rejuvenation]], [[topics/transcriptomics]],
  [[topics/interpretability]], [[topics/machine-learning]],
  [[topics/organ-specific]].
