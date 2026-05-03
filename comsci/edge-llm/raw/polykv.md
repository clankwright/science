# PolyKV: Shared Asymmetrically-Compressed KV Cache Pool

**Source:** arXiv:2604.24971 (https://arxiv.org/abs/2604.24971)
**Date:** April 2026

## Core claim

Single compressed KV cache shared across multiple agents. K stored at int8, V stored at TurboQuant 3-bit. Asymmetric compression reflects K vs V precision-sensitivity.

## Relevance to 4 GB edge target

Multi-agent scaffolds (planner + executor + reviewer) running on one local model are the natural shape for solo-dev coding agents. Sharing KV across agent personas reclaims VRAM that would otherwise duplicate the system prompt and tool definitions per agent. Direct multiplier on effective context inside the 4 GB budget.
