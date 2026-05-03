# ExecuTorch 1.0 (October 2025 GA)

**Source:** PyTorch / Meta; https://pytorch.org/blog/executorch-beta/
**Date:** October 2025 GA; 1.0 release

## Form

PyTorch's edge-inference runtime. 50KB base footprint.

## Numbers (Llama 3.2 1B/3B quantized, OnePlus 12 Android)

- 2.5x decode-latency improvement (vs prior).
- 4.2x prefill improvement.
- 56% size reduction.
- 41% memory reduction.
- 50.2 tok/s decode.
- 260 tok/s prefill.
- 20% additional speedup on Arm Cortex-A v9 with i8mm.

## Tech

XNNPACK kernels plus 4-bit groupwise quantization.

## Relevance to 4 GB edge target

Production-ready, competitive with llama.cpp on mobile. For laptop discrete GPU the picture is less changed (llama.cpp + CUDA still wins), but the methodology is portable. Most directly relevant for Snapdragon X Elite-class laptops with NPU integration.
