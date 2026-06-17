# Zebrafish Connectome-Based Models

> **Summary:** Two independent efforts extend connectome-constrained modeling to the vertebrate zebrafish. Vishwanathan et al. (Nature Neuroscience, 2024) built a neural network from the larval zebrafish brainstem wiring diagram that predicts eye-position coding and attractor dynamics at cellular resolution, validated by calcium imaging. ZAPBench (Google Research, HHMI Janelia, Harvard; ICLR 2025) provides the first whole-vertebrate-brain activity prediction benchmark with ~70,000 neurons imaged via light-sheet microscopy. Together, these establish zebrafish (~100K neurons) as a bridge between invertebrate connectomics ([*Drosophila*](../entities/drosophila.md) at ~140K, [*C. elegans*](../entities/c-elegans.md) at 302) and mammalian brains (mouse at ~70M).

**Sources:** (Vishwanathan, Seung, Goldman, Aksay et al.; Nature Neuroscience, Dec 2024; DOI: 10.1038/s41593-024-01784-3), [[raw/zapbench_2025.md]]

---

## Brainstem Wiring to Neural Coding (Vishwanathan et al., 2024)

### Approach

- Reconstructed the larval zebrafish brainstem wiring diagram at synaptic resolution
- Built a neural network model directly from the measured connectivity
- No parameter fitting to neural activity data: predictions emerge from wiring alone

### Results

- **Eye-position coding:** the model predicts which neurons encode eye position, matching calcium imaging recordings at single-cell resolution
- **Attractor dynamics:** the model generates line attractor dynamics consistent with the integrator circuit that holds gaze position between saccades

### Significance

This is the first vertebrate connectome-to-function prediction. Previous successes ([DMNs](connectome-constrained-dmn.md) for *Drosophila* visual system, [NCPs](neural-circuit-policies.md) for *C. elegans* TW circuit) were limited to invertebrates. The zebrafish result demonstrates that connectome-constrained modeling generalizes across the invertebrate/vertebrate divide, a critical validation for the hypothesis that wiring diagrams encode sufficient information to predict neural computation.

## ZAPBench: Whole-Brain Activity Prediction (ICLR 2025)

### Dataset

- ~70,000 neurons recorded simultaneously via light-sheet calcium imaging
- Covers the entire larval zebrafish brain
- Multiple fish, multiple behavioral conditions
- Open dataset for benchmarking brain models

### Benchmark Design

- Standardized train/test splits and evaluation metrics
- Tasks span prediction of neural activity from stimulus, behavior, and other neural populations
- Designed to enable fair comparison between connectome-constrained models, data-driven models, and hybrid approaches

### Significance

ZAPBench fills a critical gap: there was no standardized benchmark for whole-vertebrate-brain activity prediction. For the connectome-as-architecture field, it provides a test bed where connectome-constrained models can be directly compared against unconstrained baselines at vertebrate scale.

## Bridging the Scale Gap

Zebrafish sits at a strategically important point on the organism complexity spectrum:

| Organism | Neurons | Connectome Status |
|----------|---------|-------------------|
| *C. elegans* | 302 | Complete (1986) |
| *Drosophila* larva | ~3,000 | Complete (2023) |
| *Drosophila* adult | ~140,000 | Complete (2024, [FlyWire](../entities/flywire-consortium.md)) |
| Zebrafish larva | ~100,000 | Partial; brainstem reconstructed |
| Mouse | ~70,000,000 | Partial ([MICrONS](../entities/microns.md): ~200K cells of visual cortex) |

The zebrafish brain is large enough to exhibit vertebrate-specific circuit organization (layered cortex-like structures, distinct brain regions) while remaining small enough for near-complete imaging and emerging connectomic reconstruction. Success here strengthens the case for scaling connectome-constrained approaches toward mammalian brains.

## Authors

- Vishwanathan, Seung, Goldman, Aksay et al. Nature Neuroscience, December 2024.
- ZAPBench: Google Research, HHMI Janelia, Harvard. ICLR 2025; arXiv:2503.02618.

## See Also

- [Sensing Whole-Brain Zebrafish Foundation Model](zebrafish-foundation-model.md)
- [Connectome-Constrained Deep Mechanistic Networks](connectome-constrained-dmn.md)
- [Biological Processing Units](biological-processing-units.md)
- [Neural Circuit Policies](neural-circuit-policies.md)
- [Connectome](../concepts/connectome.md)
- [Connectome-Inspired Architectures](../concepts/connectome-inspired-architectures.md)
- [FlyWire Consortium](../entities/flywire-consortium.md)
- [MICrONS](../entities/microns.md)
