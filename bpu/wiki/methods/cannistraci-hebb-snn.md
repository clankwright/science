# CH-SNN: Cannistraci-Hebb Training on Ultra-Sparse Spiking Neural Networks

> **Summary:** CH-SNN brings [Cannistraci-Hebb](cannistraci-hebb-training.md) topological link-prediction regrowth to spiking neural networks. It is a four-stage dynamic sparse-training framework (correlation-based sparse init, joint temporal+structural sparsity, hybrid link-removal scoring, CH3-L3 synaptic regrowth) that sparsifies all linear layers while targeting performance comparable to fully connected SNNs. Evaluated on six datasets including CIFAR-10/100 across spiking CNNs and Spikformer.

**Sources:** [[raw/hua_chsnn_2025.md]] (arXiv:2511.05581)

---

## Approach

SNNs already have temporal activation sparsity; CH-SNN adds ultra-sparse
*structural* connectivity without the performance loss prior sparse-SNN methods
suffer. Four stages:

1. **SSCTI** (sparse spike correlated topological initialization): initialize a
   sparse network from node correlations.
2. **SSWI** (sparse spike weight initialization): integrate temporal activation
   sparsity with structural connection sparsity.
3. **Hybrid link-removal score (LRS):** prune redundant weights and inactive
   neurons to improve information flow.
4. **CH3-L3 automaton:** the [Cannistraci-Hebb](cannistraci-hebb-training.md)
   network automaton performs link prediction for synaptic regrowth, the same
   epitopological rule used in the ANN/transformer setting.

## Key findings

- First dynamic sparse training framework to apply Cannistraci-Hebb regrowth to
  spiking networks.
- Sparsification spans all linear layers, targeting accuracy comparable to fully
  connected SNNs.
- Evaluated on six datasets (incl. CIFAR-10/100) across spiking convolutional
  networks and Spikformer.

## Significance

The [Cannistraci-Hebb Training](cannistraci-hebb-training.md) page covers the
brain-network sparse-training rule for dense transformers and MLPs (5% and 1%
connectivity matching dense performance). CH-SNN, co-authored by Carlo Vittorio
Cannistraci, transfers that epitopological link-prediction principle to
energy-efficient [neuromorphic](../concepts/neuromorphic-computing.md) spiking
nets, where structural sparsity is load-bearing for hardware efficiency. It sits
in the [biologically plausible learning](../concepts/biologically-plausible-learning.md)
cluster next to [NeuroPrune](neuroprune.md) (network-science pruning) and
[BrainTrace SNN Training](braintrace-snn.md) (scalable SNN training), and shares
the spiking-attention setting with [S²TDPT](spiking-stdp-transformer.md).

## See Also

- [Cannistraci-Hebb Training](cannistraci-hebb-training.md)
- [S²TDPT: Spiking STDP Transformer](spiking-stdp-transformer.md)
- [NeuroPrune](neuroprune.md)
- [BrainTrace SNN Training](braintrace-snn.md)
