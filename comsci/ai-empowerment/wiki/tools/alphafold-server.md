---
id: alphafold-server
title: "AlphaFold Server (AlphaFold 3)"
kind: tool
vendor: Google DeepMind / Isomorphic Labs
access: free hosted (rate-limited)
maturity: production
cost_tier: free
year_first_public: 2024
last_verified: 2026-05-04
---

# AlphaFold Server (AlphaFold 3)

> **Summary:** Free hosted AlphaFold 3 covering proteins, nucleic acids, ligands, ions, and post-translational modifications. 20 jobs per day per account, 5,000-token cap per job. The default starting point for any structure question; for the rare-disease parent or amateur biochemist, the single most-used scientific AI tool.

**Sources:** [[raw/amateur-science/alphafold-3-and-structure-prediction.md]]

## What it does

Submit a protein sequence (with optional partners: another protein, DNA/RNA, ligand, ion, modification). Returns a 3D structure prediction with per-residue confidence (pLDDT) and inter-chain confidence (iPTM). Results cover most novel single-chain proteins and many complexes.

## Access and cost

Free with a Google account. 20 predictions per day per account. 5,000-token cap per prediction. No commercial API.

## Distinctive trait

AlphaFold 3's expansion beyond protein-only structures (DNA, RNA, ligands, ions, PTMs in one model) is the major advance over AlphaFold 2. For an amateur, the cost of getting an AF3-quality complex prediction collapsed from "impossible without an institution" to "submit a form."

## Limits

- No API. Browser submissions only. Painful for batch workflows.
- 5,000-token cap excludes large complexes.
- Commercial use restricted; Google's terms govern.
- Disordered regions and conformational ensembles still poorly handled.
- Predicted structure is not equivalent to experimental structure for variant interpretation; treat as a hypothesis.

## See also

- [Amateur scientific computing](../capabilities/amateur-scientific-computing.md)
- [Boltz](boltz.md): MIT-licensed alternative; runs locally; better for batch.
- [AlphaMissense](alphamissense.md): pre-computed scores; the right tool when you want a number, not a structure.
