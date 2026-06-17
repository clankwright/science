# BIOLOGICAL CONNECTOMES AS A REPRESENTATION - FOR THE ARCHITECTURE OF ARTIFICIAL NEURAL NET WORKS 

**Samuel Schmidgall** George Mason University sschmidg@gmu.edu 

**Catherine Schuman Maryam Parsa** University of Tennessee, Knoxville George Mason University cschuman@utk.edu mparsa@gmu.edu 

## ABSTRACT 

Grand efforts in neuroscience are working toward mapping the connectomes of many new species, including the near completion of the _Drosophila melanogaster_ . It is important to ask whether these models could benefit artificial intelligence. In this work we ask two fundamental questions: (1) where and when biological connectomes can provide use in machine learning, (2) which design principles are necessary for extracting a good representation of the connectome. Toward this end, we translate the motor circuit of the _C. Elegans_ nematode into artificial neural networks at varying levels of biophysical realism and evaluate the outcome of training these networks on motor and non-motor behavioral tasks. We demonstrate that biophysical realism need not be upheld to attain the advantages of using biological circuits. We also establish that, even if the exact wiring diagram is not retained, the architectural statistics provide a valuable prior. Finally, we show that while the _C. Elegans_ locomotion circuit provides a powerful inductive bias on locomotion problems, its structure may hinder performance on tasks unrelated to locomotion such as visual classification problems. 

## INTRODUCTION 

Artificial neural networks (ANNs) are typically designed to have highly general architectures that work well on a wide variety of problems, depending primarily on the fine-tuning of weights across very large amounts of data to solve a given problem. This differs from nature, where much of animal behavior is encoded in the genome and decoded via highly structured brain connectivity that allows the rapid development of useful behaviors without much experience (Zador (2019)). These structured neural architectures have been fine-tuned over millions of years by evolution to bias the organism toward behavior which is useful for survival. 

This process is not too unfamiliar, as decades of artificial intelligence research has produced many models of representing data that provide strong inductive biases on a variety of task domains. Convolutional neural networks (CNNs) perform particularly well on image learning problems, with even randomly initialized CNNs can provide excellent results in certain image learning settings (Ulyanov et al. (2018)). Recurrent Neural Networks (RNNs) are particularly well-suited for variable input and variable time based problems and Long-Short Term Memory networks (LSTMs) present recurrent structure that is well-suited for handling much larger time spans than the RNNs (Lipton et al. (2015)). 

A recent grand endeavor in neuroscience has led to the mapping of the first completed connectome of a nematode species, the _Caenorhabditis Elegans_ ( _C. Elegans_ ). For the first time an opportunity has arisen for translating connectomes from neuroscience into the architecture of an artificial neural network. However, it is uncertain as to whether this representation could provide value to machine learning. Furthermore, it is uncertain as to how the architecture should model the synaptic and neuronal dynamics to best represent the connectome. 

A complimentary work explores designing an ANN architecture that resembles _C. Elegans_ -like microcircuits by combining discrete-time integrator and oscillation units (Bhattasali et al. (2022)). However, (a) this work did not use the _C. Elegans_ locomotion circuit, (b) the dynamics of the pre- 

1 

sented architecture differs from the _C. Elegans_ locomotion circuit ( _e.g. the use of sinusoidal input_ ), and (c) did not provide understanding of how to better utilize exact connectome data. Additionally, it did not provide either improvements nor limitations to connectome-based approaches. **The goal of our paper is not to design an architecture that works well on arbitrary problems, but to discern where and when biological connectomes have use for machine learning problems and how to properly harness connectome data for learning applications.** 

To begin answering these questions, we translate the locomotion circuit of the _C. Elegans_ nematode into artificial neural networks with neurons models at varying levels of biophysical realism. We use these models to solve (1) a common continuous control problem that resembles nematode locomotion in critical ways yet remains different from the details of the _C. Elegans_ body plan, and (2) learning problems that have little relationship to the function of the _C. Elegans_ locomotion circuit. For the nematode-like learning problem, we show that the _C. Elegans_ connectome provides a powerful inductive bias that enables improved performances over randomly connected neural networks. However, when training on learning problems with little relationship to nematode-like locomotion (e.g. image classification), the performance is dramatically hindered compared with more densely connected _general_ architectures. 

The primary contributions of this work are as follows: 

1. Results demonstrating that, while biophysical realism does indeed improve performance, it is not a necessary condition for attaining the benefits of using biological connectomes. 

2. Establishing that the exact wiring diagram provides the most beneficial inductive bias, but also that retaining the architectural statistics of the biological connectome _without_ the precise connective patterns still proves to provide valuable priors. 

3. A set of experiments demonstrating that while using biological connectomes as an architectural representation may provide a beneficial inductive bias on problems related to the function of that circuitry, it may not be beneficial _in general_ on problems unrelated to its function in nature. 

4. Open-source software for automatically converting connectome models into artificial neural networks that can be used for solving machine learning problems. This software includes connectomes from the _C. Elegans_ , which are studied in this work, and various regions of the _Drosophila Melanogaster_ brain, which provide exciting opportunities for future work. It also provides a general structure allowing for novel connectomes to be converted. 

We pay close attention to the training methodology ( _e.g. choice of optimization, population sizes that reflect natural C. Elegans populations_ ) and architectural design features ( _e.g. neuron model, synapse weight signs_ ) to remain as close to biology as possible while still providing useful theoretical advancements for machine learning. We believe this work provides meaningful progress toward an understanding of how connectomes may be useful and how to best harness their capabilities. 

## BACKGROUND AND METHODOLOGY 

A short introductory background on the _C. Elegans_ is important for understanding the results of this work, which is provided below. Here we discuss what the _C. Elegans_ is, how its motor circuit works to produce locomotion, and the population and evolutionary dynamics of _C. Elegans_ colonies. 

## THE CAENORHABDITIS ELEGANS 

In the laboratory setting, _C. Elegans_ are one of the simplest organisms to study and thus the nematode nervous system has served as an integral model in neuroscience over the past few decades. In addition, _C. Elegans_ was the first organism to have its full genome sequenced and still remains as the only organism species which has its _entire_ neuronal wiring diagram published to date (Cook et al. (2019)). 

_**The body and neural circuitry of Caenorhabditis Elegans.** C. Elegans_ is a free-living transparent nematode that thrives in temperate soil environments. Its cylindrical worm-like body spans a mere 1 

2 

**==> picture [338 x 229] intentionally omitted <==**

Figure 1: Graphical depiction of a segment of the _C. Elegans_ locomotion circuit, which is characterized by the depicted microcircuits repeated down the body of the nematode. This circuit propagates waves down the nematode body which oscillate between innervating ventral and dorsal sides of the muscle body wall. 

_mm_ in length and is comprised of 959 somatic cells, 302 of which are neurons[1] (White et al. (1986)). Its exterior is unsegmented and bilaterally symmetric ( _i.e. worm-like_ ), consisting of a simple set of anatomical structures: a mouth, intestines, gonad, and connective tissue, see Fig. 2. 

Despite the incredible simplicity of these organisms, the nematode’s neuronal dynamics closely resemble that of organisms with more complex nervous systems, and thus has served as a valuable model for neuroscience. Neurons in the nematode nervous system are generally separated into three categories based on their characteristic function and relationship to other neurons: sensory, motor and interneurons (Cook et al. (2019)). In this work we focus on _C. Elegans_ motor neuron circuitry and apply this toward solving locomotion problems. 

_**Locomotion in Caenorhabditis Elegans.**_ Among the few cells in the _C. Elegans_ connectome, 75 are motor neurons and 95 are body wall muscle neurons. Motor neurons are stimulated by sensory and interneurons, and are the primary driver of muscle neurons activity. These neural microcircuit patterns are repeated along the body in six repeating units of 12 motor neurons and 12 muscle neurons, see Fig 1 (Haspel & O’Donovan (2011); Haspel & O’Donovan (2012); Zhen & Samuel (2015)). These patterns produce muscle wave propagations that travel down the body and produce sinusoidal-like locomotion patterns that allow for a surprisingly wide-range of behaviors (Gray et al. (2005)). Within each microcircuit, forward locomotion is accomplished through the coordination of two classes of motor neurons, B and D, which are further characterized by their location along the body’s radial axis, dorsal (D-) and ventral (V-). The B-type motor neuron class is excitatory, meaning it makes its outgoing neurons _more likely_ to fire, and acts to innervate both muscle body wall neurons along its respective radial axis and D-type neurons on the opposing radial axis (e.g. ventral to dorsal) (Wen et al. (2012)). D-type motor neurons are inhibitory, making their outgoing connections _less likely_ to fire, and inhibit both the firing of their respective muscle body wall neurons and, in the case of VD neurons, the excitatory neuron along its own radial axis (Wen et al. (2012)). 

_**Population dynamics of Caenorhabditis Elegans.**_ Population size estimates range from 750 to 12,000 depending on the geographical location of the population, the time of year, and the avail- 

> 1These numbers were measured for the hermaphrodite nematode, with male nematode cell counts being generally larger (1031 somatic cells and 385 neurons). 

3 

ability of nutrients (Fr´ezal & F´elix (2015)). _C. Elegans_ populations consist of both males and hermaphrodites, however, the vast majority of individuals are _hermaphrodites_ (roughly 99.9% of the species), meaning each organism has both male and female reproductive organs (Chasnov (2013); Fr´ezal & F´elix (2015)). Reproduction is primarily propagated via hermaphroditic self-fertilization, where the hermaphrodite nematode produces offspring using its own reproductive material. As is discussed below, we take these principles of _C. Elegans_ population dynamics (e.g. hermaphrodite self-fertilization) and model them through the use of genetic algorithms. 

_**Genetic algorithms reflect Caenorhabditis Elegans evolutionary dynamics.**_ Genetic algorithms are a biologically-inspired optimization process which frames itself around an abstraction of the process of natural selection (Holland (1992); Luke (2013); De Jong (2017)). This algorithm works by (a) maintaining a population of organisms which (b) undergo a selection process based on their performance on a given task, and (c) the top performing organisms repopulate the subsequent organism pool. Selection in embodied learning problems is typically carried out through the use of a fitness function, which is a metric for determining the quality of an organism’s behavior over the course of its lifetime. In a genetic algorithm, typically only the _top-N_ highest fitness achieving organisms survive to the next generation (referred to as _elite selection_ ). To expand the population after the selection process, each of the remaining organisms are taken and mutated slightly to create the next generation of the population. This process reflects the evolutionary and reproductive dynamics of the _C. Elegans_ relatively well. 

## SOLVING LEARNING PROBLEMS WITH BIOLOGICAL CONNECTOMES 

_**Training dynamics.**_ Our experimental results are collected using a genetic algorithm where replication is based on self-fertilization, or asexual reproduction, with each child in the population having only one parent ( _i.e. no crossover_ ). This is to best mirror the reproductive and evolutionary patterns of _C. Elegans_ populations. Additionally, we set the population size of the genetic algorithm to 750, matching _C. Elegans_ population ranges present in nature (Barri`ere & F´elix (2005)). 

_**Connectome Representation.**_ Dale’s law states that in biological circuits, the sign of the weight of a synapse (excitatory or inhibitory) does not change. We wish to respect Dale’s law (Eccles (1976)) by preserving excitatory and inhibitory function of synapses in the connectome model, synaptic weights are represented on the _log-scale_ as follows: _wi,j_ = _si,j_ exp( _wi,j[log]_[)][.][Genetic][algorithm] mutations occur on the log weights _wi,j[log]_[,][that][appropriately][bound][exp][(] _[w] i,j[log]_[)][above][zero,][which,] when multiplied by the original weight sign _si,j_ , preserves the excitatory or inhibitory function of the synapse as is specified in the connectome model. This preservation has been shown to play significant role in retaining the functional properties of oscillatory circuits (Bhattasali et al. (2022)). 

## EXPERIMENTS 

## A BODY DESIGN RESEMBLING CAENORHABDITIS ELEGANS LOCOMOTION 

We begin our investigation of the _C. Elegans_ connectome on a body design, Swimmer, that is commonly used for continuous control in the Deepmind Control Suite (Tassa et al. (2018)) and OpenAI Gym (Brockman et al. (2016)). Much like in Bhattasali et al. (2022), we choose Swimmer instead of a more accurate neuromechanical model e.g. Izquierdo & Beer (2015); Sarma et al. (2018) to demonstrate the use of connectomes on problems of interest to the machine learning community. 

The Swimmer body is comprised of 6 cylindrical links that are connected via 5 articulated joints and looks similar to a worm, see Fig. 2. Instead of pushing off of solid ground, the Swimmer body is encompassed in simulated fluid which it must push against to generate forward momentum and is rewarded proportional to its current velocity along the x-axis. The ideal solution in this environment is indeed very much like _C. Elegans_ locomotion, with the Swimmer body propagating a wave down its body starting from the head ending at the tail. 

4 

**==> picture [338 x 231] intentionally omitted <==**

Figure 2: (Top) Graphical depiction of the _Caenorhabditis Elegans_ nematode body and its corresponding neuronal placements categorized into sensory ( _blue_ ), motor ( _yellow_ ), muscle ( _pink_ ), and interneurons ( _green_ ). (Bottom) Depiction of the 6-jointed Swimmer body design along with its joint positional sensors and its joint positional motors highlighted blue and pink to draw relationship to _C. Elegans_ sensory neurons and muscle neurons respectively. 

## VARYING BIOPHYSICAL REALISM 

Described in this experiment are three neuron models with varying degrees of biophysical realism presented in order of _least_ to _most_ biophysically accurate. We wish to determine whether we can deviate from biological neuron dynamics to still realize the benefits of the _C. Elegans_ connectome. 

_**Artificial Neuron Model.**_ The artificial neuron, which is the neuron model most commonly used in machine learning applications, applies an arbitrary non-linearity to the sum of weighted inputs from pre-neuron _i_ to post-neuron _j_ via _**z** j_ ( _t_ ) = _σ_ ( _**w** i,j ·_ _**z** i_ ( _t_ )), where _**w** i,j_ represents the weight from neuron _i_ to _j_ , _**z** j_ ( _t_ ) represents the activity of neuron _j_ at time _t_ , and _σ_ represents a typically smooth and continuous non-linear activation function. While the original activations used in artificial neural networks are more biological in nature (McCulloch & Pitts (1943)), these were slowly replaced over time with smoother time-invariant functions due to the use of differentiation as the medium of optimization, which tends to converge faster with smooth gradient landscapes (Sharma et al. (2017); Nwankpa et al. (2018)). In our experiments we use a ReLU nonlinearity, which resembles the more biologically descriptive neuron models in that it has an _all-or-nothing_ firing pattern, producing either a zero or some quantity _x_ . 

_**Adaptive Leaky Integrate-and-Fire Neuron Model.**_ The Leaky Integrate-and-Fire (LIF) neuron is characterized via a set of equations which aim to represent the artificial neuron activation function in a more biologically realistic manner while remaining computationally efficient (Lapique (1907); Tuckwell (1988); Abbott (1999)). The LIF equations are as follows: 

**==> picture [272 x 11] intentionally omitted <==**

**==> picture [278 x 25] intentionally omitted <==**

5 

In this model, activity is integrated into the neuron membrane potential _**v** j_ and retained across time, and, once the activity exceeds a threshold value _**v** j_ ( _t_ ) _≥ vth_ , a binary action potential, _**s** j_ ( _t_ ) = 1, is propagated and the membrane potential is reset to zero. The ”leaky” component of the LIF refers to the membrane potential ( _**v** j_ for a given neuron _j_ ) being slowly decayed, or leaked, over time by a constant factor 0 _< γ <_ 1. This leaking property more accurately represents the passive ion diffusion that takes place in biological neurons, and has important consequences for learning. 

While the LIF model is certainly closer to biology than the artificial neuron model, it falls short in biophysical representation capacity in several ways. The most significant disadvantage is that it cannot capture neuronal adaptation, which prevents it from representing measured spike trains with constant input current. Neuronal adaptation is the process by which, in the presence of a constant current, the time between action potentials increases over time. This process can be incorporated very simply into the LIF model, becoming the Adaptive LIF (ALIF), if we let each neuron have a local trace, _vadp_ ( _t_ ), which accumulates action potentials as follows: _vadp_ ( _t_ ) = _γsvadp_ ( _t_ ) + _**βs**_ ( _t_ ), where _γs_ controls the adaptation decay and _**β**_ determines the affect action potentials have on the new threshold. Finally, _vadp_ ( _t_ ) is incorporated into the action potential firing threshold which becomes _**v** j_ ( _t_ ) _> vth_ becomes _**v** j_ ( _t_ ) _> vth_ + _vadp_ ( _t_ ). 

However, like the LIF model, the ALIF model still struggles to capture fundamental behaviors present in biological neurons (Izhikevich (2004)) and thus falls short in providing thorough biophysical accuracy. 

_**Izhikevich Neuron Model.**_ Many accurate biophysical neurons models, such as the HodgkinsHuxley, are computationally prohibitive and can only simulate several neurons at real-time speed, preventing their use in computationally intensive applications. To get around this problem, while still maintaining the important properties of more complicated biophysical models, the Izhikevich neuron model (Izhikevich (2003)) effectively balances realism and tractability. This is accomplished via the following set of differential equations: 

**==> picture [336 x 24] intentionally omitted <==**

**==> picture [270 x 11] intentionally omitted <==**

**==> picture [238 x 145] intentionally omitted <==**

Figure 3: Performance across 

In these equations, a spike is fired ( _sj_ ( _t_ ) = 1) when _vi_ ( _t_ ) _≥_ 30 mV, upon which _v ← c_ and _u ← u_ + _d_ . While seemingly non-biologically descriptive at first, the Izhikevich neuron model is actually the product of rigorously fitting the parameters of a quadratic integrate-and-fire equation to a wide range of _in-vitro_ recordings of different cortical neuron dynamics. This allows the model to be both highly biophysically accurate and computationally efficient. A selection of the values of the four variables _a, b, c, and d_ determine the spiking and bursting dynamics of the neuron. Additional training details for all three neuron models are provided in the Appendix. 

_**Results.**_ The premise of the following experiment is simple: We will compare the performance of the _C. Elegans_ locomotion circuit with varying degrees of realism trained on the Swimmer locomotion problem. The weights of these circuits are trained using a genetic algorithm which resembles _C. Elegans_ evolutionary dynamics as is described both in _Methods_ and in-depth in the _Appendix_ . The results of these experiments are shown in Fig. 3. 

6 

Similar to the artificial circuits used in Bhattasali et al. (2022), we do not observe much additional performance growth relative to the network prior with additional training, especially with the more biologically realistic neuron models. We can see that the three networks converge to similar final values, with the more biophysically accurate neuron models performing slightly better than the artificial neuron model. The primary difference between these models is in their _initial average performance_ , with the Izhikevich neuron model beginning at _∼_ 130, the ALIF around _∼_ 100 and the Artificial neuron model around _∼_ 50. The most important finding of these graphs however, is that biophysical realism is not necessary to realize the potential of biological circuits. 

## ARCHITECTURAL STATISTICS CONSERVE BENEFITS OF INDUCTIVE PRIORS 

While a comprehensive map of the _C. Elegans_ neural connections is available in its entirety, this organism is an exception – it is the only organism with a complete connectomic mapping. Nonetheless, while no other organism has a complete mapping, many organisms have _approximate connectome statistics_ available ( _e.g. number of neurons, number of inhibitory/excitatory synapses_ ). To motivate the use of connectomes, it would also be necessary to motivate the use of **connectome statistics** since outside of the _C. Elegans_ this constitutes the majority of our knowledge of the connectomes of other organisms. 

Toward this end, we design an experiment where the **essential statistics** of the _C. Elegans_ locomotion circuit are used to construct a sparse Multi-Layer Perceptron (MLP). We then compare the performance of the _C. Elegans_ approximate MLP with a fully connected MLP and a sparsely connected MLP with random architectural statistics. The performance is compared on the Swimmer task in order to determine how much architectural bias the _C. Elegans_ circuit retains. 

The _C. Elegans_ statistics network is a sparse artificial neural network which has the same number of neurons and synapses as the original _C. Elegans_ connectome, where the excitatory and inhibitory neuron ratios are preserved but the precise circuitry is not. The fully connected neural network is a two-hidden-layer neural network with the same number of neurons as the _C. Elegans_ network, however the neurons have a fully connected structure between layers (i.e. an MLP). The final network 

**==> picture [198 x 139] intentionally omitted <==**

Figure 4: Performance across three network architectures. The first of which has the connectivity statistics of the C. ELegans locomotion circuit. The second is a fully connected MLP. The final curve represents a sparsely connected MLP with randomly sampled sparsity. 

is also a two-hidden-layer MLP, however the layer between hidden neurons has a sparsely connected topology, where the sparsity and excitatory-inhibitory ratios are randomly sampled from a uniform distribution. 

Fig. 4 shows the performance across the three compared network architectures. Both the fully connected and sparsely connected MLPs begin with a performance around 0, but the approximate _C. Elegans_ network begins with a performance around 22, retaining a fraction of the locomotion circuit inductive bias. The _C. Elegans_ network obtains a final performance of 146 _._ 4 _±_ 3 _._ 5 compared with the fully connected MLP around 96 _._ 2 _±_ 13 _._ 6 and the sparsely connected MLP around 63 _._ 7 _±_ 17 _._ 2. It is clear that the precise circuitry of the _C. Elegans_ connectome remains superior. However, these results indicate that, **while the precise connectome may not be known, approximate architectural statistics can still provide useful information for solving a problem.** Nonetheless, more investigation needs to be done around why connectome statistics still provide an inductive bias despite the network microcircuits being degraded. 

7 

## THE LIMITATIONS OF ARCHITECTURAL PRIORS 

We have thus far demonstrated that the _C. Elegans_ connectome model may provide useful behavioral priors on _a particular task_ that is closely related to the purpose of that connectome. In this case, we showed that the _C. Elegans_ connectome provides a powerful inductive prior on a swimmer locomotion task that requires oscillatory wave propagation motion – exactly what the _C. Elegans_ locomotion circuit is designed to do. However, we wish to investigate to what extent these priors prove useful on tasks that do not resemble their biological purpose. How well would the _C. Elegans_ connectome perform on a legged locomotion problem or on an image learning problem? 

To determine this, we examine the performance of the _C. Elegans_ connectome on a locomotion problem from the same benchmark suite, as well as a classification problem that is completely outside the domain of the _C. Elegans_ architecture design. For the locomotion problem, we evaluate the performance of the connectome on the Half Cheetah task (Tassa et al. (2018)), which consists of a 2D planar robot with a total of 7 links, 2 legs and a torso, where each leg has a total of 3 actuated joints. The objective is to run forward with the highest velocity possible. For the image learning problem we evaluate the performance of the connectome on MNIST (LeCun (1998)), a 28x28 dimensional handwritten digit classification problem with 10 digit classes. 

**==> picture [390 x 138] intentionally omitted <==**

Figure 5: Training performance curves on (a) a reinforcement learning problem, the Half Cheetah locomotion benchmark (Tassa et al. (2018)), and (b) an image learning problem, MNIST (LeCun (1998)). It can be seen that the C. Elegans network structure hinders performance on both tasks and converges early in the training process, whereas the MLP performs relatively well on both tasks. 

In Fig. 5 we can see that on both the Half Cheetah and MNIST problems, the C. Elegans connectome not only does not outperform a standard MLP like in previous problems, but also performs dramatically worse than it. There is a characteristic deterioration in performance growth after a small amount of training time. This lack of performance growth may be a product of the _C. Elegans_ dependence on structure priors at birth versus on intra-lifetime learning like in higher order mammals, thus developing an architecture that biases toward _innate knowledge_ over _learning capability_ . While this innate bias is helpful for the Swimmer locomotion problem, as these results demonstrate, this innate bias is in fact a limitation when using the connectome on problems that do not resemble nematode locomotion. Stated more clearly, the architecture constrains the set of possible behaviors, in turn biasing the network to the subset of behaviors that the architecture was designed to perform (e.g. _oscillations_ ). These findings demonstrate that connectomes must be applied in the right context to realize the benefits of their architectural priors. 

## DISCUSSION AND FUTURE WORK 

In this work we discerned where and when biological connectomes can prove advantageous for machine learning. We showed that for problems resembling the function of the connectome ( _e.g. oscillatory locomotion for the C. Elegans)_ , there exists a strong and beneficial inductive bias. However, for problems not resembling the function of the connectome, its structure constrains the model’s representation, and degrades training performance. We showed that increasing biological realism 

8 

improves the priors of the connectome, but that realism is not necessary for extracting the benefits of the network structure. Finally, we demonstrated that architectural statistics conserve some benefits of the inductive priors of the architecture. 

One of the primary limitations of using biological connectomes is that it requires a degree of understanding in systems neuroscience to enable an effective implementation. To alleviate this difficulty, we have developed open-source software tools to automatically convert connectome models into artificial neural networks that can be readily used for solving optimization problems[2] . This includes a process of finding a good set of _initial shared weights_ for the excitatory and inhibitory connections, as well as tuning the neuron parameters for arbitrary learning problems. We hope this software will help further research at the intersection of connectomics and machine learning, particularly for exploring the connectome of the _Drosophila melanogaster_ , which includes a visual processing system (Takemura (2015)) that may lead to new and powerful architectural discoveries for visual learning problems. 

We believe that connectomes may provide structure that promotes stable bounds for models of synaptic plasticity, which have seen a recent resurgence for use in deep learning applications (Miconi et al. (2020); Najarro & Risi (2020); Schmidgall et al. (2021); Schmidgall & Hays (2022a)). As this work has demonstrated, the connectome seems to provide a strong inductive bias on both the initial behavior and the set of possible behaviors that the network can produce. The use of structured connectomes could prevent highly dynamic weights from deteriorating behavior. This differs from a more general architecture where the behavior would change much more dramatically with small changes in weights (Schmidgall & Hays (2022b)). These perturbations become more dramatic when weights are changing simultaneously and independently. 

We believe that the incredible sparsity of biological connectomes ( _3.2% for the C. Elegans_ , Cook et al. (2019)) will significantly decrease the amount of energy necessary to deploy deep learning models, perhaps through the use of neuromorphic hardware (Young et al. (2019); Zhu et al. (2020); Schuman et al. (2022)). These connectomes may lead to more robust and resilient neural systems that sidestep many of the adversarial drawbacks of highly general network structures (Guo et al. (2018); Schuman et al. (2020)). Finally, we believe that the use of biological connectomes in machine learning may lead to profound advancements in both our understanding of the role of neural architecture and in discovering new neural architectures. We believe that our work is a step toward bridging the gap between our understanding of systems neuroscience and artificial intelligence. 

## REPRODUCIBLITY 

To ensure reproducibility we have included an exhaustive list of hyperparameters for both the GA, ES, and neuron models in every experiment. A detailed explanation of the training process is also described in the Appendix. Finally, a software toolkit for using connectomes as neural architecture is released along with the paper. 

## REFERENCES 

- Larry F Abbott. Lapicque’s introduction of the integrate-and-fire model neuron (1907). _Brain research bulletin_ , 50(5-6):303–304, 1999. 

- Antoine Barri`ere and Marie-Anne F´elix. Natural variation and population genetics of caenorhabditis elegans. _WormBook_ , 2005:1–19, 2005. 

- Nikhil X Bhattasali, Anthony M Zador, and Tatiana A Engel. Neural circuit architectural priors for embodied control. _arXiv preprint arXiv:2201.05242_ , 2022. 

- Greg Brockman, Vicki Cheung, Ludwig Pettersson, Jonas Schneider, John Schulman, Jie Tang, and Wojciech Zaremba. Openai gym. _arXiv preprint arXiv:1606.01540_ , 2016. 

- Jeffrey R Chasnov. The evolutionary role of males in c. elegans. In _Worm_ , volume 2, pp. e21146. Taylor & Francis, 2013. 

> 2The link will be attached here upon acceptance. 

9 

- Steven J Cook, Travis A Jarrell, Christopher A Brittin, Yi Wang, Adam E Bloniarz, Maksim A Yakovlev, Ken CQ Nguyen, Leo T-H Tang, Emily A Bayer, Janet S Duerr, et al. Whole-animal connectomes of both caenorhabditis elegans sexes. _Nature_ , 571(7763):63–71, 2019. 

- Kenneth De Jong. Evolutionary computation: a unified approach. In _Proceedings of the Genetic and Evolutionary Computation Conference Companion_ , pp. 373–388, 2017. 

- John Carew Eccles. From electrical to chemical transmission in the central nervous system: the closing address of the sir henry dale centennial symposium cambridge, 19 september 1975. _Notes and records of the Royal Society of London_ , 30(2):219–230, 1976. 

- Lise Fr´ezal and Marie-Anne F´elix. The natural history of model organisms: C. elegans outside the petri dish. _elife_ , 4:e05849, 2015. 

- Jesse M Gray, Joseph J Hill, and Cornelia I Bargmann. A circuit for navigation in caenorhabditis elegans. _Proceedings of the National Academy of Sciences_ , 102(9):3184–3191, 2005. 

- Yiwen Guo, Chao Zhang, Changshui Zhang, and Yurong Chen. Sparse dnns with improved adversarial robustness. _Advances in neural information processing systems_ , 31, 2018. 

- Charles R Harris, K Jarrod Millman, St´efan J Van Der Walt, Ralf Gommers, Pauli Virtanen, David Cournapeau, Eric Wieser, Julian Taylor, Sebastian Berg, Nathaniel J Smith, et al. Array programming with numpy. _Nature_ , 585(7825):357–362, 2020. 

- Gal Haspel and Michael J O’Donovan. A perimotor framework reveals functional segmentation in the motoneuronal network controlling locomotion in caenorhabditis elegans. _Journal of Neuroscience_ , 31(41):14611–14623, 2011. 

- Gal Haspel and Michael J O’Donovan. A connectivity model for the locomotor network of caenorhabditis elegans. In _Worm_ , volume 1, pp. 125–128. Taylor & Francis, 2012. 

John H Holland. Genetic algorithms. _Scientific american_ , 267(1):66–73, 1992. 

- Eugene M Izhikevich. Simple model of spiking neurons. _IEEE Transactions on neural networks_ , 14(6):1569–1572, 2003. 

- Eugene M Izhikevich. Which model to use for cortical spiking neurons? _IEEE transactions on neural networks_ , 15(5):1063–1070, 2004. 

- Eduardo J Izquierdo and Randall D Beer. An integrated neuromechanical model of steering in c. elegans. In _ECAL 2015: the 13th European Conference on Artificial Life_ , pp. 199–206. MIT Press, 2015. 

- Louis Lapique. Recherches quantitatives sur l’excitation electrique des nerfs traitee comme une polarization. _Journal of Physiology and Pathololgy_ , 9:620–635, 1907. 

Yann LeCun. The mnist database of handwritten digits. _http://yann. lecun. com/exdb/mnist/_ , 1998. 

Zachary C Lipton, John Berkowitz, and Charles Elkan. A critical review of recurrent neural networks for sequence learning. _arXiv preprint arXiv:1506.00019_ , 2015. 

Sean Luke. _Essentials of metaheuristics_ , volume 2. Lulu Raleigh, 2013. 

Warren S McCulloch and Walter Pitts. A logical calculus of the ideas immanent in nervous activity. _The bulletin of mathematical biophysics_ , 5(4):115–133, 1943. 

- Thomas Miconi, Aditya Rawal, Jeff Clune, and Kenneth O Stanley. Backpropamine: training self-modifying neural networks with differentiable neuromodulated plasticity. _arXiv preprint arXiv:2002.10585_ , 2020. 

- Elias Najarro and Sebastian Risi. Meta-learning through hebbian plasticity in random networks. _Advances in Neural Information Processing Systems_ , 33:20719–20731, 2020. 

10 

- Chigozie Nwankpa, Winifred Ijomah, Anthony Gachagan, and Stephen Marshall. Activation functions: Comparison of trends in practice and research for deep learning. _arXiv preprint arXiv:1811.03378_ , 2018. 

- Tim Salimans, Jonathan Ho, Xi Chen, Szymon Sidor, and Ilya Sutskever. Evolution strategies as a scalable alternative to reinforcement learning. _arXiv preprint arXiv:1703.03864_ , 2017. 

- Gopal P Sarma, Chee Wai Lee, Tom Portegys, Vahid Ghayoomie, Travis Jacobs, Bradly Alicea, Matteo Cantarelli, Michael Currie, Richard C Gerkin, Shane Gingell, et al. Openworm: overview and recent advances in integrative biological simulation of caenorhabditis elegans. _Philosophical Transactions of the Royal Society B_ , 373(1758):20170382, 2018. 

- Samuel Schmidgall and Joe Hays. Learning to learn online with neuromodulated synaptic plasticity in spiking neural networks. _bioRxiv_ , 2022a. 

- Samuel Schmidgall and Joe Hays. Stable lifelong learning: Spiking neurons as a solution to instability in plastic neural networks. In _Neuro-Inspired Computational Elements Conference_ , pp. 1–7, 2022b. 

- Samuel Schmidgall, Julia Ashkanazy, Wallace Lawson, and Joe Hays. Spikepropamine: Differentiable plasticity in spiking neural networks. _Frontiers in neurorobotics_ , pp. 120, 2021. 

- Catherine D Schuman, J Parker Mitchell, J Travis Johnston, Maryam Parsa, Bill Kay, Prasanna Date, and Robert M Patton. Resilience and robustness of spiking neural networks for neuromorphic systems. In _2020 International Joint Conference on Neural Networks (IJCNN)_ , pp. 1–10. IEEE, 2020. 

- Catherine D Schuman, Shruti R Kulkarni, Maryam Parsa, J Parker Mitchell, Bill Kay, et al. Opportunities for neuromorphic computing algorithms and applications. _Nature Computational Science_ , 2(1):10–19, 2022. 

- Sagar Sharma, Simone Sharma, and Anidhya Athaiya. Activation functions in neural networks. _towards data science_ , 6(12):310–316, 2017. 

Shin-ya Takemura. Connectome of the fly visual circuitry. _Microscopy_ , 64(1):37–44, 2015. 

- Yuval Tassa, Yotam Doron, Alistair Muldal, Tom Erez, Yazhe Li, Diego de Las Casas, David Budden, Abbas Abdolmaleki, Josh Merel, Andrew Lefrancq, et al. Deepmind control suite. _arXiv preprint arXiv:1801.00690_ , 2018. 

- Henry Clavering Tuckwell. _Introduction to theoretical neurobiology: linear cable theory and dendritic structure_ , volume 1. Cambridge University Press, 1988. 

- Dmitry Ulyanov, Andrea Vedaldi, and Victor Lempitsky. Deep image prior. In _Proceedings of the IEEE conference on computer vision and pattern recognition_ , pp. 9446–9454, 2018. 

- Quan Wen, Michelle D Po, Elizabeth Hulme, Sway Chen, Xinyu Liu, Sen Wai Kwok, Marc Gershow, Andrew M Leifer, Victoria Butler, Christopher Fang-Yen, et al. Proprioceptive coupling within motor neurons drives c. elegans forward locomotion. _Neuron_ , 76(4):750–761, 2012. 

- John G White, Eileen Southgate, J Nichol Thomson, Sydney Brenner, et al. The structure of the nervous system of the nematode caenorhabditis elegans. _Philos Trans R Soc Lond B Biol Sci_ , 314 (1165):1–340, 1986. 

- Steven R Young, Pravallika Devineni, Maryam Parsa, J Travis Johnston, Bill Kay, Robert M Patton, Catherine D Schuman, Derek C Rose, and Thomas E Potok. Evolving energy efficient convolutional neural networks. In _2019 IEEE International Conference on Big Data (Big Data)_ , pp. 4479–4485. IEEE, 2019. 

- Anthony M Zador. A critique of pure learning and what artificial neural networks can learn from animal brains. _Nature communications_ , 10(1):1–7, 2019. 

- Mei Zhen and Aravinthan DT Samuel. C. elegans locomotion: small circuits, complex functions. _Current opinion in neurobiology_ , 33:117–126, 2015. 

- Jiadi Zhu, Teng Zhang, Yuchao Yang, and Ru Huang. A comprehensive review on emerging artificial neuromorphic devices. _Applied Physics Reviews_ , 7(1):011312, 2020. 

11 

## A APPENDIX 

## A.1 HARDWARE SPECIFICATIONS 

**Training Device:** 2021 Apple MacBook Pro 

**Operating System:** macOS Monteray v12.3 

**Processor** : Apple M1 Max with 10-core CPU (8 Performance and 2 Efficiency) 

**Installed Physical Memory (RAM):** 64 GB of Unified Memory (LPDDR5) 

## A.2 TRAINING DETAILS 

Inputs were mapped into the locomotion circuit motor neurons (or the hidden neurons for MLPs) via a pre-trained non-linear encoder for each of the three networks (Artificial, ALIF, Izikevich) and for the three compared connectivity statistics networks. Outputs were mapped from the muscle body-wall neuron spiking activity to motor actions (or classification labels) via a pre-trained nonlinear encoder. Additionally, for all networks, the initial weights and neuron model constants were pretrained, like in previous work (Bhattasali et al. (2022)), and these initial weights were individually fine-tuned during the GA training. Pretraining was accomplished using an Evolutionary Strategies optimizer (Salimans et al. (2017)) for 1000 epochs, with details below. 

Neural network, genetic algorithm, and evolutionary strategies code was implemented using the Numpy Python library (Harris et al. (2020)). 

## A.3 HYPERPARAMETERS 

A.3.1 GENETIC ALGORITHM 

## _**Varying Biophysical Realism**_ 

**Population Size:** 750 

**Elite Selection Size:** 8 

**Mutation Rate (Encoder/Decoder):** 0.01 

**Mutation Rate (Connectome Weights):** 0.01 

**Mutation Rate Decay (Encoder/Decoder):** 0.997 

**Mutation Rate Decay (Connectome Weights):** 0.997 

## _**Architectural Statistics Conserve Benefits of Indudctive Priors**_ 

**Population Size:** 750 

**Elite Selection Size:** 8 

**Mutation Rate (Encoder/Decoder):** 0.01 

**Mutation Rate (Connectome Weights):** 0.02 

**Mutation Rate Decay (Encoder/Decoder):** 0.997 

**Mutation Rate Decay (Connectome Weights):** 0.997 

## _**Limitations of Architectural Priors**_ 

**Population Size:** 750 

**Elite Selection Size:** 8 

**Mutation Rate (Encoder/Decoder):** 0.02 

**Mutation Rate (Connectome Weights):** 0.02 

**Mutation Rate Decay (Encoder/Decoder):** 0.998 

12 

## **Mutation Rate Decay (Connectome Weights):** 0.998 

- A.3.2 EVOLUTIONARY ALGORITHM 

**Population Size:** 200 **Mutation Rate (Encoder/Decoder):** 0.1 **Mutation Rate (Shared, Connectome Weights):** 0.1 **Learning Rate (Encoder/Decoder):** 0.1 **Learning Rate (Shared, Connectome Weights):** 0.1 **Mutation Rate Decay (Encoder/Decoder):** 0.999 **Mutation Rate Decay (Shared, Connectome Weights):** 0.999 **Learning Rate Decay (Encoder/Decoder):** 0.999 **Learning Rate Decay (Shared, Connectome Weights):** 0.999 

- A.3.3 NEURON MODELS 

## _**Adaptive Leaky Integrate-and-Fire Neuron Model**_ 

**Voltage Decay:** _e[−]_[1] _[/]_[20] **Adaptation Time Constant:** 0 _._ 5 **Adaptive Threshold Decay:** _e[−]_[1] _[/]_[10] **Connectome Weight Initialization Sample (Excitatory):** _wi,j_ = _e[−]_[1] _[.]_[0] **Connectome Weight Initialization Sample (Inhibitory):** _wi,j_ = _e[−]_[1] _[.]_[5] **Encoder/Decoder Weight Initialization Sample:** _wi,j ∼_ U( _−_ 0 _._ 3 _,_ 0 _._ 3) _**Izhikevich Neuron Model**_ **Initial Parameter** _**a**_ **:** 0 _._ 02 **Initial Parameter** _**b**_ **:** 0 _._ 25 **Initial Parameter** _**c**_ **:** _−_ 58 **Initial Parameter** _**d**_ **:** 0 **Spike Firing Threshold:** 30 **Synaptic Delay:** 1 ms **Current Scalar** 20 _._ 0 **Voltage Constant Scalar** 0 _._ 2 **Adaptive Threshold Decay:** _e[−]_[1] _[/]_[10] **Connectome Weight Initialization Sample (Excitatory):** _wi,j_ = _e_[2] _[.]_[0] **Connectome Weight Initialization Sample (Inhibitory):** _wi,j_ = _e_[1] _[.]_[0] **Encoder/Decoder Weight Initialization Sample:** _wi,j ∼_ U( _−_ 0 _._ 3 _,_ 0 _._ 3) 

## _**Artificial Neuron Model**_ 

**Connectome Weight Initialization Sample (Excitatory):** _wi,j_ = _e[−]_[2] _[.]_[5] **Connectome Weight Initialization Sample (Inhibitory):** _wi,j_ = _e[−]_[3] _[.]_[0] **Encoder/Decoder Weight Initialization Sample:** _wi,j ∼_ U( _−_ 0 _._ 3 _,_ 0 _._ 3) 

13 

