# HARP: Hadamard-Preconditioned Adaptive Rotation Processor for extreme LLM quantization
Authors: Zagitov, Molodtsov, Beznosikov (BRAIn Lab) | Date: 2026-05
URL: https://arxiv.org/abs/2605.29843

- Learnable sparse butterfly-block rotations (per-layer calibrated), initialized to exactly recover the randomized Hadamard transform.
- Llama 2 7B 2-bit: 7.23 WikiText2 PPL vs QuIP#-RHT 8.22, OmniQuant 11.06 (ctx 2048).
- Llama 2 7B 2-bit zero-shot: ARC-Easy 63.7% vs RHT 56.7%; ARC-Challenge 33.0% vs 29.7%.
- 4-bit Llama 2 7B matches SpinQuant (5.59 vs 5.6 PPL); tested 1B-70B.
- RTX 5080, Llama 2 7B 2-bit: 128 tok/s (FP16 61, RHT 142).
