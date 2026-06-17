## **Liquid Time-constant Networks** 

## **Ramin Hasani,**[1,3*] **Mathias Lechner,**[2*] **Alexander Amini,**[1] **Daniela Rus,**[1] **Radu Grosu**[3] 

> 1 Massachusetts Institute of Technology (MIT) 

> 2 Institute of Science and Technology Austria (IST Austria) 

> 3 Technische Universita¨t Wien (TU Wien) 

rhasani@mit.edu, mathias.lechner@ist.ac.at, amini@mit.edu, rus@csail.mit.edu, radu.grosu@tuwien.ac.at 

## **Abstract** 

We introduce a new class of time-continuous recurrent neural network models. Instead of declaring a learning system’s dynamics by implicit nonlinearities, we construct networks of linear first-order dynamical systems modulated via nonlinear interlinked gates. The resulting models represent dynamical systems with varying (i.e., _liquid_ ) time-constants coupled to their hidden state, with outputs being computed by numerical differential equation solvers. These neural networks exhibit stable and bounded behavior, yield superior expressivity within the family of neural ordinary differential equations, and give rise to improved performance on time-series prediction tasks. To demonstrate these properties, we first take a theoretical approach to find bounds over their dynamics, and compute their expressive power by the _trajectory length_ measure in a latent trajectory space. We then conduct a series of time-series prediction experiments to manifest the approximation capability of Liquid Time-Constant Networks (LTCs) compared to classical and modern RNNs.[1] 

## **1 Introduction** 

Recurrent neural networks with continuous-time hidden states determined by ordinary differential equations (ODEs), are effective algorithms for modeling time series data that are ubiquitously used in medical, industrial and business settings. The state of a neural ODE, **x** ( _t_ ) _∈_ R _[D]_ , is defined by the solution of this equation (Chen et al. 2018): _d_ **x** ( _t_ ) _/dt_ = _f_ ( **x** ( _t_ ) _,_ **I** ( _t_ ) _, t, θ_ ), with a neural network _f_ parametrized by _θ_ . One can then compute the state using a numerical ODE solver, and train the network by performing reverse-mode automatic differentiation (Rumelhart, Hinton, and Williams 1986), either by gradient descent through the solver (Lechner et al. 2019), or by considering the solver as a black-box (Chen et al. 2018; Dupont, Doucet, and Teh 2019; Gholami, Keutzer, and Biros 2019) and apply the _adjoint method_ (Pontryagin 2018). The open questions are: how expressive are neural ODEs in their current formalism, and can we improve their structure to enable richer representation learning and expressiveness? 

*Authors with equal contributions Copyright © 2021, Association for the Advancement of Artificial Intelligence (www.aaai.org). All rights reserved. 

> 1Code and data are available at: https://github.com/raminmh/ liquid ~~t~~ ime ~~c~~ onstant ~~n~~ etworks 

Rather than defining the derivatives of the hidden-state directly by a neural network _f_ , one can determine a more stable continuous-time recurrent neural network (CT-RNN) by the following equation (Funahashi and Nakamura 1993): _d_ **x** _dt_ ( _t_ ) = _−_ **[x]**[(] _τ[t]_[)] + _f_ ( **x** ( _t_ ) _,_ **I** ( _t_ ) _, t, θ_ ), in which the term _−_ **[x]**[(] _τ[t]_[)] assists the autonomous system to reach an equilibrium state with a time-constant _τ_ . **x** ( _t_ ) is the hidden state, **I** ( _t_ ) is the input, t represents time, and _f_ is parametrized by _θ_ . 

We propose an alternative formulation: let the hidden state flow of a network be declared by a system of linear ODEs of the form: _d_ **x** ( _t_ ) _/dt_ = _−_ **x** ( _t_ ) _/τ_ + **S** ( _t_ ), and let **S** ( _t_ ) _∈_ R _[M]_ represent the following nonlinearity determined by **S** ( _t_ ) = _f_ ( **x** ( _t_ ) _,_ **I** ( _t_ ) _, t, θ_ )( _A −_ **x** ( _t_ )), with parameters _θ_ and _A_ . Then, by plugging in **S** into the hidden states equation, we get: 

**==> picture [203 x 37] intentionally omitted <==**

Eq. 1 manifests a novel time-continuous RNN instance 

**Liquid time-constant.** A neural network _f_ not only determines the derivative of the hidden state **x** ( _t_ ), but also serves as an input-dependent varying time-constant ( _τsys_ = _τ_ 1+ _τf_ ( **x** ( _t_ ) _,_ **I** ( _t_ ) _,t,θ_ )[) for the learning system (Time constant is] a parameter characterizing the speed and the coupling sensitivity of an ODE).This property enables single elements of the hidden state to identify specialized dynamical systems for input features arriving at each time-point. We refer to these models as _liquid time-constant_ recurrent neural networks (LTCs). LTCs can be implemented by an arbitrary choice of ODE solvers. In Section 2, we introduce a practical fixed-step ODE solver that simultaneously enjoys the stability of the implicit Euler and the computational efficiency of the explicit Euler methods. 

**Reverse-mode automatic differentiation of LTCs.** LTCs realize differentiable computational graphs. Similar to neural ODEs, they can be trained by variform of gradient-based optimization algorithms. We settle to trade memory for numerical precision during a backward-pass by using a vanilla backpropagation through-time algorithm to optimize LTCs instead of an adjoint-based optimization method (Pontryagin 2018). In Section 3, we motivate this choice thoroughly. 

**Bounded dynamics - stability.** In Section 4, we show that the state and the time-constant of LTCs are bounded to a finite range. This property assures the stability of the output dynamics and is desirable when inputs to the system relentlessly increase. 

**Superior expressivity.** In Section 5, we theoretically and quantitatively analyze the approximation capability of LTCs. We take a functional analysis approach to show the universality of LTCs. We then delve deeper into measuring their expressivity compared to other time-continuous models. We perform this by measuring the _trajectory length_ of activations of networks in a latent trajectory representation. Trajectory length was introduced as a measure of expressivity of feed-forward deep neural networks (Raghu et al. 2017). We extend these criteria to the family of continuous-time recurrent models. 

**Time-series modeling.** In Section 6, we conduct a series of eleven time-series prediction experiments and compare the performance of modern RNNs to the time-continuous models. We observe improved performance on a majority of cases achieved by LTCs. 

**Why this specific formulation?** There are two primary justifications for the choice of this particular representation: I) LTC model is loosely related to the computational models of neural dynamics in small species, put together with synaptic transmission mechanisms (Hasani et al. 2020). The dynamics of non-spiking neurons’ potential, **v** ( _t_ ), can be written as a system of linear ODEs of the form (Lapicque 1907; Koch and Segev 1998): _d_ **v** _/dt_ = _−gl_ **v** ( _t_ ) + **S** ( _t_ ), where **S** is the sum of all synaptic inputs to the cell from presynaptic sources, and _gl_ is a leakage conductance. 

All synaptic currents to the cell can be approximated in steady-state by the following nonlinearity (Koch and Segev 1998; Wicks, Roehrig, and Rankin 1996): **S** ( _t_ ) = _f_ ( **v** ( _t_ ) _,_ **I** ( _t_ )) _,_ ( _A −_ **v** ( _t_ )), where _f_ ( _._ ) is a sigmoidal nonlinearity depending on the state of all neurons, **v** ( _t_ ) which are presynaptic to the current cell, and external inputs to the cell, _I_ ( _t_ ). By plugging in these two equations, we obtain an equation similar to Eq. 1. LTCs are inspired by this foundation. II) Eq. 1 might resemble that of the famous Dynamic Causal Models (DCMs) (Friston, Harrison, and Penny 2003) with a Bilinear dynamical system approximation (Penny, Ghahramani, and Friston 2005). DCMs are formulated by taking a second-order approximation (Bilinear) of the dynamical system _d_ **x** _/dt_ = _F_ ( **x** ( _t_ ) _,_ **I** ( _t_ ) _, θ_ ), that would result in the following format (Friston, Harrison, and Penny 2003): _d_ **x** _/dt_ = ( _A_ + **I** ( _t_ ) _B_ ) **x** ( _t_ ) + _C_ **I** ( _t_ ) with _A_ = _dFd_ **x**[,] _[B]_[=] _dF_[2] _[C]_[=] _dF_[DCM][and][bilinear][dynamical][sys-] _d_ **x** ( _t_ ) _d_ **I** ( _t_ )[,] _d_ **I** ( _t_ )[.] tems have shown promise in learning to capture complex fMRI time-series signals. LTCs are introduced as variants of continuous-time (CT) models that are loosely inspired by biology, show great expressivity, stability, and performance in modeling time series. 

## **2 LTCs forward-pass by a fused ODE solvers** 

Solving Eq. 1 analytically, is non-trivial due to the nonlinearity of the LTC semantics. The state of the system of ODEs, however, at any time point _T_ , can be computed by a numeri- 

**Algorithm 1** LTC update by fused ODE Solver 

|**Parameters:** _θ_ = _{τ_ (_N×_1) = time-constant, _γ_(_M×N_) =|
|---|
|weights,_γ_(_N×N_)<br>_r_<br>= recurrent weights,_µ_(_N×_1) = biases_}_,|
|_A_(_N×_1) = bias vector, _L_ = Number of unfolding steps,|
|∆_t_=step size,_N_ =Number of neurons,|
|**Inputs:**_M_-dimensional Input**I**(_t_)of length_T_,**x**(0)|
|**Output:**Next LTC neural state**x**_t_+∆_t_|
|**Function:**FusedStep(**x**(_t_),**I**(_t_),∆_t_,_θ_)|
|**x**(_t_+ ∆_t_)(_N×T_) = **x**(_t_) + ∆_tf_(**x**(_t_)_,_**I**(_t_)_,t,θ_)_⊙A_<br>1+∆_t_<br>�<br>1_/τ_+_f_(**x**(_t_)_,_**I**(_t_)_,t,θ_)<br>�|
|_▷f_(_._), and all divisions are applied element-wise.|
|_▷⊙_is the Hadamard product.|
|**end Function**|
|**x**_t_+∆_t_ =**x**(_t_)|
|**for**_i_= 1_. . . L_**do**|
|**x**_t_+∆_t_ =FusedStep(**x**(_t_),**I**(_t_),∆_t_,_θ_)|
|**end for**|
|**return x**_t_+∆_t_|



cal ODE solver that simulates the system starting from a trajectory _x_ (0), to _x_ ( _T_ ). An ODE solver breaks down the continuous simulation interval [0 _, T_ ] to a temporal discretization, [ _t_ 0 _, t_ 1 _, . . . tn_ ]. As a result, a solver’s step involves only the update of the neuronal states from _ti_ to _ti_ +1. 

LTCs’ ODE realizes a system of stiff equations (Press et al. 2007). This type of ODE requires an exponential number of discretization steps when simulated with a RungeKutta (RK) based integrator. Consequently, ODE solvers based on RK, such as Dormand–Prince (default in torchdiffeq (Chen et al. 2018)), are not suitable for LTCs. Therefore, We design a new ODE solver that fuses the explicit and the implicit Euler methods (Press et al. 2007). This choice of discretization method results in achieving stability for an implicit update equation. To this end, the _Fused Solver_ numerically unrolls a given dynamical system of the form _dx/dt_ = _f_ ( _x_ ) by: 

**==> picture [201 x 11] intentionally omitted <==**

In particular, we replace only the _x_ ( _ti_ ) that occur linearly in _f_ by _x_ ( _ti_ +1). As a result, Eq 2 can be solved for _x_ ( _ti_ +1), symbolically. Applying the Fused solver to the LTC representation, and solving it for **x** ( _t_ + ∆ _t_ ), we get: 

**==> picture [217 x 26] intentionally omitted <==**

Eq. 3 computes one update state for an LTC network. Correspondingly, Algorithm 1 shows how to implement an LTC network, given a parameter space _θ_ . _f_ is assumed to have an arbitrary activation function (e.q. for a _tanh_ nonlinearity _f_ = tanh( _γr_ **x** + _γ_ **I** + _µ_ )). The computational complexity of the algorithm for an input sequence of length _T_ is _O_ ( _L × T_ ), where _L_ is the number of discretization steps. Intuitively, a dense version of an LTC network with _N_ neurons, and a dense version of a long short-term memory (LSTM) (Hochreiter and Schmidhuber 1997) network with _N_ cells, would be of the same complexity. 

**Algorithm 2** Training LTC by BPTT 

**Inputs:** Dataset of traces [ _I_ ( _t_ ) _, y_ ( _t_ )] of length _T_ , RNNcell = _f_ ( _I, x_ ) **Parameter:** Loss func _L_ ( _θ_ ), initial param _θ_ 0, learning rate _α_ , Output w = _Wout_ , and bias = _bout_ **for** _i_ = 1 _. . ._ number of training steps **do** 

( _Ib_ , _yb_ ) = Sample training batch, _x_ := _xt_ 0 _∼ p_ ( _xt_ 0) **for** _j_ = 1 _. . . T_ **do** ˆ _x_ = _f_ ( _I_ ( _t_ ) _, x_ ), _y_ ( _t_ ) = _Wout.x_ + _bout_ , _Ltotal_ = � _Tj_ =1 _[L]_[(] _[y][j]_[(] _[t]_[)] _[,]_[ ˆ] _[y][j]_[(] _[t]_[))][,] _[∇][L]_[(] _[θ]_[) =] _[∂L] ∂θ[tot] θ_ = _θ − α∇L_ ( _θ_ ) **end for end for return** _θ_ 

Table 1: Complexity of the vanilla BPTT compared to the adjoint method, for a single layer neural network _f_ 

||**Vanilla BPTT**<br>**Adjoint**|
|---|---|
|Time<br>Memory<br>Depth<br>FWD acc<br>BWD acc|_O_(_L × T ×_2)<br>_O_((_Lf_ +_Lb_)_× T_)<br>_O_(_L × T_)<br>**O(1)**<br>_O_(_L_)<br>_O_(_Lb_)<br>High<br>High<br>**High**<br>Low|



**Note:** _L_ = number of discretization steps, _Lf_ = L during forward-pass. _Lb_ = L during backward-pass. _T_ = length of sequence, Depth = computational graph depth. **3 Training LTC networks by BPTT** 

Neural ODEs were suggested to be trained by a constant memory cost for each layer in a neural network _f_ by applying the adjoint sensitivity method to perform reverse-mode automatic differentiation (Chen et al. 2018). The adjoint method, however, comes with numerical errors when running in reverse mode. This phenomenon happens because the adjoint method forgets the forward-time computational trajectories, which was repeatedly denoted by the community (Gholami, Keutzer, and Biros 2019; Zhuang et al. 2020). 

On the contrary, direct backpropagation through time (BPTT) trades memory for accurate recovery of the forwardpass during the reverse mode integration (Zhuang et al. 2020). Thus, we set out to design a vanilla BPTT algorithm to maintain a highly accurate backward-pass integration through the solver. For this purpose, a given ODE solver’s output (a vector of neural states), can be recursively folded to build an RNN and then apply the learning algorithm described in Algorithm 2 to train the system. Algorithm 2 uses a vanilla stochastic gradient descent (SGD). One can substitute this with a more performant variant of the SGD, such as Adam (Kingma and Ba 2014), which we use in our experiments. 

**Complexity.** Table 1 summarizes the complexity of our vanilla BPTT algorithm compared to an adjoint method. We achieve a high degree of accuracy on both forward and backward integration trajectories, with similar computational complexity, at large memory costs. 

## **4 Bounds on** _τ_ **and neural state of LTCs** 

LTCs are represented by an ODE which varies its timeconstant based on inputs. It is therefore important to see if 

**==> picture [203 x 104] intentionally omitted <==**

**----- Start of picture text -----**<br>
Input  6-layer, width 100, tanh activations<br>trajectory<br>PCA<br>𝑥 𝑡= sin 𝑡 L1 L2 L3 L4 L5 L6 Projection to trajectory latent 2-D space<br>PCA PCA PCA PCA PCA<br>𝑡= cos(𝑡)<br>𝑦<br>**----- End of picture text -----**<br>


Figure 1: Trajectory’s latent space becomes more complex as the input passes through hidden layers. 

LTCs stay stable for unbounded arriving inputs (Hasani et al. 2019; Lechner et al. 2020b). In this section, we prove that the time-constant and the state of LTC neurons are bounded to a finite range, as described in Theorems 1 and 2, respectively. 

**Theorem 1.** _Let xi denote the state of a neuron i within an LTC network identified by Eq. 1, and let neuron i receive M incoming connections. Then, the time-constant of the neuron, τsysi, is bounded to the following range:_ 

**==> picture [178 x 11] intentionally omitted <==**

The proof is provided in Appendix. It is constructed based on bounded, monotonically increasing sigmoidal nonlinearity for neural network _f_ and its replacement in the LTC network dynamics. A stable varying time-constant significantly enhances the expressivity of this form of time-continuous RNNs, as we discover more formally in Section 5. 

**Theorem 2.** _Let xi denote the state of a neuron i within an LTC, identified by Eq. 1, and let neuron i receive M incoming connections. Then, the hidden state of any neuron i, on a finite interval Int ∈_ [0 _, T_ ] _, is bounded as follows:_ 

**==> picture [205 x 12] intentionally omitted <==**

The proof is given in Appendix. It is constructed based on the sign of the LTC’s equation’s compartments, and an approximation of the ODE model by an explicit Euler discretization. Theorem 2 illustrates a desired property of LTCs, namely _state stability_ which guarantees that the outputs of LTCs never explode even if their inputs grow to infinity. Next we discuss the expressive power of LTCs compared to the family of time-continuous models, such as CT-RNNs and neural ordinary differential equations (Chen et al. 2018; Rubanova, Chen, and Duvenaud 2019). 

## **5 On the expressive power of LTCs** 

Understanding how the structural properties of neural networks determine which functions they can compute is known as the expressivity problem. The very early attempts on measuring expressivity of neural nets include the theoretical studies based on functional analysis. They show that neural networks with three-layers can approximate any finite set of continuous mapping with any precision. This is known as the _universal approximation theorem_ (Hornik, Stinchcombe, and White 1989; Funahashi 1989; Cybenko 

Table 2: **Computational depth of models** 

|Activations|**Computational Depth**<br>Neural ODE<br>CT-RNN<br>**LTC**|
|---|---|
|||
|tanh<br>sigmoid<br>ReLU<br>Hard-tanh|0.56_±_0.016<br>4.13_±_2.19<br>9.19_±_2.92<br>0.56_±_0.00<br>5.33_±_3.76<br>7.00_±_5.36<br>1.29_±_0.10<br>4.31_±_2.05<br>56.9_±_9.03<br>0.61_±_0.02<br>4.05_±_2.17<br>81.01_±_10.05|



**Note:** # of tries = 100, input samples’ ∆ _t_ = 0 _._ 01, _T_ = 100 sequence length. # of layers = 1, width = 100, _σw_[2][=][2][,] _[ σ] b_[2][=][1][.] 1989). Universality was extended to standard RNNs (Funahashi 1989) and even continuous-time RNNs (Funahashi and Nakamura 1993). By careful considerations, we can also show that LTCs are also universal approximators. 

˙ **Theorem 3.** _Let_ _**x** ∈_ R _[n] , S ⊂_ R _[n] and_ _**x**_ = _F_ ( _**x**_ ) _be an autonomous ODE with F_ : _S →_ R _[n] a C_[1] _-mapping on S. Let D denote a compact subset of S and assume that the simulation of the system is bounded in the interval I_ = [0 _, T_ ] _. Then, for a positive ϵ, there exist an LTC network with N hidden units, n output units, and an output internal state_ _**u**_ ( _t_ ) _, described by Eq. 1, such that for any rollout {_ _**x**_ ( _t_ ) _|t ∈ I} of the system with initial value x_ (0) _∈ D, and a proper network initialization,_ 

**==> picture [170 x 11] intentionally omitted <==**

The main idea of the proof is to define an _n_ -dimensional dynamical system and place it into a higher dimensional system. The second system is an LTC. The fundamental difference of the proof of LTC’s universality to that of CT-RNNs (Funahashi and Nakamura 1993) lies in the distinction of the semantics of both systems where the LTC network contains a nonlinear input-dependent term in its time-constant module which makes parts of the proof non-trivial. 

The universal approximation theorem broadly explores the expressive power of a neural network model. The theorem however, does not provide us with a foundational measure on where the separation is between different neural network architectures. Therefore, a more rigorous measure of expressivity is demanded to compare models, specifically those networks specialized in spatiotemporal data processing, such as LTCs. The advances made on defining measures for the expressivity of static deep learning models (Pascanu, Montufar, and Bengio 2013; Montufar et al. 2014; Eldan and Shamir 2016; Poole et al. 2016; Raghu et al. 2017) could presumably help measure the expressivity of timecontinuous models, both theoretically and quantitatively, which we explore in the next section. 

## **5.1 Measuring expressivity by trajectory length** 

A measure of expressivity has to take into account what degrees of complexity a learning system can compute, given the network’s capacity (depth, width, type, and weights configuration). A unifying expressivity measure of static deep networks is the _trajectory length_ introduced in (Raghu et al. 2017). In this context, one evaluates how a deep model transforms a given input trajectory (e.g., a circular 2-dimensional input) into a more complex pattern, progressively. 

We can then perform principle component analysis (PCA) over the obtained network’s activations. Subsequently, 

we measure the length of the output trajectory in a 2- dimensional latent space, to uncover its relative complexity (see Fig. 1). The trajectory length is defined as the _arc length_ of a given trajectory _I_ ( _t_ ), (e.g. a circle in 2D space) (Raghu et al. 2017): _l_ ( _I_ ( _t_ )) = � _t[∥][dI]_[(] _[t]_[)] _[/dt][∥][dt]_[.][By][establishing][a] lower-bound for the growth of the trajectory length, one can set a barrier between networks of shallow and deep architectures, regardless of any assumptions on the network’s weight configuration (Raghu et al. 2017), unlike many other measures of expressivity (Pascanu, Montufar, and Bengio 2013; Montufar et al. 2014; Serra, Tjandraatmadja, and Ramalingam 2017; Gabri´e et al. 2018; Hanin and Rolnick 2018, 2019; Lee, Alvarez-Melis, and Jaakkola 2019). We set out to extend the trajectory-space analysis of static networks to time-continuous (TC) models, and to lower-bound the trajectory length to compare models’ expressivity. To this end, we designed instances of Neural ODEs, CT-RNNs and LTCs with shared _f_ . The networks were initialized by weights _∼N_ (0 _, σw_[2] _[/k]_[)][,][and][biases] _[∼N]_[(0] _[, σ] b_[2][)][.][We][then][perform] forward-pass simulations by using different types of ODE solvers, for arbitrary weight profiles, while exposing the networks to a circular input trajectory _I_ ( _t_ ) = _{I_ 1( _t_ ) = sin( _t_ ) _, I_ 2( _t_ ) = cos( _t_ ) _}_ , for _t ∈_ [0 _,_ 2 _π_ ]. By looking at the first two principle components (with an average varianceexplained of over 80%) of hidden layers’ activations, we observed consistently more complex trajectories for LTCs. Fig. 2 gives a glimpse of our empirical observations. All networks are implemented by the Dormand-Prince explicit Runge-Kutta(4,5) solver (Dormand and Prince 1980) with a variable step size. We had the following **observations** : **I)** Exponential growth of the trajectory length of Neural ODEs and CT-RNNs with Hard-tanh and ReLU activations (Fig. 2A) and unchanged shape of their latent space regardless of their weight profile. **II)** LTCs show a slower growth-rate of the trajectory length when designed by Hard-tanh and ReLU, with the compromise of realizing great levels of complexity (Fig. 2A, 2C and 2E). **III)** Apart from multi-layer time-continuous models built by Hard-tanh and ReLU activations, in all cases, we observed a longer and a more complex latent space behavior for the LTC networks (Fig. 2B to 2E). **IV)** Unlike static deep networks (Fig. 1), we witnessed that the trajectory length does not grow by depth in multi-layer continuous-time networks realized by tanh and sigmoid (Fig. 2D). **V)** conclusively, we observed that the trajectory length in TC models varies by a model’s activations, weight and bias distributions variance, width and depth. We presented this more systematically in Fig. 3. **VI)** Trajectory length grows linearly with a network’s width (Fig. 3B - Notice the logarithmic growth of the curves in the log-scale Y- axis). **VII)** The growth is considerably faster as the variance grows (Fig. 3C). **VIII)** Trajectory length is reluctant to the choice of ODE solver (Fig. 3A). **IX)** Activation functions diversify the complex patterns explored by the TC system, where ReLU and Hard-tanh networks demonstrate higher degrees of complexity for LTCs. A key reason is the presence of recurrent links between each layer’s cells. **Definition of Computational Depth (** _**L**_ **).** For one hidden layer of _f_ in a time-continuous network, _L_ is the average number of integration steps taken by the solver for each incoming input 

sample. Note that for an _f_ with _n_ layers we define the total depth as _n × L_ . These observations have led us to formulate Lower bounds for the growth of the trajectory length of continuous-time networks. 

**Theorem 4.** Trajectory Length growth Bounds for Neural ODEs and CT-RNNs. _Let dx/dt_ = _fn,k_ ( _**x**_ ( _t_ ) _,_ _**I**_ ( _t_ ) _, θ_ ) _with θ_ = _{W, b}, represent a Neural ODE and[d]_ _**[x]** dt_[(] _[t]_[)] = _−_ _**[x]**_[(] _τ[t]_[)] + _fn,k_ ( _**x**_ ( _t_ ) _,_ _**I**_ ( _t_ ) _, θ_ ) _with θ_ = _{W, b, τ } a CT-RNN. f is randomly weighted with_ Hard-tanh _activations. Let_ _**I**_ ( _t_ ) _be a 2D input trajectory, with its progressive points (i.e. I_ ( _t_ + _δt_ ) _) having a perpendicular component to_ _**I**_ ( _t_ ) _for all δt, with L_ = _number of solver-steps. Then, by defining the projection of the first two principle components’ scores of the hidden states over each other, as the 2D_ latent trajectory space _of a layer d, z_[(] _[d]_[)] ( _**I**_ ( _t_ )) = _z_[(] _[d]_[)] ( _t_ ) _, for Neural ODE and CT-RNNs respectively, we have:_ 

**==> picture [251 x 102] intentionally omitted <==**

The proof is provided in Appendix. It follows similar steps as (Raghu et al. 2017) on the trajectory length bounds established for deep networks with piecewise linear activations, with careful considerations due to the continuous-time setup. The proof is constructed such that we formulate a recurrence between the norm of the hidden state gradient in layer _d_ +1, �� _dz/dt_ ( _d_ +1)��, in principle components domain, and the expectation of the norm of the right-hand-side of the differential equations of neural ODEs and CT-RNNs. We then roll back the recurrence to reach the inputs. 

Note that to reduced the complexity of the problem, we only bounded the orthogonal components of the hidden state ( _d_ +1) image _dz/dt⊥_ , and therefore we have the assump��� ��� tion on input _I_ ( _t_ ), in the Theorem’s statement (Raghu et al. 

2017). Next, we find a lower-bound for the LTC networks. 

**Theorem 5.** Growth Rate of LTC’s Trajectory Length. _Let Eq. 1 determine an LTC with θ_ = _{W, b, τ, A}. With the same conditions on f and I_ ( _t_ ) _, as in Theorem 4, we have:_ 

**==> picture [236 x 80] intentionally omitted <==**

The proof is provided in Appendix. A rough outline: we construct the recurrence between the norm of the hidden state gradients and the components of the right-hand-side of LTC separately which progressively build up the bound. 

## **5.2 Discussion of the theoretical bounds** 

**I)** As expected, the bound for the Neural ODEs is very similar to that of an _n_ layer static deep network with the exception of the exponential dependencies to the number of solver-steps, _L_ . **II)** The bound for CT-RNNs suggests their shorter trajectory length compared to neural ODEs, according to the base of the exponent. This results consistently matches our experiments presented in Figs. 2 and 3. **III)** Fig. 2B and Fig. 3C show a faster-than-linear growth for LTC’s trajectory length as a function of weight distribution variance. This is confirmed by LTC’s lower bound shown in Eq. 9. **IV)** LTC’s lower bound also depicts the linear growth of the trajectory length with the width, _k_ , which validates the results presented in 3B. **V)** Given the computational depth of the models _L_ in Table 2 for Hard-tanh activations, the computed lower bound for neural ODEs, CT-RNNs and LTCs justify a longer trajectory length of LTC networks in the experiments of Section 5. Next, we assess the expressive power of LTCs in a set of real-life time-series prediction tasks. 

## **6 Experimental Evaluation** 

**6.1 Time series predictions.** We evaluated the performance of LTCs realized by the proposed Fused ODE solver against 

**==> picture [454 x 127] intentionally omitted <==**

**----- Start of picture text -----**<br>
A Layer1                          Layer2                         Layer3 B 𝜎! ["] = 1 𝜎! ["] = 2 𝜎! ["] = 4 RK45 C Width = 100               Width = 200 RK45<br>l(CT-RNN) = 90.5486l(LTC) = 12481.0242l(N-ODE) = 108.245 l(CT-RNN) = 1210.7898l(N-ODE) = 5407.3963l(LTC) = 15332.7607 l(CT-RNN) = 15949.0123l(N-ODE) = 255299.3159l(LTC) = 17707.2484 Hard tanhDepth = 1 l(CT-RNN) = 39.9081l(N-ODE) = 81.0841l(LTC) = 266.2873 l(CT-RNN) = 54.5492l(N-ODE) = 110.943l(LTC) = 527.0816 Depth = 1 ReLU<br>Width = 100 𝜎! ["] = 2<br>𝜎# ["] = 1 𝜎# ["] = 1<br>InputsN-ODECT-RNNLTC InputsN-ODECT-RNNLTC<br>1 [st]  Latent Dimension 1 [st]  Latent Dimension 1 [st]  Latent Dimension 1 [st]  Latent Dimension 1 [st]  Latent Dimension<br>D Layer 1                   Layer 2                     Layer 3                     Layer 4                    Layer 5 RK45 E Width = 100               Width = 200 RK45<br>l(CT-RNN) = 29.4344l(N-ODE) = 37.1075l(LTC) = 438.7242 l(CT-RNN) = 24.4596l(N-ODE) = 55.8477l(LTC) = 366.6077 l(CT-RNN) = 25.1329l(N-ODE) = 56.8841l(LTC) = 406.2259 l(CT-RNN) = 21.2794l(N-ODE) = 57.0224l(LTC) = 357.9859 l(CT-RNN) = 21.7574l(N-ODE) = 57.6322l(LTC) = 329.3917 Depth = 5tanh l(CT-RNN) = 87.9204l(N-ODE) = 104.5981l(LTC) = 18339.8985 l(N-ODE) = 138.4056l(LTC) = 53858.6441l(CT-RNN) = 120.58 Hard tanh Depth = 1<br>Width = 100 𝜎! ["] = 2<br>𝜎𝜎! ["] #"= 2= 1 𝜎# ["] = 1<br>RK45 Width   |  = 10 Ha 0  |   rd tanh 𝜎! ["] = 2|   D | epth = 3 𝜎# ["] = 1 InNCLT- T-RNNputsODEC InputsN-ODECT-RNNLTC<br>1 [st]  Latent Dimension 1 [st]  Latent Dimension 1 [st]  Latent Dimension 1 [st]  Latent Dimension 1 [st]  Latent Dimension 1 [st]  Latent Dimension 1 [st]  Latent Dimension<br>nd Latent Dimension2 nd Latent Dimension2 nd Latent Dimension2 nd Latent Dimension2 nd Latent Dimension2<br>nd Latent Dimension2 nd Latent Dimension2 nd Latent Dimension2 nd Latent Dimension2 nd Latent Dimension2 nd Latent Dimension2 nd Latent Dimension2<br>**----- End of picture text -----**<br>


Figure 2: Trajectory length deformation A) in network layers with Hard-tanh activations, B) as a function of the weight distribution scaling factor, C) as a function of network width (ReLU), D) in network layers with logistic-sigmoid activations and E) as a function of width (Hard-tanh). 

**==> picture [404 x 168] intentionally omitted <==**

**----- Start of picture text -----**<br>
A 600 samples = 100activations = relu LTCN-ODE B 10 [4] LTCN-ODECT-RNN samples = 100, solver = RK45activations = tanhdepth = 1,   2w [ = 2,  ] 2b [ = 1] C 10 [4] LTCN-ODECT-RNN samples = 100, solver = RK45activations = reludepth = 1,   2b [ = 1]<br>400 depth = 1,  width = 1002w [ = 2,  ] 2b [ = 1] CT-RNN 10 [3]<br>10 [3]<br>10 [2]<br>200<br>10 [2]<br>10 [1]<br>0<br>RK2(3) RK4(5) ABM1(13) TR-BDF2 10 [1]<br>ODE Solvers 10 [0] 10 25 50 100 150 200 1 2 2 4 8<br>Network Width (k) w<br>D LTC samples = 100<br>10 [3] N-ODECT-RNN solver = RK45activations = sigmoiddept h = 6, 2w [ = 2,  ] 2b [ = 1] 100 N-ODE                       CT-RNN                       LTC100 100 100 N-ODE                    CT-RNN                      LTC100 100<br>10 [2] 80 80 80 8 0 80 80<br>60 60 6 0 60 60 6 0<br>40 40 40 40 4 0 40<br>10 [1] 20 20 20 20 20 20<br>L1 L2 L3 L4 L5 L6 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4<br>Network Layers PC PC PC PC PC PC<br>Trajectory Length Trajectory Length Trajectory Length<br>Trajectory Length<br>Varience Explained (%) Varience Explained (%) Varience Explained (%) Varience Explained (%) Varience Explained (%) Varience Explained (%)<br>**----- End of picture text -----**<br>


Figure 3: Dependencies of the trajectory length measure. A) trajectory length vs different solvers (variable-step solvers). RK2(3): Bogacki-Shampine Runge-Kutta (2,3) (Bogacki and Shampine 1989). RK4(5): Dormand-Prince explicit RK (4,5) (Dormand and Prince 1980). ABM1(13): Adams-Bashforth-Moulton (Shampine 1975). TR-BDF2: implicit RK solver with 1st stage trapezoidal rule and a 2nd stage backward differentiation (Hosea and Shampine 1996). B) Top: trajectory length vs network width. Bottom: Variance-explained of principle components (purple bars) and their cumulative values (solid black line). C) Trajectory length vs weights distribution variance. D) trajectory length vs layers. (More results in the supplements) 

Table 3: **Time series prediction** Mean and standard deviation, n=5 

|Dataset<br>Metric|LSTM|CT-RNN|Neural ODE|CT-GRU|LTC(ours)|
|---|---|---|---|---|---|
|Gesture<br>(accuracy)<br>Occupancy<br>(accuracy)<br>Activity recognition<br>(accuracy)<br>Sequential MNIST<br>(accuracy)<br>Traffc<br>(squared error)<br>Power<br>(squared-error)<br>Ozone<br>(F1-score)|64.57%_±_0.59<br>93.18%_±_1.66<br>95.85%_±_0.29<br>**98.41**%_±_0.12<br>0.169_±_0.004<br>0.628_±_0.003<br>0.284_±_0.025|59.01%_±_1.22<br>94.54%_±_0.54<br>95.73%_±_0.47<br>96.73%_±_0.19<br>0.224_±_0.008<br>0.742_±_0.005<br>0.236_±_0.011|46.97%_±_3.03<br>90.15%_±_1.71<br>**97.26**%_±_0.10<br>97.61%_±_0.14<br>1.512_±_0.179<br>1.254_±_0.149<br>0.168_±_0.006|68.31%_±_1.78<br>91.44%_±_1.67<br>96.16%_±_0.39<br><br>98.27%_±_0.14<br>0.389_±_0.076<br>**0.586**_±_0.003<br>0.260_±_0.024|**69.55%**_±_**1.13**<br>**94.63%**_±_**0.17**<br>95.67%_±_0.575<br>97.57%_±_0.18<br>**0.099**_±_0.0095<br>0.642_±_0.021<br>**0.302**_±_0.0155|



Table 4: Person activity, 1st setting - n=5 

|**Algorithm**|**Accuracy**|
|---|---|
|LSTM|83.59%_±_0.40|
|CT-RNN|81.54%_±_0.33|
|Latent ODE|76.48%_±_0.56|
|CT-GRU|85.27%_±_0.39|
|LTC (ours)|**85.48**%_±_**0.40**|



the state-of-the-art discretized RNNs, LSTMs (Hochreiter and Schmidhuber 1997), CT-RNNs (ODE-RNNs) (Funahashi and Nakamura 1993; Rubanova, Chen, and Duvenaud 2019), continuous-time gated recurrent units (CT-GRUs) (Mozer, Kazakov, and Lindsey 2017), and Neural ODEs constructed by a 4 _[th]_ order Runge-Kutta solver as suggested in (Chen et al. 2018), in a series of diverse real-life supervised learning tasks. The results are summarized in Table 3. The experimental setup are provided in Appendix. We observed between 5% to 70% performance improvement achieved by the LTCs compared to other RNN models in four out of seven experiments and comparable performance in the other three (see Table 3). 

**6.2 Person activity dataset.** We use the ”Human Activity” dataset described in (Rubanova, Chen, and Duvenaud 

2019) in two distinct frameworks. The dataset consists of 6554 sequences of activity of humans (e.g. lying, walking, sitting), with a period of 211 ms. we designed two experimental frameworks to evaluate models’ performance. In the _1st Setting_ , the baselines are the models described before, and the input representations are unchanged (details in Appendix). LTCs outperform all models and in particular CTRNNs and neural ODEs with a large margin as shown in Table 4. Note that the CT-RNN architecture is equivalent to the ODE-RNN described in (Rubanova, Chen, and Duvenaud 2019), with the difference of having a state damping factor _τ_ . 

In the _2nd Setting_ , we carefully set up the experiment to match the modifications made by (Rubanova, Chen, and Duvenaud 2019) (See supplements), to obtain a fair comparison between LTCs and a more diverse set of RNN variants discussed in (Rubanova, Chen, and Duvenaud 2019). LTCs show superior performance with a high margin compared to other models. The results are summarized in Table 5). 

**6.3 Half-Cheetah kinematic modeling.** We intended to evaluate how well continuous-time models can capture physical dynamics. To perform this, we collected 25 rollouts of a pre-trained controller for the HalfCheetah-v2 gym environment (Brockman et al. 2016), generated by the Mu- 

Table 5: Person activity, 2nd setting 

|**Algorithm**|**Accuracy**|
|---|---|
|RNN∆_t ∗_|0.797_±_0.003|
|RNN-Decay_∗_|0.800_±_0.010|
|RNN GRU-D_∗_|0.806_±_0.007|
|RNN-VAE_∗_|0.343_±_0.040|
|Latent ODE (D enc.)_∗_|0.835_±_0.010|
|ODE-RNN _∗_|0.829_±_0.016|
|Latent ODE(C enc.)_∗_|0.846_±_0.013|
|LTC (ours)|**0.882**_±_**0.005**|



**Note:** Accuracy for algorithms indicated by _∗_ , are taken directly from (Rubanova, Chen, and Duvenaud 2019). RNN ∆ _t_ = classic RNN + input delays (Rubanova, Chen, and Duvenaud 2019). RNN-Decay = RNN with exponential decay on the hidden states (Mozer, Kazakov, and Lindsey 2017). GRU-D = gated recurrent unit + exponential decay + input imputation (Che et al. 2018). D- enc. = RNN encoder (Rubanova, Chen, and Duvenaud 2019). C- enc = ODE encoder (Rubanova, Chen, and Duvenaud 2019). n=5 

**==> picture [203 x 59] intentionally omitted <==**

**----- Start of picture text -----**<br>
6<br>3<br>2 5<br>1 4<br>𝜙<br>Time − +<br>17 input observations     |     6 control outputs      |    𝜙 = joint angle<br>**----- End of picture text -----**<br>


Table 6: Sequence modeling. Half-Cheetah dynamics n=5 

|**Algorithm**|**MSE**|
|---|---|
|LSTM|2.500_±_0.140|
|CT-RNN|2.838_±_0.112|
|Neural ODE|3.805_±_0.313|
|CT-GRU|3.014_±_0.134|
|LTC (ours)|**2.308**_±_**0.015**|



Bengio 2013) suggested to count the number of linear regions of neural networks as a measure of expressivity, (Eldan and Shamir 2016) showed that there exists a class of radial functions that smaller networks fail to produce, and (Poole et al. 2016) studied the exponential expressivity of neural networks by transient chaos. 

These methods are compelling; however, they are bound to particular weight configurations of a given network in order to lower-bound expressivity similar to (Serra, Tjandraatmadja, and Ramalingam 2017; Gabri´e et al. 2018; Hanin and Rolnick 2018, 2019; Lee, Alvarez-Melis, and Jaakkola 2019). (Raghu et al. 2017) introduced an interrelated concept which quantifies the expressiveness of a given static network by trajectory length. We extended their expressivity analysis to time-continuous networks and provided lowerbound for the growth of the trajectory length, proclaiming the superior approximation capabilities of LTCs. 

Figure 4: Half-cheetah physics simulation 

## **8 Conclusions, Scope and Limitations** 

JoCo physics engine (Todorov, Erez, and Tassa 2012). The task is then to fit the observation space time-series in an autoregressive fashion (Fig. 4). To increase the difficulty, we overwrite 5% of the actions by random actions. The test results are presented in Table 6, and root for the superiority of the performance of LTCs compared to other models. 

## **7 Related Works** 

**Time-continuous models.** TC networks have become unprecedentedly popular. This is due to the manifestation of several benefits such as adaptive computations, better continuous time-series modeling, memory, and parameter efficiency (Chen et al. 2018). A large number of alternative approaches have tried to improve and stabilize the adjoint method (Gholami, Keutzer, and Biros 2019), use neural ODEs in specific contexts (Rubanova, Chen, and Duvenaud 2019; Lechner et al. 2019) and to characterize them better (Dupont, Doucet, and Teh 2019; Durkan et al. 2019; Jia and Benson 2019; Hanshu et al. 2020; Holl, Koltun, and Thuerey 2020; Quaglino et al. 2020). In this work, we investigated the expressive power of neural ODEs and proposed a new ODE model to improve their expressivity and performance. 

**Measures of expressivity.** A large body of modern works tried to find answers to the questions such as why deeper networks and particular architectures perform well, and where is the boundary between the approximation capability of shallow networks and deep networks? In this context, (Montufar et al. 2014) and (Pascanu, Montufar, and 

We investigated the use of a novel class of time-continuous neural network models obtained by a combination of linear ODE neurons and special nonlinear weight configurations. We showed that they could be implemented effectively by arbitrary variable and fixed step ODE solvers, and be trained by backpropagation through time. We demonstrated their bounded and stable dynamics, superior expressivity, and superseding performance in supervised learning timeseries prediction tasks, compared to standard and modern deep learning models. 

**Long-term dependencies.** Similar to many variants of timecontinuous models, LTCs express the vanishing gradient phenomenon (Pascanu, Mikolov, and Bengio 2013; Lechner and Hasani 2020), when trained by gradient descent. Although the model shows promise on a variety of time-series prediction tasks, they would not be the obvious choice for learning long-term dependencies in their current format. **Choice of ODE solver.** Performance of time-continuous models is heavily tided to their numerical implementation approach (Hasani 2020). While LTCs perform well with advanced variable-step solvers and the Fused fixed-step solver introduced here, their performance is majorly influenced when off-the-shelf explicit Euler methods are used. 

**Time and Memory.** Neural ODEs are remarkably fast compared to more sophisticated models such as LTCs. Nonetheless, they lack expressivity. Our proposed model, in their current format, significantly enhances the expressive power of TC models at the expense of elevated time and memory complexity which must be investigated in the future. 

**Causality.** Models described by time-continuous differential equation semantics inherently possess causal structures (Sch¨olkopf 2019), especially models that are equipped with recurrent mechanisms to map past experiences to nextstep predictions. Studying causality of performant recurrent models such as LTCs would be an exciting future research direction to take, as their semantics resemble _dynamic causal models_ (Friston, Harrison, and Penny 2003) with a _bilinear dynamical system_ approximation (Penny, Ghahramani, and Friston 2005). Accordingly, a natural application domain would be the control of robots in continuous-time observation and action spaces where causal structures such as LTCs can help improve reasoning (Lechner et al. 2020a). 

## **Acknowledgments** 

R.H. and D.R. are partially supported by Boeing. R.H. and R.G. were partially supported by the Horizon-2020 ECSEL Project grant No. 783163 (iDev40). M.L. was supported in part by the Austrian Science Fund (FWF) under grant Z211N23 (Wittgenstein Award). A.A. is supported by the National Science Foundation (NSF) Graduate Research Fellowship Program. This research work is partially drawn from the PhD dissertation of R.H. 

## **References** 

Anguita, D.; Ghio, A.; Oneto, L.; Parra, X.; and Reyes-Ortiz, J. L. 2013. A public domain dataset for human activity recognition using smartphones. In _Esann_ . Bogacki, P.; and Shampine, L. F. 1989. A 3 (2) pair of Runge-Kutta formulas. _Applied Mathematics Letters_ 2(4): 321–325. 

Brockman, G.; Cheung, V.; Pettersson, L.; Schneider, J.; Schulman, J.; Tang, J.; and Zaremba, W. 2016. Openai gym. _arXiv preprint arXiv:1606.01540_ . 

Candanedo, L. M.; and Feldheim, V. 2016. Accurate occupancy detection of an office room from light, temperature, humidity and CO2 measurements using statistical learning models. _Energy and Buildings_ 112: 28–39. 

Che, Z.; Purushotham, S.; Cho, K.; Sontag, D.; and Liu, Y. 2018. Recurrent neural networks for multivariate time series with missing values. _Scientific reports_ 8(1): 1–12. 

Chen, T. Q.; Rubanova, Y.; Bettencourt, J.; and Duvenaud, D. K. 2018. Neural ordinary differential equations. In _Advances in Neural Information Processing Systems_ , 6571– 6583. 

Cybenko, G. 1989. Approximation by superpositions of a sigmoidal function. _Mathematics of control, signals and systems_ 2(4): 303–314. 

Dormand, J. R.; and Prince, P. J. 1980. A family of embedded Runge-Kutta formulae. _Journal of computational and applied mathematics_ 6(1): 19–26. 

Dua, D.; and Graff, C. 2017. UCI Machine Learning Repository. URL http://archive.ics.uci.edu/ml. 

Dupont, E.; Doucet, A.; and Teh, Y. W. 2019. Augmented neural odes. In _Advances in Neural Information Processing Systems_ , 3134–3144. 

Durkan, C.; Bekasov, A.; Murray, I.; and Papamakarios, G. 2019. Neural spline flows. In _Advances in Neural Information Processing Systems_ , 7509–7520. 

Eldan, R.; and Shamir, O. 2016. The power of depth for feedforward neural networks. In _Conference on learning theory_ , 907–940. 

Friston, K. J.; Harrison, L.; and Penny, W. 2003. Dynamic causal modelling. _Neuroimage_ 19(4): 1273–1302. 

Funahashi, K.-I. 1989. On the approximate realization of continuous mappings by neural networks. _Neural networks_ 2(3): 183–192. 

Funahashi, K.-i.; and Nakamura, Y. 1993. Approximation of dynamical systems by continuous time recurrent neural networks. _Neural networks_ 6(6): 801–806. 

Gabri´e, M.; Manoel, A.; Luneau, C.; Macris, N.; Krzakala, F.; Zdeborov´a, L.; et al. 2018. Entropy and mutual information in models of deep neural networks. In _Advances in Neural Information Processing Systems_ , 1821–1831. 

Gholami, A.; Keutzer, K.; and Biros, G. 2019. Anode: Unconditionally accurate memory-efficient gradients for neural odes. _arXiv preprint arXiv:1902.10298_ . 

Hanin, B.; and Rolnick, D. 2018. How to start training: The effect of initialization and architecture. In _Advances in Neural Information Processing Systems_ , 571–581. 

Hanin, B.; and Rolnick, D. 2019. Complexity of linear regions in deep networks. _arXiv preprint arXiv:1901.09021_ . 

Hanshu, Y.; Jiawei, D.; Vincent, T.; and Jiashi, F. 2020. On Robustness of Neural Ordinary Differential Equations. In _International Conference on Learning Representations_ . 

Hasani, R. 2020. _Interpretable Recurrent Neural Networks in Continuous-time Control Environments_ . PhD dissertation, Technische Universit¨at Wien. 

Hasani, R.; Amini, A.; Lechner, M.; Naser, F.; Grosu, R.; and Rus, D. 2019. Response characterization for auditing cell dynamics in long short-term memory networks. In _2019 International Joint Conference on Neural Networks (IJCNN)_ , 1–8. IEEE. Hasani, R.; Lechner, M.; Amini, A.; Rus, D.; and Grosu, R. 2020. The natural lottery ticket winner: Reinforcement learning with ordinary neural circuits. In _Proceedings of the 2020 International Conference on Machine Learning. JMLR. org_ . 

Hirsch, M. W.; and Smale, S. 1973. _Differential equations, dynamical systems and linear algebra_ . Academic Press college division. 

Hochreiter, S.; and Schmidhuber, J. 1997. Long short-term memory. _Neural computation_ 9(8): 1735–1780. 

Holl, P.; Koltun, V.; and Thuerey, N. 2020. Learning to Control PDEs with Differentiable Physics. _arXiv preprint arXiv:2001.07457_ . 

Hornik, K.; Stinchcombe, M.; and White, H. 1989. Multilayer feedforward networks are universal approximators. _Neural networks_ 2(5): 359–366. 

Hosea, M.; and Shampine, L. 1996. Analysis and implementation of TR-BDF2. _Applied Numerical Mathematics_ 20(1-2): 21–37. 

Jia, J.; and Benson, A. R. 2019. Neural jump stochastic differential equations. In _Advances in Neural Information Processing Systems_ , 9843–9854. 

Kingma, D. P.; and Ba, J. 2014. Adam: A method for stochastic optimization. _arXiv preprint arXiv:1412.6980_ . 

Koch, C.; and Segev, K. 1998. _Methods in Neuronal Modeling - From Ions to Networks_ . MIT press, second edition. 

Lapicque, L. 1907. Recherches quantitatives sur l’excitation electrique des nerfs traitee comme une polarization. _Journal de Physiologie et de Pathologie Generalej_ 9: 620–635. 

Lechner, M.; and Hasani, R. 2020. Learning Long-Term Dependencies in Irregularly-Sampled Time Series. _arXiv preprint arXiv:2006.04418_ . 

Lechner, M.; Hasani, R.; Amini, A.; Henzinger, T. A.; Rus, D.; and Grosu, R. 2020a. Neural circuit policies enabling auditable autonomy. _Nature Machine Intelligence_ 2(10): 642– 652. 

Lechner, M.; Hasani, R.; Rus, D.; and Grosu, R. 2020b. Gershgorin Loss Stabilizes the Recurrent Neural Network Compartment of an End-to-end Robot Learning Scheme. In _2020 International Conference on Robotics and Automation (ICRA)_ . IEEE. 

Lechner, M.; Hasani, R.; Zimmer, M.; Henzinger, T. A.; and Grosu, R. 2019. Designing worm-inspired neural networks for interpretable robotic control. In _2019 International Conference on Robotics and Automation (ICRA)_ , 87–94. IEEE. 

Lee, G.-H.; Alvarez-Melis, D.; and Jaakkola, T. S. 2019. Towards robust, locally linear deep networks. _arXiv preprint arXiv:1907.03207_ . 

Montufar, G. F.; Pascanu, R.; Cho, K.; and Bengio, Y. 2014. On the number of linear regions of deep neural networks. In _Advances in neural information processing systems_ , 2924– 2932. 

Mozer, M. C.; Kazakov, D.; and Lindsey, R. V. 2017. Discrete Event, Continuous Time RNNs. _arXiv preprint arXiv:1710.04110_ . 

Pascanu, R.; Mikolov, T.; and Bengio, Y. 2013. On the difficulty of training recurrent neural networks. In _International conference on machine learning_ , 1310–1318. 

Pascanu, R.; Montufar, G.; and Bengio, Y. 2013. On the number of response regions of deep feed forward networks with piece-wise linear activations. _arXiv preprint arXiv:1312.6098_ . 

Penny, W.; Ghahramani, Z.; and Friston, K. 2005. Bilinear dynamical systems. _Philosophical Transactions of the Royal Society B: Biological Sciences_ 360(1457): 983–993. 

Pontryagin, L. S. 2018. _Mathematical theory of optimal processes_ . Routledge. 

Poole, B.; Lahiri, S.; Raghu, M.; Sohl-Dickstein, J.; and Ganguli, S. 2016. Exponential expressivity in deep neural 

networks through transient chaos. In _Advances in neural information processing systems_ , 3360–3368. 

Press, W. H.; Teukolsky, S. A.; Vetterling, W. T.; and Flannery, B. P. 2007. _Numerical Recipes 3rd Edition: The Art of Scientific Computing_ . New York, NY, USA: Cambridge University Press, 3 edition. 

Quaglino, A.; Gallieri, M.; Masci, J.; and Koutn´ık, J. 2020. SNODE: Spectral Discretization of Neural ODEs for System Identification. In _International Conference on Learning Representations_ . 

Raghu, M.; Poole, B.; Kleinberg, J.; Ganguli, S.; and Dickstein, J. S. 2017. On the expressive power of deep neural networks. In _Proceedings of the 34th International Conference on Machine Learning-Volume 70_ , 2847–2854. JMLR. 

Rubanova, Y.; Chen, R. T.; and Duvenaud, D. 2019. Latent odes for irregularly-sampled time series. _arXiv preprint arXiv:1907.03907_ . 

Rumelhart, D. E.; Hinton, G. E.; and Williams, R. J. 1986. Learning representations by back-propagating errors. _nature_ 323(6088): 533–536. 

Sch¨afer, A. M.; and Zimmermann, H. G. 2006. Recurrent neural networks are universal approximators. In _International Conference on Artificial Neural Networks_ , 632–640. Springer. 

Sch¨olkopf, B. 2019. Causality for Machine Learning. _arXiv preprint arXiv:1911.10500_ . 

Serra, T.; Tjandraatmadja, C.; and Ramalingam, S. 2017. Bounding and counting linear regions of deep neural networks. _arXiv preprint arXiv:1711.02114_ . 

Shampine, L. F. 1975. Computer solution of ordinary differential equations. _The Initial Value Problem_ . 

Todorov, E.; Erez, T.; and Tassa, Y. 2012. Mujoco: A physics engine for model-based control. In _2012 IEEE/RSJ International Conference on Intelligent Robots and Systems_ , 5026– 5033. IEEE. 

Tsagris, M.; Beneki, C.; and Hassani, H. 2014. On the folded normal distribution. _Mathematics_ 2(1): 12–28. 

Wagner, P. K.; Peres, S. M.; Madeo, R. C. B.; de Moraes Lima, C. A.; and de Almeida Freitas, F. 2014. Gesture unit segmentation using spatial-temporal information and machine learning. In _The Twenty-Seventh International Flairs Conference_ . Wicks, S. R.; Roehrig, C. J.; and Rankin, C. H. 1996. A dynamic network simulation of the nematode tap withdrawal circuit: predictions concerning synaptic function using behavioral criteria. _Journal of Neuroscience_ 16(12): 4017– 4031. 

Zhang, K.; and Fan, W. 2008. Forecasting skewed biased stochastic ozone days: analyses, solutions and beyond. _Knowledge and Information Systems_ 14(3): 299–326. 

Zhuang, J.; Dvornek, N.; Li, X.; Tatikonda, S.; Papademetris, X.; and Duncan, J. 2020. Adaptive Checkpoint Adjoint Method for Gradient Estimation in Neural ODE. In _Proceedings of the 37th International Conference on Machine Learning_ . PMLR 119. 

## **Supplementary Materials** 

## **S1 Proof of Theorem 1** 

_Proof._ Assuming the neural network _f_ in Eq. 1, possesses a bounded sigmoidal nonlinearity which is a monotonically increasing between 0 and 1. Then for each neuron _i_ , we have: 

**==> picture [306 x 11] intentionally omitted <==**

**==> picture [487 x 12] intentionally omitted <==**

**==> picture [323 x 23] intentionally omitted <==**

The Equation simplifies to a linear ODE, of the form: 

**==> picture [368 x 36] intentionally omitted <==**

with a solution of the form: 

**==> picture [295 x 22] intentionally omitted <==**

From this solution, we derive the lower bound of the system’s time constant, _τsys[min] i_[:] 

**==> picture [304 x 22] intentionally omitted <==**

By replacing the lower-bound of _f_ in Eq. 1, the equation simplifies to an autonomous linear ODE as follows: 

**==> picture [495 x 39] intentionally omitted <==**

**==> picture [274 x 12] intentionally omitted <==**

## **S2 Proof of Theorem 2** 

_Proof._ Let us insert _M_ = _max{_ 0 _, A[max] i }_ as the neural state of neuron _i_ , _xi_ ( _t_ ) into Equation 1: 

**==> picture [355 x 21] intentionally omitted <==**

Now by expanding the brackets, we get 

**==> picture [360 x 37] intentionally omitted <==**

The right-hand side of Eq. S9, is negative based on the conditions on _M_ , positive weights, and the fact that _f_ ( _xj_ ) is also positive, Therefore, the left-hand-side must also be negative and if we perform an approximation on the derivative term, the following holds: 

**==> picture [340 x 22] intentionally omitted <==**

By substituting _xi_ ( _t_ ) with _M_ , we get: 

**==> picture [337 x 23] intentionally omitted <==**

and therefore: 

**==> picture [301 x 11] intentionally omitted <==**

Now if we replace _x_ ( _i_ ) by _m_ = _min{_ 0 _, A[min] i }_ , and follow a similar methodology used for the upper bound, we can derive: 

**==> picture [336 x 22] intentionally omitted <==**

and therefore: 

**==> picture [300 x 13] intentionally omitted <==**

## **S3 Proof of Theorem 3** 

We prove that any given _n_ -dimensional dynamical system for a finite simulation time can be approximated by the internal and output states of an LTC, with _n_ -outputs, some hidden nodes, and a proper initial condition. We base our proof on the fundamental universal approximation theorem (Hornik, Stinchcombe, and White 1989) on feedforward neural networks (Funahashi 1989; Cybenko 1989; Hornik, Stinchcombe, and White 1989), recurrent neural networks (RNN) (Funahashi 1989; Sch¨afer and Zimmermann 2006) and continuous-time RNNs (Funahashi and Nakamura 1993). The fundamental difference of the proof of the universal approximation capability of LTCs compared to that of CT-RNNs lies in the distinction of the semantics of both ODE systems. LTC networks contain a nonlinear input-dependent term in their time-constant module, represented in Eq. 1, which alters the entire dynamical system from that of CT-RNNs. Therefore, careful considerations have to be adjusted while taking the same approach to that of CT-RNNs for proving their universality. We first revisit preliminary statements that are used in the proof and are about basic topics on dynamical systems. 

THEOREM (The fundamental approximation theorem) (Funahashi 1989). Let **x** = ( _x_ 1 _, ..., xn_ ) be an _n_ -dimensional Euclidean space R _[n]_ . _Let f_ ( _x_ ) _be a sigmoidal function (a non-constant, monotonically increasing and bounded continous function in_ R _). Let K be a compact subset of_ R _[n] , and f_ ( _x_ 1 _, ..., xn_ ) _be a continuous function on K. Then, for an arbitrary ϵ >_ 0 _, there exist an integer N , real constants ci, θi_ ( _i_ = 1 _, ..., N_ ) _and wij_ ( _i_ = 1 _, ..., N_ ; _j_ = 1 _, ..., n_ ) _, such that_ 

**==> picture [354 x 31] intentionally omitted <==**

## _holds._ 

This theorem illustrates that three-layer feedforward neural networks (Input-hidden layer-output), can approximate any continuous mapping _g_ : R _[n] →_ R _[m]_ on a compact set. 

THEOREM (Approximation of dynamical systems by continuous time recurrent neural networks) (Funahashi and Nakamura˙ 1993). _Let D ⊂_ R _[n] and F_ : _D →_ R _[n] be an autonomous ordinary differential equation and C_[1] _-mapping, and let_ _**x**_ = _F_ ( _**x**_ ) _determine a dynamical system on D. Let K denote a compact subset of D and we consider the trajectories of the system on the interval I_ = [0 _, T_ ] _. Then, for an arbitrary positive ϵ, there exist an integer N and a recurrent neural network with N hidden units, n output units, and an output internal state_ _**u**_ ( _t_ ) = ( _U_ 1( _t_ ) _, ..., Un_ ( _t_ )) _, expressed as:_ 

**==> picture [343 x 30] intentionally omitted <==**

_where τi is the time-constant, wij are the weights, Ii_ ( _t_ ) _is the input, and f is a C_[1] _-sigmoid function (f_ ( _x_ ) = 1 _/_ (1+ _exp_ ( _−x_ )) _, such that for any trajectory {x_ ( _t_ ); _t ∈ I} of the system with initial value x_ (0) _∈ K, and a proper initial condition of the network the statement below holds:_ 

**==> picture [92 x 16] intentionally omitted <==**

The theorem was proved for the case where the time-constants, _τ_ , were kept constant for all hidden states, and the RNN was without inputs ( _Ii_ ( _t_ ) = 0) (Funahashi and Nakamura 1993). 

We now restate the necessary concepts from dynamical systems to be used in the proof. Where necessary, we adopt modifications and extensions to the Lemmas, for proving Theorem 1. 

**Lipschitz.** The mapping _F_ : _S →_ R _[n]_ , where S is an open subset of R _[n]_ , is called Lipschitz on _S_ if there exist a constant _L_ (Lipschitz constant), such that: 

**==> picture [334 x 11] intentionally omitted <==**

**Locally Lipschitz.** If every point of _S_ has neighborhood _S_ 0 in _S_ , such that the restriction _F | S_ 0 is Lipschitz, then _F_ is locally Lipschitz. 

**Lemma 1.** _Let a mapping F_ : _S →_ R _[n] be C_[1] _. Then F is locally Lipschitz. Also, if D ⊂ S is compact, then the restriction F | D is Lipschitz. (Proof in (Hirsch and Smale 1973), chapter 8, section 3)._ 

**Lemma 2.** _Let F_ : _S →_ R _[n] be a C_[1] _-mapping and x_ 0 _∈ S. There exists a positive a and a unique solution x_ : ( _−a, a_ ) _→ S of the differential equation_ 

**==> picture [274 x 11] intentionally omitted <==**

_which satisfies the initial condition x_ (0) = _x_ 0 _. (Proof in (Hirsch and Smale 1973), chapter 8, section 2, Theorem 1.)_ 

**Lemma 3.** _Let S be an open subset of_ R _[n] and F_ : _S →_ R _[n] be a C_[1] _-mapping. On a maximal interval J_ = ( _α, β_ ) _⊂_ R _, let x(t) be a solution. Then for any compact subset D ⊂ S, there exists some t ∈_ ( _α, β_ ) _, for which x_ ( _t_ ) _∈/ D. (Proof in (Hirsch and Smale 1973), Chapter 8, section 5, Theorem)._ 

**Lemma 4.** _For an F_ : R _[n] →_ R _[n] which is a bound C_[1] _-mapping, the differential equation_ 

**==> picture [288 x 19] intentionally omitted <==**

_where τ >_ 0 _has a unique solution on_ [0 _, ∞_ ) _. (Proof in (Funahashi and Nakamura 1993), Section 4, Lemma 4)._ **Lemma 5.** _For an F_ : R _[n] →_ R[+] _[n] which is a bounded C_[1] _-mapping, the differential equation_ 

**==> picture [319 x 11] intentionally omitted <==**

_in which τ is a positive constant, and A is constant coefficients bound to a range_ [ _−α, β_ ] _for_ 0 _< α <_ + _∞, and_ 0 _≤ β <_ + _∞, has a unique solution on_ [0 _, ∞_ ) _._ 

_Proof._ Based on the assumptions, we can take a positive _M_ , such that 

**==> picture [314 x 11] intentionally omitted <==**

by looking at the solutions of the following differential equation: 

**==> picture [308 x 10] intentionally omitted <==**

we can show that 

**==> picture [374 x 23] intentionally omitted <==**

if we set the output of the max to _Cmaxi_ and the output of the min to _Cmini_ and also set _C_ 1 = _min{Cmini}_ and _C_ 2 = _max{Cmaxi}_ , then the solution _x_ ( _t_ ) satisfies 

**==> picture [302 x 12] intentionally omitted <==**

Based on Lemma 2 and Lemma 3 a unique solution exists on the interval [0 _,_ + _∞_ ). 

Lemma 5 demonstrates that an LTC network defined by Eq. S20, has a unique solution on [0 _, ∞_ ), since the output function is bounded and is a _C_[1] mapping. 

**Lemma 6.** _Let two continuous mapping F, F_[˜] : _S →_ R _[n] be Lipschitz, and L be a Lipschitz constant of F . if ∀x ∈ S,_ 

**==> picture [292 x 12] intentionally omitted <==**

_holds, if_ _**x**_ ( _t_ ) _and_ _**y**_ ( _t_ ) _are solutions to_ 

**==> picture [273 x 28] intentionally omitted <==**

_on some interval J, such that x_ ( _t_ 0) = _y_ ( _t_ 0) _, then_ 

**==> picture [318 x 19] intentionally omitted <==**

_(Proof in (Hirsch and Smale 1973), chapter 15, section 1, Theorem 3)._ 

## **S3.1 Proof of the Theorem:** 

_Proof._ Using the above definitions and lemmas, we prove that LTCs are universal approximators. 

Part 1. We choose an _η_ which is in range (0 _, min{ϵ, λ}_ ), for _ϵ >_ 0, and _λ_ the distance between _D_[˜] and boundary _δS_ of _S_ . _Dη_ is set: 

**==> picture [330 x 13] intentionally omitted <==**

_Dη_ stands for a compact subset of _S_ , because _D_[˜] is compact. Thus, _F_ is Lipschitz on _Dη_ by Lemma 1. Let _LF_ be the Lipschitz constant of _F |Dη_ , then, we can choose an _ϵl >_ 0, such that 

**==> picture [287 x 24] intentionally omitted <==**

Based on the universal approximation theorem, there is an integer _N_ , and an _n × N_ matrix _A_ , and an _N × n_ matrix _C_ and an _N_ -dimensional vector _µ_ such that 

**==> picture [319 x 19] intentionally omitted <==**

We define a _C_[1] -mapping _F_[˜] : R _[n] →_ R _[n]_ as: 

**==> picture [360 x 13] intentionally omitted <==**

with parameters matching that of Eq. 1 with _Wl_ = _W_ . We set system’s time-constant, _τsys_ as: 

**==> picture [314 x 24] intentionally omitted <==**

We chose a large _τsys_ , conditioned with the following: 

**==> picture [345 x 49] intentionally omitted <==**

where _LG_ ˜ _[/]_[2][is][a][lipschitz][constant][for][the][mapping] _[W][l][f]_[:][R] _[n]_[+] _[N][→]_[R] _[n]_[+] _[N]_[which][we][will][determine][later.][To][satisfy] conditions (a) and (b), _τWl <<_ 1 should hold true. 

Then by Eq. S31 and S32, we can prove: 

**==> picture [302 x 18] intentionally omitted <==**

Let’s set **x** ( _t_ ) and ˜ **x** _t_ ) with initial state _x_ (0) = _x_ ˜(0) = _x_ 0 _∈ D_ , as the solutions of equations below: 

**==> picture [273 x 11] intentionally omitted <==**

**==> picture [273 x 13] intentionally omitted <==**

Based on Lemma 6 for any _t ∈ I_ , 

**==> picture [317 x 44] intentionally omitted <==**

Thus, based on the conditions on _ϵ_ , 

**==> picture [299 x 19] intentionally omitted <==**

Part 2. Let’s Consider the following dynamical system defined by _F_[˜] in Part 1: 

**==> picture [316 x 24] intentionally omitted <==**

Suppose we set ˜ **y** = _γ_ ˜ **x** + _µ_ ; then: 

**==> picture [326 x 24] intentionally omitted <==**

where _E_ = _γWlA_ , an _N × N_ matrix. We define 

**==> picture [307 x 11] intentionally omitted <==**

and we set a mapping _G_[˜] : R _[n]_[+] _[N] →_ R _[n]_[+] _[N]_ as: 

**==> picture [322 x 24] intentionally omitted <==**

where; 

**==> picture [318 x 25] intentionally omitted <==**

**==> picture [318 x 24] intentionally omitted <==**

Now using Lemma 2, we can show that solutions of the following dynamical system: 

**==> picture [317 x 13] intentionally omitted <==**

are equivalent to the solutions of the Eq. S42. Let’s define a new dynamical system _G_ : R _[n]_[+] _[N] →_ R _[n]_[+] _[N]_ as follows: 

**==> picture [307 x 25] intentionally omitted <==**

where **z** = ( _x_ 1 _, ..., xn, y_ 1 _, ..., yn_ ). Then the dynamical system below 

**==> picture [299 x 24] intentionally omitted <==**

can be realized by an LTC, if we set **h** ( _t_ ) = ( _h_ 1( _t_ ) _, ..., hN_ ( _t_ )) as the hidden states, and **u** ( _t_ ) = ( _U_ 1( _t_ ) _, ..., Un_ ( _t_ )) as the output states of the system. Since _G_[˜] and _G_ are both _C_[1] -mapping and _f[′]_ ( **x** ) is bound, therefore, the mapping ˜ **z** _�→ Wf_ (˜ **z** ) is Lipschitz on R _[n]_[+] _[N]_ , with a Lipschitz constant _LG_ ˜ _[/]_[2][. As] _[ L] G_[ ˜] _[/]_[2][ is lipschitz constant for] _[ −][z/τ]_[˜] _[sys]_[by condition (b) on] _[ τ][sys]_[,] _[ L] G_[ ˜] is a Lipschitz constant of _G_[˜] . 

From Eq. S45, Eq. S49, and condition (b) of _τsys_ , we can derive the following: 

**==> picture [336 x 25] intentionally omitted <==**

Accordingly, we can set ˜ **z** ( _t_ ) and **z** ( _t_ ), solutions of the dynamical systems: 

**==> picture [321 x 25] intentionally omitted <==**

**==> picture [321 x 25] intentionally omitted <==**

By Lemma 6, we achieve 

**==> picture [299 x 19] intentionally omitted <==**

and therefore we have: 

**==> picture [300 x 19] intentionally omitted <==**

_τsys_ Part3. Now by usingand _W_ . For x(t) satisfyingEq. S41 **x** ˙and Eq. = _F_ ( **x** )S55, for, if we initialize the network bya positive _ϵ_ , we can design an LTC with internal dynamical state _u_ (0) = _x_ (0) and _h_ (0) = _γx_ (0) + _µ_ , we obtain: **z** ( _t_ ), with 

**==> picture [328 x 19] intentionally omitted <==**

REMARKS. LTCs allow the elements of the hidden layer to have recurrent connections to each other. However, it assumes a feed-forward connection stream from hidden nodes to output units. We assumed no inputs to the system and principally showed that the hidden nodes’ together with output units, could approximate any finite trajectory of an autonomous dynamical system. 

## **S4 Proof of Theorem 4** 

In this section, we describe our mathematical notions and revisit concepts that are required to state the proof. The main statements of our theoretical results about the expressive power of time-continuous neural networks are chiefly built over the expressivity measure, _trajectory length_ , introduced for static deep neural networks in (Raghu et al. 2017). It is therefore intuitive to follow similar steps with careful considerations, due to the continuous nature of the models. 

## **S4.1 Notations** 

_Neural network architecture –_ We determine a neural network architecture by _fn,k_ ( _x_ ( _t_ ) _, I_ ( _t_ ) _, θ_ ) _d_ , with n layers (depth),width k and total number of neurons, _N_ = _n × k_ . 

_Neural state, x(t) –_ For a layer d of a network _f_ , _x_[(] _[d]_[)] ( _t_ ) represent the neural state of the layer and is a matrix of the size _k × m_ , with m being the size of the input time series. 

_Inputs, I(t) –_ is a 2-dimensional matrix containing a 2-D trajectory for _t ∈_ [0 _, tmax_ ]. 

_Network parameters, θ –_ include weights matrices for each layer d of the form _W_[(] _[d]_[)] _∼N_ (0 _, σw_[2] _[/k]_[)][and][bias][vectors][as] _b_[(] _[d]_[)] _∼N_ (0 _, σb_[2][)][. For CT-RNNs the vector parameter] _[ τ]_[ (] _[d]_[)][is also sampled from] _[ ∼N]_[(0] _[, σ] b_[2][)] _Perpendicular and parallel components –_ For given vectors _x_ and _y_ we can decompose each vector in respect to one another as _y_ = _y∥_ + _y⊥_ . That is, _y∥_ stands for component of _y_ parallel to _x_ and _y⊥_ is the perpendicular component in respect to _x_ . _Weight matrix decomposition –_ (Raghu et al. 2017) showed that for given non-zero vectors _x_ and _y_ , and a full rank matrix _W_ , one can write a matrix decomposition for _W_ in respect to _x_ and _y_ as follows: _W_ = _∥W∥_[+] _∥[W] ⊥_[+] _⊥W∥_[+] _⊥W⊥_[, such] _∥ ⊥ ⊥ ⊥_ that, _W⊥[x]_[=][0][,] _W⊥[x]_[=][0][,] _[y][T] W∥_[=][0][and] _[y][T] W⊥_[=][0][.][In][this][notation,][the][decomposition][superscript][on][left][is][in] respect to _y_ and the subscript on right is in respect to _x_ . It has also been observed that _W⊥_ in respect to x can be obtained by: _W⊥_ = _W − W∥_ (Raghu et al. 2017). 

**Lemma 7.** Independence of Projections (Raghu et al. 2017). _Given a matrix W with iid entries drawn form N_ (0 _, σ_[2] ) _, then its decomposition matrices W⊥ and W∥ in respect to x, are independent random variables._ 

Proof in (Raghu et al. 2017), Appendix, Lemma 2. 

**Lemma 8.** Norm of Gaussian Vector (Raghu et al. 2017). _The norm of a Gaussian vector X ∈_ R _[k] , with its entries sampled iid ∼N_ (0 _, σ_[2] ) _is given by:_ 

**==> picture [314 x 24] intentionally omitted <==**

Proof in (Raghu et al. 2017), Appendix, Lemma 3. 

**Lemma 9.** Norm of Projections (Raghu et al. 2017). _for a W[k][×][k] with conditions of Lemma 8, and two vectors, x and y, then the following holds for x⊥ being a non-zero vector, perpendicular to x:_ 

**==> picture [393 x 24] intentionally omitted <==**

_It has also been shown in (Raghu et al. 2017): ”that if_ 1 _A is an identity matrix with non-zero diagonal entry i iff i ∈A ⊂_ [ _k_ ] _and |A| >_ 2 _, then:_ 

**==> picture [410 x 25] intentionally omitted <==**

Proof in (Raghu et al. 2017), Appendix, Lemma 4. 

**Lemma 10.** Norm and Translation (Raghu et al. 2017). _For X being a zero-mean multivariate Gaussian and having a diagonal covariance matrix, and µ a vector of constants, we have:_ 

**==> picture [301 x 11] intentionally omitted <==**

Proof in (Raghu et al. 2017), Appendix, Lemma 5. 

## **S4.2 Beginning of the proof of Theorem 4** 

_Proof._ For a successive layer _d_ + 1 of a Neural ODE the gradient between the states at _t_ + _δt_ and _t_ , _x[d]_[+1] ( _t_ + _δt_ ) and _x[d]_[+1] ( _t_ ) is determined by: 

**==> picture [350 x 24] intentionally omitted <==**

Accordingly, for the latent representation (the first two principle components of the hidden state _x_[(] _[d]_[+1)] ), which is denoted by _z_[(] _[d]_[+1)] ( _t_ ), this gradient can be determined by: 

**==> picture [348 x 24] intentionally omitted <==**

Let us continue with the zero bias case and discuss the non-zero bias case later. 

We decompose _W_[(] _[d]_[)] in respect to the _z_[(] _[d]_[)] , as _W_[(] _[d]_[)] = _W∥_[(] _[d]_[)] + _W⊥_[(] _[d]_[)][.][For][this][decomposition,][the][hidden][state] _[h]_[(] _[d]_[+1)][=] _W∥_[(] _[d]_[)] _z_[(] _[d]_[)] as the vertical components maps _z_[(] _[d]_[)] to zero. We determine the set of indices for which the gradient state is not saturated as if _f_ is defined by Hard-tanh activations: 

**==> picture [324 x 19] intentionally omitted <==**

As the decomposition components of _W_[(] _[d]_[)] are independent random variables, based on Lemma 9, we can build the expectation of the gradient state as follows: 

**==> picture [366 x 31] intentionally omitted <==**

Now, if we condition on _W∥_[(] _[d]_[)] , we can replace the right-hand-side norm with the sum over the non-saturated indices, _AW_ ( _∥d_ ) as follows: 

**==> picture [430 x 41] intentionally omitted <==**

We need to derive a recurrence for the Eq. S65. To do this, we start a decomposition of the gradient state in respect to _z_[(] _[d]_[)] as _dzdt_ ( _d_ ) = _dzdt_ ( _∥d_ ) + _[dz] dt_ ( _⊥d_ )[.] Now, let _dzdt_ ˜ ( _d_ +1) = 1 _AW∥_[(] _[d]_[)] _h_[(] _[d]_[+1)] , be the latent gradient vector of all unsaturated units, and zeroed saturated units. Also we 

decompose the column space of the weight matrix in respect to _z_ ˜[(] _[d]_[+1)] as: _W_[(] _[d]_[)] = _⊥W_ ( _d_ ) + _∥W_ ( _d_ ). Then by definition, we have the following expressions: 

**==> picture [404 x 24] intentionally omitted <==**

**==> picture [358 x 13] intentionally omitted <==**

Looking at Eq. S66 and Eq. S67, and based on the definitions provided, their right-hand-side are equal to each other for any _i ∈A_ . Therefore, their left-hand-sides are equivalent as well. More precisely: 

**==> picture [313 x 24] intentionally omitted <==**

The statement in Eq. S68 allows us to determine the following inequality, which builds up the first steps for the recurrence: 

**==> picture [311 x 31] intentionally omitted <==**

Now let us return to Eq. S65, and plug in the following decompositions: 

**==> picture [300 x 26] intentionally omitted <==**

**==> picture [388 x 16] intentionally omitted <==**

we have: 

**==> picture [437 x 76] intentionally omitted <==**

As stated in Theorem 4, we conditioned the input on its perpendicular components. Therefore, we write the recurrence of the states also for their perpendicular components by dropping the parallel components, _∥W⊥_ ( _d_ ) and _∥W∥_ ( _d_ ), and using Eq. S69 as follows: 

**==> picture [441 x 41] intentionally omitted <==**

The term _⊥W∥_ ( _d_ ) _z∥_[(] _[d]_[)] is constant, as the inner expectation is conditioned on _W∥_[(] _[d]_[)] . Now by using Lemma 10, we can wirte: 

**==> picture [385 x 87] intentionally omitted <==**

By applying Lemma 9 we get: 

**==> picture [421 x 43] intentionally omitted <==**

**==> picture [505 x 49] intentionally omitted <==**

**==> picture [403 x 32] intentionally omitted <==**

Keep in mind that we are referring to _|AW_ ( _d_ )[as] _[j]_[.][Now][we][need][to][bound][the] _[√] j_ term, by considering the binomial _∥[|]_ distribution represented by the sum. Consequently, we can rewrite the sum in Eq. S78 as follows: 

**==> picture [374 x 82] intentionally omitted <==**

and by utilizing Jensen’s inequality with 1 _/[√] x_ , we can simplify XT as follows as it is the expectation of the binomial distribution ( _k −_ 1 _, p_ ) (Raghu et al. 2017): 

**==> picture [377 x 47] intentionally omitted <==**

and therefore: 

**==> picture [429 x 32] intentionally omitted <==**

Now we need to find a range for _p_ . (Raghu et al. 2017) showed that for Hard-tanh activations, given the fact that _hi_[(] _[d]_[+1)] is a random variable with variance less than _σw_ , for an input argument _|A| ∼N_ (0 _, σw_[2][)][, we can lower bound] _[ p]_[ =][ P][(] _[|][h]_[(] _i[d]_[+1)] _| <_ 1), as follows: 

**==> picture [374 x 24] intentionally omitted <==**

and find an upper bound equal to _σ_ 1 _w_[(Raghu et al. 2017). Therefore the equation becomes:] 

**==> picture [450 x 37] intentionally omitted <==**

and with some simplifications: 

**==> picture [449 x 36] intentionally omitted <==**

Now, we want to roll back Eq. S82 to arrive at the inputs. To do this, we replace the expectation term on the right-hand-side by: 

**==> picture [320 x 31] intentionally omitted <==**

**Proposition 1.** _Let f_ : R _→ S, be an integratable function, on Banach space S. Then the following holds:_ 

**==> picture [309 x 26] intentionally omitted <==**

_Proof._ let _x_ = � _t[f]_[(] _[t]_[)] _[dt][∈][S]_[, and][ Λ] _[ ∈][S][∗]_[with] _[ ∥]_[Λ] _[∥]_[= 1][. Then we have:] 

**==> picture [367 x 24] intentionally omitted <==**

Now based on Hahn-Banach we have: _∥x∥≤_ � _t[∥][f]_[(] _[t]_[)] _[∥][dt]_[.] Based on Proposition 1 and Eq. S83 we have: 

**==> picture [362 x 31] intentionally omitted <==**

Now by By recursively rolling out the the expression of Eq. S82 to arrive at input, _I_ ( _t_ ) and denoting _c_ 1 = _[l]_[(] _l_ ( _[I] I[⊥]_ ([(] _t[t]_ ))[))][, we have:] 

**==> picture [454 x 38] intentionally omitted <==**

Finally, the asymptotic form of the bound, and considering _c_ 1 _≈_ 1 for input trajectories which are orthogonal to their successive time-points gives us: 

**==> picture [352 x 34] intentionally omitted <==**

Eq. S88 shows the lower bound for every infinitesimal fraction of the length of the hidden state (in principle components state, _z_ , for a neural ODE architecture. consequently, the overall trajectory length is bounded by: 

**==> picture [341 x 31] intentionally omitted <==**

with _L_ being the number ODE steps. Finally we consider the non-zero bias case: As stated in the Notations section, network parameters are set by _W_[(] _[d]_[)] _∼N_ (0 _, σw_[2] _[/k]_[)][ and bias vectors as] _[ b]_[(] _[d]_[)] _[∼N]_[(0] _[, σ] b_[2][)][.] Therefore, the variance of the _h_[(] _i[d]_[+1)] will be smaller than _σw_[2][+] _[ σ] b_[2][. Therefore we have (Raghu et al. 2017):] 

**==> picture [334 x 25] intentionally omitted <==**

By replacing this into Eq. S79, and simplify further we get: 

**==> picture [377 x 38] intentionally omitted <==**

the main statement of Theorem 4 for Neural ODEs is obtained. 

**Deriving the trajectory length lower-bound for CT-RNNs** For a successive layer _d_ +1 of a CT-RNN the gradient between the states at _t_ + _δt_ and _t_ , _x[d]_[+1] ( _t_ + _δt_ ) and _x[d]_[+1] ( _t_ ) is determined by: 

**==> picture [388 x 24] intentionally omitted <==**

With _Wτ_[(] _[d]_[+1)] standing for the parameter vector _τ_[(] _[d]_ 1[+1)][, which is conditioned to be strictly positive. Accordingly, for the latent] representation (the first two principle components of the hidden state _x_[(] _[d]_[+1)] ), which is denoted by _z_[(] _[d]_[+1)] ( _t_ ), this gradient can be determined by: 

**==> picture [387 x 25] intentionally omitted <==**

An explicit Euler discretization of this ODE gives us: 

**==> picture [420 x 13] intentionally omitted <==**

the same discretization model for Neural ODEs gives us: 

**==> picture [387 x 13] intentionally omitted <==**

The difference between the two representations is only a _−δtWτ_[(] _[d]_[+1)] term before _z_[(] _[d]_[+1)] , which consists of _Wτ_[(] _[d]_[+1)] that is a strictly positive random variable sampled from a folded normal distribution _N_ ( _|x|_ ; _µY , σY_ ), with mean _µY_ = _σ_ � _π_ 2 _[e]_[(] _[−][µ]_[2] _[/]_[2] _[σ]_[2][)] _[−][µ]_[(1] _[−]_[2Φ(] _σ[µ]_[))][and][variance] _[σ] Y_[2][=] _[µ]_[2][+] _[σ]_[2] _[−][µ]_[2] _Y_[(Tsagris,][Beneki,][and][Hassani][2014).] _[µ]_[and] _[σ]_[are] the mean and variance of the normal distribution over random variable _x_ , and Φ is a normal cumulative distribution function. For a zero-mean normal distribution with variance of _σb_[2][, we get:] 

**==> picture [314 x 25] intentionally omitted <==**

Accordingly, we approximate the lower-bound for the CT-RNNs, with the simplified asymptotic form of: 

**==> picture [377 x 38] intentionally omitted <==**

This gives of the statement of the theorem for CT-RNNs. 

## **Proof of Theorem 5** 

## **Distribution of parameters of LTCs** 

The Weight matrix for each layer d of the form _W_[(] _[d]_[)] _∼N_ (0 _, σw_[2] _[/k]_[)][.][The][bias][vectors][as] _[b]_[(] _[d]_[)] _[∼N]_[(0] _[, σ] b_[2][)][.][The][vector] parameter _Wτ_[(] _[d]_[+1)] is strictly positive and it is sampled from a folded normal distribution (Tsagris, Beneki, and Hassani 2014) _N_ ( _|Wτ |_ ; _σb_ � _π_ 2 _[,]_[(1] _[ −] π_[2][)] _[σ] b_[2][)][. The parameter stands for the inverse of the time-constant of neurons,] _τ_[(] _[d]_ 1[+1)][The parameter] _[ A]_[(] _[d]_[)] is a weight matrix sampled from _∼N_ (0 _, σw_[2] _[/k]_[)][.] 

_Proof._ For a successive layer _d_ +1 of an LTC network, the gradient between the states at _t_ + _δt_ and _t_ , _x[d]_[+1] ( _t_ + _δt_ ) and _x[d]_[+1] ( _t_ ) is determined by: 

**==> picture [422 x 24] intentionally omitted <==**

Accordingly, for the latent representation (the first two principle components of the hidden state _x_[(] _[d]_[+1)] ), which is denoted by _z_[(] _[d]_[+1)] ( _t_ ), this gradient can be determined by: 

**==> picture [422 x 24] intentionally omitted <==**

We first take the expectation of norms from both side of Eq. S99, while similar to Eq. S64 and based on Lemma 9, we decompose the expectation over parallel and orthogonal components of the weight matrix _W_[(] _[d]_[)] as follows: 

**==> picture [428 x 32] intentionally omitted <==**

We can now derive the following inequality for the norms of difference versus difference of norms as follows: 

**==> picture [412 x 101] intentionally omitted <==**

Let us first focus on the **right expression** in Eq. S104. The norm can be split into the norm of products, as follows: 

**==> picture [351 x 21] intentionally omitted <==**

Now by conditioning the expectations by the following rule E[ _XY_ ] = E[ _X_ ]E[ _Y_ ], we get: 

**==> picture [360 x 20] intentionally omitted <==**

We determine the set of indices for which _f_ is not saturated and we assume that it is defined by Hard-tanh activations: 

**==> picture [325 x 19] intentionally omitted <==**

**==> picture [496 x 58] intentionally omitted <==**

In Eq. S108, the term _[w] τ_[(] _[d]_[+1)] determines the average effect of the time-constant weights in the computation of each state _|A|_ which is a constant addition. _|A|_ is the number of non-saturated states. Now by taking similar steps, from Eq. S65 to Eq. S77, and by applying Lemma 9 to Eq. S108, we have: 

**==> picture [409 x 86] intentionally omitted <==**

As we selected Hard-tanh activation functions with _p_ = P( _|h_[(] _i[d]_[+1)] _| <_ 1), and the condition _|AW_ ( _d_ ) _[≥]_[2][we][have] _∥[|]_ 

**==> picture [505 x 132] intentionally omitted <==**

Finally, we have: 

**==> picture [443 x 96] intentionally omitted <==**

Now if we take the computational steps from Eq. S78 to S79, we obtain the following: 

As stated before, network parameters are set by _W_[(] _[d]_[)] _∼N_ (0 _, σw_[2] _[/k]_[)][ and bias vectors as] _[ b]_[(] _[d]_[)] _[∼N]_[(0] _[, σ] b_[2][)][. Therefore, the] variance of the _hi_[(] _[d]_[+1)] will be smaller than _σw_[2][+] _[ σ] b_[2][. Therefore we have (Raghu et al. 2017):] 

**==> picture [335 x 26] intentionally omitted <==**

This will give us the following asymptotic bound for the right expression of Eq. S104 as follows: 

**==> picture [373 x 58] intentionally omitted <==**

Now let us work with the **Left expression** in Eq. S104: 

**==> picture [315 x 21] intentionally omitted <==**

As _A_ serves as a constant, we can take it out of the norm and the expectations. The resulting expectation of the norm, precisely expresses a deep neural network _f_ with Hard-tanh activations, for which (Raghu et al. 2017) showed that it can be bound as follows: 

**==> picture [426 x 36] intentionally omitted <==**

And since _A ∼N_ (0 _, σw_[2][)][, the bound can be computed as follows:] 

**==> picture [413 x 35] intentionally omitted <==**

Therefore, for the perpendicular compartments of the gradient of the hidden state, we have: 

**==> picture [426 x 74] intentionally omitted <==**

If we simplify further and considering the fact that we are shaping the recurrence for every infinitesimal _δt_ of the system’s dynamics, we get the following asymptotic bound: 

**==> picture [436 x 36] intentionally omitted <==**

Now similar as before, by recursively unrolling the _n_ layer neural network _f_ to reach the input, denoting _c_ 1 = _[l]_[(] _l_ ( _[I] I[⊥]_ ([(] _t[t]_ ))[))] _[≈]_[1][,] and establishing the bound for an input sequence of length _T_ , for a layer _d_ of a network we get: 

**==> picture [426 x 36] intentionally omitted <==**

Equation S120 gives us the statement of the theorem. 

## **S5 Experimental Setup - Section 6** 

Here, we describe the experimental setup for the tasks discussed in Tables 3, 4, 5, and 6. 

For each experiment we performed a training-validation-test split of 75:10:15 ratio, with the exact ratios depending on the specific dataset. After each training epoch the validation metric was evaluated. We kept a backup of the network weights of the configuration that achieved the best validation metric over the whole training process. At the end of the training process, we restored the backed-up weights and evaluated the network on the test-set. We repeated this procedure for five times with different weight initializations and reported the mean and standard deviation in Tables 3, 4, 5, and 6. Hyper-parameters are shown in Table S1. 

Each RNN consists of 32 hidden units. As each task requires a different number of output units, the output of the RNNs were fed through a learnable linear layer to project the output to the required dimension. Note that the objective of our experimental setup is not to build the best predictive models, but to empirically compare the expressive power and generalization abilities of various RNN models. 

We implemented all RNN models in TensorFlow1.14. For the sake of reproducability, we have submitted all code and data along with our submission and will make them publicly available upon acceptance. 

**ODE solvers** For simulating the differential equations we used an explicit Euler methods for CT-RNNs, a 4-th order RungeKutta method for the Neural ODE as suggested in (Chen et al. 2018), and our fused ODE solver for LTCs. All ODE solvers were fixed-step solvers. The time-step is set to 1/6 of the input sampling frequency, i.e., each RNN step consists of 6 ODE solver steps. 

**Hand Gesture Segmentation** The experiment concerns the temporal segmentation of hand gestures. The dataset consists of seven recordings of individuals performing a sequence of hand gesticulations (Wagner et al. 2014). The input features at each time-step are comprised of 32 data points recorded from a motion detection sensor. The output, at each time step, represents one of the five possible hand gestures; rest position, preparation, stroke, hold, and retraction. The objective is to train a classifier to detect hand gestures from the motion data. 

We cut each of the seven recordings into overlapping sub-sequences of exactly 32 time-steps. We randomly separated all sub-sequences into non-overlapping training (75%), validation (10%), and test (15%) sets. Input features were normalized to have zero mean and unit standard deviation. We used the categorical classification accuracy as the performance metric. 

**Room Occupancy** The objective is to detect whether a room is occupied by observations recorded from five physical sensor streams, such as temperature, humidity, and CO2 concentration sensors (Candanedo and Feldheim 2016). Input data and binary labels are sampled in one-minute long intervals. 

The original dataset consists of a pre-defined training and test set. We used the binary classification accuracy as the performance metric. We cut the sequences of each of the two sets into a training and test set of overlapping sub-sequences of exactly 32 time-steps. Note that no item from the test set was leaking into the training set during this process. Input features of all data were normalized by the mean and standard deviation of the training set, such that the training set has zero mean and unit standard deviation. We select 10% of the training set as the validation set. 

**Human Activity Recognition** This task involves the recognition of human activities, such as walking, sitting, and standing, from inertial measurements of the user’s smartphone (Anguita et al. 2013). Data consists of recordings from 30 volunteers performing activities form six possible categories. Input variables are filtered and are pre-processed to obtain a feature column of 561 items at each time step. 

The output variable represents one of six activity categories at each time step. We employed the categorical classification accuracy as our performance metric. The original data is already split into a training and test set and preprocessed by temporal filters. The accelerometer and gyroscope sensor data were transformed into 561 features in total at each time step. We aligned the sequences of the training and test set into overlapping sub-sequences of exactly 32 time-steps. We select 10% of the training set as the validation set. 

**Sequential MNIST** We also worked with MNIST. While the original MNIST is a computer vision classification problem, we transform the dataset into a sequence classification task. In particular, each sample is encoded as a 28-dimensional timeseries of length 28. Moreover, we downscale all input feature to the range [0,1]. We exclude 10% of the training set and use it as our validation set. 

**Traffic Estimation** The objective of this experiment is to predict the hourly westbound traffic volume at the US Interstate 94 highway between Minneapolis and St. Paul. Input features consist of weather data and date information such as local time and flags indicating the presence of weekends, national, or regional holidays. The output variable represents the hourly traffic volume. 

The original data consists of hourly recordings between October 2012 and October 2018, provided by the Minnesota Department of Transportation and OpenWeatherMap. We selected the seven columns of the data as input features: 1. Flag indicating whether the current day is a holiday, 2. The temperature in Kelvin normalized by annual mean, 3. Amount of rainfall, 4. Amount of snowfall, 5. Cloud coverage in percent, 6. Flag indicating whether the current day is a weekday, and 7. time of the day preprocessed by a sine function to avoid the discontinuity at midnight. The output variable was normalized to have zero mean and unit standard deviation. We used the mean-squared-error as training loss and evaluation metric. We split the data into partially overlapping sequences lasting 32 hours. We randomly separated all sequences into non-overlapping training (75%), validation (10%), and test (15%) set. 

**Power** We used the ”Individual household electric power consumption Data Set” from the UCI machine learning repository (Dua and Graff 2017). Objective of this task is to predict the hourly active power consumption of a household. Input features are secondary measurement such as the reactive power draw and sub-meterings. Approximately 1.25% of all measurements are missing, which we overwrite by the most recent measurement of the same feature. We apply a feature-wise whitening normalization and split the dataset into non-overlapping sub-sequences of length 32 time-steps. The prediction variable (active power consumption) is also whitened. We use the squared-error as optimization loss and evaluation metric. 

**Ozone Day Prediction** The objective of task is to forecast ozone days, i.e., days when the local ozone concentration exceeds a critical level. Input features consist of wind, weather, and solar radiation readings. 

The original dataset ”Ozone Level Detection Data Set” was taken from the UCI repository (Dua and Graff 2017) consists of daily data points collected by the Texas Commission on Environmental Quality (TCEQ). We split the 6-years period into overlapping sequences of 32 days. A day was labeled as ozone day if, for at least 8 hours, the exposure to ozone exceeded 80 parts per billion. Inputs consist of 73 features, including wind, temperature, and solar radiation data. The binary predictor variable has a prior of 6.31%, i.e., expresses a 1:15 imbalance. For the training procedure, we weighted the cross-entropy loss at each day, depending on the label. Labels representing an ozone day were assigned 15 times the weight of a non-ozone day. Moreover, we reported the _F_ 1-score instead of standard accuracy (higher score is better). 

In roughly 27% of all samples, some of the input features were missing. To not disrupt the continuity of the collected data, we set all missing features to zero. Note that such zeroing of some input features potentially negatively affects the performance of our RNN models compared to non-recurrent approaches and filtering out the missing data. Consequently, ensemble methods and model-based approaches, i.e., methods that leverage domain knowledge (Zhang and Fan 2008), can outperform the endto-end RNNs studied in our experiment. We randomly split all sub-sequences into training (75%), validation (10%), and test (15%) set. 

**Person Activity - 1st Setting** In this setting we used the ”Human Activity” dataset described in (Rubanova, Chen, and Duvenaud 2019). However, as we use different random seeds for the training-validation-test splitting, and a different input representation, our results are not transferable directly to those obtained by (Rubanova, Chen, and Duvenaud 2019), in the current setting. 

The dataset consists of 25 recordings of various physical activity of human participants, for instance, among others lying 

down, walking, sitting on the ground. The participants were equipped with four different sensors, each sampling at a period of 211 ms. 

Similar to (Rubanova, Chen, and Duvenaud 2019), we packed the 11 activity categories into 7 classes. No normalization is applied to the input features. The 25 sequences were split into partially overlapping sub-sequences of length 32 time-steps. 

unlike Rubanova et al. (Rubanova, Chen, and Duvenaud 2019), we represented the input time-series as a 7-dimensional feature vector, where the first 4 entries specified the sensor ID and the last 3 entries the sensor values. Due to the high sampling frequency we discarded all timing information. 

The results are reported in Table 4. 

**Person Activity - 2nd Setting** We setup a second experimental setup based on the same dataset as the person activity task above. In contrast to the first setting, we made sure that the training and test sets are equivalent to (Rubanova, Chen, and Duvenaud 2019) in order to be able to directly compare results. However, we apply the same pre-processing as in our experiment before. In particular, represent the datasets as irregularly sampled in time and dimension using a padding and masking, which results in a 24-dimensional input vector. On the other hand, we discard all time information and feed the input data as described above in the form of a 7-dimensional vector. Note that the data is still the same, just represented in a different format. 

Based on the training - test split of (Rubanova, Chen, and Duvenaud 2019) we select 10% of the training set as our validation set. Moreover, we train our model for 400 epochs and select the epoch checkpoint which achieved the best results on the validation set. This model is then selected to be tested on the test set provided by (Rubanova, Chen, and Duvenaud 2019). Results are reported in Table 5. 

**Half-Cheetah Kinematic modeling** This task is inspired by the physics simulation experiment of Chen et al. (Rubanova, Chen, and Duvenaud 2019), which evaluated how well RNNs are suited to model kinematic dynamics. In our experiment, we collected 25 rollouts of a pre-trained controller for the HalfCheetah-v2 gym environment (Brockman et al. 2016). Each rollout is composed of a series of 1000 17-dimensional observation vectors generated by the MuJoCo physics engine (Todorov, Erez, and Tassa 2012). The task is then to fit the observation space time-series in an autoregressive fashion.To increase the difficulty, we overwrote 5% of the actions produced by the pre-trained controller by random actions. We split the data into training, test, and validation sets by a ratio of 2:2:1. Training loss and test metric were mean squared error (MSE). Results were reported in Table 6. 

## **S6 Hyperparameters and Parameter counts - Tables 3, 4, and 6** 

Table S1: Hyperparameters used for the experimental evaluations 

|**Parameter**|**Value**|**Description**|
|---|---|---|
||||
|Number of hidden units<br>Minibatch size<br>Learning rate<br>ODE-solver step<br>Optimizer<br>_β_1<br>_β_2<br>ˆ_ϵ_<br>BPTT length<br>Validation evaluation interval<br>Training epochs|32<br>16<br>0.001 - 0.02<br>1/6<br>Adam (Kingma and Ba 2014)<br>0.9<br>0.999<br>1e-08<br>32<br>1<br>200|relative to input sampling period<br>Parameter of Adam<br>Parameter of Adam<br>Parameter of Adam<br>Backpropagation through time length<br>in time-steps<br>Every x-th epoch the validation<br>metric will be evaluated|



Table S2: Number of parameters of various RNN model in relation to the RNN width _k_ , the number of hidden layers _n_ , and the number of decay slots _m_ . 

|**Model**|**Parameter count (asymptotic)**|**Parameter count (exact)**|
|---|---|---|
||||
|CT-RNN<br>ODE-RNN<br>LSTM<br>CT-GRU<br>LTC|_O_(_nk_2)<br>_O_(_nk_2)<br>_O_(_nk_2)<br>_O_(_mk_2)<br>_O_(_nk_2)|_nk_2 + 2_nk_<br>_nk_2 +_nk_<br>4_nk_2 + 4_nk_<br>2_mk_2 + 2_mk_+_k_2 +_k_<br>4_nk_2 + 3_nk_|



## **S7 Additional trajectory space representations:** 

Trajectory space representation for the results provided can be viewed at: https://www.dropbox.com/s/ly6my34mbvsfi6k/ additional ~~L~~ TC neurIPS ~~2~~ 020.zip?dl=0 

## **S8 Trajectory Length results** 

**==> picture [505 x 238] intentionally omitted <==**

**----- Start of picture text -----**<br>
10 [6] LTCN-ODECT-RNN samples = 100solver = RK45activations = Htanhdepth = 4,  width = 252w [ = 2,  ] 2b [ = 1] 10 [6] LTCN-ODECT-RNN samples = 100, solver = RK45activations = Htanhdepth = 1,   2w [ = 2,  ] 2b [ = 1] 10 [4] LTCN-ODECT-RNN samples = 100solver = RK45activations = Htanhdepth = 1,   2b [ = 1]<br>10 [4] 10 [4] 10 [3]<br>10 [2]<br>10 [2] 10 [2]<br>10 [1]<br>L1 L2 L3 L4 10 25 50 100 150 200 1 2 4 8 16 32<br>Network Layers Network Width (k) 2w<br>LTCN-ODE samples = 100solver = RK45activations = Htanh 10 [4] LTC samples = 100<br>CT-RNN depth = 1,  width = 25 N-ODE solver = RK45<br>10 [3] 2w [ = 2,  ] 2b [ = 1] 10 [3] CT-RNN activations = sigmoiddepth = 1,   2w [ = 2,  ] 2b [ = 1]<br>10 [2]<br>10 [2]<br>10 [1]<br>10 [0]<br>0.1 0.2 0.02 0.01 0.001 10 25 50 100 150 200<br>Input step-size Network Width (k)<br>Trajectory Length Trajectory Length Trajectory Length<br>Trajectory Length Trajectory Length<br>**----- End of picture text -----**<br>


Figure S1: Additional trajectory length results. 

## **S9 Code and Data availability** 

All code and data are publicly accessible at: https://github.com/raminmh/liquid ~~t~~ ime ~~c~~ onstant ~~n~~ etworks. 

