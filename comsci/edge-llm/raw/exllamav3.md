# ExLlamaV3 / EXL3 quantization runtime
Author: turboderp (turboderp-org) | Date: 2026-06 (v0.0.34-v0.0.43)
URL: https://github.com/turboderp-org/exllamav3/releases

- v0.0.35 (May 23 2026): tensor-parallel + expert-parallel on consumer hardware; sliced reconstruct-GEMM cuts VRAM overhead; constant-VRAM recurrent-state manager for Qwen3.5-class.
- EXL3 = streamlined QTIP variant; arbitrary bits-per-weight (Llama-3.1-70B coherent at 1.6 bpw); conversion in minutes-hours via fused Viterbi kernel.
- KV-cache quant 2-8 bit selectable; Llama-3.1-70B at 3 bpw output layer + 4096-token cache under 16 GB VRAM.
- v0.0.41 (Jun 12) MTP speculative drafters for Qwen3.5/3.6; v0.0.43 (Jun 14) faster quant + MTP-in-TP fix; v0.0.40 Gemma4; v0.0.38 LFM 2.5.
