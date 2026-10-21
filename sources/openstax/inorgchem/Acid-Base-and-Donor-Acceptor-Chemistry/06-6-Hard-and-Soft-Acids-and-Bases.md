---
title: "6.6: Hard and Soft Acids and Bases"
book: "Inorganic Chemistry (LibreTexts)"
chapter: "6: Acid-Base and Donor-Acceptor Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Inorganic_Chemistry_(LibreTexts)/06%3A_Acid-Base_and_Donor-Acceptor_Chemistry/6.06%3A_Hard_and_Soft_Acids_and_Bases"
author: "Smcontakes"
license: "CC BY 4.0"
---

## Origin of the Hard-Soft Acid-Base Principle

One of the strengths of the Lewis acid-base concept is the readiness with which it illuminates the role that covalent and electrostatic interactions in acid base behavior, specifically through its ability to explain chemical interactions in terms of frontier orbitals and the interactions between charged groups as electrons are donated from a base to an acid. However, simply acknowledging the presence of such interactions does little to illuminate the degree to which each mode of explanation best explains the bonding in a given system? To what extent is a given adduct better described as held together by covalent bonds as opposed to ionic ones - e.g. better described as a molecule rather than an ion pair? Moreover, does it even matter, given that the orbitals of quantum mechanics result from the combination of electrons' wavelike behavior with their electrostatic attraction to nuclei in either case?^1 These questions and more are addressed by one of the most important conceptual tools in contemporary inorganic chemistry, the Hard-Soft acid-base principle.

The Hard-Soft acid-base principle (HSAB principle) stems from the recognition that some Lewis acids and bases seem to have a natural affinity for one another.* Consider the following:

- Some metals are commonly found in nature as salts of chloride or as oxide ores while others are found in combination with sulfur. Geochemists even use the Goldschmidtt classification scheme to classify the halide and oxide formers as lithophiles and the sulfide formers as chalcophiles.
- In living systems small highly charged metals ions like Fe^3+ are usually found bound to N and O atoms while larger metals with lower charges such as Zn^2+ are often found attached to at least one S atom. Similarly, metals prefer to bind to one coordination site over the other when forming complexes with ambidentate ligands. The most well-known instances involve complexes of cyanate and thiocyanate, which can coordinate metals through either the N or chalcogen atom. For instance, Cu^2+ and Zn^2+ form N-thiocyanato complexes in species like [Cu(NCS)2(py)2] and [Zn(NCS)4]^2- while their larger cogeners Au^3+ and Hg^2+ preferentially forms S-thiocyanato complexes, giving species like [Hg(SCN)4]^2-.

### Ambidentate ligands

Ambidentate ligands possess multiple coordination sites through which a metal may bind. For instance, thiocyanate may coordinate metals (M) at either the S or N to give S-thiocyanato or N-thiocyanato complexes.

[Image not described in source]

- The solubility trends for the alklai metal halides and silver halides are opposite, even though both involve salts of formula M^+X^- (salts can be thought of as involving Lewis acid-base adduct formation between the anions and cations). Specifically, although the silver halides are all relatively insoluble in water, the very modest solubility they possess follows the order:

X = F >> Cl > Br > I (for the solubility of AgX)

In contrast, the much more ample solubility of the alkali metal halides** follows the opposite order. For example, the order for the lithium halides is

X = F << Cl < Br << I (for the solubility of LiX)

## Notes

1. Albeit suitably fudged through such niceties as the Aufbau principle and other approximations.

* Despite the fruitfulness of this observation, in general it is important to reduce the potential for observer bias by checking observations like these against compounds reported in the chemical literature and databases like the Inorganic Crystal Structure and Cambridge Crystallographic Databases.

** These are very soluble in water, to the point where some solutions are perhaps better described as solutions of water in the halide.

† This can be predicted based on the relative hardness of BF3, BR3, and BH3 in the list of hard and soft acids. However, for those of you who may be confused as to why H is considered a better electron donor for the purposes of softening a Lewis acid center while alkyl groups are better electron donors for the purposes of stabilizing carbocations in organic chemistry, the dominant effect is the lower electronegativity of H relative to carbon (in CH3). The effect of electron donation due to hyperconjugation isn't as great for thermodynamically stable bases like BX3/BR3.

## 6.6.1: Quantitative Measures of Hardness, Softness, and Acid-Base Interactions from a Hard Soft Acid-Base Principle Perspective Involve Orbital Energies and/or Apportioning Acid-Base Bonding in Terms of Electrostatic and Covalent Factors

### Pearson Absolute Hardness is a useful metric of hardness based on orbital energies

The recognition that hard acids and bases possess a large HOMO-LUMO gap suggests that the gap size itself might serve as a useful index of hardness. The basis for this idea may be found by considering Pearson’s definition of absolute hardness, η.^1 Pearson's absolute hardness, η, is half the second derivative of a species' energy with respect to changes in total number of electrons, N_(e^−).

Pearson’s absolute hardness = η = 1/2 · (d^2 E)/(dN_(e^−)^2)

(in eV)

and, since acids' and bases’ hardness and softness are inversely related, Pearson’s absolute softness, σ, is just the inverse of hardness.

Pearson’s softness = 1/η

Of these, Pearson’s absolute hardness is related to the Mulliken definition of electronegativity as the first derivative of a species' energy with respect to changes in total number of electrons.

Mulliken electronegativity = χ = −dE/(dN_(e^−))

[Note: corrected; the source prints "χ = dE/(dN_(e^−))" where this reads "χ = −dE/(dN_(e^−))". Electronegativity is the negative of the chemical potential; the minus sign gives χ ≈ (IE + EA)/2, as used below.]

(in eV)

Operationally, both the Pearson hardness and Mulliken electronegativity are approximated in terms of the energies associated with unit changes in the number of electrons – i.e., in terms of ionization energies and electron affinities. Specifically,

[Note: corrected; the source prints "ionization energies and electronegativities" where this reads "ionization energies and electron affinities". Unit changes in the number of electrons are ionization energies and electron affinities.]

Pearson’s absolute hardness = η ≈ (IE − EA)/2

Mulliken electronegativity = χ ≈ (IE + EA)/2

where IE and EA are in eV.

The connection between Pearson’s absolute hardness/softness and the HOMO-LUMO gap then follows from Koopman’s theorem, in which the ionization energy (IE) is just the opposite of the HOMO energy.

IE = −E_HOMO

Similarly, the electron affinity (EA), defined as the opposite of the energy released on absorption of an electron, may be taken as an approximation of the LUMO energy.

E_LUMO ≈ −EA

So Pearson’s absolute hardness is just half the HOMO-LUMO gap (band gap) size in electron volts:

Pearson's absolute hardness = η ≈ (E_LUMO − E_HOMO)/2

where all values are given in eV,

and the Mulliken electronegativity is just the average of the HOMO and LUMO energies (~Fermi energy):

Mulliken electronegativity, χ ≈ −(E_LUMO + E_HOMO)/2

where all values are given in eV

The relationships between the Pearson absolute hardness, Mulliken electronegativity, and HOMO and LUMO energies are depicted schematically for the group 1A monocations in Figure 6.6.1.1.

Figure 6.6.1.1: Relationships between Pearson absolute hardness, Mulliken electronegativity, and HOMO and LUMO energies for the group 1A monocations.

Values of the Pearson hardness and Mulliken electronegativity for several acids and bases are given in Table 6.6.1.1. The values in the table confirm the expected trends, showing a decrease in hardness with size (down a group), with increasing charge, and as substituent electronegativity increases for a series of isolobal ions.

[Note: corrected; the source prints "an increase in hardness with size" where this reads "a decrease in hardness with size". Hardness falls down a group: Li^+ 35.12 to Cs^+ 10.6 in the table.]

Table 6.6.1.1: Pearson Absolute Hardness and Related Parameters for Selected Acids and Bases.^2 Taken from Pearson, R. G., Absolute electronegativity and hardness: application to inorganic chemistry. Inorganic Chemistry 1988, 27 (4), 734-740.

| Species | Ionization Energy, IE or I (eV) | Electron Affinity, EA or A (eV) | Mulliken Electronegativity, χ (eV) | Pearson Absolute Hardness, η (eV) |
| --- | --- | --- | --- | --- |
| Selected Acids |  |  |  |  |
| Group 1A monocations |  |  |  |  |
| Li^+ | 75.64 | 5.39 | 40.52 | 35.12 |
| Na^+ | 47.29 | 5.14 | 26.21 | 21.08 |
| K^+ | 31.63 | 4.34 | 17.99 | 13.64 |
| Rb^+ | 27.28 | 4.18 | 15.73 | 11.55 |
| Cs^+ | 25.1 | 3.89 | 14.5 | 10.6 |
| Group 11 monocations |  |  |  |  |
| Cu^+ | 20.29 | 7.73 | 14.01 | 6.28 |
| Ag^+ | 21.49 | 7.58 | 14.53 | 6.96 |
| Au^+ | 20.5 | 9.23 | 14.9 | 5.6 |
| Isoelectronic Row 3 Metal Cations |  |  |  |  |
| Na^+ | 47.29 | 5.14 | 26.21 | 21.08 |
| Mg^2+ | 80.14 | 15.04 | 47.59 | 32.55 |
| Al^3+ | 119.99 | 28.45 | 74.22 | 45.77 |
| Changes with Transition Metal Ion Charge |  |  |  |  |
| Fe^2+ | 30.65 | 16.18 | 23.42 | 7.24 |
| Fe^3+ | 54.8 | 30.65 | 42.73 | 12.08 |
| Co^2+ | 33.50 | 17.06 | 25.28 | 8.22 |
| Co^3+ | 51.3 | 33.5 | 42.4 | 8.9 |
| Boron trihalides |  |  |  |  |
| BF3 | 15.81 | -3.5 | 6.2 | 9.7 |
| BCl3 | 11.60 | 0.33 | 5.97 | 5.64 |
| BBr3 | 10.51 | 0.82 | 5.67 | 4.85 |
| CO2 | 13.8 | -3.8 | 5.0 | 8.8 |
| CS2 | 10.08 | 0.62 | 5.35 | 4.73 |
| Selected Bases |  |  |  |  |
| Group 17 monoanions (taken to be identical to the free atom values; for arguments as to why this is reasonable see Pearson, R. G., Inorg. Chem. 1988, 27 (4), 734-740.) |  |  |  |  |
| F^- | 17.42 | 3.40 | 10.41 | 7.01 |
| Cl^- | 13.01 | 3.62 | 8.31 | 4.70 |
| Br^- | 11.84 | 3.36 | 7.60 | 4.24 |
| I^- | 10.45 | 3.06 | 6.76 | 3.70 |
| Group 15 hydrides |  |  |  |  |
| NH3 | 10.7 | -5.6 | 2.6 | 8.2 |
| PH3 | 10.0 | -1.9 | 4.1 | 6.0 |
| Trimethylpnictides |  |  |  |  |
| NMe3 | 7.8 | -4.8 | 1.5 | 6.3 |
| PMe3 | 8.6 | -3.1 | 2.8 | 5.9 |
| AsMe3 | 8.7 | -2.7 | 3.0 | 5.7 |
| Group 16 hydrides |  |  |  |  |
| H2O | 12.6 | -6.4 | 3.1 | 9.5 |
| H2S | 10.5 | -2.1 | 4.2 | 6.2 |
| Phosphorous trihalides |  |  |  |  |
| PF3 | 12.3 | -1.0 | 5.7 | 6.7 |
| PCl3 | 10.2 | 0.8 | 5.5 | 4.7 |
| PBr3 | 9.9 | 1.6 | 5.8 | 4.2 |

[Note: corrected; the source prints "| Rb^+ | 27.28 | 4.18 | 15.77 |" where this reads "| Rb^+ | 27.28 | 4.18 | 15.73 |". (27.28 + 4.18)/2 = 15.73.]

[Note: corrected; the source prints "| Co^3+ | 51.3 | 22.5 |" where this reads "| Co^3+ | 51.3 | 33.5 |". The A of Co^3+ is the I of Co^2+, 33.50 eV (as Fe^3+ uses Fe^2+'s), and only 33.5 gives the row's χ = 42.4 and η = 8.9.]

[Note: corrected; the source prints "| CS2 | 10.08 | 0.62 | 5.35 | 5.56 |" where this reads "| CS2 | 10.08 | 0.62 | 5.35 | 4.73 |". η = (10.08 − 0.62)/2 = 4.73.]

[Note: corrected; the source prints "| PBr3 | 9.9 | 1.6 | 5.6 |" where this reads "| PBr3 | 9.9 | 1.6 | 5.8 |". χ = (9.9 + 1.6)/2 = 5.75.]

[Note: corrected; the source prints "| PC13 |" where this reads "| PCl3 |". The formula is PCl3.]

### Drago-Wayland Acid-Base Parameters allow for estimation of the electrostatic and covalent contributions to the enthalpy of formation of a Lewis acid-base adduct.

Although Pearson hardness values are a useful metric of acids' and bases' hardness, they cannot easily be used to estimate the Lewis acid-base interaction energy. This is not the case for the EC model developed by Drago and Wayland.^3 In the Drago and Wayland's EC Model, the enthalpy of formation of an acid-base adduct, AB,

A + B ⇌ AB    ΔH_(AB adduct)

from the acid (A) and base (B) can be calculated as the sum of products of electrostatic (E) and covalent (C) factors that reflect the propensity of the acid and base to engage in strong electrostatic and covalent interactions with one another:

−ΔH_(AB adduct) = EA EB + CA CB

where E_A and C_A are the electrostatic and covalent parameters for the acid and E_B and C_B the electrostatic and covalent parameters for the base given in units of kcal^½ mol^-½. E and C parameters for selected acids and bases are given in Table 6.6.1.2 .

Table 6.6.1.2: E and C Parameters for selected Lewis acids and bases according to the ECW model.^(4,5) Taken from Vogel, G. C.; Drago, R. S., The ECW Model. Journal of Chemical Education 1996, 73 (8), 701 and Drago, R. S. A modern approach to acid-base chemistry. Journal of Chemical Education 1974, 51 (5), 300 (for BF3).

| Species | E (kcal^½ mol^-½) | C (kcal^½ mol^-½) | W (kcal mol^-1) | C/E |
| --- | --- | --- | --- | --- |
| Acids |  |  |  |  |
| I2 | 0.5^(†) | 2^(†) | 0 | 4 |
| ICl | 2.92 | 1.66 | 0 | 0.57 |
| H2O | 1.31 | 0.78 | 0 | 0.59 |
| SO2 | 0.51 | 1.56 | 0 | 3.1 |
| HCCl3 (chloroform) | 1.56 | 0.44 | 0 | 0.28 |
| (CH3)3COH | 1.07 | 0.69 | 0 | 0.65 |
| (CF3)3COH | 3.06 | 1.88 | -0.87 | 0.61 |
| [Image not described in source] | 2.27 | 1.07 | 0 | 0.47 |
| [Image not described in source] | 2.23 | 1.03 | 0 | 0.46 |
| [Image not described in source] | 2.30 | 1.11 | 0 | 0.48 |
| [Image not described in source] | 1.38 | 0.68 | 0 | 0.49 |
| BF3 | 1.62 | 9.88 |  | 6.10 |
| B(CH3)3 | 2.90 | 3.60 | 0 | 1.2 |
| Al(CH3)3 | 8.66 | 3.68 | 0 | 0.43 |
| Ga(C2H5)3 | 6.95 | 1.48 | 0 | 0.21 |
| In(CH3)3 | 6.60 | 2.15 | 0 | 0.33 |
| Zn[N(Si(CH3)3)]2 | 2.75 | 2.32 | 0 | 0.84 |
| Cd[N(Si(CH3)3)]2 | 2.50 | 1.83 | 0 | 0.73 |
| Bases |  |  |  |  |
| NH3 | 2.31 | 2.04 |  | 0.88 |
| CH3NH2 | 2.16 | 3.13 |  | 1.4 |
| (CH3)2NH | 1.80 | 4.21 |  | 2.3 |
| (CH3)3N | 1.21 | 5.61 |  | 4.6 |
| [Image not described in source] | 1.78 | 3.54 |  | 2.0 |
| [Image not described in source] | 1.81 | 3.73 |  | 2.0 |
| [Image not described in source] | 1.53 | 2.94 |  | 1.9 |
| CH3CN | 1.64 | 0.71 |  | 0.43 |
| ClCH2CN | 1.67 | 0.33 |  | 0.20 |
| CH3C(O)CH3 | 1.74 | 1.26 |  | 0.72 |
| (C2H5)2O | 1.80 | 1.63 |  | 0.91 |
| [Image not described in source] | 1.64 | 2.18 |  | 1.3 |
| ^([Image not described in source]) (EtOAc) | 1.63 | 0.95 |  | 0.58 |
| [Image not described in source] | 2.35^(†) | 1.31 |  | 0.56 |
| (CH3)2S | 0.25 | 3.75 |  | 16 |
| (CH3CH2)2S | 0.24 | 3.92^(†) |  | 15 |
| [Image not described in source] | 0.26 | 4.07 |  | 16 |
| (CH3)2Se | 0.05 | 4.24 |  | 83 |
| (CH3)2SO | 2.4 | 1.47 |  | 0.61 |
| (CH3)3P | 0.25 | 5.81 |  | 23 |
| (CH3O)3P | 0.13 | 4.83 |  | 37 |
| (C6H5)3PO | 2.59 | 1.67 |  | 0.64 |
| (C6H5)3PS | 0.35 | 3.65 |  | 10 |
| C6H6 | 0.70 | 0.45 |  | 0.64 |

[Note: corrected; the source prints "|  | 15 |" where this reads "|  | 16 |". C/E = 3.92/0.24 = 16.3.]

[Note: corrected; the source prints "|  | 24 |" where this reads "|  | 23 |". C/E = 5.81/0.25 = 23.2.]

^(† These values were fixed to parameterize the rest of the E and C parameters.)

Trends in the relative values of C and E for the acids and bases in Table 6.6.1.2 are very roughly consistent with the trends in hardness and softness outlined earlier. However, the parameters suggest that some trends in hardness reflect changes in species' ability to engage in ionic interactions while others reflect changes in species' ability to engage in strong covalent interactions. For example, C_B for the dimethylchalcogenides increases steadily from 1.5 to 4.25 kcal^½ mol^-½ on going from Me2O to Me2Se while E_B decreases from 1.68 to 0.05 kcal^½ mol^-½, suggesting that electrostatic and covalent factors are both involved in a decrease in base hardness down group 16. However, in the case of phosphines and amines it appears that electrostatic factors are primarily responsible for the decrease in hardness down group 15. On going from Me3N to Me3P, C_B only increases slightly from 5.61 to 5.81 kcal^½ mol^-½ while E_B decreases from 1.21 to 0.25 kcal^½ mol^-½ - i.e., to 20% of the Me3N value.

However, some species tend to have very high values for both E and C, reflecting their ability to engage in strong electrostatic and covalent interactions, while others have small values for both, reflecting their relative stability as free species in solution.

As can be seen by comparing the acids and bases listed in the absolute hardness table (Table 6.6.1.1) and the EC parameters table (Table 6.6.1.2). The EC model has primarily been applied to organic and main group organometallic acids and bases. However, a variety of extensions have been proposed that enable its wider applicability.

The simple EC model only includes electrostatic and covalent considerations and thus ignores steric, lattice energy, and other contributions to the interaction energy. Thus it is only useful for analyzing the interaction energies of sterically unhindered adducts in which solvation energy and other contributions to the overall interaction energy are insignificant. However, additional refinements of the model attempt to extend its usefulness by accomodating various factors, such as

- Steric strain. Specifically, Hancock and Martell^6 introduced a D parameter to account for any additional steric strain introduced upon adduct formation,* giving

−ΔH_(AB adduct) = EA EB + CA CB − DA DB

- Charge transfer upon adduct formation. As discussed in section 6.4.2, the formation of a Lewis acid-base complex results in a net transfer of electron density from the electron donor (base) to the acceptor (acid). Drago and Wong^7 extended the EC model to include that charge transfer by adding what they called receptance factors that account for the acid's ability to receive electron density (R_A) and transference factors that account for the base's ability to donate electron density (T_B), giving

−ΔH_(AB adduct) = EA EB + CA CB + RA TB

This extension of the EC model is called the electrostatic-covalent-transfer or ECT model. Notably, it has been applied successfully to adducts involving ions, for which the R_AT_B term can account for as much as 31% of the interaction energy.

- Any constant energy term, such as the energy needed to cleave a dimer in order to make the Lewis acid (e.g., Al2Cl6 → 2AlCl3). Drago and Vogel^4 extended the EC model to accommodate these constant energy terms, which they designated W. The resulting model is called the ECW model, for which

−∆H_(AB adduct) = EA EB + CA CB + W

where

W = WA + WB

A simple application of EC and extended EC models is that they allow the enthalpy of adduct formation to be calculated. These enthalpy calculations based on the EC model are consistent with the superior interaction energy of hard-hard and soft-soft interactions compared to hard-soft ones. Consider, for example, the transfer of NH3 between BF3 and InMe3, H3N-BF3, and H3N-InMe3.

[Note: corrected; the source prints "the transfer of I2 between" where this reads "the transfer of NH3 between". The reaction that follows transfers NH3 between the two acids.]

H3N − BF3 + InMe3 ⇌ BF3 + H3N − InMe3

Since H3N is a hard base and BF3 and InMe3 are harder and softer acids, respectively, the equilibrium is expected to favor the reactant, H3N-BF3. Assuming the equilbrium is enthalpically driven, this qualitative analysis is consistent with the expected endothermic enthalpy of the reaction, as may be seen from the calculated enthalpies of adduct formation for both H3N-BF3 and H3N-InMe3.

For H3N-BF3:

−ΔH_(H3N-BF3) = E_BF3 E_NH3 + C_BF3 C_NH3

−ΔH_(H3N-BF3) = (1.62)(2.31) + (9.88)(2.04)

−∆H_(H3N-BF3) = 3.74 kcal/mol + 20.1 kcal/mol = 23.8 kcal/mol

∆H_(H3N-BF3) = −23.8 kcal/mol

For H3N-InMe3:

−∆H_(H3N-InMe3) = E_InMe3 E_NH3 + C_InMe3 C_NH3

−∆H_(H3N-InMe3) = (6.6)(2.31) + (2.15)(2.04)

−∆H_(H3N-InMe3) = 15.25 kcal/mol + 4.39 kcal/mol = 19.63 kcal/mol

∆H_(H3N-InMe3) = −19.63 kcal/mol

So H3N-BF3 is enthalpically favored by -4.2 kcal/mol [=-23.8 kcal/mol - (-19.63 kcal/mol) according to Hess' Law].

In addition to their utility for estimating enthalpies of Lewis acid-base complex formation, EC and related models serve as a useful tool for estimating the relative importance of ionic, covalent, and steric factors in complex formation. Specifically,

- The relative contributions of ionic and covalent factors can be calculated directly, as from the E and C terms. This can provide insight into why some complexes are more stable than others. Such calculations reveal that the hard-hard adduct H3N-BF3 is favored over the hard-soft adduct H3N-InMe3 because of the strong covalent interaction holding together H3N-BF3. The covalent term accounts for 84% of the energy of the H3N-BF3 interaction and is largely lost upon formation of H3N-InMe3, for which it contributes only 22% of the interaction energy. When the electrostatic term is accounted for, it can be seen that the formation of H3N-InMe3 from H3N-BF3 is disfavored, since it would result in a loss of 15.7 kcal/mol of covalent stabilization that would be incompletely compensated for by a gain of 11.5 kcal/mol of electrostatic stabilization.
- The role of other contributions to the bonding in a Lewis acid-base complex may be estimated from the discrepancy between the experimental and EC model calculated stabilization energies. This is because the EC parameters assume sigma bonding and so any deviation between the calculated and experimental enthalpies of complex formation can be attributed to non-sigma contributions.
   - This is done explicitly in extensions of the EC model. For instance, in the case of the Hancock and Martell, ECT, and ECW extensions of the EC model, the contributions of the steric, charge transfer, and constant energy factors (like dimer dissociation) are directly computed in the model.
   - Comparisons of the difference between the energies calculated using ordinary EC parameters and the observed enthalpies has also been used as an estimate of the
      - steric strain energy in strained adducts, which exhibit a less exothermic heat of adduct formation than expected
      - π-backbonding energy in adducts which are capable of such interactions and exhibit a more exothermic heat of formation than expected.^(8-10)
   - For examples see (a) Drago, R. S., The interpretation of reactivity in chemical and biological systems with the E and C model. Coordination Chemistry Reviews 1980, 33 (3), 251-277; (b) Drago, R. S.; Bilgrien, C. J., Inductive transfer and coordination of ligands in metal—metal bonded systems. Polyhedron 1988, 7 (16), 1453-1468; (c) Drago, R. S., The question of a synergistic metal-metal interaction leading to .pi.-back-bond stabilization in dirhodium tetrabutyrate adducts. Inorganic Chemistry 1982, 21 (4), 1697-1698.
- The role of electrostatic, covalent, and other contributions to the spectroscopic behavior of Lewis acid-base complexes can be assessed similarly using specialized versions of the ECW or ECT model that allow for calculation of changes in spectroscopic parameters upon adduct formation - e.g., OH stretching frequencies. Details are beyond the scope of this text but may be found in the original literature,^11 for example, Drago, R. S.; Vogel, G. C. JACS 1992, 114 (24), 9527-9532; Vogel, G. C.; Drago, R. S., J. Chem. Educ. 1996, 73 (8), 701; Drago, R. S.; Wong, N. M., J. Chem. Educ. 1996, 73 (2), 123.).

### Pearson Softness Parameters have been proposed as a means of calculating the equilibrium constant for formation of a Lewis acid-base adduct, although they are more commonly used to estimate metal toxicity

Pearson also proposed a softness parameter that can be used to estimate the thermodynamics of Lewis acid-base complex formation, this time in the form of the equilibrium constant for

A + B ⇌ (K) AB

for which Pearson proposed

logK = SA SB + σA σB

where S_A and S_B are acid and base parameters related to the strength of the acid-base interaction and σA and σB are acid and base parameters related to softness. This approach hasn't found as wide an acceptance in studies of chemical reactivity as the Drago-Wayland and absolute hardness parameters. However, because the toxicity of metal ions sometimes depends on their propensity to bind soft Lewis bases in living systems, the softness parameters which Pearson and Mawby subsequently proposed based on the relative energies of metal fluorine and metal iodine bonds^12 have been widely used as a tool for predicting metal ion toxicity.^13

### References

1. Pearson, R. G., Absolute electronegativity and absolute hardness of Lewis acids and bases. Journal of the American Chemical Society 1985, 107 (24), 6801-6806.
2. Pearson, R. G., Absolute electronegativity and hardness: application to inorganic chemistry. Inorganic Chemistry 1988, 27 (4), 734-740.
3. Drago, R. S.; Wayland, B. B., A Double-Scale Equation for Correlating Enthalpies of Lewis Acid-Base Interactions. Journal of the American Chemical Society 1965, 87 (16), 3571-3577.
4. Vogel, G. C.; Drago, R. S., The ECW Model. Journal of Chemical Education 1996, 73 (8), 701.
5. Drago, R. S. A modern approach to acid-base chemistry. Journal of Chemical Education 1974, 51 (5), 300
6. Hancock, R. D.; Martell, A. E., Hard and Soft Acid-Base Behavior in Aqueous Solution: Steric Effects Make Some Metal Ions Hard: A Quantitative Scale of Hardness-Softness for Acids and Bases. Journal of Chemical Education 1996, 73 (7), 654.
7. Drago, R. S.; Wong, N. M., The Role of Electron-Density Transfer and Electronegativity in Understanding Chemical Reactivity and Bonding. Journal of Chemical Education 1996, 73 (2), 123.
8. Drago, R. S., The interpretation of reactivity in chemical and biological systems with the E and C model. Coordination Chemistry Reviews 1980, 33 (3), 251-277.
9. Drago, R. S.; Bilgrien, C. J., Inductive transfer and coordination of ligands in metal—metal bonded systems. Polyhedron 1988, 7 (16), 1453-1468.
10. Drago, R. S., The question of a synergistic metal-metal interaction leading to .pi.-back-bond stabilization in dirhodium tetrabutyrate adducts. Inorganic Chemistry 1982, 21 (4), 1697-1698.
11. Drago, R. S.; Vogel, G. C., Interpretation of spectroscopic changes upon adduct formation and their use to determine electrostatic and covalent (E and C) parameters. Journal of the American Chemical Society 1992, 114 (24), 9527-9532.
12. Pearson, R. G.; Mawby, R. J. The Nature of Metal-Halogen Bonds in Gutmann, V. Halogen Chemistry, vol. 3. Academic Press: London, 1967, pp. 55-84.
13. Kinraide, T. B. Improved Scales for Metal Ion Softness and Toxicity Environmental Toxicology and Chemistry 2009, 28 (3), 525-533.

### Notes

* More precisely, the D parameters account for the difference in steric strain in the adduct relative to a water adduct of the Lewis acid.

## 6.6.2: Hard-Hard and Soft-Soft preferences may be explained and quantified in terms of electrostatic and covalent and electronic stabilization on the stability of Lewis acid-base adducts

### The Hard Soft Acid Base Principle is a Conceptual Tool for Thinking About Patterns of Lewis Acid-Base Reactivity

The explanation of the trends in metal distribution, halide salt solubility, and preferred metal coordination patterns is rooted in Arland, Chatt, and Davies' observation that Lewis acids and bases could be classified into two groups based on their propensity to form stable compounds with one another (e.g. acids in a class tend to form more stable adducts with bases in the same class than they did with bases in the other).^1 Arland, Chatt, and Davies somewhat boringly termed these groups class a and class b but today they are known by Ralph Pearson's name for them. Pearson called the class a acids and bases hard and class b acids and bases soft. These terms reflect how "soft" these substance's electron clouds are towards distortion or, in other words, their polarizability (Figure 6.6.2.1). Pearson terms acids and bases which are relatively polarizable soft and those which are difficult to polarize hard.

Figure 6.6.2.1: Polarizability refers to the ease with which a substance's electron cloud may be distorted under the action of an electric field. A fragment's polarizability determines the degree to which its electron cloud is distorted by A.) an Ion and B.) a polar molecule to induce a dipole moment. The figure is taken from (and the caption expanded from) Cox, Kelly and Dana Reusser "Polarizability"

### Recognizing Hard and Soft Acids and Bases

Hard acids and bases come in two varieties:

1. hard acid and base sites that possess few valence electrons and for which polarization therefore involves distorting core electrons, which are difficult to distort because they are close to the nucleus and experience a high nuclear charge. The most common examples of such substances are Lewis acid hard acids towards the left of the periodic table.
2. hard acid and base sites with a high charge density (highly charged relative to size) and/or which are electron deficient. In these cases polarization involves distorting electrons that already experience strong unshielded electrostatic interactions.

Soft acids and bases also come in two varieties

1. soft acids and bases which posses many valence electrons and so are more readily polarized. In consequence, all other things being equal, soft acids and bases are more likely to be found towards the middle or right of the periodic table.
2. soft acids and bases with little charge density and/or which are relatively electron rich.

Note that the hard-soft classification should not be thought of as if all hard acids and bases are equally hard and all soft acids and bases equally soft. There is a graduation in hardness and softness and a number of intermediate acids and bases which do not fit neatly in either category. With this caveat in mind, representative hard, soft, and borderline acids are given below. Notice how they illustrate the trends just outlined.

[Image not described in source]

As expected, hard acids tend to be found towards the left side of the periodic table and involve higher oxidation states and/or electron withdrawing substituents while soft acids are more common to the right of the periodic table and involve lower oxidation states and/or electron donating substituents.

[Note: corrected; the source prints "higher oxidation states and/or electron donating substituents" where this reads "higher oxidation states and/or electron withdrawing substituents". Electron-withdrawing substituents make an acid harder; donating ones, named for soft acids in the same sentence, make it softer.]

Illustrative hard, soft, and borderline bases are given below. Again, notice how these substances illustrate the general trends.

[Image not described in source]

### Qualitative Estimation of the Relative Hardness and Softness of Lewis Acids and Bases

As can be seen from the examples above, hard acids are relatively electron-poor and hard bases electron-rich since they have comparatively

- small frontier orbitals, reflective of their relatively small atom/ion/fragment sizes
- high (for acids) or low (for bases) oxidation states on the base atom, reflected in a large positive formal charge (for acids) or negative formal charge (for bases)
- low polarizability, due to loss or gain of substantial numbers of electrons, or the localization of
   - positive charge on an electropositive element or an atom bearing electron-withdrawing substituents
   - negative charge on an electronegative element or an atom bearing electron-donating substituents

In contrast to hard acids and bases, soft acids are relatively electron-rich and soft bases larger and more electron poor since they have comparatively

- large frontier orbitals, reflective of their relatively large atom/ion/fragment sizes
- low oxidation states, often resulting in small or nonexistent atomic charges
- high polarizability, as might be expected of species in which electron-electron repulsions are lower and electrons are spread over a large volume. Sometimes this is indicated by
   - positive charge on an electronegative element or an atom bearing electron-donating substituents
   - negative charge on an electropositive element or an atom bearing electron-withdrawing substituents

#### Exercise 6.6.2.1

Rank the acids or bases in each set in increasing order of expected hardness.

a. Cr^2+ and Cr^3+
b. H^+, Cs^+, and Tl^+
c. SCN^- (acting as a base at N) and SCN^- (acting as a base at S)
d. AlF3, AlH3, AlMe3
e. The side chains of the following proteinogenic amino acids

[Image not described in source]

**Answer**

(a) Cr^2+ < Cr^3+ All other things being equal, hardness increases with oxidation state.

(b) Tl^+ < Cs^+ < H^+ The order reflects Cs^+ and Tl^+'s larger size relative to H^+ (which doesn't possess any electrons that can be polarized anyway) and that Tl^+ still possesses two valence electrons while Cs^+ possesses none.

(c) SCN^- (acting as a base at S) < SCN^- (acting as a base at N). The order reflects the greater electronegativity of N than S and N's possession of a more negative formal charge of -1.

[Image not described in source]

(d) AlH3 < AlMe3 < AlF3. The hardness increases as the substituents on the Lewis acid Al center become less electron donating and more electron withdrawing (and, incidentally, harder bases) as their electronegativity increases in the order H^- < CH3^- < F^-. Note that the order of electron donating ability for H^- and CH3^- is the opposite observed for carbocations, for which hyperconjugation plays a larger role.

(e) Sec < Cys < Ser. The hardness increases as the electronegativity of the Lewis base chalcogen increases on going from a selenol to a thiol to an alcohol.

### The Hard-Soft Acid-Base Principle (HSAB Principle)

The Hard-Soft acid-base principle (HSAB Principle) explains patterns in Lewis acid-base reactivity in terms of a like reacts with like preference. Both thermodynamically and kinetically, hard acids prefer hard bases and soft acids soft bases. Specifically,

- Thermodynamically, hard acids form stronger acid-base complexes with hard bases while soft acids form stronger complexes with soft bases.
- Kinetically, hard acids/electrophiles react more quickly with hard bases/nucleophiles while soft acids/electrophiles react more quickly with soft bases/neucleophiles.

Applications of the HSAB principle include

1. Predicting the equilibrium or speed of Lewis acid-base metathesis and displacement reactions. In a Lewis acid-base metathesis reaction the acids and bases swap partners A1:B1 + A2:B2 ⇌ (k1, Keq) A1:B2 + A2:B1

For example, the equilibrium position of the metathesis reaction between TlF and K2S favors the products:

2TlF + K2S ⇌ Tl2S + 2KF

[Note: corrected; the source prints "2TlF + H2S ⇌" where this reads "2TlF + K2S ⇌". The text describes the reaction with K2S, and the product is 2KF.]

consistent with the HSAB's hard-hard and soft-soft preference.

[Image not described in source]

The HSAB principle also allows for prediction of the position of displacement reactions, in which a Lewis acid or base forms an adduct using a base or acid from an existing Lewis acid-base complex. In these reactions, the displacement of acid or base from the reactant complex may be thought of as a sort of metathesis reaction, one in which in the unbound acid or base switches places with one in the complex. For example, the reaction between HI and methylmercury cation

HI + CH3Hg^+ ⇌ CH3HgI + H^+

[Note: corrected; the source prints "HI + HgSCH3^+ ⇌ CH3SHgI + H^+" where this reads "HI + CH3Hg^+ ⇌ CH3HgI + H^+". The text describes the methylmercury cation reacting to give CH3HgI.]

involves displacement of an iodide from HI to give CH3HgI. The position of the equilibrium favors CH3HgI since both CH3Hg^+ and I^- are soft, while H^+ is a hard acid.

[Image not described in source]

#### Exercise 6.6.2.2

Predict the position of equilibrium for the following reaction.

Fe2O3 + 3Ag2S ⇌ Fe2S3 + 3Ag2O

**Answer**

The equilibrium will favor the reactants (K<1) since the hard-hard and soft-soft interactions in the reactants are more stable than the hard-soft interactions in the products.

[Image not described in source]

#### Exercise 6.6.2.3

Predict whether K for the following equilibria will be <<1, ~1, or >>1.

a. 2HF + (CH3Hg)2S ⇌ 2CH3HgF + H2S
b. Ag(NH3)2^+ + 2PH3 ⇌ Ag(PH3)2^+ + 2NH3
c. Ag(PH3)2^+ + 2H3B-SH2 ⇌ 2H3B-PH3 + Ag(SH2)2^+
d. H3B-NH3 + F3B-SH2 ⇌ H3B-SH2 + F3B-NH3

**Answer**

a. K< < 1 since the reactant adducts are hard-hard and soft-soft while the products involve hard-soft interactions.
b. K>>1 since the reactant complex, diamine silver(I), is a complex of a hard base, NH3, with the soft acid, Ag^+, while the product is a complex of the same soft acid with the soft base phosphine.
c. K~1 since all the adducts amongst the reactants and products involve soft acids and bases.
d. K>>1 since BH3 is a softer acid than BF3, so it will form a stronger complex with the softer base H2S while the harder BF3 forms a stronger complex with the harder base NH3.
2. Predicting the relative strengths of a given set of Lewis acids or bases towards a particular substrate. Consider, for example, the relative strengths of a BH3, BMe3, and BF3 towards group 15 hydrides like NH3, PH3, and AsH3. Of the boranes listed, the hardest acid BF3 is the strongest acid towards the hard base NH3 while BH3 is the strongest towards AsH3^(.†)

#### Exercise 6.6.2.4

Which acid will form the most stable complex with CO: BH3, BF3, or BMe3?

**Answer**

BH3. Since CO forms complexes primarily through its carbon lone pair, it is a soft base and so will form the strongest complex with the softest Lewis acid.

#### Exercise 6.6.2.5

When lactones react with nucleophiles, they can undergo ring opening reactions to give either an alcohol or a carboxylic acid, as shown for propiolactone below:

[Image not described in source]

In the reaction above, sterically unhindered alkoxides give one product and sterically unhindered thioalkoxides the other. Explain why this is the case and predict the products of the reaction between propiolactone and the sodium salts of ethoxide and thioethoxide.

**Answer**

The two reaction products correspond to nucleophilic attack at the lactones' two electrophilic carbon centers. Specifically, the acid is produced by attack at the softer C^I center of the CH2 directly attached to the ester oxygen and the alcohol by nucleophilic attack at the harder C^III center of the ester carbonyl.

[Image not described in source]

Consequently, it is reasonable to expect that the harder base ethoxide will nucleophilically attack the harder carbonyl carbon while the softer thioethoxide will attack the softer methylene carbon.

[Image not described in source]

### The theoretical interpretation of the hard-soft acid-base principle is that hard-hard preferences reflect superior electrostatic stabilization while soft-soft preferences reflect superior covalent stabilization.

The hard-hard and soft-soft preferences in Lewis acid-base interactions reflect that

- The lone pair of a hard base is strongly stabilized electrostatically by a hard acid.
- The lone pair of a soft base is strongly stabilized by forming a covalent bond with a soft acid.
- The lone pair of a hard or soft base is comparatively weakly stabilized by an acid opposite to it in hardness or softness since the overall electrostatic and covalent stabilization of the adduct is comparatively weak.

To see why this is the case it is helpful to divide the contributions to the interaction energy between an acid and a base as follows:

[Image not described in source]

Of the three contributions to the interaction energy, only the ionic and covalent terms directly relate to the hardness of the interacting acid and base. One approach to thinking about how hardness influences the ionic and covalent contributions is to consider the frontier orbitals involved in the acid-base interaction. This is sometimes done through the use of the Salem-Klopman equation,^(1,)* although in the treatment which follows a more qualitative approach will be employed.

Both hard acids and bases will have comparatively low energy HOMO levels and high energy LUMO levels, with a correspondingly high HOMO-LUMO gap. In contrast, soft acids and bases will have comparatively high-energy HOMO levels and low-energy LUMO levels, giving a comparatively smaller HOMO-LUMO gap.

[Image not described in source]

Given this, consider the frontier orbital interactions involved in the formation of an acid-base complex for the possible cases, as illustrated schematically below.

[Image not described in source]

The large gap in energy between hard bases’ highly stabilized HOMO lone pairs and the high energy LUMO of hard acids ensures that in hard acid-hard base adducts the dominant stabilizing interaction will involve electrostatic attraction between the base lone pair and the electropositive Lewis acid center. Fortunately, since the electron clouds in hard bases are relatively dense and electron rich while hard Lewis acids are highly charged and small, these electrostatic interactions are strong.

In contrast, in soft acid-soft base adducts, the dominant stabilizing interaction will be covalent. This is because the small gap in energy between a soft base HOMO and soft acid LUMO enables the formation of a well-stabilized bonding orbital with significant electron density between the acid and base.

The orbitals' interactions between hard acids and soft bases and soft acids and hard bases are intermediate between the hard acid-hard base and soft acid-soft base cases.

[Image not described in source]

This means that the adducts are stable relative to free acid and base – just not as well stabilized as in the hard acid and hard base case. In the case of hard acids and soft bases the hard acids are less able to stabilize the soft bases’ relatively diffuse electron pair electrostatically and there isn’t as much covalent stabilization as in adducts of soft acids and bases due to the hard acid’s high energy.

### References

1. Ahrland, S.; Chatt, J.; Davies, N. R., The relative affinities of ligand atoms for acceptor molecules and ions. Quarterly Reviews, Chemical Society 1958, 12 (3), 265-276.
2. Pearson, R. G., Hard and Soft Acids and Bases. Journal of the American Chemical Society 1963, 85 (22), 3533-3539.
3. Fleming, I., Molecular orbitals and organic chemical reactions. Reference ed.; Wiley: Hoboken, N.J., 2010.

### Notes

* Despite the fruitfulness of this observation, in general it is important to reduce the potential for observer bias by checking observations like these against compounds reported in the chemical literature and databases like the Inorganic Crystal Structure and Cambridge Crystallographic Databases.

** These are very soluble in water, to the point where some solutions are perhaps better described as solutions of water in the halide.

† This can be predicted based on the relative hardness of BF3, BR3, and BH3 in the list of hard and soft acids. However, for those of you who may be confused as to why H is considered a better electron donor for the purposes of softening a Lewis acid center while alkyl groups are better electron donors for the purposes of stabilizing carbocations in organic chemistry, the dominant effect is the lower electronegativity of H relative to carbon (in CH3). The effect of electron donation due to hyperconjugation isn't as great for thermodynamically stable bases like BX3/BR3.

†† For more on the Salem-Klopman equation see Fleming, I., Molecular orbitals and organic chemical reactions. Reference ed.; Wiley: Hoboken, N.J., 2010; pp. 138-143.
