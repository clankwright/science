# LM Studio

## What it is
A polished desktop GUI for downloading and running local LLMs, built on top of llama.cpp and (on Macs) Apple's MLX. Free for individuals; paid commercial license. The "Steam-for-LLMs" experience: browse HuggingFace inside the app, pick a quantization with a green/yellow/red "will it fit your VRAM" badge, click download, chat. Also exposes an OpenAI-compatible server at `localhost:1234`.

## Specific unlocks
- Hand a non-technical colleague a Mac and they can be chatting with Qwen 3 30B locally in 10 minutes, no command line.
- On Apple Silicon, switch any model between GGUF (llama.cpp) and MLX runtime with a dropdown. MLX often runs 10-30% faster on the same hardware and handles vision input that llama.cpp doesn't on Mac.
- Tune temperature, top-p, repetition penalty, system prompt, context length live in the sidebar while chatting; see effects in the next message.
- Run multiple models loaded simultaneously and route between them per-request from a single OpenAI endpoint.
- Browse model cards from HuggingFace inside the app with download size, quantization tradeoffs, and "estimated tok/s on your hardware" estimates.
- Use it as the local backend for Continue.dev, Cline, RooCode, and Open WebUI by pointing them at the LM Studio server.

## Workflow comparison vs Ollama
| | LM Studio | Ollama |
|---|---|---|
| Surface | GUI-first, server optional | CLI/server-first, no GUI |
| Mac MLX | Yes, native | Limited (Gemma 4 added 2026) |
| Model discovery | HuggingFace browser inside app | Curated registry, ~200 models |
| Custom GGUF | Drag and drop file | Modelfile + import |
| Tuning UX | Sliders | Text config |
| Best for | Designers, PMs, Mac users | Developers, scripts, CI |

In practice many people run both: LM Studio for exploration and chat sessions, Ollama as the always-on background server that tools talk to.

## Pre-AI baseline
Same llama.cpp pre-history as Ollama, but LM Studio specifically replaces the "I want to chat with a local model and tweak settings without learning CLI" use case. Pre-2023 there was no consumer equivalent.

## Hardware / cost
Free for personal; commercial license required for organizations. Same hardware tiers as any llama.cpp / MLX client. The "estimate tok/s for your machine" feature reduces failed downloads on smaller systems.

## Maturity
Works well: model browsing and download, chat UI, MLX on Mac, OpenAI-compatible server, multi-model load, JSON mode, function calling for models that support it, Speculative Decoding (LM Studio 0.3.x added it).

Breaks / weak: closed-source app (community can't fix bugs upstream); occasional MLX runtime regressions; some models in the HF browser silently fail to load if their quant is unusual; Linux support exists but lags Mac/Windows polish.

## Sources
- https://lmstudio.ai/
- https://lmstudio.ai/docs/app
- https://lmstudio.ai/blog/lmstudio-v0.3.4
- https://markaicode.com/lm-studio-mlx-apple-silicon-models/
- https://macgpu.com/en/blog/2026-mac-ollama-lm-studio-mlx-stack-decision-remote-offload.html
