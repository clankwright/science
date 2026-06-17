# Effectome

> **Summary:** The effectome is the map of causal effects between neurons: how much activating one neuron changes the activity of another. Introduced by Pospisil, Aragon, Bhatt, and Pillow (2024), the effectome addresses a fundamental limitation of the connectome, which specifies which neurons *can* affect each other but not how strongly they *do*. By fitting a linear dynamical model to stochastic optogenetic perturbation data using the connectome as a Bayesian prior, the effectome bridges the gap from anatomical structure to functional causation.

**Sources:** Pospisil, Aragon, Bhatt, Pillow, *Nature* 634:201-209, 2024 (DOI: 10.1038/s41586-024-07982-0)

---

## Motivation

A [connectome](connectome.md) is a structural wiring diagram: it tells you that neuron A synapses onto neuron B. It does not tell you how much A's activity actually influences B's firing. This distinction matters because:

- Synaptic weights vary enormously across connections
- Neuromodulatory state can gate or amplify specific pathways
- Network-level dynamics (recurrence, inhibition, feedback) mean that the functional impact of a connection depends on the broader circuit context
- Some anatomical connections may be functionally silent under typical conditions

The effectome fills this gap by measuring causal influence directly.

## Method

Pospisil et al. propose a linear dynamical model of neural population activity, using the connectome as a Bayesian prior on the model's connectivity matrix. The approach:

1. **Stochastic optogenetic perturbations:** Individual neurons or small populations are randomly activated using optogenetic tools. The perturbation pattern is randomized to enable causal inference.
2. **Population recording:** The activity of downstream neurons is recorded during perturbation.
3. **Model fitting:** A linear dynamical system is fit to the perturbation-response data, with the connectome providing a structured prior that regularizes the enormous parameter space.
4. **Causal effect estimation:** The fitted model yields a matrix of causal effects: how much activating neuron *i* changes the expected activity of neuron *j*.

## Validation

The method was validated in biophysically realistic simulations of the *Drosophila* brain. Using simulated perturbation data from a model with known ground-truth causal effects, the effectome estimation procedure recovered the true causal structure more accurately than approaches that relied on the connectome alone or on purely data-driven methods without connectome priors.

## Relationship to Connectome

The connectome and effectome are complementary:

| Property | Connectome | Effectome |
|----------|-----------|-----------|
| What it maps | Anatomical wiring (synapses) | Causal influence (functional effects) |
| Data source | Electron microscopy | Perturbation experiments |
| Nature | Static structural map | State-dependent functional map |
| Scale achieved | Whole-brain (Drosophila) | Currently limited by perturbation throughput |

Both are needed for complete brain models. The connectome provides the scaffold; the effectome populates it with functional weights. For [connectome-inspired architectures](connectome-inspired-architectures.md), the effectome could eventually provide more accurate weight initialization than raw synapse counts.

## Implications for Brain Modeling

The effectome concept has direct relevance to several ongoing efforts:

- **[Deep Mechanistic Networks](../methods/connectome-constrained-dmn.md):** Currently learn biophysical parameters via task optimization. Effectome data could constrain or validate these learned parameters.
- **[Biological Processing Units](../methods/biological-processing-units.md):** Currently use raw connectome weights. Effectome-derived weights could provide more functionally accurate initializations.
- **[Whole Brain Emulation](whole-brain-emulation.md):** The effectome represents a necessary intermediate step: structure alone is insufficient for faithful emulation; causal dynamics must also be captured.

## See Also
- [Connectome](connectome.md)
- [Connectome-Inspired Architectures](connectome-inspired-architectures.md)
- [Whole Brain Emulation](whole-brain-emulation.md)
- [Drosophila melanogaster](../entities/drosophila.md)
