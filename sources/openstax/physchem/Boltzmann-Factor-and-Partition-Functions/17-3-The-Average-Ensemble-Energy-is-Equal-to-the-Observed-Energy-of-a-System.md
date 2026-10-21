---
title: "17.3: The Average Ensemble Energy is Equal to the Observed Energy of a System"
book: "Physical Chemistry (LibreTexts)"
chapter: "17: Boltzmann Factor and Partition Functions"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17%3A_Boltzmann_Factor_and_Partition_Functions/17.03%3A_The_Average_Ensemble_Energy_is_Equal_to_the_Observed_Energy_of_a_System"
author: "Anonymous"
license: "CC BY 4.0"
---

We will be restricting ourselves to the canonical ensemble (constant number of particles, volume and temperature). Consider a collection of N molecules. The probability of finding a molecule with energy Ei is equal to the fraction of the molecules with energy Ei. That is, in a collection of N molecules, the probability of the molecules having energy Ei:

[Note: corrected; the source prints "(constant temperature and constant pressure)" where this reads "(constant number of particles, volume and temperature)". The canonical ensemble has N, V and T fixed (Section 17.2); constant T and P is the isothermal-isobaric ensemble.]

Pi = (ni)/N

This is the directly obtained from the Boltzmann distribution, where the fraction of molecules ni/N having energy Ei is:

Pi = (ni)/N = (e^(−Ei/kT))/Q

The average energy is obtained by multiplying Ei with its probability and summing over all i:

⟨E⟩ = Σi Ei Pi

Equation (Mean1) is the standard average over a distribution commonly found in quantum mechanics as expectation values. The quantum mechanical version of this Equation is

⟨ψ|Ĥ|ψ⟩

where Ψ^2 is the distribution function that the Hamiltonian operator (e.g., energy) is averaged over; this equation is also the starting point in the Variational method approximation.

Equation (Mean1) can be solved by plugging in the Boltzmann distribution (Equation (BD1)):

⟨E⟩ = Σi(Ei e^(−Ei/kT))/Q

Where Q is the partition function:

Q = Σi e^{−(Ei)/kT}

We can take the derivative of ln Q with respect to temperature, T:

((∂ln Q)/(∂T)) = (1/kT^2)Σi(Ei e^(−Ei/kT))/Q

Comparing Equation (Eq1) with (Eq2), we obtain:

⟨E⟩ = kT^2((∂ln Q)/(∂T))

It is common to write these equations in terms of β, where:

β = 1/kT

The partition function becomes:

Q = Σi e^(−βEi)

We can take the derivative of ln Q with respect to β:

((∂ln Q)/(∂β)) = −Σi(Ei e^(−βEi))/Q

And obtain:

⟨E⟩ = −((∂ln Q)/(∂β))

Replacing 1/kT with β often simplifies the math and is easier to use.

It is not uncommon to find the notation changes: Z instead of Q and Ē instead of ⟨E⟩.
