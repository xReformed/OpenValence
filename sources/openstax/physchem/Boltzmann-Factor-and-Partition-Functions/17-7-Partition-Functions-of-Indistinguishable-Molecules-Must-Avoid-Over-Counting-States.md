---
title: "17.7: Partition Functions of Indistinguishable Molecules Must Avoid Over Counting States"
book: "Physical Chemistry (LibreTexts)"
chapter: "17: Boltzmann Factor and Partition Functions"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17%3A_Boltzmann_Factor_and_Partition_Functions/17.07%3A_Partition_Functions_of_Indistinguishable_Molecules_Must_Avoid_Over_Counting_States"
author: "Anonymous"
license: "CC BY 4.0"
---

In the previous section, the definition of the the partition function involves a sum of state formulism:

Q = Σi e^(−βEi).

However, under most conditions, full knowledge of each member of an ensemble is missing and hence we have to operate with a more reduced knowledge. This is demonstrated via a simple model of two particles in a two-energy level system in Figure 17.7.1. Each particle (red or blue) can occupy either the E1 = 0 energy level or the E2 = ε energy level resulting in four possible states that describe the system. The corresponding partition function for this system is then (via Equation (1)):

Q_distinguishable = e^0 + e^(−βε) + e^(−βε) + e^(−2βε) = q^2

and is just the molecular partition function (q) squared.

Figure 17.7.1: Four different states can exist for a two-level system with two distinguishable particles (red and blue balls). (CC BY 4.0; Delmar Larsen via LibreTexts)
Four two-level diagrams, each with a red and a blue ball in the lower (E1 = 0) or upper (E2 = ε) level.

[Note: corrected; the source prints "Illustration of atoms represented by red and blue spheres, arranged in various formations, depicting molecular structures." where this reads "Four two-level diagrams, each with a red and a blue ball in the lower (E1 = 0) or upper (E2 = ε) level.". The image's alt text, machine-written, misreads the image; this describes it.]

However, if the two particles are indistinguishable (e.g., both the same color as in Figure 17.7.2) then while four different combinations can be generated like in Figure 17.7.1, there is no discernible way to separate the two middle states. Hence, there are effectively only three states observable for this system.

Figure 17.7.2: Three different states can exist for a two-level system with two indistinguishable particles (black balls). The two middle states are indescernable and represent a single state with one particle exited and the other in the ground state. (CC BY 4.0; Delmar Larsen via LibreTexts)
Two-level diagrams with two identical black balls: both in the lower level, one in each, and both in the upper level.

[Note: corrected; the source prints "Diagram illustrating a chemical reaction with black spheres representing atoms and arrows indicating the reaction direction." where this reads "Two-level diagrams with two identical black balls: both in the lower level, one in each, and both in the upper level.". The image's alt text, machine-written, misreads the image; this describes it.]

The corresponding partition function for this system (again using Equation (1)) can be constructed:

Q(N, V, β) = e^0 + e^(−βε) + e^(−2βε) ≠ q^2

and this is not equal to the square of the molecular partition function. If Equation (Q1) were used to describe the indistinguishable particle case, then it would overestimate the number of observable states. From combinatorics, using q^N for a large N-particle system of indistinguishable particles will overestimate the number of states by a factor of N!. Therefore Equation (1) requires a slight modification to account for this over counting.

Q(N, V, β) = (Σi e^(−βEi))/(N!)

If we have N molecules, we can perform N! permutations that should not affect the outcome. To avoid over counting (making sure we do not count each state more than once), the partition function becomes:

Q(N, V, β) = (q(V, β)^N)/(N!)

### Note

As you may have noticed, using Equation (2) to estimate of Q for the two-indistinguishable particle discussed case above with N = 2 is incorrect (i.e., Equation (2) is not equal to Equation (Q2)). That is because the N! correction assumes no two particles occupy the same state; it is valid only when the number of accessible molecular states greatly exceeds N.

[Note: corrected; the source prints "That is because the N! factor is only applicable for large N." where this reads "That is because the N! correction assumes no two particles occupy the same state; it is valid only when the number of accessible molecular states greatly exceeds N.". In the example, q^2/2 fails exactly on the two states with both particles in one level; it does not depend on N being large.]
