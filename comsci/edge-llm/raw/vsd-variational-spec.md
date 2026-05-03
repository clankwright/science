# Variational Speculative Decoding (VSD)

**Source:** arXiv:2602.05774 (https://arxiv.org/abs/2602.05774)
**Date:** February 2026

## Core claim

Reformulates draft training as variational inference over latent proposals, maximizing marginal probability of target acceptance.

## Numbers

- +9.6% over EAGLE-3.
- +7.9% over ViSpec.

## Relevance to 4 GB edge target

Direct VRAM-efficient improvement over EAGLE-3, which the wiki currently treats as the speculative-decoding default at 4 GB. If the drafter footprint is similar, VSD is a drop-in replacement.
