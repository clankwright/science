---
id: facecheck-and-pimeyes
title: "FaceCheck.ID and PimEyes"
kind: tool
vendor: FaceCheck.ID; PimEyes
access: subscription / per-search
maturity: production
cost_tier: mid (PimEyes $30-300/mo; FaceCheck per-search credits)
year_first_public: PimEyes 2017; FaceCheck 2020
last_verified: 2026-05-04
---

# FaceCheck.ID and PimEyes

> **Summary:** The two consumer-accessible reverse face search engines. Used legitimately for romance-scam victim verification, reuniting separated families, and journalism; misused for stalking and doxing. Tinder's October 2025 mandatory face-check rollout shows platforms now adopting the same biometric infrastructure.

**Sources:** [[raw/investigation-osint-genealogy/image-and-face-search.md]], [[raw/investigation-osint-genealogy/ethics-and-risks.md]]

## What it does

Upload a face photo, get web matches with the same face. PimEyes searches its crawl of public web faces. FaceCheck specializes in scam-victim and OSINT use cases, with per-search pricing.

## Access and cost

PimEyes: tiered subscription $30-300/mo by search volume. FaceCheck.ID: per-search credits, ~$3 per search at low volume. Both have free tiers that show match thumbnails but require payment to see source URLs.

## Distinctive trait

These are the two engines that work for individuals. Clearview AI, Pimeyes' enterprise competitor, is law-enforcement-only. Yandex remains the strongest reverse image search for non-Western faces and obscure source pages, but does not specialize in faces.

## Limits

- Asian and African face accuracy is weaker than Western face accuracy in both engines (training-set bias).
- PimEyes claims to refuse searches for non-self images; enforcement is inconsistent.
- Legal status varies: GDPR enforcement in EU, BIPA enforcement in Illinois, ambiguous elsewhere.
- The dual-use problem is inherent; using these tools for OSINT or scam defense leaves the same audit trail as misuse.

## See also

- [Investigation, OSINT, and genealogy](../capabilities/investigation-and-genealogy.md)
- [Browser use](../capabilities/browser-use.md): for automating multi-source verification workflows.
