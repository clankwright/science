# Cold-Case Genetic Genealogy and Adoptee Birth-Family Search

## What it is

Investigative genetic genealogy (IGG): identifying an unknown person (a perpetrator from a crime-scene DNA sample, an unidentified body, or a birth parent) by uploading their autosomal DNA profile to a consumer matching database (GEDmatch, FamilyTreeDNA), finding 2nd-to-4th cousin matches, and reconstructing their family tree until the candidate falls out. The Golden State Killer was identified this way in April 2018; as of late 2023, the technique had solved 651 criminal cases (318 perpetrators identified, 464 decedents identified, 4 living Does). The 2024-2026 shift is that LLM-assisted pedigree triangulation, AI-driven obituary search, and FamilySearch's Full-Text Search collapsed the workflow from a Parabon-class consultancy job to a hobbyist evening project.

## Specific unlocks

- An adoptee with no information on their birth family takes one $99 AncestryDNA test, uploads the raw file to GEDmatch, MyHeritage, FamilyTreeDNA, and finds a 2nd cousin match. Within a weekend they reconstruct the cousin's grandparents' three children using FamilySearch Full-Text Search over obituaries and census records, identify which child lived in the right state at the right time, and have a candidate birth mother.
- A donor-conceived adult uses the same workflow to identify a sperm donor whose clinic destroyed records in 1985.
- DNA Doe Project volunteers (now ~250 cases worked) and Othram's "Project 525" (525 unidentified children) use the technique to put names to remains found decades ago. Recent identifications include the final Bear Brook Jane Doe (Sept 2025) as Rea Rasmussen, born 1976 Orange County CA.
- Police-side use: Charlotte-Mecklenburg PD + Ramapo College IGG Center identified Betty Jean Benton (1996 remains) in April 2025 and Kenneth Robert McCarthy ("Charlotte Walmart John Doe") in November 2025.
- Endogamous-population searches (Ashkenazi Jewish, French Canadian, Mennonite) that used to be considered impossible due to everyone matching everyone are now tractable with LLM-assisted pedigree disambiguation.
- Chinese-adoptee searches via the China Adoption DNA Project + 23andMe, which historically failed, now succeed when birth-family members test in mainland China and upload to the same databases.

## Tools and databases

- **GEDmatch.** Operated by Verogen Inc; users select privacy level per file (Private / Opt-In / Opt-Out / Personal Research). Free tier; Tier 1 paid features cost a few dollars/month.
- **FamilyTreeDNA.** Largest law-enforcement-cooperating database; users opt in or out of LE matching.
- **DNASolves.** Othram-operated, exclusively for law enforcement cases; launched December 2019.
- **AncestryDNA / 23andMe / MyHeritage.** Consumer-facing; do not allow LE matching, but adoptees can upload their own raw data files.
- **DNA Painter.** Web app for visualizing chromosome inheritance and triangulating shared DNA segments.
- **WATO (What Are The Odds).** DNA Painter feature; computes likelihood of various tree hypotheses given observed shared centiMorgans.
- **GenoPro / RootsMagic / online tree builders.** Standard plumbing.

## Pre-AI baseline

Before April 2018: the workflow was theoretical. Between 2018 and ~2023: it required Parabon NanoLabs or the DNA Doe Project (a volunteer non-profit), at $5K-15K per case for the LE pipeline, or weeks of self-study and forum-help for the adoptee-search pipeline. Reading obituaries to identify living descendants was a manual web search per name. Building a "descendancy tree" (start at common ancestor of two cousin matches, work down to today) was the bottleneck step.

## Cost / access

- AncestryDNA test: ~$99.
- GEDmatch / FamilyTreeDNA / MyHeritage upload: free.
- DNA Painter free tier: most adoptee work fits inside it.
- FamilySearch Full-Text Search over obituaries and census records: free.
- Professional IGG consultant if you give up: $1K-5K, or DNA Doe Project pro bono for unidentified-remains cases.

## Maturity

Production for the criminal-investigation use case (651+ cases solved as of Dec 2023) and the adoptee use case in any population with strong North American or European DNA database coverage. Beta for endogamous populations and for ancestry from countries where DNA testing has not penetrated (most of Africa, much of Asia, the Middle East). Ongoing identification rate at DNA Doe Project, Othram, and Ramapo IGG Center suggests workflow maturity is at the bottleneck of legal/jurisdictional consent, not technical capability.

## Risk shape

Police use of GEDmatch without warrant raised the Fourth Amendment questions partially answered by Maryland v. Andrews and similar. Multiple states (Maryland, Montana) passed laws regulating IGG. The 2019 GEDmatch terms-of-service change that opened the database to LE was reverted after user backlash, then re-implemented under Verogen ownership with explicit opt-in. Ethical concerns extend to identifying anonymous sperm donors (a contractual breach the donor relied on at the time of donation) and to outing distant relatives who never consented to anyone's DNA being analyzed.

## Sources

- https://en.wikipedia.org/wiki/Investigative_genetic_genealogy
- https://en.wikipedia.org/wiki/GEDmatch
- https://en.wikipedia.org/wiki/Parabon_NanoLabs
- https://en.wikipedia.org/wiki/DNA_Doe_Project
- https://www.ramapo.edu/igg/about-us/cases/resolved/
- https://othram.com/press
- https://www.cbsnews.com/sacramento/news/genetic-genealogy-golden-state-killer-cold-cases/
- https://www.dna-testing-adviser.com/AdoptionSearch.html
