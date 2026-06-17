# Liquid Neural Networks (Liquid Time-Constant Networks)

> **Summary:** Liquid Time-Constant (LTC) Networks are continuous-time RNNs in which networks of linear first-order dynamical systems are modulated via nonlinear interlinked gates. The neural network f serves simultaneously as the state derivative and as an input-dependent varying time-constant, producing "liquid" dynamics that are stable, bounded, and highly expressive within the neural ODE family. The approach draws biological inspiration from non-spiking neural dynamics in small organisms, particularly [*C. elegans*](../entities/c-elegans.md).

**Sources:** [[raw/hasani_liquid_2020.md]]

---

## Core Formulation

In standard neural ODEs, a network learns a continuous vector field governing hidden state evolution. LTC networks modify this by coupling the time-constant of each neuron to the hidden state and input:

- The same function f that determines the state derivative also governs the time-constant
- This creates input-dependent temporal dynamics: the network's effective speed of response varies with the signal it processes
- The formulation mirrors single-compartment membrane equations with conductance-based synaptic transmission

A fused ODE solver combining implicit and explicit Euler methods provides computational efficiency during both training and inference.

## Biological Inspiration

LTC dynamics are loosely related to computational models of non-spiking neural activity in small species. *C. elegans* neurons communicate primarily through graded potentials rather than action potentials; LTC networks capture this electrotonic regime. The state equations parallel membrane voltage dynamics with synaptic conductance terms, giving the model a biophysical interpretation absent from standard RNNs.

## Key Properties

- **Stability and boundedness:** proven stable dynamics, unlike many neural ODE variants
- **Superior expressivity:** formally more expressive than other neural ODE architectures within the same family
- **Liquid time-constants:** each neuron's temporal integration window is coupled to its hidden state and inputs, enabling adaptive computation speed

## Practical Demonstration

MIT researchers built a self-driving car controller using only 19 neurons and 75,000 parameters, tens of thousands of times fewer than conventional deep learning approaches. This controller was based on the [Neural Circuit Policies](neural-circuit-policies.md) work and demonstrated that biologically inspired compact architectures can handle real-world continuous control.

## Liquid AI

Ramin Hasani and Mathias Lechner founded Liquid AI to commercialize LTC networks and related biologically inspired architectures. The company develops compact, efficient models for edge deployment and safety-critical applications.

## Authors

Ramin Hasani, Mathias Lechner, Alexander Amini, Daniela Rus (MIT); Radu Grosu (TU Wien). AAAI 2021; arXiv:2006.04439.

## See Also

- [Neural Circuit Policies](neural-circuit-policies.md)
- [Closed-Form Continuous-Time Networks](closed-form-continuous-time.md)
- [Liquid-S4](liquid-s4.md)
- [Liquid Foundation Models (LFM2)](liquid-foundation-models.md)
- [Brain-Inspired Transformer Efficiency](../concepts/brain-inspired-transformer-efficiency.md)
- [Biological Processing Units](biological-processing-units.md)
- [Connectome-Constrained Deep Mechanistic Networks](connectome-constrained-dmn.md)
- [Liquid AI](../entities/liquid-ai.md)
