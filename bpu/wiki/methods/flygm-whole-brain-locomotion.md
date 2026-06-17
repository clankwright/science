# FlyGM: Whole-Brain Connectome for Embodied Locomotion

> **Summary:** FlyGM converts the complete adult [*Drosophila*](../entities/drosophila.md) connectome into a directed message-passing graph neural network for embodied locomotion control. Using the full [FlyWire](../entities/flywire-consortium.md) connectome (~140K neurons) with synaptic weights refined by neurotransmitter polarity, the model controls a biomechanical fly body in MuJoCo. It outperforms degree-preserving rewired graphs, random graphs, and MLPs in sample efficiency, and functional segregation across sensory, central, and motor populations emerges naturally from training.

**Sources:** [[raw/flygm_jin_2026.md]]

---

## Architecture

FlyGM treats the whole-brain connectome as a directed graph and applies message-passing GNN operations over it:

- **Node partitioning:** neurons are divided into afferent (sensory input), intrinsic (internal processing), and efferent (motor output) sets
- **Edge weights:** synaptic connection counts refined with neurotransmitter polarity signs (excitatory: ACh, Glu, Asp, His; inhibitory: GABA, Gly)
- **Message passing:** directed propagation through the biological graph structure, preserving the asymmetric connectivity of the connectome

The model uses the complete FlyWire adult connectome, approximately 140,000 neurons.

## Embodied Integration

FlyGM is integrated with the flybody biomechanical model in MuJoCo, enabling:

- Walking
- Turning
- Gait initiation
- Flight

The connectome-derived GNN serves as the neural controller for a physically simulated fly body, closing the loop between neural architecture and motor behavior.

## Results

FlyGM outperforms several baselines in sample efficiency:

- **Degree-preserving rewired graphs:** same degree distribution, randomized wiring
- **Random graphs:** no biological structure
- **MLPs:** standard feedforward networks of comparable size

Functional segregation across sensory, central, and motor populations emerges naturally during training without explicit architectural constraints. This mirrors the functional organization observed in biological brains.

## Key Finding

Static brain connectomes can instantiate effective neural policies for embodied learning. The wiring diagram alone, without any developmental or activity-dependent refinement during the model's lifetime, provides sufficient structure for sample-efficient acquisition of complex motor behaviors.

## Code

[https://lnsgroup.cc/research/FlyGM](https://lnsgroup.cc/research/FlyGM)

## Authors

Xiao Jin, Shengye Zhu, Hao Zhang, Peisong Sui (Tsinghua University). arXiv:2602.17997; accepted NeurIPS 2025.

## See Also

- [Biological Processing Units](biological-processing-units.md)
- [Drosophila Computational Brain Model](drosophila-computational-brain.md)
- [Drosophila Connectome on Loihi 2](drosophila-loihi2-neuromorphic.md)
- [Connectome-Constrained Deep Mechanistic Networks](connectome-constrained-dmn.md)
- [BrainTrace SNN Training](braintrace-snn.md)
- [Drosophila VNC Connectome](drosophila-vnc-connectome.md)
- [Biologically Plausible Learning](../concepts/biologically-plausible-learning.md)
