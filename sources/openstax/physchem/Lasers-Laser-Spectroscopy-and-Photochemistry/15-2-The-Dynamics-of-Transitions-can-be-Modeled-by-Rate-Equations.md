---
title: "15.2: The Dynamics of Transitions can be Modeled by Rate Equations"
book: "Physical Chemistry (LibreTexts)"
chapter: "15: Lasers, Laser Spectroscopy, and Photochemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/15%3A_Lasers_Laser_Spectroscopy_and_Photochemistry/15.02%3A_The_Dynamics_of_Transitions_can_be_Modeled_by_Rate_Equations"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## The Interaction of Light with Atoms

In 1916, Albert Einstein proposed that there are three processes occurring in the formation of an atomic spectral line. The three processes are referred to as spontaneous emission, stimulated emission, and absorption (figure 15.2.1).

Figure 15.2.1: The three processes that can occur during the formation of a spectral line. A) Absorption of a photon, leading to the promotion of an electron to a higher electronic energy level. B) The spontaneous emission of a photon created by the relaxation of an electron back to the ground state. C) The stimulated emission of a photon created by the influence of a passing photon, accompanied by the relaxation of an electron back to the ground state. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)

For now, let's make our discussion as simple as possible, by assuming we are talking about the interaction of light with an atom that has only two energy levels. There is a collection of these atoms present, and they are in an assortment of states, some in the ground state, and some in "the" excited state. Our discussion of photon emission to this point has generally centered around spontaneous emission, the triggering of which we attributed to a perturbation in the hamiltonian that comes from (if nothing else) vacuum fluctuations.

Suppose some of these atoms spontaneously emit photons, and now the collection of atoms is not sitting in a total vacuum, but is in the presence of many photons as well. We now consider what effects these present photons can have on the atoms. The answer depends upon which state the atom is in when it encounters the photon. If the atom is in the ground state, then it can absorb the photon and go to the excited state. If the atom is in its excited state, it can't absorb the photon, but the time-varying EM fields of the photon present a nice perturbation to the electron's hamiltonian (at just the right frequency!) to induce the emission of a photon. This is called stimulated emission. The photon that induces the emission is unaffected by the interaction, and continues on its merry way. The emitted photon naturally has the same frequency as the passing photon (the energy gap assured this), but it also emerges moving in the same direction as, and in phase with the stimulating photon. This completes the acronym - Light Amplification by the Stimulated Emission of Radiation.

It turns out that if a photon happens by two of these atoms, the first in the ground state and the second in the excited state, the probability that it will be absorbed by the first is equal to the probability that it will stimulate emission in the other – neither of these results is preferred over the other. Now consider a collection of these atoms in a state of some fixed total energy. This total energy comes from the number of atoms in the ground state multiplied by the energy of that state, plus the number of atoms in the excited state multiplied by the energy of that state. As we will discuss in a future chapter, the populations of these two states subject to the constraint of the total energy can be shown to be a function that depends upon the energy difference of the two states and the temperature of the collection of atoms. Specifically, if N1 is the number of atoms in the ground state, N2 is the number of atoms in the excited state, and the energy difference is ΔE, then the following relation holds:

[Note: corrected; the source prints "excited state multiplied by the number of atoms in that state" where this reads "excited state multiplied by the energy of that state". Each population is multiplied by its state's energy.]

N1 = N2 e^{ΔE/(kB T)}

where T is the temperature and kB is Boltzmann's constant. Clearly N1 is greater than N2, but how much greater? We can do a very quick calculation of this using an approximation that at room temperature, the constant kB T is about 1/40 eV. Let's assume that the energy difference between two energy states of an atom is on the order of 1eV. Then the number of ground state atoms would exceed the number of excited state atoms by a factor of e^40 = 2.4×10^17!

[Note: corrected; the source prints "is about 140 eV" where this reads "is about 1/40 eV". kB T at room temperature is 0.0257 eV, about 1/40 eV; that gives ΔE/kB T = 40 and the e^40 below.]

Thus, a photon passing through this collection has an equal probability of being absorbed or stimulating emission if it happens by an atom prepared for one of those actions. But there are so many more atoms available to absorb the photon, that this has a much greater chance of happening. While waiting for a photon to stimulate emission, an atom in an excited state will impatiently emit a photon spontaneously, which will then be much more likely to be absorbed than stimulate emission, and things continue like this, with some atoms spontaneously sending out photons while others absorb them... no laser.

## Einstein Coefficients

Einstein proposed a separate rate equation for each of the three processes described above. The rate of each process is proportional to the number of particles in either the ground state (absorption) or the excited state (emission). Each rate is also proportional to the spectral radiant energy density, ρν, which is a measure of the radiant energy density (ρ) per unit frequency of the light associated with the transition. Thus, ρν = (dρ)/dν, and has units of (J·s)/m^3. With each process there is also an associated Einstein coefficient, which is a proportionality constant.

### Photon absorption

Absorption is the process by which a photon is absorbed by the atom, causing an electron to jump from a lower energy level to a higher one (figure 15.2.1a). The process is described by the Einstein coefficient B12(m^3/(J·s^2)), which gives the probability per unit time per unit spectral energy density of the radiation field that an electron in state 1 with energy E1 will absorb a photon with an energy E2 − E1 = hν12 and jump to state 2 with energy E2. If N1(t) is the number density of atoms in state 1, then the change in the number density of atoms in state 1 per unit time due to absorption will be

[Note: corrected; the source prints "per unit spectral radiance" where this reads "per unit spectral energy density". B multiplies the spectral energy density ρν, whose units the stated ones fit.]

−(dN1(t))/dt = B12ρν(ν12)N1(t)

If only absorption occurred, the increase of the excited state population as a function of time is equal to the decrease of the ground state population as a function of time.

### Spontaneous emission

Spontaneous emission is the process by which an electron "spontaneously" (i.e. without any outside influence) decays from a higher energy level to a lower one (figure 15.2.1b). The process is described by the Einstein coefficient A21(s^−1), which gives the probability per unit time that an electron in state 2 with energy E2 will decay spontaneously to state 1 with energy E1, emitting a photon with an energy E2 − E1 = hν21. Due to the energy-time uncertainty principle, the transition actually produces photons within a narrow range of frequencies called the spectral linewidth. If N2(t) is the number density of atoms in state 2, then the change in the number density of atoms in state 2 per unit time due to spontaneous emission will be

−(dN2(t))/dt = A21N2(t)

The same process results in increasing of the population of the state 1:

(dN1(t))/dt = A21N2(t)

### Stimulated emission

Stimulated emission (also known as induced emission) is the process by which an electron is induced to jump from a higher energy level to a lower one by the presence of electromagnetic radiation at (or near) the frequency of the transition (figure 15.2.1c). From the thermodynamic viewpoint, this process must be regarded as negative absorption. The process is described by the Einstein coefficient B21(m^3/(J·s^2)), which gives the probability per unit time per unit spectral energy density of the radiation field that an electron in state 2 with energy E2will decay to state 1 with energy E1, emitting a photon with an energy E2 − E1 = hν21. The change in the number density of atoms in state 1 per unit time due to induced emission will be

[Note: corrected; the source prints "per unit spectral radiance" where this reads "per unit spectral energy density". As above.]

(dN1(t))/dt = B21ρν(ν21)N2(t)

## The Relationship between A21, B12, and B21

In 1900, Max Planck derived a formula for the energy density per unit bandwidth of a blackbody radiator by making the assumption that only discrete energies are allowed. His work agreed with known experimental data, and it is one of the fundamental ideas of quantum mechanics. More specifically, the spectral energy density per unit bandwidth, ρν(ν12) in units (J⋅s)/m^3, is given by

ρν(ν12) = (8πh)/c^3 · (ν12^3)/(e^{(hν12)/(kB T)}−1)

In a given sample of atoms exposed to radiation of the correct frequency all three processes will be occurring simultaneously. Thus the rate of change of the populations of the two states will be

−(dN1(t))/dt = (dN2(t))/dt = B12ρν(ν12)N1(t) − A21N2(t) − B21ρν(ν21)N2(t)

If we assume that the two energy states are in thermal equilibrium, then N1 and N2 are constant, and thus

−(dN1(t))/dt = (dN2(t))/dt = B12ρν(ν12)N1(t) − A21N2(t) − B21ρν(ν21)N2(t) = 0

Upon solving for ρν(ν12), we get

ρν(ν12) = (A21)/((N1(t)/N2(t))B12 − B21)

Recall that in this equation N1/N2 represents the electron density in the lower energy state divided by the electron density in the upper state at equilibrium. This quantity is a function of temperature. Assuming many allowed energy states, the population of a state decreases exponentially with its energy (relative to kB T), as per Boltzmann statistics.

[Note: corrected; the source prints "the number of occupied states decreases exponentially with temperature" where this reads "the population of a state decreases exponentially with its energy (relative to kB T)". Populations fall off with energy; the upper states fill as the temperature rises.]

N2/N1 = ((g2)/(g1))e^{(−hν12)/(kB T)}

The quantity (g2)/(g1) is the ratio of the degeneracies (the number of states of equal energy) of the upper and lower levels. In this expression, g1 and g2 are unitless measures of the number of ways electrons can occupy an energy states. Upon rearrangement, equation (15.2.5) becomes

[Note: corrected; the source prints "represents the degeneracy level, which is the number of allowed electrons in the upper state over the number of allowed electrons in the lower state" where this reads "is the ratio of the degeneracies (the number of states of equal energy) of the upper and lower levels". Degeneracy counts states, not electrons.]

N1/N2 = ((g1)/(g2))e^{(hν12)/(kB T)}

Equations (15.2.6) and (15.2.4) can be combined to get

ρν(ν12) = (A21)/((((g1)/(g2))e^{(hν12)/(kB T)})B12 − B21)

which can be rearranged to

ρν(ν12) = ((A21)/(B21))/((((g1B12)/(g2B21))e^{(hν12)/(kB T)}) − 1)

One expression for the energy density per unit bandwidth of this system is given by Equation (15.2.1). Equation (15.2.8) gives a second expression for the energy density per unit bandwidth, and it was found by considering the relative rates of absorption, spontaneous emission, and stimulated emission. These equations can be combined to relate the rates of the different processes.

(8πh)/c^3 · (ν12^3)/(e^{(hν12)/(kB T)}−1) = ((A21)/(B21))/((((g1B12)/(g2B21))e^{(hν12)/(kB T)}) − 1)

The above equation is true for the conditions

(A21)/(B21) = (8πhν12^3)/c^3

and

(g1B12)/(g2B21) = 1

If we know one of the Einstein coefficients, we can quickly calculate the other two Einstein coefficients using equations (15.2.10) and (15.2.11).

These equations also provide further insight into the operation of lasers and other devices based on stimulated emission. The overall nonequilibrium upper state population rate is given by

(dN2(t))/dt = −A21N2 − B21ρν(ν21)N2 + B21((g2)/(g1))ρν(ν12)N1

which can be simplified with some algebra.

(dN2(t))/dt = −A21N2 − B21ρν(ν12)(N2 − ((g2)/(g1))N1)

The term in parenthesis is the net upper state population. Optical amplification and lasing can only occur when the term in parenthesis is positive. The condition

N2 − ((g2)/(g1))N1 > 0

is called a population inversion. It only occurs when enough energy is being supplied to the system, by optical, electrical, or thermal means, so that there are more electrons in the upper energy level than the lower energy level. This situation cannot be achieved for a two-level system, as will be shown in the next section. However, in section 15.4, it will be shown that this situation can be achieved if the system has more than two levels.

## Contributors

- Andrea M. Mitofsky (Trine University)
- Tom Weideman (University of California, Davis)
- Wikipedia (https://en.Wikipedia.org/wiki/Einstein_coefficients)
- Tom Neils (Grand Rapids Community College)
