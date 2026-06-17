# Personal Genomics: 23andMe Raw Data, ClinVar, VEP, AlphaMissense

## What it is

The tooling stack for an individual to interpret their own (or a family member's) raw genotyping or whole-genome-sequencing data. Components: 23andMe / AncestryDNA / MyHeritage raw data exports, third-party interpretation tools (Promethease retired in 2020, replaced by Genetic Genie, GeneticLifehacks, GenVue Discovery, Genomelink), public ClinVar archive, Ensembl Variant Effect Predictor (VEP), AlphaMissense (Cheng et al., Science 2023) for missense pathogenicity, and now LLMs that read variant lists and the medical literature simultaneously.

## Specific unlocks

- Pull 23andMe raw data (~600K SNPs) or your $300 WGS, run it through GenVue Discovery / Genetic Genie / GeneticLifehacks for ClinVar annotations, then ask Claude or GPT to summarize the rare pathogenic-tagged variants and their clinical literature.
- Score every possible missense substitution across all human protein-coding genes using AlphaMissense's pre-computed table (CC-BY 4.0 on Zenodo, 71M predictions); look up your specific variant in seconds.
- Run Ensembl VEP locally or via REST against your VCF to annotate consequence, SIFT, PolyPhen, gnomAD frequency, ClinVar significance.
- Use AlphaMissenseR (R package, Bioinformatics Advances 2025) to query the AlphaMissense database with DuckDB, joining against your personal VCF.
- Combine AlphaFold/Boltz structure prediction of the affected protein with AlphaMissense pathogenicity score to build a structural rationale for a candidate causal variant in a rare-disease child.
- Build a personal "medical literature digest" by prompting Claude with your variant list + relevant gene names, asking for the strongest published associations and any known approved therapies.

## Pre-AI baseline

Pre-2015 you mailed saliva, got a 23andMe report, and hit a wall at "we don't report on health variants." Promethease (2010-2020) bridged that with SNPedia. After 23andMe's March 2025 Chapter 11 and TTAM Research Institute's July 2025 acquisition, the third-party tooling matters more, not less. AlphaMissense (2023) gave the first proteome-wide pathogenicity prior calibrated on population frequency data. Pre-AlphaMissense, you had SIFT and PolyPhen with much weaker calibration, or ClinVar with sparse coverage of rare variants.

## Hardware / cost

- 23andMe raw data: ~$100-200 one-time.
- Whole-exome sequencing: ~$300-500 from Nebula Genomics, Dante Labs, etc.
- Whole-genome sequencing: ~$300-1000.
- AlphaMissense table: free (Zenodo).
- VEP: free (web has rate limits; local install is free).
- ClinVar: free.
- Genetic Genie: free + donation tier.
- LLM interpretation: API costs.

## Maturity

- Pipeline (raw data -> VCF -> VEP -> ClinVar / AlphaMissense): production for technically literate users.
- AlphaMissense: production but not clinical-grade. In a rare-disease cohort, precision was 32.9%, recall 57.6% for expert-curated pathogenic variants. It classifies 62% of variants of uncertain significance as pathogenic, which is not clinically usable on its own.
- LLM-assisted variant report writing: beta. Hallucinates citations; useful for triage, dangerous as a primary source.

## Realistic limits and ELSI

- AlphaMissense is calibrated for "is this likely to disrupt protein function" not "does this variant cause this disease in this person." Clinical interpretation requires ACMG criteria, family segregation, functional validation.
- Variants of uncertain significance (VUS) outnumber clinically actionable variants 10-100x. AlphaMissense over-classifies as pathogenic.
- Personal genomics raises real ethical/legal/social issues: insurance discrimination (GINA covers some but not all), incidental findings in family members who did not consent, pediatric variant disclosure norms.
- 23andMe's 2025 bankruptcy returned the data-stewardship question to the foreground; an amateur should treat third-party interpretation services as data exposures.

## Sources

- https://www.science.org/doi/10.1126/science.adg7492 (AlphaMissense, Science 2023)
- https://github.com/google-deepmind/alphamissense
- https://academic.oup.com/bioinformaticsadvances/article/5/1/vbaf093/8118841 (AlphaMissenseR)
- https://www.nature.com/articles/s41525-025-00480-w (AlphaMissense vs clinical-grade classification, npj Genom Med 2025)
- https://www.geneticlifehacks.com/23andme-raw-data/
- https://geneticgenie.org/
- https://www.ensembl.org/info/docs/tools/vep/
- https://www.ncbi.nlm.nih.gov/clinvar/
