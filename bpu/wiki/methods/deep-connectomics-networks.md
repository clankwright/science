# Deep Connectomics Networks (DCNs)

> **Summary:** DCNs are deep neural networks whose layer topologies are derived from real neuronal wiring diagrams. By converting small-world connectome models of C. elegans and mouse visual cortex into directed acyclic graphs and using them as wiring patterns, DCNs outperform both graph-free baselines and Watts-Strogatz random graph controls. The key finding: biological graph topology confers a performance advantage independent of parameter count.

**Sources:** [[raw/roberts_dcn_2019.md]]

---

## Method

1. **Obtain connectome graphs:** small-world models of the [*C. elegans*](../entities/c-elegans.md) nervous system and the mouse visual cortex connectome
2. **Convert to DAGs:** transform the biological connectivity into directed acyclic graphs suitable for feedforward layer wiring
3. **Wire neural network layers:** use the DAG structure as the connectivity pattern within or between layers, replacing fully connected topologies

The biological wiring imposes sparse, structured connectivity that reflects the actual neural architecture of these organisms.

## Results

| Dataset | C. elegans DCN |
|---------|---------------|
| MNIST | 99% |
| KMNIST | 93% |
| Fashion-MNIST | 90% |

DCNs with biological wiring outperform two controls:

- **No-graph baselines:** standard architectures without graph-structured connectivity
- **Watts-Strogatz random graphs:** synthetic small-world graphs with matched degree distributions

The mouse visual cortex frozen model beats its baseline even without additional parameters, demonstrating that the topology itself carries useful inductive bias.

## Key Insight

Graph topology is a significant factor independent of parameter count. When biological graphs are frozen (no trainable weights within the graph structure), they still outperform frozen random graphs. This suggests that the specific wiring patterns shaped by evolution encode computational structure that random connectivity cannot replicate.

## Relation to Other Work

DCNs represent an early bridge between connectomics data and deep learning architecture design. The approach complements later work on [BPUs](biological-processing-units.md), which use full recurrent connectomes rather than DAG approximations, and [connectome-constrained DMNs](connectome-constrained-dmn.md), which optimize single-neuron parameters within a fixed connectome topology.

## Authors

Nicholas Roberts (CMU), Dian Ang Yap (Stanford), Vinay Uday Prabhu (UnifyID). NeurIPS 2019 workshop; arXiv:1912.08986.

## See Also

- [Biological Processing Units](biological-processing-units.md)
- [Nematode Connectome Neural Networks](nematode-connectome-neural-networks.md)
- [Neural Circuit Policies](neural-circuit-policies.md)
- [Connectome-Constrained Deep Mechanistic Networks](connectome-constrained-dmn.md)
- [Connectome-Inspired NAS](connectome-nas.md)
- [C. elegans Olfactory Circuit ANN](celegans-olfactory-circuit-ann.md)
