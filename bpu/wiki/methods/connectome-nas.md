# Connectome-Inspired Neural Architecture Search

> **Summary:** Johnson et al. (JHU/APL, 2023) combine connectomics data with neural architecture search (NAS) to automatically discover useful biological circuit motifs and apply them to artificial network design. The approach identifies repeated subcircuit motifs from the fly [connectome](../concepts/connectome.md) mushroom body, extracts generative replay patterns, and applies mammalian cortex organization principles to transformer improvements. The cortex-inspired transformer modifications reduce attention parameters by 10x while improving robustness on CIFAR-10-C, bridging the gap between hand-designed connectome architectures and automated motif discovery.

**Sources:** [[raw/johnson_connectome_nas_2023.md]]

---

## Approach

The work spans three interconnected efforts:

### 1. Fly Connectome Motif Discovery

- Analyzes the [*Drosophila*](../entities/drosophila.md) mushroom body circuitry, a brain region critical for associative learning and memory
- Discovers repeated subcircuit motifs via automated graph analysis
- Identifies generative replay patterns: circuit structures that could support experience replay, a strategy used in both biological memory consolidation and reinforcement learning

### 2. Mammalian Cortex Organization for Transformers

- Applies structural principles from mammalian cortex (laminar organization, local vs. long-range connectivity ratios, hierarchical processing) to transformer architecture
- Restructures attention mechanisms to reflect cortical connectivity patterns
- Achieves 10x reduction in attention parameters while improving robustness

### 3. Automated Search over Biological Motifs

- Uses NAS methodology to search over a space defined by biological circuit primitives rather than standard architecture search spaces (convolution sizes, skip connections, etc.)
- The search space is biologically constrained: candidate architectures must be realizable as variants of observed connectome motifs

## Results

| Modification | Effect |
|-------------|--------|
| Cortex-inspired attention | 10x fewer attention parameters |
| CIFAR-10-C robustness | Improved over standard transformer |

The robustness improvement on CIFAR-10-C (corrupted CIFAR-10) is notable because it suggests that cortical connectivity patterns encode noise-tolerance properties, consistent with the overfitting resilience observed in [connectome reservoir computing](connectome-reservoir-computing.md).

## Position in the Field

This work bridges two otherwise separate research programs:

- **Hand-designed connectome architectures** ([BPUs](biological-processing-units.md), [NCPs](neural-circuit-policies.md), [DCNs](deep-connectomics-networks.md)): researchers manually embed a specific connectome as network topology
- **Neural architecture search:** automated methods search over human-defined architecture spaces

Connectome-inspired NAS replaces the human-defined search space with a biologically defined one. Instead of searching over "3x3 conv vs 5x5 conv vs skip connection," the search explores "mushroom body motif A vs motif B vs cortical column variant C."

This also complements the [C. elegans olfactory circuit ANN](celegans-olfactory-circuit-ann.md) approach, which manually identifies functional subcircuits. Connectome-inspired NAS automates the motif discovery process.

## Authors

Johnson et al. Johns Hopkins University / Applied Physics Laboratory. arXiv:2305.17300, 2023.

## See Also

- [Biological Processing Units](biological-processing-units.md)
- [Deep Connectomics Networks](deep-connectomics-networks.md)
- [C. elegans Olfactory Circuit ANN](celegans-olfactory-circuit-ann.md)
- [Brain-Inspired Transformer Efficiency](../concepts/brain-inspired-transformer-efficiency.md)
- [Connectome-Inspired Architectures](../concepts/connectome-inspired-architectures.md)
- [Cannistraci-Hebb Training](cannistraci-hebb-training.md)
- [CP-ViT](cp-vit-core-periphery.md)
