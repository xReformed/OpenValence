---
title: "17.5: Pressure can be Expressed in Terms of the Canonical Partition Function"
book: "Physical Chemistry (LibreTexts)"
chapter: "17: Boltzmann Factor and Partition Functions"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17%3A_Boltzmann_Factor_and_Partition_Functions/17.05%3A_Pressure_can_be_Expressed_in_Terms_of_the_Canonical_Partition_Function"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Pressure can also be derived from the canonical partition function. The average pressure is the sum of the probability times the pressure:

⟨P⟩ = Σi Pi(N, V, T)Pi(N, V)

The pressure of a macroscopic system is:

P(N, V) = −((∂Ei)/(∂V))_N

So we can write the average pressure as:

⟨P⟩ = Σi Pi(N, V, β)(−(∂Ei)/(∂V))_N

= Σi(−(∂Ei)/(∂V))_N (e^{−Ei(N, V)/kT})/(Q(N, V, T))

In a few steps we can show that the pressure can be expressed in terms of the partition function:

[Note: corrected; the source prints "the temperature can be expressed" where this reads "the pressure can be expressed". The result is the pressure.]

Q(N, V, T) = Σi e^{−Ei(N, V)/kT}

Writing in terms of β instead of temperature:

Q(N, V, β) = Σi e^{−βEi(N, V)}

The derivative of the partition function with respect to volume is:

((∂Q)/(∂V))_(N, β) = −βΣi((∂Ei)/(∂V))_N e^{−βEi(N, V)}

The average pressure can then be written as:

⟨P⟩ = (kT)/(Q(N, V, β)) · ((∂Q)/(∂V))_(N, β)

[Note: corrected; the source prints "⟨P⟩ = (kT/(Q(N, V, β))((∂Q)/(∂V))_(N, β)" where this reads "⟨P⟩ = (kT)/(Q(N, V, β)) · ((∂Q)/(∂V))_(N, β)". A bracket is missing in the source's TeX.]

Which shows that the pressure can be expressed solely terms of the partition function:

⟨P⟩ = kT((∂ln Q)/(∂V))_(N, β)

We can use this result to derive the ideal gas law. For N particles of an ideal gas:

Q(N, V, β) = ([q(V, β)]^N)/(N!)

where:

q(V, β) = ((2πm)/(h^2β))^(3/2)V

is the translational partition function. The utility of expressing the pressure as a logarithm is clear from the fact that we can write:

ln Q = N ln q − ln(N!)

= ((3N)/2) ln((2πm)/(h^2β)) + N ln V − ln(N!)

[Note: corrected; the source prints "= −((3N)/2) ln((2πm)/(h^2β))" where this reads "= ((3N)/2) ln((2πm)/(h^2β))". N ln q = (3N/2) ln(2πm/(h^2β)) + N ln V; the pressure that follows is unchanged.]

We have used the property of logarithms that ln(AB) = ln(A) + ln(B) and ln(X^Y) = Y ln(X). Only one term in the ln Q depends on V. Taking the derivative of N ln V with respect to V gives:

((∂ln Q)/(∂V))_(N, β) = N/V

Substituting this into the above equation for the pressure gives:

P = NkT/V

which is the ideal gas law. Recall that Nk = nR where N is the number of molecules and n is the number of moles. R is the universal gas constant (8.314 J/mol-K) which is nothing more than k multiplied by Avagadro’s number. NA k = R converts the constant from a "per molecule" to a "per mole" basis.

## Gas Compressed by a Piston

Figure 17.5.1: Illustration of a thought experiment in which a system is compressed via a piston pushed into the system along the positive z axis.
Diagram showing a rectangular area with scattered points inside, labeled with axes z and dz.

Let us consider a simple thought experiment, which is illustrated in the figure above: A system of N particles is compressed by a piston pushing in the positive z direction. Since this is a classical thought experiment, we think in terms of forces. The piston exerts a constant force of magnitude F on the system. The direction of the force is purely in the positive z direction, so that we can write the force vector F as F = (0,0, F). At equilibrium (the piston is not moving), the system exerts an equal and opposite force on the piston of the form (0,0, −F). If the energy of the system is E, then the force exerted by the system on the piston will be given by the negative change in E with respect to z:

−F = −dE/dz

or:

F = dE/dz

The force exerted by the system on the piston is manifest as an observable pressure P equal to the force F divided by the area A of the piston, P = F/A. Given this, the observed pressure is just:

P = dE/Adz

Since the volume decreases when the system is compressed, we see that Adz = −dV. Hence, we can write the pressure as P = −dE/dV.

Of course, the relation P = −dE/dV is a thermodynamic one, but we need a function of x that we can average over the ensemble. The most natural choice is:

p(x) = −(dℰ(x))/dV

so that P = ⟨p(x)⟩. Setting up the average, we obtain:

P = −((CN)/(Q(N, V, T)))∫((∂ℰ)/(∂V))e^{−βℰ(x)}

= (CN)/(Q(N, V, T)) · (1/β)∫((∂)/(∂V))e^{−βℰ(x)}

= (kT)/(Q(N, V, T)) · ((∂)/(∂V))CN∫e^{−βℰ(x)}

[Note: corrected; the source prints "= kT/(Q(N, V, T) · " where this reads "= (kT)/(Q(N, V, T)) · ". As above: a bracket missing in the source.]

= kT((∂ ln Q(N, V, T))/(∂V))

## Ideal Gas in the Canonical Ensemble

Recall that the mechanical energy for an ideal gas is:

ℰ(x) = Σ_(i=1)^N (pi^2)/(2 m)

where all particles are identical and have mass m. Thus, the expression for the canonical partition function Q(N, V, T) is:

Q(N, V, T) = (1/(N!h^(3N)))∫dx e^{−βΣ_(i=1)^Npi^2/2m}

Note that this can be expressed as:

Q(N, V, T) = (1/(N!h^(3N)))V^N[∫dp e^(−βp^2/2m)]^(3N)

Evaluating the Gaussian integral gives us the final result immediately:

Q(N, V, T) = (1/(N!))[(V/h^3)((2πm)/β)^(3/2)]^N

The expressions for the energy:

E = −(∂)/(∂β) ln Q(N, V, T)

which gives:

E = (3/2)NkT = (3/2)nRT

and pressure:

P = kT((∂ ln Q(N, V, T))/(∂V))

giving:

P = NkT/V = nRT/V

which is the ideal gas law.
