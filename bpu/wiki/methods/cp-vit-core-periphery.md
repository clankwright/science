# CP-ViT: Core-Periphery Vision Transformer

> **Summary:** CP-ViT redesigns Vision Transformer self-attention using core-periphery organization from human brain networks. Attention is defined by a sparse CP graph where "core" tokens act as information hubs for peripheral tokens, replacing dense O(n^2) attention with biologically motivated sparse connectivity. The framework outperforms standard ViTs on multiple benchmarks while producing interpretable attention patterns: core nodes correspond to task-relevant image patches.

**Sources:** [[raw/yu_cpvit_2023.md]]

---

## Core-Periphery Organization

Core-periphery structure is a well-established property of brain networks. A densely interconnected core of hub nodes integrates information from a sparsely connected periphery. In human brain connectomes, this organization enables efficient information routing with far fewer connections than full connectivity would require.

CP-ViT applies this principle directly to transformer self-attention: instead of computing attention between all token pairs (O(n^2)), attention is restricted to a sparse CP graph. Core tokens communicate with all other tokens; peripheral tokens communicate primarily through the core.

## Architecture

The CP-ViT framework modifies standard ViT in two key ways:

- **CP graph attention:** the attention operation between image patches is governed by a sparse graph with core-periphery structure, replacing the dense attention matrix
- **Patch redistribution:** core nodes screen out task-irrelevant patches, concentrating attention on patches most relevant to the downstream task

The framework identifies "sweet spots" in CP graph density that yield significantly improved performance over both dense attention and random sparse attention.

## Results

Evaluated on medical imaging (INbreast) and natural image datasets (CIFAR-10, CIFAR-100, TinyImageNet). CP-ViT outperforms standard ViTs and other state-of-the-art architectures across these benchmarks.

The interpretability benefit is notable: core nodes in the trained CP-ViT consistently correspond to meaningful, task-relevant image regions, providing a built-in attention explanation mechanism that dense ViTs lack.

## Significance

CP-ViT demonstrates that brain network topology principles transfer directly to transformer efficiency improvements. Rather than discovering sparse attention patterns through training or post-hoc pruning, CP-ViT proactively instills biological organizational principles into the architecture. This is the attention-topology counterpart to [Cannistraci-Hebb Training](cannistraci-hebb-training.md), which applies brain-network sparsity to MLP and full transformer connectivity.

## Authors

Xiaowei Yu, Lu Zhang, Haixing Dai, Yanjun Lyu, Lin Zhao, Zihao Wu, David Liu, Tianming Liu, Dajiang Zhu. University of Texas at Arlington / University of Georgia. arXiv:2303.15569, 2023.

## See Also

- [Brain-Inspired Transformer Efficiency](../concepts/brain-inspired-transformer-efficiency.md)
- [Cannistraci-Hebb Training](cannistraci-hebb-training.md)
- [NeuroPrune](neuroprune.md)
- [Connectome-Inspired Architectures](../concepts/connectome-inspired-architectures.md)
- [Elegans-AI](elegans-ai.md)
