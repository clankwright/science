# BioNIC: Biologically Inspired Neural Network for Image Classification Using Connectomics Principles

**Authors:** Diya Prasanth, Matthew Tivnan
**Venue:** arXiv:2601.20876 (cs.NE)
**Date:** 2026-01-20
**URL:** https://arxiv.org/abs/2601.20876
**Access:** preprint

## Abstract (verbatim)

We present BioNIC, a multi-layer feedforward neural network for emotion
classification, inspired by detailed synaptic connectivity graphs from the
MICrONs dataset. At a structural level, we incorporate architectural constraints
derived from a single cortical column of the mouse Primary Visual Cortex (V1):
connectivity imposed via adjacency masks, laminar organization, and graded
inhibition representing inhibitory neurons. At the functional level, we implement
biologically inspired learning: Hebbian synaptic plasticity with homeostatic
regulation, Layer Normalization, data augmentation to model exposure to natural
variability in sensory input, and synaptic noise to model neural stochasticity.
We also include convolutional layers for spatial processing, mimicking
retinotopic mapping. The model performance is evaluated on the Facial Emotion
Recognition task FER-2013 and compared with a conventional baseline.
Additionally, we investigate the impacts of each biological feature through a
series of ablation experiments. While connectivity was limited to a single
cortical column and biologically relevant connections, BioNIC achieved
performance comparable to that of conventional models, with an accuracy of
59.77 +/- 0.27% on FER-2013. Our findings demonstrate that integrating
constraints derived from connectomics is a computationally plausible approach to
developing biologically inspired artificial intelligence systems. This work also
highlights the potential of new generation peta-scale connectomics data in
advancing both neuroscience modeling and artificial intelligence.

## Key results

- Feedforward network structurally constrained by a single cortical column of
  mouse V1 from the MICrONS connectome (adjacency masks, laminar organization,
  graded inhibition).
- Bio-plausible learning stack: Hebbian plasticity with homeostatic regulation,
  layer norm, synaptic noise, augmentation; convolutional layers for retinotopy.
- 59.77 +/- 0.27% accuracy on FER-2013, comparable to unconstrained baselines
  despite hard connectivity constraints.
- Ablation experiments isolate each biological feature's contribution.

## Relevance

2026 MICrONS-derived (cortical, not C. elegans/Drosophila) connectome-constrained
classifier combining wiring constraints with Hebbian learning. Newer cortical
basis than the existing connectome-NAS / connectome-ANN pages.
