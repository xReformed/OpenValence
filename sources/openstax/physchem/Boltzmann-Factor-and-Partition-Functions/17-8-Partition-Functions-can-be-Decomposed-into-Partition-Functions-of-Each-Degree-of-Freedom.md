---
title: "17.8: Partition Functions can be Decomposed into Partition Functions of Each Degree of Freedom"
book: "Physical Chemistry (LibreTexts)"
chapter: "17: Boltzmann Factor and Partition Functions"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17%3A_Boltzmann_Factor_and_Partition_Functions/17.08%3A_Partition_Functions_can_be_Decomposed_into_Partition_Functions_of_Each_Degree_of_Freedom"
author: "Anonymous"
license: "CC BY 4.0"
---

From the previous sections, the partition function for a system of N indistinguishable and independent molecules is:

Q(N, V, β) = (Σi e^(−βEi))/(N!)

And the average energy of the system is:

⟨E⟩ = kT^2((∂ln Q)/(∂T))

We can combine these two equations to obtain:

⟨E⟩ = kT^2((∂ln Q)/(∂T))_(N, V)

= NkT^2((∂ln q)/(∂T))_V

= NΣi εi (e^(−εi/kT))/(q(V, T))

The average energy is equal to:

⟨E⟩ = N⟨ε⟩

where ⟨ε⟩ is the average energy of a single particle. If we compare Equation (ID3) with Equation (aveE), we can see:

[Note: corrected; the source prints "If we compare Equation (ID2) with Equation (ID2)" where this reads "If we compare Equation (ID3) with Equation (aveE)". The equation is compared with the average energy (aveE).]

⟨ε⟩ = Σi εi (e^(−εi/kT))/(q(V, T))

The probability that a particle is in state i, πi, is given by:

πi = (e^(−εi/kT))/(q(V, T)) = (e^(−εi/kT))/(Σj e^(−εj/kT))

[Note: corrected; the source prints "⟨ε⟩ = (e^(−εi/kT))/(q(V, T)) = (e^(−εi/kT))/(Σi e^(−εi/kT))" where this reads "πi = (e^(−εi/kT))/(q(V, T)) = (e^(−εi/kT))/(Σj e^(−εj/kT))". This is the probability of state i, with its own summation index.]

The energy of a particle is a sum of the energy of each degree of freedom for that particle. In the case of a molecule, the energy is:

ε = ε_trans + ε_rot + ε_vib + ε_elec

The molecular partition function is the product of the degree of freedom partition functions:

q(V, T) = q_trans q_rot q_vib q_elec

The partition function for each degree of freedom follows the same is related to the Boltzmann distribution. For example, the vibrational partition function is:

q_vib = Σi e^(−εi/kT)

The average energy of each degree of freedom follows the same pattern as before. For example, the average vibrational energy is:

⟨ε_vib⟩ = kT^2 (∂ln(q_vib))/(∂T) = −(∂ln(q_vib))/(∂β)

[Note: corrected; the source prints "(∂ln(q_vib))/(∂t)" where this reads "(∂ln(q_vib))/(∂T)". The derivative is in T.]
