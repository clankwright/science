# Public Records, FOIA, and Document Mining

## What it is

Government, court, and regulatory document corpora are unfathomably large and unevenly indexed. FOIA releases come as PDFs that are sometimes OCR'd, sometimes not, sometimes with redactions overlaid as bitmap images. Court dockets sit behind PACER's $0.10/page paywall. Lobbying disclosures go into specialty databases (LDA, OpenSecrets) that don't cross-reference anything. The 2024-2026 shift: a one-person investigative shop can ingest 50,000 documents into a single tool, run entity extraction, generate clusters, ask natural-language questions, and identify the three pages that matter.

## Specific unlocks

- Drop a 47,000-page FOIA release on Pentagon contracting decisions into Google Pinpoint, get back transcribed/OCR'd text, an entity index of every person and organization mentioned, and the ability to grep with semantic query rather than exact string match.
- Use DocumentCloud's SideKick to train a custom classifier in a browser tab on "documents that mention non-disclosure agreements with foreign governments" after labeling 30 examples; SideKick then classifies the rest of a 200K document set in minutes.
- Submit FOIA requests in bulk via MuckRock with state-specific templates auto-filled, track status across hundreds of agencies, and have new releases routed automatically into a DocumentCloud project.
- Run NYU/MuckRock's Gumshoe NLP tool over thousands of FOIA responses to identify redaction patterns (which agency redacts what, by what FOIA exemption, with what consistency) and surface the most-redacted documents for legal challenge.
- Auto-summarize and cross-reference court dockets (for a single case or a class action) using LLM-driven document analysis, then feed the result back into an investigative thread.
- A solo investigative blogger handles a document-heavy beat that previously needed a 4-person newsroom team (e.g., tracking pharmaceutical manufacturer Adverse Event Reporting System filings month-over-month for cluster signals).

## Tools that matter

- **DocumentCloud (MuckRock).** Free for journalists and academics. Up to 200K documents per project. Built-in OCR, entity extraction, public publishing. SideKick adds in-browser ML classifier training.
- **MuckRock.** Free FOIA filing platform; tracks request status, manages appeals, publishes releases. Merged with Sunlight Research Center in October 2025 to expand local-news capacity.
- **Google Pinpoint.** Free for credentialed journalists/academics. 200K-document collections. Audio transcription up to 2 hours, 15 languages, ~90% accuracy on Hindi (per Main Media's reporting). Part of the same family as NotebookLM. Best free option.
- **Gumshoe.** NYU/MuckRock NLP tool funded by a $200K Patrick J. McGovern Foundation grant; identifies relevant sections in large text corpora.
- **Aleph (OCCRP).** Open-source investigative-data platform from the Organized Crime and Corruption Reporting Project; cross-references leaks (Panama Papers etc.) with public corporate registries.
- **Whisper / WhisperX.** Free local transcription for sensitive audio that cannot leave a journalist's machine.
- **NotebookLM.** Google consumer tool, useful for one-person research over a curated corpus of ~50 sources.

## Pre-AI baseline

A 2018-era investigative reporter on a document-heavy beat ran ABBYY FineReader OCR locally, a homemade Python regex pipeline, and a spreadsheet of leads. Reading 10,000 pages took 4-8 weeks of focused work; entity extraction was manual or required a Stanford NER setup. PACER documents had to be downloaded and parsed individually. FOIA requests went out by certified mail with no central tracking, and follow-up calls were the bottleneck. Bulk requests required a three-month grant cycle to staff.

## Cost / access

- DocumentCloud, MuckRock, Pinpoint, NotebookLM, Aleph: all free for individuals (Pinpoint and DocumentCloud require credential gate as journalist or academic).
- PACER: $0.10/page, capped at $3 per document, with a $30/quarter waiver if usage stays below it.
- Whisper local install: free; needs ~10GB disk and a decent CPU/GPU.
- MuckRock paid tiers for high-volume FOIA filers: $40-200/month.

## Maturity

Production. The largest investigative units in the world (ICIJ Panama Papers, NYT, ProPublica) use this stack; so do solo operators on local-government beats. The bottleneck is no longer the technology; it is the credential gate (you need to certify as a journalist or academic to get into Pinpoint or DocumentCloud) and the FOIA-response time of the underlying agencies (often 6 months to 5 years).

Where it breaks: redactions hide everything that matters; agencies "lose" responsive documents; bitmap-redacted PDFs sometimes leak the underlying text via lazy redaction layers (a recurring scoop pattern).

## Sources

- https://journaliststudio.google.com/pinpoint/about/
- https://www.muckrock.com/
- https://www.muckrock.com/news/archives/2021/nov/30/documentcloud-machine-learning-journalism/
- https://www.muckrock.com/news/archives/2025/oct/22/sunlight-muckrock-merger/
- https://mediacopilot.ai/google-pinpoint-review-free-transcription-thats-good-enough-for-most-journalists/
- https://newsinitiative.withgoogle.com/resources/stories/harnessing-ai-for-journalism-how-main-media-streamlined-ground-reporting-with-pinpoint/
- https://www.muckrock.com/news/archives/2024/oct/30/yale-conference-ai-foia/
