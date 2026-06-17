# Attention via Synaptic Plasticity is All You Need: A Biologically Inspired Spiking Neuromorphic Transformer (S²TDPT)

**Authors:** Kallol Mondal, Ankush Kumar (NIT Allahabad; IIT Roorkee Centre for Nanotechnology)
**Venue:** arXiv:2511.14691 (cs.NE)
**Date:** 2025-11-18
**URL:** https://arxiv.org/abs/2511.14691
**Access:** preprint

## Abstract (summary)

The Spiking STDP Transformer (S²TDPT) implements self-attention through
spike-timing-dependent plasticity (STDP), embedding query-key correlations
directly in synaptic weights rather than relying on dot-product attention. This
enables energy-efficient, hardware-friendly neuromorphic models suited to
in-memory computing.

## Key results

- Self-attention realized as STDP: query-key correlations stored in synaptic
  weights, removing explicit dot-product attention.
- CIFAR-10 accuracy 94.35%; CIFAR-100 accuracy 78.08%, using only 4 timesteps.
- 0.49 mJ energy on CIFAR-100, an 88.47% energy reduction versus a standard ANN
  Transformer.
- Grad-CAM shows attention concentrated on semantically relevant image regions,
  adding interpretability.

## Relevance

Recasts the attention mechanism itself as a biological plasticity rule (STDP),
distinct from prior work that merely spikes transformer activations. Bears on
neuromorphic-computing and brain-inspired transformer efficiency.
