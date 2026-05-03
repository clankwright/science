# Solo-Dev Contribution Roadmap

> **Summary:** Eight ranked contribution paths for a solo developer with a small budget (≤$500/mo cloud + a 4 GB laptop GPU). The wiki's central thesis: **the bottleneck is not model size or quantization research, it is targeted format-conformant SFT data, harness-side optimization, and reproducible eval infrastructure.** All three are tractable for one person.

**Sources:** synthesis across the wiki; [missing-evals](missing-evals.md); [open-questions](open-questions.md); [long-context-via-filesystem](long-context-via-filesystem.md); [agentic-rl-coding](../training/agentic-rl-coding.md).

---

## The framing

A solo dev with a 4 GB laptop and a small cloud budget cannot:
- Pretrain a foundation model.
- Train novel architectures from scratch (Mamba/SSM hybrids).
- Run extensive multi-GPU experiments.
- Compete with Anthropic / OpenAI / Google on raw model capability.

A solo dev *can*:
- Curate / synthesize high-quality SFT datasets.
- Fine-tune small open-weight bases via Unsloth + LoRA.
- Build reproducible benchmark suites.
- Contribute to llama.cpp / Unsloth / vLLM as a developer.
- Distill from existing frontier models (Claude / GPT) via API.

The contribution paths below are ranked by **leverage** (likelihood of being load-bearing for downstream community work) × **tractability** (within the solo budget).

---

## May 2026 reranking

The May 2026 ingest of 13 cutting-edge 2026 papers shifted the ranking. Summary of deltas:

| Path | Before | After | Cause |
|---|---|---|---|
| Path 1 (SFT recipe) | SFT only, $300-500, 4-8 wk | SFT + RL, $800-1,500, 8-12 wk | Self-Play SWE-RL + SWE-RM + SWE-TRACE make solo-dev RL credible |
| Path 2 (eval suite) | SWE-Bench Verified core | SWE-rebench v2 core, + LongCodeBench, + Watt Counts axis | Decontaminated benchmarks + open energy dataset |
| Path 4 (coder drafter) | EAGLE-3 only | DEER or VSD candidates added | DEER ~32-token acceptance vs EAGLE-3 ~10; VSD +9.6% |
| **Path 7 (NEW)** | n/a | Harness-side filesystem-tool optimization | Long-context-via-filesystem thesis (2603.20432) |
| **Path 8 (NEW)** | n/a | PolyKV runtime integration | Multi-agent KV sharing not yet in vLLM |

**New top-3 ranking:**
1. **Path 2** (eval suite, now anchored by SWE-rebench + LongCodeBench + RTX 4050 sustained-load number).
2. **Path 7** (harness-side filesystem-tool optimization) OR **Path 4** (DEER/VSD coder drafter); both are genuinely contributable and not yet shipped.
3. **Path 1** (expanded SFT+RL recipe).

---

## Path 1 (highest leverage): Agentic-format SFT + RL recipe

**Hypothesis:** Targeted SFT on a 1-3B base with the *exact* tool-call format of a deployment harness (Cline / aider / Goose) closes the gap to much larger models on agentic-coding metrics. Direct evidence: [350M tool-calling paper](../training/slm-agentic-tool-calling.md) shows it works at 350M. **2026 update:** an RL phase on top of SFT is now within solo-dev reach via the recipe in [agentic-rl-coding](../training/agentic-rl-coding.md).

**Concrete plan (SFT phase):**

1. Replay 5-50K Claude Code (or aider with Claude Sonnet 4.6) sessions on real OSS issues. Cost: <$200 in Claude API.
2. Filter for successful sessions (passed tests).
3. Re-format the captured traces into the target harness's format (e.g., Cline XML or aider SEARCH/REPLACE).
4. SFT a Qwen3-Coder-3B / Phi-4-mini base via Unsloth + LoRA. Cost: <$100 cloud.

**Concrete plan (RL phase, 2026 addition):**

5. Self-Play SWE-RL: use the SFT'd model to inject bugs into [SWE-rebench](../benchmarks/swe-rebench-multi-swe.md) repos, then repair. No external dataset needed.
6. SWE-RM: train an execution-free reward model on a subset of trajectories that *did* go through sandboxed verification. Use it to score the bulk of self-play traces.
7. SWE-TRACE-style rubric PRM: per-step gradient signal; sample-efficient.
8. Evaluate on [BFCL v3](../benchmarks/bfcl.md), [Aider polyglot](../benchmarks/aider-polyglot.md), [SWE-rebench v2](../benchmarks/swe-rebench-multi-swe.md), [SWE-Bench Lite](../benchmarks/swe-bench.md).
9. Release: dataset + LoRA adapter + RM checkpoint + model card + evaluation scorecard.

**Expected outcome:** A small open-weight model that matches a much larger general-purpose model on agentic coding metrics inside one specific harness. Format-conformance rate near 99%. **With RL phase: pass@1 numbers competitive with [DeepSWE](../training/agentic-rl-coding.md) at much smaller parameter count.**

**Total cost:** SFT only $300-500, 4-8 weeks. SFT+RL $800-1,500, 8-12 weeks.

**Why it's load-bearing:** Multiple downstream papers will cite it; the dataset itself is reusable across all subsequent work. This is the paper Anthropic / DeepSeek would not write themselves. The 2026 RL stack makes it credibly differentiated from existing open-weight SFT releases.

---

## Path 2 (highest infrastructure leverage): 4 GB-envelope eval harness

**Hypothesis:** Nobody publishes a reproducible (model × quant × runtime × harness × benchmark × energy) matrix at the 4 GB envelope. The community needs one. **2026 update:** new benchmarks (SWE-rebench, LongCodeBench) and new energy data (Watt Counts dataset, RTX 4050 sustained-load number) raise the value of an integrated suite without raising the cost.

**Concrete plan:**

1. Docker-packaged eval suite. Input: model name, quant scheme, runtime, harness adapter. Output: standardized scorecard.
2. **Headline benchmark: [SWE-rebench v2](../benchmarks/swe-rebench-multi-swe.md)** (decontaminated, multilingual). Replaces SWE-Bench Verified as the core agentic-coding metric; honest 4 GB-class numbers were always the selling point, SWE-rebench makes them honest.
3. Additional benchmarks: [BFCL v3/v4](../benchmarks/bfcl.md), [Aider polyglot](../benchmarks/aider-polyglot.md) (full + edit-correctness column), [LiveCodeBench](../benchmarks/livecodebench.md), [Terminal-Bench 2.0](../benchmarks/terminal-bench.md).
4. **Long-context cells: [LongCodeBench](../benchmarks/longcodebench.md)** at 32K, 64K, 128K. Exposes the cliff that the [filesystem-tool thesis](long-context-via-filesystem.md) routes around.
5. **Energy axis: pull tuples from [Watt Counts](laptop-gpu-energy-thermal.md)** open dataset; measure sustained tok/s + W on a real RTX 4050 for the actual deployment configurations.
6. Initial coverage: 10-15 candidate (model × quant) tuples on llama.cpp / KTransformers / vLLM / [ExecuTorch](../runtimes/executorch.md).
7. CI: nightly re-run on a fixed seed with new model releases.
8. Publish results dashboard.

**Expected outcome:** The default citation for "what should I run on 4 GB?" The first published numbers settling the SLM-quant-vs-agentic-capability gap, with energy and long-context axes nobody else has integrated.

**Total cost:** $200/mo ongoing for cloud eval runs; $700-1,500 for v1 build. **Time:** 6-12 weeks for v1.

**Why it's load-bearing:** Multiplier on every other contribution. Path 1's SFT recipe needs Path 2's eval suite to demonstrate the win.

---

## Path 3: Quant-aware tool-call fine-tune

**Hypothesis:** Most agentic SFTs are FP16/BF16; the model degrades after Q4 quant, especially in tool-call format conformance. A QLoRA + GPTQ-aware (or AWQ-aware) training closes this gap.

**Concrete plan:**

1. Take Path 1's dataset.
2. Apply quantization-aware fine-tuning via Unsloth's QLoRA workflow.
3. Compare: (FP16 SFT → Q4 deploy) vs (QLoRA-with-Q4-target SFT → Q4 deploy) on Path 2's eval suite.

**Expected outcome:** A 2-5 percentage-point recovery of post-quant agentic performance. Cheap, novel-ish, publishable as a follow-up to Path 1.

**Total cost:** $100-200. **Time:** 2-4 weeks (depends on Path 1 being done).

---

## Path 4: Coder-distribution-matched draft head (EAGLE-3 / VSD / DEER)

**Hypothesis:** Published EAGLE-3 heads are trained on general chat distribution. Coder-tuned targets get suboptimal acceptance rates. A coder-distribution draft head increases speedup on the deployment workload. **2026 update:** two new drafter architectures ([VSD](../techniques/vsd-variational-spec.md), [DEER](../techniques/deer-diffusion-draft.md)) have published gains over EAGLE-3 but no released checkpoints for [Phi-4-mini](../models/phi-4-mini.md) or [Qwen3-Coder-Next](../models/qwen3-coder-next.md). Solo dev who ships either is shipping a paper that doesn't exist.

**Concrete plan:**

1. Pick architecture: EAGLE-3 (safe, tractable), VSD (drop-in EAGLE-3 replacement, +9.6% reported), or DEER (diffusion drafter, ~32-token acceptance vs ~10 for EAGLE-3).
2. Generate / collect coder-distribution training data (replay coder-target outputs).
3. Train the chosen drafter against a coder-tuned target (e.g., Qwen3-Coder-3B or Phi-4-mini-reasoning).
4. Measure acceptance rate vs the published general-purpose EAGLE-3 head and autoregressive baseline.
5. Release: head + training script + evaluation report.

**Expected outcome:** EAGLE-3 path: 1.2-1.5x throughput improvement on coding tasks. VSD: comparable plus the +9.6% headline. DEER: potentially 2-3x if the 32-token acceptance number translates to coding distribution (open question; the paper does not show coding numbers).

**Total cost:** <$100 for EAGLE-3 / VSD; $200-400 for DEER (diffusion drafter is heavier). **Time:** 2-4 weeks (EAGLE-3 / VSD); 4-8 weeks (DEER).

**Why it's load-bearing:** Speeds every downstream coder-target deployment. The DEER variant in particular is uncharted territory; even a negative result (DEER does not transfer to coding distribution) is a publishable contribution.

---

## Path 5: llama.cpp / Unsloth / vLLM contributions

**Hypothesis:** Many of the 2026 papers (Saguaro/SSD, DDTree, MoE-Spec, DASH-KV, StructKV) are not yet integrated into the practitioner runtimes. PRs implementing them are tractable for an experienced developer, with no compute budget required.

**Concrete plan:**

1. Pick one (e.g., Saguaro/SSD scheduling for vLLM, or KIVI implementation for llama.cpp Q-cache, or MoE-Spec for KTransformers).
2. Implement, test, PR.
3. Iterate with maintainers.

**Expected outcome:** Real production impact; community standing; warm-up for harder contributions later.

**Total cost:** $0. **Time:** variable (2-12 weeks per PR).

---

## Path 7 (NEW, May 2026): Harness-side filesystem-tool optimization

**Hypothesis:** [Long-context via filesystem](long-context-via-filesystem.md) (arXiv:2603.20432, March 2026) shows filesystem-tool agents beat published long-context SOTA by 17.3% over corpora up to 3T tokens. This means the optimization surface is harness-resident, not model-resident. The opportunity: most agentic-coding harnesses ([Claude Code](../harnesses/claude-code.md), [aider](../harnesses/aider.md), [Cline](../harnesses/cline-continue-goose.md)) ship naive `read` / `grep` / `glob` implementations. None cache, prefix-aware-batch, or chunk smartly.

**Concrete plan:**

1. Pick a target harness with permissive licensing (Cline, aider, or Goose).
2. Profile a typical 30-minute agentic-coding session. Identify the cost breakdown: tool round-trips, prefill on tool-result-injected prompts, redundant `grep`/`read` calls.
3. Implement: `grep` result memoization, `read`-chunk size tuning, prefix-cache-friendly tool-result injection (so vLLM's prefix cache doesn't get invalidated on every tool call).
4. Measure on Path 2's eval suite: tokens-to-task-completion, wall-clock, success rate.
5. Upstream the wins.

**Expected outcome:** 20-50% reduction in tokens-per-task on long-running agent sessions. Direct UX win for every user of the target harness; no model-side change required.

**Total cost:** $0 compute (work is harness-side). **Time:** 6-10 weeks.

**Why it's load-bearing:** Zero training cost, scales across every model release, harness-resident contribution that maintainers welcome. Probably the highest leverage-per-dollar path in the wiki for an experienced developer.

---

## Path 8 (NEW, May 2026): PolyKV runtime integration

**Hypothesis:** [PolyKV](../techniques/polykv.md) (April 2026, arXiv:2604.24971) publishes a shared-asymmetric-KV-pool design for multi-agent scaffolds. No major runtime has integrated it. [vLLM](../runtimes/vllm.md) is the natural host given its existing prefix-caching infrastructure. Multi-persona scaffolds (planner + executor + reviewer) are the natural shape on a small local model; PolyKV is the only configuration that hosts a 3-persona scaffold with weights budget remaining at 4 GB.

**Concrete plan:**

1. Read the PolyKV paper end-to-end. Validate the K8 / V3-bit asymmetric-quant claim against [KIVI](../techniques/kivi.md) baseline numbers.
2. Implement on top of vLLM's PagedAttention. Reuse existing prefix-caching infrastructure where possible.
3. Test against single-persona, dual-persona, triple-persona Cline-style scaffolds at 4 GB.
4. PR; iterate with vLLM maintainers.

**Expected outcome:** PR landed in a major runtime; community standing; first concrete integration of a 2026 KV paper into production runtime.

**Total cost:** $0-200 (cloud testing). **Time:** 8-16 weeks (vLLM integration cycles are slow).

**Why it's load-bearing:** Multi-agent scaffolds are the natural shape for solo-dev coding agents. Sharing KV across personas is the only credible way to fit a planner + executor + reviewer on 4 GB.

---

## Path 6 (lowest leverage): Synthetic trace dataset release

**Hypothesis:** Even without running the SFT yourself, a high-quality replayed Claude-Code trace dataset is a standalone contribution. Downstream labs will use it.

**Concrete plan:**

1. Replay 50K Claude Code sessions on diverse OSS repos.
2. Filter, deduplicate, format into HuggingFace Dataset.
3. Document the schema; release.

**Expected outcome:** 100s of citations / forks; ecosystem multiplier.

**Total cost:** $200-300 in Claude API. **Time:** 3-6 weeks.

**Why it's listed last:** Lower personal leverage (someone else gets the SFT win), but a real contribution if Path 1 is too ambitious.

---

## Lower-leverage / explicitly avoid

- **Pretraining anything from scratch.** Compute-prohibitive; no marginal contribution.
- **Novel architectures (custom Mamba/SSM hybrid).** [Mamba-3](../architectures/mamba-ssm-hybrids.md) closed the obvious gap (half state size at parity, March 2026); the next move is a coder-tuned Mamba-3 checkpoint, but that needs more compute than a solo dev has and is the kind of release a lab will ship soon.
- **Aggressive long-context KV compression at >128K.** [LongCodeBench](../benchmarks/longcodebench.md) shows the underlying long-context capability is broken even at frontier scale; compression at 256K+ optimizes the wrong layer. Stay in the 16K-32K regime.
- **Generic instruction tuning.** Saturated.
- **Yet another small chat model.** Saturated.

---

## Sequencing recommendation (May 2026 revision)

```
Week 1-2:    Path 5 (llama.cpp / vLLM warm-up PR; build community standing)
Week 1-10:   Path 7 (harness-side filesystem-tool optimization; runs in parallel from day 1, zero compute)
Week 3-10:   Path 2 (eval harness v1, anchored by SWE-rebench + LongCodeBench + RTX 4050 energy)
Week 4-12:   Path 1 SFT phase (dataset + recipe)
Week 12-20:  Path 1 RL phase (Self-Play SWE-RL + SWE-RM + SWE-TRACE)
Week 18-24:  Path 4 (coder-matched DEER or VSD drafter; choice depends on Path 2 eval results)
Week 20-30:  Path 8 (PolyKV vLLM integration; vLLM upstream cycle is slow, start when standing established)
Anytime:     Path 6 (synthetic trace dataset release; spins out of Path 1's data prep)
Anytime:     Path 3 (quant-aware fine-tune; cheap follow-up to Path 1)
```

By month 6-7, the solo dev has shipped: an eval suite the community uses, a harness PR with measurable UX wins, a published SFT+RL recipe + dataset, a 2026-class drafter, and accumulated standing in 1-2 runtime communities. That's a substantive year-of-work output, with two fewer items than the previous plan because the 2026 RL stack folded what was Path 1 + Path 3 into one combined release.

## See Also

- [Agentic SFT recipe](agentic-sft-recipe.md)
- [Harness eval suite design](harness-eval-suite-design.md)
- [Agentic RL for coding (2025-2026)](../training/agentic-rl-coding.md)
- [Long context via filesystem](long-context-via-filesystem.md)
- [Laptop GPU energy and thermal](laptop-gpu-energy-thermal.md)
- [SWE-rebench / Multi-SWE-bench / SWE-Universe](../benchmarks/swe-rebench-multi-swe.md)
- [Missing evals](missing-evals.md)
- [Open questions](open-questions.md)
