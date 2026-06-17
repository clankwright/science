# Ligand Docking, Chai-1, DiffDock, and Amateur Drug Discovery

## What it is

Tools that predict where and how a small molecule binds a protein, enabling an individual to take a SMILES string for a candidate drug and a protein target and produce a ranked set of binding poses with confidence scores. Key tools: Chai-1 (Chai Discovery, Sept 2024, AF3-class joint structure prediction with optional restraints), DiffDock and DiffDock-L (MIT, diffusion-based pose sampling), AutoDock Vina (long-running physics-based gold standard), and hybrid pipelines that use ML for pose sampling and Vina/Gnina/RTMScore for scoring.

## Specific unlocks

- A rare-disease parent can pull GABA, vigabatrin, tiagabine SMILES from PubChem, dock each against an AlphaFold or Boltz-1 prediction of their child's mutant SLC6A1 transporter, and inspect whether known therapeutic ligands still pose plausibly. Output: a structured note for the next neurology appointment, not a treatment decision.
- Run a 10K-compound virtual screen on a 24 GB GPU using DiffDock-L for pose sampling and Vina or RTMScore for rescoring, in a few days. Pre-2023 this was a wet-lab-funded project; the ML-based sampler removes the need for handcrafted Vina grids per target.
- Use Chai-1 in single-sequence mode (no MSA needed, unlike AF2/3) to fold + dock at the same time on a target with no known homologs, e.g., a designed protein or a viral protein from a brand-new outbreak.
- Add experimental restraints (e.g., known mutational hotspots from the literature) into Chai-1 and pick up double-digit accuracy improvements. This is the sort of thing only a structural biologist could exploit before; now a literate amateur can encode "residue 47 is in the binding pocket per Smith 2019" as a restraint.
- Web-only Chai-1 access is free for both research and commercial drug-discovery use; the Python package is non-commercial only.

## Pre-AI baseline

Pre-2018 docking required AutoDock or Glide, hand-curated grid boxes per target, manual ligand prep (Gasteiger charges, ring conformers), and expert pose triage. Per-target setup: hours to days. Post-2023 ML samplers (DiffDock-L, Chai-1) handle the geometric prior end-to-end, dropping setup to minutes per target. AlphaFold removed the upstream "we don't have a structure" blocker.

## Hardware / cost

- Chai-1 web: free, browser, both NC and commercial.
- Chai-1 Python: github.com/chaidiscovery/chai-lab, NC license. ~24 GB VRAM.
- DiffDock-L: open source, available locally and via Neurosnap web. ~16 GB VRAM.
- AutoDock Vina: free, runs on CPU, decades-old workhorse.
- Boltz-2: commercial-friendly affinity prediction without docking per se.

## Maturity

- Chai-1: production; outperforms AlphaFold-Multimer on DockQ (69.8% vs 67.7%) and PoseBusters (77% vs 76% AF3).
- DiffDock-L: production but pair with a physics-based scorer; raw DiffDock-L is competitive on DUDE-Z but not a full virtual screen replacement.
- Hybrid ML+Vina: emerging best practice in 2025 literature.

## Realistic limits for a rare-disease parent

- A docked pose tells you geometry, not whether the drug works in vivo.
- Mutant-target docking can mislead if the predicted apo structure has the wrong loop conformation; PAE matters.
- "This drug docks well to the mutant" is not a clinical recommendation. It is hypothesis material for a clinician.
- Off-target effects, ADMET, BBB penetration, dosing: all out of scope.
- The dual-use frontier exists (you can dock toxins or controlled-substance scaffolds); benchtop synthesis screening is the regulatory backstop, not docking software.

## Sources

- https://www.biorxiv.org/content/10.1101/2024.10.10.615955v1 (Chai-1 preprint)
- https://github.com/chaidiscovery/chai-lab
- https://huggingface.co/chaidiscovery/chai-1
- https://arxiv.org/html/2412.02889v1 (Deep-Learning Based Docking Methods comparison, 2024)
- https://pubs.acs.org/doi/10.1021/acs.jcim.5c00380 (ML pose sampling + scoring functions, 2025)
- https://neurosnap.ai/service/DiffDock-L
- https://autodock-vina.readthedocs.io/
