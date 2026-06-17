# ExLlamaV3 / EXL3

> **Summary:** turboderp, releases through June 2026 (v0.0.34-v0.0.43). A from-scratch successor to ExLlamaV2 built around EXL3, a streamlined QTIP-variant quantization supporting arbitrary bits-per-weight (Llama-3.1-70B coherent at 1.6 bpw) plus selectable 2-8 bit KV-cache quant. v0.0.35 adds tensor-parallel and expert-parallel on consumer hardware. The strongest engine for the extreme-low-VRAM end.

**Sources:** [raw/exllamav3.md](../../raw/exllamav3.md)

---

## What it adds over ExLlamaV2

- **EXL3 quant:** streamlined [QTIP](../techniques/gptq.md)-variant; arbitrary bits-per-weight via a fused Viterbi kernel, conversion in minutes to hours. Llama-3.1-70B stays coherent at 1.6 bpw.
- **KV-cache quant:** selectable 2-8 bit. Example: Llama-3.1-70B at 3 bpw output layer + 4096-token cache fits under 16 GB VRAM.
- **Parallelism (v0.0.35, May 2026):** tensor-parallel + expert-parallel on consumer hardware; sliced reconstruct-GEMM cuts VRAM overhead; constant-VRAM recurrent-state manager for Qwen3.5-class models.
- **Speculative decoding:** MTP drafters for Qwen3.5/3.6 (v0.0.41, Jun 12); MTP-in-TP fix (v0.0.43, Jun 14). Gemma4 (v0.0.40) and LFM 2.5 (v0.0.38) support.

## Relevance to 4 GB VRAM target

Sub-2-bpw weights plus selectable 2-8 bit KV-cache quant are exactly what fits a small coder model plus usable context into 4 GB, beating [AWQ](../techniques/awq.md)/[GPTQ](../techniques/gptq.md) at the extreme-low-bit end (pair with [HARP](../techniques/harp.md) for 2-bit accuracy recovery). Expert-parallel helps offload code MoEs like [Mellum2](../models/mellum2.md). For dense 1-4B on 4 GB the [runtime comparison](../analysis/runtime-comparison.md) still defaults to llama.cpp for partial-offload flexibility; ExLlamaV3 is the max-throughput / lowest-bpw alternative.

## See Also

- [llama.cpp](llama-cpp.md), [Ollama / LM Studio / ExLlamaV2 / MLX](ollama-and-friends.md)
- [HARP](../techniques/harp.md), [AWQ](../techniques/awq.md), [GPTQ](../techniques/gptq.md)
- [Runtime comparison](../analysis/runtime-comparison.md)
