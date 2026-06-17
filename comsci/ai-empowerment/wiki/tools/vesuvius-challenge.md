---
id: vesuvius-challenge
title: "Vesuvius Challenge"
kind: tool
vendor: Vesuvius Challenge (Friedman, Gross, Seales)
access: open competition / open-source
maturity: production (research artifacts)
cost_tier: free (compute costs apply)
year_first_public: 2023
last_verified: 2026-05-04
---

# Vesuvius Challenge

> **Summary:** Open prize competition that successfully read sealed AD 79 Herculaneum scroll passages for the first time in 2,000 years. $1.7M paid out by mid-2026, including the $700K grand prize to Nader, Farritor, and Schilliger in February 2024. Open-source code, open-source data; the template for AI-driven solutions to "impossible" problems.

**Sources:** [[raw/investigation-osint-genealogy/historical-document-deciphering.md]]

## What it does

Releases CT-scan data of carbonized scrolls plus open prizes for incremental and grand-prize milestones. Contestants train models that segment papyrus layers in 3D, detect ink residue invisible to the human eye, and produce readable text overlays. Winners' code is open-sourced as a condition of the prize.

## Access and cost

Open: anyone can download data and submit. Prize money plus the resulting code base is the asset; running the pipeline at home requires GPU compute.

## Distinctive trait

The first sustained example of an AI-driven open competition reading a sealed historical artifact. Pre-AI, the only options for sealed scrolls were physical unrolling (destroys the scroll) or wait. The model is being studied for replication on other "impossible" archaeology problems.

## Limits

- Niche (the immediate corpus is the Herculaneum library, finite).
- Compute and segmentation pipeline is non-trivial; not turn-the-crank for amateurs.
- Translations from the read passages are still in progress as of mid-2026.

## See also

- [Investigation, OSINT, and genealogy](../capabilities/investigation-and-genealogy.md)
- DeepMind Aeneas (Nature, February 2026): adjacent tool for Latin epigraphy restoration.
