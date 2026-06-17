# Connectome-Inspired Architectures

> **Summary:** Connectome-inspired architectures are neural network designs that incorporate structural or dynamical principles derived from biological nervous systems. The core thesis: millions of years of evolution produced wiring patterns with inherent computational advantages that hand-designed architectures lack. This field spans a spectrum from directly embedding biological wiring diagrams as network topology to using biologically derived differential equations for neuron dynamics.

**Sources:** [[raw/vogelstein_bpu_2025.md]], [[raw/roberts_dcn_2019.md]], [[raw/lappalainen_connectome_2023.md]], [[raw/lechner_ncp_2018.md]], [[raw/hasani_liquid_2020.md]]

---

## The Core Idea

Artificial neural networks since AlexNet (2012) have been designed by humans or discovered via automated search. In either case, the architectures bear little topological resemblance to biological neural circuits. Convolutional layers were inspired by receptive fields in cat visual cortex, but the overall connectivity patterns of deep learning models (feedforward stacks, residual connections, attention heads) were engineered for hardware efficiency and gradient flow, not derived from neuroscience.

Biological nervous systems face the same computational challenges that artificial networks aim to solve: pattern recognition, temporal sequence processing, motor control, planning. Evolution has spent hundreds of millions of years optimizing neural wiring for these tasks under severe constraints (energy, space, noise, reliability). [Connectomes](connectome.md) capture the result of this optimization.

The hypothesis motivating this field: biological wiring patterns encode structural priors that are computationally useful, even when extracted from their biological context and applied to artificial tasks. Evidence supporting this hypothesis comes from multiple independent research groups, using different organisms, different connectome regions, and different task domains.

## Three Approaches

### 1. Connectome Topology as Network Architecture

These methods take the adjacency matrix of a biological connectome and use it directly as the wiring diagram for an artificial neural network. Individual neuron dynamics are standard (ReLU, sigmoid); only the connectivity pattern is biological.

**[Deep Connectomics Networks (DCN)](../methods/deep-connectomics-networks.md)** (Roberts et al., 2019). The first work to systematically test biological connectome topologies as deep learning architectures. The [*C. elegans*](../entities/c-elegans.md) neuronal network and the mouse visual cortex connectivity graph were converted to directed acyclic graphs and used as the wiring pattern for image classification networks. Key finding: biological topologies outperformed both graph-free baselines and Watts-Strogatz small-world networks. Freezing the graph parameters (removing the parameter-count advantage) preserved the biological topology's advantage over random graphs, demonstrating that the topology itself, not just additional parameters, drives the improvement.

**[Biological Processing Units (BPU)](../methods/biological-processing-units.md)** (Vogelstein et al., 2025). The most direct test of the "connectome as computational substrate" hypothesis. The entire larval [*Drosophila*](../entities/drosophila.md) connectome (3,000 neurons, 65,000 connections) is embedded as a fixed-weight recurrent core. Synaptic weights come directly from electron microscopy reconstructions, with neurotransmitter-based polarity annotations. Only input and output projections are trainable. Results:
- 98% MNIST accuracy (vs. 97% for size-matched MLP with random fixed weights)
- 58% CIFAR-10 accuracy (vs. 52% for MLP)
- Chess: GNN-BPU with 233K trainable parameters achieves 60% move accuracy on 10K games, nearly 10x better than any size-matched transformer
- CNN-BPU (~2M parameters) with depth-6 minimax search reaches 91.7% puzzle accuracy, surpassing a 9M-parameter transformer

The BPU also introduced structured connectome expansion via a directed, signed degree-corrected stochastic block model (DCSBM), which scales the connectome while preserving its block-level wiring statistics. CIFAR-10 accuracy increases monotonically with expansion factor.

### 2. Connectome-Inspired Dynamics

These methods focus on the temporal dynamics of biological neurons and synapses rather than (or in addition to) network topology. They derive differential equation models from the biophysics of neural computation.

**[Neuronal Circuit Policies (NCP)](../methods/neural-circuit-policies.md)** (Lechner & Hasani, 2018). The tap-withdrawal neural circuit of *C. elegans* (9 neuron classes, modeled with biophysically grounded membrane equations and chemical/electrical synapse models) is repurposed as a reinforcement learning controller. Despite containing only 19 neurons, the circuit solves inverted pendulum, mountain car, cart-pole, and autonomous parking tasks. Neuron dynamics follow the single-compartment membrane equation; synapses use conductance-based models with reversal potentials. The wiring topology is fixed to the biological TW circuit; only synaptic and neuronal parameters are optimized.

**[Liquid Time-Constant Networks (LTC)](../methods/liquid-neural-networks.md)** (Hasani et al., 2020). A generalization of the NCP neuron model into a scalable recurrent neural network architecture. LTCs are continuous-time RNNs whose time constants vary as a function of input, derived from the biophysics of non-spiking neurons and synaptic transmission in *C. elegans*. Key properties: bounded and stable dynamics, superior expressivity within the neural ODE family (measured by trajectory length in latent space), and improved performance on time-series prediction tasks. LTCs have been applied to autonomous driving: a 19-neuron LTC network with NCP wiring successfully steers a car using camera input.

### 3. Connectome Constraints with Learned Parameters

These methods fix the connectivity to match a biological connectome but treat all other parameters (synapse strengths, neuron time constants, resting potentials) as unknowns to be learned.

**[Connectome-Constrained Deep Mechanistic Networks (DMN)](../methods/connectome-constrained-dmn.md)** (Lappalainen et al., 2023). A recurrent neural network for the *Drosophila* visual system in which every neuron corresponds to an identified biological cell type and every connection matches the experimentally measured connectome. The network contains 45,669 neurons and 1,513,231 connections across 64 cell types, but the assumption of cell-type homogeneity and spatial periodicity reduces the free parameters to just 734. These parameters are optimized via gradient descent on the task of computing optic flow from naturalistic video. The result: model predictions match experimental measurements of neural selectivity across 24 published studies, predicting ON/OFF channel segregation (31/31 cell types correct) and direction selectivity of T4/T5 motion detector neurons. The model also makes novel predictions (TmY3 as a motion-selective neuron) that can be tested experimentally.

A critical insight from the DMN work: the approach succeeds in part because biological neural networks are sparsely connected. Sparse connectivity dramatically reduces the parameter space that must be searched, making task-constrained optimization tractable even for large networks.

## Key Results Summary

| Method | Organism | Neurons | Task | Result |
|--------|----------|---------|------|--------|
| BPU | Drosophila larva | 3,000 | MNIST | 98% accuracy |
| BPU | Drosophila larva | 3,000 | CIFAR-10 | 58% accuracy |
| BPU | Drosophila larva | 3,000 | Chess puzzles | 91.7% (with search) |
| DCN | C. elegans | 297 | MNIST | 99% accuracy |
| DCN | Mouse visual cortex | 195 | MNIST | 99.3% accuracy |
| NCP | C. elegans (TW circuit) | 19 | RL control tasks | Matches deep RL baselines |
| LTC | Inspired by C. elegans | 19 | Autonomous driving | Functional lane-keeping |
| DMN | Drosophila visual system | 45,669 | Optic flow | Predicts activity across 24 studies |

## Comparison with Neural Architecture Search

Neural architecture search (NAS) automates the process of designing network topologies by searching a defined architecture space using reinforcement learning, evolutionary algorithms, or gradient-based methods. Connectome-inspired architectures represent a fundamentally different approach:

- **NAS** searches over a space of human-defined primitives (convolution, pooling, skip connections) to find optimal combinations for a given task and compute budget. The search is task-specific and starts from scratch.
- **Connectome architectures** provide a fixed topology derived from a biological system. The topology was "searched" by evolution over millions of years, optimizing for general-purpose computation under biological constraints (energy, space, noise tolerance).
- **Hand-designed architectures** (ResNet, Transformer, etc.) represent expert intuition encoded as inductive biases.

Connectome-inspired architectures can be viewed as a third paradigm: neither hand-designed nor machine-searched, but biologically inherited. The BPU result is particularly striking because the biological wiring was never optimized for any of the artificial tasks it was tested on, yet it outperformed size-matched alternatives that were free to learn their own connectivity patterns.

## Open Directions

**Scaling to mammalian connectomes.** The larval *Drosophila* connectome has 3,000 neurons. The adult *Drosophila* has ~140,000. The mouse brain has ~70 million. Can connectome-inspired approaches scale, and do larger connectomes yield proportionally better performance? The BPU's DCSBM expansion results suggest that larger biological topologies do improve performance, but this has only been tested with statistical replicas, not actual larger connectomes.

**Neuromorphic hardware.** Biological neural circuits operate with spiking dynamics, low power consumption, and event-driven computation. Neuromorphic chips (Intel Loihi, IBM TrueNorth, SpiNNaker) are designed to emulate these properties. Mapping connectome-derived architectures onto neuromorphic hardware is a natural next step, potentially unlocking the energy efficiency advantages that biological brains exhibit.

**Theoretical understanding.** Why does biological wiring outperform random or hand-designed topologies? Candidate explanations include: small-world topology enabling efficient information routing, modular structure supporting functional specialization, specific motif distributions (feedback loops, recurrent clusters) that enable temporal integration, and evolutionary optimization for robustness under noise. Formal analysis of these structural properties remains limited.

**Cross-species transfer.** Can structural principles extracted from one species' connectome improve architectures applied to tasks that species never encountered? The BPU result (a fruit fly larva brain solving chess puzzles) suggests the answer is yes, but the mechanism is not understood.

**Combining approaches.** The three approaches described above are not mutually exclusive. A system could use connectome topology (BPU-style), biophysically inspired dynamics (LTC-style), and learned parameters (DMN-style) simultaneously. No published work has attempted this full integration.

## See Also
- [Connectome](connectome.md)
- [Brain-Inspired Transformer Efficiency](brain-inspired-transformer-efficiency.md)
- [Biologically Plausible Learning](biologically-plausible-learning.md)
- [Whole Brain Emulation](whole-brain-emulation.md)
- [Biological Processing Units](../methods/biological-processing-units.md)
- [Deep Connectomics Networks](../methods/deep-connectomics-networks.md)
- [Deep Mechanistic Networks](../methods/connectome-constrained-dmn.md)
- [Liquid Time-Constant Networks](../methods/liquid-neural-networks.md)
- [Neuronal Circuit Policies](../methods/neural-circuit-policies.md)
- [CP-ViT](../methods/cp-vit-core-periphery.md)
- [Cannistraci-Hebb Training](../methods/cannistraci-hebb-training.md)
- [Large Connectome Model](../methods/large-connectome-model.md)
- [NeuroPrune](../methods/neuroprune.md)
- [conn2res Toolbox](../methods/conn2res-toolbox.md)
- [Connectome-Inspired NAS](../methods/connectome-nas.md)
- [Zebrafish Connectome Models](../methods/zebrafish-connectome-models.md)
- [Dendritic ANNs](../methods/dendritic-anns.md)
