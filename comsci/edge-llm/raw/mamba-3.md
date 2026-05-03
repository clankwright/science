# Mamba-3: Improved Sequence Modeling using State Space Principles

**Source:** arXiv:2603.15569 (https://arxiv.org/abs/2603.15569); ICLR 2026 (OpenReview HwCvaJOiCj)
**Date:** March 2026
**Authors:** state-spaces lineage (Albert Gu et al.)

## Three architectural deltas over Mamba-2

1. Exponential-trapezoidal SSM discretization, subsuming the short conv used by current linear models.
2. Complex-valued state update enabling state tracking that S6 cannot do.
3. MIMO formulation raising arithmetic intensity without increasing decode latency.

## Numbers

- At 1.5B parameters: +1.8 average downstream accuracy over Gated DeltaNet baseline.
  - +0.6 from Mamba-3 core architecture.
  - +1.2 from MIMO.
- Achieves Mamba-2 perplexity at half the state size.

## Relevance to 4 GB edge target

Half-state-size at parity is a direct VRAM win for long-context coding agents. MIMO arithmetic-intensity bump is what makes SSMs actually faster on a laptop GPU rather than just theoretically efficient. No coder-tuned Mamba-3 checkpoint exists yet; this is the obvious base for one.
