---
title: "25.7: Applications of Voltammetry"
book: "Instrumental Analysis (LibreTexts)"
chapter: "25: Voltammetry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/25%3A_Voltammetry/25.07%3A_Voltammetry_with_Ultramicroelectrodes"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

Voltammetry finds use for both quantitative analyses and characterization analyses. Examples of each are highlighted in this section.

## Quantitative Applications

Voltammetry has been used for the quantitative analysis of a wide variety of samples, including environmental samples, clinical samples, pharmaceutical formulations, steels, gasoline, and oil.

### Selecting the Voltammetric Technique

The choice of which voltammetric technique to use depends on the sample’s characteristics, including the analyte’s expected concentration and the sample’s location. For example, amperometry is ideally suited for detecting analytes in flow systems, including the in vivo analysis of a patient’s blood or as a selective sensor for the rapid analysis of a single analyte. The portability of amperometric sensors, which are similar to potentiometric sensors, also make them ideal for field studies. Although cyclic voltammetry is used to determine an analyte’s concentration, other methods described in this chapter are better suited for quantitative work.

Pulse polarography and stripping voltammetry frequently are interchangeable. The choice of which technique to use often depends on the analyte’s concentration and the desired accuracy and precision. Detection limits for normal pulse polarography generally are on the order of 10^–6 M to 10^–7 M, and those for differential pulse polarography, staircase, and square wave polarography are between 10^–7 M and 10^–9 M. Because we concentrate the analyte in stripping voltammetry, the detection limit for many analytes is as little as 10^–10 M to 10^–12 M. On the other hand, the current in stripping voltammetry is much more sensitive than pulse polarography to changes in experimental conditions, which may lead to poorer precision and accuracy. We also can use pulse polarography to analyze a wider range of inorganic and organic analytes because there is no need to first deposit the analyte at the electrode surface.

Stripping voltammetry also suffers from occasional interferences when two metals, such as Cu and Zn, combine to form an intermetallic compound in the mercury amalgam. The deposition potential for Zn is sufficiently negative that any Cu^2+ in the sample also deposits into the mercury drop or film, leading to the formation of intermetallic compounds such as CuZn and CuZn2. During the stripping step, zinc in the intermetallic compounds strips at potentials near that of copper, decreasing the current for zinc at its usual potential and increasing the apparent current for copper. It is possible to overcome this problem by adding an element that forms a stronger intermetallic compound with the interfering metal. Thus, adding Ga^3+ minimizes the interference of Cu when analyzing for Zn by forming an intermetallic compound of Cu and Ga.

### Correcting for the Residual Current

In any quantitative analysis we must correct the analyte’s signal for signals that arise from other sources. The total current, i_tot, in voltammetry consists of two parts: the current from the analyte’s oxidation or reduction, i_A, and a background or residual current, i_r.

i_tot = iA + ir

The residual current, in turn, has two sources. One source is a faradaic current from the oxidation or reduction of trace interferents in the sample, i_int. The other source is the charging current, i_ch, that accompanies a change in the working electrode’s potential.

ir = i_int + i_ch

We can minimize the faradaic current due to impurities by carefully preparing the sample. For example, one important impurity is dissolved O2, which undergoes a two-step reduction: first to H2O2 at a potential of –0.1 V versus the SCE, and then to H2O at a potential of –0.9 V versus the SCE. Removing dissolved O2 by bubbling an inert gas such as N2 through the sample eliminates this interference. After removing the dissolved O2, maintaining a blanket of N2 over the top of the solution prevents O2 from reentering the solution.

There are two methods to compensate for the residual current. One method is to measure the total current at potentials where the analyte’s faradaic current is zero and extrapolate it to other potentials. This is the method shown in Figure 25.3.7. One advantage of extrapolating is that we do not need to acquire additional data. An important disadvantage is that an extrapolation assumes that any change in the residual current with potential is predictable, which may not be the case. A second, and more rigorous approach, is to obtain a voltammogram for an appropriate blank. The blank’s residual current is then subtracted from the sample’s total current.

### Analysis for Single Components

The analysis of a sample with a single analyte is straightforward using any of the standardization methods discussed in Chapter 1.

### Example 25.7.1

The concentration of As(III) in water is determined by differential pulse polarography in 1 M HCl. The initial potential is set to –0.1 V versus the SCE and is scanned toward more negative potentials at a rate of 5 mV/s. Reduction of As(III) to As(0) occurs at a potential of approximately –0.44 V versus the SCE. The peak currents for a set of standard solutions, corrected for the residual current, are shown in the following table.

| [As(III)] (µM) | i_p (µA) |
| --- | --- |
| 1.00 | 0.298 |
| 3.00 | 0.947 |
| 6.00 | 1.83 |
| 9.00 | 2.72 |

[Note: corrected; the source prints "i_p (µM)" where this reads "i_p (µA)". The peak current is a current, given in μA in the question (1.37 μA); µM is the unit of the concentration column.]

What is the concentration of As(III) in a sample of water if its peak current is 1.37 μA?

**Solution**

Linear regression gives the calibration curve shown in Figure 25.7.1, with an equation of

ip = 0.0176 + 0.301 × [As(III)]

[Note: corrected; the source prints "3.01 ×" where this reads "0.301 ×". A regression of the tabulated data gives a slope of 0.301 μA/μM, and only that slope gives the stated 4.49 μM from a peak current of 1.37 μA ((1.37 − 0.0176)/0.301 = 4.49).]

Substituting the sample’s peak current into the regression equation gives the concentration of As(III) as 4.49 μM.

<!-- end of example -->

Figure 25.7.1: Calibration curve for the data in Example 25.7.1.
Calibration curve for the data in Example 25.7.1.

### Multicomponent Analysis

Voltammetry is a particularly attractive technique for the analysis of samples that contain two or more analytes. Provided that the analytes behave independently, the voltammogram of a multicomponent mixture is a summation of each analyte’s individual voltammograms. As shown in Figure 25.7.2, if the separation between the half-wave potentials or between the peak potentials is sufficient, we can determine the presence of each analyte as if it is the only analyte in the sample. The minimum separation between the half-wave potentials or peak potentials for two analytes depends on several factors, including the type of electrode and the potential-excitation signal. For normal polarography the separation is at least ±0.2–0.3 V, and differential pulse voltammetry requires a minimum separation of ±0.04–0.05 V.

Figure 25.7.2: Voltammograms for a sample that contains two analytes showing the measurement of (a) limiting currents, and (b) peak currents.
Voltammograms for a sample that contains two analytes showing the measurement of (a) limiting currents, and (b) peak currents.

If the voltammograms for two analytes are not sufficiently separated, a simultaneous analysis may be possible. An example of this approach is outlined in the following example.

[Note: corrected; the source prints "is outlined the following" where this reads "is outlined in the following". A missing word.]

### Example 25.7.2

The differential pulse polarographic analysis of a mixture of indium and cadmium in 0.1 M HCl is complicated by the overlap of their respective voltammograms [Lanza P. J. Chem. Educ. 1990, 67, 704–705]. The peak potential for indium is at –0.557 V and that for cadmium is at –0.597 V. When a 0.800-ppm indium standard is analyzed, Δip (in arbitrary units) is 200.5 at –0.557 V and 87.5 at –0.597 V relative to a saturated Ag/AgCl reference electrode. A standard solution of 0.793 ppm cadmium has a Δip of 58.5 at –0.557 V and 128.5 at –0.597 V. What is the concentration of indium and cadmium in a sample if Δip is 167.0 at a potential of –0.557 V and 99.5 at a potential of –0.597V.

[Note: corrected; the source prints "electorde" where this reads "electrode". A typo.]

**Solution**

The change in current, Δip, in differential pulse polarography is a linear function of the analyte’s concentration

Δip = kA CA

where k_A is a constant that depends on the analyte and the applied potential, and C_A is the analyte’s concentration. To determine the concentrations of indium and cadmium in the sample we must first find the value of k_A for each analyte at each potential. For simplicity we will identify the potential of –0.557 V as E1, and that for –0.597 V as E2. The values of k_A are

k_(In, E1) = 200.5/(0.800 ppm) = 250.6 ppm^−1

k_(In, E2) = 87.5/(0.800 ppm) = 109.4 ppm^−1

k_CdE1 = 58.5/(0.793 ppm) = 73.8 ppm^−1

k_CdE2 = 128.5/(0.793 ppm) = 162.0 ppm^−1

Next, we write simultaneous equations for the current at the two potentials.

Δi_E1 = 167.0 = 250.6 ppm^−1 × C_In + 73.8 ppm^−1 × C_Cd

Δi_E2 = 99.5 = 109.4 ppm^−1 × C_In + 162.0 ppm^−1 × C_Cd

[Note: corrected; the source prints "△i_E2" where this reads "Δi_E2". The source sets this Δ as a triangle symbol, △; it is the same change in current as Δi_E1.]

Solving the simultaneous equations, which is left as an exercise, gives the concentration of indium as 0.606 ppm and the concentration of cadmium as 0.205 ppm.

### Environmental Samples

Voltammetry is one of several important analytical techniques for the analysis of trace metals in environmental samples, including groundwater, lakes, rivers and streams, seawater, rain, and snow. Detection limits at the parts-per-billion level are routine for many trace metals using differential pulse polarography, with anodic stripping voltammetry providing parts-per-trillion detection limits for some trace metals.

One interesting environmental application of anodic stripping voltammetry is the determination of a trace metal’s chemical form within a water sample. Speciation is important because a trace metal’s bioavailability, toxicity, and ease of transport through the environment often depends on its chemical form. For example, a trace metal that is strongly bound to colloidal particles generally is not toxic because it is not available to aquatic lifeforms. Unfortunately, anodic stripping voltammetry can not distinguish a trace metal’s exact chemical form because closely related species, such as Pb^2+ and PbCl^+, produce a single stripping peak. Instead, trace metals are divided into “operationally defined” categories that have environmental significance.

Operationally defined means that an analyte is divided into categories by the specific methods used to isolate it from the sample. There are many examples of operational definitions in the environmental literature. The distribution of trace metals in soils and sediments, for example, often is defined in terms of the reagents used to extract them; thus, you might find an operational definition for Zn^2+ in a lake sediment as that extracted using 1.0 M sodium acetate, or that extracted using 1.0 M HCl.

Although there are many speciation schemes in the environmental literature, we will consider one proposed by Batley and Florence [see (a) Batley, G. E.; Florence, T. M. Anal. Lett. 1976, 9, 379–388; (b) Batley, G. E.; Florence, T. M. Talanta 1977, 24, 151–158; (c) Batley, G. E.; Florence, T. M. Anal. Chem. 1980, 52, 1962–1963; (d) Florence, T. M., Batley, G. E.; CRC Crit. Rev. Anal. Chem. 1980, 9, 219–296]. This scheme, which is outlined in Table 25.7.1, combines anodic stripping voltammetry with ion-exchange and UV irradiation, dividing soluble trace metals into seven groups. In the first step, anodic stripping voltammetry in a pH 4.8 acetic acid buffer differentiates between labile metals and nonlabile metals. Only labile metals—those present as hydrated ions, weakly bound complexes, or weakly adsorbed on colloidal surfaces—deposit at the electrode and give rise to a signal. Total metal concentrations are determined by ASV after digesting the sample in 2 M HNO3 for 5 min, which converts all metals into an ASV-labile form.

[Note: corrected; the source prints "outlined in Table 25.7.2" where this reads "outlined in Table 25.7.1"; the source prints "Total metal concentration are" where this reads "Total metal concentrations are". The speciation scheme is Table 25.7.1 (Table 25.7.2 lists amperometric biosensors), and a later paragraph refers to Group II "in Table 25.7.1"; the second is a plural agreement slip.]

Table 25.7.1. Operational Speciation of Soluble Trace Metals

| method | speciation of soluble metals |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ASV | labile metals |  |  | nonlabile or bound metals |  |  |  |
| Ion-Exchange | removed | not removed |  | removed |  | not removed |  |
| UV Irradiation |  | released | not released | released | not released | released | not released |
| Groups | I | II | III | IV | V | VI | VII |
| Group I: free metal ions; weaker labile organic complexes and inorganic complexes |  |  |  |  |  |  |  |
| Group II: stronger labile organic complexes; labile metals absorbed on organic solids |  |  |  |  |  |  |  |
| Group III: stronger labile inorganic complexes; labile metals absorbed on inorganic solids |  |  |  |  |  |  |  |
| Group IV: weaker nonlabile organic complexes |  |  |  |  |  |  |  |
| Group V: weaker nonlabile inorganic complexes |  |  |  |  |  |  |  |
| Group VI: stronger nonlabile organic complexes; nonlabile metals absorbed on organic solids |  |  |  |  |  |  |  |
| Group VII: stronger nonlabile inorganic complexes; nonlabile metals absorbed on inorganic solids |  |  |  |  |  |  |  |
| Operational definitions of speciation from (a)Batley,G.E.;Florence,T.M.Anal.Lett.1976,9,379–388;(b)Batley,G.E.;Florence,T.M.Talanta1977,24,151–158; (c) Batley, G. E.; Florence, T. M. Anal. Chem. 1980, 52, 1962–1963; (d) Florence, T. M., Batley, G. E.; CRC Crit. Rev. Anal. Chem. 1980, 9, 219–296. |  |  |  |  |  |  |  |

A Chelex-100 ion-exchange resin further differentiates between strongly bound metals—usually metals bound to inorganic and organic solids, but also those tightly bound to chelating ligands—and more loosely bound metals. Finally, UV radiation differentiates between metals bound to organic phases and inorganic phases. The analysis of seawater samples, for example, suggests that cadmium, copper, and lead are present primarily as labile organic complexes or as labile adsorbates on organic colloids (Group II in Table 25.7.1).

Differential pulse polarography and stripping voltammetry are used to determine trace metals in airborne particulates, incinerator fly ash, rocks, minerals, and sediments. The trace metals, of course, are first brought into solution using a digestion or an extraction.

Amperometric sensors also are used to analyze environmental samples. For example, the dissolved O2 sensor described earlier is used to determine the level of dissolved oxygen and the biochemical oxygen demand, or BOD, of waters and wastewaters. The latter test—which is a measure of the amount of oxygen required by aquatic bacteria as they decompose organic matter—is important when evaluating the efficiency of a wastewater treatment plant and for monitoring organic pollution in natural waters. A high BOD suggests that the water has a high concentration of organic matter. Decomposition of this organic matter may seriously deplete the level of dissolved oxygen in the water, adversely affecting aquatic life. Other amperometric sensors are available to monitor anionic surfactants in water, and CO2, H2SO4, and NH3 in atmospheric gases.

### Clinical Samples

Differential pulse polarography and stripping voltammetry are used to determine the concentration of trace metals in a variety of clinical samples, including blood, urine, and tissue. The determination of lead in blood is of considerable interest due to concerns about lead poisoning. Because the concentration of lead in blood is so small, anodic stripping voltammetry frequently is the more appropriate technique. The analysis is complicated, however, by the presence of proteins that may adsorb to the mercury electrode, inhibiting either the deposition or stripping of lead. In addition, proteins may prevent the electrodeposition of lead through the formation of stable, nonlabile complexes. Digesting and ashing the blood sample minimizes this problem. Differential pulse polarography is useful for the routine quantitative analysis of drugs in biological fluids, at concentrations of less than 10^–6 M [Brooks, M. A. “Application of Electrochemistry to Pharmaceutical Analysis,” Chapter 21 in Kissinger, P. T.; Heinemann, W. R., eds. Laboratory Techniques in Electroanalytical Chemistry, Marcel Dekker, Inc.: New York, 1984, pp 539–568.]. Amperometric sensors using enzyme catalysts also have many clinical uses, several examples of which are shown in Table 25.7.2.

[Note: corrected; the source prints "mini- mizes" where this reads "minimizes". A leftover line-break hyphen.]

Table 25.7.2. Representative Amperometric Biosensors

| analyte | enzyme | species detected |
| --- | --- | --- |
| choline | choline oxidase | H2O2 |
| ethanol | alcohol oxidase | H2O2 |
| formaldehyde | formaldehyde dehydrogenase | NADH |
| glucose | glucose oxidase | H2O2 |
| glutamine | glutaminase, glutamine oxidase | H2O2 |
| glycerol | glycerol dehydrogenase | NADH, O2 |
| lactate | lactate oxidase | H2O2 |
| phenol | polyphenol oxidase | quinone |
| inorganic phosphorus | nucleoside phosphorylase | O2 |
| Source: Cammann, K.; Lemke, U.; Rohen, A.; Sander, J.; Wilken, H.; Winter, B. Angew. Chem. Int. Ed. Engl. 1991, 30, 516–539. |  |  |

[Note: corrected; the source prints "inorganic phosphorous" where this reads "inorganic phosphorus"; the source prints "nucleoside phosphoylase" where this reads "nucleoside phosphorylase". The element is phosphorus ("phosphorous" is the adjective), and the enzyme is nucleoside phosphorylase.]

### Miscellaneous Samples

In addition to environmental samples and clinical samples, differential pulse polarography and stripping voltammetry are used for the analysis of trace metals in other samples, including food, steels and other alloys, gasoline, gunpowder residues, and pharmaceuticals. Voltammetry is an important technique for the quantitative analysis of organics, particularly in the pharmaceutical industry where it is used to determine the concentration of drugs and vitamins in formulations. For example, voltammetric methods are available for the quantitative analysis of vitamin A, niacinamide, and riboflavin. When the compound of interest is not electroactive, it often can be derivatized to an electroactive form. One example is the differential pulse polarographic determination of sulfanilamide, which is converted into an electroactive azo dye by coupling with sulfamic acid and 1-naphthol.

[Note: corrected; the source prints "in other sample," where this reads "in other samples,"; the source prints "1-napthol" where this reads "1-naphthol". A missing plural, and the coupling reagent is 1-naphthol.]

In the previous section we learned how to use voltammetry to determine an analyte’s concentration in a variety of different samples. We also can use voltammetry to characterize an analyte’s properties, including verifying its electrochemical reversibility, determining the number of electrons transferred during its oxidation or reduction, and determining its equilibrium constant in a coupled chemical reaction.

## Characterization Applications

In a characterization application we study the properties of a system. Three examples are described here: determining if a redox reaction is electrochemically reversible, determining the number of electrons involved in the redox reaction, and studying metal-ligand complexation.

### Electrochemical Reversibility and Determination of n

Earlier in this chapter we derived a relationship between E1/2 and the standard-state potential for a redox couple using the Nernst equation, noting that a redox reaction must be electrochemically reversible. How can we tell if a redox reaction is reversible by looking at its voltammogram? As we learned in Chapter 25.3, for a reversible redox reaction the relationship between potential and current is

E = E½ − (0.05916/n) log(i/(il − i))

If a reaction is electrochemically reversible, a plot of E versus log(i/(il − i)) is a straight line with a slope of –0.05916/n. In addition, the slope should yield an integer value for n.

### Example 25.7.3

The following data were obtained from a linear scan hydrodynamic voltammogram of a reversible reduction reaction.

| E (V vs. SCE) | current (μA) |
| --- | --- |
| –0.358 | 0.37 |
| –0.372 | 0.95 |
| –0.382 | 1.71 |
| –0.400 | 3.48 |
| –0.410 | 4.20 |
| –0.435 | 4.97 |

The limiting current is 5.15 μA. Show that the reduction reaction is reversible, and determine values for n and for E1/2.

**Solution**

Figure 25.7.3 shows a plot of E versus log(i/(il − i)). Because the result is a straight-line, we know the reaction is electrochemically reversible under the conditions of the experiment. A linear regression analysis gives the equation for the straight line as

E = −0.391V−0.0300 log(i/(il − i))

From Equation (app3), the slope is equivalent to –0.05916/n; solving for n gives a value of 1.97, or 2 electrons. From Equation (app3) we also know that E1/2 is the y-intercept for a plot of E versus log(i/(il − i)); thus, E1/2 for the data in this example is –0.391 V versus the SCE.

<!-- end of example -->

Figure 25.7.3: Determination of electrochemical reversibility for the data in Example 25.7.3.
Determination of electrochemical reversibility for the data in Example 25.7.3.

We also can use cyclic voltammetry to evaluate electrochemical reversibility by looking at the difference between the peak potentials for the anodic and the cathodic scans. For an electrochemically reversible reaction, the following equation holds true.

ΔEp = E_(p, a) − E_(p, c) = (0.05916 V)/n

As an example, for a two-electron reduction we expect a ΔEp of approximately 29.6 mV. For an electrochemically irreversible reaction the value of ΔEp is larger than expected.

### Determining Equilibrium Constants for Coupled Chemical Reactions

Another important application of voltammetry is determining the equilibrium constant for a solution reaction that is coupled to a redox reaction. The presence of the solution reaction affects the ease of electron transfer in the redox reaction, shifting E1/2 to a more negative or to a more positive potential. Consider, for example, the reduction of O to R

O + ne^− ⇌ R

the voltammogram for which is shown in Figure 25.7.4. If we introduce a ligand, L, that forms a strong complex with O, then we also must consider the reaction

O + pL ⇌ OLp

In the presence of the ligand, the overall redox reaction is

OLp + ne^− ⇌ R + pL

Because of its stability, the reduction of the OL_p complex is less favorable than the reduction of O. As shown in Figure 25.7.4, the resulting voltammogram shifts to a potential that is more negative than that for O. Furthermore, the shift in the voltammogram increases as we increase the ligand’s concentration.

Figure 25.7.4: Effect of a metal-ligand complexation reaction on a voltammogram. The voltammogram in blue is for the reduction of O in the absence of ligand. Adding the ligand shifts the potentials to more negative potentials, as shown by the voltammograms in red.
Effect of a metal-ligand complexation reaction on a voltammogram. The voltammogram in blue is for the reduction of O in the absence of ligand. Adding the ligand shifts the potentials to more negative potentials, as shown by the voltammograms in red.

We can use this shift in the value of E1/2 to determine both the stoichiometry and the formation constant for a metal-ligand complex. To derive a relationship between the relevant variables we begin with two equations: the Nernst equation for the reduction of O

E = E_(O/R)° − (0.05916/n) log(([R]_(x=0))/([O]_(x=0)))

and the stability constant, βp for the metal-ligand complex at the electrode surface.

βp = ([OLp]_(x=0))/([O]_(x=0)[L]_(x=0)^p)

In the absence of ligand the half-wave potential occurs when [R]_(x=0) and [O]_(x=0) are equal; thus, from the Nernst equation we have

(E_1/2)_nc = E_(O/R)°

where the subscript “nc” signifies that the complex is not present. When ligand is present we must account for its effect on the concentration of O. Solving Equation (app9) for [O]_(x=0) and substituting into the Equation (app8) gives

E = E_(O/R)° − (0.05916/n) log(([R]_(x=0)[L]_(x=0)^pβp)/([OLp]_(x=0)))

If the formation constant is sufficiently large, such that essentially all O is present as the complex OL_p, then [R]_(x=0) and [OLp]_(x=0) are equal at the half-wave potential, and Equation (app11) simplifies to

(E_1/2)_c = E_(O/R)° − (0.05916/n) log[L]_(x=0)^pβp

where the subscript “c” indicates that the complex is present. Defining ΔE_1/2 as

ΔE_1/2 = (E_1/2)_c − (E_1/2)_nc

[Note: corrected; the source prints "△E_1/2" where this reads "ΔE_1/2". The source sets this Δ as a triangle symbol, △; it is the ΔE_1/2 defined in the sentence before.]

and substituting Equation (app10) and Equation (app12) and expanding the log term leaves us with the following equation.

ΔE_1/2 = −(0.05916/n) log βp − ((0.05916p)/n) log([L])

A plot of ΔE_1/2 versus log[L] is a straight-line, with a slope that is a function of the metal-ligand complex’s stoichiometric coefficient, p, and a y-intercept that is a function of its formation constant βp.

### Example 25.7.4

A voltammogram for the two-electron reduction (n = 2) of a metal, M, has a half-wave potential of –0.226 V versus the SCE. In the presence of an excess of ligand, L, the following half-wave potentials are recorded.

| [L] (M) | (E1/2)_c (V vs. SCE) |
| --- | --- |
| 0.020 | –0.494 |
| 0.040 | –0.512 |
| 0.060 | –0.523 |
| 0.080 | –0.530 |
| 0.100 | –0.536 |

Determine the stoichiometry of the metal-ligand complex and its formation constant.

**Solution**

We begin by calculating values of ΔE_1/2 using Equation (app13), obtaining the values in the following table.

| [L] (M) | ΔE_1/2 (V vs. SCE) |
| --- | --- |
| 0.020 | –0.268 |
| 0.040 | –0.286 |
| 0.060 | –0.297 |
| 0.080 | –0.304 |
| 0.100 | –0.310 |

Figure 25.7.5 shows the resulting plot of ΔE_1/2 as a function of log[L]. A linear regression analysis gives the equation for the straight line as

ΔE_1/2 = −0.370V−0.0601 log([L])

[Note: corrected; the source prints "△E_1/2" where this reads "ΔE_1/2". The source sets this Δ as a triangle symbol, △; it is the ΔE_1/2 of Equation (app14).]

From Equation (app14) we know that the slope is equal to –0.05916p/n. Using the slope and n = 2, we solve for p obtaining a value of 2.03 ≈ 2. The complex’s stoichiometry, therefore, is ML2. We also know, from Equation (app14), that the y-intercept is equivalent to –(0.05916/n)logβp. Solving for β2 gives a formation constant of 3.2 × 10^12.

<!-- end of example -->

Figure 25.7.5: Determination of the stoichiometry and formation constant for a metal-ligand complex using the data in Example 25.7.4.
Determination of the stoichiometry and formation constant for a metal-ligand complex using the data in Example 25.7.4.

Cyclic voltammetry is one of the most powerful electrochemical techniques for exploring the mechanism of coupled electrochemical and chemical reactions. The treatment of this aspect of cyclic voltammetry is beyond the level of this text, although you can consult this chapter’s additional resources for additional information.
