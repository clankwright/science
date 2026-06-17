# Regulatory and ethics overview — personal professional services AI

Cross-cutting issues that apply across legal / medical / tax / financial AI. The wiki capability page should fold these into the "honest limits" section.

## The four professions, four regulatory regimes

| Domain | Pro license required | UPL-equivalent enforcement | Penalty for individual user | Liability if AI gives bad advice |
|---|---|---|---|---|
| Legal | Bar membership, state-by-state | Active (UPL statutes in all 50 states; FTC enforcement against vendors) | None for self-help | None for AI vendor in practice; user owns the consequence |
| Medical | State medical board license | Practice-of-medicine statutes; FDA jurisdiction over "medical devices" including some AI | None for self-research | None directly; complicated when an AI is integrated into a clinical workflow |
| Tax | None to file your own; CPA / EA / attorney for paid prep | Circular 230 governs paid preparers; doesn't bind AI vendors yet | Penalties + interest on tax owed | None for AI vendor; "reasonable cause" defense requires reliance on a *qualified* preparer |
| Financial advice | RIA / SEC registration for "advice"; broker-dealer rules for execution | Actively enforced, but mostly against humans | None for self-management | RIA fiduciary duty if registered (Origin); no duty for general LLMs |

## Hallucination as a regulatory pressure point
- Mata v. Avianca (2023) cemented the legal hallucination problem in the public mind: a lawyer cited fabricated ChatGPT cases and was sanctioned. Continues to recur — every few months a new lawyer gets sanctioned for the same error.
- Equivalents in medicine: fabricated drug interactions, fabricated dosing recommendations, fabricated study citations. Less litigated only because the consumer-medical use case is more diffuse.
- The technical fix is RAG over vetted corpora (OpenEvidence model). The regulatory fix is to require it for any "professional advice" claim.

## Liability allocation in 2026
- General position: the user owns the consequence. AI vendors disclaim liability in their ToS. No US court has yet held an AI vendor liable for "bad professional advice" in a way that survived appeal (as of May 2026).
- Exceptions emerging:
  - Character.AI minor-suicide cases (settling Jan 2026) — likely to set a duty-of-care floor for vulnerable users.
  - DoNotPay / FTC (Feb 2025) — set the marketing-claims floor for "AI lawyer" / "AI doctor" type pitches.
- Insurance: no major carrier offers "AI advice malpractice" coverage for individuals as of mid-2026.

## Jurisdictional fragmentation
- Legal: 50-state variation (and country-by-country internationally).
- Tax: federal + 50-state + city + foreign filing rules.
- Medical: drug approvals, off-label rules, controlled-substance scheduling vary by state.
- Financial: SEC + 50-state securities regulators + foreign equivalents.
- Frontier LLMs handle this badly. They tend toward "what is generally true in the US" and quietly get details wrong on jurisdictional edge cases. RAG over jurisdiction-tagged sources (per OpenEvidence model) is the only credible fix.

## The professional-in-loop pattern (the actual production pattern in 2026)
- Across all four domains, the production-grade pattern is AI-then-human:
  - K Health: AI triages, clinician prescribes.
  - FlyFin: AI hunts deductions, CPA files.
  - Range / Origin: AI handles routine questions, human advisor handles complex/execution.
  - Hippocratic AI: AI handles routine patient calls, escalates to clinician on red flags.
- The pure AI-only consumer product is rare and where it exists (DoNotPay) it has drawn regulatory fire.
- This shapes the empowerment story: the AI is *unlocking access* to the professional, not replacing the professional. Pre-AI baseline was "no access at all" or "$300/hr access." Post-AI baseline is "$50-$500/yr access to AI + escalation to a human when needed."

## Open ethical questions
- Ad-funded clinical AI (OpenEvidence): conflict-of-interest concerns when pharma ads sit next to medication recommendations.
- Data aggregation (Intuit Assist tying TurboTax to Credit Karma; Range tying tax + investment + estate): comprehensive financial profile in one vendor's hands.
- Vulnerable-user safety (Character.AI): when the "professional services" line bleeds into companionship and emotional support.
- Equity: AI lowers cost of professional services, which is empowerment. But AI also displaces lower-tier professionals (paralegals, nurse-line operators, junior tax preparers) which is the other side of the same coin.
- Calibration: LLMs are confident in their wrong answers. Most consumers have no way to tell when they should second-guess.
