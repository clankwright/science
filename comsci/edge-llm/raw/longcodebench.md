# LongCodeBench: Coding LLM Evaluation at 1M Context

**Source:** arXiv:2505.07897 (https://arxiv.org/abs/2505.07897)
**Date:** May 2025; v2 within window

## Coverage

Coding evaluations at 32K, 64K, 128K, 256K, 512K, and 1M context.

## Critical finding

Claude 3.5 Sonnet drops from 29% to 3% on LongSWE-Bench going 32K to 256K.

## Implication

Long-context degradation is severe even for frontier models. Hits small models harder. Useful for honest claims about effective context inside the 4 GB budget.

## Pair with

- `wiki/analysis/long-context-via-filesystem.md`: The competing thesis is that filesystem tools beat long-context attention on these tasks anyway.
