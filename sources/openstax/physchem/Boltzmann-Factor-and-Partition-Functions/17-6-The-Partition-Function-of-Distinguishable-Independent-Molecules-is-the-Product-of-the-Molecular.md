---
title: "17.6: The Partition Function of Distinguishable, Independent Molecules is the Product of the Molecular Partition Functions"
book: "Physical Chemistry (LibreTexts)"
chapter: "17: Boltzmann Factor and Partition Functions"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17%3A_Boltzmann_Factor_and_Partition_Functions/17.06%3A_The_Partition_Function_of_Distinguishable_Independent_Molecules_is_the_Product_of_the_Molecular_Partition_Functions"
author: "Anonymous"
license: "CC BY 4.0"
---

A system, such as a container of gas, can consist of a large number of subsystems. How is the partition function of the system built up from those of the subsystems? This depends on whether the subsystems are distinguishable or indistinguishable. Let's start with energy. Energy is additive so that:

E_tot(N, V) = ε1(V) + ε2(V) + ε3(V) + …

Each of the molecules can have their energy distributed over their respective energy states (e.g., vibrations, rotations, etc.). This means that each εi is already a summation over the states of the molecule. Let us assume that we can somehow distinguish all the molecules as: a, b, c, d… and denote the energy state they are in by i, j, k:

El(N, V) = εi^a(V) + εj^b(V) + εk^c(V) + …

A good example would be the molecules in a molecular crystal. They only move around a fixed site and so we can distinguish by how far molecule 'a' is from a given corner of the crystal. The systems partition function becomes:

Q(N, V, β) = Σl e^(−βEl) = Σ_(i, j, k, …) e^{−β(εi^a + εj^b + εk^c)}

[Note: corrected; the source prints "Σi e^(−βEl)" where this reads "Σl e^(−βEl)". The sum runs over l.]

So far, we have done little effort to distinguish between the partition function of a molecular system q and the whole ensemble Q (e.g. the gas). If the entities that we called systems are distinguishable and independent, the whole ensemble partition function is the product of the molecular system partition functions. We get:

Q(N, V, β) = Πi qi

for N distinguishable systems. We can split up the summation into a product of molecular partition functions:

Q(N, V, β) = Πi^N qi(V, β) = qa(V, β)qb(V, β)qc(V, β)…

This results in each molecular system partition function being summed over independently:

Q(N, V, β) = Σi e^(−βεi^a)Σj e^(−βεj^b)Σk e^(−βεk^c)…

[Note: corrected; the source prints "Σj e^(−βεi^b)Σk e^(−βεi^c)" where this reads "Σj e^(−βεj^b)Σk e^(−βεk^c)". Each sum has its own index.]

If the energy states of all the particles are the same, then the equation simplifies to:

Q(N, V, β) = [q(V, β)]^N

We can do this if, for example, the particles are embedded in a crystal where we can distinguish them by their location. We will see in the next chapter that for indistinguishable particles, such as those in a gas, we get a different result.
