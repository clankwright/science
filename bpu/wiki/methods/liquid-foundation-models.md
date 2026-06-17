# Liquid Foundation Models v2 (LFM2)

> **Summary:** LFM2 is a production model family from Liquid AI spanning 350M to 8.3B parameters. The architecture uses a hybrid backbone of gated short convolutions and grouped query attention blocks, optimized via hardware-in-the-loop architecture search for edge deployment. LFM2 achieves up to 2x faster prefill and decode on CPUs versus similarly sized transformers. While conceptually rooted in liquid neural network principles, the production architecture prioritizes engineering performance, representing the commercialization endpoint of the NCP -> LTC -> CfC -> Liquid-S4 research lineage.

**Sources:** [[raw/amini_lfm2_2025.md]]

---

## Architecture

LFM2's backbone is a compact hybrid discovered through hardware-in-the-loop architecture search under edge latency and memory constraints:

- **Gated short convolutions:** provide efficient local context processing
- **Grouped query attention (GQA) blocks:** a small number of attention blocks handle long-range dependencies
- **32K context length** across all model sizes

The family includes dense models (350M, 700M, 1.2B, 2.6B parameters) and a mixture-of-experts variant (8.3B total, 1.5B active).

## Training Pipeline

- **Knowledge distillation:** tempered, decoupled Top-K objective that avoids support mismatch
- **Curriculum learning:** difficulty-ordered data progression
- **Three-stage post-training:** supervised fine-tuning, length-normalized preference optimization, model merging
- **Pre-training scale:** 10-12T tokens

## Results

LFM2-2.6B achieves 79.56% on IFEval and 82.41% on GSM8K. The family competes directly with Llama, Mistral, and similar-scale open models.

Multimodal and specialized variants:
- **LFM2-VL:** vision-language with tunable accuracy-latency tradeoffs via token-efficient visual processing
- **LFM2-Audio:** separated audio input/output pathways for real-time speech-to-speech, competitive with models 3x larger
- **LFM2-ColBERT:** low-latency retrieval encoder across multiple languages

## Biological Roots vs. Engineering Reality

LFM2 represents the commercialization endpoint of a research lineage that began with [*C. elegans*](../entities/c-elegans.md) neuroscience:

[Neural Circuit Policies](neural-circuit-policies.md) (9 neurons, *C. elegans* TW circuit) -> [LTC Networks](liquid-neural-networks.md) (input-dependent time constants from non-spiking dynamics) -> [CfC](closed-form-continuous-time.md) (closed-form approximation, ODE-free) -> [Liquid-S4](liquid-s4.md) (liquid dynamics in state-space models) -> **LFM2** (production hybrid architecture)

The production architecture has diverged significantly from direct biological modeling. LFM2 uses conventional building blocks (convolutions, grouped query attention) rather than ODE-based liquid dynamics. The biological inspiration survives primarily in the design philosophy: compact, efficient architectures that achieve strong performance without massive parameter counts. The hardware-in-the-loop search echoes the evolutionary optimization that produced biological neural circuits under energy and space constraints.

## Authors

Alexander Amini, Ramin Hasani, Mathias Lechner, Daniela Rus, and 30+ contributors. Liquid AI. arXiv:2511.23404, December 2025.

## See Also

- [Liquid-S4](liquid-s4.md)
- [Closed-Form Continuous-Time Networks](closed-form-continuous-time.md)
- [Liquid Neural Networks](liquid-neural-networks.md)
- [Neural Circuit Policies](neural-circuit-policies.md)
- [Liquid AI](../entities/liquid-ai.md)
- [Brain-Inspired Transformer Efficiency](../concepts/brain-inspired-transformer-efficiency.md)
