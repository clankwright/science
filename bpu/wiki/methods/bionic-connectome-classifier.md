# BioNIC: Connectome-Constrained Cortical-Column Classifier

> **Summary:** BioNIC is a feedforward classifier structurally constrained by a single cortical column of mouse V1 from the [MICrONS](../entities/microns.md) connectome, combined with biologically inspired learning (Hebbian plasticity with homeostatic regulation, synaptic noise, layer norm). Despite hard connectivity constraints it reaches 59.77 +/- 0.27% on FER-2013 facial-emotion recognition, comparable to unconstrained baselines. A 2026 cortical-connectome basis for the connectome-as-architecture thesis.

**Sources:** [[raw/prasanth_bionic_2026.md]] (arXiv:2601.20876)

---

## Approach

BioNIC imposes both structural and functional biological constraints:

- **Structural (from [MICrONS](../entities/microns.md)):** connectivity from a
  single mouse V1 cortical column, applied as adjacency masks, laminar
  (layered) organization, and graded inhibition representing inhibitory neurons.
- **Functional learning:** Hebbian synaptic plasticity with homeostatic
  regulation, layer normalization, data augmentation (natural input
  variability), and synaptic noise (neural stochasticity).
- **Spatial front end:** convolutional layers mimic retinotopic mapping.
- **Task:** FER-2013 facial-emotion recognition, with ablations isolating each
  biological feature.

## Key findings

- 59.77 +/- 0.27% accuracy on FER-2013, comparable to conventional unconstrained
  models despite the hard cortical-column connectivity constraint.
- Ablation experiments quantify the contribution of each biological feature
  (connectivity masks, inhibition, Hebbian learning, noise).
- Demonstrates connectome-derived constraints are computationally plausible for
  building bio-inspired classifiers, and points to peta-scale connectomics as a
  resource for both neuroscience and AI.

## Significance

Earlier connectome-constrained classifiers drew on invertebrate wiring
([Deep Connectomics Networks](deep-connectomics-networks.md) used C. elegans and
mouse visual cortex; [connectome-inspired NAS](connectome-nas.md) used fly
mushroom body and cortical motifs; [Schmidgall's connectomes-as-ANN](deep-connectomics-networks.md)
line). BioNIC is a 2026 entry built on the mammalian
[MICrONS](../entities/microns.md) cortical column and uniquely pairs the wiring
constraint with [Hebbian biologically plausible learning](../concepts/biologically-plausible-learning.md)
rather than plain backprop. It is a concrete instance of the
[connectome-inspired-architectures](../concepts/connectome-inspired-architectures.md)
claim using the newest mammalian-scale connectome data.

## See Also

- [Deep Connectomics Networks](deep-connectomics-networks.md)
- [Connectome-Inspired NAS](connectome-nas.md)
- [MICrONS](../entities/microns.md)
- [Biological Processing Units](biological-processing-units.md)
- [Biologically Plausible Learning](../concepts/biologically-plausible-learning.md)
