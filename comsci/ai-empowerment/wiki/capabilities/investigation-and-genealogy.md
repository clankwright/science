# Investigation, OSINT, and Genealogy

> **Summary:** AI-driven handwritten-text recognition (HTR), reverse face/image search, geolocation models, and full-text search over previously-unsearchable historical archives have collapsed work that previously required paid researchers, intelligence-agency tooling, or PhD-grade paleography into hobbyist weekends. The largest single unlock is FamilySearch Full-Text Search (March 2024), which made roughly 2 billion handwritten record images searchable for free. The same toolkit powers civilian conflict monitoring, cold-case identification, deceased-relative scams, and stalker tooling; ethics is unsettled and arms-race-shaped.

**Sources:** [[raw/investigation-osint-genealogy/00-overview.md]], [[raw/investigation-osint-genealogy/transkribus-and-handwriting.md]], [[raw/investigation-osint-genealogy/bellingcat-osint-workflows.md]], [[raw/investigation-osint-genealogy/genealogy-foreign-archives.md]], [[raw/investigation-osint-genealogy/osint-platforms.md]], [[raw/investigation-osint-genealogy/image-and-face-search.md]], [[raw/investigation-osint-genealogy/cold-case-genetic-genealogy.md]], [[raw/investigation-osint-genealogy/public-records-and-foia.md]], [[raw/investigation-osint-genealogy/historical-document-deciphering.md]], [[raw/investigation-osint-genealogy/old-photo-restoration.md]], [[raw/investigation-osint-genealogy/journalism-ai-tools.md]], [[raw/investigation-osint-genealogy/ethics-and-risks.md]]

---

## What changed

In 2022, an amateur investigator or family historian had three structural blockers. (1) Handwritten records before about 1880 required reading paleographic hands (court hand, secretary hand, kurrent, Cyrillic chancery) that most researchers cannot read; archives held billions of images nobody could search. (2) Geolocating a photo without GPS metadata required either a Bellingcat-grade analyst or pure luck. (3) Reverse face search at scale required a Clearview-like enterprise account or law-enforcement access. Genetic genealogy worked, but the analytical step (cousin match plus obituary trees plus document chains) was a paid Parabon-class consultancy.

Between 2023 and 2026 the floor dropped on all four:

1. **HTR for old hands.** Transkribus, eScriptorium, and FamilySearch's full-text indexing made cursive-script searching a commodity. FamilySearch indexed roughly 2 billion images in English, Spanish, and Portuguese starting March 2024, with Chinese, French, German, Dutch, and Italian announced for 2026. Specialty community models (Polski Bizon for Polish, VILNISH for Lithuanian, L'Dor V'Dor for Yiddish/Hebrew) extended the same workflow into immigrant genealogy.
2. **Image and face search democratized.** PimEyes (subscription) and FaceCheck.ID (per-search credits) made reverse face search available for $25-300/mo. Yandex remained the strongest non-Western reverse image engine. The same tooling underwrites scam detection (verifying a Tinder match), reconnecting separated families, and stalking; legal regimes diverge per jurisdiction.
3. **Geolocation models for hobbyists.** GeoSpy (until restricted to law-enforcement only in January 2025), Picarta, and Oceanir's Orca model (April 2026, 20.1% accuracy at 1km on Im2GPS3k) brought what was Bellingcat-workshop work into a public web tool. The GeoSpy access withdrawal is a notable counter-example: tooling got too good and was pulled back.
4. **Full-text public-records search.** DocumentCloud SideKick, Pinpoint (Google), and Aleph (OCCRP) ingest scanned PDFs and produce search-grade text plus entity extraction. MuckRock + Sunlight Foundation merger (October 2025) consolidated the open-FOIA stack.
5. **Historical-document AI.** DeepMind Aeneas (Nature, February 2026) for Latin epigraphy. The Vesuvius Challenge ($1.7M paid out, with Nader, Farritor, and Schilliger reading the first sealed Herculaneum scroll passages in February 2024). Akkademia / Babylonian Engine for cuneiform.

## Notable tools

- [FamilySearch Full-Text Search](../tools/familysearch-full-text-search.md): the single highest-leverage unlock; free, ~2B previously-unsearchable images now searchable.
- [Transkribus](../tools/transkribus.md): HTR pipeline, training your own paleographic models on a ~25-page tagged sample.
- [MyHeritage](../tools/myheritage.md): AI Record Finder, Deep Nostalgia animation (119M+ animations), DeepStory.
- [PimEyes and FaceCheck.ID](../tools/facecheck-and-pimeyes.md): consumer reverse face search; ethical hazards real.
- [DocumentCloud and Pinpoint](../tools/documentcloud-pinpoint.md): full-text + entity extraction over scanned PDFs for journalism and FOIA.
- [Vesuvius Challenge](../tools/vesuvius-challenge.md): the open-prize model that read sealed AD 79 scrolls; template for similar problems.
- Aeneas (DeepMind, February 2026): Latin epigraphy restoration and dating; web tool plus Nature paper.
- Bellingcat workshops and Discord: the canonical training ground; not a tool but where the community lives.

## Maturity and limits

Production for English/Spanish/Portuguese FamilySearch search, English-language Transkribus models, and PimEyes face search of public Western web. Beta to research for: Aeneas (academic-grade but new), Cyrillic chancery hands (community models exist, accuracy varies), Oceanir Orca geolocation (state-of-the-art but 20% top-1 km is still 80% wrong). HTR for highly individual scribal hands still benefits from training a custom 25-page model in Transkribus. Face search misses about 30-50% of Asian and African faces in Western-trained models; bias is empirical, not ideological.

## Ethics and risks

The Clearview AI $51.75M class-action settlement (2024) and ICE deployment expansion (late 2025) frame the public face of biometric overreach. Investigative genealogy raised consent questions after the Bear Brook Jane Doe identification (final ID, 2025) and similar cases reached living relatives who never consented to being in a DNA database. Deepfake-relative voice scams ("Mom, I'm in jail") were a billion-dollar US fraud category by 2025. Tinder rolled out mandatory face-check in October 2025 in response to a Q1 2025 romance-scam surge (Barclays: +20% YoY); the same biometric infrastructure that lets a user vet a match is being deployed by platforms to vet users. PimEyes / FaceCheck remain the best-and-worst case: real value to scam victims, real harm potential for stalkers.

## Individual empowerment

| Task | 2022 method | 2024-2026 method | Cost |
|---|---|---|---|
| Read 1850 Polish parish register | Hire researcher in country: $50-200/hr | Transkribus + Polski Bizon model | $0-15/mo |
| Find ancestor in 1900 US state probate | Hand-skim county records | FamilySearch Full-Text Search | $0 |
| Reconstruct adoptee birth family | Parabon consultancy: $1500-5000 | AncestryDNA + GEDmatch + FamilySearch + LLM | $99 + DNA test |
| Geolocate a photo background | Bellingcat workshop or guesswork | Picarta / Oceanir Orca | $0-30/mo |
| Verify Tinder match identity | Reverse Google image search | FaceCheck.ID (~$3 per search) | $3-25 |
| Cross-reference 10,000-page leak | Newsroom team, weeks | Aleph or DocumentCloud SideKick | $0 |
| Read 18th-century kurrent letters | Paleographer, $40-80/hr | Transkribus + community model | $0-15/mo |
| Animate a great-grandparent photo | Not possible | MyHeritage Deep Nostalgia | $0 (free tier) |
| Read sealed Herculaneum scroll | Impossible for 2000 years | Vesuvius Challenge open code | $0 (compute) |

## See Also

- [Browser use](browser-use.md): underlying agent layer for many investigation workflows.
- [Personal knowledge management](personal-knowledge-management.md): NotebookLM for collected-evidence synthesis.
- [Autonomous research](autonomous-research.md): adjacent layer for source synthesis.
- [Specific unlocks](../analysis/specific-unlocks.md): the underlying brainstorm.
