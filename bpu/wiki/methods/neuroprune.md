# NeuroPrune

> **Summary:** NeuroPrune is a neuro-inspired topological sparse training method for large language models. It applies two neuroscience principles to transformer pruning: preferential attachment (rich-get-richer, where hub neurons accumulate more connections) determines which weights to keep, while redundant synapse pruning removes connections that duplicate information flow. The method achieves up to 10x training speedup at a given sparsity level and is competitive on GLUE, summarization, and translation benchmarks.

**Sources:** [[raw/dhurandhar_neuroprune_2024.md]]

---

## Biological Principles

NeuroPrune draws on two mechanisms observed in biological neuronal network development:

**Preferential attachment:** In brain networks, neurons with more connections tend to build even more connections over time, while weakly connected neurons are pruned. This rich-get-richer dynamic produces sparse, heavy-tailed connectivity distributions. NeuroPrune implements this via weighted L1 sparsity in MLP layers (weight inversely proportional to connectivity/degree) and group sparsity within attention heads, so that influential neurons are maintained while low-influence neurons are removed.

**Redundant synapse elimination:** Biological neural development involves an initial overabundance of synapses (analogous to pretraining), followed by judicious removal until network stability is achieved (analogous to task-specific finetuning with sparsity). NeuroPrune identifies and removes connections that duplicate information flow through the network.

## Method

NeuroPrune is model-agnostic and task-agnostic. It operates as a dynamic sparse training method that:

- Sparsifies both MLP layers and attention heads simultaneously
- Uses preferential attachment topology to determine sparsity patterns: entire rows/columns of attention and MLP matrices are zeroed out
- Produces connectivity distributions with high standard deviation between neuron degrees, matching the heavy-tailed distributions seen in biological neural networks

The resulting sparsity patterns are qualitatively distinct from magnitude-based or random pruning: they exhibit structured, hub-dominated topology rather than uniform thinning.

## Results

| Task Domain | Benchmarks | Performance |
|------------|------------|-------------|
| Classification | GLUE (SST2, etc.) | Competitive with dense baselines |
| Summarization | Standard benchmarks | Competitive with dense baselines |
| Machine translation | Standard benchmarks | Competitive with dense baselines |

Training speedup: up to 10x faster for a given sparsity level compared to conventional sparse training approaches, with measurable inference time improvements in many cases.

## Key Distinction

NeuroPrune differs from [Cannistraci-Hebb Training](cannistraci-hebb-training.md) in its mechanism: CHT focuses on initialization topology and gradient-free link regrowth, while NeuroPrune applies neuroscience-principled criteria for deciding which existing connections to keep or remove. Both demonstrate that neuroscience pruning principles outperform random or magnitude-based pruning, but they attack different phases of the sparse training lifecycle.

## Authors

Amit Dhurandhar, Tejaswini Pedapati, Ronny Luss, Soham Dan, Aurelie Lozano, Payel Das, Georgios Kollias. IBM Research. ACL 2024 Findings; arXiv:2404.01306.

## See Also

- [Brain-Inspired Transformer Efficiency](../concepts/brain-inspired-transformer-efficiency.md)
- [CP-ViT](cp-vit-core-periphery.md)
- [Cannistraci-Hebb Training](cannistraci-hebb-training.md)
- [Connectome-Inspired Architectures](../concepts/connectome-inspired-architectures.md)
