---
title: "8.11: Using Atomic Term Symbols to Interpret Atomic Spectra"
book: "Physical Chemistry (LibreTexts)"
chapter: "8: Multielectron Atoms"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08%3A_Multielectron_Atoms/8.11%3A_Using_Atomic_Term_Symbols_to_Interpret_Atomic_Spectra"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Demonstrate how spin-orbit coupling is experimentally observed in atomic spectra
- Use atomic terms symbols to ascribe transitions to specific angular momenta states described by atomic term symbols

From 1887 on, spectroscopists using high resolution instruments found that lines in the hydrogen atom spectrum actually are not single lines but they are multiplets as shown for an isotopic mixture of hydrogen,(Hα^1) and deuterium, (Hα^2), in Figure 8.11.1 . A multiplet consists of two or more closely spaced lines. Two lines together form a doublet, three a triplet, etc. Multiplets also are called fine structure. The term fine structure means the lines are spaced close together, i.e. finely spaced. Such fine structure also was found in spectra of one-electron ions such as He^+.

[Note: corrected; the source prints "Around 1930, several spectroscopists" where this reads "From 1887 on, spectroscopists". Michelson and Morley resolved the Hα line into a doublet in 1887, and Sommerfeld explained the fine structure in 1916; the hydrogen–deuterium spectrum in the figure is a later measurement.]

Figure 8.11.1: Photograph of the first line in the Balmer series for atomic hydrogen and deuterium. These lines are identified as Hα^1 (hydrogen) and Hα^2 (deuterium), respectively. From H.E. White, Introduction to Atomic Spectra (McGraw-Hill, New York, 1934) p. 132 and G.N. Lewis and F.H. Spedding, Phys. Rev. 43, 964 (1933). The doublet splitting for Hα^1 at 656.279 nm was measured to be 0.326 cm^−1.
Two vertical faint lines on a dark background, labeled H¹α and H²α, suggesting a spectral analysis or emission spectrum.

You should recall that the Hα^1 line in the Balmer series at 656.279 nm was understood as resulting from a single transition of an electron from the n = 3 energy level to the n = 2 level. The observation of fine structure revealed that an orbital energy level diagram does not completely describe the energy levels of atoms. This fine structure also provided key evidence at the time for the existence of electron spin, which was used not only to give a qualitative explanation for the multiplets but also to furnish highly accurate calculations of the multiplet splittings.

## Spin-Orbit Coupling

Specifying the orbital configuration of an atom does not uniquely identify the electronic state of the atom because the orbital angular momentum, the spin angular momentum, and the total angular momentum are not precisely specified. For example in the hydrogen 2p^1 configuration, the electron can be in any of the three p-orbitals, ml = +1, 0, and –1, and have spins with ms = +1/2 or –1/2. Thus, there are 3 times 2 different possibilities or states. Also, the orbital and spin angular momentum of the electrons combine in multiple ways to produce angular momentum vectors that are characteristic of the entire atom not just individual electrons, and these different combinations can have different energies. This coupling of orbital and spin angular momentum occurs because both the electron spin and orbital motion produce magnetic dipole moments. As we have seen previously, the relationship between the angular momentum and the magnetic moment is given by the gyromagnetic ratio. These magnetic dipoles interact just like two tiny bar magnets attracting and repelling each other. This interaction is called spin-orbit interaction. The interaction energy is proportional to the scalar product of the magnetic dipole moments, which are proportional to the angular momentum vectors.

E_(s-o) ∝ S·L

with the following terms added to the Hamiltonian

Ĥ_(s-o) ∝ Ŝ·L̂

where the constant of proportionality is called the spin-orbit coupling constant. The spin-orbit interaction couples the spin motion and orbital motion of all the electrons together. This coupling means that exact wavefunctions are not eigenfunctions of the spin and orbital angular momentum operators separately. Rather the total angular momentum J = L + S, the vector sum of the spin and orbital angular momentum, is required to be coupled for a completely accurate description of the system. Trying to describe the coupled system in terms of spin and orbital angular momentum separately is analogous to trying to describe the positions of two coupled bar magnets independently. It cannot be done; their interaction must be taken into account (Figure 8.11.1 ).

Figure 8.11.1: An electron that orbits the nucleus induces a "current" and a magnetic field. Similarly, the rotating electron (really intrinsic spin) of the electron induces a different magnet. Both a magnetic (dipole) moments will interact with each other via spin-orbit coupling to generate fine structure atomic spectra.(CC-SA OpenStax).
Diagram showing a current-carrying loop and a polarization diagram, illustrating magnetic and electric field directions.

## Atomic Spectroscopy

Higher energy or excited orbital configurations also exist. The hydrogen atom can absorb energy, and the electron can be promoted to a higher energy orbital. The electronic states that result from these excited orbital configurations also are characterized or labeled by term symbols. The details of how to determine the term symbols for multi-electron atoms and for cases where both the orbital and spin angular momentum differ from zero are given elsewhere, along with rules for determining the relative energies of the terms.

We have found that the selection rules for promoting a single electron moving from one atomic orbital to another via the absorption or emission of light are

Δl = ±1

Δml = 0, ±1

These selection rules arise from the conservation fo angular momentum during a spectroscopic transition and the fact that a photon has a spin 1. Within the limits of L-S coupling, these rules can be expressed in terms of atomic term symbols resulting in the resulting Russell-Saunders selection rules:

ΔS = 0

ΔL = 0, ±1

ΔJ = 0, ±1,

but the J = 0 to J = 0 transition is forbidden

ΔmJ = 0, ±1

but the mJ = 0 to mJ = 0 transition is forbidden if ΔJ = 0.

These selection rules result from the general properties of angular momentum such as the conservation of angular momentum and commutation relations. The ΔL = 0 option in Equation (8.11.9) does not violate the conservation of angular momentum discussed previously, since Δl = ±1 is still required. The orbital angular momentum of an electron must change upon absorption, but this does not necessarily affect the overall momentum of the state given by Equation (8.11.9).

The selection rules apply only to atoms that can be described with Russell-Saunders (LS) coupling. These rules fail as the atomic number increases because the S and L quantum numbers become "bad" quantum numbers; this occurs when the jj-coupling coupling approach is more applicable. For example, the transition between singlet (S = 0) and triplet (S = 1) states (violation of selection rule in Equation (8.11.8)) are allowed and experimentally observed, in heavy atoms.

[Note: corrected; the source prints "single (S = 1/2 and triplet S = 1 states" where this reads "singlet (S = 0) and triplet (S = 1) states". A singlet has S = 0.]

### Example 8.11.1 : Sodium Atoms

An example of this fine structure is the emission of sodium atoms.

Figure above does not show this splitting).
A black rectangle with two vertical colored lines: one aqua and one yellow, creating a striking contrast.

| 616.07 nm | 615.42 nm | 589.00 nm | 589.59 nm | 568.82 nm | 568.26 nm |
| --- | --- | --- | --- | --- | --- |

How can these transitions be described in terms of transitions between levels

[Note: corrected; the source prints "transitions between microstates" where this reads "transitions between levels". The term symbols below name levels; a microstate is one arrangement of the electron's ml and ms values.]

**Solution**

We need to discussed states in terms of not only electron configurations, but in terms of levels (i.e., term symbols) and the principal quantum number of the valence electron, n:

[Note: corrected; the source prints "in terms of microstates (i.e., term symbols)" where this reads "in terms of levels (i.e., term symbols)". Each term symbol with its J value names a level.]

- The ground state has a (Ne]ns^1 configuration, which has only one level ^2 S_1/2
- The excited state with the valence electron in the p-orbitals has an electron configuration of [Ne]np^1, which has two levels: ^2 P_3/2 and ^2 P_1/2
- The excited state with the valence electron in the d-orbitals has an electron configuration of [Ne]nd^1, which has two levels of ^2 D_5/2 and ^2 D_3/2

[Note: corrected; the source prints "the p-orbitals has an electron configuration of [Ne]nd^1" where this reads "the d-orbitals has an electron configuration of [Ne]nd^1"; the source prints "which has only one microstate ^2 S_1/2" where this reads "which has only one level ^2 S_1/2"; the source prints "which has two microstates: ^2 P_3/2" where this reads "which has two levels: ^2 P_3/2"; the source prints "which has two microstates of ^2 D_5/2" where this reads "which has two levels of ^2 D_5/2". The last item is the d-orbital case. The term symbols are levels: ^2S1/2 holds two microstates, and ^2P3/2 and ^2P1/2 four and two.]

Observed lines can be explained:

- 5S → 3P gives two lines since the terminal configuration has two levels: 616.07, 615.42 nm
- 3P → 3S gives two lines since the initial configuration has two levels: 589.00, 589.59 nm
- 4D → 3P gives two lines since the terminal configuration has two levels: 568.82, 568.26 nm

[Note: corrected; the source prints "5S → 3P gives two lines since the initial configuration has two microstates" where this reads "5S → 3P gives two lines since the terminal configuration has two levels"; the source prints "3P → 3S gives two lines since the terminal configuration has two microstates" where this reads "3P → 3S gives two lines since the initial configuration has two levels"; the source prints "4D → 3P gives two lines since the terminal configuration has two microstates" where this reads "4D → 3P gives two lines since the terminal configuration has two levels". An S state has one level (^2S1/2) and a P state two (^2P3/2, ^2P1/2): 5S → 3P splits because of the terminal 3P, and 3P → 3S because of the initial 3P. The wavelengths are right.]

### Splitting of the Sodium D Line

One notable atomic spectral line of sodium vapor is the so-called D-line, which may be observed directly as the sodium flame-test line and also the major light output of low -pressure sodium lamps (these produce pressure sodium lamps (these produce an unnatural yellow). The D-line is one of the classified Fraunhofer lines in Sodium vapor in the upper layers of lines. Sodium vapor in the upper layers of the sun creates a dark line in the emitted spectrum of electromagnetic radiation by absorbing visible light in a band of wavelengths around 589.5 nm. This wavelength corresponds to transitions in atomic sodium in which the valence-electron transitions from a 3s to 3p electronic state.

Closer examination of the visible spectrum of atomic sodium reveals that the D-line actually consists of two lines called the D1 and D2 lines at 589.6 nm and 589.0 nm, respectively. The splitting between these lines arises because of spin-orbit coupling. Na has one unpaired electron (S = ½). If we consider the S → P transition, then for the excited state, P, we have L = 1. Thus, J = 3/2 or J = 1/2.

[Note: corrected; the source prints "589 6 nm" where this reads "589.6 nm". The D1 line is at 589.6 nm.]

Now we want to apply these ideas to understand why multiplet structure is found in the luminescence spectrum of hydrogen and single electron ions. As we have said, the Hα line in the Balmer series at 656.279 nm can be understood via a transition of an electron in a n = 3 atomic orbital to a n = 2 atomic orbital. When this spectral line was examined using high-resolution instruments, it was found actually to be a doublet, i.e. two lines separated by 0.326 cm^-1.

There are 9 degenerate orbitals associated with the n = 3 level, and 4 associated with the n = 2 level. Since an electron can be in any orbital with any one of two spins, we expect the total number of states to be twice the number of orbitals. The number of orbitals is given by n^2 so there should be 8 states associated with n = 2 and 18 states associated with n = 3. Using the ideas of vector addition of angular momentum, the terms that result from having an electron in any one of these orbitals are given in Table 8.11.1 .

Table 8.11.1 : H Atom Terms Originating from n = 1, 2, and 3

| Orbital Configuration | Term Symbols | Degeneracy |
| --- | --- | --- |
| 1s^1 | ^2 S_1/2 | 2 |
| 2s^1 | ^2 S_1/2 | 2 |
| 2p^1 | ^2 P_1/2, ^2 P_3/2 | 2, 4 |
| 3s^1 | ^2 S_1/2 | 2 |
| 3p^1 | ^2 P_1/2, ^2 P_3/2 | 2, 4 |
| 3d^1 | ^2 D_3/2, ^2 D_5/2 | 4, 6 |

Table 8.11.1 shows that there are three terms associated with n = 2, and 5 terms associated with n = 3. In principle, each term can have a different energy. The degeneracy of each term is determined by the number of projections that the total angular momentum vector has on the z-axis. These projections depend on the mJ quantum number, which ranges from + J to –J in integer steps. J is the total angular momentum quantum number, which is given by the subscript in the term symbol. This relationship between mJ and J (mJ varies from + J to –J in integer steps) is true for any angular momentum vector.

### Exercise 8.11.3

Confirm that the nine term symbols in Table 8.11.1 are correct.

### Exercise 8.11.4

Confirm that the values for the degeneracy in Table 8.11.1 are correct and that the total number of states add up to 8 for n = 2 and 18 for n = 3.

The energies of the terms depend upon spin-orbit coupling and relativistic corrections that need to be included in the Hamiltonian operator in order to provide a more complete description of the hydrogen atom. As a consequence of these effects, all terms with the same n and J quantum numbers have the same energy, while terms with different values for n or J have different energies. The theoretical term splittings as given by H.E. White, Introduction to Atomic Spectra (McGraw-Hill, New York, 1934) pp. 132-137 and are shown in Figure 8.11.2 .

Figure 8.11.2: Energy level diagram for the electronic states of hydrogen corresponding to an electron with the principal quantum number n = 3 and n = 2. While the relative energies of the terms are drawn to scale, the energy of n = 3 relative to n = 2 is not. Transitions to the 2P3/2 and (2P1/2 and 2S1/2) levels correspond to the two lines in the Hα^1 band, which have a measured separation of 0.326 cm^-1.

Figure 8.11.2 shows 5 allowed transitions for the electron in the states associated with n = 3 to the states associated with n = 2. Of these five, two are most intense and are responsible for the doublet structure. These two transitions are indicated by the wide black lines at the bottom of the figure to correspond to the lines observed in the photographic spectrum shown in Figure 8.11.1 . The other transitions contribute to the width of these lines or are not observed. The theoretical value for the doublet splitting is 0.328 cm^-1, which is in excellent agreement with the measured value of 0.326 cm^-1. The value of 0.328 cm^-1 is obtained by taking the difference, 0.364 – 0.036 cm^-1,in the term splittings.

[Note: corrected; the source prints "photographic spectrum shown in Figure 8.11.2" where this reads "photographic spectrum shown in Figure 8.11.1". The photograph is Figure 8.11.1.]

As we have just seen, the electronic states, as identified by the term symbols, are essential in understanding the spectra and energy level structure of atoms, but it also is important to associate the term symbols and states with the orbital electron configurations. The orbital configurations help us understand many of the general or coarse features of spectra and are necessary to produce a physical picture of how the electron density changes because of a spectroscopic transition.

### Exercise 8.11.5

Use the Russell-Saunders selection rules to determine which transitions contribute to the Hα line in the hydrogen spectrum.
