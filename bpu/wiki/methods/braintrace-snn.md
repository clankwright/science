# BrainTrace: Model-Agnostic Online SNN Training

> **Summary:** BrainTrace (also called BrainScale) is a model-agnostic online training framework for spiking neural networks with linear memory complexity. It scales SNN training to the whole-brain [*Drosophila*](../entities/drosophila.md) connectome constrained by the [FlyWire](../entities/flywire-consortium.md) wiring diagram, reproducing resting-state calcium imaging data and inter-regional functional connectivity. Linear memory complexity is the key enabling property: it makes training connectome-scale spiking networks tractable where previous methods required memory that scaled quadratically or worse with network size.

**Sources:** (Wang, Dong, Ji et al.; Nature Communications, Jan 2026; DOI: 10.1038/s41467-026-68453-w)

---

## The Memory Problem

Training spiking neural networks with backpropagation through time (BPTT) requires storing intermediate states for every neuron at every timestep. For connectome-scale networks (~140K neurons) running over biologically relevant timescales, this memory requirement becomes intractable. BrainTrace solves this by achieving linear memory complexity in network size, making whole-brain SNN training feasible on available hardware.

## Method

- **Model-agnostic:** works with arbitrary SNN architectures; not tied to a specific neuron model
- **Online training:** processes temporal data in a streaming fashion rather than requiring full-sequence storage
- **Linear memory:** memory scales as O(N) with neuron count, not O(N * T) as in standard BPTT

The framework is applied to an SNN constrained by the FlyWire [connectome](../concepts/connectome.md), with network topology fixed to the biological wiring diagram.

## Results

The FlyWire-constrained SNN trained with BrainTrace:

- **Reproduces resting-state calcium imaging data:** model-generated activity patterns match experimentally recorded calcium dynamics
- **Captures inter-regional functional connectivity:** the trained network's functional connectivity between brain regions aligns with empirical measurements

These results demonstrate that the combination of connectome constraints and learned biophysical parameters can recapitulate brain-wide dynamics, extending the [DMN](connectome-constrained-dmn.md) approach from a single circuit (the visual system) to the whole brain.

## Significance

BrainTrace is an enabling technology for the connectome-as-architecture research program. Prior work on connectome-constrained models either:

- Froze weights and trained only readouts ([BPUs](biological-processing-units.md), [reservoir computing](connectome-reservoir-computing.md))
- Optimized a small number of cell-type-level parameters ([DMNs](connectome-constrained-dmn.md), 734 params for 45K neurons)
- Used non-spiking dynamics ([FlyGM](flygm-whole-brain-locomotion.md), message-passing GNN)

BrainTrace enables training the full spiking network within the connectome topology, bridging the gap between inference-only connectome models and learning-capable systems. This is directly relevant to the question of whether [biologically plausible learning](../concepts/biologically-plausible-learning.md) can be combined with connectome structure for more faithful brain models.

## Authors

Wang, Dong, Ji et al. Nature Communications, January 2026.

## See Also

- [Connectome-Constrained Deep Mechanistic Networks](connectome-constrained-dmn.md)
- [Biological Processing Units](biological-processing-units.md)
- [FlyGM: Whole-Brain Connectome for Embodied Locomotion](flygm-whole-brain-locomotion.md)
- [Drosophila Computational Brain Model](drosophila-computational-brain.md)
- [Connectome Reservoir Computing](connectome-reservoir-computing.md)
- [Neuromorphic Computing](../concepts/neuromorphic-computing.md)
- [Biologically Plausible Learning](../concepts/biologically-plausible-learning.md)
