# Materials Project, GNoME, MACE / NequIP / SevenNet: Universal Force Fields on a Laptop

## What it is

The Materials Project (Berkeley, Persson lab) is a free public DFT-computed database of >150K crystal structures with properties (band gap, formation energy, elastic moduli) and a Python API. GNoME (Merchant et al., Nature 2023) added 2.2M new computed structures, of which 381K are predicted stable. The same release trained a NequIP-architecture universal interatomic potential. MACE (Batatia et al., 2022), NequIP (Batzner et al., 2022), and SevenNet (Park et al., 2024) are equivariant graph-neural-network potentials trained on large DFT datasets that an amateur can run on a laptop or single GPU to do molecular dynamics on systems that would have required a national HPC allocation in 2020.

## Specific unlocks

- Query the Materials Project for all known stable Li-ion conductors with band gap > 3 eV via the Python API in five lines of code; previously this required either (a) DFT expertise to compute them, or (b) a literature review across 20 years of papers.
- Build an MCP (Model Context Protocol) server over the Materials Project API and let Claude or GPT-5 answer materials queries with structured citations.
- Run molecular dynamics on a 1000-atom solid (a battery cathode, a perovskite, a metal alloy) on a 24 GB laptop GPU using MACE-MP-0 or SevenNet-MP, achieving DFT accuracy at force-field cost. This was a multi-week HPC job in 2020 and is now an overnight laptop run.
- Use Text2Struc (ChemRxiv Feb 2025) to ask an LLM in plain English to generate a crystal structure CIF (e.g., a defected supercell) and have it call the Materials Project API for canonical structures.
- Use the GNoME-released NequIP potential to relax a crystal structure you generated with a generative model, before committing GPU hours to a full DFT relaxation.
- Combine generative chemistry models (CDVAE, DiffCSP) with universal force-field potentials to close the loop: propose -> relax -> filter by predicted formation energy -> shortlist for DFT or experimental validation.

## Pre-AI baseline

Pre-2018 MD on solids meant LAMMPS or VASP, hand-tuned interatomic potentials per material system (you spent six months parameterizing a Tersoff potential for one alloy), and a national HPC allocation. DFT for the same system took ~10x to 100x more compute. Universal ML potentials trained on the entire Materials Project (now MP-Pt and similar) collapse the parameterization step to "download the weights." Materials Project itself, while pre-AI in origin (founded 2011), composes with LLM tooling now in ways that did not exist in 2022.

## Hardware / cost

- Materials Project: free with registration; API is rate-limited but generous.
- MACE / NequIP / SevenNet weights: free, downloadable.
- Inference: 8-24 GB GPU is enough for systems up to ~10K atoms in many regimes.
- Training your own potential: cluster-scale.

## Maturity

- Materials Project + Python API: production, in use globally.
- Universal force fields (MACE-MP-0, SevenNet-MP, ORB, MatGL): production for screening; specialized fine-tunes still beat them on specific systems.
- LLM-driven structure generation: research; Text2Struc and similar are demos, not robust pipelines.
- GNoME stability predictions: published 2023, with subsequent literature (Cheetham & Seshadri 2024 commentary) noting that "stable" in GNoME means "low energy on the convex hull," not "synthesizable," and a non-trivial fraction of the 381K may be artifacts.

## Where it breaks

- Universal potentials underperform specialized ones for unusual chemistries (high-pressure phases, lanthanides, actinides, magnetism).
- "Stable" predictions in GNoME and Materials Project do not equal "synthesizable in a lab."
- LLMs hallucinate space groups and lattice parameters; verify every structure against the Materials Project or by a quick DFT relaxation.

## Sources

- https://next-gen.materialsproject.org/api
- https://www.nature.com/articles/s41586-023-06735-9 (GNoME, Nature 2023)
- https://github.com/google-deepmind/materials_discovery
- https://arxiv.org/pdf/2206.07697 (MACE)
- https://chemrxiv.org/doi/pdf/10.26434/chemrxiv-2025-pvgp0-v2 (Text2Struc)
- https://xiangyu-yin.com/content/post_mp_mcp.html (Materials Project MCP server)
- https://arxiv.org/html/2403.04217 (UIP performance assessment)
- https://www.cs.cornell.edu/gomes/pdf/2025_gan_arxiv_matllmsearch.pdf (LLMs as crystal structure generators)
