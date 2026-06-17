# Risks and Realistic Limits in Amateur AI-Augmented Science

## What it is

The honest counter-page to the rest of this section. AI-augmented amateur science is real and the unlocks are real, but the failure modes are also real and patterned. This file enumerates them so the curated wiki page does not oversell.

## Failure modes by category

### Hallucination in scientific contexts

- LLMs invent citations. A summarized "literature review" of a rare-disease gene by GPT or Claude routinely cites papers that do not exist, often plausibly close to real ones (right author, wrong year; right journal, wrong volume). Always verify with PubMed, DOI, or Google Scholar.
- Structure prediction confidence (pLDDT in AlphaFold/Boltz) is well-calibrated globally and miscalibrated for sequences far from training data. A confident-looking blob of helices can be entirely wrong. Read PAE matrices, not just confidence colors.
- AlphaMissense classifies 62% of variants of uncertain significance as pathogenic in a rare-disease cohort; precision was 32.9%. It is a prior, not a verdict.
- Retrosynthesis tools propose routes that look reasonable but use reagents that are unavailable, intermediates that decompose, or steps that are known not to work for the specific substrate class.

### Credentialing and the "I read a paper" problem

- An amateur with AlphaFold + AlphaMissense + ChatGPT can write a one-page note that looks indistinguishable from a clinical-genetics report. It is not one. Clinical interpretation requires ACMG criteria, family segregation analysis, functional validation, and licensure to communicate findings as medical advice.
- Medical journals and clinical-genetics MDTs already report "AI-empowered" patient/family interpretations arriving at appointments. Some are useful triage; some send clinicians on wild-goose chases.
- The same applies to Lean-verified math contributions (a verified-but-trivial lemma is still trivial), retrosynthesis (a paper route is not a working synthesis), protein design (an in-silico binder is not a wet-lab binder).

### Dual-use, named cases

- **RFdiffusion + DNA synthesis screening** (Bloomfield et al., Science 2024): demonstrated that AI-redesigned variants of toxin proteins evaded the screening tools used by commercial DNA synthesis providers. Patches were deployed; benchtop synthesizers further weaken the checkpoint.
- **Coscientist + chemistry agents** (Boiko et al., Nature 2023): the CMU team explicitly showed their GPT-4-driven Coscientist could be prompted to propose syntheses of chemical weapons agents and controlled drugs. No built-in filter; operator + supplier KYC is the control.
- **AlphaProof / autoformalization**: low direct misuse risk, but inflated benchmark numbers (miniF2F-Lean Revisited, Nov 2025) can mislead funders and policymakers about the maturity of "AI mathematician" claims.
- **Personal genomics**: GINA (US) covers health-insurance discrimination but not life, disability, or long-term-care insurance. Family members are exposed by your decision to sequence yourself. Pediatric variant disclosure is contested.

### Hardware optimism

- Many "runs on a laptop" claims hold for the inference path but not the data-prep path. Folding a single protein on a 4090 is fast; computing a 10K-sequence MSA against the BFD database is hours of CPU.
- 24 GB consumer GPUs exclude RFdiffusion3 enzyme campaigns, Boltz-2 affinity at scale, and large MD systems.
- "Free" tier limits (AlphaFold Server 20/day, Colab idle timeouts, IBM RXN registration friction, Wolfram quota) make sustained workflows impractical without paid tiers.

### Ecosystem fragility

- Promethease shut down in 2020; 23andMe filed Chapter 11 in March 2025 and was acquired by TTAM in July 2025. Personal-genomics tooling churns; data exports get harder over time.
- Open-weight model licenses can be revoked or restricted; AlphaFold 3 weights remain closed despite strong community demand.
- Cloud labs (Emerald, Strateos) pivoted away from individual access in 2024-2025; the wet-lab side of the loop is harder for amateurs in 2026 than it was in 2022.

## What NOT to trust without expert validation

- Any AI-derived clinical interpretation (variant pathogenicity, drug-protein interaction, pharmacogenomic recommendation).
- Any retrosynthesis route for a controlled or hazardous compound.
- Any "binder" or "enzyme" design without wet-lab validation.
- Any LLM-generated literature summary, period; verify every citation.
- Any benchmark headline number for autonomous theorem proving without checking the human-graded equivalent.

## What IS reliable and amateur-usable

- Structure prediction of well-folded soluble proteins (AlphaFold 2/3, Boltz-1, ColabFold).
- Single-sequence missense scoring with AlphaMissense as a triage prior.
- Lean 4 + Mathlib for verifying textbook-level math you are personally working through.
- Photometric observations from smart telescopes contributed to AAVSO / Unistellar / SETI Institute campaigns.
- Materials Project structure / property lookups for known materials.
- IBM RXN / AiZynthFinder for hobbyist organic chemistry exploration of well-trodden substrate classes.

## Sources

- https://www.science.org/doi/10.1126/science.adu8578 (RFdiffusion biosecurity)
- https://www.nature.com/articles/s41586-023-06792-0 (Coscientist + dual use)
- https://www.nature.com/articles/s41525-025-00480-w (AlphaMissense vs clinical-grade)
- https://arxiv.org/pdf/2511.03108 (miniF2F-Lean Revisited)
- https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2025.1689753/full (synthetic nucleic acid oversight gaps)
- https://www.armscontrol.org/blog/2025-11-24/regulatory-gaps-benchtop-nucleic-acid-synthesis-create-biosecurity-vulnerabilities
- https://aspr.hhs.gov/S3/Documents/OSTP-Nucleic-Acid-Synthesis-Screening-Framework-Sep2024.pdf (rescinded by EO 14292, 2025)
