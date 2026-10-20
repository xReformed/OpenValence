---
title: "5.3: The Harmonic Oscillator Approximates Molecular Vibrations"
book: "Physical Chemistry (LibreTexts)"
chapter: "5: The Harmonic Oscillator and the Rigid Rotor"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05%3A_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.03%3A_The_Harmonic_Oscillator_Approximates_Molecular_Vibrations"
author: "Anonymous"
license: "CC BY"
---

### Learning Objectives

- Understand the utility and limits of using the quantum harmonic oscillator as a model for molecular vibrations

The quantum harmonic oscillator is one of the most important model systems in quantum mechanics. This is due in partially to the fact that an arbitrary potential curve V(x) can usually be approximated as a harmonic potential at the vicinity of a stable equilibrium point. Furthermore, it is one of the few quantum-mechanical systems for which an exact, analytical solution exists. Solving other potentials typically require either approximations or numerical approaches to identify the corresponding eigenstates and eigenvalues (i.e., wavefunctions and energies).

A general potential energy (V(x)) curve for a molecular vibration can be expanded as a Taylor series

V(x) = V(x0) + (dV(x))/dx|_x0^x (x − x0) + 1/(2!) · (d^2 V(x))/dx^2|_x0^x (x − x0)^2 + … + 1/(n!) · (d^n V(x))/(dx^n)|_x0^x (x − x0)^n

It is important to note that this approximation is only good for x near x0, and that x0 stands for the equilibrium bond distance. V(x) is often (but not always) shortened to the cubic term and can be rewritten as

V(x) = (1/2)kx^2 + (1/6)γx^3

where V(x0) = 0, k is the harmonic force constant (harmonic term), and γ is the first anharmonic term (i.e., cubic). As Figure 5.3.2 demonstrates, the harmonic oscillator (red curve) is a good approximation for the exact potential energy of a vibration (blue curve).

Figure 5.3.1: The vibration of the HCl molecule is really an anharmonic oscillator, but can be approximated as a harmonic oscillator at low energies. In this animation, HCl is vibrating at the E3 energy level. D0 is dissociation energy here, r0 bond length, V potential energy. Energy is expressed in wavenumbers. The hydrogen chloride molecule is attached to the coordinate system to show bond length changes on the curve. (CC BY-SA 3.0; Darekk2 via Wikipedia).
Graph showing energy levels (E) and potential (U) versus distance (r), with labeled curves and a spring-mass system illustration.

Adding anharmonic perturbations to the harmonic oscillator (Equation (5.3.2)) better describes molecular vibrations. Anharmonic oscillation is defined as the deviation of a system from harmonic oscillation, or an oscillator not oscillating in simple harmonic motion. Anharmonic oscillation is described as the restoring force is no longer proportional to the displacement. Adding the cubic term (Figure 5.3.2 ; green curve) improves the harmonic oscillation approximation especially under greater displacement from equilibrium.

[Image: Graph displaying multiple curves in different colors (red, green, blue) with a central minimum point.]

[Image: Graph showing curves representing functions, with plotted points and shaded areas to illustrate concepts in mathematics.]

Figure 5.3.2: (left) Deviation from simple harmonic potential approximation (red curve) of true/exact potential (blue curve) with cubic term (green). (right) Expansion with positive or negative quartic terms. (CC BY 4.0; Ümit Kaya via LibreTexts)

Naturally, adding higher order anharmonic terms, like quartic terms (Figure 5.3.2; right) improve the approximation. Almost all diatomics have experimentally determined potentials for their lowest energy states. H2, Li2, O2, N2, and F2 with terms up to n < 10 determined of Equation (5.3.1).

Figure 5.3.1 shows the the general potential with (numerically) calculated energy levels (E0, E1 etc.). Do is the dissociation energy, which is different from the well depth De. These vibrational energy levels of this plot can be calculated using the harmonic oscillator model (i.e., Equation 5.3.1 with the Schrödinger equation) and have the general form

[Note: the xe and ye terms below come from the anharmonic terms of the potential, Equation 5.3.1 beyond the quadratic term; the harmonic oscillator gives only the first term. And ve in the equation below stands for the vibrational wavenumber, ν̃e. The text is left as printed.]

Ev = (v + 1/2)ve − (v + 1/2)^2 ve xe + (v + 1/2)^3 ve ye + higher terms

where v is the vibrational quantum number and xe and ye are the first and second anharmonicity constants, respectively.

The v = 0 level is the vibrational ground state. Because this potential is less confining than a parabola used in the harmonic oscillator, the energy levels become less widely spaced at high excitation (Figure 5.3.1 ; top of potential).

### Limitations of the Harmonic Oscillator Model for Molecular Vibrations

The harmonic oscillation is a great approximation of a molecular vibration, but has key limitations:

- Due to equal spacing of energy, all transitions occur at the same frequency (i.e. single line spectrum). However experimentally many lines are often observed (called overtones).
- The harmonic oscillator does not predict bond dissociation; you cannot break it no matter how much energy is introduced.

### Morse Potentials are better Approximations of Vibrational Motion

A more powerful approach than just "patching up" the harmonic oscillator solution with anharmonic corrections is to adopt a different potential (V(x)). One such approach is the Morse potential, named after physicist Philip M. Morse, and a better approximation for the vibrational structure of the molecule than the harmonic oscillator because it explicitly includes the effects of bond breaking and accounts for the anharmonicity of real bonds (Figure 5.3.4 ).

Figure 5.3.4: The Morse potential (blue) and harmonic oscillator potential (green). Unlike the energy levels of the harmonic oscillator potential, which are evenly spaced by ħω, the Morse potential level spacing decreases as the energy approaches the dissociation energy. The dissociation energy De is larger than the true energy required for dissociation D0 due to the zero point energy of the lowest (v = 0) vibrational level. from Wikipedia.
Graph showing potential energy versus interatomic separation, with energy minima indicated and labeled states.

The Morse Potential is a good approximation to V(x) and is best when looking for a general formula for all x from 0 to ∞, not just applicable for the local region around the xo:

V(x) = D(1 − e^{−β(x − x0)})^2

with V(x = x0) = 0 and V(x = ∞) = D.

The Morse Potential (Figure 5.3.4 ) approaches zero at infinite r and equals −De at its minimum (i.e. r = re). It clearly shows that the Morse potential is the combination of a short-range repulsion term (small r values) and a long-range attractive term (large r values).

[Note: corrected; the source prints "approaches zero at infinite re and" where this reads "approaches zero at infinite r and". re is the fixed equilibrium distance; the potential approaches zero as r grows. (This describes the Morse curve of Figure 5.3.4, shifted down by De; the equation above is zero at re and De at infinity.)]

Solving the Schrödinger Equation with the Morse Potential (Equation (5.3.8)) is not trivial, but can be done analytically.

Ĥ|ψ⟩ = En|ψ⟩

with

Ĥ = T̂ + V̂

= (−ħ^2 d^2)/(2 m dx^2) + D(1 − e^{−β(x − x0)})^2

The solutions and energies for the Morse potential will not be used in this course and will not be discussed in more detail.
