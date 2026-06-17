# Cannistraci-Hebb Training (Brain Network Sparse Transformers)

> **Summary:** Cannistraci-Hebb Training (CHT) is a brain-inspired dynamic sparse training method that achieves fully-connected-level performance in Transformers using only 5% of connections, and matches dense MLP performance at just 1% connectivity. The method combines a bipartite receptive field (BRF) initialization that generates brain-network-like connectivity patterns (small-world, scale-free) with a gradient-free, topology-driven link regrowth mechanism. Tested on machine translation (IWSLT14, WMT16) and LLaMA language modeling, CHT demonstrates that brain-like sparse initialization topologies succeed where random sparsity fails.

**Sources:** [[raw/zhang_cannistraci_2025.md]]

---

## Core Insight

The initialization topology matters enormously for sparse neural network training. Random sparsity at 1% connectivity degrades performance severely. Brain-network-inspired sparsity patterns at the same density match or exceed fully connected networks. This finding directly parallels connectome-inspired architecture results: biological wiring patterns encode structural priors that carry computational value independent of the specific task.

## Bipartite Receptive Field (BRF) Initialization

BRF is the first brain-inspired network model designed specifically to initialize sparse artificial neural network connectivity. It generates connectivity patterns exhibiting properties found in biological neural networks:

- **Small-world topology:** high local clustering with short global path lengths
- **Scale-free degree distributions:** a few hub nodes with many connections, most nodes with few

These structural properties are hallmarks of brain networks across species, from [*C. elegans*](../entities/c-elegans.md) to human cortex.

## Cannistraci-Hebb Training

CHT uses a gradient-free regrowth mechanism inspired by epitopological learning: the idea that learning can be implemented by changing the shape of a network's connectivity structure. Key innovations in this paper:

- **CHT soft rule (CHTs):** flexible sampling strategy for link removal and regrowth, balancing exploration and exploitation of network topology; avoids the "epitopological local minima" problem where removed and regrown links overlap
- **GPU-friendly approximation:** reduces computational complexity from O(N * d^3) to O(N^3), enabling application to large-scale models
- **Sigmoid-based gradual density decay (CHTss):** advanced framework combining soft rule with progressive sparsification

## Results

| Architecture | Sparsity | Performance vs. Dense |
|-------------|----------|----------------------|
| MLP (visual classification) | 99% sparse (1% connections) | Outperforms fully connected |
| Transformer (IWSLT14, WMT16) | 95% sparse (5% connections) | Outperforms fully connected |
| LLaMA (language modeling) | 70% sparse (30% connections) | On par or superior to dense |

At extreme sparsity, CHTs compresses some MLP networks to less than 30% of their original nodes while maintaining performance.

## Biological Motivation

The method is rooted in brain network science: biological neural networks are inherently sparse, and this sparsity is not random but structured. CHT emulates synaptic turnover, the continuous process of synapse formation, strengthening, weakening, and elimination that enables brain networks to learn efficiently while maintaining stability.

## Significance

CHT is potentially the most impactful paper for practical transformer efficiency from the brain-inspired architecture research area. While [CP-ViT](cp-vit-core-periphery.md) restructures attention topology and [NeuroPrune](neuroprune.md) applies neuroscience-principled pruning, CHT addresses the full connectivity of both MLP layers and attention, achieving dense-level performance at sparsities that would cripple conventional sparse training methods.

## Authors

Yingtao Zhang, Diego Cerretti, Jialin Zhao, Wenjing Wu, Ziheng Liao, Umberto Michieli, Carlo Vittorio Cannistraci. Tsinghua University / University of Padova / Canva Research. Accepted at NeurIPS 2025; arXiv:2501.19107.

## See Also

- [CH-SNN: Cannistraci-Hebb on Spiking Neural Networks](cannistraci-hebb-snn.md)
- [Brain-Inspired Transformer Efficiency](../concepts/brain-inspired-transformer-efficiency.md)
- [CP-ViT](cp-vit-core-periphery.md)
- [NeuroPrune](neuroprune.md)
- [Connectome-Inspired Architectures](../concepts/connectome-inspired-architectures.md)
- [Biologically Plausible Learning](../concepts/biologically-plausible-learning.md)
- [Elegans-AI](elegans-ai.md)
- [Deep Connectomics Networks](deep-connectomics-networks.md)
