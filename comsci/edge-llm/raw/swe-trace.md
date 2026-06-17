# SWE-TRACE: long-horizon SWE agents via rubric PRMs + heuristic test-time scaling
Authors: Han, Xie, Ma, Zhu, Zhang, Long, Chen, Ye | Date: 2026-04
URL: https://arxiv.org/abs/2604.14820

- Base: Qwen3-4B and Qwen3-30B-A3B; harness mini-SWE-Agent; benchmark SWE-bench Verified (500), April 2026.
- SWE-TRACE-4B: 38.9% -> 40.7% with heuristic-guided test-time scaling (+1.8 pts).
- SWE-TRACE-30B: 63.5% -> 71.2% (+7.7 pts) with PRM-guided TTS.
- Cascaded shortest-path SFT vs standard SFT: 4B model -21.5% tokens and +4.2 resolve pts (60K-instance corpus).
- Heuristic TTS on 30B: 36.5 min/issue, 128 env executions vs parallel rollout 63.8 min / 392 executions.
