---
title: "24.2: Controlled-Potential Coulometry"
book: "Instrumental Analysis (LibreTexts)"
chapter: "24: Coulometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/24%3A_Coulometry/24.02%3A_An_Introduction_to_Coulometric_Methods_of_Analysis"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

The easiest way to ensure 100% current efficiency is to hold the working electrode at a constant potential where the analyte is oxidized or reduced completely and where no potential interfering species are oxidized or reduced. As electrolysis progresses, the analyte’s concentration and the current decrease. The resulting current-versus-time profile for controlled-potential coulometry is shown in Figure 24.2.1. Integrating the area under the curve from t = 0 to t = t_e gives the total charge. In this section we consider the experimental parameters and instrumentation needed to develop a controlled-potential coulometric method of analysis and its applications.

Figure 24.2.1: Current versus time for a controlled-potential coulometric analysis. The measured current is shown by the red curve. The integrated area under the curve, shown in blue, is the total charge.
Current versus time for a controlled-potential coulometric analysis. The measured current is shown by the red curve. The integrated area under the curve, shown in blue, is the total charge.

## Selecting a Constant Potential

To understand how an appropriate potential for the working electrode is selected, let’s develop a constant-potential coulometric method for Cu^2+ based on its reduction to copper metal at a Pt working electrode.

Cu^2+(aq) + 2e^− ⇌ Cu(s)

Figure 24.2.2 shows the three reduction reactions that can take place in an aqueous solution of Cu^2+ and their standard state reduction potentials: the reduction of O2 to H2O, the reduction of Cu^2+ to Cu, and the reduction of H3O^+ to H2. From the diagram we know that reaction (cp1) is favored when the working electrode’s potential is more negative than +0.342 V versus the standard hydrogen electrode. To ensure a 100% current efficiency, however, the potential must be sufficiently more positive than +0.000 V so that the reduction of H3O^+ to H2 does not contribute significantly to the total current flowing through the electrochemical cell.

Figure 24.2.2: Standard state reduction potentials for an aqueous solution of Cu^2+ showing for the reductions of O2 to H2O, of Cu^2+ to Cu, and of H3O^+ to H2. For each reaction, the oxidized species is in blue and the reduced species is in red.
Standard state reduction potentials for an aqueous solution of copper(II) showing for the reductions of oxygen to water, of Cu(II) to Cu, and of the proton to hydrogen.

[Note: corrected; the source prints "of the proton to hydrogen.." where this reads "of the proton to hydrogen.". A doubled period.]

We can use the Nernst equation for reaction (cp1) to estimate the minimum potential for quantitatively reducing Cu^2+.

E = E_(Cu^2+/Cu)^o−(0.05916/2) log(1/([Cu^2+]))

So why are we using the concentration of Cu^2+ in Equation (cp2) instead of its activity as we did in Chapter 23 when we considered potentiometry? In potentiometry we used activity because we used E_cell to determine the analyte’s concentration. Here we use the Nernst equation to help us select an appropriate potential. Once we identify a potential, we can adjust its value as needed to ensure a quantitative reduction of Cu^2+. In addition, in coulometry the analyte’s concentration is given by the total charge, not the applied potential.

If we define a quantitative electrolysis as one in which we reduce 99.99% of Cu^2+ to Cu, then the concentration of Cu^2+ at t_e is

[Cu^2+]_te = 0.0001 × [Cu^2+]0

where [Cu^2+]0 is the initial concentration of Cu^2+ in the sample. Substituting Equation (cp3) into Equation (cp2) allows us to calculate the desired potential.

E = E_(Cu^2+/Cu)° − (0.05916/2) log(1/(0.0001 × [Cu^2+]0))

[Note: corrected; the source prints "0.0001 × [Cu^2+]))" where this reads "0.0001 × [Cu^2+]0))". Substituting Equation (cp3) puts the initial concentration [Cu^2+]0 into the equation, the value the next paragraph uses (1.00 × 10^−4 M gives +0.105 V).]

If the initial concentration of Cu^2+ is 1.00 × 10^−4 M, for example, then the working electrode’s potential must be more negative than +0.105 V to quantitatively reduce Cu^2+ to Cu. Note that at this potential H3O^+ is not reduced to H2, maintaining 100% current efficiency.

Many controlled-potential coulometric methods for Cu^2+ use a potential that is negative relative to the standard hydrogen electrode—see, for example, Rechnitz, G. A. Controlled-Potential Analysis, Macmillan: New York, 1963, p.49. Based on Figure 24.2.2 you might expect that applying a potential <0.000 V will partially reduce H3O^+ to H2, resulting in a current efficiency that is less than 100%. The reason we can use such a negative potential is that the reaction rate for the reduction of H3O^+ to H2 is very slow at a Pt electrode. This results in a significant overpotential—the need to apply a potential more positive or more negative than that predicted by thermodynamics—which shifts E^o for the H3O^+/H2 redox couple to a more negative value.

[Note: corrected; the source prints "more positive or a more negative than" where this reads "more positive or more negative than". A stray article.]

## Minimizing Electrolysis Time

In controlled-potential coulometry, as shown in Figure 24.2.1, the current decreases over time. As a result, the rate of electrolysis—recall from Chapter 22 that current is a measure of rate—becomes slower and an exhaustive electrolysis of the analyte may require a long time. Because time is an important consideration when designing an analytical method, we need to consider the factors that affect the analysis time.

We can approximate how the current changes as a function of time (Figure 24.2.1) as an exponential decay; thus, the current at time t is

it = i0 e^(−kt)

where i0 is the current at t = 0 and k is a rate constant that is directly proportional to the area of the working electrode and the rate of stirring, and that is inversely proportional to the volume of solution. For an exhaustive electrolysis in which we oxidize or reduce 99.99% of the analyte, the current at the end of the analysis, t_e, is

i_te ≤ 0.0001 × i0

Substituting Equation (cp6) into Equation (cp5) and solving for t_e gives the minimum time for an exhaustive electrolysis as

te = −1/k × ln(0.0001) = 9.21/k

From this equation we see that a larger value for k reduces the analysis time. For this reason we usually carry out a controlled-potential coulometric analysis in a small volume electrochemical cell, using an electrode with a large surface area, and with a high stirring rate. A quantitative electrolysis typically requires approximately 30–60 min, although shorter or longer times are possible.

## Instrumentation

We can use the three-electrode potentiostat in Figure (24.2.3) to set and control the potential in controlled-potential coulometry . The potential of the working electrode is measured relative to a constant-potential reference electrode that is connected to the working electrode through a high-impedance potentiometer. To set the working electrode’s potential we adjust the slide wire resistor that is connected to the auxiliary electrode. If the working electrode’s potential begins to drift, we adjust the slide wire resistor to return the potential to its initial value. The current flowing between the auxiliary electrode and the working electrode is measured with an ammeter. Of course, a modern potentiostat uses operational amplifiers to maintain the constant potential without our intervention.

[Note: corrected; the source prints "a modern potentionstat" where this reads "a modern potentiostat". A typo.]

Figure 24.2.3: Schematic diagram for a manual potentiostat: W is the working electrode; A is the auxiliary electrode; R is the reference electrode; SW is a slide-wire resistor, E is a high-impedance potentiometer; and i is an ammeter.
Schematic diagram for a manual potentiostat: W is the working electrode; A is the auxiliary electrode; R is the reference electrode; SW is a slide-wire resistor, E is a high-impedance potentiometer; and i is an ammeter.

[Note: corrected; the source prints "high-impendance" where this reads "high-impedance"; the source prints "high-impendance" where this reads "high-impedance". A typo, in both the caption and its alt text.]

The working electrode is usually one of two types: a cylindrical Pt electrode manufactured from platinum-gauze (Figure 24.2.4), or a Hg pool electrode. The large overpotential for the reduction of H3O^+ at Hg makes it the electrode of choice for an analyte that requires a negative potential. For example, a potential more negative than –1 V versus the SHE is feasible at a Hg electrode—but not at a Pt electrode—even in a very acidic solution. Because mercury is easy to oxidize, it is less useful if we need to maintain a potential that is positive with respect to the SHE. Platinum is the working electrode of choice when we need to apply a positive potential.

Figure 24.2.4: Example of a cylindrical Pt-gauze electrode used in controlled-potential coulometry. The electrode shown here has a diameter of 13 mm and a height of 48 mm, and was fashioned from Pt wire with a diameter of approximately 0.15 mm. The electrode’s surface has 360 openings/cm^2 and a total surface area of approximately 40 cm^2.
Example of a cylindrical Pt-gauze electrode used in controlled-potential coulometry. The electrode shown here has a diameter of 13 mm and a height of 48 mm, and was fashioned from Pt wire with a diameter of approximately 0.15 mm. The electrode’s surface has 360 openings/cm2 and a total surface area of approximately 40 cm2.

The auxiliary electrode, which often is a Pt wire, is separated by a salt bridge from the analytical solution. This is necessary to prevent the electrolysis products generated at the auxiliary electrode from reacting with the analyte and interfering in the analysis. A saturated calomel or Ag/AgCl electrode serves as the reference electrode.

The other essential need for controlled-potential coulometry is a means for determining the total charge. One method is to monitor the current as a function of time and determine the area under the curve, as shown in Figure 24.2.1. Modern instruments use electronic integration to monitor charge as a function of time. The total charge at the end of the electrolysis is read directly from a digital readout.

## Electrogravimetry

If the product of controlled-potential coulometry forms a deposit on the working electrode, then we can use the change in the electrode’s mass as the analytical signal. For example, if we apply a potential that reduces Cu^2+ to Cu at a Pt working electrode, the difference in the electrode’s mass before and after electrolysis is a direct measurement of the amount of copper in the sample. An analytical technique that uses mass as a signal is a gravimetric technique; thus, we call this electrogravimetry.

[Note: corrected; the source prints "as a signal a gravimetric" where this reads "as a signal is a gravimetric". The verb is missing.]

## Quantitative Applications

The majority of controlled-potential coulometric analyses involve the determination of inorganic cations and anions, including trace metals and halide ions. Table 24.2.1 summarizes several of these methods.

[Note: corrected; the source prints "halides ions" where this reads "halide ions". A typo.]

Table 24.2.1. Representative Controlled-Potential Coulometric Analyses for Inorganic Ions

| analyte | electrolytic reaction | electrode |
| --- | --- | --- |
| antimony | Sb(III) + 3e^− ⇌ Sb | Pt |
| arsenic | As(III) ⇌ As(V) + 2e^− | Pt |
| cadmium | Cd(II) + 2e^− ⇌ Cd | Pt or Hg |
| cobalt | Co(II) + 2e^− ⇌ Co | Pt or Hg |
| copper | Cu(II) + 2e^− ⇌ Cu | Pt or Hg |
| halides (X^–) | Ag + X^− ⇌ AgX + e^− | Ag |
| iron | Fe(II) ⇌ Fe(III) + e^− | Pt |
| lead | Pb(II) + 2e^− ⇌ Pb | Pt or Hg |
| nickel | Ni(II) + 2e^− ⇌ Ni | Pt or Hg |
| plutonium | Pu(III) ⇌ Pu(IV) + e^− | Pt |
| silver | Ag(I) + 1e^− ⇌ Ag | Pt |
| tin | Sn(II) + 2e^− ⇌ Sn | Pt |
| uranium | U(VI) + 2e^− ⇌ U(IV) | Pt or Hg |
| zinc | Zn(II) + 2e^− ⇌ Zn | Pt or Hg |
| Source: Rechnitz, G. A. Controlled-Potential Analysis, Macmillan: New York, 1963. Electrolytic reactions are written in terms of the change in the analyte’s oxidation state. The actual species in solution depends on the analyte. |  |  |

The ability to control selectivity by adjusting the working electrode’s potential makes controlled-potential coulometry particularly useful for the analysis of alloys. For example, we can determine the composition of an alloy that contains Ag, Bi, Cd, and Sb by dissolving the sample and placing it in a matrix of 0.2 M H2SO4 along with a Pt working electrode and a Pt counter electrode. If we apply a constant potential of +0.40 V versus the SCE, Ag(I) deposits on the electrode as Ag and the other metal ions remain in solution. When electrolysis is complete, we use the total charge to determine the amount of silver in the alloy. Next, we shift the working electrode’s potential to –0.08 V versus the SCE, depositing Bi on the working electrode. When the coulometric analysis for bismuth is complete, we determine antimony by shifting the working electrode’s potential to –0.33 V versus the SCE, depositing Sb. Finally, we determine cadmium following its electrodeposition on the working electrode at a potential of –0.80 V versus the SCE.

We also can use controlled-potential coulometry for the quantitative analysis of organic compounds, although the number of applications is significantly less than that for inorganic analytes. One example is the six-electron reduction of a nitro group, –NO2, to a primary amine, –NH2, at a mercury electrode. Solutions of picric acid—also known as 2,4,6-trinitrophenol, or TNP, a close relative of TNT—are analyzed by reducing it to triaminophenol.

[Note: corrected; the source prints "TNT—is analyzed" where this reads "TNT—are analyzed". The verb agrees with "Solutions".]

[Image: Solutions of picric acid—also known as 2,4,6-trinitrophenol, or TNP, a close relative of TNT—is analyzed by reducing it to triaminophenol.]

Another example is the successive reduction of trichloroacetate to dichloroacetate, and of dichloroacetate to monochloroacetate

Cl3CCOO^−(aq) + H3O^+(aq) + 2e^− ⇌ Cl2HCCOO^−(aq) + Cl^−(aq) + H2O(l)

Cl2HCCOO^−(aq) + H3O^+(aq) + 2e^− ⇌ ClH2CCOO^−(aq) + Cl^−(aq) + H2O(l)

We can analyze a mixture of trichloroacetate and dichloroacetate by selecting an initial potential where only the more easily reduced trichloroacetate reacts. When its electrolysis is complete, we can reduce dichloroacetate by adjusting the potential to a more negative potential. The total charge for the first electrolysis gives the amount of trichloroacetate, and the difference in total charge between the first electrolysis and the second electrolysis gives the amount of dichloroacetate.

### Example 24.2.1

One useful application of controlled-potential coulometry is determining the number of electrons involved in a redox reaction. To make the determination, we complete a controlled-potential coulometric analysis using a known amount of a pure compound. The total charge at the end of the electrolysis is used to determine the value of n using Faraday’s law. A 0.3619-g sample of tetrachloropicolinic acid, C6HNO2Cl4, is dissolved in distilled water, transferred to a 1000-mL volumetric flask, and diluted to volume. An exhaustive controlled-potential electrolysis of a 10.00-mL portion of this solution at a spongy silver cathode requires 5.374 C of charge. What is the value of n for this reduction reaction?

**Solution**

The 10.00-mL portion of sample contains 3.619 mg, or 1.39 × 10^−5 mol of tetrachloropicolinic acid. Solving for n gives

n = Q/(FNA) = (5.374 C)/((96487 C/mol e^−)(1.39 × 10^−5 mol C6HNO2Cl4)) = 4.01 mol e^−/mol C6HNO2Cl4

[Note: corrected; the source prints "96478 C/mol" where this reads "96487 C/mol". Transposed digits: the book gives Faraday’s constant as 96 487 C mol^–1 in Section 24.1 and Example 24.3.1; the result, 4.01, is the same either way.]

Thus, reducing a molecule of tetrachloropicolinic acid requires four electrons. The overall reaction, which results in the selective formation of 3,6-dichloropicolinic acid, is

[Image: Reducing a molecule of tetrachloropicolinic acid requires four electrons. The overall reaction, which results in the selective formation of 3,6-dichloropicolinic acid, is shown here.]
