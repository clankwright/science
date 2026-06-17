# vLLM and SGLang: power-user local inference

## What it is
The two production-grade inference engines that take you from "chat with my model" to "serve thousands of requests with continuous batching, prefix caching, structured output, and speculative decoding." vLLM (UC Berkeley, started Sept 2023) introduced PagedAttention; SGLang (LMSYS, 2024) added RadixAttention for shared-prefix workloads. Both run on NVIDIA, AMD, and increasingly Apple Silicon. What a serious power user runs on a workstation when llama.cpp's single-stream throughput is no longer enough.

## Specific unlocks
- Saturate a 4090 or H100 with a 30B model and serve 10-50 concurrent users from a single GPU at sustained throughput. SGLang on H100 hits ~16,200 tok/s vs vLLM's 12,500 tok/s on same hardware.
- Get up to 6.4x throughput improvement on RAG / multi-turn-chat workloads via SGLang's RadixAttention because shared prefixes (system prompt, retrieved context) get cached across requests.
- Run structured-output generation (JSON, regex-constrained, grammar-constrained) at full speed with SGLang's frontend language or vLLM's `outlines` integration.
- Serve a 70B model from a 64 GB Mac Studio M3 Ultra to your whole household / team via the OpenAI-compatible HTTP server, with proper request queuing.
- Speculative decoding: pair a small "draft" model with a large "target" model and get 2-3x token-gen speedup on tasks where the draft model is usually right.
- Run the same model on AMD MI300X, NVIDIA H100, or even AWS Trainium with a config flag change (vLLM's hardware abstraction is mature).

## When you reach for which
- **vLLM:** mature, broad hardware support (NVIDIA / AMD / Intel / TPU), big user base, encoder-decoder support. First choice for "I need it to run on whatever hardware ships next month."
- **SGLang:** newer, faster on prefix-heavy workloads, programmable frontend language for complex generation flows, RadixAttention. First choice when your workload is RAG, multi-turn agents, or structured generation.
- **LMDeploy:** less common, optimized for NVIDIA, often fastest on a single GPU.
- **TGI (HuggingFace):** integrated tightly with HuggingFace ecosystem; less common in 2026.

## Pre-AI baseline
Pre-2023 "serve a transformer model" was DIY: TensorFlow Serving or TorchServe with custom batching code, no PagedAttention, KV cache eating most VRAM. Throughput was a fraction of today.

## Hardware / cost
Both free, open-source (Apache 2.0). Hardware floors:
- **Single 24 GB GPU (3090/4090):** runs Qwen 3 32B Q4 or Llama 3.1 70B AWQ for a small team.
- **Single 32 GB GPU (5090):** comfortable 70B AWQ.
- **2x 24 GB or 1x H100 (80 GB):** 70B FP16, 100B AWQ.
- **Multi-GPU (4x 3090, 2x H100, 8x H100):** 100B-400B dense or huge MoEs.
- **Apple Silicon:** vLLM has Metal/MLX backend in 2026 but is still optimized for CUDA first; an M3 Ultra runs vLLM but performance per dollar lags H100.

## Maturity
Production-grade. Anthropic-style API surfaces (chat completions, tool use, structured output) supported on both. Tens of thousands of production deployments.

Breaks / weak:
- Setup is harder than Ollama / LM Studio: CUDA driver versions, NCCL for multi-GPU, model-weight format conversion (HF -> AWQ/GPTQ/FP8).
- Model coverage trails llama.cpp by days to weeks for brand-new architectures.
- Memory tuning (gpu-memory-utilization, max-num-seqs, swap-space) requires understanding to avoid OOM under load.
- RadixAttention's gain disappears on workloads with no shared prefix.

## Sources
- https://www.yottalabs.ai/post/vllm-vs-sglang-which-inference-engine-should-you-use-in-2026
- https://blog.premai.io/vllm-vs-sglang-vs-lmdeploy-fastest-llm-inference-engine-in-2026/
- https://kanerika.com/blogs/sglang-vs-vllm/
- https://particula.tech/blog/sglang-vs-vllm-inference-engine-comparison
- https://localaimaster.com/blog/sglang-vs-vllm-comparison
- https://inference.net/content/sglang-complete-guide/
- https://www.yottalabs.ai/post/best-llm-inference-engines-in-2026-vllm-tensorrt-llm-tgi-and-sglang-compared
