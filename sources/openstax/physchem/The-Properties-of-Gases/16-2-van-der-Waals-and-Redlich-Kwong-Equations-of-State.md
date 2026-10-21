---
title: "16.2: van der Waals and Redlich-Kwong Equations of State"
book: "Physical Chemistry (LibreTexts)"
chapter: "16: The Properties of Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/16%3A_The_Properties_of_Gases/16.02%3A_van_der_Waals_and_Redlich-Kwong_Equations_of_State"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The ideal gas law is valid for low pressures, where the finite volume of particles and intermolecular attractions do not have a large impact. At higher pressures, we must account for these factors. The van der Waals and Redlich-Kwong equations of states are equations of state that attempt to account for real gas behavior by modifying the ideal gas law with two additional parameters.

## The Van der Waals Equation of State

The van der Waals Equation of State is an equation relating the density of gases and liquids to the pressure, volume, and temperature conditions (i.e., it is a thermodynamic equation of state). It can be viewed as an adjustment to the ideal gas law that takes into account the non-zero volume of gas molecules and inter-particle attraction using correction terms a and b. It was derived in 1873 by Johannes Diderik van der Waals, who received the Nobel Prize in 1910 for this work. The van der Waals equation of state is:

P = nRT/(V − nb) − an^2/V^2

Equation (Eq7) can also be rewritten as

(P + (n^2 a)/V^2)(V − nb) = nRT

If the correction terms a and b go to zero, the equation reduces to the ideal gas equation of state:

PV = nRT

Let's first look first at the correction term b, which represents the volumes of the particles and assumes a hard-wall potential, uo(r). This potential energy term describes a system of hard sphere “billiard balls” of diameter σ. Figure 16.2.1 shows two of these billiard ball type particles at the point of contact (i.e, the distance of closest approach). At this point, they undergo a collision and separate, so they cannot be closer than that distance.

Figure 16.2.1: Two hard spheres of diameter σ at closest contact. The distance between their centers is also σ. A sphere of radius σ just containing the two particles is shown in cross-section.
Two touching hard spheres of diameter σ at closest approach, inside a larger sphere of radius σ shown in cross-section.

[Note: corrected; the source prints "Two overlapping spheres are illustrated, with an arrow pointing away from one sphere. A dashed line connects points on both spheres." where this reads "Two touching hard spheres of diameter σ at closest approach, inside a larger sphere of radius σ shown in cross-section.". Hard spheres cannot overlap; the caption describes them at contact. The image's alt text, machine-written, misreads the image; this describes it.]

The distance between their centers is also σ. Because of this distance of closest approach, the total volume available to the particles is not the volume of the container, V, but some volume less than V. This reduction in volume can be calculated. Figure 16.2.1 shows a shaded sphere that just contains the pair of billiard ball particles. The volume of this sphere is the volume excluded from any two particles. The radius of the sphere is σ and the excluded volume for the two particles is 4πσ^3/3, which is the volume of the shaded sphere. From this, we see that the excluded volume for any one particle is just half of this or (2/3)πσ^3. The excluded volume for a mole of such particles is the parameter b:

b = (2/3)πσ^3 N0

Given n moles of gas, the total excluded volume is then nb, so that the total available volume is V − nb.

Let's turn our attention the a, which represents the intermolecular attractions of the particles. Molecular attractions tend to make the P exerted by the gas less than that predicted by the ideal gas law at low pressures. P is force over area:

P = F/A

Pressure is proportion to the net force on the wall of the container:

[Image: Diagram showing red particles on one side of a gray barrier with a line indicating separation.]

The net force is the force of the molecules impacting the container wall minus the intermolecular attraction of the molecules:

F̄_Net = F̄_Impact − F̄_Attract

Therefore, the pressure will be less for the real gas than the ideal gas. We can add a correction term to pressure to account for intermolecular attractions:

P_VDW = P_Real + a(?)

V does influence the amount of intermolecular attraction because P is reduced as V is increased:

P ∝ 1/V

And pressure is proportional to the number of attractive interactions:

\# of molecular interactions ∝ P^2

\# of molecular interactions ∝ 1/V^2

We now have an expression for the van der Waals P:

P = P_Real + an^2/V^2

The constants a and b depend on the substance. Some typical values are:^1

| Molecule | a ((L^2·bar)/mol^2) | b (L/mole) |
| --- | --- | --- |
| H2O | 5.536 | 0.03049 |
| N2 | 1.370 | 0.0387 |
| CH4 | 2.283 | 0.04278 |
| C2H6 | 5.562 | 0.0638 |

[Note: corrected; the source prints "| N2 | 1.43 | 0.03913 |" where this reads "| N2 | 1.370 | 0.0387 |". The CRC values, which the other rows match, are a = 1.370 L^2·bar/mol^2 and b = 0.0387 L/mol (from Tc = 126.2 K, Pc = 33.96 bar: a = 1.368, b = 0.0386).]

1. R. C. Weast (1972). Handbook of Chemistry and Physics 53rd Edition. Chemical Rubber Pub.

## Redlich-Kwong Equation of State

The van der Waals Equation of State had to wait more than 70 years before a real, successful improvement was introduced to it. This progress occurred once researchers committed themselves to finding the empirical temperature dependency of the attraction parameter a proposed by van der Waals. In contrast, very little attention has been paid to modifying the parameter b for co-volume. It makes a lot of sense that b would not be modified by temperature, because it represents the volume of the molecules, which should not be affected by their kinetic energy (measured in terms of temperature). The very first noteworthy successful modification to the attraction parameter came with the publication of the equation of state of Redlich-Kwong in 1949.

[Note: corrected; the source prints "had to wait almost 100 years" where this reads "had to wait more than 70 years". From 1873 to Redlich and Kwong in 1949 is 76 years.]

The Redlich–Kwong equation of state is an empirical, algebraic equation that relates temperature, pressure, and volume of gases. It is generally more accurate than the van der Waals and the ideal gas equations of state at temperatures above the critical temperature. It was formulated by Otto Redlich and Joseph Neng Shun Kwong in 1949, who showed that a simple two-parameter equation of state could well reflect reality in many situations. Redlich and Kwong revised the van der Waals Equation of State (Equation (Eq7)) and proposed the following expressions:

(P + a/(√(T)V̄(V̄ + b)))(V̄ − b) = RT

The fundamental change they introduced was to the functional form of ∂P_attraction. Additionally, they introduced the co-volume b into the denominator of this functional form. The important concept here is that the attraction parameter a of van der Waals needed to be made a function of temperature to do a better job of quantitatively matching experimental data. This was a realization that van der Waals had suggested, and temperature-dependent attraction terms had been proposed before (Clausius 1880, Berthelot 1899), but the Redlich-Kwong equation was the first such modification to be widely successful.

[Note: corrected; the source prints "but no actual functional dependency had been introduced until the Redlich-Kwong equation." where this reads "and temperature-dependent attraction terms had been proposed before (Clausius 1880, Berthelot 1899), but the Redlich-Kwong equation was the first such modification to be widely successful.". Clausius and Berthelot had already made the attraction term depend on temperature.]

We know what follows at this point. To come up with an expression for a and b of Equation (10.1), we apply the criticality conditions to this equation of state. As we recall, imposing the criticality conditions allows us to relate the coefficients a and b to the critical properties (Pc, Tc) of the substance. Once we have done that, we obtain the definition of a and b for the Redlich-Kwong equation of state:

a = 0.42748 (R^2 Tc^2.5)/(Pc)

[Note: corrected; the source prints "a = 0.42780" where this reads "a = 0.42748". The Redlich-Kwong coefficient is 1/[9(2^(1/3) − 1)] = 0.42748, as Equation (10.5) below uses.]

b = 0.086640 (RTc)/(Pc)

The Redlich-Kwong equation of state radically improved, in a quantitative sense, the predictions of the van der Waals equation of state. We now recall that van der Waals-type equations are cubic because they are cubic polynomials in molar volume and compressibility factor. It comes as no surprise then, that we can transform Equation (10.1) into:

v̄^3 − (RT/P)v̄^2 + (1/P)(a/(T^0.5) − bRT − Pb^2)v̄ − ab/(PT^0.5) = 0

[Note: corrected; the source prints "(1/P)(1/(T^0.5) − bRT − Pb^2)" where this reads "(1/P)(a/(T^0.5) − bRT − Pb^2)". Expanding the Redlich-Kwong equation gives a/T^0.5 in the linear coefficient.]

and, by defining the following parameters:

A = aP/(R^2 T^2.5)

B = bP/RT

and introducing the compressibility factor definition:

Z = (Pv̄)/RT

we get:

Z^3 − Z^2 + (A − B − B^2)Z − AB = 0

We may also verify the two-parameter corresponding state theory by introducing Equations (10.2a), (10.2b), (10.3a) and (10.3b) into Equation (10.4):

[Note: corrected; the source prints "Equations (10.2a), (10.2b), and (10.3) into" where this reads "Equations (10.2a), (10.2b), (10.3a) and (10.3b) into". The definitions of A and B substituted are (10.3a) and (10.3b); (10.3) is the cubic in v̄.]

Z^3 − Z^2 + ((Pr)/(Tr))(0.42748/(Tr^1.5) − 0.08664 − 0.007506 (Pr)/(Tr))Z − 0.03704 (Pr^2)/(Tr^3.5) = 0

Where:

Pr = P/(Pc)

Tr = T/(Tc)

Pr and Tr are the pressure and temperature at the reduced state. See Section 16.4 for more information on reduced states. In Equation (10.5), we can observe the same thing that we saw with the van der Waals equation of state: gases at corresponding states have the same properties. Equation (10.5) is particularly clear about it: any two different gases at the same Pr, Tr condition have the same compressibility factor.

Just as any other cubic equation of state, Equations (10.1) through (10.5), as they stand, are to be applied to pure substances. For mixtures, however, we apply the same equation, but we impose certain mixing rules to obtain a and b, which are functions of the properties of the pure components. Strictly speaking, we create a new “pseudo” pure substance that has the average properties of the mixture. Redlich-Kwong preserved the same mixing rules that van der Waals proposed for his eqution of state:

am = Σi Σj yi yj a_ij

with

a_ij = √(ai aj)

and

bm = Σi yi bi

Naturally, Redlich and Kwong did not have the last word on possible improvements to the van der Waals equation of state. The Redlich-Kwong equation of state, as shown here, is no longer used in practical applications. Research continued and brought with it new attempts to improve the Redlich-Kwong equation of state. After more than two decades, a modified Redlich-Kwong equation of state with very good potential was developed.

## Contributors and Attributions

- Mark Tuckerman (New York University)
- Michael Adewumi (The Pennsylvania State University) Vice Provost for Global Program, Professor of Petroleum and Natural Gas Engineering
- Jerry LaRue (Chapman University)
