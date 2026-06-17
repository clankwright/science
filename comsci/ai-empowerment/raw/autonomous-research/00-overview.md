# Autonomous Research — Overview

Capability: Given a question, an AI agent autonomously plans a research strategy, searches the web (and/or academic databases), reads dozens to hundreds of sources, synthesizes findings, and returns a cited report — typically in 5 to 30 minutes.

## Pre-AI baseline (2022)

A motivated individual answering a non-trivial question (e.g. "Which carbon-capture startups have shipped paying pilots in the last 18 months and what is their cost per ton?") had two options:

1. DIY: Google + open 30 tabs + skim + manual notes + draft. 3-8 hours for a shallow answer; 1-3 days for anything defensible.
2. Hire a research analyst or boutique firm (AlphaSights, GLG, freelance MBA on Upwork). Typical rate $75-$300/hr, multi-day turnaround, $1k-$10k per report.

For academic literature specifically: Google Scholar + manual PDF reading + citation chasing. A proper systematic review took weeks.

## What changed (the unhobbling moves)

Three capability stacks landed between Q4 2024 and Q1 2025 that, combined, made this work:

- **Long context windows.** Gemini 1.5 (1M tokens, Feb 2024) and Claude 3 (200k) made it possible to keep dozens of full-text sources in the model's working memory rather than truncating to snippets. By 2025 most frontier models cleared 200k.
- **Agentic tool use loops.** Models that can browse, click, read PDFs, run code, and iterate without supervisor turns. The release of o1/o3 (reasoning models that plan before acting) made multi-step research planning reliable rather than flaky.
- **Inline citation training.** Models post-trained specifically to cite the source supporting each claim, rather than free-form generation. Perplexity drove this commercially from 2023; OpenAI and Google followed.

## Maturity (May 2026)

| Tier | Tools |
|---|---|
| Production, mass-market | OpenAI Deep Research, Gemini Deep Research, Perplexity Deep Research, Claude Research |
| Production, professional | You.com ARI Enterprise, Elicit, Consensus |
| Open source, usable | GPT Researcher, HuggingFace Open Deep Research (smolagents), Stanford STORM |

## Honest limits

- **Citation hallucination remains real.** Frontier models still invent DOIs, paper titles, and author names at non-trivial rates. Citation accuracy is the worst-performing task family in 2026 evals (~12% hallucination even with extended thinking; up to 37% in some studies). A user must spot-check citations before relying on a report.
- **Depth vs breadth tradeoff.** A 25-source / 10-min report is broader but shallower than a 5-source / 30-min report. None of the tools yet "knows" when to go deep on one source vs sample widely.
- **Source quality blindness.** Most agents weight a Reddit thread and a peer-reviewed paper similarly unless explicitly told otherwise. Perplexity and Elicit do better than ChatGPT/Gemini on source ranking.
- **Recency bias.** Agents preferentially click recent results; older but seminal sources get missed.
- **Paywall blindness.** Most can't read paywalled academic journals or paid analyst reports. Elicit and Consensus get around this for academic literature via licensed indexes.
- **Cost per report.** Free tiers cap at ~5/month. Pro tiers ($20/mo) give 25-100 reports. Heavy users on $200/mo Pro/Max tiers can run several per day.

## Individual-empowerment angle

Decisions previously gated by "I'd need an expert / a week of reading" now collapse to a $20/mo subscription and 20 minutes:

- **Medical:** Synthesize the evidence base for a specific drug, surgery, or off-label use. Doctors still required for prescription, but the patient walks in informed.
- **Legal:** Summarize statute + case law for a narrow question (small-claims, landlord disputes, patent prior art search). Attorney still required for filings; the prep work is free.
- **Financial:** Due diligence on a small-cap stock, a private placement, a real estate market. Replaces $500-2000 analyst reports.
- **Career:** Industry deep-dives, comp benchmarking, "should I move into X field" landscape scans.
- **Technical:** Survey the state of a research area before starting a side project; literature reviews for grad students; vendor selection.
- **Civic:** Read every comment on a regulatory filing; track legislative history; opposition research.

The shift is qualitative, not just quantitative: questions that weren't worth answering at the old cost (a medical second-opinion deep-dive, a 30-page market scan for a hobby business idea) are now worth answering.

## Files in this directory

- `01-openai-deep-research.md`
- `02-gemini-deep-research.md`
- `03-perplexity.md`
- `04-you-com-ari.md`
- `05-claude-research.md`
- `06-open-source.md` (GPT Researcher, STORM, HuggingFace Open Deep Research)
- `07-academic-tools.md` (Elicit, Consensus)
- `08-limits-and-evals.md`
