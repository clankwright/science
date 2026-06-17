# RFdiffusion, ProteinMPNN, LigandMPNN: Open-Weight Protein Design

## What it is

The Baker lab (Institute for Protein Design, UW) released RFdiffusion (2023, MIT license), RFdiffusion All-Atom (2024), RFdiffusion2 (April 2025), and RFdiffusion3 (December 2025) as the de novo protein design diffusion-model series. ProteinMPNN (Dauparas et al., Science 2022) and LigandMPNN (Nature Methods 2025) are the inverse-folding sequence designers that generate amino acid sequences for a given backbone. RFdiffusion + ProteinMPNN is the standard open-source design pipeline. RFdiffusion3 binds DNA, other proteins, small molecules, and designs enzymes with catalytic proficiencies comparable to natural enzymes; it is 10x faster than RFdiffusion2.

## Specific unlocks

- An amateur with a 24-48 GB GPU can generate a novel protein backbone scaffold for a given target binding site (e.g., a viral surface epitope, a cancer-relevant protein) using RFdiffusion3.
- Design a new mini-binder against a given target protein in a few hours of GPU time, then sequence-design with ProteinMPNN, then in-silico-validate by re-folding with AlphaFold/Boltz/Chai-1 and checking interface metrics.
- Design enzymes from a chemical-reaction prompt with RFdiffusion2 or RFdiffusion3, getting catalytic activity that previously required thousands of hand-engineered Rosetta designs and wet-lab screens.
- Use ProteinDJ (bioRxiv Sept 2025) as a high-performance modular pipeline that wraps RFdiffusion + ProteinMPNN + AlphaFold validation in one flow.
- Apply LigandMPNN to design sequences around small-molecule cofactors (heme, NAD, drug ligands) where ProteinMPNN ignored the ligand context.
- Use the Feb 2025 RFdiffusion antibody fine-tune to design human-like antibody scaffolds, free for both non-profit and for-profit use.

## Pre-AI baseline

Pre-2020 de novo protein design was done by Rosetta in the Baker lab and a handful of others, with success rates of 1-5% (most designs did not fold or did not bind). It required a structural biology PhD, weeks of compute, and Rosetta scripting expertise. RFdiffusion + ProteinMPNN raised in-silico success rates by an order of magnitude and made the pipeline scriptable in Python.

## Hardware / cost

- RFdiffusion (original): ~24 GB GPU comfortable; runs on a 4090.
- RFdiffusion2: heavier; 48 GB recommended for enzyme design.
- RFdiffusion3: open-source as of Dec 2025; 10x faster than v2 but designs heavier targets.
- ProteinMPNN: lightweight; runs on consumer GPU or CPU.
- LigandMPNN: similar.
- All open weights, permissive licenses.

## Maturity

- RFdiffusion / RFdiffusion2: production. Multiple successful in-vivo binders published.
- RFdiffusion3: new (Dec 2025); active validation.
- ProteinMPNN: production, the standard inverse-folding tool.
- LigandMPNN: production for ligand-aware design, March 2025.

## Where it breaks

- In-silico design rates do not equal wet-lab success. A binder that looks great on screen may not fold, may aggregate, may not express in E. coli or yeast.
- Wet-lab validation requires gene synthesis (~$0.10-0.20/bp), expression, purification, binding assay. Without a CRO or lab access this stops at "I have a designed sequence in a file."
- Rosetta-style filters (interface energy, solvation) are imperfect; many designs fail for reasons not captured by the metrics.

## Dual-use risk (real, named)

The 2024 Science paper "Strengthening nucleic acid biosecurity screening against generative protein design tools" (Bloomfield et al.) demonstrated that RFdiffusion-redesigned variants of toxins evaded the screening tools used by commercial DNA synthesis providers. The community responded with patches and four major synthesis companies updated their screening. The ASPR/HHS 2024 Framework for Nucleic Acid Synthesis Screening was rescinded by Executive Order 14292 in 2025; the regulatory backstop is in flux. Benchtop nucleic acid synthesizers further weaken the synthesis-provider screening checkpoint. Open-weight protein design is the canonical example of a capability whose amateur-empowerment side and dual-use side cannot be separated; the policy debate is ongoing and unresolved.

## Sources

- https://www.bakerlab.org/2023/03/30/rf-diffusion-now-free-and-open-source/
- https://www.ipd.uw.edu/2025/12/rfdiffusion3-now-available/
- https://www.ipd.uw.edu/2025/04/introducing-rfdiffusion2/
- https://www.bakerlab.org/2025/02/28/designing-antibodies-with-rfdiffusion/
- https://www.science.org/doi/10.1126/science.add2187 (ProteinMPNN, Science 2022)
- https://github.com/dauparas/ProteinMPNN
- https://www.nature.com/articles/s41592-025-02626-1 (LigandMPNN, Nature Methods 2025)
- https://www.biorxiv.org/content/10.1101/2025.09.24.678028v1.full (ProteinDJ pipeline)
- https://www.science.org/doi/10.1126/science.adu8578 (Biosecurity screening vs RFdiffusion variants)
- https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2025.1689753/full
