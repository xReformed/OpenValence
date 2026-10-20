---
title: "6.4: Hydrogen Atomic Orbitals Depend upon Three Quantum Numbers"
book: "Physical Chemistry (LibreTexts)"
chapter: "6: The Hydrogen Atom"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/06%3A_The_Hydrogen_Atom/6.04%3A_Hydrogen_Atomic_Orbitals_Depend_upon_Three_Quantum_Numbers"
author: "Zielinskit"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Recognize how the hydrogen atomic orbitals vary as a function of the three primary quantum numbers

The solutions to the hydrogen atom Schrödinger equation discussed previously are functions that are products of a spherical harmonic function and a radial function.

ψ_(n, l, ml)(r, θ, φ) = R_(n, l)(r) (radial)Yl^(ml)(θ, φ) (angular)

The wavefunctions for the hydrogen atom depend upon the three variables r, θ, and φ and the three quantum numbers n, l, and ml. The variables give the position of the electron relative to the proton in spherical coordinates. The absolute square of the wavefunction, |ψ(r, θ, φ)|^2, evaluated at r, θ, and φ gives the probability density of finding the electron inside a differential volume dτ, centered at the position specified by r, θ, and φ.

### Exercise 6.4.1

Evaluate the following integrals

a. ⟨ψ(r, θ, φ)|ψ(r, θ, φ)⟩
b. ⟨ψ(r, θ, φ)|ψ(r', θ', φ')⟩

**Answer**

a. This integral is equal to one since ψ(r, θ, φ) are normalized eigenstates.
b. However, we can explicitly evaluate this integral for any arbitrary pair of eigenstates

⟨ψ(r, θ, φ)|ψ(r', θ', φ')⟩ = ∫_allspace ψ^*(r, θ, φ)ψ(r', θ', φ')dτ

= ∫0^∞ dr∫0^π dθ∫0^(2π) dφ(r^2 sin(θ))ψ*(r, θ, φ) (R_(n, l)(r)Yl^(ml)(θ, φ))ψ(r, θ, φ) (R_(n', l')(r)Y_l'^(m'l)(θ, φ))

= ∫0^∞ dr∫0^π dθ∫0^(2π) dφ(r^2 sin(θ))[R_(n, l)(r)Yl^(ml)(θ, φ)][R_(n', l')(r)Y_l'^(m'l)(θ, φ)]

[Note: the bra's angular part should be complex conjugated, Yl^(ml)(θ, φ)^*; without the conjugate the angular integral does not give δ_ml ml'. The text is left as printed.]

= [∫0^∞ r^2[R_(n, l)(r)R_(n', l')(r)]dr][∫0^(2π) ∫0^π sin(θ)[Yl^(ml)(θ, φ)Y_l'^(m'l)(θ, φ)]dθdφ]

= ⟨R_(n, l)(r)|R_(n', l')(r)⟩⟨Yl^(ml)(θ, φ)|Y_l'^(m'l)(θ, φ)⟩

= (δ_nn' δ_ll')(δ_ll' δ_mm') = δ_nn' δ_ll' δ_mm'

[Note: radial functions with different l are not orthogonal in general (∫R10R21 r^2 dr ≠ 0); the δ_ll' comes from the angular integral, so the final result, δ_nn' δ_ll' δ_mm', is still right. The text is left as printed.]

While part a demonstrates normality of the eigenstates, part b demonstrates the orthogonality of the eigenstate (and normality too).

The quantum numbers n, l, and ml have names:

- n is called the principal quantum number,
- l is called the angular momentum quantum number, and
- ml is called the magnetic quantum number because the energy in a magnetic field depends upon ml.

Often l is called the azimuthal quantum number because it is a consequence of the θ-equation, which involves the azimuthal angle Θ, referring to the angle to the zenith.

[Note: θ, the angle from the zenith, is the polar angle; the azimuthal angle is φ. The text is left as printed.]

The three quantum numbers have specific values that are dictated by the physical constraints or boundary conditions imposed upon the Schrödinger equation: n must be an integer greater than 0, l can have the values 0 to n − 1, and ml can have 2 l + 1 values ranging from −l to + l in unit or integer steps. The values of the quantum number l usually are coded by a letter: s means 0, p means 1, d means 2, f means 3; the next codes continue alphabetically (e.g., g means l = 4). The quantum numbers specify the quantization of physical quantities. The discrete energies of different states of the hydrogen atom are given by n, the magnitude of the angular momentum is given by l, and one component of the angular momentum (usually chosen by chemists to be the z‑component) is given by ml. The total number of orbitals with a particular value of n is n^2.

### Exercise 6.4.4

Consider several values for n, and show that the number of orbitals for each n is n^2.

### Exercise 6.4.5

Construct a table summarizing the allowed values for the quantum numbers n, l, and ml for energy levels 1 through 7 of hydrogen.

### Exercise 6.4.6

The notation 3d specifies the quantum numbers for an electron in the hydrogen atom. What are the values for n and l ? What are the values for the energy and angular momentum? What are the possible values for the magnetic quantum number? What are the possible orientations for the angular momentum vector?

## Radial Part of the Wavefunction

The asymptotic behavior (i.e., far away from the nucleus) to the radial part of the wavefunction is

R_asymptotic(r)~exp(−r/(na0))

[Note: corrected; the source prints "exp(−(r/n)a0)" where this reads "exp(−r/(na0))". a0 belongs in the denominator, as in the radial functions below.]

where n will turn out to be a quantum number and a0 is the Bohr radius (~52.9 pm). Note that this function decreases exponentially with distance, in a manner similar to the decaying exponential portion of the harmonic oscillator wavefunctions, but with a different distance dependence, r vs. r^2.

### Exercise 6.4.2

What happens to the magnitude of R_asymptotic(r) as the distance r from the proton approaches infinity? Sketch a graph of the function, R_asymptotic(r). Why might this behavior be expected for an electron in a hydrogen atom?

**Answer**

R(r) = e^{−r/(na0)}

[Note: corrected; the source prints "R(r) = e^{−(c/n)a0}" where this reads "R(r) = e^{−r/(na0)}". The variable is r, with a0 in the denominator.]

As r approaches infinity, the exponential decay goes to zero, this is to be expected as the likelihood of an electron being found at an infinite distance away is almost zero too.

[Image: Graph of a function showing an exponential decay, approaching zero as it moves right along the horizontal axis.]

The polynomials produced by the truncation of the power series are related to the associated Laguerre polynomials, Ln, l(r), where the set of ci are constant coefficients.

L_(n, l)(r) = Σ_(i=0)^(n − l − 1)ci r^i

[Note: corrected; the source prints "Σ_(r=0)" where this reads "Σ_(i=0)". The summation index is i.]

These polynomials are identified by two indices or quantum numbers, n and l. Physically acceptable solutions require that n must be greater than or equal to l + 1. The smallest value for l is zero, so the smallest value for n is 1. The angular momentum quantum number affects the solution to the radial equation because it appears in the radial differential equation, (Equation (6.1.14)).

The R(r) functions that solve the radial differential Equation (6.1.14), are products of the associated Laguerre polynomials and the exponential factor, multiplied by a normalization factor (N_(n, l)) and (r/(a0))^l.

R(r) = N_(n, l)(r/(a0))^l L_(n, l)(r)e^{−r/(na0)}

The decreasing exponential term overpowers the increasing polynomial term so that the overall wavefunction exhibits the desired approach to zero at large values of r. The first six radial functions are provided in Table 6.4.1 . Note that the functions in the table exhibit a dependence on Z, the atomic number of the nucleus. As discussed later in this chapter, other one electron systems have electronic states analogous to those for the hydrogen atom, and inclusion of the charge on the nucleus allows the same wavefunctions to be used for all one-electron systems. For hydrogen, Z = 1.

Table 6.4.3 : Radial functions for one-electron atoms and ions. Z is the atomic number of the nucleus, and ρ = Zr/(a0), where a0 is the Bohr radius and r is the radial variable.

|  | n | l | R_(n, l)(ρ) |
| --- | --- | --- | --- |
| R10 | 1 | 0 | 2(Z/(a0))^(3/2)e^−ρ |
| R20 | 2 | 0 | (1/(2√2))(Z/(a0))^(3/2)(2 − ρ)e^(−ρ/2) |
| R21 | 2 | 1 | (1/(2√6))(Z/(a0))^(3/2)ρe^(−ρ/2) |
| R30 | 3 | 0 | (2/(81√3))(Z/(a0))^(3/2)(27 − 18ρ + 2ρ^2)e^(−ρ/3) |
| R31 | 3 | 1 | (4/(81√6))(Z/(a0))^(3/2)(6ρ − ρ^2)e^(−ρ/3) |
| R32 | 3 | 2 | (4/(81√30))(Z/(a0))^(3/2)ρ^2 e^(−ρ/3) |

[Note: corrected; the source prints "| R31 | 3 | 1 | (1/(81√6))(Z/(a0))^(3/2)(6ρ + ρ^2)e^(−ρ/3) |" where this reads "| R31 | 3 | 1 | (4/(81√6))(Z/(a0))^(3/2)(6ρ − ρ^2)e^(−ρ/3) |"; the source prints "| R32 | 3 | 2 | (1/(81√30))(Z/(a0))^(3/2)" where this reads "| R32 | 3 | 2 | (4/(81√30))(Z/(a0))^(3/2)". These are the normalized 3p and 3d radial functions; as printed, R31 has no radial node and neither function is normalized. They match ψ310 and ψ320 in Section 6.2.]

The constraint that n be greater than or equal to l + 1 also turns out to quantize the energy, producing the same quantized expression for hydrogen atom energy levels that was obtained from the Bohr model of the hydrogen atom.

En = −(μe^4)/(8ε0^2 h^2 n^2)

### Bohr Theory vs. Schrödinger Theory

It is interesting to compare the results obtained by solving the Schrödinger equation with Bohr’s model of the hydrogen atom. There are several ways in which the Schrödinger and Bohr models differ.

1. First, and perhaps most strikingly, the Schrödinger model does not produce well-defined orbits for the electron. The wavefunctions only give us the probability for the electron to be at various directions and distances from the proton.
2. Second, the quantization of angular momentum is different from that proposed by Bohr. Bohr proposed that the angular momentum is quantized in integer units of ħ, while the Schrödinger model leads to an angular momentum of √((l(l + 1))ħ.
3. Third, the quantum numbers appear naturally during solution of the Schrödinger equation while Bohr had to postulate the existence of quantized energy states. Although more complex, the Schrödinger model leads to a better correspondence between theory and experiment over a range of applications that was not possible for the Bohr model.

### Exercise 6.4.3

Explain how the Schrödinger equation leads to the conclusion that the angular momentum of the hydrogen atom can be zero, and explain how the existence of such states with zero angular momentum contradicts Bohr's idea that the electron is orbiting around the proton in the hydrogen atom.

## Contributors and Attributions

- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("Quantum States of Atoms and Molecules")
