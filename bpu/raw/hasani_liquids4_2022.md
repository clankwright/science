**DRL** 

**==> picture [31 x 18] intentionally omitted <==**

## **Liquid Structural State-Space Models** 

## **Ramin Hasani ***[*] **, Mathias Lechner *, Tsun-Hsuan Wang, Makram Chahine, Alexander Amini, Daniela Rus** 

Computer Science and Artificial Intelligence Lab (CSAIL) Massachusetts Institute of Technology (MIT) Cambridge, 02139, MA * indicates authors with equal contributions Correspondence to rhasani@mit.edu 

A proper parametrization of state transition matrices of linear state-space models (SSMs) followed by standard nonlinearities enables them to efficiently learn representations from sequential data, establishing the state-ofthe-art on a large series of long-range sequence modeling benchmarks. In this paper, we show that we can improve further when the structural SSM such as S4 is given by a linear liquid time-constant (LTC) statespace model. LTC neural networks are causal continuous-time neural networks with an input-dependent state transition module, which makes them learn to adapt to incoming inputs at inference. We show that by using a diagonal plus low-rank decomposition of the state transition matrix introduced in S4, and a few simplifications, the LTC-based structural state-space model, dubbed Liquid-S4, achieves the new state-of-the-art generalization across sequence modeling tasks with long-term dependencies such as image, text, audio, and medical timeseries, with an average performance of 87.32% on the Long-Range Arena benchmark. On the full raw Speech Command recognition dataset Liquid-S4 achieves 96.78% accuracy with 30% reduction in parameter counts compared to S4. The additional gain in performance is the direct result of the Liquid-S4’s kernel structure that takes into account the similarities of the input sequence samples during training and inference. 

## **1. Introduction** 

Learning representations from sequences of data requires expressive temporal and structural credit assignment. In this space, the continuous-time neural network class of liquid time-constant networks (LTC) (Hasani et al., 2021b) has shown theoretical and empirical evidence for their expressivity and their ability to capture the cause and effect of a given task from high-dimensional sequential demonstrations (Lechner et al., 2020a; Vorbach et al., 2021). Liquid networks are nonlinear state-space models (SSMs) with an input-dependent state transition module that enables them to learn to adapt the dynamics of the model to incoming inputs, at inference, as they are dynamic causal models (Friston et al., 2003). Their complexity, however, is bottlenecked by their differential equation numerical solver that limits their scalability to longer-term sequences. How can we take advantage of LTC’s generalization and causality capabilities and scale them to competitively learn long-range sequences without gradient issues, compared to advanced recurrent neural networks (RNNs) (Erichson et al., 2021; Gu et al., 2020a; Rusch and Mishra, 2021), convolutional neural networks (CNNs) (Cheng et al., 2022; Lea et al., 2016; Romero et al., 2021b), and attention-based models (Vaswani et al., 2017)? 

In this work, we set out to leverage the elegant formulation of structural state-space models (S4) (Gu et al., 2022a) to obtain linear liquid network instances that possess the approximation capabilities of both S4 and LTCs. This is because structural SSMs are shown to largely dominate advanced RNNs, CNNs, and 

- *Code Repository: https://github.com/raminmh/liquid-s4 

Liquid Structural State-Space Models 

Transformers across many data modalities such as text, sequence of pixels, audio, and time series (Gu et al., 2021, 2022a,b; Gupta, 2022). Structural SSMs achieve such impressive performance by using three main mechanisms: 1) High-order polynomial projection operators (HiPPO) (Gu et al., 2020a) that are applied to state and input transition matrices to memorize signals’ history, 2) diagonal plus low-rank parametrization of the obtained HiPPO (Gu et al., 2022a), and 3) an efficient (convolution) kernel computation of an SSM’s transition matrices in the frequency domain, transformed back in time via an inverse Fourier transformation (Gu et al., 2022a). 

To combine S4 and LTCs, instead of modeling sequences by linear state-space models of the form _x_ ˙ = **A** _x_ + **B** _u_ , _y_ = **C** _x_ , (as done in structural and diagonal SSMs (Gu et al., 2022a,b)), we propose to use a linearized LTC state-space model (Hasani et al., 2021b), given by the following dynamics: _x_ ˙ = ( **A** + **B** _u_ ) _x_ + **B** _u_ , _y_ = **C** _x_ . We show that this dynamical system can also be efficiently solved via the same parametrization of S4, giving rise to an additional convolutional Kernel that accounts for the similarities of lagged signals. We call the obtained model Liquid-S4. Through extensive empirical evaluation, we show that Liquid-S4 consistently leads to better generalization performance compared to all variants of S4, CNNs, RNNs, and Transformers across many time-series modeling tasks. In particular, we achieve SOTA performance on the Long Range Arena benchmark (Tay et al., 2020b) with an average of 87.32%. To sum up, we make the following contributions: 

1. We introduce Liquid-S4, a new state-space model that encapsulates the generalization and causality capabilities of liquid networks as well as the memorization, efficiency and scalability of S4. 

2. We achieve State-of-the-art performance on pixel-level sequence classification, text, speech recognition and all six tasks of the long-range arena benchmark with an average accuracy of 87.32%. On the full raw Speech Command recognition dataset Liquid-S4 achieves 96.78% accuracy with 30% reduction in parameter. Finally on the BIDMC vital signs dataset Liquid-S4 achieves SOTA in all modes. 

## **2. Related Works** 

**Learning Long-Range Dependencies with RNNs.** Sequence modeling can be performed autoregressively with RNNs which possess persistent states (Little, 1974) originated from Ising (Brush, 1967) and Hopfield networks (Hopfield, 1982; Ramsauer et al., 2020). Discrete RNNs approximate continuous dynamics stepby-steps via dependencies on the history of their hidden states, and continuous-time (CT) RNNs use ordinary differential equation (ODE) solvers to unroll their dynamics with more elaborate temporal steps (Funahashi and Nakamura, 1993). 

CT-RNNs can perform remarkable credit assignment in sequence modeling problems both on regularly sampled, irregularly-sampled data (Amig´o et al., 2012; Belletti et al., 2016; Foster, 1996; Kowal et al., 2019; Li and Marlin, 2016; Pearson et al., 2003; Roy and Yan, 2020), by turning the spatiotemproal dependencies into vector fields (Chen et al., 2018), enabling better generalization and expressivity (Hasani et al., 2021b; Massaroli et al., 2020). Numerous works have studied their characteristics to understand their applicability and limitations in learning sequential data and flows (Dupont et al., 2019; Durkan et al., 2019; Gruenbacher et al., 2022; Grunbacher et al., 2021; Hanshu et al., 2020; Hasani et al., 2020; Holl et al., 2020; Jia and Benson, 2019; Kidger et al., 2020; Lechner et al., 2019; Liebenwein et al., 2021; Quaglino et al., 2020). 

However, when these RNNs are trained by gradient descent (Allen-Zhu and Li, 2019; Rumelhart et al., 1986; Sherstinsky, 2020), they suffer from the vanishing/exploding gradients problem, which makes difficult the learning of long-term dependencies in sequences (Bengio et al., 1994; Hochreiter, 1991). This issue happens in both discrete RNNs such as GRU-D with its continuous delay mechanism (Che et al., 2018) and PhasedLSTMs (Neil et al., 2016), and continuous RNNs such as ODE-RNNs (Rubanova et al., 2019), GRU-ODE (De Brouwer et al., 2019), Log-ODE methods (Morrill et al., 2020) which compresses the input time-series by 

2 

Liquid Structural State-Space Models 

time-continuous path signatures (Friz and Victoir, 2010), and neural controlled differential equations (Kidger et al., 2020), and liquid time-constant networks (LTCs) (Hasani et al., 2021b). 

Numerous solutions have been proposed to resolve these gradient issues to enable long-range dependency learning. Examples include discrete gating mechanisms in LSTMs (Greff et al., 2016; Hasani et al., 2019; Hochreiter and Schmidhuber, 1997), GRUs (Chung et al., 2014), continuous gating mechanisms such as CfCs (Hasani et al., 2021a), hawks LSTMs (Mei and Eisner, 2017), IndRNNs (Li et al., 2018), state regularization (Wang and Niepert, 2019), unitary RNNs (Jing et al., 2019), dilated RNNs (Chang et al., 2017), long memory stochastic processes (Greaves-Tunnell and Harchaoui, 2019), recurrent kernel networks (Chen et al., 2019), Lipschitz RNNs (Erichson et al., 2021), symmetric skew decomposition (Wisdom et al., 2016), infinitely many updates in iRNNs (Kag et al., 2019), coupled oscillatory RNNs (coRNNs) (Rusch and Mishra, 2021), mixedmemory RNNs (Lechner and Hasani, 2021), and Legendre Memory Units (Voelker et al., 2019). 

**Learning Long-range Dependencies with CNNs and Transformers.** RNNs are not the only solution to learning long-range dependencies. Continuous convolutional kernels such as CKConv (Romero et al., 2021b) and (Romero et al., 2021a), and circular dilated CNNs (Cheng et al., 2022) have shown to be efficient in modeling long sequences faster than RNNs. There has also been a large series of works showing the effectiveness of attention-based methods for modeling spatiotemporal data. A large list of these models is listed in Table **1** . These baselines have recently been largely outperformed by the structural state-space models (Gu et al., 2022a). **State-Space Models.** SSMs are well-established frameworks to study deterministic and stochastic dynamical systems (KALMAN, 1960). Their state and input transition matrices can be directly learned by gradient descent to model sequences of observations (Gu et al., 2021; Hasani et al., 2021b; Lechner et al., 2020b). In a seminal work, Gu et al. (2022a) showed that with a couple of fundamental algorithmic methods on memorization and computation of input sequences, SSMs can turn into the most powerful sequence modeling framework to-date, outperforming advanced RNNs, temporal and continuous CNNs (Cheng et al., 2022; Romero et al., 2021a,b) and a wide variety of Transformers (Vaswani et al., 2017), available in Table **1** by a significant margin. 

The key to their success is their diagonal plus-low rank parameterization of the transition matrix of SSMs via higher-order polynomial projection (HiPPO) matrix (Gu et al., 2020a) obtained by a scaled Legendre measure (LegS) inspired by the Legendre Memory Units (Voelker et al., 2019) to memorize input sequences, a learnable input transition matrix, and an efficient Cauchy Kernel algorithm, results in obtaining structural SSMs named S4. It was also shown recently that diagonal SSMs (S4D) (Gupta, 2022) could be as performant as S4 in learning long sequences when parametrized and initialized properly (Gu et al., 2022b,c). There was also a new variant of S4 introduced as simplified-S4 (S5) Smith et al. (2022) that tensorizes the 1-D operations of S4 to gain a more straightforward realization of SSMs. Here, we introduce Liquid-S4, which is obtained by a more expressive SSM, namely liquid time-constant (LTC) representation (Hasani et al., 2021b) which achieves SOTA performance across many benchmarks. 

## **3. Setup and Methodology** 

In this section, we first revisit the necessary background to formulate our Liquid Structural State-Space Models. We then set up and sketch our technical contributions. 

## **3.1. Background** 

We aim to design an end-to-end sequence modeling framework built by SSMs. A continuous-time SSM representation of a linear dynamical system is given by the following set of equations: 

3 

Liquid Structural State-Space Models 

**==> picture [348 x 12] intentionally omitted <==**

Here, _x_ ( _t_ ) is an _N_ -dimensional latent state, receiving a 1-dimensional input signal _u_ ( _t_ ), and computing a 1-dimensional output signal _y_ ( _t_ ). **A**[(] _[N][×][N]_[)] , **B**[(] _[N][×]_[1][)] , **C**[(][1] _[×][N]_[)] and **D**[(][1] _[×]_[1][)] are system’s parameters. For the sake of brevity, throughout our analysis, we set **D** = 0 as it can be added eventually after construction of our main results in the form of a skip connection (Gu et al., 2022a). 

**Discretization of SSMs.** In order to create a sequence-to-sequence model similar to a recurrent neural network (RNN), we discretize the continuous-time representation of SSMs by the trapezoidal rule (bilinear transform)[†] as follows (sampling step = _δt_ ) (Gu et al., 2022a): 

**==> picture [312 x 10] intentionally omitted <==**

This is obtained via the following modifications to the transition matrices: 

**==> picture [377 x 22] intentionally omitted <==**

With this transformation, we constructed a discretized seq-2-seq model that can map the input _uk_ to output _yk_ , via the _hidden_ state _xk ∈_ R _[N]_ . **A** is the hidden transition matrix, **B** and **C** are input and output transition matrices, respectively. 

**Creating a Convolutional Representation of SSMs.** The system described by (2) and (3), can be trained via gradient descent to learn to model sequences, in a sequential manner which is not scalable. To improve this, we can write the discretized SSM in (2) as a discrete convolutional kernel. To construct the convolutional kernel, let us unroll the system (2) in time as follows, assuming a zero initial hidden states _x−_ 1 = 0: 

**==> picture [408 x 34] intentionally omitted <==**

The mapping _uk → yk_ can now can be formulated into a convolutional kernel explicitly: 

**==> picture [382 x 16] intentionally omitted <==**

**==> picture [387 x 18] intentionally omitted <==**

Equation (5) is a non-circular convolutional kernel. Gu et al. (2022a) showed that under the condition that **K** is known, it could be solved very efficiently by a black-box Cauchy kernel computation pipeline. 

## **3.2. Liquid Structural State-Space Models** 

In this work, we construct a convolutional kernel corresponding to a linearized version of LTCs (Hasani et al., 2021b); an expressive class of continuous-time neural networks that demonstrate attractive generalizability outof-distribution and are dynamic causal models (Friston et al., 2003; Hasani et al., 2020; Vorbach et al., 2021). 

> † _s ←_ 2 1 _−z[−]_[1] _δt_ 1+ _z[−]_[1] 

4 

Liquid Structural State-Space Models 

In their general form, the state of a liquid time-constant network at each time-step is given by the set of ODEs described below (Hasani et al., 2021b): 

**==> picture [391 x 37] intentionally omitted <==**

In this expression, **x**[(] _[N][×]_[1][)] ( _t_ ) is the vector of hidden state of size _N_ , **u**[(] _[m][×]_[1][)] ( _t_ ) is an input signal with _m_ features, _**A**_[(] _[N][×]_[1][)] is a time-constant state-transition mechanism, _**B**_[(] _[N][×]_[1][)] is a bias vector, and _⊙_ represents the Hadamard product. _f_ (.) is a bounded nonlinearity parametrized by _θ_ . 

Our objective is to show how the liquid time-constant (i.e., an input-dependent state transition mechanism in state-space models can enhance its generalization capabilities by accounting for the covariance of the input samples. To do this, we linearize the LTC formulation of Eq. 7 in the following to better connect the model to SSMs. Let’s dive in: 

**Linear Liquid Time-Constant State-Space Model.** A Linear LTC SSM can be presented by the following coupled bilinear (first order bilinear Taylor approximation (Penny et al., 2005)) equation: 

**==> picture [353 x 13] intentionally omitted <==**

Similar to (1), _x_ ( _t_ ) is an _N_ -dimensional latent state, receiving a 1-dimensional input signal _u_ ( _t_ ), and computing a 1-dimensional output signal _y_ ( _t_ ). **A**[(] _[N][×][N]_[)] , **B**[(] _[N][×]_[1][)] , and **C**[(][1] _[×][N]_[)] . Note that **D** is set to zero for simplicity. In (8), the first **B** _u_ ( _t_ ) is added element-wise to **A** . This dynamical system allows the coefficient (state transition compartment) of state vector _x_ ( _t_ ) to be input dependent which, as a result, allows us to realize more complex dynamics. 

**Discretization of Liquid-SSMs.** Similar to SSMs, Liquid-SSMs can also be discretized by a bilinear transform (trapezoidal rule) to construct a sequence-to-sequence model as follows: 

**==> picture [335 x 12] intentionally omitted <==**

The discretized parameters **A** , **B** , and **C** are identical to that of (3), which are function of the continuous-time coefficients **A** , **B** , and **C** , and the discretization step _δt_ . 

**Creating a Convolutional Representation of Liquid-SSMs.** Similar to (4), we first unroll the Liquid-SSM in time to construct a convolutional kernel of it. By assuming _x−_ 1 = 0, we have: 

**==> picture [420 x 61] intentionally omitted <==**

The resulting expressions of the Liquid-SSM at each time step consist of two types of weight configurations: 1. Weights corresponding to the mapping of individual time instances of inputs independently, shown in black in (10), and 2. Weights associated with all orders of auto-correlation of the input signal, shown in violet in (10). The first set of weights corresponds to the convolutional kernel of the simple SSM, shown by Eq. 5 and Eq. 6, whereas the second set leads to the design of an additional input correlation kernel, which we call the _liquid_ 

5 

Liquid Structural State-Space Models 

kernel. These kernels generate the following input-output mapping: 

**==> picture [374 x 62] intentionally omitted <==**

For instance, let us assume we have a 1-dimensional input signal _u_ ( _t_ ) of length _L_ = 100 on which we run the liquid-SSM kernel. We set the hyperparameters _P_ = 4. This value represents the maximum order of the correlation terms we would want to take into account to output a decision. This means that the signal _u_ correlations in (11) will contain all combinations of 2 order correlation signals ( _[L]_[+] 2[1][)][,] _[u][i][u][j]_[,][3][order][(] _[L]_[+] 3[1][)][,] _[u][i][u][j][u][k]_[and][4] order signals ( _[L]_[+] 4[1][)][,] _[ u][i][u][j][u][k][u][l]_[.][The kernel weights corresponding to this auto-correlation signal would be:] 

**==> picture [473 x 50] intentionally omitted <==**

Here, _u_ correlations is a vector of length ( _[k]_[+] 2[1][) + (] _[k]_[+] 3[1][) + (] _[k]_[+] 4[1][)][,][and][the][kernel] **K** liquid _∈_ R[(] _[k]_[+] 2[1][)+(] _[k]_[+] 3[1][)+(] _[k]_[+] 4[1][)] . This additional kernel takes the temporal correlation of incoming input samples into consideration. This way Liquid-SSM give rise to a more general sequence modeling framework. The liquid convolutional kernel, **K** liquid is as follows: 

**==> picture [417 x 19] intentionally omitted <==**

**How to compute Liquid-S4 kernel efficiently?** Gu et al. (2022a) showed that the S4 convolution kernel could be computed efficiently using the following elegant parameterization tricks: 

- To obtain better representations in sequence modeling schemes by SSMs, instead of randomly initializing the transition matrix **A** , we can use the Normal Plus Low-Rank (NPLR) matrix below, called the Hippo Matrix (Gu et al., 2020a) which is obtained by the Scaled Legendre Measure (LegS) (Gu et al., 2021, 2022a): 

**==> picture [371 x 43] intentionally omitted <==**

- The NPLR representation of this matrix is the following (Gu et al., 2022a): 

**==> picture [346 x 14] intentionally omitted <==**

Here, _**V** ∈_ C _[N][×][N]_ is a unitary matrix, **Λ** is diagonal, and _**P**_ , _**Q** ∈_ R _[N][×][r]_ are the low-rank factorization. Eq. 14 is Normal plus low rank with r = 1 (Gu et al., 2022a). With the decomposition 15, we can obtain **A** over complex numbers in the form of Diagonal plus low-rank (DPLR) (Gu et al., 2022a). 

- 1 1 

- • Vectors _Bn_ and _Pn_ are initialized by _**Bn**_ = (2 _n_ + 1) 2 and _**Pn**_ = ( _n_ + 1/2) 2 (Gu et al., 2022b). Both vectors are trainable. 

- Furthermore, it was shown in Gu et al. (2022b) that with Decomposition 15, the eigenvalues of **A** might be on the right half of the complex plane, thus, result in numerical instability. To resolve this, Gu et al. (2022b) recently proposed to use the parametrization **Λ** _−_ _**PP**[∗]_ instead of **Λ** _−_ _**PP**[∗]_ . 

6 

Liquid Structural State-Space Models 

**Algorithm 1** LIQUID-S4 KERNEL - The S4 convolution kernel (highlighted in black) is used from Gu et al. (2022a) and Gu et al. (2022b). Liquid kernel computation is highlighted in purple. 

**Input:** S4 parameters **Λ** , _**P**_ , _**B**_ , _**C** ∈_ C _[N]_ , step size ∆, liquid kernel order _P_ , inputs seq length _L_ , liquid kernel sequence length _L_[˜] **Output:** SSM convolution kernel _**K**_ = _KL_ ( _**A**_ , _**B**_ , _**C**_ ) and SSM liquid kernel _**K** liquid_ = _KL_ ˜ ( _**A**_ , _**B**_ , _**C**_ ) for _**A**_ = **Λ** _−_ _**PP**[∗]_ (Eq. 6) 

**==> picture [482 x 197] intentionally omitted <==**

13: _**K** liquid_ = _p_ = _**C** ⊙_ _**B**_ ( _pL−−_ 1 _L_[˜] , _L_ ) 14: _**K** liquid_ .append( _**K** liquid_ = _p_ ) 15: **end for** 

16: **end if** 

- Computing the powers of _**A**_ in direct calculation of the S4 kernel _**K**_ is computationally expensive. S4 computes the spectrum of _**K**_ instead of direct computations, which reduces the problem of matrix powers to matrix inverse computation Gu et al. (2022a). S4 then computes this convolution kernel via a black-box Cauchy Kernel efficiently, and recovers _**K**_ by an inverse Fourier Transform (iFFT) (Gu et al., 2022a). 

**K** liquid possess similar structure to the S4 kernel. In particular, we have: 

**Proposition 1.** _The liquid-S4 kernel for each order p ∈P,_ _**K** liquid, can be computed by the anti-diagonal L−_ 1 _transformation (flip operation) of the product of the S4 convolution kernel,_ _**K**_ = � _**CB**_ , _**CAB**_ , . . . , _**CA B**_ � _, and a vector_ _**B** p−_ 1 _∈_ R _N._ 

The proof is given in Appendix. Proposition 1 indicates that the liquid-s4 kernel can be obtained from the precomputed S4 kernel and a Hadamard product of that kernel with the transition vector _**B**_ powered by the chosen liquid order. This is illustrated in Algorithm 1, lines 6 to 10, corresponding to a mode we call KB, which stands for Kernel _×_ B. 

Additionally, we introduce a simplified Liquid-S4 kernel that is easier to compute while being as expressive as or even better performing than the KB kernel. To obtain this, we set the transition matrix _**A**_ in Liquid-S4 of Eq. 13, with an identity matrix, only for the input correlation terms. This way, the liquid-s4 Kernel for a given liquid order _p ∈P_ reduces to the following expression: 

7 

Liquid Structural State-Space Models 

**Table 1** : Performance on Long Range Arena Tasks. Numbers indicate validation accuracy (standard deviation). The accuracy of models denoted by * are reported from (Tay et al., 2020b). Methods denoted by ** are reported from (Gu et al., 2022a). The rest of the models’ performance results are reported from the cited paper. Liquid-S4 is used with its PB kernel. 

|Model<br>ListOps<br>IMDB<br>AAN<br>CIFAR<br>Pathfnder<br>Path-X<br>(input length)<br>2048<br>2048<br>4000<br>1024<br>1024<br>16384|Avg.|
|---|---|
|Random_∗_<br>10.00<br>50.00<br>50.00<br>10.00<br>50.00<br>50.00<br>Transformer_∗_(Vaswani et al.,2017)<br>36.37<br>64.27<br>57.46<br>42.44<br>71.40<br>x<br>Local Att._∗_(Tay et al.,2020b)<br>15.82<br>52.98<br>53.39<br>41.46<br>66.63<br>x<br>Sparse Transformer_∗_(Child et al.,2019)<br>17.07<br>63.58<br>59.59<br>44.24<br>71.71<br>x<br>Longformer_∗_(Beltagy et al.,2020)<br>35.63<br>62.85<br>56.89<br>42.22<br>69.71<br>x<br>Linformer_∗_(Wang et al.,2020)<br>16.13<br>65.90<br>53.09<br>42.34<br>75.30<br>x<br>Reformer_∗_(Kitaev et al.,2019)<br>37.27<br>56.10<br>53.40<br>38.07<br>68.50<br>x<br>Sinkhorn Trans._∗_(Tay et al.,2020a)<br>33.67<br>61.20<br>53.83<br>41.23<br>67.45<br>x<br>BigBird_∗_(Zaheer et al.,2020)<br>36.05<br>64.02<br>59.29<br>40.83<br>74.87<br>x<br>Linear Trans._∗_(Katharopoulos et al.,2020)<br>16.13<br>65.90<br>53.09<br>42.34<br>75.30<br>x<br>Performer_∗_(Choromanski et al.,2020)<br>18.01<br>65.40<br>53.82<br>42.77<br>77.05<br>x|36.67<br>54.39<br>46.06<br>51.24<br>53.46<br>50.55<br>50.56<br>51.23<br>55.01<br>50.46<br>51.18|
|FNet_∗∗_(Lee-Thorp et al.,2021)<br>35.33<br>65.11<br>59.61<br>38.67<br>77.80<br>x<br>Nystr¨omformer_∗∗_(Xiong et al.,2021)<br>37.15<br>65.52<br>79.56<br>41.58<br>70.94<br>x<br>Luna-256_∗∗_Ma et al.(2021)<br>37.25<br>64.57<br>79.29<br>47.38<br>77.72<br>x<br>H-Transformer-1D_∗∗_(Zhu and Soricut,2021)<br>49.53<br>78.69<br>63.99<br>46.05<br>68.78<br>x|54.42<br>57.46<br>59.37<br>61.41|
|CDIL (Cheng et al.,2022)<br>44.05<br>86.78<br>85.36<br>66.91<br>91.70<br>x|74.96|
|DSS (Gupta,2022)<br>57.6<br>76.6<br>87.6<br>85.8<br>84.1<br>85.0<br>S4 (original)_∗∗_(Gu et al.,2022a)<br>58.35<br>76.02<br>87.09<br>87.26<br>86.05<br>88.10<br>S4-LegS (Gu et al.,2022b)<br>59.60 (0.07)<br>86.82 (0.13)<br>90.90 (0.15)<br>88.65 (0.23)<br>94.20 (0.25)<br>96.35<br>S4-FouT (Gu et al.,2022b)<br>57.88 (1.90)<br>86.34 (0.31)<br>89.66 (0.88)<br>89.07 (0.19)<br>94.46<br>(0.26)<br>x<br>S4-LegS/FouT (Gu et al.,2022c)<br>60.45 (0.75)<br>86.78 (0.26)<br>90.30 (0.28)<br>89.00 (0.26)<br>94.44<br>(0.08)<br>x<br>S4D-LegS (Gu et al.,2022b)<br>60.47 (0.34)<br>86.18 (0.43)<br>89.46 (0.14)<br>88.19 (0.26)<br>93.06 (1.24)<br>91.95<br>S4D-Inv (Gu et al.,2022b)<br>60.18 (0.35)<br>87.34 (0.20)<br>91.09<br>(0.01)<br>87.83 (0.37)<br>93.78 (0.25)<br>92.80<br>S4D-Lin (Gu et al.,2022b)<br>60.52 (0.51)<br>86.97 (0.23)<br>90.96 (0.09)<br>87.93 (0.34)<br>93.96 (0.60)<br>x<br>S5 (Smith et al.,2022)<br>61.00<br>86.51<br>88.26<br>86.14<br>87.57<br>85.25|79.45<br>80.48<br>86.09<br>77.90<br>78.50<br>84.89<br>85.50<br>78.39<br>82.46|
|**Liquid-S4**(ours)<br>**62.75**(0.2)<br>**89.02**(0.04)<br>**91.20**(0.01)<br>**89.50**(0.4)<br>**94.8**(0.2)<br>**96.66**(0.001)<br>p = 5<br>p=6<br>p=2<br>p=3<br>p=2<br>p=2|**87.32**|



**==> picture [404 x 19] intentionally omitted <==**

We call this kernel Liquid-S4 - PB, as it is obtained by powers of the vector _**B**_ . The computational steps to get this kernel is outlined in Algorithm 1 lines 11 to 15. 

**Computational Complexity of the Liquid-S4 Kernel.** The computational complexity of the S4-Legs Convolutional kernel solved via the Cauchy Kernel is _O_[˜] ( _N_ + _L_ ), where N is the state-size, and L is the sequence _O_ ˜ ( _N_ + _L_ length + _pmax_ [Gu ˜ _L_ )et. The added time complexity in practice is tractable.al. (2022a), Theorem 3]. Liquid-S4 both in KB This is because we usually select theand PB modes can be computed in liquid orders, _p_ , to be less than 10 (typically _pmax_ = 3, and _L_[˜] which is the number of terms we use to compute the input correlation vector, _ucorrelation_ , is typically two orders of magnitude smaller than the seq length. 

## **4. Experiments with Liquid-S4** 

In this section, we present an extensive evaluation of Liquid-S4 on sequence modeling tasks with very long-term dependencies and compare its performance to a large series of baselines ranging from advanced Transformers 

8 

Liquid Structural State-Space Models 

**Table 2** : Performance on BIDMC Vital Signs dataset. Numbers indicate RMSE on the test set. The accuracy of models denoted by * is reported from (Gu et al., 2022b). The rest of the models’ performance results are reported from the cited paper. 

|||**BIDMC**||
|---|---|---|---|
|Model|HR|RR|SPO2|
|UnICORNN (Rusch and Mishra,2021)|1.39|1.06|0.869|
|coRNN (Rusch and Mishra,2021)|1.81|1.45|-|
|CKConv_∗_|2.05|1.214|1.051|
|NRDE (Morrill et al.,2021)|2.97|1.49|1.29|
|LSTM_∗_|10.7|2.28|-|
|Transformer_∗_|12.2|2.61|3.02|
|XGBoost (Tan et al.,2021)|4.72|1.67|1.52|
|Random Forest (Tan et al.,2021)|5.69|1.85|1.74|
|Ridge Regress. (Tan et al.,2021)|17.3|3.86|4.16|
|S4-LegS_∗_(Gu et al.,2022b)|0.332 (0.013)|0.247 (0.062)|0.090 (0.006)|
|S4-FouT_∗_(Gu et al.,2022b)|0.339 (0.020)|0.301 (0.030)|0.068<br>(0.003)|
|S4D-LegS_∗_(Gu et al.,2022b)|0.367 (0.001)|0.248 (0.036)|0.102 (0.001)|
|S4-(LegS/FouT)_∗_(Gu et al.,2022b)|0.344 (0.032)|0.163<br>(0.008)|0.080 (0.007)|
|S4D-Inv_∗_(Gu et al.,2022b)|0.373 (0.024)|0.254 (0.022)|0.110 (0.001)|
|S4D-Lin_∗_(Gu et al.,2022b)|0.379 (0.006)|0.226 (0.008)|0.114 (0.003)|
|**Liquid-S4**(ours)|**0.303**(0.002)|**0.158**(0.001)|**0.066**(0.002)|
||p=3|p=2|p=4|



and Convolutional networks to many variants of State-space models. In the following, we first outline the baseline models we compare against. We then list the datasets we evaluated these models on and finally present results and discussions. 

**Baselines.** We consider a broad range of advanced models to compare liquid-S4 with. These baselines include transformer variants such as vanilla Transformer (Vaswani et al., 2017), Sparse Transformers (Child et al., 2019), a Transformer model with local attention (Tay et al., 2020b), Longformer (Beltagy et al., 2020), Linformer (Wang et al., 2020), Reformer (Kitaev et al., 2019), Sinkhorn Transformer (Tay et al., 2020a), BigBird (Zaheer et al., 2020), Linear Transformer (Katharopoulos et al., 2020), and Performer (Choromanski et al., 2020). We also include architectures such as FNets (Lee-Thorp et al., 2021), Nystro ¨mformer (Xiong et al., 2021), Luna-256 (Ma et al., 2021), H-Transformer-1D (Zhu and Soricut, 2021), and Circular Diluted Convolutional neural networks (CDIL) (Cheng et al., 2022). We then include a full series of state-space models and their variants such as diagonal SSMs (DSS) (Gupta, 2022), S4 (Gu et al., 2022a), S4-legS, S4-FouT, S4-LegS/FouT (Gu et al., 2022c), S4D-LegS (Gu et al., 2022b), S4D-Inv, S4D-Lin and the Simplified Structural State-space models (S5) (Smith et al., 2022). 

**Datasets.** We first evaluate Liquid-S4’s performance on the well-studied **Long Range Arena (LRA)** benchmark (Tay et al., 2020b), where Liquid-S4 outperforms other S4 and S4D variants in every task pushing the state-of-the-art further with an average accuracy of **87.32%** . LRA dataset includes six tasks with sequence lengths ranging from 1k to 16k. 

We then report Liquid-S4’s performance compared to other S4, and S4D variants as well as other models, on the **BIDMC Vital Signals** dataset (Goldberger et al., 2000; Pimentel et al., 2016). BIDMC uses bio-marker signals of length 4000 to predict Heart rate (HR), respiratory rate (RR), and blood oxygen saturation (SpO2). 

We also experiment with the **sCIFAR dataset** that consists of the classification of flattened images in the form of 1024-long sequences into 10 classes. 

Finally, we perform **RAW Speech Command (SC) recognition with FULL 35 LABELS** as conducted 

9 

Liquid Structural State-Space Models 

**==> picture [314 x 131] intentionally omitted <==**

**----- Start of picture text -----**<br>
A B<br>**----- End of picture text -----**<br>


**Fig. 1** : Performance vs Liquid Order in Liquid-S4 for A) ListOps, and B) IMDB datasets. (n=3) 

very recently in the updated S4 article (Gu et al., 2022a).[‡] SC dataset contains sequences of length 16k to be classified into 35 commands. Gu et al. (2022a) introduced a new test case setting to assess the performance of models (trained on 16kHz sequences) on sequences of length 8kHz. S4 and S4D perform exceptionally well in this zero-shot test scenario. 

## **4.1. Results on Long Range Arena** 

Table **1** depicts a comprehensive list of baselines benchmarked against each other on six long-range sequence modeling tasks in LRA. We observe that Liquid-S4 instances (all use the PB kernel with a scaled Legendre (LegS) configuration) with a small liquid order, _p_ , ranging from 2 to 6, consistently outperform all baselines in all six tasks, establishing the new SOTA on LRA with an average performance of **87.32%** . In particular, on ListOps, Liquid-S4 improves S4-LegS performance by more than 3%, on character-level IMDB by 2.2%, and on 1-D pixel-level classification (CIFAR) by 0.65%, while establishing the-state-of the-art on the hardest LRA task by gaining **96.54%** accuracy. Liquid-S4 performs on par with improved S4 and S4D instances on both 

The performance of SSM models is generally well-beyond what advanced Transformers, RNNs, and Convolutional networks achieve on LRA tasks, with the Liquid-S4 variants standing on top. It is worth noting that Liquid-S4 kernels perform better with smaller kernel sizes (See more details on this in Appendix); For instance, on ListOps and IMDB, their individual liquid-S4 kernel state-size could be as small as seven units. This significantly reduces the parameter count in Liquid-S4 in comparison to other variants. **The impact of increasing Liquid Order** _p_ **.** Figure **1** illustrates how increasing the liquid order, _p_ , can consistently improve performance on ListOps and IMDB tasks from LRA. 

## **4.2. Results on BIDMC Vital Signs** 

Table **2** demonstrates the performance of a variety of classical and advanced baseline models on the BIDMC dataset for all three heart rate (HR), respiratory rate (RR), and blood oxygen saturation (SpO2) level prediction tasks. We observe that Liquid-s4 with a PB kernel of order _p_ = 3, _p_ = 2, and _p_ = 4, perform better than all S4 and S4D variants. It is worth denoting that Liquid-S4 is built by the same parametrization as S4-LegS (which is the official S4 model reported in the updated S4 report (Gu et al., 2022a)). In RR, Liquid-S4 outperforms S4-LegS by a significant margin of 36%. On SpO2, Liquid-S4 performs 26.67% better than S4-Legs. On 

> ‡It is essential to denote that there is a modified speech command dataset that restricted the dataset to only 10 output classes and is used in a couple of works (see for example (Gu et al., 2021; Kidger et al., 2020; Romero et al., 2021a,b)). Aligned with the updated results reported in (Gu et al., 2022a) and (Gu et al., 2022b), we choose not to break down this dataset and use the full-sized benchmark. 

10 

Liquid Structural State-Space Models 

**Table 3** : Performance on sCIFAR dataset. Numbers indicate Accuracy (standard deviation). The accuracy of baseline models is reported from Table 9 of Gu et al. (2022b). 

|Model|Accuracy|
|---|---|
|Transformer (Trinh et al.,2018)<br>FlexConv (Romero et al.,2021a)<br>TrellisNet (Bai et al.,2018)<br>LSTM (Hochreiter and Schmidhuber,1997)<br>r-LSTM (Trinh et al.,2018)<br>UR-GRU (Gu et al.,2020b)<br>HiPPO-RNN (Gu et al.,2020a)<br>LipschitzRNN (Erichson et al.,2021)|62.2<br>80.82<br>73.42<br>63.01<br>72.2<br>74.4<br>61.1<br>64.2|
|S4-LegS (Gu et al.,2022b)<br>S4-FouT (Gu et al.,2022b)<br>S4-(LegS/FouT) (Gu et al.,2022b)|91.80<br>(0.43)<br>91.22 (0.25)<br>91.58 (0.17)|
|S4D-LegS (Gu et al.,2022b)<br>S4D-Inv (Gu et al.,2022b)<br>S4D-Lin (Gu et al.,2022b)<br>S5Smith et al.(2022)|89.92 (1.69)<br>90.69 (0.06)<br>90.42 (0.03)<br>89.66|
|Liquid-S4 (ours)|**92.02**(0.14)<br>p=3|



HR, Liquid-S4 outperforms S4-Legs by 8.7% improvement in performance. The hyperparameters are given in Appendix. 

## **4.3. Results on 1-D Pixel-level Image Classification** 

Similar to the previous tasks, a Liquid-S4 network with PB kernel of order _p_ = 3 outperforms all variants of S4 and S4D while being significantly better than Transformer and RNN baselines as summarized in Table **3** . The hyperparameters are given in Appendix. 

## **4.4. Results on Speech Commands** 

Table **4** demonstrates that Liquid-S4 with liquid order _p_ = 2 achieves the best performance amongst all benchmarks on the 16KHz testbed with full dataset. Liquid-S4 also performs competitively on the half-frequency zero-shot experiment, while it does not realize the best performance. Although the task is solved to a great degree, the reason could be that liquid kernel accounts for covariance terms. This might influence the learned representations in a way that hurts performance by a small margin in this zero-shot experiment. The hyperparameters are given in Appendix. 

It is essential to denote that there is a modified speech command dataset that restricts the dataset to only ten output classes, namely SC10, and is used in a couple of works (see for example (Gu et al., 2021; Kidger et al., 2020; Romero et al., 2021a,b)). Aligned with the updated results reported in (Gu et al., 2022a) and (Gu et al., 2022b), we choose not to break down this dataset and report the full-sized benchmark in the main paper. Nevertheless, we conducted an experiment with SC10 and showed that even on the reduced dataset, with the same hyperparameters, we solved the task with a SOTA accuracy of 98.51%. The results are presented in Table S2. 

11 

Liquid Structural State-Space Models 

**Table 4** : Performance on RAW Speech Command dataset with **FULL 35 Labels** and with the reduced ten classes.Numbers indicate validation accuracy. The accuracy of baseline models is reported from Table 11 of (Gu et al., 2022b). 

||**SC FULL Labels**|**SC FULL Labels**|
|---|---|---|
|Model<br>Parameters|16kHz|8kHz|
|InceptionNet (Nonaka and Seita,2021)<br>481K<br>ResNet-18<br>216K<br>XResNet-50<br>904K<br>ConvNet<br>26.2M|61.24 (0.69)<br>77.86 (0.24)<br>83.01 (0.48)<br>95.51 (0.18)|05.18 (0.07)<br>08.74 (0.57)<br>07.72 (0.39)<br>07.26 (0.79)|
|S4-LegS (Gu et al.,2022b)<br>307K<br>S4-FouT (Gu et al.,2022b)<br>307K<br>S4-(LegS/FouT) (Gu et al.,2022b)<br>307K|96.08 (0.15)<br>95.27 (0.20)<br>95.32 (0.10)|91.32 (0.17)<br>91.59 (0.23)<br>90.72 (0.68)|
|S4D-LegS (Gu et al.,2022b)<br>306K<br>S4D-Inv (Gu et al.,2022b)<br>306K<br>S4D-Lin (Gu et al.,2022b)<br>306K|95.83 (0.14)<br>96.18<br>(0.27)<br>96.25<br>(0.03)|91.08 (0.16)<br>**91.80**(0.24)<br>91.58<br>(0.33)|
|Liquid-S4 (ours)<br>**224K**|**96.78**(0.05)<br>p=2|90.00 (0.25)<br>p=2|



## **5. Conclusions** 

We showed that structural state-space models could be considerably improved in performance if they are formulated by a linear liquid time-constant kernel, namely Liquid-S4. Liquid-S4 kernels are obtainable with minimal effort with their kernel computing the similarities between time-lags of the input signals in addition to the main S4 diagonal plus low-rank parametrization. Liquid-S4 kernels with Smaller parameter counts achieve SOTA performance on all six tasks of the Long-range arena dataset, on BIDMC heart rate, respiratory rate, and blood oxygen saturation, on sequential 1-D pixel-level image classification, and on Speech command recognition. 

## **Acknowledgments** 

This work is supported by The Boeing Company and the Office of Naval Research (ONR) Grant N00014-181-2830. 

## **References** 

- Z. Allen-Zhu and Y. Li. Can sgd learn recurrent neural networks with provable generalization? In _Advances in Neural Information Processing Systems_ , pages 10331–10341, 2019. 

- J. M. Amig´o, R. Monetti, T. Aschenbrenner, and W. Bunk. Transcripts: An algebraic approach to coupled time series. _Chaos: An Interdisciplinary Journal of Nonlinear Science_ , 22(1):013105, 2012. 

- S. Bai, J. Z. Kolter, and V. Koltun. Trellis networks for sequence modeling. In _International Conference on Learning Representations_ , 2018. 

- F. W. Belletti, E. R. Sparks, M. J. Franklin, A. M. Bayen, and J. E. Gonzalez. Scalable linear causal inference for irregularly sampled time series with long range dependencies. _arXiv preprint arXiv:1603.03336_ , 2016. 

12 

Liquid Structural State-Space Models 

- I. Beltagy, M. E. Peters, and A. Cohan. Longformer: The long-document transformer. _arXiv preprint arXiv:2004.05150_ , 2020. 

- Y. Bengio, P. Simard, and P. Frasconi. Learning long-term dependencies with gradient descent is difficult. _IEEE transactions on neural networks_ , 5(2):157–166, 1994. 

- S. G. Brush. History of the lenz-ising model. _Reviews of modern physics_ , 39(4):883, 1967. 

- S. Chang, Y. Zhang, W. Han, M. Yu, X. Guo, W. Tan, X. Cui, M. Witbrock, M. A. Hasegawa-Johnson, and T. S. Huang. Dilated recurrent neural networks. _Advances in neural information processing systems_ , 30, 2017. 

- B. Charlier, J. Feydy, J. A. Glaun`es, F.-D. Collin, and G. Durif. Kernel operations on the gpu, with autodiff, without memory overflows. _Journal of Machine Learning Research_ , 22(74):1–6, 2021. URL http:// jmlr.org/papers/v22/20-275.html. 

- Z. Che, S. Purushotham, K. Cho, D. Sontag, and Y. Liu. Recurrent neural networks for multivariate time series with missing values. _Scientific reports_ , 8(1):1–12, 2018. 

- D. Chen, L. Jacob, and J. Mairal. Recurrent kernel networks. In _Advances in Neural Information Processing Systems_ , pages 13431–13442, 2019. 

- T. Q. Chen, Y. Rubanova, J. Bettencourt, and D. K. Duvenaud. Neural ordinary differential equations. In _Advances in neural information processing systems_ , pages 6571–6583, 2018. 

- L. Cheng, R. Khalitov, T. Yu, and Z. Yang. Classification of long sequential data using circular dilated convolutional neural networks. _arXiv preprint arXiv:2201.02143_ , 2022. 

- R. Child, S. Gray, A. Radford, and I. Sutskever. Generating long sequences with sparse transformers. _arXiv preprint arXiv:1904.10509_ , 2019. 

- K. M. Choromanski, V. Likhosherstov, D. Dohan, X. Song, A. Gane, T. Sarlos, P. Hawkins, J. Q. Davis, A. Mohiuddin, L. Kaiser, et al. Rethinking attention with performers. In _International Conference on Learning Representations_ , 2020. 

- J. Chung, C. Gulcehre, K. Cho, and Y. Bengio. Empirical evaluation of gated recurrent neural networks on sequence modeling. _arXiv preprint arXiv:1412.3555_ , 2014. 

- E. De Brouwer, J. Simm, A. Arany, and Y. Moreau. Gru-ode-bayes: Continuous modeling of sporadicallyobserved time series. In _Advances in Neural Information Processing Systems_ , pages 7377–7388, 2019. 

- E. Dupont, A. Doucet, and Y. W. Teh. Augmented neural odes. In _Advances in Neural Information Processing Systems_ , pages 3134–3144, 2019. 

- C. Durkan, A. Bekasov, I. Murray, and G. Papamakarios. Neural spline flows. In _Advances in Neural Information Processing Systems_ , pages 7509–7520, 2019. 

- N. B. Erichson, O. Azencot, A. Queiruga, L. Hodgkinson, and M. W. Mahoney. Lipschitz recurrent neural networks. In _International Conference on Learning Representations_ , 2021. URL https://openreview. net/forum?id=-N7PBXqOUJZ. 

- G. Foster. Wavelets for period analysis of unevenly sampled time series. _The Astronomical Journal_ , 112:1709, 1996. 

13 

Liquid Structural State-Space Models 

- K. J. Friston, L. Harrison, and W. Penny. Dynamic causal modelling. _Neuroimage_ , 19(4):1273–1302, 2003. 

- P. K. Friz and N. B. Victoir. _Multidimensional stochastic processes as rough paths: theory and applications_ , volume 120. Cambridge University Press, 2010. 

- K.-i. Funahashi and Y. Nakamura. Approximation of dynamical systems by continuous time recurrent neural networks. _Neural networks_ , 6(6):801–806, 1993. 

- A. L. Goldberger, L. A. Amaral, L. Glass, J. M. Hausdorff, P. C. Ivanov, R. G. Mark, J. E. Mietus, G. B. Moody, C.-K. Peng, and H. E. Stanley. Physiobank, physiotoolkit, and physionet: components of a new research resource for complex physiologic signals. _circulation_ , 101(23):e215–e220, 2000. 

- A. Greaves-Tunnell and Z. Harchaoui. A statistical investigation of long memory in language and music. In _International Conference on Machine Learning_ , pages 2394–2403, 2019. 

- K. Greff, R. K. Srivastava, J. Koutn´ık, B. R. Steunebrink, and J. Schmidhuber. Lstm: A search space odyssey. _IEEE transactions on neural networks and learning systems_ , 28(10):2222–2232, 2016. 

- S. A. Gruenbacher, M. Lechner, R. Hasani, D. Rus, T. A. Henzinger, S. A. Smolka, and R. Grosu. Gotube: Scalable statistical verification of continuous-depth models. In _Proceedings of the AAAI Conference on Artificial Intelligence_ , volume 36, No 6, pages 6755–6764, 2022. 

- S. Grunbacher, R. Hasani, M. Lechner, J. Cyranka, S. A. Smolka, and R. Grosu. On the verification of neural odes with stochastic guarantees. In _Proceedings of the AAAI Conference on Artificial Intelligence_ , volume 35, No 13, pages 11525–11535, 2021. 

- A. Gu, T. Dao, S. Ermon, A. Rudra, and C. Re. Hippo: Recurrent memory with optimal polynomial projections. _Advances in neural information processing systems_ , 33, 2020a. 

- A. Gu, C. Gulcehre, T. Paine, M. Hoffman, and R. Pascanu. Improving the gating mechanism of recurrent neural networks. In _International Conference on Machine Learning_ , pages 3800–3809. PMLR, 2020b. 

- A. Gu, I. Johnson, K. Goel, K. Saab, T. Dao, A. Rudra, and C. R´e. Combining recurrent, convolutional, and continuous-time models with linear state space layers. _Advances in Neural Information Processing Systems_ , 34, 2021. 

- A. Gu, K. Goel, and C. Re. Efficiently modeling long sequences with structured state spaces. In _International Conference on Learning Representations_ , 2022a. URL https://openreview.net/forum? id=uYLFoz1vlAC. 

- A. Gu, A. Gupta, K. Goel, and C. R´e. On the parameterization and initialization of diagonal state space models. _arXiv preprint arXiv:2206.11893_ , 2022b. 

- A. Gu, I. Johnson, A. Timalsina, A. Rudra, and C. R´e. How to train your hippo: State space models with generalized orthogonal basis projections. _arXiv preprint arXiv:2206.12037_ , 2022c. 

- A. Gupta. Diagonal state spaces are as effective as structured state spaces. _arXiv preprint arXiv:2203.14343_ , 2022. 

- Y. Hanshu, D. Jiawei, T. Vincent, and F. Jiashi. On robustness of neural ordinary differential equations. In _International Conference on Learning Representations_ , 2020. 

14 

Liquid Structural State-Space Models 

- R. Hasani, A. Amini, M. Lechner, F. Naser, R. Grosu, and D. Rus. Response characterization for auditing cell dynamics in long short-term memory networks. In _2019 International Joint Conference on Neural Networks (IJCNN)_ , pages 1–8. IEEE, 2019. 

- R. Hasani, M. Lechner, A. Amini, D. Rus, and R. Grosu. The natural lottery ticket winner: Reinforcement learning with ordinary neural circuits. In _Proceedings of the 2020 International Conference on Machine Learning_ . JMLR. org, 2020. 

- R. Hasani, M. Lechner, A. Amini, L. Liebenwein, M. Tschaikowski, G. Teschl, and D. Rus. Closed-form continuous-depth models. _arXiv preprint arXiv:2106.13898_ , 2021a. 

- R. Hasani, M. Lechner, A. Amini, D. Rus, and R. Grosu. Liquid time-constant networks. _Proceedings of the AAAI Conference on Artificial Intelligence_ , 35(9):7657–7666, May 2021b. 

- S. Hochreiter. Untersuchungen zu dynamischen neuronalen netzen [in german] diploma thesis. _TU M¨unich_ , 1991. 

- S. Hochreiter and J. Schmidhuber. Long short-term memory. _Neural computation_ , 9(8):1735–1780, 1997. 

- P. Holl, V. Koltun, and N. Thuerey. Learning to control pdes with differentiable physics. _arXiv preprint arXiv:2001.07457_ , 2020. 

- J. J. Hopfield. Neural networks and physical systems with emergent collective computational abilities. _Proceedings of the national academy of sciences_ , 79(8):2554–2558, 1982. 

- J. Jia and A. R. Benson. Neural jump stochastic differential equations. In _Advances in Neural Information Processing Systems_ , pages 9843–9854, 2019. 

- L. Jing, C. Gulcehre, J. Peurifoy, Y. Shen, M. Tegmark, M. Soljacic, and Y. Bengio. Gated orthogonal recurrent units: On learning to forget. _Neural computation_ , 31(4):765–783, 2019. 

- A. Kag, Z. Zhang, and V. Saligrama. Rnns incrementally evolving on an equilibrium manifold: A panacea for vanishing and exploding gradients? In _International Conference on Learning Representations_ , 2019. 

- R. KALMAN. A new approach to linear filtering and prediction problems. _J. Basic Eng., Trans. ASME, D_ , 82: 35–45, 1960. 

- A. Katharopoulos, A. Vyas, N. Pappas, and F. Fleuret. Transformers are rnns: Fast autoregressive transformers with linear attention. In _International Conference on Machine Learning_ , pages 5156–5165. PMLR, 2020. 

- P. Kidger, J. Morrill, J. Foster, and T. Lyons. Neural controlled differential equations for irregular time series. _Advances in Neural Information Processing Systems_ , 33:6696–6707, 2020. 

- N. Kitaev, L. Kaiser, and A. Levskaya. Reformer: The efficient transformer. In _International Conference on Learning Representations_ , 2019. 

- D. R. Kowal, D. S. Matteson, and D. Ruppert. Functional autoregression for sparsely sampled data. _Journal of Business & Economic Statistics_ , 37(1):97–109, 2019. 

- C. Lea, R. Vidal, A. Reiter, and G. D. Hager. Temporal convolutional networks: A unified approach to action segmentation. In _European Conference on Computer Vision_ , pages 47–54. Springer, 2016. 

15 

Liquid Structural State-Space Models 

- M. Lechner and R. Hasani. Mixed-memory rnns for learning long-term dependencies in irregularly sampled time series. _OpenReview_ , 2021. 

- M. Lechner, R. Hasani, M. Zimmer, T. A. Henzinger, and R. Grosu. Designing worm-inspired neural networks for interpretable robotic control. In _2019 International Conference on Robotics and Automation (ICRA)_ , pages 87–94. IEEE, 2019. 

- M. Lechner, R. Hasani, A. Amini, T. A. Henzinger, D. Rus, and R. Grosu. Neural circuit policies enabling auditable autonomy. _Nature Machine Intelligence_ , 2(10):642–652, 2020a. 

- M. Lechner, R. Hasani, D. Rus, and R. Grosu. Gershgorin loss stabilizes the recurrent neural network compartment of an end-to-end robot learning scheme. In _2020 International Conference on Robotics and Automation (ICRA)_ . IEEE, 2020b. 

- J. Lee-Thorp, J. Ainslie, I. Eckstein, and S. Ontanon. Fnet: Mixing tokens with fourier transforms. _arXiv preprint arXiv:2105.03824_ , 2021. 

- S. Li, W. Li, C. Cook, C. Zhu, and Y. Gao. Independently recurrent neural network (indrnn): Building a longer and deeper rnn. In _Proceedings of the IEEE conference on computer vision and pattern recognition_ , pages 5457–5466, 2018. 

- S. C.-X. Li and B. M. Marlin. A scalable end-to-end gaussian process adapter for irregularly sampled time series classification. In _Advances in neural information processing systems_ , pages 1804–1812, 2016. 

- L. Liebenwein, R. Hasani, A. Amini, and D. Rus. Sparse flows: Pruning continuous-depth models. _Advances in Neural Information Processing Systems_ , 34:22628–22642, 2021. 

- W. A. Little. The existence of persistent states in the brain. _Mathematical biosciences_ , 19(1-2):101–120, 1974. 

- X. Ma, X. Kong, S. Wang, C. Zhou, J. May, H. Ma, and L. Zettlemoyer. Luna: Linear unified nested attention. _Advances in Neural Information Processing Systems_ , 34:2441–2453, 2021. 

- S. Massaroli, M. Poli, J. Park, A. Yamashita, and H. Asama. Dissecting neural odes. _Advances in Neural Information Processing Systems_ , 33:3952–3963, 2020. 

- H. Mei and J. M. Eisner. The neural hawkes process: A neurally self-modulating multivariate point process. In _Advances in Neural Information Processing Systems_ , pages 6754–6764, 2017. 

- J. Morrill, P. Kidger, C. Salvi, J. Foster, and T. Lyons. Neural cdes for long time series via the log-ode method. _arXiv preprint arXiv:2009.08295_ , 2020. 

- J. Morrill, C. Salvi, P. Kidger, and J. Foster. Neural rough differential equations for long time series. In _International Conference on Machine Learning_ , pages 7829–7838. PMLR, 2021. 

- D. Neil, M. Pfeiffer, and S.-C. Liu. Phased lstm: Accelerating recurrent network training for long or event-based sequences. In _Advances in neural information processing systems_ , pages 3882–3890, 2016. 

- N. Nonaka and J. Seita. In-depth benchmarking of deep neural network architectures for ecg diagnosis. In _Machine Learning for Healthcare Conference_ , pages 414–439. PMLR, 2021. 

- R. Pearson, G. Goney, and J. Shwaber. Imbalanced clustering for microarray time-series. In _Proceedings of the ICML_ , volume 3, 2003. 

16 

Liquid Structural State-Space Models 

- W. Penny, Z. Ghahramani, and K. Friston. Bilinear dynamical systems. _Philosophical Transactions of the Royal Society B: Biological Sciences_ , 360(1457):983–993, 2005. 

- M. A. Pimentel, A. E. Johnson, P. H. Charlton, D. Birrenkott, P. J. Watkinson, L. Tarassenko, and D. A. Clifton. Toward a robust estimation of respiratory rate from pulse oximeters. _IEEE Transactions on Biomedical Engineering_ , 64(8):1914–1923, 2016. 

- A. Quaglino, M. Gallieri, J. Masci, and J. Koutn Ak.[˜] Snode: Spectral discretization of neural odes for system identification. In _International Conference on Learning Representations_ , 2020. 

- H. Ramsauer, B. Sch¨afl, J. Lehner, P. Seidl, M. Widrich, L. Gruber, M. Holzleitner, T. Adler, D. Kreil, M. K. Kopp, et al. Hopfield networks is all you need. In _International Conference on Learning Representations_ , 2020. 

- D. W. Romero, R.-J. Bruintjes, J. M. Tomczak, E. J. Bekkers, M. Hoogendoorn, and J. van Gemert. Flexconv: Continuous kernel convolutions with differentiable kernel sizes. In _International Conference on Learning Representations_ , 2021a. 

- D. W. Romero, A. Kuzina, E. J. Bekkers, J. M. Tomczak, and M. Hoogendoorn. Ckconv: Continuous kernel convolution for sequential data. In _International Conference on Learning Representations_ , 2021b. 

- D. Roy and L. Yan. Robust landsat-based crop time series modelling. _Remote Sensing of Environment_ , 238: 110810, 2020. 

- Y. Rubanova, T. Q. Chen, and D. K. Duvenaud. Latent ordinary differential equations for irregularly-sampled time series. In _Advances in Neural Information Processing Systems_ , pages 5321–5331, 2019. 

- D. E. Rumelhart, G. E. Hinton, and R. J. Williams. Learning representations by back-propagating errors. _nature_ , 323(6088):533–536, 1986. 

- T. K. Rusch and S. Mishra. Coupled oscillatory recurrent neural network (co _{_ rnn _}_ ): An accurate and (gradient) stable architecture for learning long time dependencies. In _International Conference on Learning Representations_ , 2021. URL https://openreview.net/forum?id=F3s69XzWOia. 

- A. Sherstinsky. Fundamentals of recurrent neural network (rnn) and long short-term memory (lstm) network. _Physica D: Nonlinear Phenomena_ , 404:132306, 2020. 

- J. T. Smith, A. Warrington, and S. W. Linderman. Simplified state space layers for sequence modeling. _arXiv preprint arXiv:2208.04933_ , 2022. 

- C. W. Tan, C. Bergmeir, F. Petitjean, and G. I. Webb. Time series extrinsic regression. _Data Mining and Knowledge Discovery_ , 35(3):1032–1060, 2021. 

- Y. Tay, D. Bahri, L. Yang, D. Metzler, and D.-C. Juan. Sparse sinkhorn attention. In _International Conference on Machine Learning_ , pages 9438–9447. PMLR, 2020a. 

- Y. Tay, M. Dehghani, S. Abnar, Y. Shen, D. Bahri, P. Pham, J. Rao, L. Yang, S. Ruder, and D. Metzler. Long range arena: A benchmark for efficient transformers. In _International Conference on Learning Representations_ , 2020b. 

- T. Trinh, A. Dai, T. Luong, and Q. Le. Learning longer-term dependencies in rnns with auxiliary losses. In _International Conference on Machine Learning_ , pages 4965–4974. PMLR, 2018. 

17 

Liquid Structural State-Space Models 

- A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, and I. Polosukhin. Attention is all you need. _Advances in neural information processing systems_ , 30, 2017. 

- A. Voelker, I. Kaji´c, and C. Eliasmith. Legendre memory units: Continuous-time representation in recurrent neural networks. _Advances in neural information processing systems_ , 32, 2019. 

- C. Vorbach, R. Hasani, A. Amini, M. Lechner, and D. Rus. Causal navigation by continuous-time neural networks. _Advances in Neural Information Processing Systems_ , 34, 2021. 

- C. Wang and M. Niepert. State-regularized recurrent neural networks. In _International Conference on Machine Learning_ , pages 6596–6606, 2019. 

- S. Wang, B. Z. Li, M. Khabsa, H. Fang, and H. Ma. Linformer: Self-attention with linear complexity. _arXiv preprint arXiv:2006.04768_ , 2020. 

- S. Wisdom, T. Powers, J. Hershey, J. Le Roux, and L. Atlas. Full-capacity unitary recurrent neural networks. _Advances in neural information processing systems_ , 29:4880–4888, 2016. 

- Y. Xiong, Z. Zeng, R. Chakraborty, M. Tan, G. Fung, Y. Li, and V. Singh. Nystr¨omformer: A nystr¨om-based algorithm for approximating self-attention. In _Proceedings of the AAAI Conference on Artificial Intelligence_ , volume 35, No 16, pages 14138–14148, 2021. 

- M. Zaheer, G. Guruganesh, K. A. Dubey, J. Ainslie, C. Alberti, S. Ontanon, P. Pham, A. Ravula, Q. Wang, L. Yang, et al. Big bird: Transformers for longer sequences. _Advances in Neural Information Processing Systems_ , 33:17283–17297, 2020. 

- Z. Zhu and R. Soricut. H-transformer-1d: Fast one-dimensional hierarchical attention for sequences. In _Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers)_ , pages 3801–3815, 2021. 

18 

Liquid Structural State-Space Models 

## **Supplementary Materials** 

## **S1. Proof of Proposition 1** 

_Proof._ This can be shown by unrolling the S4 convolution kernel and multiplying its components with _**B** p−_ 1, performing an anti-diagonal transformation to obtain the corresponding liquid S4 kernel: 

**==> picture [172 x 17] intentionally omitted <==**

For _p_ = 2 (correlations of order 2), S4 kernel should be multiplied by _**B**_ . The resulting kernel would be: 

**==> picture [167 x 17] intentionally omitted <==**

We obtain the liquid kernel by flipping the above kernel to be convolved with the 2-term correlation terms (p=2): 

**==> picture [218 x 17] intentionally omitted <==**

Similarly, we can obtain liquid kernels for higher liquid orders and obtain the statement of the proposition. 

## **S2. Hyperparameters** 

**Learning Rate.** Liquid-S4 generally requires a smaller learning rate compared to S4 and S4D blocks. **Setting** ∆ _tmax_ **and** ∆ _tmin_ We set ∆ _tmax_ for all experiments to 0.2, while the ∆ _tmin_ was set based on the recom1 mendations provided in (Gu et al., 2022c) to be proportional to ∝ seq length[.] **Causal Modeling vs. Bidirectional Modeling** Liquid-S4 works better when it is used as a causal model, i.e., with no bidirectional configuration. 

_dstate_ We observed that liquid-S4 PB kernel performs best with smaller individual state sizes _dstate_ . For instance, we achieve SOTA results in ListOps, IMDB, and Speech Commands by a state size set to 7, significantly reducing the number of required parameters to solve these tasks. 

**Choice of Liquid-S4 Kernel** In all experiments, we choose our simplified PB kernel over the KB kernel due to the computational costs and performance. We recommend the use of PB kernel. 

**Choice of parameter** _p_ **in liquid kernel.** In all experiments, start off by setting _p_ or the liquidity order to 2. This means that the liquid kernel is going to be computed only for correlation terms of order 2. In principle, we observe that higher _p_ values consistently enhance the representation learning capacity of liquid-S4 modules, as we showed in all experiments. We recommend _p_ = 3 as a norm to perform experiments with Liquid-S4. The kernel computation pipeline uses the PyKeops package (Charlier et al., 2021) for large tensor computations without memory overflow. 

All reported results are validation accuracy (similar to Gu et al. (2022a)) performed with 2 to 3 different random seeds, except for the BIDMC dataset, which reports accuracy on the test set. 

19 

Liquid Structural State-Space Models 

**Table** S1: Hyperparameters for obtaining best performing models. BN= Batch Normalization, LN = Layer normalization, WD= Weight decay. 

||**Depth**|**Features** _H_|**State Size**|**Norm**|**Pre-norm**|**Dropout**|**LR**|**Batch Size**|**Epochs**|**WD**|
|---|---|---|---|---|---|---|---|---|---|---|
|**ListOps**|9|128|7|BN|True|0.01|0.002|12|30|0.03|
|**Text (IMDB)**|4|128|7|BN|True|0.1|0.003|8|50|0.01|
|**Retrieval (AAN)**|6|256|64|BN|False|0.2|0.005|16|20|0.05|
|**Image (CIFAR)**|6|512|512|LN|False|0.1|0.01|16|200|0.03|
|**Pathfnder**|6|256|64|BN|True|0.0|0.0004|4|200|0.03|
|**Path-X**|6|320|64|BN|True|0.0|0.001|8|60|0.05|
|**Speech Commands**|6|128|7|BN|True|0.0|0.008|10|50|0.05|
|**BICMD (HR)**|6|128|256|LN|True|0.0|0.005|32|500|0.01|
|**BICMD (RR)**|6|128|256|LN|True|0.0|0.01|32|500|0.01|
|**BICMD (SpO2)**|6|128|256|LN|True|0.0|0.01|32|500|0.01|
|**sCIFAR**|6|512|512|LN|False|0.1|0.01|50|200|0.03|



**Table** S2: Performance on RAW Speech Command dataset with the reduced ten classes (SC10) dataset.Numbers indicate validation accuracy. The accuracy of baseline models is reported from Table 5 of (Gu et al., 2022a). x stands for infeasible computation on a single GPU or not applicable as stated in Table 10 of (Gu et al., 2022a). The hyperparameters for LiquidS4 are the same as the ones reported for Speech Commands Full Dataset reported in Table S1. 

||**SC10**|**SC10**|
|---|---|---|
|Model|16kHz|8kHz|
|Transformer|x|x|
|Performer|30.77|30.68|
|ODE-RNN|x|x|
|NRDE|16.49|15.12|
|ExpRNN|11.6|10.8|
|LipschitzRNN|x|x|
|CKConv|71.66|65.96|
|WaveGAN-D|96.25|x|
|LSSL (Gu et al.,2021)|x|x|
|S4-LegS (Gu et al.,2022a)|98.32|**96.30**|
|Liquid-S4 (ours)|**98.51**|95.9|
||p=2|p=2|



20 

