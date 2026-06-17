# S²TDPT: Attention via Synaptic Plasticity (Spiking STDP Transformer)

> **Summary:** The Spiking STDP Transformer (S²TDPT) replaces dot-product self-attention with spike-timing-dependent plasticity (STDP), embedding query-key correlations directly in synaptic weights for in-memory, neuromorphic computing. It reaches 94.35% on CIFAR-10 and 78.08% on CIFAR-100 with only 4 timesteps, at 0.49 mJ on CIFAR-100, an 88.47% energy reduction versus a standard ANN transformer. Recasts the attention mechanism itself as a biological learning rule rather than merely spiking the activations.

**Sources:** [[raw/mondal_s2tdpt_2025.md]] (arXiv:2511.14691)

---

## Approach

S²TDPT reframes self-attention as a plasticity process:

- **STDP attention:** query-key correlations are stored in synaptic weights via
  spike-timing-dependent plasticity, removing the explicit dot-product
  attention matrix.
- **In-memory computing:** keeping correlations in weights makes the operation
  hardware-friendly for neuromorphic substrates ([Loihi 2](../concepts/neuromorphic-computing.md)
  class hardware).
- **Low timestep budget:** the network runs at only 4 timesteps, limiting the
  energy and latency overhead common to spiking models.

## Key findings

- CIFAR-10 accuracy 94.35%; CIFAR-100 accuracy 78.08% at 4 timesteps.
- 0.49 mJ energy on CIFAR-100, an 88.47% reduction versus a standard ANN
  transformer.
- Grad-CAM shows attention concentrated on semantically relevant image regions,
  adding interpretability.

## Significance

Existing [brain-inspired transformer efficiency](../concepts/brain-inspired-transformer-efficiency.md)
work (e.g. [CP-ViT](cp-vit-core-periphery.md)) sparsifies attention using brain
network topology but keeps the dot-product operation. S²TDPT goes further: the
attention computation is itself a synaptic plasticity rule, aligning it with
[biologically plausible learning](../concepts/biologically-plausible-learning.md)
(STDP/Hebbian) and with [neuromorphic computing](../concepts/neuromorphic-computing.md)
hardware that computes in memory. It is complementary to spiking-network training
methods like [BrainTrace SNN Training](braintrace-snn.md) and
[CH-SNN](cannistraci-hebb-snn.md), which target how to train spiking nets rather
than how to express attention.

## See Also

- [Cannistraci-Hebb on Spiking Neural Networks (CH-SNN)](cannistraci-hebb-snn.md)
- [CP-ViT](cp-vit-core-periphery.md)
- [Neuromorphic Computing](../concepts/neuromorphic-computing.md)
- [Biologically Plausible Learning](../concepts/biologically-plausible-learning.md)
