---
title: "18.7: Vibrational Partition Functions of Polyatomic Molecules Include the Partition Function for Each Normal Coordinate"
book: "Physical Chemistry (LibreTexts)"
chapter: "18: Partition Functions and Ideal Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18%3A_Partition_Functions_and_Ideal_Gases/18.07%3A_Vibrational_Partition_Functions_of_Polyatomic_Molecules_Include_the_Partition_Function_for_Each_Normal_Coordinate"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

As with diatomic molecules, the energies of polyatomic molecules can be approximated by the sum of its individual degrees of freedom. Therefore, we can write the partition function as:

Q(N, V, T) = ([q(V, T)]^N)/(N!)

[Note: corrected; the source prints "([q(V, T)]^2)/(N!)" where this reads "([q(V, T)]^N)/(N!)". The power is N.]

We can write the polyatomic analog to diatomic molecules:

Q(N, V, T) = ((q_trans q_rot q_vib q_elec)^N)/(N!)

When derived for diatomic molecules, we assumed the rigid rotor model for rotations and the harmonic oscillator for vibrations. This allowed us to separate the rotational motion from the vibrational motion of the molecule. Polyatomic molecules are a bit more complicated, but we will still make use of these approximations.

The number of translational states available to any given molecule is far greater than the number of molecules in the system. q_trans is given by:

q_trans = [(2πMkT)/h^2]^(3/2)V

where M is the mass of the particle. Moving to the electronic partition function:

q_elec = Σi gi e^(−Ei/kT)

where Ei is the energy of the electronic state i and {g_i} is its degeneracy. Electronic states are typically spaced far apart from each other. The probability of the system being in any state but the ground state is extremely small. We can therefore simplify the electronic partition function to include only the ground electronic state:

q_elec = g_e1 e^(De/kT)

where −De is the energy of the ground electronic state. To complete the polyatomic partition function, we still need q_vib and q_rot. We will finish this section with q_vib and talk about q_rot in the next.

The vibrational motion of diatomic molecules can be expressed as a set of independent harmonic oscillators. For polyatomic molecules, the independent vibrational motions are referred to as normal modes of vibration. The vibrational energy is then the sum of the energies for each normal mode:

E_vib = Σi^α(vi + 1/2)hνi

[Note: corrected; the source prints "(vi + 1/2)hν" where this reads "(vi + 1/2)hνi". Each mode has its own frequency.]

where νi is the vibrational frequency for the ith normal mode and α is the number of vibration degrees of freedom. A linear molecule has 3 n − 5 vibrational degrees of freedom and a nonlinear molecule has 3 n − 6 vibrational degrees of freedom. Because the normal modes are independent of each other, we can take out results from previous sections:

q_vib = Πi^α(e^(−θ_(vib, i)/2T))/(1 − e^(−θ_(vib, i)/T))

E_vib = NkΣi^α((θ_(vib, i))/2 + θ_(vib, i) (e^(−θ_(vib, i)/T))/(1 − e^(−θ_(vib, i)/T)))

C_(V, vib) = NkΣi^α((θ_(vib, i))/T)^2 (e^(−θ_(vib, i)/T))/((1 − e^(−θ_(vib, i)/T))^2)

[Note: corrected; the source prints "NkΣi^α(((θ_(vib, i))/2)^2 + (e^(−θ_(vib, i)/T))/((1 − e^(−θ_(vib, i)/T))^2))" where this reads "NkΣi^α((θ_(vib, i))/T)^2 (e^(−θ_(vib, i)/T))/((1 − e^(−θ_(vib, i)/T))^2)". The factor is (θ/T)^2, multiplied, not added; as in the formula given below.]

where θ_(vib, i) is the characteristic vibrational temperature defined by:

θ_(vib, i) = (hνi)/k

## Vibrational Entropy

There is a great deal of utility for thermodynamic functions calculated from the vibrational normal modes of a molecule. The vibrational energy and entropy depend on the shape a multidimensional potential energy surface. If one performs a conformational search of macromolecule it is one obtains energies and structures but little direct information concerning the shape of the potential energy surface for each conformation. The vibrational entropy gives a means determining whether there are significant entropic differences in the structures and therefore whether certain conformations will be favored based on the entropy.

However, it is possible to take appropriate linear combinations of the coordinates so that the cross terms are eliminated and the classical Hamiltonian as well as the operator corresponding to it contains no cross terms and in terms of the new coordinates, the Hamiltonian can be written as,

H = −Σ_(i=1)^f ħ^2/(2μi) · (∂^2)/(∂qi^2) + Σ_(i=1)^f ((ki)/2)qi^2

[Note: corrected; the source prints "H = Σ_(i=1)^f h^2/(2μi) · (∂)/(∂qi^2)" where this reads "H = −Σ_(i=1)^f ħ^2/(2μi) · (∂^2)/(∂qi^2)". The kinetic term is −(ħ^2/2μ)∂^2/∂q^2.]

Here, the degrees of freedom f is 3N − 5 for a linear molecule and 3N − 6 for a nonlinear molecule. Here, ki is the force constant and μi is the reduced mass for that particular vibrational mode which is referred to as a normal mode.

Figure 18.7.1: The three vibrational modes of water, the symmetric stretch (3656.7 cm^-1, 5261 K ), the asymmetric stretch (3755.8 cm^-1 , 5404 K ) and the bending mode (1594.8 cm^-1 ,2290 K) are shown. The vibrational frequencies and the characteristic temperature for each mode are shown in parenthesis. Although not shown in the animation, the oxygen atom also moves with each of these normal modes.
Illustration of water molecule representations: asymmetric stretch, symmetric stretch and bend.

[Note: corrected; the source prints "(3656.7 cm^-1, 5160 K )" where this reads "(3656.7 cm^-1, 5261 K )"; the source prints "(3755.8 cm^-1 , 5360 K )" where this reads "(3755.8 cm^-1 , 5404 K )"; the source prints "asymmetric sketch, symmetric sketch, and scissoring bend." where this reads "asymmetric stretch, symmetric stretch and bend.". Θ = 1.4388 cm K × ν̃: 3656.7 cm^−1 is 5261 K and 3755.8 cm^−1 is 5404 K. The alt text's "sketch" means stretch.]

The Equation (3.81) represents f linearly independent harmonic oscillators and the total energy for such a system is

ε_vib = Σ_(i=1)^f (vi + 1/2)hνi

The vibrational frequencies are given by

νi = (1/(2π))√((ki)/(μi))

The vibrational partition function is given by the product of f vibrational functions for each frequency.

q_vib = Π_(i=1)^f (e^(−Θ_(vib, i)/2T))/(1 − e^(−Θ_(vib, i)/T))

with

Θ_(vib, i) = (hνi)/(kB)

As with the previous discussion regarding simple diatomics, Θ_(vib, i) is called the characteristic vibrational temperature. The molar energies and the heat capacities are given by

⟨E_vib⟩ = NkΣ_(i=1)^f [(Θ_(vib, i))/2 + (Θ_(vib, i) e^(−Θ_(vib, i)/T))/(1 − e^(−Θ_(vib, i)/T))]

and

C̄V = NkB Σ_(i=1)^f ((Θ_(vib, i))/T)^2 (e^(−Θ_(vib, i)/T))/((1 − e^(−Θ_(vib, i)/T))^2)

### Example NO2

The three characteristic vibrational temperatures for NO2 are 1900 K, 1080 K and 2330 K. Calculate the vibrational partition function at 300 K.

[Note: corrected; the source prints "are 1900 K, 1980 K and 2330 K." where this reads "are 1900 K, 1080 K and 2330 K.". The NO2 bend, about 750 cm^−1, has Θ ≈ 1080 K.]

**Solution**

The vibrational partition is (Equation (Qvib1))

q_vib = Π_(i=1)^f (e^(−Θ_(vib, i)/2T))/(1 − e^(−Θ_(vib, i)/T))

If we calculate q_vib by taking the zero point energies as the reference points with respect to which the other energies are measured

q_vib = Π_(i=1)^f 1/(1 − e^(−Θ_(vib, i)/T)) = (1/(1 − e^(−1900/300)))(1/(1 − e^(−1080/300)))(1/(1 − e^(−2330/300)))

[Note: corrected; the source prints "(1/(1 − e^(−1980/300)))" where this reads "(1/(1 − e^(−1080/300)))". As above: 1080 K.]

= (1.0018)(1.0281)(1.0004) = 1.030

[Note: corrected; the source prints "= (1.0018)(1.0014)(1.0004) = 1.0035" where this reads "= (1.0018)(1.0281)(1.0004) = 1.030". With Θ = 1080 K the bend contributes 1.0281.]

The implication is that very few vibrational states of NO2 (other than the ground vibrational state) are accessible at 300 K. This is standard of the vibrations of most molecules.
