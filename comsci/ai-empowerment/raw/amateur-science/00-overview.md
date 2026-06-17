# Amateur / Citizen Scientific Computing: Capability Overview

**Compiled:** 2026-05-04
**Scope:** Technical capabilities that amateurs, hobbyists, rare-disease parents, citizen scientists, and unaffiliated independents can now exercise that previously required a university lab, an HPC cluster, a wet-lab budget, or a PhD with established connections. Excludes generic "ChatGPT helps me with homework" use; focuses on concrete model and tool unlocks.

## What changed (2023-2026)

Three forces converged. Frontier biology labs (DeepMind, Baker lab, Meta, Chai Discovery, MIT Jameel Clinic) released model weights or free public servers for problems that previously cost millions in compute and years of postdoc time: protein structure prediction, ligand docking, protein design, missense variant interpretation. The Lean 4 + Mathlib ecosystem matured to the point where outside contributors formalize frontier proofs alongside Fields medalists. Consumer GPU memory crossed thresholds (24-48 GB on a single 4090/5090; 96 GB on a Spark/DGX Spark) where local inference of structure-prediction and force-field models became practical. LLMs glued the parts together: variant pages, protocol generation for benchtop robots, retrosynthesis prompts, Lean tactic suggestions.

## Categories covered in this section

1. **Structural biology**: AlphaFold 3, AlphaFold Server, Boltz-1/2, Chai-1, RoseTTAFold All-Atom, ColabFold, ESMFold.
2. **Protein and ligand engineering**: RFdiffusion / RFdiffusion2 / RFdiffusion3, ProteinMPNN, LigandMPNN, DiffDock-L, AutoDock Vina hybrids.
3. **Formal mathematics**: Lean 4 + Mathlib, Lean Copilot, AlphaProof, miniF2F, Tao's PFR project, Math Inc Gauss.
4. **Symbolic / numerical math**: LLM + SymPy, Wolfram GPT, Wolfram LLM API, MathPix.
5. **Bench automation**: Opentrons OT-2 / Flex with LLM-generated Python protocols, community labs (Genspace, BioCurious, BUGSS).
6. **Personal genomics**: 23andMe / WGS raw data + ClinVar + Ensembl VEP + AlphaMissense; Promethease / Genetic Genie / GeneticLifehacks tools post-bankruptcy.
7. **Astronomy**: Smart telescopes (Vespera Pro, eVscope, SeeStar, Dwarf 3) with onboard plate-solving; Unistellar SETI Institute citizen pipeline; Gaia DR3 ML classification.
8. **Chemistry**: IBM RXN, ASKCOS, AiZynthFinder, Coscientist-style autonomous agents.
9. **Materials and physics**: Materials Project API, GNoME-released NequIP / MACE / SevenNet universal force fields runnable on a laptop.

## Hardware strata (May 2026)

| Tier | What works | Examples |
|------|------------|----------|
| Free web server | Single jobs/day with token caps | AlphaFold Server (20/day, 5000 tokens), Chai-1 web, IBM RXN, Wolfram Alpha |
| Free Colab notebook | Single small protein, single ligand | ColabFold, ESMFold, AiZynthFinder demos |
| Consumer GPU (24 GB) | ColabFold, ESMFold, Boltz-1, ProteinMPNN, MACE potentials, RFdiffusion small jobs | RTX 4090 / 5090 desktop |
| Workstation GPU (48-96 GB) | Boltz-2, RFdiffusion3 medium jobs, larger MD with universal potentials | RTX 6000 Ada, Spark, DGX Spark |
| Cluster only | RFdiffusion3 enzyme campaigns, Boltz-2 affinity FEP-replacement at scale, AlphaFold 3 local | University HPC, cloud A100/H100 |

## What did NOT get unlocked

- Wet-lab synthesis: a parent can predict a binder structure but cannot order, synthesize, fold, and assay it without a CRO budget. Cloud labs (Emerald, Strateos legacy) closed or pivoted enterprise-only.
- Animal experiments and clinical trials: still gated.
- Most clinically actionable variant calls: AlphaMissense + ClinVar produce hypotheses, not diagnoses. ACMG classification still requires a clinical genetics MDT.
- Frontier model training: training a Boltz-1 from scratch is still a $1-10M compute bill.

## The unhobbling thesis (specific to amateur science)

Pre-2023 amateur science meant: photometry, telescope-guided variable star observation, citizen-science classification (Galaxy Zoo, Foldit), bird counts, one-off PCR in a garage. Post-2023: a parent of a child with a SLC6A1 missense variant can on a weekend (a) pull the variant from ClinVar, (b) score it with AlphaMissense, (c) fold the wild-type and mutant protein with AlphaFold Server or local Boltz-1 to inspect the perturbed transmembrane helix, (d) dock GABA and known inhibitors with DiffDock-L, (e) ask Claude to summarize the mechanistic literature, (f) bring a structured hypothesis to a clinical geneticist. None of that pipeline existed end-to-end for non-specialists in 2022.

## Sources

- https://alphafoldserver.com/
- https://github.com/jwohlwend/boltz
- https://github.com/chaidiscovery/chai-lab
- https://www.ipd.uw.edu/2025/12/rfdiffusion3-now-available/
- https://github.com/dauparas/ProteinMPNN
- https://leandojo.org/leancopilot.html
- https://www.nature.com/articles/s41586-025-09833-y (AlphaProof, Nature 2025)
- https://github.com/google-deepmind/alphamissense
- https://opentrons.com/
- https://next-gen.materialsproject.org/api
