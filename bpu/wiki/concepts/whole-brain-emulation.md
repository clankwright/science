# Whole Brain Emulation

> **Summary:** Whole brain emulation (WBE) is the hypothetical process of scanning, mapping, and computationally simulating an entire biological brain at sufficient resolution to reproduce its functional behavior. WBE sits at the far end of a spectrum that begins with connectome-inspired architectures and extends through increasingly faithful biological models.

**Sources:** [[raw/vogelstein_bpu_2025.md]], [[raw/lappalainen_connectome_2023.md]]

---

## Definition

Whole brain emulation requires three components: (1) scanning a biological brain at sufficient resolution to capture its computationally relevant structure, (2) interpreting the scan data to build a computational model of every neuron and synapse, and (3) simulating that model on hardware capable of running it in real time (or faster). The goal is functional equivalence: the emulation should produce the same input-output behavior as the original brain.

WBE is distinct from brain simulation in general. A simulation may simplify or abstract away biological details for scientific understanding. WBE aims for completeness: if a biophysical property matters for computation, it must be included.

## The Fidelity Spectrum

There is no single "connectome-inspired AI" approach. Instead, there is a spectrum of biological fidelity:

**Topology-only (loose inspiration).** Methods like [Deep Connectomics Networks](../methods/deep-connectomics-networks.md) and [Biological Processing Units](../methods/biological-processing-units.md) borrow the wiring diagram from a biological connectome but replace individual neuron dynamics with standard artificial neuron models (ReLU activations, standard gradient descent). The connectome provides structural priors; the dynamics are artificial.

**Connectome-constrained with learned dynamics.** [Deep Mechanistic Networks](../methods/connectome-constrained-dmn.md) fix the connectivity to match the biological connectome but learn biophysical parameters (time constants, synapse strengths, resting potentials) via task optimization. This is closer to emulation but still abstracts neuron models to simplified ODEs.

**Biophysically inspired dynamics.** [Liquid Time-Constant Networks](../methods/liquid-neural-networks.md) and [Neuronal Circuit Policies](../methods/neural-circuit-policies.md) use neuron models derived from biological membrane equations and synaptic transmission dynamics. The wiring may be inspired by (but not identical to) a specific connectome. These capture temporal dynamics that standard artificial neurons miss.

**Full emulation.** Biophysically faithful simulation of every neuron, every synapse, every ion channel, and every neuromodulatory signal, at whatever resolution is necessary to reproduce the original behavior. No existing system achieves this for any organism with a brain.

## Current State

### Drosophila larva

The BPU work by Vogelstein et al. (2025) comes closest to a working emulation of a complete brain, though it deliberately does not aim for biophysical faithfulness. The entire larval [*Drosophila*](../entities/drosophila.md) [connectome](connectome.md) (3,000 neurons, 65,000 connections) is embedded as a fixed-weight recurrent network. Synaptic weights are taken directly from the connectome and remain frozen during training. Only input and output projections are learned. This demonstrates that the raw wiring diagram, without biophysical tuning, can support complex computation (98% MNIST accuracy, competitive chess play).

### C. elegans and OpenWorm

The OpenWorm project aims to build a complete computational model of [*C. elegans*](../entities/c-elegans.md), including its 302 neurons, muscle cells, and body mechanics. It uses biophysically detailed neuron models (Hodgkin-Huxley style for some cells, simpler models for others) and attempts to simulate the worm's locomotion and behavior. Progress has been incremental; a fully functional whole-worm simulation remains incomplete, illustrating the difficulty of moving from connectivity data to functional emulation even for the simplest nervous system.

### Larger brains

No complete connectome exists for any mammalian brain. The mouse brain contains roughly 70 million neurons; the human brain contains roughly 86 billion. Even with a complete connectome, the parameter space for biophysical simulation would be enormous: each neuron expresses dozens of ion channel types with cell-type-specific distributions, and neuromodulatory systems reconfigure circuit dynamics on timescales from milliseconds to hours. Current computing hardware cannot simulate a human brain at biophysical resolution in real time.

## Key Challenges

**Scale.** The human brain has approximately 86 billion neurons and 100 trillion synapses. Scanning, reconstructing, and simulating at this scale is beyond current technology by several orders of magnitude.

**Resolution requirements.** It remains unclear what level of biological detail is "sufficient." The success of topology-only approaches (BPU, DCN) suggests that the wiring diagram alone carries significant computational information. But the failure of random networks with the same statistics to match biological networks implies that specific structural features matter, and we do not yet know which ones.

**Unknown parameters.** Even with a complete connectome, most biophysical parameters (ion channel densities, neuromodulator concentrations, synaptic plasticity rules) are unknown for individual neurons. The DMN approach sidesteps this by learning parameters from task constraints, but this introduces assumptions about what task the circuit is optimizing for.

**Validation.** How do you verify that an emulation is functionally equivalent to the original? For simple organisms, behavioral comparisons are feasible. For larger brains, the question becomes philosophical as much as technical.

## Related Terms

- **In silico neuroscience:** Computational modeling of neural systems, ranging from single-neuron models to large-scale brain simulations. WBE is the extreme case.
- **Mind uploading:** The speculative idea of transferring a specific individual's brain state into a computer, preserving identity and consciousness. WBE is a necessary (but possibly not sufficient) prerequisite.
- **Brain simulation:** Any computational model of brain activity, not necessarily aiming for completeness or functional equivalence.
- **Digital twin (neuroscience):** A computational replica of a specific brain circuit, calibrated against experimental data from that individual circuit.

## State of the Field (2025)

The State of Brain Emulation Report 2025 (Zhu et al., arXiv:2510.15745) provides the most comprehensive assessment to date: a 175-page document with 45+ contributors from MIT, Berkeley, Allen Institute, and Harvard.

**Key conclusions:**

- **Sub-1M-neuron organisms** (flies, bees, small fish) are plausibly emulable within the decade at approximately $100M cost. The [FlyWire connectome](../entities/flywire-consortium.md) (139,255 neurons) provides the structural data; the remaining bottleneck is parameterizing neuron dynamics and validating against behavior.
- **Mouse whole-brain cellular simulation** is projected as feasible in the 2030s, contingent on continued scaling of connectomics (the [MICrONS](../entities/microns.md) cubic millimeter is a first step toward whole-brain coverage) and neuromorphic hardware.
- **Human brain emulation** remains far off. The scale gap (86 billion neurons, ~10^15 synapses) is compounded by unknown parameters: ion channel distributions, neuromodulatory dynamics, and glial interactions remain uncharacterized for most cell types.

**Related milestone:** The BrainTrace framework (Nature Communications, January 2026) achieves linear-memory-complexity training for whole-brain-scale spiking neural networks. Applied to the *Drosophila* FlyWire connectome, BrainTrace demonstrates that backpropagation through time can be made tractable for networks at the scale of a complete brain, removing a key computational bottleneck for learning in emulated circuits.

The report positions [neuromorphic computing](neuromorphic-computing.md) as the most viable hardware path: event-driven chips like Intel Loihi 2 handle the sparse, recurrent connectivity of biological networks far more efficiently than GPUs, and the FlyWire connectome has already been deployed on 12 Loihi 2 chips (Wang et al., 2025).

## See Also
- [Connectome](connectome.md)
- [Connectome-Inspired Architectures](connectome-inspired-architectures.md)
- [Neuromorphic Computing](neuromorphic-computing.md)
- [Effectome](effectome.md)
- [FlyWire Consortium](../entities/flywire-consortium.md)
- [MICrONS](../entities/microns.md)
- [Biological Processing Units](../methods/biological-processing-units.md)
- [Deep Mechanistic Networks](../methods/connectome-constrained-dmn.md)
- [Liquid Time-Constant Networks](../methods/liquid-neural-networks.md)
- [Neuronal Circuit Policies](../methods/neural-circuit-policies.md)
