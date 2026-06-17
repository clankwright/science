# NVIDIA Nemotron-3-Nano-4B

> **Summary:** NVIDIA, March 2026. 3.97B-param hybrid Mamba-2 + Transformer (4 attention layers), distilled and compressed from Nemotron-Nano-9B-v2 via Nemotron Elastic; 262K context; reasoning/non-reasoning toggle. LiveCodeBench 51.8 (reasoning-off, NeMo-Skills harness, 2026-03), BFCL v3 61.1. GGUF Q4_K_M is 2.9 GB, making it a ready-to-run 4 GB default with strong tool-calling.

**Sources:** [raw/nemotron-3-nano.md](../../raw/nemotron-3-nano.md)

---

## Architecture

Hybrid [Mamba-2 + Transformer](../architectures/mamba-ssm-hybrids.md) with only 4 attention layers, so KV-cache growth is bounded relative to a dense transformer at the same context. Distilled and width/depth-compressed from the 9B-v2 model through NVIDIA's Nemotron Elastic procedure. Native 262K context, with a runtime reasoning/non-reasoning toggle in the spirit of [DeepSeek-R1-distill](deepseek-r1.md).

## Benchmarks (with context)

- LiveCodeBench 51.8 (reasoning-off, NeMo-Skills harness, model card 2026-03). See [LiveCodeBench](../benchmarks/livecodebench.md).
- BFCL v3 61.1 (tool-calling). See [BFCL](../benchmarks/bfcl.md).
- AIME25 78.5; MATH500 95.4; GPQA 53.2.
- No SWE-bench or Aider-polyglot numbers published; coding signal is LiveCodeBench + BFCL only, so treat agentic-coding capability as inferred, not measured.

## Relevance to 4 GB VRAM target

GGUF quant sizes: Q4_K_M 2.9 GB, IQ4_XS 2.54 GB, Q3_K_M 2.46 GB, IQ2_XXS 2.18 GB. Q4_K_M at 2.9 GB leaves ~1 GB for KV cache and workspace inside a 4 GB budget; the 4-attention-layer hybrid keeps KV growth modest at longer context, unlike a dense 4B. Combined with BFCL v3 61, this is the most natural ready-to-run dense-class default for the [4 GB budget math](../analysis/four-gb-budget-math.md), pending real SWE-bench numbers.

## See Also

- [Phi-4-Mini](phi-4-mini.md), [Gemma 3](gemma-3.md), [LFM2](lfm2.md): the other 4 GB-class dense/hybrid candidates.
- [Mamba / SSM and hybrid architectures](../architectures/mamba-ssm-hybrids.md)
- [4 GB VRAM budget math](../analysis/four-gb-budget-math.md)
