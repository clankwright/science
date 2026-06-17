# Cannistraci-Hebb Training on Ultra-Sparse Spiking Neural Networks (CH-SNN)

**Authors:** Yuan Hua, Jilin Zhang, Yingtao Zhang, Wenqi Gu, Leyi You, Baobo Xiong, Carlo Vittorio Cannistraci, Hong Chen
**Venue:** arXiv:2511.05581 (cs.NE)
**Date:** 2025-11-05
**URL:** https://arxiv.org/abs/2511.05581
**Access:** preprint

## Abstract (verbatim)

Inspired by the brain's spike-based computation, spiking neural networks (SNNs)
inherently possess temporal activation sparsity. However, when it comes to the
sparse training of SNNs in the structural connection domain, existing methods
fail to achieve ultra-sparse network structures without significant performance
loss, thereby hindering progress in energy-efficient neuromorphic computing. This
limitation presents a critical challenge: how to achieve high levels of
structural connection sparsity while maintaining performance comparable to fully
connected networks. To address this challenge, we propose the Cannistraci-Hebb
Spiking Neural Network (CH-SNN), a novel and generalizable dynamic sparse
training framework for SNNs consisting of four stages. First, we propose a sparse
spike correlated topological initialization (SSCTI) method to initialize a sparse
network based on node correlations. Second, temporal activation sparsity and
structural connection sparsity are integrated via a proposed sparse spike weight
initialization (SSWI) method. Third, a hybrid link removal score (LRS) is applied
to prune redundant weights and inactive neurons, improving information flow.
Finally, the CH3-L3 network automaton framework inspired by Cannistraci-Hebb
learning theory is incorporated to perform link prediction for potential synaptic
regrowth. These mechanisms enable CH-SNN to achieve sparsification across all
linear layers. We have conducted extensive experiments on six datasets including
CIFAR-10 and CIFAR-100, evaluating various network architectures such as spiking
convolutional neural networks and Spikformer.

## Key results

- First dynamic sparse training framework bringing Cannistraci-Hebb topological
  link-prediction regrowth (CH3-L3 automaton) to SNNs.
- Four stages: SSCTI sparse init, SSWI joint temporal+structural sparsity,
  hybrid link-removal scoring, CH-based synaptic regrowth.
- Sparsifies all linear layers while targeting performance comparable to fully
  connected SNNs.
- Evaluated on six datasets (incl. CIFAR-10/100) across spiking CNNs and
  Spikformer.

## Relevance

Extends the Cannistraci-Hebb sparse-training line from ANNs/transformers to
spiking/neuromorphic networks. Carlo Vittorio Cannistraci is a co-author,
linking directly to the existing Cannistraci-Hebb Training page.
