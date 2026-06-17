# Connectome-Constrained Deep Mechanistic Networks

> **Summary:** Connectome-constrained deep mechanistic networks (DMNs) fix the wiring diagram to experimentally measured connectome data and optimize only single-neuron and single-synapse biophysical parameters using deep learning. Applied to 64 cell types in the [*Drosophila*](../entities/drosophila.md) optic lobe (45,669 neurons, 1,513,231 connections), the approach requires only 734 free parameters to produce a model whose predictions agree with experimental measurements across 26 independent studies. The work demonstrates that connectivity plus a defined computational task can together uniquely determine neural computation mechanisms.

**Sources:** [[raw/lappalainen_connectome_2023.md]]

---

## Architecture

The model reconstructs the fruit fly's optic lobe motion pathways:

- **64 cell types** arranged in a hexagonal lattice tiling the visual field
- **45,669 neurons** and **1,513,231 connections** specified by connectome measurements
- **Only 734 free parameters:** time constants, resting potentials, and unitary synapse strengths per cell type

The connectivity is entirely fixed by the connectome. No wiring is learned. The deep learning optimization adjusts only the biophysical parameters of individual neurons and synapses to match the task objective (computing visual motion from naturalistic stimuli).

## Training Task

The network is trained to compute optic flow from naturalistic visual stimuli. This is a well-characterized computation in the fly visual system, allowing direct comparison between model predictions and decades of experimental data.

## Results

- Model predictions agree with experimental measurements across **26 independent studies**
- Correctly predicts ON/OFF pathway segregation: **31/31 cell types** assigned to the correct pathway
- Correctly predicts **T4/T5 direction selectivity** properties
- Generated a novel prediction: **TmY3** may also detect motion (untested at time of publication)

## Key Insights

- **Sparse connectivity helps:** the strategy is more successful in circuits with sparse connectivity, a universal feature of biological neural networks. Sparse wiring constrains the solution space, making parameter optimization more tractable and solutions more unique.
- **Connectivity + task = mechanism:** when the wiring diagram is known and the computational objective is specified, the biophysical parameters converge to solutions that match real neural dynamics. This suggests connectome data carries strong mechanistic constraints.

## Open-Source Implementation

The **flyvis** PyTorch library implements the full model and training pipeline: [github.com/TuragaLab/flyvis](https://github.com/TuragaLab/flyvis)

## Relation to Other Work

Connectome-constrained DMNs differ from [BPUs](biological-processing-units.md) in what is frozen versus trained. BPUs freeze both topology and weights (using raw synaptic counts as weights) and train only I/O projections. DMNs freeze topology but optimize biophysical parameters within each neuron and synapse. Both approaches demonstrate that connectome structure carries computational information, but DMNs aim for mechanistic understanding of specific biological circuits rather than general-purpose computation.

## Authors

Janne K. Lappalainen, Fabian D. Tschopp, Sridhama Prakhya, Mason McGill, Aljoscha Nern, et al. (Janelia Research Campus / University of Tubingen). bioRxiv 2023; Nature 2024.

## See Also

- [Biological Processing Units](biological-processing-units.md)
- [Deep Connectomics Networks](deep-connectomics-networks.md)
- [Neural Circuit Policies](neural-circuit-policies.md)
- [BrainTrace SNN Training](braintrace-snn.md)
- [Zebrafish Connectome Models](zebrafish-connectome-models.md)
- [Biologically Plausible Learning](../concepts/biologically-plausible-learning.md)
