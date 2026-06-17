# **Whole-Brain Connectomic Graph Model Enables Whole-Body Locomotion Control in Fruit Fly** 

**Zehao Jin**[1] **Yaoye Zhu**[1] **Chen Zhang**[1] **Yanan Sui**[1] 

## **Abstract** 

Whole-brain biological neural networks naturally support the learning and control of whole-body movements. However, the use of brain connectomes as neural network controllers in embodied reinforcement learning remains unexplored. We investigate using the exact neural architecture of an adult fruit fly’s brain for the control of its body movement. We develop Fly-connectomic Graph Model (FlyGM), whose static structure is identical to the complete connectome of an adult Drosophila for whole-body locomotion control. To perform dynamical control, FlyGM represents the static connectome as a directed messagepassing graph to impose a biologically grounded information flow from sensory inputs to motor outputs. Integrated with a biomechanical fruit fly model, our method achieves stable control across diverse locomotion tasks without task-specific architectural tuning. To verify the structural advantages of the connectome-based model, we compare it against a degree-preserving rewired graph, a random graph, and multilayer perceptrons, showing that FlyGM yields higher sample efficiency and superior performance. This work demonstrates that static brain connectomes can be transformed to instantiate effective neural policy for embodied learning of movement control. 

## **1. Introduction** 

Understanding the embodied learning of movement control is a long-standing challenge shared by artificial intelligence and neuroscience. Recent advances in neuroscience have revealed whole-brain connectomics in animals at synaptic resolution (Dorkenwald et al., 2024). These resources enable the possibility of linking complete brain structure to the sensorimotor control of a physical body. 

Advances in deep reinforcement learning present neural net- 

> 1Tsinghua University. Correspondence to: Yanan Sui 

> _<_ ysui@tsinghua.edu.cn _>_ . 

work controllers that can accomplish challenging movement tasks. However, these methods typically use hand-crafted networks (e.g. multilayer perceptrons). While effective for specific tasks, such neural architectures diverge significantly from biological circuits, limiting the interpretability of the learned computations and making it difficult to relate them to real nervous systems. Connectome-constrained models have provided insights into sensory and premotor computations (Azevedo et al., 2024), yet most efforts remain limited to specific subsystems and simplified behaviors. Thus the fundamental challenge remains: how can static connectomes be transformed into dynamic, functional models that reproduce the intricate and adaptive motor behaviors of bodies? Answering this question requires bridging two active lines of research: (i) mechanistic modeling that leverages wholebrain connectivity, and (ii) learning frameworks that can control high-dimensional whole-body movements. 

In this work, we develop the Fly-connectomic Graph Model (FlyGM), a neural controller whose computational architecture is directly inherited from the Drosophila whole-brain connectome. Without further neural architecture search or optimization, we use the connectome as a directed messagepassing graph, partitioning nodes into afferent, intrinsic, and efferent sets to reflect biological information flow. By integrating this connectome-grounded policy with a physicsbased fruit fly model, we demonstrate that the wiring of the fly brain provides a powerful structural inductive bias in embodied reinforcement learning. 

Our experiments show that FlyGM achieves stable control across multiple locomotion tasks, including gait initiation, walking, turning, and flight. We verify the significance of this structural prior by comparing FlyGM against a degreepreserving rewired graph, a random graph, and multilayer perceptrons (MLP). Our results reveal that the new method yields significantly higher sample efficiency and lower error, suggesting that the connectome’s organization is nonrandomly optimized for the constraints of a physical body. 

Beyond behavioral performance, we analyze the internal representations of FlyGM. We find that functional segregation across sensory, central, and motor populations emerges naturally from the trained dynamics. This differentiation occurs solely due to the structural constraints of the graph, 

1 

**Whole-Brain Connectomic Graph Model Enables Whole-Body Control** 

**==> picture [439 x 113] intentionally omitted <==**

_Figure 1._ **Overview of the FlyGM-enabled whole-body locomotion control framework.** Observations are mapped to afferent neuron states via a lightweight input projection. Neural states are propagated through a connectome-constrained message-passing module, and the resulting efferent states are decoded into motor actions that drive the embodied Drosophila model in MuJoCo. Demonstration videos and source code is available at: https://lnsgroup.cc/research/FlyGM. 

providing evidence that biological wiring diagrams can induce functional specialization in artificial agents. 

Our main contributions are summarized below: 

**Connectome-Structured Architecture** : FlyGM is a graph neural controller instantiated from the whole-brain Drosophila connectome, transforming static biological wiring into a dynamic controller. 

**Diverse Embodied Locomotion** : FlyGM enables wholebody biomechanical control across diverse tasks in highfidelity physics simulations. 

**Evidence of Structural Inductive Bias** : The biological connectome yields higher sample efficiency and performance compared to baseline models. 

ulated humanoids (Kumar et al., 2021; Cheng et al., 2024), quadrupeds (Ding et al., 2021), and musculoskeletal agents (He et al., 2024; Wei et al., 2025) using reinforcement learning. In the Drosophila domain, physics-based models such as NeuroMechFly (Lobato-Rios et al., 2022; WangChen et al., 2024) and flybody (Vaxenburg et al., 2025) have enabled detailed simulations of walking and flight in MuJoCo (Todorov et al., 2012). Yet, controllers for these systems are typically built from generic MLPs or manually designed central pattern generators, lacking direct biological grounding. This limits both interpretability and the ability to connect neural structure to behavior. Our work differs by directly embedding the connectome into the controller architecture, combining embodied simulation with structural priors to study both performance and neural representation. 

## **2. Related Work** 

## **3. Method** 

**Connectomics-based neural network modeling.** Advances in connectomics have deepened our understanding of circuit-level organization in central nervous systems of animal models. In particular, the FlyWire project provides a whole-brain reconstruction of Drosophila at synaptic resolution, offering the structural basis for modeling complete neural dynamics (Dorkenwald et al., 2024; Schlegel et al., 2024; Zheng et al., 2018). Prior works have highlighted the explanatory power of such data in restricted domains: ventral nerve cord reconstructions revealed leg–wing coordination circuits (Azevedo et al., 2024; Lesser et al., 2024), and models of motor neurons have been applied to feeding or grooming behaviors (Shiu et al., 2024). Connectomeconstrained networks have also been used to predict neural activity in the visual system (Lappalainen et al., 2024). However, these approaches often focus on specific subsystems or tasks, leaving open the question whether whole-brain connectivity can generate realistic control of embodied locomotion behaviors. 

**Embodied movement control.** In parallel, embodied intelligence research has advanced locomotion in sim- 

## **3.1. Connectome-structured Graph Model** 

We consider the problem of embodied sensorimotor control for a virtual fruit fly agent interacting with a physics-based environment provided by flybody. Let the state at time step _t_ be denoted by _st ∈S_ . The agent receives an observation _xt ∈_ R _[d]_[in] , which corresponds to a set of processed features including proprioceptive and exteroceptive signals during movement and environmental interaction. Based on this input, the neural controller produces an action _at ∈_ R _[d]_[out] , representing motor outputs that drive the flybody model to perform locomotion behaviors. 

We represent the Drosophila connectome as a directed synapse graph _G_ = ( _V, E_ ), where nodes _V_ denote neurons and edges _E_ represent synaptic connections. Following the linear-dynamical connectome modeling perspective in “effectome” (Pospisil et al., 2024), the synaptic weight matrix _W ∈_ R _[|][V][ |×|][V][ |]_ acts as a fixed, recurrent state-transition operator that dictates the information flow through the network. 

To ground the model’s latent dynamics in biological reality, 

2 

**Whole-Brain Connectomic Graph Model Enables Whole-Body Control** 

**==> picture [439 x 189] intentionally omitted <==**

_Figure 2._ **Structure of the Fly-connectomic Graph. (a)** Aggregated synapse graph of the fly connectome, grouped into afferent (blue), intrinsic (green), and efferent (orange) sets across left hemibrain, central, and right hemibrain compartments. Node sizes reflect the number of neurons in each group, and arrows indicate the direction and relative strength of connectivity. **(b)** Force-directed graph layout (Kobourov, 2012) of the same neural network. The spatial layout reveals hemispheric symmetry and functional clustering. 

we refine the synaptic weights by incorporating the functional polarity of presynaptic neurons. Based on established Drosophila cell type annotations, we categorize major neurotransmitters into two functional sets: 

- **Excitatory (** _S_ **exc):** Acetylcholine (ACH), Glutamate (GLU), Aspartate (ASP), and Histamine (HIS). 

- **Inhibitory (** _S_ **inh):** _γ_ -aminobutyric acid (GABA) and Glycine (GLY). 

Following this categorization, the signed strength _Wvu_ for a directed edge from neuron _u_ to _v_ is defined as the net polarized synaptic count: 

**==> picture [182 x 11] intentionally omitted <==**

where _N_ exc and _N_ inh are the total synapse counts associated with excitatory and inhibitory neurotransmitters, respectively. This signed weighting scheme ensures that the message-passing operation _Mt_ = _WHt_ respects the sign-preserving or sign-reversing nature of biological signal propagation, consistent with the methodology proposed by Pospisil et al. (2024). 

Following FlyWire’s classification of flow types, we partition neurons into three disjoint sets: 

   - **Afferent neurons** : _Va ⊂ V_ , which receive external sensory inputs, 

   - **Intrinsic neurons** : _Vi ⊂ V_ , which mediate signals within the network, and 

   - **Efferent neurons** : _Ve ⊂ V_ , which produce motor outputs to the body model. 

- Thus, _V_ = _Va ∪ Vi ∪ Ve_ with _Va ∩ Vi ∩ Ve_ = _∅_ . Each neuron _v ∈ V_ is associated with a latent state vector _hv,t ∈_ R _[C]_ , 

and we collect all neuron states at time _t_ as a matrix: 

**==> picture [173 x 45] intentionally omitted <==**

Beyond the shared synaptic operator _W_ , we assign each neuron a trainable intrinsic descriptor _ηv ∈_ R _[D]_ to capture cell-specific computational properties (e.g., excitability and gain) that are not included in the connectomic data. The matrix stacking all intrinsic descriptors is represented as _η ∈_ R _[|][V][ |×][D]_ . 

At each time step, sensory observation _xt_ is first encoded by an encoder Enc _θ_ and injected into afferent neurons via a gating map: 

**==> picture [188 x 12] intentionally omitted <==**

**==> picture [207 x 14] intentionally omitted <==**

where **1** _x_ ˜ _[⊤] t_[propagates][the][encoded][observation][to][all][af-] ferent neurons. The encoder Enc _θ_ compresses the highdimensional observation _xt_ into a low-dimensional representation (e.g., _d_ enc = 32) before projecting to _Va_ , avoiding expensive per-neuron encoding and allowing the connectomeconditioned recurrent dynamics to carry out most of the computation. 

Given the current network state _Ht_ , we compute synaptic aggregation by applying connectome-derived synaptic weights as a linear operator: 

**==> picture [167 x 12] intentionally omitted <==**

so that each neuron receives the weighted sum of its presynaptic partners’ states. 

3 

**Whole-Brain Connectomic Graph Model Enables Whole-Body Control** 

**Algorithm 1** Fly-connectomic Graph Model (FlyGM) 

|**Alg**|**orithm 1**Fly-connectomic Graph Model (FlyGM)|
|---|---|
|1:|**Input:** Sensory input_xt_; connectome_G_= (_V, E_)with<br>synapse weight matrix _W_; node partitions _Va, Vi, Ve_;<br>encoder Enc_θ_; afferent gate (_Wg, bg_); neuron intrin-<br>sic descriptors_{ηv}v∈V_; conditional update MLP_fψ_;<br>decoderDec_ϕ_|
|2:|**Output:** Motor output_at_|
|3: <br>4:<br>5:|**for**each time step_t_**do**<br>˜_xt ←_Enc_θ_(_xt_)<br>_Ht_[_Va_]_←_tanh<br>�<br>_Wg_[_Ht_[_Va_]_,_**1**˜_x⊤_<br>_t_ ] +_bg_<br>�|
|6:|_Mt ←WHt_|
|7:|_Ht_+1[_v_]_←fψ_([_Mt_[_v_]_, ηv_])<br>_∀v ∈V_|
|8:|_at ←_Dec_ϕ_(_Ht_+1[_Ve_])|
|9:<br>10:|Apply_at_to Flybody in MuJoCo to obtain_xt_+1<br> **end for**|



We then update each neuron state through a shared MLP _fψ_ conditioned on the neuron’s intrinsic descriptor: 

**==> picture [199 x 12] intentionally omitted <==**

Equivalently, this can be viewed as a conditional state transition _p_ ( _Ht_ +1 _| Mt, η_ ) where _Mt_ provides the synaptically aggregated evidence and _η_ supplies neuron-specific conditions that modulate how the evidence updates the state. In this sense, the connectome defines the topology and strength of information flow, while per-neuron trainable parameters determine how each neuron transforms and gates the incoming synaptic drive. 

The updated efferent states _Ht_ +1[ _Ve_ ] are flattened and mapped to continuous motor actions by a decoder Dec _ϕ_ : 

**==> picture [165 x 13] intentionally omitted <==**

The output actions serve as motor commands to actuate the flybody, a biomechanical model of the fruit fly implemented in MuJoCo (Vaxenburg et al., 2025). Subsequent observation _xt_ +1 is then generated to close the sensorimotor loop. 

In summary, Algorithm 1 outlines the forward computation of FlyGM: observation injection into afferent neurons, synapse-weighted aggregation via the connectome operator, neuron-wise conditional updates using intrinsic descriptors, and efferent decoding into motor actions. 

## **3.2. Training Pipeline** 

Our training pipeline consisted of two stages: first, we initialized the connectome-based policy using imitation learning from expert trajectories, and secondly we fine-tuned the model with reinforcement learning to directly optimize for task rewards. This two-stage design leveraged demonstration data for rapid initialization while preserving the capability for adaptive policy improvement. 

To provide an initial policy, we collected expert trajectories by rolling out an MLP-based policy for the flybody which was originally trained with imitation learning to generate high-quality demonstrations of locomotion. We used these trajectories to train our connectome-based model by imitating the expert’s action distributions. 

Specifically, the policy predicted Gaussian parameters ( _µs, σs_ ) given the same observations as the expert, and was optimized to minimize a loss combining Kullback–Leibler divergence with an annealed mean squared error (MSE) regularizer: 

**==> picture [227 x 35] intentionally omitted <==**

where _α_ is a constant to balance the scale of _µs_ and log _σs_ , and _λ_ ( _t_ ) decreases during training so that distributional matching dominates in later stages. This procedure initialized the model with stable behaviors for walking and flight tasks. 

After initialization, we fine-tuned the connectomestructured policy using Proximal Policy Optimization (PPO) to enable direct learning from rewards. For value estimation, we used a simple MLP as the value network. The environments in MuJoCo were adapted into gym-like interfaces with parallel rollouts to increase throughput, and distributed training with Distributed Data Parallel (DDP) was used for scalability. The policy was updated following the clipped surrogate objective with value and entropy regularization: 

**==> picture [229 x 50] intentionally omitted <==**

where _rt_ ( _θ_ ) = _ππθθ_ old( _a_ ( _at|ts|st_ ) _t_ )[is the probability ratio between] new and old policies, _A_[ˆ] _t_ is the GAE advantage, _Rt_ is the return, and _H_ is the entropy bonus. This stage allowed the model to improve beyond demonstration data and adapt to task-specific dynamics while retaining the inductive bias imposed by the connectome architecture. 

## **4. Experiments** 

We evaluated FlyGM on four locomotor tasks with the flybody physics simulator (Vaxenburg et al., 2025), comprising three terrestrial tasks (gait initiation, straight walking, and turning) and one flight task. These tasks are categorized into two primary behavioral domains (walking and flying) for which flybody provided distinct pre-trained MLP controllers and real-world Drosophila motion capture datasets. We followed the default flybody environment setup and added binocular visual signals to the original sensory inputs 

4 

**Whole-Brain Connectomic Graph Model Enables Whole-Body Control** 

for walking tasks to provide multimodal feedback (proprioception, mechanosensation, and vision). 

To support the imitation learning stage, we constructed a domain-specific behavioral dataset by performing rollouts of the corresponding pretrained models across their respective biological trajectories. We filtered these rollouts to include only successful episodes exceeding 100 steps, resulting in a comprehensive dataset of synchronized observationaction time series. This curated dataset captures the highfidelity, naturalistic motor patterns necessary to test whether a connectome-structured network can flexibly generate stable control policies across distinct movement modes. 

Detailed training procedures and hyperparameters are provided in Appendix A, and observation/action definitions are provided in Appendix B. Demonstration videos for each task are available on our project webpage. 

## **4.1. Inductive Bias from Connectome Topology** 

To evaluate whether the biological connectome provides a structural inductive bias beyond mere parameter count, we compared the **Connectome** topology against three distinct baselines while maintaining an identical reinforcement learning pipeline. We first considered two graph-based variants: (i) an **Erdos–R˝ enyi´ random graph** with the same number of nodes and edges as the biological connectome, and (ii) a **degree-preserving rewiring graph** generated by randomly shuffling the edges of the connectome while strictly maintaining the in-degree and out-degree of each individual neuron. Additionally, we implemented a **MLP** baseline that retains the same input encoder but replaces the connectome-conditioned graph computation with a standard feed-forward architecture. By comparing the performance of the biological connectome against these non-connectome models, we could isolate the specific contribution of the evolved brain wiring to the efficiency and stability of embodied locomotion control. 

In our experimental setup for the graph-based nonconnectome models, all edges were treated as unweighted with unit strength. This assumption was reasonable since the integrity was preserved through trainable intrinsic node descriptors, and the injective sum aggregation was sufficient to capture structural properties without additional weighting (Xu et al., 2019). 

To ensure a rigorous comparison, we set a consistent dimensionality of 32 for all components, including the encoder output dimension, the latent channel dimension _C_ , and the intrinsic descriptor dimension _D_ . For the MLP baseline, the model followed the same encoder but replaced the graph computation with two fully-connected layers, each with a hidden dimension of 512. 

We focused our evaluation on the imitation learning stage, 

**==> picture [235 x 290] intentionally omitted <==**

_Figure 3._ Learning efficiency and metrics across different graph topologies and architectures. (a) Total training loss; (b) mean squared error of action means ( _µ_ MSE), and (c) mean squared error of action log-standard deviations ( _σ_ MSE) during the imitation learning stage. Shaded areas represent the standard deviation across multiple training runs. ER-Random: Erdos–R˝ enyi random´ graph; Rewired: degree-preserving rewired graph; MLP: multilayer perceptron. 

which provided a stable environment to assess the structural advantages of the network from scratch. As illustrated in Figure 3, we compare the training dynamics across three key metrics: (1) Total training loss (Fig. 3a), which serves as a proxy for sample efficiency; and the Mean Squared Error (MSE) of the action (2) means ( _µ_ , Fig. 3b) and (3) standard deviations ( _σ_ , Fig. 3c) relative to the expert trajectories, reflecting the fidelity of trajectory tracking. 

Our results demonstrate that the biological connectomebased architecture consistently outperforms all other graph topologies across all metrics. Notably, the connectome exhibits a markedly superior sample efficiency, converging faster and getting lower MSE than the non-connectome models. This performance gap suggests that the specific wiring of the fruit fly brain provides a meaningful inductive bias tailored for embodied locomotion. 

Table 1 quantifies the control performance across varying command configurations, with linear speed measured in cm/s and yaw rate in rad/s. As task complexity increases, the structural advantages of the biological connectome be- 

5 

**Whole-Brain Connectomic Graph Model Enables Whole-Body Control** 

|**Model**|**speed=2, yaw=0**|**speed=3, yaw=0**|**speed=3, yaw=4**|**speed=3, yaw=7**|
|---|---|---|---|---|
|**Connectome-Based FlyGM**|||||
|Pos Err_↓_|0_._0280_±_0_._001|**0****_._0364****_±_ 0****_._001**|0_._0327_±_0_._001|**0****_._0364****_±_ 0****_._002**|
|Angle Err_↓_|**4****_._96****_±_ 0****_._09**|**5****_._57****_±_ 0****_._06**|**6****_._36****_±_ 0****_._33**|**8****_._29****_±_ 0****_._21**|
|**Degree-Preserving Rewiring Graph**|||||
|Pos Err_↓_|**0****_._0272****_±_ 0****_._001**|0_._0385_±_0_._000|**0****_._0310****_±_ 0****_._000**|0_._0370_±_0_._002|
|Angle Err_↓_|7_._84_±_0_._08|7_._77_±_0_._08|9_._72_±_0_._12|13_._55_±_0_._69|
|**Erd˝os–R´enyi Random Graph**|||||
|Pos Err_↓_|0_._0449_±_0_._002|0_._0485_±_0_._001|0_._0562_±_0_._001|0_._6278_±_0_._040|
|Angle Err_↓_|12_._11_±_0_._23|11_._33_±_0_._27|17_._45_±_0_._26|125_._36_±_8_._96|



_Table 1._ Comparison of different graph topologies across varying speed and yaw conditions. Values are reported as mean _±_ std. Bold values indicate the best performance (minimum error) in each category. 

come increasingly apparent. While the Degree-Preserving Rewiring Graph remains competitive in terms of position error, it fails to maintain angular stability, incurring significantly higher angle errors than the connectome in all scenarios. This disparity is most pronounced in the high-yaw condition, where the Connectome-Based FlyGM maintains an angle error of 8.29 rad/s, whereas the rewired model degrades to 13.55 rad/s. The Erdos–R’enyi Random Graph˝ collapses under these complex conditions, exhibiting a catastrophic angle error of 125.36 rad/s. These results suggest that the wiring specificity of the biological connectome are essential for stable, high-fidelity orientation control during complex maneuvers. 

## **4.2. Performance on Locomotion Tasks** 

**==> picture [193 x 152] intentionally omitted <==**

_Figure 4._ **Gait initiation dynamics.** Snapshots of the simulated fly during the gait initialization phase. 

## **Gait Initiation** 

Building on the training pipeline described above, we evaluated FlyGM on a walking task at a target velocity of 3 cm/s. We first examined the process of gait initiation, focusing on the transition from rest to the onset of stable locomotion. Figure 4 illustrates snapshots of the simulated fly prior to the first complete gait cycle. It successfully initiated the movement in roughly the first 80 ms, during which irregular steps gradually gave way to rhythmic and coordinated leg movements. 

## **Straight-Line Walking** 

Following the analysis of gait initiation, we next evaluated FlyGM on the straight-line walking phase at a target velocity of 3 cm/s. As illustrated in Figure 5, the flybody model performed stable forward locomotion with clear tripod coordination. The simulated fly maintained a consistent body trajectory over hundreds of milliseconds without drift or collapse, indicating that the learned controller generalized well to continuous walking. 

Joint-level analysis (See Appendix C for quantitative results) in Figure 9 shows that actuator outputs are tightly coupled with kinematic trajectories: contralateral legs alternate in phase, producing the classical tripod gait pattern seen in 

Drosophila. These results demonstrate that FlyGM is sufficient to generate stable straight walking once locomotion is initiated. 

**==> picture [193 x 152] intentionally omitted <==**

_Figure 5._ **Walking dynamics.** Snapshots of the simulated fly walking in a straight line at a velocity of 3 cm/s. 

## **Turning** 

We next assessed whether the same policy could generalize to directional maneuvers. In the turning task, the model was instructed to walk at a forward velocity of 3 cm/s while 

6 

**Whole-Brain Connectomic Graph Model Enables Whole-Body Control** 

executing a leftward turn at 10 rad/s. As shown in Figure 6, the simulated fly successfully produced a smooth curved trajectory by modulating stride lengths asymmetrically across the body: legs on the inner side of the turn reduced their stance amplitude, while contralateral legs extended their strides. This modulation of gait symmetry arised naturally from the network dynamics, without requiring task-specific tuning or additional control rules. 

**==> picture [193 x 152] intentionally omitted <==**

_Figure 6._ **Turning dynamics.** Snapshots of the virtual fly executing a high-speed left turn at 3 cm/s and 10 rad/s. 

The ability to perform both straight walking and turning indicates that the learned FlyGM policy does not simply memorize a single stereotyped gait, but rather encodes a flexible control strategy that can adapt to new locomotor demands. These findings highlight the robustness of the architecture and suggest its potential for modeling a wider repertoire of multi-task behaviors. 

## **Flight** 

To assess whether FlyGM can generalize beyond terrestrial locomotion, we additionally trained the fly to perform a flying task. In this setting, the policy served as a higher-level neural controller that modulated the output of the wing-beat pattern generator, thereby enabling stable flight dynamics. 

As shown in Figure 7, the trained controller maintained stable forward flight at a constant speed and kept body orientation aligned with the target direction, demonstrating that the connectome-based network can extend from walking to flight locomotion. 

These results suggest that connectome-structured networks are not limited to walking but can support a broader repertoire of multimodal behaviors, highlighting the generality of this modeling framework for embodied control. 

## **4.3. Neural Representations Analysis** 

Connectome-based architectures provide a unique opportunity to study how information propagates through biologi- 

**==> picture [193 x 151] intentionally omitted <==**

_Figure 7._ **Flight dynamics.** Snapshots of the virtual fly executing a straight flight task at a velocity of 20 cm/s. 

cal wiring. By recording neuron states during simulation, we used the **reduced neural representation intensity** as an indicator of neural activity. High-dimensional features ( _T ×N ×C_ , _T_ for time steps, _N_ for neuron counts, and _C_ for channel dimension) were compressed into a single-channel signal via Principal Component Analysis (PCA) along the channel dimension. The resulting values were then clipped to the 5th–95th percentile range and min-max normalized to [0 _,_ 1] to improve comparability and reduce outlier effects. This metric serves as a scalar proxy for the engagement level of individual neurons, allowing us to map complex, multichannel latent dynamics onto a single-intensity scale that facilitates the visualization of population-level information flow. 

Figure 8 presents the temporal dynamics of reduced neural representation intensity in a long composite locomotion sequence. Figure 8a visualizes the connectome at 200 ms using a force-directed layout that spatially arranges neurons based on their connectivity. Neurons are colored by flow type and shaded by representation intensity, illustrating the spatial distribution of the reduced neural representation intensity within the connectome-structured space at a specific moment. Therefore, we can observe the activation patterns of neurons of different flow types. 

Figure 8c shows the temporal dynamics of neural representations across the connectome. Due to the extreme imbalance in superclass sizes (e.g., _>_ 77000 neurons in optic classes versus only 106 in motor classes), we employed stratified random downsampling to ensure visibility across all functional groups while preserving relative proportions (Detailed downsampling setting see Appendix D.3). This approach maintained the diversity of neural responses while creating visually interpretable group representations. 

To optimize the visualization of these dynamics, we reordered neurons within their functional classes using spectral sequencing. We first built the similarity matrix _S_ as 

7 

**Whole-Brain Connectomic Graph Model Enables Whole-Body Control** 

**==> picture [439 x 269] intentionally omitted <==**

_Figure 8._ **Neural and behavioral dynamics across a continuous walking sequence. (a)** Force-directed layout of the connectome at 200 ms, with neurons colored by flow type and representation intensity. **(b)** Behavioral snapshots (0–680 ms) show straight walking, decelerating, pausing, speeding-up, and turning phases; blue dots and ghost fly mark target trajectory and orientation. **(c)** Temporal dynamics across the connectome, grouped by flow type and major neuron classes and showing transitions between behavioral phases. 

follows: 

**==> picture [191 x 12] intentionally omitted <==**

where simcos is the cosine similarity, _dij_ is the normalized Euclidean distance, and _α_ is set to 0.7. 

We then constructed the symmetric normalized Laplacian matrix: 

whereas neurons within the same superclass display relatively consistent response patterns. Distinct activation patterns emerge for each class, and transitions between behavioral phases imply how sensory observations and motor intentions are dynamically transmitted through the network. Such patterns are consistent with experimental neuroscience findings (Brezovec et al., 2024; Schaffer et al., 2023). These results show the potential to align FlyGM dynamics with neurophysiological processes. 

**==> picture [168 x 12] intentionally omitted <==**

where _D_ is the degree matrix with _Dii_ =[�] _j[S][ij]_[.][Eigende-] composition of _L_ was performed to obtain its eigenvalues _λ_ 0 _≤ λ_ 1 _≤· · · ≤ λn_ and corresponding eigenvectors **v** 0 _,_ **v** 1 _, . . . ,_ **v** _n_ . The optimal ordering was determined by the Fiedler vector **v** 1, which was the eigenvector corresponding to the second smallest eigenvalue _λ_ 1. The final visualization sequence was obtained by: 

**==> picture [152 x 11] intentionally omitted <==**

This reordering ensures that neurons with similar temporal activation patterns are positioned adjacently, revealing the emergent functional specialization across superclasses. 

The resulting plots demonstrate heterogeneous responses to phase transitions across different neuron superclasses, 

## **5. Conclusion and Discussion** 

Without neural architecture search or optimization, this work demonstrates that the whole-brain connectome-based graph model FlyGM can serve as an efficient reinforcement learning controller to achieve diverse movement tasks of a simulated biomechanical fruit fly. By structuring information flow according to the FlyWire connectome, FlyGM replaces hand-crafted policy networks with a graph-based network that directly reflect the wiring diagram of the brain. 

Our results demonstrate that structural priors at the connectome scale provide a powerful inductive bias for embodied control. Even when simplified to an unweighted directed graph without synapse counts or neurotransmitter types, the connectome is sufficient to drive diverse high-dimensional 

8 

**Whole-Brain Connectomic Graph Model Enables Whole-Body Control** 

motor control. This suggests that wiring diagrams, long viewed as static anatomical maps, can be directly instantiated as functional networks for closed-loop control. 

From the perspective of machine learning, FlyGM offers an anchor point for neural architecture search. Instead of relying on existing artificial structures, we can adapt structures from evolved biological networks. This provides a systematic alternative to generic architectures, potentially improving data efficiency, stability, and generalizability across tasks. The approach also opens the possibility of scaling to larger connectomes and more complex embodied agents, where the inductive biases of real nervous systems may be particularly advantageous. 

Several limitations highlight opportunities for future progress. First, more detailed and complete connectome could be implemented to improve our model. Incorporating richer information may improve biological fidelity. Second, compared to MLP-based controllers, our model requires longer per-step computation and higher memory usage. Finally, extending the framework beyond locomotion will provide a more comprehensive test of the generality of connectome-based control. 

In summary, FlyGM transforms static whole-brain connectomes into a dynamic model that can be used for wholebody motor control. By grounding policy architectures in biological wiring diagrams, this approach suggests a possibility towards more nature-aligned AI systems, and provides a computational platform for understanding sensorimotor transformation. 

## **Accessibility** 

Project website is available at: https://lnsgroup. cc/research/FlyGM. This webpage provides supplementary materials, including demonstration videos of FlyGM across all evaluated locomotion tasks and the source code of FlyGM. 

## **Software and Data** 

To support the reproducibility of this work, we provide the complete codebase and data in an anonymous repository, accessible via the link provided on our project website: https://lnsgroup.cc/research/FlyGM. The implementation is based on PyTorch and PyTorch Geometric, integrating the FlyWire connectome dataset with the flybody MuJoCo physics simulation. All experimental configurations are included in the repository. 

## **Impact Statement** 

This work advances the field of Machine Learning by integrating biological connectomics with embodied control. This computational framework offers a potential means to simulate neural circuits in simulation, which may contribute to reducing animal usage in research. We believe there are no specific negative societal consequences or ethical risks that must be highlighted for this fundamental study. 

9 

**Whole-Brain Connectomic Graph Model Enables Whole-Body Control** 

## **References** 

- Azevedo, A. et al. Connectomic reconstruction of a female drosophila ventral nerve cord. _Nature_ , 631(8020):360– 368, July 2024. ISSN 0028-0836, 1476-4687. doi: 10. 1038/s41586-024-07389-x. 

- Brezovec, B.E., Berger, A.B., Hao, Y.A., Chen, F., Druckmann, S. and Clandinin, T.R. Mapping the neural dynamics of locomotion across the drosophila brain. _Current Biology_ , 34(4):710–726.e4, February 2024. ISSN 09609822. doi: 10.1016/j.cub.2023.12.063. 

- Cheng, X., Ji, Y., Chen, J., Yang, R., Yang, G. and Wang, X. Expressive whole-body control for humanoid robots, 2024. URL https://arxiv.org/abs/ 2402.16796. 

- Ding, Y., Pandala, A., Li, C., Shin, Y.H. and Park, H.W. Representation-free model predictive control for dynamic motions in quadrupeds. _IEEE Transactions on Robotics_ , 37(4):1154–1171, August 2021. ISSN 1941-0468. doi: 10.1109/tro.2020.3046415. URL http://dx.doi. org/10.1109/TRO.2020.3046415. 

- Dorkenwald, S. et al. Neuronal wiring diagram of an adult brain. _Nature_ , 634(8032):124–138, October 2024. ISSN 0028-0836, 1476-4687. doi: 10.1038/ s41586-024-07558-y. 

- He, K., Zuo, C., Ma, C. and Sui, Y. Dynsyn: dynamical synergistic representation for efficient learning and control in overactuated embodied systems. In _Proceedings of the 41st International Conference on Machine Learning_ , ICML’24. JMLR.org, 2024. 

- Kobourov, S.G. Spring embedders and force directed graph drawing algorithms, January 2012. 

- Kumar, A., Fu, Z., Pathak, D. and Malik, J. Rma: Rapid motor adaptation for legged robots, 2021. URL https: //arxiv.org/abs/2107.04034. 

- Lappalainen, J.K., Tschopp, F.D., Prakhya, S., McGill, M., Nern, A., Shinomiya, K., Takemura, S.y., Gruntman, E., Macke, J.H. and Turaga, S.C. Connectome-constrained networks predict neural activity across the fly visual system. _Nature_ , 634(8036):1132–1140, 2024. ISSN 00280836. doi: 10.1038/s41586-024-07939-3. 

- Lesser, E. et al. Synaptic architecture of leg and wing premotor control networks in drosophila. _Nature_ , 631 (8020):369–377, July 2024. ISSN 1476-4687. doi: 10. 1038/s41586-024-07600-z. 

melanogaster. _Nature Methods_ , 19(5):620–627, May 2022. doi: 10.1038/s41592-022-01466-7. URL https: //doi.org/10.1038/s41592-022-01466-7. 

   - Pospisil, D.A. et al. The fly connectome reveals a path to the effectome. _Nature_ , 634(8032):201–209, October 2024. ISSN 0028-0836, 1476-4687. doi: 10.1038/ s41586-024-07982-0. 

   - Schaffer, E.S. et al. The spatial and temporal structure of neural activity across the fly brain. _Nature communications_ , 14(1):5572, 2023. 

   - Schlegel, P. et al. Whole-brain annotation and multiconnectome cell typing of drosophila. _Nature_ , 634(8032): 139–152, October 2024. ISSN 0028-0836, 1476-4687. doi: 10.1038/s41586-024-07686-5. 

   - Shiu, P.K. et al. A drosophila computational brain model reveals sensorimotor processing. _Nature_ , 634(8032):210– 219, October 2024. ISSN 1476-4687. doi: 10.1038/ s41586-024-07763-9. 

   - Todorov, E., Erez, T. and Tassa, Y. Mujoco: A physics engine for model-based control. In _2012 IEEE/RSJ International Conference on Intelligent Robots and Systems_ , pp. 5026–5033. IEEE, 2012. doi: 10.1109/IROS.2012. 6386109. 

   - Vaxenburg, R. et al. Whole-body physics simulation of fruit fly locomotion. _Nature_ , 643(8074):1312–1320, July 2025. ISSN 0028-0836, 1476-4687. doi: 10.1038/ s41586-025-09029-4. 

   - Wang-Chen, S., Stimpfling, V.A., Lam, T.K.C., Ozdil, P.G.,[¨] Genoud, L., Hurtak, F. and Ramdya, P. Neuromechfly v2: simulating embodied sensorimotor control in adult drosophila. _Nature Methods_ , 21(12):2353–2362, November 2024. ISSN 1548-7105. doi: 10.1038/ s41592-024-02497-y. URL http://dx.doi.org/ 10.1038/s41592-024-02497-y. 

   - Wei, Y., Zhuang, S., Zhuang, V. and Sui, Y. Motion control of high-dimensional musculoskeletal systems with hierarchical model-based planning, 2025. URL https://arxiv.org/abs/2505.08238. 

   - Xu, K., Hu, W., Leskovec, J. and Jegelka, S. How powerful are graph neural networks?, February 2019. 

   - Zheng, Z. et al. A complete electron microscopy volume of the brain of adult drosophila melanogaster. _Cell_ , 174(3): 730–743.e22, July 2018. ISSN 00928674. doi: 10.1016/j. cell.2018.06.019. 

- Lobato-Rios, V., Ramalingasetty, S.T., Ozdil,[¨] P.G., Arreguit, J., Ijspeert, A.J. and Ramdya, P. NeuroMechFly, a neuromechanical model of adult Drosophila 

10 

**Whole-Brain Connectomic Graph Model Enables Whole-Body Control** 

## **A. Details of Model Architecture and Training Process** 

## **A.1. Model Architecture and Implementation** 

The FlyGM model instantiates the Drosophila connectome as a large-scale recurrent neural system: synapse weights define a sparse linear aggregation operator, and each neuron additionally carries trainable intrinsic parameters that condition how synaptic input updates its state. The network is structured as a directed graph where nodes represent neurons and edges represent synaptic connections, partitioned into afferent, intrinsic, and efferent sets based on information flow. The model processes inputs through the following components: 

Input Normalization: A RunningNorm layer is applied to observations to stabilize training by maintaining running estimates of mean and variance. This layer operates online and is updated during training. 

Encoder: Observations are projected into the afferent neuron state space via a linear layer followed by ReLU activation. 

Graph Propagation: Information is propagated through the connectome using a message-passing mechanism with gated updates combining previous states and incoming messages. 

Decoder: Efferent neuron states are aggregated and passed through a multi-layer perceptron with ReLU activations, outputting action means and standard deviations via linear and softplus heads, respectively. 

All experiments were conducted on servers equipped with NVIDIA A100 80GB PCIe GPUs and Intel Xeon Gold 6348 CPUs. 

## **A.2. Training Pipeline** 

Training proceeds in two stages: 

Imitation Learning: The policy is initialized by mimicking expert trajectories generated by a pre-trained MLP controller provided by flybody. This stage uses PyTorch Lightning for distributed training across multiple workers. 

Reinforcement Learning: The model is fine-tuned with Proximal Policy Optimization to maximize task rewards. This stage is implemented using PyTorch Distributed Data Parallel (DDP) for scalability. 

Optimization uses AdamW with a learning rate scheduler (ReduceLROnPlateau) that reduces the learning rate upon validation loss improving. Both stages employ gradient clipping to ensure stability. 

## **A.3. Task-Specific Configurations** 

Walking Task: 

- Observation dimension: 1,253 (proprioceptive + exteroceptive + visual inputs), 

- Action dimension: 59 (joint actuators and adhesion controls), 

- Learning rate: 1 _×_ 10 _[−]_[4] , 

- Message-Passing: 32 node channels, 4 message-passing layers, 

- Expert policy architecture: 512–512–512–512 fully-connected layers with LayerNorm + Tanh (first layer) and ELU activations, outputting mean (Linear) and std (Linear + Softplus) for 59-dimensional actions. 

Flight Task: 

- Observation dimension: 104 (simplified proprioceptive and kinematic inputs), 

- Action dimension: 12 (wing torques, pattern generator modulation, body joints), 

- Learning rate: 1 _×_ 10 _[−]_[5] , 

- Message-Passing: 32 node channels, 4 message-passing layers, 

- Expert policy architecture: 256–256–256 fully-connected layers with LayerNorm + Tanh (first layer) and ELU activations, outputting mean (Linear) and std (Linear + Softplus) for 12-dimensional actions. 

Both tasks use identical graph topology derived from the FlyWire connectome but differ in input/output dimensions and network hyperparameters due to behavioral constraints. Training metrics are logged for performance monitoring. 

11 

**Whole-Brain Connectomic Graph Model Enables Whole-Body Control** 

## **B. Detailed Settings of Locomotion Environment** 

Our experiments follow the locomotor task design introduced in the flybody simulator, which provides imitation-learning datasets for terrestrial ( _walking_ ) and aerial ( _flight_ ) behaviors. 

We evaluate four tasks: 

- Gait initiation: generating stable stepping patterns from rest, 

- Straight-line walking: tracking forward centre-of-mass (CoM) trajectories, 

- Turning: executing lateral turns at constant speed, 

- Flight: stabilizing and steering free flight trajectories. 

For walking-based tasks, the default setting of flybody receives a 741-dimensional proprioceptive/exteroceptive observation, comprising: 

- accelerometer (3), gyro (3), velocimeter (3), world _z_ -axis (3), 

- actuator activations (59), 

- appendage pose (21), force sensors (18), 

- joint positions (85) and velocities (85), 

- tactile contacts (6), 

- reference displacement (195) and root quaternion (260). 

We augment this with binocular visual input: left and right eye cameras (32 _×_ 32 _×_ 3 RGB each) downsampled and resized to two 16 _×_ 16 grayscale figures. The final observation dimension is 1,253. 

Actions remain 59-dimensional, actuating adhesion, head/abdomen motion, and all leg joints as in default settings of flybody walking task. 

For the flight task, we keep the flybody sensory design with a 104-dimensional input comprising: 

- accelerometer (3), gyro (3), velocimeter (3), world _z_ -axis (3), 

- joint positions (25) and velocities (25), 

- reference displacement (18) and root quaternion (24). 

The policy outputs 12 control signals: instantaneous wing torques, head/abdomen angles, and Wing-Pattern Generator (WPG) frequency modulation. The WPG provides a nominal wing-beat template, while the policy learns residual corrections. 

## **C. Joint kinematics and actuator activations during walking** 

To further investigate the motor control strategy learned by FlyGM, we analyze the joint-level kinematics and corresponding actuator activations during stable walking. As illustrated in Figure 9, the model exhibits rhythmic coxa joint oscillations that are tightly coupled with the underlying actuator drive. Specifically, the temporal profiles of both joint angles and activations reveal a clear alternating tripod gait: the left T1/T3 and right T2 legs form one functional group, while the right T1/T3 and left T2 legs form the other. These two groups operate in anti-phase, maintaining the static stability required for hexapedal locomotion. The synchronization between descending control signals (actuator activations) and the resulting physical movement (joint angles) demonstrates that the connectome-structured policy effectively translates brain-wide message passing into coordinated whole-body movement, consistent with the kinematic patterns observed in biological Drosophila. 

## **D. Detailed Method for Visualization** 

## **D.1. Figure 2(a)** 

We visualized the aggregated synapse graph of the fly connectome using the FlyWire FAFB v783 dataset, with nodes classified by superclass labels provided by FlyWire. The node size reflects the number of neurons in each class, while the thickness and darkness of the directed edges represent the number of aggregated synaptic connections. 

12 

**Whole-Brain Connectomic Graph Model Enables Whole-Body Control** 

**==> picture [487 x 129] intentionally omitted <==**

_Figure 9._ **Joint kinematics and actuator activations during walking.** We visualize the angles (blue) and actuator activations (red) of coxa joints from left (T1–T3) and right (T1–T3) legs over multiple gait cycles. Dashed vertical lines mark gait phases based on the troughs of the left T1 coxa. The model reproduces alternating tripod-like coordination, with left T1/T3 synchronized with right T2, and left T2 synchronized with right T1/T3, consistent with expected fly walking patterns. 

## **D.2. Figure 2(b)** 

In the visualization of the network of connectome, we did not incorporate the three-dimensional structural priors of Drosophila neurons. Instead, we employed a force-directed layout algorithm (Kobourov, 2012) for graph drawing. In this method, edges are modeled as springs while nodes exert repulsive forces on each other, and the system iteratively evolves toward a low-energy equilibrium. This layout highlights the topological organization of the network, making the relationships among different super-classes and subgroups more visually apparent. For visualization, we applied a threshold of more than 25 synapses and retained only connections exceeding this cutoff. 

## **D.3. Downsampling in Figure 8(c)** 

The downsampling thresholds were set as follows: sensory: 400, ascending: 200, optic: 1500, central: 400, visual projection: 120, visual centrifugal: 120, descending: 120, motor: 100, endocrine: 60. This approach maintained the diversity of neural responses while creating visually interpretable group representations. 

13 

