---
id: openevidence
title: "OpenEvidence"
kind: tool
vendor: OpenEvidence
access: free (verified clinicians only)
maturity: production
cost_tier: free
year_first_public: 2023
last_verified: 2026-05-03
---

# OpenEvidence

> **Summary:** RAG-grounded medical decision-support tool for verified clinicians. Free to use. 760k registered US physicians, ~18M consultations/month, $12B valuation Jan 2026. Not directly a consumer product, but the strongest specialized medical AI in the wiki: an individual benefits indirectly when their doctor uses it.

**Sources:** [[raw/personal-pro-services/medical/openevidence.md]]

## What it does

Search and synthesis tool over peer-reviewed medical literature. Clinicians ask a question (about a differential, drug interaction, treatment protocol) and get a cited synthesis from primary sources. RAG pipeline keeps grounding tight; designed for clinical use.

## Access and cost

Free for verified physicians and clinicians (license verification required). Funded by an ad model (pharma) which is itself a debated design choice.

## Distinctive trait

Clinician-verified gating + RAG over primary medical literature is the architecture that makes this safe at scale. Hallucination rate substantially below general-purpose chatbots on medical Q&A.

## Limits

- Not available to non-clinicians. Individuals access it indirectly through their physician.
- Pharma-ad funding model raises conflict-of-interest questions; this is the test case for whether ad-funded clinical AI is acceptable.

## How an individual benefits

Ask your doctor whether they use OpenEvidence (or a comparable tool). A doctor with current literature synthesis at hand is materially better positioned to answer your case-specific question than one relying on training memory and irregular CME.

## See also

- [Personal medical AI](../capabilities/personal-medical-ai.md)
- [K Health](k-health.md): direct-to-consumer alternative.
- [Shortlist](../analysis/shortlist.md)
