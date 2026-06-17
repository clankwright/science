# Biological Processing Units (BPUs)

> **Summary:** BPUs convert a complete organism connectome into a fixed recurrent neural network, using synaptic weights taken directly from the connectome without modification during training. Only input and output projections are trainable. The approach demonstrates that biological wiring encodes a computational prior (a "lottery ticket") that confers advantage over size-matched conventional architectures across image classification and chess move prediction tasks.

**Sources:** [[raw/vogelstein_bpu_2025.md]]

---

## Core Architecture

The BPU uses the complete [*Drosophila*](../entities/drosophila.md) larva [connectome](../concepts/connectome.md) as its recurrent core: 3,000 neurons connected by roughly 65,000 synaptic weights. Neurons are partitioned into three functional groups:

- **Sensory neurons (430):** receive input projections (the only trainable input layer)
- **Internal neurons (2,304):** form the fixed recurrent core with connectome-derived weights
- **Output neurons (218):** project to task-specific readout heads (the only trainable output layer)

The connectome weights remain frozen throughout training. All learning occurs in the linear input projection (mapping task features to sensory neurons) and the output projection (mapping output neurons to task labels).

## Connectome Expansion via DCSBM

To scale the architecture beyond the native connectome size, the authors fit a directed signed degree-corrected stochastic block model (DCSBM) to the original wiring diagram. This generative model preserves block-level connectivity statistics (community structure, degree distributions, sign ratios) while producing synthetic connectomes up to 5x larger. Expanded BPUs maintain the performance characteristics of the original.

## Results

| Task | Model | Params | Accuracy |
|------|-------|--------|----------|
| MNIST | BPU | ~3K fixed + projections | 98% |
| CIFAR-10 | BPU | ~3K fixed + projections | 58% (beats size-matched MLPs) |
| Chess (10K games) | GNN-BPU | 232,912 | 60% move accuracy (nearly 10x better than same-size transformer) |
| Chess | CNN-BPU + depth-6 minimax | ~2M | 91.7% (exceeds 9M-param transformer) |

## Key Insight

Biological wiring encodes a "lottery ticket" that carries computational advantage without modification. The frozen connectome acts as a structured prior: its community structure, degree heterogeneity, and sign patterns create an inductive bias that outperforms both random graphs and conventional architectures at equivalent scale.

## Authors

Siyu Yu, Zihan Qin, Tingshan Liu, Beiya Xu, R. Jacob Vogelstein, Jason Brown, Joshua T. Vogelstein (Johns Hopkins University). Presented at AGI 2025; arXiv:2507.10951.

## See Also

- [Deep Connectomics Networks](deep-connectomics-networks.md)
- [Connectome-Constrained Deep Mechanistic Networks](connectome-constrained-dmn.md)
- [Nematode Connectome Neural Networks](nematode-connectome-neural-networks.md)
- [Neural Circuit Policies](neural-circuit-policies.md)
- [C. elegans Olfactory Circuit ANN](celegans-olfactory-circuit-ann.md)
- [conn2res Toolbox](conn2res-toolbox.md)
- [Biologically Plausible Learning](../concepts/biologically-plausible-learning.md)
