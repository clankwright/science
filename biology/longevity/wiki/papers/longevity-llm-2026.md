---
id: longevity-llm-2026
title: "The End of Aging Clocks: training foundation models to reason in aging and longevity (Longevity-LLM)"
year: 2026
venue: "bioRxiv 2026.03.28.714980 (Insilico Medicine)"
url: https://www.biorxiv.org/content/10.64898/2026.03.28.714980v1
access: open
kind: paper
topics: [machine-learning, deep-learning, aging-clocks, biomarkers-of-aging]
---

# Longevity-LLM: a Qwen3-14B foundation model for aging biology

## Summary
Insilico Medicine fine-tunes **Qwen3-14B** through supervised plus
reinforcement learning on a multi-modal aging corpus (DNA methylation,
proteomics, RNA expression, clinical biomarkers). The fine-tuned model,
**Longevity-LLM v0.1**, achieves a **4.34-year MAE on epigenetic age
prediction**, surpassing the original **Horvath multi-tissue clock**
through an LLM rather than a regression model. Argued as evidence that
foundation models are ready to subsume single-task aging clocks.

## Why it matters
Reframes the aging-clock problem from "build a regression on N CpGs" to
"give a generalist LM all the tabular biodata and ask it to reason."
Sits adjacent to [[papers/longevity-bench-2026]] which provides the
benchmark. If the trend holds, deep-learning aging clocks
(EpInflammAge, scAgeClock, etc.) will be evaluated as agents executing
many tasks rather than scalar predictors of one age.

## Key findings
- 4.34-year MAE on epigenetic age prediction; better than Horvath
  multi-tissue.
- Single model handles cancer survival, RNA / proteome-based age
  prediction, and proteomic profile generation.
- Significantly beats frontier general LLMs (no aging fine-tuning) on
  proteome generation tasks.
- Released alongside the [[papers/longevity-bench-2026]] eval suite.

## Computational leverage
Direct prompt-engineering / fine-tuning targets for a CS contributor:
- Add new task heads (organ-specific clocks, intervention prediction).
- Combine with single-cell embeddings ([[papers/scageclock-2026]]).
- Use as a critic in a [[papers/clockbase-agent-2025]]-style autonomous
  loop.

## Related
- [[papers/longevity-bench-2026]] — companion eval framework.
- [[papers/clockbase-agent-2025]] — autonomous-agent precedent.
- [[papers/scageclock-2026]] — single-cell foundation model.
- [[topics/machine-learning]], [[topics/deep-learning]],
  [[topics/aging-clocks]], [[topics/biomarkers-of-aging]].
