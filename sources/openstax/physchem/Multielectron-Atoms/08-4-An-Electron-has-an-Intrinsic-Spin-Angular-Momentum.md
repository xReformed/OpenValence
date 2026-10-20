---
title: "8.4: An Electron has an Intrinsic Spin Angular Momentum"
book: "Physical Chemistry (LibreTexts)"
chapter: "8: Multielectron Atoms"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/08%3A_Multielectron_Atoms/8.04%3A_An_Electron_has_an_Intrinsic_Spin_Angular_Momentum"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Understand the forth quantum number for electrons - spin.
- Understand how spin is connected to magnetic properties of the electrons and atoms.
- Understand how to break degeneracy via externally applied magnetic fields in electrons and atoms.

Imagine doing a hypothetical experiment that would lead to the discovery of electron spin. Your laboratory has just purchased a microwave spectrometer with variable magnetic field capacity. We try the new instrument with hydrogen atoms using a magnetic field of 10^4 Gauss and look for the absorption of microwave radiation as we scan the frequency of our microwave generator (Figure 8.4.1 ).

Figure 8.4.1: Schematic diagram of a microwave spectrometer with the sample in a variable magnetic field. The strength of the magnetic field is set, and the sample’s absorption of microwave photons is measured for a range of microwave photon energies (or frequencies). (CC BY-NC 4.0; Ümit Kaya via LibreTexts)
Illustration of a scientific setup featuring a microwave radiation generator, sample holder, measuring device, and data collection computer.

Finally we see absorption at a microwave photon frequency of 28.025 × 10^9 Hz (28 gigahertz). This result is really surprising from several perspectives. Each hydrogen atom is in its ground state, with the electron in a 1s orbital. The lowest energy electronic transition that we predict based on existing theory (the electronic transition from the ground state (ψ100 to ψ_21m) requires an energy that lies in the vacuum ultraviolet (the lower Lyman line at 121 nm), not the microwave, region of the spectrum. Furthermore, when we vary the magnetic field we note that the frequency at which the absorption occurs varies in proportion to the magnetic field.

[Note: corrected; the source prints "frequency of 28 × 10^9 Hz (28 gigahertz)" where this reads "frequency of 28.025 × 10^9 Hz (28 gigahertz)". At 10^4 gauss, g = 2.0023 (Exercise 8.4.1) puts the absorption at 28.025 GHz; with 28 GHz exactly, hν/B below would give g ≈ 2.0005.]

## The Zeeman Effect: Breaking Degeneracies with Magnetic Fields

Magnetism results from the circular motion of charged particles. This property is demonstrated on a macroscopic scale by making an electromagnet from a coil of wire and a battery. Electrons moving through the coil produce a magnetic field, which can be thought of as originating from a magnetic dipole or a bar magnet. Electrons in atoms also are moving charges with angular momentum so they too produce a magnetic dipole, which is why some materials are magnetic. A magnetic dipole interacts with a magnetic field, and the energy of this interaction is given by the scalar product of the magnetic dipole moment, and the magnetic field, B⃗.

EB = −μ⃗m·B⃗

Pieter Zeeman was one of the first to observe the splittings of spectral lines in a magnetic field caused by this interaction. Consequently such splittings are known as the Zeeman effect. (Figure 8.4.2 ). The expectation value calculated for the total energy in this case is the sum of the energy in the absence of the field, En, plus the Zeeman energy:

⟨E⟩ = En + (eħBz ml)/(2 me)

= En + μB Bz ml

The factor

(eħ)/(2 me) = −γe ħ = μB

defines the constant μB, called the Bohr magneton, which is taken to be the fundamental magnetic moment. It has units of 9.2740 × 10^−21 erg/Gauss or 9.2740 × 10^−24 Joule/Tesla. This factor will help you to relate magnetic fields, measured in Gauss or Tesla, to energies, measured in ergs or Joules, for any particle with a charge and mass the same as an electron.

[Note: corrected; the source prints "9.2732 × 10^−21 erg/Gauss or 9.2732 × 10^−24 Joule/Tesla" where this reads "9.2740 × 10^−21 erg/Gauss or 9.2740 × 10^−24 Joule/Tesla". 9.2732 is an older value; the current value of the Bohr magneton is 9.2740 × 10^−24 J/T.]

Equation (8.4.13) demonstrates that that ml quantum number degeneracy of the hydrogen atom is removed by the externally applied magnetic field. For example, the three hydrogen atom eigenstates |ψ211⟩, |ψ_(21−1)⟩, and |ψ210⟩ are degenerate in zero magnetic field, but have different energies in an externally applied magnetic field (Figure 8.4.2 ).

Figure 8.4.2: The Zeeman effect for the 2p → 1s transition. Emission when an electron switches from a 2p orbital to a 1s orbital occurs at only one energy in the absence of a magnetic field, but can occur at three different energies in the presence of a magnetic field. (CC BY-NC; Ümit Kaya via LibreTexts)
Comparative diagram showing energy levels with and without a magnetic field, labeled appropriately.

[Note: corrected; the source prints "for the 2s → 1s transition." where this reads "for the 2p → 1s transition.". As the rest of the caption says, the emission is from 2p to 1s.]

The ml = 0 state, for which the component of angular momentum and hence also the magnetic moment in the external field direction is zero, experiences no interaction with the magnetic field. The ml = +1 state, for which the angular momentum in the z-direction is +ħ and the magnetic moment is in the opposite direction, against the field, experiences a raising of energy in the presence of a field. Maintaining the magnetic dipole against the external field direction is like holding a small bar magnet with its poles aligned exactly opposite to the poles of a large magnet. It is a higher energy situation than when the magnetic moments are aligned with each other.

## Electron Spin and the Stern-Gerlach Experiment

To discover new things, experimentalists sometimes must explore new areas in spite of contrary theoretical predictions. Our theory of the hydrogen atom at this point gives no reason to look for absorption in the microwave region of the spectrum. By doing the crazy experiment outlines above, we discovered that when an electron is in the |1s⟩ orbital of the hydrogen atom, there are two different states that have the same energy. When a magnetic field is applied, this degeneracy is removed, and microwave radiation can cause transitions between the two states. In the rest of this section, we see what can be deduced from this experimental observation. This experiment actually could be done with electron spin resonance spectrometers available today (Figure 8.4.1 ). To explain our observations, a new model for the hydrogen atom. Our original model for the hydrogen atom accounted for the motion of the electron and proton in our three-dimensional world; the new model needs something else that can give rise to an additional Zeeman-like effect. We need a charged particle with angular momentum to produce a magnetic moment, just like that obtained by the orbital motion of the electron. We can postulate that our observation results from a motion of the electron that was not considered in the last section - electron spin. We have a charged particle spinning on its axis. We then have charge moving in a circle, angular momentum, and a magnetic moment, which interacts with the magnetic field and gives us the Zeeman-like effect that we observed (Figure 8.4.2 ).

Figure 8.4.2: Stern–Gerlach experiment: silver atoms travel through an inhomogeneous magnetic field and are deflected up or down depending on their spin. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)
Illustration of a magnetic field with a magnet labeled "N" (north) and "S" (south), showing light beams passing through and diverging.

In 1920, Otto Stern and Walter Gerlach designed an experiment, which unintentionally led to the discovery that electrons have their own individual, continuous spin even as they move along their orbital of an atom. Today, this electron spin is indicated by the fourth quantum number, also known as the Electron Spin Quantum Number and denoted by ms. In 1925, Samuel Goudsmit and George Uhlenbeck made the claim that features of the hydrogen spectrum that were unexamined might by explained by assuming electrons act as if it has a spin, which can be denoted by an arrow pointing up, which is +1/2, or an arrow pointing down, which is -1/2. The Stern and Gerlach experiment which demonstrated this was done with a beam of vaporized silver atoms that split into two beams after passing through a magnetic field (Figure 8.4.2 ). An explanation of this is that an electron has a magnetic field due to its spin. When electrons that have opposite spins are put together, there is no net magnetic field because the positive and negative spins cancel each other out. The silver atom used in the experiment has a total of 47 electrons, 23 of one spin type, and 24 of the opposite. Because electrons of the opposite spin cancel each other out, the one unpaired electron in the atom will determine the spin.

[Note: corrected; the source prints "same spin cancel each other out" where this reads "opposite spin cancel each other out". Paired electrons have opposite spins, as the sentence before says.]

[Note: Stern proposed the experiment in 1921, and he and Walther Gerlach carried it out in 1922. The text is left as printed.]

## Spin Eigenstates and Eigenvalues

To describe electron spin from a quantum mechanical perspective, we must have spin wavefunctions and spin operators. The properties of the spin states are deduced from experimental observations and by analogy with our treatment of the states arising from the orbital angular momentum of the electron. The important feature of the spinning electron is the spin angular momentum vector, which we label S by analogy with the orbital angular momentum L. We define spin angular momentum operators with the same properties that we found for the rotational and orbital angular momentum operators. After all, angular momentum is angular momentum, no matter if it is orbital or spin in nature.

We found that

L̂^2|Yl^(ml)⟩ = l(l + 1)ħ^2|Yl^(ml)⟩

so by analogy for the spin states, we must have

Ŝ^2|σs^(ms)⟩ = s(s + 1)ħ^2|σs^(ms)⟩

where σ is a spin wavefunction with quantum numbers s and ms that obey the same rules as the quantum numbers l and ml associated with the spherical harmonic wavefunction Y. We also found the project of the orbital angular momentum on the z-axis is

L̂z|Yl^(ml)⟩ = ml ħ|Yl^(ml)⟩

so by analogy, we must have a similar projection for the spin angular momentum:

Ŝz|σs^(ms)⟩ = ms ħ|σs^(ms)⟩

Since ml ranges in integer steps from −l to + l, also by analogy ms ranges in integer steps from −s to + s. In our hypothetical experiment, we observed one absorption transition, which means there are two spin states. Consequently, the two values of ms must be + s and −s, and the difference in ms for the two states, labeled f and i below, must be the smallest integer step, i.e., 1. The result of this logic is that

m_(s, f) − m_(s, i) = 1

(+s) − (−s) = 1

2s = 1

s = 1/2

Therefore our conclusion is that the magnitude of the spin quantum number is 1/2 and the values for ms are +1/2 and -1/2. The two spin states correspond to spinning clockwise and counter-clockwise with positive and negative projections of the spin angular momentum onto the z-axis (Figure 8.4.3 ). The state with a positive projection, ms = +1/2, is called α; the other is called β. These spin states are arbitrarily labeled α and β, and the associated spin wavefunctions also are designated by |α⟩ and |β⟩.

Figure 8.4.3: Electron Spin. In a magnetic field, an electron has two possible orientations with different energies, one with spin up, aligned with the magnetic field, and one with spin down, aligned against it. All other orientations are forbidden. (CC BY-SA-NC 3.0; Anonymous).
Illustration showing electron alignment in a magnetic field: aligned with field (left) and against field (right), with magnetic poles indicated.

From Equation (8.4.4), the magnitude of the z-component of spin angular momentum, Sz, is given by

Sz = ms ħ

so the value of Sz is + ħ/2 for spin state α and −ħ/2 for spin state β. Hence, we conclude that the α spin state, where the magnetic moment is aligned against the external field direction, has a greater energy than the β spin state.

### Electrons are not Actually Spinning

Electron's hypothetical surface would have to be moving faster than the speed of light for it to rotate quickly enough to produce the observed angular momentum. Hence, an electron is not simply a spinning ball or ring and electron spin appears to be an intrinsic angular moment of the particle rather than a consequence of the rotation of a charge particle like Figure 8.4.3 suggests. Despite this, the term "electron spin" persists in quantum vernacular.

### Properties of Spin Eigenstates

Even though we do not know their functional forms, the spin wavefunctions are taken to be normalized and orthogonal to each other.

∫α^*α dτs = ∫β^*β dτs = 1

or in braket notation

⟨α|α⟩ = ⟨β|β⟩ = 1

and

∫α^*β dτs = ∫β^*α dτs = 0

or in braket notation

⟨α|β⟩ = ⟨β|α⟩ = 0

[Note: corrected; the source prints "⟨α|β⟩ = ⟨α|β⟩ = 0" where this reads "⟨α|β⟩ = ⟨β|α⟩ = 0". Orthogonality both ways round.]

where the integral is over the spin variable τs.

Now let's apply these deductions to the experimental observations in our hypothetical microwave experiment in Figure 8.4.1 . We can account for the frequency of the transition (ν= 28 gigahertz) that was observed in this hypothetical experiment in terms of the magnetic moment of the spinning electron and the strength of the magnetic field. The photon energy, hν, is given by the difference between the energies of the two states, Eα and Eβ

ΔE = hν

= Eα − Eβ

The energies of these two states consist of the sum of the energy of an electron in a 1s orbital, E_1s, and the energy due to the interaction of the spin magnetic dipole moment of the electron, μs, with the magnetic field, B.

Figure 8.4.4: Absorption of a photon to cause a transition from the β to the α state. (CC BY-NC; Ümit Kaya via LibreTexts)
Diagram illustrating energy levels in a nonzero magnetic field, with energy increasing vertically and an oscillating line representing a photon transition.

The two states with distinct values for spin magnetic moment μs are denoted by the subscripts α and β (the spin version of Equation (8.4.0).

Eα = E_1s − μ_(s, α)·B

Eβ = E_1s − μ_(s, β)·B

Substituting the two equations above into the expression for the photon (Equation (8-49)) energy gives

hν = Eα − Eβ

= (E_1s − μ_(s, α)·B) − (E_1s − μ_(s, β)·B)

= (μ_(s, β) − μ_(s, α))·B

Again by analogy with the orbital angular momentum and magnetic moment discussed above, we take the spin magnetic dipole of each spin state, μ_(s, α) and μ_(s, β), to be related to the total spin angular momentum of each state, Sα and Sβ, by a constant spin gyromagnetic ratio, γs, as shown below.

μs = γs S

or each of the two states

μ_(s, α) = γs Sα

μ_(s, β) = γs Sβ

With the magnetic field direction defined as z, the scalar product in Equation (8-53) becomes a product of the z-components of the spin angular momenta, S_(z, α) and S_(z, β), with the external magnetic field.

Inserting the values for S_(z, α) = + (1/2)ħ and S_(z, β) = −(1/2)ħ from Equation (8.4.6) and rearranging Equation (8-53) yields

[Note: corrected; the source prints "and S_(z, α) = −(1/2)ħ" where this reads "and S_(z, β) = −(1/2)ħ". −(1/2)ħ is the β value.]

hν/B = −γs ħ

Calculating the ratio hν/B from our experimental results, ν = 28.025 × 10^9 Hz when B = 10^4 gauss, gives us a value for

[Note: corrected; the source prints "ν = 28 × 10^9 Hz when B = 10^4 gauss" where this reads "ν = 28.025 × 10^9 Hz when B = 10^4 gauss". The frequency observed above.]

−γs ħ = 18.5696 × 10^−21 erg/gauss.

[Note: corrected; the source prints "−γs ħ = 18.5464 × 10^−21 erg/gauss." where this reads "−γs ħ = 18.5696 × 10^−21 erg/gauss.". hν/B = (6.62607 × 10^−27 erg s)(28.025 × 10^9 s^−1)/(10^4 G) = 18.5696 × 10^−21 erg/G, 2.0023 times the Bohr magneton; the source's value is exactly twice the magneton it gives (g = 2.0000).]

This value is about twice the Bohr magneton,−γe ħ, found in Equation (8.4.14) i.e. γs ħ = 2.0023 γe ħ, or

[Note: corrected; the source prints "γs ħ = 2.0023, γe ħ, or" where this reads "γs ħ = 2.0023 γe ħ, or". A stray comma: γsħ is 2.0023 times γeħ.]

γs = 2.0023γe

The factor of 2.0023 is called the g-factor and accounts for the deviation of the spin gyromagnetic ratio from the value expected for orbital motion of the electron. In other words, it accounts for the spin transition being observed where it is instead of where it would be if the same ratio between magnetic moment and angular momentum held for both orbital and spin motions. The value 2.0023 applies to a freely spinning electron; the coupling of the spin and orbital motion of electrons can produce other values for g.

### Exercise 8.4.1

Carry out the calculations that show that the g-factor for electron spin is 2.0023.

Interestingly, the concept of electron spin and the value g = 2 follow logically from Dirac's relativistic quantum theory, which is beyond the scope of this discussion. Electron spin was introduced here as a postulate to explain experimental observations. Scientists often introduce such postulates parallel to developing the theory from which the property is naturally deduced.

[Note: corrected; the source prints "the value g = 2.0023 follow logically" where this reads "the value g = 2 follow logically". Dirac's theory gives g = 2 exactly; the extra 0.0023 comes from quantum electrodynamics (Schwinger's α/2π correction).]
