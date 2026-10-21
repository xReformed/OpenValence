---
title: "13.11: Time-Dependent Perturbation Theory"
book: "Physical Chemistry (LibreTexts)"
chapter: "13: Molecular Spectroscopy"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/13%3A_Molecular_Spectroscopy/13.11%3A_Time-Dependent_Perturbation_Theory"
author: "Wikipedia"
license: "CC BY-SA 4.0"
---

Time-independent perturbation theory was presented by Erwin Schrödinger in a 1926 paper, shortly after he produced his theories in wave mechanics. In time-independent perturbation theory, the perturbation Hamiltonian is static (i.e., possesses no time dependence). Time-dependent perturbation theory, developed by Paul Dirac, studies the effect of a time-dependent perturbation V(t) applied to a time-independent Hamiltonian H0. Since the perturbed Hamiltonian is time-dependent, so are its energy levels and eigenstates. Thus, the goals of time-dependent perturbation theory are slightly different from time-independent perturbation theory, where one may be interested in the following quantities:

- The time-dependent expectation value of some observable A, for a given initial state.
- The time-dependent amplitudes of those quantum states that are energy eigenkets (eigenvectors) in the unperturbed system.

The first quantity is important because it gives rise to the classical result of a measurement performed on a macroscopic number of copies of the perturbed system. The second quantity looks at the time-dependent probability of occupation for each eigenstate. This is particularly useful in laser physics, where one is interested in the populations of different atomic states in a gas when a time-dependent electric field is applied. We will briefly examine the method behind Dirac's formulation of time-dependent perturbation theory. Choose an energy basis |n⟩ for the unperturbed system. (We drop the (0) superscripts for the eigenstates, because it is not useful to speak of energy levels and eigenstates for the perturbed system.)

If the unperturbed system is in eigenstate |j⟩ at time t = 0, its state at subsequent times varies only by a phase (this is the Schrödinger picture, where state vectors evolve in time and operators are constant)

|j(t)⟩ = e^(−iEj t/ħ)|j⟩

Now, introduce a time-dependent perturbing Hamiltonian H1(t). The Hamiltonian of the perturbed system is

H = H0 + H1(t)

Let |ψ(t)⟩ denote the quantum state of the perturbed system at time t and obeys the time-dependent Schrödinger equation,

H|ψ(t)⟩ = iħ(∂)/(∂t)|ψ(t)⟩

The quantum state at each instant can be expressed as a linear combination of the complete eigenbasis of |n⟩:

|ψ(t)⟩ = Σn cn(t)e^(−iEn t/ħ)|n⟩

where the cn(t) coefficients are to be determined complex functions of t which we will refer to as amplitudes

We have explicitly extracted the exponential phase factors exp(−iEn t/ħ) on the right hand side. This is only a matter of convention, and may be done without loss of generality. The reason we go to this trouble is that when the system starts in the state |j⟩ and no perturbation is present, the amplitudes have the convenient property that, for all t, cj(t) = 1 and cn(t) = 0 if n ≠ j.

The square of the absolute amplitude cn(t) is the probability that the system is in state n at time t, since

|ψ(t)⟩ = Σn cn(t)e^(−iEn t/ħ)|n⟩

Plugging into the Schrödinger equation and using the fact that ∂/∂t acts by a chain rule, one obtains

Σn(iħ(∂cn)/(∂t) − cn(t)V(t))e^(−iEn t/ħ)|n⟩ = 0 .

By resolving the identity in front of V, this can be reduced to a set of coupled ordinary differential equations for the amplitudes,

[Note: corrected; the source prints "a set of partial differential equations" where this reads "a set of coupled ordinary differential equations". The coefficients depend only on t.]

(∂cn)/(∂t) = ((−i)/ħ)Σk⟨n|H1(t)|k⟩ ck(t) e^{−i(Ek − En)t/ħ} .

The matrix elements of H1 play a similar role as in time-independent perturbation theory, being proportional to the rate at which amplitudes are shifted between states. Note, however, that the direction of the shift is modified by the exponential phase factor. Over times much longer than the energy difference Ek − En, the phase winds around 0 several times. If the time-dependence of H1 is sufficiently slow, this may cause the state amplitudes to oscillate (e.g., such oscillations are useful for managing radiative transitions in a laser).

## Two-Level System

Consider the two level system (i.e. n = 1,2)

|ψ⟩ = Σ_(n = 1, 2) cn(t)|n⟩o

[Image: Diagram showing two states, |1⟩ and |2⟩, with a pink dashed arrow indicating a transition between them.]

Solution of time-dependent perturbation for two level system:

iħ(∂c1(t))/(∂t) = c1(t)H11(t) + c2 e^(−iωo t)H12(t)

iħ(∂c2(t))/(∂t) = c2(t)H22(t) + c1 e^(+iωo t)H21(t)

where the matrix elements of the perturbation (in terms of the eigenstates of H(0)) are

[Note: corrected; the source prints "matrix elements of the permutation" where this reads "matrix elements of the perturbation". A typing error.]

⟨m|H1(t)|n⟩ = H_mn(t)

Assume initial state is n = 1, and H11 = H22 = 0

|ψ(t = 0)⟩ = |1⟩

Probability of particle at n = 2 at time t after the perturbation is turned on (i.e., incident light):

c2(t) = ((−i)/ħ)∫_0^t e^(iωo t')dt'H21(t')

[Note: corrected; the source prints "∫_o^t e^(iωo t)dt'" where this reads "∫_0^t e^(iωo t')dt'". The integrand depends on the integration variable t'.]

where

H1(t) = cos(ωt)V(r)

V(r) is an amplitude of polarization vector, which we can ignore for now.

If we assume incident frequency of incident light ω is comparable to the natural frequency of oscillation from ωo

ω ≈ ωo

then Equation (EQ1) can be simplified to

c2(t) = −(i/ħ) · ((sin((ω − ωo)t/2))/(ω − ωo))e^{i(ω0 − ω)t/2}H21

[Note: corrected; the source prints "c2(t) = −(2i)/ħ · ((sin(ω − ωo)t/2)/((ω − ωo)t))" where this reads "c2(t) = −(i/ħ) · ((sin((ω − ωo)t/2))/(ω − ωo))". With H21(t) = (H21/2)(e^(iωt) + e^(−iωt)) and the near-resonant term kept, ∫0^t e^(i(ω0 − ω)t')dt' = e^(i(ω0 − ω)t/2) · 2 sin((ω − ω0)t/2)/(ω − ω0).]

### Transition Probability

Assume initial state is n = 1, and probability of transition from n = 1 state to n = 2 state is:

P12(t) = |c2(t)|^2 = (|H21|^2/ħ^2) · (sin^2((ω − ωo)t/2))/((ω − ωo)^2)

[Note: corrected; the source prints "P12(t) = |c2(t)|^2 = 4/ħ^2|(sin(ω − ωo)t/2)/((ω − ωo)t)|^2|H21|^2" where this reads "P12(t) = |c2(t)|^2 = (|H21|^2/ħ^2) · (sin^2((ω − ωo)t/2))/((ω − ωo)^2)". From c2 above; only this form has the peak value |H12 t/2ħ|^2 at ω = ωo given below.]

What does this mean? Strangely, it means that the probability of making a transition is actually oscillating sinusoidally (squared)! If you want to cause a transition, should turn off perturbation after time π/|ω − ωo| or some odd multiple, when the system is in upper state with maximum probability.

[Image: Graph of the transition probability P12(t) against ω − ω0: a single peak at ω − ω0 = 0, of height |H12 t/2ħ|^2 and width 4π/t.]

[Note: corrected; the source prints "[Image: Graph showing a curve with a peak around the value 1 on the t-axis and labeled axes for ω - ω₀ and t.]" where this reads "[Image: Graph of the transition probability P12(t) against ω − ω0: a single peak at ω − ω0 = 0, of height |H12 t/2ħ|^2 and width 4π/t.]". The image's alt text, machine-written, misreads the image; this describes it.]

P12(t) is peaked at ω − ωo = 0. The height of |H12 t/2ħ|^2 and width of 4π/t gets higher and narrower as time goes on. Recall this is perturbative treatment, however, and P12(t) cannot get bigger than 1, so perturbation theory breaks down eventually.
