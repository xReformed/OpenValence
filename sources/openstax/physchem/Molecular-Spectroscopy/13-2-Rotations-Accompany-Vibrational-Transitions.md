---
title: "13.2: Rotations Accompany Vibrational Transitions"
book: "Physical Chemistry (LibreTexts)"
chapter: "13: Molecular Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13%3A_Molecular_Spectroscopy/13.02%3A_Rotations_Accompany_Vibrational_Transitions"
author: "Delmar"
license: "CC BY 4.0"
---

Each of the modes of vibration of diatomic molecules in the gas phase also contains closely-spaced (1-10 cm^-1 difference) energy states attributable to rotational transitions that accompany the vibrational transitions. A molecule’s rotation can be affected by its vibrational transition because there is a change in bond length, so these rotational transitions are expected to occur. Since vibrational energy states are on the order of 1000 cm^-1, the rotational energy states can be superimposed upon the vibrational energy states.

## Selection Rules

Rotational and Vibration transitions (also known as rigid rotor and harmonic oscillator) of molecules help us identify how molecules interact with each other, their bond length as mentioned in previous section. In order to know each transitions, we have to consider other terms like wavenumber, force constant, quantum number, etc. There are rotational energy levels associated with all vibrational levels. From this, vibrational transitions can couple with rotational transitions to give rovibrational spectra. Rovibrational spectra can be analyzed to determine average bond length.

We treat the molecule's vibrations as those of a harmonic oscillator (ignoring anharmonicity). The energy of a vibration is quantized in discrete levels and given by

Ev = hν(v + 1/2)

Where v is the vibrational quantum number and can have integer values 0, 1, 2..., and ν is the frequency of the vibration given by:

ν = (1/(2π))(k/μ)^(1/2)

where k is the force constant and μ is the reduced mass of a diatomic molecule with atom masses m1 and m2, given by

μ = (m1 m2)/(m1 + m2)

We treat the molecule's rotations as those of a rigid rotor (ignoring centrifugal distortion from non-rigid rotor aspects). The energy of a rotation is also quantized in discrete levels given by

Er = (h^2/(8π^2 I))J(J + 1)

In which I is the moment of inertia, given by

I = μr^2

where μ is the reduced mass (Equation (reduced mass)) and r is the equilibrium bond length.

Experimentally, frequencies or wavenumbers are measured rather than energies, and dividing by h or hc gives more commonly seen term values, F(J) using the rotational quantum number J and the rotational constant B in either frequency

[Note: corrected; the source prints "more commonly seen term symbols, F(J)" where this reads "more commonly seen term values, F(J)". F(J) is a term value; term symbols are labels such as ^1Σ^+.]

F(J) = (Er)/h = (h/(8π^2 I))J(J + 1) = BJ(J + 1)

or wavenumbers

F̃(J) = (Er)/hc = (h/(8π^2 cI))J(J + 1) = B̃J(J + 1)

It is important to note in which units one is working since the rotational constant is always represented as B, whether in frequency or wavenumbers.

- Vibrational Transition Selection Rules: At room temperature, typically only the lowest energy vibrational state v= 0 is populated, so typically v0 = 0 and ∆v = +1. The full selection rule is technically that ∆v = ±1, however here we assume energy can only go upwards because of the lack of population in the upper vibrational states.
- Rotational Transition Selection Rules: At room temperature, states with J≠0 can be populated since they represent the fine structure of vibrational states and have smaller energy differences than successive vibrational levels. Additionally, ∆J = ±1 since a photon contains one quantum of angular momentum and we abide by the principle of conservation of angular momentum. This is also the selection rule for rotational transitions.

[Note: corrected; the source prints "the principle of conservation of energy" where this reads "the principle of conservation of angular momentum". The ΔJ = ±1 rule comes from the photon's one unit of angular momentum.]

These two selection rules mean that the transition ∆J = 0 (i.e. J" = 0 and J' = 0, but ν0 ≠ 0 is forbidden and the pure vibrational transition is not observed in most cases. The rotational selection rule gives rise to an R-branch (when ∆J = +1) and a P-branch (when ∆J = -1). Each line of the branch is labeled R(J) or P(J), where J represents the value of the lower state Figure 13.2.1 ).

Figure 13.2.1: Rotation-Vibration Transitions. Rotational transitions are on the order of 1-10 cm^-1, while vibrational transitions are on the order of 1000 cm^-1. The difference of magnitude between the energy transitions allow rotational levels to be superimposed within vibrational levels.
Graph depicting a parabola with energy levels marked by horizontal lines, using red and blue for different levels.

### R-branch

When ∆J = +1, i.e. the rotational quantum number in the excited state is one more than the rotational quantum number in the ground state – R branch (in French, riche or rich). To find the energy of a line of the R-branch:

[Note: corrected; the source prints "the rotational quantum number in the ground state is one more than the rotational quantum number in the excited state" where this reads "the rotational quantum number in the excited state is one more than the rotational quantum number in the ground state". In the R branch J' = J + 1, as the (J + 1)(J + 2) below uses.]

ΔE = hν0 + hB[J^′(J^′ + 1) − J(J + 1)]

[Note: corrected; the source prints "hB[J(J + 1) − J^′(J^′ + 1)]" where this reads "hB[J^′(J^′ + 1) − J(J + 1)]". With J the lower and J' the upper level, the rotational energy gained is B[J'(J' + 1) − J(J + 1)]; as printed the results below (+2hB(J + 1), −2hBJ) would come out with the opposite sign.]

= hν0 + hB[(J + 1)(J + 2) − J(J + 1)]

= hν0 + 2 hB(J + 1)

### P-branch

When ∆J = -1, i.e. the rotational quantum number in the excited state is one less than the rotational quantum number in the ground state – P branch (in French, pauvre or poor). To find the energy of a line of the P-branch:

[Note: corrected; the source prints "the rotational quantum number in the ground state is one less than the rotational quantum number in the excited state" where this reads "the rotational quantum number in the excited state is one less than the rotational quantum number in the ground state". In the P branch J' = J − 1, as the J(J − 1) below uses.]

ΔE = hν0 + hB[J^′(J^′ + 1) − J(J + 1)]

[Note: corrected; the source prints "hB[J(J + 1) − J^′(J^′ + 1)]" where this reads "hB[J^′(J^′ + 1) − J(J + 1)]". As above.]

= hν0 + hB[J(J − 1) − J(J + 1)]

= hν0 − 2 hBJ

### Q-branch

When ∆J = 0, i.e. the rotational quantum number in the ground state is the same as the rotational quantum number in the excited state – Q branch (simple, the letter between P and R). To find the energy of a line of the Q-branch:

ΔE = hν0 + hB[J^′(J^′ + 1) − J(J + 1)]

[Note: corrected; the source prints "hB[J(J + 1) − J^′(J^′ + 1)]" where this reads "hB[J^′(J^′ + 1) − J(J + 1)]". As above.]

= hν0

The Q-branch can be observed in polyatomic molecules and diatomic molecules with electronic angular momentum in the ground electronic state, e.g. nitric oxide, NO. Most diatomics, such as HCl, have no electronic angular momentum in the ground state, so ΔJ = 0 is forbidden and there is no Q-branch.

[Note: corrected; the source prints "Most diatomics, such as O2, have a small moment of inertia and thus very small angular momentum and yield no Q-branch." where this reads "Most diatomics, such as HCl, have no electronic angular momentum in the ground state, so ΔJ = 0 is forbidden and there is no Q-branch.". The Q branch is missing because ΔJ = 0 is forbidden for a ^1Σ state; and O2, being homonuclear, has no infrared rovibrational spectrum at all.]

Figure 13.2.2: Cartoon depiction of rotational energy levels, J, imposed on vibrational energy levels, v. The transitions between levels that would result in the P- and R-branches are depicted in purple and red, respectively, in addition to the theoretical Q-branch line in blue.
Energy-level diagram of rotational levels J on vibrational levels v, with upward transitions: P branch in purple, Q branch in blue and R branch in red.

[Note: corrected; the source prints "Figure 13.2.3: Cartoon depiction of rotational energy levels" where this reads "Figure 13.2.2: Cartoon depiction of rotational energy levels"; the source prints "Graph displaying upward arrows in three colors: purple, blue, and red, representing data trends over time." where this reads "Energy-level diagram of rotational levels J on vibrational levels v, with upward transitions: P branch in purple, Q branch in blue and R branch in red.". The number 13.2.3 belongs to the spectrum below; the text calls this one Figure 13.2.2. The image's alt text, machine-written, misreads the image; this describes it.]

As seen in Figure 13.2.2 , the lines of the P-branch (represented by purple arrows) and R-branch (represented by red arrows) are separated by specific multiples of B (i.e, 2B), thus the bond length can be deduced without the need for pure rotational spectroscopy.

The total nuclear energy of the combined rotation-vibration terms, S(v, J), can be written as the sum of the vibrational energy and the rotational energy

S(v, J) = G(v) + F(J)

where G(v) represents the energy of the harmonic oscillator, ignoring anharmonic components and F(J) represents the energy of a rigid rotor, ignoring centrifugal distortion.

[Note: corrected; the source prints "and S(J) represents the energy of a rigid rotor" where this reads "and F(J) represents the energy of a rigid rotor". The rotational term is F(J).]

From this, we can derive

S(v, J) = ν0(v + 1/2) + BJ(J + 1)

The spectrum we expect, based on the conditions described above, consists of lines equidistant in energy from one another, separated by a value of 2B. The relative intensity of the lines is a function of the rotational populations of the ground states, i.e. the intensity is proportional to the number of molecules that have made the transition. The overall intensity of the lines depends on the vibrational transition dipole moment.

Figure 13.2.3: A cartoon depiction of an ideal rovibrational spectrum.
A bar graph with purple bars on the left and red bars on the right, centered around a blue vertical line.

In Figure 13.2.3 , between P(1) and R(0) lies the zero gap, where the the first lines of both the P- and R-branch are separated by 4B, assuming that the rotational constant B is equal for both energy levels. The zero gap is also where we would expect the Q-branch, depicted as the dotted line, if it is allowed.

[Note: corrected; the source prints "In Figure 13.2.2 , between P(1) and R(0)" where this reads "In Figure 13.2.3 , between P(1) and R(0)". The spectrum is Figure 13.2.3.]

### Advanced Concept: Occupations (Peak Intensities)

The relative intensity of the P- and R-branch lines depends on the thermal distribution of molecules over the rotational levels; more specifically, they depend on the population of the lower J state. If we represent the population of the Jth upper level as N_J and the population of the lower state as N0, we can find the population of the upper state relative to the lower state using the Boltzmann distribution:

[Note: corrected; the source prints "the thermal distribution of electrons" where this reads "the thermal distribution of molecules over the rotational levels". It is the molecules' rotational populations that matter.]

(NJ)/(N0) = (2J + 1)e^(−(Er)/kT)

(2J+1) gives the degeneracy of the Jth upper level arising from the allowed values of M_J (+J to –J). As J increases, the degeneracy factor increases and the exponential factor decreases until at high J, the exponential factor wins out and N_J/N0 passes through a maximum at a certain level, J_max, and then falls toward zero. Thus, when

[Note: corrected; the source prints "N_J/N0 approaches zero at a certain level, J_max" where this reads "N_J/N0 passes through a maximum at a certain level, J_max, and then falls toward zero". J_max is the most populated level, as the derivation below finds.]

(d/dJ)((NJ)/(N0)) = 0

by differentiation, we obtain

J_max = (kT/(2 hB))^(1/2) − 1/2

This is the reason that rovibrational spectral lines increase in intensity to a maximum as J increases, then decrease to zero as J continues to increase, as seen in Figure 13.2.3 .

[Note: corrected; the source prints "increase in energy to a maximum" where this reads "increase in intensity to a maximum"; the source prints "as seen in Figure 13.2.2 ." where this reads "as seen in Figure 13.2.3 .". It is the intensity that rises and falls; the spectrum is Figure 13.2.3.]

From this relationship, we can also deduce that in heavier molecules, B will decrease because the moment of inertia will increase, and the decrease in the exponential factor is less pronounced. This results in the population distribution shifting to higher values of J. Similarly, as temperature increases, the population distribution will shift towards higher values of J.
