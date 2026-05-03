# Self-Indexing KVCache: Predicting Sparse Attention from Compressed Keys

**Source:** arXiv:2603.14224 (https://arxiv.org/abs/2603.14224)
**Date:** March 2026

## Core claim

Compressed key acts as self-index for sparse attention. 1-bit sign-based vector quantization unifies compression and retrieval: the same compressed representation that saves VRAM also drives the sparse-attention selection.

## Relevance to 4 GB edge target

1-bit keys are the most aggressive plausible compression that still retains retrieval quality. Verify against KIVI 2-bit numbers. Pairs with sparse-attention runtime kernels.

## Open questions

- Does the 1-bit floor hold at SLM scale (cf. SLMQuant caveat)?
- Latency penalty for sparse-attention selection vs dense FlashAttention.
