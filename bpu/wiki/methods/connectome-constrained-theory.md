# Connectome-Constrained Network Theory

> **Summary:** A mathematical framework for predicting neural activity in recurrent networks constrained by known connectomes. The theory bridges connectomics data and network-level computation, providing analytical tools for understanding how connectivity structure shapes dynamics. It offers theoretical grounding for the empirical results observed across BPU, DMN, FlyGM, and related connectome-constrained architectures.

**Sources:** [[raw/beiran_theory_2024.md]]

---

## Framework

The work develops mathematical theory for a specific class of recurrent neural networks: those whose connectivity is fixed to a measured connectome rather than learned or randomly initialized.

Core contributions:

- **Predictive theory:** given a connectome's connectivity matrix, the framework predicts properties of the resulting neural dynamics without requiring full simulation
- **Structure-dynamics link:** formalizes how specific connectivity motifs, degree distributions, and community structure in the connectome translate to computational properties of the network
- **Analytical tractability:** provides closed-form or perturbative results for network behavior, enabling understanding beyond what simulation alone can offer

## Relation to Empirical Work

The theory provides a principled explanation for several empirical observations:

- **BPU lottery ticket effect:** why connectome-derived weights outperform random graphs of identical statistics
- **DMN parameter convergence:** why biophysical parameters in connectome-constrained networks converge to experimentally validated values
- **FlyGM functional segregation:** why sensory/central/motor populations emerge during training on a frozen connectome

By establishing that connectivity structure constrains dynamics in predictable ways, the framework explains why fixing the wiring diagram to a biological connectome imposes a useful inductive bias.

## Significance

Most connectome-constrained network papers demonstrate empirical advantages without a theoretical account of why those advantages arise. This work fills that gap by providing the mathematical machinery to reason about the relationship between graph structure and computational function. It moves the field from "connectome architectures work better" to "here is why, and here is what properties of the connectome are responsible."

## Authors

Manuel Beiran, Ashok Litwin-Kumar. Nature Neuroscience 28:2561-2574, 2025; bioRxiv: 2024.02.22.581667.

## See Also

- [Biological Processing Units](biological-processing-units.md)
- [Connectome-Constrained Deep Mechanistic Networks](connectome-constrained-dmn.md)
- [FlyGM: Whole-Brain Connectome for Embodied Locomotion](flygm-whole-brain-locomotion.md)
- [Deep Connectomics Networks](deep-connectomics-networks.md)
