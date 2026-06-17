# SWE-TRACE: rubric process reward models + heuristic test-time scaling

> **Summary:** Han et al., April 2026 (arXiv:2604.14820). Optimizes long-horizon SWE agents with a rubric-conditioned process reward model (PRM) and PRM-driven action pruning (not parallel sampling). On SWE-bench Verified with the mini-SWE-Agent harness, SWE-TRACE-4B (Qwen3-4B) reaches 40.7% and SWE-TRACE-30B (Qwen3-30B-A3B) reaches 71.2%. Cascaded shortest-path SFT cuts tokens ~21% while improving resolution.

**Sources:** [raw/swe-trace.md](../../raw/swe-trace.md)

---

## Method

A rubric-conditioned PRM scores intermediate agent steps; a heuristic test-time-scaling (TTS) loop uses the PRM to prune actions rather than sample many parallel rollouts, cutting environment executions and wall-clock. A cascaded shortest-path SFT stage shortens trajectories before RL. Base models are [Qwen3-4B and Qwen3-30B-A3B](../models/qwen3-coder-next.md); harness is mini-SWE-Agent.

## Results (with context)

- SWE-TRACE-4B: 38.9% -> 40.7% [SWE-bench Verified](../benchmarks/swe-bench.md) (500) with heuristic-guided TTS (+1.8 pts), April 2026.
- SWE-TRACE-30B: 63.5% -> 71.2% (+7.7 pts) with PRM-guided TTS.
- Cascaded shortest-path SFT vs standard SFT: 4B model -21.5% tokens and +4.2 resolve pts (60K-instance corpus).
- Heuristic TTS on 30B: 36.5 min/issue, 128 env executions vs parallel rollout 63.8 min / 392 executions.

## Relevance to 4 GB VRAM target

The Qwen3-4B variant is a sub-14B SWE-bench-Verified agent that fits 4 GB once quantized, and the ~21% token reduction from cascaded shortest-path SFT matters directly on a memory- and latency-bound laptop. PRM-guided pruning (fewer environment executions) is cheaper than parallel rollout, which suits constrained local hardware. Complements [SWE-HERO](swe-hero.md)'s distillation route.

## See Also

- [SWE-HERO](swe-hero.md)
- [Agentic RL for coding](agentic-rl-coding.md)
- [SWE-Bench](../benchmarks/swe-bench.md)
- [Contribution roadmap](../analysis/contribution-roadmap.md)
