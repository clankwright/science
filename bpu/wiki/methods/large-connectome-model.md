# Large Connectome Model (LCM)

> **Summary:** A 1.2 billion parameter fMRI foundation model operating on brain connectomes. Pretrained on 10,036 subjects using multitask learning for brain-environment interactions (BEI), LCM uses a Transformer decoder with multi-head cross-attention between connectome features and BEI tokens. It outperforms BrainLM, BrainJEPA, and BrainMass foundation models in both accuracy and efficiency across sex prediction, behavior recognition, and disease diagnosis. This represents a different paradigm from structural connectome work: LCM operates on human functional connectivity derived from fMRI rather than electron microscopy reconstructions.

**Sources:** [[raw/wei_large_connectome_model_2025.md]]

---

## Architecture

- **Model type:** Transformer decoder with multi-head cross-attention
- **Input:** brain connectome features derived from fMRI functional connectivity
- **Attention mechanism:** cross-attention between connectome features and brain-environment interaction (BEI) tokens
- **Pretraining:** multitask learning across BEI tasks on 10,036 subjects
- **Three model sizes:** 147M, 735M, 1,175M parameters

## Evaluation Tasks

LCM is evaluated across multiple clinical and cognitive domains:

- **Sex prediction**
- **Behavior recognition**
- **Disease diagnosis:** autism, Parkinson's disease, Alzheimer's disease, schizophrenia

## Results

LCM outperforms existing fMRI foundation models in both accuracy and computational efficiency:

- **BrainLM**
- **BrainJEPA**
- **BrainMass**

Performance scales with model size across the three variants, demonstrating that connectome representations benefit from the same scaling dynamics observed in language and vision foundation models.

## Paradigm Distinction

LCM operates in a fundamentally different regime from structural connectome work like [BPUs](biological-processing-units.md), [FlyGM](flygm-whole-brain-locomotion.md), or [DMNs](connectome-constrained-dmn.md):

| Dimension | Structural connectome methods | LCM |
|-----------|------------------------------|-----|
| Organism | [*Drosophila*](../entities/drosophila.md), [*C. elegans*](../entities/c-elegans.md) | Human |
| Connectome type | Structural (EM-derived synaptic wiring) | Functional (fMRI-derived correlation) |
| Scale | 302 to 140K neurons | Whole-brain parcellations, 10K+ subjects |
| Use of connectome | Fixed architecture (frozen weights) | Input representation (learned features) |

Despite these differences, LCM validates a shared thesis: connectome representations, whether structural or functional, carry computational information that scales with modern deep learning architectures.

## Significance

LCM demonstrates that connectome representations are compatible with foundation model paradigms. The successful scaling from 147M to 1.2B parameters, with consistent performance improvements, suggests that brain connectivity data has sufficient structure to reward increased model capacity. This opens a path toward general-purpose brain models pretrained on large connectome datasets.

## Authors

Dongxiao Wei, Qian Dan, Zijian Wu (UNC Chapel Hill). arXiv:2510.18910; AAAI 2026.

## See Also

- [Biological Processing Units](biological-processing-units.md)
- [Sensing Whole-Brain Zebrafish Foundation Model](zebrafish-foundation-model.md)
- [Mouse V1 Digital Twins](mouse-v1-digital-twin.md)
- [Connectome-Constrained Network Theory](connectome-constrained-theory.md)
- [Connectome Reservoir Computing](connectome-reservoir-computing.md)
