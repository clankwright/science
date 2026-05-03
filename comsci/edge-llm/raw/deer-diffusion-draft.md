# DEER: Diffusion-Based Drafter for Speculative Decoding

**Source:** arXiv:2512.15176 (https://arxiv.org/abs/2512.15176)
**Date:** December 2025

## Core claim

Diffusion-based drafter generates entire draft sequences in a single denoising pass instead of autoregressive token-by-token drafting. Acceptance lengths up to 32 tokens vs ~10 for EAGLE-3.

## Implication

3x acceptance length means 3x effective decode speed for the same target model. Materially changes the case for running a 7B target plus a small drafter on 4 GB.

## Relevance to 4 GB edge target

If the diffusion drafter VRAM footprint is comparable to EAGLE-3 (single-layer head), this is a drop-in 3x decode speedup. Would shift the runtime-comparison ranking.

## Open questions

- VRAM footprint of the diffusion drafter on 4 GB.
- Training cost vs EAGLE-3.
- Behavior on coding-distribution drafts (acceptance lengths typically lower than chat).
