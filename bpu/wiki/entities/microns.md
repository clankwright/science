# MICrONS (Machine Intelligence from Cortical Networks)

> **Summary:** MICrONS is an IARPA-funded project that mapped a cubic millimeter of mouse visual cortex at synaptic resolution, producing the largest multi-modal connectomics dataset: approximately 200,000 cells and 500 million synapses with co-registered calcium imaging of 75,000 neurons. Published as a 10-paper package in *Nature* in April 2025, the dataset reveals a "like-to-like" wiring rule where neurons with similar visual response properties preferentially connect. MICrONS provides the first mammalian-scale connectome data, bridging connectome-inspired architectures from insects toward cortical circuits.

**Sources:** Ding, Fahey et al., *Nature* 640:459-469, 2025; Willeke et al., *Nature* 2025; web research

---

## Overview

MICrONS (Machine Intelligence from Cortical Networks) was funded by the Intelligence Advanced Research Projects Activity (IARPA) with the goal of extracting computational principles from mammalian cortex. The project combines two data modalities that had never been jointly acquired at this scale:

1. **Structural connectomics:** Serial electron microscopy reconstruction of approximately 200,000 cells and 500 million synapses in a cubic millimeter of mouse visual cortex.
2. **Functional imaging:** Two-photon calcium imaging of 75,000 neurons within the same volume, recording their responses to visual stimuli before the tissue was fixed for EM.

The co-registration of structure and function makes MICrONS unique: for the first time, researchers can ask not just "what connects to what" but "how does connectivity relate to computational role."

## The Nature Package (April 2025)

The MICrONS results were published as 10 coordinated papers in *Nature*.

### Like-to-Like Wiring Rule

The central finding comes from Ding, Fahey et al. (*Nature* 640:459-469, 2025): "Functional connectomics reveals general wiring rule in mouse visual cortex." Neurons with similar response properties (orientation selectivity, spatial frequency tuning, stimulus preferences) preferentially form synaptic connections with each other. This "like-to-like" wiring rule holds across multiple cell types and cortical layers.

Critically, this same pattern independently emerges in artificial neural networks trained on visual tasks, without any explicit wiring constraint. The convergence suggests that like-to-like connectivity is a computational principle, not merely a biological accident.

### Foundation Model of Neural Activity

Willeke et al. (*Nature* 2025) introduced a foundation model trained on the MICrONS functional data: "Foundation model of neural activity predicts response to new stimulus types and anatomy." The model generalizes across stimulus types and anatomical locations, demonstrating that large-scale functional connectomics data can support predictive models of neural computation.

## Significance for Connectome-Inspired AI

MICrONS is significant for the BPU/connectome-inspired architecture field for several reasons:

**Mammalian scale.** Previous complete connectomes ([*C. elegans*](c-elegans.md), [*Drosophila*](drosophila.md)) are invertebrate. MICrONS provides the first dense connectomic data from mammalian cortex, the substrate for higher cognition in humans and other mammals. This opens a path toward scaling connectome-inspired architectures beyond insect brains.

**Structure-function bridge.** Connectome-inspired architectures have relied on structural data alone. MICrONS provides ground-truth functional annotations, enabling architectures that incorporate both wiring topology and functional organization.

**Validation of computational principles.** The like-to-like wiring rule, discovered in biological cortex, independently emerges in trained ANNs. This convergence validates the hypothesis that biological wiring patterns encode computationally useful principles.

## See Also
- [FlyWire Consortium](flywire-consortium.md)
- [Connectome](../concepts/connectome.md)
- [Connectome-Inspired Architectures](../concepts/connectome-inspired-architectures.md)
- [BioNIC: Cortical-Column Classifier](../methods/bionic-connectome-classifier.md)
- [Mouse V1 Digital Twins](../methods/mouse-v1-digital-twin.md)
- [Drosophila melanogaster](drosophila.md)
- [C. elegans](c-elegans.md)
