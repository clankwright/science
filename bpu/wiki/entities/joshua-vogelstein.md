# Joshua T. Vogelstein

> **Summary:** Joshua T. Vogelstein is a professor at Johns Hopkins University and the lead researcher on the Biological Processing Unit (BPU) project. His work demonstrated that unmodified biological connectomes can serve as effective, reusable substrates for intelligent computation, bridging neuroscience, statistics, and machine learning.

**Sources:** [[raw/vogelstein_bpu_2025.md]], general knowledge

---

## Affiliations

- **Johns Hopkins University**, Department of Biomedical Engineering, Baltimore, MD
- **Pomegranate Intelligence**, co-founder, Baltimore, MD

## Research Focus

Vogelstein works at the intersection of neuroscience, statistics, and machine learning. His research program centers on extracting computational principles from biological neural circuits and applying them to artificial intelligence. This includes connectomics (mapping and analyzing neural wiring diagrams), statistical methods for high-dimensional data, and brain-inspired AI architectures.

## Biological Processing Unit

Vogelstein's key contribution is the [Biological Processing Unit](../methods/biological-processing-units.md) (BPU): a neural network architecture that uses the complete [Drosophila larval connectome](drosophila.md) as a fixed recurrent computational core. The BPU preserves the biological wiring diagram without modification. Only input/output projections are trained, while the ~65,000 internal synaptic weights remain frozen at their connectome-derived values.

The central insight: a complete biological connectome, shaped by millions of years of evolution, encodes structural priors sufficient to support diverse cognitive tasks (vision, decision-making) without task-specific architectural tuning. This positions the connectome as a "biological lottery ticket."

BPU results presented at AGI 2025:

- 98% accuracy on MNIST, 58% on CIFAR-10 (surpassing size-matched MLPs)
- GNN-BPU achieves 60% move accuracy on ChessBench with only 10,000 training games, nearly 10x better than any size-matched transformer
- CNN-BPU models with ~2M parameters outperform parameter-matched transformers on chess

## Pomegranate Intelligence

Vogelstein co-founded Pomegranate Intelligence in Baltimore to commercialize research from the BPU program. The company is developing biofidelic neural architectures for practical AI applications.

## See Also

- [Biological Processing Units](../methods/biological-processing-units.md)
- [Drosophila](drosophila.md)
- [Liquid AI](liquid-ai.md)
- [Ramin Hasani](ramin-hasani.md)
