# SWE-bench, SWE-bench Verified, SWE-bench Pro: The Headline Benchmarks

**Compiled:** 2026-05-03

## What These Benchmarks Are

- **SWE-bench (original, 2023):** Princeton-led benchmark of real GitHub issues from 12 popular Python repos. Agent must produce a code patch that passes the repo's hidden test suite. The original benchmark proved noisy (some issues underspecified, some test suites flaky).
- **SWE-bench Verified (2024):** OpenAI-curated subset of 500 SWE-bench instances, manually validated by professional developers for correctness and clarity. Became the de facto headline number through 2025-2026.
- **SWE-bench Multilingual:** extends to non-Python languages.
- **SWE-bench Pro (Scale AI, 2025-2026):** harder variant; top scores ~23% vs ~80%+ on Verified, indicating Verified is now near-saturated.

## Score Progression (selected, SWE-bench Verified unless noted)

| Date | Model / Agent | Score |
|------|---------------|-------|
| 2023 | Pre-agentic LLMs | Single digits |
| Mar 2024 | Devin (original SWE-bench) | 13.86% |
| Mid-2024 | Claude 3.5 Sonnet | ~49% |
| Late 2024 | Claude 3.5 Sonnet (new) + scaffolds | 50-60% range |
| 2025 | Claude Opus 4 | 72.5% |
| Late 2025 | Claude Opus 4.5 + Live-SWE-agent | 79.2% |
| Early 2026 | Claude Opus 4.6 | 80.8% |
| May 2026 | Claude Opus 4.7 (Adaptive) | 87.6% |
| May 2026 | GPT-5.3 Codex | ~85% |
| May 2026 | Cursor Composer 2 | 73.7 (Multilingual) / not Verified |
| May 2026 | Claude Mythos Preview (top of leaderboard) | 93.9% |

## What Numbers Hide

- **Scaffold matters as much as model.** "Claude 4.5 + Live-SWE-agent" outscores "raw Claude 4.5"; the same model in different harnesses can swing 10+ points.
- **Verified is solved.** Top scores are within rounding distance of human-rater agreement noise. Use SWE-bench Pro or Terminal-Bench 2.0 for current discrimination.
- **Real-world novelty.** SWE-bench is well-known open-source repos. Performance on a private codebase the model has never seen is reliably lower; Scale's SWE-bench Pro exists specifically to test this.
- **Time-to-solve is unmeasured.** A 90% score that takes 30 minutes per issue is not the same product as a 70% score that takes 90 seconds.

## Other Relevant Benchmarks

- **Terminal-Bench 2.0:** evaluates terminal-driven coding tasks. May 2026: Cursor Composer 2 61.7, Claude Opus 4.6 58.0, GPT-5.4 75.1.
- **CursorBench:** Cursor's in-house benchmark. Composer 2 scores 61.3.
- **Aider polyglot leaderboard:** Aider's own benchmark across 6 languages. Useful counter-weight to Python-heavy SWE-bench.
- **AgentIF (2025 arXiv):** instruction-following in agentic scenarios; tests whether agents respect constraints across multi-step tasks.

## Sources

- https://www.swebench.com/
- https://llm-stats.com/benchmarks/swe-bench-verified
- https://benchlm.ai/benchmarks/sweVerified
- https://labs.scale.com/leaderboard/swe_bench_pro_public
- https://www.vals.ai/benchmarks/swebench
- https://swe-rebench.com/
- https://live-swe-agent.github.io/
- https://epoch.ai/benchmarks/swe-bench-verified
- https://lmcouncil.ai/benchmarks
- https://arxiv.org/html/2505.16944v1 (AgentIF)
