# Dendritic ANNs

> **Summary:** Chavlis and Poirazi (Nature Communications, 2025) incorporate the structured connectivity and restricted sampling properties of biological dendrites into ANN architecture, moving beyond the standard point-neuron abstraction. Dendritic ANNs model the nonlinear integration within dendritic branches, yielding networks that are more robust to overfitting than traditional ANNs while matching or outperforming them on image classification with significantly fewer trainable parameters. Related work on Dendritic Localized Learning (Lv et al., ICML 2025) models pyramidal neuron dynamics for biologically plausible credit assignment.

**Sources:** [[raw/chavlis_dendrites_2025.md]]

---

## Beyond Point Neurons

Standard artificial neurons compute a weighted sum of inputs followed by a nonlinearity. This "point neuron" model collapses the entire dendritic tree into a single summation point. Biological neurons are far more complex: their dendrites form elaborate branching structures where inputs arriving at different branches undergo nonlinear local processing before being integrated at the soma.

Dendritic ANNs preserve this hierarchical structure:

- **Dendritic branches** receive subsets of inputs and apply local nonlinear transformations
- **Branch outputs** are combined at the soma through a second integration step
- **Restricted sampling:** each branch receives only a subset of available inputs, mirroring the spatial constraints of biological dendrites

This two-stage computation (local dendritic integration followed by somatic integration) gives each neuron substantially more computational power than a point neuron, allowing the network to achieve equivalent performance with fewer units.

## Results

- **Image classification:** matches or outperforms standard ANNs on benchmark tasks
- **Parameter efficiency:** achieves comparable accuracy with significantly fewer trainable parameters
- **Overfitting robustness:** more resistant to overfitting than traditional ANNs, likely because the restricted sampling and local nonlinearities act as implicit regularizers

## Dendritic Localized Learning (Lv et al., ICML 2025)

A complementary approach that uses pyramidal neuron dynamics for [biologically plausible](../concepts/biologically-plausible-learning.md) credit assignment:

- **Basal dendrites** receive feedforward input (bottom-up sensory signals)
- **Apical dendrites** receive feedback signals (top-down error or contextual information)
- **Soma** computes a local error signal from the mismatch between basal and apical inputs

This architecture eliminates the need for backpropagation's weight transport: error signals are delivered via the apical dendrites (a separate anatomical pathway), not by transporting weights backward through the network.

## Significance

Dendritic computation represents a largely untapped source of architectural priors for artificial networks. While most connectome-inspired work focuses on inter-neuron wiring (the [connectome](../concepts/connectome.md) as a graph), dendritic models incorporate intra-neuron structure. The two approaches are complementary: a network could use connectome topology for inter-neuron connectivity and dendritic models for intra-neuron computation.

The Poirazi Lab (FORTH, Greece) is a leading group in computational dendritic neuroscience, with decades of work establishing that dendrites perform sophisticated local computations including coincidence detection, sequence recognition, and nonlinear feature binding.

## Authors

- Chavlis & Poirazi. Nature Communications 16, 2025; DOI: 10.1038/s41467-025-56297-9.
- Lv et al. ICML 2025 (Dendritic Localized Learning).

## See Also

- [Biologically Plausible Learning](../concepts/biologically-plausible-learning.md)
- [Neural Circuit Policies](neural-circuit-policies.md)
- [Connectome-Inspired Architectures](../concepts/connectome-inspired-architectures.md)
- [Biological Processing Units](biological-processing-units.md)
- [Counter-Current Learning](counter-current-learning.md)
