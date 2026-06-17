# llama.cpp and GGUF

## What it is
The C++ inference engine that started life in March 2023 as Georgi Gerganov's "run Llama on a MacBook" weekend project and has since become the universal backend for local LLM inference across CPU, CUDA, ROCm, Metal, Vulkan, SYCL, and ARM NEON. Almost every consumer-facing local-AI tool (Ollama, LM Studio, Jan, GPT4All, Open WebUI's bundled engine) is a llama.cpp wrapper. GGUF is the file format it consumes.

## Specific unlocks
- Run a 70B model on a 64 GB Mac at usable speed using only Metal and unified memory, no NVIDIA driver in sight.
- Quantize a freshly-released HuggingFace model to GGUF yourself in 30 minutes with `convert_hf_to_gguf.py` then `llama-quantize`.
- Run a 405B model across a CPU-only AMD EPYC machine with 512 GB DDR5 because llama.cpp will offload to CPU when GPU is full. Painful but possible.
- Load a model on Windows without CUDA via Vulkan, opening up cheap AMD GPUs and Intel Arc cards.
- Write a Python or Node script with `llama-cpp-python` / `node-llama-cpp` and embed inference inside an app with no server process.
- Run on a Raspberry Pi 5 (ARM NEON) with a 1B-3B model. Slow but works, useful for offline embedded.

## The quantization story
GGUF is a single-file format containing weights, tokenizer, chat template, and metadata. Quantizations come in flavors:

- **K-quants** (Q2_K, Q3_K_S/M/L, Q4_K_S/M, Q5_K_S/M, Q6_K, Q8_0): the default. Per-block scale + min, with `_M` variants keeping sensitive layers (attention output, FFN down-projection) at higher precision. **Q4_K_M is the universal default**: ~75% size reduction with negligible quality loss versus FP16.
- **I-quants** (IQ1_S/M, IQ2_XXS/XS/S/M, IQ3_XXS/XS/S/M, IQ4_XS/NL): importance-matrix-based reconstruction. Compress harder per byte, retain quality better at the bottom of the range. Cost: slower CPU decode. **IQ4_XS** sits between Q4_K_M and Q4_K_S in size, often a bit faster on token gen but slower on prompt processing.
- **Legacy** (Q4_0, Q4_1, Q5_0, Q5_1, Q8_0): older formats, mostly retained for compatibility.
- **TurboQuant / KV-cache quant**: 2026 work pushed extreme KV-cache quantization (4-bit K/V) so you can fit 32k+ context on consumer hardware without buying more VRAM.

Practical defaults: Q4_K_M for most use; Q5_K_M when you have 25% headroom and want a measurable quality bump; Q8_0 for benchmarks and finetuning data generation; IQ4_XS when you need to squeeze a bigger model into VRAM.

## Pre-AI baseline
Pre-llama.cpp: running Llama meant cloning the official Meta repo, installing PyTorch with the right CUDA version, fitting the FP16 weights in VRAM (so 13B needed an A100 or similar). llama.cpp + 4-bit quantization collapsed that to "your gaming laptop."

## Hardware / cost
Free, MIT-licensed. Runs on essentially anything with 64-bit integer math. Practical floor: 4 GB RAM for 1B Q4 models. Practical ceiling: 405B + 512 GB DDR5 + 8x H100, but at that point you should be using vLLM or SGLang.

## Maturity
Production-grade for inference on every common hardware target. New model architectures usually land in llama.cpp within days of release (Qwen, Llama, Gemma, Mistral, DeepSeek all supported within a week of weight drops).

Breaks / weak: training and fine-tuning are second-class (use Unsloth, Axolotl, or PyTorch directly); some exotic architectures (state-space models, hybrid attention) take longer to land; multimodal vision support is patchy compared to MLX on Apple.

## Sources
- https://github.com/ggml-org/llama.cpp
- https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/README.md
- https://github.com/ggml-org/llama.cpp/discussions/2094
- https://kaitchup.substack.com/p/choosing-a-gguf-model-k-quants-i
- https://www.decodesfuture.com/articles/llama-cpp-gguf-quantization-guide-2026
- https://github.com/ggml-org/llama.cpp/discussions/20969
