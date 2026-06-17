# Mellum2 (JetBrains code MoE)

> **Summary:** JetBrains, open-sourced June 2026 (Apache-2.0). 12B-total / 2.5B-active Mixture-of-Experts (64 experts, 8 active) code model running at the per-token compute of a 2.5B dense model; 128K context via layer-selective YaRN. First open code-specialized MoE explicitly tuned for commodity-GPU inference with reported BFCL v3/v4 tool-use scores. Instruct and Thinking variants.

**Sources:** [raw/mellum2.md](../../raw/mellum2.md)

---

## Architecture

[Mixture-of-Experts](../architectures/moe-active-param.md): 12B total, 2.5B active (8 of 64 experts per token), ~10.6T pretrain tokens, 128K context via layer-selective YaRN. The active-parameter design means inference cost tracks a 2.5B dense model while capacity tracks 12B, the central tradeoff in [dense-vs-MoE](../benchmarks/dense-vs-moe-reasoning-tradeoffs.md).

## Benchmarks (with context)

- EvalPlus 78.4% (after RL).
- LiveCodeBench v6 37.2% (Instruct) / 69.9% (Thinking). See [LiveCodeBench](../benchmarks/livecodebench.md).
- MultiPL-E (7 languages) 67.1%.
- BFCL v3 66.3 / v4 44.2 (Instruct); BFCL v3 69.4 (Thinking). See [BFCL](../benchmarks/bfcl.md).
- Throughput: 193 tok/s sync (matches Qwen2.5-7B); 5,179 tok/s concurrent on one H100 (~21% above Qwen2.5-7B).

## Relevance to 4 GB VRAM target

Total weights (12B) do not fit 4 GB, but only 2.5B are active per token. A Q4 quant with expert offload keeps the active working set near ~4 GB while delivering near-7B-dense code quality, *if* the runtime offloads inactive experts efficiently: the [KTransformers](../runtimes/ktransformers.md) / [DALI](../runtimes/dali-moe.md) / [FlashMoE](../runtimes/flashmoe.md) stack, or [ExLlamaV3](../runtimes/exllamav3.md) expert-parallel. Without MoE-aware offload, the full weights dominate VRAM and the active-param advantage is lost. See [runtime comparison](../analysis/runtime-comparison.md) ("for MoE on 4 GB: KTransformers stack only").

## See Also

- [MoE active-parameter architectures](../architectures/moe-active-param.md)
- [Qwen3-Coder-Next](qwen3-coder-next.md): the other agentic-coder MoE reference.
- [Dense vs MoE reasoning tradeoffs](../benchmarks/dense-vs-moe-reasoning-tradeoffs.md)
- [ExLlamaV3](../runtimes/exllamav3.md), [KTransformers](../runtimes/ktransformers.md)
