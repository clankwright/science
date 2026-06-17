# Local-first AI / sovereignty stack: overview

## What it is
AI that runs on your hardware, with your data, beholden to no vendor terms of service or content policy. Open-weight models from Meta (Llama 4), Alibaba (Qwen 3.5), DeepSeek (V4 / R1), Mistral (Medium 3.5, Small 4), Google (Gemma 4) plus the local-inference stacks that run them: llama.cpp, MLX, vLLM, SGLang, Ollama, LM Studio.

## Specific unlocks
- Run Llama 3.3 70B Q4 on a 64 GB MacBook Pro M4 Max at 8-15 tok/s with no internet, no logging, no API key.
- Run DeepSeek V4 at home on a DGX Spark ($4,699 desk box, 128 GB unified memory, 1 PFLOP) for fine-tuning up to 70B.
- Generate adult creative content, weapons-research-adjacent material, or politically sensitive text with abliterated models that have had refusal directions surgically removed.
- Process a leaked-document corpus on an airgapped laptop with no third-party logging, no rate limits, no future subpoena risk against a vendor.
- Operate an in-clinic medical-record summarizer that stays HIPAA-compliant by never leaving the LAN.
- Run a coding assistant inside a SCIF or a regulated industry where cloud LLMs are banned outright.

## Pre-AI baseline
Pre-2023: organizations needing ML at this scale ran TensorFlow/PyTorch with a dedicated MLOps team and a $50k+ GPU box. There was no "download a model and chat" path. Sensitive-data shops had to staff human analysts; airgapped environments had no LLM capability at all.

## Hardware floors (May 2026)
- **Phone / laptop CPU only:** 1B-4B models (Gemma 3 1B, Phi-4-mini, Qwen 3 4B). Slow but functional for autocomplete and structured-output tasks.
- **8 GB VRAM (RTX 3060/4060):** 7B-8B Q4 (Llama 3.1 8B, Qwen 3 8B). Real conversations, mediocre coding.
- **16 GB VRAM (RTX 4070 Ti Super, M2/M3 16GB):** 13-14B comfortably; 32B at heavy quant; SDXL and Flux quantized.
- **24 GB VRAM (RTX 3090, 4090):** 32B class (Qwen 3 Coder 30B, Devstral) at decent quant, full Flux, full SDXL with multiple LoRAs.
- **32 GB VRAM (RTX 5090):** 70B at Q4 just barely fits; 32B at Q8.
- **64 GB unified (MacBook Pro M4 Max):** Llama 3.3 70B Q4 at 8-15 tok/s; the entry tier for "serious" home AI.
- **128 GB unified (DGX Spark, M3 Ultra):** 200B class inference, fine-tune to 70B locally.
- **192 GB unified (M2/M3 Ultra Mac Studio):** Frontier open-weight MoEs (Qwen 3 235B-A22B, Llama 4 Maverick) at usable speeds.
- **Multi-GPU (2x A6000, 4x 3090, H100):** vLLM/SGLang batched serving, 100B+ dense.

## Open-weight model state, May 2026
Frontier open-weight (NIST CAISI: roughly 8 months behind closed frontier):
- **DeepSeek V4 Pro:** 87.5 MMLU-Pro, 90.1 GPQA, 80.6 SWE-bench Verified. Best raw open-weight scores.
- **Qwen 3.5 / Qwen 3-235B-A22B:** Apache 2.0, broadest benchmark coverage, MoE makes 22B activated params cheap to serve.
- **Llama 4 Scout / Maverick:** Meta's MoE family, native multimodal, long context.
- **Mistral Medium 3.5:** 128B dense, 256K context, 77.6% SWE-bench Verified, native multimodal. Replaces Magistral + Devstral 2.
- **Gemma 4 / Gemma 3 27B:** Google's small-and-strong play; 128K context, 140+ languages, fits 8 GB at small sizes.
- **Qwen 3 Coder 480B / 30B / Coder-Next 80B-A3B:** dedicated agentic-coding SKUs.

The dominant inference engines: llama.cpp (CPU + GPU, GGUF, the universal runtime), MLX (Apple Silicon native), vLLM (datacenter-style serving), SGLang (RadixAttention, ~29% faster than vLLM on H100), Ollama (model-registry wrapper around llama.cpp), LM Studio (GUI on top of llama.cpp + MLX).

## Maturity
Production-grade for: chat, code completion, summarization, RAG over private docs, image generation, transcription, TTS. Still gappy for: long-horizon agentic coding versus Sonnet 4.6 / Opus 4.7, true multimodal reasoning, scientific frontier reasoning.

## Sources
- https://magazine.sebastianraschka.com/p/a-dream-of-spring-for-open-weight
- https://www.vellum.ai/open-llm-leaderboard
- https://onyx.app/self-hosted-llm-leaderboard
- https://www.buildfastwithai.com/blogs/best-ai-models-may-2026-leaderboard
- https://julsimon.medium.com/what-to-buy-for-local-llms-april-2026-a4946a381a6a
- https://vitalik.eth.limo/general/2026/04/02/secure_llms.html
