---
id: x-atlas-orion-perturbseq-2025
title: "X-Atlas/Orion: genome-wide Perturb-seq datasets via a scalable fix-cryopreserve platform for training dose-dependent biological foundation models"
year: 2025
venue: "bioRxiv 2025.06.11.659105 (Xaira Therapeutics)"
url: https://www.biorxiv.org/content/10.1101/2025.06.11.659105v1
alt_url: https://huggingface.co/datasets/Xaira-Therapeutics/X-Atlas-Orion
access: open
kind: paper
topics: [single-cell, datasets, drug-discovery, deep-learning, machine-learning, transcriptomics, benchmarks]
evidence_tier: T0
endpoint: n/a

---

# X-Atlas / Orion: largest public Perturb-seq atlas

## Summary
Xaira Therapeutics releases **X-Atlas / Orion**, the **largest public
Perturb-seq atlas to date**: **8M cells**, **all human protein-coding
genes**, **~16,000 UMIs/cell**. Built on a new **Fix-Cryopreserve-
ScRNAseq (FiCS)** platform that enables industrial-scale single-cell
perturbation screening. **Dose-dependent gene-effect detection** via
sgRNA-abundance stratification. Released as a training resource for
**biological foundation models**, including those targeting aging
interventions.

## Why it matters
The training-data bottleneck for "virtual cell" / aging-intervention
foundation models. Existing Perturb-seq atlases (Replogle, JUMP-Cell
Painting) are smaller and not aging-curated; X-Atlas/Orion at 8M cells
genome-wide is the new ceiling. Pairs naturally with single-cell aging
clocks ([[papers/scageclock-2026]], [[papers/scimmuaging-immune-clocks-2025]],
[[papers/spatial-aging-clocks-brain-2024]]) for **in silico screening of
every protein-coding gene as a rejuvenation target**.

## Key findings
- 8M-cell Perturb-seq atlas; full human protein-coding gene coverage.
- ~16,000 UMIs / cell — high enough resolution for downstream clock
  scoring.
- FiCS platform fixes and cryopreserves cells before scRNA-seq,
  industrialising the workflow.
- sgRNA-abundance stratification gives dose-dependent gene effects
  (not just on/off).
- Public dataset (HuggingFace) + a new "virtual cell" model trained
  on it.

## Computational leverage
- The largest single accessible substrate for training aging-aware
  perturbation foundation models.
- Re-score every perturbation through any aging clock to rank genes
  by rejuvenation potential ([[papers/clockbase-agent-2025]]
  pattern, but at genome-wide scale).
- Cross with [[papers/network-repurposing-aging]] / [[papers/agextend-2025]]
  for drug-target mapping.

## Related
- [[papers/clockbase-agent-2025]] — autonomous-agent precedent for
  re-scoring perturbations.
- [[papers/scageclock-2026]] — scoring function candidate.
- [[papers/singular-rejuv-atlas-2024]] — earlier rejuvenation-strategy
  atlas.
- [[topics/single-cell]], [[topics/datasets]],
  [[topics/drug-discovery]], [[topics/deep-learning]],
  [[topics/machine-learning]], [[topics/transcriptomics]],
  [[topics/benchmarks]].
