# Agentic RL for Coding (2025-2026 Recipes)

> **Summary:** Four 2025-2026 papers that together define the modern recipe for RL-training a small coder model: [DeepSWE](https://www.together.ai/blog/deepswe) (pure RL, open weights/data/code), Self-Play SWE-RL (self-generated bug-injection task distribution), SWE-RM (execution-free reward model), SWE-TRACE (rubric-based process reward model + heuristic test-time scaling). The combination is the most plausible path for a solo dev to RL-tune a 3B-7B coder without a research-lab compute budget.

**Sources:** [raw/agentic-rl-recipes-2026.md](../../raw/agentic-rl-recipes-2026.md), [raw/swe-bench-evolution-2026.md](../../raw/swe-bench-evolution-2026.md)

---

## DeepSWE-Preview (proof of concept)

Together AI / Agentica, July 2025 (updated through 2026). Qwen3-32B base, pure RL, no SFT or distillation. Open weights, dataset, training code, eval logs.

| Metric | Number |
|---|---|
| SWE-Bench Verified pass@1 | 42.2% |
| With test-time scaling | 59% |
| pass@16 | 71% |

Demonstrates that pure RL on the right base produces a competitive coding agent. The 32B base does not fit on 4 GB, but the recipe transfers directly to a smaller base.

## Self-Play SWE-RL (data bottleneck)

December 2025, arXiv:2512.18552. One LLM injects bugs of increasing difficulty into source files; another (same model) repairs them. No external dataset of bug fixes needed.

The data bottleneck is the standard wall for solo-dev RL training. SWE-Bench-Verified has 500 instances; building a real dataset of 50K+ takes either money or social capital. Self-play removes both.

## SWE-RM (execution bottleneck)

December 2025, arXiv:2512.21919. Reward model that scores agent trajectories without executing the code. Removes the sandbox bottleneck for RL training.

Sandboxed execution is the wall-clock bottleneck for solo-dev RL pipelines: each trajectory triggers a Docker container, test runner, file-system inspection. Execution-free reward signal cuts training time by orders of magnitude. The trade is calibration: an execution-free RM can be wrong, and RL hill-climbs the wrong objective.

## SWE-TRACE (signal-quality bottleneck)

April 2026, arXiv:2604.14820. Step-wise oracle verification distills a 60K-instance SFT corpus, then memory-augmented agentic RL with a rubric-based process reward model. Heuristic test-time scaling on top.

Rubric-based PRMs give per-step reward signal, not per-trajectory. Vastly more sample-efficient than outcome-only rewards. The right shape when training a 3B-7B coder under solo-dev compute, where every gradient step counts.

## The composed solo-dev recipe

1. **Data**: Self-Play SWE-RL on a public repo (e.g., [SWE-rebench](../benchmarks/swe-rebench-multi-swe.md) Python tasks) generates the task distribution.
2. **Pricing**: SWE-RM scores most trajectories without execution. Top-k by RM score get sandboxed execution for ground-truth.
3. **Signal**: SWE-TRACE-style rubric PRM provides per-step gradient.
4. **Inference**: [FastTTS](../techniques/fasttts.md) or T1-style tool-integrated verification at deploy time amplifies the small-model capability.

Cost estimate (Path 1 in [contribution-roadmap.md](../analysis/contribution-roadmap.md)): $300-1,500 cloud, 4-8 weeks, single dev.

## Composable training-data sources

- [SWE-Universe](../benchmarks/swe-rebench-multi-swe.md): millions of verifiable SWE training environments (February 2026).
- [SWE-rebench](../benchmarks/swe-rebench-multi-swe.md): 32K decontaminated tasks across 20 languages.
- [Multi-SWE-bench](../benchmarks/swe-rebench-multi-swe.md): 1,632 issues across Java, TypeScript, JavaScript, Go, Rust, C, C++.

## Earlier work in scope

- [xLAM-2](xlam-2.md): pre-2025 SFT recipe; useful as a baseline data-quality reference.
- [ToolACE](toolace.md): tool-call data pipeline; pairs with any RL recipe.
- Agent-RLVR (arXiv:2506.11425): RLVR for SWE agents using guidance plus environment rewards. Predecessor to Self-Play SWE-RL.
- [SLM agentic tool-calling](slm-agentic-tool-calling.md): the format-conformance bottleneck that all of this is ultimately trying to fix.

## See Also

- [Contribution Roadmap](../analysis/contribution-roadmap.md)
- [Agentic SFT Recipe](../analysis/agentic-sft-recipe.md)
- [SLM Agentic Tool Calling](slm-agentic-tool-calling.md)
- [SWE-HERO](swe-hero.md)
- [SWE-TRACE](swe-trace.md)
- [SWE-rebench / Multi-SWE-bench](../benchmarks/swe-rebench-multi-swe.md)
- [FastTTS](../techniques/fasttts.md)
