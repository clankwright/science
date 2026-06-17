# Personal Professional Services AI — capability page draft

A draft of the actual wiki page, ready for the curator to refine.

## What's new (2024-2026)

Pre-2023, an individual with a non-trivial legal, medical, tax, or financial question had three options: hire a professional ($150-$500/hr), accept poor self-help info, or ask the internet (forums of variable quality). By 2024-2026 a fourth option arrived: ask a frontier LLM, or one of several startups specifically built for the consumer tier of these markets.

The capability is real but narrow. Frontier LLMs handle most consumer-grade variants of these questions competently — they explain the contract, decode the lab result, walk through the QBI deduction, model the retirement scenario. They do *not* reliably handle high-stakes, jurisdiction-specific, or rapidly-changing edge cases, and high-consequence actions (litigation, diagnosis, filed returns, executed trades) still require a professional in the loop.

## Pre-AI baseline

| Domain | Default option | Cost | Quality |
|---|---|---|---|
| Legal | Hire a lawyer / read a forum | $200-$500/hr or free + bad | Pro: high. Forum: variable. |
| Medical | See a doctor / Dr. Google | $200/visit or free + bad | Pro: high. Search: poor on rare conditions. |
| Tax | TurboTax / hire a CPA | $69-$129 or $250-$500/hr | TurboTax: workflow good, advice limited. CPA: high. |
| Financial | Robo-advisor / hire a CFP | 0.25% AUM or $1-3k flat | Robo: generic. CFP: gated to ~$250k+ assets. |

## The unhobbling

Three technical advances did the work:

1. **Frontier LLM general capability.** GPT-4 (2023), Claude 3 (2024), Gemini 1.5 (2024) and successors crossed the threshold where they pass professional licensing exams (USMLE, bar, CFP, CPA) at expert level. Med-PaLM 2 hit 86.5% on MedQA in May 2023. AMIE (April 2025 Nature paper) outperformed unassisted clinicians on differential diagnosis (59.1% vs 33.6% top-10 accuracy).
2. **Retrieval-augmented generation over curated corpora.** OpenEvidence over the indexed peer-reviewed literature. CoCounsel over Westlaw. Wealth.com's Ester Intelligence over estate-planning case data. RAG over vetted, jurisdiction-tagged sources is the only credible answer to hallucination in regulated domains.
3. **Citation-grounded answers.** Every claim links to a source the user can verify. This is what separates production-grade tools (OpenEvidence, CoCounsel, Origin) from naive ChatGPT use.

## Top tools per domain

### Medical
- **OpenEvidence** — clinician-facing, free for verified physicians. RAG over peer-reviewed literature with inline citations. 760k registered US physicians, ~18M consultations/month (Dec 2025). $12B valuation (Jan 2026).
- **K Health** — direct-to-consumer. AI symptom-checker (free) + clinician handoff ($49/mo). 68% agreement with practicing physicians on simulated cases per Annals of Internal Medicine.
- **Hippocratic AI** — B2B; deployed by 50+ health systems. Non-diagnostic patient-facing agents. 115M+ patient interactions logged with no reported safety issues.
- **Doximity GPT** — free for verified physicians; HIPAA-compliant; 300k+ unique clinicians.
- **Glass Health** — clinician CDSS with three-tier differential (Most Likely / Expanded / Can't Miss). Counters anchoring bias.
- **AMIE / Med-PaLM** (Google research) — published evidence of LLM > clinician on differential diagnosis. Not a product yet.
- **Frontier LLMs** (ChatGPT, Claude, Gemini) — 40M+ daily health questions on ChatGPT alone. Best for explaining lab results, decoding discharge summaries, generating questions to ask your doctor. Worse for triage of red-flag symptoms.

### Legal
- **ChatGPT / Claude / Gemini as paralegal** — the actual consumer story. Lease review, employment offer review, EULA decoding, demand-letter drafting, navigating insurance disputes. No specialized product needed.
- **DoNotPay** — cautionary tale. FTC settlement Feb 2025 ($193k + restrictions on "AI lawyer" marketing) for failing to validate that outputs matched human-lawyer quality.
- **Out of scope (enterprise only):** Harvey AI (~$1,200/seat/mo, 20-seat min, Am Law 100), CoCounsel (Thomson Reuters, $100s/mo), Spellbook (Word plugin for transactional lawyers), Eve.legal (plaintiff PI firms), EvenUp (plaintiff demand-package generation).

### Tax
- **TurboTax + Intuit Assist** — agentic AI layered into the existing workflow. Document interpretation, expense classification, scenario modeling. $69-$200+ depending on tier.
- **FlyFin** — freelancer-specific. AI deduction-hunting + CPA filing. Built for Schedule C, not the W-2 base case.
- **Frontier LLMs for research** — strong on explaining tax concepts, weak on jurisdiction-specific recent changes and form-filling.

### Financial / wealth
- **Range** — HNW ($200k+ income); flat fee $2,950-$9,950/yr; zero AUM. Built-in AI advisor (Rai) + human CFPs.
- **Origin** — mass-market; $99/yr. First SEC-regulated AI financial advisor (Oct 2025). 10x user growth through 2025.
- **Magnifi** (TIFIN) — DIY investor copilot; $14/mo. Conversational search over 15,000+ securities, multi-account aggregation.
- **Wealth.com** — out of scope (advisor-facing); Ester Intelligence engine for estate + tax planning at the largest broker-dealers.

### Mental health (overlap)
- **ChatGPT** — de facto largest US "mental health provider" by user count (Sentio 2025). 1 in 8 US adolescents/young adults use AI chatbots for mental-health advice (RAND Nov 2025).
- **Wysa** — $74.99/yr; FDA Breakthrough Device designation; CBT-focused.
- **Woebot** — consumer app shut down June 2025; pivoted enterprise-only.
- **Character.AI** — subject of multiple wrongful-death lawsuits (2024-2025); settling Jan 2026; now blocks under-18 chat.

### Fitness / health coaching (overlap)
- **WHOOP AI Coach** — biometric-grounded coaching; GPT-4-powered; bundled with WHOOP membership. Workout-builder from text or screenshot.

## Honest limits

- **Hallucination on edge cases.** Fabricated case citations (Mata v. Avianca and successors), fabricated drug interactions, fabricated tax rules. Worse without RAG over a vetted corpus.
- **Jurisdictional fragmentation.** State-by-state legal/tax variation, country-by-country medical practice variation. LLMs default to "general US" answers and miss the edge.
- **Calibration.** LLMs are confident in their wrong answers. Most consumers cannot tell when to second-guess.
- **Liability sits with the user.** No US court (as of May 2026) has held an AI vendor liable for bad professional advice on appeal. Insurance for "AI advice malpractice" doesn't exist for individuals.
- **Regulatory exposure for vendors.** UPL statutes, practice-of-medicine laws, Circular 230 (paid tax prep), SEC registration for "advice." NY SB 7263 (introduced April 2025) would create private right of action against chatbot proprietors offering substantive professional-services responses.
- **Ad-funded conflicts.** OpenEvidence's pharma-ad model is the test case.
- **Vulnerable users.** Character.AI litigation establishes that emotional / mental-health adjacent chatbot use can produce real harm in minors and at-risk adults.

## Individual-empowerment angle

For someone earning $30k-$80k who couldn't previously afford a lawyer / specialist / CPA / CFP, the change is large:

- Read and *actually understand* a contract before signing.
- Get a second-opinion review of a diagnosis and prepare informed questions for the next clinician visit.
- File self-employment taxes without a $500-$1,500 CPA bill (FlyFin) or with confidence in the workflow (TurboTax + Intuit Assist).
- Get planning-quality financial guidance for $99/yr (Origin) instead of $1-3k for a one-shot CFP plan.
- Decode the insurance denial letter, draft the appeal, navigate the small-claims process.
- Understand the lease before signing, push back on the security deposit, draft the demand letter when the deposit isn't returned.

The upper bound on the empowerment is set by what the AI can do *without* a human professional. The lower bound is set by hallucination, miscalibration, and liability exposure. The production pattern in 2026 is AI-then-human: AI broadens access; the professional handles the consequential action.
