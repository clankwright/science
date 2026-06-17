# Tax: TurboTax (Intuit Assist), FlyFin, and frontier LLMs

## TurboTax + Intuit Assist
- Vendor: Intuit. Intuit Assist is the cross-product agentic-AI layer announced Nov 2025 (CPA Practice Advisor, Nov 6 2025).
- TurboTax 2026 features:
  - Document upload + interpretation (W-2, 1099, K-1, brokerage 1099-B, etc.).
  - Auto-classification of expenses; QuickBooks integration claims ~80% reduction in manual entry for self-employed filers.
  - Flags missed credits/deductions including QBI, EITC, energy credits.
  - Natural-language scenario modeling: "what if I contribute another $5,000 to my IRA?" or "what would my Q4 estimated payment look like?"
  - Multi-state compliance for complex business returns.
- Pricing (US, TY2025 filing season as priced 2025-2026):
  - Free Edition: simple returns (~37% of filers per Intuit).
  - Deluxe: ~$69 federal + state extra.
  - Premium (self-employed / investments): $129+ federal.
  - Live Assisted (CPA on call): adds ~$80-150 to base tier.
  - Full Service (CPA does it all): $200-$500+ depending on complexity.
- Maturity: production at consumer scale; tens of millions of users.
- Distinctive trait: vertical integration with Credit Karma (Intuit owns it) — the AI sees your bank/loan/credit picture as well as your tax picture. This is a meaningful empowerment lever (year-round planning vs once-a-year scramble) but also a substantial data-aggregation concession.

## FlyFin
- Vendor: FlyFin. Targets freelancers / 1099 / self-employed / sole proprietors (gig workers).
- Pitch: AI scans linked accounts (2,000+ financial institutions), surfaces every plausible deduction, then a CPA reviews and files.
- Workflow: AI does the deduction-hunting + categorization (claims to eliminate ~95% of the work); dedicated CPA prepares federal + state returns; CPA also handles audit response if IRS comes asking.
- Pricing: not publicly listed (in-app only). Multiple tiers depending on whether CPA-prepared filing is included. Marketing claims "20x faster, 5x cheaper" than traditional CPA-only and "$7,800 average extra savings" per user.
- Distinctive trait: the only consumer tax AI explicitly built around the freelancer pain (Schedule C deduction-hunting at the transaction level), not the W-2 base case TurboTax was built for.

## ChatGPT / Claude / Gemini for tax research
- Use cases handled well by frontier LLMs:
  - "Explain Section 199A QBI deduction in plain English."
  - "I sold ESPP shares — walk me through the cost-basis adjustment."
  - "Should I file Form 8606 if I did a backdoor Roth?"
  - "What's the difference between MFJ and MFS for someone in my situation?"
  - "Which state do I file in if I moved on August 1?"
- Use cases handled badly:
  - Anything jurisdiction-specific that has changed in the last ~6 months (training cutoffs lag).
  - Multi-jurisdiction (e.g. expat with foreign-earned income exclusion + state residency + country-of-residence rules) — high error rate.
  - Filling out the actual form. LLMs are decent advisors and bad form-fillers; TurboTax/FlyFin still own the workflow.
- Empowerment angle: a consumer can now understand *why* TurboTax is asking a question, and can sanity-check what TurboTax decides. Pre-2023 the choice was "trust the wizard or hire a CPA at $250-$500/hr."

## Wealth.com (tax planning, advisor-mediated)
- Vendor: Wealth.com. Series B $65M (April 2026). Approved by the three largest US broker-dealers in 2025 → access to 50,000+ advisors.
- Ester Intelligence: proprietary AI engine for estate + tax planning. 100,000+ estate documents processed in 2025; 1,000+ deterministic calculations per estate distribution.
- Why noted under tax: the new tax-planning module (launched late 2025) sits inside the estate-planning ecosystem, advisor-facing.
- Out of scope for direct consumer access — it's sold to financial advisors who serve mass-affluent / HNW / UHNW clients.

## Caveats for tax AI generally
- Penalty exposure sits with the taxpayer, not the AI. If a frontier LLM mis-explains a rule and you under-withhold, you owe the penalty.
- Hallucinated case citations are a known LLM failure mode. Tax LLMs have the same failure mode for IRS revenue rulings, PLRs, court cases.
- The IRS has not (as of May 2026) issued any safe-harbor for "I relied on an AI." The "reasonable cause" standard requires reliance on a *qualified* tax professional.
