# NVIDIA Nemotron-3-Nano-4B
Vendor: NVIDIA | Date: 2026-03 | HF model card + GGUF / Nemotron technical report
URL: https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Nano-4B-BF16
GGUF: https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-4B-GGUF

- 3.97B params, hybrid Mamba-2 + Transformer (4 attention layers); distilled/compressed from Nemotron-Nano-9B-v2 via Nemotron Elastic; 262K context (card 2026-03-16).
- Reasoning/non-reasoning toggle.
- LiveCodeBench 51.8 (reasoning-off, NeMo-Skills harness, 2026-03).
- BFCL v3 61.1; AIME25 78.5; MATH500 95.4; GPQA 53.2 (card).
- GGUF sizes: Q4_K_M 2.9 GB, IQ4_XS 2.54 GB, Q3_K_M 2.46 GB, IQ2_XXS 2.18 GB.
- No SWE-bench/Aider published; coding signal = LiveCodeBench + BFCL only.
