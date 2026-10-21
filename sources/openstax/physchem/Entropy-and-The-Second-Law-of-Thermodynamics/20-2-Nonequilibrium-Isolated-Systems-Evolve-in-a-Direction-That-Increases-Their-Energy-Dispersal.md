---
title: "20.2: Nonequilibrium Isolated Systems Evolve in a Direction That Increases Their Energy Dispersal"
book: "Physical Chemistry (LibreTexts)"
chapter: "20: Entropy and The Second Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20%3A_Entropy_and_The_Second_Law_of_Thermodynamics/20.02%3A_Nonequilibrium_Isolated_Systems_Evolve_in_a_Direction_That_Increases_Their_Energy_Dispersal"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

In spontaneous processes for a system that can exchange energy with its surroundings, there is a competition between minimizing the energy of the system and increasing the dispersal of energy within the system. If energy is constant, then the system will evolve to maximize energy dispersal. If energy dispersal is not a factor, the system will evolve to minimize its energy. We already have a quantitative basis for the energy of a system and we need to do the same for energy dispersal. Suppose we have a small reversible change dU in the energy of an ideal gas. We know that U only depends on temperature:

[Note: corrected; the source prints "In spontaneous processes for an isolated system," where this reads "In spontaneous processes for a system that can exchange energy with its surroundings,". An isolated system's energy is fixed, so only the dispersal of energy decides.]

dU = Cv dT

We also know that any reversible work would be volume work.

δw_rev = −PdV

This means that we can write:

δq_rev = dU − δw_rev

= Cv dT + PdV

Let us examine if this represents an exact differential. If δq were an exact differential, we could write the total differential:

δq_rev = ((∂q)/(∂T))_V dT + ((∂q)/(∂V))_T dV

[Note: corrected; the source prints "((∂q)/dT)_V" where this reads "((∂q)/(∂T))_V"; the source prints "((∂q)/dV)_T" where this reads "((∂q)/(∂V))_T". Partial derivatives.]

And the following would be true:

(∂^2 q_rev)/(∂T∂V) = (∂^2 q_rev)/(∂V∂T)

From our equation above, we know that:

(∂q_rev)/(∂T) = CV

(∂q_rev)/(∂V) = P

Therefore, the following should be true:

(∂CV)/(∂V) = (∂P)/(∂T)

However,

(∂Cv)/(∂V) = 0

Because Cv does not depend on volume (only T, just like U: it is its derivative). And:

(∂P)/(∂T) = (∂(nRT/V))/(∂T) = nR/V

[Note: corrected; the source prints "(∂nRT)/(∂T) = nR/V" where this reads "(∂(nRT/V))/(∂T) = nR/V". P = nRT/V.]

Which is not zero!! Clearly, δq_rev is not a state function, but look what happens if we multiply everything with an 'integration factor' 1/T:

(δq_rev)/T = ((Cv)/T)dT + (P/T)dV

(∂Cv/T)/(∂V) = 0

Because (Cv)/T does not depend on volume. However,

(∂(P/T))/(∂T) = (∂(nR/V))/(∂T) = 0

Thus, the quantity dS = (δq_rev)/T is an exact differential, so S is a state function and it is called entropy. Entropy is the dispersal of energy, or equivalently, the measure of the number of possible microstates of a system.
