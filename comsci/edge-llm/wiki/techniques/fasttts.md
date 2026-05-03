# FastTTS

> **Summary:** ASPLOS 2026 (arXiv:2509.00195). Plug-and-play vLLM library for memory-constrained test-time scaling. Three core techniques: Speculative Beam Extension, Asymmetric Multi-Model Memory Allocation, Dynamic Prefix-Aware Scheduling. **2.2x goodput, 38-68% latency reduction vs vLLM baseline.** Single consumer GPU matches cloud accuracy at cloud latency. Direct hit on the 4 GB-VRAM thesis: TTS is the credible path to closing the small-model capability gap on hard coding tasks.

**Sources:** [raw/fasttts.md](../../raw/fasttts.md)

---

## What it solves

Test-time scaling (TTS) means generating multiple candidate solutions, scoring them, and returning the best. It is the lever that lets a 3B model match a 70B model on hard reasoning (Hugging Face SLM TTS results: Llama-3.2 3B beats Llama-3.2 70B with diverse verifier tree search; Llama-3.2 1B beats 8B). The catch: TTS multiplies KV cache and activation memory, which is exactly what 4 GB cannot afford.

FastTTS targets the memory pressure directly.

## Three techniques

| Technique | Problem solved |
|---|---|
| Speculative Beam Extension | Reasoning paths have irregular branching factors; beam search wastes memory on dead branches |
| Asymmetric Multi-Model Memory Allocation | Generator and verifier compete for VRAM; static split wastes one or the other |
| Dynamic Prefix-Aware Scheduling | KV cache reuse across search paths sharing common prefixes |

The third is the load-bearing one for agentic coding: planner-style traces share most of the system prompt and tool definitions, exactly the pattern prefix-caching wins on.

## Numbers

- 2.2x goodput vs vLLM baseline.
- 38-68% latency reduction vs vLLM baseline.
- Single consumer GPU matches cloud accuracy at cloud latency (paper claim, no specific model called out in abstract).

## Why this is a 4 GB-class technique

vLLM-resident, no kernel rewriting. The Asymmetric Multi-Model Memory Allocation specifically addresses generator-verifier coexistence on a tight VRAM budget. Memory-pressure-aware scheduling is the 2026 answer to the question "how do you actually run TTS on a laptop?"

## Pairs with

- [Test-time A* (TTA*)](../analysis/spec-decoding-at-4gb.md) decoding wrapper.
- [T1 tool-integrated self-verification](../training/agentic-rl-coding.md): the verifier is the test runner.
- [Self-Indexing KVCache](self-indexing-kv.md): aggressive KV compression compounds with prefix-aware scheduling.

## Position in the 4 GB stack

| Layer | Component |
|---|---|
| Runtime | [vLLM](../runtimes/vllm.md) |
| TTS scheduling | **FastTTS** |
| Verification | tool-integrated (test runner / type checker) |
| KV compression | [PolyKV](polykv.md), [Expected Attention](expected-attention.md), [KIVI](kivi.md) |
| Spec decoding | [DEER](deer-diffusion-draft.md) or [EAGLE-3](eagle-3.md) (composes with TTS) |

## See Also

- [Spec Decoding at 4 GB](../analysis/spec-decoding-at-4gb.md)
- [vLLM](../runtimes/vllm.md)
- [Agentic RL Coding](../training/agentic-rl-coding.md)
- [PolyKV](polykv.md)
