# Boltz, ColabFold, ESMFold, RoseTTAFold All-Atom: Open-Weight Structure Models

## What it is

The set of open-weight biomolecular structure prediction models that an individual can run locally or in a free Colab notebook without DeepMind's gating: Boltz-1 (MIT Jameel Clinic, Dec 2024) and Boltz-2 (MIT + Recursion + NVIDIA, June 2025) for AlphaFold 3-class joint structure and binding affinity prediction; RoseTTAFold All-Atom (Baker lab, Science Mar 2024) for proteins + nucleic acids + small molecules + metals + covalent modifications; ESMFold (Meta, 2022) for fast single-sequence prediction; ColabFold (Steinegger lab) as the long-running free Colab harness around AlphaFold 2 / RoseTTAFold / ESMFold / OmegaFold.

## Specific unlocks

- Run AlphaFold 3-quality structure prediction on a 24 GB consumer GPU at home, with no daily cap and no commercial-use restriction (Boltz-2, MIT license).
- Predict binding affinity of a candidate small molecule against a target protein in seconds rather than the 1000x slower physics-based FEP that previously required a chemistry-aware HPC user (Boltz-2 specifically advertises FEP-comparable accuracy at 1000x speedup).
- Use ESMFold for single-sequence prediction with no MSA at all, e.g., for orphan proteins, viral proteins from a new outbreak, or designed sequences with no homologs; ~60x faster than AF2.
- Fold a protein-DNA or protein-RNA complex with covalent modifications and metals (RoseTTAFold All-Atom) without the AlphaFold 3 token cap or web-only restriction.
- Hand a Colab link to a non-coder collaborator and have them fold a sequence in a browser tab without installing anything (ColabFold).
- Build a screening pipeline: enumerate 10K candidate ligands, score each with Boltz-2 affinity, rank, send the top 50 to wet-lab partners.

## Pre-AI baseline

Folding even a single 200-residue protein required CASP-class infrastructure pre-2021. Joint protein + small molecule + nucleic acid prediction had no general-purpose tool; you composed AutoDock + homology models + manual energy minimization in Rosetta, with weeks per case and a structural biology PhD to interpret. Binding affinity required FEP on a cluster for days per ligand.

## Hardware / cost

- ColabFold: free Colab tier, single small protein at a time. Colab Pro ($10/mo) for longer runs.
- ESMFold: ~10 GB VRAM for a 1000-residue protein. Runs on a 4090.
- Boltz-1: ~24 GB VRAM is comfortable. Repository at github.com/jwohlwend/boltz, MIT license.
- Boltz-2: heavier; available as NVIDIA NIM container, on Rowan's web service, or local with high-memory GPU.
- RoseTTAFold All-Atom: open weights, github.com/baker-laboratory/RoseTTAFold-All-Atom; ~24-48 GB for typical jobs.

## License differences

| Model | License | Commercial use |
|-------|---------|----------------|
| AlphaFold 3 weights | Closed | Isomorphic only |
| AlphaFold Server | Free, NC | No |
| Boltz-1 / Boltz-2 | MIT | Yes |
| RoseTTAFold All-Atom | Permissive (BSD-style) | Yes |
| ESMFold | MIT | Yes |
| ColabFold | MIT (wrapper) | Yes (subject to underlying model) |

This is the key amateur unlock: the open-weight models close most of the AF3 capability gap while removing daily caps, token caps, and commercial restrictions.

## Maturity

- Boltz-1: production for protein-only and protein-ligand; binding affinity is Boltz-2's contribution.
- Boltz-2: still bedding in (released mid-2025); FEP-comparable claims are benchmark-true but cherry-pickable.
- ESMFold: production but loses ~5-10 percentage points of GDT vs AF2 on hard targets.
- RoseTTAFold All-Atom: production for the all-atom regime; computationally heavier than ColabFold-AF2.
- ColabFold: production; the standard amateur entry point since 2022.

## Sources

- https://github.com/jwohlwend/boltz
- https://news.mit.edu/2024/researchers-introduce-boltz-1-open-source-model-predicting-biomolecular-structures-1217
- https://www.biorxiv.org/content/10.1101/2024.11.19.624167v1
- https://ir.recursion.com/news-releases/news-release-details/mit-and-recursion-release-boltz-2-next-generation-ai-model
- https://github.com/sokrypton/ColabFold
- https://www.nature.com/articles/s41592-022-01488-1 (ColabFold, Nature Methods)
- https://www.science.org/doi/10.1126/science.adl2528 (RoseTTAFold All-Atom)
- https://github.com/baker-laboratory/RoseTTAFold-All-Atom
