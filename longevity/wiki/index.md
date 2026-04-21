---
id: index
title: "Longevity Research — Knowledge Tree"
---

# Longevity Research — Knowledge Tree

Knowledge base of computational entry points into longevity research for
a CS person. Inspired by Karpathy-style workflows: markdown-as-source,
wikilinks, linting, and indexed querying.

## Start here
- [[topics/aging-research]] — umbrella
- [[topics/biomarkers-of-aging]] — what a biomarker *is* in this field
- [[topics/aging-clocks]] — models that eat biomarkers

## Highest-leverage projects
- **SHARP × ITP validation** — cross-check drug repurposing hits from
  [[papers/network-repurposing-aging]] against mouse lifespan data at
  [[papers/itp-mpd-portal]].
- **Biomarkers of Aging Challenge Phase 3** — active competition
  ([[papers/biomarkers-aging-challenge]]).

## Topic index
### Methods / modeling
- [[topics/aging-clocks]], [[topics/deep-learning]],
  [[topics/machine-learning]], [[topics/cheminformatics]],
  [[topics/network-medicine]], [[topics/interpretability]],
  [[topics/pathway-analysis]]

### Biology / data domain
- [[topics/biomarkers-of-aging]], [[topics/epigenetics]],
  [[topics/proteomics]], [[topics/metabolomics]],
  [[topics/transcriptomics]], [[topics/hallmarks-of-aging]],
  [[topics/partial-reprogramming]], [[topics/yamanaka]],
  [[topics/inflammation]], [[topics/organ-specific]],
  [[topics/senolytics]]

### Interventions
- [[topics/drug-repurposing]], [[topics/drug-discovery]],
  [[topics/interventions]], [[topics/caloric-restriction]],
  [[topics/lifespan]], [[topics/sex-specific]]

### Cohorts / resources
- [[topics/uk-biobank]], [[topics/itp-mice]], [[topics/datasets]]

### Evaluation
- [[topics/benchmarks]], [[topics/competitions]],
  [[topics/disease-prediction]]

### Syntheses
- [[topics/review]]

## All papers
See `wiki/papers/` — one file per source, enumerated in
`sources.json` at the project root.

## Tooling
- `scripts/download.py` — pull sources into `sources/{html,pdf}/`
  (requires unrestricted network egress).
- `scripts/convert.py` — HTML/PDF → markdown in `sources/md/`.
- `scripts/index.py` — build TF-IDF + keyword index over the wiki
  into `wiki/build/`.
- `scripts/lint.py` — check broken wikilinks, missing metadata,
  orphan pages, sources.json ↔ wiki consistency.
