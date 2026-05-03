# Self-Indexing KVCache

> **Summary:** March 2026 (arXiv:2603.14224). 1-bit sign-based vector quantization that unifies KV cache compression and sparse-attention retrieval: the same compressed key representation that saves VRAM also drives the sparse-attention selection. Most aggressive plausible compression that retains retrieval quality.

**Sources:** [raw/self-indexing-kv.md](../../raw/self-indexing-kv.md)

---

## Two problems, one representation

Standard pipelines do two passes: a sparse-attention selection step (which keys does this query care about?) and a quantized lookup step (fetch and use the selected K, V). The sparse-attention path needs an index; the storage path needs a compressed representation. Self-Indexing collapses these: the 1-bit sign of the key vector serves as both compressed storage and sparse-attention index.

## How aggressive is 1-bit?

1 bit per dimension is the floor. KIVI sits at 2 bits. INT8 KV is 8 bits. Compared to FP16, the savings are 16x (vs KIVI's 8x).

The retrieval quality claim hinges on sign-based vector quantization preserving angular similarity, which is the right invariant for attention dot-products. Empirically this works for retrieval; the paper's contribution is showing it also works for KV cache.

## Caveat: SLM scale

[SLMQuant](slmquant.md) found that aggressive quantization breaks down faster on small models (1-4B) than on the 7B-70B range where most quant methods are validated. 1-bit keys are the most aggressive quant in the wiki; treat with proportionate skepticism at SLM scale until task-specific evals confirm.

## Where it fits in the 4 GB stack

| Layer | Component |
|---|---|
| Architectural KV reduction | GQA (built into [Phi-4-mini](../models/phi-4-mini.md), [Gemma-3](../models/gemma-3.md)) |
| Sparse attention | DASH-KV, **Self-Indexing** |
| Quantization | KIVI (2-bit), **Self-Indexing (1-bit)**, K8/V3 ([PolyKV](polykv.md)) |
| Token retention | StructKV (50%) |
| Importance estimation | [Expected Attention](expected-attention.md) (training-free) |

These are not all alternatives; some compose. Sparse attention plus aggressive quant on the retained subset is a common pattern.

## Open questions

- Does the 1-bit floor hold at SLM scale (cf. SLMQuant caveat)?
- Latency penalty for sparse-attention selection vs dense FlashAttention.
- Composability with [DEER](deer-diffusion-draft.md) and other 2026 spec-decoding methods.

## See Also

- [DASH-KV](dash-kv.md)
- [KIVI](kivi.md)
- [SLMQuant](slmquant.md)
- [Expected Attention](expected-attention.md)
- [PolyKV](polykv.md)
