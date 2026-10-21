---
title: "13.7: The Franck-Condon Principle"
book: "Physical Chemistry (LibreTexts)"
chapter: "13: Molecular Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13%3A_Molecular_Spectroscopy/13.07%3A_The_Franck-Condon_Principle"
author: "Lowers"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- To explain the vibrational fine structure in electronic spectroscopy for bound excited states in terms of the Franck‐Condon approximation
- To calculate the vibrational progressions (Franck-Condon factors) in a single displaced harmonic oscillator vibronic system.

The Franck-Condon Principle describes the intensities of vibronic transitions, or the absorption or emission of a photon. It states that when a molecule is undergoing an electronic transition, such as ionization, the nuclear configuration of the molecule experiences no significant change. This is due in fact that nuclei are much more massive than electrons and the electronic transition takes place faster than the nuclei can respond. When the nucleus realigns itself with the new electronic configuration, the theory states that it must undergo a vibration.

If we picture the vertical transition from ground to excited electronic state as occurring from a vibrational wavefunction that gives a probability distribution of finding the nuclei in a give region of space we can determine the probability of a given vibrational level from the overlap integral S_(v’, v) which gives the overlap of the vibrational wavefunction in the ground and excited state. The v quantum numbers refer to the ground state and the v’ quantum numbers refer to the excited state. The transition probability can be separated into electronic and nuclear parts using the Condon approximation.

[Note: corrected; the source prints "The v’ quantum numbers refer to the ground state and the v quantum numbers refer to the excited state." where this reads "The v quantum numbers refer to the ground state and the v’ quantum numbers refer to the excited state.". As in the caption of Figure 13.7.1 and below (v = 0 ground, v' excited).]

Figure 13.7.1: Franck–Condon principle energy diagram. Since electronic transitions are very fast compared with nuclear motions, vibrational levels are favored when they correspond to a minimal change in the nuclear coordinates. The potential wells are shown favoring transitions between v = 0 and v' = 2. (CC-SA-BY-3.0; Samoza).
Graph displaying energy levels (E₀, Eᵢ) as a function of nuclear coordinates, with wave functions shown as wavy lines.

In Figure 13.7.1 , the nuclear axis shows a consequence of the internuclear separation and the vibronic transition is indicated by the blue and green vertical arrows. This figure demonstrates three things:

1. An absorption leads to a higher energy state,
2. fluorescence leads to a lower energy state, and
3. the shift in nuclear coordinates between the ground and excited state is indicative of a new equilibrium position for nuclear interaction potential. The fact that the fluorescence arrow is shorter than the absorption indicates that it has less energy, or that its wavelength is longer.

### The Classical Condon approximation

Condon approximation is the assumption that the electronic transition occurs on a time scale short compared to nuclear motion so that the transition probability can be calculated at a fixed nuclear position.

This change in vibration is maintained during a state termed the rapid electronic excitation. The resulting Coulombic forces produce an equilibrium as shown in the figure for the nuclei termed a turning point. The turning point can be mapped by drawing a vertical line from the minimum of the lower curve to the intersection of the higher electronic state. This procedure is termed a vertical transition and was discussed before in the context of photoelectron spectroscopy (another electronic spectroscoy).

The Franck-Condon Principle explains the relative intensities of vibronic transitions by relating the probability of a vibrational transition to the overlap of the vibrational wavefunctions. It states that the probability of a vibrational transition occurring is weighted by the Franck-Condon overlap integral:

P_(i → f) ∝ |⟨ψ_final|μ|ψ_initial⟩|^2

[Note: corrected; the source prints "_(i → f) = |⟨ψ_final^*|μ|ψ_initial⟩|^2" where this reads "P_(i → f) ∝ |⟨ψ_final|μ|ψ_initial⟩|^2". The probability symbol is missing in the source; this is the whole transition moment, of which the Franck-Condon factor |⟨ψ_(nuc, f)|ψ_(nuc, i)⟩|^2 is the nuclear part.]

= |∫ψ_final^*μψ_initial dτ|^2

Within the Franck-Condon approximation, the nuclei are considered "fixed" during electronic transitions. Thus, electronic transitions can be considered vertical transitions on electronic potential energy curves (vierical transitions in Figure 13.7.1 ).

### The Quantum Franck-Condon Principle

The Franck-Condon Principle has both a Classical and Quantum application. Classically, the Franck–Condon principle is the approximation that an electronic transition is most likely to occur without changes in the positions of the nuclei in the molecular entity and its environment. The resulting state is called a Franck–Condon state, and the transition involved, a vertical transition. The quantum mechanical formulation of this principle is that the intensity of a vibronic transition is proportional to the square of the overlap integral between the vibrational wavefunctions of the two states that are involved in the transition.

The Franck-Condon principle is based on the Born-Oppenheimer approximation, which allows separation of the electronic q and nuclear Q wavefunctions given the total wavefunction.

|ψ_total(Q, q)⟩ = |ψ_nuc(Q)⟩|ψ_el(Q;q)⟩

[Note: corrected; the source prints "|ψ_total(Q, q) = |ψ_nuc(Q)⟩ψ_el(Q;q)⟩" where this reads "|ψ_total(Q, q)⟩ = |ψ_nuc(Q)⟩|ψ_el(Q;q)⟩". The kets are garbled in the source.]

Since the transition operator, μ̂(q), is dependent only on the electronic component, the nuclear components can be separated from the transition moment integral that dictates the probability of the transition occurring:

⟨ψ_(total, f)^*|μ̂|ψ_(total, i)⟩ = ⟨ψ_(nuc, f)^*|⟨ψ_(el, f)^*|μ|ψ_(el, i)⟩|ψ_(nuc, i)⟩

= ⟨ψ_(nuc, f)^*|ψ_(nuc, i)⟩ (nuclear overlap)⟨ψ_(el, f)^*|μ|ψ_(el, i)⟩

If the nuclear overlap integral is zero for this transition, then the transition will not be observed, irrespective of the magnitude of the electronic factor.

## S00 Transition Evaluated within Harmonic Oscillator Model

The nuclear overlap for the zero-zero transition S00 can be calculated quite simply using the definition of the Gaussian form of the harmonic oscillator wavefunctions.

The zero-point wavefunction in the ground electronic state is

|ψ(R)⟩ = |(α/π)^(1/4)e^{−α(R − Re)^2/2}⟩

The zero-point wavefunction in the excited electronic state is

|ψ(R)⟩ = |(α/π)^(1/4)e^{−α(R − Qe)^2/2}⟩

where

- α = (√(mk))/ħ
- Re is the equilibrium bond length in the ground electronic state
- Qe is the equilibrium bond length in the excited electronic state

The nuclear overlap integral is

S00 = ⟨ψ_(nuc, f)^*|ψ_(nuc, i)⟩ = √(α/π)∫_−∞^∞ e^{−α(R − Re)^2/2}e^{−α(R − Qe)^2/2}dR

[Note: corrected; the source prints "√(α/π)∫_∞^∞" where this reads "√(α/π)∫_−∞^∞". The lower limit is −∞.]

The exponent in Equation (FC1) can be expanded as

S00 = √(α/π)∫_−∞^∞ e^{−α(2R^2 − 2RRe − 2RQe + Re^2 + Qe^2)/2}dR

[Note: corrected; the source prints "√(α/π)∫_∞^∞" where this reads "√(α/π)∫_−∞^∞"; the source prints "2R^2 − RRe − 2RQe" where this reads "2R^2 − 2RRe − 2RQe". The lower limit is −∞; and (R − Re)^2 + (R − Qe)^2 = 2R^2 − 2RRe − 2RQe + Re^2 + Qe^2.]

and we use

(Re + Qe)^2 = Re^2 + Qe^2 + 2Re Qe

and

(Re − Qe)^2 = Re^2 + Qe^2 − 2Re Qe

to substitute and complete the square inside the integral. We can express

Re^2 + Qe^2 = (1/2)[(Re + Qe)^2 + (Re − Qe)^2].

Thus, the integral in Equation (FC2) is

S00 = √(α/π)e^{−α(Re − Qe)^2/4}∫_−∞^∞ e^{−α{R − 1/2(Re + Qe)}^2}dR

The integral is a Gaussian integral. You can show that if we let z = √(α){R − 1/2(Re + Qe)} then dz = √(α)dR and the integral becomes

S00 = √(α/π)e^{−α(Re − Qe)^2/4}(1/(√(α)))∫_−∞^∞ e^(−z^2)dz

[Note: corrected; the source prints "∫_−∞^∞ e^(z^2)dz" where this reads "∫_−∞^∞ e^(−z^2)dz". The Gaussian integral is of e^(−z^2), which gives √π.]

this integral has been solved already, from a table of integrals, Equation (FC3) becomes

S00 = e^{−α(Re − Qe)^2/4}

We would follow the same procedure to calculate that overlap of the zeroth level vibration in the ground to the first excited vibrational level of the excited state: S01.

## S01 Transition Evaluated within Harmonic Oscillator Model

To calculate the overlap of zeroth ground state level (v = 0) with the first excited state level (v' = 1) we use the Hermite polynomial H1(x) = 2x for describing the excited state wavefunction (see here for a review on harmonic oscillator wavefunctions). Here x = √(α)(R − Qe).

S01 = ⟨ψ_(nuc, f)^*|ψ_(nuc, i)⟩

with the zero-point wavefunction in the ground electronic state is

|ψ(R)⟩ = |(α/π)^(1/4)e^{−α(R − Re)^2/2}⟩

The first excited-state wavefunction in the excited electronic state is

|ψ(R)⟩ = |(α/π)^(1/4)(1/(√2))√(α)2(R − Qe)e^{−α(R − Qe)^2/2}⟩

[Note: corrected; the source prints "|(α/π)^(1/4)√(α)2(R − Qe)" where this reads "|(α/π)^(1/4)(1/(√2))√(α)2(R − Qe)". The v = 1 function carries the factor 1/√2 (as used below); without it its norm is 2.]

The overlap of zeroth ground state level with the first excited state level (Equation (FC01)) is then

S01 = (1/(√2))√(α/π)∫_−∞^∞ e^{−α(R − Re)^2/2}√(α)2(R − Qe)e^{−α(R − Qe)^2/2}

and

S01 = √((2α^2)/π)e^{−α(Re − Qe)^2/4}∫_−∞^∞ (R − Qe)e^{−α{R − 1/2(Re + Qe)}^2}

[Note: corrected; the source prints "e^{−α{R − 1/2(Re + Qe)^2}}" where this reads "e^{−α{R − 1/2(Re + Qe)}^2}". The square is on the whole bracket, as in S00 above.]

The same substitutions can be made as above so that the integral can be written as (not shown and to be demonstrated in a homework exercises) and the final result is

S01 = √(α/2)(Re − Qe)e^{−α(Re − Qe)^2/4}

[Note: corrected; the source prints "S01 = √(α^2/2)(Re − Qe)" where this reads "S01 = √(α/2)(Re − Qe)". √(2α^2/π) × ((Re − Qe)/2)√(π/α) = √(α/2)(Re − Qe); √(α^2/2)(Re − Qe) would not be dimensionless. With this, S00^2 = e^(−S) and S01^2 = S e^(−S), S = α(Re − Qe)^2/2.]

We could continue and calculate that overlap of the zeroth level in the ground state with all the higher light vibrational levels: S02, S03, etc. Each term corresponds to a transition with a different energy since the vibrational levels have different energies. The absorption band then has the appearance of a progression (a Franck-Condon progression) of transitions between different levels each with its own probability.

## Franck-Condon Progressions

To understand the significance of the above formula for the FC factor, let us examine a ground and excited state potential energy surface at T = 0 Kelvin. Shown below are two states separated by 8,000 cm^-1 in energy. This is energy separation between the bottoms of their potential wells, but also between the respective zero-point energy levels. Let us assume that the wavenumber of the vibrational mode is 1,000 cm^-1 and that the bond length is increased due to the fact that an electron is removed from a bonding orbital and placed in an anti-bonding orbital upon electronic excitation.

Figure 13.7.2: Wavefunctions transitions for a harmonic oscillator model system with moderate displacement (S=1).
Graph illustrating energy versus nuclear displacement, with upper blue curves representing S = 1 states and a red curve indicating a vertical transition.

According to the above model for the Franck-Condon factor we would generate a "stick" spectrum (Figure 13.7.3 ) where each vibrational transition is infinitely narrow and transition can only occur when E = hν exactly. For example, the potential energy surfaces were given for S = 1 and the transition probability at each level is given by the sticks (black) in the figure below.

Figure 13.7.3: Stick spectrum, dressed with Gaussians, for the moderate displacement (S=1) harmonic oscillator system from Figure 13.7.2 .
Graph showing intensity versus absorption wavenumber, featuring a blue line with multiple peaks and troughs.

The dotted Gaussians that surround each stick give a more realistic picture of what the absorption spectrum should look like. In this first place each energy level (stick) will be given some width by the fact that the state has a finite lifetime. Such broadening is called homogeneous broadening since it affects all of the molecules in the ensemble in a similar fashion. There is also broadening due to small differences in the environment of each molecule. This type of broadening is called inhomogeneous broadening. Regardless of origin the model above was created using a Gaussian broadening

The nuclear displacement between the ground and excited state determines the shape of the absorption spectrum. Let us examine both a smaller and a large excited state displacement. If S = ½ and the potential energy surfaces in this case are:

Figure 13.7.4: Wavefunctions transitions for a harmonic oscillator model system with small displacement (S=1/2).
Graph showing energy versus nuclear displacement with blue potential curves for S=1/2 and a red curve indicating vertical transitions.

For this case the "stick" spectrum has the appearance in Figure 13.7.5

Figure 13.7.5: Stick spectrum, dressed with Gaussians, for the small displacement (S=1/2) harmonic oscillator system from Figure 13.7.4.
Plot showing absorption wavenumber (x10² cm⁻¹) on the x-axis and intensity on the y-axis, with peaks and vertical lines indicated.

Note that the zero-zero or S_(0, 0) vibrational transition is much large in the case where the displacement is small.

As a general rule of thumb the S constant gives the ratio of the intensity of the v = 1 transition to the v = 0 transition. In this case since S = 0.5, the v = 1 transition is 0.5 the intensity of v = 0 transition.

[Note: corrected; the source prints "the S constant gives the ratio of the intensity of the v = 2 transition to the v = 1 transition. In this case since S = 0.5, the v = 2 transition is 0.5 the intensity of v = 1 transition." where this reads "the S constant gives the ratio of the intensity of the v = 1 transition to the v = 0 transition. In this case since S = 0.5, the v = 1 transition is 0.5 the intensity of v = 0 transition.". The intensities follow e^(−S)S^v/v!, so S = I(0→1)/I(0→0); I2/I1 is S/2.]

As an example of a larger displacement the disposition of the potential energy surfaces for S = 2 is shown below.

Figure 13.7.6: Wavefunctions transitions for a harmonic oscillator model system with strong displacement (S=2).
Graph depicting energy versus nuclear displacement with blue and red curves showing states and a vertical transition indicated.

The larger displacement results in decreased overlap of the ground state level with the v = 0 level of the excited state. The maximum intensity will be achieved in higher vibrational levels as shown in the stick spectrum.

Figure 13.7.7: Stick spectrum, dressed with Gaussians, for the large displacement (S=2) harmonic oscillator system from Figure 13.7.6.
Graph displaying intensity versus absorption wavenumber, showing a blue line with peaks at approximately 9.5 and 10.5.

The absorption spectra plotted below all have the same integrated intensity, however their shapes are altered because of the differing extent of displacement of the excited state potential energy surface.

Figure 13.7.8: Stick spectra, dressed with Gaussians, for the small to large displacements in harmonic oscillator system described above.
Graph showing intensity vs. absorption wavenumber, with four lines representing different values of S: 0.1, 0.5, 1.0, and 2.0.

So the nature of the relative vibronic band intensities can tell us whether there is a displacement of the equilibrium nuclear coordinate that accompanied a transition. When will there be an increase in bond length (i.e., Qe > Re)? This occurs when an electron is promoted from a bonding molecular orbital to a non-bonding or anti-bonding molecular orbitals (i.e., when the bond order is less in the excited state than the ground state).

- Bonding molecular orbital → non-bonding molecular orbital
- Bonding molecular orbital → anti-bonding molecular orbital
- Non-bonding molecular orbital → anti-bonding molecular orbital

[Note: corrected; the source prints "- Non-bonding molecular orbital → bonding molecular orbital" where this reads "- Bonding molecular orbital → non-bonding molecular orbital"; the source prints "- Anti-bonding molecular orbital → bonding molecular orbital" where this reads "- Bonding molecular orbital → anti-bonding molecular orbital"; the source prints "- Anti-bonding molecular orbital → non-bonding molecular orbital" where this reads "- Non-bonding molecular orbital → anti-bonding molecular orbital". Each of these excitations weakens the bond, as the text says (an electron promoted from a bonding orbital to a non-bonding or anti-bonding one); the source has them reversed.]

In short, when the bond order is lower in the excited state than in the ground state, then Qe > Re; an increase in bond length will occur when this happens.

## References

1. J.M. Luis, D.M. Bishop, B. Kirtman. A different approach for calculating Franck–Condon factors including anharmonicity. J. Chem. Phys., 120 (2004), pp. 813–822.
2. Atkins, Peter and Julio de Paula. Physical Chemistry for the Life Sciences. 2006. New York, NY: W.H. Freeman and Company. p. 563-564
3. Franck-Condon Principle. 1996, 68, 2243. IUPAC Compendium of Chemical Terminology 2nd Edition (1997). www.iupac.org/goldbook/F02510.pdf
4. E.Rabinowitch and Govindjee. Light Absorption and Fate of Excitation of Energy. 1969. Franck-Condon Principle. http://www.life.uiuc.edu/govindjee/b...em494/Abs.html
