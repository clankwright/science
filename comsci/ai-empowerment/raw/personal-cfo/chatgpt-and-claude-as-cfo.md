# ChatGPT and Claude as DIY personal CFO

## What it is

The pattern: dump your aggregator export (CSV from Monarch/Copilot/Empower, or transactions from your bank), paste into a long context window with Claude or ChatGPT, and use the model as a planning consultant. By May 2026 a meaningful share of households are doing this. About a quarter of US workers said they planned to use AI to help file 2026 taxes (more than double 2025's 11%), and the same pattern extends to broader planning questions.

## Specific unlocks

- "Paste 12 months of categorized transactions and ask Claude to find your three biggest discretionary leaks, then build a $400/mo savings plan that doesn't touch fixed costs."
- "Drop your tax return PDF, your 401k Plan Document, and last year's W-2 into Claude, ask it to model whether mega-backdoor Roth makes sense given your income and the plan's in-service distribution rules."
- "Get a tax-strategy second opinion on your CPA's recommendations before you file, by pasting both your draft return and a description of the strategies the CPA proposed."
- "Run a 30-year FIRE projection by describing your assets in plain English: 'I have $850k in VTI, a $400k mortgage at 3.1%, $4k/mo expenses, age 38, target retire at 50.'"
- "Build a custom Excel cash-flow model in 5 minutes by describing your situation and having Claude generate the formulas."

## Where it works

- **Concept explanation.** "Walk me through how a Roth conversion ladder interacts with the 5-year rule" is something LLMs do well, with citations to current rules if you ask for them.
- **Frameworks and trade-offs.** "Compare strategies for Z" is the LLM sweet spot.
- **Custom model building.** Generating Excel formulas, Python scripts for portfolio analysis, Sankey diagrams from your cash-flow data. This is a real unlock vs. paying $200/hr to a financial analyst.
- **Document analysis.** Reading 401k plan documents, insurance policies, trust documents, K-1s and explaining what's in them.
- **Pre-meeting prep.** Generating the questions to ask your actual CFP/CPA so the meeting is efficient.

## Where it breaks

- **Tax law currency.** LLMs train on text that includes outdated tax code. Even GPT-5 / Claude 4.5 will quote a deduction limit that changed two years ago without flagging it.
- **Refund / amount-owed math.** A test of four AI chatbots in March 2026 found they miscalculated refunds or amounts owed by an average of more than $2,000, even when given all forms.
- **Hallucinated authorities.** Documented cases of ChatGPT inventing a "safe harbor for deductions" cited in an actual IRS dispute, resulting in IRC §6662 penalties.
- **No real-time data.** Unless you bring it, the LLM doesn't know today's mortgage rates, current 30-year Treasury, or even the current standard deduction with high reliability.
- **No fiduciary duty.** If the AI's advice loses you $50k, no recourse.

## The privacy gotcha

Sharing financial details with a public LLM exposes them to: (a) the provider's training data unless you opt out / use API; (b) breach risk; (c) subpoena risk. Best practice as of 2026:

- Use the API directly (Claude API, OpenAI API) with data-retention turned off, not the consumer chat product.
- Strip PII (SSN, account numbers, full name) before pasting.
- Or use a local model (Llama, Qwen) for the most sensitive analysis. 70B-class local models are now competent enough for financial reasoning if you have the hardware (~32GB VRAM via quantization).

## Pre-AI baseline

- DIY Excel modeling, hours of work per question.
- Bogleheads forum: free, asynchronous, decent for standard cases.
- One-shot CFP plan: $2k-$5k.
- Hourly fee-only via XYPN: $150-$300/hr, 3-hour minimum.
- CPA hourly: $150-$400.

## Cost / access

- ChatGPT Plus: $20/mo. Claude Pro: $20/mo. ChatGPT/Claude API: usage-based, ~$5-$30/mo for heavy personal use.
- Free tiers handle most planning conversations; paid tiers needed for long-context document dumps.
- AmEx Business Platinum/Gold added a $300/yr ChatGPT statement credit in 2026, which is a tell about how mainstream the workflow is.

## Maturity

Production for the workflow; quality varies by model. Best practice as of 2026:

- Use Claude Opus 4.5 / GPT-5 / Gemini 2.5 Pro for the actual reasoning.
- Use a structured prompt with: your situation, your question, the constraints you know about, an explicit "flag where you're uncertain" instruction.
- Cross-check tax-specific claims against IRS publications or a real CPA before acting.
- Treat the LLM as a junior analyst, not a senior advisor.

## Honest take

This is the highest-leverage unlock in the category for users willing to do the prompt-engineering work. A $20/mo Claude or ChatGPT subscription, combined with your own discipline about checking outputs, replicates probably 60-70% of what a $2k CFP one-shot delivers. The remaining 30-40% (fiduciary duty, edge-case awareness, accountability, behavior coaching) is what you give up.

## Sources

- https://www.cnbc.com/2026/03/31/ai-tax-help-pitfalls.html
- https://www.cnbc.com/2026/04/18/ai-prompts-personal-finance-advice.html
- https://www.pymnts.com/taxes/2026/as-tax-deadline-approaches-consumers-are-going-to-ai-before-filing/
- https://news.bloombergtax.com/financial-accounting/dont-trust-ai-always-verify-tax-law-still-needs-humans-pt-1-1
- https://www.boldin.com/retirement/chatgpt-retirement-planning/
