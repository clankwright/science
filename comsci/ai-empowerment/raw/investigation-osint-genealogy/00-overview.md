# Investigation, OSINT, Journalism, and Genealogy: Capability Overview

**Compiled:** 2026-05-04
**Scope:** AI tools that shifted investigative work, open-source intelligence, journalism, and family-history research from institutional or specialist territory into something a single motivated person can do from a laptop in 2024-2026.

## What this category covers

Four overlapping practices that all share the same operational shape: take a fragment (a face, a name on a tombstone, a building in a video, a stack of court PDFs), expand it into a network of facts, and verify the network against multiple independent sources. Each was historically gated by either expertise (reading kurrent script, geolocating a Syrian rooftop), access (paywalled archives, satellite imagery licensing), or labor (transcribing 4,000 pages of parish registers).

## What was hard or impossible before (2022 baseline)

- **Reading old handwriting.** A 1850 Polish parish entry in cursive Cyrillic took years of language plus paleography study, or a $30/page professional translator.
- **Searching unindexed records.** FamilySearch held billions of record images that were not full-text searchable. You had to know which microfilm reel covered which parish in which year and read every page.
- **Geolocating a photo.** Bellingcat-class geolocation took analysts hours per image. PlaceFinder did not exist as a consumer product.
- **Reverse face search across the open web.** Google reverse image worked on near-duplicates only. Yandex was the only mass-market option and it was inconsistent.
- **Reading deciphered ancient texts.** Akkadian, Linear B, and the Herculaneum scrolls were specialist domains with sub-100 living readers each.
- **Cold-case identification.** The Golden State Killer (April 2018) was the first major investigative genetic genealogy result; the workflow required Parabon-class consultants billing five-figure sums per case.
- **Transcribing interview audio.** Manual at $1-2/minute or Otter at ~85% accuracy in English only.
- **FOIA-document analysis.** Reading 10,000 pages of released Pentagon emails was a six-month newsroom project.

## The unhobbling moves that mattered

1. **Handwritten Text Recognition (HTR) at scale.** Transkribus + READ-COOP shipped production HTR for dozens of historic scripts. FamilySearch's March 2024 Full-Text Search ran HTR over ~2 billion record images and made them keyword-searchable, including handwritten ones.
2. **Vision models that geolocate.** GeoSpy, Picarta, and successors compare visual features (vegetation, road markings, architectural detail) against geotagged corpora. Oceanir's Orca model reaches 20.1% accuracy at 1 km on Im2GPS3k (April 2026).
3. **Conversational record search.** MyHeritage AI Record Finder (Dec 2023) and similar tools take natural-language descriptions of an ancestor and search 20B records by inference rather than exact-name match.
4. **Mass face-search engines.** PimEyes and FaceCheck.ID indexed billions of public web faces. A single photo finds matches across dating profiles, news photos, social media, and adult content.
5. **Document AI for journalists.** Google Pinpoint handles 200K-document collections with 15-language transcription, free for credentialed journalists. DocumentCloud added ML-based clustering and entity extraction.
6. **Whisper-class transcription.** Free, multilingual, near-human accuracy. Otter, Pinpoint, and dozens of derivatives ride on it.
7. **Ancient-script LLMs.** DeepMind Ithaca (2022) into Aeneas (Feb 2026) for Greek inscriptions; Akkademia for Akkadian; Vesuvius Challenge solving carbonized Herculaneum scrolls in Feb 2024.
8. **Investigative genetic genealogy democratization.** Adoptees can now reconstruct birth families from a single autosomal DNA test plus GEDmatch upload plus an LLM-assisted pedigree triangulation, no consultant required. Cold-case workflows that solved the Golden State Killer are now the standard hobbyist toolkit.

## The unhobbling shape

Solo individuals can now:

- Transcribe a great-great-grandfather's 1843 emigration paperwork from German kurrent without learning the script.
- Identify the building behind a hostage video using a free geolocation site in minutes.
- Reverse-search a Tinder profile photo and find the same face on a Russian-bride scam roster.
- Find an adoptee's birth father from a 2nd cousin DNA match plus three obituaries plus an LLM that builds the descendant tree.
- Run a private FOIA request through Google Pinpoint and surface the three documents that matter out of 50,000.
- Read a 1850 Polish parish register in cursive Cyrillic without learning Polish or Cyrillic or paleography.

## Risk shape

Almost every tool in this category has a stalker mirror. PimEyes was sued in multiple jurisdictions; FaceCheck.ID is openly used for both fraud detection and harassment. Clearview AI's $51.75M class settlement (March 2025) sets the legal baseline. Investigative genetic genealogy raised the Fourth Amendment questions answered (incompletely) by US v. Jones derivatives. The same tooling that lets an adoptee find their birth father lets a domestic abuser find an estranged partner.

## Maturity (May 2026)

- **Production:** Transkribus, FamilySearch Full-Text Search (English/Spanish/Portuguese), MyHeritage AI Record Finder, Pinpoint, Otter, PimEyes, FaceCheck.ID, GEDmatch, Maltego, Topaz Photo AI.
- **Beta / partial:** GeoSpy (now restricted), Picarta, Oceanir, Aeneas, eScriptorium for non-Latin scripts, FamilySearch HTR for Chinese/French/German/Dutch/Italian (announced 2026).
- **Research:** Akkadian decipherment, Linear A, full virtual unrolling of all Herculaneum scrolls.

## Sources

- https://www.familysearch.org/en/blog/what-is-full-text-search
- https://www.transkribus.org/blog/community-ai-the-transkribus-vision-for-2026
- https://bellingcat.gitbook.io/toolkit/more/all-tools/osint-tools-map
- https://en.wikipedia.org/wiki/Investigative_genetic_genealogy
- https://en.wikipedia.org/wiki/Clearview_AI
