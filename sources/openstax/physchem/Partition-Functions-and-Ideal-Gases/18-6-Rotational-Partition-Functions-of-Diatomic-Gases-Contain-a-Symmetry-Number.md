---
title: "18.6: Rotational Partition Functions of Diatomic Gases Contain a Symmetry Number"
book: "Physical Chemistry (LibreTexts)"
chapter: "18: Partition Functions and Ideal Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18%3A_Partition_Functions_and_Ideal_Gases/18.06%3A_Rotational_Partition_Functions_of_Diatomic_Gases_Contain_a_Symmetry_Number"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The rotational energy levels of a diatomic molecule are given by:

E_rot(J) = B̃J(J + 1)

where:

B̃ = h/(8π^2 Ic)

Here, B̃ is the rotational constant expressed in cm^-1. The rotational energy levels are given by:

Ej = (J(J + 1)h^2)/(8π^2 I)

[Note: corrected; the source prints "(J(J + 1)h^2)/(8πI)" where this reads "(J(J + 1)h^2)/(8π^2 I)". 8π^2 I.]

where I is the moment of inertia of the molecule given by μr^2 for a diatomic, and μ is the reduced mass, and r the bond length (assuming rigid rotor approximation). The energies can be also expressed in terms of the rotational temperature, Θ_rot, defined as:

Θ_rot = h^2/(8π^2 Ik)

[Note: corrected; the source prints "Θ_rot = r^2/(8π^2 Ik)" where this reads "Θ_rot = h^2/(8π^2 Ik)". h^2, not r^2.]

The interpretation of θ_rot is as an estimate of the temperature at which thermal energy (≈ kT) is comparable to the spacing between rotational energy levels. At about this temperature the population of excited rotational levels becomes important. See Table 1.

Table 1: Select Rotational Temperatures. In each case the value refers to the most common isotopic species.

| Molecule | H2 | N2 | O2 | F2 | HF | HCl | CO2 | HBr | CO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Θ_rot | 87.6 | 2.88 | 2.08 | 1.27 | 30.2 | 15.2 | 0.561 | 12.2 | 2.78 |

In the summation for the expression for rotational partition function (q_rot), Equation (3.13), we can do an explicit summation:

q_rot = Σ_(j=0)(2J + 1)e^(−EJ/kT)

if only a finite number of terms contribute. The factor (2J + 1) for each term in the expansion accounts for the degeneracy of a rotational state J. For each allowed energy EJ from Equation (Eq0) there are (2J + 1) eigenstates. The Boltzmann factor must be multiplied by (2J + 1) to properly account for the degeneracy these states:

(2J + 1)e^(−EJ/kT)

If the rotational energy levels are lying very close to one another, we can integrate similar to what we did for q_trans previously to get:

q_rot = ∫0^∞ (2J + 1)e^{−hcB̃J(J + 1)/kT}dJ

[Note: corrected; the source prints "(2J + 1)R^{−B̃J(J + 1)/kT}dJ" where this reads "(2J + 1)e^{−hcB̃J(J + 1)/kT}dJ". The base is e, and the energy is hcB̃J(J + 1).]

This integration can easily be done by substituting x = J(J + 1) and dx = (2J + 1)dJ:

q_rot = kT/(hcB̃)

[Note: corrected; the source prints "q_rot = kT/(B̃)" where this reads "q_rot = kT/(hcB̃)". With B̃ in cm^−1 the denominator is hcB̃.]

For a homonuclear diatomic molecule, rotating the molecule by 180° brings the molecule into a configuration which is indistinguishable from the original configuration. This leads to an overcounting of the accessible states. To correct for this, we divide the partition function by σ, which is called the symmetry number and is equal to the distinct number of ways by which a molecule can be brought into identical configurations by rotations. The rotational partition function becomes:

q_rot = kT/(hcB̃σ)

[Note: corrected; the source prints "q_rot = kT/(B̃σ)" where this reads "q_rot = kT/(hcB̃σ)". As above.]

or commonly expressed in terms of Θ_rot:

q_rot = T/(Θ_rot σ)

### Example 18.6.1

What is the rotational partition function of H2 at 300 K?

**Solution**

The value of B̃ for H2 is 60.864 cm^-1. The value of kT in cm^-1 can be obtained by dividing it by hc, i.e., which is kT/hc = 208.5 cm^−1 at 300 K. σ = 2 for a homonuclear molecule. Therefore from Equation (3.16),

[Note: corrected; the source prints "kT/hc = 209.7 cm^−1" where this reads "kT/hc = 208.5 cm^−1". kT/hc at 300 K is 208.5 cm^−1.]

q_rot = kT/(hcB̃σ)

[Note: corrected; the source prints "q_rot = kT/(B̃σ)" where this reads "q_rot = kT/(hcB̃σ)". As above.]

= (208.5 cm^−1)/((2)(60.864 cm^−1))

[Note: corrected; the source prints "(209.7 cm^−1)" where this reads "(208.5 cm^−1)". As above.]

= 1.713

[Note: corrected; the source prints "= 1.723" where this reads "= 1.713". 208.5/(2 × 60.864) = 1.713. At T/Θrot ≈ 3.4 the high-temperature formula is itself rough for H2: the direct sum with nuclear-spin weights gives about 1.89.]

Since the rotational frequency of H2 is quite large, only the first few rotational states are accessible at 300 K

## Contributors and Attributions

- www.chem.iitb.ac.in/~bltembe/pdfs/ch_3.pdf
