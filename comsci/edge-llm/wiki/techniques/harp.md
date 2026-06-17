# HARP: Hadamard-preconditioned adaptive rotation for extreme quantization

> **Summary:** Zagitov et al. (BRAIn Lab), May 2026 (arXiv:2605.29843). Replaces the fixed randomized Hadamard transform (RHT) used by QuaRot/SpinQuant/QuIP# with learnable sparse butterfly-block rotations, initialized to exactly recover RHT then calibrated per layer. Rescues the 2-bit weight regime: Llama 2 7B 2-bit drops to 7.23 WikiText2 PPL (vs 8.22 for QuIP#-RHT), making a 7B model 4 GB-viable.

**Sources:** [raw/harp.md](../../raw/harp.md)

---

## Method

Outlier-suppressing rotations make weights easier to quantize. Fixed RHT is the standard preconditioner; HARP makes the rotation *learnable* as sparse butterfly blocks, initialized to exactly recover RHT so it never starts worse, then per-layer calibrated. The gain concentrates where fixed rotations fail: extreme low-bit (2-bit).

## Results (with context)

- Llama 2 7B 2-bit: 7.23 WikiText2 PPL vs RHT 8.22, OmniQuant 11.06 (ctx 2048).
- Llama 2 7B 2-bit zero-shot: ARC-Easy 63.7% vs RHT 56.7%; ARC-Challenge 33.0% vs 29.7%.
- 4-bit Llama 2 7B matches SpinQuant (5.59 vs 5.6 PPL); validated 1B-70B.
- RTX 5080, Llama 2 7B 2-bit: 128 tok/s (FP16 61, RHT 142).

## Relevance to 4 GB VRAM target

A 7B coder at 2-bit weights is ~1.8 GB, leaving room for KV cache inside 4 GB, but 2-bit normally destroys accuracy. HARP recovers most of that loss, which is the precondition for running a 7B (rather than a 4B) on the budget. Pairs with [ExLlamaV3](../runtimes/exllamav3.md)'s low-bpw EXL3 path and is subject to the [SLMQuant](slmquant.md) caveat that small models tolerate quant worse than large ones. See [quant-vs-capability frontier](../analysis/quant-vs-capability-frontier.md).

## See Also

- [AWQ](awq.md), [GPTQ](gptq.md), [AQLM](aqlm.md), [SLMQuant](slmquant.md)
- [ExLlamaV3](../runtimes/exllamav3.md)
- [Quant-vs-capability frontier](../analysis/quant-vs-capability-frontier.md)
