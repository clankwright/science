# ExecuTorch

> **Summary:** PyTorch / Meta's edge-inference runtime. October 2025 1.0 GA. 50KB base footprint. Llama 3.2 1B/3B quantized: 2.5x decode-latency improvement, 4.2x prefill improvement, 56% size reduction, 41% memory reduction (OnePlus 12 Android). 50.2 tok/s decode, 260 tok/s prefill. Uses XNNPACK plus 4-bit groupwise quant. Most relevant for Snapdragon X Elite-class laptops with NPU integration; on laptop dGPU, [llama.cpp](llama-cpp.md) + CUDA still wins.

**Sources:** [raw/executorch.md](../../raw/executorch.md)

---

## When ExecuTorch wins

- **Mobile Android / iOS deployment**: now production-grade.
- **Snapdragon X Elite laptops with Hexagon NPU**: native PyTorch path that doesn't require porting through llama.cpp's Hexagon backend.
- **Devices with no discrete GPU**: XNNPACK CPU kernels are competitive with llama.cpp's NEON/AVX paths and sometimes ahead on Arm v9.

## When it doesn't (for the wiki's 4 GB target)

- **Laptop NVIDIA dGPU** (RTX 4050 / 3050 / 2050): llama.cpp + CUDA backend remains faster and more flexible. ExecuTorch's CUDA story is less mature.
- **Niche quant formats**: GGUF accepts a wider catalog (IQ-series, K-quants); ExecuTorch is mostly 4-bit groupwise.

## Numbers (Llama 3.2 1B/3B quantized, OnePlus 12 Android)

| Metric | Improvement vs prior |
|---|---|
| Decode latency | 2.5x |
| Prefill | 4.2x |
| Size | 56% reduction |
| Memory | 41% reduction |
| Decode throughput | 50.2 tok/s |
| Prefill throughput | 260 tok/s |
| Cortex-A v9 (i8mm) | +20% |

## Pairs with

- [llama.cpp](llama-cpp.md): the comparison baseline. On NVIDIA laptop dGPU, llama.cpp is the default; on mobile and Snapdragon NPU, ExecuTorch is increasingly competitive.
- [Ollama / LM Studio / MLX](ollama-and-friends.md): wrap llama.cpp; no ExecuTorch wrapper of comparable adoption yet.

## See Also

- [llama.cpp](llama-cpp.md)
- [Ollama / LM Studio / ExLlamaV2 / MLX](ollama-and-friends.md)
- [Runtime Comparison](../analysis/runtime-comparison.md)
