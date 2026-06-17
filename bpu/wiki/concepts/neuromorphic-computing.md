# Neuromorphic Computing

> **Summary:** Neuromorphic computing is a hardware paradigm designed to mimic neural computation: event-driven, massively parallel, with co-located processing and memory. For connectome-inspired architectures, neuromorphic chips offer a natural execution substrate because biological neural networks have sparse, recurrent, irregular connectivity that maps poorly to GPUs but efficiently to neuromorphic hardware. A key milestone was reached in 2025 when the full FlyWire connectome (140K neurons) was deployed on 12 Intel Loihi 2 chips.

**Sources:** Wang et al., 2025; Zhu et al., arXiv:2510.15745 (State of Brain Emulation Report 2025); web research

---

## Core Principles

Neuromorphic hardware diverges from conventional von Neumann architectures in several fundamental ways:

**Event-driven computation.** Neuromorphic chips process spikes (discrete events) rather than performing synchronous clock-driven operations. Neurons only consume energy when they fire, yielding significant power savings for sparse activity patterns.

**Co-located processing and memory.** Each neuron's state and synaptic weights are stored locally, eliminating the memory-bandwidth bottleneck that limits conventional processors. This mirrors biological neurons, where computation and storage are physically integrated at the synapse.

**Massive parallelism.** Thousands to millions of simple processing elements operate simultaneously, communicating via spike messages rather than shared memory buses.

**Temporal dynamics.** Neuromorphic neurons maintain internal state (membrane potential, adaptation variables) that evolves continuously, enabling native processing of temporal information without the explicit recurrence machinery required by conventional RNNs.

## Key Platforms

| Platform | Organization | Scale | Notes |
|----------|-------------|-------|-------|
| Loihi / Loihi 2 | Intel | ~1M neurons per chip | Programmable; supports learning on-chip; used for FlyWire deployment |
| TrueNorth | IBM | 1M neurons, 256M synapses | Fixed architecture; extremely low power (~70 mW) |
| SpiNNaker / SpiNNaker 2 | University of Manchester | ~1M cores (SpiNNaker 1) | General-purpose ARM cores connected via spike-routing network |
| BrainScales 2 | Heidelberg University | ~512 neurons per chip | Analog; runs 1000x faster than biological real-time |

## Why Connectomes Need Neuromorphic Hardware

Biological neural networks have properties that are a poor fit for GPUs but a natural fit for neuromorphic chips:

**Sparse, irregular connectivity.** Connectomes are sparse directed graphs with heterogeneous degree distributions, rich-club hubs, and cell-type-specific wiring rules. GPUs are optimized for dense, regular matrix operations; sparse irregular graphs waste most of the compute capacity. Neuromorphic chips represent connectivity as local routing tables, handling irregularity without overhead.

**Recurrent dynamics.** Biological networks are heavily recurrent. On GPUs, recurrence requires sequential time-step simulation. Neuromorphic hardware processes recurrence natively through asynchronous spike propagation.

**Sparse activity.** Biological neurons fire sparsely: typical cortical neurons fire at 1-10 Hz, meaning >99% of neurons are silent at any given moment. Event-driven neuromorphic chips exploit this directly; GPUs waste cycles on silent neurons.

**Performance scaling.** The energy and speed advantage of neuromorphic hardware increases with sparser activity, matching the regime that biological neural dynamics naturally occupy.

## FlyWire on Loihi 2

Wang et al. (2025) deployed the complete FlyWire adult [*Drosophila*](../entities/drosophila.md) connectome (approximately 140,000 neurons and 54.5 million synapses) on 12 Intel Loihi 2 chips. This represents a milestone: the first time a complete brain connectome has been instantiated on neuromorphic hardware. The deployment demonstrated that connectome-scale networks with biologically realistic sparse, recurrent connectivity can run efficiently on current neuromorphic platforms.

## Scale Context

The gap between current neuromorphic systems and mammalian brain scale remains large:

| System | Neurons | Synapses |
|--------|---------|----------|
| Current neuromorphic chips | ~millions | ~billions |
| Adult Drosophila | ~140,000 | ~54.5 million |
| Mouse brain | ~70 million | ~100 billion |
| Human brain | ~86 billion | ~10^15 |

Bridging from insect-scale to mammalian-scale connectome emulation requires several generations of hardware scaling. The State of Brain Emulation Report 2025 (Zhu et al., arXiv:2510.15745), a 175-page assessment with 45+ contributors from MIT, Berkeley, Allen Institute, and Harvard, concludes that sub-1M neuron organisms (flies, bees, small fish) are plausibly emulable within the decade at approximately $100M cost. Mouse brain emulation is projected as feasible in the 2030s. Human brain emulation remains far off due to the combined challenges of scale, unknown parameters, and hardware limitations.

## Comparison with GPUs

| Property | GPUs | Neuromorphic |
|----------|------|-------------|
| Optimal workload | Dense, homogeneous matrices | Sparse, heterogeneous graphs |
| Connectivity | Regular (dense layers) | Irregular (biological wiring) |
| Activity pattern | Dense activations | Sparse spiking |
| Memory model | Separated (von Neumann bottleneck) | Co-located (in-memory compute) |
| Power scaling | Constant regardless of activity | Proportional to spike rate |
| Temporal processing | Discrete time steps | Continuous, event-driven |

For connectome-inspired architectures specifically, neuromorphic hardware addresses the fundamental mismatch between biological network structure and conventional compute substrates.

## See Also
- [Connectome](connectome.md)
- [Connectome-Inspired Architectures](connectome-inspired-architectures.md)
- [Biologically Plausible Learning](biologically-plausible-learning.md)
- [Whole Brain Emulation](whole-brain-emulation.md)
- [FlyWire Consortium](../entities/flywire-consortium.md)
- [Effectome](effectome.md)
- [S²TDPT: Spiking STDP Transformer](../methods/spiking-stdp-transformer.md)
- [CH-SNN: Cannistraci-Hebb on Spiking Nets](../methods/cannistraci-hebb-snn.md)
- [BrainTrace SNN Training](../methods/braintrace-snn.md)
- [conn2res Toolbox](../methods/conn2res-toolbox.md)
