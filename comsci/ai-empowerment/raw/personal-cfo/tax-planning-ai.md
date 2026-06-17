# Tax planning AI: April, Keeper, TaxGPT, Perplexity

## What it is

A category of AI-augmented tax tools that goes beyond pure return-prep (TurboTax, FreeTaxUSA) into the planning conversation: which deductions apply to your situation, what strategies to deploy before year-end, what your CPA might be missing. Tax-loss harvesting is covered separately under robo-advisors; this page is everything else.

## Specific unlocks

- "Drop your draft tax return into Perplexity's tax agent and have it find the deductions and credits you missed before you file."
- "Have Keeper Tax watch your bank/card transactions year-round and auto-categorize the deductible ones for Schedule C, instead of a January scramble."
- "Get April to pre-fill your 1040 by reading your W-2, 1099s, and brokerage 1099-B PDFs, then suggest tax strategies before you submit."
- "Ask TaxGPT a tax question grounded in actual IRS publications instead of getting a confident-sounding hallucination from generic ChatGPT."

## Specific tools

### April
- Embedded tax-prep + planning. White-labels into financial apps (Gusto, Acorns, Fidelity Bloom) so users file without leaving their main app.
- Launched AI-powered tax planning tools for advisors in late 2025 / early 2026.
- Distinguishing trait: built specifically for embedded distribution; consumer rarely sees the April brand directly.

### Keeper Tax
- Targets gig workers / 1099 earners.
- AI scans linked bank/card transactions year-round, flags deductible ones, builds Schedule C automatically.
- Files federal + state for ~$200/yr including continuous tracking + CPA review at filing.
- Distinguishing trait: continuous tracking, not annual scramble.

### TaxGPT
- AI tax assistant for individuals and CPAs. Trained / RAG-grounded on IRS publications and case law.
- Aimed at "give a confident answer with a citation, not a hallucination."
- Free trial; paid tiers for CPAs / tax pros mainly.

### Perplexity Computer for Taxes
- Launched for the 2026 filing season.
- AI agent that reads uploaded financial documents, asks follow-up questions, and drafts a federal return mapped to actual IRS forms.
- Sits in Perplexity's broader agent platform; a tax-prep entrant from a search/AI company, not a tax-software company.

### CPA Pilot
- AI assistant for CPAs (B2B), but the consumer-facing equivalent of "ground answers in real tax code" is the same pattern.
- Uses RAG against current tax law to reduce hallucinations vs. generic ChatGPT.

## Cleo, Charlie (older), other budget-coaching tools

These overlap on "talk to me about my finances" but mostly sit on the budgeting side: Cleo's value is sass-driven engagement with budgeting and small cash advances, not tax strategy. Charlie (the Catch app's chatbot) does similar. They are mentioned here for completeness; their tax capabilities are minimal.

## Pre-AI baseline

- TurboTax: $50-$200/yr return-prep, no planning conversation.
- CPA: $300-$2,000/yr for prep, more for planning.
- Hourly tax planner: $200-$500/hr.
- Generic ChatGPT for tax questions: free, but hallucinates.

## Cost / access

- April: usually embedded in a host app (variable).
- Keeper: ~$192-$240/yr.
- TaxGPT: free tier + paid CPA-focused tiers.
- Perplexity: tax agent inside the Perplexity Pro subscription ($20/mo).

## Maturity

- Return-prep tools (April, Keeper, Perplexity Computer for Taxes): production for the simple cases (W-2 + 1099 + standard deduction + basic Schedule C). Edge cases (multi-state, K-1, foreign income, complex PTET) still need human review.
- Planning conversation: production at the simple-case level (which deduction applies). Beta or worse for strategy (NQDC sequencing, QSBS, opportunity zones, complex partnership structures).
- TaxGPT-style RAG-grounded answers: production. Hallucination rate is meaningfully lower than vanilla LLMs. Still not zero.

## Honest take

The best-positioned tax AI in 2026 is the embedded one (April inside Gusto / Fidelity Bloom) because the user doesn't have to think about which tool to use. The flashiest is Perplexity. The one most likely to actually save you money is Keeper if you're a 1099 worker who would otherwise miss deductions. None of these is a substitute for a CPA on a complex household; all of them are a substitute for TurboTax-only on a moderately complex one.

## What still needs a human

- Audit response.
- Multi-state filing with apportionment.
- K-1s with footnotes that change the federal treatment.
- International (FBAR, Form 8938, FEIE optimization).
- Anything where IRC anti-abuse doctrines (economic substance, step transaction) come into play. LLMs handle literal rules but not "what was the purpose."

## Sources

- https://www.taxgpt.com/ai-tax-assistant-for-individuals
- https://www.pymnts.com/taxes/2026/perplexity-launches-ai-agent-that-drafts-tax-returns/
- https://finance.yahoo.com/news/april-introduces-ai-powered-tax-162715505.html
- https://www.cnbc.com/2026/03/31/ai-tax-help-pitfalls.html
- https://www.cpapilot.com/blog/ai-tax-planning-tools-comparison/
- https://news.bloombergtax.com/daily-tax-report/dont-trust-ai-always-verify-tax-law-still-needs-humans-pt-2
