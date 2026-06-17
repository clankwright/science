---
id: alphamissense
title: "AlphaMissense"
kind: tool
vendor: Google DeepMind
access: open data (CC-BY 4.0)
maturity: production
cost_tier: free
year_first_public: 2023
last_verified: 2026-05-04
---

# AlphaMissense

> **Summary:** Pre-computed pathogenicity scores for every possible missense variant in the human proteome (~71M variants). Released September 2023, CC-BY 4.0 on Zenodo. AlphaMissenseR + DuckDB returns scores in seconds. The rare-disease parent's single highest-leverage tool.

**Sources:** [[raw/amateur-science/ai-for-genomics-and-personal-omics.md]]

## What it does

Returns a 0-1 pathogenicity score for any single-amino-acid substitution in any human protein. Scores were generated once by DeepMind in 2023 and shipped as a static table; querying is just a database lookup, not a model run.

## Access and cost

Free. Download the table from Zenodo (CC-BY 4.0) or query via the AlphaMissenseR R package. Combine with VEP, ClinVar, and gnomAD for full variant context.

## Distinctive trait

It is a table, not a model. No GPU, no API key, no rate limits, no service that can be deprecated. A rare-disease parent receives a variant of uncertain significance from a clinical lab and can have a defensible pathogenicity estimate in 30 seconds.

## Limits

- Missense only. Not for indels, splice variants, copy-number variants, or non-coding variants.
- Scores are predictions; ACMG clinical classification still requires evidence beyond computational scores.
- Trained on 2022 data; ClinVar updates since then are not incorporated.
- The published Performance compared to other in silico predictors is strong but not perfect; do not over-weight a single number.

## See also

- [Amateur scientific computing](../capabilities/amateur-scientific-computing.md)
- [Personal medical AI](../capabilities/personal-medical-ai.md): the bridge from variant score to clinical conversation.
