---
id: esm-protein-model
title: "ESM Protein Biology World Model"
kind: tool
vendor: Arc/Biohub (EvolutionaryScale / ESM lineage)
access: free
maturity: production
cost_tier: free
year_first_public: 2026
last_verified: 2026-06-17
---

# ESM Protein Biology World Model (ESMC + ESMFold2 + ESM Atlas)

> **Summary:** Open, free platform combining ESMC (a protein language model trained on 2.8B sequences), ESMFold2 (structure prediction for proteins and complexes), and ESM Atlas (a searchable 6.8B-sequence database). Predicts 3D structure and designs functional protein binders demonstrated to work in the lab. Released May 2026 by Arc/Biohub.

**Sources:** [[raw/2026-06-update/esm-protein-world-model.md]]

## What it does

A single platform for the protein-design loop: search evolutionary space (Atlas, 6.8B sequences), predict structure of proteins and complexes (ESMFold2), and design therapeutic-affinity binders against a target. Outputs include lab-validated functional binders.

## Access and cost

Free and open to the global scientific community via the Biohub Platform; web access plus the searchable atlas. No enterprise gate or license fee.

## What changed

Covered tools split the workflow: [AlphaFold Server](alphafold-server.md) and [Boltz](boltz.md) for structure, [RFdiffusion](rfdiffusion.md) for design. ESM ships high-accuracy structure prediction and binder design together in one free, open model with an evolutionary atlas.

## Individual empowerment

A solo or amateur researcher can predict structures and design working binders against a target for free, without a lab team's compute budget or licensed software.

## Limits

- Wet-lab validation is still required; in-silico binder design is a starting point, not a finished therapeutic.
- Dual-use risk applies (same concern flagged for [RFdiffusion](rfdiffusion.md)).

## See also

- [Amateur scientific computing](../capabilities/amateur-scientific-computing.md)
- [AlphaFold Server](alphafold-server.md), [Boltz](boltz.md), [RFdiffusion](rfdiffusion.md): the single-purpose tools it consolidates.
