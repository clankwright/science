# Agentic RL Recipes for Coding (2025-2026)

Aggregated extract: four 2025-2026 papers on RL training for coding agents.

## DeepSWE-Preview (Together AI / Agentica)

**Source:** https://www.together.ai/blog/deepswe (July 2025, updated through 2026)
**Base:** Qwen3-32B, pure RL, no SFT or distillation.
**Numbers:** 42.2% pass@1 on SWE-Bench Verified, 59% with test-time scaling, 71% pass@16.
**Open:** weights, dataset, training code, eval logs.

## Self-Play SWE-RL

**Source:** arXiv:2512.18552 (https://arxiv.org/abs/2512.18552)
**Date:** December 2025
**Method:** One LLM injects bugs of increasing difficulty; another (same model) repairs them. No external dataset of bug fixes needed.
**Implication:** Removes the data bottleneck for solo-dev RL training.

## SWE-TRACE: Long-Horizon SWE Agents through Rubric PRMs and Heuristic TTS

**Source:** arXiv:2604.14820 (https://arxiv.org/abs/2604.14820)
**Date:** April 2026
**Method:** Step-wise oracle verification distills 60K-instance SFT corpus, then memory-augmented agentic RL with rubric-based process reward model. Heuristic test-time scaling on top.
**Implication:** PRM-driven RL signal more sample-efficient than outcome-only rewards. Matters when training a 3B-7B coder under solo-dev compute.

## SWE-RM: Execution-Free Feedback for Software Engineering Agents

**Source:** arXiv:2512.21919 (https://arxiv.org/abs/2512.21919)
**Date:** December 2025
**Method:** Reward model scores agent trajectories without executing the code. Removes sandbox bottleneck for RL training.
**Implication:** Sandboxed execution is the wall-clock bottleneck in solo-dev RL pipelines. Execution-free reward signal cuts training time by orders of magnitude.

## Synthesis

The 2026 recipe for agentic-RL on a small coder model:
1. Self-play (SWE-RL) generates the task distribution.
2. Execution-free reward model (SWE-RM) prices most trajectories.
3. Rubric PRM (SWE-TRACE) catches subtle reasoning errors.
4. Heuristic TTS at inference time amplifies small-model capability.

Together this is the most plausible path for a solo dev to RL-tune a 3B-7B coder without needing a research lab's compute budget.
