# AMIE / Med-PaLM and frontier LLMs on health

## AMIE (Articulate Medical Intelligence Explorer) — Google DeepMind
- Status: research, not a product. Successor to Med-PaLM / Med-PaLM 2 lineage.
- Headline study: published in Nature, April 9 2025. "Towards accurate differential diagnosis with large language models" (PMC12158753 / pubmed 40205050).
- Setup: 20 clinicians, 302 challenging real-world cases from published case reports; randomized to "search + standard resources" vs "search + standard resources + AMIE."
- Result: AMIE *standalone* top-10 differential accuracy 59.1% vs unassisted clinicians at 33.6% (p=0.04). With AMIE assistance, clinicians hit 51.7% top-10 (vs 36.1% unassisted, 44.4% with search).
- AMIE outperformed clinicians on 30/32 specialist-rated axes and 25/26 patient-actor-rated axes.
- Significance: first published evidence of an LLM beating clinicians on a meaningful diagnostic-reasoning benchmark *and* helping clinicians beat themselves when used as an assistant.
- Caveat: case-report cases are unusually clean and information-rich. Real consultations are messier. Also no live patient: AMIE talks to "patient-actors."

## Med-PaLM lineage
- Med-PaLM (Dec 2022): first LLM to pass USMLE-style questions at >60%.
- Med-PaLM 2 (May 2023, arXiv 2305.09617): 86.5% on MedQA (USMLE), expert-level. Released to selected Google Cloud customers.
- The lineage is now folded into Gemini's medical capability and AMIE. Med-PaLM 2 itself is no longer the headline product.

## Frontier general-purpose LLMs on health
- Scale: per OpenAI (late 2025), 40M people ask ChatGPT healthcare questions every day. ~1 in 4 of ChatGPT's 800M weekly users submits a health prompt at least weekly.
- Consumer behavior: 3 in 5 US adults used AI for health/healthcare in past 3 months; 55% for symptom checking, 52% for after-hours questions, 48% for understanding medical terms, 44% for understanding treatment options.
- Mental health: ~1 in 8 US adolescents/young adults use AI chatbots for mental-health advice; 66% engage at least monthly; 93% report the advice was helpful (RAND, Nov 2025).
- Sentio University study (cited often): ChatGPT may now be the largest single mental-health "provider" in the US by user count.

## Accuracy studies (2025)
- Polish medical/dental finals (Nature Sci Reports, 2025): Claude was the only model to pass on each attempt across all groups. ChatGPT-4 and Gemini close behind.
- Cardiology MCQs: Claude 78.31%, ChatGPT-4 / Gemini 75.90%.
- Lumbosacral radicular pain vs clinical practice guidelines (Frontiers): *no* chatbot achieved absolute agreement with guidelines. Best matchers — Perplexity 67%, Gemini 63%, Copilot 44%. Authors concluded "do not perform adequately to be recommended for patient use."
- Consistency problem: same prompt → different answer rates of 26-68% across models. Reproducibility is poor in 2025.

## Empowerment story
- Pre-2023: a non-trivial health question meant either (a) a $200 visit, (b) Dr. Google + WebMD, (c) a forum like Reddit r/AskDocs.
- 2026: a frontier LLM gives a calibrated, citation-aware answer for most general questions, will explain a lab result, will translate a discharge summary, will generate questions to ask your physician. For symptom triage it's roughly on par with a primary-care doctor on common presentations and substantially worse on rare presentations / red flags.
- The consumer-grade ceiling is set by "general LLM with internet search." The clinician-grade ceiling (OpenEvidence, Glass, AMIE) is much higher but gated by verification.
