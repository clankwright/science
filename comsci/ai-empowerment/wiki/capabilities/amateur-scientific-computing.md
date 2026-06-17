# Amateur Scientific Computing

> **Summary:** Structural biology, formal mathematics, and materials simulation became individually accessible between 2023 and 2026. AlphaFold 3 (free server, 20 jobs/day) and the open-weight Boltz-2 (MIT license, June 2025, FEP-comparable binding affinity at ~1000x speed) collapsed protein-structure and ligand-docking work that previously required wet-lab access or CRO contracts. AlphaMissense pre-computed scores for every possible human missense variant, free on Zenodo, made rare-disease variant interpretation a SQL query. Lean 4 + Mathlib + Lean Copilot (74.2% automated proof step rate vs. 40% for prior aesop) plus Math Inc Gauss and AlphaProof brought formal proof verification to amateur mathematicians. Smart telescopes ($500-2500) feed real exoplanet-transit and asteroid-occultation data into SETI Institute and AAVSO databases. Dual-use risk is real and unresolved.

**Sources:** [[raw/amateur-science/00-overview.md]], [[raw/amateur-science/alphafold-3-and-structure-prediction.md]], [[raw/amateur-science/boltz-and-open-structure-models.md]], [[raw/amateur-science/ligand-docking-and-drug-discovery.md]], [[raw/amateur-science/lean-and-formal-math.md]], [[raw/amateur-science/sympy-wolfram-and-symbolic-math.md]], [[raw/amateur-science/opentrons-and-bench-automation.md]], [[raw/amateur-science/ai-for-genomics-and-personal-omics.md]], [[raw/amateur-science/protein-design-and-rfdiffusion.md]], [[raw/amateur-science/astronomy-and-citizen-science.md]], [[raw/amateur-science/chemistry-and-reaction-prediction.md]], [[raw/amateur-science/materials-and-physics-tools.md]], [[raw/amateur-science/risks-and-realistic-limits.md]]

---

## What changed

In 2022, predicting a novel protein structure required either a crystallography lab or a six-month wait on a research collaborator. Verifying a math proof required a department of mathematicians or accepting that you didn't know if your proof was correct. Designing a novel functional enzyme required a Baker-lab postdoc. Interpreting a variant in your child's exome required a clinical geneticist appointment.

The unhobbling stack that landed by mid-2026:

1. **Structure prediction at amateur scale.** AlphaFold 3 (May 2024 Nature, free AlphaFold Server with 20 jobs/day and a 5,000-token cap) covers proteins, nucleic acids, ligands, ions, and post-translational modifications. Boltz-1 (MIT, October 2024) and Boltz-2 (MIT + Recursion + NVIDIA, June 2025) match AF3 quality with a permissive license and add binding-affinity prediction at FEP-comparable accuracy and ~1000x speed. RoseTTAFold All-Atom (Baker lab) and ESMFold (Meta) round out the open ecosystem. ColabFold gives free Colab access for users without local GPUs.
2. **Ligand docking and design.** Chai-1 (Chai Discovery, September 2024, open weights non-commercial), DiffDock-L, and AutoDock Vina hybrids let a rare-disease parent screen candidate compounds against a variant-modeled protein on a consumer GPU. Realistic interpretation: hypotheses to bring to a clinician, not prescriptions.
3. **Variant interpretation as a SQL query.** AlphaMissense (DeepMind, September 2023, CC-BY 4.0 on Zenodo) pre-computed pathogenicity scores for every possible human missense variant. AlphaMissenseR + DuckDB returns scores in seconds. ClinVar, Variant Effect Predictor (VEP), and PolyPhen-2 round out the free toolkit.
4. **Formal proof verification at hobbyist scale.** Lean 4, Mathlib (continually growing formal library), Lean Copilot (74.2% automated proof step rate via FFI-integrated LLM tactic suggestions), AlphaProof (DeepMind, IMO 2024 silver, Nature 2025), Math Inc Gauss, and Kimina/HILBERT (99% on miniF2F). Terence Tao's public Lean projects (PFR conjecture, the Equational Theories Project) demonstrate the workflow. Carnegie Mellon's miniF2F benchmark moved from sub-50% to 99% in three years.
5. **Citizen-science telescopes.** Unistellar eVscope, Vaonis Vespera/Stellina, ZWO SeeStar S30/S50 (the budget breakthrough at $500). On-board AI plate-solving and tracking. Real contributions to SETI Institute exoplanet-transit timing campaigns and AAVSO variable-star records.
6. **Chemistry and materials.** IBM RXN for retrosynthesis, ASKCOS (MIT), AiZynthFinder (open). GNoME (DeepMind, 2.2M new candidate stable materials, November 2023). MACE, NequIP, and SevenNet universal force fields run molecular dynamics on a laptop GPU. Coscientist (Carnegie Mellon, December 2023) demonstrated end-to-end autonomous chemistry agents.
7. **Bench automation.** OpenTrons OT-2 (~$5k) and Flex (~$25k) accept LLM-generated Python protocols. Community labs (Genspace NYC, BioCurious Bay Area) provide membership access for $100-200/mo.

## Notable tools

- [AlphaFold Server](../tools/alphafold-server.md): the free hosted AlphaFold 3; the right starting point for any structure question.
- [Boltz](../tools/boltz.md): open-weight AF3-quality models plus FEP-grade affinity prediction; MIT license.
- [ESM Protein Biology World Model](../tools/esm-protein-model.md): free open platform combining structure prediction (ESMFold2), lab-validated binder design, and a 6.8B-sequence searchable atlas in one (May 2026).
- [AlphaMissense](../tools/alphamissense.md): pre-computed pathogenicity for every possible human missense variant; rare-disease parent's highest-leverage tool.
- [Lean 4 and Mathlib](../tools/lean-and-mathlib.md): formal proof verification; Lean Copilot integrates LLM tactic suggestions.
- [RFdiffusion](../tools/rfdiffusion.md): generative protein design; RFdiffusion3 (December 2025) designs functional enzymes from prompts.
- [Smart telescopes](../tools/smart-telescopes.md): Vespera/Unistellar/SeeStar; on-board AI for amateur exoplanet/asteroid contributions.
- [OpenTrons](../tools/opentrons.md): consumer-priced lab automation; LLM-generated Python protocols.
- ColabFold (Mirdita et al.): free Colab notebook access to AF2/AF3-quality predictions.
- ESMFold (Meta): single-sequence prediction; weaker accuracy, no MSA needed.
- IBM RXN, ASKCOS, AiZynthFinder: retrosynthesis tools accessible to chemistry hobbyists.
- MACE, NequIP, SevenNet: universal force fields for laptop-scale molecular dynamics.
- AlphaProof, Math Inc Gauss, HILBERT, Kimina: formal-math models complementing Lean.

## Maturity and limits

Production: AlphaFold Server, AlphaMissense table lookups, Lean 4 / Mathlib core, retrosynthesis prediction, smart-telescope plate-solving and basic citizen-science contributions. Beta-to-production: Boltz-2 affinity prediction (FEP-comparable in benchmarks; specific systems vary), Lean Copilot in active development, smart-telescope occultation timing. Research: RFdiffusion3 functional-enzyme design (works in published cases; not a turn-the-crank workflow), Coscientist and similar autonomous chemistry agents (impressive demos, no track record at amateur scale), full-pipeline rare-disease variant interpretation (the structure call is reliable; the clinical interpretation is not).

The hardest problem is not capability. It is the credentialing gap: an amateur with AlphaFold 3 in hand can predict a structure correctly and still misread its clinical or biochemical implications. The honest framing is "I now have hypotheses worth a clinician's time" not "I have answers." Hallucination in scientific contexts is more dangerous than in writing because outputs look authoritative.

## Risks

Dual-use is real. Bloomfield et al. (Science 2024) demonstrated DNA-synthesis-screening evasion using RFdiffusion-designed sequences. The biosecurity community treats this as an unresolved policy problem. Personal-omics interpretation has a documented pattern of false reassurance and false alarm (the 23andMe Chapter 11 + TTAM acquisition story is partly a story of consumers misreading their own data). Citizen-science contributions need calibration: most "I found an exoplanet" claims are eclipsing binaries or pipeline artifacts.

## Individual empowerment

| Task | 2022 method | 2024-2026 method | Cost |
|---|---|---|---|
| Predict structure of a novel SLC6A1 missense variant | Wait for crystallographer collaborator | AlphaFold Server | $0 |
| Score every possible variant in a candidate gene | Run polyphen / SIFT per variant | AlphaMissense + DuckDB | $0 |
| Predict ligand binding affinity for a target | CRO contract: $5k-50k | Boltz-2 on a workstation GPU | $0 + GPU |
| Verify a published proof formally | Trust the reviewers | Lean 4 + Mathlib + Copilot | $0 |
| Design a novel functional enzyme | Baker lab collaboration | RFdiffusion3 | $0 + GPU |
| Find an exoplanet transit | Required academic observatory | Unistellar + SETI campaign | $2500 |
| Run an automated bench protocol | Required institutional lab | OpenTrons + LLM protocol | $5k + reagents |
| Run a 100-atom MD simulation overnight | Required HPC allocation | MACE on a 24GB GPU | $0 + GPU |
| Retrosynthesis plan for a target molecule | Required SciFinder + chemist | IBM RXN | $0 |

## See Also

- [Personal medical AI](personal-medical-ai.md): clinician-facing AI; the bridge from amateur structure prediction to action.
- [Autonomous research](autonomous-research.md): for literature review supporting the science work.
- [Specific unlocks](../analysis/specific-unlocks.md): the underlying brainstorm.
