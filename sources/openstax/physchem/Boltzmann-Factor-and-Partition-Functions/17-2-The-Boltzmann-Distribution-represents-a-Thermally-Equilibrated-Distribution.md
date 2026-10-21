---
title: "17.2: The Boltzmann Distribution represents a Thermally Equilibrated Distribution"
book: "Physical Chemistry (LibreTexts)"
chapter: "17: Boltzmann Factor and Partition Functions"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17%3A_Boltzmann_Factor_and_Partition_Functions/17.02%3A_The_Boltzmann_Distribution_represents_a_Thermally_Equilibrated_Distribution"
author: "Unknown"
license: "CC BY-NC-SA 4.0"
---

Consider a N-particle ensemble. The particles are not necessarily indistinguishable and possibly have mutual potential energy. Since this is a large system, there are many different ways to arrange its particles and yet yield the same thermodynamic state. Only one arrangement can occur at a time. The probability of the system is the sum of the probabilities of its separate arrangements. Then the probability of a system is:

[Note: corrected; the source prints "The sum of the probabilities of each separate arrangement equals the total number of separate arrangements." where this reads "The probability of the system is the sum of the probabilities of its separate arrangements.". A sum of probabilities is not a number of arrangements; with each arrangement of probability pi, it is WN pi.]

pN = WN pi

where pN is the probability of the system, WN is the total number of different possible arrangements of the N particles in the system, and pi is the probability of each separate arrangement. Heisenberg's uncertainty principle states that it is impossible to simultaneously know the momentum and the position of an object with complete precision. In agreement with the uncertainty principle, the total possible number of combinations can be defined as the total number of distinguishable rearrangements of the N particles.

The most practical ensemble is the canonical ensemble with N, V, and T fixed. We can imagine a collection of boxes with equal volumes and number of particles with the entire collection kept in thermal equilibrium. Based on the Boltzmann factor, we know that for a system that has states with energies e1, e2, e3..., the probability pj that the system will be in the state j with energy Ej falls off exponentially with the energy of state j, as e^(−Ej/kT). The partition functions of the state places a very important role in calculating the properties of a system, for example, it can be used to calculate the probability, as well as the energy, heat capacity, and pressure.

[Note: corrected; the source prints "is exponentially proportional to the energy of state j" where this reads "falls off exponentially with the energy of state j, as e^(−Ej/kT)". The probability is proportional to e^(−Ej/kT).]

## The Boltzmann Distribution

We are ultimately interested in the probability that a given distribution will occur. The reason for this is that we must have this information in order to obtain useful thermodynamic averages. Let's consider an ensemble of A systems. We will define aj as the number of systems in the ensemble that are in the quantum state j. For example, a1 represents the number of systems in the quantum state 1. The total number of possible microstates is:

W(a1, a2, ...) = (A!)/(a1!a2!...)

The overall probability that Pj that a system is in the j^th quantum state is obtained by averaging aj/A over all the allowed distributions. Thus, Pj is given by:

Pj = (⟨aj⟩)/A

= 1/A · (Σa W(a)aj(a))/(Σa W(a))

where the angle brackets indicate an ensemble average. Using this definition we can calculate any average property (i.e. any thermodynamic property):

⟨M⟩ = Σj Mj Pj

The method of the most probable distribution is based on the idea that the average over Pj is identical to the most probable distribution. Physically, this results from the fact that we have so many particles in a typical system that the fluctuations from the mean are extremely (immeasurably) small. The equivalence of the average probability of an occupation number and the most probable distribution is expressed as follows:

Pj = (⟨aj⟩)/A = (aj)/A

The probability function is subject to the following constraints:

- Constraint 1: Conservation of energy requires: E_total = Σj aj ej where ej is the energy of the jth quantum state.
- Constraint 2: Conservation of mass requires: A = Σj aj which says only that the total number of all of the systems in the ensemble is A.

As we will learn in later chapters, the system will tend towards the distribution of aj that maximizes the total number of microstates. This can be expressed as:

Σj((∂ln W)/(∂aj))daj = 0

[Note: corrected; the source prints "Σj((∂ln W)/(∂aj)) = 0" where this reads "Σj((∂ln W)/(∂aj))daj = 0". The maximum condition is d ln W = 0, as the constraint forms below are written.]

Our constraints becomes:

Σj ej daj = 0

Σj daj = 0

The method of Lagrange multipliers (named after Joseph Louis Lagrange is a strategy for finding the local maxima and minima of a function subject to equality constraints. Using the method of LaGrange undetermined multipliers we have:

Σj[((∂ln W)/(∂aj))daj + αdaj − βej daj] = 0

We can use Stirling's approximation:

ln x! ≈ x ln x − x

to evaluate:

((∂ln W)/(∂aj))

to get:

((∂ln W)/(∂aj)) = ((∂ln A!)/(∂aj)) − Σi((∂ln ai!)/(∂aj))

[Note: corrected; the source prints "((∂A!)/(∂aj)) − Σi((∂ln ai)/(∂aj)) = 0" where this reads "((∂ln W)/(∂aj)) = ((∂ln A!)/(∂aj)) − Σi((∂ln ai!)/(∂aj))". ln W = ln A! − Σi ln ai!; the derivative is not zero but −α + βej by the equation above.]

as outlined below.

## Application of Stirling's Approximation

First step is to note that:

ln W = ln A! − Σj ln aj! ≈ A ln A − A − Σj aj ln aj + Σj aj

[Note: corrected; the source prints "ln W = ln A!−Σj ln aj!a ≈ A ln A − A − Σj aj ln aj − Σj aj" where this reads "ln W = ln A! − Σj ln aj! ≈ A ln A − A − Σj aj ln aj + Σj aj". Stirling's approximation gives −Σj(aj ln aj − aj), so the last term is +Σj aj, which cancels −A.]

Since (from Equation (con2)):

A = Σj aj

these two cancel to give:

ln W = A ln A − Σj aj ln aj

The derivative is:

((∂ln W)/(∂aj)) = (∂A ln A)/(∂aj) − Σi (∂ai ln ai)/(∂aj)

Therefore we have:

((∂A ln A)/(∂aj)) = ((∂A)/(∂aj)) ln A + (∂A)/(∂aj) = ln A + 1

[Note: corrected; the source prints "((∂A)/(∂aj)) ln A − (∂A)/(∂aj) = ln A − 1" where this reads "((∂A)/(∂aj)) ln A + (∂A)/(∂aj) = ln A + 1". The product rule gives a plus sign; with it, (ln A + 1) − (ln aj + 1) gives −ln(aj/A) below.]

((∂ai ln ai)/(∂aj)) = ((∂ai)/(∂aj)) ln ai + (∂ai)/(∂aj) = ln aj + 1

[Note: corrected; the source prints "((∂ai)/(∂aj)) ln ai − (∂ai)/(∂aj) = ln aj + 1" where this reads "((∂ai)/(∂aj)) ln ai + (∂ai)/(∂aj) = ln aj + 1". As above: a plus sign.]

These latter derivatives result from the fact that:

((∂ai)/(∂ai)) = 1

((∂aj)/(∂ai)) = 0

The simple expression that results from these manipulations is:

−ln((aj)/A) + α − βej = 0

The most probable distribution is:

(aj)/A = e^α e^(−βej)

[Note: corrected; the source prints "(aj)/A = e^a Σj e^(−βej)" where this reads "(aj)/A = e^α e^(−βej)". From −ln(aj/A) + α − βej = 0 above; summing over j comes next.]

Now we need to find the undetermined multipliers α and β.

Summed over j, the left hand side of Equation (Eq3) is 1. Thus, we have:

[Note: corrected; the source prints "The left hand side of Equation (Eq3) is 1." where this reads "Summed over j, the left hand side of Equation (Eq3) is 1.". Σj aj/A = 1, which gives e^α = 1/Σj e^(−βej).]

Pj = (aj)/A = (e^(−βej))/(Σj e^(−βej))

This determines α and defines the Boltzmann distribution. We will show that β from the optimization procedure of method of Lagrange multipliers is:

[Note: corrected; the source prints "This determines a and defines" where this reads "This determines α and defines". The multiplier is α.]

β = 1/kT

This identification will show the importance of temperature in the Boltzmann distribution. The distribution represents a thermally equilibrated most probable distribution over all energy levels (Figure 17.2.1 ).

Figure 17.2.1: At lower temperatures, the lower energy states are more greatly populated. At higher temperatures, there are more higher energy states populated, but each is populated less. kB T ∼ 2.5 kJ mol^−1 at 300 K. (CC SA-BY 3.0; Mysterioso via Wikiversity).
Diagram comparing rotational, vibrational, and electronic energy levels with corresponding energy ranges.

### Boltzmann Distribution

The Boltzmann distribution represents a thermally equilibrated most probable distribution over all energy levels. There is always a higher population in a state of lower energy than in one of higher energy.

Once we know the probability distribution for energy, we can calculate thermodynamic properties like the energy, entropy, free energies and heat capacities, which are all average quantities (Equation (avg)). To calculate Pj, we need the energy levels of a system (i.e., {ei}). The energy ("levels") of a system can be built up from the quantum energy levels

> It must always be remembered that no matter how large the energy spacing is, there is always a non-zero probability of the upper level being populated. The only exception is a system that is at absolute zero. This situation is however hypothetical as absolute zero can be approached but not reached.

## Partition Function

The sum over all factors e^(−βej) is given a name. It is called the molecular partition function, q:

q = Σj e^(−βej)

The molecular partition function q gives an indication of the average number of states that are thermally accessible to a molecule at the temperature of the system. The partition function is a sum over states (of course with β = 1/kT multiplying the energy in the exponent) and is a number. Larger the value of q, larger the number of states which are available for the molecular system to occupy (Figure 17.2.2 ).

[Note: corrected; the source prints "with the Boltzmann factor β multiplying the energy" where this reads "with β = 1/kT multiplying the energy". β is 1/kT; the Boltzmann factor is e^(−βej).]

Figure 17.2.2: At lower temperatures, the lower energy states are more greatly populated. At higher temperatures, there are more higher energy states populated, but each is populated less. (CC SA-BY 3.0; Mysterioso via Wikiversity).
Three panels illustrating temperature states: T1 at 0K, T2 above 0K with scattered dots, and T3 greater than T2 with more dots.

We distinguish here between the partition function of the ensemble, Q and that of an individual molecule, q. Since Q represents a sum over all states accessible to the system it can written as:

Q(N, V, T) = Σ_(i, j, k...) e^{−β(ei + ej + ek...)}

where the indices i, j, k represent energy levels of different particles.

Regardless of the type of particle the molecular partition function, q represents the energy levels of one individual molecule. We can rewrite the above sum as:

Q = qi qj qk…

or:

Q = q^N

for N particles. Note that qi means a sum over states or energy levels accessible to molecule i and qj means the same for molecule j. The molecular partition function, q counts the energy levels accessible to molecule i only. Q counts not only the states of all of the molecules, but all of the possible combinations of occupations of those states. However, if the particles are not distinguishable then we will have counted N! states too many. The factor of N! is exactly how many times we can swap the indices in Q(N, V, T) and get the same value (again provided that the particles are not distinguishable). See this video for more information.

## References

1. Hakala, R.W. (1967). Simple justification of the form of Boltzmann's distribution law. Journal of Chemical Education. 44(11), 657. doi: 10.1021/ed044p657
2. Grigorenko, I, Garcia, M.E. (2002). Calculation of the partition function using quantum genetic algorithms. Physica A: Satistical Mechanics and its Applications. 313. 463-470. Retrieved from http://www.sciencedirect.com/science...78437102009883

## Problems

1. Complete the justification of Boltzmann's distribution law by computing the proportionality constant a.
2. A system contains two energy levels E1, E2. Using Boltzmann statistics, express the average energy of the system in terms of E1, E2.
3. Consider a system contains N energy levels. Redo problem #2.
4. Use the property of exponential function, derive equation (17.9).
5. What are the uses of partition functions?

[Note: there is no equation 17.9; Q = q^N above is probably meant. The text is left as printed.]
