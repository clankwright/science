# Apple Silicon and MLX

## What it is
Apple's MLX is an array framework (NumPy-like API) plus a model-format ecosystem optimized specifically for M-series Apple Silicon. It exploits the unified memory architecture: CPU, GPU, and Neural Engine all share one high-bandwidth memory pool, so a 70B model's weights live in one place and the GPU reads them without PCIe transfer. As of May 2026, MLX is the fastest practical way to run large LLMs on a personal device.

## Specific unlocks
- Run Llama 3.3 70B Q4 on a 64 GB MacBook Pro M4 Max at 8-15 tok/s with no fan noise, no power supply, no NVIDIA driver. Slower than reading speed but usable for interactive work.
- Run Qwen 3-235B-A22B (MoE) on a 192 GB Mac Studio M2/M3 Ultra at speeds competitive with a single H100 because the MoE only activates 22B params per token.
- Run a frontier 70B model on a portable laptop on a flight with the lid open. No cloud equivalent matches "open lid, full frontier-class model immediately."
- Use MLX-LM to fine-tune a 7-13B model on a 64 GB Mac in hours, not days. LoRA fine-tuning of a 70B is feasible on 128 GB+.
- Run vision-language models (Qwen2-VL, Llama 4 Vision) at speeds llama.cpp on Mac doesn't match because MLX has first-class image-encoder support.
- Apple's M5 chip (March 2026) embedded Neural Accelerators in each of its 40 GPU cores ("Fusion Architecture"); 153 GB/s memory bandwidth; 20-30% faster 70B inference than M4 Max.

## Why unified memory matters
On a discrete-GPU PC, model weights live in VRAM. A 70B Q4 model is ~35 GB, so it needs 2x 24 GB GPUs (with NVLink ideally) or 1x H100. On Apple Silicon with 64+ GB unified memory, the same 35 GB just sits in shared RAM and the GPU pages it freely. This is why a $4,000 MacBook competes with a $40,000 H100 box for "single-user 70B inference."

## The MLX vs llama.cpp Mac story
- **MLX:** typically 10-30% faster on Apple Silicon for the same model. Better vision-input handling. Native PyTorch-like Python API for fine-tuning.
- **llama.cpp Metal backend:** broader model coverage, faster to land new architectures, GGUF format that works on every other platform.
- LM Studio lets you choose per-model. Ollama is shifting MLX support in (Gemma 4 added 2026).

## Hardware tiers (May 2026)
- **M-series 8 GB:** 7-8B Q4 (Llama 3.1 8B, Qwen 3 8B, Phi-4-mini).
- **M-series 16 GB:** 13-14B comfortably; 32B with offload.
- **M-series 24-36 GB (Pro):** 30B comfortably; 70B with aggressive quant and offload.
- **M-series 48-64 GB (Max):** 70B at Q4 / Q5; the entry tier for serious local AI.
- **M-series 128 GB (M3 Ultra Studio):** 100B+ dense; comfortable Qwen 3-235B MoE.
- **M-series 192 GB (M2/M3 Ultra Studio):** Llama 4 Maverick, Qwen 3-235B at higher quants, fine-tuning experiments.

## Pre-AI baseline
Pre-2023 Apple machine learning meant Core ML for inference of small mobile models, with a long history of being orders of magnitude behind NVIDIA for serious work. MLX (announced Dec 2023) plus the unified-memory advantage flipped this for the "personal frontier model" tier.

## Maturity
Production-grade for: chat, code, RAG, image generation (MFlux for Flux on MLX), transcription (MLX-Whisper), TTS, fine-tuning small/medium models. Apple's machinelearning research papers from 2026 publish MLX benchmarks alongside CUDA reference numbers.

Breaks / weak:
- Multi-machine distributed training is still NVIDIA-first.
- The MLX model ecosystem (HuggingFace `mlx-community/*`) lags llama.cpp's GGUF coverage by a beat.
- Memory bandwidth on M4 Max (~410 GB/s) is much higher than DDR5 desktop but still well below H100 (3.35 TB/s); large-batch serving is still a server job.
- Mac Studio single-point-of-failure: no hot-swap, no ECC, not a drop-in datacenter machine.

## Sources
- https://machinelearning.apple.com/research/exploring-llms-mlx-m5
- https://www.sitepoint.com/local-llms-apple-silicon-mac-2026/
- https://insiderllm.com/guides/best-local-llms-mac-2026/
- https://llmcheck.net/benchmarks
- https://julsimon.medium.com/what-to-buy-for-local-llms-april-2026-a4946a381a6a
- https://theplanettools.ai/blog/apple-m5-mlx-llm-optimization-70b-portable
- https://thinksmart.life/research/posts/apple-silicon-mlx-llm-guide/
- https://opensource.apple.com/projects/mlx/
