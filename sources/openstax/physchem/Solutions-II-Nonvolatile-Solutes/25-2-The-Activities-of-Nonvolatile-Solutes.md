---
title: "25.2: The Activities of Nonvolatile Solutes"
book: "Physical Chemistry (LibreTexts)"
chapter: "25: Solutions II - Nonvolatile Solutes"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/25%3A_Solutions_II_-_Nonvolatile_Solutes/25.02%3A_The_Activities_of_Nonvolatile_Solutes"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

For non-ideal gases, we introduced in chapter 11 the concept of fugacity as an effective pressure that accounts for non-ideal behavior. If we extend this concept to non-ideal solution, we can introduce the activity of a liquid or a solid, a, as:

[Note: "Chapter 11", "Equation 11.4.2", "Equation 13.1.1" and "chapter 10" on this page are numbers in the book it is taken from (Peverati's The Live Textbook of Physical Chemistry). In this book fugacity is Section 22.8, Raoult's law Sections 24.1 and 24.4, and equilibrium constants chapter 26. The text is left as printed.]

μ_non-ideal = μ^⦵ + RT ln a,

where μ is the chemical potential of the substance or the mixture, and μ^⦵ is the chemical potential at standard state. Comparing this definition to Equation 11.4.2, it is clear that the activity is equal to the fugacity for a non-ideal gas (which, in turn, is equal to the pressure for an ideal gas). However, for a liquid and a liquid mixture, it depends on the chemical potential at standard state. This means that the activity is not an absolute quantity, but rather a relative term describing how “active” a compound is compared to standard state conditions. The choice of the standard state is, in principle, arbitrary, but conventions are often chosen out of mathematical or experimental convenience. We already discussed the convention that standard state for a gas is at P^⦵ = 1 bar, so the activity is equal to the fugacity. The standard state for a component in a solution is the pure component at the temperature and pressure of the solution. This definition is equivalent to setting the activity of a pure component, i, at ai = 1.

For a component in a solution we can use Equation 11.4.2 to write the chemical potential in the gas phase as:

μi^vapor = μi^⦵ + RT ln((Pi)/(P^⦵)).

If the gas phase is in equilibrium with the liquid solution, then:

μi^solution = μi^vapor, and for the pure liquid, μi^* = μi^⦵ + RT ln((Pi^*)/(P^⦵)),

[Note: corrected; the source prints "μi^solution = μi^vapor = μi^*," where this reads "μi^solution = μi^vapor, and for the pure liquid, μi^* = μi^⦵ + RT ln((Pi^*)/(P^⦵)),". μi^* is the pure liquid's chemical potential, not the solution's; as printed (14.1.4) would give Pi = Pi^*. It is the equation for the pure liquid, in equilibrium with its vapor at Pi^*, that subtracted from (14.1.2) gives (14.1.4).]

where μi^* is the chemical potential of the pure component. Subtracting Equation (14.1.3) from Equation (14.1.2), we obtain:

[Note: corrected; the source prints "the chemical potential of the pure element" where this reads "the chemical potential of the pure component". Component i is a substance in the solution, not an element.]

μi^solution = μi^* + RT ln((Pi)/(Pi^*)).

For an ideal solution, we can use Raoult’s law, Equation 13.1.1, to rewrite Equation (14.1.4) as:

μi^solution = μi^* + RT ln xi,

which relates the chemical potential of a component in an ideal solution to the chemical potential of the pure liquid and its mole fraction in the solution. For a non-ideal solution, the partial pressure in Equation (14.1.4) is either larger (positive deviation) or smaller (negative deviation) than the pressure calculated using Raoult’s law. The chemical potential of a component in the mixture is then calculated using:

μi^solution = μi^* + RT ln(γi xi),

where γi is a positive coefficient that accounts for deviations from ideality. This coefficient is either larger than one (for positive deviations), or smaller than one (for negative deviations). The activity of component i can be calculated as an effective mole fraction, using:

ai = γi xi,

where γi is defined as the activity coefficient. The partial pressure of the component can then be related to its vapor pressure, using:

Pi = ai Pi^*.

Comparing Equation (14.1.8) with Raoult’s law, we can calculate the activity coefficient as:

γi = (Pi)/(xi Pi^*) = (Pi)/(Pi^R),

where Pi^R is the partial pressure calculated using Raoult’s law. This result also proves that for an ideal solution, γ = 1. Equation (14.1.9) can also be used experimentally to obtain the activity coefficient from the phase diagram of the non-ideal solution. This is achieved by measuring the value of the partial pressure of the vapor of a non-ideal solution. Examples of this procedure are reported for both positive and negative deviations in Figure 25.2.1.

Figure 25.2.1: Positive and Negative Deviation from Raoult’s Law in the Pressure–Composition Phase Diagram of Non-Ideal Solutions at Constant Temperature.

- As we already discussed in chapter 10, the activity is the most general quantity that we can use to define the equilibrium constant of a reaction (or the reaction quotient). The advantage of using the activity is that it’s defined for ideal and non-ideal gases and mixtures of gases, as well as for ideal and non-ideal solutions in both the liquid and the solid phase.^1
1. Notice that, since the activity is a relative measure, the equilibrium constant expressed in terms of the activities is also a relative concept. In other words, it measures equilibrium relative to a standard state. This fact, however, should not surprise us, since the equilibrium constant is also related to Δ_rxn G^⦵ using Gibbs’ relation. This is why the definition of a universally agreed-upon standard state is such an essential concept in chemistry, and why it is defined by the International Union of Pure and Applied Chemistry (IUPAC) and followed systematically by chemists around the globe.︎
