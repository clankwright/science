# Transkribus, eScriptorium, Kraken: Historical Handwriting Recognition

## What it is

Transkribus is a hosted Handwritten Text Recognition (HTR) platform built on the Kraken / PyLaia engines and operated by READ-COOP SCE, a European cooperative with 250+ private and institutional members. eScriptorium is the open-source self-hosted equivalent, also built on Kraken. Both turn images of historical manuscripts (parish registers, court records, personal letters, ledgers) into searchable text, including in scripts that no longer have living everyday readers (kurrent, sutterlin, court hand, old Slavonic, Hebrew rabbinic semi-cursive).

## Specific unlocks

- Read a 1843 baptism record in German kurrent without learning the script. Apply the "Transkribus Print M1" or "German_Kurrent_M1" model, get 90%+ character accuracy on legible documents.
- Transcribe an entire 200-page family-archive box of letters in Polish handwritten Cyrillic over a weekend on the free 50-credits-per-month plan, then bulk-translate the output with any LLM.
- Process Yiddish and Hebrew personal correspondence using L'Dor V'Dor Foundation's public models launched at IAJGS 2025 in Fort Wayne. Vilnius University's VILNISH service does the same for Lithuanian Jewish archives.
- Use the new Polish "Polski Bizon" SuperModel (released 2025 with L'Dor V'Dor contribution) on both handwritten and printed records covering most Polish-language genealogy archives.
- Run a custom model on grandmother's distinctive handwriting after annotating ~20 pages, then process the remaining 1,000 pages of her diary automatically.
- Process Akkadian cuneiform tablet photos via specialty models trained on the Achemenet corpus and similar projects.
- Self-host the entire pipeline via eScriptorium + Kraken on a workstation when source documents are sensitive (estate disputes, ongoing legal matters) and uploading them to a third-party cloud is unacceptable.

## Pre-AI baseline

Reading historic Polish records required two to four years of paleography study plus the underlying language. Professional genealogical translators charged $25-50 per page for Russian-language Polish records. Handwritten German kurrent transcription was a niche freelance market with multi-week queues. Most family archives in attics simply went unread because the cost-per-page was prohibitive for sentimental rather than legal use cases.

## Cost / access

- Transkribus free tier: 50 credits/month, 1 credit = 1 handwritten page or 2 printed pages.
- Paid: monthly or annual credit packs; on-demand top-ups never expire. READ-COOP membership gives full feature access.
- eScriptorium + Kraken: free, MIT-licensed, requires a workstation with a GPU for training. Pretrained models on Zenodo are free.
- Specialist models (Yiddish/Hebrew via L'Dor V'Dor, Polski Bizon, Akkadian) are free to use through Transkribus.

## Maturity

Production for major Western European scripts (German kurrent and sutterlin, Italian humanist hand, French chancery, English secretary hand). Production-grade for FamilySearch's bulk processing pipeline. Beta-to-good for less-resourced scripts: Yiddish, Hebrew rabbinic, old Slavonic, Hungarian. Research for fragmented or single-witness scripts.

Where it breaks: severely faded ink, unusual abbreviations not present in training data, non-standard layouts (marginalia, palimpsests), and any document where a literate native reader of the period would also struggle.

## Sources

- https://readcoop.eu/
- https://www.transkribus.org/plans
- https://www.transkribus.org/blog/community-ai-the-transkribus-vision-for-2026
- https://www.transkribus.org/blog/transcribe-handwritten-hebrew-yiddish-documents-ai-models
- https://github.com/mittagessen/kraken
- https://en.wikipedia.org/wiki/EScriptorium
- https://ldvdf.org/ai-lab/
- https://jewishwebsite.com/jewish-world/new-ai-service-at-vilnius-university-to-unlock-handwritten-yiddish-hebrew-archives/112396/
