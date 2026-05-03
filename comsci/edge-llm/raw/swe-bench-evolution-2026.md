# SWE-Bench Evolution: Multi-language, Decontaminated, Scaled (2025-2026)

Aggregated extract covering three benchmarks that supersede or extend SWE-Bench Verified.

## Multi-SWE-bench

**Source:** arXiv:2504.02605 (https://arxiv.org/abs/2504.02605)
**Date:** April 2025
**Coverage:** 1,632 issues across Java, TypeScript, JavaScript, Go, Rust, C, C++.
**Implication:** Fills the Python-only gap in SWE-Bench Verified. Small models trained on Python-heavy corpora often fail on Go/Rust; this benchmark exposes that.

## SWE-rebench

**Source:** v1 arXiv:2505.20411 (May 2025); v2 arXiv:2602.23866 (February 2026); leaderboard https://swe-rebench.com/
**Coverage:** v1: 21K+ Python tasks. v2: 32K tasks across 20 languages, 2014-2025.
**Method:** Automated continuous extraction of fresh SWE tasks from GitHub. Decontaminated by construction.
**Implication:** Contamination inflates small-model scores more than large ones (less robust generalization). Decontaminated leaderboards give honest 4 GB numbers.

## SWE-Universe: Scale Real-World Verifiable Environments to Millions

**Source:** arXiv:2602.02361 (https://arxiv.org/abs/2602.02361)
**Date:** February 2026
**Coverage:** Scaling verifiable SWE training environments to millions of instances.
**Implication:** Training data scale, not just eval. Useful for RL pipelines (cf. agentic-rl-recipes-2026.md).

## SWE-Bench Pro

**Source:** Scale AI (public dataset variant); leaderboard https://labs.scale.com/leaderboard/swe_bench_pro_public
**Implication:** Harder tasks expose the gap small models have to close.
