# A Sensing Whole Brain Zebrafish Foundation Model for Neuron Dynamics and Behavior

**Authors:** Sam Fatehmanesh Vegas, Matt Thomson, James Gornet, David Prober (Caltech)
**Venue:** arXiv:2510.27366 (q-bio.NC / cs.LG)
**Date:** 2025-10-31
**URL:** https://arxiv.org/abs/2510.27366
**Access:** preprint

## Abstract (verbatim)

Neural dynamics underlie behaviors from memory to sleep, yet identifying
mechanisms for higher-order phenomena (e.g., social interaction) is
experimentally challenging. Existing whole-brain models often fail to scale to
single-neuron resolution, omit behavioral readouts, or rely on PCA/conv
pipelines that miss long-range, non-linear interactions. We introduce a
sparse-attention whole-brain foundation model (SBM) for larval zebrafish that
forecasts neuron spike probabilities conditioned on sensory stimuli and links
brain state to behavior. SBM factorizes attention across neurons and along time,
enabling whole-brain scale and interpretability. On a held-out subject, it
achieves mean absolute error <0.02 with calibrated predictions and stable
autoregressive rollouts. Coupled to a permutation-invariant behavior head, SBM
enables gradient-based synthesis of neural patterns that elicit target behaviors.
This framework supports rapid, behavior-grounded exploration of complex neural
phenomena.

## Key results

- Sparse-attention "Sensing Brain Model" (SBM) forecasts per-neuron spike
  probabilities at whole-brain, single-neuron resolution, conditioned on
  sensory stimuli.
- Mean absolute error <0.02 on a held-out subject, with calibrated predictions
  and stable autoregressive rollouts.
- Attention factorized across neurons and across time for whole-brain
  scalability plus interpretability.
- Permutation-invariant behavior head enables gradient-based synthesis of neural
  activation patterns that elicit target behaviors (e.g. social interaction).

## Relevance

Vertebrate whole-brain foundation model that extends beyond ZAPBench-style
forecasting to closed-loop behavior synthesis. A new model artifact, not just a
benchmark.
