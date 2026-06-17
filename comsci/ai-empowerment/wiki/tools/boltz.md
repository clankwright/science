---
id: boltz
title: "Boltz (Boltz-1, Boltz-2)"
kind: tool
vendor: MIT (Boltz-1); MIT + Recursion + NVIDIA (Boltz-2)
access: open weights (MIT license)
maturity: production
cost_tier: free (GPU required)
year_first_public: 2024
last_verified: 2026-05-04
---

# Boltz

> **Summary:** Open-weight, MIT-licensed structure prediction at AlphaFold 3 quality. Boltz-1 (October 2024) matched AF3 on structure prediction. Boltz-2 (June 2025) added binding-affinity prediction at FEP-comparable accuracy and approximately 1000x speed. The combination of open weights, permissive license, and FEP-grade affinity collapses what was a CRO-priced computational chemistry service.

**Sources:** [[raw/amateur-science/boltz-and-open-structure-models.md]], [[raw/amateur-science/ligand-docking-and-drug-discovery.md]]

## What it does

Boltz-1 predicts protein structures and complexes at AlphaFold 3 quality. Boltz-2 extends to binding affinity (the strength with which a small molecule binds a protein), competitive with the previous gold standard (FEP, free-energy perturbation) at a tiny fraction of the compute cost.

## Access and cost

Open weights on GitHub, MIT license. Free to download, run, and use commercially. Requires a 24GB+ GPU for typical inputs; cloud GPU spot pricing applies for larger jobs.

## Distinctive trait

The license. AlphaFold 3 weights are not openly redistributable; Chai-1 weights are non-commercial. Boltz is the only AF3-quality tool with a permissive license and the only one that can ship inside commercial products. Boltz-2's affinity speedup (~1000x vs. FEP) is the practical breakthrough for hit-discovery work at amateur scale.

## Limits

- Local install and GPU procurement is a real barrier for non-technical users.
- Affinity predictions are still predictions; physical assays remain the gold standard.
- Documentation is researcher-grade; community support thinner than commercial tools.

## See also

- [Amateur scientific computing](../capabilities/amateur-scientific-computing.md)
- [AlphaFold Server](alphafold-server.md): hosted alternative; easier but limited.
- ColabFold: free Colab AF2/AF3 access for users without local GPU.
