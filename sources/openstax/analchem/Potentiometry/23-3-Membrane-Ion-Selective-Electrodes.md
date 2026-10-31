---
title: "23.3: Membrane Ion-Selective Electrodes"
book: "Instrumental Analysis (LibreTexts)"
chapter: "23: Potentiometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/23%3A_Potentiometry/23.03%3A_Membrane_Indicator_Electrodes"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

If metals were the only useful materials for constructing indicator electrodes, then there would be few useful applications of potentiometry. In 1906, Cremer discovered that the potential difference across a thin glass membrane is a function of pH when opposite sides of the membrane are in contact with solutions that have different concentrations of H3O^+. The existence of this membrane potential led to the development of a new class of indicator electrodes, which we call ion-selective electrodes (ISEs). In addition to the glass pH electrode, ion-selective electrodes are available for a wide range of ions. It also is possible to construct a membrane electrode for a neutral analyte by using a chemical reaction to generate an ion that is monitored with an ion-selective electrode. The development of new ion-selective membrane electrodes continues to be an active area of research.

## Classification of Ion-Selective Membranes

[Note: corrected; the source prints "Ions-Selective" where this reads "Ion-Selective". A typo; the next heading reads "Properties of Ion-Selective Membranes".]

There are two broad classes of materials that are used as membranes: crystalline solid-state membranes and non-crystalline membranes. Examples of crystalline solid-state membranes are single crystals of LaF3 and polycrystalline Ag2S. Examples of non-crystalline membranes are glass and hydrophobic membranes that hold a liquid ion-exchanger. Each of these are considered below.

[Note: corrected; the source prints "polycrystalline AgS." where this reads "polycrystalline Ag2S."; the source prints "Examples non-crystalline" where this reads "Examples of non-crystalline". Silver sulfide is Ag2S, as in the polycrystalline membranes later in this section, and the second sentence is missing "of".]

## Properties of Ion-Selective Membranes

To be useful, an ion-selective membrane must be structurally stable (a crystalline membrane that is soluble, for example, is not structurally stable), capable of being machined to a suitable size and shape that can be incorporated into the indicator electrode in a potentiometric electrochemical cell, electrically conductive so it is possible to measure the electrochemical cell's potential, and selective toward the analyte.

### The Membrane's Boundary Potential

Figure 23.3.1 shows a typical potentiometric electrochemical cell equipped with an ion-selective electrode. The short hand notation for this cell is

ref (sample) ||A_samp(aq, a_A_samp = x)|membrane|A_int(aq, a_A_int = y)|| ref (internal)

where the ion-selective membrane separates the two solutions that contain analyte with activities of x and y: the sample solution and the ion-selective electrode’s internal solution. The potential of this electrochemical cell

E_cell = E_ref(int) − E_ref(samp) + E_mem

includes the potential of each reference electrode and the difference in potential across the membrane, E_mem, which is the membrane's boundary potential. The notations ref(sample) and ref(internal) represent a reference electrode immersed in the sample and a reference electrode immersed in the ion-selective electrode's internal solution. Because the potential of the two reference electrodes are constant, any change in E_cell reflects a change in the membrane’s boundary potential.

Figure 23.3.1: Schematic diagram that shows a typical potentiometric cell with an ion-selective electrode. The ion-selective electrode’s membrane separates the sample, which contains the analyte at an activity of (a_A)_samp, from an internal solution that contains the analyte with an activity of (a_A)_int.
Schematic diagram that shows a typical potentiometric cell with an ion-selective electrode.

The analyte’s interaction with the membrane generates a boundary potential if there is a difference in its activity on the membrane’s two sides. Current is carried through the membrane by the movement of either the analyte or an ion already present in the membrane’s matrix. The membrane potential is given by the following Nernst-like equation

E_mem = E_asym − (RT/zF) ln(((aA)_int)/((aA)_samp))

where (a_A)_samp is the analyte’s activity in the sample, (a_A)_int is the analyte’s activity in the ion-selective electrode’s internal solution, and z is the analyte’s charge. Ideally, E_mem is zero when (a_A)_int = (a_A)_samp. The term E_asym, which is an asymmetry potential, accounts for the fact that E_mem usually is not zero under these conditions.

For now we simply note that a difference in the analyte’s activity results in the membrane's boundary potential. As we consider different types of ion-selective electrodes, we will explore more specifically the source of the membrane potential.

Substituting Equation (membrane2) into Equation (membrane1), assuming a temperature of 25^oC, and rearranging gives

E_cell = K + (0.05916/z) log(aA)_samp

where K is a constant that includes the potentials of the two reference electrodes, the asymmetry potential, and the analyte's activity in the internal solution. Equation (membrane3) is a general equation and applies to all types of ion-selective electrodes.

### Membrane Selectivity

The membrane's boundary potential results from a chemical interaction between the analyte and active sites on the membrane’s surface. Because the signal depends on a chemical process, most membranes are not selective toward a single analyte. Instead, the membrane's boundary potential is proportional to the concentration of each ion that interacts with the membrane’s active sites. We can rewrite Equation (membrane3) to include the contribution to the potential of an interferent, I

E_cell = K + (0.05916/(zA)) log{aA + K_(A, I)(aI)^(zA/zI)}

where z_A and z_I are the charges of the analyte and the interferent, and K_(A,I) is a selectivity coefficient that accounts for the relative response of the interferent. The selectivity coefficient is defined as

K_(A, I) = ((aA)e)/((aI)e^(zA/zI))

where (a_A)_e and (a_I)_e are the activities of analyte and the interferent that yield identical cell potentials. When the selectivity coefficient is 1.00, the membrane responds equally to the analyte and the interferent. A membrane shows good selectivity for the analyte when K_(A,I) is significantly less than 1.00.

Selectivity coefficients for most commercially available ion-selective electrodes are provided by the manufacturer. If the selectivity coefficient is not known, it is easy to determine its value experimentally by preparing a series of solutions, each of which contains the same activity of interferent, (a_I)_add, but a different activity of analyte. As shown in Figure 23.3.2, a plot of cell potential versus the log of the analyte’s activity has two distinct linear regions. When the analyte’s activity is significantly larger than K_(A,I) × (a_I)_add, the potential is a linear function of log(a_A), as given by Equation (membrane3). If K_(A,I) × (a_I)_add is significantly larger than the analyte’s activity, however, the cell’s potential remains constant. The activity of analyte and interferent at the intersection of these two linear regions is used to calculate K_(A,I).

Figure 23.3.2: Diagram showing the experimental determination of an ion-selective electrode’s selectivity for an analyte. The activity of analyte that corresponds to the intersection of the two linear portions of the curve, (a_A)_inter, produces a cell potential identical to that of the interferent. The equation for the selectivity coefficient, K_(A,I), is shown in red.
Diagram showing the experimental determination of an ion-selective electrode’s selectivity for an analyte.

### Example 23.3.1

Sokalski and co-workers described a method for preparing ion-selective electrodes with significantly improved selectivities [Sokalski, T.; Ceresa, A.; Zwickl, T.; Pretsch, E. J. Am. Chem. Soc. 1997, 119, 11347–11348]. For example, a conventional Pb^2+ ISE has a log K_(Pb^2+/Mg^2+) of –3.6. If the potential for a solution in which the activity of Pb^2+ is 4.1 × 10^−12 is identical to that for a solution in which the activity of Mg^2+ is 0.01025, what is the value of log K_(Pb^2+/Mg^2+) for their ISE?

[Note: corrected; the source prints "Zwicki, T." where this reads "Zwickl, T.". The third author of the J. Am. Chem. Soc. 1997, 119, 11347 paper is Thomas Zwickl.]

**Solution**

Making appropriate substitutions into Equation (membrane5), we find that

K_(Pb^2+/Mg^2+) = ((a_(Pb^2+))e)/((a_(Mg^2+))e^(z_(Pb^2+)/z_(Mg^2+))) = (4.1 × 10^−12)/((0.01025)^(+2/ + 2)) = 4.0 × 10^−10

The value of log K_(Pb^2+/Mg^2+), therefore, is –9.40.

## The Glass Electrode for pH Measurements

The earliest ion-selective electrodes were based on the observation that a thin glass membrane separating two solutions with different levels of acidity develops a measurable difference in potential on opposite sides of the membrane. Incorporating the glass electrode into a potentiometer along with a reference electrode provides a way to measure the potential. Commercial glass membrane pH electrodes often are available in a combination form that includes both the indicator electrode and the reference electrode. The use of a single electrode greatly simplifies the measurement of pH. An example of a typical combination electrode is shown in Figure 23.3.3.

Figure 23.3.3: Schematic diagram showing a combination glass electrode for measuring pH. The indicator electrode consists of a pH-sensitive glass membrane and an internal Ag/AgCl reference electrode in a solution of 0.1 M HCl. The sample’s reference electrode is a Ag/AgCl electrode in a solution of KCl (which may be saturated with KCl or contain a fixed concentration of KCl). A porous wick serves as a salt bridge between the sample and its reference electrode.
Schematic diagram showing a combination glass electrode for measuring pH.

### The Composition and Structure of Glass Membranes

The first commercial glass electrodes were manufactured using Corning 015, a glass with a composition that is approximately 22% Na2O, 6% CaO, and 72% SiO2. Membranes fashioned from Corning 015 have an excellent selectivity for hydrogen ions, H^+, below a pH of 9; above this pH the membrane becomes more selective for other cations and the measured pH value deviates from its actual value. Replacing Na2O and CaO with Li2O and BaO extends the useful pH range of glass membranes to pH levels greater than 12.

### Origin of the Boundary Potential for a Glass Membrane

When immersed in an aqueous solution for several hours, the outer approximately 10 nm of the glass membrane’s surface becomes hydrated, resulting in the formation of negatively charged sites, —SiO^–. Sodium ions, Na^+, serve as counter ions. Because H^+ binds more strongly to —SiO^– than does Na^+, they displace the sodium ions on both sides of the membrane.

H^+ + −SiO^−Na^+ ⇌ −SiO^−H^+ + Na^+

explaining the membrane’s selectivity for H^+. The transport of charge across the membrane is carried by the Na^+ ions within the glass membrane. The potential of a glass electrode obeys the equation

E_cell = K + 0.05916 log a_(H^+)

### Alkaline and Acid Errors

As noted above, at sufficiently basic pH values a glass electrode no longer provides an accurate measure of a sample's pH as the membrane becomes more selective for other monovalent cations, such as Na^+ and K^+.

### Example 23.3.2

For a Corning 015 glass membrane, the selectivity coefficient KH^+/Na^+ is ≈ 10^−11. What is the expected error if we measure the pH of a solution in which the activity of H^+ is 2 × 10^−13 and the activity of Na^+ is 0.05?

**Solution**

A solution in which the activity of H^+, (aH^+)_act, is 2 × 10^−13 has a pH of 12.7. Because the electrode responds to both H^+ and Na^+, the apparent activity of H^+, (aH^+)_app, is

(a_(H^+))_app = (a_(H^+))_act + (K_(H^+/Na^+) × a_(Na^+)) = 2 × 10^−13 + (10^−11 × 0.05) = 7 × 10^−13

The apparent activity of H^+ is equivalent to a pH of 12.2, an error of –0.5 pH units.

<!-- end of example -->

Glass pH electrodes also show deviations from ideal behavior at pH levels less than 0.5, although the reasons for this are not clear. Still, a glass electrode has a wide dynamic range for measuring pH.

### Other Limitations to Glass Electrodes

Because an ion-selective electrode’s glass membrane is very thin—it is only about 50 μm thick—they must be handled with care to avoid cracks or breakage. Glass electrodes usually are stored in a storage buffer recommended by the manufacturer, which ensures that the membrane’s outer surface remains hydrated. If a glass electrode dries out, it is reconditioned by soaking for several hours in a solution that contains the analyte. The composition of a glass membrane will change over time, which affects the electrode’s performance. The average lifetime for a typical glass electrode is several years.

## Glass Electrodes for Other Cations

The observation that the Corning 015 glass membrane responds to ions other than H^+ led to the development of glass membranes with a greater selectivity for other cations. For example, a glass membrane with a composition of 11% Na2O, 18% Al2O3, and 71% SiO2 is used as an ion-selective electrode for Na^+. Other glass ion-selective electrodes have been developed for the analysis of Li^+, K^+, Rb^+, Cs^+, NH4^+, Ag^+, and Tl^+. Table 23.3.1 provides several examples.

Table 23.3.1. Representative Examples of Glass Membrane Ion-Selective Electrodes for Analytes Other Than H^+

| analyte | membrane composition | selectivity coefficients |
| --- | --- | --- |
| Na^+ | 11% Na2O, 18% Al2O3, 71% SiO2 | K_(Na^+/H^+) = 1000; K_(Na^+/K^+) = 0.001; K_(Na^+/Li^+) = 0.001 |
| Li^+ | 15% Li2O, 25% Al2O3, 60% SiO2 | K_(Li^+/Na^+) = 0.3; K_(Li^+/K^+) = 0.001 |
| K^+ | 27% Na2O, 5% Al2O3, 68% SiO2 | K_(K^+/Na^+) = 0.05 |
| Selectivity coefficients are approximate; values found experimentally may vary substantially from the listed values. See Cammann, K. Working With Ion-Selective Electrodes, Springer-Verlag: Berlin, 1977. |  |  |

## Crystalline Membrane Electrodes

A solid-state ion-selective electrode has a membrane that consists of either a polycrystalline inorganic salt or a single crystal of an inorganic salt. We can fashion a polycrystalline solid-state ion-selective electrode by sealing a 1–2 mm thick pellet of Ag2S—or a mixture of Ag2S and a second silver salt or another metal sulfide—into the end of a nonconducting plastic cylinder, filling the cylinder with an internal solution that contains the analyte, and placing a reference electrode into the internal solution. Figure 23.3.4 shows a typical design.

[Note: corrected; the source prints "pellet of AgS—or a mixture of AgS and" where this reads "pellet of Ag2S—or a mixture of Ag2S and". Silver sulfide is Ag2S, the membrane whose solubility reaction, Ag2S(s) ⇌ 2Ag^+(aq) + S^2−(aq), follows.]

The NaCl in a salt shaker is an example of polycrystalline material because it consists of many small crystals of sodium chloride. The NaCl salt plates used in IR spectroscopy, on the other hand, are an example of a single crystal of sodium chloride.

Figure 23.3.4: Schematic diagram of a solid-state electrode. The internal solution contains a solution of analyte of fixed activity.
Schematic diagram of a solid-state electrode. The internal solution contains a solution of analyte of fixed activity.

The membrane potential for a Ag2S pellet develops as the result of a difference in the extent of the solubility reaction

Ag2S(s) ⇌ 2Ag^+(aq) + S^2−(aq)

on the membrane’s two sides, with charge carried across the membrane by Ag^+ ions. When we use the electrode to monitor the activity of Ag^+, the cell potential is

E_cell = K + 0.05916 log a_(Ag^+)

The membrane also responds to the activity of S^2−, with a cell potential of

E_cell = K − (0.05916/2) log a_(S^2−)

If we combine an insoluble silver salt, such as AgCl, with the Ag2S, then the membrane potential also responds to the concentration of Cl^–, with a cell potential of

[Note: corrected; the source prints "Cl^(–,) with" where this reads "Cl^–, with". The comma after the ion is part of the sentence, not of the ion's charge.]

E_cell = K − 0.05916 log a_(Cl^−)

By mixing Ag2S with CdS, CuS, or PbS, we can make an ion-selective electrode that responds to the activity of Cd^2+, Cu^2+, or Pb^2+. In this case the cell potential is

E_cell = K + (0.05916/2) log a_(M^2+)

[Note: corrected; the source prints "ln a_(M^2+)" where this reads "log a_(M^2+)". The factor 0.05916 V is (RT/F) ln 10 at 25^oC, which goes with a base-10 log, as in every other cell-potential equation in this section.]

where aM^2+ is the activity of the metal ion.

Table 23.3.2 provides examples of polycrystalline, Ag2S-based solid-state ion-selective electrodes. The selectivity of these ion-selective electrodes depends on the relative solubility of the compounds. A Cl^– ISE using a Ag2S/AgCl membrane is more selective for Br^– (KCl^–/Br^– = 10^2) and for I^– (KCl^–/I^– = 10^6) because AgBr and AgI are less soluble than AgCl. If the activity of Br^– is sufficiently high, AgCl at the membrane/solution interface is replaced by AgBr and the electrode’s response to Cl^– decreases substantially. Most of the polycrystalline ion-selective electrodes listed in Table 23.3.2 operate over an extended range of pH levels. The equilibrium between S^2– and HS^– limits the analysis for S^2– to a pH range of 13–14.

Table 23.3.2. Representative Examples of Polycrystalline Solid-State Ion-Selective Electrodes

[Note: corrected; the source prints "23.3.2. Representative" where this reads "Table 23.3.2. Representative". The caption has lost the word "Table", which the captions of Tables 23.3.1 and 23.3.3 have.]

| analyte | membrane composition | selectivity coefficients |
| --- | --- | --- |
| Ag^+ | Ag2S | K_(Ag^+/Cu^2+) = 10^−6; K_(Ag^+/Pb^2+) = 10^−10; Hg^2+ interferes |
| Cd^2+ | CdS/Ag2S | K_(Cd^2+/Fe^2+) = 200; K_(Cd^2+/Pb^2+) = 6; Ag^+, Hg^2+, and Cu^2+ must be absent |
| Cu^2+ | CuS/Ag2S | K_(Cu^2+/Fe^3+) = 10; K_(Cu^2+/Cu^+) = 10^−6; Ag^+ and Hg^2+ must be absent |
| Pb^2+ | PbS/Ag2S | K_(Pb^2+/Fe^3+) = 1; K_(Pb^2+/Cd^2+) = 1; Ag^+, Hg^2+, and Cu^2+ must be absent |
| Br^– | AgBr/Ag2S | K_(Br^−/I^−) = 5000; K_(Br^−/Cl^−) = 0.005; K_(Br^−/OH^−) = 10^−5; S^2– must be absent |
| Cl^– | AgCl/Ag2S | K_(Cl^−/I^−) = 10^6; K_(Cl^−/Br^−) = 100; K_(Cl^−/OH^−) = 0.01; S^2– must be absent |
| I^– | AgI/Ag2S | K_(I^−/S^2−) = 30; K_(I^−/Br^−) = 10^−4; K_(I^−/Cl^−) = 10^−6; K_(I^−/OH^−) = 10^−7 |
| SCN^– | AgSCN/Ag2S | K_(SCN^−/I^−) = 10^3; K_(SCN^−/Br^−) = 100; K_(SCN^−/Cl^−) = 0.1; K_(SCN^−/OH^−) = 0.01; S^2– must be absent |
| S^2– | Ag2S | Hg^2+ must be absent |
| Selectivity coefficients are approximate; values found experimentally may vary substantially from the listed values. See Cammann, K. Working With Ion-Selective Electrodes, Springer-Verlag: Berlin, 1977. |  |  |

[Note: corrected; the source prints "= 0.1K_(SCN^−/OH^−)" where this reads "= 0.1; K_(SCN^−/OH^−)". Two separate selectivity coefficients, K_(SCN^−/Cl^−) = 0.1 and K_(SCN^−/OH^−) = 0.01, run together in the source.]

The membrane of a F^– ion-selective electrode is fashioned from a single crystal of LaF3, which usually is doped with a small amount of EuF2 to enhance the membrane’s conductivity. Because EuF2 provides only two F^– ions—compared to the three F^– ions in LaF3—each EuF2 produces a vacancy in the crystal’s lattice. Fluoride ions pass through the membrane by moving into adjacent vacancies. As shown in Figure 23.3.4, the LaF3 membrane is sealed into the end of a non-conducting plastic cylinder, which contains a standard solution of F^–, typically 0.1 M NaF, and a Ag/AgCl reference electrode.

The membrane potential for a F^– ISE results from a difference in the solubility of LaF3 on opposite sides of the membrane, with the potential given by

E_cell = K − 0.05916 log a_(F^−)

One advantage of the F^– ion-selective electrode is its freedom from interference. The only significant exception is OH^– (KF^–/OH^– = 0.1), which imposes a maximum pH limit for a successful analysis. Below a pH of 4 the predominate form of fluoride in solution is HF, which does not contribute to the membrane potential. For this reason, an analysis for fluoride is carried out at a pH greater than 4.

### Example 23.3.3

What is the maximum pH that we can tolerate if we need to analyze a solution in which the activity of F^– is 1 × 10^−5 with an error of less than 1%?

**Solution**

In the presence of OH^– the cell potential is

E_cell = K − 0.05916 log{a_(F^−) + K_(F^−/OH^−) × a_(OH^−)}

[Note: corrected; the source prints "K − 0.05916{a_(F^−)" where this reads "K − 0.05916 log{a_(F^−)". The cell potential depends on the log of the summed activities, as in Equation (membrane4) and the F^– electrode's E_cell = K − 0.05916 log a_(F^−) above.]

To achieve an error of less than 1%, the term K_(F^−/OH^−) × a_(OH^−) must be less than 1% of aF^–; thus

K_(F^−/OH^−) × a_(OH^−) ≤ 0.01 × a_(F^−)

0.10 × a_(OH^−) ≤ 0.01 × (1.0 × 10^−5)

Solving for a_OH^– gives the maximum allowable activity for OH^– as 1 × 10^−6, which corresponds to a pH of less than 8.

<!-- end of example -->

Unlike a glass membrane ion-selective electrode, a solid-state ISE does not need to be conditioned before it is used, and it may be stored dry. The surface of the electrode is subject to poisoning, as described above for a Cl^– ISE in contact with an excessive concentration of Br^–. If an electrode is poisoned, it can be returned to its original condition by sanding and polishing the crystalline membrane.

Poisoning simply means that the surface has been chemically modified, such as AgBr forming on the surface of a AgCl membrane.

## Liquid Membrane Electrodes

Another class of ion-selective electrodes uses a hydrophobic membrane that contains a liquid organic complexing agent that reacts selectively with the analyte. Three types of organic complexing agents have been used: cation exchangers, anion exchangers, and neutral ionophores. A membrane potential exists if the analyte’s activity is different on the two sides of the membrane. Current is carried through the membrane by the analyte.

An ionophore is a ligand whose exterior is hydrophobic and whose interior is hydrophilic. The crown ether shown here is one example of a neutral ionophore.

[Image: An ionophore is a ligand whose exterior is hydrophobic and whose interior is hydrophilic. The crown ether shown here is one example of a neutral ionophore.]

One example of a liquid-based ion-selective electrode is that for Ca^2+, which uses a porous plastic membrane saturated with the cation exchanger di-(n-decyl) phosphate. As shown in Figure 23.3.5, the membrane is placed at the end of a non-conducting cylindrical tube and is in contact with two reservoirs. The outer reservoir contains di-(n-decyl) phosphate in di-n-octylphenylphosphonate, which soaks into the porous membrane. The inner reservoir contains a standard aqueous solution of Ca^2+ and a Ag/AgCl reference electrode. Calcium ion-selective electrodes also are available in which the di-(n-decyl) phosphate is immobilized in a polyvinyl chloride (PVC) membrane that eliminates the need for the outer reservoir.

Figure 23.3.5: Schematic diagram showing a liquid-based ion-selective electrode for Ca^2+. The structure of the cation exchanger, di-(n-decyl) phosphate, is shown in red.
Schematic diagram showing a liquid-based ion-selective electrode for calcium.

The membrane potential for the Ca^2+ ISE develops as the result of a difference in the extent of the complexation reaction

Ca^2+(aq) + 2(C10H21O)2PO2^−(mem) ⇌ Ca[(C10H21O)2PO2]2(mem)

on the two sides of the membrane, where (mem) indicates a species that is present in the membrane. The cell potential for the Ca^2+ ion-selective electrode is

E_cell = K + (0.05916/2) log a_(Ca^2+)

[Note: corrected; the source prints "a_(ca^2+)" where this reads "a_(Ca^2+)". The ion is calcium, Ca^2+.]

The selectivity of this electrode for Ca^2+ is very good, with only Zn^2+ showing greater selectivity.

Table 23.3.3 lists the properties of several liquid-based ion-selective electrodes. An electrode using a liquid reservoir can be stored in a dilute solution of analyte and needs no additional conditioning before use. The lifetime of an electrode with a PVC membrane, however, is proportional to its exposure to aqueous solutions. For this reason these electrodes are best stored by covering the membrane with a cap along with a small amount of wetted gauze to maintain a humid environment. Before using the electrode it is conditioned in a solution of analyte for 30–60 minutes.

Table 23.3.3. Representative Examples of Liquid-Based Ion-Selective Electrodes

| analyte | membrane composition | selectivity coefficients |
| --- | --- | --- |
| Ca^2+ | di-(n-decyl) phosphate in PVC | K_(Ca^2+/Zn^2+) = 1–5; K_(Ca^2+/Al^3+) = 0.90; K_(Ca^2+/Mn^2+) = 0.38; K_(Ca^2+/Cu^2+) = 0.070; K_(Ca^2+/Mg^2+) = 0.032 |
| K^+ | valinomycin in PVC | K_(K^+/Rb^+) = 1.9; K_(K^+/Cs^+) = 0.38; K_(K^+/Li^+) = 10^−4 |
| Li^+ | ETH 149 in PVC | K_(Li^+/H^+) = 1; K_(Li^+/Na^+) = 0.03; K_(Li^+/K^+) = 0.007 |
| NH4^+ | nonactin and monactin in PVC | K_(NH4^+/K^+) = 0.12; K_(NH4^+/H^+) = 0.016; K_(NH4^+/Li^+) = 0.0042; K_(NH4^+/Na^+) = 0.002 |
| ClO4^− | Fe(o-phen)3^3+ in p-nitrocymene with porous membrane | K_(ClO4^−/OH^−) = 1; K_(ClO4^−/I^−) = 0.012; K_(ClO4^−/NO3^−) = 0.0015; K_(ClO4^−/Br^−) = 5.6 × 10^−4; K_(ClO4^−/Cl^−) = 2.2 × 10^−4 |
| NO3^− | tetradodecyl ammonium nitrate in PVC | K_(NO3^−/Cl^−) = 0.006; K_(NO3^−/F^−) = 9 × 10^−4 |
| Selectivity coefficients are approximate; values found experimentally may vary substantially from the listed values. See Cammann, K. Working With Ion-Selective Electrodes, Springer-Verlag: Berlin, 1977. |  |  |

[Note: corrected; the source prints "K_(Ca^2+/Zn^2+) = 1 − 5" where this reads "K_(Ca^2+/Zn^2+) = 1–5"; the source prints "| ClO3^− |" where this reads "| ClO4^− |"; the source prints "nitrate in pVC" where this reads "nitrate in PVC". The Ca^2+/Zn^2+ coefficient is a range from 1 to 5, not a subtraction; the electrode's selectivity coefficients are all for perchlorate, ClO4^−; and PVC is polyvinyl chloride, as in the rows above.]
