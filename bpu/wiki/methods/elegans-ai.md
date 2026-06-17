# Elegans-AI

> **Summary:** Elegans-AI converts the [*C. elegans*](../entities/c-elegans.md) connectome into two neural network architectures: M1 (Transformer-inspired, for classification) and M2 (autoencoder, for reconstruction). Both achieve 99.99% top-1 accuracy on CIFAR-10 and CIFAR-100 with significantly fewer parameters than conventional models. Connectome topologies consistently outperform randomly rewired and simulated bio-plausible alternatives, with reservoir configurations proving particularly effective. The work links small-world network properties to learning performance.

**Sources:** (Bardozzo et al., Neurocomputing 584, 2024; DOI: 10.1016/j.neucom.2024.127598)

---

## Architectures

Two distinct architectures are derived from the *C. elegans* wiring diagram:

- **M1 (Transformer-inspired):** designed for classification tasks; uses connectome topology to structure attention-like operations
- **M2 (Autoencoder):** designed for reconstruction tasks; encoder and decoder connectivity follow the connectome graph

Both architectures operate with significantly fewer parameters than conventional models at comparable accuracy.

## Results

| Task | Top-1 Accuracy |
|------|---------------|
| CIFAR-10 | 99.99% |
| CIFAR-100 | 99.99% |

Reservoir configurations (where connectome-derived layers are frozen and only readout layers are trained) prove particularly effective, echoing the frozen-core approach of [BPUs](biological-processing-units.md).

## Connectome Advantage

Connectome topologies consistently outperform two classes of alternatives:

- **Randomly rewired networks:** same degree distribution, randomized wiring
- **Simulated bio-plausible networks:** synthetic graphs generated to match biological statistics

The performance gap persists across tasks and configurations, indicating that the specific wiring pattern of the connectome, not merely its statistical properties, carries computational value.

## Small-World Properties

The authors establish a link between small-world network properties (high clustering coefficient, short path lengths) and learning performance. The *C. elegans* connectome exhibits pronounced small-world topology, which appears to facilitate efficient information routing during both forward and backward passes.

## Key Insight

Connectome structure provides a strong inductive bias independent of the specific task. The same biological wiring pattern improves performance across classification, reconstruction, and reservoir computing paradigms, suggesting the advantage is architectural rather than task-specific.

## Authors

Francesco Bardozzo, Andrea Terlizzi, Claudio Simoncini, Pietro Lio, Roberto Tagliaferri. Neurocomputing 584, 2024.

## See Also

- [Brain-Inspired Transformer Efficiency](../concepts/brain-inspired-transformer-efficiency.md)
- [Biological Processing Units](biological-processing-units.md)
- [Nematode Connectome Neural Networks](nematode-connectome-neural-networks.md)
- [Deep Connectomics Networks](deep-connectomics-networks.md)
- [Connectome Reservoir Computing](connectome-reservoir-computing.md)
- [C. elegans Olfactory Circuit ANN](celegans-olfactory-circuit-ann.md)
- [conn2res Toolbox](conn2res-toolbox.md)
- [CP-ViT](cp-vit-core-periphery.md)
- [Cannistraci-Hebb Training](cannistraci-hebb-training.md)
