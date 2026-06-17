# Biologically Plausible Learning

> **Summary:** Biologically plausible learning encompasses alternatives to backpropagation that respect known constraints of biological neural hardware: no weight transport, no global error signals, no sequential forward/backward locking. For connectome-inspired architectures, this is a critical open frontier. Current systems ([BPUs](../methods/biological-processing-units.md), [FlyGM](../methods/flygm-whole-brain-locomotion.md), [DMNs](../methods/connectome-constrained-dmn.md)) freeze connectome weights and use backpropagation for I/O projections. Biologically plausible rules could enable training the connectome itself in a biologically faithful way. Key approaches include the Forward-Forward algorithm, counter-current learning, dendritic localized learning, Hebbian/STDP self-organization, and NAS-based rule selection.

**Sources:** [[raw/kao_countercurrent_2024.md]], [[raw/chavlis_dendrites_2025.md]], general knowledge

---

## The Problem with Backpropagation

Backpropagation is the dominant training algorithm for artificial neural networks. It requires three properties that biological neural circuits lack:

### Weight Transport
The backward pass must use the exact transpose of the forward weights. Biological neurons have no known mechanism for maintaining symmetric forward and backward synaptic connections. This is sometimes called the "weight transport problem" (Grossberg, 1987; Lillicrap et al., 2016).

### Global Error Signals
Backpropagation computes error at the output layer and propagates it backward through the entire network. Biological neurons receive only local information: signals from their immediate synaptic partners, not global loss gradients.

### Backward Locking
The backward pass cannot begin until the forward pass is complete, and each layer must wait for gradients from the layer above. Biological neural circuits process information continuously, with no clear separation between forward and backward phases.

Despite these implausibilities, backpropagation works extraordinarily well in practice. The central question: can learning algorithms that respect biological constraints match backpropagation's performance?

## Forward-Forward Algorithm (Hinton, 2022)

Geoffrey Hinton's Forward-Forward (FF) algorithm replaces the forward-backward pass pair with two forward passes:

- **Positive pass:** real data propagates forward; each layer adjusts weights to increase a local "goodness" measure
- **Negative pass:** corrupted or generated data propagates forward; each layer adjusts weights to decrease goodness

No backward pass occurs. Learning is entirely local: each layer optimizes its own objective without waiting for gradients from above.

### Extensions

- **Self-Contrastive Forward-Forward** (Nature Communications, 2025): improves FF by using internally generated negative samples rather than externally corrupted data, removing the need for an explicit negative data pipeline
- **Hebbian Forward-Forward** (NeurIPS Workshop, 2025): eliminates gradients entirely, using pure Hebbian updates. This is the most biologically faithful variant: learning depends only on pre/post-synaptic activity correlations, with no gradient computation of any kind

## Counter-Current Learning (NeurIPS 2024)

[Counter-current learning](../methods/counter-current-learning.md) uses two networks running in anti-parallel, inspired by counter-current exchange in fish gills and renal systems:

- **Feedforward network:** processes inputs (input to output)
- **Feedback network:** processes targets (output to input)
- **Layer-wise exchange:** local learning signals arise from comparing the two streams at each layer

Eliminates both weight transport (separate feedback weights) and backward locking (both networks operate simultaneously). Competitive with other bio-plausible methods on MNIST through STL-10.

## Dendritic Approaches

Biological neurons are not point processors. Their dendrites form elaborate branching structures that perform local nonlinear computation before signals reach the soma.

### Dendritic Localized Learning (Lv et al., ICML 2025)

Models pyramidal neuron dynamics with anatomically distinct input pathways:

- **Basal dendrites:** receive feedforward sensory input
- **Apical dendrites:** receive top-down feedback (error/context signals)
- **Soma:** computes a local error signal from the mismatch between basal and apical inputs

This eliminates weight transport by delivering error signals through a physically separate pathway (apical dendrites), not by transporting weights backward.

### [Dendritic ANNs](../methods/dendritic-anns.md) (Chavlis & Poirazi, Nature Communications 2025)

Incorporates structured dendritic connectivity and restricted sampling into ANN architecture. More robust to overfitting; matches or outperforms standard ANNs with fewer parameters. Addresses architectural bias (how neurons compute) rather than learning rules (how weights change).

## Hebbian and STDP Learning in Connectome Networks

Hebbian learning ("neurons that fire together wire together") and spike-timing-dependent plasticity (STDP) are the best-characterized local learning rules in biological neural circuits.

### Self-Organization of Connectome-Like Topology

Cirunay et al. (Scientific Reports, 2025) demonstrate that Hebbian learning applied to initially random networks generates connectome-like topology through self-organization. Starting from unstructured connectivity, Hebbian updates produce:

- Small-world network properties
- Modular community structure
- Hub neurons with high centrality

This suggests a bidirectional relationship: connectome topology supports computation, and biologically plausible learning rules can generate connectome-like topology.

### Stable Module Formation via Hebbian + Anti-Hebbian STDP

Bergoin et al. (PLOS Computational Biology, 2025) show that combining Hebbian STDP (strengthening connections between co-active neurons) with anti-Hebbian STDP (weakening connections between counter-active neurons) enables stable functional module formation in recurrent networks. Without anti-Hebbian rules, Hebbian learning alone tends toward runaway excitation or uniform connectivity. The combination produces stable, modular structure resembling biological neural circuits.

## NAS with Bio-Inspired Learning Rules (Hamzaoui, ECAI 2025)

Rather than choosing a single bio-plausible learning rule for the entire network, Hamzaoui (ECAI 2025) uses neural architecture search to automatically select the learning rule per layer:

- **Candidate rules:** Hebbian, predictive coding, error-driven, and hybrid variants
- **Selection method:** NAS optimizes both architecture and per-layer learning rule assignment
- **Result:** 95% accuracy on CIFAR-10 with mixed bio-inspired rules

This approach acknowledges that different brain regions may use different learning mechanisms, and lets automated search discover which combinations work best.

## Relevance to Connectome-Inspired Architectures

Current connectome-as-architecture systems handle learning in one of three ways:

| Approach | Connectome Weights | Learning Method |
|----------|-------------------|-----------------|
| [BPUs](../methods/biological-processing-units.md) | Frozen (raw connectome) | Backprop on I/O projections only |
| [FlyGM](../methods/flygm-whole-brain-locomotion.md) | Frozen (FlyWire graph) | Backprop on GNN message passing |
| [DMNs](../methods/connectome-constrained-dmn.md) | Fixed topology, learned parameters | Backprop on biophysical params |
| [BrainTrace](../methods/braintrace-snn.md) | Fixed topology, learned parameters | Online SNN training (backprop-based) |
| [Reservoir computing](../methods/connectome-reservoir-computing.md) | Frozen | Linear readout training only |

None of these train the connectome weights themselves using biologically plausible rules. A fully bio-faithful approach would:

1. Use connectome topology as the network structure
2. Initialize weights from synaptic measurements
3. Train using local rules (Hebbian, STDP, dendritic, or combinations)
4. Preserve or refine the biological wiring through learning

Whether such a system could match the performance of backprop-trained connectome architectures is an open question. The Hebbian self-organization results (Cirunay et al.) suggest that bio-plausible rules and connectome topology are natural complements, but this has not yet been demonstrated at scale on competitive benchmarks.

## Open Questions

- Can biologically plausible learning rules combined with connectome topology match or exceed backprop-trained systems?
- Do different brain regions require different learning rules, as the NAS results suggest?
- Can Hebbian/STDP learning maintain or improve connectome structure during training, or does it degrade the biological prior?
- How do bio-plausible learning rules interact with neuromorphic hardware constraints? Both favor local computation and sparse connectivity.

## See Also

- [Counter-Current Learning](../methods/counter-current-learning.md)
- [Dendritic ANNs](../methods/dendritic-anns.md)
- [BrainTrace SNN Training](../methods/braintrace-snn.md)
- [Cannistraci-Hebb Training](../methods/cannistraci-hebb-training.md)
- [Biological Processing Units](../methods/biological-processing-units.md)
- [Connectome-Constrained Deep Mechanistic Networks](../methods/connectome-constrained-dmn.md)
- [FlyGM: Whole-Brain Connectome for Embodied Locomotion](../methods/flygm-whole-brain-locomotion.md)
- [Connectome-Inspired Architectures](connectome-inspired-architectures.md)
- [Connectome](connectome.md)
- [Neuromorphic Computing](neuromorphic-computing.md)
