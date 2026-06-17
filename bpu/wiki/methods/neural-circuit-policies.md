# Neural Circuit Policies (NCPs)

> **Summary:** NCPs re-purpose the tap-withdrawal (TW) neural circuit of [*C. elegans*](../entities/c-elegans.md) as a policy network for reinforcement learning control tasks. The 9-neuron TW circuit, with its excitatory and inhibitory synaptic links governing competitive forward/backward reflexes, performs comparably to deep neural network policies on classic control benchmarks and has been deployed on a real rover robot for autonomous parking. This was the first demonstration that a specific biological neural circuit can be directly repurposed for artificial control.

**Sources:** [[raw/lechner_ncp_2018.md]], [[raw/lechner_ncp_natmi_2020.md]]

---

## The Tap-Withdrawal Circuit

The TW circuit consists of 9 neuron classes organized into three layers:

| Layer | Neurons | Function |
|-------|---------|----------|
| Sensory | PVD, PLM, AVM, ALM | Detect mechanical stimuli |
| Interneuron | AVD, PVC, AVA, AVB | Integrate and relay signals |
| Motor | FWD, REV | Execute forward or backward locomotion |

The circuit implements a competitive mechanism: sensory neurons drive interneurons that activate either forward or reverse motor groups. Excitatory and inhibitory synaptic connections create a push-pull dynamic between the two reflexes, enabling context-dependent behavioral selection.

## Neuron Model

Each neuron follows a single-compartment membrane equation with non-spiking, electrotonic dynamics:

- **Chemical synapses:** conductance-based currents where presynaptic activity modulates postsynaptic membrane potential through sigmoidal activation
- **Electrical gap junctions:** direct current flow between coupled neurons proportional to voltage difference
- **Non-spiking regime:** neurons communicate via graded potentials, matching the biology of *C. elegans*

This biophysical model preserves the interpretability of the original circuit: every synapse and neuron state has a direct biological counterpart.

## Results

| Task | NCP Performance |
|------|----------------|
| Inverted pendulum | Matches deep NN policies |
| Mountain car | Matches deep NN policies |
| Cart-pole | Matches deep NN policies |
| Real rover parking | Successful autonomous deployment |

## Key Advantages

- **Interpretability:** dynamics can be analyzed at the single-cell level; the entire controller is auditable
- **Compactness:** 9 neuron classes with biologically specified connectivity, rather than hundreds or thousands of units
- **Biological grounding:** the circuit topology and neuron dynamics come directly from experimental neuroscience, not architecture search

## Significance

NCPs established that biological neural circuits can be directly transplanted into artificial control systems without abstraction into conventional neural network architectures. This opened the path to [Liquid Neural Networks](liquid-neural-networks.md), which generalize the continuous-time dynamics to larger networks, and to [BPUs](biological-processing-units.md), which scale the idea to full organism connectomes.

## Authors

Mathias Lechner, Ramin Hasani, Radu Grosu (TU Wien). Later expanded with Alexander Amini, Thomas Henzinger, and Daniela Rus. Nature Machine Intelligence 2020; arXiv:1803.08554.

## See Also

- [Liquid Neural Networks](liquid-neural-networks.md)
- [Closed-Form Continuous-Time Networks](closed-form-continuous-time.md)
- [Liquid-S4](liquid-s4.md)
- [Liquid Foundation Models (LFM2)](liquid-foundation-models.md)
- [Biological Processing Units](biological-processing-units.md)
- [Deep Connectomics Networks](deep-connectomics-networks.md)
- [Nematode Connectome Neural Networks](nematode-connectome-neural-networks.md)
- [C. elegans Olfactory Circuit ANN](celegans-olfactory-circuit-ann.md)
- [Liquid AI](../entities/liquid-ai.md)
