# OpenEvidence

## Vendor / access / cost
- Vendor: OpenEvidence (Cambridge MA, founded 2021; spun out of Mayo Clinic / Daniel Nadler — formerly of Kensho).
- Access: free for verified US clinicians. Verification gates account creation. Not consumer-facing by design, but no paywall, so motivated users sometimes route questions through clinician friends or read clinician-shared screenshots. Revenue is ad-supported (pharma/device manufacturers buy contextual ads inside answers — controversial but disclosed).
- Cost to clinician: $0.

## Maturity (May 2026)
- 760,000 registered US physicians by Dec 2025; ~18M consultations/month; record 1M consultations in a single 24h window on Mar 10 2026.
- Series A $75M (Feb 2025, $1B valuation, Sequoia) → Series B $210M ($3.5B) → Series C $200M (Oct 2025, $6B) → Series D $250M (Jan 2026, $12B). Total raised ~$700M. Investors include Google Ventures, Nvidia, Sequoia, Blackstone, Thrive, Kleiner Perkins, Mayo Clinic.
- Self-described "fastest-growing application for physicians in history."

## Distinctive trait
- RAG over the indexed peer-reviewed medical literature (NEJM, JAMA, Cochrane partnerships). Every answer carries inline citations to specific studies, not just general references. This is the citation-grounded model done right: clinicians can click through.
- DeepConsult agent (released alongside the Series B) is the first agentic mode — runs a multi-step research plan instead of single-shot Q&A.

## Why it matters for the empowerment story
- OpenEvidence is the cleanest example of "frontier LLM + curated medical corpus + citations" displacing the old reference workflow (UpToDate subscription at ~$500/yr per clinician, slow text search).
- For consumers: not officially accessible, but its existence drives the upper bound on what general-purpose ChatGPT/Claude could match if they licensed equivalent corpora. It also resets the bar for what "competent medical Q&A" looks like: every claim cited, every citation a real PubMed-indexed paper.

## Caveats
- Ad-funded model raises conflict-of-interest questions: contextual pharma ads inside an answer about that drug class. OpenEvidence says ads are clearly labeled and don't influence answer generation. Not yet stress-tested by independent audit as of May 2026.
- Clinician-facing tone; consumer would need to interpret "consider amiodarone vs sotalol" type answers.
