---
id: documentcloud-pinpoint
title: "DocumentCloud and Pinpoint"
kind: tool
vendor: MuckRock+Sunlight; Google Journalist Studio
access: free for journalists / civic
maturity: production
cost_tier: free
year_first_public: DocumentCloud 2009; Pinpoint 2020
last_verified: 2026-05-04
---

# DocumentCloud and Pinpoint

> **Summary:** Two free platforms for full-text search, OCR, and entity extraction over scanned PDFs. DocumentCloud (now operated by MuckRock + Sunlight Foundation following October 2025 merger) is the journalism standard; Pinpoint is Google's offering with strong handwriting and audio transcript handling. Both turn boxes-of-PDFs into searchable corpora in minutes.

**Sources:** [[raw/investigation-osint-genealogy/public-records-and-foia.md]], [[raw/investigation-osint-genealogy/journalism-ai-tools.md]]

## What it does

Upload PDFs (FOIA returns, court dockets, lobbying filings, leaked archives). Both run OCR, extract entities (names, places, dates, organizations), and provide full-text search with highlighting. DocumentCloud SideKick adds AI summarization. Pinpoint integrates Google's transcription stack for audio sources.

## Access and cost

Free for verified journalists, students, and civic-tech workers. Pinpoint requires a Google Workspace account. DocumentCloud is open to non-journalist FOIA requesters via MuckRock account.

## Distinctive trait

DocumentCloud is the cross-newsroom shared corpus: millions of public records uploaded over 16 years, mostly searchable by anyone. Pinpoint's handwriting recognition is stronger; its audio transcript with speaker diarization is journalism-grade.

## Limits

- Pinpoint requires Google account verification; non-journalist access is limited.
- Neither replaces a custom RAG pipeline for novel domain extraction.
- Aleph (OCCRP) is a stronger choice for cross-leak entity resolution at investigation scale.

## See also

- [Investigation, OSINT, and genealogy](../capabilities/investigation-and-genealogy.md)
- [NotebookLM](notebooklm.md): adjacent tool for source-grounded synthesis over collected documents.
