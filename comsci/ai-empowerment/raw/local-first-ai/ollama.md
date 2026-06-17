# Ollama

## What it is
The most popular local LLM runner in the developer market. A thin Go wrapper around llama.cpp that adds a model registry (`ollama pull qwen3:8b`), an OpenAI-compatible HTTP server on `localhost:11434`, and automatic GPU/CPU dispatch. As of late 2025 / early 2026, version 0.13.x; Llama 3.1 alone has crossed 112 million pulls.

## Specific unlocks
- One command and you have an OpenAI-compatible chat endpoint on your laptop: `ollama serve` then point any tool that speaks OpenAI at `http://localhost:11434/v1`.
- Switch models without restarting your tooling: `ollama run deepseek-r1:32b` versus `ollama run qwen3-coder:30b`. The library has roughly 200+ curated models as of April 2026.
- Run on Windows ARM64 (Snapdragon X Elite) with native ARM build added in 2026, no x86 emulation penalty.
- Drop into Continue.dev, Cline, Aider, or any LangChain/LlamaIndex pipeline by changing the base URL only.
- Ship an offline-only Docker container with a baked-in model for an airgapped environment.
- Run uncensored variants (`dolphin-mixtral`, `dolphin3:8b`, `huihui_ai/qwen3-abliterated`) by pulling them from the public registry, no fork required.

## Pre-AI baseline
Before Ollama (late 2023): you compiled llama.cpp by hand, hunted GGUF files on HuggingFace, hand-edited a chat template per model, wrote your own server. Skill floor was "knows make, CUDA toolkit version semantics, and chat-template formatting." Now: one binary install, two commands.

## Hardware / cost
Free, MIT-licensed. Hardware needs depend entirely on the model:
- 4 GB RAM laptop, no GPU: Phi-4-mini, Gemma 3 1B, Qwen 3 1.7B (slow but works).
- 8 GB VRAM GPU: 7-8B Q4 (Llama 3.1 8B, Qwen 3 8B) at ~30 tok/s.
- 16 GB VRAM: 14B comfortably; quantized 32B at lower speeds.
- 24 GB VRAM (3090/4090): Qwen 3 Coder 30B at Q4, Devstral 24B, Mistral Small 24B at decent quant.
- 64 GB unified RAM Mac: 70B Q4.
- The famous "K2.6" MoE Kimi release (April 2026) is in the registry but is multi-hundred-GB; needs serious hardware.

## What it actually runs well
Default registry covers: Llama 3.x / 4, Qwen 2.5 / 3 / Coder, Gemma 2 / 3, Mistral / Mixtral / Devstral, DeepSeek V3 / R1 distills, Phi-4, Granite, Command R+, Nomic embeddings, BGE, LLaVA / Qwen-VL multimodal. Pull-by-tag includes quantization specifier (`qwen3:8b-q4_K_M`).

## Maturity
Works: chat, completion, embeddings, JSON mode, tool calling for major models, OpenAI API parity, GPU offload, multimodal for LLaVA-class models. Native CLI is good for quick checks.

Breaks / weak: model-format coverage lags llama.cpp head by days to weeks (new architectures land late). Tool-calling reliability varies by model. Long-context performance (32k+) often disappointing on consumer GPUs because KV cache eats VRAM. Less knob exposure than running llama.cpp directly: changing rope-scaling, batch size, or KV-cache type per call needs Modelfile edits.

## Sources
- https://ollama.com/library
- https://github.com/ollama/ollama
- https://www.promptquorum.com/local-llms/top-open-source-models-ollama
- https://claude5.com/news/local-llm-guide-ollama-lm-studio-llama-cpp-in-2026
