# Ramin Hasani

> **Summary:** Ramin Hasani is a researcher at MIT CSAIL and co-founder of Liquid AI. He co-invented Liquid Time-Constant Networks and Neural Circuit Policies, demonstrating that neural architectures inspired by the C. elegans nervous system can achieve strong performance on control and time-series tasks with dramatically fewer parameters than conventional approaches.

**Sources:** [[raw/hasani_liquid_2020.md]], [[raw/lechner_ncp_2018.md]], general knowledge

---

## Affiliations

- **MIT CSAIL** (Massachusetts Institute of Technology, Computer Science and Artificial Intelligence Laboratory)
- **[Liquid AI](liquid-ai.md)**, co-founder
- Previously at **TU Wien** (Technische Universitat Wien), Cyber Physical Systems group

## Research Focus

Hasani's research centers on brain-inspired machine learning, continuous-time neural networks, and robotics. His work draws directly from the biophysics of small biological nervous systems, particularly [C. elegans](c-elegans.md), to design compact and interpretable artificial neural architectures.

## Key Collaborators

- **Mathias Lechner** (IST Austria / MIT): co-inventor of NCPs and LTCs; co-founder of Liquid AI
- **Daniela Rus** (MIT CSAIL): director of CSAIL; advisor and collaborator on liquid networks
- **Radu Grosu** (TU Wien): early collaborator on the neural circuit policy work

## Major Contributions

### Neural Circuit Policies (2018)

With Lechner and Grosu, Hasani repurposed the tap-withdrawal circuit of C. elegans (9 neuron classes) as a control policy for reinforcement learning tasks. The biological wiring topology was preserved; only synaptic parameters were optimized. The resulting [Neural Circuit Policies](../methods/neural-circuit-policies.md) solved standard RL benchmarks and transferred successfully from simulation to a real rover robot.

### Liquid Time-Constant Networks (2020)

Hasani introduced [Liquid Time-Constant Networks](../methods/liquid-neural-networks.md) (LTCs): continuous-time recurrent networks where a neural network function simultaneously determines both the hidden state derivative and an input-dependent time constant. The formulation is rooted in the biophysics of non-spiking neurons and synaptic transmission in C. elegans. LTCs exhibit provably bounded and stable dynamics, superior expressivity within the neural ODE family, and improved performance on time-series prediction tasks.

### 19-Neuron Self-Driving Controller

The most striking demonstration of this research program: a self-driving car controller using only 19 neurons, inspired by the C. elegans nervous system. This controller used tens of thousands of times fewer parameters than conventional deep learning approaches while maintaining competitive lane-keeping performance. The result concretely validated the thesis that biological neural circuit structure encodes powerful computational priors.

## Significance

Hasani's work, together with his collaborators, established the intellectual foundation for the broader connectome-inspired AI movement. The progression from Neural Circuit Policies to Liquid Time-Constant Networks to [Liquid AI](liquid-ai.md) as a company traces a direct path from biological observation to commercial AI technology. The [BPU project](../methods/biological-processing-units.md) at Johns Hopkins extends this line of thinking to larger connectomes ([Drosophila](drosophila.md)) and more complex cognitive tasks.

## See Also

- [Liquid Time-Constant Networks](../methods/liquid-neural-networks.md)
- [Neural Circuit Policies](../methods/neural-circuit-policies.md)
- [Liquid AI](liquid-ai.md)
- [C. elegans](c-elegans.md)
- [Biological Processing Units](../methods/biological-processing-units.md)
