---
title: "30.7: Reactions Can Produce Vibrationally Excited Molecules"
book: "Physical Chemistry (LibreTexts)"
chapter: "30: Gas-Phase Reaction Dynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/30%3A_Gas-Phase_Reaction_Dynamics/30.07%3A_Reactions_Can_Produce_Vibrationally_Excited_Molecules"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

As shown at the end of section 30.5, using the center of mass reaction model allows us to state that

E_R_(int) + E_R_(trans) = E_P_(int) + E_P_(trans)

where E_R_(int) and E_P_(int) represent the rotational, vibrational, and electronic energies collectively described as the internal energy of the reactants and the products, respectively. If we apply equation (30.7.1) to the well-studied gas-phase reaction

F(g) + D2(g) → DF(g) + D(g)

we can discuss the distribution of a fixed total collision energy between E_P_(int) and E_P_(trans). Specifically, if we assume that F(g) and D(g) are in their ground electronic states, that D2(g) is in its ground rotational, vibrational, and electronic states, and that DF(g) is in its ground rotational and electronic states, we can focus on the possible vibrational states of the DF(g) that can be populated. Figure 30.7.1 shows the potential energy curve of the process that is described below.

Figure 30.7.1: The potential energy diagram for the reaction F(g) + D2(g) → DF(g) + D(g). ( CC BY-NC; Ümit Kaya via LibreTexts)
Graph showing energy vs. reaction coordinate with a red curve indicating energy changes and labeled vibrational levels, v = 0 to 5, on the right.

[Note: corrected; the source prints "and labeled velocities on the right" where this reads "and labeled vibrational levels, v = 0 to 5, on the right". The image's alt text, machine-written, misreads the image; this describes it.]

Expanding Equation (30.7.1) to describe this assumed process, we get

E_R_(rot) + E_R_(vib) + E_R_(elec) + E_R_(trans) = E_P_(rot) + E_P_(vib) + E_P_(elec) + E_P_(trans)

Let's assume that D2 and DF are harmonic oscillators with ν̃_D2 = 2990 cm^-1 and ν̃_DF = 2907 cm^-1 .

If D2 and DF are in their ground electronic states, then E_R_(elec) = −De(D2) and E_P_(elec) = −De(DF). From experiments, we know that

−De(DF) − (−De(D2)) = −140 kJ/mol

We also know from experiments, that the activation energy for this reaction is about 6 kJ/mol^1, so if we assume that the relative translational energy of the reactants is 7.1 kJ/mol, they will have sufficient energy to overcome the activation energy barrier.

With these data, we can write Equation (30.7.2) as

0 + E_R_(vib) − De(D2) + 7.1 kJ/mol = 0 + E_P_(vib) − De(DF) + E_P_(trans)

then

E_R_(vib) + 7.1 kJ/mol = E_P_(vib) + (−De(DF) − (−De(D2))) + E_P_(trans)

[Note: corrected; the source prints "(−De(DF) − (−De(D2)) + E_P_(trans)" where this reads "(−De(DF) − (−De(D2))) + E_P_(trans)". A closing bracket is missing.]

then

E_R_(vib) + 7.1 kJ/mol = E_P_(vib) − 140 kJ/mol + E_P_(trans)

Because D2 is in its ground vibrational state, E_R_(vib) = (1/2)hν_D2 = 17.9 kJ/mol

Putting this altogether,

17.9 kJ/mol + 140 kJ/mol + 7.1 kJ/mol − E_P_(vib) = E_P_(trans)

165 kJ/mol − E_P_(vib) = E_P_(trans)

Equation (30.7.3) tells us that the reaction will occur only if E_P_(vib) is less than 165 kJ/mol because E_P_(trans) must be a positive value.

If DF(g) is a harmonic oscillator, then

E_P_(vib) = (v + 1/2)hν_DF

= (v + 1/2)(34.8 kJ/mol) < 165 kJ/mol

Vibrational states, v = 0, 1, 2, 3, and 4 will result in E_P_(vib) ≤ 165 kJ/mol. Thus DF(g) molecules in these five vibrational states will be produced by the reaction. Note that under these set of assumptions, the DF molecules produced in different vibrational states will have correspondingly different E_P_(trans).

^1Average of experimental E_a values listed at https://kinetics.nist.gov/kinetics/ accessed 9/22/2021
