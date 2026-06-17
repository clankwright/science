bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

# **Connectome-constrained deep mechanistic networks predict neural responses across the fly visual system at single-neuron resolution** 

Janne K. Lappalainen,[1] _[,]_[2] Fabian D. Tschopp,[2] Sridhama Prakhya,[2] Mason McGill,[2] _[,]_[3] Aljoscha Nern,[2] Kazunori Shinomiya,[2] Shin-ya Takemura,[2] Eyal Gruntman,[2] Jakob H. Macke,[1] _[,]_[4] Srinivas C. Turaga[2] _[∗]_ 

1Machine Learning in Science, T¨ubingen University and T¨ubingen AI Center, Germany 

2HHMI Janelia Research Campus, Ashburn, VA, USA 

3Computation and Neural Systems, California Institute of Technology, Pasadena, CA, USA 

4Max Planck Institute for Intelligent Systems, T¨ubingen, Germany 

> _∗_ turagas@janelia.hhmi.org. 

## **Abstract** 

We can now measure the connectivity of every neuron in a neural circuit, but we are still blind to other biological details, including the dynamical characteristics of each neuron. The degree to which connectivity measurements alone can inform understanding of neural computation is an open question. Here we show that with only measurements of the connectivity of a biological neural network, we can predict the neural activity underlying neural computation. We constructed a model neural network with the experimentally determined connectivity for 64 cell types in the motion pathways of the fruit fly optic lobe but with unknown parameters for the single neuron and single synapse properties. We then optimized the values of these unknown parameters using techniques from deep learning, to allow the model network to detect visual motion. Our mechanistic model makes detailed experimentally testable predictions for each neuron in the connectome. We found that model predictions agreed with experimental measurements of neural activity across 24 studies. Our work demonstrates a strategy for generating detailed hypotheses about the mechanisms of neural circuit function from connectivity measurements. We show that this strategy is more likely to be successful when neurons are sparsely connected—a universally observed feature of biological neural networks across species and brain regions. 

## 1 

## **Introduction** 

- 2 Electrical signals propagating through networks of neurons in the nervous system form the basis of com3 putations such as the visual detection of movement. The propagation of neural activity is shaped by both 4 the functional properties of individual neurons and their synaptic connectivity. In addition, multiple addi5 tional factors[1,2] including electrical synapses[3,4] , neuromodulation[5] , and glia[6] are known to further influence 6 neural activity on multiple time-scales. Volume electron microscopy can now be used to comprehensively 7 measure the connectivity of every neuron in a neural circuit, and even entire nervous systems[7–24] . However, 

- 8 we do not yet have the means to also comprehensively measure all other biological details, including the 9 dynamical properties of every neuron and synapse in the same circuit[2] . For these reasons, there has been 

- 10 considerable debate about the utility of connectomic measurements for understanding brain function[25] . Is 11 it possible to use measurements of only neural connectivity to generate accurate predictions about how the 12 neural circuit functions? Even in the complete absence of direct measurements of neural activity from a 13 living brain? 

1 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

- 14 There is considerable evidence from computer science and neuroscience that there is not usually a strong 15 link between the connectivity of a neural network and its computational function. Universal function ap16 proximation theorems for artificial neural networks[26–28] imply that the same computational task can be per17 formed by many different networks with very different neural connectivity. Empirically, there exist many 18 classes of general purpose artificial neural network architectures which can trained to perform the same 19 large diversity of computational tasks[29] . Such differences in connectivity can correspond to qualitatively 20 different computational mechanisms[30,31] . Similarly in neuroscience, there have been competing proposals 21 by theorists for example, for the neural circuit mechanisms of the computation of visual motion[32,33] , and 22 for the integration of eye velocity commands into eye position signals[34,35] , with each proposal suggesting 23 different neural connectivity. Further, circuits with the same connectivity can function differently[5] . Thus in 24 general, neither the connectivity of a circuit alone, nor its computational task alone, can uniquely determine 25 the mechanism of circuit function[36–38] . 

- 26 Here we show that the connectivity of a neural circuit, together with knowledge of its computational 27 task, enables accurate predictions of the role played by individual neurons in the circuit in the computational 28 task. We constructed a differentiable[39,40] model neural network with a close correspondence to the brain, 29 whose connectivity was given by connectomic measurements and with unknown single neuron and single 30 synapse parameters. We optimized the unknown parameters of the model network using techniques from 31 deep learning[41–43] , to enable the model network to accomplish the computational task[44–47] . We call such 32 models connectome-constrained and task-optimized deep mechanistic networks (DMNs; Fig. 1a). 

- 33 We applied this approach to model the motion pathways in the optic lobe of the _Drosophila_ visual sys34 tem. We constructed a DMN with experimentally measured connectivity[48–50] , and unknown parameters for 35 the single neuron dynamics and the strength of a unitary synapse. We optimized the unknown model param36 eters on the computer vision task of computing visual motion from dynamic visual stimuli. Visual motion 37 computation in the fly visual system and its mechanistic underpinnings have been extensively studied[51–56] . 38 Thus, we were able to compare the detailed predictions of our model with experimental measurements of 39 neural activity in response to visual stimuli, on a neuron-by-neuron basis. We found that our connectome40 constrained and task-optimized DMN accurately predicts the well-known segregation of the visual system 41 into light increment (ON) and light decrement (OFF) channels[46,57–61] , as well as the direction selectivity of 42 the well-known T4 and T5 motion detector neurons[53,62–64] . Our model further suggests that TmY3 might 43 also detect motion, a prediction that has yet to be experimentally tested. We release our model as a resource 44 for the community.[1] 

## 45 

## **Results** 

- 46 

## **A connectome-constrained deep mechanistic network of the fruit fly visual system** 

- 47 The optic lobes of the fruit fly are involved in early visual processing. They comprise several layered neu48 ropiles whose columnar arrangement has a one-to-one correspondence with the ommatidia, both possessing 49 a remarkably crystalline organization in a hexagonal lattice. Visual input from the photoreceptors is re50 ceived by the lamina, which sends projections to the medulla, lobula, and lobula plate (Fig. 1b[65] ). Many 51 components of the optic lobe are highly periodic, with columnar cell types appearing once per column, and 52 multi-columnar neurons appearing with only small deviations from a well-defined periodicity in columnar 53 space[65,66] . A complete reconstruction of the optic lobe is yet unavailable, but several studies have reported 54 on the local connectivity within the lamina[50] , primarily focused on the light increment (ON) and light decre55 ment (OFF) selective components of the motion pathways of visual processing in the medulla[67,68] , and in 56 the medulla, lobula, and lobula plate[48,49,69] . We assembled these separate local reconstructions into a co- 

1https://github.com/TuragaLab/flyvis 

2 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

57 herent local connectome spanning the retina, lamina, medulla, lobula, and lobula plate (Fig. 1c, SI Fig.1). 58 We approximated the circuitry across the entire visual field as perfectly periodic[66,68] , and tiled this local 59 connectivity architecture in hexagonal lattice across retinotopic space to construct a connectome for 64 cell 60 types across the central visual field of the right eye (Fig. 1d; Methods). 

61 We built a recurrent neural network modeling these first stages of visual processing in the optic lobe 62 based on the connectome for the right eye. Each neuron in this DMN corresponds to a real neuron in the 63 fly visual system, belonging to an identified cell type, and is connected to other neurons only if they are 64 connected by synapses in the connectome (Fig. 1e). Our goal was to investigate whether precise synaptic 65 connectivity and task-constraints are sufficient to account for neural tuning across the fly visual system. We 66 therefore constructed a model with detailed connectivity, but simplified models of single neurons and chem67 ical synapses (Fig. 1f). As many neurons in the early visual system are non-spiking, we used passive leaky 68 linear non-spiking voltage dynamics to model the time-varying activity of single neurons. We modeled neu69 rons as point-neurons with a single electrical compartment, as this has been previously shown to be a good 70 approximation given the small size of many neurons in the optic lobe[54] . As the exception, we modeled the 71 CT1 neuron with multiple compartments since it is an exceptionally large single neuron spanning the entire 72 optic lobe and is highly electrotonically compartmentalized[70] . We effectively modeled the neuron as two 73 columnar “cell types”, with one CT1 compartment per column in the 10th layer of the medulla CT1(M10) 74 and one per column in the 1st layer of the lobula CT1(Lo1) (SI Supplementary Note 2). We coupled neurons 75 with chemical synapses whose connectivity was determined by the connectome. We developed a simplified 76 model for a graded release chemical synapse between non-spiking neurons: A threshold-linear nonlinear 77 function models the nonlinearity of the time-averaged concentration of synaptic release as a function of 78 presynaptic voltage. The resulting network model follows well-known threshold-linear dynamics and is 79 differentiable. Such dynamics are typically used to approximate the firing rates of a network of spiking 80 neurons[71,72] , whereas in our network, the threshold nonlinearity results from the nonlinear voltage-gated 81 release of neuro-transmitter. 

82 We used the cell type structure of the connectome, and assumption of perfect translation invariance 83 across retinotopic space to reduce the number of free parameters (Fig. 1f). We assumed that neurons of 84 the same cell type shared the same neuron time constant and resting membrane potential. We modeled a 85 synaptic weight as proportional to the number of discrete synapses measured experimentally between those 86 two neurons[73] , with a scale factor representing the strength of a unitary synapse. The unitary synapse scaling 87 and the sign of each synapse was the same across all pairs of neurons with the same pre- and postsynaptic 88 cell type. Likewise, the synapse count between each pair of neurons was the same across all pairs of neurons 89 with the same pre- and postsynaptic cell type, and their relative location in retinotopic space. 

90 In total, the connectome-constrained model comprises 45,669 neurons and 1,513,231 connections, across 91 65 cell types arranged in a hexagonal lattice consisting of 721 columns, modeling the central visual field of 92 the roughly 700-900 ommatidia typically found in the fruit fly retina[74,75] . Connectomic constraints, and our 93 assumption of spatial homogeneity (i.e., the hexagonally convolutional structure of the network) result in a 94 dramatic reduction to just 734 free parameters for this large network model. The only free parameters in 95 our model are the single neuron time constants and resting membrane potentials (65 parameters each), and 96 the unitary synapse strengths (604 parameters). In the absence of connectomic measurements, if we had to 97 infer the type-to-type as well as spatial connectivity between all pairs of cell types, we would instead have 98 needed to estimate well over a million parameters (Methods). 

99 We further constrained the parameters of the model by task-optimization, i.e. by training the model 100 to perform a computational task which is thought to approximate the computations carried out by the sys101 tem[44,76] . We therefore implemented our recurrent DMN using the PyTorch library[39,40] (Methods) and used 102 automatic differentiation to optimize the model using gradient based deep learning training methods[41–43] . 103 As the functional task, we chose the computation of visual motion from naturalistic visual stimuli[77] . 104 Visual motion computation in the fly visual system and its mechanistic underpinnings have been extensively 

3 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

105 studied[51–56] . This challenging computation requires the neural circuit to compare visual stimuli across 106 space and time, and thereby critically relies on temporal integration of visual information by the dynamics 107 of the network. We hypothesized that training our network model to perform the computer vision task of 108 optic flow computation[77] could help us identify circuit elements involved in motion computation. Since our 109 model contains many of the circuit elements which have been experimentally characterized and implicated 110 in the computation of visual motion, we could then validate our model predictions. 

111 To decode optic flow from the DMN, we used a decoding network which maps its output to the computer 112 vision representation of optic flow. This two-layer convolutional decoding network is allowed to use only 113 the instantaneous neural activity of the medulla and downstream areas as input. Importantly, the decoding 114 network cannot by itself detect motion, which requires the comparison of current and past visual stimuli, 115 but must instead rely on the temporal dynamics of the connectome-constrained network to compute motion116 selective visual features. The resulting combination of our recurrent connectome-constrained DMN model 117 and the feedforward decoding network was then trained end-to-end: We rendered video sequences from 118 the Sintel database[77] as direct input to the photoreceptors of the connectome-constrained model (ignoring 119 neuronal superposition[78] ), and used gradient descent (backpropgation through time[79] ) to minimize the task 120 error in predicting optic flow (Fig. 1g, Methods). 

121 **Ensembles of connectome-constrained and task-optimized DMNs robustly predict known** 122 **tuning properties** 

123 We used only connectome and task-constraints to construct our DMN, without any measurements of neural 124 activity. We can therefore validate the model by computing predictions of neural selectivity for each of the 125 64 identified cell types in the model, and comparing them to experimental measurements. Since it is possible 126 that connectome and task-constraints might not uniquely constrain all model parameters[80–82] , we generated 127 an ensemble of 50 models, all constrained with the same connectome, and optimized to perform the same 128 task. Each model in the ensemble corresponds to a local optimum of task performance. Since the models 129 achieved similar (but not identical) task performance, the ensemble reflects the diversity of possible models 130 consistent with the connectome and task-constraints. 

131 The ensemble of models found a variety of parameter configurations (Extended Data Fig. 2), and models 132 with random parameter configurations—but trained decoding networks—consistently performed worse on 133 the task than task-optimized models (Extended Data Fig. 3). We focused on the 10 models which achieved 134 the best task performance (Fig. 2a). We simulated neural responses to multiple experimentally characterized 135 visual stimuli, and comprehensively compared model responses for each cell type to experimentally reported 136 responses from 24 previous studies[53–55,58–60,62,64,70,83–97] (Overview in Supplemental Data). 

137 First, neural responses in the fly visual system are known to segregate into ON- and OFF-channels[57] , a 138 hallmark of visual computation across species[98,99] . We probed the contrast preference of each cell type using 139 flash stimuli[59] and found that the ensemble predicts the segregation into ON- and OFF-pathways with high 140 accuracy: The median flash response index (FRI) across the ensemble predicts the correct ON- and OFF141 preferred contrast selectivity for 31 of the 31 cell types for which contrast selectivity has been experimentally 142 established (p = 4 _._ 7 _×_ 10 _[−]_[10] , binomial test; note that in these analyses the M10 and Lo1 terminals of CT1 143 are treated separately). This is also the case for the best-performing model, which correctly assigns 29 144 out of 31 cells into the correct tuning category (Fig. 2b, p = 2 _._ 3 _×_ 10 _[−]_[7] , binomial test). Furthermore, the 145 ensemble provides predictions for the remaining 34 cell types, and consistency across the ensemble provides 146 a measure of confidence in the predictions (Fig. 2b). 

147 Second, a major result in fly visual neuroscience has been the identification of the T4 and T5 neurons as 148 directional selective neurons with cardinal direction tuning[62,64,100] . We characterised the motion selectivity 149 of neurons by their responses to ON- or OFF-edges moving in 12 different directions. We found that the 150 ensemble of models correctly predicts that T4 neurons are ON-motion selective, and T5 neurons are OFF- 

4 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

151 motion selective (Fig. 2c). The ensemble also correctly predicts the lack of motion tuning in the input 152 neurons to T4 and T5 motion detector neurons (Mi1, Tm3, Mi4, Mi9, Tm1, Tm2, Tm4, Tm9, CT1; see 153 Methods, Supplemental Data). 

154 Our models also suggest the possibility that the transmedullary cell types, TmY3, TmY4, TmY5a, 155 TmY13, and TmY18, might be tuned to ON-motion. We asked if our model predicted motion selectiv156 ity for all cell types with asymmetric, multicolumnar inputs, as this is a necessary connectivity motif for 157 motion computation. Based on their local spatial connectivity profiles, we estimated that 19 cell types 158 receive asymmetric, multi-columnar inputs (Methods), but found that only 12 are predicted to be motion 159 selective (p _<_ 0 _._ 05, binomial test; Methods) by the ensemble (SI, Supplemental Data). This suggests that 160 our model integrates connectivity across the entire network, rather than simply focusing on local connec161 tivity to determine which neurons are most likely to be motion selective. Next, we asked how well these 162 tunings are predicted by models with random parameter configurations in comparison. We found that task163 optimized models predict the known direction selectivity indices and flash response indices more accurately 164 than random models (p = 2 _×_ 10 _[−]_[11] and p = 5 _._ 3 _×_ 10 _[−]_[5] respectively, Mann-Whitney-U test, Extended 165 Data Fig. 5a and b). 

166 Finally, we found that models which exhibited lower task error (Methods) also had more realistic tuning: 167 Models with higher task performance predict the direction selectivity index of T4 and T5 cells and their 168 inputs better (p = 5 _._ 6 _×_ 10 _[−]_[6] , Wald test, Extended Data Fig. 4b and 6). 

## 169 **Best task performing model accurately predicts tuning properties of T4 and T5 neurons and** 170 **their inputs** 

171 Our DMN modelling approach enables a large number of model-based analyses which can illuminate the 172 mechanistic basis of computation in a circuit, as well as suggest novel visual stimuli for experimental char173 acterization. We illustrate these analyses using a single model from the ensemble with the best task per174 formance (Fig. 3), focusing on the well-studied T4 and T5 neurons. A more comprehensive set of these 175 analyses for every cell type and every model in the ensemble can be found in the Supplement. 

176 First, we found that in the best task performing model, the four subtypes of the T4 respond strongly to 177 dark edges, and the four subtypes of the T5 neurons to bright edges, moving in the four cardinal directions, 178 in agreement with previous experimental findings[54,55,62,64] (Fig. 3a and Extended Data Fig. 8). 

179 Second, we probed the mechanism of direction selectivity in T4 neurons (Fig. 3b). Examining the 180 input currents to a single T4c neuron, we found that edges of the preferred contrast moving in the preferred 181 direction of T4c cells elicit large responses through fast excitation and delayed inhibition, in agreement with 182 experimental findings[54] . Conversely, edges moving to the null direction of T4c cells elicit no (or very small) 183 responses because inhibition cancels excitation. 

184 Third, we computed and compared the spatial and temporal receptive fields of the major columnar input 185 neurons to T4 and T5 neurons. These input neurons have been the focus of multiple experimental studies 186 of the motion detection pathways[53,60,70,91,93,94,101] (Fig. 3c). We characterized these receptive fields in 187 our model by computing the spatial (Fig. 3d) and temporal (Fig. 3e) impulse responses to brief single 188 ommatidium flashes (5 ms duration, Methods). We find that the model correctly predicts the spatial scale 189 of the spatial receptive field for all major inputs to T4 and T5 neurons, and correctly predicts the preferred 190 contrast for all but one of the major inputs to T4 and T5 neurons. 

191 In agreement with experimental findings[70,93] , we find that Tm3 and Tm4 have broad spatial receptive 192 fields (two column radius, 11.6 _[◦]_ ), while Mi1, Mi4, Mi9, Tm1, Tm2, Tm9, and CT1 compartments in both 193 medulla and lobula have narrow spatial receptive fields (single column radius, 5.8 _[◦]_ ). Further, the model 194 accurately predicts the ON- vs OFF-contrast selectivity of neurons involved in motion detection, including 195 lamina monopolar cells (L1-L5), which anatomically separate the ON- and OFF-pathways[57] , and the direct 196 input neurons to T4 and T5. These cells either depolarize (ON-selective) or hyperpolarize (OFF-selective) in 

5 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

197 response to light increment flashes. These temporal response properties are correctly predicted for all except 198 the Tm4 cell in this model, which is incorrectly predicted to be ON-selective by its temporal receptive field. 199 For the motion selective T4 and T5 neurons, the spatiotemporal receptive fields are not separable in 200 space and time. We characterized the full spatiotemporal receptive field for T4c and T5c neurons (Fig. 3f). 201 ON-impulses on the leading side of the receptive field of the ON-contrast, upwards direction selective T4c 202 cell lead to its fast depolarization, whereas impulses on the trailing side of the receptive field lead to a de203 layed hyperpolarization, again matching experimental findings[54] . ON-impulses on the leading side of the 204 receptive field of the OFF-contrast, upwards direction selective T5c cell lead to its fast hyperpolarization, 205 whereas impulses on the trailing side of its receptive field lead to a delayed depolarization. Because T5c 206 is OFF-selective, its OFF-impulse responses are inverted, resembling the T4c spatiotemporal receptive field 207 (Extended Data Fig. 7a). This suggests that in our model, T5c implements a similar motion tuning mecha208 nism to OFF-edges as T4c to ON-edges. Again, this mechanism also agrees with experimental findings[55] . 

209 Finally, we show that the model can be used to design optimized stimuli: We used the model to screen 210 for video sequences from the Sintel dataset that elicited the largest responses in the motion selective neurons 211 (Fig. 3g; Methods). One might expect that pure ON- or OFF-stimuli would elicit the largest responses in 212 T4 and T5, respectively. However, we find both ON-and OFF-elements in optimized stimuli, suggesting an 213 interplay between ON- and OFF-pathways. We found that the stimulus that elicits the strongest response 214 in the T4c cell is a central OFF-disc followed by an ON-edge moving upwards, matching the preferred 215 direction of the cell. Similarly, for the T5c cell, the stimulus that elicits the strongest response is a central 216 ON-disc followed by an OFF-edge moving upwards in the preferred direction of the cell (Extended Data 217 Fig. 7b for corresponding full-field naturalistic stimuli, numerically optimized stimuli, and preferred moving 218 edge stimuli). Taken together, this individual model predicts a large number of tuning properties for the T4 219 and T5 cells and their inputs. 

## 220 **Neural responses across the model ensemble cluster strongly for many cell types** 

221 The predictions in the previous section were derived from a single model. How similar or dissimilar are 222 the predictions of different task-optimized models constrained with the same connectome? To address this 223 question, for each cell type, we simulated the neural activity of a single neuron, in response to naturalistic 224 video sequences from the Sintel dataset. We then used UMAP[102] to perform nonlinear dimensionality 225 reduction on high-dimensional activity vectors of that neuron across the model ensemble, and clustered 226 the models in the resulting 2D projections (Fig. 4a, see Methods, Supplement). For many cell types, we 227 found that models predict strongly clustered neural responses. For T4c neurons for example, we found three 228 clusters corresponding to qualitatively distinct responses of this cell type for naturalistic inputs: Two clusters 229 contain models with direction selective T4c cells (Fig. 4b and c) with up- and down-selective cardinal tuning, 230 respectively, whereas neurons in the third cluster are not direction tuned. The direction selective cluster with 231 the (correct) upward preference has lowest average task error (circular marker, average task error 5.297) 232 and contains the best task performing model analyzed previously (shown in Fig. 3), followed by the cluster 233 with opposite preference (triangular marker, average task error 5.316). The non-selective cluster has the 234 worst performance (square marker, average task error 5.357), suggesting that models with accurate tuning 235 correlate with lower task error (see also Extended Data Fig. 6). 

236 What are the circuit mechanisms in the ON-motion detection pathway (Fig. 4d) underlying tuning com237 putations in the different clusters? We found that direction selectivity in the two tuned clusters is associated 238 with opposite preferred contrast tuning of Mi4 and Mi9 neurons which provide direct flanking inhibitory 239 input to T4 neurons (Fig. 4e). Models with the correct direction selectivity for T4 neurons also predict the 240 correct contrast selectivity for Mi4 and M9 neurons, and vice versa (Fig. 4f). 

241 This shows how the space of task-optimized and connectome-constrained models can be used to provide 242 hypotheses about different circuit mechanisms which might underlie the tuning properties of individual 

6 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

243 cells. Conversely, it shows that experimentally measuring the tuning of one neuron automatically translates 244 to constraints on other neurons in the circuit. Here, ‘clamping’ the T4c neurons to their measured tuning 245 properties (by only selecting models from the correct cluster) is sufficient to correctly constrain the tuning 246 of both Mi4 and Mi9 neurons. 

## 247 **Models predict motion tuning for TmY3** 

248 Amongst models with the best task performance, TmY3, TmY4, and TmY18 are often ON-motion selective 249 (Fig. 2c). As these neurons have yet to be experimentally characterized, we analyzed these prediction in our 250 models. Since TmY3 neurons do not receive inputs from other known motion selective neurons, we were 251 intrigued by the possibility that it might directly compute a motion signal and possibly constitute a parallel 252 pathway to the well-known T4 and T5 neurons. In contrast, TmY4 and TmY18 cells receive inputs from T4 253 cells, potentially inheriting their motion tuning. 

254 In the model ensemble, we found four distinct clusters for TmY3 (Fig. 5a). In the best-performing cluster 255 (circular marker) TmY3 responds to ON-edges from front to back or downwards (Fig. 5b). In contrast, in 256 the second cluster (triangular marker), TmY3 is not direction selective. In the third cluster (square marker) 257 TmY3 is direction selective to ON-edges moving from the back to the front. In the fourth cluster (star 258 marker), TmY3 is, again, not direction selective. Together, the ensemble suggests ON-motion sensitivity for 259 TmY3, but different clusters disagree in their predictions for direction and contrast selectivity. 

260 In our connectome data, the strongest input elements of TmY3 by number of synapses are L4, L5, Tm2, 261 Tm3, Mi1, Mi9, and Mi4 (Fig. 5c and d). While none of these input neurons are motion-selective, the 262 asymmetries in their connectivity to TmY3 might allow it to detect motion. We asked if we could better 263 constrain our predictions by asking which clusters also predicted the correct preferred contrast for these 264 input neurons. We found that the first model cluster (Fig. 5a, circular marker), in which TmY3 is tuned to 265 front-back or downards motion, most accurately captures the known contrast selectivity of all TmY3 input 266 cells (Fig. 5e). In contrast, all three other clusters fail to consistently capture the OFF-selectivity of Mi9. 267 Thus our model proposes TmY3 as a novel candidate motion detector independent of the well-known T4 268 and T5 motion pathways. 

## 269 **Sparse synaptic connectivity enables accurate prediction of neural responses from synthetic** 270 **connectomes** 

271 We sought to understand the conditions under which connectomic measurements might strongly constrain 272 models of neural computation. Universal function approximation theorems for artificial neural networks[26,103] 273 suggest that a single general-purpose connectivity can underlie many possible computations. Empirically, 274 different deep neural network architectures trained to solve the same task have very different selectivity at 275 the level of single units[38,82,104–106] , even when they share population-level representations[30,107,108] . We hy276 pothesized that while general-purpose neural architectures used in machine learning have a many-to-many 277 relationship between the computational task and neural connectivity, biological neural circuits might have 278 a tighter relationship with their computational task due to their sparse structured connectivity, and there279 fore connectomic measurements and task-constraints in such circuits would strongly constrain mechanistic 280 computational models. 

281 We investigated this counter-factual using synthetic feedforward networks designed to perform a classic 282 handwritten digit recognition network task. We constructed a variety of synthetic networks which perform 283 the same task, but with different degrees of sparsity in their connectivity (Fig. 6). While the synthetic 284 networks all perform the same task with near perfect accuracy, they use dramatically different connectivity, 285 and so use different mechanisms to perform the same task. We then used connectomic measurements from 286 each synthetic network to construct a corresponding connectome-constrained model optimized to perform 

7 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

287 the same task (Fig. 6a). We then compared the neural responses of hidden neurons in each synthetic network 288 to corresponding neurons in the corresponding task and connectome-constrained model. We considered two 289 settings, one where the connectomic measurements only indicated whether a pair of neurons were connected 290 but not their strength, and one where the measurements indicated both the connectivity and a noisy estimate 291 of the strength of the connection. In our model of the fly visual system, we have connectomic measurements 292 of the synapse count for each connection, which can inform the relative strength of a connection, but not the 293 absolute strength. This constitutes an intermediate regime between known strength and unknown strength. 

294 We found that densely connected synthetic networks, where each neuron in a given layer connects to 295 every neuron in the next layer, are essentially uncorrelated with their task- and connectome-constrained 296 models constructed with known connectivity but unknown strength (Fig. 6b, Extended Data Fig. 9a). In 297 contrast, sparsely connected synthetic networks, where each neuron only connects to a small percentage of 298 neurons, are well correlated with their task and connectome-constrained models (median Pearson’s correla299 tion of 0.856 for networks with 10% average connectivity). The correlation between synthetic networks and 300 their simulations drops smoothly as the connection density increases. For connectome-constrained models 301 constructed with known connectivity and a noisy estimate of connection strength, we found that connectiv302 ity sparseness is not required for models to correlate with their corresponding synthetic network (Fig. 6b, 303 Extended Data Fig. 9b). 

## 304 

## **Discussion** 

305 Here we constructed a neural network with neural connectivity measured at the microscopic scale. We also 306 required that at the macroscopic scale, the collective neural activity dynamics across the entire network re307 sult in an ethologically relevant computation. The combination of microscopic and macroscopic constraints 308 enabled us to construct a large-scale computational model spanning many tens of cell types and tens of 309 thousands of neurons. We showed that such large-scale mechanistic models could accurately make detailed 310 predictions of the neural responses of individual neurons to dynamic visual stimuli, revealing the mecha311 nisms by which computations are performed. Knowledge of the connectome played a critical role in this 312 success, in part by leading to a massive reduction in the number of free model parameters. 

313 We have taken a reductionist modeling approach to emphasize the important role played by the connec314 tivity of a neural network. We found that for the motion pathways of the fruit fly visual system, this model 315 correctly predicts many aspects of visual selectivity. However our reductionist model cannot, for example, 316 account for the role played in this circuit by electrical synapses[109] , complex chemical synapse dynamics[96] , 317 and neuromodulation[110] . Richer models of neurons, synapses, and extra-synaptic modulation will be essen318 tial to correctly predict these effects. Further, we only considered the role of this circuit in detecting motion, 319 which is but one of many computations performed by the visual system[14,111–114] . 

320 Our study provides a direct link between artificial neural networks and biological circuit models. In our 321 task-optimized deep network, every model neuron and synapse corresponds to a real neuron and synapse 322 in the brain. This correspondence enables detailed experimentally testable predictions for each neuron. 323 In contrast, most previous studies using task-optimized deep neural networks have predominantly focused 324 on modeling computations without such detailed connectomic measurements: in fly motion vision path325 ways[115,116] and olfactory system[36] , in fish oculomotor system[117] in mammalian visual pathways[44,76,106,118] 326 and prefrontal cortex[45] . More recently, there has been tantalizing early evidence, in small scale models[46] 327 and larger models[119] of the fly motion pathways, that our approach to combining connectome and task328 constraints in a single model might prove successful. 

329 Our modeling approach provides a discovery tool, aimed at using connectomic measurements to generate 330 detailed, experimentally testable hypotheses for the computational role of individual neurons. Measurements 331 of neural activity are necessarily sparse and involve difficult trade-offs. Activity can frequently only be 

8 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

- 332 measured in a limited number of contexts, and for either a limited number of neurons or for a larger number 333 of neurons with poorer temporal resolution. Connectome-constrained DMN models generate meaningful 334 predictions even in the complete absence of neural activity measurements, but can be further constrained 335 by sparse measurements of neural activity as we showed (Fig. 4), or even be directly optimized to match 336 measured neural activity[120] . 

- 337 Whole nervous system connectome projects are nearing completion for the adult fruit fly[2,13] , and whole 338 mouse brain connectome projects are now being discussed[121] . Large-scale whole nervous system models[120] 

- 339 will be of critical importance for integrating connectomic, transcriptomic, neural activity and animal be340 havior measurements across labs, scales, and the nervous system[2] . Further, with the recent development of 

- 341 detailed biomechanical body models for the fruit fly[122] and rodent[123] , we can now contemplate constructing 342 whole animal models spanning brain and body. 

9 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

## 343 

## **Author Contributions** 

344 Conceptualization, Methodology: JKL, FDT, JHM, SCT. Data curation: JKL, FDT, AN, KS, S-yT. Software 345 and Investigation: JKL, MM, SP, FDT. Analysis: JKL, EG, AN, SCT. Writing: JKL, JHM, SCT. Writing 346 (Review & Editing): EG, AN, KS, MM, SP, FDT. Supervision and funding: SCT, JHM. 

## 347 

## **Funding** 

348 This project was supported by the Howard Hughes Medical Institute. JKL and JHM were supported by 349 the German Research Foundation (DFG) through Germany’s Excellence Strategy (EXC-Number 2064/1, 350 Project number 390727645) and the German Federal Ministry of Education and Research (BMBF; T¨ubingen 351 AI Center, FKZ: 01IS18039A). JKL is a member of the International Max Planck Research School for 352 Intelligent Systems (IMPRS-IS). 

## 353 

## 

354 

## 355 

## **Acknowledgements** 

356 We are grateful to Lou Scheffer and Lowell Umayam for assistance with accessing connectomic reconstruc357 tions. We thank Axel Borst, James Fitzgerald, Nathan Klapoetke, Gerry Rubin, Michael Reiser, and Karel 358 Svoboda for valuable discussions. We thank James Fitzgerald, David Stern, Nathan Klapoetke, Albert Lee, 359 Richard Gao, Jakob Voigts, Brett Mensh for valuable feedback on the manuscript. We thank Tory Herman 360 for sharing the colorization of the optic lobe figure[65] (Fig. 1b). 

361 This article is subject to HHMI’s Open Access to Publications policy. HHMI lab heads have previously 362 granted a nonexclusive CC BY 4.0 license to the public and a sublicensable license to HHMI in their re363 search articles. Pursuant to those licenses, the author-accepted manuscript of this article can be made freely 364 available under a CC BY 4.0 license immediately upon publication. 

10 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

## 365 **Figures** 

366 

**==> picture [469 x 563] intentionally omitted <==**

11 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

## Figure 1: **Task-optimizing connectome-constrained models of the fly visual system.** 

**(a)** The ‘deep mechanistic network model’ (DMN) aims to satisfy three constraints simultaneously: Its archiecture is based on connectomic measurements (see b-e), single-neuron and synaptic dynamics are given by simple mechanistic models (see f), and free parameters of this network model (see f, magenta) are optimized by training the model to perform an optic flow estimation task (see g). 

**(b)** Schematic of optic lobe of _Drosophila_ melanogaster comprising several processing stages (neuropils) and cell types (adapted from[65] ). Our model includes retinal cells, lamina monopolar cells, medulla intrinsic cells, transmedullary cells, and T-shaped cells, i.e., all columnar cell types. 

**(c)** Identified connectivity between 64 cell types, represented by total number of input synapses from all neurons of a given presynaptic cell type to a single postsynaptic of a given cell type. Blue color indicates putative hyperpolarizing inputs, red putative depolarizing inputs as inferred from neurotransmitter and receptor profiling. Size of squares indicates number of input synapses. 

**(d)** Retinotopic hexagonal lattice columnar organization of the visual system model. Each lattice represents a cell type, each hexagon an individual cell. Positions of photoreceptor columns are aligned with positions of downstream columns. The model comprises synapses from all neuropils (SI Fig. 1) and downstream and upstream projecting connections from the retina, lamina, and medulla. Convolutional filter between Mi9 cells and a T4d cell (see Panel d) is highlighted in the final lattice of the medulla. 

**(e)** Example of convolutional filter, representing Mi9 inputs onto T4d cells. Values represent the average number of synapses projecting from presynaptic Mi9 cells in columns with indicated offset onto the postsynaptic dendrite of T4d cells. Values indicate connection strength derived from electron microscopy data. 

**(f)** Single-neuron and synaptic dynamics are given by simple mechanistic models. Free parameters of this network model (magenta) are optimized by training the model to perform optic flow estimation task. 

367 

**(g)** Visualization of DMN performing optic flow estimation on a video clip rendered from the Sintel dataset. Given the input to the photoreceptors (R1-R8), we simulated the response of each neuron in the system. Each hexagonal lattice depicts a snapshot of the voltage levels of all cells from the corresponding cell type. Edges illustrate connectivity between identified cell types. A decoding network receives the simulated neural activity of all output neurons (Tshaped and transmedullary cells) to compute optic flow. Parameters of the recurrent network model and the decoding network are optimized using optimization methods from deep learning. 

12 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

368 

**==> picture [469 x 345] intentionally omitted <==**

Figure 2: **Ensembles of connectome-constrained task-optimized DMNs predict tuning properties. (a)** We task-optimized 50 connectome-constrained DMNs, yielding different solutions for the biophysical parameters. Inset: Distribution of task errors across the ensemble, 10 best models in blue. We characterized the responses and tuning properties of model neurons from each cell type to experimentally characterized visual stimuli and compare them to known tuning properties. 

**(b)** ON- and OFF-contrast selectivity indices for each cell type based on peak transient responses for flash stimuli (Methods, Equation 3) for 10 models with best task performance (10 worst-performing models in Extended Data Fig. 4). Cell types with experimentally determined ON-/OFF-selectivity cell types are colored in yellow and violet respectively. Bold labels indicate cell types which provided input to optic flow decoder during training. Cell type names in black have not yet been experimentally characterized. 

**(c)** Direction selectivity index (DSI) from neural responses to moving edges (Methods, Equation 4) for the same 10 369 best models as in (b). 

13 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

**==> picture [11 x 5] intentionally omitted <==**

**----- Start of picture text -----**<br>
370<br>**----- End of picture text -----**<br>


**==> picture [469 x 455] intentionally omitted <==**

14 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

## Figure 3: **DMN with the best task error largely recapitulates known mechanism of motion computation.** 

**(a)** Responses to moving edges in different directions for T4 and T5 subtypes from the DMN with best task performance. Predictions of both direction and polarity of tuning agree with experimental measurements[62,64,100] (Nullcontrasts in Extended Data Fig. 8). 

**(b)** Fast excitation and delayed, offset inhibition enable T4c to detect motion, in agreement with experimental measurements[54] . An edge moving in the preferred direction elicits fast excitatory input currents (red) and delayed inhibitory input currents (blue) to T4c, leading to large depolarization (green). In contrast, an edge moving in the null direction elicits simultaneous arrival of excitatory and inhibitory inputs to T4c, leading to a null response (magenta). 

**(c)** Major cell types and connectivity in the ON- (T4) and OFF- (T5) motion detection pathways (simplified). 

**(d)** Spatial receptive fields of major motion detector input neurons revealed by single-ommatidium flashes are in agreement with experimental measurements[70,93] . For major T4 inputs, the best-performing DMN correctly predicts narrow spatial receptive fields for Mi1, Mi4, Mi9, and CT1(M10), and a wide receptive field for Tm3. Mi1, Tm3, Mi4, and CT1(M10) respond with depolarization to the ON-impulses, Mi9 responds with hyperpolarization. For major T5 inputs, the DMN correctly predicts narrow spatial receptive fields for Tm1, Tm2, Tm9, and CT1(Lo1), and a wide receptive field for Tm4. Tm1, Tm2, Tm4, Tm9, and CT1(Lo1) respond with hyperpolarization. Depending on the input ommatidium, Tm4 also responds with depolarization. 

**(e)** Temporal receptive fields for inputs also are in agreement with experimental measurements[60,93] , with the exception of Tm4 (red cross). For major T4 inputs, in this DMN, Mi1, Tm3, and Mi4 respond with transient depolarization. In contrast, CT1(M10) responds with a longer sustained depolarization to a central ON-impulse. Mi9 hyperpolarizes. For major T5 inputs, in the model, Tm2, Tm9, and CT1(Lo1) respond with transient hyperpolarization. Tm1 depolarizes fast followed by strong hyperpolarization and Tm4 is incorrectly predicted to depolarize (red cross). For lamina cell types, this DMN predicts hyperpolarization in L1, L2, L3, and L4 and depolarization in L5 in response to a central ON-impulse. 

**(f)** Spatiotemporal receptive fields for motion detector neurons agree with experimental measurements[54] . Receptive field orientation of the motion detectors T4c and T5c align with their preferred motion axis. ON-impulses on the leading side of the receptive field quickly cause the T4 cell to depolarize, while ON-impulses on the trailing side of the receptive field cause slower hyperpolarization in the T4 cell. Conversely, for T5, ON-impulses on the leading side of the receptive field quickly cause the T5 cell to hyperpolarize, while ON-impulses on the trailing side of the receptive field cause slower depolarization in the T5 cell (Receptive fields for OFF-impulses in Extended Data Fig. 7a). **(g)** Video sequence predicted to elicit the strongest responses in T4c and T5c cells. A central OFF-disc followed by an ON-edge moving upwards elicits the strongest response in a T4c cell. A central ON-disc followed by an OFF-edge moving upwards elicits the strongest response in the central column T5c cell. We regularized the full field naturalistic stimuli to show only the content of the input that the cell is responsive to (Full field naturalistic and artificial maximally 371 excitatory stimuli in Extended Data Fig. 7b). 

15 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

372 

**==> picture [469 x 361] intentionally omitted <==**

16 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

## Figure 4: **Cluster analysis of DMN ensembles enables hypotheses generation and suggests experimental tests.** 

**(a)** We clustered 50 DMNs after performing nonlinear dimensionality reduction of their predicted responses to naturalistic scenes for each cell type (Inset: Distribution of task performance across models). We compared their tuning to simple stimuli to identify whether clusters correspond to qualitatively different tuning mechanisms. 

**(b)** Responses of T4c cells to naturalistic scenes reveal three distinct clusters. T4c cells in DMNs in the first and second clusters (circular and triangular marker) are ON-motion direction selective, whereas those in the third cluster (square marker) are not. 

**(c)** The DMNs reveal three distinct solutions for the T4c cells (which are known to be tuned to upwards ON-motion): 

(1) upwards tuning (cluster with lowest average task error of 5.297, circular marker in panel b), (2) downwards tuning 

(5.316 average error, triangular marker), or (3) no motion tuning to ON-edges (5.357 average error, square marker). **(d)** ON-motion detection pathway from Fig 3c. 

373 

**(e)** Connectivity of major input elements to T4c. Blue and red represent putative hyper- and depolarizing inputs. Saturation represents average number of input synapses for each offset location in the T4c dendrite (see Fig. 1e). **(f)** Tuning properties within each cluster reveal dependencies between T4 tuning and that of Mi4 and Mi9 cells in the ensemble: Switching Mi4 (known ON-contrast selective) and Mi9 (known OFF-contrast selective) contrast preferences results in directionally opposite motion tuning solutions in T4. Cluster 1 (T4c in DMN upwards tuned, circle) indicates ON-selectivity for Mi1, Tm3, Mi4, and CT1(M10), and OFF-selectivity for Mi9. For ON-motion stimuli, in these DMNs T4c receives central depolarizing input from Mi1 and Tm3 and dorsal hyperpolarizing input from Mi4 and CT1(M10). For cluster 2 (T4c in DMN downwards tuned, triangle), Mi1, Tm3, Mi9, and CT1(M10) are ON-selective and Mi4 is OFF-selective. For ON-motion stimuli, in these DMNs, T4c receives central depolarizing input from Mi1 and Tm3, ventral hyperpolarizing input from Mi9 and dorsal hyperpolarizing input from CT1(M10). For cluster 3 (T4c in DMN not tuned, square), all major input elements are ON-selective. For ON-motion stimuli, in these DMNs, T4c receives central depolarizing input from Mi1 and Tm3, dorsal hyperpolarizing input from Mi4 and CT1(M10), and ventral hyperpolarizing input from Mi9. 

17 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

374 

**==> picture [469 x 238] intentionally omitted <==**

Figure 5: **DMNs suggest that TmY3 neurons compute motion independently of T4 and T5 neurons. (a)** Dimensionality reduction on TmY3 responses to naturalistic stimuli reveals 4 clusters of DMNs with average task errors 5.298 (circle), 5.317 (triangle), 5.328 (square) and 5.331 (star). Across clusters, TmY3 shows different strengths of direction selectivity (evaluated with moving edge stimuli). ON-edge direction selectivity is strong in the first and the third cluster. 

**(b)** Normalized peak responses of TmY3 to moving edge stimuli in the DMNs of each cluster. 

**(c)** Major cell types and synaptic connections in the pathway that projects onto TmY3 (simplified). 

**(d)** The input elements of TmY3 with the highest amount of synapses are L4, L5, Tm2, Tm3, Mi1, Mi9, and Mi4. The asymmetries of their projective fields could allow TmY3 to become motion selective. 

**(e)** Dependencies between TmY3 tuning and the contrast preference of its input cells. For clusters in which TmY3 is motion selective, cluster 1 (TmY3 tuning to downwards/front-to-back motion, circular marker) indicates ONselectivity for Tm3, Mi1, and Mi4 cells, and OFF-selectivity for L4, Tm2, and Mi9 cells, in agreement to the known selectivities. In contrast, cluster 3 (TmY3 tuning to upwards/back-to-front motion, square marker) indicates ON375 selectivity for Mi9 in contradiction to the known selectivities and hence ruling out the third TmY3 tuning solution. 

18 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

376 

**==> picture [469 x 161] intentionally omitted <==**

Figure 6: **Connectomic measurements can strongly constrain neural networks in circuits with sparse connectivity.** 

**(a)** We constructed synthetic-connectome networks for classifying hand-written digits with varying degrees of sparse connectivity. For each synthetic-connectome network, we simulated connectomic measurements and constructed a connectome-constrained and task-optimized simulated DMN (Methods). We measured the correlation of the neural responses across stimuli of the same neuron in the synthetic-connectome network (dark green) and the fitted neural network (light green). 

**(b)** Median neural response correlation coefficient from 100 randomly-sampled neuron pairs from each layer and across 25 network pairs. Simulations constrained only with connectivity measurements only correlate well for low connectivities (dark blue), while simulations constrained by measurements of both connectivity and connection strength correlate well across all average connectivity percentages (orange). The fly visual system likely falls in the region between the two curves, since measured synapse counts inform relative connection strengths between pairs of neurons 377 for the same pair of cell types, but not absolute connection strength. 

19 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

## 378 

## **Methods** 

## 379 **Construction of spatially invariant connectome from local reconstructions** 

380 We built a computational model of the fly visual system which is consistent with available connectomic 381 data[48–50,68,124,125] , which has biophysically plausible neural dynamics, and which can be computationally 382 trained to solve an ethiologically relevant behavioural task, namely estimation of optic flow. To achieve 383 this, we developed algorithms to blend annotations from two separate data-sets by transforming, sanitizing, 384 combining and pruning the raw data sets into a coherent connectome spanning all neuropils of the optic lobe 385 (Supplementary Note 1). 

386 The original data stems from focused ion beam scanning EM datasets (FIBSEM) from the FlyEM project 387 at Janelia Research Campus. The FIB-25 dataset volume comprises seven medulla columns and the FIB-19 388 dataset volume comprises the entire optic lobe and, in particular, detailed connectivity information for inputs 389 to both the T4 and T5 pathways[48,49,68] . The data available to us consisted of 1801 neurons, 702 neurons from 390 FIB-25 and 1099 neurons from FIB-19. For about 830 neurons the visual column was known from hand 391 annotation. These served as reference positions. Of the 830 reference positions, 722 belong to neuron types 392 selected for simulation. None of the T5 cells, whose directional selectivity we aimed to elucidate, were 393 annotated. We therefore built an automated, probabilistic expectation maximization algorithm that takes 394 synaptic connection statistics, projected synapse center-of-mass clusters and existing column annotations 395 into account. We verified the quality of our reconstruction as described in Supplementary Note 1 Only 396 the neurons consistently annotated with both 100% and 90% of reference positions used were counted to 397 estimate the number of synapses between cell types and columns, in order to prune neuron offsets with low 398 

399 Synaptic signs for most cell types were predicted based on known expression of neurotransmitter mark400 ers (primarily the cell type specific transcriptomics data from Davis et al 2020). For a minority of cell types 401 included in the model, no experimental data on transmitter phenotypes were available. For these neurons, 402 we used guesses of plausible transmitter phenotypes. To derive predicted synaptic signs from transmitter 403 phenotypes, we assigned the output of histaminergic, GABAergic and glutamatergic neurons as hyperpo404 larizing and the output of cholinergic neurons as depolarizing. In a few cases, we further modified these 405 predictions based on distinct known patterns of neurotransmitter receptor expression (see Davis et al. for 406 details). For example, output from R8 photoreceptor neurons, predicted to release both acetylcholine and 407 histamine, was treated as hyperpolarizing or depolarizing, respectively, depending on whether a target cell 408 type is known to express the histamine receptor ort (a histamine-gated chloride channel). 

## 409 **Representing the model as a hexagonal convolutional neural network** Our end-to-end differentiable[126] 

410 DMN model of the fly visual system can be interpreted as a continuous-time neural ordinary differential 411 equation (neural ODE)[127] with a deep convolutional recurrent neural network (convRNN)[128] architecture 412 that is trained to perform a computer vision task using backpropagation through time (BPTT)[41,79] . Our goal 413 was to optimize a simulation of the fly visual system to perform a complex visual information processing 414 task using optimization methods from deep learning. One hallmark of visual systems that has been widely 415 exploited in such tasks are their convolutional nature[129–132] , i.e. the fact that the same computations are 416 applied to each pixel of the visual input. To model the hexagonal arrangement of photoreceptors in the fly 417 retina, we developed a hexagonal convolutational neural network in the widely used deep learning frame418 work Pytorch[40] , which we used for simulation and optimization of the model. 

20 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

## 419 

## **Neuronal Dynamics** 

In detail, we simulated point neurons with voltages _Vi_ of a postsynaptic neuron _i_ , belonging to cell type _ti_ using threshold-linear dynamics, mathematically equivalent to commonly used formulations of firing-rate models[133] 

**==> picture [312 x 26] intentionally omitted <==**

Neurons of the same cell type share time constants, τ _ti_ , and resting potentials, _Vt_[rest] _i_[.][Dynamic visual stimuli] were delivered as external input currents _ei_ to the photoreceptor (R1-R8), for all other cell types, _ei_ = 0. In our model, instantaneous graded synaptic release from presynaptic neuron _j_ to postsynaptic neuron _i_ is described by 

**==> picture [333 x 14] intentionally omitted <==**

420 comprising the anatomical filters in terms of the synapse count from EM-reconstruction, _Ntitj_ ∆ _u_ ∆ _v_ , at the 421 offset location ∆ _u_ = _ui − uj_ and ∆ _v_ = _vi − vj_ in the hexagonal lattice between two types of cells, _ti_ and 422 _tj_ , and further characterised by a sign, _σtitj ∈{−_ 1 _,_ +1 _}_ , and a non-negative scaling factor, _αtitj_ . 

The synapse model in Equation 2 entails a trainable non-negative scaling factor per filter that is initialized as 

**==> picture [104 x 28] intentionally omitted <==**

423 with the denominator describing the average synapse count of the filter. Synapse counts, _Ntitj_ ∆ _u_ ∆ _v_ , and 424 signs, _σtitj_ , from reconstruction and neurotransmitter and receptor profiling were kept fixed. The scaling 425 factor was clamped during training to remain non-negative. 

Moreover, at initialization, the resting potentials were sampled from a Gaussian distribution 

**==> picture [106 x 14] intentionally omitted <==**

> 426 with mean _µV_ rest = 0 _._ 5 (a.u.) and variance _σV_[2][rest][=][0] _[.]_[05][(a.u.).][The][time][constants][were][initialized][at] 

> 427 τ _ti_ = 50ms. The 50 task-optimized DMNs were initialized with the same parameter values. During training, 428 in Euler integration of the dynamics, we clamped the time constants as τ _i_ = max(τ _i,_ ∆ _t_ ), so that they 429 remain above the integration time step ∆ _t_ at all times. 

430 In total, the model comprises 45669 neurons and 1513231 synapses, across two-dimensional hexago431 nal arrays 31 columns across. Independently of the extent of the two-dimensional hexagonal arrays are 432 the numbers of free parameters: 65 resting potentials, 65 membrane time constants, 604 scaling factors; 433 and connectome determined parameters: 604 signs, and 2355 synapse counts. Thus, the number of free 434 parameters in the visual system model is 734. 

435 In the absence of connectomic measurements, the number of parameters to be estimated is much larger. 436 With _T_ = 65 cell types (counting CT1 twice for the compartments in the medulla and lobula) and _C_ = 721 437 cells per type for simplicity, the number of cells in our model would be _TC_ = 46 _,_ 865. Assuming an RNN 438 with completely unconstrained connectivity and simple dynamics τ _iVi_ = _−Vi_ +[�] _j[w][ij][f]_[(] _[V][j]_[) +] _[ V] i_[rest] we 439 would have to find ( _TC_ )[2] + 2( _TC_ ) = 2 _,_ 196 _,_ 421 _,_ 955 free parameters. Assuming a convolutional RNN 440 with shared filters between cells of the same postsynaptic type, shared time constants, and resting potential, 441 the amount of parameters reduces drastically to _T_[2] _C_ + 2 _T_ = 3 _,_ 046 _,_ 355. Further assuming the same 442 convolutional RNN but additionally convolutional filters are constrained to _F_ = 5 visual columns, i.e. the 443 number of presynaptic input columns in hexagonal lattice is _P_ = 3 _F_ ( _F_ + 1) + 1, the amount of parameters 444 reduces to _T_[2] _P_ + 2 _T_ = 384 _,_ 605. Assuming as in our connectome only _Q_ = 604 connections between cell 445 types exist, this reduces the number of parameters further to _QP_ + 2 _T_ = 55 _,_ 185. Instead of parametrizing 446 each individual synapse strength, we assume that synapse strength is proportional to synapse count from 

21 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

447 the connectome times a scalar for each filter, reducing the number of parameters to _Q_ + 2 _T_ = 734 while 448 providing enough capacity for the DMNs to yield realistic tuning to solve the task. 

449 **Convolutions using scatter and gather operations** For training the network, we compiled the convolu450 tional architecture specified by the connectome and the sign constraints to a graph representation containing 451 (1) a collection of parameter buffers shared across neurons and/or connections, (2) a collection of corre452 sponding index buffers indicating where the parameters relevant to a given neuron or connection can be 453 found in the parameter buffers, and (3) a list of pairs (presynaptic neuron index, postsynaptic neuron index) 454 denoting connectivity. This allowed us to efficiently simulate the network dynamics via Euler integration 455 using a small number of element-wise, scatter, and gather operations at each time step. We found that this 456 is more efficient than using a single convolution operation, or performing a separate convolution for each 457 cell type, since each cell type has its own receptive field - some much larger than others - and the number of 458 cells per type is relatively small. 

## 459 **Optic flow task** 

460 **Model training** An optic flow field for a video sequence consists of a 2D vector field for each frame. 461 The 2D vector at each pixel represents the magnitude and direction of the apparent local movement of the 462 brightness pattern in an image. 

We frame the training objective as a regression task 

**==> picture [200 x 14] intentionally omitted <==**

463 with **Y[ˆ]** the optic flow prediction, and **X** the visual stimulus sequence from the Sintel dataset, both sampled 464 to a regular hexagonal lattice of 721 columns. With the objective to minimize the square error loss between 465 predicted optic flow and target optic flow fields, we jointly optimized the parameters of both the decoder 466 and the visual system network model described above. 

467 In detail, for training the network, we added randomly augmented grey-scaled video sequences from the 468 Sintel dataset sampled to a regular hexagonal lattice of 721 columns to the voltage of the eight photoreceptor 469 cell types (Fig. 1f, Equation 1). We denote a sample from a minibatch of video sequences as **X** _∈_ R _[N,C]_ 470 with _N_ the number of time steps, and _C_ the number of photoreceptor columns. The dynamic range of 471 the input lies between 0 and 1. Input sequences during training entailed 19 consecutive frames drawn 472 randomly from the dataset and resampled to match the integration rate. The original framerate of 24 Hz and 473 19 frames lead to a simulation of 792ms. We did not find that an integration time step smaller than 20 ms, 474 i.e. a framerate of 50 Hz after resampling, yielded qualitatively superior task performance nor more realistic 475 tuning predictions. We interpolated the target optic flow in time to 50 Hz temporal resolution, instead of 476 resampling it. To increase the amount of training data for better generalization, we augmented input and 477 target sequences as described further below. At the start of each epoch, we computed an initial state of the 478 network’s voltages after 500ms of grey stimuli presentation to initialize the network at a steady state for 479 each minibatch during that epoch. The network integration given input **X** results in simulated sequences 480 of voltages **V** _∈_ R _[N,T][C]_ with _TC_ the total number of cells. The subset of voltages, **V** out _∈_ R _[N,D,C]_ , of the 481 _D_ cell types in the black box in Fig. 1f was passed to a decoding network. For decoding, the voltage was 482 rectified to avoid that the network finds biologically implausible solutions by encoding in negative dynamic 483 ranges. Further, it was mapped to cartesian coordinates to apply Pytorch’s standard spatial convolution 484 layers for decoding and on each timestep independently. In the decoding network, one layer implementing 485 spatial convolution, batch normalization, softplus activation, and dropout, followed by one layer of spatial 486 convolution, transformed the _D_ feature maps into the two-dimensional representation of the estimated optic 487 flow, **Y[ˆ]** _∈_ R _[N,]_[2] _[,C]_ . 

22 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

488 Using stochastic gradient descent with adaptive moment estimation ( _β_ 1 = 0 _._ 9, _β_ 2 = 0 _._ 999, learning 489 rate decreased from 5 _×_ 10 _[−]_[5] to 5 _×_ 10 _[−]_[6] in ten steps over iterations, batch size of four) and the automatic 490 gradient calculation of the fully differentiable pipeline, we optimized the biophysical parameters through 491 backpropagation through time such that they minimize the L2-norm between the predicted optic flow, **Y[ˆ]** , 492 and the groundtruth optic flow, **Y** : 

**==> picture [100 x 13] intentionally omitted <==**

493 We additionally regularized the shared resting potentials for 150,000 iterations, using stochastic gradient 494 descent without momentum, based on time-averaged responses to naturalistic stimuli of the central column 495 cell of each cell type, _t_ central, to encourage configurations of resting potentials that lead to nonzero and 496 nonexploding activity in all neurons in the network. We weighted these terms independently with _γ_ = 1, 497 encouraging activity greater than _a_ , and _δ_ = 0 _._ 1, encouraging activity less than _a_ . We chose _λV_ = 0 _._ 1 and 498 _a_ = 5 in arbitrary units. With _B_ being the batch size and _T_ the number of all cell types, the regularizer is 

**==> picture [298 x 34] intentionally omitted <==**

499 We regularly checkpointed the above error measure _L_ ( **Y** _,_ **Y[ˆ]** ) averaged across a held out validation set 500 of Sintel video clips. Models generalized on optic flow computation after round about 250,000 iterations, 501 yielding functional candidates for our fruit fly visual system models that we analyzed with respect to their 502 tuning properties. 

503 **Task-optimization dataset** We optimized the network on 23 sequences from the publicly available computer504 animated movie Sintel[134] . The sequences have 20-50 frames, at a frame rate of 24 frames per second and 505 a pixel resolution of 1024x436. The dataset provides optical flow in pixel space for each frame after the 506 first of each sequence. Since the integration time steps we use are faster than the actual sampling rate of the 507 sequences, we resample input frames accordingly over time and interpolate the optic flow. 

508 **Fly-eye rendering** We first transformed the RGB pixel values of the visual stimulus to normalized greyscale 509 between 0 and 1. We translated cartesian frames into receptor activations by placing simulated photorecep510 tors in a two-dimensional hexagonal array in pixel space, 31 columns across resulting in 721 columns in 511 total, spaced 13 pixels apart. The transduced luminance at each photoreceptor is the greyscale mean value 512 in the 13 _×_ 13-pixel region surrounding it. 

513 **Augmentation** We used (1) random flips of input and target across one of the three principal axes of 514 the hexagonal lattice, (2) random rotation of input and target around its six-fold rotation axis, (3) adding 515 element-wise Gaussian noise with mean zero and variance _σn_ = 0 _._ 08 to the input _X_ (then clamped at 0) (4) 516 random adjustments of contrasts, log _c ∼N_ (0 _, σc_[2][= 0] _[.]_[04)][,][and][brightness,] _[b][∼N]_[(0] _[, σ] b_[2][=][0] _[.]_[01)][,][of][the] 517 input with _X[′]_ = _c_ ( _X −_ 0 _._ 5) + 0 _._ 5 + _cb_ . 

518 In addition, we strided fly-eye rendering across the rectangular raw frames in width, subsampling multi519 ple scenes from one. We ensured that such subsamples from the same scene do not distribute across training 520 and validation sets. Input sequences in chunks of 19 consecutive frames were drawn randomly in time from 521 the full sequences. 

23 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

522 **Black-box decoding network** The decoding network is feedforward, convolutional and has no temporal 523 structure. Aspects of the architecture are explained in the paragraph Model training. The spatial convolutions 524 have a filter size of 5 _×_ 5. The first layer transforms the _D_ = 34 feature maps to an eight-channel intermediate 525 representation, that is further translated by an additional convolutional layer to a three-channel intermediate 526 representation of optic flow. The third channel is used as shared normalization of each coordinate of the 527 remaining two-dimensional flow prediction. The decoder uses Pytorch-native implementations for two528 dimensional convolutions, batch normalization, softplus activation, and dropout. We initialized its filter 529 weights homogeneously at 0.001. 

## 530 

## **Model characterization** 

**Task error** To rank models based on their task performance, we computed the standard optic flow metric of average end-to-end point error (EPE)[135] which calculates the average over all timesteps and pixels (i.e. here columns) of the error 

**==> picture [314 x 28] intentionally omitted <==**

531 between predicted optic flow and groundtruth optic flow, and averaged across the held out validation set of 532 Sintel sequences. 

**Unconstrained CNN** We trained unconstrained, fully convolutional neural networks on the same dataset and task yielding a lower bound for the task error of the DMN. Optic flow was predicted by the CNN from two consecutive frames 

**==> picture [142 x 14] intentionally omitted <==**

533 with the original frame rate of the Sintel movie. We chose 5 layers for the CNN with 32, 92, 136, 8, 2 534 channels respectively and kernel size 5 for all but the first layer which kernel size is 1. Each layer performs 535 a convolution, batch normalization, and ELU activation except the last layer which only performs a con536 volution. We optimized an ensemble of 5 unconstrained CNNs with 414,666 free parameters each using 537 the same loss function, _L_ ( _Y, Y_[ˆ] ), as for the DMN. We used the same dataset, i.e. hexagonal sequences and 538 augmentations from Sintel, for training and validating the CNN as for training and validating the DMN, 539 allowed by two custom modules mapping from hexagonal lattice to cartesian map and back. 

540 **Random DMNs** We created 50 DMNs with random parameters (all sampled from Gaussians of different 541 means and standard deviations), and task-optimized only their decoding network, yielding an upper bound 542 for the task error of the task-optimized DMN and a lower bound for the accuracy of tuning predictions 543 without task-optimization. 

544 **Circular flash stimuli** To evaluate the contrast selectivity of cell types in task-constraint model candidates, 545 we simulated responses of each DMN to circular flashes. The networks were initialized at an approximate 546 steady state after 1s of grey-screen stimulation. Afterwards the flashes were presented for 1s. The flashes 547 with a radius of 6 columns were ON (intensity _I_ = 1) or OFF ( _I_ = 0) on grey ( _I_ = 0 _._ 5) background. We 548 integrated the network dynamics with an integration time step of 5 ms. We recorded the responses of the 549 modeled cells in the central columns to compute the flash response index. 

24 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

**Flash response index** To derive the contrast selectivity of a cell type, _ti_ , we computed the flash response index as 

**==> picture [321 x 34] intentionally omitted <==**

from the non-negative activity 

**==> picture [228 x 21] intentionally omitted <==**

> 550 from voltage responses _Vt_ central[ _n_ ]( _I_ ) to circular flash stimuli of intensities _I ∈{_ 0 _,_ 1 _}_ lasting for 1s after 1s 551 of grey stimulus. We note that our index quantifies whether the cell depolarizes to ON- or to OFF-stimuli. 552 However, cells like R1-R8, L1, and L2 can be unrectified, i.e., sensitive to both light increments and light 553 decrements, which is not captured by our index. 

554 For the p-values reported in the results, we performed a binomial test with probability of correct pre555 diction 0.5 (H0) or greater (H1) to both test whether the median FRI from the DMN-ensemble and the 556 best-performing model predict the contrast preferences significantly. Additionally, we found for each in557 dividual cell type across 50 DMS that predictions for 29 out of 31 cell types are significant (P _<_ 0 _._ 05, 558 binomial). 

559 **Moving edge stimuli** To predict the motion sensitivity of each cell type in task-constrained 560 DMNs, we simulated the response of each network, initialized at an approximate steady state 561 after 1s of grey-screen stimulation, to custom generated edges moving to 12 different direc562 tions, _θ ∈_ [0 _[◦] ,_ 30 _[◦] ,_ 60 _[◦] ,_ 90 _[◦] ,_ 120 _[◦] ,_ 150 _[◦] ,_ 180 _[◦] ,_ 210 _[◦] ,_ 240 _[◦] ,_ 270 _[◦] ,_ 300 _[◦] ,_ 330 _[◦]_ ]. We integrated the net563 work dynamics with an integration time step of 5ms. ON-edges ( _I_ = 1) or OFF-edges 564 ( _I_ = 0) moved on grey ( _I_ = 0 _._ 5) background. Their movement ranged from -13.5 _[◦]_ to 565 13.5 _[◦]_ visual angle and we moved them at six different speeds, ranging from 13.92 _[◦] /s_ to 145 _[◦] /s_ 566 ( _S ∈_ [13 _._ 92 _[◦] /s,_ 27 _._ 84 _[◦] /s,_ 56 _._ 26 _[◦] /s,_ 75 _._ 4 _[◦] /s,_ 110 _._ 2 _[◦] /s,_ 145 _._ 0 _[◦] /s_ ]). 

**Direction selectivity index** We computed a direction selectivity index of a particular type _ti_ as 

**==> picture [342 x 34] intentionally omitted <==**

from peak voltages 

**==> picture [324 x 19] intentionally omitted <==**

567 elicited from moving edge stimuli. We parametrized movement angle _θ ∈_ Θ, intensities _I ∈_ I, and speeds 568 _S ∈_ S of moving edges. To take the response magnitudes into account for comparing DSI for on- and for 569 off-edges, we normalized by the maximum over both intensities in the denominator. To take different speeds 570 into account, we averaged over S. 

571 **Determining whether a cell type with asymmetric inputs counts as direction selective** We counted a 572 cell type as direction selective if the DSIs from its synthetic measurements were larger than 99% of DSIs 573 from non-motion selective cell types (i.e. those with symmetric filters). We note, however, that estimates of 574 the spatial asymmetry of connectivity from existing connectomic reconstructions can be noisy. 

25 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

For deriving the 99%-threshold, we first defined a distribution _p_ ( _d[∗] |_ tsym) over the direction selectivity index for non-direction selective cells, from peak responses to moving edges of cell types with symmetric inputs, tsym. We computed that distribution numerically by sampling 

**==> picture [151 x 34] intentionally omitted <==**

575 for 100 independent permutations of the angle _θ[∗]_ . We independently computed _d[∗]_ for all stimulus 576 conditions, models, and cell types with symmetric inputs. From _p_ ( _d[∗] |_ tsym), we derived the threshold 577 _d_ thresh = 0 _._ 357 as the 99% quantile of the random variable _d[∗]_ , meaning that the probability that a realization 578 of _d[∗] > d_ thresh is less than 1% for cell types with symmetric inputs. To determine whether an asymmetric 579 cell type counts as direction selective, we tested whether synthetically measuring direction selectivity larger 580 than _d_ thresh in that cell type is binomial with probability 0.1 (H0) or greater (H1). We identified 12 cell 581 types with asymmetric inputs (T4a, T4b, T4c, T4d, T5a, T5b, T5c, T5d, TmY3, TmY4, TmY5a, TmY18) 582 as direction selective ( _P <_ 0 _._ 05) from our models, and seven cell types with asymmetric inputs to not count 583 as direction selective (T2, T2a, T3, Tm3, Tm4, TmY14, TmY15). See Supplemental Data for reference of 584 cell types with symmetric and asymmetric inputs in our model. 

585 **UMAP and clustering** We first simulated central column responses to naturalistic scenes (24Hz Sintel 586 video clips from the full augmented dataset) with an integration time step of 10 ms. We clustered models in 587 feature space of concatenated central column responses and sample dimension. Next, we computed a nonlin588 ear dimensionality reduction to 2d (UMAP), and finally fitted Gaussian mixtures of 2 to 5 components to the 589 embedding to label the clusters based on the Guassian mixture model with the number of components that 590 minimize the Bayesian information criterion, using the python libraries umap-learn and scikit-learn[102,136] . 

591 **Single ommatidium impulse stimuli** To derive spatio-temporal receptive fields, we simulated the re592 sponse of each network to single ommatidium impulses. Impulses were ON ( _I_ = 1) on grey ( _I_ = 0 _._ 5) 593 background and presented for 5 ms after 2 s of grey-screen stimulation and followed by 5 s of grey-screen 594 stimulation. 

**Spatio-temporal, spatial and temporal receptive fields** We derived the spatio-temporal receptive field (STRF) of a cell type _ti_ as the baseline subtracted responses of the central column cell to single ommatidium impulses _J_ ( _u, v_ ) at ommatidium locations ( _u, v_ ): 

**==> picture [316 x 12] intentionally omitted <==**

We derived spatial receptive fields, SRFs, from the responses to impulses _J_ ( _u, v_ ) at the point in time at which the response to the central ommatidium impulse is at its extremum: 

**==> picture [256 x 18] intentionally omitted <==**

595 We derive temporal receptive fields, TRFs, from the response to an impulse _J_ (0 _,_ 0) at the central om596 matidium: TRF[ _n_ ] = STRF[ _n_ ](0 _,_ 0). 

596 

597 **Maximally excitatory naturalistic and artificial stimuli** First, we found the naturalistic maximally ex598 citatory stimulus, **X** _[∗]_ , by identifying the Sintel video clip, **X** , from the full dataset with geometric augmen599 tations that elicited the highest possible response in the central column cell of a particular cell type in our 600 models. 

26 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

**==> picture [118 x 19] intentionally omitted <==**

601 Next, we regularized the naturalistic maximally excitatory stimulus, to yield **X** _[′]_ , capturing only the 602 stimulus information within the receptive field of the cell, with the objective to minimize 

**==> picture [330 x 28] intentionally omitted <==**

603 The first summand maintains the exact central response to **X** _[∗]_ , while the second sets the redundant stimulus 604 information outside of the receptive field to grey ( _I_ = 0 _._ 5). 605[[137]] . 

In addition, we computed artificial maximally excitatory stimuli[[137]] . 

## 606 

## **Training synthetic connectomes** 

**Training feedforward synthetic-connectome networks** Sparsified feedforward neural networks with 6 hidden layers (linear transformations sandwiched between rectifications) with equal number of neurons in each hidden layer functioned as synthetic-connectome networks (SCN). The main results describe networks with 128 neurons per hidden layer. We interpret the individual units in the SCN’s as neurons with voltage 

**==> picture [224 x 26] intentionally omitted <==**

> 607 with presynaptic inputs _sij_ and resting potentials _Vi_[rest] . The connectome-constrained synapse strength, _wij_ , 608 is characterized by the adjacency matrix _cij_ , the signs, _σj_ , and the non-negative weight magnitudes _mij_ . 609 _cij_ = 1 if the connection exists, else _cij_ = 0. To respect Dale’s law, the signs were tied to the presynaptic 610 identity, _j_ . 

> 611 We identified the SCN’s parameters _σj_ , _mij_ , and _Vi_[rest] by task-optimization on handwritten digit classi612 fication (MNIST)[138] . We determined adjacency matrices, _cij_ , for a given connectivity percentage using an 613 iterative local pruning technique, the Lottery Ticket Hypothesis algorithm[139] . The algorithm decreases the 614 connectivity percentage of the SCNs while maintaining high task accuracy. 

615 We optimized SCNs and all simulated networks described below in Pytorch with stochastic gradient 616 descent with adaptive moment estimation (ADAM with AMSGrad), learning rate 0.001, batch size 500, and 617 an exponentially decaying learning rate decay factor of 0.5 per epoch. To constrain the weight magnitudes to 618 stay non-negative, we clamped the values at zero after each optimization step (projected gradient descent). 619 The parameters after convergence minimize the cross-entropy loss between the predicted and the groundtruth 620 classes of the handwritten digits. 

621 **Simulated networks with known connectivity and unknown strength** Simulated networks inherited 622 connectivity, _cij_ , and synapse signs, _σj_ , from their respective SCN. In simulated networks, signs and con623 nectivity were held fixed. Weight magnitudes, _mij_ , and resting potentials, _Vi_[rest] , were initialized randomly 624 and task-optimized. Just like SCNs, simulated networks were trained on the MNIST handwritten digit clas625 sification task until convergence. 

**Simulated networks with known connectivity and known strength** Alternatively, we imitate measurements of synaptic counts from the SCN’s weight magnitudes: 

˜ _mij_ = _mijϵij_ with _ϵij ∼U_ (1 _− σ,_ 1 + _σ_ ), 

27 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

626 with multiplicative noise to imitate spurious measurements. We used _σ_ = 0 _._ 5 for the main results. Weight 627 magnitudes were initialized at the measurement, _m_ ˜ _ij_ , and task-optimized on MNIST with the additional 628 objective to minimize the squared distance between optimized and measured weight magnitudes, _m_ ˜ _ij_ (L2 629 constraint, Gaussian weight magnitude prior centered around the simulated network’s initialization). We 630 weighted the L2 constraint ten times higher than the cross-entropy objective to keep weight magnitudes of 631 the simulated networks close to the noisy connectomic measurements. Resting potentials, _Vi_[rest] , were again 632 initialized randomly and task-optimized. 

633 **Measuring SCN-simulated network similarity** SCN-simulated network similarity was measured by cal634 culating the median Pearson’s correlation of tuning responses (rectified voltages) of corresponding neurons 635 in the SCN-simulated network pair. In each of the 6 hidden layers, _N_ = 100 randomly-sampled neurons 636 were used for comparison. Response tuning was measured over input stimuli from the MNIST test-set 637 ( _N_ = 10 _,_ 000 images). Results are medians over all hidden layers and over 25 SCN-simulated network 638 pairs. 

## 639 

## **References** 

- 640 1 Bargmann, C. I. & Marder, E. From the connectome to brain function. _Nature methods_ **10** , 483–490 641 (2013). 

- 2 

- 642 Scheffer, L. K. & Meinertzhagen, I. A. A connectome is not enough–what is still needed to understand 643 the brain of drosophila? _Journal of Experimental Biology_ **224** , jeb242740 (2021). 

- 3 

- 644 Ammer, G., Vieira, R. M., Fendl, S. & Borst, A. Anatomical distribution and functional roles of electrical 645 synapses in drosophila. _Current Biology_ **32** (2022). 

- 645 

- 646 4 Marder, E., Gutierrez, G. J. & Nusbaum, M. P. Complicating connectomes: electrical coupling creates 647 parallel pathways and degenerate circuit mechanisms. _Developmental Neurobiology_ **77** , 597–609 (2017). 

- 648 

   - 5 Marder, E. Neuromodulation of neuronal circuits: back to the future. _Neuron_ **76** , 1–11 (2012). 

- 649 6 Mu, Y. _et al._ Glia accumulate evidence that actions are futile and suppress unsuccessful behavior. _Cell_ 650 **178** , 27–43 (2019). 

- 651 7 White, J. G., Southgate, E., Thomson, J. N., Brenner, S. _et al._ The structure of the nervous system of the 652 nematode caenorhabditis elegans. _Philos Trans R Soc Lond B Biol Sci_ **314** , 1–340 (1986). 

- 653 

   - 8 Jarrell, T. A. _et al._ The connectome of a decision-making neural network. _science_ **337** , 437–444 (2012). 

- 654 9 Cook, S. J. _et al._ Whole-animal connectomes of both caenorhabditis elegans sexes. _Nature_ **571** , 63–71 655 (2019). 

- 656 10 Witvliet, D. _et al._ Connectomes across development reveal principles of brain maturation. _Nature_ **596** , 657 257–261 (2021). 

- 658 11 Zheng, Z. _et al._ A complete electron microscopy volume of the brain of adult drosophila melanogaster. 659 _Cell_ **174** , 730–743 (2018). 

- 660 12 Scheffer, L. K. _et al._ A connectome and analysis of the adult drosophila central brain. _Elife_ **9** , e57443 661 (2020). 

28 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

- 662 13 Dorkenwald, S. _et al._ FlyWire: online community for whole-brain connectomics. _Nature Methods_ **19** , 663 119–128 (2022). 

- 664 14 Hulse, B. K. _et al._ A connectome of the drosophila central complex reveals network motifs suitable for 665 flexible navigation and context-dependent action selection. _eLife_ **10** , e66039 (2021). 

- 666 15 Wanner, A. A., Genoud, C., Masudi, T., Siksou, L. & Friedrich, R. W. Dense em-based reconstruction of 667 the interglomerular projectome in the zebrafish olfactory bulb. _Nature neuroscience_ **19** , 816–825 (2016). 

- 668 16 Hildebrand, D. G. C. _et al._ Whole-brain serial-section electron microscopy in larval zebrafish. _Nature_ 669 **545** , 345–349 (2017). 

- 670 17 Svara, F. _et al._ Automated synapse-level reconstruction of neural circuits in the larval zebrafish brain. 671 _Nature Methods_ 1–10 (2022). 

- 672 18 Bock, D. D. _et al._ Network anatomy and in vivo physiology of visual cortical neurons. _Nature_ **471** , 673 177–182 (2011). 

- 674 19 Helmstaedter, M. _et al._ Connectomic reconstruction of the inner plexiform layer in the mouse retina. 675 _Nature_ **500** , 168–174 (2013). URL http://dx.doi.org/10.1038/nature12346. 

- 676 20 Oh, S. W. _et al._ A mesoscale connectome of the mouse brain. _Nature_ **508** , 207–214 (2014). 

- 677 21 Motta, A. _et al._ Dense connectomic reconstruction in layer 4 of the somatosensory cortex. _Science_ **366** , 678 eaay3134 (2019). 

- 679 22 Loomba, S. _et al._ Connectomic comparison of mouse and human cortex. _Science_ **377** , eabo0924 (2022). 

- 680 23 Kasthuri, N. _et al._ Saturated reconstruction of a volume of neocortex. _Cell_ **162** , 648–661 (2015). 

- 681 24 Shapson-Coe, A. _et al._ A connectomic study of a petascale fragment of human cerebral cortex. _BioRxiv_ 682 (2021). 

- 683 25 Jabr, F. The connectome debate: Is mapping the mind of a worm worth it? _Scientific American_ (2012). 684 URL https://www.scientificamerican.com/article/c-elegans-connectome/. 

- 26 

- 685 Cybenko, G. Approximation by superpositions of a sigmoidal function. _Mathematics of Control, Signals,_ 686 _and Systems_ **5** , 455–455 (1992). 

- 27 

- 687 Leshno, M., Lin, V. Y., Pinkus, A. & Schocken, S. Multilayer feedforward networks with a nonpolyno688 mial activation function can approximate any function. _Neural networks_ **6** , 861–867 (1993). 

- 689 28 Montufar, G. F., Pascanu, R., Cho, K. & Bengio, Y. On the number of linear regions of deep neural 690 networks. _Advances in neural information processing systems_ **27** (2014). 

- 691 

   - 29 Goodfellow, I., Bengio, Y. & Courville, A. _Deep learning_ (MIT press, 2016). 

- 30 

- 692 Kornblith, S., Norouzi, M., Lee, H. & Hinton, G. Similarity of neural network representations revisited. 693 In _International Conference on Machine Learning_ , 3519–3529 (PMLR, 2019). 

- 31 

- 694 Raghu, M., Unterthiner, T., Kornblith, S., Zhang, C. & Dosovitskiy, A. Do vision transformers see like 695 convolutional neural networks? _Advances in Neural Information Processing Systems_ **34** , 12116–12128 696 (2021). 

29 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

- 32 

- 697 Reichardt, W. Autocorrelation, a principle for evaluation of sensory information by the central nervous 698 system. _Principles of sensory communications_ (1961). 

- 699 33 Barlow, H. B. & Levick, W. R. The mechanism of directionally selective units in rabbit’s retina. _The_ 700 _Journal of Physiology_ **178** , 477–504 (1965). 

- 34 

- 701 Seung, H. S. How the brain keeps the eyes still. _Proc. Natl. Acad. Sci. USA_ 13339–13344 (1996). 

- 702 35 Goldman, M. S. Memory without Feedback in a Neural Network. _Neuron_ **61** , 621–634 (2009). URL 703 http://dx.doi.org/10.1016/j.neuron.2008.12.012. 

- 36 

- 704 Wang, P. Y., Sun, Y., Axel, R., Abbott, L. & Yang, G. R. Evolving the olfactory system with machine 705 learning. _Neuron_ **109** , 3879–3892 (2021). 

- 37 

- 706 Biswas, T. & Fitzgerald, J. E. Geometric framework to predict structure from function in neural networks. 707 _Physical Review Research_ **4** , 023255 (2022). 

- 708 38 Bagherian, D. _et al._ Fine-grained system identification of nonlinear neural circuits. _arXiv preprint_ 709 _arXiv:2106.05400_ (2021). 

- 710 39 Wengert, R. E. A simple automatic derivative evaluation program. _Communications of the ACM_ **7** , 711 463–464 (1964). 

- 712 40 Paszke, A. _et al._ Pytorch: An imperative style, high-performance deep learning library. _Advances in_ 713 _Neural Information Processing Systems_ **32** (2019). 

- 41 

- 714 Rumelhart, D. E., Hinton, G. E. & Williams, R. J. Learning representations by back-propagating errors. 715 _Nature_ **323** , 533–536 (1986). 

- 716 42 Kingma, D. & Ba, J. Adam: A method for stochastic optimization. _3rd International Conference on_ 717 _Learning Representations (ICRL)_ (2014). 

- 718 43 LeCun, Y., Bengio, Y. & Hinton, G. Deep learning. _nature_ **521** , 436–444 (2015). 

- 719 44 Yamins, D. L. & DiCarlo, J. J. Using goal-driven deep learning models to understand sensory cortex. 720 _Nature neuroscience_ **19** , 356–365 (2016). 

- 45 

- 721 Yang, G. R., Joglekar, M. R., Song, H. F., Newsome, W. T. & Wang, X.-J. Task representations in neural 722 networks trained to perform many cognitive tasks. _Nature neuroscience_ **22** , 297–306 (2019). 

- 46 

- 723 Mano, O., Creamer, M. S., Badwan, B. A. & Clark, D. A. Predicting individual neuron responses with 724 anatomically constrained task optimization. _Current Biology_ **31** , 4062–4075 (2021). 

- 725 47 Sandbrink, K. J. _et al._ Task-driven hierarchical deep neural network models of the proprioceptive path726 way. _bioRxiv_ (2020). 

- 48 

- 727 Shinomiya, K. _et al._ Comparisons between the ON- and OFF-edge motion pathways in the Drosophila 728 brain. _Elife_ **8** , 2431 (2019). 

- 729 49 Takemura, S.-y. _et al._ The comprehensive connectome of a neural substrate for ‘ON’ motion detection 730 in Drosophila. _eLife_ **6** , 1–16 (2017). 

- 731 50 Rivera-Alba, M. _et al._ Wiring economy and volume exclusion determine neuronal placement in the 732 drosophila brain. _Current Biology_ **21** , 2000–2005 (2011). 

30 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

- 51 

- 733 Krapp, H. G., Hengstenberg, B. & Hengstenberg, R. Dendritic structure and receptive-field organization 734 of optic flow processing interneurons in the fly. _Journal of neurophysiology_ **79** , 1902–1917 (1998). 

- 734 

- 52 

- 735 Borst, A., Haag, J. & Reiff, D. F. Fly motion vision. _Annual Review of Neuroscience_ **33** , 49–70 (2010). 736 URL https://doi.org/10.1146%2Fannurev-neuro-060909-153155. 

- 737 53 Strother, J. A. _et al._ The emergence of directional selectivity in the visual motion pathway of drosophila. 738 _Neuron_ **94** , 168–182 (2017). 

- 739 54 Gruntman, E., Romani, S. & Reiser, M. B. Simple integration of fast excitation and offset, delayed 740 inhibition computes directional selectivity in Drosophila. _Nature Neuroscience_ **21** , 250–257 (2018). 741 URL http://dx.doi.org/10.1038/s41593-017-0046-4. 

- 55 

- 742 Gruntman, E., Romani, S. & Reiser, M. B. The computation of directional selectivity in the drosophila 743 off motion pathway. _Elife_ **8** , e50706 (2019). 

- 56 

- 744 Borst, A., Haag, J. & Mauss, A. S. How fly neurons compute the direction of visual motion. _Journal of_ 745 _Comparative Physiology A_ **206** , 109–124 (2020). 

- 57 

- 746 Joesch, M., Schnell, B., Raghu, S. V., Reiff, D. F. & Borst, A. ON and OFF pathways in drosophila mo747 tion vision. _Nature_ **468** , 300–304 (2010). URL https://doi.org/10.1038%2Fnature09545. 

- 58 

- 748 Clark, D. A., Bursztyn, L., Horowitz, M. A., Schnitzer, M. J. & Clandinin, T. R. Defining the computa749 tional structure of the motion detector in drosophila. _Neuron_ **70** , 1165–1177 (2011). 

- 750 59 Strother, J. A., Nern, A. & Reiser, M. B. Direct observation of on and off pathways in the drosophila 751 visual system. _Current Biology_ **24** , 976–983 (2014). URL http://dx.doi.org/10.1016/j. 752 cub.2014.03.017. 

- 60 

- 753 Behnia, R., Clark, D. A., Carter, A. G., Clandinin, T. R. & Desplan, C. Processing properties of ON and 754 OFF pathways for drosophila motion detection. _Nature_ **512** , 427–430 (2014). 

- 755 61 Borst, A. & Helmstaedter, M. Common circuit design in fly and mammalian motion vision. _Nature_ 756 _Neuroscience_ **18** , 1067 (2015). 

- 757 62 Maisak, M. S. _et al._ A directional tuning map of Drosophila elementary motion detectors. _Nature_ **500** , 758 212–216 (2013). 

- 759 

   - 63 Yonehara, K. & Roska, B. Motion detection: neuronal circuit meets theory. _Cell_ **154** , 1188–1189 (2013). 

- 760 64 Fisher, Y. E., Silies, M. & Clandinin, T. R. Orientation Selectivity Sharpens Motion Detection in 761 Drosophila. _Neuron_ **88** , 390–402 (2015). URL http://dx.doi.org/10.1016/j.neuron. 762 2015.09.033. 

- 763 65 Fischbach, K. F. & Dittrich, A. P. The optic lobe of Drosophila melanogaster. I. A Golgi analysis of 764 wild-type structure. _Cell and Tissue Research_ **258** , 441–475 (1989). 

- 66 

- 765 Nern, A., Pfeiffer, B. D. & Rubin, G. M. Optimized tools for multicolor stochastic labeling reveal diverse 766 stereotyped cell arrangements in the fly visual system. _Proceedings of the National Academy of Sciences_ 767 _of the United States of America_ **112** , E2967–76 (2015). 

- 768 67 Takemura, S.-y. _et al._ A visual motion detection circuit suggested by Drosophila connectomics. _Nature_ 769 **500** , 175–181 (2013). URL http://dx.doi.org/10.1038/nature12450. 

31 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

- 770 68 Takemura, S.-y. _et al._ Synaptic circuits and their variations within different columns in the visual system 771 of Drosophila . _Proceedings of the National Academy of Sciences_ **112** , 13711–13716 (2015). 

- 771 

- 69 

- 772 Shinomiya, K., Nern, A., Meinertzhagen, I. A., Plaza, S. M. & Reiser, M. B. Neuronal circuits integrating 773 visual motion information in drosophila melanogaster. _Current Biology_ **32** , 3529–3544 (2022). 

- 70 

- 774 Meier, M. & Borst, A. Extreme Compartmentalization in a Drosophila Amacrine Cell. _Current Biology_ 775 **29** , 1545–1550.e2 (2019). URL https://doi.org/10.1016/j.cub.2019.03.070. 

- 776 71 Hahnloser, R. & Seung, H. S. Permitted and forbidden sets in symmetric threshold-linear networks. 777 _Advances in neural information processing systems_ **13** (2000). 

- 778 72 Curto, C., Degeratu, A. & Itskov, V. Flexible memory networks. _Bulletin of mathematical biology_ **74** , 779 590–614 (2012). 

- 780 73 Liu, T. X., Davoudian, P. A., Lizbinski, K. M. & Jeanne, J. M. Connectomic features un781 derlying diverse synaptic connection strengths and subcellular computation. _Current Biology_ **32** , 782 559–569.e5 (2022). URL https://www.sciencedirect.com/science/article/pii/ 783 S0960982221016420. 

- 74 

- 784 G¨otz, K. G. Optomotorische untersuchung des visuellen systems einiger augenmutanten der fruchtfliege 785 drosophila. _Kybernetik_ **2** , 77–92 (1964). 

- 75 

- 786 Ready, D. F., Hanson, T. E. & Benzer, S. Development of the drosophila retina, a neurocrystalline lattice. 787 _Developmental biology_ **53** , 217–240 (1976). 

- 788 76 Yamins, D. L. K. _et al._ Performance-optimized hierarchical models predict neural responses in higher 789 visual cortex. _Proceedings of the National Academy of Sciences_ **111** , 8619–8624 (2014). 

- 789 

- 77 

- 790 Butler, D. J., Wulff, J., Stanley, G. B. & Black, M. J. A Naturalistic Open Source Movie for Optical Flow 791 Evaluation (Sintel). _Eccv_ 611–625 (2012). 

- 791 

- 78 

- 792 Braitenberg, V. Patterns of projection in the visual system of the fly. i. retina-lamina projections. _Exper-_ 793 _imental Brain Research_ **3** , 271–298 (1967). 

- 79 

- 794 Werbos, P. J. Backpropagation through time: what it does and how to do it. _Proceedings of the IEEE_ **78** , 795 1550–1560 (1990). 

- 80 

- 796 Marder, E. & Taylor, A. L. Multiple models to capture the variability in biological neurons and networks. 797 _Nature Neuroscience_ **14** , 133–138 (2011). 

- 797 

- 798 81 Schaeffer, R., Khona, M. & Fiete, I. No free lunch from deep learning in neuroscience: A case study 799 through models of the entorhinal-hippocampal circuit. _bioRxiv_ (2022). 

- 800 82 Maheswaranathan, N., Williams, A., Golub, M., Ganguli, S. & Sussillo, D. Universality 801 and individuality in neural dynamics across large populations of recurrent networks. In Wal802 lach, H. _et al._ (eds.) _Advances in Neural Information Processing Systems_ , vol. 32 (Curran As803 sociates, Inc., 2019). URL https://proceedings.neurips.cc/paper/2019/file/ 804 5f5d472067f77b5c88f69f1bcfda1e08-Paper.pdf. 

- 805 83 Peretz, A. _et al._ The light response of drosophila photoreceptors is accompanied by an increase in cellular 806 calcium: effects of specific mutations. _Neuron_ **12** , 1257–1267 (1994). 

- 806 

32 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

- 807 84 Reiff, D. F., Plett, J., Mank, M., Griesbeck, O. & Borst, A. Visualizing retinotopic half-wave rectified 808 input to the motion detection circuitry of drosophila. _Nature neuroscience_ **13** , 973–978 (2010). 

- 808 

- 809 85 Freifeld, L., Clark, D. A., Schnitzer, M. J., Horowitz, M. A. & Clandinin, T. R. Gabaergic lateral 810 interactions tune the early stages of visual processing in drosophila. _Neuron_ **78** , 1075–1089 (2013). 

- 811 86 Silies, M. _et al._ Modular use of peripheral input channels tunes motion-detecting circuitry. _Neuron_ **79** , 812 111–127 (2013). 

- 813 87 Meier, M. _et al._ Neural circuit components of the drosophila off motion vision pathway. _Current Biology_ 814 **24** , 385–392 (2014). 

- 815 88 Fisher, Y. E. _et al._ A Class of Visual Neurons with Wide-Field Properties Is Required for Local Mo816 tion Detection. _Current Biology_ **25** , 3178–3189 (2015). URL http://dx.doi.org/10.1016/j. 817 cub.2015.11.018. 

- 89 

- 818 Hardie, R. C. & Juusola, M. Phototransduction in drosophila. _Current opinion in neurobiology_ **34** , 37–45 819 (2015). 

- 820 90 Leonhardt, A. _et al._ Asymmetry of drosophila on and off motion detectors enhances real-world velocity 821 estimation. _Nature neuroscience_ **19** , 706–715 (2016). 

- 822 91 Yang, H. H. _et al._ Subcellular imaging of voltage and calcium signals reveals neural processing in vivo. 823 _Cell_ **166** , 245–257 (2016). 

- 92 

- 824 Serbe, E., Meier, M., Leonhardt, A. & Borst, A. Comprehensive characterization of the major presynaptic 825 elements to the drosophila off motion detector. _Neuron_ **89** , 829–841 (2016). 

- 93 

- 826 Arenz, A., Drews, M. S., Richter, F. G., Ammer, G. & Borst, A. The Temporal Tuning of the Drosophila 827 Motion Detectors Is Determined by the Dynamics of Their Input Elements. _Current Biology_ **27** , 929–944 828 (2017). URL http://dx.doi.org/10.1016/j.cub.2017.01.051. 

- 94 

- 829 Ramos-Traslosheros, G. & Silies, M. The physiological basis for contrast opponency in motion compu830 tation in drosophila. _Nature communications_ **12** , 1–16 (2021). 

- 831 95 Gruntman, E., Reimers, P., Romani, S. & Reiser, M. B. Non-preferred contrast responses in the 832 drosophila motion pathways reveal a receptive field structure that explains a common visual illusion. 833 _Current Biology_ **31** , 5286–5298 (2021). 

- 834 96 Groschner, L. N., Malis, J. G., Zuidinga, B. & Borst, A. A biophysical account of multiplication by a 835 single neuron. _Nature_ **603** , 119–123 (2022). 

- 836 97 Ketkar, M. D. _et al._ First-order visual interneurons distribute distinct contrast and luminance information 837 across on and off pathways to achieve stable behavior. _Elife_ **11** , e74937 (2022). 

- 838 98 Borst, A. & Helmstaedter, M. Common circuit design in fly and mammalian motion vision. _Nature_ 839 _Neuroscience_ **18** , 1067–1076 (2015). URL https://doi.org/10.1038%2Fnn.4050. 

- 99 

- 840 Gjorgjieva, J., Sompolinsky, H. & Meister, M. Benefits of pathway splitting in sensory coding. _Journal_ 841 _of Neuroscience_ **34** , 12127–12144 (2014). 

- 842 100 Serbe, E. Analysis of the neural circuit underlying the detection of visual motion in drosophila 843 melanogaster (2016). 

33 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

- 844 101 Ammer, G., Leonhardt, A., Bahl, A., Dickson, B. J. & Borst, A. Functional Specialization of Neural 845 Input Elements to the Drosophila on Motion Detector. _Current Biology_ **25** , 2247–2253 (2015). URL 846 http://dx.doi.org/10.1016/j.cub.2015.07.014. 

- 847 102 Becht, E. _et al._ Dimensionality reduction for visualizing single-cell data using umap. _Nature biotechnol-_ 848 _ogy_ **37** , 38–44 (2019). 

- 849 103 Cs´aji, B. C. _et al._ Approximation with artificial neural networks. _Faculty of Sciences, Etvs Lornd_ 850 _University, Hungary_ **24** , 7 (2001). 

- 851 104 Li, Y., Yosinski, J., Clune, J., Lipson, H. & Hopcroft, J. E. Convergent learning: Do different neural 852 networks learn the same representations? In _International Conference on Learning Representations_ 853 _(ICLR)_ (2016). 

- 854 105 Turner, E., Dabholkar, K. V. & Barak, O. Charting and navigating the space of solutions for recurrent 855 neural networks. _Advances in Neural Information Processing Systems_ **34** , 25320–25333 (2021). 

- 856 106 Tanaka, H. _et al._ From deep learning to mechanistic understanding in neuroscience: the structure of 857 retinal prediction. _Advances in neural information processing systems_ **32** (2019). 

- 857 

- 858 107 Raghu, M., Gilmer, J., Yosinski, J. & Sohl-Dickstein, J. Svcca: Singular vector canonical correlation 859 analysis for deep learning dynamics and interpretability. _Advances in neural information processing_ 860 _systems_ **30** (2017). 

- 861 108 Barrett, D. G., Morcos, A. S. & Macke, J. H. Analyzing biological and artificial neural networks: 862 challenges with opportunities for synergy? _Current opinion in neurobiology_ **55** , 55–64 (2019). 

- 862 

- 109 

- 863 Ammer, G., Leonhardt, A., Bahl, A., Dickson, B. J. & Borst, A. Functional specialization of neural input 864 elements to the drosophila on motion detector. _Current Biology_ **25** , 2247–2253 (2015). 

- 865 110 Strother, J. A. _et al._ Behavioral state modulates the on visual motion pathway of drosophila. _Proceedings_ 866 _of the National Academy of Sciences_ **115** , E102–E111 (2018). 

- 867 111 Card, G. & Dickinson, M. H. Visually mediated motor planning in the escape response of drosophila. 868 _Current Biology_ **18** , 1300–1307 (2008). 

- 868 

- 869 112 Ofstad, T. A., Zuker, C. S. & Reiser, M. B. Visual place learning in drosophila melanogaster. _Nature_ 870 **474** , 204–207 (2011). 

- 871 113 Ribeiro, I. M. _et al._ Visual projection neurons mediating directed courtship in drosophila. _Cell_ **174** , 872 607–621 (2018). 

- 873 114 Schretter, C. E. _et al._ Cell types and neuronal circuitry underlying female aggression in drosophila. _Elife_ 874 **9** , e58942 (2020). 

- 875 115 Fitzgerald, J. E. & Clark, D. A. Nonlinear circuits for naturalistic visual motion estimation. _Elife_ **4** , 876 e09123 (2015). 

- 116 

- 877 Leonhardt, A., Meier, M., Serbe, E., Eichner, H. & Borst, A. Neural mechanisms underlying sensitivity 878 to reverse-phi motion in the fly. _PloS one_ **12** , e0189019 (2017). 

- 879 117 Fisher, D., Olasagasti, I., Tank, D. W., Aksay, E. R. & Goldman, M. S. A modeling framework for 880 deriving the structural and functional architecture of a short-term memory microcircuit. _Neuron_ **79** , 881 987–1000 (2013). 

34 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

- 882 118 Kriegeskorte, N. Deep neural networks: a new framework for modeling biological vision and brain 883 information processing. _Annual Review of Vision Science_ **1** , 417–446 (2015). 

- 119 

- 884 Tschopp, F. D., Reiser, M. B. & Turaga, S. C. A Connectome Based Hexagonal Lattice Convolutional 885 Network Model of the Drosophila Visual System. _arXiv preprint arXiv:1806.04793_ (2018). URL http: 886 //arxiv.org/abs/1806.04793. 1806.04793. 

- 887 120 Mi, L. _et al._ Connectome-constrained latent variable model of whole-brain neural activity. In _In-_ 888 _ternational Conference on Learning Representations_ (2022). URL https://openreview.net/ 889 forum?id=CJzi3dRlJE-. 

- 890 

   - 121 Abbott, L. F. _et al._ The mind of a mouse. _Cell_ **182** , 1372–1376 (2020). 

- 122 

- 891 R´ıos, V. L. _et al._ Neuromechfly, a neuromechanical model of adult drosophila melanogaster. _bioRxiv_ 892 (2021). 

- 893 123 Merel, J. _et al._ Deep neuroethology of a virtual rodent. In _International Conference on Learning Repre-_ 894 _sentations_ (2020). 

- 895 124 Tuthill, J. C., Nern, A., Rubin, G. M. & Reiser, M. B. Wide-field feedback neurons dynamically tune 896 early visual processing. _Neuron_ **82** , 887–895 (2014). 

- 897 125 Tuthill, J. C., Nern, A., Holtz, S. L., Rubin, G. M. & Reiser, M. B. Contributions of the 12 Neuron 898 Classes in the Fly Lamina to Motion Vision. _Neuron_ **79** , 128–140 (2013). URL http://dx.doi. 899 org/10.1016/j.neuron.2013.05.024. 

- 900 126 AlQuraishi, M. & Sorger, P. K. Differentiable biology: using deep learning for biophysics-based and 901 data-driven modeling of molecular mechanisms. _Nature methods_ **18** , 1169–1180 (2021). 

- 902 127 Chen, R. T. Q., Rubanova, Y., Bettencourt, J. & Duvenaud, D. K. Neural ordinary differential equa903 tions. In Bengio, S. _et al._ (eds.) _Advances in Neural Information Processing Systems_ , vol. 31 (Cur904 ran Associates, Inc., 2018). URL https://proceedings.neurips.cc/paper/2018/file/ 905 69386f6bb1dfed68692a24c8686939b9-Paper.pdf. 

- 906 128 Shi, X. _et al._ Convolutional lstm network: A machine learning approach for pre907 cipitation nowcasting. In Cortes, C., Lawrence, N., Lee, D., Sugiyama, M. & Gar908 nett, R. (eds.) _Advances in Neural Information Processing Systems_ , vol. 28 (Curran As909 sociates, Inc., 2015). URL https://proceedings.neurips.cc/paper/2015/file/ 910 07563a3fe3bbe7e3ba84431ad9d055af-Paper.pdf. 

- 129 

- 911 Fukushima, K. & Miyake, S. Neocognitron: A self-organizing neural network model for a mechanism 912 of visual pattern recognition. In _Competition and cooperation in neural nets_ , 267–285 (Springer, 1982). 

- 913 130 LeCun, Y. _et al._ Backpropagation applied to handwritten zip code recognition. _Neural computation_ **1** , 914 541–551 (1989). 

- 131 

- 915 Riesenhuber, M. & Poggio, T. Hierarchical models of object recognition in cortex. _Nature neuroscience_ 916 **2** , 1019–1025 (1999). 

- 917 132 Krizhevsky, A., Sutskever, I. & Hinton, G. E. Imagenet classification with deep convolutional neural 918 networks. In _Advances in neural information processing systems_ , 1097–1105 (2012). 

- 133 

- 919 Miller, K. D. & Fumarola, F. Mathematical equivalence of two common forms of firing rate models of 920 neural networks. _Neural computation_ **24** , 25–31 (2012). 

35 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

- 134 

- 921 Butler, D. J., Wulff, J., Stanley, G. B. & Black, M. J. A naturalistic open source movie for optical flow 922 evaluation. In _European conference on computer vision_ , 611–625 (Springer, 2012). 

- 923 135 Dosovitskiy, A. _et al._ Flownet: Learning optical flow with convolutional networks. In _Proceedings of_ 924 _the IEEE international conference on computer vision_ , 2758–2766 (2015). 

- 925 136 Pedregosa, F. _et al._ Scikit-learn: Machine learning in Python. _Journal of Machine Learning Research_ 926 **12** , 2825–2830 (2011). 

- 927 137 Walker, E. Y. _et al._ Inception loops discover what excites neurons most using deep predictive models. 928 _Nature Neuroscience_ **22** , 2060–2065 (2019). 

- 929 138 LeCun, Y., Cortes, C. & Burges, C. Mnist handwritten digit database. _ATT Labs [Online]. Available:_ 930 _http://yann.lecun.com/exdb/mnist_ **2** (2010). 

- 139 

- 931 Frankle, J. & Carbin, M. The lottery ticket hypothesis: Finding sparse, trainable neural networks. _arXiv_ 932 _preprint arXiv:1803.03635_ (2018). 

- 140 

- 933 He, K., Zhang, X., Ren, S. & Sun, J. Delving deep into rectifiers: Surpassing human-level performance 934 on imagenet classification. In _Proceedings of the IEEE international conference on computer vision_ , 935 1026–1034 (2015). 

36 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

## 936 **Extended Data Figures** 

**==> picture [446 x 191] intentionally omitted <==**

Extended Data Figure 1: **Statistics of derived connectome. (a)** (left) Half of the 65 cell types receive input from more than ten other cell types, while the other half receives input from less than ten. (right) Half of the 65 cell types project onto more then six other cell types, while the other half projects onto less than six. **(b)** (left) Half of the 65 cell types receive input from 21 up to 200 cells, while the other half receives input from less than 21 cells. (right) Half of the 65 cell types project output onto 20 up to 200 cells, while the other half projects output onto less than 20 cells. **(c)** Half of the connections are characterized by less than 1.6 synapses while the other half are characterized by 1.6 up to hundreds of synapses. **(d)** A pair of presynaptic and postsynaptic cell type is connected by 5.5 synapses in half of the cases and by more than 5.5 up to hundreds in the other half of the cases. **(e)** (left) Half of the 65 cell types receive input from less than 93.6 synapses and the other half between 93.6 to 400 synapses. (right) Half of the 65 cell types project less than 55.9 synapses and the other half projects between 55.9 to 600 synapses. **(f)** Separating (e) into excitatory and inihibitory synapses, (left) we see that half of the 65 cell types receive excitatory inputs from less than 52.3 synapses and the other half from 52.3 to hundreds. Half of the 65 cell types receive inhibitory inputs from less than 39.2 synapses and the other half from 39.2 to hundreds. (right) Half of the 65 cell types project less than 22.1 excitatory synapses and the other half from 22.1 to hundreds. At least half of the 65 cell types project no inhibitory synapses and the rest project between zero to hundreds. 

37 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

**==> picture [446 x 440] intentionally omitted <==**

Extended Data Figure 2: **Statistics of learned parameters of best 20% models vs. worst 20% models. (a)** Taskoptimized resting potentials. **(b)** Task-optimized time constants. **(c)** Task-optimized filter scaling factors. 

38 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

**==> picture [157 x 125] intentionally omitted <==**

**----- Start of picture text -----**<br>
50<br>task-optimized DMN<br>random DMN<br>40 unconstrained CNN<br>30<br>20<br>10<br>0<br>4.4 4.6 4.8 5.0 5.2 5.4 5.6 5.8<br>task error<br>number of models<br>**----- End of picture text -----**<br>


Extended Data Figure 3: **Models with random parameter configurations consistently performed worse on the task than task-optimized models.** Task error distributions over ensembles. **(green)** The task error of 50 DMNs distributes between 5.1 and 5.5 (a.u.) after optimization. **(red)** The task error of 50 random DMNs collapses at 5.7 despite optimization of the decoders. **(blue)** An unconstrained CNN with 414,666 parameters reaches a task error between 4.5 and 4.6 (here 5 models). 

**==> picture [469 x 238] intentionally omitted <==**

Extended Data Figure 4: **Predicted tuning with respect to task-performance. (a)** Flash response index computed as the max-abs-scaled peak response to an off flash subtracted from the max-abs-scaled peak response to an on flash – both of approximately 35 _[◦]_ radius and presented for 1s after 2 seconds of grey input. Values above 0 indicate on-polarity, values below zero indicate off-polarity. Known on-polar and off-polar cell types are colored in yellow and magenta. **(b)** Single cell type direction selectivity of best 20% task-performing models versus worst 20% taskperforming models of an ensemble of 50 models as a result of peak voltage responses in central columns to on-edges and off-edges moving towards all possible directions on grey background (Equation 9). The bolded cell types are those which optic flow is decoded from. 

39 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

**==> picture [422 x 119] intentionally omitted <==**

Extended Data Figure 5: **Models with random parameter configurations predict the known direction selectivity indices and flash response indices worse than task-optimized models.** We correlate predicted tuning metrics from each model to the known tuning properties to answer if models with random parameter configurations lead to similarly accurate tuning predictions as task-optimized models. **(a)** Task-optimized DMNs (green) predict more accurate direction selectivity indices than randomly parametrized models (red) (P = 2 _×_ 10 _[−]_[11] , Mann-Whitney-U). **(b)** Task-optimized DMNs (green) predict more accurate flash response indices than randomly parametrized models (red) (P = 5 _._ 3 _×_ 10 _[−]_[5] , Mann-Whitney-U). 

**==> picture [188 x 129] intentionally omitted <==**

Extended Data Figure 6: **Better task performing models predict motion tuning neurons better.** We correlate predicted tuning metrics from each model to the known tuning properties to understand when better performing models give us better tuning predictions. **(orange)** When correlating the direction selectivity index of each model to the binary known properties for T4 and T5 and their input cell types, we find that this correlation is higher for better performing models. **(magenta)** While the models predicted the known contrast preferences generally well, the correlation of flash response index to the binary known contrast preferences of 31 cell types did not significantly increase with better performing models. 

40 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

**==> picture [469 x 331] intentionally omitted <==**

Extended Data Figure 7: **Spatio-temporal receptive fields mapped with OFF-impulses and maximally excitatory stimuli. (a)** Spatio-temporal receptive field mapping with single ommatidium OFF-impulses. **(b)** Maximally excitatory stimuli and baseline-subtracted responses. Including full-field naturalistic, regularized naturalistic, artificial, and moving edge stimuli and responses. Moving edge angle and speed maximize the central cell peak response. Artificial stimuli are optimized from initial noise to maximize the central cell activity using gradient ascent plus full-field regularization towards grey. The last row shows the baseline-subtracted central cell responses. Peak central cell responses at time point zero. 

**==> picture [235 x 129] intentionally omitted <==**

Extended Data Figure 8: **Motion tuning predictions for T4 and T5 subtypes to preferred and null contrast edges in the best-task-performing model.** 

41 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

**==> picture [469 x 112] intentionally omitted <==**

Extended Data Figure 9: **Investigating the role of sparse connectivity with synthetic networks for MNIST handwritten digit recognition. (a)** Median hidden-layer response correlation as a function of synthetic network connectivity percentage for task and connectome constrained models that had access to only connectivity information but not connection strength. **(b)** Median hidden-layer response correlation as a function of synthetic network connectivity percentage for task and connectome constrained models with access to noisy estimates of connection strength (multiplicative noise levels of _σ_ = 0 _._ 1 _, σ_ = 0 _._ 25, and _σ_ = 0 _._ 5, respectively). Connectome constrained models were task optimized with a soft (L2) constraint with the noisy connectomic measurements. 

42 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

## 937 

## **Supplementary Information** 

## 938 **Supplementary Note 1 Probabilistic model for automatic construction of** 939 **connectome** 

940 The EM-datasets primarily contain the lamina projections, medulla (FIB-25), lobula and lobula plate (FIB941 19) cells, and the important cell types of the primary motion detection circuit (T4, T5). In total, they contain 942 1801 neurons (702 from FIB-25 and 1099 from FIB-19), with hand-annotated positions available for 830 943 of these neurons (SI Figure 1). To accurately localize the remaining neurons and synapses and to derive 944 cell-type connectivity (Fig. 1b), we build a probabilistic expectation maximization algorithm that takes 945 synaptic connection statistics, projected synapse center-of-mass clusters and existing column annotations 946 into account. We verified the quality of our reconstruction, concluding that even in the absence of 90% of 947 the hand-annotations available to us, we could accurately position the majority of the neurons in our circuit 948 reconstruction (SI Table 1, SI Figure 2). In the absence of ground-truth annotations, we verified the quality 949 of our reconstruction by the _recovery_ and _consistency_ rates (Table 1). The _recovery_ rate is defined as the 950 ratio of reference positions successfully recovered by our algorithm after removing a random proportion of 951 reference positions from the data. For each 10% of the reference positions removed, on average, only 2 _._ 5% 952 are not correctly recovered. The _consistency_ rate is defined as the fraction of neurons obtaining the same 953 position between evaluations of the algorithm starting with a different fraction of reference positions. For 954 each 10% of the reference positions removed, on average, an additional 3 _._ 9% of neurons are not consistently 955 estimated. We found that even just 10% (83 positions) of the available ground truth was sufficient to robustly 956 position the majority of the neurons (64 _._ 3%, 534 positions) into the correct columns, and annotate 48% (865 957 neurons) perfectly consistent. 

958 **Probabilistic expectation maximization for unassigned neurons.** Each neuron is either annotated in 959 the dataset (in _K_ ), assigned to a position (in _A_ ) by our algorithm, or still under evaluation (in set _U_ ). 960 Iteratively, the EM-expectation step updates the normal distribution ( _µs,t,_ ( _y,x_ ), _σs,t,_ ( _y,x_ )) of expected synapse 961 counts between neurons, while the EM-maximization step updates the positions ( _y, x_ ) of all neurons not yet 962 assigned to a column (set _U_ ). 

963 **Synapse center-of-mass as a neuron column position proxy.** For offset assignment, we take the center- 

964 of-mass of all synapses belonging (pre- or postsynaptic) to a neuron into account. These are generally 965 a more useful hint than the physical location of the cell body, as the cell bodies are mostly positioned 966 on the side of the neuropiles, and not near the column to which the neuron belongs to, but most cells 967 have a majority of synapses in close proximity to their own column. Since many neurons span more than 968 one layer in a neuropile, or even multiple neuropiles, we first group all synapses per neuron into clusters, 969 and then assign the center-of-mass of these clusters to one of up to _N_ = 5 super-clusters (approximately 970 matching the medulla, lobula and lobula plate). Clustering is done via k-means with the ideal number of 971 clusters determined by silhouette scores. The super-clusters allow to project 3D synapse coordinates onto a 972 retinotopic 2D hexagonal lattice with a simple projection and affine transformation. 

973 **Hybrid cost-model for neuron-position likelihood estimates.** Prior knowledge about the normal dis974 tribution ( _µs,t,_ ( _y,x_ ), _σs,t,_ ( _y,x_ )) of expected synapse counts between neurons from existing annotations is 975 required to express the probability of any cell specimen _c_ to be located at position ( _y, x_ ). This metric cor976 relates a neuron to all pre- and postsynaptic neurons it is connected to, of which some already have a fixed, 977 known position. Thereby, the neighbouring neurons with known position (in _K_ and _A_ ) contribute to stabilize 

43 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

|Referencepositions|1.0<br>0.9<br>0.8<br>0.7<br>0.6<br>0.5<br>0.4<br>0.3<br>0.2<br>0.1|average|
|---|---|---|
|Recovery rate<br>Recovery rate delta<br>Consistency rate<br>Consistencyrate delta|**0.870**<br>0.849<br>0.820<br>0.807<br>0.790<br>0.754<br>0.730<br>0.707<br>0.669<br>0.643<br>0.020<br>0.029<br>0.013<br>0.017<br>0.036<br>0.024<br>0.023<br>0.039<br>0.025<br>0.790<br>0.728<br>0.701<br>0.682<br>0.638<br>0.609<br>0.552<br>0.546<br>0.480<br>0.062<br>0.027<br>0.019<br>0.044<br>0.029<br>0.057<br>0.006<br>0.066|**0.025**<br>**0.039**|



Table 1: Recovery and consistency of columnar cell position estimation. 

978 the probabilities of unassigned neurons (in set _U_ ). For columnar, spatially repeated neurons, we can also 979 assume that only one neuron per position is present. This prior rapidly discounts the number of possible 980 positions an unassigned neuron can have, each time another neuron becomes assigned (moves from _U_ to _A_ ). 

**Fusion of sepratately evaluated datasets.** Since FIB-19 and FIB-25 are evaluated separately, we have to combine the estimated parameters of both models to a single, coherent model. The datasets overlap partially, in terms of the neurpoiles and cell types covered, and our method therefore fuses the model by always taking the larger estimated parameter. 

**==> picture [315 x 17] intentionally omitted <==**

981 This method of model fusion only underestimates the number of synapses between two neurons if they have 982 connections in two different neuropiles, and if each neuropile is exclusively covered by only one dataset. 

**Pruning spurious synapses.** Some automatic annotations, which are not proof read in the FlyEM DVID data, contain a large number of autapses per neuron on most neuron types, arising from wrongly detected synapses in the cell bodies themselves. Additionally, there are many statistically insignificant single synapses left from the assignment algorithm. We imposed the following additional filter on our estimated model parameters, to remove both autapses and spurious connections with less than one synapse on average. 

**==> picture [344 x 48] intentionally omitted <==**

983 Finally, neuron types without connections and synapses with either missing target or source can be 984 removed. The resulting mean synapse counts _µs,t,_ ( _y,x_ ) form the convolutional filters for our simulation. 

|Pos. removed[%]|0<br>10<br>20<br>30<br>40<br>50<br>60<br>70<br>80<br>90<br>100|
|---|---|
|Reference positions<br>Combined<br>FIB-25<br>FIB-19<br>Combined (annotated)<br>FIB-25 (annotated)<br>FIB-19(annotated)|830<br>747<br>664<br>581<br>498<br>415<br>332<br>249<br>166<br>83<br>0<br>1801<br>1459<br>1305<br>1346<br>1248<br>1152<br>1229<br>1081<br>972<br>944<br>0<br>702<br>592<br>573<br>566<br>538<br>509<br>491<br>464<br>445<br>399<br>0<br>1099<br>867<br>732<br>780<br>710<br>643<br>738<br>617<br>527<br>545<br>0<br>721<br>708<br>694<br>684<br>658<br>643<br>626<br>576<br>566<br>499<br>0<br>393<br>387<br>379<br>375<br>360<br>353<br>339<br>307<br>304<br>272<br>0<br>328<br>321<br>315<br>309<br>298<br>290<br>287<br>269<br>262<br>227<br>0|



Table 2: Results of the probabilistic model construction. 

44 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

**==> picture [468 x 321] intentionally omitted <==**

**----- Start of picture text -----**<br>
A FIB-19 synapse center-of-mass superclusters B FIB-25 synapse center-of-mass superclusters<br>C FIB-19 Mi10 cell and synapse projections D FIB-25 T4a cell and synapse projections<br>**----- End of picture text -----**<br>


Supplementary Figure 1: **(A)** FIB-19 synapse center-of-mass superclusters. The clusters form two strata in the medulla (ME), and in the lobula (LO) and lobula plate layers (LOP, 1-4) additionally. Each dot corresponds to the center-ofmass of all synapses belonging to the super-cluster. Typically, each diverging arborization of a cell becomes a distinct location, which helps our probabilistic model to project 3D positions of synapses into retinotopic 2D planes, despite the lobula having a different spatial orientation (perpendicular) than the medulla and lobula (Fig. 1a and c). **(B)** FIB25 synapse center-of-mass superclusters. The clusters form two strata (ME) in the medulla. **(C)** Mi10 cell type in FIB-19 with no pre-annotated lattice positions. The seven cell specimen (hexagons) are recovered by our probabilistic algorithm. Individual synapses and synapse center-of-mass projections are superimposed. **(D)** T4a cell type in FIB-25 with eight pre-annotated (an) and two recovered (al) lattice positions. The projected synapse positions show directional displacement consistent with the direction selectivity of T4a cells (Fig. 3a). 

**==> picture [282 x 167] intentionally omitted <==**

**----- Start of picture text -----**<br>
2000<br>1750<br>1500 Reference positions<br>Combined<br>1250<br>FIB-25<br>1000 FIB-19<br>Combined (annotated)<br>750<br>FIB-25 (annotated)<br>500 FIB-19 (annotated)<br>250<br>0<br>0 20 40 60 80 100<br>Known positions removed [%]<br>positions<br>Matching<br>**----- End of picture text -----**<br>


Supplementary Figure 2: Results of the probabilistic model construction. 

45 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

## 985 **Supplementary Note 2 Manually constructed connectome** 

986 **Lamina and ommatidia model** Since neither FIB-19 nor FIB-25 contain the connections of the omma987 tidia or first neuropile, the lamina[48,68] , we reused and refined the existing hand-crafted model from our 988 previous work[119] , which is based on data from Rivera-Alba _et al._[50] and Tuthill _et al._[124,125] . 

989 **Non-columnar single CT1 cell model** While we did in general not model any neurons with large tan990 gential branches, such as Mt, Mt, Pm, Dm, which span many columns and are therefore insufficiently 991 segmented in FIB-19 and FIB-25, we did model the single CT1 cell present in the lobula CT1(Lo1) and 992 medulla CT1(M10)[49] . Because a multi-compartment model with bidirectional electrical synapses resulted 993 often in oscillatory dynamics in earlier modeling attempts and because CT1 terminals were found to act as 994 functionally independent units[70] we modelled CT1 as two anatomically separate cell types CT1(Lo1) and 995 CT1(M10). 

996 **Non-columnar periodic cells** Because lamina-wide-field neurons, Lawf1 and Lawf2, do not occur in each 997 individual column but more sparsely, we modeled them with an inferred spatial stride to occur more sparsely 998 resulting in 123 cell of each type in our model (there are approx. 140 Lawf2 neurons per optic lobe, and 999 each of approx. 700 columns is innervated by approx. 5 Lawf2 cells[124] ). 

1000 **Hexagonal lattice rendering of connectome** For compilation into the hexagonal grid, the convex hull of 1001 the filters is filled with ones to remove spatial discontinuities. Although these are considered mostly false 1002 positives from the connectome reconstruction[12] , this allowed for weak autapses in our hexagonal model that 1003 did not affect the tuning predictions. 

1004 **Additional proofreading** We manually proofread filters on the hexagonal lattice and compared them to 1005 the reported filters in the literature to ensure overall correspondence. We found that the reconstruction did 1006 not fully capture the asymmetry reported in[48] of the T5 anatomical receptive field of Tm9, which we then 1007 substituted by a Gaussian at the reported offset column scaled by the reported number of input synapses. For 1008 few T4 and T5 inputs the number of input synapses reported in the literature[48] slightly deviated from our 1009 reconstruction. To get a better initialization of our filter scale we scaled them to closely match the number 1010 of input synapses reported[48] . 

46 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

## 1011 **Supplementary Note 3 Investigating the role of sparse connectivity with** 1012 **synthetic networks for MNIST digit recognition** 

1012 

**Training feedforward synthetic networks** The weight matrix for each layer in Dale’s-law-based synthetic networks (DLTrues) is decomposed into three components: binary adjacency matrix, non-negative weight magnitudes, and a sign vector. 

**==> picture [223 x 12] intentionally omitted <==**

**==> picture [190 x 11] intentionally omitted <==**

**==> picture [269 x 11] intentionally omitted <==**

**==> picture [97 x 11] intentionally omitted <==**

1013 By means of projected gradient descent, _W_ DLTrue is enforced to be non-negative and is initialized from 1014 the absolute value of the He initialization distribution[140] . Although sign vector **s** DLTrue is randomly initial1015 ized with equal probability to be either -1 or +1 to represent inhibitory and excitatory synapses respectively, 1016 its elements are allowed to assume values in R over the course of training. 

1017 **Inducing sparsity** Binary adjacency matrix _C_ DLTrue is initialized to be a unit matrix and is later updated 1018 according to the desired true network connectivity level. Following the LTH algorithm, a portion of the 1019 lowest-magnitude weights, designated to be pruned, were identified from _W_ DLTrue _⊙_ [ **1** _⊗_ **s** DLTrue]. For 1020 pruning synapses, the corresponding entries in the adjacency matrix _C_ DLTrue were then set to zero. After 1021 each pruning iteration, weight magnitudes were reset back to their original initialization, followed by a final 1022 training run post-pruning. 

**Training with/without sign constraints** In addition to a Dale’s-law-based sign constraint, we also experimented with networks trained without any sign constraint. No restrictions were imposed on the nature of outgoing synapses i.e., a neuron can have both excitatory and inhibitory outgoing synapses. For true network variants trained without a sign constraint, **1** _⊗_ **s** DLTrue was simply replaced by a sign matrix _S_ nonDLTrue initialized in a similar fashion; that is, all entries were initialized to be in _{−_ 1 _,_ +1 _}_ with equal probability. We will refer to true networks trained without a sign constraint as nonDLTrues. 

**==> picture [254 x 11] intentionally omitted <==**

**==> picture [204 x 12] intentionally omitted <==**

**==> picture [283 x 11] intentionally omitted <==**

**==> picture [115 x 11] intentionally omitted <==**

**Training simulated networks** As elements in a true network’s **s** DLTrue or _S_ nonDLTrue are allowed to assume values in R while training, only the signs of these elements are inherited by the true networks’s respective simulated network. 

**==> picture [322 x 63] intentionally omitted <==**

47 

bioRxiv preprint doi: https://doi.org/10.1101/2023.03.11.532232; this version posted March 13, 2023. The copyright holder for this preprint (which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is made available under aCC-BY 4.0 International license. 

_W_ nonDLSimulated = _C_ nonDLTrue _⊙ W_ nonDLSimulated _[′][⊙][S]_ nonDLTrue _[′][,]_ where _C_ nonDLTrue = binary adjacency matrix from corresponding NonDLTrue, _W_ nonDLSimulated _[′]_[=][ non-negative weight magnitudes of simulated network,] _S_ nonDLTrue _[′]_[=][ signs of elements in] _[ S]_[nonDLTrue] 

1023 Extended Data Fig. 9 A shows median hidden-layer tuning correlations for networks trained with and 1024 without Dale’s law sign constraint for three different architectures. 

**Training simulated networks that had access to weight magnitudes** Three levels of multiplicative noise _σ_ = 0 _._ 1 _,_ 0 _._ 25 _,_ 0 _._ 5 were explored, inducing low-noise, medium-noise, and high-noise weight estimates, respectively. Each noise level represents the maximum percentage by which a weight magnitude could be perturbed. 

**==> picture [196 x 28] intentionally omitted <==**

Simulated networks were trained with a Gaussian prior on the weights centered around the noisy initialization. In effect, this additional loss term penalizes trainable weights for deviating from their noisy initialization. 

**==> picture [340 x 16] intentionally omitted <==**

1025 Fig. 9B shows median hidden-layer tuning correlations for networks with low-, medium-, and high-noise 1026 weight perturbations. 

1027 **Sparse networks have larger local minima.** We inspected the size of the simulated networks’ local min1028 ima by analyzing how well they converged when initialized from a perturbed local optimum. Response 1029 tuning correlation in this context was used to quantify efficacy of convergence. After training the connec1030 tome simulations on the same handwritten digit classification task, we found that sparser networks were able 1031 to recover function even from highly-perturbed network initializations. By virtue of weight pruning, as the 1032 number of free parameters in the true network (and hence simulated network) are reduced, we believe that 1033 the size of the simulations’ local minima increase, allowing sparser simulated networks to converge even 1034 when initialized far from optimum. 

1035 Simulated networks were initialized with a noisy version of their respective true network’s weights. 1036 Three varying levels of multiplicative noise ( _σ_ = 0 _._ 1 _,_ 0 _._ 25 _,_ 0 _._ 5) were used to perturb the simulations’ local 1037 minima. 

1038 Extended Data Fig **??** shows median hidden-layer tuning correlations at initialization distances of _σ_ = 1039 0 _._ 1 _,_ 0 _._ 25 _,_ 0 _._ 5 for networks with 128, 256, and 512 neurons per hidden layer, respectively. 

48 

