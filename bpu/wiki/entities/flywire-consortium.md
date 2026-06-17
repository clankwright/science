# FlyWire Consortium

> **Summary:** The FlyWire Consortium is an international collaboration that produced the first complete connectome of an adult brain: the female adult *Drosophila melanogaster*. Published as a 9-paper package in *Nature* on October 2, 2024, the dataset comprises 139,255 proofread neurons and 54.5 million synapses, reconstructed from serial electron microscopy with AI-assisted segmentation and large-scale community proofreading. The FlyWire connectome serves as the structural foundation for multiple connectome-inspired AI efforts.

**Sources:** Dorkenwald, Matsliah, Sterling, Schlegel, Yu, McKellar et al., *Nature* 634:124-138, 2024; Schlegel et al., *Nature* 2024; Shiu, Cardona et al., *Nature* 2024; web research

---

## Overview

FlyWire is a collaborative platform built on top of the Full Adult Fly Brain (FAFB) electron microscopy dataset. The FAFB volume was acquired from approximately 7,000 serial EM slices of a single female adult *Drosophila* brain. Automated AI segmentation produced an initial reconstruction, which was then refined through distributed community proofreading: hundreds of contributors worldwide corrected segmentation errors, traced neurites, and validated synaptic connections.

The result is the largest and most complete brain connectome available: 139,255 neurons and 54.5 million chemical synapses, covering the entire central brain and optic lobes.

## The Nature Package (October 2024)

The FlyWire results were published as nine coordinated papers in *Nature*:

**Flagship paper:** "Neuronal wiring diagram of an adult brain" (Dorkenwald, Matsliah, Sterling, Schlegel, Yu, McKellar et al., *Nature* 634:124-138, 2024). This paper presents the complete connectome reconstruction, describes the proofreading methodology, and provides the full neuron-level wiring diagram.

**Cell type annotation:** Schlegel et al. annotated the entire brain into over 8,400 cell types, providing the systematic classification needed to interpret the wiring diagram at a functional level.

**Network statistics:** Shiu, Cardona et al. analyzed the global network properties of the connectome, revealing rich-club organization in which approximately 30% of neurons act as highly connected hubs that form a densely interconnected core.

## Data Availability

The FlyWire connectome data is freely available to the research community. This openness has enabled its adoption as the structural substrate for multiple downstream projects:

- [Biological Processing Units](../methods/biological-processing-units.md) (BPU): the larval connectome variant
- FlyGM (Fly Generative Model): generative modeling of fly brain activity
- Intel Loihi 2 deployment: the full 140K-neuron connectome running on 12 neuromorphic chips
- [Deep Mechanistic Networks](../methods/connectome-constrained-dmn.md) (DMN): connectome-constrained models of the visual system
- Reservoir computing and computational brain model studies

## Key People

Sven Dorkenwald, a key developer of the FlyWire platform and lead author of the flagship paper, joined the MIT McGovern Institute in January 2026.

## See Also
- [Drosophila melanogaster](drosophila.md)
- [Connectome](../concepts/connectome.md)
- [MICrONS](microns.md)
- [Connectome-Inspired Architectures](../concepts/connectome-inspired-architectures.md)
- [BrainTrace SNN Training](../methods/braintrace-snn.md)
- [Drosophila VNC Connectome](../methods/drosophila-vnc-connectome.md)
- [conn2res Toolbox](../methods/conn2res-toolbox.md)
