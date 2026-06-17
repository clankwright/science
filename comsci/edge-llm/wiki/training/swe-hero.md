# SWE-HERO: execution-free to execution-based fine-tuning for SWE agents

> **Summary:** Ludwig et al. (NVIDIA-affiliated), April 2026 (arXiv:2604.01496). Distills Qwen3-Coder-480B agent trajectories into Qwen2.5-Coder 7B/14B/32B students. SWE-HERO-32B reaches 62.2% SWE-bench Verified; the 7B/14B students report 52.7% / 60.8%. Releases 300k execution-free (SWE-ZERO) + 13k execution-based (SWE-HERO) trajectories plus the agent suite, making it a reproducible recipe to a sub-14B coder near 50%+ SWE-bench Verified.

**Sources:** [raw/swe-hero.md](../../raw/swe-hero.md)

---

## Method

Two-stage distillation from a 480B teacher: SWE-ZERO collects execution-free trajectories at scale (300k), then SWE-HERO refines with execution-based trajectories (13k) where the agent's edits are actually run and tested. Students are [Qwen2.5-Coder](../models/qwen3-coder-next.md) 7B/14B/32B. This sits in the same lineage as [agentic RL for coding](agentic-rl-coding.md) and [MoL distillation](mol-distillation.md), but leads with trajectory distillation from a very large teacher.

## Results (with context)

- SWE-HERO-32B: 62.2% [SWE-bench Verified](../benchmarks/swe-bench.md) (abstract-confirmed).
- SWE-HERO 7B / 14B: 52.7% / 60.8% SWE-bench resolution (paper-reported; only 32B abstract-confirmed here).
- SWE-bench Multilingual zero-shot transfer 44.1% from Python-only training.
- Open release: 300k SWE-ZERO + 13k SWE-HERO trajectories + agent suite.

## Relevance to 4 GB VRAM target

The 7B student is the directly relevant artifact: at aggressive quant (~IQ3, ~3.3-3.6 GB weights, small context) it is 4 GB-class, and the open trajectories let a solo dev reproduce or re-target the recipe to a smaller base. This is the most on-target 2026 path to "Haiku-class coding on a laptop," and a concrete input to the [contribution roadmap](../analysis/contribution-roadmap.md) (agentic-format SFT).

## See Also

- [SWE-TRACE](swe-trace.md): complementary PRM + test-time-scaling recipe.
- [Agentic RL for coding](agentic-rl-coding.md)
- [SWE-Bench](../benchmarks/swe-bench.md), [SWE-rebench / Multi-SWE](../benchmarks/swe-rebench-multi-swe.md)
- [Contribution roadmap](../analysis/contribution-roadmap.md)
