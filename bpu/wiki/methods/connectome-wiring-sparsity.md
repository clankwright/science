# Why Connectome Wiring Beats Random Wiring Under High Sparsity

> **Summary:** Echo-state reservoirs wired from the adult [Drosophila](../entities/drosophila.md) [connectome](../concepts/connectome.md) are compared against sparsity-matched random-wiring controls across 8 cognitive tasks. The connectome advantage is specific to the high-sparsity regime biological networks operate in: per-neuron task importance is narrowly distributed and correlates with graph features (degree, clustering, self-recurrency) far more strongly than in random networks. Provides a mechanistic account of why biological topology outperforms random graphs.

**Sources:** [[raw/connectome_sparsity_biorxiv_2026.md]] (bioRxiv 2026.03.30.715411)

---

## Approach

Reservoir computing (echo-state networks) is used as the test bed, isolating
topology effects because only the readout is trained while the recurrent
substrate is frozen:

- **Reservoir:** wiring drawn from the adult *Drosophila melanogaster*
  connectome (~140K neurons, ~50M synapses scale).
- **Controls:** random graphs matched to the connectome's sparsity, so the
  comparison varies topology while holding connection count fixed.
- **Tasks:** 8 cognitive tasks, evaluating per-neuron functional contribution.

## Key findings

- **Narrow task engagement:** connectome-based networks (CoNNs) show a narrowly
  distributed per-neuron task engagement; random networks spread engagement
  broadly.
- **Graph features predict importance:** per-neuron task importance correlates
  with node degree, local clustering coefficient, and self-recurrency. These
  correlations are significantly stronger in CoNNs than in random networks.
- **Sparsity is the operative regime:** the robustness and efficiency advantage
  appears specifically under high sparsity, not at dense connectivity.

## Significance

Earlier connectome-reservoir work ([Connectome Reservoir Computing](connectome-reservoir-computing.md))
established that FlyWire wiring resists overfitting better than random
reservoirs. This study explains the mechanism: at the sparsity biological brains
actually use, non-random topology concentrates computation in graph-central
neurons, yielding robust and efficient function. It connects graph-theoretic
structure to per-neuron functional roles, sharpening the
[connectome-inspired-architectures](../concepts/connectome-inspired-architectures.md)
thesis that biological wiring carries computational advantage beyond random
sparsity (the same claim made for sparse transformers in
[brain-inspired transformer efficiency](../concepts/brain-inspired-transformer-efficiency.md)).

## See Also

- [Connectome Reservoir Computing](connectome-reservoir-computing.md)
- [conn2res Toolbox](conn2res-toolbox.md)
- [Deep Connectomics Networks](deep-connectomics-networks.md)
- [Brain-Inspired Transformer Efficiency](../concepts/brain-inspired-transformer-efficiency.md)
