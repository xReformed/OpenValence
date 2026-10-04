---
title: "7.6: Hess's Law"
book: "Beginning Chemistry (Ball)"
chapter: "7: Energy and Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Beginning_Chemistry_(Ball)/07%3A_Energy_and_Chemistry/7.06%3A_Hess's_Law"
author: "Anonymous"
license: "CC BY-NC-SA 3.0"
---

## 7.6: Hess's Law

### Learning Objective

- Learn how to combine chemical equations and their enthalpy changes.

Now that we understand that chemical reactions occur with a simultaneous change in energy, we can apply the concept more broadly. To start, remember that some chemical reactions are rather difficult to perform. For example, consider the combustion of carbon to make carbon monoxide:

2C(s) + O2(g) → 2CO(g) ΔH = ?

In reality, this is extremely difficult to do. Given the opportunity, carbon will react to make another compound, carbon dioxide:

2C(s) + O2(g) → 2CO2(g) ΔH = −393.5kJ

Is there a way around this? Yes. It comes from the understanding that chemical equations can be treated like algebraic equations, with the arrow acting like the equals sign. Like algebraic equations, chemical equations can be combined, and if the same substance appears on both sides of the arrow, it can be canceled out (much like a spectator ion in ionic equations). For example, consider these two reactions:

2C(s) + 2O2(g) → 2CO2(g)
2CO2(g) → 2CO(g) + O2(g)

If we added these two equations by combining all the reactants together and all the products together, we would get

2C(s) + 2O2(g) + 2CO2(g) → 2CO2(g) + 2CO(g) + O2(g)

We note that 2CO2(g) appears on both sides of the arrow, so they cancel:

2C(s) + 2O2(g) + 2CO2(g) → 2CO2(g) + 2CO(g) + O2(g)

We also note that there are 2 mol of O2 on the reactant side, and 1 mol of O2 on the product side. We can cancel 1 mol of O2 from both sides:

2C(s) + 2O2(g) → 2CO(g) + O2(g)

What do we have left?

2C(s) + O2(g) → 2CO(g)

This is the reaction we are looking for! So by algebraically combining chemical equations, we can generate new chemical equations that may not be feasible to perform.

What about the enthalpy changes? Hess's law states that when chemical equations are combined algebraically, their enthalpies can be combined in exactly the same way. Two corollaries immediately present themselves:

1. If a chemical reaction is reversed, the sign on ΔH is changed.
2. If a multiple of a chemical reaction is taken, the same multiple of the ΔH is taken as well.

What are the equations being combined? The first chemical equation is the combustion of C, which produces CO2:

2C(s) + 2O2(g) → 2CO2(g)

This reaction is two times the reaction to make CO2 from C(s) and O2(g), whose enthalpy change is known:

C(s) + O2(g) → CO2(g) ΔH = −393.5kJ

According to the first corollary, the first reaction has an energy change of two times −393.5 kJ, or −787.0 kJ:

2C(s) + 2O2(g) → 2CO2(g) ΔH = −787.0kJ

The second reaction in the combination is related to the combustion of CO(g):

2CO(g) + O2(g) → 2CO2(g) ΔH = −566.0kJ

The second reaction in our combination is the reverse of the combustion of CO. When we reverse the reaction, we change the sign on the ΔH:

2CO2(g) → 2CO(g) + O2(g) ΔH = +566.0kJ

Now that we have identified the enthalpy changes of the two component chemical equations, we can combine the ΔH values and add them:

2C(s) + 2O2(g) → 2CO2(g) ΔH = −787.0kJ
2CO2(g) → 2CO(g)) + O2(g) ΔH = +566.0kJ
-------------------------
2C(s) + O2(g) → 2CO(g) ΔH = −787.0 + 566.0 = −221.0kJ

Hess's law is very powerful. It allows us to combine equations to generate new chemical reactions whose enthalpy changes can be calculated, rather than directly measured.

### Example 7.6.1

Determine the enthalpy change of

C2H4 + 3O2 → 2CO2 + 2H2O ΔH = ?

from these reactions:

C2H2 + H2 → C2H4 ΔH = −174.5kJ

2C2H2 + 5O2 → 4CO2 + 2H2O ΔH = −1,692.2kJ

2CO2 + H2 → 2O2 + C2H2 ΔH = −167.5kJ

**Solution**

We will start by writing chemical reactions that put the correct number of moles of the correct substance on the proper side. For example, our desired reaction has C2H4 as a reactant, and only one reaction from our data has C2H4. However, it has C2H4 as a product. To make it a reactant, we need to reverse the reaction, changing the sign on the Δ_H_:

C2H4 → C2H2 + H2 ΔH = +174.5kJ

We need CO2 and H2O as products. The second reaction has them on the proper side, so let us include one of these reactions (with the hope that the coefficients will work out when all of our reactions are added):

2C2H2 + 5O2 → 4CO2 + 2H2O ΔH = −1,692.2kJ

We note that we now have 4 mol of CO2 as products; we need to get rid of 2 mol of CO2. The last reaction has 2CO2 as a reactant. Let us use it as written:

2CO2 + H2 → 2O2 + C2H2 ΔH = −167.5kJ

We combine these three reactions, modified as stated:

[Image: C2H4 to C2H2 and H2 (delta H=+174.5kJ). 2[C2H2] and 5[O2] to 4[CO2] and 2[H2O] (delta H =-1692.2kJ). 2[CO2] and H2 to 2[O2] and C2H2 (delta H=-167.5kJ). The overall reaction is C2H4+2[C2H2]+5[O2]+2[CO2]+H2 becomes C2H2+H2+4[CO2]+2[H2O]+2[O2]+C2H2]

What cancels? 2C2H2, H2, 2O2, and 2CO2. What is left is

C2H4 + 3O2 → 2CO2 + 2H2O

which is the reaction we are looking for. The ΔH of this reaction is the sum of the three ΔH values:

Δ_H_ = +174.5 − 1,692.2 − 167.5 = −1,685.2 kJ

### Exercise 7.6.1

Given the thermochemical equations

Pb + Cl2 → PbCl2 ΔH = −223kJ

PbCl2 + Cl2 → PbCl4 ΔH = −87kJ

determine ΔH for

2PbCl2 → Pb + PbCl4

**Answer**

+136 kJ

## Key Takeaway

- Hess's law allows us to combine reactions algebraically and then combine their enthalpy changes the same way.
