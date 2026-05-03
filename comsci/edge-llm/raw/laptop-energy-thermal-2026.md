# Laptop GPU Energy and Thermal Behavior under LLM Inference (2026)

Aggregated extract from two 2026 measurement papers.

## Watt Counts: Energy-Aware Benchmark for Sustainable LLM Inference

**Source:** arXiv:2604.09048 (https://arxiv.org/abs/2604.09048)
**Date:** April 2026
**Scope:** 5,000+ experiments, 50 LLMs, 10 NVIDIA GPUs.
**Range:** Memory 16-141 GB, TDP 70-600 W.
**Form:** Open access dataset.

## LLM Inference at the Edge: Mobile, NPU, and GPU Performance Efficiency Trade-offs Under Sustained Load

**Source:** arXiv:2603.23640 (https://arxiv.org/abs/2603.23640)
**Date:** March 2026

### Key numbers

- RTX 4050 sustains 131.7 tok/s at 34.1 W.
- iPhone 16 Pro loses 44% of throughput within two inferences and stays degraded for 65% of test iterations.
- Hailo-10H NPU sustains 6.9 tok/s at <2 W with near-zero variance.

### Implication

Sustained-load characterization, not peak throughput, is the binding constraint for agentic loops. Thermal throttling on mobile and laptop hardware cuts effective throughput by 30-50% in long-running agent sessions. The RTX 4050 (canonical 4 GB-class laptop dGPU) is the rare device that holds peak.

## Relevance to 4 GB edge target

The RTX 4050 number (131.7 tok/s sustained at 34 W) is the hard anchor for laptop wiki claims. NPU sustained behavior is the right design target if the agent needs to run on battery for hours.
