---
title: "23.4: Molecular-Selective Electrode Systems"
book: "Instrumental Analysis (LibreTexts)"
chapter: "23: Potentiometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/23%3A_Potentiometry/23.04%3A_Molecular-Selective_Electrode_Systems"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

The electrodes in Chapter 23.3 are selective toward ions. In this section we consider how we can incorporate an ion-selective electrode into an electrode that responds to neutral species, such as volatile analytes, such as CO2 and NH3, and biochemically important compounds, such as amino acids and urea.

## Gas-Sensing Membrane Electrodes

A number of membrane electrodes respond to the concentration of a dissolved gas. The basic design of a gas-sensing electrode, as shown in Figure 23.4.1, consists of a thin membrane that separates the sample from an inner solution that contains an ion-selective electrode. The membrane is permeable to the gaseous analyte, but impermeable to nonvolatile components in the sample’s matrix. The gaseous analyte passes through the membrane where it reacts with the inner solution, producing a species whose concentration is monitored by the ion-selective electrode. For example, in a CO2 electrode, CO2 diffuses across the membrane where it reacts in the inner solution to produce H3O^+.

CO2(aq) + 2H2O(l) ⇌ HCO3^−(aq) + H3O^+(aq)

The change in the activity of H3O^+ in the inner solution is monitored with a pH electrode, for which the cell potential, from Chapter 23.3, is

E_cell = K + 0.05916 log a_(H^+)

To find the relationship between the activity of H3O^+ in the inner solution and the activity of CO2 in the inner solution we rearrange the equilibrium constant expression for reaction (gas1); thus

a_(H3O^+) = K_a × (a_CO2)/(a_(HCO3^−))

where K_a is the equilibrium constant. If the activity of HCO3^− in the internal solution is sufficiently large, then its activity is not affected by the small amount of CO2 that passes through the membrane. Substituting Equation (gas3) into Equation (gas2) gives

E_cell = K^′ + 0.05916 log a_CO2

[Note: corrected; the source prints "a_co2" where this reads "a_CO2". The activity is that of carbon dioxide, CO2, as in Equation (gas3).]

where K′ is a constant that includes the constant for the pH electrode, the equilibrium constant for reaction (gas1) and the activity of HCO3^− in the inner solution.

Figure 23.4.1: Schematic diagram of a gas-sensing membrane electrode.
Schematic diagram of a gas-sensing membrane electrode.

Table 23.4.1 lists the properties of several gas-sensing electrodes. The composition of the inner solution changes with use, and both the inner solution and the membrane must be replaced periodically. Gas-sensing electrodes are stored in a solution similar to the internal solution to minimize their exposure to atmospheric gases.

Table 23.4.1. Representative Examples of Gas-Sensing Electrodes

| analyte | inner solution | reaction in inner solution | ion-selective electrode |
| --- | --- | --- | --- |
| CO2 | 10 mM NaHCO3; 10 mM NaCl | CO2(aq) + 2H2O(l) ⇌ HCO3^−(aq) + H3O^+(aq) | glass pH ISE |
| HCN | 10 mM KAg(CN)2 | HCN(aq) + H2O(l) ⇌ CN^−(aq) + H3O^+(aq) | Ag2S solid-state ISE |
| HF | 1 M H3O^+ | HF(aq) + H2O(l) ⇌ F^−(aq) + H3O^+(aq) | F^– solid-state ISE |
| H2S | pH 5 citrate buffer | H2S(aq) + H2O(l) ⇌ HS^−(aq) + H3O^+(aq) | Ag2S solid state ISE |
| NH3 | 10 mM NH4Cl; 0.1 M KNO3 | NH3(aq) + H2O(l) ⇌ NH4^+(aq) + OH^−(aq) | glass pH ISE |
| NO2 | 20 mM NaNO2; 0.1 M KNO3 | 2NO2(aq) + 3H2O(l) ⇌ NO3^−(aq) + NO2^−(aq) + 2H3O^+(aq) | glass pH ISE |
| SO2 | 1 mM NaHSO3; pH 5 | SO2(aq) + 2H2O(l) ⇌ HSO3^−(aq) + H3O^+(aq) | glass pH ISE |
| Source: Cammann, K. Working With Ion-Selective Electrodes, Springer-Verlag: Berlin, 1977. |  |  |  |

## Biocatalytic Membrane Electrodes

The approach for developing gas-sensing electrodes can be modified to create potentiometric electrodes that respond to a biochemically important species. The most common class of potentiometric biosensors are enzyme electrodes, in which we trap or immobilize an enzyme at the surface of a potentiometric electrode. The analyte’s reaction with the enzyme produces a product whose concentration is monitored by the potentiometric electrode. Potentiometric biosensors also have been designed around other biologically active species, including antibodies, bacterial particles, tissues, and hormone receptors.

One example of an enzyme electrode is the urea electrode, which is based on the catalytic hydrolysis of urea by urease

CO(NH2)2(aq) + 2H2O(l) ⇌ 2NH4^+(aq) + CO3^2−(aq)

[Note: corrected; the source prints "CO3^−(aq)" where this reads "CO3^2−(aq)". Carbonate carries a 2− charge; with CO3^− the equation's charges do not balance against the two NH4^+.]

Figure 23.4.2 shows one version of the urea electrode, which modifies a gas-sensing NH3 electrode by adding a dialysis membrane that traps a pH 7.0 buffered solution of urease between the dialysis membrane and the gas permeable membrane [(a) Papastathopoulos, D. S.; Rechnitz, G. A. Anal. Chim. Acta 1975, 79, 17–26; (b) Riechel, T. L. J. Chem. Educ. 1984, 61, 640–642]. An NH3 electrode, as shown in Table 23.4.1, uses a gas-permeable membrane and a glass pH electrode. The NH3 diffuses across the membrane where it changes the pH of the internal solution.

Figure 23.4.2: Schematic diagram showing an enzyme-based potentiometric biosensor for urea. A solution of the enzyme urease is trapped between a dialysis membrane and a gas permeable membrane. Urea diffuses across the dialysis membrane and reacts with urease, producing NH3 that diffuses across the gas permeable membrane. The resulting change in the internal solution’s pH is measured with the pH electrode.
Schematic diagram showing an enzyme-based potentiometric biosensor for urea. A solution of the enzyme urease is trapped between a dialysis membrane and a gas permeable membrane. Urea diffuses across the dialysis membrane and reacts with urease, producing NH3 that diffuses across the gas permeable membrane. The resulting change in the internal solution’s pH is measured with the pH electrode.

When immersed in the sample, urea diffuses through the dialysis membrane where it reacts with the enzyme urease to form the ammonium ion, NH4^+, which is in equilibrium with NH3.

NH4^+(aq) + H2O(l) ⇌ H3O^+(aq) + NH3(aq)

The NH3, in turn, diffuses through the gas permeable membrane where a pH electrode measures the resulting change in pH. The electrode’s response to the concentration of urea is

E_cell = K − 0.05916 log a_urea

Another version of the urea electrode (Figure 23.4.3) immobilizes the enzyme urease in a polymer membrane formed directly on the tip of a glass pH electrode [Tor, R.; Freeman, A. Anal. Chem. 1986, 58, 1042–1046]. In this case the response of the electrode is

pH = Ka_urea

Figure 23.4.3: Schematic diagram of an enzyme-based potentiometric biosensor for urea in which urease is immobilized in a polymer membrane coated onto the pH-sensitive glass membrane of a pH electrode.
Schematic diagram of an enzyme-based potentiometric biosensor for urea in which urease is immobilized in a polymer membrane coated onto the pH-sensitive glass membrane of a pH electrode.

Few potentiometric biosensors are available commercially. As shown in Figure 23.4.2 and Figure 23.4.3, however, it is possible to convert an ion-selective electrode or a gas-sensing electrode into a biosensor. Several representative examples are described in Table 23.4.2, and additional examples can be found in this chapter’s additional resources.

Table 23.4.2. Representative Examples of Potentiometric Biosensors

| analyte | biologically active phase | substance determined |
| --- | --- | --- |
| 5^′-AMP | AMP-deaminase (E) | NH3 |
| L-arginine | arginase and urease (E) | NH3 |
| asparagine | asparaginase (E) | NH4^+ |
| L-cysteine | Proteus morganii (B) | H2S |
| L-glutamate | yellow squash (T) | CO2 |
| L-glutamine | Sarcina flava (B) | NH3 |
| oxalate | oxalate decarboxylase (E) | CO2 |
| penicillin | penicillinase (E) | H3O^+ |
| L-phenylalanine | L-amino acid oxidase/horseradish peroxidase (E) | I^– |
| sugars | bacteria from dental plaque (B) | H3O^+ |
| urea | urease (E) | NH3 or H3O^+ |
| Source: Compiled from Cammann, K. Working With Ion-Selective Electrodes, Springer-Verlag: Berlin, 1977 and Lunte, C. E.; Heineman, W. R. “Electrochemical techniques in Bioanalysis,” in Steckhan, E. ed. Topics in Current Chemistry, Vol. 143, Springer-Verlag: Berlin, 1988, p.8. Abbreviations for biologically active phase: E = enzyme; B = bacterial particle; T = tissue. |  |  |

[Note: corrected; the source prints "arginine and urease (E)" where this reads "arginase and urease (E)"; the source prints "penicllinase" where this reads "penicillinase"; the source prints "Complied from" where this reads "Compiled from"; the source prints "Steckham, E." where this reads "Steckhan, E.". Arginine is the analyte, and the enzyme that hydrolyses it to urea is arginase; the other three are misspellings (the editor of Topics in Current Chemistry Vol. 143 is E. Steckhan).]
