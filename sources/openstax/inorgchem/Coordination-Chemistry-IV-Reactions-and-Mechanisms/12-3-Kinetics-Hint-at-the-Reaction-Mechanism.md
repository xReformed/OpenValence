---
title: "12.3: Kinetics Hint at the Reaction Mechanism"
book: "Inorganic Chemistry (LibreTexts)"
chapter: "12: Coordination Chemistry IV - Reactions and Mechanisms"
source_url: "https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Inorganic_Chemistry_(LibreTexts)/12%3A_Coordination_Chemistry_IV_-_Reactions_and_Mechanisms/12.03%3A_Kinetics_Hint_at_the_Reaction_Mechanism"
author: "Khaas"
license: "CC BY-NC 4.0"
---

Since the different mechanisms have different rate-limiting steps, there are kinetic consequences for each type of mechanism. We can use kinetic data, therefore, to help distinguish the mechanism of a reaction. However, the information gleaned from rate laws alone can be ambiguous. For example, what does it mean if a reaction depends on the concentration of incoming ligand? How can we distinguish between an associative mechanism (A), and an associatively-activated dissociative mechanism (Da?

[Note: corrected; the source prints "We can used" where this reads "We can use"; the source prints "depends on on the" where this reads "depends on the". Typing errors.]

12.3.1: Rate Law for Dissociative Mechanisms

12.3.2: Rate Laws for Interchange Mechanisms

12.3.3: Rate Law for Associative Mechanisms

12.3.4: Preassociation Complexes

12.3.5: Activation Parameters

12.3.6: Some Reasons for Differing Mechanisms

## 12.3.1: Rate Law for Dissociative Mechanisms

### Derivation of the Rate Law

[Note: corrected; the source prints "Derrivation" where this reads "Derivation". A typing error.]

A Dissociative (D) mechanism is two steps in which the first step is the dissociation of a ligand. The intermediate, MLn, has a lower coordination number than that of the reactant, MLnX.



| Step 1 (Dissociation): | MLnX ⇌ (k1, k-1) MLn + X |
| --- | --- |
| Step 2 (Association): | MLn + Y ⇌ (k2, k-2) MLnY |
| Overall Reaction: | MLnX + Y ⇌ MLnY + X |



If we assume that k_−2 ≪ k2, the rate law for the formation of products is the rate law of the second step.

(d[MLnY])/dt = k2[MLn][Y]

[Note: corrected; the source prints "(d[MLn])/dt = k2[MLn][Y]" where this reads "(d[MLnY])/dt = k2[MLn][Y]". This is the rate of forming the product, MLnY, as the sentence before says and as the rate law below uses.]

We can assume that the concentration of the intermediate is small enough that it would be difficult or impossible to measure its concentration. Here, we can evoke the steady-state approximation and assume that the concentration, [MLn], is approximately unchanging over the course of reaction. The [MLn] depends on k1, k_−1 and k2. These assumption are expressed mathematically as follows. (d[MLn])/dt = k1[MLn X]−k_−1[MLn][X]−k2[MLn][Y] = 0

We can then use the equation above to solve for [MLn].

MLn = (k1[MLn X])/(k_−1[X] + k2[Y])

Then substitution this into the rate law given above for the second step of the mechanism. This would yield a rate law that depends only on species with measurable concentrations.

(d[MLn Y])/dt = (k2 k1[MLn X][Y])/(k_−1[X] + k2[Y])

The rate law above suggests that the rate of product formation has an inverse relationship to the concentration of the outgoing ligand, X. This is one piece of evidence that can be used to distinguish a Dissociative mechanism; that is if the rate of reaction decreases as [X] in solution is increased it is evidence of a D mechanism. This rate law also suggests that there is a complicated dependence of the reaction rate on the concentration of incoming ligand, Y. The importance of [Y] compared to [X] depends mathematically on the weight of the two values in the denominator of the rate law. If [X] >> [Y], then a valid approximation is to assume that the k2[Y] term is relatively small and simplify the rate law by dropping it out completely.

[Note: corrected; the source prints "that ther is" where this reads "that there is"; the source prints "mathmatically" where this reads "mathematically"; the source prints "demoninator" where this reads "denominator". Typing errors.]

If X ≫ Y, then simplify: (d[MLn Y])/dt = (k2 k1[MLn X][Y])/(k_−1[X])

The resulting rate law (above) has a simpler dependence on [Y]; that is when [X] is large, the reaction rate is directly related to [Y].

The opposite extreme is under conditions of high [Y]. This yields a rate law that is first order in its dependence on the reactant metal complex. When [Y] is large, and the k_−1[X] term is relatively insignificant, the rate law can be simplified to the pseudo-first order rate law as follows.

If Y ≫ X, then simplify: (d[MLn Y])/dt = k1[MLnX]

The best type of experimental evidence to determine a dissociative mechanism would be a systematic study of the dependence of rate on both [X] and [Y]. However, the dissociative reaction is unique in that it displays this type of saturation kinetics at high concentration of the incoming ligand, and so the study of how a reaction rate behaves under high [Y] is common.

[Note: corrected; the source prints "concnetration" where this reads "concentration". A typing error.]

### First-order reactions

Under conditions of high [Y], the a reaction following a D mechanism is said to follow "first order" kinetics. This type of reaction is sometimes called a first order reaction. That means the rate law depends on only one concentration term.

Why does the dissociative mechanism depend on concentrations in this specific way?

The rate depends on one molecule losing a ligand. Once it does so, a second ligand can replace the one that left. However, losing a ligand may be harder to do than gaining a new one. To lose a ligand, a bond must be broken, which costs energy. To gain a new ligand, a bond is made, releasing energy. That first step is harder to do, so it takes longer. It is a bottleneck that slows the reaction down. It is called the rate-determining step.

- The rate-determining step is the slow step of the reaction.
- The rate-determining step controls the rate of the overall reaction; everything else has to wait for that step to happen.
- Once the rate-determining step has occurred, everything else follows very quickly.

Figure 12.3.1.1: A bottleneck in a reaction. If the reaction must wait for the white molecule to dissociate, it doesn't matter how many black molecules there are; the reaction still goes just as slow. However, the more white molecules there are, the more frequently they will be able to react with the black molecules as dissociation occurs.

No collision is necessary for the metal complex to lose a ligand. Instead, a bond in the metal complex has to break. That just takes time and energy. As a result, concentration of the incoming ligand matters very little.

We should think a little more about energy requirements, available energy and reaction rate. It takes a certain amount of energy to break a bond. Over any given period of time, a specific amount of energy is available in the surroundings to use. That energy is not available uniformly. Some molecules will get more energy from their surroundings and others will get less. There will be a statistical distribution, like a bell curve, of energy available in different molecules. That means bond-breaking events are governed by statistics.

[Image not described in source]

Figure 12.3.1.2: The relationship between temperature, energy available, and energy barrier. The black line represents energy needed to start the reaction, also called the energy barrier or the activation barrier. The blue curve is the distribution of available energy in a group of molecules at a cooler temperature. The yellow curve is for a group of molecules that is a little warmer, and the red curve even warmer.

In figure 12.3.1.2, most of the molecules at the low temperature (blue) do not have enough energy to begin the reaction. A small portion do, and so the reaction will proceed, but very slowly. In the yellow curve, there is more energy available, and so a large fraction of molecules have the energy necessary to begin the reaction. In the red curve, the vast majority have sufficient energy to react. Thus, one of the factors governing how quickly a reaction will happen is the energy needed, or activation barrier. A second factor is the energy available, as indicated by the temperature.

Of course, even if there is enough energy for the reaction, the reaction might not occur yet. Energy is necessary but not sufficient to start a reaction. There are also statistical factors in terms of whether a molecule has its energy allotted into the right places, or in some cases, whether two molecules that need to react together are oriented properly.

Suppose at a given temperature it takes a specific amount of time for half the molecules to gain enough energy so that they can undergo the reaction. That amount of time is called the half life of the reaction. After one half life, half the molecules have reacted and half remain. After a second half life, half the remaining molecules (another quarter, for three quarters of the original material in all) have also reacted, and a quarter still remain. After a third half life, half the remaining ones (another eighth, making it seven eighths reacted in total) will have reacted, leaving an eighth of the original material behind.

- Exponential decay is based on a statistical distribution of energy availability.
- The concept of half life is related to exponential decay.
- It takes a fixed period of time for a half of the metal complex obtain enough energy to dissociate.

Thus, the time it takes for the reaction to happen does not really depend on the concentration of anything.

However, the change in concentration over time -- the quantity that we can usually measure most easily -- depends on the original concentration, and for that reason the concentration of the metal complex appears in the rate law.

[Image not described in source]

Figure 12.3.1.3: The reactions in the top row and bottom row are proceeding with the same half-life as we move from left to right. However, the top row starts out more concentrated than the bottom row. As a result, the concentrations in the top row are changing more quickly than in the bottom row.

Suppose the half life for a particular case of ligand substitution is one second. After a half life, a 1 M solution becomes 0.5 M, so the rate of change in concentration per time is 0.5M/s. But after the same half life, a 0.5 M solution becomes 0.25 M, so the change in concentration is 0.25 M/s.

#### Exercise 12.3.1.1

If a first order reaction has a half-life of 120 seconds, how much of the original material is left after

a) four minutes? b) six minutes? c) eight minutes? d) ten minutes?

**Answer a**

4 minutes = 240 seconds = 2 x 120 second = 2 half lives.

Material left = 50% x 50% = 0.5 x 0.5 = 0.25 = 25% left

**Answer b**

6 minutes = 360 seconds = 3 x 120 second = 3 half lives.

Material left = 0.5 x 0.5 x 0.5 = 0.125 = 12.5% left

**Answer c**

8 minutes = 480 seconds = 4 x 120 second = 4 half lives.

Material left = 0.5 x 0.5 x 0.5 x 0.5 = 0.0625 = 6.25% left

**Answer d**

10 minutes = 600 seconds = 5 x 120 second = 5 half lives.

Material left = 0.5 x 0.5 x 0.5 x 0.5 x 0.5 = 0.03125 = 3.125% left

#### Exercise 12.3.1.2

Given the first-order dissociative rate law above, what would happen to the reaction rate for substitution in each of the following cases?

a. the concentration of ligand is doubled, and the concentration of metal complex is doubled
b. the concentration of ligand is tripled, and the concentration of metal complex is halved
c. the concentration of ligand is doubled, and the concentration of metal complex is tripled
d. the concentration of ligand is halved, and the concentration of metal complex is halved

**Answer a**

Dissociative Rate Law: Rate = [ML_n], if ML_n is the complex. There is no dependence on [X], if X is the new ligand.

Rate will double: Rate = 2 x [ML_n]0, if [ML_n]0 is the original concentration.

**Answer b**

Rate will be halved: Rate = 0.5 x [ML_n]0.

**Answer c**

Rate will triple: Rate = 3 x [ML_n]0.

**Answer d**

Rate will be halved: Rate = 0.5 x [ML_n]0.

#### Exercise 12.3.1.3

Plot graphs of initial rate vs concentration to show what you would see in dissociative substitution.

a) The concentration of metal complex, [ML_n], is held constant at 0.1 mol/L and the concentration of ligand is changed from 0.5 mol/L to 1 mol/L and then to 1.5 mol/L.

b) The concentration of new ligand, [X], is held constant at 0.1 mol/L and the concentration of metal complex is changed from 0.5 mol/L to 1 mol/L and then to 1.5 mol/L

#### Exercise 12.3.1.4

Given the following sets of initial rate data, determine whether each case represents a dissociative substitution. [MLn] = concentration of the coordination complex; [X] = concentration of incoming ligand.

a)

[Image not described in source]

[Image not described in source]

b)

[Image not described in source]

**Answer a**

The rate increases with both concentration of metal complex and incoming ligand. This looks like an associative mechanism.

**Answer b**

The rate depends on concentration of the metal complex, but not the incoming ligand. This looks like a dissociative mechanism.

**Answer c**

The rate depends on the concentration of incoming ligand, but not the metal complex. Whatever is going on here, it isn't a simple dissociative mechanism.

[Image not described in source]

#### Exercise 12.3.1.5

In the following data, the concentration of the metal complex and the incoming ligand were held constant, but more of the departing ligand was added to the solution.

[Image not described in source]

a) Explain what the data says about rate dependence on this concentration.

b) Explain this rate dependence in terms of the reaction.

**Answer a**

The rate of the reaction is depressed when the concentration of the departing ligand is increased.

**Answer b**

This dependence could indicate an equilibrium in the dissociative step. The more departing ligand is added, the more the equilibrium is pushed back towards the original metal complex. With less dissociated metal complex around, the entering ligand cannot form the new complex as quickly.

#### Exercise 12.3.1.6

In certain solvents, such as THF, acetonitrile and pyridine, the rate law for substitution often appears to be Rate = k1[ML_n] + k2[ML_n][X], in which X is the incoming ligand and ML_n is the metal complex.

a) What do these solvents have in common?

b) What is a possible explanation for this rate law?

c) This rate law has been shown to be consistent with an entirely associative mechanism. How is that possible?

**Answer a**

These solvents all have lone pairs. They could be Lewis bases or nucleophiles.

**Answer b**

It looks like two competing mechanisms. One term suggests a dissociative mechanism, whereas the other term suggests an associative mechanism. They could be happening in competition with each other.

[Note: corrected; the source prints "On term suggests a dissociative mechanism, whereas the other term suggests a dissociative mechanism" where this reads "One term suggests a dissociative mechanism, whereas the other term suggests an associative mechanism". The first-order term k1[MLn] is the dissociative one and the second-order term k2[MLn][X] the associative one; also a typing error.]

**Answer c**

On the other hand, it could be that there is one mechanism with two different nucleophiles. If the incoming ligand is the nucleophile, the term on the right shows up in the rate law. If the solvent is the nucleophile, forming a third complex, the term on the left shows up in the rate law. That's because we would typically change the amount of metal complex and the amount of ligand that we add to the solution in order to determine the rate law, but we wouldn't normally be able to change the concentration of the solvent, so it would be a constant. (How could you confirm this explanation in an experiment?)

## 12.3.2: Rate Laws for Interchange Mechanisms

Interchange (I) Mechanisms take place in one concerted step where there is no intermediate, or the intermediate is elusive. The reaction essentially occurs in one step in which bond forming and bond breaking is concerted, as shown below. The species, [Y···MLn···X]^‡, can be defined as either a transition state or a very short-lived intermediate.

[Note: corrected; the source prints "The reactio nessentially occurs in once step" where this reads "The reaction essentially occurs in one step". Typing errors.]

Step 1 (Concerted): MLnX + Y ⇌ [Y···MLn···X]^‡ ⇌ (k1, k-1) MLnY + X

[Note: corrected; the source prints "^‡+ ⇌" where this reads "^‡ ⇌". A stray + follows the transition state; there is no third species.]

The rate law of this one-step reaction depends on whether the relative rates of the forward and reverse reactions. When the reaction is practically irreversible, then the rate depends only on the formation of product, and not its reaction to re-form reactant. In this case, the rate law is a simple second-order rate law.

[Note: corrected; the source prints "its reaction to re-form product" where this reads "its reaction to re-form reactant". The reverse reaction re-forms the reactant, as the next paragraph says.]

(d[MLnY])/dt = k1[MLnX][Y]

On the other hand, if the rate of re-formation of reactant is significant, then the rates of forward and reverse reactions must be considered in the rate law.

(d[MLnY])/dt = k1[MLnX][Y]−k_−1[MLnY][X]

[Note: corrected; the source prints "k_−1[MLnX][X]" where this reads "k_−1[MLnY][X]". The reverse reaction is MLnY + X, so its rate is k−1[MLnY][X].]

In the latter case where there is a dependence of rate on both [X] and [Y], an effective strategy is to employ the condition where solution concentration of both [X] and [Y] are simultaneously high so that the reaction is effectively a competition of two pseudo-first order reactions that depend primarily on the metal complex concentrations. In such a case as this, another helpful piece of information is the equilibrium constant for the reaction (K = (k1)/(k_−1)). The rate law is written below.

When [X] and [Y] are very high: (d[MLnY])/dt = k1[MLnX]−k_−1[MLnY] = −(d[MLnX])/dt

[Note: corrected; the source prints "= k1[MLnY]−k_−1[MLnX] =" where this reads "= k1[MLnX]−k_−1[MLnY] =". The forward term depends on the reactant MLnX and the reverse term on the product MLnY, as in the rate law above.]

One distinguishing feature of an I mechanism compared to a D mechanism can be determined from such an experiment under high concentration of X and Y. In the case of a D mechanism and sufficiently high concentration of incoming ligand, [Y], the reaction demonstrates saturation kinetics to give a pseudo-first order rate law depending only on the concentration of reactant metal complex. In the case of I, the reaction rate is not a simple first order rate law because even under high [Y] and [X], there is a dependence of rate on concentration of the product complex.

[Note: corrected; the source prints "demonstrations" where this reads "demonstrates". A typing error.]

Reactions that are Ia or Id are distinguished by the relative strength of the M-X and M-Y bond in the transition state. These reactions can be distinguished by varying the Identities of X and Y to determine how the reaction rate depends on identity of X and Y. If there is a large dependence on the incoming ligand, and less so on the outgoing ligand, it could be classified as an Ia mechanisms. The opposite is also true.

## 12.3.3: Rate Law for Associative Mechanisms

Associative (A) mechanisms involve a first step where the incoming ligand bonds to the metal ion, creating an intermediate, MLnXY, with a higher coordination number than that of the reactant, MLnX.



| Step 1 (Association): | MLnX + Y ⇌ (k1, k-1) MLnXY |
| --- | --- |
| Step 2 (Dissociation): | MLnXY ⇌ (k2, k-2) MLnY + X |
| Overall Reaction: | MLnX + Y ⇌ MLnY + X |



To determine the rate law, we can use a similar process as we followed for D mechanisms, which are also two steps. Assuming that k2 ≫ k_−2, the rate of formation of product from the second step is: (d[MLnY])/dt = k2[MLnXY]

The steady state approximation allows us to assume that the intermediate is in low concentration (too low to be reliably measured) and that it is unchanging. We can use the rate law for the first step to find [MLnXY] in terms of species that can be reliably measured.

(d[MLnXY])/dt = k1[MLnX][Y]−k_−1[MLnXY]−k2[MLnXY] = 0

...solving this first-step rate law for [MLnXY] gives [MLnXY] = (k1[MLnX][Y])/(k_−1 + k2)

And then substitution [MLnXY] into the rate law for the second step, and let k = (k1 k2)/(k_−1 + k2) to gives the overall rate law below.

(d[MLnY])/dt = (k1 k2[MLnX][Y])/(k_−1 + k2) = k[MLnX][Y]

This overall rate law is second order, and first order with respect to each of the reactants. This means that there is a direct (linear) relationship between concentration of either reactant and the rate of reaction.

Why does the associative mechanism depend on concentrations in this specific way?

This is a case of two molecules coming together. If both compounds are dissolved in solution, they must “swim around” or travel through the solution until they bump into each other and react. The more concentrated the solution is, or the more crowded it is with molecules, the more likely are the reactants to bump into each other. If we double the amount of new ligand in solution, an encounter between ligand and complex becomes twice as likely. If we double the amount of metal complex in solution, an encounter also becomes twice as likely.

Figure 12.3.3.1: The effect of concentration on collision probability. In the first beaker, there is a chance that a black molecule and white molecule will meet and react together. The chance of a meeting is much higher in both the second beaker, where there are lots more black molecules, and in the third beaker, where there are many more white molecules.

[Image not described in source]

#### Exercise 12.3.3.1

Given the associative rate law above, what would happen to the reaction rate for an associative substitution in the following cases?

a. the concentration of ligand is doubled, and the concentration of metal complex is doubled
b. the concentration of ligand is tripled, and the concentration of metal complex is doubled
c. the concentration of ligand is tripled, and the concentration of metal complex is tripled
d. the concentration of ligand is halved, and the concentration of metal complex is doubled

**Answer a**

Associative Rate Law: Rate = [MLn][X], if ML_n is the complex and X is the new ligand.

Rate will quadruple: Rate = (2 × [MLn]0) × (2 × [X]0) = 4 × [MLn]0[X]0, if [X]0 and [ML_n]0 are the original concentrations.

**Answer b**

Rate will sextuple: Rate = (3 × [MLn]0) × (2 × [X]0) = 6 × [MLn]0[X]0.

**Answer c**

Rate will nonuple: Rate = (3 × [MLn]0) × (3 × [X]0) = 9 × [MLn]0[X]0.

**Answer d**

Rate will stay the same: Rate = (0.5 × [MLn]0) × (2 × [X]0) = 1 × [MLn]0[X]0.

#### Exercise 12.3.3.2

Plot graphs of initial rate vs. concentration to show what you would see in associative substitution.

a) The concentration of new ligand, [X], is held constant at 0.1 mol/L and the concentration of metal complex is changed from 0.5 mol/L to 1 mol/L and then to 1.5 mol/L.

b) The concentration of metal complex, [ML_n], is held constant at 0.1 mol/L and the concentration of ligand is changed from 0.5 mol/L to 1 mol/L and then to 1.5 mol/L.

**Answer**

[Image not described in source]

#### Exercise 12.3.3.3

In the previous problem, the experiment was run in a particular way for particular reasons.

a) Why was one concentration held constant while the other one was changed? Why not change both?

b) Why does the graph report "initial rate" -- just the rate at the very beginning of the reaction?

**Answer a**

Changing both concentrations at once would leave some doubt about whether one concentration had affected the rate, or the other concentration, or both. In practice, one concentration is usually held constant while the other is kept in excess and varied.

**Answer b**

Rate changes over time because the concentrations of reactants change as they are consumed. By reporting only the initial rate (usually meaning less than 5% or 10% complete, but possibly even less than that if a lot of data can be gathered very quickly), the concentrations are still about what you started with. That means you can report a rate that corresponds to a given concentration with confidence.

#### Exercise 12.3.3.4

Given the following sets of initial rate data (rates measured at the beginning of a reaction), determine whether each case represents an associative substitution.

a)

[Image not described in source]

b)

[Image not described in source]

c)

[Image not described in source]

d)

**Answer a**

The rate would change with the ligand concentration if associative. This rate is constant over a range of ligand concentrations, so the reaction is not associative.

**Answer b**

The rate increases linearly with ligand concentration. This reaction proceeds via an associative mechanism.

**Answer c**

The rate changes over the concentration range, but it decreases. This is the opposite of what should happen. This reaction does not follow a simple associative pathway.

**Answer d**

The rate increases linearly with ligand concentration. This reaction proceeds via an associative mechanism.

[Image not described in source]

#### Exercise 12.3.3.5

What information can be gained from the slopes of lines in Exercise 12.3.3.4 ?

**Answer**

Because Rate = k[MLn][L] is held constant while [L] is varied, then the slope of the line is k [ML_n]. Since you would know the value of [ML_n], you could obtain the rate constant from the quantity (slope/ [ML_n]).

Note that the rate law for an A mechanism, and a reversible I mechanism are of the same form: they are each first order with respect to each reactant. Thus, an unambiguous determination between the two is difficult because it would require detection of the intermediate, which exists only at a very low concentration.

## 12.3.4: Preassociation Complexes

Most octahedral complexes react through either an associative or dissociative interchange mechanism (Ia or Id). Although the rate laws should be different for these two cases, it is difficult to distinguish between them. The difficulty lies in the seemingly conflicting observations from experiments performed under limiting conditions of the incoming ligand. For example, in the case of the reaction of hexaaquochromium(III) ( [Cr(H2O)6] ) with ammonia ( NH3 ), the rate laws determined at high and low concentrations of the incoming ligand give different apparent rate laws. Under most conditions, the rate law appears to indicate an associative mechanism (ie the rate depends on [NH3]). But, at very high [NH3], the rate law appears to indicate a dissociative mechanism (ie rate is independent of the [NH3]).

[Note: corrected; the source prints "Under most conditions, the rate law appears to indicate a dissociative mechanism (ie rate is independent of the [NH3])" where this reads "Under most conditions, the rate law appears to indicate an associative mechanism (ie the rate depends on [NH3])"; the source prints "at very high [NH3], the rate law appears to indicate an associative mechanism (ie the rate depends on [NH3])" where this reads "at very high [NH3], the rate law appears to indicate a dissociative mechanism (ie rate is independent of the [NH3])". The Eigen-Wilkins rate law derived below is second order (dependent on [Y]) at low [Y] and first order (independent of [Y]) at high [Y]; the source has the two limits the wrong way round.]

This information might seem contradictory. However, it can be explained by the formation of a transient ion pair, usually called an encounter complex, in a step prerequisite to the rate-determining step(s). The Eigen-Wilkins Mechanism is based on this idea.

### The Eigen-Wilkins mechanism

The Eigen-Wilkins mechanism is also a rate law, and it governs the reactions of octahedral metal complexes. This mechanism does not define the rate-limiting step; rather, it defines the existence of a pre-equilibrium step (ie an initial step that is not rate-determining) that results in formation of an encounter complex. The encounter complex is a short-lived ion pair of the metal complex and the incoming ligand; it is an intermediate formed through Coulomb interactions. For the conversion of a generic metal complex, where X is the leaving group and Y is the entering group, the overall reaction, pre-equilibrium step, and formation of products from the encounter complex are shown below:



| | CHEMICAL EQUATION | EQUILIBRIUM EXPRESSION |
| --- | --- | --- |
| Formation of Encounter Complex | ML5X + Y ⇌ (k1, k-1) (ML5X*Y) | KE = ([(ML5X*Y)])/([ML5X][Y]) |
| Formation of Products: | (ML5X*Y) → (k2) ML5Y + X | K2 = ([ML5Y][X])/([(ML5X*Y)]) |
| Overall Reaction: | ML5X + Y ⇌ ML5Y + X | K = ([ML5Y][X])/([ML5X][Y]) |



### Fast pre-association

One possibility (that is most common) is that k1 and k − 1 are much larger than k2. In this case, the encounter complex forms quickly, and once it forms, it also can quickly fall apart to re-form the reactant complex. When k2 is relatively small then reaction of the encounter complex to form the product is the rate-determining step, and sometimes the concentration of encounter complex can be experimentally determined. However, it is rare that this is the case. A second, more common scenario is that k2 is also relatively large. Assuming that the formation of the encounter complex is still a fast step, then the rate still depends on the reaction of that encounter complex to form product. In either case, one path for deriving the rate laws is given below. The rate of formation of the product is defined by the second step:

[Note: corrected; the source prints "scenario iis" where this reads "scenario is". A typing error.]

Rate = (d[ML5Y])/dt = k2[(ML5X*Y)]

Although the encounter complex may exist in high enough concentration to be detected, that is rare and technically difficult. Rather, the concentration of the encounter complex can be determined by manipulation of the equilibrium constant expression and some helpful assumptions. The equilibrium constant for formation of the encounter complex is:

KE = ([(ML5X*Y)])/([ML5X][Y])

This can be rearranged to solve for concentration of the encounter complex.

[(ML5X*Y)] = KE [ML5X][Y]

...and we can re-write the rate expression to remove the encounter complex from the expression. But by doing so, we remove the problem of the unmeasurable encounter complex being in the expression, but add the problem of the reactant metal complex being part of the expression:

[Note: corrected; the source prints "experssion" where this reads "expression". A typing error.]

Rate = k2KE [ML5X][Y]

The problem is that we don't precisely know what the value of [ML5X]. We only know the total amount we initially added. But, we assume that k1 is large, and so the initial concentration of the metal complex may change immediately to produce some of the encounter complex. As long as k2 is relatively small, we can assume that the initial total concentration of metal complex at the start of reaction consists primarily of the reactant complex plus the encounter complex:

[M]total = [ML5X] +[(ML5X*Y)]

We can substitute XXX into XXX to remove the encounter complex from the expression, then rearrange to solve for the reactant metal ion concentration, [ML5X]:

[Note: The source leaves its equation references as XXX: the expression for [(ML5X*Y)] above is substituted into the one for [M]total. The text is left as printed.]

[M]total = [ML5X] + KE [ML5X][Y]

= [ML5X](1 + KE [Y])

[ML5X] = ([M]total)/(1 + KE [Y])

Now this allows us to do one more substitution into the rate expression to get the rate into terms of constants and solution concentrations that are known:

Rate = k2KE ([M]total[Y])/(1 + KE [Y])

This rate expression is complex, but can be simplified under extremely high or low concentrations of the incoming ligand, [Y].

High [Y]: If the reaction proceeds at high concentration of Y, then the denominator, 1 + KE [Y] becomes approximately KE [Y]. The expression is simplified to a first-order rate law under high [Y]:

[Note: corrected; the source prints "recation" where this reads "reaction". A typing error.]

Rate = k2KE ([M]total[Y])/(KE [Y]) = k2[M]total

This would allow determination of k2 because the rate could be directly observed by varying the concentration of [M]total at high [Y].

Low [Y]: If the reaction is run at very low [Y], then the denominator, 1 + KE [Y] becomes approximately 1. We can let the observed rate constant, k_obs = k2KE to get a simplified second-order rate law under very low [Y]:

Rate = k2KE[M]total[Y] = (d[ML5Y])/dt = k_obs[M]total[Y]

[Note: corrected; the source prints "Rate = k2KE ([M]total[Y])/(KE [Y]) =" where this reads "Rate = k2KE[M]total[Y] =". At low [Y] the denominator 1 + KE[Y] is about 1, as the sentence before says; the source repeats the high-[Y] expression.]

The observed rate constant can be measured experimentally, and KE can be determined theoretically (k_obs = k2KE)

## 12.3.5: Activation Parameters

The rate law shows how the rate of a reaction depends on concentrations of different species in solution. The proportionality constant, k, is called the rate constant. It contains other information about the energetic requirements of the reaction.

All reactions must overcome activation barriers in order to occur. The activation barrier is the sum of the energy that must be expended to get the reaction going. An activation barrier is often thought of, cartoonishly, as a hill the molecule has to climb over during the reaction. Once, there, it can just slide down the other side of the hill to become products. At the top of the hill, the molecule exists in what is called the "transition state". At the transition state, the structure is somewhere between its original form and the structure of the products.

Figure 12.3.5.1: The activation barrier for a ligand dissociation step.

The type of diagram shown in Figure 12.3.5.1 is sometimes called a "reaction progress diagram". It shows energy changes in the system as a reaction proceeds. One or more activation barriers may occur along the reaction pathways, as various elementary steps occur in the reaction. In the above case, it is easy to imagine the source of the energy barrier, because some energy must be expended to break the bond to ligand C.

[Note: corrected; the source prints "figure LS6.1" where this reads "Figure 12.3.5.1". The source's cross-reference is left over from another book.]

However, after that barrier is passed, energy is lowered again. This can happen for several reasons. Once C has separated from the metal complex, it is free to vibrate, tumble, roll and zip around all on its own. That means it can put its energy into any of those modes, independently of the metal complex. As a result, the entropy of the system increases. That lowers the overall "free energy" of the system. In addition, there may be some relief of crowding as the molecule changes from a four-coordinate complex to a three-coordinate complex, so strain energy is also lowered.

#### Exercise 12.3.5.1

Make drawings depicting the relationship between reaction progress and energy for the following cases:

a) a new ligand binds to a four-coordinate complex, forming a five coordinate complex.

b) a two-step process in which a new ligand binds to a four-coordinate complex, forming a five coordinate complex, and then an old ligand dissociates to form a new, four-coordinate complex.

The rate constant gives direct insight into what is happening at the transition state, because it gives us the energy difference between the reactants and the transition state. Based on that information, we get some ideas of what is happening on the way to the transition state.

The rate constant can be broken down into pieces. Mathematically, it is often expressed as

k = (RT/Nh)e^{−(ΔG‡)/RT}

In which R = the ideal gas constant, T = temperature, N = Avogadro's number, h = Planck's constant and Δ G^(‡) = the free energy of activation.

The ideal gas constant, Planck's constant and Avogadro's number are all typical constants used in modeling the behaviour of molecules or large groups of molecules. The free energy of activation is essentially the energy requirement to get a molecule (or a mole of them) to undergo the reaction.

Note that k depends on just two variables:

- Δ G^(‡) or the energy required for the reaction
- T or the temperature of the surroundings, which is an index of the available energy

The ratio of activation free energy to temperature compares the energy needs to the energy available. The more energy available compared to the energy needed, the lower this ratio becomes. As a result, the exponential part of the function becomes larger (since the power has a minus sign). That makes the rate constant bigger, and the reaction becomes faster.

The activation free energy is constant for a given reaction. It can be broken down in turn to:

ΔG^(‡) = ΔH^(‡) − TΔS^(‡)

in which Δ H^(‡) = activation enthalpy and Δ S^(‡) = activation entropy.

The activation enthalpy is the energy required for the reaction. The activation entropy deals with how the energy within the molecule must be redistributed for the reaction to occur. These two parameters can be useful in understanding events leading to the transition state.

For example, in ligand substitution, an associative pathway is marked by low enthalpy of activation but a negative entropy of activation. The low enthalpy of activation results because bonds don't need to be broken before the transition state, so it doesn't cost much to get there. That's favorable and makes the reaction easier. However, a decrease in entropy means that energy must be partitioned into fewer states. That's not favorable and makes the reaction harder. The reason the energy must be redistributed this way is that two molecules (the metal complex and the new ligand) are coming together to make one bigger molecule. They can no longer move independently of each other, and all of their combined energy must be reapportioned together, with a more limited range of vibrational, rotational and translational states to use for that purpose.

- Associative pathway: more bond making than bond breaking; lower enthalpy needs
- Associative pathway: two molecules must be aligned and come together; fewer degrees of freedom for energy distribution; decrease in entropy

On the other hand, the dissociative pathway is marked by a higher enthalpy of activation but a positive entropy of activation. The higher enthalpy of activation results because a bond must be broken in the rate determining step. That's not favorable. However, the molecule breaks into two molecules in the rate determining step. these two molecules have more degrees of freedom in which to partition their energy than they did as one molecule. That's favorable.

- Dissociative pathway: more bond breaking in rate determining step, higher enthalpy needs
- Dissociative pathway: one molecule converts to two molecules in rate determining step, greater degrees of freedom in two independently moving molecules, entropy increases

Thus, looking at the activation parameters can reveal a lot about what is going on in the transition state.

#### Exercise 12.3.5.2

What factor(s) other than entropy might raise the free energy of the transition state going into an associative step between a metal complex and an incoming ligand? (What factor might make the first, associative step slower than the second, dissociative step?)

**Answer**

The metal centre is becoming more crowded as the new ligand arrives, so an increase in energy owing to steric hindrance may also play a role in the transition state energetics.

#### Exercise 12.3.5.3

Other mechanisms for ligand substitution are also possible. The following case is referred to as an associative interchange (I_A).

[Image not described in source]

a) Describe in words what happens in an associative interchange.

b) Predict the rate law for the reaction.

c) Qualitatively predict the activation entropy and enthalpy, compared with

i) an associative mechanism and

ii) a dissociative mechanism.

**Answer a**

The new ligand, B, is arriving at the same time as the old ligand, A, is departing. We might also describe it as new ligand B pushing old ligand A out of the complex.

**Answer b**

Rate = k[ML5A][B], which looks like an associative rate law.

**Answer c**

This is a thought-provoking question without a definite answer. Associative mechanisms typically have lower activation enthalpy than dissociative mechanisms, because there has also been some bond-making prior to the bond-breaking in the rate determining step. The associative interchange would be a little more like the associative mechanism than dissociative. The mix of bond-making and bond-breaking at the transition state would make the enthalpy of activation relatively low.

Associative mechanisms have negative activation entropies, whereas dissociative mechanisms have positive activation entropies. The associative interchange could be in between the two, given that the elementary step would be close to entropically neutral overall. What happens at the transition state is a little harder to imagine, but it might reflect the small changes in entropy through the course of the reaction, producing a small entropy of activation. On the other hand, if the incoming ligand is forced to adopt some specific approach as it comes into the molecule (to stay out of the way of the departing ligand, for example) then that restriction could show up as a small negative activation entropy.

#### Exercise 12.3.5.4

For the following mechanism:

[Image not described in source]

a) Describe in words what is happening.

b) Predict the rate determining step.

c) Predict the rate law for the reaction.

d) Qualitatively predict the activation entropy and enthalpy, compared with

i) both an associative mechanism and

ii) a dissociative mechanism.

e) Suggest some ligands that may be able to make this mechanism occur.

**Answer a**

The lone pair donation from one ligand appears to push another ligand out.

**Answer b**

The first step is probably rate determining, because of the bond breaking involved.

**Answer c**

If the first step is rate determining, Rate = k[ML5A].

**Answer d**

Another question without a very clear answer. Compared with an associative mechanism, the activation entropy is probably much more positive, because additional degrees of freedom are being gained as the molecule heads over the activation barrier and one of the ligands separates to be on its own. However, the activation entropy may be less positive than in a regular dissociation, because in this case the breaking of one bond has to be coordinated with the formation of another.

The enthalpy of activation has both a bond-making and bond-breaking component, a little like in an associative mechanism. However, the amount of bond making here is probably less important, because pi bonds are typically not as strong as sigma bonds. The activation enthalpy is probably higher than an associative pathway but not as high as a dissociative one.

**Answer e**

The donor ligand must have a lone pair. Oxygen donors would be good candidates, because even if one lone pair is already donating in a sigma bond, an additional lone pair may be available for pi donation. The same thing is true for halogen donors. It would also be true for anionic nitrogen donors but not for neutral nitrogen donors, because a neutral nitrogen has only one lone pair.

## 12.3.6: Some Reasons for Differing Mechanisms

We usually look for physical reasons why a given compound might undergo a reaction via one mechanism and not another. That ability adds to our understanding of chemistry. If we can take information and give it predictive value, then we may be able to make educated decisions about what is probably happening with new reactions.

Why might a reaction undergo a dissociative reaction rather than an associative one? What factors might prevent an associative pathway?

One reason may be that there is not enough room. In an associative step, an additional ligand comes in and binds to the metal. If it is already crowded, that may be difficult.

[Image not described in source]

Figure 12.3.6.1: The role of steric crowding in ligand substitution. In one of these cases, the associative mechanism is less favored because of crowding that will occur in the transition state.

- Steric crowding may lead to a dissociative, rather than associative, mechanism.

Another reason has to do with electronics. Maybe the compound cannot easily accept an additional bonding pair. That may be the case if the compound already has eighteen electrons.

[Image not described in source]

Figure 12.3.6.2: The role of electron count in ligand substitution. In one of these cases, the associative mechanism is less favored because the metal is already electronically saturated.

- Electronic saturation may lead to a dissociative, rather than associative, mechanism.

However, if there is less crowding, and more electrons can be accommodated, an associative pathway may result.

#### Exercise 12.3.6.1

i) Draw structures for the following reactions. Pay attention to geometry.

ii) Predict whether each of the substitutions would occur through associative or dissociative mechanisms.

a) AuCl3py + Na N3 → Na^+ [AuCl3N3]^- + py

b) Rh(C2H4)2(acac) + C2D4 → Rh(C2D4)2(acac) + C2H4

c) [Co(NH3)5Cl]^2+ + H2O → [Co(NH3)5(OH2)]^2+ + Cl^-

d) trans-(Et3P)2PtCl2 + ^-SCN → trans-(Et3P)2PtCl(SCN) + Cl^-

e) Rh(NH3)4Cl2^+ + ^-CN → Rh(NH3)4Cl(CN)^+ + Cl^-

f) trans-[Cr(en)2Br2 ]^+ + ^-SCN → cis- and trans-[Cr(en)2Br(SCN)]^+ + Br^-

**Answer**

[Image not described in source]

#### Exercise 12.3.6.2

Maurice Brookhart of UNC, Chapel Hill, makes organometallic compounds in order to study fundamental questions about reactivity. In this case, he has reported making a new compound capable of "C-H activation", a reaction in which unreactive C-H bonds can be forced to break. This process holds the future promise of converting coal and natural gas into important commodities currently obtained from petroleum.

[Image not described in source]

a) Draw, with curved arrows, a mechanism for the ligand substitution in the synthesis of this C-H activating complex.

b) Explain your reasons for your choice of reaction mechanism.

**Answer**

[Image not described in source]

#### Exercise 12.3.6.3

Bob Grubbs of Cal Tech was awarded the Nobel Prize in chemistry for his development of catalysts for olefin metathesis. Olefin metathesis is important both in the reforming of petroleum and in the synthesis of important commodities such as pharmaceuticals. In the following study, he replaced chlorides on a "Grubbs Generation I catalyst" to study the effect on the olefin metathesis reaction.

[Image not described in source]

a) Draw, with curved arrows, a mechanism for the ligand substitution in this complex.

b) Explain your reasons for your choice of reaction mechanism.

c) What factor(s) do you think Grubbs hoped to study by making this substitution in the catalyst?

**Answer**

[Image not described in source]

#### Exercise 12.3.6.4

Sometimes, kinetic studies can give insight into a reaction if controlled changes in the reaction produce measurable results.

[Image not described in source]

a) Draw, with curved arrows, a mechanism for the ligand substitution in this reaction.

b) Explain your reasons for your choice of reaction mechanism.

c) Explain the following kinetic data.

[Image not described in source]

#### Exercise 12.3.6.5

Several different structures were proposed for Ni(cysteine)2^2-. Kinetic studies of substitution in this complex showed the rate was dependent in the concentration of both the metal complex and the incoming ligand. Which structure do you think is correct? Why?
