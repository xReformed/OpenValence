---
title: "19.12: Heats of Reactions Can Be Calculated from Tabulated Heats of Formation"
book: "Physical Chemistry (LibreTexts)"
chapter: "19: The First Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/19%3A_The_First_Law_of_Thermodynamics/19.12%3A_Heats_of_Reactions_Can_Be_Calculated_from_Tabulated_Heats_of_Formation"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Reaction enthalpies are important, but difficult to tabulate. However, because enthalpy is a state function, it is possible to use Hess’ Law to simplify the tabulation of reaction enthalpies. Hess’ Law is based on the addition of reactions. By knowing the reaction enthalpy for constituent reactions, the enthalpy of a reaction that can be expressed as the sum of the constituent reactions can be calculated. The key lies in the canceling of reactants and products that occur in the “data” reactions but not in the “target reaction.

[Note: corrected; the source prints "that °Ccur in" where this reads "that occur in". A find-and-replace slip in the source.]

### Example 19.12.1

Find ΔH_rxn for the reaction

2CO(g) + O2(g) → 2CO2(g)

Given

C(gr) + ½O2(g) → CO(g)

with ΔH1 = −110.53 kJ

C(gr) + O2(g) → CO2(g)

with ΔH2 = −393.51 kJ

**Solution**

The target reaction can be generated from the data reactions.

2 × [CO(g) → C(gr) + ½O2(g)]

[Note: corrected; the source prints "2 × [CO(g) → C(gr) + O2(g)]" where this reads "2 × [CO(g) → C(gr) + ½O2(g)]". CO has one O atom.]

plus

2 × [C(gr) + O2(g) → CO2(g)]

[Note: corrected; the source prints "2 × [C(gr) + 2O2(g) → 2CO2(g)]" where this reads "2 × [C(gr) + O2(g) → CO2(g)]". The factor 2 is outside the bracket.]

equals

2CO(g) + O2(g) → 2CO2(g)

so

2 × ΔH2 = −787.02 kJ

[Note: corrected; the source prints "2 × ΔH1 = −787.02 kJ" where this reads "2 × ΔH2 = −787.02 kJ". 2ΔH2 = 2(−393.51); reaction 1, reversed, gives −2ΔH1 = +221.06.]

−2 × ΔH1 = 221.06 kJ

[Note: corrected; the source prints "2 × ΔH2 = 221.06 kJ" where this reads "−2 × ΔH1 = 221.06 kJ". As above.]

−2 × ΔH1 + 2 × ΔH2 = −565.96 kJ

[Note: corrected; the source prints "2 × ΔH1 + 2 × ΔH2 = −565.96 kJ" where this reads "−2 × ΔH1 + 2 × ΔH2 = −565.96 kJ". As above.]

## Standard Enthalpy of Formation

One of the difficulties with many thermodynamic state variables (such as enthalpy) is that while it is possible to measure changes, it is impossible to measure an absolute value of the variable itself. In these cases, it is necessary to define a zero to the scale defining the variable. For enthalpy, the definition of a zero is that the standard enthalpy of formation of a pure element in its standard state is zero. All other enthalpy changes are defined relative to this standard. Thus it is essential to very carefully define a standard state.

### Definition: the Standard State

The standard state of a substance is the most stable form of that substance at 1 atmosphere pressure and the specified temperature.

Using this definition, a convenient reaction for which enthalpies can be measured and tabulated is the standard formation reaction. This is a reaction which forms one mole of the substance of interest in its standard state from elements in their standard states. The enthalpy of a standard formation reaction is the standard enthalpy of formation (ΔH_(f^o)). Some examples are

- NaCl(s): Na(s) + ½Cl2(g) → NaCl(s) with ΔHf^o = −411.2 kJ/mol
- C3H8(g): 3C(gr) + 4H2(g) → C3H8(g) with ΔHf^o = −103.8 kJ/mol

It is important to note that the standard state of a substance is temperature dependent. For example, the standard state of water at -10 °C is solid, whereas the standard state at room temperature is liquid. Once these values are tabulated, calculating reaction enthalpies becomes a snap. Consider the heat combustion (ΔHc) of methane (at 25 °C) as an example.

CH4(g) + 2O2(g) → CO2(g) + 2H2O(l)

The reaction can expressed as a sum of a combination of the following standard formation reactions.

C(gr) + 2H2(g) → CH4(g)

with ΔHf^o = −74.6 kJ/mol

C(gr) + O2(g) → CO2(g)

with ΔHf^o = −393.5 kJ/mol

H2(g) + ½O2(g) → H2O(l)

with ΔHf^o = −285.8 kJ/mol

The target reaction can be generated from the following combination of reactions

−1 × [C(gr) + 2H2(g) → CH4(g)]

CH4(g) → C(gr) + 2H2(g)

with ΔHf^o = −1 × [−74.6 kJ/mol] = 74.6 kJ/mol

C(gr) + O2(g) → CO2(g)

with ΔHf^o = −393.5 kJ/mol

2 × [H2(g) + ½O2(g) → H2O(l)]

2H2(g) + O2(g) → 2H2O(l)

with ΔHf^o = 2 × [−285.8 kJ/mol] = −571.6 kJ/mol.

CH4(g) + 2O2(g) → CO2(g) + 2H2O(l)

[Note: corrected; the source prints "CO2_(g)" where this reads "CO2(g)". A typing error.]

with ΔHc^o = −890.5 kJ/mol

Alternately, the reaction enthalpy could be calculated from the following relationship

ΔH_rxn = Σ_products ν·ΔHf^o − Σ_reactants ν·ΔHf^o

where ν is the stoichiometric coefficient of a species in the balanced chemical reaction. For the combustion of methane, this calculation is

ΔH_rxn = (1 mol)(ΔHf^o(CO2)) + (2 mol)(ΔHf^o(H2O)) − (1 mol)(ΔHf^o(CH4))

[Note: corrected; the source prints "Δ_rxn =" where this reads "ΔH_rxn =". The H is missing.]

= (1 mol)(−393.5 kJ/mol) + (2 mol)(−285.8 kJ/mol) − (1 mol)(−74.6 kJ/mol)

= −890.5 kJ

[Note: corrected; the source prints "= −890.5 kJ/mol" where this reads "= −890.5 kJ". (mol)(kJ/mol) gives kJ, as the text says.]

A note about units is in order. Note that reaction enthalpies have units of kJ, whereas enthalpies of formation have units of kJ/mol. The reason for the difference is that enthalpies of formation (or for that matter enthalpies of combustion, sublimation, vaporization, fusion, etc.) refer to specific substances and/or specific processes involving those substances. As such, the total enthalpy change is scaled by the amount of substance used. General reactions, on the other hand, have to be interpreted in a very specific way. When examining a reaction like the combustion of methane

CH4(g) + 2O2(g) → CO2(g) + 2H2O(l)

with ΔH_rxn = −890.5 kJ. The correct interpretation is that the reaction of one mole of CH4(g) with two moles of O2(g) to form one mole of CO2(g) and two moles of H2O(l) releases 890.5 kJ at 25 °C.

## Ionization Reactions

Ionized species appear throughout chemistry. The energy changes involved in the formation of ions can be measured and tabulated for several substances. In the case of the formation of positive ions, the enthalpy change to remove a single electron at 0 K is defined as the ionization potential.

M(g) → M^+(g) + e^−

with ΔH(0K) ≡ 1^st ionization potential (IP)

The removal of subsequent electrons requires energies called the 2^nd Ionization potential, 3^rd ionization potential, and so on.

M^+(g) → M^2+(g) + e^−

with ΔH(0K) ≡ 2^nd IP

M^2+(g) → M^3+(g) + e^−

with ΔH(0K) ≡ 3^rd IP

An atom can have as many ionization potentials as it has electrons, although since very highly charged ions are rare, only the first few are important for most atoms.

Similarly, the electron affinity can be defined for the formation of negative ions. In this case, the first electron affinity is defined by

X(g) + e^− → X^−(g)

with −ΔH(0K) ≡ 1^st electron affinity (EA)

The minus sign is included in the definition in order to make electron affinities mostly positive. Some atoms (such as noble gases) will have negative electron affinities since the formation of a negative ion is very unfavorable for these species. Just as in the case of ionization potentials, an atom can have several electron affinities.

X^−(g) + e^− → X^2−(g)

with −ΔH(0K) ≡ 2^nd EA.

X^2−(g) + e^− → X^3−(g)

with −ΔH(0K) ≡ 3^rd EA.

## Average Bond Enthalpies

In the absence of standard formation enthalpies, reaction enthalpies can be estimated using average bond enthalpies. This method is not perfect, but it can be used to get ball-park estimates when more detailed data is not available. A bond dissociation energy D is defined by

XY(g) → X(g) + Y(g)

with ΔH ≡ D(X − Y)

In this process, one adds energy to the reaction to break bonds, and extracts energy for the bonds that are formed.

ΔH_rxn = Σ(bonds broken) − Σ(bonds formed)

As an example, consider the combustion of ethanol:

[Image not described in source]

In this reaction, five C-H bonds, one C-C bond, and one C-O bond, and three O=O bonds must be broken. Also, four C=O bonds, and five O-H bonds are formed (net of the alcohol's O-H).

[Note: corrected; the source prints "and one O=O bond must be broken. Also, four C=O bonds, and one O-H bond are formed." where this reads "and three O=O bonds must be broken. Also, four C=O bonds, and five O-H bonds are formed (net of the alcohol's O-H).". C2H5OH + 3O2 → 2CO2 + 3H2O breaks three O=O and forms six O-H, of which one replaces the alcohol's.]

| Bond | Average Bond Energy (kJ/mol) |
| --- | --- |
| C-H | 413 |
| C-C | 348 |
| C-O | 358 |
| O=O | 495 |
| C=O | 799 |
| O-H | 463 |

The reaction enthalpy is then given by

ΔHc = 5(413 kJ/mol) + 1(348 kJ/mol) + 1(358 kJ/mol)

+ 3(495 kJ/mol) − 4(799 kJ/mol) − 5(463 kJ/mol)

[Note: corrected; the source prints "+ 1(495 kJ/mol) − 4(799 kJ/mol) − 2(463 kJ/mol)" where this reads "+ 3(495 kJ/mol) − 4(799 kJ/mol) − 5(463 kJ/mol)". As above.]

= −1255 kJ/mol

[Note: corrected; the source prints "= −856 kJ/mol" where this reads "= −1255 kJ/mol". 5(413) + 348 + 358 + 3(495) − 4(799) − 5(463) = −1255 kJ/mol (measured, with gaseous water, about −1235).]

Because the bond energies are defined for gas-phase reactants and products, this method does not account for the enthalpy change of condensation to form liquids or solids, and so the result may be off systematically due to these differences. Also, since the bond enthalpies are averaged over a large number of molecules containing the particular type of bond, the results may deviate due to the variance in the actual bond enthalpy in the specific molecule under consideration. Typically, reaction enthalpies derived by this method are only reliable to within ± 5-10%.
