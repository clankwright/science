# conn2res: Connectome-Based Reservoir Computing Toolbox

> **Summary:** conn2res is an open-source Python toolbox for converting arbitrary biological connectomes into reservoir computing substrates. It supports multiple neuron dynamics (integrate-and-fire spiking, rate-based, memristive), works with any connectome data source (tract-tracing, diffusion MRI, electron microscopy), and has been validated on human, macaque, mouse, and [*Drosophila*](../entities/drosophila.md) connectomes. By standardizing the reservoir paradigm, which avoids backpropagation and isolates the effects of network architecture on computation, conn2res provides the core infrastructure for the connectome-as-reservoir research program.

**Sources:** [[raw/suarez_conn2res_2024.md]]

---

## Approach

The reservoir computing paradigm separates a neural network into two components:

- **Reservoir:** a fixed recurrent network whose weights are not trained; this is where the [connectome](../concepts/connectome.md) topology is embedded
- **Readout:** a trainable linear layer that maps reservoir states to task outputs

This separation is critical for isolating the contribution of network architecture. Because the reservoir weights are frozen, any performance difference between connectome topologies and random or degree-matched controls must arise from the wiring pattern itself, not from learned parameters.

## Supported Dynamics

conn2res implements multiple neuron models for the reservoir layer:

- **Integrate-and-fire spiking neurons:** biologically faithful dynamics with discrete spike events
- **Rate-based neurons:** continuous firing-rate dynamics, computationally cheaper
- **Memristive elements:** hardware-compatible dynamics for neuromorphic deployment

This flexibility allows researchers to test whether connectome advantages depend on the specific neuron model or hold across dynamical regimes.

## Connectome Compatibility

The toolbox accepts connectomes from any reconstruction modality:

- **Tract-tracing:** gold standard for long-range connectivity in primates
- **Diffusion MRI:** non-invasive whole-brain connectivity estimation in humans
- **Electron microscopy:** synapse-level resolution (as used in [FlyWire](../entities/flywire-consortium.md), [*C. elegans*](../entities/c-elegans.md))

Validated on connectomes spanning four species: human, macaque, mouse, and *Drosophila*.

## Relation to Other Work

conn2res occupies a complementary niche to other connectome-as-architecture methods:

- [BPUs](biological-processing-units.md) and [FlyGM](flygm-whole-brain-locomotion.md) freeze the connectome and train only I/O projections, similar to the reservoir paradigm but applied to classification and control tasks
- [Connectome Reservoir Computing](connectome-reservoir-computing.md) (Leal-Taixe et al., 2025) applied the FlyWire connectome as an echo-state reservoir for time-series prediction, demonstrating overfitting resilience
- conn2res generalizes and standardizes this approach, making it easy to swap in different connectomes and dynamics

The toolbox is particularly useful for controlled experiments: comparing the same connectome across different dynamics, or different connectomes under identical conditions.

## Code

GitHub: [netneurolab/conn2res](https://github.com/netneurolab/conn2res)

## Authors

Laura E. Suarez, Anil Bhatt, Bratislav Misic et al. Nature Communications 15, 2024; DOI: 10.1038/s41467-024-44900-4.

## See Also

- [Connectome Reservoir Computing](connectome-reservoir-computing.md)
- [Biological Processing Units](biological-processing-units.md)
- [FlyGM: Whole-Brain Connectome for Embodied Locomotion](flygm-whole-brain-locomotion.md)
- [Connectome-Inspired Architectures](../concepts/connectome-inspired-architectures.md)
- [Connectome](../concepts/connectome.md)
- [Neuromorphic Computing](../concepts/neuromorphic-computing.md)
