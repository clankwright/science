---
id: autonomous-research
title: "Autonomous Research"
kind: capability
last_verified: 2026-05-03
---

# Autonomous Research

> **Summary:** Given a question, an AI agent plans a research strategy, browses the web or licensed academic indexes, reads dozens to hundreds of sources, and returns a cited report in 5 to 30 minutes. As of May 2026 the capability is production at the $0-20/mo price point for any individual; the unsolved problem is citation hallucination, which still runs at roughly 12% with extended thinking and as high as 37% in some studies.

**Sources:** [[raw/autonomous-research/00-overview.md]], [[raw/autonomous-research/08-limits-and-evals.md]], [[raw/autonomous-research/01-openai-deep-research.md]], [[raw/autonomous-research/05-claude-research.md]]

---

## What changed

Pre-AI baseline (2022): a non-trivial research question had two paths. DIY meant Google plus 30 tabs plus manual notes, 3-8 hours for a shallow answer and 1-3 days for anything defensible. The alternative was a research analyst or boutique firm (AlphaSights, GLG, freelance MBA on Upwork) at $75-300/hr and $1k-10k per report. Academic literature reviews via Google Scholar and citation chasing took weeks.

Three capability stacks landed between Q4 2024 and Q1 2025 that, combined, made autonomous research work:

- **Long context windows.** Gemini 1.5 (1M tokens, Feb 2024) and Claude 3 (200k) let agents keep dozens of full-text sources in working memory rather than truncating to snippets. By 2025 most frontier models cleared 200k.
- **Agentic tool-use loops.** Reasoning models (o1, o3) that plan before acting made multi-step research planning reliable rather than flaky. Agents browse, click, read PDFs, run code, and iterate without supervisor turns.
- **Inline citation training.** Models post-trained to cite the source supporting each claim, rather than free-form generation. Perplexity drove this from 2023; OpenAI and Google followed.

## Notable tools

- [OpenAI Deep Research](../tools/openai-deep-research.md). 5-30 min runs; 26.6% on Humanity's Last Exam at launch; highest report polish; Plus tier $20/mo (25 reports), Pro $200/mo (250).
- [Gemini Deep Research](../tools/gemini-deep-research.md). 1M context, editable plan, $20/mo Pro tier; cheapest serious tier among the big-three.
- [Perplexity](../tools/perplexity.md). Strongest source ranking and citation density; unlimited Deep Research at $20/mo Pro; Comet agentic browser.
- [Claude Research](../tools/claude-research.md). Multi-agent architecture; integrates Google Drive, Gmail, Notion, GitHub via Workspace; less polished reports.
- [Elicit](../tools/elicit.md). 138M-paper academic index; sentence-level citations; Plus tier $12/mo. For peer-reviewed evidence synthesis specifically.
- You.com ARI (professional/enterprise; 400+ sources per query; per-report pricing).
- Open-source: GPT Researcher (Apache 2.0; #1 on Carnegie Mellon's DeepResearchGym among open systems); Stanford STORM (Wikipedia-style articles; NAACL 2024); HuggingFace Open Deep Research (55% on GAIA validation vs OpenAI DR's 67%).

## Maturity and limits

Production at the consumer tier; mass-market through 2025-2026.

Honest limits, with numbers from the raw evals:

- **Citation hallucination remains the worst-performing task family.** Average ~12.4% with extended thinking enabled (DeepMind FACTS, AA-Omniscience, 2026); some studies put it as high as 37% in deep-research output. Extended thinking roughly halves it (GPT-5.5 Pro 8.3% to 4.2%; Claude Opus 4.7 9.4% to 5.1%). Treat any citation as unverified until clicked.
- **Domain skew.** Legal hallucination averages 18.7%; medical 15.6%; general knowledge 3.1-7%. Domain-specific tools (Elicit, Consensus, Westlaw AI) outperform general agents in their domains because they retrieve from licensed authoritative indexes.
- **Source quality blindness.** Most agents weight a Reddit thread and a peer-reviewed paper similarly unless prompted. Perplexity is strongest on source ranking among general agents.
- **Depth vs breadth tradeoff.** A 30-source, 10-min report allocates ~20 seconds of attention per source: enough for abstract claims, not enough to detect methodological issues.
- **Recency bias.** Agents preferentially click recent results; older seminal sources get under-weighted.
- **Paywall blindness.** Most consumer agents can't read paywalled journals or paid analyst reports. Elicit and Consensus get around this for academic content via licensed indexes.

Evals to track: Humanity's Last Exam, GAIA, DeepResearchGym, AA-Omniscience, DeepMind FACTS.

## Individual empowerment

Decisions previously gated by "I'd need an expert or a week of reading" collapse to a $20/mo subscription and 20 minutes:

- Medical: synthesize the evidence base for a drug, surgery, or off-label use before a doctor visit.
- Legal: summarize statute and case law for a narrow question (small claims, landlord disputes, patent prior-art search).
- Financial: due diligence on a small-cap stock, a private placement, or a real estate market; replaces $500-2000 analyst reports.
- Career: industry deep-dives, comp benchmarking, field-landscape scans.
- Technical: literature reviews, vendor selection, state-of-the-area surveys.
- Civic: read every comment on a regulatory filing; track legislative history.

The qualitative shift: questions that weren't worth answering at the old cost (a medical second-opinion deep-dive, a 30-page market scan for a hobby business) are now worth answering.

## See also

- [Personal knowledge management](personal-knowledge-management.md)
- [Personalized education](personalized-education.md)
- [Email and inbox management](email-and-inbox-management.md)
