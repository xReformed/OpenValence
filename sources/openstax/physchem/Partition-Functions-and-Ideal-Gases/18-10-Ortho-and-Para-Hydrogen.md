---
title: "18.10: Ortho and Para Hydrogen"
book: "Physical Chemistry (LibreTexts)"
chapter: "18: Partition Functions and Ideal Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18%3A_Partition_Functions_and_Ideal_Gases/18.10%3A_Ortho_and_Para_Hydrogen"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The molecules of hydrogen can exist in two forms depending on the spins on the two hydrogen nuclei. If both the nuclear spins are parallel, the molecule is called ortho and if the spins are antiparallel, it is referred to as para (in disubstituted benzene, para refers to the two groups at two opposite ends, while in ortho, they are adjacent or “parallel” to each other). The spin on the hydrogen nucleus has a magnitude of ½ħ. The presence of nuclear spins leads to very interesting consequences for the populations of the rotational states and on a macroscopic scale, has consequences on measured entropies and heat capacities as well. The total partition function of H2 can be written as:

q_tot = q_elec q_vib q_rot q_trans q_nuc

where, the subscripts refer to the respective motions. After “half” a rotation, the nuclei are superimposed on each other. Since a proton is a spin half nucleus, the total wave function must be antisymmetic with respect to the exchange of the particles. i.e.:

ψ(1,2) = −ψ(2,1)

The translational motion refers to the motion of the molecular center of mass and has no influence on the symmetry of the nuclear wave function. Vibrational motion depends on the magnitude of the internuclear distance and has no effect on the particle exchange. The electronic motion also has no effect on the symmetry properties of the nuclear wave function. Therefore, the product of the nuclear spin and rotational wave functions must be antisymmetric with respect to the particle exchange. For the nuclear spin functions, there are four combinations. One combination is a singlet:

|ψ_(ν, s)⟩ = α(1)β(2) − α(2)β(1)

And the other three combinations are the three states of a triplet:

|ψ_(ν, t)⟩ = α(1)α(2)

[Note: corrected; the source prints "|ψ_(ν, s)⟩ = α(1)α(2)" where this reads "|ψ_(ν, t)⟩ = α(1)α(2)". This is a triplet function (t), as q_(ν, t) below.]

|ψ_(ν, t)⟩ = α(1)β(2) + α(2)β(1)

[Note: corrected; the source prints "|ψ_(ν, s)⟩ = α(1)β(2) + α(2)β(1)" where this reads "|ψ_(ν, t)⟩ = α(1)β(2) + α(2)β(1)". As above: triplet.]

|ψ_(ν, s)⟩ = β(1)β(2)

The rotational wavefunctions (ψr) are given in terms of the associated Legendre polynomials Pl^(|m|)(x) where x = cos θ:

|ψr⟩ = e^(imφ)Pl^(|m|)(cos θ)

with:

Pl^(|m|)(x) = (1 − x^2)^(|m|/2) · (d^(|m|)Pl(x))/(dx^(|m|))

[Note: corrected; the source prints "Pl^{(m)}(x) = (1 − x^2)^(|m/2)(d^(|m|)Pl(x))/(dx^(m|))" where this reads "Pl^(|m|)(x) = (1 − x^2)^(|m|/2) · (d^(|m|)Pl(x))/(dx^(|m|))". The absolute-value bars are garbled in the source.]

Pl(x) = 1/(2^l l!) · (d^l(x^2 − 1)^l)/(dx^l)

When the nuclei are interchanged, θ becomes π − θ and φ is changed to φ + π. The polynomials change as:

Pl(−x) = (−1)^l Pl(x); Pl^(|m|)(−x) = (−1)^(l−|m|)Pl^(|m|)(x)

[Note: corrected; the source prints "(−1)^′Pl(x)" where this reads "(−1)^l Pl(x)"; the source prints "(−1)^(l−|m|||)Pl^(|m|)(x)" where this reads "(−1)^(l−|m|)Pl^(|m|)(x)". Garbled exponents.]

The exponential function changes as:

e^{im(φ + π)} = e^(imπ)e^(imφ) = (−1)^(|m|)e^(imφ)

Therefore, the rotational wave function changes as:

Pl(−x) = (−1)^l Pl(x)

Pl^(|m|)(−x) = (−1)^(l−|m|)Pl^(|m|)(x)

- |ψr⟩ is symmetrical for even J, and
- |ψr⟩ is antisymmetrical for odd J

Combining the nuclear spin and the rotational parts, we see that, the product ψr, ψm must be antisymmetrical (with respect to the exchange of nuclei) for half integral nuclear spins and symmetrical for integral spins. To accomplish this, the singlet nuclear states (para) must be combined with the even rotational functions and the triplet nuclear states must be combined with the odd rotational states. The rotational partition functions for ortho and para hydrogens are, thus:

q_ortho = q_(ν, t) q_(r, odd) = 3Σ_(J=1,3,5, …)(2J + 1)e^{−J(J + 1)ΘR/T}

and:

q_para = q_(ν, s ) q_(r, even) = 1Σ_(J=0,2,4, …)(2J + 1)e^{−J(J + 1)ΘR/T}

where ΘR is the rotational temperature defined previously. The total partition function consisting both ortho and para hydrogens is given by:

q_(rot, nu) = 1Σ_(J=0,2,4,…)(2J + 1)e^{−J(J + 1)ΘR/T} + 3Σ_(J=1,3,5,…)(2J + 1)e^{−J(J + 1)ΘR/T}

[Note: corrected; the source prints "1Σ_(j=0.2.4)(2J + 1)e^{−J(J + 1)Θk/T} + 3Σ_(j=1,3,5, n)(2J + 1)e^{−J(J + 1)ΘR/T}" where this reads "1Σ_(J=0,2,4,…)(2J + 1)e^{−J(J + 1)ΘR/T} + 3Σ_(J=1,3,5,…)(2J + 1)e^{−J(J + 1)ΘR/T}". Garbled indices and ΘR.]

The ratio of ortho to para hydrogens at thermal equilibrium is given by:

(No)/(Np) = (3Σ_(J=1,3,5,…)(2J + 1)e^{−J(J + 1)ΘR/T})/(Σ_(J=0,2,4,…)(2J + 1)e^{−J(J + 1)ΘR/T})

[Note: corrected; the source prints "(3Σ_(j=1,2,3…)(2J + 1)e^{−J(J + 1)ΘR/T})/(Σ_(j=0) 2(2J + 1)e^{−J(J + 1)ΘR/T})" where this reads "(3Σ_(J=1,3,5,…)(2J + 1)e^{−J(J + 1)ΘR/T})/(Σ_(J=0,2,4,…)(2J + 1)e^{−J(J + 1)ΘR/T})". Ortho is the odd J, para the even J.]

At high temperature, the two summations become equal and therefore, the high temperature limit of No/Np is 3. At low temperature, the ratio becomes:

(No)/(Np) = (3(3e^(−2ΘR/T) + …))/(1(1 + 5e^(−6ΘR/T) + …)) → 0, as T → 0

[Note: corrected; the source prints "(3(3e^(−2Θk/T) + ……))/(1(1 + 5e^(−5Θn/T) + …))" where this reads "(3(3e^(−2ΘR/T) + …))/(1(1 + 5e^(−6ΘR/T) + …))". ΘR, and J = 2 has J(J + 1) = 6.]

A good experimental verification of the above analysis is a comparison between the calculated rotational heat capacities at constant volume (CV) rot, nu (calculated from:

CV = (∂⟨E⟩)/(∂T)

where:

⟨E⟩ = −(∂ln q_(rot, ν))/(∂β)

[Note: corrected; the source prints "⟨E⟩ = (∂ln q_(rot, ν))/(∂β)" where this reads "⟨E⟩ = −(∂ln q_(rot, ν))/(∂β)". ⟨E⟩ = −∂ln q/∂β, as in Section 18.11.]

The heat capacities are shown as a function of temperature in Figure 18.10.1 .

Figure 18.10.1: The heat capacities of o- and p- hydrogens as a function of temperature. The curve marked 3:1 matches the experimental data, the curve eq represents the data for an equilibrated mixture of o- and p- at a given temperature and the curves o- and p-represent the heat capacities of pure o- and pure p- hydrogens. (CC-SA-BY 3.0; Gadolinist).
Graph showing measured heat capacity versus temperature, with labeled curves for equilibrium, para, ortho, and 3:1 states.

[Note: corrected; the source prints "The curve marked Exp depicts the experimental data" where this reads "The curve marked 3:1 matches the experimental data". The text calls the purple 3:1 curve the experimental one.]

The purple curve marked 3:1 gives the experimental data, the curve eq represents the data for an equilibrated mixture of o- and p- at a given temperature. The curves o- and p- represent the heat capacities of pure o- and pure p- hydrogens calculated from the o- and p- partition functions given by Equations (3.97) and (3.98) respectively. Initially it was a puzzle as to why the experimental data differs from the calculated values. In fact, the experimental data seemed to agree very well with the following equation:

(CV)_(rot, ν) = (3/4)(CV)_(rot, ν)(ortho) + (1/4)(CV)_(rot, ν)(para)

The reason for this is that, when H2 is cooled down from a higher temperature, the ortho:para ratio continues to remain 0.75 / 0.25 (the high temperature value) because the ortho → para interconversion rate is very very small and we do not reach the equilibrium composition unless a catalyst such as activated charcoal is added to the gas mixture. Equation (3.102) corresponds to a “frozen high temperature mixture” of ortho:para hydrogens. In the presence of the catalyst, the experiments also give the curve labeled as eq in the graph. This in indeed a very nice case where the experiments support not only the methods of statistical thermodynamics but also of the antisymmetry principle for bosons and fermions. If we consider the case of ^16O2, where the nuclear spins are zero, the rotational wave function has to be symmetric as only symmetric wave functions are permitted for bosons. Thus, only odd rotational states contribute to the partition function:

[Note: corrected; the source prints "only even rotational states contribute" where this reads "only odd rotational states contribute". The ground state of O2, ^3Σg^−, is antisymmetric under exchange of the nuclei, so with spin-0 nuclei only odd J occur.]

q_(rot, V)(^16 O2) = Σ_(J=1,3,5, …)(2J + 1)e^{−J(J + 1)θR/T}

[Note: corrected; the source prints "Σ_(J=0,2,4, …)" where this reads "Σ_(J=1,3,5, …)". As above: odd J.]

## Contributors and Attributions

- www.chem.iitb.ac.in/~bltembe/pdfs/ch_3.pdf
