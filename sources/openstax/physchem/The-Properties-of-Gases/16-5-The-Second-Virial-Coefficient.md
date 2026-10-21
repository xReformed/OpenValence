---
title: "16.5: The Second Virial Coefficient"
book: "Physical Chemistry (LibreTexts)"
chapter: "16: The Properties of Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/16%3A_The_Properties_of_Gases/16.05%3A_The_Second_Virial_Coefficient"
author: "Anonymous"
license: "CC BY 4.0"
---

The second virial coefficient describes the contribution of the pair-wise potential to the pressure of the gas. The third virial coefficient depends on interactions between three molecules, and so on and so forth.

## Introduction

As the density is increased the interactions between gas molecules become non-negligible. Deviations from the ideal gas law have been described in a large number of equations of state. The virial equation of state expresses the deviation from ideality in terms of a power series in the density:

P/kT = ρ + B2(T)ρ^2 + B3(T)ρ^3 + ...

- B2(T) is the second virial coefficient,
- B3(T) is called the third virial coefficient, etc.

The j^th virial coefficient can be calculated in terms of the interaction of j molecules in a volume V. The second and third virial coefficients give most of the deviation from ideal (P/ρkT) up to 100 atm.

[Note: corrected; the source prints "(P/rkT)" where this reads "(P/ρkT)". ρ is the number density; the Greek ρ was lost.]

The second virial coefficient is usually written as B or as B2. The second virial coefficient represents the initial departure from ideal-gas behavior. The second virial coefficient, in three dimensions, is given by:

B2(T) = −(1/2)∫(exp(−(Φ12(r))/(kB T)) − 1)4πr^2 dr

where Φ12(r) is the intermolecular pair potential, T is the temperature, and kB is the Boltzmann constant. Notice that the expression within the parenthesis of the integral is the Mayer f-function. In practice, the integral is often very hard to integrate analytically for anything other than, say, the hard sphere model, thus one numerically evaluates:

B2(T) = −(1/2)∫(⟨exp(−(Φ12(r))/(kB T))⟩−1)4πr^2 dr

calculating:

⟨exp(−(Φ12(r))/(kB T))⟩

for each r using the numerical integration scheme proposed by Harold Conroy ^([2][3]).

[Note: corrected; the source prints "Harold Conroy ^([1][2])." where this reads "Harold Conroy ^([2][3]).". Reference 1 (Reid) was added in front of a list copied from SklogWiki, so its numbers shifted: Conroy is reference 2.]

## Calculation of virial coefficients

The configuration integrals for Z1, Z2, and Z3 are:

- Z1 = ∫dr1 = V
- Z2 = ∫e^(−U2/kT)dr1 dr2
- Z3 = ∫e^(−U3/kT)dr1 dr2 dr3

The series method allows the calculation of a number of virial coefficients. Recall that the second and third virial coefficient can account for the properties of gases up to hundreds of atmospheres. We will discuss the calculation of the second virial coefficient for a monatomic gas to illustrate the procedure. To calculate B2(T) we need U2. For monatomic particles it is reasonable to assume that the potential depends only on the separation of the two particles so U2 = u(r12), where r12 = |r2 − r1|. Using a change of variables we can write this integral r12 = r2 − r1 and after integration over r1 we can transform variables from dr12 to 4πr^2 dr. The result is:

B2(T) = −2π∫[e^{−βu(r)}−1]r^2 dr

This expression can be used to obtain parameters from experiment. The second virial coefficient is tabulated for a number of gases. For a hard-sphere potential there is an infinite repulsive wall at a centre-to-centre distance σ (the particle diameter). There is no attractive part.

[Note: corrected; the source prints "an infinite repulsive wall at a particle radius σ." where this reads "an infinite repulsive wall at a centre-to-centre distance σ (the particle diameter).". B2 = 2πσ^3/3 below needs σ to be the contact distance, the diameter.]

B2(T) = −2π∫0^σ [−1]r^2 dr

= (2πσ^3)/3

The Lennard-Jones potential cannot be calculated analytically, but the integral can be computed numerically. The second virial coefficient was a useful starting point for obtaining Lennard-Jones parameters that were used in simulations.

## Isihara-Hadwiger Formula

The Isihara-Hadwiger formula was discovered simultaneously and independently by Isihara and the Swiss mathematician Hadwiger in 1950. The second virial coefficient for any hard convex body is given by the exact relation:

B2 = RS + V

or:

(B2)/V = 1 + 3α

where:

α = RS/(3V)

where V is the volume, S, the surface area, and R the mean radius of curvature.

## Hard spheres

For the hard sphere model one has:^([10])

[Note: corrected; the source prints "one has:^([9])" where this reads "one has:^([10])". Shifted as above: the result is McQuarrie's (reference 10); reference 9 is a book on convex bodies.]

B2(T) = −(1/2)∫0^σ (⟨0⟩−1)4πr^2 dr leading to B2 = (2πσ^3)/3

Note that B2 for the hard sphere is independent of temperature.

## Van der Waals equation of state

For the Van der Waals equation of state one has:

B2V(T) = b − a/RT

[Note: corrected; the source prints "B2(T) = b − a/RT" where this reads "B2V(T) = b − a/RT". With molar a and b this is the molar coefficient (B2V, as in Section 16.7); B2 on this page is per molecule.]

## Excluded volume

The second virial coefficient can be computed from the expression:

B2 = (1/2)∬v_excluded(Ω, Ω')f(Ω)f(Ω') dΩdΩ'

where v_excluded is the excluded volume.

## References

1. Reid, B. P. J. Chem. Educ. 1996, 73, 612-615.
2. Harold Conroy "Molecular Schrödinger Equation. VIII. A New Method for the Evaluation of Multidimensional Integrals", Journal of Chemical Physics 47 pp. 5307 (1967)
3. I. Nezbeda, J. Kolafa and S. Labík "The spherical harmonic expansion coefficients and multidimensional integrals in theories of liquids", Czechoslovak Journal of Physics 39 pp. 65-79 (1989)
4. Akira Isihara "Determination of Molecular Shape by Osmotic Measurement", Journal of Chemical Physics 18 pp. 1446-1449 (1950)
5. Akira Isihara and Tsuyoshi Hayashida "Theory of High Polymer Solutions. I. Second Virial Coefficient for Rigid Ovaloids Model", Journal of the Physical Society of Japan 6 pp. 40-45 (1951)
6. Akira Isihara and Tsuyoshi Hayashida "Theory of High Polymer Solutions. II. Special Forms of Second Osmotic Coefficient", Journal of the Physical Society of Japan 6 pp. 46-50 (1951)
7. H. Hadwiger "Einige Anwendungen eines Funkticnalsatzes fur konvexe Körper in der räumichen Integralgeometrie" Mh. Math. 54 pp. 345- (1950)
8. H. Hadwiger "Der kinetische Radius nichtkugelförmiger Moleküle" Experientia 7 pp. 395-398 (1951)
9. H. Hadwiger "Altes und Neues über Konvexe Körper" Birkäuser Verlag (1955)
10. Donald A. McQuarrie "Statistical Mechanics", University Science Books (2000) ISBN 978-1-891389-15-3 Eq. 12-40
11. I. Amdur and E. A. Mason "Properties of Gases at Very High Temperatures", Physics of Fluids 1 pp. 370-383 (1958)

## Related reading

- W. H. Stockmayer "Second Virial Coefficients of Polar Gases", Journal of Chemical Physics 9 pp. 398- (1941)
- G. A. Vliegenthart and H. N. W. Lekkerkerker "Predicting the gas–liquid critical point from the second virial coefficient", Journal of Chemical Physics 112 pp. 5364-5369 (2000)
