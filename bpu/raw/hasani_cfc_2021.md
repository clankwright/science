# Closed-form Continuous-time Neural Networks 

Ramin Hasani[1] _[⋆]_[,] _[∗]_ , Mathias Lechner[2] _[⋆]_ , Alexander Amini[1] , Lucas Liebenwein[1] , Aaron Ray[1] , Max Tschaikowski[3] , Gerald Teschl[4] , Daniela Rus[1] 

1Massachusetts Institute of Technology (MIT), Cambridge, USA 

2Institute of Science and Technology Austria (IST Austria), Austria 

3Aalborg University, Denmark 

4University of Vienna (Uni Wien), Austria 

> _⋆_ These authors contributed equally to the paper 

> _∗_ To whom correspondence should be addressed; E-mail: rhasani@mit.edu. 

**Continuous-time neural processes are performant sequential decisionmakers that are built by differential equations (DE). However, their expressive power when they are deployed on computers is bottlenecked by numerical DE solvers. This limitation has significantly slowed down scaling and understanding of numerous natural physical phenomena such as the dynamics of nervous systems. Ideally we would circumvent this bottleneck by solving the given dynamical system in closed-form. This is known to be intractable in general. Here, we show it is possible to closely approximate the interaction between neurons and synapses – the building blocks of natural and artificial neural networks – constructed by liquid time-constant networks (LTCs) (** _**1**_ **) efficiently in closed-form. To this end, we compute a tightly-bounded approximation of the solu-** 

1 

**tion of an integral appearing in LTCs’ dynamics, that has had no known closed-form solution so far. This closed-form solution substantially impacts the design of continuous-time and continuous-depth neural models; for instance, since time appears explicitly in closed-form, the formulation relaxes the need for complex numerical solvers. Consequently, we obtain models that are between one and five orders of magnitude faster in training and inference compared to differential equation-based counterparts. More importantly, in contrast to ODE-based continuous networks, closed-form networks can scale remarkably well compared to other deep learning instances. Lastly, as these models are derived from liquid networks, they show remarkable performance in time series modeling, compared to advanced recurrent models.** 

**One Sentence Summary:** We find an approximate closed-form solution for the interaction of neurons and synapses and build a strong artificial neural network model out of it. 

## **Main Text:** 

Continuous neural network architectures built by ordinary differential equations (ODEs) ( _2_ ) opened a new paradigm for obtaining expressive and performant neural models. These models transform the depth dimension of static neural networks and the time dimension of recurrent neural networks into a continuous vector field, enabling parameter sharing, adaptive computations, and function approximation for non-uniformly sampled data. 

These continuous-depth (time) models have shown promise in density estimation applications ( _3–6_ ), as well as modeling sequential and irregularly-sampled data ( _1,7–9_ ). While ODE-based neural networks with careful and memory gradient propaga- 

2 

tion design ( _9_ ) perform competitively with advanced discretized recurrent models on relatively small benchmarks, their training and inference are slow due to the use of advanced numerical DE solvers ( _10_ ). This becomes even more troublesome as the complexity of the data, task and state-space increases (i.e., requiring more precision) ( _11_ ), for instance, in open-world problems such as medical data processing, self-driving cars, financial time-series, and physics simulations. 

The research community has developed solutions for resolving this computational overhead and for facilitating the training of neural ODEs, for instance, by relaxing the stiffness of a flow by state augmentation techniques ( _4,12_ ), reformulating the forwardpass as a root-finding problem ( _13_ ), using regularization schemes ( _14–16_ ), or improving the inference time of the network ( _17_ ). 

In this we take a back and a fundamental solution: we de- paper, step propose rive a closed-form continuous-depth model that has the rich modeling capabilities of ODE-based models and does not require any solver to model data (see Figure **1** ). The proposed continuous neural networks yield significantly faster training and inference speeds while being as expressive as their ODE-based counterparts. We provide a derivation for the approximate closed-form solution to a class of continuous neural networks that explicitly models time. We demonstrate how this transformation can be formulated into a novel neural model and scaled to create flexible, highly performant and fast neural architectures on challenging sequential datasets. 

**Deriving an Approximate Closed-form Solution for Neural Interactions.** Two neurons interact with each other through synapses as shown in Figure **1** . There are three principal mechanisms for information propagation in natural brains that are abstracted away in the current building blocks of deep learning systems: 1) neural dynamics are typically continuous processes described by differential equations (c.f., dynamics of 

3 

**==> picture [455 x 135] intentionally omitted <==**

**----- Start of picture text -----**<br>
Postsynaptic Neuron<br>we solve this in<br>Presynaptic Stimuli 𝑑𝒙(𝑡) 𝒙 𝑡 closed-form<br>𝑰(𝑡) 𝑑𝑡 = − 𝜏 + 𝑆(𝑡) 𝒙 𝑡 =<br>"<br>& ' '<br>(𝒙 0 −𝐴) 𝑒 [!] # [$%] 𝑓(−𝐼 𝑡 ) + 𝐴<br>this is a liquid time-<br>𝑥(𝑡)<br>constant differential<br>equation instance<br>𝒙 𝑡 Postsynaptic neuron’s potential<br>Synapses<br>𝐴 Synaptic reversal potential<br>𝑓 . Synaptic release nonlinearity<br>𝑆 𝑡 = 𝑓 𝑰 𝑡 (𝐴− 𝒙 𝑡) 𝜏 Postsynaptic neuron’s time-constant<br>**----- End of picture text -----**<br>


**Fig. 1** : **Neural and Synapse Dynamics.** A postsynaptic neuron receives stimuli _I_ ( _t_ ), through a nonlinear conductance-based synapse model. The dynamics of the membrane potential of this postsynaptic neuron is given by the differential equation presented in the middle. This equation is a fundamental building block of liquid time-constant networks (LTCs) ( _1_ ), for which there is no known closed-form expression. Here, we provided an approximate solution for this equation which shows the interaction of nonlinear synapses with a postsynaptic neurons, in closed-form. 

_x_ ( _t_ ) in Figure **1** ), 2) synaptic release is much more than scalar weights; it involves a nonlinear transmission of neurotransmitters, the probability of activation of receptors, and the concentration of available neurotransmitters, among other nonlinearities (c.f., _S_ ( _t_ ) in Figure **1** ), and 3) the propagation of information between neurons is induced by feedback and memory apparatuses (c.f. _I_ ( _t_ ) stimulates _x_ ( _t_ ) through a nonlinear synapse _S_ ( _t_ ) which also has a multiplicative difference of potential to the postsynaptic neuron accounting for a negative feedback mechanism). Liquid time-constant (LTC) networks ( _1_ ), which are expressive continuous-depth models obtained by a bilinear approximation ( _18_ ) of neural ODE formulation ( _2_ ) are designed based on these mechanisms. Correspondingly, we take their ODE semantics and approximate a closed-form solution for the scalar case of a postsynaptic neuron receiving an input stimuli from a presynaptic source through a nonlinear synapse. 

To this end, we apply the theory of linear ODEs ( _19_ ) to analytically solve the dynamics of an LTC differential equation shown in Figure **1** . We then simplify the so- 

4 

**Table 1** max step-size: **Time Complexity of the process to compute** and _δ <<_ 0. _K_ ˜ is time steps for closed-form _K_ **solver’s steps.** continuous _ϵ_ depthis step-size,models _ϵ_ ˜(CfCs)is the which is equivalent to K. Table is reproduced and taken from ( _17_ ). 

|Method|Complexity|Local Error|
|---|---|---|
|_p_-th order solver|_O_(_K · p_)|_O_(_ϵp_+1)|
|adaptive–step solver|_−_|_O_(˜_ϵ p_+1)|
|Eulerhypersolver|_O_(_K_)|_O_(_δϵ_2)|
|_p_-th orderhypersolver|_O_(_K · p_)|_O_(_δϵp_+1)|
|CfC (Ours)|_O_( ˜_K_)|**not relevant**|



lution to the point where there is one integral left to solve. This integral compartment,[�] 0 _[t][f]_[ (] _[I]_[(] _[s]_[))] _[ds]_[ in which] _[f]_[is a positive, continuous, monotonically increasing, and] bounded nonlinearity, is challenging to solve in closed-form; since it has dependencies on an input signal _I_ ( _s_ ) that is arbitrarily defined (such as a real-world sensory readouts). To approach this problem, we discretize _I_ ( _s_ ) into piecewise constant segments and obtain the discrete approximation of the integral in terms of sum of piecewise constant compartments over intervals. This piecewise constant approximation inspired[�] _[t]_ us to introduce an approximate closed-form solution for the integral 0 _[f]_[ (] _[I]_[(] _[s]_[))] _[ds]_[ that] is when the as the of an provably tight integral appears exponent exponential decay, which is the case for LTCs. We theoretically justify how this closed-form solution represents LTCs’ ODE semantics and is as expressive (see Figure **1** ). 

**Explicit Time Dependency.** We then dissect the properties of the obtained closedform solution and design a new class of neural network models we call Closed-form Continuous-depth networks (CfC). CfCs have an explicit time dependency in their formulation that does not require an ODE solver to obtain their temporal rollouts. Thus, they maximize the trade-off between accuracy and efficiency of solvers (See Table **1** ). CfCs perform computations at least one order of magnitude _faster training and inference time_ compared to their ODE-based counterparts, without loss of accuracy. 

5 

**Table 2** : **Sequence and time-step prediction complexity.** _n_ is the sequence length, _k_ the number of hidden units, and _p_ = order of the ODE-solver. 

|Model|Sequence|Time-step|
|---|---|---|
||prediction|prediction|
|RNN|_O_(_nk_)|_O_(_k_)|
|ODE-RNN|_O_(_nkp_)|_O_(_kp_)|
|Transformer|_O_(_n_2_k_)|_O_(_nk_)|
|CfC|_O_(_nk_)|_O_(_k_)|



**Sequence and Time-step Prediction Efficiency.** CfCs perform per-time-step and persequence predictions by establishing a continuous flow similar to ODE-based models. However, as they do not require ODE-solvers, their complexity is at least one order of less than ODE based models. Consider a recur- magnitude having performant gated rent model ( _20_ ) with the abilities to create expressive continuous flows ( _2_ ) and adaptable dynamics ( _1_ ). Table **2** compares the time complexity of CfCs to that of standard RNNs, ODE-RNNs and Transformers. 

**CfCs: Flexible Deep Models for Sequential Tasks.** CfCs are equipped with novel gating mechanisms that explicitly control their memory. CfCs are as expressive as their ODE-based peers and can be supplied with mixed memory architectures ( _9_ ) to avoid gradient issues in sequential data processing applications. Beyond accuracy and performance metrics, our results indicate that when considering accuracy-per-compute time, CfCs exhibit over 150 _×_ improvement. We perform a diverse set of advanced time series modeling experiments and present the performance and speed gain achievable by using CfCs in tasks with long-term dependencies, irregular data, and modeling physical dynamics, among others. 

6 

## **Deriving a Closed-form Solution** 

In this section, we derive an approximate closed-form solution for liquid time-constant (LTC) networks, an expressive subclass of time-continuous models. We discuss how the scalar closed-form expression derived from a small LTC system can inspire the design of CfC models. 

The hidden state of an LTC network is determined by the solution of the initialvalue problem (IVP) given below ( _1_ ): 

**==> picture [335 x 26] intentionally omitted <==**

where **x** ( _t_ ) defines the hidden states, **I** (t) is the input to the system, _wτ_ is a timeconstant parameter vector, _A_ is a bias vector, and _f_ is a neural network parametrized by _θ_ . 

**Theorem 1.** _Given an LTC system determined by the IVP (1), constructed by one cell, receiving a single dimensional time-series input I with no self connections, the following expression is an approximation of its closed-form solution:_ 

**==> picture [348 x 16] intentionally omitted <==**

_Proof._ In the single-dimensional case, the IVP (1) becomes linear in _x_ as follows: 

**==> picture [341 x 26] intentionally omitted <==**

Therefore, we can use the theory of linear ODEs to obtain an integral closed-form solution ( _19, Section 1.10_ ) consisting of two nested integrals. The inner integral can be eliminated by means of integration by substitution ( _21_ ). With this, the remaining integral 

7 

expression can be solved in the case of piecewise constant inputs and approximated in the case of general inputs. The three steps of the proof are outlined below. 

**Integral closed-form solution of LTC.** We consider the ODE semantics of a single neuron that receives some arbitrary continuous input signal _I_ and has a positive, bounded, : continuous, and monotonically increasing nonlinearity _f_ 

**==> picture [276 x 26] intentionally omitted <==**

_Assumption._ We assumed a second constant value _wτ_ in the above representation of a single LTC neuron. This is done to introduce symmetry on the structure of the ODE, hence being able to apply the theory of linear ODEs for solving the equation analytically. 

By applying linear ODE systems theory ( _19, Section 1.10_ ), we obtain: 

**==> picture [348 x 52] intentionally omitted <==**

To resolve the double integral in the equation above, we define 

**==> picture [149 x 27] intentionally omitted <==**

and observe that _[d]_[=] _[−]_[(] _[w][τ]_[ +] _[f]_[ (] _[I]_[(] _[s]_[)))][.][Hence, integration by substitution allows] _ds[u]_[(] _[s]_[)] us to rewrite (4) into: 

**==> picture [371 x 106] intentionally omitted <==**

8 

**Analytical LTC solution for piecewise constant inputs.** The derivation of a _useful_ closed-form expression of _x_ requires us to solve the integral expression[�] 0 _[t][f]_[ (] _[I]_[(] _[s]_[))] _[ds]_[ for] any _t ≥_ 0. Fortunately, the integral[�] 0 _[t][f]_[ (] _[I]_[(] _[s]_[))] _[ds]_[ enjoys a simple closed-form expression] for piecewise constant inputs _I_ . Specifically, assume that we are given a sequence of time points: 

**==> picture [217 x 11] intentionally omitted <==**

such that _τ_ 1, . . . , _τn−_ 1 _∈_ **R** and _I_ ( _t_ ) = _γi_ for all _t ∈_ [ _τi_ ; _τi_ +1) with 0 _≤ i ≤ n −_ 1. Then, it holds that 

**==> picture [361 x 33] intentionally omitted <==**

when _τk ≤ t < τk_ +1 for some 0 _≤ k ≤ n −_ 1 (as usual, one defines ∑ _i[−]_ =[1] 0[:][=][0).][With] this, we have: 

**==> picture [377 x 18] intentionally omitted <==**

when _τk ≤ t < τk_ +1 for some 0 _≤ k ≤ n −_ 1. While any continuous input can be approximated arbitrarily well by a piecewise constant input ( _21_ ), a tight approximation may require a large number of discretization points _τ_ 1, . . . , _τn_ . We address this next. 

**Analytical LTC approximation for general inputs.** Inspired by Eq. 6, the next result provides an analytical approximation of _x_ ( _t_ ). 

**Lemma 1.** _For any Lipschitz continuous, positive, monotonically increasing, and bounded f and continuous input signal I_ ( _t_ ) _, we approximate x_ ( _t_ ) _in (5) as follows:_ 

**==> picture [349 x 20] intentionally omitted <==**

˜ _Then, |x_ ( _t_ ) _− x_ ( _t_ ) _| ≤|x_ (0) _− A|e[−][w][τ][t] for all t ≥_ 0 _. Writing c_ = _x_ (0) _− A for convenience, we can obtain the following sharpness results, additionally:_ 

9 

**==> picture [361 x 17] intentionally omitted <==**

**==> picture [403 x 16] intentionally omitted <==**

_Above, the supremum and infimum are meant to be taken across all continuous input signals. These statements settle the question about the worst-case errors of the approximation. The first statement implies in particular that our bound is sharp._ 

The full proof is given in Methods. Lemma 1 demonstrates that the integral solution we obtained shown in Equation 5 is tightly close to the approximate closed-form solution we proposed in Equation 8. Note that as _wτ_ is positively defined, the derived bound between Equations 5 and 8 ensures an exponentially decaying error as time goes by. Therefore, we have the statement of the theorem. 

**An Instantiation of LTCs and their approximate closed-form expressions.** Figure **2** shows a liquid network with two neurons and five synaptic connections. The network receives an input signal I(t). Figure **2** further derives the differential equation expression of the network along with its closed-form approximate solution. 

In general, it is possible to compile a trained LTC network into its closed-form version. This compilation allows us to speed up inference time of ODE-based networks as the closed-form variant does not require complex ODE solvers to compute outputs. Algorithm 1 provides the instructions on how to transfer a trained LTC network into its closed form variant. 

## **Tightness of the Closed-form Solution in Practice** 

Figure **3** shows an LTC-based network trained for autonomous driving ( _22_ ). The figure further illustrates how close the proposed solution fits the actual dynamics exhibited from a single neuron ODE given the same parametrization. 

10 

## **Algorithm 1** Translate a trained LTC network into its closed-form variant 

**Inputs:** LTC inputs **I**[(] _[N][×][T]_[)] ( _t_ ), LTC neurons activity **x**[(] _[H][×][T]_[)] ( _t_ ), and their initial states **x**[(] _[H][×]_[1][)] (0), Synapses adjacency matrix _W_[[(] _[N]_[+] _[H]_[)] _[∗]_[(] _[N]_[+] _[H]_[)]] _Adj_ LTC’s ODE Solver, Solver’s step ∆ _t_ , **t**[(][1] _[×][T]_[)] time-instance vectors of inputs, _I_ ( _t_ ) time-instance of LTC neurons **tx** ( _t_ ) _∇_ time might be sampled irregularly LTC neurons’ parameter _τ_[(] _[H][×]_[1][)] LTC network synaptic parameters _{ σ_[(] _[N][×][H]_[)] , _µ_[(] _[N][×][H]_[)] , _A_[(] _[N][×][H]_[)] _}_ **Outputs:** LTC’s closed-form approximation of hidden state neurons, **x** ˆ[(] _[N][×][T]_[)] ( _t_ ) **x** _pre_ ( _t_ ) = _WAdj ×_ [ _I_ 0 . . . _IN_ , _x_ 0 . . . _xH_ ] _∇_ all presynaptic signals to nodes **for** _i[th]_ neuron in neurons 1 to _H_ **do for** _j_ in Synapses to _i[th]_ neuron **do** 

**==> picture [392 x 41] intentionally omitted <==**

**end for end for return x** ˆ( _t_ ) 

We took a trained Neural Circuit Policy (NCP) ( _22_ ), which consists of a perception module and a liquid time-constant (LTC) based network ( _1_ ) that possess 19 neurons and 253 synapses. The network was trained to autonomously steer a self-driving vehicle. We used recorded real-world test-runs of the vehicle for a lane-keeping task, governed by this network. The records included the inputs, outputs as well as all LTC neurons’ activities and parameters. To perform a sanity check whether our proposed closed-form solution for LTC neurons is good enough in practice as well as the theory, we plugged in the parameters of individual neurons and synapses of the differential equations into the closed-form solution (Similar to the representations shown in Figure **2** b and **2** c) and emulated the structure of the ODE-based LTC networks. We then visualized the output neuron’s dynamics of the ODE (in blue) and of the closed-form 

11 

**==> picture [455 x 198] intentionally omitted <==**

**----- Start of picture text -----**<br>
a.  LTC network with 2 neurons b.  LTC differential equations<br>𝑆!"(𝑡) 𝑆#"(𝑡)<br>𝑆!"(𝑡) 𝑑𝒙𝟏(𝑡) = − 𝒙𝟏 𝑡 + 𝑓#" 𝑰 𝑡 𝐴#" − 𝒙𝟏 𝑡 + 𝑓$" 𝒙𝟐 𝑡 (𝐴$" − 𝒙𝟏 𝑡)<br>𝑑𝑡 𝜏"<br>𝑰(𝑡) 𝑆"#(𝑡)<br>Input 𝑆#"(𝑡) 𝑆!#(𝑡) 𝑆"#(𝑡) 𝑆##(𝑡)<br>𝑆!#(𝑡) 𝑑𝒙𝟐(𝑡) = − 𝒙𝟐 𝑡 + 𝑓#$ 𝑰 𝑡 𝐴#$ − 𝒙𝟐 𝑡 + 𝑓"$ 𝒙𝟏 𝑡 𝐴"$ − 𝒙𝟐 𝑡 + 𝑓$$ 𝒙𝟐 𝑡 (𝐴$$ − 𝒙𝟐 𝑡 )<br>𝑑𝑡 𝜏$<br>𝑆##(𝑡)<br>Legend<br>𝑥𝑖(𝑡) potential  of  neuron i<br>𝑆𝑖𝑗 𝑡 synapse between node i and j<br>c.  Approximate closed-form solution of LTCs  𝜏𝑖 time-constant of neuron i<br>𝑆!"(𝑡) 𝑆#"(𝑡) 𝐴𝑓/0/0 synaptic reversal potential for nodes i and jnonlinearity of a synapse between i and j<br>𝒙𝟏 𝑡 = 𝒙𝟏 0 −𝐴!" 𝑒% & "! ['(]["!] ) * * 𝑓!" −𝐼 𝑡 + 𝐴!" + 𝒙𝟏 0 −𝐴#" 𝑒% & "! ['(][#!] 𝒙𝟐 * * 𝑓#" −𝒙𝟐 𝑡 + 𝐴#" 𝑡 time<br>𝑆!#(𝑡) 𝑆"#(𝑡) 𝑆##(𝑡)<br>𝒙𝟐 𝑡 = 𝒙𝟐 𝟎 −𝐴!# 𝑒% & "# ['(]["#] ) * * 𝑓!# −𝐼 𝑡 + 𝐴!# + 𝒙𝟐 𝟎 −𝐴"# 𝑒% & "# ['] [(][!#] 𝒙𝟏 * * 𝑓"# −𝒙𝟐 𝑡 + 𝐴"# + 𝒙𝟐 𝟎 −𝐴## 𝑒% & "# ['(][##] 𝒙𝟐 * * 𝑓## −𝒙𝟐 𝑡 + 𝐴##<br>**----- End of picture text -----**<br>


**Fig. 2** : **Instantiation of LTCs in ODE and closed-form representations.** a) A sample LTC network with two nodes and five synapses. b) the ODE representation of this two-neuron system. c) the approximate closed-form representation of the network. 

solution (in red). As illustrated in Figure **3** , we observed that the behavior of the ODE is with a error of 0.006 the closed-form solution. This ex- captured mean-squared by periment is an empirical evidence for the tightness results presented in our theory. Hence, the closed-form solution contains the main properties of liquid networks in approximating dynamics. We next show how to design a novel neural network instance inspired by this closed-form solution, that has well-behaved gradient properties and approximation capabilities. 

## **Design a Closed-form Continuous-depth Model Inspired by the Solution** 

Leveraging the scalar closed-form solution expressed by Eq. (2), we can now distill this model into a neural network that can be trained at scale. The solution providing a grounded theoretical basis for solving scalar continuous-time dynamics and it is important to translate this theory into a practical neural network model which can be 

12 

**==> picture [319 x 278] intentionally omitted <==**

**----- Start of picture text -----**<br>
liquid time-constant (LTC) module<br>input stream<br>Outputs<br>Perception module dynamics of each node<br>𝑑𝑥<br>𝑤! + 𝑓 𝑥, 𝐼 𝑥 𝑡+ 𝐴𝑓 𝑥, 𝐼 Inputs  𝐼 𝑡<br>𝑑𝑡 [= −] neuron’s state 𝑥(𝑡)<br>Nonlinearity 𝑓(. )<br>Parameters 𝑤", 𝐴<br>ODE LTC<br>closed-form<br>CfC<br>solution of LTC<br>Time (s)<br>𝑥 𝑡= 𝑥 0 −𝐴𝑒 ["] #!$% &,( ) 𝑓(−𝑥, −𝐼) + 𝐴<br>Output neuron dynamics<br>**----- End of picture text -----**<br>


**Fig. 3** : **Tightness of the closed-form solution in practice.** We approximate a closed-form solution for LTCs ( _1_ ) while largely preserving the trajectories of their equivalent ODE systems. We develop our solution into closed-form continuous-depth (CfC) models that are at least 100x faster than neural ODEs at both training and inference on complex time-series prediction tasks. 

integrated into larger representation learning systems. Doing so requires careful attention to potential gradient and expressivity issues that can arise during optimization, which we will outline in this section. 

Formally, the hidden states, **x** ( _t_ )[(] _[D][×]_[1][)] with _D_ hidden units at each time step _t_ , can be explicitly obtained by: 

**==> picture [346 x 16] intentionally omitted <==**

where _B_[(] _[D]_[)] collapses ( _x_ 0 _− A_ ) of Eq. 2 into a parameter vector. _A_[(] _[D]_[)] and _wτ_[(] _[D]_[)] are system’s parameter vectors, as well, **I** ( _t_ )[(] _[m][×]_[1][)] is an _m_ -dimensional input at each time step _t_ , _f_ is a neural network parametrized by _θ_ = _{WIx_[(] _[m][×][D]_[)] , _Wxx_[(] _[D][×][D]_[)] , _bx_[(] _[D]_[)] _}_ , and _⊙_ is 

13 

**==> picture [455 x 112] intentionally omitted <==**

**----- Start of picture text -----**<br>
Input batch neural network heads Hadamard<br>𝐼$ Backbone  𝑔 -1 sigmoid<br>𝐼(𝑡) 𝐼# neural  𝑓 𝜎(. )<br>𝐼" network ℎ + 𝑦(𝑡)<br>𝑡! 𝑡" 𝑡#$% 𝑡# 𝑡 1 −𝜎<br>time vector 𝐭= 𝑡!, 𝑡", … , 𝑡#$%, 𝑡#<br>Closed-form Continuous-depth (CfC)<br>**----- End of picture text -----**<br>


**Fig. 4** : **Closed-form Continuous-depth neural architecture.** A baclbone neural network layer delivers the input signals into three head networks _g_ , _f_ and _h_ . _f_ acts as a _liquid_ time-constant for the sigmoidal time-gates of the network. _g_ and _h_ construct the nonlinearieties of the overall CfC network. 

the Hadamard (element-wise) product. While the neural network presented in 9 can be proven to be a universal approximator as it is an approximation of an ODE system ( _1,2_ ), in its current form, it has trainability issues which we point out and resolve shortly: **Resolving the gradient issues.** The exponential term in Eq. 9 derives the system’s first part (exponentially fast) to 0 and the entire hidden state to _A_ . This issue becomes more apparent when there are recurrent connections and causes vanishing gradient factors when trained by gradient descent ( _23_ ). To reduce the effect, we replace the exponential decay term with a reversed sigmoidal nonlinearity _σ_ (.). This nonlinearity is approximately 1 at _t_ = 0 and approaches 0 in the limit _t →_ ∞. However, unlike the exponential decay, its transition happens much smoother, yielding a better condition on the loss surface. 

**Replacing biases by learnable instances.** Next, we consider the bias parameter _B_ to be part of the trainable parameters of the neural network _f_ ( _−_ **x** , _−_ **I** ; _θ_ ) and choose to use a new network instance instead of _f_ (presented in the exponential decay factor). We also replace _A_ with another neural network instance, _h_ (.) to enhance the flexibility of the model. To obtain a more general network architecture, we allow the nonlinearity _f_ ( _−_ **x** , _−_ **I** ; _θ_ ) present in Eq. 9 have both shared (backbone) and independent, ( _g_ (.)), 

14 

network compartments. 

**Gating balance.** The time-decaying sigmoidal term can play a gating role if we additionally multiply _h_ (.), with (1 _− σ_ (.)). This way, the time-decaying sigmoid function stands for a gating mechanism that interpolates between the two limits of _t →−_ ∞ and _t →_ ∞ of the ODE trajectory. 

**Backbone.** Instead of learning all three neural network instances _f_ , _g_ and _h_ separately, we have them share the first few layers in the form of a backbone that branches out into these three functions. As a result, the backbone allows our model to learn shared representations, thereby speeding up and stabilizing the learning process. More importantly, this architectural prior enables two simultaneous benefits: 1) Through the shared backbone a coupling between time-constant of the system and its state nonlinearity get established that exploits causal representation learning evident in a liquid neural network ( _1, 24_ ). 2) through separate head network layers, the system has the ability to explore temporal and structural dependencies independently of each other. These modifications result in the closed-form continuous-depth (CfC) neural network model: 

**==> picture [329 x 73] intentionally omitted <==**

The CfC architecture is illustrated in Figure **4** . The neural network instances could be selected arbitrarily. The time complexity of the algorithm is equivalent to that of discretized recurrent networks ( _25_ ), which is at least one order of magnitude faster than ODE-based networks. 

15 

**How do you deal with time, t?** CfCs are continuous-depth models that can set their temporal behavior based on the task-under-test. For time-variant datasets (e.g., irregularly sampled time series, event-based data, and sparse data), _t_ for each incoming sample is set based on its time-stamp or order. For sequential applications where the time of the occurrence of a sample does not matter, _t_ is sampled _batch-length_ -times with equidistant intervals within two hyperparameters _a_ and _b_ . 

## **Experiments with CfCs** 

We now assess the performance of CfCs in a series of sequential data processing tasks compared to advanced, recurrent models. We first evaluate how CfCs compare to LTC-based neural circuit policies (NCPs) ( _22_ ) in real-world autonomous lane keeping tasks. We then approach solving conventional sequential data modeling tasks (e.g., bitstream prediction, sentiment analysis on text data, medical time-series prediction, and robot kinematics modeling), and compare CfC variants to an extensive set of advanced recurrent neural network baselines. 

**CfC Network Variants.** To evaluate how the proposed modifications we applied to the closed-form solution network described by Eq. 9, we test four variants of the CfC architecture: 1) Closed-form solution network ( **Cf-S** ) obtained by Eq. 9, 2) CfC without the second gating mechanism ( **CfC-noGate** ). This variant does not have the 1 _− σ_ instance shown in Figure **4** . 3) Closed-form Continuous-depth model ( **CfC** ) expressed by Eq. 10. 4) CfC wrapped inside a mixed-memory architecture (i.e., CfC defines the memory state of an RNN for instance an LSTM). We call this variant **CfC-mmRNN** . Each of these four proposed variants leverage our proposed solution, and thus are at least one order of magnitude faster than continuous-time ODE models. 

**How well CfCs perform in autonomous driving compared to NCPs and other mod-** 

16 

**els?** In this experiment, our objective is to evaluate how robustly CfCs learn to perform autonomous navigation as opposed to its ODE-based counterparts LTC networks. The task is to map incoming pixel observations to steering curvature commands. We start off by training neural network architectures that possess a convolutional head stacked with the choice of RNN. The RNN compartment of networks are replaced by LSTM networks, NCPs ( _22_ ), Cf-S, CfC-NoGate, and CfC-mmRNN. We also trained a fully convolutional neural network for the sake of proper comparison. 

Our training pipeline followed an imitation learning approach with paired pixelcontrol data, from a 30Hz BlackFly PGE-23S3C RGB camera, collected by a human expert driver across a variety of rural driving environments, including times of day, weather conditions, and season of the year. The original 3-hour dataset was further augmented to include off-orientation recovery data using a privileged controller ( _26_ ) and a data-driven view synthesizer ( _27_ ). The privileged controller enabled training all networks using guided policy learning ( _28_ ). After training, all networks were transferred on-board our full-scale autonomous vehicle (Lexus RX450H, retrofitted with drive-by-wire capability). The vehicle was consistently started at the center of the lane, initialized with each trained model, and was run to completion at the end of the road. If the model exited the bounds of the lane a human safety driver intervened and restarted the model from the center of the road at the intervention location. All models were tested with and without noise added to the sensory inputs to evaluate robustness. 

The testing environment consisted of 1km of private test road with unlabeled lanemarkers and we observed that all trained networks were able to successfully complete the lane-keeping task at a constant velocity of 30 km/hr. Fig. **5** provides an insight into how these networks come with driving decisions. To this end, we computed the 

17 

**Table 3** : **Lane-keeping models’ parameter count.** CfC and NCP networks perform lanekeeping in unseen scenarios with a compact representation. 

|**Modes**|**Total Parameter Count**|**RNN Parameter Count**|
|---|---|---|
||(CNN head + RNN)||
|CNN|2,124,901|-|
|LSTM|259,733|33089|
|NCP|233,139|6495|
|Cf-S|227,728|1084|
|CfC|230,828|4184|
|CfC-NoGate|230,828|4184|
|CfC-mmRNN|235,052|8408|



attention of each network while driving, by using the visual-backprop algorithm ( _29_ ). We observe that CfCs similar to NCPs demonstrate a consistent attention pattern in each subtask, while maintaining their attention profile under heavy noise depicted in Fig. **5** c. Similar to NCPs, CfCs are very parameter efficient. They performed the endto-end autonomous lane keeping task with around 4k trainable parameters in their recurrent neural network component. 

In the following, we design sequence data processing pipelines where we extensively test CfCs’ effectiveness in learning spatiotemporal dynamics, compared to a large range of advanced recurrent models. 

**Baselines.** We CfCs to a diverse set of advanced for compare algorithms developed both discretized and continuous mechanisms. in- sequence modeling by Examples clude some variations of classical autoregressive RNNs, such as an RNN with concatenated ∆ _t_ (RNN-∆ _t_ ), a recurrent model with moving average on missing values (RNNimpute), RNN Decay ( _7_ ), long short-term memory (LSTMs) ( _20_ ), and gated recurrent units (GRUs) ( _30_ ). We also report results for a variety of encoder-decoder ODE-RNN based models, such as RNN-VAE, Latent variable models with RNNs, and with ODEs, all from ( _7_ ). 

18 

**==> picture [363 x 323] intentionally omitted <==**

**----- Start of picture text -----**<br>
a Input                       CNN                      LSTM                      NCP                        CfC CfC-mmRNN<br>Test in<br>Summer<br>0 saliency map 1<br>b Input                       CNN                      LSTM                      NCP                        CfC CfC-mmRNN<br>Test in<br>Winter<br>0 saliency map 1<br>c Input                       CNN                      LSTM                      NCP                        CfC CfC-mmRNN<br>Test Under<br>Noise<br>0 saliency map 1<br>Time<br>Time<br>Time<br>**----- End of picture text -----**<br>


**Fig. 5** : **Attention Profile of networks.** Trained networks receive unseen inputs (first column in each tab) and generate acceleration and steering commands. We use the Visual-Backprop algorithm ( _29_ ) to compute the saliency maps of the convolutional part of each network. a) results for networks tested on data collected in summer. b) results for networks tested on data collected in winter. c) results for inputs corrupted by a zero-mean Gaussian noise with variance, _σ_[2] = 0.35. 

Furthermore, we include models such as interpolation prediction networks (IPNet) ( _31_ ), Set functions for time-series (SeFT) ( _32_ ), CT-RNNs ( _33_ ), CT-GRU ( _34_ ), CTLSTM ( _35_ ), GRU-D ( _36_ ), Phased-LSTM ( _37_ ), bi-directional RNNs ( _38_ ). Finally, we benchmarked CfCs against competitive recent RNN architectures with the premise of tackling long-term dependencies, such as Legandre Memory Units (LMU) ( _39_ ), highorder polynomial projection operators (Hippo) ( _40_ ), orthogonal recurrent models (expRNNs) ( _41_ ), mixed memory RNNs such as (ODE-LSTMs) ( _9_ ), coupled oscillatory 

19 

RNNs (coRNN) ( _42_ ), and Lipschitz RNNs ( _43_ ). 

## **Regularly and Irregularly-Sampled Bit-Stream XOR** 

The bit-stream XOR dataset ( _9_ ) considers classifying bit-streams implementing an XOR function in time, i.e., each item in the sequence contributes equally to the correct output. The bit-streams are provided in densely sampled and event-based sampled format. The densely sampled version simply represents an incoming bit as an input event. The event sampled version transmits only bit-changes to the network, i.e., multiple equal bit is packed into a single input event. Consequently, the densely sampled variant is a whereas the event-based regular sequence classification problem, encoding variant represents an irregularly sampled sequence classification problem. 

Table **4** the of RNN baselines. architectures compares performance many Many such as Augmented LSTM, CT-GRU, GRU-D, ODE-LSTM, coRNN, and Lipschitz RNN, and all variants of CfC can successfully solve the task with 100% accuracy when the bit-stream samples are equidistant from each other. However, when the bit-stream samples arrive at non-uniform distances, only architectures that are immune to the vanishing gradient in irregularly sampled data can solve the task. These include GRUD, ODE-LSTM and CfCs, and CfC-mmRNNs. ODE-based RNNs cannot solve the event-based encoding tasks regardless of their choice of solvers, as they have vanishing/exploding gradient issues ( _9_ ). The hyperparameter details of this experiment is provided in Table S1. 

## **PhysioNet Challenge** 

The PhysioNet Challenge 2012 dataset considers the prediction of the mortality of 8000 patients admitted to the intensive care unit (ICU). The features represent time series 

20 

**Table 4** : **Bit-stream XOR sequence classification.** The performance values for all baseline models are reproduced from ( _9_ ). Numbers present mean _±_ standard deviations, n=5 

|Model|Equidistant<br>encoding|Event-based<br>(irregular)encoding|Time Per epoch<br>(min)|ODE-based?|
|---|---|---|---|---|
|†Augmented LSTM (_20_)|**100.00%**_±_0.00|89.71%_±_3.48|0.62|No|
|†CT-GRU (_34_)|**100.00%**_±_0.00|61.36%_±_4.87|0.80|No|
|†RNN Decay (_7_)|60.28%_±_19.87|75.53%_±_5.28|0.90|No|
|†Bi-directional RNN (_38_)|**100.00%**_±_0.00|90.17%_±_0.69|1.82|No|
|†GRU-D (_36_)|**100.00%**_±_0.00|97.90%_±_1.71|0.58|No|
|†PhasedLSTM (_37_)|50.99%_±_0.76|80.29%_±_0.99|1.22|No|
|†CT-LSTM (_35_)|97.73%_±_0.08|95.09%_±_0.30|0.86|No|
|coRNN (_42_)|**100.00%**_±_0.00|52.89%_±_1.25|0.57|No|
|Lipschitz RNN (_43_)|**100.00%**_±_0.00|52.84%_±_3.25|0.63|No|
|†ODE-RNN (_7_)|50.47%_±_0.06|51.21%_±_0.37|4.11|Yes|
|†CT-RNN (_33_)|50.42%_±_0.12|50.79%_±_0.34|4.83|Yes|
|†GRU-ODE (_7_)|50.41%_±_0.40|52.52%_±_0.35|1.55|Yes|
|†ODE-LSTM (_9_)|**100.00%**_±_0.00|**98.89%**_±_0.26|1.18|Yes|
|LTC (_1_)|**100.00%**_±_0.00|49.11%_±_0.00|2.67|Yes|
|Cf-S (ours)|**100.00%**_±_0.00|85.42%_±_2.84|0.36|No|
|CfC-noGate (ours)|**100.00%**_±_0.00|96.29%_±_1.61|0.78|No|
|CfC (ours)|**100.00%**_±_0.00|**99.42%**_±_0.42|0.75|No|
|CfC-mmRNN (ours)|**100.00%**_±_0.00|**99.72%**_±_0.08|1.26|No|



**Note:** The performance of models marked by † are reported from ( _9_ ). 

of medical measurements of the first 48 hours after admission. The data is irregularly sampled in time, and over features, i.e., only a subset of the 37 possible features is given at each time point. We perform the same test-train split and preprocessing as ( _7_ ), and report the area under the curve (AUC) on the test set as metric in Table **5** . We observe that CfCs perform competitively to other baselines while performing 160 times faster training time compared to ODE-RNNs and 220 times compared to continuous latent models. CfCs are also, on average, three times faster than advanced discretized gated recurrent models. The hyperparameter details of this experiment is provided in Table S2. 

21 

**Table 5** : **PhysioNet** . The experiment is performed without any pretraining or pretrained wordembeddings. Thus, we excluded advanced attention-based models ( _44,45_ ) such as Transformers ( _46_ ) and RNN structures that use pretraining. Numbers present mean _±_ standard deviations, n=5 

|Model|AUC Score(%)|timeper epoch(min)|
|---|---|---|
|†RNN-Impute (_7_)|0.764_±_0.016|0.5|
|†RNN-delta-t (_7_)|0.787_±_0.014|0.5|
|†RNN-Decay (_7_)|0.807_±_0.003|0.7|
|†GRU-D (_36_)|0.818_±_0.008|0.7|
|†Phased-LSTM (_37_)|**0.836**_±_0.003|0.3|
|_∗_IP-Nets (_31_)|0.819_±_0.006|1.3|
|_∗_SeFT (_32_)|0.795_±_0.015|0.5|
|†RNN-VAE (_7_)|0.515_±_0.040|2.0|
|†ODE-RNN (_7_)|**0.833**_±_0.009|16.5|
|†Latent-ODE-RNN (_7_)|0.781_±_0.018|6.7|
|†Latent-ODE-ODE (_7_)|0.829_±_0.004|22.0|
|LTC(_1_)|0.6477_±_0.010|0.5|
|Cf-S (ours)|0.643_±_0.018|**0.1**|
|CfC-noGate (ours)|**0.840**_±_0.003|**0.1**|
|CfC (ours)|**0.839**_±_0.002|**0.1**|
|CfC-mmRNN (ours)|0.834 +- 0.006|**0.2**|



**Note:** The performance of the models marked by † are reported from ( _7_ ) and the ones with _∗_ from ( _44_ ). 

## **Sentiment Analysis - IMDB** 

The IMDB sentiment analysis dataset ( _47_ ) consists of 25,000 training and 25,000 test sentences. Each sentence corresponds to either positive or negative sentiment. We tokenize the sentences in a word-by-word fashion with a vocabulary consisting of 20,000 most frequently occurring words in the dataset. We map each token to a vector using a trainable word embedding. The word embedding is initialized randomly. No pretraining of the network or the word embedding is performed. Table **6** represents how CfCs equipped with mixed memory instances outperform advanced RNN benchmarks. The hyperparameter details of this experiment is provided in Table S3. 

22 

**Table 6** : **Results on the IMDB datasets.** The experiment is performed without any pretraining or pretrained word-embeddings. Thus, we excluded advanced attention-based models ( _44,45_ ) such as Transformers ( _46_ ) and RNN structures that use pretraining. Numbers present mean _±_ standard deviations, n=5 

|Model|Test accuracy(%)|
|---|---|
|†HiPPO-LagT (_40_)|**88.0**_±_0.2|
|†HiPPO-LegS (_40_)|88.0_±_0.2|
|†LMU (_39_)|87.7_±_0.1|
|†LSTM (_20_)|87.3_±_0.4|
|†GRU (_30_)|86.2_±_n/a|
|_∗_ReLU GRU (_48_)|84.8_±_n/a|
|_∗_Skip LSTM (_49_)|86.6_±_n/a|
|†expRNN (_41_)|84.3_±_0.3|
|†Vanilla RNN (_49_)|67.4_±_7.7|
|_∗_coRNN (_42_)|86.7_±_0.3|
|LTC (_1_)|61.8_±_6.1|
|Cf-S (ours)|81.7_±_0.5|
|CfC-noGate (ours)|87.5_±_0.1|
|CfC (ours)|85.9_±_0.9|
|CfC-mmRNN (ours)|**88.3**_±_0.1|



**Note:** The performance of the models marked by † are reported from ( _40_ ), and _∗_ are reported from ( _42_ ). The n/a standard deviation denotes that the original report of these experiments did not provide the statistics of their analysis. 

## **Physical Dynamics Modeling** 

The Walker2D dataset consists of kinematic simulations of the MuJoCo physics engine ( _50_ ) on the Walker2d-v2 OpenAI gym ( _51_ ) environment using four different stochastic policies. The objective is to predict the physics state of the next time step. The training and testing sequences are provided at irregularly-sampled intervals. We report the squared error on the test set as a metric. As shown in Table **7** , CfCs outperform the other baselines by a large margin rooting for their strong capability to model irregularly sampled physical dynamics with missing phases. It is worth mentioning 

23 

**Table 7** : **Per time-step regression** . Modeling the physical dynamics of a Walker agent in simulation. Numbers present mean _±_ standard deviations. _n_ = 5 

|Model|Square-error|Timeper epoch(min)|
|---|---|---|
|†ODE-RNN (_7_)|1.904_±_0.061|0.79|
|†CT-RNN (_33_)|1.198_±_0.004|0.91|
|†Augmented LSTM (_20_)|1.065_±_0.006|0.10|
|†CT-GRU (_34_)|1.172_±_0.011|0.18|
|†RNN-Decay (_7_)|1.406_±_0.005|0.16|
|†Bi-directional RNN (_38_)|1.071_±_0.009|0.39|
|†GRU-D (_36_)|1.090_±_0.034|0.11|
|†PhasedLSTM (_37_)|1.063_±_0.010|0.25|
|†GRU-ODE (_7_)|1.051_±_0.018|0.56|
|†CT-LSTM (_35_)|1.014_±_0.014|0.31|
|†ODE-LSTM (_9_)|0.883_±_0.014|0.29|
|coRNN (_42_)|3.241_±_0.215|0.18|
|Lipschitz RNN (_43_)|1.781_±_0.013|0.17|
|LTC (_1_)|**0.662**_±_0.013|0.78|
|Transformer (_46_)|0.761_±_0.032|0.8|
|Cf-S (ours)|0.948_±_0.009|0.12|
|CfC-noGate (ours)|**0.650**_±_0.008|0.21|
|CfC (ours)|**0.643**_±_0.006|0.08|
|CfC-mmRNN (ours)|**0.617**_±_0.006|0.34|



**Note:** The performance of the models marked by † are reported from ( _9_ ). 

that on this task, CfCs even outperform Transformers by a considerable 18% margin. The hyperparameter details of this experiment is provided in Table S4. 

## **Scope, Discussions and Conclusions** 

We introduced a closed-form continuous-time neural model build from an approximate close-form solution of liquid time-constant networks that possesses the strong modeling capabilities of ODE-based networks while being significantly faster, more accurate, and stable. These closed-form continuous-depth models achieve this by explicit time-dependent gating mechanisms and having a liquid time-constant modulated by 

24 

neural networks. 

**Continuous-Depth Models.** Machine learning, control theory and dynamical systems merge at models with continuous-time dynamics ( _52–56_ ). In a seminal work, Chen et. al. 2018 ( _2_ ) revived the class of continuous-time neural networks ( _33, 57_ ), with neural ODEs. These continuous-depth models give rise to vector field representations and a set of functions which were not possible to generate before with discrete neural networks. These capabilities enabled flexible density estimation ( _3–5, 58, 59_ ), as well as performant modeling of sequential and irregularly-sampled data ( _1,7–9,43_ ). In this we showed how to relax the need for an ODE-solver to realize an paper, expressive continuous-time neural network model for challenging time-series problems. 

**Improving Neural ODEs.** ODE-based neural networks are as good as their ODEsolvers. As the complexity or the dimensionality of the modeling task increases, ODEbased networks demand a more advanced solver that significantly impacts their efficiency ( _17_ ), stability ( _13,15,60–62_ ) and performance ( _1_ ). A large body of research went into improving the computational overhead of these solvers, for example, by designing hypersolvers ( _17_ ), deploying augmentation methods ( _4, 12_ ), pruning ( _6_ ) and by regularizing the continuous flows ( _14–16_ ). To enhance the performance of an ODE-based model, especially in time series modeling tasks ( _63_ ), solutions provided for stabilizing their gradient propagation ( _9, 43, 64_ ). In this work, we showed that CfCs improve the scalability, efficiency, and performance of continuous-depth neural models. 

**Now that we have a closed-form system, where does it make sense to use ODE-based networks?** For large-scale time-series prediction tasks, and where closed-loop performance matters ( _24_ ) CfCs should be the method of choice.This is because, they capture the flexible, continuous-time nature of ODE-based networks while presenting large gains in performance and scalability. On the other hand, implicit ODE-based mod- 

25 

els can still be significantly beneficial in solving continuously defined physics problems and control tasks. Moreover, for generative modeling, continuous normalizing built ODEs are the suitable choice of model as ensure un- flows by they invertibility like CfCs ( _2_ ). This is because differential equations guarantee invertibility (i.e., under uniqueness conditions ( _6_ ), one can run them backwards in time). CfCs only approximate ODEs and therefore they no longer necessarily form a bijection ( _65_ ). 

**What are the limitations of CfCs?** CfCs might express vanishing gradient problems. To avoid this, for tasks that require long-term dependencies, it is better to use them together with mixed memory networks ( _9_ ) (See CfC-mmRNN). Moreover, we speculate that inferring causality from ODE-based networks might be more straightforward than a closed-form solution ( _24_ ). It would also be beneficial to assess if verifying a continuous neural flow ( _66_ ) is more tractable by an ODE representation of the system or their closed form. 

**In what application scenarios shall we use CfCs?** For problems such as language where a amount of data and substantial re- modeling significant sequential compute sources are available, Transformers ( _46_ ) are the right choice. In contrast, we use CfCs when: 1) data has limitations and irregularities (e.g., medical data, financial timeseries, robotics ( _67_ ) and closed loop control and robotics, and multi-agent autonomous systems in supervised and reinforcement learning schemes ( _68_ )), 2) training and inference efficiency of a model is important (e.g., embedded applications ( _69–71_ )), and 3) when interpretability matters ( _72_ ). 

## **References** 

1. Hasani, R., Lechner, M., Amini, A., Rus, D. & Grosu, R. Liquid time-constant networks. _Proceedings of the AAAI Conference on Artificial Intelligence_ **35** , 7657–7666 

26 

(2021). 

2. Chen, T. Q., Rubanova, Y., Bettencourt, J. & Duvenaud, D. K. Neural ordinary differential equations. In _Advances in neural information processing systems_ , 6571– 6583 (2018). 

3. Grathwohl, W., Chen, R. T., Bettencourt, J., Sutskever, I. & Duvenaud, D. Ffjord: Free-form continuous dynamics for scalable reversible generative models. _arXiv preprint arXiv:1810.01367_ (2018). 

4. Dupont, E., Doucet, A. & Teh, Y. W. Augmented neural odes. In _Advances in Neural Information Processing Systems_ , 3134–3144 (2019). 

5. Yang, G. _et al._ Pointflow: 3d point cloud generation with continuous normalizing flows. In _Proceedings of the IEEE/CVF International Conference on Computer Vision_ , 4541–4550 (2019). 

6. Liebenwein, L., Hasani, R., Amini, A. & Daniela, R. Sparse flows: Pruning continuous-depth models. _arXiv preprint arXiv:2106.12718_ (2021). 

7. Rubanova, Y., Chen, R. T. & Duvenaud, D. Latent odes for irregularly-sampled time series. _arXiv preprint arXiv:1907.03907_ (2019). 

8. Gholami, A., Keutzer, K. & Biros, G. Anode: Unconditionally accurate memoryefficient gradients for neural odes. _arXiv preprint arXiv:1902.10298_ (2019). 

9. Lechner, M. & Hasani, R. Learning long-term dependencies in irregularly-sampled time series. _arXiv preprint arXiv:2006.04418_ (2020). 

10. Prince, P. J. & Dormand, J. R. High order embedded runge-kutta formulae. _Journal of computational and applied mathematics_ **7** , 67–75 (1981). 

27 

11. Raissi, M., Perdikaris, P. & Karniadakis, G. E. Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations. _Journal of Computational Physics_ **378** , 686– 707 (2019). 

12. Massaroli, S., Poli, M., Park, J., Yamashita, A. & Asma, H. Dissecting neural odes. In _34th Conference on Neural Information Processing Systems, NeurIPS 2020_ (The Neural Information Processing Systems, 2020). 

13. Bai, S., Kolter, J. Z. & Koltun, V. Deep equilibrium models. _Advances in Neural Information Processing Systems_ **32** , 690–701 (2019). 

14. Finlay, C., Jacobsen, J.-H., Nurbekyan, L. & Oberman, A. M. How to train your neural ode. _arXiv preprint arXiv:2002.02798_ (2020). 

15. Massaroli, S. _et al._ Stable neural flows. _arXiv preprint arXiv:2003.08063_ (2020). 

16. Kidger, P., Chen, R. T. & Lyons, T. ” hey, that’s not an ode”: Faster ode adjoints with 12 lines of code. _arXiv preprint arXiv:2009.09457_ (2020). 

17. Poli, M. _et al._ Hypersolvers: Toward fast continuous-depth models. _Advances in Neural Information Processing Systems_ **33** (2020). 

18. Friston, K. J., Harrison, L. & Penny, W. Dynamic causal modelling. _Neuroimage_ **19** , 1273–1302 (2003). 

19. Perko, L. _Differential Equations and Dynamical Systems_ (Springer-Verlag, Berlin, Heidelberg, 1991). 

20. Hochreiter, S. & Schmidhuber, J. Long short-term memory. _Neural computation_ **9** , 1735–1780 (1997). 

28 

21. Rudin, W. _Principles of mathematical analysis_ (McGraw-Hill New York, 1976), 3d ed. edn. 

22. Lechner, M. _et al._ Neural circuit policies enabling auditable autonomy. _Nature Machine Intelligence_ **2** , 642–652 (2020). 

23. Hochreiter, S. Untersuchungen zu dynamischen neuronalen netzen. _Diploma, Technische Universit¨at M¨unchen_ **91** (1991). 

24. Vorbach, C., Hasani, R., Amini, A., Lechner, M. & Rus, D. Causal navigation by continuous-time neural networks. _arXiv preprint arXiv:2106.08314_ (2021). 

25. Hasani, R. _et al._ Response characterization for auditing cell dynamics in long shortterm memory networks. In _2019 International Joint Conference on Neural Networks (IJCNN)_ , 1–8 (IEEE, 2019). 

26. Amini, A. _et al._ Vista 2.0: An open, data-driven simulator for multimodal sensing and policy learning for autonomous vehicles. _arXiv preprint arXiv:2111.12083_ (2021). 

27. Amini, A. _et al._ Learning robust control policies for end-to-end autonomous driving from data-driven simulation. _IEEE Robotics and Automation Letters_ **5** , 1143–1150 (2020). 

28. Levine, S. & Koltun, V. Guided policy search. In _International conference on machine learning_ , 1–9 (PMLR, 2013). 

29. Bojarski, M. _et al._ Visualbackprop: Efficient visualization of cnns for autonomous driving. In _IEEE International Conference on Robotics and Automation (ICRA)_ , 1–8 (2018). 

29 

30. Chung, J., Gulcehre, C., Cho, K. & Bengio, Y. Empirical evaluation of gated recurrent neural networks on sequence modeling. _arXiv preprint arXiv:1412.3555_ (2014). 

31. Shukla, S. N. & Marlin, B. Interpolation-prediction networks for irregularly sampled time series. In _International Conference on Learning Representations_ (2018). 

32. Horn, M., Moor, M., Bock, C., Rieck, B. & Borgwardt, K. Set functions for time series. In _International Conference on Machine Learning_ , 4353–4363 (PMLR, 2020). 

33. Funahashi, K.-i. & Nakamura, Y. Approximation of dynamical systems by continuous time recurrent neural networks. _Neural networks_ **6** , 801–806 (1993). 

34. Mozer, M. C., Kazakov, D. & Lindsey, R. V. Discrete event, continuous time rnns. _arXiv preprint arXiv:1710.04110_ (2017). 

35. Mei, H. & Eisner, J. The neural hawkes process: a neurally self-modulating multivariate point process. In _Proceedings of the 31st International Conference on Neural Information Processing Systems_ , 6757–6767 (2017). 

36. Che, Z., Purushotham, S., Cho, K., Sontag, D. & Liu, Y. Recurrent neural networks for multivariate time series with missing values. _Scientific reports_ **8** , 1–12 (2018). 

37. Neil, D., Pfeiffer, M. & Liu, S.-C. Phased lstm: accelerating recurrent network training for long or event-based sequences. In _Proceedings of the 30th International Conference on Neural Information Processing Systems_ , 3889–3897 (2016). 

38. Schuster, M. & Paliwal, K. K. Bidirectional recurrent neural networks. _IEEE transactions on Signal Processing_ **45** , 2673–2681 (1997). 

30 

39. Voelker, A. R., Kaji´c, I. & Eliasmith, C. Legendre memory units: Continuoustime representation in recurrent neural networks. _NeurIPS Reproducability Challenge_ (2019). 

40. Gu, A., Dao, T., Ermon, S., Rudra, A. & R´e, C. Hippo: Recurrent memory with optimal polynomial projections. _arXiv preprint arXiv:2008.07669_ (2020). 

41. Lezcano-Casado, M. & Martınez-Rubio, D. Cheap orthogonal constraints in neural networks: A simple parametrization of the orthogonal and unitary group. In _International Conference on Machine Learning_ , 3794–3803 (PMLR, 2019). 

42. Rusch, T. K. & Mishra, S. Coupled oscillatory recurrent neural network (co _{_ rnn _}_ ): An accurate and (gradient) stable architecture for learning long time dependencies. In _International Conference on Learning Representations_ (2021). URL https: //openreview.net/forum?id=F3s69XzWOia. 

43. Erichson, N. B., Azencot, O., Queiruga, A., Hodgkinson, L. & Mahoney, M. W. Lipschitz recurrent neural networks. In _International Conference on Learning Representations_ (2021). URL https://openreview.net/forum?id=-N7PBXqOUJZ. 

44. Shukla, S. N. & Marlin, B. M. Multi-time attention networks for irregularly sampled time series. _arXiv preprint arXiv:2101.10318_ (2021). 

45. Xiong, Y. _et al._ Nystr¨omformer: A nystr¨om-based algorithm for approximating self-attention. _CoRR_ **abs/2102.03902** (2021). 

46. Vaswani, A. _et al._ Attention is all you need. In _Advances in neural information processing systems_ , 5998–6008 (2017). 

31 

47. Maas, A. _et al._ Learning word vectors for sentiment analysis. In _Proceedings of the 49th annual meeting of the association for computational linguistics: Human language technologies_ , 142–150 (2011). 

48. Dey, R. & Salem, F. M. Gate-variants of gated recurrent unit (gru) neural networks. In _2017 IEEE 60th international midwest symposium on circuits and systems (MWSCAS)_ , 1597–1600 (IEEE, 2017). 

49. Campos, V., Jou, B., Gir´o-i Nieto, X., Torres, J. & Chang, S.-F. Skip rnn: Learning to skip state updates in recurrent neural networks. _arXiv preprint arXiv:1708.06834_ (2017). 

50. Todorov, E., Erez, T. & Tassa, Y. Mujoco: A physics engine for model-based control. In _2012 IEEE/RSJ International Conference on Intelligent Robots and Systems_ , 5026–5033 (IEEE, 2012). 

51. Brockman, G. _et al._ Openai gym. _arXiv preprint arXiv:1606.01540_ (2016). 

52. Zhang, H., Wang, Z. & Liu, D. A comprehensive review of stability analysis of continuous-time recurrent neural networks. _IEEE Transactions on Neural Networks and Learning Systems_ **25** , 1229–1262 (2014). 

53. Weinan, E. A proposal on machine learning via dynamical systems. _Communications in Mathematics and Statistics_ **5** , 1–11 (2017). 

54. Lu, Z., Pu, H., Wang, F., Hu, Z. & Wang, L. The expressive power of neural networks: A view from the width. _arXiv preprint arXiv:1709.02540_ (2017). 

55. Li, Q., Chen, L., Tai, C. _et al._ Maximum principle based algorithms for deep learning. _arXiv preprint arXiv:1710.09513_ (2017). 

32 

56. Lechner, M., Hasani, R., Zimmer, M., Henzinger, T. A. & Grosu, R. Designing worm-inspired neural networks for interpretable robotic control. In _International Conference on Robotics and Automation (ICRA)_ , 87–94 (2019). 

57. Cohen, M. A. & Grossberg, S. Absolute stability of global pattern formation and parallel memory storage by competitive neural networks. _IEEE transactions on systems, man, and cybernetics_ 815–826 (1983). 

58. Mathieu, E. & Nickel, M. Riemannian continuous normalizing flows. In Larochelle, H., Ranzato, M., Hadsell, R., Balcan, M. F. & Lin, H. (eds.) _Advances in Neural Information Processing Systems_ , vol. 33, 2503–2515 (Curran Associates, Inc., 2020). URL https://proceedings.neurips.cc/paper/2020/file/ 1aa3d9c6ce672447e1e5d0f1b5207e85-Paper.pdf. 

59. Hodgkinson, L., van der Heide, C., Roosta, F. & Mahoney, M. W. Stochastic normalizing flows. _arXiv preprint arXiv:2002.09547_ (2020). 

60. Haber, E., Lensink, K., Treister, E. & Ruthotto, L. Imexnet a forward stable deep neural network. In _International Conference on Machine Learning_ , 2525–2534 (PMLR, 2019). 

61. Chang, B., Chen, M., Haber, E. & Chi, E. H. Antisymmetricrnn: A dynamical system view on recurrent neural networks. _arXiv preprint arXiv:1902.09689_ (2019). 

62. Lechner, M., Hasani, R., Rus, D. & Grosu, R. Gershgorin loss stabilizes the recurrent neural network compartment of an end-to-end robot learning scheme. In _2020 IEEE International Conference on Robotics and Automation (ICRA)_ , 5446–5452 (IEEE, 2020). 

33 

63. Gleeson, P., Lung, D., Grosu, R., Hasani, R. & Larson, S. D. c302: a multiscale framework for modelling the nervous system of caenorhabditis elegans. _Philosophical Transactions of the Royal Society B: Biological Sciences_ **373** , 20170379 (2018). 

64. Li, X., Wong, T.-K. L., Chen, R. T. & Duvenaud, D. Scalable gradients for stochastic differential equations. In _International Conference on Artificial Intelligence and Statistics_ , 3870–3882 (PMLR, 2020). 

65. Rezende, D. & Mohamed, S. Variational inference with normalizing flows. In _International conference on machine learning_ , 1530–1538 (PMLR, 2015). 

66. Grunbacher, S. _et al._ On the verification of neural odes with stochastic guarantees. _Proceedings of the AAAI Conference on Artificial Intelligence_ **35** , 11525–11535 (2021). 

67. Lechner, M., Hasani, R., Grosu, R., Rus, D. & Henzinger, T. A. Adversarial training is not ready for robot learning. _arXiv preprint arXiv:2103.08187_ (2021). 

68. Brunnbauer, A. _et al._ Model-based versus model-free deep reinforcement learning for autonomous racing cars. _arXiv preprint arXiv:2103.04909_ (2021). 

69. Hasani, R. M., Haerle, D. & Grosu, R. Efficient modeling of complex analog integrated circuits using neural networks. In _2016 12th Conference on Ph. D. Research in Microelectronics and Electronics (PRIME)_ , 1–4 (IEEE, 2016). 

70. Wang, G., Ledwoch, A., Hasani, R. M., Grosu, R. & Brintrup, A. A generative neural network model for the quality prediction of work in progress products. _Applied Soft Computing_ **85** , 105683 (2019). 

71. DelPreto, J. _et al._ Plug-and-play supervisory control using muscle and brain signals for real-time gesture and error detection. _Autonomous Robots_ **44** , 1303–1322 (2020). 

34 

72. Hasani, R. _Interpretable Recurrent Neural Networks in Continuous-time Control Environments_ . PhD dissertation, Technische Universit¨at Wien (2020). 

## **Acknowledgments** 

Authors would like to thank Tsun-Hsuan Wang, Patrick Kao, Makram Chahine, Wei Xiao, Xiao Li, Lianhao Yin, and Yutong Ben for useful suggestions and testing out CfC models for confirmation of results across other domains. **Funding:** R.H. and D.R. are partially supported by Boeing and MIT. M.L. is supported in part by the Austrian Science Fund (FWF) under grant Z211-N23 (Wittgenstein Award). A.A. is supported by the National Science Foundation (NSF) Graduate Research Fellowship Program. M.T. is supported by the Poul Due Jensen Foundation, grant 883901. This research was partially sponsored by the United States Air Force Research Laboratory and the United States Air Force Accelerator and was un- Artificial Intelligence accomplished der Cooperative Agreement Number FA8750-19-2-1000. The views and conclusions contained in this document are those of the authors and should not be interpreted as representing the official policies, either expressed or implied, of the United States Air Force or the U.S. Government. The U.S. Government is authorized to reproduce and distribute reprints for Government purposes notwithstanding any copyright notation herein. This work was further supported by The Boeing Company and the Office of Naval Research (ONR) Grant N00014-18-1-2830. **Data and materials availability:** All data, code, and materials used in the analysis are openly available at https://github.com/raminmh/CfC under Apache 2.0 License, for purposes of reproducing and extending the analysis. 

35 

## **List of Supplementary materials** 

Materials and Methods. 

Tables S1 to S4. 

36 

## **Supplementary Materials** 

Here, we provide all supplementary materials used in our analysis. 

## **Materials and Methods** 

In this section, we provide the full proof for Lemma 1. **Proof of Lemma 1** 

_Proof._ We start by noting that 

**==> picture [297 x 45] intentionally omitted <==**

Since 0 _≤ f ≤_ 1, we conclude _e[−]_[�] 0 _[t][f]_[ (] _[I]_[(] _[s]_[))] _[ds] ∈_ [0; 1] and _e[−][f]_[ (] _[I]_[(] _[t]_[))] _[t] f_ ( _−I_ ( _t_ )) _∈_ [0; 1]. This ˜ shows that _|x_ ( _t_ ) _− x_ ( _t_ ) _| ≤|c|e[−][w][τ][t]_ . To see the sharpness results, pick some arbitrary small _ε >_ 0 and a sufficiently large _C >_ 0 such that _f_ ( _−C_ ) _≤ ε_ and 1 _− ε ≤ f_ ( _C_ ). With this, for any 0 _< δ < t_ , we consider the piecewise constant input signal _I_ such that _I_ ( _s_ ) = _−C_ for _s ∈_ [0; _t − δ_ ] and _I_ ( _s_ ) = _C_ for _s ∈_ ( _t − δ_ ; _t_ ]. Then, it can be noted that 

**==> picture [233 x 44] intentionally omitted <==**

Statement 1) follows by noting that there exists a family of continuous signals _In_ : [0; _t_ ] _→_ **R** such that _|In_ ( _·_ ) _| ≤ C_ for all _n ≥_ 1 and _In → I_ pointwise as _n →_ ∞. This is because 

**==> picture [303 x 77] intentionally omitted <==**

37 

where _L_ is the Lipschitz constant of _f_ and the last identity is due to dominated convergence theorem ( _21_ ). To see 2), we first note that the negation of the signal _−I_ provides us with 

**==> picture [211 x 45] intentionally omitted <==**

if _ε_ , _δ →_ 0. The fact that the left-hand side of the last inequality must be at least _e[−][t] −_ 1 follows by observing that _e[−][t] ≤ e[−]_[�] 0 _[t][f]_[ (] _[I][′]_[(] _[s]_[))] _[ds]_ and _e[−][f]_[ (] _[I][′′]_[(] _[t]_[))] _[t] f_ ( _−I[′′]_ ( _t_ )) _≤_ 1 for any _I[′]_ , _I[′′]_ : [0; _t_ ] _→_ **R** . 

38 

**Table** S1: **Bit-Stream XOR experiments** . Hyperparameters 

|Parameter||||Value||
|---|---|---|---|---|---|
|||Cf-S|CfC|CfC-noGate|CfC-mmRNN|
|clipnorm||5|1|10|10|
|optimizer||Adam|RMSProp|RMSprop|RMSprop|
|batch<br>~~s~~ize||256|128|128|128|
|Hidden size||64|192|128|64|
|epochs||200|200|200|200|
|base<br>~~l~~r||0.005|0.05|0.005|0.005|
|decay<br>~~l~~r||0.9|0.7|0.95|0.95|
|backbone|~~a~~ctivation|SiLU|ReLU|SiLU|ReLU|
|backbone|~~d~~r|0.0|0.0|0.3|0.0|
|forget<br>~~b~~ias||1.2|1.2|4.7|0.6|
|backbone|~~u~~nits|64|128|192|128|
|backbone|~~l~~ayers|1|1|1|1|
|weight<br>~~d~~ecay||3e-05|3e-06|5e-06|2e-06|



**Table** S2: **Physionet experiments** . Hyperparameters 

|Parameter||||Value||
|---|---|---|---|---|---|
|||Cf-S|CfC|CfC-noGate|CfC-mmRNN|
|epochs||116|57|58|65|
|class<br>~~w~~eight||18.25|11.69|7.73|5.91|
|clipnorm||0|0|0|0|
|Hidden size||64|256|64|64|
|base<br>~~l~~r||0.003|0.002|0.003|0.001|
|decay<br>~~l~~r||0.72|0.9|0.73|0.9|
|backbone|~~a~~ctivation|Tanh|SiLU|ReLU|LeCun Tanh|
|backbone|~~u~~nits|64|64|192|64|
|backbone|~~d~~r|0.1|0.2|0.0|0.3|
|backbone|~~l~~ayers|3|2|2|2|
|weight<br>~~d~~ecay||5e-05|4e-06|5e-05|4e-06|
|optimizer||AdamW|AdamW|AdamW|AdamW|
|init||0.53|0.50|0.55|0.6|
|batch<br>~~s~~ize||128|128|128|128|



39 

**Table** S3: **IMDB experiments** . Hyperparameters 

|Parameter||||Value||
|---|---|---|---|---|---|
|||Cf-S|CfC|CfC-noGate|CfC-mmRNN|
|clipnorm||1|10|5|10|
|optimizer||Adam|RMSProp|RMSprop|RMSprop|
|batch<br>~~s~~ize||128|128|128|128|
|Hidden size||320|192|224|64|
|embed<br>~~d~~im||64|192|192|32|
|embed<br>~~d~~r||0.0|0.0|0.2|0.3|
|epochs||27|47|37|20|
|base<br>~~l~~r||0.0005|0.0005|0.0005|0.0005|
|decay<br>~~l~~r||0.8|0.7|0.8|0.8|
|backbone|~~a~~ctivation|Relu|SiLU|SiLU|LeCun Tanh|
|backbone|~~d~~r|0.0|0.0|0.1|0.0|
|backbone|~~u~~nits|64|64|128|64|
|backbone|~~l~~ayers|1|2|1|1|
|weight<br>~~d~~ecay||0.00048|3.6e-05|2.7e-05|0.00029|



**Table** S4: **Walker2D experiments** . Hyperparameters 

|Parameter||||Value||
|---|---|---|---|---|---|
|||Cf-S|CfC|CfC-noGate|CfC-mmRNN|
|clipnorm||10|1|1|10|
|optimizer||Adam|Adam|Adam|Adam|
|batch<br>~~s~~ize||128|256|128|128|
|Hidden size||256|64|256|128|
|epochs||50|50|50|50|
|base<br>~~l~~r||0.006|0.02|0.008|0.005|
|decay<br>~~l~~r||0.95|0.95|0.95|0.95|
|backbone|~~a~~ctivation|SiLU|SiLU|LeCun Tanh|LeCun Tanh|
|backbone|~~d~~r|0.0|0.1|0.1|0.2|
|forget<br>~~b~~ias||5.0|1.6|2.8|2.1|
|backbone|~~u~~nits|192|256|128|128|
|backbone|~~l~~ayers|1|1|1|2|
|weight<br>~~d~~ecay||1e-06|1e-06|3e-05|6e-06|



40 

