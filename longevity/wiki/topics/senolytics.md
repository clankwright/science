---
id: topic-senolytics
topic: senolytics
---

# Senolytics

Compounds that selectively kill senescent cells.

## ML-native discovery
- [[papers/smerbarreto2023-senolytics]] — Smer-Barreto 2023, *Nat Commun*;
  three validated hits (ginkgetin, periplocin, oleandrin) from <60
  training positives
- [[papers/senolytic-predictor-2025]] — 2025 MDPI follow-up with
  MoLFormer embeddings; 98 DrugBank + 714 TCMbank candidates

## Open problems
- Transfer from small labelled sets to foundation-model embeddings
  (MolE, Uni-Mol2, ChemBERTa-2)
- Natural-product prioritization
- Mechanism-aware scoring (does it kill a given senescence subtype?)

## Adjacent
- [[topics/drug-discovery]], [[topics/cheminformatics]]
- [[papers/network-repurposing-aging]] — orthogonal drug-repurposing
  approach
