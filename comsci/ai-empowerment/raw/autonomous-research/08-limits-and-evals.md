# Limits, evals, and failure modes

## Citation hallucination

The single biggest unsolved problem.

- Citation accuracy is the worst-performing task family across frontier models. Average hallucination rate ~12.4% with extended thinking enabled (DeepMind FACTS, AA-Omniscience benchmarks, 2026).
- Some studies put citation hallucination in deep-research output as high as 37% — more than 1 in 3 source attributions could be partially or fully fabricated (invented DOIs, wrong author names, paper titles that don't exist).
- Mitigations: extended thinking roughly halves hallucination (GPT-5.5 Pro: 8.3% → 4.2%; Claude Opus 4.7: 9.4% → 5.1%; DeepSeek V4: 12.7% → 10.4%). Still non-zero.
- **Practical implication:** treat any citation in a Deep Research report as unverified until clicked. The link target and the paper title may not match.

## Hallucination by domain (frontier models, 2026)

- Legal: 18.7% average hallucination — highest of measured domains. Stanford's RegLab found significant issues even in legal-RAG products marketed as "hallucination-free."
- Medical: 15.6%.
- General knowledge: 3.1-7%.

Domain-specific tools (Elicit, Consensus, Westlaw AI) outperform general agents in their domains because they retrieve from licensed authoritative indexes rather than the open web.

## Source quality blindness

Most agents weight an SEO-optimized blog post and a peer-reviewed paper similarly unless explicitly prompted otherwise. Perplexity has the strongest source-ranking among general agents; OpenAI DR and Gemini DR are both noticeably weaker on this axis.

Workarounds:

- Add "prefer peer-reviewed sources, government data, primary sources" to the prompt.
- Run an academic tool (Elicit/Consensus) in parallel for any factual question.
- Spot-check citations.

## Depth-vs-breadth tradeoff

Deep Research tools are tuned for breadth. A 30-source, 10-minute report typically allocates ~20 seconds of "attention" per source — enough to extract abstract-level claims, not enough to detect methodological issues, sample-size limits, or contradictions buried mid-paper.

For decisions where the methodological detail of one or two sources matters (a specific trial design, a specific statute interpretation), the right move is to have the agent surface the candidates and then read those few sources yourself.

## Recency bias

Agents preferentially click recent search results. Seminal but older sources (foundational papers from 2010, established legal precedent) get under-weighted. Add explicit "include foundational/seminal sources, not just recent ones" to prompts.

## Paywall blindness

Most consumer agents can't read paywalled academic journals or paid analyst reports. They'll cite the abstract or a press summary. Elicit and Consensus get around this for academic content via licensed index access.

## Cost / rate-limit ceiling

| Tool | Cheapest pro tier | Reports/mo at that tier |
|---|---|---|
| Gemini Deep Research | $20 | High (effectively unlimited) |
| Perplexity Pro | $20 | Unlimited Deep Research |
| Claude Pro | $20 | Generous (rate-limited not quota'd) |
| OpenAI Plus | $20 | 25 |
| OpenAI Pro | $200 | 250 |

For a heavy individual user (5+ reports/day), Perplexity Pro and Claude Pro are the value picks; OpenAI Plus's 25/mo is restrictive.

## Agentic-browser security

Perplexity's Comet (the in-browser agent layered on Deep Research) has had a string of 2026 security disclosures: prompt injection from emails, phishing demos in under 4 minutes, a Google Drive wipe attack via a single crafted email. The research-agent-as-passive-reader pattern is safer than the agent-as-actor-on-your-accounts pattern. If using Comet or similar, scope its permissions narrowly.

## Evaluations to track

- **Humanity's Last Exam** — multidisciplinary expert-level QA. OpenAI DR launched at 26.6%.
- **GAIA** — general AI assistant benchmark. OpenAI DR 67% validation; HF Open Deep Research 55%.
- **DeepResearchGym** — Carnegie Mellon, ranks deep research systems. GPT Researcher #1 open as of mid-2025.
- **AA-Omniscience** — knowledge-and-hallucination benchmark, Artificial Analysis.
- **DeepMind FACTS** — Dec 2025, four-dimensional factuality scoring.

## Sources

- https://artificialanalysis.ai/evaluations/omniscience
- https://github.com/vectara/hallucination-leaderboard/
- https://dho.stanford.edu/wp-content/uploads/Legal_RAG_Hallucinations.pdf
- https://aclanthology.org/2025.acl-long.1176.pdf
- https://medium.com/@markus_brinsa/hallucination-rates-in-2025-accuracy-refusal-and-liability-aa0032019ca1
- https://thehackernews.com/2026/03/researchers-trick-perplexitys-comet-ai.html
