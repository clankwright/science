# FastTTS: Accelerating Test-Time Scaling for Edge LLM Reasoning

**Source:** arXiv:2509.00195 (https://arxiv.org/abs/2509.00195)
**Date:** September 2025; ASPLOS 2026
**Form:** plug-and-play vLLM library

## Core claim

Memory-constrained test-time scaling for edge LLMs via three techniques:
1. Speculative Beam Extension: handles irregular reasoning paths under TTS.
2. Asymmetric Multi-Model Memory Allocation: balances generation vs verification memory.
3. Dynamic Prefix-Aware Scheduling: KV-cache reuse across search paths.

## Numbers

- 2.2x goodput vs vLLM baseline.
- 38-68% latency reduction vs vLLM baseline.
- Single consumer GPU matches cloud accuracy at cloud latency.

## Relevance to 4 GB edge target

Direct hit. Single consumer GPU, vLLM-compatible, addresses the exact memory-constrained TTS problem the wiki cares about. TTS is the only credible path to closing the small-model capability gap on hard coding tasks.
