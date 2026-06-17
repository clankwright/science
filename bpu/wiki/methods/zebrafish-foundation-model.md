# Sensing Whole-Brain Zebrafish Foundation Model (SBM)

> **Summary:** A sparse-attention whole-brain foundation model for larval zebrafish forecasts per-neuron spike probabilities at single-neuron resolution, conditioned on sensory stimuli, and couples a behavior head that supports gradient-based synthesis of neural patterns eliciting target behaviors. Mean absolute error below 0.02 on a held-out subject. Extends vertebrate connectome modeling beyond forecasting ([ZAPBench](zebrafish-connectome-models.md)) into closed-loop behavior generation.

**Sources:** [[raw/fatehmanesh_zebrafish_fm_2025.md]] (arXiv:2510.27366)

---

## Approach

The Sensing Brain Model (SBM) is a foundation model over larval zebrafish
whole-brain activity:

- **Factorized sparse attention:** attention is factorized across neurons and
  along time, giving whole-brain scale at single-neuron resolution plus
  interpretability. This avoids the PCA/convolution pipelines that miss
  long-range non-linear interactions.
- **Stimulus conditioning:** spike-probability forecasts are conditioned on
  sensory stimuli.
- **Behavior head:** a permutation-invariant behavior head links brain state to
  behavior, enabling gradient-based synthesis of neural activation patterns that
  elicit target behaviors (e.g. social interaction).

## Key findings

- Mean absolute error below 0.02 on a held-out subject, with calibrated
  predictions and stable autoregressive rollouts.
- Single-neuron resolution at whole-brain scale, addressing the failure of prior
  whole-brain models to combine scale, resolution, and behavioral readout.
- Closed-loop capability: synthesize neural patterns that drive a desired
  behavior, not just predict activity.

## Significance

Where [Zebrafish Connectome Models](zebrafish-connectome-models.md) and the
[ZAPBench](zebrafish-connectome-models.md) benchmark frame whole-brain zebrafish
activity as a forecasting problem, SBM is a trained model artifact that adds a
behavioral objective and inverts the problem: given a target behavior, synthesize
the neural activity that produces it. It sits alongside the
[Large Connectome Model](large-connectome-model.md) and mouse
[digital twins](mouse-v1-digital-twin.md) as part of the brain-foundation-model
wave, and shares the connectome-to-function ambition of
[Lappalainen's connectome-constrained DMNs](connectome-constrained-dmn.md) at
vertebrate scale.

## See Also

- [Zebrafish Connectome Models](zebrafish-connectome-models.md)
- [Mouse V1 Digital Twins](mouse-v1-digital-twin.md)
- [Large Connectome Model](large-connectome-model.md)
- [BrainTrace SNN Training](braintrace-snn.md)
