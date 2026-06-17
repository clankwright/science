# Personal CFO / holistic financial planning AI: overview

## What this category is

The "personal CFO" overlay sits one rung above robo-advisors. Robos (Betterment, Wealthfront, Schwab Intelligent) allocate a portfolio against a target risk and rebalance it. They do not answer "should I do a Roth conversion this year," "is my emergency fund big enough given my equity comp vests in March," or "is the term-life policy my broker pitched a rip-off."

Personal-CFO AI tries to do the planning conversation: net-worth aggregation + scenario modeling + tax strategy + retirement projection + estate basics + insurance review, delivered through chat against the user's actual linked financial data. The target customer is the household that earns $100k-$500k, has a mortgage and a brokerage and maybe RSUs, and has historically been priced out of a $2k-$5k/yr CFP retainer.

## The planning vs investing distinction

- Investing AI (covered in robo-advisors page): asset allocation, TLH, rebalancing, direct indexing.
- Planning AI (this category): cash-flow modeling, retirement projections, Roth conversion timing, asset-location decisions, estate documents, insurance, tax strategy, equity-comp planning, debt payoff sequencing.

The planning side is harder for AI for two reasons: (a) it spans regulated domains (tax, legal, securities) where hallucinations have real downside; (b) it requires actually reading the user's whole financial picture, not just running a pre-canned model on their risk tolerance.

## Evidence base (May 2026)

Three big shifts since 2024:

1. **Origin's SEC-registered AI advisor (Sept 2025).** First conversational AI registered as an investment advisor. Scored 98.3% on CFP sample exam questions vs. ~85% for top human CFPs in their internal study. Means it can give actual advice (not "education only") within the regulated framework.

2. **Range's "Rai" AI wealth advisor.** Built on top of a flat-fee CFP retainer ($2,950-$9,950/yr). Trained on 275 years of advisor experience; scored 95% on CFP practice questions. AI handles between-meeting questions; humans stay in the loop on execution.

3. **Boldin AI Planner Assistant (Jan 2026).** Retrofit on the established NewRetirement modeling engine. Free Basic users get access; PlannerPlus ($120/yr) gets unlimited conversations + Roth conversion modeling + Monte Carlo.

Behind these: Wealth.com's Ester Intelligence processed 100k+ estate documents in 2025; Trust & Will's 2026 report shows 30% of Americans now trust AI advice over a human attorney for estate planning (up from 20% in 2025); Perplexity launched a tax-prep agent for the 2026 filing season.

## What's actually load-bearing here

Most "AI personal finance" today is a chatbot stapled to an aggregator dashboard. The real unlocks are narrower:

- **Conversational scenario modeling.** "What if I retire at 55 instead of 62 and convert $40k/yr to Roth between 60 and 70" used to require building a custom Excel model or paying a CFP. Boldin and ProjectionLab now answer this in minutes.
- **Plan-against-real-data.** Origin and Range link your actual accounts, so advice is grounded in your numbers, not generic rules of thumb.
- **CFP-grade test performance on grounded queries.** When the AI has the user's full financial context, it now matches or beats humans on standardized planning questions.

## What's not yet load-bearing

- **Behavior change.** AI can build a 30-year retirement plan; it cannot make you save 20% of income.
- **Tax-law currency.** Even GPT-5/Claude 4.5 hallucinate IRC sections. Origin pins to current code; standalone LLMs do not.
- **Fiduciary duty.** Range and Origin are SEC-registered fiduciaries. ChatGPT/Claude are not. If you lose money on a hallucinated tax strategy, no recourse.

## Pre-AI baseline

- Fee-only CFP retainer: $2k-$5k/yr (Range's price floor).
- One-shot financial plan: $1k-$3k.
- Hourly fee-only via XYPN/Garrett: $150-$300/hr, 3-hour minimum typical.
- Empower (formerly Personal Capital) free dashboard + 0.89% AUM if you wanted advice.
- DIY: Bogleheads forum + Excel + Boldin/ProjectionLab subscriptions ($120-$130/yr).

## Sources

- https://useorigin.com/resources/blog/introducing-the-first-sec-regulated-ai-financial-advisor
- https://www.range.com/
- https://www.boldin.com/retirement/features-ai-planner-assistant/
- https://www.wealth.com/ester/
- https://trustandwill.com/learn/estate-planning-report-2026
