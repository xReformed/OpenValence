---
title: "24.3: Controlled-Current Coulometry"
book: "Instrumental Analysis (LibreTexts)"
chapter: "24: Coulometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/24%3A_Coulometry/24.03%3A_Potentiostatic_Coulometry"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

A second approach to coulometry is to use a constant current in place of a constant potential, which results in the current-versus-time profile shown in Figure 24.3.1. Controlled-current coulometry has two advantages over controlled-potential coulometry. First, the analysis time is shorter because the current does not decrease over time. A typical analysis time for controlled-current coulometry is less than 10 min, compared to approximately 30–60 min for controlled-potential coulometry. Second, because the total charge is simply the product of current and time, there is no need to integrate the current-time curve in Figure 24.3.1.

Figure 24.3.1: Current versus time for a controlled-current coulometric analysis. The measured current is shown by the red curve. The integrated area under the curve, shown in blue, is the total charge.
Current versus time for a controlled-current coulometric analysis. The measured current is shown by the red curve. The integrated area under the curve, shown in blue, is the total charge.

Using a constant current presents us with two important experimental problems. First, during electrolysis the analyte’s concentration—and, therefore, the current that results from its oxidation or reduction—decreases continuously. To maintain a constant current we must allow the potential to change until another oxidation reaction or reduction reaction occurs at the working electrode. Unless we design the system carefully, this secondary reaction results in a current efficiency that is less than 100%. The second problem is that we need a method to determine when the analyte's electrolysis is complete. In a controlled-potential coulometric analysis we know that electrolysis is complete when the current reaches zero, or when it reaches a constant background or residual current. In a controlled-current coulometric analysis, however, current continues to flow even when the analyte’s electrolysis is complete. A suitable method for determining the reaction’s endpoint, t_e, is needed.

## Maintaining Current Efficiency

To illustrate why a change in the working electrode’s potential may result in a current efficiency of less than 100%, let’s consider the coulometric analysis for Fe^2+ based on its oxidation to Fe^3+ at a Pt working electrode in 1 M H2SO4.

Fe^2+(aq) ⇌ Fe^3+(aq) + e^−

Figure 24.3.2 shows the relevant potentials for this system. At the beginning of the analysis, the potential of the working electrode remains nearly constant at a level near its initial value.

Figure 24.3.2: Potential for the constant-current coulometric analysis of Fe^2+. The red arrow and text shows how the potential drifts to more positive values, decreasing the current efficiency.
Potential for the constant-current coulometric analysis of Fe(II). The red arrow and text shows how the potential drifts to more positive values, decreasing the current efficiency.

As the concentration of Fe^2+ decreases and the concentration of Fe^3+ increases, the working electrode’s potential shifts toward more positive values until the oxidation of H2O begins.

2H2O(l) ⇌ O2(g) + 4H^+(aq) + 4e^−

Because a portion of the total current comes from the oxidation of H2O, the current efficiency for the analysis is less than 100% and we cannot use the equation Q = it to determine the amount of Fe^2+ in the sample.

Although we cannot prevent the potential from drifting until another species undergoes oxidation, we can maintain a 100% current efficiency if the product of that secondary oxidation reaction both rapidly and quantitatively reacts with the remaining Fe^2+. To accomplish this we add an excess of Ce^3+ to the analytical solution. As shown in Figure 24.3.3, when the potential of the working electrode shifts to a more positive potential, Ce^3+ begins to oxidize to Ce^4+

Ce^3+(aq) ⇌ Ce^4+(aq) + e^−

Figure 24.3.3: Standard state reduction potentials for the constant-current coulometric analysis of Fe^2+ in the presence of a Ce^3+ mediator. As the potential drifts to more positive values, we eventually reach a potential where Ce^3+ undergoes oxidation. Because Ce^4+, the product of the oxidation of Ce^3+, reacts with Fe^2+, we maintain current efficiency.
Standard state reduction potentials for the constant-current coulometric analysis of Fe(II) in the presence of a Ce(III) mediator.

The Ce^4+ that forms at the working electrode rapidly mixes with the solution where it reacts with any available Fe^2+.

Ce^4+(aq) + Fe^2+(aq) ⇌ Ce^3+(aq) + Fe^3+(aq)

Combining reaction (ci3) and reaction (ci4) shows that the net reaction is the oxidation of Fe^2+ to Fe^3+

Fe^2+(aq) ⇌ Fe^3+(aq) + e^−

which maintains a current efficiency of 100%. A species used to maintain 100% current efficiency is called a mediator.

## Endpoint Determination

Adding a mediator solves the problem of maintaining 100% current efficiency, but it does not solve the problem of determining when the analyte's electrolysis is complete. Using the analysis for Fe^2+ in Figure 24.3.3, when the oxidation of Fe^2+ is complete current continues to flow from the oxidation of Ce^3+, and, eventually, the oxidation of H2O. What we need is a signal that tells us when no more Fe^2+ is present in the solution.

For our purposes, it is convenient to treat a controlled-current coulometric analysis as a reaction between the analyte, Fe^2+, and the mediator, Ce^3+, as shown by reaction (ci4). This reaction is identical to a redox titration; thus, we can use the end points for a redox titration—visual indicators and potentiometric or conductometric measurements—to signal the end of a controlled-current coulometric analysis. For example, ferroin provides a useful visual endpoint for the Ce^3+ mediated coulometric analysis for Fe^2+, changing color from red to blue when the electrolysis of Fe^2+ is complete.

[Note: reaction (ci4) is between Fe^2+ and Ce^4+, the titrant generated at the electrode from the mediator; the mediator itself, Ce^3+, does not react with Fe^2+ but is regenerated by the reaction.]

## Instrumentation

We can carry out controlled-current coulometry using the two-electrode galvanostat shown in Figure 24.3.4, which consists of a working electrode and a counter electrode. The working electrode—often a simple Pt electrode—also is called the generator electrode since it is where the mediator reacts to generate the species that reacts with the analyte. If necessary, the counter electrode is isolated from the analytical solution by a salt bridge or a porous frit to prevent its electrolysis products from reacting with the analyte. The current from the power supply through the working electrode is

i = (E_PS)/(R + R_cell)

where E_PS is the potential of the power supply, R is the resistance of the resistor, and R_cell is the resistance of the electrochemical cell. If R >> R_cell, then the current between the auxiliary and working electrodes

i = (E_PS)/R ≈ constant

maintains a constant value. To monitor the working electrode’s potential, which changes as the composition of the electrochemical cell changes, we can include an optional reference electrode and a high-impedance potentiometer.

Figure 24.3.4: Schematic diagram of a galvanostat: A is the auxiliary, or counter electrode; W is the working electrode; R is an optional reference electrode, E is a high-impedance potentiometer, and i is an ammeter. The working electrode and the optional reference electrode are connected to a ground. Although a modern galvanostat uses very different circuitry, we can use this figure and the accompanying discussion to understand how we can use the working electrode and the counter electrode to control the current. The galvanostat here includes an optional reference electrode, but its presence or absence is not important if we are not interested in monitoring the working electrode’s potential.
Schematic diagram of a galvanostat: A is the auxiliary, or counter electrode; W is the working electrode; R is an optional reference electrode, E is a high-impedance potentiometer, and i is an ammeter. The working electrode and the optional reference electrode are connected to a ground.

Alternatively, we can generate the oxidizing agent or the reducing agent externally, and allow it to flow into the analytical solution. Figure 24.3.5 shows one simple method for accomplishing this. A solution that contains the mediator flows into a small-volume electrochemical cell with the products exiting through separate tubes. Depending upon the analyte, the oxidizing agent or the reducing reagent is delivered to the analytical solution. For example, we can generate Ce^4+ using an aqueous solution of Ce^3+, directing the Ce^4+ that forms at the anode to our sample.

Figure 24.3.5: One example of a device for the external generation of oxidizing agents and reducing agents for controlled-current coulometry. A solution containing the mediator flows into a small-volume electrochemical cell. The resulting oxidation products, which form at the anode, flow to the right and serve as an oxidizing agent. Reduction at the cathode generates a reducing agent.
One example of a device for the external generation of oxidizing agents and reducing agents for controlled-current coulometry. A solution containing the mediator flows into a small-volume electrochemical cell. The resulting oxidation products, which form at the anode, flow to the right and serve as an oxidizing agent. Reduction at the cathode generates a reducing agent.

There are two other crucial needs for controlled-current coulometry: an accurate clock for measuring the electrolysis time, t_e, and a switch for starting and stopping the electrolysis. An analog clock can record time to the nearest ±0.01 s, but the need to stop and start the electrolysis as we approach the endpoint may result in an overall uncertainty of ±0.1 s. A digital clock allows for a more accurate measurement of time, with an overall uncertainty of ±1 ms. The switch must control both the current and the clock so that we can make an accurate determination of the electrolysis time.

## Coulometric Titrations

A controlled-current coulometric method sometimes is called a coulometric titration because of its similarity to a conventional titration. For example, in the controlled-current coulometric analysis for Fe^2+ using a Ce^3+ mediator, the oxidation of Fe^2+ by Ce^4+ (reaction (ci4)) is identical to the reaction in a redox titration.

There are other similarities between controlled-current coulometry and titrimetry. If we combine the equation Q = nFNA and the equation Q = ite and solve for the moles of analyte, N_A, we obtain the following equation.

[Note: corrected; the source prints "Q = nFNa" where this reads "Q = nFNA". The source writes N_a, with a lowercase subscript, for the moles of analyte N_A of Equation (intro1) in Section 24.1.]

NA = i/nF × te

Compare Equation (ci8) to the relationship between the moles of analyte, N_A, and the moles of titrant, N_T, in a titration

NA = NT = MT × VT

where M_T and V_T are the titrant’s molarity and the volume of titrant at the end point. In constant-current coulometry, the current source is equivalent to the titrant and the value of that current is analogous to the titrant’s molarity. Electrolysis time is analogous to the volume of titrant, and t_e is equivalent to a titration’s end point. Finally, the switch for starting and stopping the electrolysis serves the same function as a buret’s stopcock.

[Note: corrected; the source prints "equivalent to the a titration’s" where this reads "equivalent to a titration’s". A stray article.]

For simplicity, we assumed above that the stoichiometry between the analyte and titrant is 1:1. The assumption, however, is not important and does not affect our observation of the similarity between controlled-current coulometry and a titration.

[Note: corrected; the source prints "does not effect our" where this reads "does not affect our". To influence something is to "affect" it.]

## Quantitative Applications

The use of a mediator makes a coulometric titration a more versatile analytical technique than controlled-potential coulometry. For example, the direct oxidation or reduction of a protein at a working electrode is difficult if the protein’s active redox site lies deep within its structure. A coulometric titration of the protein is possible, however, if we use the oxidation or reduction of a mediator to produce a solution species that reacts with the protein. Table 24.3.1 summarizes several controlled-current coulometric methods based on a redox reaction using a mediator.

Table 24.3.1. Representative Examples of Coulometric Redox Titrations

| mediator | electrochemically generated reagent and reaction | representative application |
| --- | --- | --- |
| Ag^+ | Ag^+ ⇌ Ag^2+ + e^− | H2C2O4(aq) + 2Ag^2+(aq) + 2H2O(l) ⇌ 2CO2(g) + 2Ag^+(aq) + 2H3O^+(aq) |
| Br^– | 2Br^− ⇌ Br_2 + 2e^− | H_2S(aq) + Br2(aq) + 2H2O(l) ⇌ S(s) + 2Br^−(aq) + 2H3O^+(aq) |
| Ce^3+ | Ce^3+ ⇌ Ce^4+ + e^− | Fe(CN)_6^4–(aq) + Ce^4+(aq) ⇌ Fe(CN)6^3−(aq) + Ce^3+(aq) |
| Cl^– | 2Cl^− ⇌ Cl_2 + 2e^− | Tl(I)(aq) + Cl2(aq) ⇌ Tl(III)(aq) + 2Cl^−(aq) |
| Fe^3+ | Fe^3+ + e^− ⇌ Fe^2+ | Cr_2 O_7^2−(aq) + 6Fe^2+(aq) + 14H3O^+(aq) ⇌ 2Cr^3+(aq) + 6Fe^3+(aq) + 21H2O(l) |
| I^– | 3I^− ⇌ I_3^– + 2e^− | 2S2O3^2−(aq) + I3^−(aq) ⇌ S4O6^2−(aq) + 3I^−(aq) |
| Mn^2+ | Mn^2+ ⇌ Mn^3+ + e^− | As(III)(aq) + 2Mn^3+(aq) ⇌ As(V)(aq) + 2Mn^2+(aq) |
| Note: The electrochemically generated reagent and the analyte are shown in bold. |  |  |

[Note: corrected; the source prints "Ti(I)(aq) + Cl2(aq) ⇌ Ti(III)(aq)" where this reads "Tl(I)(aq) + Cl2(aq) ⇌ Tl(III)(aq)". The analyte is thallium, whose Tl(I)/Tl(III) couple is a two-electron change matching Cl2; titanium has no aqueous Ti(I).]

For an analyte that is not easy to oxidize or reduce, we can complete a coulometric titration by coupling a mediator’s oxidation or reduction to an acid–base, precipitation, or complexation reaction that involves the analyte. For example, if we use H2O as a mediator, we can generate H3O^+ at the anode

[Note: corrected; the source prints "H3O^+at the anode" where this reads "H3O^+ at the anode". A missing space.]

6H2O(l) ⇌ 4H3O^+(aq) + O2(g) + 4e^−

and generate OH^– at the cathode.

2H2O(l) + 2e^− ⇌ 2OH^−(aq) + H2(g)

If we carry out the oxidation or reduction of H2O using the generator cell in Figure 24.3.5, then we can selectively dispense H3O^+ or OH^– into a solution that contains the analyte. The resulting reaction is identical to that in an acid–base titration. Coulometric acid–base titrations have been used for the analysis of strong and weak acids and bases, in both aqueous and non-aqueous matrices. Table 24.3.2 summarizes several examples of coulometric titrations that involve acid–base, complexation, and precipitation reactions.

Table 24.3.2. Representative Coulometric Titrations Using Acid–Base, Complexation, and Precipitation Reactions

| type of reaction | mediator | electrochemically generated reagent and reaction | representative application |
| --- | --- | --- | --- |
| acid-base | H2O | 6H2O ⇌ 4H3O^+ + O2 + 4e^− | OH^−(aq) + H3O^+(aq) ⇌ 2H2O(l) |
| acid-base | H2O | 2H2O + 2e^− ⇌ 2OH^− + H2 | H3O^+(aq) + OH^−(aq) ⇌ 2H2O(l) |
| complexation | HgNH3Y^2– (Y = EDTA) | HgNH3Y^2− + NH4^+ + 2e^− ⇌ HY^3− + Hg + 2NH3 | Ca^2+(aq) + HY^3−(aq) + H2O(l) ⇌ CaY^2−(aq) + H3O^+(aq) |
| precipitation | Ag | Ag ⇌ Ag^+ + e^− | I^−(aq) + Ag^+(aq) ⇌ AgI(s) |
| precipitation | Hg | 2Hg ⇌ Hg2^2+ + 2e^− | 2Cl^−(aq) + Hg2^2+(aq) ⇌ Hg2Cl2(s) |
| precipitation | Fe(CN)6^3− | Fe(CN)6^3− + e^− ⇌ Fe(CN)6^4− | 3Zn^2+(aq) + 2K^+(aq) + 2Fe(CN)6^4−(aq) ⇌ K2Zn3[Fe(CN)6]2(s) |
| Note: The electrochemically generated reagent and the analyte are shown in bold. |  |  |  |

[Note: corrected; the source prints "4H3O^+ + O2 + e^−" where this reads "4H3O^+ + O2 + 4e^−"; the source prints "3Zn^2+(aq) + K^+(aq)" where this reads "3Zn^2+(aq) + 2K^+(aq)". Oxidizing six H2O to O2 releases four electrons, as the equation above the table shows; and K2Zn3[Fe(CN)6]2 needs two K^+ to balance both the potassium and the charge.]

In comparison to a conventional titration, a coulometric titration has two important advantages. The first advantage is that electrochemically generating a titrant allows us to use a reagent that is unstable. Although we cannot prepare and store a solution of a highly reactive reagent, such as Ag^2+ or Mn^3+, we can generate them electrochemically and use them in a coulometric titration. Second, because it is relatively easy to measure a small quantity of charge, we can use a coulometric titration to determine an analyte whose concentration is too small for a conventional titration.

The following example shows the calculations for a typical coulometric analysis.

### Example 24.3.1

To determine the purity of a sample of Na2S2O3, a sample is titrated coulometrically using I^– as a mediator and I3^− as the titrant. A sample weighing 0.1342 g is transferred to a 100-mL volumetric flask and diluted to volume with distilled water. A 10.00-mL portion is transferred to an electrochemical cell along with 25 mL of 1 M KI, 75 mL of a pH 7.0 phosphate buffer, and several drops of a starch indicator solution. Electrolysis at a constant current of 36.45 mA requires 221.8 s to reach the starch indicator endpoint. Determine the sample’s purity.

**Solution**

As shown in Table 24.3.1, the coulometric titration of S2O3^2− with I3^− is

2S2O3^2−(aq) + I3^−(aq) ⇌ S4O6^2−(aq) + 3I^−(aq)

The oxidation of S2O3^2− to S4O6^2− requires one electron per S2O3^2− (n = 1). Combining the equations Q = nFNA and Q = ite, and solving for the moles and grams of Na2S2O3 gives

NA = (ite)/nF = ((0.03645 A)(221.8 s))/(((1 mol e^−)/(mol Na2S2O3))((96487 C)/(mol e^−))) = 8.379 × 10^−5 mol Na2S2O3

This is the amount of Na2S2O3 in a 10.00-mL portion of a 100-mL sample; thus, there are 0.1325 grams of Na2S2O3 in the original sample. The sample’s purity, therefore, is

(0.1325 g Na2S2O3)/(0.1342 g sample ) × 100 = 98.73% w/w Na2S2O3

Note that for this calculation, it does not matter whether S2O3^2− is oxidized at the working electrode or is oxidized by I3^−.

[Note: corrected; the source prints "calcuation" where this reads "calculation". A typo.]
