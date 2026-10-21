---
title: "26.8: Equilibrium Constants in Terms of Partition Functions"
book: "Physical Chemistry (LibreTexts)"
chapter: "26: Chemical Equilibrium"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26%3A_Chemical_Equilibrium/26.08%3A_Equilibrium_Constants_in_Terms_of_Partition_Functions"
author: "Wikipedia"
license: "CC BY-SA 4.0"
---

Consider the general gas phase chemical reaction represented by

νAA + νBB ⇌ νCC + νDD

[Note: Read νA A + νB B ⇌ νC C + νD D: each species follows its stoichiometric coefficient.]

where A, B, C and D are the reactants and products of the reaction, and νA is the stoichiometric coefficient of chemical A, νB is the stoichiometric coefficient of chemical B, and so on. Each of the gases involved in the reaction will eventually reach an equilibrium concentration when the forward and reverse reaction rates become equal. The distribution of reactants to products at the equilibrium point is represented by the equilibrium constant (Kc):

Kc = ([C]^(νC)[D]^(νD))/([A]^(νA)[B]^(νB))

If the system is not at equilibrium, a shift in the number of reactants and products will occur to lower the overall energy of the system. The rate at which the free energy of the system changes as particles of any particular species are added is termed the chemical potential of that species. When both temperature and volume are constant for both points aforementioned, the chemical potential μ of species i is expressed by the equation

[Note: corrected; the source prints "The difference in the energy of the system at this non-equilibrated point and the energy of the system at equilibrium for any particular species is termed chemical potential." where this reads "The rate at which the free energy of the system changes as particles of any particular species are added is termed the chemical potential of that species.". The chemical potential is not an energy difference from equilibrium but the derivative of the free energy with respect to Ni, as the next equation says.]

μi = ((∂A)/(∂Ni))_(T, V, N_(j ≠ i))

[Note: corrected; the source prints "N_(j ≠ 1)" where this reads "N_(j ≠ i)". All species other than i are held constant, here and in the lines below.]

where A is the Helmholtz energy, and Ni is the number of molecules of species i. The Helmholtz energy can be determined as a function of the total partition function, Q:

A = −kB T ln Q

where kB is the Boltzmann constant and T is the temperature of the system. The total partition function is given by

Q = (qi(V, T)^(Ni))/(Ni!)

where qi is the molecular partition function of chemical species i. Substituting the molecular partition function into the equation for Helmholtz energy yields:

A = −kB T ln((qi(V, T)^(Ni))/(Ni!))

and then further substituting this equation into the definition of chemical potential (Equation (chempot)) yields:

μi = ((∂−kB T ln((qi(V, T)^(Ni))/(Ni!)))/(∂Ni))_(T, V, N_(j ≠ i))

[Note: corrected; the source prints "N_(j ≠ 1)" where this reads "N_(j ≠ i)". As above.]

rearranging this equation the following derivative can be set-up:

μi = −kB T[((∂Ni ln(qi(V, T)))/(∂Ni)) − ((∂ln(Ni!))/(∂Ni))]_(T, V, N_(j ≠ i))

[Note: corrected; the source prints "N_(j ≠ 1)" where this reads "N_(j ≠ i)". As above.]

From this point Sterling's approximation

ln(N!) = N ln N − N

can be substituted into the derivative to yield:

μi = −kB T[((∂Ni ln(qi(V, T)))/(∂Ni)) − ((∂(Ni ln Ni − Ni))/(∂Ni))]_(T, V, N_(j ≠ i))

[Note: corrected; the source prints "N_(j ≠ 1)" where this reads "N_(j ≠ i)". As above.]

From here the derivative can be rearranged and solved:

μi = −kB T[ln(qi(V, T))(∂Ni)/(∂Ni) + Ni (∂ln(qi(V, T)))/(∂Ni) − ln(Ni)(∂Ni)/(∂Ni) − Ni (∂ln(Ni))/(∂Ni) + (∂Ni)/(∂Ni)]_(T, V, N_(j ≠ i))

[Note: corrected; the source prints "N_(j ≠ 1)" where this reads "N_(j ≠ i)". As above.]

= −kB T(ln(qi(V, T)) + 0 − ln(Ni) − Ni1/(Ni) + 1)

[Note: Ni1/(Ni) is Ni times 1/Ni, which is 1: the term −Ni(∂ln Ni/∂Ni).]

= −kB T(ln(qi(V, T)) − ln(Ni))

= −kB T ln((qi(V, T))/(Ni))

A variable, λ, is then defined such that dNj = νj dλ, where j = A, B, C or D and νj is taken to be positive for products and negative for reactants. A change in λ therefore corresponds to a change in the concentrations of the reactants and products. Thus, at equilibrium,

((∂A)/(∂λ))_(T, V) = 0

[Image not described in source]

Helmholtz Energy with respect to Equilibrium Shifts

From Classical thermodynamics, the total differential of A is:

dA = −SdT − pdV + Σj μj dNj

For a reaction at a fixed volume and temperature (such as in the canonical ensemble), dT and dV equal 0. Therefore,

dA = Σj μj dNj

= Σj μj νj dλ

= dλΣj μj νj

with

Σj μj νj = 0

Substituting the expanded form of chemical potential (Equation (chempot2)):

−kB TΣj ln((qj)/(Nj))νj = 0

[Note: corrected; the source prints "ln((qi)/(Ni))νj" where this reads "ln((qj)/(Nj))νj". The summation index is j, as two lines below.]

Σj ln((qj)/(Nj))νj = 0

[Note: corrected; the source prints "ln((qi)/(Ni))νj" where this reads "ln((qj)/(Nj))νj". As above.]

Σj νj[ln(qj) − ln(Nj)] = 0

For the reaction in Equation (eq1):

[νC ln(qC) − νC ln(NC)] + [νD ln(qD) − νD ln(ND)]−[νA ln(qA) − νA ln(NA)]−[νB ln(qB) − νB ln(NB)] = 0

This equation simplifies to

((qC)^(νC)(qD)^(νD))/((qA)^(νA)(qB)^(νB)) = ((NC)^(νC)(ND)^(νD))/((NA)^(νA)(NB)^(νB))

By dividing all terms by volume, and noting the relationship (NA)/V = (#molecules)/volume = ρA = [A] where ρ is referred to a number density, the following equation is obtained:

Kc = (ρC^(νC)ρD^(νD))/(ρA^(νA)ρB^(νB)) = ((qC/V)^(νC)(qD/V)^(νD))/((qA/V)^(νA)(qB/V)^(νB))

Hence, knowledge of the molecular partition function for all species in the reaction will ensure the calculation of the equilibrium constant.

### Example 26.8.1: Reacting Diatomic Molecules

Calculate the equilibrium constant (Kc) for the reaction of H2 (g) and Cl2 (g) at 650 K.

H2 (g) + Cl2 (g) ⇌ 2HCl (g)

**Solution**

We will use Equation (Kc) that uses Molecular Partition Functions to evaluate Kc.

Kc(T) = (((q_HCl)/V)^2)/(((q_H2)/V)((q_Cl2)/V))

This equation is expanded into the rotational, vibrational, translational and electronic molecular partition functions of each species.

Kc(T) = (((q_(trans HCl) q_rotHCl q_vibHCl q_elecHCl)/V)^2)/(((q_transH2 q_(rot H2) q_vibH2 q_elecH2)/V)((q_transCl2 q_(rot Cl2) q_vibCl2 q_elecCl2)/V))

A simple problem solving strategy for finding equilibrium constants via statistical mechanics is to separate the equation into the molecular partition functions of each of the reactant and product species, solve for each one, and recombine them to arrive at a final answer (e.g., for HCl.

(q_HCl)/V = ((2πmkB T)/h^2)^(3/2) (translation) × ((2 kB Tμre^2)/(σħ^2)) (rotation) × (1/(1 − exp((−hν)/(kB T)))) (vibration) × g1 exp((D0)/(kB T)) (electronic)

To simplify the calculations of molecular partition functions, the characteristic temperature of rotation (Θr) and vibration (Θν) are used.

(q_HCl)/V = ((2πmkB T)/h^2)^(3/2) × T/(σΘr) × 1/(1 − exp((−Θν)/T)) × g1 exp((D0)/RT)

These values are constants that incorporate the physical constants found in the rotational and vibrational partition functions of the molecules. Tabulated values of Θr and Θν for select molecules can be found here.

| Species | Θν (K) | Θr (K) | D0 (kJ mol^-1) |
| --- | --- | --- | --- |
| Cl2 (g) | 808 | 0.351 | 239.0 |
| H2 (g) | 6125 | 87.6 | 431.9 |
| HCl (g) | 4303 | 15.2 | 427.7 |

[Note: corrected; the source prints "| Cl2 (g) | 6125 |" where this reads "| Cl2 (g) | 808 |"; the source prints "| H2 (g) | 808 |" where this reads "| H2 (g) | 6125 |". The vibrational temperatures of H2 and Cl2 are swapped in the source: H2's is about 6300 K (ν̃ ≈ 4400 cm^−1), Cl2's about 805 K (ν̃ ≈ 560 cm^−1). The calculation below is corrected to match.]

We need to evaluate Equation (eqB) for each species then then evaluate Equation (eqA) directly.

For HCl:

(q_HCl)/V = ((2π(6.0543 × 10^−26 kg)(1.38065 × 10^−23 J K^−1)(650K))/((6.62607 × 10^−34 Js)^2))^(3/2) × (650 K)/((1)(15.2 K)) × 1/(1 − exp((−4303 K)/(650 K))) × (1) exp((427,700 J mol^−1)/((8.3145 J K^−1 mol^−1)(650 K)))

[Note: corrected; the source prints "2.1957 × 10^−24 kg" where this reads "6.0543 × 10^−26 kg"; the source prints "(8.3145 J K mol^−1)" where this reads "(8.3145 J K^−1 mol^−1)". The mass of one molecule is the molar mass divided by N_A, 36.46 × 10^−3 kg/(6.022 × 10^23); the source multiplies by 6.022 × 10^−26 instead. R is in J K^−1 mol^−1.]

(q_HCl)/V = (6.8564 × 10^32 m^−3)(42.76)(1.0013)(2.3419 × 10^34)

[Note: corrected; the source prints "(1.4975 × 10^35 m^−3)" where this reads "(6.8564 × 10^32 m^−3)". The translational factor with the corrected mass.]

For H2:

(q_H2)/V = ((2π(3.3476 × 10^−27 kg)(1.38065 × 10^−23 JK^−1)(650 K))/((6.62607 × 10^−34 Js)^2))^(3/2) × (650 K)/((2)(87.6 K)) × 1/(1 − exp((−6125 K)/(650 K))) × (1) exp((431,900J mol^−1)/((8.3145 J K^−1 mol^−1)(650 K)))

[Note: corrected; the source prints "1.2140 × 10^−25 kg" where this reads "3.3476 × 10^−27 kg"; the source prints "exp((−808 K)/(650 K))" where this reads "exp((−6125 K)/(650 K))"; the source prints "(8.3145 J K mol^−1)" where this reads "(8.3145 J K^−1 mol^−1)". As for HCl: 2.016 × 10^−3 kg/N_A; H2's vibrational temperature, as in the table; R in J K^−1 mol^−1.]

(q_H2)/V = (8.9147 × 10^30 m^−3)(3.71)(1.00)(5.0942 × 10^34)

[Note: corrected; the source prints "(1.9468 × 10^33 m^−3)(3.71)(1.41)" where this reads "(8.9147 × 10^30 m^−3)(3.71)(1.00)". The translational and vibrational factors with the corrected mass and vibrational temperature.]

For Cl2:

(q_Cl2)/V = ((2π(1.1773 × 10^−25 kg)(1.38065 × 10^−23 JK^−1)(650K))/((6.62607 × 10^−34 Js)^2)^(3/2) × (650 K)/((2)(0.351 K)) × 1/(1 − exp((−808 K)/(650 K))) × (1) exp((239,000Jmol^−1)/((8.3145 J K^−1 mol^−1)(650 K)))

[Note: corrected; the source prints "4.2700 × 10^−24 kg" where this reads "1.1773 × 10^−25 kg"; the source prints "(6.62607 × 10^−34 Js^2)" where this reads "(6.62607 × 10^−34 Js)^2"; the source prints "exp((−6125 K)/(650 K))" where this reads "exp((−808 K)/(650 K))"; the source prints "(8.3145 J K mol^−1)" where this reads "(8.3145 J K^−1 mol^−1)". As for HCl: 70.90 × 10^−3 kg/N_A; h is squared, not its unit; Cl2's vibrational temperature, as in the table; R in J K^−1 mol^−1.]

(q_Cl2)/V = (1.8593 × 10^33 m^−3)(925.9)(1.41)(1.606 × 10^19)

[Note: corrected; the source prints "(5.4839 × 10^35 m^−3)(925.9)(1.00)" where this reads "(1.8593 × 10^33 m^−3)(925.9)(1.41)". The translational and vibrational factors with the corrected mass and vibrational temperature (with the source's mass the translational factor would be 4.061 × 10^35, not 5.4839 × 10^35).]

Combining the terms from each species, the following expression is obtained:

Kc = ((6.8564 × 10^32 m^−3)^2)/((8.9147 × 10^30 m^−3)(1.8593 × 10^33 m^−3)) × ((42.76)^2)/((3.71)(925.9)) × ((1.0013)^2)/((1.00)(1.41)) × ((2.3419 × 10^34)^2)/((1.606 × 10^19)(5.0942 × 10^34))

[Note: corrected; the source prints "((1.9468 × 10^33 m^−3)^2)/((1.9468 × 10^33 m^−3)(5.4839 × 10^35 m^−3))" where this reads "((6.8564 × 10^32 m^−3)^2)/((8.9147 × 10^30 m^−3)(1.8593 × 10^33 m^−3))"; the source prints "((1.0013)^2)/((1.41)(1.00))" where this reads "((1.0013)^2)/((1.00)(1.41))". The numerator is HCl's translational factor squared (the source repeats H2's), and the factors are those above.]

= (28.36)(0.5323)(0.711)(6.7037 × 10^14)

[Note: corrected; the source prints "= (0.003550)(0.1333)(0.711)(6.7037 × 10^14)" where this reads "= (28.36)(0.5323)(0.711)(6.7037 × 10^14)". The translational ratio is 28.36, and the rotational one (42.76)^2/((3.71)(925.9)) = 0.5323.]

= (7.20 × 10^15)

[Note: corrected; the source prints "= (2.26 × 10^11)" where this reads "= (7.20 × 10^15)". The product of the factors; a thermochemical check, from ΔH° = −184.6 kJ and ΔS° = 20.0 J/K, gives about 7.6 × 10^15.]

At 650 K, the reaction between H2 (g) and Cl2(g) proceeds spontaneously towards the products. From a statistical mechanics point of view, the product HCl(g) molecule has more states accessible to it than the reactant species. The spontaneity of this reaction is largely due to the electronic partition function: two very strong H—Cl bonds are formed at the expense of a very strong H—H bond and a relatively weak Cl—Cl bond.
