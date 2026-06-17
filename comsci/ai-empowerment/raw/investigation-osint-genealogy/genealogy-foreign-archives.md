# Genealogy: Foreign-Language Archives Become Searchable

## What it is

Until 2024, the world's largest genealogy databases were keyword-searchable only over hand-indexed records: a tiny fraction of what was actually scanned. The bulk of FamilySearch's 18+ billion record images sat as un-OCR'd microfilm scans, findable only if you knew which roll covered which parish in which year. Three releases in 2023-2024 changed this: MyHeritage AI Record Finder (Dec 2023, conversational search over 20B records), FamilySearch Full-Text Search (March 2024, HTR-indexed search across ~2B initially scaling to many billions), and Ancestry's AI-assisted hint engine (rolled out across 2024-2025).

## Specific unlocks

- Find a great-grandfather's 1880 land deed in Pennsylvania court records that was never indexed. FamilySearch's Full-Text Search now reads the handwriting and surfaces it on a name match.
- Trace a Galician Jewish ancestor through Russian-Empire records that FamilySearch had scanned but never transcribed, by combining FamilySearch Full-Text Search (Spanish/Portuguese launched first, expanding) with Transkribus models for the actual document.
- Submit "find me a Patrick Murphy who emigrated from Cork to Boston around 1855 and married a woman named Bridget" as a free-text query to MyHeritage AI Record Finder; it returns candidate records ranked by likelihood across 20B sources.
- Read the Yandex-hosted 2.5M Russian state archive records that came online in 2023 with AI-generated transcriptions, including conscription rosters and revision lists, without speaking Russian.
- Use Metryki.com (paid, AI-powered) to transcribe historical Polish, Latin, German, and Russian church and civil records at 85-95% accuracy on well-preserved sources, replacing $25-50/page human translators.
- Run AncestryDNA's ThruLines and MyHeritage's Theory of Family Relativity, which use an LLM-style inference layer over user-built trees plus DNA matches to suggest exactly how two cousins are related.

## Pre-AI baseline

If your ancestors were not Western European, English-speaking, or wealthy, your tree typically stopped at the immigrant generation. Records existed but were locked behind language, script, and the absence of a name index. Polish parish records, Russian-Empire revision lists, Sephardic burial registers, and Italian civil records all required either a paid local researcher (~$50-200/hour) or a multi-year personal investment in language and paleography. AncestryDNA hints relied on hand-built tree overlap.

## Cost / access

- FamilySearch (including Full-Text Search): free with a registered account. Run by The Church of Jesus Christ of Latter-day Saints.
- MyHeritage AI Record Finder: free for the search itself; record viewing requires a Premium or Complete subscription (~$129-189/year).
- Ancestry: subscription tiers $25-60/month.
- Metryki: paid per-page or per-project; significantly cheaper than human translators.
- Yandex Russian-archive records: free.
- Vilnius University VILNISH (Yiddish/Hebrew): free for academic and personal-history use.

## Maturity

- FamilySearch Full-Text Search: production for English, Spanish, Portuguese; Spanish and Portuguese collections rank 4th and 5th by record volume as of early 2025. Chinese, French, German, Dutch, and Italian announced for 2026.
- MyHeritage AI Record Finder: beta on web, planned mobile rollout.
- AncestryDNA ThruLines: production but the inference quality degrades past 4th cousin.
- L'Dor V'Dor / Polski Bizon / VILNISH: production for the listed scripts and languages, beta for less-attested rabbinical and provincial variants.

Where it breaks: AI-transcribed names get garbled (a "Wojciech" can become "Vojciek" in the index, missed by exact-match search); the system over-trusts confident hallucinations on damaged pages.

## Sources

- https://www.familysearch.org/en/blog/what-is-full-text-search
- https://genealogybargains.com/familysearch-full-text-search-2/
- https://www.familysearch.org/en/blog/familysearch-year-in-review-2025
- https://blog.myheritage.com/2023/12/introducing-ai-record-finder-the-worlds-first-ai-chat-based-search-engine-for-historical-records/
- https://www.metryki.com/
- https://lostrussianfamily.wordpress.com/2023/02/18/artificial-intelligence-makes-more-than-2-5-million-russian-archive-records-accessible-to-all/
- https://familylocket.com/ai-powered-full-text-search-of-handwritten-text-at-familysearch/
