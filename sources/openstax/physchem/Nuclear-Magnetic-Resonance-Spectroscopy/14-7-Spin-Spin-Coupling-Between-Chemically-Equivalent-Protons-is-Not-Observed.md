---
title: "14.7: Spin-Spin Coupling Between Chemically Equivalent Protons is Not Observed"
book: "Physical Chemistry (LibreTexts)"
chapter: "14: Nuclear Magnetic Resonance Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/14%3A_Nuclear_Magnetic_Resonance_Spectroscopy/14.07%3A_Spin-Spin_Coupling_Between_Chemically_Equivalent_Protons_is_Not_Observed"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

When doing NMR spectroscopy, it is an observed fact that equivalent hydrogens do not split one another. Why don't equivalent hydrogens split each other's signals? For example, why is the NMR spectrum for ethane a singlet instead of a quartet or even a dodecuplet (due to the hydrogens on the same carbon)? What is so special about hydrogens being equivalent to one another that causes no splitting to be observed?

Finding the states between which transitions occur

The Hamiltonian for two coupled spins is

Ĥ = ω1 Î_1z + ω2 Î_2z + ((2πJ12)/ħ)(Î⃗1·Î⃗2)

where ω1 and ω2 are the Larmor frequencies^([2]) of the two nuclei and J12 is the coupling constant (in Hz) between the two nuclei. (The factor of 2π/ħ is simply there to bring it into energy units.) Îi is the operator for the spin angular momentum of nucleus i and Î_iz is the operator for its projection along the z-axis.

However, in NMR, it is customary to work in frequency units instead of energy units. Since E = hν, we simply need to divide through by h. Bearing in mind that ω = 2πν and h = 2πħ, we get:

Ĥ_freq = ((ν1)/ħ)Î_1z + ((ν2)/ħ)Î_2z + ((J12)/ħ^2)(Î⃗1·Î⃗2)

On top of that, to make the math easier, it is also quite common to set ħ = 1. Therefore, we have

Ĥ_freq = ν1 Î_1z + ν2 Î_2z + J12(Î⃗1·Î⃗2)

We will deal with two spin-1/2 nuclei here, where |α⟩ and |β⟩ represent the "up" and "down" spins (recall we set ħ = 1 so it doesn't appear in the eigenvalues):

Î_iz|αi⟩ = 1/2|αi⟩; Î_iz|βi⟩ = −1/2|βi⟩; (i = 1,2)

Furthermore since we are dealing with equivalent nuclei we can simply set ν1 = ν2 = ν and drop the subscript in J12 just to make it a bit cleaner:

Ĥ = ν(Î_1z + Î_2z) + J(Î⃗1·Î⃗2)

Now, we need to find the eigenstates and eigenvalues of Ĥ. To do so, we will adopt the basis set of product functions (|α1 α2⟩, |α1 β2⟩, |β1 α2⟩, |β1 β2⟩). From equation (4) we have

Î_1z|α1 α2⟩ = 1/2|α1 α2⟩; Î_2z|α1 α2⟩ = 1/2|α1 α2⟩

Î_1z|α1 β2⟩ = 1/2|α1 β2⟩; Î_2z|α1 β2⟩ = −1/2|α1 β2⟩

Î_1z|β1 α2⟩ = −1/2|β1 α2⟩; Î_2z|β1 α2⟩ = 1/2|β1 α2⟩

Î_1z|β1 β2⟩ = −1/2|β1 β2⟩; Î_2z|β1 β2⟩ = −1/2|β1 β2⟩

The action of the scalar product Î⃗1·Î⃗2 is more complicated. We need to introduce the shift operators (or ladder operators).

Î_(i+) = Î_ix + iÎ_iy; Î_(i−) = Î_ix − iÎ_iy

from which we can obtain

Î_ix = (Î_(i+) + Î_(i−))/2; Î_iy = (Î_(i+) − Î_(i−))/(2i)

So, finally, we can write

Î⃗1·Î⃗2 = Î_1xÎ_2x + Î_1yÎ_2y + Î_1zÎ_2z

= (Î_(1+)Î_(2−) + Î_(1−)Î_(2+))/2 + Î_1zÎ_2z

where in going from (12) to (13) one simply substitutes in (11) and does a fair bit of algebraic manipulation. The action of the shift operators are

Î_(i+)|αi⟩ = 0; Î_(i+)|βi⟩ = |αi⟩ (14)

Î_(i−)|αi⟩ = |βi⟩; Î_(i−)|βi⟩ = 0 (14)

This allows you to work out the effect of Î⃗1·Î⃗2 on our basis states. The actual math is left to the reader and I will simply quote the results:

Ĥ|α1 α2⟩ = (ν + J/4)|α1 α2⟩

Ĥ|α1 β2⟩ = −J/4|α1 β2⟩ + J/2|β1 α2⟩

Ĥ|β1 α2⟩ = J/2|α1 β2⟩−J/4|β1 α2⟩

Ĥ|β1 β2⟩ = (−ν + J/4)|β1 β2⟩

Therefore in this basis the Hamiltonian matrix is

H = (ν + J/4, 0, 0, 0; 0, −J/4, J/2, 0; 0, J/2, −J/4, 0; 0, 0, 0, −ν + J/4)

Finding the eigenvectors and eigenvalues of this matrix is again left to the reader (it is not a difficult task) and they are (eigenvalues denoted Ei)

|1⟩ = |α1 α2⟩; E1 = ν + J/4

|2⟩ = (1/(√2))(|α1 β2⟩ + |β1 α2⟩); E2 = J/4

|3⟩ = (1/(√2))(|α1 β2⟩−|β1 α2⟩); E3 = −(3J)/4

|4⟩ = |β1 β2⟩; E4 = −ν + J/4

The form of the eigenstates should be familiar: they are simply the triplet and singlet states of two spin-1/2 particles. These states arise from the coupling of two sources of angular momenta, I1 and I2, to form one overall angular momentum denoted I.

I⃗ = I⃗1 + I⃗2

The allowed values of I are determined by the Clebsch-Gordan series:

I = I1 + I2, I1 + I2 − 1, …, |I1 − I2|

Since I1 = I2 = 1/2, I can take the values 1 and 0. The values of MI, the projection of the total angular momentum along the z-axis, are as usual

MI = I, I − 1, …, −I

so the states with I = 1 ("triplet") have MI = 1,0, −1 and the state with I = 0 ("singlet") has MI = 0. One can use more quantum mechanics to work out which state is associated with which quantum numbers, but I will not do it here. They are:



| State | I | MI |
| --- | --- | --- |
| \|1⟩ | 1 | 1 |
| \|2⟩ | 1 | 0 |
| \|3⟩ | 0 | 0 |
| \|4⟩ | 1 | −1 |



## Selection rules

We have four different states, which leads to (4 choose 2) = 6 different possible transitions. However, not all of these transitions are allowed.

The intensity of the transition is proportional to the square of the matrix element ⟨ψ_f|Ĥ'|ψ_i⟩ (the so-called "transition dipole moment"), where Ĥ' is the Hamiltonian for the process that induces the transition. In the case of NMR transitions, the transition arises due to a magnetic field aligned along the x-axis.^([3]) The corresponding Hamiltonian is therefore

Ĥ' = ω'(Î_1x + Î_2x) = ω'Îx

Exactly what ω' represents is not important here because we are only really concerned about whether the transition dipole moment is zero or not.^([4]) Making use of the relations established in equations (10) and (11),^([5]) one can find that the selection rules are

ΔI = 0;ΔMI = ±1

which means that the allowed transitions are |4⟩ ↔ |2⟩ and |2⟩ ↔ |1⟩. Transitions to and from the singlet state |3⟩ are forbidden. The energies of the transitions are

E_(4 ↔ 2) = J/4 − (−ν + J/4) = ν

E_(2 ↔ 1) = (ν + J/4) − J/4 = ν

i.e. the two transitions are degenerate and only one line in the spectrum at frequency ν is observed. This is exactly what is depicted in the diagrams posted in the other answers.

[Note: this part comes from an answer on a question-and-answer site; the "other answers" and their diagrams are not in this book, and footnote [1] has no marker in the text. The text is left as printed.]

> the two transitions are degenerate and only one line in the spectrum at frequency ν is observed.

## Notes and references

^([1]) I am assuming the reader has some knowledge of the quantum mechanical treatment of angular momentum, which is a topic that is treated thoroughly in most quantum mechanics textbooks. See, for example, chapter 4 of Atkins's Molecular Quantum Mechanics (5th ed.).

^([2]) The Larmor frequency is given by ω = −γB0, where γ is the magnetogyric ratio of the nucleus in question and B0 is the strength of the external magnetic field. It represents the frequency with which a magnetic moment precesses about a magnetic field. See any textbook on magnetism for further details.

^([3]) I am glossing over some details here. The so-called magnetic field in the x-axis is a component of the radiofrequency pulse applied in the xy-plane. If you are interested please consult a textbook on the vector model of NMR. In particular I recommend Keeler's Understanding NMR Spectroscopy (2nd ed.).

^([4]) It is related to the strength of the magnetic field in the x-axis, B1, by ω' = |γ|B1. The usual symbol is ω1, but I chose not to use this here to avoid potential confusion. Again, please consult a textbook on the vector model of NMR if you wish to find out more.

[Note: corrected; the source prints "by w' = |γ|B1" where this reads "by ω' = |γ|B1". The symbol is ω' (the text says ω1 is the usual one).]

^([5]) A full proof can be found in J. Chem. Educ. 1982, 59 (10), 819. There is also some discussion of the selection rules in Gunther's NMR Spectroscopy (3rd ed.), p 156 onwards.

### Note

The first important point to note is that magnetically equivalent nuclei do in fact couple to each other, however no splitting is observed in the spectrum. The second point is that chemically equivalent, but magnetically non-equivalent, nuclei couple to each other, and this coupling is observable in the NMR spectrum.

Spin coupling comes from a magnetic interaction between nuclear spins transmitted through the bonding electrons. Signals observed in the NMR spectrum are a transition between energy levels of allowed spin states. When two nuclei 'couple', the energy levels are stabilised or destabilsed slightly based on the relative orientations of the nuclear moments, so that (for a doublet) one transition is now δ+J/2, and the other transition is δ-J/2. These two transitions constitute the two lines of the doublet signal. When two equivalent nuclei couple, transitions between energy levels do not change because the interactions between the nuclear moments are the same, as are all other contributing factors such as the Fermi contact. As long as the transitions remain the same, all possible transitions will be equivalent.

The diagram below hopefully explains it a little clearer. The middle energy levels are for two non-coupled spins. Spin A (shown in red) has two possible transitions, both of which are equivalent. When the two spins are coupled, the energy levels are stabilised/destabilised as shown on the right. The transitions for spin A are now no longer equivalent, and they will appear as two lines (doublet). On the left, the equivalent nuclei have an overall change in energy level, but the transition between the levels remains the same, hence the observed line is still a singlet.

[Image: Energy levels of two spins: uncoupled in the middle; coupled non-equivalent spins on the right, where the two transitions of spin A become unequal (a doublet); coupled equivalent spins on the left, where the levels shift but the transition energy is unchanged (a singlet).]

[Note: corrected; the source prints "[Image: Diagram illustrating forces and supports acting on a structure, with labeled arrows indicating direction and magnitude.]" where this reads "[Image: Energy levels of two spins: uncoupled in the middle; coupled non-equivalent spins on the right, where the two transitions of spin A become unequal (a doublet); coupled equivalent spins on the left, where the levels shift but the transition energy is unchanged (a singlet).]". The image's alt text, machine-written, misreads the image; this describes it.]

When there are two distinct nuclei (The AX case) and there is spin-spin interaction (J coupling) between them (in addition to chemical shift) then fine structure can be observed in the nmr spectrum. The first diagram shows the energy levels and how they interact. Note how the J coupling moves the levels up and down in addition to chemical shift.

[Image: Diagram illustrating energy level splitting in a half spin 1/2 model, showing magnetic energy transitions and spin states.]

Now there are selection rules that allow the radio frequency radiation to couple different levels together and so produce a spectrum. The rule is that the mz quantum number (variously called magnetic, or azimuthal or projection quantum number) has to change by +1 or −1. This means that in the first diagram only levels in which one alpha changes to beta or vice versa, as shown by the vertical arrows, are allowed transitions. (The selection rule occurs because the photon (even if at radio frequency) has one unit of angular momentum and total angular momentum is conserved.)

In the equivalent nuclei case (called A2) the interaction between spins is still present but because of the magnetically identical nuclei the spin states are not either symmetrical or anti symmetrical to exchange of nuclei and a linear combination has to be made. This is shown on the left of the figure below. The reason that the splitting in energy levels is not observed is that selection rules make the transitions unobservable

[Image: Diagram illustrating energy transitions in quantum interactions, highlighting various states and transitions in a schematic format.]

### Advanced: Liouville–von Neumann Equation

An alternative answer using the product operator formalism:

The fundamental equation describing NMR quantum mechanically (neglecting relaxation) is the Liouville–von Neumann Equation (in frequency units, i.e. setting ħ = 1):

(d/dt)ρ̂ = −i[Ĥ, ρ̂]

For a 2-spin system with identical chemical shifts and a coupling

Ĥ = ΩÎ_1z + ΩÎ_2z + J(Î⃗1·Î⃗2)

After a 90 degree pulse on both nuclei the density matrix ρ̂ is of the form Î_1χ + Î_2χ, where χ = x or y. Now it is a bit lengthy but easy to show that

[Î_1χ + Î_2χ, J(Î⃗1·Î⃗2)] = 0, with χ = x, y, z

meaning that the coupling Hamiltonian does not influence the signal after a 90 degree pulse, as [Ĥ_coupling, ρ̂] = 0.
