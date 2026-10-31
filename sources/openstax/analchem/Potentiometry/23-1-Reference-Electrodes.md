---
title: "23.1: Reference Electrodes"
book: "Instrumental Analysis (LibreTexts)"
chapter: "23: Potentiometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/23%3A_Potentiometry/23.01%3A_Reference_Electrodes"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

In potentiometry we measure the difference between the potential of two electrodes. The potential of one electrode—the working or indicator electrode—responds to the analyte’s activity and the other electrode—the counter or reference electrode—has a known, fixed potential. By convention, the reference electrode is the anode; thus, the short hand notation for a potentiometric electrochemical cell is

reference electrode || indicator electrode

and the cell potential is

E_cell = E_ind − E_ref

The ideal reference electrode provides a stable, known potential so that we can attribute any change in E_cell to the analyte’s effect on the indicator electrode’s potential. In addition, the reference electrode should be easy to make and easy to use. Although the standard hydrogen electrode is the reference electrode used to define electrode potentials, its use is not common. Instead, the two reference electrodes discussed in this section find the most applications.

[Note: corrected; the source prints "it use is not common" where this reads "its use is not common". A typo for the possessive.]

## Calomel Electrodes

A calomel reference electrode is based on the following redox couple between Hg2Cl2 and Hg (calomel is the common name for Hg2Cl2)

Hg2Cl2(s) + 2e^− ⇌ 2Hg(l) + 2Cl^−(aq)

for which the potential is

E = E_Hg2Cl2/Hg^o−(0.05916/2) log(a_(Cl^−))^2 = +0.2682V−(0.05916/2) log(a_(Cl^−))^2

The potential of a calomel electrode, therefore, depends on the activity of Cl^– in equilibrium with Hg and Hg2Cl2.

As shown in Figure 23.1.1, in a saturated calomel electrode (SCE) the concentration of Cl^– is determined by the solubility of KCl. The electrode consists of an inner tube packed with a paste of Hg, Hg2Cl2, and KCl, situated within a second tube that contains a saturated solution of KCl. A small hole connects the two tubes and a porous wick serves as a salt bridge to the solution in which the SCE is immersed. A stopper in the outer tube provides an opening for adding additional saturated KCl. The short hand notation for this cell is

[Note: corrected; the source prints "adding addition saturated KCl" where this reads "adding additional saturated KCl". A typo for the adjective.]

Hg(l)|Hg2Cl2(s), KCl(aq, sat'd )||

Because the concentration of Cl^– is fixed by the solubility of KCl, the potential of an SCE remains constant even if we lose some of the inner solution to evaporation. A significant disadvantage of the SCE is that the solubility of KCl is sensitive to a change in temperature. At higher temperatures the solubility of KCl increases and the electrode’s potential decreases. For example, the potential of the SCE is +0.2444 V at 25^oC and +0.2376 V at 35^oC. The potential of a calomel electrode that contains an unsaturated solution of KCl is less dependent on the temperature, but its potential changes if the concentration, and thus the activity of Cl^–, increases due to evaporation.

For example, the potential of a calomel electrode is +0.280 V when the concentration of KCl is 1.00 M and +0.336 V when the concentration of KCl is 0.100 M. If the activity of Cl^– is 1.00, the potential is +0.2682 V.

Figure 23.1.1: Schematic diagram showing the saturated calomel electrode.
Schematic diagram showing the saturated calomel electrode.

## Silver/Silver Chloride Electrodes

Another common reference electrode is the silver/silver chloride electrode, which is based on the reduction of AgCl to Ag.

AgCl(s) + e^− ⇌ Ag(s) + Cl^−(aq)

As is the case for the calomel electrode, the activity of Cl^– determines the potential of the Ag/AgCl electrode; thus

E = E_(AgCl/Ag)° − 0.05916 log a_(Cl^−) = 0.2223 V−0.05916 log a_(Cl^−)

When prepared using a saturated solution of KCl, the electrode's potential is +0.197 V at 25^oC. Another common Ag/AgCl electrode uses a solution of 3.5 M KCl and has a potential of +0.205 V at 25^oC. As you might expect, the potential of a Ag/AgCl electrode using a saturated solution of KCl is more sensitive to a change in temperature than an electrode that uses an unsaturated solution of KCl.

A typical Ag/AgCl electrode is shown in Figure 23.1.2 and consists of a silver wire, the end of which is coated with a thin film of AgCl, immersed in a solution that contains the desired concentration of KCl. A porous plug serves as the salt bridge. The electrode’s short hand notation is

Ag(s)|AgCl(s), KCl(aq, a_(Cl^−) = x)||

Figure 23.1.2: Schematic diagram showing a Ag/AgCl electrode. Because the electrode does not contain solid KCl, this is an example of an unsaturated Ag/AgCl electrode.
Schematic diagram showing a Ag/AgCl electrode. Because the electrode does not contain solid KCl, this is an example of an unsaturated Ag/AgCl electrode.

### Converting Potentials Between Reference Electrodes

The standard state reduction potentials in most tables are reported relative to the standard hydrogen electrode’s potential of +0.00 V. Because we rarely use the SHE as a reference electrode, we need to convert an indicator electrode’s potential to its equivalent value when using a different reference electrode. As shown in the following example, this is easy to do.

### Example 23.1.1

The potential for an Fe^3+/Fe^2+ half-cell is +0.750 V relative to the standard hydrogen electrode. What is its potential if we use a saturated calomel electrode or a saturated silver/silver chloride electrode?

**Solution**

When we use a standard hydrogen electrode the potential of the electrochemical cell is

E_cell = E_(Fe^3+/Fe^2+) − E_SHE = 0.750 V−0.000 V = 0.750 V

We can use the same equation to calculate the potential if we use a saturated calomel electrode

E_cell = E_(Fe^3+/Fe^2+) − E_SCE = 0.750 V−0.2444 V = 0.506 V

[Note: corrected; the source prints "E_SHE = 0.750 V−0.2444 V" where this reads "E_SCE = 0.750 V−0.2444 V". The reference here is the saturated calomel electrode, whose potential, +0.2444 V, is the value subtracted; the SHE's is 0.000 V.]

or a saturated silver/silver chloride electrode

E_cell = E_(Fe^3+/Fe^2+) − E_(Ag/AgCl) = 0.750 V−0.197 V = 0.553 V

[Note: corrected; the source prints "E_SHE = 0.750 V−0.197 V" where this reads "E_(Ag/AgCl) = 0.750 V−0.197 V". The reference here is the saturated Ag/AgCl electrode, whose potential, +0.197 V, is the value subtracted; the SHE's is 0.000 V.]

Figure 23.1.3 provides a pictorial representation of the relationship between these different potentials.

<!-- end of example -->

Figure 23.1.3: Relationship between the potential of an Fe^3+/Fe^2+ half-cell relative to the reference electrodes in Example 23.1.1. The potential relative to a standard hydrogen electrode is shown in blue, the potential relative to a saturated silver/silver chloride electrode is shown in red, and the potential relative to a saturated calomel electrode is shown in green.
Relationship between the potential of a half-cell relative to the reference electrodes.
