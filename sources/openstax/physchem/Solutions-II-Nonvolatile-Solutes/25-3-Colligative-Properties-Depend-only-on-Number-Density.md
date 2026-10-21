---
title: "25.3: Colligative Properties Depend only on Number Density"
book: "Physical Chemistry (LibreTexts)"
chapter: "25: Solutions II - Nonvolatile Solutes"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/25%3A_Solutions_II_-_Nonvolatile_Solutes/25.03%3A_Colligative_Properties_Depend_only_on_Number_Density"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Colligative properties are properties that depend on the number of particles rather than their total mass. This implies that these properties can be used to measure molar mass. Colligative properties include:

- melting point depression
- boiling point elevation
- osmotic pressure

## Melting Point Depression

When we freeze a dilute solution the resulting frozen solvent is often quite a bit purer than the original solution. Let us consider this problem and make the following rather opposite assumptions about the solvent component:

1. In the liquid state it can be considered to follow Raoult's law over a sufficient concentration range
2. In the solid state, the solubility is nil

Under these two assumptions, we can consider the thermodynamic potentials of the solvent component (1) at the freezing point. They should be equal once equilibrium has been reached:

μ1^s = μ1^(sln)

μ1^s = μ1^(liq*) + RT ln a1

(μ1^s − μ1^(liq*))/RT = ln a1

(−Δμ1)/RT = ln a1

We can now apply Gibbs-Helmholtz relations by differentiation with respect to temperature:

(∂)/(∂ T) · (Δμ1)/T = (−Δ_fus H_(molar, 1))/T^2

(∂ ln a1)/(∂T) = (Δ_fus H_(molar, 1))/RT^2

[Note: corrected; the source prints "(∂[ln a1)/(∂T)" where this reads "(∂ ln a1)/(∂T)". A stray bracket in the source's TeX.]

This means that we can actually use the quantity Δ_fus H_(molar, 1)/RT^2 to determine activities by integration, but usually Raoult Law is assumed valid:

ln a1 ≈ ln x1 ≈ −x2

[Note: corrected; the source prints "ln a1 ln x1 ≈ −x2" where this reads "ln a1 ≈ ln x1 ≈ −x2". A relation sign is missing; for small x2, ln x1 = ln(1 − x2) ≈ −x2.]

If we integrate Δ_fus H_(molar, 1)/RT^2 from the melting point of the pure solvent Tm^* to the actual melting point of the solution Tm we get:

−x2 = ((Δ_fus H_(molar, 1))/R)(1/(Tm^*) − 1/(Tm)) = ((Δ_fus H_(molar, 1))/R)((Tm − Tm^*)/(Tm^*Tm)) ≈ ((Δ_fus H_(molar, 1))/R)((−ΔT)/(Tm^(*2)))

This is often rewritten in terms of molality as:

ΔT = Kf.m

If K_f is known for the solvent we can add a number of grams of an unknown compound to the solvent measure the temperature depression, this tells us the molality. From molality and weight we can then calculate molar mass. Boiling point elevation is quite similar.
