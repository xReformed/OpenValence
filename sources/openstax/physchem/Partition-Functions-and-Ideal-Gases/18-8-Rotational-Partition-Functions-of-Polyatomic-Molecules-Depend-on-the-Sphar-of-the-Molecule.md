---
title: "18.8: Rotational Partition Functions of Polyatomic Molecules Depend on the Sphar of the Molecule"
book: "Physical Chemistry (LibreTexts)"
chapter: "18: Partition Functions and Ideal Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/18%3A_Partition_Functions_and_Ideal_Gases/18.08%3A_Rotational_Partition_Functions_of_Polyatomic_Molecules_Depend_on_the_Sphar_of_the_Molecule"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

For a polyatomic molecule containing N atoms, the total number of degrees of freedom is 3N. Out of these, three degrees of freedom are taken up for the translational motion of the molecule as a whole. For nonlinear molecules, there are three rotational degrees of freedom and the 3N − 6 vibrational degrees. For linear molecules, the rotational motion along the molecular axis is quantum mechanically not meaningful as the rotated configuration is indistinguishable from the original configuration. Therefore, linear molecules have two rotational degrees of freedom and 3N − 5 vibrational degrees of freedom.

To investigate the rotational motion, we need to fix the center of mass of the molecule and calculate the three principal moments of inertia IA, IB, and IC of the ellipsoid of inertia. The center of mass is defined as the point for which the following identities hold:

Σi mi xi = Σi mi yi = Σi mi zi = 0

[Note: corrected; the source prints "Σi mi xi = Σi mi yi = Σi mi zi" where this reads "Σi mi xi = Σi mi yi = Σi mi zi = 0". The center of mass is at the origin.]

The inertia products are defined by:

I_xx = Σi mi(yi^2 + zi^2)

I_xy = Σi mi(xi yi)

The other components I_yy, I_xz,.. are defined analogously. To find the direction cosines αi, βi, γi of the three principle moments of inertia, we need to solve the following matrix equations:

[Note: corrected; the source prints "αi, βo, γi" where this reads "αi, βi, γi". βi.]

α(I_xx − η) − βI_xy − γI_xz = 0

−αI_xy + β(I_yy − η) − γI_yz = 0

[Note: corrected; the source prints "αI_xy − β(I_yy − η) − γI_yz = 0" where this reads "−αI_xy + β(I_yy − η) − γI_yz = 0". The rows of a symmetric matrix equation; this one has its signs reversed relative to the others.]

−αI_xz − βI_yz + γ(I_zz − η) = 0

If the off diagonal terms I_xy are zero in the above equations, then the x, y, z axis will be the principal axis. The energy of a rotor with the three moments of inertia IA, IB. and IC is given by:

ε = (1/2)IA ωA^2 + (1/2)IB ωB^2 + (1/2)IC ωC^2

= (LA^2)/(2IA) + (LB^2)/(2IB) + (LC^2)/(2IC)

Each of the rotational degrees of freedom will have a characteristic rotational temperature in terms of the moment of inertia:

Θ_(rot, i) = ħ^2/(2Ii k)    i = A, B, C

[Note: corrected; the source prints "hbar^2/(2Ii k)" where this reads "ħ^2/(2Ii k)". The source's TeX types hbar.]

There are many different shapes of molecules and these shapes affect the rotational behavior of the molecules. Molecules are therefore classified according to symmetry into different groups called tops. The three different tops are:

Spherical top    Θ_(rot, A) = Θ_(rot, B) = Θ_(rot, C)

Symmetric top    Θ_(rot, A) = Θ_(rot, B) ≠ Θ_(rot, C)

Asymmetric top    Θ_(rot, A) ≠ Θ_(rot, B) ≠ Θ_(rot, C)

## Spherical Tops

The spherical top can be solved exactly to give:

EJ = (J(J + 1)ħ^2)/(2I)

gJ = (2J + 1)^2    J = 0,1,2, …

[Note: corrected; the source prints "gJ = (2J + 1^2)" where this reads "gJ = (2J + 1)^2". (2J + 1)^2.]

The rotational partition function is:

q_rot = Σ_(J=0)^∞(2J + 1)^2 e^{−ħ^2J(J + 1)/2IkT}

[Note: corrected; the source prints "e^{ħ^2J(J + 1)/2IkT}" where this reads "e^{−ħ^2J(J + 1)/2IkT}". The exponent is negative.]

= Σ_(J=0)^∞(2J + 1)^2 e^{−Θ_rot J(J + 1)/T}

[Note: corrected; the source prints "e^{Θ_rot J(J + 1)/T}" where this reads "e^{−Θ_rot J(J + 1)/T}". As above.]

For almost all spherical top molecules:

T ≫ Θ_rot

[Note: corrected; the source prints "Θ_rot ≫ T" where this reads "T ≫ Θ_rot". The sum becomes an integral when T is much larger than Θ_rot.]

Therefore, we can convert the sum to an integral:

q_rot = (1/σ)∫0^∞ (2J + 1)^2 e^{−Θ_rot J(J + 1)/T}

[Note: corrected; the source prints "e^{Θ_rot J(J + 1)/T}" where this reads "e^{−Θ_rot J(J + 1)/T}". As above.]

where we have now included the symmetry term, σ. Solving for this integral, we get:

q_rot = ((π^(1/2))/σ)(T/Θ_rot)^(3/2)

[Note: corrected; the source prints "(T/(q_rot))^(3/2)" where this reads "(T/Θ_rot)^(3/2)". Θ_rot in the denominator.]

## Symmetric Tops

Here, ωA, ωB, and ωC are the three angular speeds and LA, LB, and LC are the three angular momenta. For a symmetric top molecule such as ammonia, or chloromethane, two components of the moments of inertia are equal, i.e., IB = IC. The rotational energy levels of such a molecule are specified by two quantum numbers J and K. The total angular momentum is determined by J and the component of this angular momentum along the unique molecular axis is determined by K. The energy levels are given by:

ε_(J, K) = B̃J(J + 1) + (Ã − B̃)K^2

with rotational constants in units of wavenumbers:

B̃ = h/(8π^2 cIB)

and:

Ã = h/(8π^2 cIA)

where

- J takes on values 0,1,2, ....∞ and
- K = −J, −J + 1, −J + 2, ...0,1,2, ...J.

The rotational partition function is given by:

q_rot = (1/σ)Σ_(J=0)^∞(2J + 1)e^{−B̃J(J + 1)/kT}Σ_(K=−J)^J(2J + 1)e^{Ã − B̃)K^2/kT}

This can be converted to an integral and the result is:

q_rot = ((√(π))/σ)((8π^2 IB kT)/h^2)((8π^2 IA kT)/h^2)^(1/2)

[Note: corrected; the source prints "((8πIB kT)/h^2)((8πIA kT)/h^2)^(1/2)" where this reads "((8π^2 IB kT)/h^2)((8π^2 IA kT)/h^2)^(1/2)". 8π^2.]

## Asymmetric Tops

For asymmetric tops, the expressions for rotational energies are more complex and the conversions to integrations are not easy. One can actually calculate the sum of terms using a computer. An intuitive answer can be obtained by integrating over the angular momenta LA, LB and LC as:

∫_−∞^∞ ∫_−∞^∞ ∫_−∞^∞ e^{−H(p, q)/kT} dLA dLB dLC = √(2πIA kT)√(2πIB kT)√(2πIC kT)

[Note: corrected; the source prints "e^{H(p, q)/kT}" where this reads "e^{−H(p, q)/kT}". The Boltzmann exponent is negative.]

And then multiplying by a factor of 8π^2/σh^3, we get the rotational partition function. The factor of 8π^2 accounts for the angular integration. For any axis chosen in a molecule, a complete rotation contributes a factor of 2π. Integration over all possible orientations of this axis contribute another factor of 4π. The factor of h^3 is for the conversion from the classical phase space to the quantum mechanical phase space.

### Symmetry Number

As discussed previously, the symmetry number σ corrects for overcounting of rotational configurations. For a linear molecule, σ = 1 without a center of symmetry (e.g. HCN) and σ = 2 with one (e.g. CO2); in general σ is the number of rotations that give indistinguishable orientations (2 for H2O and NO2, 3 for NH3, 12 for CH4).

[Note: corrected; the source prints "If the molecule has no center of symmetry (e.g. HCN) σ = 1 whereas if the molecule has a center of symmetry (e.g. CO2) then σ = 2." where this reads "For a linear molecule, σ = 1 without a center of symmetry (e.g. HCN) and σ = 2 with one (e.g. CO2); in general σ is the number of rotations that give indistinguishable orientations (2 for H2O and NO2, 3 for NH3, 12 for CH4).". The center-of-symmetry rule holds only for linear molecules; the example below uses σ = 2 for NO2.]

The final result is:

q_rot = (√π/σ)√((8π^2 IA kT)/h^2)√((8π^2 IB kT)/h^2)√((8π^2 IC kT)/h^2)

[Note: corrected; the source prints "(π^2/σ)√((8πIA kT)/h^2)√((8πIB kT)/h^2)√((8πIC kT)/h^2)" where this reads "(√π/σ)√((8π^2 IA kT)/h^2)√((8π^2 IB kT)/h^2)√((8π^2 IC kT)/h^2)". √π/σ and 8π^2, as in Equation (RotQ1).]

### Classical Derivation (Optional)

We can explicitly obtain the classical rotational partition function of an asymmetric top by writing the classical expression for the rotational energy in terms of the Euler angles. The orientation of a rigid rotor can be specified by there Euler angles θ, φ, and ψ with the ranges of angles 0 to π, 0 to 2π and 0 to 2π respectively. The rotational Hamiltonian for the kinetic energy can be written in terms of the angles and their conjugate momenta ( pθ, pφ, pψ)

H = ((sin^2ψ)/(2IA))(pθ − ((cos ψ)/(sin θ sin ψ))(pφ − cos θpψ))^2

+ ((cos^2ψ)/(2IB))(pθ − ((sin ψ)/(cos θ cos ψ))(pφ − cos θpψ))^2 + (1/(2IC))pψ^2

The classical rotational partition function is given by

q_rot = ∫_−∞^∞ ∫_−∞^∞ ∫_−∞^∞ ∫0^π ∫0^(2π) ∫0^(2π) (1/h^3)e^{−H(p, q)/kT}dpθ dpφ dpψ dθ dφ dψ

The integrations can be simplified by rewriting H(p, q)/kT as

H/kT = (1/(2IA kT))((sin^2ψ)/(IA) + (cos^2ψ)/(IB))(pθ + (1/(IB) − 1/(IA))((sin ψ cos ψ)/(sin θ((sin^ψ)/(IA) + (cos^2ψ)/(IB))))(pφ − cos θpψ))^2

+ (1/(2 kTIA IB sin^2θ))((1/(sin θ((sin^2ψ)/(IA) + (cos^2ψ)/(IB))))(pφ − cos θpψ))^2 + (1/(2kTIc))pψ^2

[Note: corrected; the source prints "(sin^ψ)/(IA)" where this reads "(sin^2ψ)/(IA)"; the source prints "(1/(2KTIc))pψ^2" where this reads "(1/(2kTIc))pψ^2". sin^2ψ and kT. The steps of this optional derivation also have sign and factor slips (the prefactor of the first term should be 1/2kT); its result, RotQ1, is right.]

Using the following integral,

∫_−∞^∞ e^{−a(x + b)^2}dx = ∫_−∞^∞ e^(−ax^2)dx = √(π/a)

Integration over pθ gives using the above expression

√(2πkT)((sin^2ψ)/(IA) + (cos^2ψ)/(IB))^(−1/2)

Integration over pφ gives the factor,

√(2πkTIA IB) sin θ((sin^2ψ)/(IA) + (cos^2ψ)/(IB))^(1/2)

This cancels partly the second square root in Equation (SA1). Integration over pψ gives the factor

√(2πkTIc)

Integration over θ, φ and ψ gives a factor of 8π^2.

∫0^π sin θ dθ = 2

∫0^(2π) dφ = 2π

∫0^(2π) dψ = 2π

Combining all the integrals, we finally get Equation (big0) after reintroduced the symmetry number σ as before with diatomic molecular rotation.

We can simplify calculations by defining characteristic rotational temperatures for each axis of rotational:

ΘA = h^2/(8π^2 IA k)

ΘB = h^2/(8π^2 IB k)

ΘC = h^2/(8π^2 IC k)

The polyatomic rotational partition function expressed in Equation (big0) can then be re-expressed as:

q_rot = ((√(π))/σ)√(T^3/(ΘA ΘB ΘC))

or alternatively:

ln q_rot = (1/2) ln((πT^3)/(ΘA ΘB ΘC σ^2))

[Note: corrected; the source prints "ln((πT)/(ΘA ΘB ΘC σ^2))" where this reads "ln((πT^3)/(ΘA ΘB ΘC σ^2))". From RotQ1: T^3.]

### Example: Nitrogen Dioxide

The three characteristic rotational temperatures for NO2 are 11.5 K, 0.624 K and 0.590 K. Calculate the rotational partition function at 300 K.

[Note: corrected; the source prints "are 111.5 K," where this reads "are 11.5 K,". ΘA is 11.5 K, as the calculation uses.]

**Solution**

The rotational partition function is given by Equation (RotQ1):

[Note: corrected; the source prints "The rotational temperature is given by" where this reads "The rotational partition function is given by". RotQ1 gives q_rot.]

q_rot = ((√(π))/σ)√(T^3/(ΘA ΘB ΘC))

The rotational partition function becomes,

q_rot = (1.772/2)√((300 K)^3/((11.5 K)(0.624 K)(0.590 K))) = 2238

[Note: corrected; the source prints "q_rot = (1.772/2)√((300 K)/((11.5 K)(0.624 K)(22.55 K))) = 2242.4" where this reads "q_rot = (1.772/2)√((300 K)^3/((11.5 K)(0.624 K)(0.590 K))) = 2238". With T^3 and ΘC = 0.590 K: 0.886 × √(2.7 × 10^7/4.234) = 2238.]

## Thermodynamics Properties

The molar thermodynamic functions can be readily calculated including average rotation energy and molar heat capacity:

E_rot = (3/2)RT

and:

C̄V = (3/2)R

Improvements over the classical approximation for the rotational partition function derived above have been obtained. One of the improved versions (with no derivation) is:

q_rot = q_rot^0[1 + (h^2/(96π^2 kT))(2/(IA) + 2/(IB) + 2/(IC) − (IA)/(IB IC) − (IB)/(IA IC) − (IC)/(IA IB))]

[Note: corrected; the source prints "(2/(IA) + 2/(IC) + 2/(IC) + (IC)/(IB IB) − (IA)/(IB IC) − (IB)/(IA IC))" where this reads "(2/(IA) + 2/(IB) + 2/(IC) − (IA)/(IB IC) − (IB)/(IA IC) − (IC)/(IA IB))". Symmetric in A, B and C; for a spherical top it gives the known 1 + Θ/4T.]

where q_rot^0 is the classical approximation in Equation (big0).

Comparing this result with the vibrational partition function calculation before (q_vib = 1.030), give the implication that while multiple rotational states are accessible at room temperature, very few vibrational states (other than the ground vibrational state) are accessible.

[Note: corrected; the source prints "(q_vib = 1.0035)" where this reads "(q_vib = 1.030)". As corrected in Section 18.7.]

## Contributors and Attributions

- www.chem.iitb.ac.in/~bltembe/pdfs/ch_3.pdf
