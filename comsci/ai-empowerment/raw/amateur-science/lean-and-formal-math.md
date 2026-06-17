# Lean 4, Mathlib, and AI-Assisted Formal Mathematics

## What it is

Lean 4 is a dependently-typed proof assistant. Mathlib is its monolithic, community-curated mathematics library (>1.6M lines as of 2026). The combination matured to the point where DeepMind's AlphaProof (Nature, Nov 2025) reached IMO 2024 silver-medal performance, where Terence Tao led the formalization of his polynomial Freiman-Ruzsa proof in Lean 4 with public collaboration, and where amateurs can now contribute Mathlib pull requests with LLM tactic suggestions from Lean Copilot (Yang et al., NeuS 2025).

## Specific unlocks

- An amateur mathematician can install Lean 4 + Mathlib + Lean Copilot on a laptop and get next-tactic suggestions, premise selection, and full automated proof search, scoring 74.2% automated proof step rate on benchmarks vs 40% for the prior best `aesop` automation.
- Verify a textbook chapter (e.g., Tao's Analysis I) in Lean 4 over a few weekends, with public open-source projects like vltanh/lean4-analysis-tao providing scaffolding.
- Contribute a Mathlib lemma without first earning the trust capital that previously required a math PhD; the test is whether your proof typechecks and your style matches review.
- Auto-formalize a research paper's proof skeleton with Math Inc Gauss; their public benchmark formalized the strong Prime Number Theorem in three weeks at Tao + Kontorovich's invitation.
- Run miniF2F or PutnamBench problems through Kimina-Prover, HILBERT, or APOLLO and watch a 32B local model solve high-school olympiad problems with verified Lean output.
- Use Lean Copilot's three core tactics in your own proof file: `suggest_tactics`, `search_proofs`, `select_premises`. They run LLM inference inside Lean via FFI, so the LLM never sees text outside the proof state.

## Pre-AI baseline

Pre-2020 formal math was a niche dominated by Coq, Isabelle, and HOL Light specialists. Mathlib existed but had a steep learning curve; new contributors needed months of mentorship. AlphaProof / Lean Copilot did two things: (a) produced training data and benchmarks (miniF2F, PutnamBench) that drove rapid LLM tactic-prediction improvement, and (b) integrated LLM suggestions into the proof environment so an amateur sees plausible next steps as they edit, instead of staring at a blank `sorry`.

## Hardware / cost

- Lean 4 + Mathlib: free, runs on a modern laptop. Mathlib build is ~30 min the first time.
- Lean Copilot with bundled small models (~1B params): runs on CPU or modest GPU.
- Lean Copilot with frontier model API: pennies per proof, calls Claude / GPT.
- AlphaProof: not public; Nature 2025 paper has methodology but no released weights.
- Math Inc Gauss: SaaS, restricted access.

## Maturity

- Lean 4 + Mathlib: production. Used in Tao's research and in Math Inc's PNT formalization.
- Lean Copilot: beta. Active development; integration is solid.
- AlphaProof-class autonomous proving: research preview. The IMO results are real but the system is not a downloadable tool yet.
- Open-source LLM provers (Kimina, HILBERT, StepFun-Prover, APOLLO): research; weights for some, evals are at miniF2F-saturation point so headline numbers overstate generalization.

## What an amateur can actually verify

- Undergraduate analysis, algebra, number theory: yes, with effort.
- Olympiad problems: increasingly automatic via Lean Copilot + LLM tactic suggestions.
- Frontier research proofs: requires expert collaboration; Tao's PFR project is the model.
- Original conjectures: Lean does not invent proofs; it verifies them once you have a sketch.

## Caveats

- Reported autoformalization accuracy is "largely inflated" in the literature when graded by LLMs vs humans (per the miniF2F-Lean Revisited paper, Nov 2025).
- miniF2F is near saturation; PutnamBench and FrontierMath are the harder benchmarks now.
- Mathlib still has gaps: parts of analysis, parts of algebraic geometry, most of numerical analysis.

## Sources

- https://www.nature.com/articles/s41586-025-09833-y (AlphaProof, Nature Nov 2025)
- https://leandojo.org/leancopilot.html
- https://github.com/lean-dojo/LeanCopilot
- https://arxiv.org/abs/2404.12534 (Lean Copilot paper)
- https://terrytao.wordpress.com/2023/12/05/a-slightly-longer-lean-4-proof-tour/
- https://lean-lang.org/use-cases/mathlib/
- https://arxiv.org/pdf/2511.03108 (miniF2F-Lean Revisited)
- https://github.com/openai/miniF2F
- https://arxiv.org/html/2505.05758v5 (APOLLO)
- https://github.com/vltanh/lean4-analysis-tao
