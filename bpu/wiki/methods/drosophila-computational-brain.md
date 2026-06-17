# Drosophila Computational Brain Model

> **Summary:** A leaky integrate-and-fire spiking network built from the full 140K-neuron [FlyWire](../entities/flywire-consortium.md) connectome, with inferred neurotransmitter signs for synaptic polarity. The model runs on a standard laptop and accurately predicts neural activation patterns from gustatory and mechanosensory stimulation, validated against experimental data. This represents the first functional whole-brain simulation of an adult organism that produces experimentally validated predictions.

**Sources:** (Shiu, Zahid, Engert, Bhatt; Nature 634, 2024; DOI: 10.1038/s41586-024-07763-9)

---

## Architecture

- **Scale:** full adult [*Drosophila*](../entities/drosophila.md) brain, approximately 140,000 neurons from the FlyWire connectome
- **Neuron model:** leaky integrate-and-fire (LIF) spiking neurons
- **Synaptic polarity:** neurotransmitter identities inferred to assign excitatory or inhibitory signs to each synapse
- **Computational requirements:** runs on a standard laptop, no specialized hardware needed

## Validation

The model generates predictions that can be directly compared to experimental recordings:

- **Gustatory stimulation:** predicted neural activation patterns match experimental observations
- **Mechanosensory stimulation:** predicted response patterns validated against published data

This closed-loop validation, from connectome to simulation to experimental comparison, establishes the model as a functional (not merely structural) representation of the fly brain.

## Significance

This is the first whole-brain simulation of an adult organism that:

1. Uses the complete connectome (not a partial circuit or simplified abstraction)
2. Produces spiking dynamics (not just static graph analysis)
3. Generates experimentally testable and validated predictions
4. Runs on commodity hardware

The work demonstrates that a connectome plus simple neuron dynamics is sufficient to capture meaningful aspects of brain-wide neural activity, without requiring detailed biophysical models of individual neurons.

## Code

[github.com/philshiu/Drosophila_brain_model](https://github.com/philshiu/Drosophila_brain_model)

## Authors

Philip Shiu, Sven Zahid, Florian Engert, Dhruv Bhatt. Nature 634, 2024.

## See Also

- [FlyGM: Whole-Brain Connectome for Embodied Locomotion](flygm-whole-brain-locomotion.md)
- [Drosophila Connectome on Loihi 2](drosophila-loihi2-neuromorphic.md)
- [Connectome-Constrained Deep Mechanistic Networks](connectome-constrained-dmn.md)
- [Biological Processing Units](biological-processing-units.md)
- [BrainTrace SNN Training](braintrace-snn.md)
- [Drosophila VNC Connectome](drosophila-vnc-connectome.md)
