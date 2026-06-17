# Connectome-Inspired Neural Architectures Knowledge Base

> 48 articles compiled from 28 source papers + supplementary research. Last updated: 2026-06-17.

## Analysis

- [Honest Assessment](concepts/honest-assessment.md): Critical evaluation of the field. The strongest AI contribution is narrow: brain network statistics provide better-than-random sparsity patterns. The real value is in neuroscience: mechanistic understanding of neural computation, drug development, prosthetics, and comparative neuroscience.

## Concepts

- [Connectome](concepts/connectome.md): The complete map of neural connections in a nervous system. Complete wiring diagrams exist for C. elegans (302 neurons), Drosophila larva (~3,000), and adult Drosophila (~140,000 neurons, 50M synapses).
- [Connectome-Inspired Architectures](concepts/connectome-inspired-architectures.md): Neural network designs incorporating structural or dynamical principles from biological nervous systems. The core thesis: evolution produced wiring patterns with inherent computational advantages that hand-designed architectures lack.
- [Effectome](concepts/effectome.md): The map of causal effects between neurons, complementing the connectome's structural wiring diagram. Introduced by Pospisil et al. (Nature 2024) using the connectome as a Bayesian prior fitted with perturbation data.
- [Neuromorphic Computing](concepts/neuromorphic-computing.md): Brain-inspired hardware (Loihi 2, SpiNNaker, BrainScales) for simulating connectome-derived architectures. The FlyWire connectome runs on 12 Loihi 2 chips with orders-of-magnitude speedup over conventional simulation.
- [Brain-Inspired Transformer Efficiency](concepts/brain-inspired-transformer-efficiency.md): Applying connectome/brain-network principles (core-periphery, small-world, scale-free, preferential attachment) to make transformers sparse and efficient. Structured biological sparsity consistently outperforms random sparsity.
- [Biologically Plausible Learning](concepts/biologically-plausible-learning.md): Alternatives to backpropagation that respect biological constraints (no weight transport, no global error signals). Forward-Forward, counter-current learning, dendritic approaches, Hebbian/STDP. Critical frontier for training connectome architectures in biologically faithful ways.
- [Whole Brain Emulation](concepts/whole-brain-emulation.md): Scanning, mapping, and computationally simulating an entire biological brain. The 2025 State of Brain Emulation Report projects sub-1M-neuron organisms emulable within the decade at ~$100M cost.

## Methods

### Connectome-as-Architecture (topology directly embedded)

- [Biological Processing Units (BPUs)](methods/biological-processing-units.md): Drosophila larva connectome as fixed recurrent core. 3,000 neurons; 98% MNIST, 60% chess move accuracy with 10x fewer params than same-size transformers. (Vogelstein et al., AGI 2025)
- [Deep Connectomics Networks (DCNs)](methods/deep-connectomics-networks.md): C. elegans and mouse visual cortex connectomes as DNN wiring. Biological topology outperforms random graphs independent of parameter count. (Roberts et al., NeurIPS 2019)
- [FlyGM Whole-Brain Locomotion](methods/flygm-whole-brain-locomotion.md): Full adult Drosophila connectome (~140K neurons) as GNN for embodied locomotion control in MuJoCo. Functional segregation emerges from training. (Jin et al., NeurIPS 2025)
- [Nematode Connectome Neural Networks (NCNNs)](methods/nematode-connectome-neural-networks.md): C. elegans adjacency matrix as "connectome blocks" for CNN layers. First direct application of connectome to CNN architecture. (Su et al., Applied Soft Computing 2023)
- [Elegans-AI](methods/elegans-ai.md): C. elegans connectome as Transformer and reservoir architectures. 99.99% accuracy on CIFAR-10/100 with fewer parameters. (Bardozzo et al., Neurocomputing 2024)
- [C. elegans Olfactory Circuit ANN](methods/celegans-olfactory-circuit-ann.md): 11-neuron aversive olfactory learning circuit translated to ANN architecture. Outperforms parameter-matched ANNs on CIFAR-10/100. (Wang et al., Advanced Science 2025)
- [Connectome-Inspired NAS](methods/connectome-nas.md): NAS over biological circuit motifs from fly mushroom body and mammalian cortex. 10x attention parameter reduction with improved robustness. (Johnson et al., JHU/APL 2023)
- [Drosophila VNC Connectome](methods/drosophila-vnc-connectome.md): Complete adult female VNC (~14,600 neurons, ~45M synapses) and male MANC dataset. Completes the motor-control side of the fly nervous system. (Azevedo et al., Nature 2024; Marin et al., eLife 2024)
- [Why Connectome Wiring Beats Random Under High Sparsity](methods/connectome-wiring-sparsity.md): Drosophila-wired echo-state reservoirs vs sparsity-matched random controls on 8 tasks. Per-neuron task importance is narrow and tracks node degree/clustering/self-recurrency; the advantage is specific to high sparsity. (bioRxiv 2026)
- [BioNIC: Cortical-Column Classifier](methods/bionic-connectome-classifier.md): Feedforward net constrained by a single mouse-V1 cortical column from MICrONS plus Hebbian learning. 59.77% on FER-2013, comparable to unconstrained baselines. (Prasanth & Tivnan, arXiv 2026)

### Brain-Inspired Sparse Transformers

- [CP-ViT](methods/cp-vit-core-periphery.md): Core-periphery brain network topology applied to ViT self-attention. Sparse CP graph replaces dense O(n^2) attention; outperforms standard ViTs with interpretable core nodes. (Yu et al., arXiv 2023)
- [Cannistraci-Hebb Training](methods/cannistraci-hebb-training.md): Brain-network sparse initialization + topology-driven regrowth. Transformers at 5% connectivity match dense performance; MLPs at 1%. (Zhang, Cannistraci et al., NeurIPS 2025)
- [NeuroPrune](methods/neuroprune.md): Preferential attachment and redundant synapse pruning for LLMs. Up to 10x training speedup; competitive on GLUE, summarization, translation. (Dhurandhar et al., ACL 2024 Findings)
- [S²TDPT: Spiking STDP Transformer](methods/spiking-stdp-transformer.md): Self-attention realized as spike-timing-dependent plasticity, query-key correlations stored in synaptic weights. CIFAR-10 94.35%, CIFAR-100 78.08% at 4 timesteps; 88.47% energy reduction vs ANN transformer. (Mondal & Kumar, arXiv 2025)

### Biologically Plausible Learning Methods

- [Counter-Current Learning](methods/counter-current-learning.md): Anti-parallel dual networks inspired by biological counter-current exchange. Eliminates weight transport and backward locking. (Kao & Hariharan, NeurIPS 2024)
- [Dendritic ANNs](methods/dendritic-anns.md): Structured dendritic connectivity and restricted sampling beyond point-neuron models. Fewer parameters, more robust to overfitting. (Chavlis & Poirazi, Nature Comms 2025)
- [CH-SNN: Cannistraci-Hebb on Spiking Nets](methods/cannistraci-hebb-snn.md): Brings Cannistraci-Hebb topological regrowth to spiking neural networks via a four-stage dynamic sparse-training framework. Ultra-sparse structure across all linear layers; 6 datasets incl. CIFAR-10/100, spiking CNNs and Spikformer. (Hua, Cannistraci et al., arXiv 2025)

### Connectome-Inspired Dynamics

- [Liquid Neural Networks (LTCs)](methods/liquid-neural-networks.md): Continuous-time RNNs with input-dependent time-constants, inspired by C. elegans non-spiking dynamics. 19-neuron controller drives a car with 75K params. (Hasani et al., AAAI 2021)
- [Closed-Form Continuous-Time Networks (CfC)](methods/closed-form-continuous-time.md): Closed-form approximation of LTC dynamics eliminating ODE solvers. 1-5 orders of magnitude faster. Core technology behind Liquid AI. (Hasani et al., Nature Machine Intelligence 2022)
- [Neural Circuit Policies (NCPs)](methods/neural-circuit-policies.md): C. elegans tap-withdrawal circuit as RL policy network. 9 neurons match deep network performance; deployed on real rover robot. (Lechner et al., Nature Machine Intelligence 2020)

### Connectome-Constrained Models (fixed wiring, learned parameters)

- [Connectome-Constrained DMNs](methods/connectome-constrained-dmn.md): 734 free parameters predict neural activity across 64 cell types in Drosophila visual system, validated against 26 studies. (Lappalainen et al., Nature 2024)
- [Drosophila Computational Brain Model](methods/drosophila-computational-brain.md): LIF spiking network from full 140K-neuron FlyWire connectome. Runs on a laptop; predicts activation patterns from gustatory/mechanosensory stimulation. (Shiu et al., Nature 2024)
- [Connectome Reservoir Computing](methods/connectome-reservoir-computing.md): FlyWire connectome as echo-state reservoir for time-series prediction. More resilient to overfitting than standard reservoirs. (Biomimetics 2025)
- [conn2res Toolbox](methods/conn2res-toolbox.md): Open-source Python toolbox for using arbitrary connectomes as reservoir computing substrates. Supports spiking, rate-based, and memristive dynamics. (Suarez et al., Nature Comms 2024)
- [BrainTrace SNN Training](methods/braintrace-snn.md): Model-agnostic online SNN training with linear memory complexity. Scales to whole-brain Drosophila SNN; reproduces calcium imaging data. (Wang et al., Nature Comms 2026)
- [Zebrafish Connectome Models](methods/zebrafish-connectome-models.md): First vertebrate connectome-to-function prediction (brainstem wiring predicts eye-position coding) plus ZAPBench whole-brain benchmark (~70K neurons). (Vishwanathan et al., Nature Neurosci 2024; ICLR 2025)
- [Connectome-Constrained Theory](methods/connectome-constrained-theory.md): Mathematical framework for predicting neural activity in connectome-constrained recurrent networks. (Beiran & Litwin-Kumar, Nature Neuroscience 2025)

### Liquid AI Research Lineage

- [Liquid-S4](methods/liquid-s4.md): Liquid time-constant dynamics in structured state-space models. Input-dependent state transitions achieve 87.32% on Long-Range Arena (SOTA at publication). Bridge between LTC/CfC and S4/Mamba. (Hasani et al., ICLR 2023)
- [Liquid Foundation Models (LFM2)](methods/liquid-foundation-models.md): Production 350M-8.3B model family from Liquid AI. Hybrid gated convolutions + GQA; 2x CPU speedup vs comparable transformers. Commercialization endpoint of NCP->LTC->CfC->Liquid-S4 lineage. (Liquid AI, 2025)

### Neuromorphic and Foundation Models

- [Drosophila on Loihi 2](methods/drosophila-loihi2-neuromorphic.md): First whole-brain connectome on neuromorphic hardware. 140K neurons on 12 Intel Loihi 2 chips with orders-of-magnitude speedup. (Wang et al., Sandia, 2025)
- [Large Connectome Model](methods/large-connectome-model.md): 1.2B-parameter fMRI foundation model for human brain connectomes. Diagnoses autism, Parkinson's, Alzheimer's, schizophrenia. (Wei et al., AAAI 2026)
- [Sensing Whole-Brain Zebrafish Foundation Model](methods/zebrafish-foundation-model.md): Sparse-attention foundation model forecasting per-neuron spike probabilities at whole-brain single-neuron resolution; MAE <0.02. Behavior head enables gradient-based synthesis of activity that elicits target behaviors. (Fatehmanesh et al., arXiv 2025)
- [Mouse V1 Digital Twins: Latent Representations](methods/mouse-v1-digital-twin.md): Probes cortical digital twins past prediction accuracy. Equal-accuracy models diverge in internal representation; the most predictive show flatter eigenspectra matching biological V1. (Lima et al., arXiv 2026)

## Entities

- [C. elegans](entities/c-elegans.md): 302-neuron nematode; first complete connectome (1986). Foundation for NCPs, LTCs, DCNs, NCNNs, and Elegans-AI.
- [Drosophila melanogaster](entities/drosophila.md): Fruit fly. Larval brain provides the BPU core; adult brain (FlyWire) is the most complex fully mapped connectome.
- [FlyWire Consortium](entities/flywire-consortium.md): International collaboration that produced the adult Drosophila connectome (139K neurons, 54.5M synapses). 9-paper Nature package, Oct 2024.
- [MICrONS](entities/microns.md): IARPA-funded mouse visual cortex mapping (~200K cells, 500M synapses). 10-paper Nature package, Apr 2025. First mammalian-scale structural+functional connectome.
- [Joshua T. Vogelstein](entities/joshua-vogelstein.md): JHU professor and BPU project lead. Demonstrated unmodified connectomes as reusable substrates for intelligent computation.
- [Ramin Hasani](entities/ramin-hasani.md): MIT CSAIL researcher and Liquid AI co-founder. Co-invented LTCs, CfCs, and NCPs.
- [Liquid AI](entities/liquid-ai.md): Company commercializing liquid neural networks and brain-inspired architectures from MIT CSAIL research.

## Source Papers

| Paper | Authors | Venue | Year |
|-------|---------|-------|------|
| Biological Processing Units | Yu, Qin, Liu, Xu, Vogelstein et al. | AGI 2025 / arXiv:2507.10951 | 2025 |
| Deep Connectomics Networks | Roberts, Yap, Prabhu | NeurIPS 2019 / arXiv:1912.08986 | 2019 |
| Liquid Time-Constant Networks | Hasani, Lechner, Amini, Rus, Grosu | AAAI 2021 / arXiv:2006.04439 | 2020 |
| Closed-Form Continuous-Time Networks | Hasani, Lechner et al. | Nature MI 2022 / arXiv:2106.13898 | 2022 |
| Neuronal Circuit Policies | Lechner, Hasani, Grosu | Nature MI / arXiv:1803.08554 | 2018/2020 |
| Connectome-Constrained DMNs | Lappalainen, Tschopp et al. | Nature 634 / bioRxiv:2023.03.11.532232 | 2024 |
| Nematode Connectome Neural Networks | Su, Chen, Du, Liu, Jin | Applied Soft Computing 149 | 2023 |
| Elegans-AI | Bardozzo, Terlizzi et al. | Neurocomputing 584 | 2024 |
| FlyWire: Neuronal Wiring Diagram | Dorkenwald, Matsliah et al. | Nature 634:124-138 | 2024 |
| Effectome | Pospisil, Aragon, Bhatt, Pillow | Nature 634:201-209 | 2024 |
| Drosophila Computational Brain | Shiu, Zahid, Engert, Bhatt | Nature 634 | 2024 |
| FlyGM Whole-Brain Locomotion | Jin, Zhu, Zhang, Sui | NeurIPS 2025 / arXiv:2602.17997 | 2026 |
| Drosophila on Loihi 2 | Wang, Theilman et al. | arXiv:2508.16792 | 2025 |
| Connectome Reservoir Computing | Leal-Taixe et al. | Biomimetics 10(5):341 | 2025 |
| Connectome-Constrained Theory | Beiran, Litwin-Kumar | Nature Neuroscience 28:2561-2574 | 2025 |
| Large Connectome Model | Wei, Dan, Wu | AAAI 2026 / arXiv:2510.18910 | 2025 |
| CP-ViT | Yu, Zhang, Dai, Lyu et al. | arXiv:2303.15569 | 2023 |
| Cannistraci-Hebb Training | Zhang, Cerretti, Cannistraci et al. | NeurIPS 2025 / arXiv:2501.19107 | 2025 |
| NeuroPrune | Dhurandhar, Pedapati et al. | ACL 2024 Findings / arXiv:2404.01306 | 2024 |
| Liquid-S4 | Hasani, Lechner et al. | ICLR 2023 / arXiv:2209.12951 | 2022 |
| LFM2 | Liquid AI (Amini, Hasani et al.) | arXiv:2511.23404 | 2025 |
| conn2res Toolbox | Suarez, Bhatt, Misic et al. | Nature Comms / DOI:10.1038/s41467-024-44900-4 | 2024 |
| BrainTrace SNN Training | Wang, Dong, Ji et al. | Nature Comms / DOI:10.1038/s41467-026-68453-w | 2026 |
| Zebrafish Brainstem Connectome | Vishwanathan, Seung et al. | Nature Neurosci / DOI:10.1038/s41593-024-01784-3 | 2024 |
| ZAPBench | Google/Janelia/Harvard | ICLR 2025 / arXiv:2503.02618 | 2025 |
| C. elegans Olfactory Circuit ANN | Wang et al. | Advanced Science / DOI:10.1002/advs.202410637 | 2025 |
| Connectome-Inspired NAS | Johnson et al. (JHU/APL) | arXiv:2305.17300 | 2023 |
| Dendritic ANNs | Chavlis, Poirazi | Nature Comms / DOI:10.1038/s41467-025-56297-9 | 2025 |
| Counter-Current Learning | Kao, Hariharan | NeurIPS 2024 / arXiv:2409.19841 | 2024 |
| Drosophila Female VNC | Azevedo et al. | Nature / DOI:10.1038/s41586-024-07389-x | 2024 |
| Drosophila Male VNC (MANC) | Marin et al. | eLife | 2024 |
| State of Brain Emulation Report | Zhu, Schons et al. | arXiv:2510.15745 | 2025 |
| Connectome Wiring Under High Sparsity | (bioRxiv) | bioRxiv:2026.03.30.715411 | 2026 |
| Zebrafish Whole-Brain Foundation Model (SBM) | Fatehmanesh, Thomson, Gornet, Prober | arXiv:2510.27366 | 2025 |
| Mouse V1 Digital Twin Representations | Lima, Hou, Beyeler, Schneider | arXiv:2605.23122 | 2026 |
| S²TDPT Spiking STDP Transformer | Mondal, Kumar | arXiv:2511.14691 | 2025 |
| CH-SNN (Cannistraci-Hebb on SNNs) | Hua, Zhang, Cannistraci, Chen et al. | arXiv:2511.05581 | 2025 |
| BioNIC Connectome-Constrained Classifier | Prasanth, Tivnan | arXiv:2601.20876 | 2026 |
