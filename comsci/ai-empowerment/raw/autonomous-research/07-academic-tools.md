# Academic-paper-focused research assistants

General-purpose Deep Research agents browse the open web. For literature reviews and evidence synthesis from peer-reviewed sources, two specialized tools dominate.

## Elicit

- **Vendor:** Elicit (spun out of Ought)
- **URL:** https://elicit.com
- **Pricing:** Basic free (5,000 one-time credits); Plus $12/mo (4 reports/mo); Pro $49/user/mo; Team $79/user/mo

Built on top of a licensed corpus of 138M+ academic papers and 545,000 clinical trials. Used by 2M+ researchers.

### Capabilities

- Type a research question; Elicit returns a ranked table of papers with auto-extracted columns (population, intervention, outcome, sample size, etc.).
- Find up to 1,000 relevant papers per query, analyze up to 20,000 data points at once.
- Sentence-level citations: every claim links to the exact sentence in the source paper.
- Systematic review support with keyword search across Elicit's index, PubMed, and ClinicalTrials.gov.
- Automated reports (Plus tier and above) bundle the table + synthesis + methodology section.

### Performance

- ~90% answer accuracy per Elicit's own evals.
- 2025 academic evaluation: precision 41.8%, sensitivity 39.5% — high precision but misses many relevant papers, so good for "what does the literature say about X" but not yet trustable for a comprehensive systematic review without human top-up search.

### When to use

- Grad-student literature reviews.
- Clinical-question synthesis (off-label drug evidence, treatment comparison).
- Pre-grant background sections.
- Anywhere you need real papers, not blog summaries.

## Consensus.app

- **Vendor:** Consensus
- **URL:** https://consensus.app
- **Pricing:** Free (10 Pro Analyses + 10 Snapshots/mo); Premium $8.99/mo; Pro $15/mo (or $120/yr)

Searches 200M+ peer-reviewed papers. Distinct positioning vs Elicit: built around answering yes/no/maybe research questions with an evidence aggregator.

### Distinctive features

- **Consensus Meter.** For yes/no questions ("Does intermittent fasting improve insulin sensitivity?"), shows the percentage of relevant papers that say yes vs no vs mixed. A unique UI element no other tool replicates.
- **Study Snapshots.** One-paragraph summaries of individual papers with key findings highlighted.
- **Pro Analysis.** Multi-paper synthesis with citations.
- **Ask Paper.** Chat directly with full-text PDFs.
- **Filters.** Date, study design (RCT, meta-analysis, observational), journal, sample size — proper systematic-review filtering.

### When to use

- Quick evidence checks ("is there RCT support for X?").
- Patient-facing health-decision research.
- Journalism fact-checking where you want to know the consensus position.
- Faster but shallower than Elicit; complementary tools.

## Comparison vs general agents

|  | Elicit / Consensus | OpenAI DR / Gemini DR / Perplexity |
|---|---|---|
| Source quality | Peer-reviewed only | Mixed (web, news, blogs, some papers) |
| Coverage | 100M+ paper indexes | Open web |
| Recency on news/events | Poor | Excellent |
| Citation accuracy | High (real DOIs from real index) | Variable; fabrication possible |
| Synthesis depth | Strong on evidence aggregation | Strong on narrative reports |
| Cost | $0-50/mo | $0-200/mo |

For any health, scientific, or policy question, the right workflow is often Elicit/Consensus first (what does the literature say?), then Perplexity or a Deep Research tool for context and recent developments.

## Sources

- https://elicit.com/pricing
- https://elicit.com/
- https://consensus.app/pricing/
- https://consensus.app/home/api/
- https://help.consensus.app/en/articles/11408820-what-do-you-get-with-pro
- https://aiflowreview.com/elicit-ai-review-2025/
