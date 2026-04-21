---
id: index
title: "Longevity Research — Knowledge Tree"
---

# Longevity Research — Knowledge Tree

Knowledge base of computational entry points into longevity and
reverse-aging research for a CS person. Karpathy-style:
markdown-as-source, wikilinks, linting, and indexed querying.

## Grok the field

A reading path to orient someone new to computational longevity.
Follow in order; each step assumes the previous one.

### 1. What aging is
- [[topics/aging-research]]: umbrella, full topic map.
- [[topics/hallmarks-of-aging]]: the canonical framework the
  rest of the field cites.
- [[papers/ai-aging-review-2026]]: modern survey of how
  computation meets aging biology.

### 2. How we measure it
- [[topics/biomarkers-of-aging]]: what "biological age" means
  operationally.
- [[topics/aging-clocks]]: epigenetic, transcriptomic, proteomic,
  metabolomic clocks and their tradeoffs.
- [[papers/nc-2025-14clocks]]: head-to-head comparison of 14
  clocks on the same cohort.
- [[papers/hcpb-review-2024]]: review of clock design choices
  and validation.

### 3. What we intervene with
- [[topics/reprogramming]] (umbrella) then
  [[topics/partial-reprogramming]], [[topics/chemical-reprogramming]],
  [[topics/yamanaka]]: most active rejuvenation avenue.
- [[topics/senolytics]]: clearance of senescent cells; the most
  clinically advanced class.
- [[topics/parabiosis-blood-factors]]: young blood, CSF, plasma
  fractions; [[papers/pedf-parabiosis-2024]] and
  [[papers/fgf17-young-csf-2022]] are the anchor results.
- [[topics/caloric-restriction]]: [[papers/dr-960-mice-nature-2024]]
  is the flagship DO-mouse study.
- [[topics/mtor]], [[topics/nad-mitophagy]],
  [[topics/gene-therapy]], [[topics/telomeres]],
  [[topics/exosomes-extracellular-vesicles]],
  [[topics/immune-rejuvenation]],
  [[topics/brain-rejuvenation]]: the rest of the intervention space.

### 4. Evidence pipelines
- [[topics/itp-mice]] then [[papers/itp-nia]] and
  [[papers/itp-mpd-portal]]: the NIH Interventions Testing
  Program, gold-standard mouse lifespan data.
- [[topics/uk-biobank]]: human-scale cohort behind most large
  clock training sets.
- [[topics/clinical-trials]], [[topics/benchmarks]]: how
  interventions graduate from models to humans.

### 5. Where the field is now
- [[analysis/promising-reverse-aging]]: tier ranking of current
  reverse-aging technologies (April 2026). Read this after you
  have the topic vocabulary from steps 1 through 4.
- [[topics/competitions]]: [[papers/biomarkers-aging-challenge]],
  [[papers/xprize-healthspan]]. Active coordinated efforts that
  reveal what the field believes is close to tractable.

### 6. Computational leverage points
- [[topics/deep-learning]], [[topics/machine-learning]],
  [[topics/interpretability]]: model classes used across clocks
  and interventions.
- [[topics/drug-repurposing]], [[topics/drug-discovery]],
  [[topics/cheminformatics]]: intervention search from existing
  compound libraries.
- [[topics/network-medicine]], [[topics/pathway-analysis]]:
  graph-level views that connect interventions to hallmarks.
- [[topics/single-cell]], [[topics/transcriptomics]],
  [[topics/proteomics]], [[topics/metabolomics]],
  [[topics/epigenetics]]: the data modalities clocks sit on top of.

## Topic index

### Measurement
- [[topics/aging-clocks]], [[topics/biomarkers-of-aging]],
  [[topics/disease-prediction]]

### Methods / modelling
- [[topics/deep-learning]], [[topics/machine-learning]],
  [[topics/cheminformatics]], [[topics/network-medicine]],
  [[topics/interpretability]], [[topics/pathway-analysis]],
  [[topics/single-cell]]

### Biology / data domain
- [[topics/hallmarks-of-aging]], [[topics/epigenetics]],
  [[topics/proteomics]], [[topics/metabolomics]],
  [[topics/transcriptomics]], [[topics/inflammation]],
  [[topics/organ-specific]]

### Rejuvenation / age reversal
- [[topics/reprogramming]] (umbrella)
  - [[topics/partial-reprogramming]]
  - [[topics/chemical-reprogramming]]
  - [[topics/yamanaka]]
- [[topics/senolytics]]
- [[topics/parabiosis-blood-factors]]
- [[topics/brain-rejuvenation]]
- [[topics/nad-mitophagy]]
- [[topics/gene-therapy]]
- [[topics/telomeres]]
- [[topics/exosomes-extracellular-vesicles]]
- [[topics/stem-cells]]
- [[topics/immune-rejuvenation]]
- [[topics/mtor]]
- [[topics/caloric-restriction]]

### Interventions / discovery
- [[topics/interventions]], [[topics/drug-repurposing]],
  [[topics/drug-discovery]]

### Cohorts / resources
- [[topics/uk-biobank]], [[topics/itp-mice]], [[topics/datasets]]

### Evaluation
- [[topics/benchmarks]], [[topics/competitions]],
  [[topics/clinical-trials]], [[topics/disease-prediction]],
  [[topics/lifespan]], [[topics/sex-specific]], [[topics/safety]]

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
