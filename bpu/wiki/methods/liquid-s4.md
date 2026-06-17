# Liquid Structural State-Space Models (Liquid-S4)

> **Summary:** Liquid-S4 replaces the fixed state transitions of S4 (Structured State Space models) with input-dependent liquid time-constant dynamics, inspired by [*C. elegans*](../entities/c-elegans.md) non-spiking neuron biophysics. The model combines the efficiency of state-space models (linear scaling with sequence length) with the expressivity of liquid dynamics, achieving 87.32% average on the Long-Range Arena benchmark (state-of-the-art at time of publication). Liquid-S4 is the bridge between the LTC/CfC line of work and the structured state-space model revolution.

**Sources:** [[raw/hasani_liquids4_2022.md]]

---

## Core Idea

Standard S4 models sequence data with linear state-space dynamics: x' = Ax + Bu, y = Cx. The state transition matrix A is fixed, independent of input. Liquid-S4 replaces this with a linearized LTC state-space model: x' = (A + Bu)x + Bu, y = Cx. The additional Bu term in the state transition makes the dynamics input-dependent, enabling the model to adapt its temporal processing to the characteristics of incoming data.

This formulation can be solved efficiently using the same diagonal plus low-rank decomposition and frequency-domain kernel computation as S4, producing an additional convolutional kernel that accounts for similarities between lagged signal samples.

## Biological Basis

Liquid-S4 inherits its biological motivation from [Liquid Time-Constant Networks](liquid-neural-networks.md). LTC dynamics model the non-spiking, graded-potential communication observed in *C. elegans* neurons, where time constants vary as a function of input. Liquid-S4 brings this input-dependent adaptation into the structured SSM framework, preserving the causal, continuous-time semantics while gaining the computational efficiency of convolutional parallelization.

## Results

| Benchmark | Performance |
|-----------|-------------|
| Long-Range Arena (average) | 87.32% (SOTA at publication) |
| Speech Commands (full raw) | 96.78% accuracy |
| BIDMC vital signs | SOTA across all modes |

Liquid-S4 achieves these results with 30% fewer parameters than S4 on Speech Commands.

## Position in the Research Lineage

Liquid-S4 occupies a critical position in two converging research lines:

1. **Biological:** [Neural Circuit Policies](neural-circuit-policies.md) -> [LTC Networks](liquid-neural-networks.md) -> [CfC](closed-form-continuous-time.md) -> Liquid-S4: progressively scaling *C. elegans*-inspired dynamics from 9-neuron controllers to sequence models competitive with transformers
2. **Architectural:** S4 -> Liquid-S4 -> Mamba and beyond: integrating biological expressivity into the state-space model revolution that challenged transformer dominance on long-range tasks

This convergence led directly to [Liquid AI](../entities/liquid-ai.md)'s commercial model family.

## Authors

Ramin Hasani, Mathias Lechner, Tsun-Hsuan Wang, Makram Chahine, Alexander Amini, Daniela Rus. MIT CSAIL. ICLR 2023; arXiv:2209.12951.

## See Also

- [Liquid Neural Networks](liquid-neural-networks.md)
- [Closed-Form Continuous-Time Networks](closed-form-continuous-time.md)
- [Liquid Foundation Models (LFM2)](liquid-foundation-models.md)
- [Neural Circuit Policies](neural-circuit-policies.md)
- [Liquid AI](../entities/liquid-ai.md)
- [Brain-Inspired Transformer Efficiency](../concepts/brain-inspired-transformer-efficiency.md)
