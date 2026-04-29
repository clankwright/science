---
id: longevity-bench-2026
title: "LongevityBench: are SotA LLMs ready for aging research?"
year: 2026
venue: "bioRxiv 2026.01.12.698650 (Insilico Medicine, Abu Dhabi)"
url: https://www.biorxiv.org/content/10.64898/2026.01.12.698650v3
access: open
kind: paper
topics: [benchmarks, machine-learning, aging-clocks, biomarkers-of-aging]
evidence_tier: T0
endpoint: n/a

---

# LongevityBench: an LLM benchmark for aging biology

## Summary
A benchmark suite that tests whether state-of-the-art LLMs grasp the
fundamentals of aging biology and can reason from raw biodata to
phenotype-level conclusions. Spans **transcriptomes, DNA methylation
profiles, proteomes, genomes, clinical blood tests and biometrics**, plus
free-text annotations. Companion to [[papers/longevity-llm-2026]].

## Why it matters
Provides a way to compare general LLMs (Claude, GPT, Qwen) against
fine-tuned aging models on the same tasks. Without a shared eval, claims
like "this model surpasses Horvath" can't be cross-compared. This is the
field's first attempt at a standard.

## Key task families
- Predict chronological / biological age from methylation, proteome,
  transcriptome.
- Predict cancer survival from molecular data.
- Identify aging hallmarks from RNA-seq.
- Generate plausible proteome profiles for a given age and condition.
- Reason about lifestyle / drug effects on biomarkers from text.

## Computational leverage
- Submit your own model for comparison.
- Use the per-task error decomposition to spot where general LLMs fail
  vs. fine-tuned ones.
- Pair with [[papers/computagebench]] for clock-class evaluation, and
  with [[papers/biomarkers-aging-challenge]] / [[papers/xprize-healthspan]]
  for human-cohort grounding.

## Related
- [[papers/longevity-llm-2026]] — first model evaluated on this bench.
- [[papers/computagebench]] — analogous benchmark for clocks specifically.
- [[papers/clockbase-agent-2025]] — autonomous-agent paper that needs
  exactly this kind of eval.
- [[topics/benchmarks]], [[topics/machine-learning]],
  [[topics/aging-clocks]], [[topics/biomarkers-of-aging]].
