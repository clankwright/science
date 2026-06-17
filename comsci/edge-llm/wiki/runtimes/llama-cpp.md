# llama.cpp

> **Summary:** ggerganov's CPU/GPU LLM inference engine. The dominant practitioner runtime for edge LLM deployment. C/C++ core, GGUF format, supports nearly every quantization scheme (Q2_K through Q8_0, IQ-series), runs on CPU, CUDA, ROCm, Metal, Vulkan. Supports `-ngl` partial GPU offload; the load-bearing feature for 4 GB VRAM deployments.

**Sources:** repository documentation, ecosystem references in [raw/lfm2.md](../../raw/lfm2.md), [raw/ktransformers.md](../../raw/ktransformers.md)

---

## Why llama.cpp is the default

- Universal: runs everywhere (Linux, macOS, Windows, mobile).
- Universal quant: GGUF accepts AWQ-converted, GPTQ-converted, and llama.cpp-native (Q2_K, Q3_K, Q4_K, Q5_K, Q6_K, Q8_0, IQ2/IQ3/IQ4 imatrix).
- Universal hardware: same model files run on CUDA / ROCm / Metal / Vulkan / CPU.
- Active maintenance and rapid model support.
- First-class partial-offload via `-ngl <N>` (load N layers on GPU, rest on CPU).

## `-ngl` and the 4 GB target

The crucial 4 GB feature. Specify how many transformer layers ride in VRAM; the rest stay in system RAM and run on CPU. Latency cost is per-layer-CPU-cost × layers-on-CPU. For a 7B model at Q4 (~4 GB), 32 layers might split as 25 GPU + 7 CPU on a 4 GB GPU; usable with degraded throughput.

For MoE models, `-ngl` is the entry-level offload. [KTransformers](ktransformers.md) and [DALI](dali-moe.md) provide the next tiers.

## GGUF Q-flavor cheat sheet

| Format | Bits | Notes |
|---|---|---|
| Q2_K | ~2.6 | Aggressive; quality drop on small models |
| Q3_K_S/M/L | ~3.4-3.8 | Borderline for 7B; risky for SLMs |
| Q4_0 / Q4_K_M | ~4.5 | Practitioner default |
| Q5_K_M | ~5.6 | Quality near FP16 |
| Q6_K | ~6.6 | Conservative |
| Q8_0 | 8 | Reference |
| IQ2_XS / IQ3_XXS | sub-3 | Importance-matrix; better than Q2_K/Q3_K at same bitcount |

[SLMQuant](../techniques/slmquant.md) caveat applies: Q4_K_M behavior on 1-4B models may not match the 7B+ folklore.

## April 2026 release wave

170+ incremental releases through April 2026 brought four notable additions:

- **Backend-agnostic tensor parallelism**: split a model across iGPU+dGPU on a laptop. Real on a single machine.
- **1-bit quantization**: BitNet 1.58b lineage now lands inside llama.cpp itself, no experimental fork.
- **Day-one Gemma 4 support**.
- **AMD CDNA4 backend**.
- **Qualcomm Hexagon NPU backend** (build b8755, for Snapdragon X Elite-class laptops). Competes with [ExecuTorch](executorch.md) on the same hardware.

For a 4 GB-class deployment, the Hexagon backend is the most consequential: it brings llama.cpp's quant catalog to Snapdragon laptops without needing the PyTorch toolchain.

## Pairs with

- [AWQ](../techniques/awq.md) (convert AWQ → GGUF for distribution).
- [EAGLE-3](../techniques/eagle-3.md) draft heads (recent llama.cpp PRs have added support).
- [Saguaro/SSD](../techniques/saguaro-ssd.md) (no native support; reference implementation in vLLM).
- [Ollama](ollama-and-friends.md), [LM Studio](ollama-and-friends.md), [Open WebUI] all wrap llama.cpp.
- [ExecuTorch](executorch.md) is the alternative on Snapdragon NPU and mobile.

## See Also

- [KTransformers](ktransformers.md)
- [ExLlamaV3 / EXL3](exllamav3.md)
- [Ollama / LM Studio / ExLlamaV2 / MLX](ollama-and-friends.md)
- [ExecuTorch](executorch.md)
- [DALI](dali-moe.md)
- [Laptop GPU Energy and Thermal](../analysis/laptop-gpu-energy-thermal.md)
