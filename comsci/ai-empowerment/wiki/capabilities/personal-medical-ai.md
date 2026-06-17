# Personal Medical AI

> **Summary:** Frontier LLMs and RAG-grounded clinical tools made consumer-grade medical Q&A practical between 2023 and 2026. The realistic capability is decoding lab results, translating discharge summaries, generating questions to ask a physician, and triaging common presentations. High-stakes diagnosis, controlled-substance prescribing, and rare red-flag triage still require a clinician. Production-grade tools all use the AI-then-human pattern.

**Sources:** [[raw/personal-pro-services/medical/openevidence.md]], [[raw/personal-pro-services/medical/k-health-and-consumer-medical.md]], [[raw/personal-pro-services/medical/amie-and-frontier-llms.md]], [[raw/personal-pro-services/regulatory-and-ethics-overview.md]], [[raw/personal-pro-services/capability-page-draft.md]]

---

## What changed

Pre-2023 a non-trivial health question meant a $200 office visit, Dr. Google plus WebMD, or a Reddit forum. Three technical advances closed the gap:

1. Frontier LLM general capability. Med-PaLM 2 hit 86.5% on MedQA in May 2023. AMIE (Nature, April 2025) reached 59.1% top-10 differential accuracy on 302 challenging case-report cases versus 33.6% for unassisted clinicians.
2. RAG over curated literature. [OpenEvidence](../tools/openevidence.md) cites every claim back to a specific PubMed-indexed study.
3. Clinical workflow integration. [K Health](../tools/k-health.md) and Hippocratic AI built licensed-clinician handoffs around the AI layer rather than positioning the AI as the prescriber.

OpenAI reports 40M people ask ChatGPT health questions every day (late 2025). Roughly 3 in 5 US adults used AI for health questions in the past 3 months per the same source.

## Notable tools

- [OpenEvidence](../tools/openevidence.md): clinician-facing, free for verified US physicians. RAG over peer-reviewed literature with inline citations. 760k registered US physicians and ~18M consultations/month by Dec 2025. $12B valuation as of Jan 2026.
- [K Health](../tools/k-health.md): direct-to-consumer. Free symptom checker; $49/mo for clinician chat or $73/visit. AI agreed with practicing physicians in 68% of simulated cases per Annals of Internal Medicine.
- Hippocratic AI: B2B only. Non-diagnostic patient agents deployed by 50+ health systems. Out of scope for direct individual purchase.
- Doximity GPT: free for verified physicians only. HIPAA-compliant; 300k+ unique clinicians.
- Glass Health: clinician CDSS with three-tier differential including a "Can't Miss" axis to counter anchoring bias.
- AMIE / Med-PaLM (Google research): published evidence of LLM exceeding clinicians on differential diagnosis. Not a product.
- Frontier general LLMs (ChatGPT, Claude, Gemini): the actual consumer story. Best for explaining results, decoding terminology, generating questions for the visit. Worse on rare-presentation triage.
- Consumer health AI grounded in your own records (2026 wave): ChatGPT Health (Jan), Microsoft Copilot Health (Mar), Perplexity Health (Mar), Anthropic Claude for Healthcare, Amazon Health AI. Connect your EHR via third-party intermediaries (b.well, HealthEx, state HIEs) plus Apple Health/Fitbit; answers are grounded in your own labs, medications, and history rather than generic medical Q&A. New consumer tier distinct from clinician-facing OpenEvidence and lab-testing Function Health. Privacy caveat: records leave the HIPAA-covered context. Source: [[raw/2026-06-update/consumer-health-ai-records.md]].

## Maturity and limits

OpenEvidence and K Health are production. The frontier LLM use case for consumer health questions is production by usage but unregulated.

Documented failure modes:

- Hallucinated drug interactions, dosing, and study citations. The technical fix is RAG over a vetted corpus; the regulatory fix has not arrived.
- Calibration. LLMs are confident in wrong answers and most consumers cannot tell when to second-guess.
- Reproducibility. Studies (Frontiers, lumbosacral radicular pain vs CPGs) found no chatbot reached absolute agreement with guidelines and same-prompt-different-answer rates of 26-68%.
- Jurisdictional variation. Drug approvals, off-label rules, and controlled-substance scheduling differ by state.
- Liability. The user owns the consequence. No US court has held an AI vendor liable for bad medical advice on appeal as of May 2026. No "AI advice malpractice" insurance exists for individuals.
- Ad-funded clinical AI: OpenEvidence's contextual pharma-ad model is the test case for conflict-of-interest scrutiny.

Tools positioned as substitutes for licensed practice draw enforcement: see the [DoNotPay](../tools/donotpay.md) FTC settlement for the analogous legal-AI cautionary case. K Health's licensed-clinician handoff is the standard production pattern.

## Individual empowerment

For someone earning $30k-$80k who could not previously afford a specialist consult, the change is concrete: read and understand a discharge summary, prepare a list of informed questions for a 10-minute clinician visit, get a second-opinion explanation of a diagnosis, decode an insurance denial. Pre-2023 baseline was "$200/visit access or no access." The 2026 baseline is "$0 access to a calibrated paralegal-tier explainer plus $49-$449/yr access to a licensed-clinician handoff via [K Health](../tools/k-health.md)."

The professional remains in the loop for any consequential action: prescription, diagnosis, procedure. The unhobbling is access to the explainer layer that previously required a paid consult.

## See also

- [Personal Legal AI](personal-legal-ai.md)
- [Personal Tax and Financial AI](personal-tax-and-financial-ai.md)
- [AI Therapy and Companions](ai-therapy-and-companions.md)
- [OpenEvidence](../tools/openevidence.md)
- [K Health](../tools/k-health.md)
