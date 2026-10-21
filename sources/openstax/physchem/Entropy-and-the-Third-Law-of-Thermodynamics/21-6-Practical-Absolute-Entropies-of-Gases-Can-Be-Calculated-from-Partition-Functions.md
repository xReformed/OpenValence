---
title: "21.6: Practical Absolute Entropies of Gases Can Be Calculated from Partition Functions"
book: "Physical Chemistry (LibreTexts)"
chapter: "21: Entropy and the Third Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/21%3A_Entropy_and_the_Third_Law_of_Thermodynamics/21.06%3A_Practical_Absolute_Entropies_of_Gases_Can_Be_Calculated_from_Partition_Functions"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Recall that the entropy of a system, S, can be calculated if the partition function, Q, is known:

S = U/T + kB ln Q

where Q is:

Q = Σj e^{−(Ej)/kT}

The internal energy of the system can also be calculated from the partition function:

U = kB T^2((δ ln Q)/(δT))

Combining these equations, we obtain:

S = kB ln Q + kB T((δ ln Q)/(δT))

The third law of thermodynamics states that entropy of a perfect crystal at absolute zero is zero. We can show that our equation for entropy in terms of the partition function is consistent with the third law. Plugging in our equation for the partition function into our equation for entropy, we obtain:

S = kB ln Σj e^{−(Ej)/kT} + kB T((δ ln Σj e^{−(Ej)/kT})/(δT))

As T goes to zero, all the states will be in their lowest energy configuration. If the ground state is n degenerate, then n states will be in the ground state:

E1 = E2 = ... = En

[Note: corrected; the source prints "E1 = E2 = ... = Em" where this reads "E1 = E2 = ... = En". The ground level is n-fold degenerate; m is the next level's degeneracy.]

This is true for all the next states. For example, if the next state is m degenerate, then:

E_(n+1) = E_(n+2) = ... = E_(n+m)

This gives us the result:

Σj e^{−(Ej)/kT} = ne^{−(E1)/kT} + me^{−(E_(n+1))/kT} + ...
