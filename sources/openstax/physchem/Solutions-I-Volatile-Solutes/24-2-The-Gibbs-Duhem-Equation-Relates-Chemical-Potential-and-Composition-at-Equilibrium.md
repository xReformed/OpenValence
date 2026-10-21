---
title: "24.2: The Gibbs-Duhem Equation Relates Chemical Potential and Composition at Equilibrium"
book: "Physical Chemistry (LibreTexts)"
chapter: "24: Solutions I - Volatile Solutes"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/24%3A_Solutions_I_-_Volatile_Solutes/24.02%3A_The_Gibbs-Duhem_Equation_Relates_Chemical_Potential_and_Composition_at_Equilibrium"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

At equilibrium, there is no change in chemical potential for the system:

Σi ni dμi = 0

This is the Gibbs-Duhem relationship and it places a compositional constraint upon any changes in the chemical potential in a mixture at constant temperature and pressure for a given composition. This result is easily derived when one considers that μi represents the partial molar Gibbs function for component i. And as with other partial molar quantities:

G_tot = Σi ni μi

Taking the derivative of both sides yields:

dG_tot = Σi ni dμi + Σi μi dni

But dG can also be expressed as:

dG = Vdp − sdT + Σi μi dni

Setting these two expressions equal to one another:

Σi ni dμi + ~~Σi μi dni~~ = Vdp − sdT + ~~Σi μi dni~~

And after canceling terms, one gets:

Σi ni dμi = Vdp − sdT

For a system at constant temperature and pressure:

V dp − s dT = 0

Substituting Equation (eq42) into (eq41) results in the Gibbs-Duhem equation (Equation (eq1)). This expression relates how the chemical potential can change for a given composition while the system maintains equilibrium.

## Gibbs-Duhem for Binary Systems

For a binary system consisting of components two components, A and B:

nB dμB + nA dμA = 0

Rearranging:

dμB = −((nA)/(nB))dμA

Consider a Gibbs free energy that only includes μn conjugate variables as we obtained it from our scaling experiment at T and P constant:

G = μA nA + μB nB

Consider a change in G:

dG = d(μA nA) + d(μB nB)

= nA dμA + μA dnA + nB dμB + μB dnB

However, if we simply write out a change in G due to the number of moles we have:

dG = μA dnA + μB dnB

Consequently the other terms must add up to zero:

0 = nA dμA + nB dμB

dμA = −((nB)/(nA))dμB

dμA = −((χB)/(χA))dμB

In the last step we have simply divided both denominator and numerator by the total number of moles. This expression is the Gibbs-Duhem equation for a 2-component system. It relates the change in one thermodynamic potential (dμA) to the other (dμB).

> The Gibbs-Duhem equation relates the change in one thermodynamic potential (dμA) to the other (dμB).

## Gibbs-Duhem in the Ideal Case

In the ideal case we have:

μB = μB^* + RT ln xB

Gibbs-Duhem gives:

dμA = −((χB)/(χA))dμB

As:

dμB = 0 + (RT/(χB))dχB

[Note: corrected; the source prints "dμB = 0 + RT/(χB)" where this reads "dμB = 0 + (RT/(χB))dχB". dμB = RT d ln χB = RT dχB/χB: the differential is missing.]

with xB being the only active variable at constant temperature, we get:

dμA = −(χB)/(χA) · (RT/(χB))dχB = −(RT/(χA))dχB = (RT/(χA))dχA

[Note: corrected; the source prints "dμA = −(χB)/(χA) · RT/(χB) = RT/(χA)" where this reads "dμA = −(χB)/(χA) · (RT/(χB))dχB = −(RT/(χA))dχB = (RT/(χA))dχA". With the differential, the product is −(RT/χA)dχB, and since dχB = −dχA it equals (RT/χA)dχA; as printed the minus sign is dropped.]

If we now wish to find μA we need to integrate dμA, e.g. form pure 1 to χA. This produces:

μA = μA^* + RT ln χA

This demonstrates that Raoult's law can only hold over the whole range for one component if it also holds for the other over the whole range.
