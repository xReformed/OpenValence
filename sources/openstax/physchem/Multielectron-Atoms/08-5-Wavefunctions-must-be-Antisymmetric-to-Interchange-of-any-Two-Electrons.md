---
title: "8.5: Wavefunctions must be Antisymmetric to Interchange of any Two Electrons"
book: "Physical Chemistry (LibreTexts)"
chapter: "8: Multielectron Atoms"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08%3A_Multielectron_Atoms/8.05%3A_Wavefunctions_must_be_Antisymmetric_to_Interchange_of_any_Two_Electrons"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Interprete the consequence of exchanging two electrons in a multi-electron atom on the wavelengths
- Connect the Pauli’s Exclusion Principle to the permutation symmetry of multi-electron atoms

Quantum mechanics allows us to predict the results of experiments. If we conduct an experiment with indistinguishable particles a correct quantum description cannot allow anything which distinguishes between them. For example, if the wavefunctions of two particles overlap, and we detect a particle, which one is it? The answer to this is not only that we do not know, but that we cannot know. Quantum mechanics can only tell us the probability of finding a particle in a given region. The wavefunction must therefore describe both particles.

The Schrödinger equation for the helium atom is then:

[−(ħ^2/(2 m))(∇1^2 + ∇2^2) − V(r1) − V(r2) + V12(r1, r2)]ψ(r1, r2) = Eψ(r1, r2)

[Note: corrected; the source prints "(∇1^2 + ∇1^2)" where this reads "(∇1^2 + ∇2^2)". One Laplacian for each electron.]

where the subscripts label each particle, and there are six coordinates, three for each particle. While |ψ(r1, r2)⟩ is a six dimensional wavefunction (three for each electron) and contains all the information we can measure (a Postulate of Quantum Mechanics), it only provide the probability of finding the electron at a specific volume element, and does not tell us which particle is which (e.g., is it electon 1 or electron 2?).

What basis states would be appropriate for |ψ⟩? If we consider the orbital approximation that uses a product wavefunction

|ψ(r1, r2)⟩ = |φa(r1)⟩|φb(r2)⟩

where |φa(r1)⟩ and |φb(r2)⟩ are one-particle spin-orbitals (with both spin and spatial components) of electrons 1 and 2. This approximation allows us to separate the two particle equation into two one-electron equations:

[Note: corrected; the source prints "of atoms 1 and 2" where this reads "of electrons 1 and 2". The labels 1 and 2 are the two electrons.]

[−(ħ^2/(2 m))∇1^2 + V(r1)]|φa(r1)⟩ = E|φa(r1)⟩

[−(ħ^2/(2 m))∇2^2 + V(r2)]|φb(r2)⟩ = E|φb(r2)⟩

[Note: corrected; the source prints "= E|φa(r2)⟩" where this reads "= E|φb(r2)⟩". The eigenfunction on both sides is φb.]

provided that the particles do not interact (e.g., ∇1^2 does not act on |φb(r2)⟩ and V12 = 0).

Unfortunately, by doing this we have introduced unphysical labels to the indistinguishable particles. And this is wrong: the effect of it is that the particles do not interfere with each other because they are in different dimensions (six dimensional space - remember?). When we construct a two particle wavefunction out of two one-particle wavefunctions we must be ensure that the probability density (the measurable quantity |ψ|^2) is independent of the artificial labels.

## The Exchange Operator

We can deepen our understanding of the quantum mechanical description of multi-electron atoms by examining the concepts of electron indistinguishability and the Pauli Exclusion Principle in detail. We will use the following statement as a guide to keep our explorations focused on the development of a clear picture of the multi-electron atom: “When a multi-electron wavefunction is built as a product of single-electron wavefunctions, the corresponding concept is that exactly one electron’s worth of charge density is described by each atomic spin-orbital.”

A subtle, but important part of the conceptual picture, is that the electrons in a multi-electron system are not distinguishable from one another by any experimental means. Since the electrons are indistinguishable, the probability density we calculate by squaring the modulus of our multi-electron wavefunction also cannot change when the electrons are interchanged (permuted) between different orbitals. In general, if we interchange two identical particles, the world does not change. As we will see below, this requirement leads to the idea that the world can be divided into two types of particles based on their behavior with respect to permutation or interchange.

In order for the probability density to remain unchanged when two particles are permuted, the wavefunction itself can change only by a factor of e^(iφ), which represents a complex number, when the particles described by that wavefunction are permuted. As we will show below, the e^(iφ) factor is possible because the probability density depends on the absolute square of the function and all expectation values involve ψψ^*. Consequently e^(iφ) disappears in any calculation that relates to the real world because e^(iφ)e^(−iφ) = 1.

We could symbolically write an approximate two-particle wavefunction as ψ(r1, r2). This could be, for example, a two-electron wavefunction for helium. To exchange the two particles, we simply substitute the coordinates of particle 1 (r1) for the coordinates of particle 2 (r2) and vice versa, to get the new wavefunction ψ(r2, r1). This new wavefunction must have the property that

[Note: corrected; the source prints "to get the new wavefunction ψ(r1, r2)." where this reads "to get the new wavefunction ψ(r2, r1).". Swapping the labels gives ψ(r2, r1).]

|ψ(r1, r2)|^2 = ψ(r2, r1)^*ψ(r2, r1) = ψ(r1, r2)^*ψ(r1, r2)

since the probability density of the electrons in the atom does not change upon permutation of the electrons.

### Exercise 8.5.1

Permute the electrons the product function for He wavefunction:

ψ(r1, r2)⟩ = |φ_1s(r1)⟩|φ_1s(r2)⟩

Equation (8.5.1) will be true only if the wavefunctions before and after permutation are related by a factor of e^(iφ),

ψ(r2, r1) = e^(iφ)ψ(r1, r2)

[Note: corrected; the source prints "ψ(r1, r2) = e^(iφ)ψ(r1, r2)" where this reads "ψ(r2, r1) = e^(iφ)ψ(r1, r2)". The swapped function equals the original times a phase.]

so that

(e^(−iφ)ψ(r1, r2)^*)(e^(iφ)ψ(r1, r2)) = ψ(r1, r2)^*ψ(r1, r2)

[Note: corrected; the source prints "(e^(iφ)ψ(r1, r2)^*) =" where this reads "(e^(iφ)ψ(r1, r2)) =". Only the first factor is conjugated.]

If we exchange or permute two identical particles twice, we are (by definition) back to the original situation. If each permutation changes the wavefunction by e^(iφ), the double permutation must change the wavefunction by e^(iφ)e^(iφ). Since we then are back to the original state, the effect of the double permutation must equal 1; i.e.,

e^(iφ)e^(iφ) = e^(i2φ) = 1

which is true only if φ = 0 or an integer multiple of π. The requirement that a double permutation reproduce the original situation limits the acceptable values for e^(iφ) to either +1 (when φ = 0) or -1 (when φ = π). Both possibilities are found in nature.

### Exercise 8.5.2

Use Euler’s Equality

e^(iπ) + 1 = 0

to show that e^(i2φ) = 1 when φ = 0 or nπ and consequently e^(iφ) = ±1.

We can introduce the exchange operator P̂12: an operator which permutes the labels of the particles in a multi-particle wavefucntion. This is a rather strange operator, because it only changes the unphysical labels which we have attached to the one-particle wavefunctions in order to make the maths more easy. For a meaningful solution we must have a wavefunction which has a probability amplitude unchanged by P̂12: it must be either symmetric or antisymmetric with respect to exchange:

P̂12|ψ(r1, r2)⟩ = ±|ψ(r2, r1)⟩

[Note: as an eigenvalue equation this should read P̂12|ψ(r1, r2)⟩ = |ψ(r2, r1)⟩ = ±|ψ(r1, r2)⟩; the same holds for the + and − forms below. The text is left as printed.]

### Bosons and femions

Physical solutions must be eigenfunctions of P̂12 (i.e., Ĥ and P̂12 commute). Moveover, Equation (exchange) argues that the eigenvalues of the Exchange Operator are either +1 (bosons) or −1 (fermions).

Bosons

Wavefunctions for which e^(iφ) = +1 are defined as symmetric with respect to permutation, because the wavefunction is identical before and after a single permutation. Wavefunctions that are symmetric with respect to interchange of the particles obey the following mathematical relationship,

P̂12|ψ(r1, r2)⟩ = + |ψ(r2, r1)⟩

The behavior of some particles requires that the wavefunction be symmetric with respect to permutation. These particles are called bosons and have integer spin such as deuterium nuclei, photons, and gluons.

Fermions

The behavior of other particles requires that the wavefunction be antisymmetric with respect to permutation (e^(iφ) = −1). A wavefunction that is antisymmetric with respect to electron interchange is one whose output changes sign when the electron coordinates are interchanged, as shown below.

P̂12|ψ(r1, r2)⟩ = −|ψ(r2, r1)⟩

These particles are called fermions and have half-integer spin and include electrons, protons, and neutrinos. Since electrons are fermion, any wavefunction used to describe multiple electrons must be antisymmetric with respect to permutation of the electrons. The requirement that the wavefunction be antisymmetric applies to all multi-electron functions ψ(r1, r2, …ri), including those approximated as products of single electron functions

|ψ(r1, r2, …ri)⟩ ≈ φa(r1)φb(r2)…φi(ri)

### Exercise 8.5.4

What is meant by the term permutation symmetry?

### Exercise 8.5.5

Explain why the product function φ(r1)φ(r2) could describe two bosons (deuterium nuclei), but can not describe two fermions (e.g. electrons).

**Answer**

Because if we switch r1 and r2, the product function becomes φ(r2)φ(r1), which is equal to φ(r1)φ(r2), which is consistent with the wavefunctions of bosons, because boson wavefunctions are symmetric. However, fermion wavefunctions are antisymmetric, which means that if switch r1 and r2, the result should be -1×the original wavefunction. Therefore, the product function φ(r1)φ(r2) cannot describe fermions.

## The Pauli’s Exclusion Principle

Any physically meaningful Hamiltonian must commute with P̂12, otherwise Ĥ and P̂12 could not have common eigenfunctions and the system could not remain in an eigenstate of exchange. A simple product wavefunction like that in Equation (Product) does not satisfy this (unless φa = φb). A linear combination of all permutations is required to satisfy indistinguishability constraints.

For a two particle system (e.g., Helium) there is the antisymmetric combination

[Note: corrected; the source prints "the asymmetric combination" where this reads "the antisymmetric combination". Antisymmetric: it changes sign when the electrons are swapped.]

|ψ^−⟩ = 1/(√2)|φa(r1)φb(r2) − φa(r2)φb(r1)⟩

and symmetric combination

|ψ^+⟩ = C_ab|φa(r1)φb(r2) + φa(r2)φb(r1)⟩ + C_aa|φa(r2)φa(r1)⟩ + C_bb|φb(r2)φb(r1)⟩

where the C_ab terms are expansion and normalization parameters.

> Note that the antisymmetric combination (Equation (ASym)) cannot include terms where both particles are in the same state (spin-orbital), but there are three possibilities for the symmetric state (Equation (Sym)).

Although any linear combinations of C_ab, C_bb, and C_aa in Equation (Sym) is possible, there are three limiting expressions for possible symmetric combinations:

|ψ1^+i⟩ = C_ab|φa(r1)φb(r2) + φa(r2)φb(r1)⟩

|ψ2^+i⟩ = C_aa|φa(r2)φa(r1)⟩

|ψ3^+i⟩ = C_bb|φb(r2)φb(r1)⟩

If φa(r1) = φa(r2), then |φ^−i⟩ = 0. Thus there is no possible antisymmetric combination involving electrons in the same state (spin-orbit). This is the Pauli exclusion principle.

[Note: the antisymmetric combination vanishes when both electrons are in the same spin-orbital, φa = φb (as in the line |φb(r1)⟩ = |φa(r1)⟩ below). The text is left as printed.]

Figure 8.5.1: The 1s and 2s subshells for beryllium atoms can hold only two electrons and when filled, since each electrons is described by a specific spin-orbital and each orbital (spatial) can hold either an α or a β electron (i.e., they must have opposite spins). Otherwise they will have the same four quantum numbers, in violation of the Pauli Exclusion Principle.
Illustration comparing incorrect (red cross) and correct (green check) electron configurations for 1s, 2s, and 2p orbitals.

The Pauli Exclusion Principle argues that two electrons could not be described by the same spin-orbital. To see the relationship between this statement and the requirement that the wavefunction be antisymmetric for electrons, try to construct an anti-symmetric wavefunction for two electrons that are described by the same spin-orbital

|φb(r1)⟩ = φa(r2)⟩

For example, if this were the case for the anti-symmetric combination for helium (Equation (ASym)), then the wavefunction collapses to zero. We can only constructs wavefunctions that are antisymmetric with respect to permutation symmetry only if each electron is described by a different function.

> The Pauli Exclusion Principle is simply the requirement that the wavefunction be antisymmetric for electrons, since they are fermions.
