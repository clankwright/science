# C. elegans (Caenorhabditis elegans)

> **Summary:** C. elegans is a ~1mm nematode roundworm with exactly 302 neurons, ~7,000 chemical synapses, and ~900 gap junctions. It was the first organism to have its complete connectome mapped (White et al., 1986) and has become the foundational biological model for brain-inspired AI architectures, including liquid neural networks, neural circuit policies, and deep connectomics networks.

**Sources:** [[raw/lechner_ncp_2018.md]], [[raw/hasani_liquid_2020.md]], [[raw/roberts_dcn_2019.md]], general knowledge

---

## Organism Overview

C. elegans is a free-living, transparent nematode about 1mm in length. Despite its simplicity, it exhibits a range of complex behaviors: chemotaxis, osmotic avoidance, mechanosensation, sleep, and adaptive locomotion. Its nervous system contains exactly 302 neurons with stereotyped connectivity across individuals, making it uniquely suited for whole-brain computational modeling.

The complete connectome was first mapped by White et al. in 1986 using serial-section electron microscopy. This reconstruction cataloged approximately 7,000 chemical synapses and 900 electrical gap junctions, providing the first full wiring diagram of any nervous system.

## Tap-Withdrawal Circuit

The tap-withdrawal (TW) circuit is one of the best-characterized neural circuits in C. elegans. It comprises 9 neuron classes: four sensory neurons (PVD, PLM, AVM, ALM), four interneurons (AVD, PVC, AVA, AVB), and two motor neuron groups (forward and backward locomotion). When the worm receives a mechanical tap stimulus, the circuit produces either forward or backward escape movement based on competition between command interneurons AVA and AVB.

This circuit was repurposed by Lechner, Hasani, and Grosu (2018) as the basis for [Neural Circuit Policies](../methods/neural-circuit-policies.md): the biological wiring topology was preserved while synaptic parameters were optimized via reinforcement learning. The resulting 19-neuron controller could solve standard RL tasks (inverted pendulum, mountain car, cart-pole) and was successfully deployed on a real rover robot.

## Significance for AI

C. elegans demonstrates a core principle underlying the [BPU](../methods/biological-processing-units.md) research program: complex, generalizable behavior can emerge from extremely compact neural circuits. Key contributions to AI include:

- **Neural Circuit Policies (NCPs):** The TW circuit's topology, used as a fixed architecture for RL control agents, performs comparably to deep neural networks with orders of magnitude fewer parameters
- **Liquid Time-Constant Networks:** The non-spiking, graded-potential dynamics of C. elegans neurons directly inspired [LTC network](../methods/liquid-neural-networks.md) formulations, where hidden state dynamics follow biophysical membrane equations
- **Deep Connectomics Networks:** Roberts et al. (2019) used the C. elegans connectome's small-world topology to construct [DCNs](../methods/deep-connectomics-networks.md) for image classification, achieving competitive accuracy on standard benchmarks

## OpenWorm Project

OpenWorm is an open-source international effort to build a complete computational simulation of C. elegans, including its nervous system, musculature, and body mechanics. The project represents the most ambitious attempt to simulate an entire organism at cellular resolution and serves as a testbed for validating connectome-derived computational models.

## See Also

- [Neural Circuit Policies](../methods/neural-circuit-policies.md)
- [Liquid Time-Constant Networks](../methods/liquid-neural-networks.md)
- [Deep Connectomics Networks](../methods/deep-connectomics-networks.md)
- [Biological Processing Units](../methods/biological-processing-units.md)
- [C. elegans Olfactory Circuit ANN](../methods/celegans-olfactory-circuit-ann.md)
- [Nematode Connectome Neural Networks](../methods/nematode-connectome-neural-networks.md)
- [Elegans-AI](../methods/elegans-ai.md)
- [Ramin Hasani](ramin-hasani.md)
- [Drosophila](drosophila.md)
