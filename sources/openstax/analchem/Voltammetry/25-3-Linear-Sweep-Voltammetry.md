---
title: "25.3: Linear Sweep Voltammetry"
book: "Instrumental Analysis (LibreTexts)"
chapter: "25: Voltammetry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/25%3A_Voltammetry/25.03%3A_Hydrodynamic_Voltammetry"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

In the simplest voltammetric experiment we apply a linear potential ramp as an excitation signal and record the current that flows in response to the change in potential. Among the experimental variables under our control are the initial potential, the final potential, the scan rate, and whether we choose to stir the solution or leave it unstirred. We call this linear sweep voltammetry.

To illustrate how linear sweep voltammetry works, let's consider what happens when we reduce Fe(CN)6^3− to Fe(CN)6^4− at the working electrode. The relationship between the concentrations of Fe(CN)6^3−, the concentration of Fe(CN)6^4−, and the potential is given by the Nernst equation

E = +0.356 V−0.05916 log(([Fe(CN)6^4−]_(x=0))/([Fe(CN)6^3−]_(x=0)))

where +0.356V is the standard-state potential for the Fe(CN)6^3−/Fe(CN)6^4− redox couple, and x = 0 indicates that the concentrations of Fe(CN)6^3− and Fe(CN)6^4− are those at the surface of the working electrode. We use surface concentrations instead of bulk concentrations because the equilibrium position for the redox reaction

Fe(CN)6^3−(aq) + e^− ⇌ Fe(CN)6^4−(aq)

is established at the electrode’s surface.

Let’s assume we have a solution for which the initial concentration of Fe(CN)6^3− is 1.0 mM and that Fe(CN)6^4− is absent. Figure 25.3.1 shows the relationship between the applied potential and the species that are stable at the electrode's surface.

Figure 25.3.1: Potential diagram for the Fe(CN)6^3−/Fe(CN)6^4− redox half-reaction showing the potentials where Fe(CN)6^3− and where Fe(CN)6^4− are the dominant species. At a potential of +0.530 V, only Fe(CN)6^3− is stable at the electrode's surface.
Potential diagram for the ferricyanide/ferrocyanide redox half-reaction.

[Note: corrected; the source prints "the dominate species" where this reads "the dominant species"; the source prints "+0.30 V, only" where this reads "+0.530 V, only". "Dominate" is a typo; and at +0.30 V, below the standard-state potential of +0.356 V, the Nernst equation makes Fe(CN)6^4− the dominant species, so the potential where only Fe(CN)6^3− is stable is the +0.530 V used in the text below.]

If we apply a potential of +0.530 V to the working electrode, the concentrations of Fe(CN)6^3− and Fe(CN)6^4− at the surface of the electrode are unaffected, and no faradaic current is observed. If we switch the potential to +0.356 V some of the Fe(CN)6^3− at the electrode’s surface is reduced to Fe(CN)6^4−until we reach a condition where

[Fe(CN)6^3−]_(x=0) = [Fe(CN)6^4−]_(x=0) = 0.50 mM

If this is all that happens after we apply the potential, then there would be a brief surge of faradaic current that quickly returns to zero, which is not the most interesting of results (although this is the basis for chronoamperometry, an electrochemical method we will not consider in this text). Although the concentrations of Fe(CN)6^3− and Fe(CN)6^4− at the electrode surface are 0.50 mM, their concentrations in bulk solution remains unchanged.

Because of this difference in concentration, there is a concentration gradient between the electrode’s surface and the bulk solution. This concentration gradient creates a driving force that transports Fe(CN)6^4− away from the electrode and that transports Fe(CN)6^3− to the electrode (Figure 25.3.2). As the Fe(CN)6^3− arrives at the electrode it, too, is reduced to Fe(CN)6^4−. A faradaic current continues to flow until there is no difference between the concentrations of Fe(CN)6^3− and Fe(CN)6^4− at the electrode and their concentrations in bulk solution (although this might take a long time!).

Figure 25.3.2: Schematic diagram showing the transport of Fe(CN)6^4− away from the electrode’s surface and the transport of Fe(CN)6^3− toward the electrode’s surface following the reduction of Fe(CN)6^3− to Fe(CN)6^4−.
Schematic diagram showing the transport of ferrocyanide away from the electrode’s surface and the transport of ferricyanide toward the electrode’s surface following the reduction of ferricyanide to ferrocyanide.

Although the potential at the working electrode determines if a faradaic current flows, the magnitude of the current is determined by the rate of the resulting oxidation or reduction reaction. Two factors contribute to the rate of the electrochemical reaction: the rate at which the reactants and products are transported to and from the electrode—what we call mass transport—and the rate at which electrons pass between the electrode and the reactants and products in solution.

## Concentration Profiles at the Working Electrode

There are three modes of mass transport that affect the rate at which reactants and products move toward or away from the electrode surface: diffusion, migration, and convection. Diffusion occurs whenever the concentration of an ion or a molecule at the surface of the electrode is different from that in bulk solution. If we apply a potential sufficient to completely reduce Fe(CN)6^3− at the electrode surface, the result is a concentration gradient similar to that shown in Figure 25.3.3. The region of solution over which diffusion occurs is the diffusion layer. In the absence of other modes of mass transport, the width of the diffusion layer, δ, increases with time as the Fe(CN)6^3− must diffuse from an increasingly greater distance.

Figure 25.3.3: Concentration gradients (in red) for Fe(CN)6^3− following the application of a potential that completely reduces it to Fe(CN)6^4−. Before we apply the potential (t = 0) the concentration of Fe(CN)6^3− is the same at all distances from the electrode’s surface. After we apply the potential, its concentration at the electrode’s surface decreases to zero and Fe(CN)6^3− diffuses to the electrode from bulk solution. The longer we apply the potential, the greater the distance over which diffusion occurs. The dashed red line shows the extent of the diffusion layer at time t3. These profiles assume that convection and migration do not contribute significantly to the mass transport of Fe(CN)6^3−.
Concentration gradients (in red) for ferricyanide following the application of a potential that completely reduces it to ferrocyanide.

Convection occurs when we mix the solution, which carries reactants toward the electrode and removes products from the electrode. The most common form of convection is stirring the solution with a stir bar; other methods include rotating the electrode and incorporating the electrode into a flow-cell.

The final mode of mass transport is migration, which occurs when a charged particle in solution is attracted to or repelled from an electrode that carries a surface charge. If the electrode carries a positive charge, for example, an anion will move toward the electrode and a cation will move toward the bulk solution. Unlike diffusion and convection, migration affects only the mass transport of charged particles.

The movement of material to and from the electrode surface is a complex function of all three modes of mass transport. In the limit where diffusion is the only significant form of mass transport, the current, i, in a voltammetric cell is proportional to the slope of the concentration profile in Figure 25.3.3

i ∝ (∂C)/(∂x)

where C is the concentration of Fe(CN)6^3− and x is distance.

For Equation (lsv4) to be valid, convection and migration must not interfere with the formation of a diffusion layer. We can eliminate migration by adding a high concentration of an inert supporting electrolyte. Because ions of similar charge are equally attracted to or repelled from the surface of the electrode, each has an equal probability of undergoing migration. A large excess of an inert electrolyte ensures that few reactants or products experience migration. Although it is easy to eliminate convection by not stirring the solution, there are experimental designs where we cannot avoid convection, either because we must stir the solution or because we are using an electrochemical flow cell. Fortunately, as shown in Figure 25.3.4, the dynamics of a fluid moving past an electrode results in a small diffusion layer—typically 1–10 μm in thickness—in which the rate of mass transport by convection drops to zero.

Figure 25.3.4: Concentration gradient for Fe(CN)6^3− when stirring the solution. Diffusion is the only significant form of mass transport close to the electrode’s surface. At distances greater than δ, convection is the only significant form of mass transport, maintaining a homogeneous solution in which the concentration of Fe(CN)6^3− at δ is the same as its concentration in bulk solution.
Concentration gradient for ferricyanide when stirring the solution. Diffusion is the only significant form of mass transport close to the electrode’s surface.

### Concentration Profiles in an Unstirred Solution

Figure 25.3.5 shows the linear sweep voltammogram (the center image, which shows the current as a function of time) and eight snapshots of the concentration profiles for the reduction of Fe(CN)6^3− to Fe(CN)6^4− in an unstirred solution. The initial potential was set to +0.530 V and the final potential was set to +0.182 V with a scan rate of 0.050 V/s.

At the initial potential, only Fe(CN)6^3− is stable at the electrode surface, and no current flows. After 0.696 s the potential is 0.495 V (image to the left of the linear sweep voltammogram) and, because Fe(CN)6^3− remains stable at the electrode surface, no current flows. Moving clockwise around the linear sweep voltammogram, the applied potential becomes smaller and the concentration of Fe(CN)6^3− at the electrode surface decreases and the concentration of Fe(CN)6^4− increases. Initially the slope of the concentration gradient, and, therefore, the current increases; as the concentration of Fe(CN)6^3− at the electrode surface approaches zero, however, the concentration gradient becomes less steep and the current decreases. The result is the linear sweep voltammogram in the center of the diagram.

Figure 25.3.5: The central image shows the linear sweep voltammogram in an unstirred solution for the reduction of Fe(CN)6^3− to Fe(CN)6^4−. The remaining images show the concentration profiles for Fe(CN)6^3− (in blue) and for Fe(CN)6^4− (in red) as the potential is swept from +0.530 V to +0.182 V (arranged clockwise, beginning immediately left of the linear sweep voltammogram).
The central image shows the linear sweep voltammogram in an unstirred solution for the reduction of ferricyanide to ferrocyanide. The remaining images show the concentration profiles for ferricyanide (in blue) and for ferrocyanide (in red) as the potential is swept from +0.530 V to +0.182 V.

[Note: corrected; the source prints "of the linear sweep voltammogram." where this reads "of the linear sweep voltammogram).". The parenthesis is never closed.]

### Concentration Profiles in a Stirred Solution

If we run the same experiment as in Figure 25.3.5, but stir the solution, the resulting linear sweep voltammogram and concentration profiles are those in Figure 25.3.6. Stirring the solution, as we saw in Figure 25.3.4 creates a diffusion layer whose thickness is independent of time.

Figure 25.3.6: The central image shows the linear sweep voltammogram in a stirred solution for the reduction of Fe(CN)6^3− to Fe(CN)6^4−. The remaining images show the concentration profiles for Fe(CN)6^3− (in blue) and for Fe(CN)6^4− (in red) as the potential is swept from +0.530 V to +0.182 V (arranged clockwise, beginning immediately left of the linear sweep voltammogram).
The central image shows the linear sweep voltammogram in a stirred solution for the reduction of ferricyanide to ferrocyanide. The remaining images show the concentration profiles for ferricyanide (in blue) and for ferrocyanide (in red) as the potential is swept from +0.530 V to +0.182 V.

[Note: corrected; the source prints "of the linear sweep voltammogram." where this reads "of the linear sweep voltammogram).". The parenthesis is never closed.]

As a result, instead of the peak current in Figure 25.3.5, the current reaches a steady-state value, which we call the limiting current, il. The linear sweep voltammogram also has a characteristic half-wave potential, E_1/2, when the current is 50% of the limiting current. Figure 25.3.7 shows how the limiting current and half-wave potential are measured.

Figure 25.3.7: The limiting current and half-wave potential for a linear sweep voltammetry experiment in a stirred solution.
The limiting current and half-wave potential for a linear sweep voltammetry experiment in a stirred solution.

## Voltammetric Currents

Earlier we noted, in Equation (lsv4), that the current in linear sweep voltammetry is proportional to the slope of the concentration profile. The current is also a function of other variables, as shown here for the reduction of Fe(CN)6^3− to Fe(CN)6^4−

i = (nFAD([Fe(CN)6^3-]_bulk−[Fe(CN)6^3-]_(x = 0)))/δ

where n the number of electrons in the redox reaction, F is Faraday’s constant, A is the area of the electrode, D is the diffusion coefficient for Fe(CN)6^3−, δ is the thickness of the diffusion layer, and ([Fe(CN)6^3-]_bulk−[Fe(CN)6^3-]_(x = 0)) is the difference in the concentration of Fe(CN)6^3- between the bulk solution and the electrode's surface.

Because n, F, A, and D are constants, and because δ is a constant if we stir the solution, we can write Equation (lsv5) as

i = K_(Fe(CN)6^3-)([Fe(CN)6^3-]_bulk−[Fe(CN)6^3-]_(x = 0))

where K_(Fe(CN)6^3-) is a constant. If we use the limiting current, then [Fe(CN)6^3-]_(x = 0) is zero, and Equation (lsv6) becomes

il = K_(Fe(CN)6^3-)[Fe(CN)6^3-]_bulk

### Current/Voltage Relationships for Reversible Reactions

A reversible electrochemical reaction is one in which the concentration of the oxidized and reduced species at the electrode surface remain in thermodynamic equilibrium with each other. When this is true, the Nernst equation explains the relationship between the applied potential, their concentration, and the standard state potential.

Equation (lsv7) shows us that the limiting current is a measure of the concentration of Fe(CN)6^3− in bulk solution, which means we can use the limiting current for quantitative work. Figure 25.3.7 also shows that there is a qualitative relationship between the half-wave potential, E_1/2, and the limiting current; however, it is not yet clear what the half-wave potential represents.

If we solve Equation (lsv7) for [Fe(CN)6^3-]_bulk and substitute into Equation (lsv6) and rearrange, we have

[Fe(CN)6^3-]_(x = 0) = (il − i)/(K_(Fe(CN)6^3-))

If we take the same approach with Fe(CN)6^4−, which forms at the electrode surface, then we have

[Note: corrected; the source prints "forms at the electrode solution" where this reads "forms at the electrode surface". Fe(CN)6^4− forms at the electrode's surface, where Fe(CN)6^3− is reduced.]

i = −(nFAD([Fe(CN)6^4-]_bulk−[Fe(CN)6^4-]_(x = 0)))/δ = K_(Fe(CN)6^4-)[Fe(CN)6^4-]_(x = 0)

[Fe(CN)6^4-]_(x = 0) = i/(K_(Fe(CN)6^4-))

[Note: corrected; the source prints "= (−i)/(K_(Fe(CN)6^4-))" where this reads "= i/(K_(Fe(CN)6^4-))". Solving the equation above, i = K_(Fe(CN)6^4-)[Fe(CN)6^4-]_(x = 0), gives i/K_(Fe(CN)6^4-); the minus sign is already taken up in that equation.]

where the minus sign accounts for the concentration profile having a negative slope. Substituting Equation (lsv8) and Equation (lsv10) into Equation (lsv1), which is the Nernst equation, gives

[Note: corrected; the source prints "Substituting Equation (lsv9)" where this reads "Substituting Equation (lsv8)"; the source prints "the Nersnt equation" where this reads "the Nernst equation". The surface concentrations substituted into the Nernst equation are those of Equation (lsv8), for Fe(CN)6^3−, and Equation (lsv10), for Fe(CN)6^4−; "Nersnt" is a typo.]

E = E° − 0.05916 log((i/K_(Fe(CN)6^4-))/((il − i)/K_(Fe(CN)6^3-)))

[Note: corrected; the source prints "log((−i/K_(Fe(CN)6^4-))" where this reads "log((i/K_(Fe(CN)6^4-))". The surface concentration of Fe(CN)6^4− is i/K_(Fe(CN)6^4-) (Equation (lsv10)); with −i the logarithm would be of a negative number.]

E = E° + 0.05916 log((K_(Fe(CN)6^4-))/(K_(Fe(CN)6^3-))) − 0.05916 log(i/(il − i))

[Note: corrected; the source prints "log((K_(Fe(CN)6^3-))/(K_(Fe(CN)6^4-)))" where this reads "log((K_(Fe(CN)6^4-))/(K_(Fe(CN)6^3-)))". Splitting the logarithm of Equation (lsv11) gives −0.05916 log(K_(Fe(CN)6^3-)/K_(Fe(CN)6^4-)), which is +0.05916 log(K_(Fe(CN)6^4-)/K_(Fe(CN)6^3-)).]

When i = il/2, which is the definition of E_1/2, Equation (lsv12) simplifies to

[Note: corrected; the source prints "When i = (il − i)/2" where this reads "When i = il/2". The half-wave potential is where the current is half the limiting current, as defined earlier in this section; then i/(il − i) = 1 and the last term of Equation (lsv12) vanishes.]

E_1/2 = E° + 0.05916 log((K_(Fe(CN)6^4-))/(K_(Fe(CN)6^3-)))

[Note: corrected; the source prints "log((K_(Fe(CN)6^3-))/(K_(Fe(CN)6^4-)))" where this reads "log((K_(Fe(CN)6^4-))/(K_(Fe(CN)6^3-)))". This follows from the corrected Equation (lsv12).]

The only difference between K_(Fe(CN)6^3-) and K_(Fe(CN)6^4-) are the diffusion coefficients, D, for Fe(CN)6^3- and for Fe(CN)6^4-. As these values should be similar, we have

E_1/2 ≈ E°

and E_1/2 provides an estimate for the standard state reduction potential.

### Current/Voltage Relationships for Irreversible Reactions

When an electrochemical reaction is not reversible, the Nernst equation no longer applies, which means we can no longer assume that the half-wave potential provides an estimate for the standard state reduction potential. The relationship between the limiting current and the concentration of the electroactive species in bulk solution still holds true and quantitative work remains possible.

## Oxygen Waves

The presence of dissolved oxygen creates a complication as it is capable of undergoing reduction reactions at the electrode's surface that may interfere with the determination of the analyte's limiting current or half-wave potential. For example, O2 is reduced to H2O2 with a standard state potential of +0.695 V

O2(g) + 2H^+(aq) + 2e^− ⇌ H2O2(aq)

and H2O2 subsequently is reduced to H2O at a standard state potential of +1.763 V.

H2O2(aq) + 2H^+(aq) + 2e^− ⇌ 2H2O(aq)

This is the reason that a typical cell for voltammetry (see Figure 25.2.5) includes the ability to pass N2 through the solution to remove dissolved O2. Once the solution is deaerated, N2 is allowed to flow over the solution to prevent O2 from reentering the solution.

## Applications of Linear Sweep Voltammetry

As we learned earlier in this section, the limiting current in linear sweep voltammetry is proportional to the concentration of the species undergoing oxidation or reduction at the electrode surface, which makes it a useful tool for a quantitative analysis. Because we are interested only in the limiting current, most quantitative methods simply hold the potential of the working electrode at a fixed value and measure the limiting current. Because we are measuring the current as a function of time instead of potential, these are called amperometric methods (where ampere is the unit for current). Several examples of amperometric methods are gathered here.

[Note: corrected; the source prints "As we learned in the previous section" where this reads "As we learned earlier in this section"; the source prints "examples of amperometic methods" where this reads "examples of amperometric methods". The limiting current and its proportionality to concentration are covered earlier in this section, not in Section 25.2; "amperometic" is a typo.]

### Amperometric Detectors in Chromatography and Flow-Injection Analysis

One important detector for high-performance liquid chromatography (HPLC) is one in which the mobile phase eluting from the column passes through a small volume electrochemical cell in which the working electrode is held at a potential that will oxidize or reduce the analytes. The resulting current is plotted as function of time to yield the chromatogram. A similar arrangement is used in flow-injection analysis (FIA). See Chapter 28 (HPLC) and Chapter 33 (FIA) for further details.

### Amperometric Sensors

[Note: corrected; the source prints "Amperometric Senors" where this reads "Amperometric Sensors". A typo.]

One important application of amperometry is in the construction of chemical sensors. One of the first amperometric sensors was developed in 1956 by L. C. Clark to measure dissolved O2 in blood. Figure 25.3.9 shows the sensor’s design, which is similar to a potentiometric membrane electrode. A thin, gas-permeable membrane is stretched across the end of the sensor and is separated from the working electrode and the counter electrode by a thin solution of KCl. The working electrode is a Pt disk cathode, and a Ag ring anode serves as the counter electrode. Although several gases can diffuse across the membrane, including O2, N2, and CO2, only oxygen undergoes reduction at the cathode

O2(g) + 4H3O^+(aq) + 4e^− ⇌ 6H2O(l)

with its concentration at the electrode’s surface quickly reaching zero. The concentration of O2 at the membrane’s inner surface is fixed by its diffusion through the membrane, which creates a limiting current. The result is a steady-state current that is proportional to the concentration of dissolved oxygen. Because the electrode consumes oxygen, the sample is stirred to prevent the depletion of O2 at the membrane’s outer surface.

The oxidation of the Ag anode is the other half-reaction.

Ag(s) + Cl^−(aq) ⇌ AgCl(s) + e^−

Figure 25.3.9: Clark amperometric sensor for determining dissolved O2. The diagram on the right is a cross-section through the electrode, which shows the Ag ring electrode and the Pt disk electrode.
Clark amperometric sensor for determining dissolved oxygen. The diagram on the right is a cross-section through the electrode, which shows the Ag ring electrode and the Pt disk electrode.

Another example of an amperometric sensor is a glucose sensor. In this sensor the single membrane in Figure 25.3.9 is replaced with three membranes. The outermost membrane of polycarbonate is permeable to glucose and O2. The second membrane contains an immobilized preparation of glucose oxidase that catalyzes the oxidation of glucose to gluconolactone and hydrogen peroxide.

[Note: corrected; the source prints "single membrane in Figure 25.3.10" where this reads "single membrane in Figure 25.3.9". The single-membrane sensor is the Clark O2 sensor of Figure 25.3.9; Figure 25.3.10 is the glucose sensor's reaction scheme.]

β − D−glucose (aq) + O2(aq) ⇌ gluconolactone (aq) + H2O2(aq)

[Note: corrected; the source prints "O2(aq) + H2O(l) ⇌" where this reads "O2(aq) ⇌". Glucose (C6H12O6) and O2 give gluconolactone (C6H10O6) and H2O2 with no water, as the text above says; with H2O on the left the equation does not balance.]

The hydrogen peroxide diffuses through the innermost membrane of cellulose acetate where it undergoes oxidation at a Pt anode.

H2O2(aq) + 2OH^−(aq) ⇌ O2(aq) + 2H2O(l) + 2e^−

Figure 25.3.10 summarizes the reactions that take place in this amperometric sensor. FAD is the oxidized form of flavin adenine dinucleotide—the active site of the enzyme glucose oxidase—and FADH2 is the active site’s reduced form. Note that O2 serves as a mediator, carrying electrons to the electrode.

[Note: corrected; the source prints "flavin adenine nucleotide" where this reads "flavin adenine dinucleotide"; the source prints "serves a mediator" where this reads "serves as a mediator". FAD is flavin adenine dinucleotide; the second is a dropped word.]

Figure 25.3.10: Schematic showing the reactions by which an amperometric biosensor responds to glucose.
Schematic showing the reactions by which an amperometric biosensor responds to glucose.

By changing the enzyme and mediator, it is easy to extend the amperometric sensor in Figure 25.3.10 to the analysis of other analytes. For example, a CO2 sensor has been developed using an amperometric O2 sensor with a two-layer membrane, one of which contains an immobilized preparation of autotrophic bacteria [Karube, I.; Nomura, Y.; Arikawa, Y. Trends in Anal. Chem. 1995, 14, 295–299]. As CO2 diffuses through the membranes it is converted to O2 by the bacteria, increasing the concentration of O2 at the Pt cathode.

[Note: corrected; the source prints "easy to extend to the amperometric" where this reads "easy to extend the amperometric". A stray "to".]
