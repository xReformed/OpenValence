---
title: "23.2: Metallic Indicator Electrodes"
book: "Instrumental Analysis (LibreTexts)"
chapter: "23: Potentiometry"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/23%3A_Potentiometry/23.02%3A_Metallic_Indicator_Electrodes"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

In potentiometry, the potential of the indicator electrode is proportional to the analyte’s activity. Two classes of indicator electrodes are used to make potentiometric measurements: metallic electrodes, which are the subject of this section, and ion-selective electrodes, which are covered in the next section.

## Electrodes of the First Kind

If we place a copper electrode in a solution that contains Cu^2+, the electrode’s potential due to the reaction

Cu^2+(aq) + 2e^− ⇌ Cu(s)

is determined by the activity of Cu^2+.

E = E_(Cu^2+/Cu)^o−(0.05916/2) log(1/(a_(Cu^2+))) = +0.3419V−(0.05916/2) log(1/(a_(Cu^2+)))

If copper is the indicator electrode in a potentiometric electrochemical cell that also includes a saturated calomel reference electrode

SCE||Cu^2+(aq, a_(Cu^2+) = x)|Cu(s)

then we can use the cell potential to determine an unknown activity of Cu^2+ in the indicator electrode’s half-cell

E_cell = E_ind − E_SCE = +0.3419V−(0.05916/2) log(1/(a_(Cu^2+))) − 0.2444V

[Note: corrected; the source prints "− 0.2224V" where this reads "− 0.2444V". The reference is a saturated calomel electrode, whose potential at 25^oC is +0.2444 V (Section 23.1); 0.2223 V is the standard potential of the AgCl/Ag couple.]

An indicator electrode in which the metal is in contact with a solution containing its ion is called an electrode of the first kind. In general, if a metal, M, is in a solution of M^n+, the cell potential is

E_cell = K − (0.05916/n) log(1/(a_(M^n+))) = K + (0.05916/n) log a_(M^n+)

[Note: corrected; the source prints "E_call" where this reads "E_cell". A typo for the cell potential.]

where K is a constant that includes the standard-state potential for the M^n+/M redox couple and the potential of the reference electrode.

For a variety of reasons—including the slow kinetics of electron transfer at the metal–solution interface, the formation of metal oxides on the electrode’s surface, and interfering reactions—electrodes of the first kind are limited to the following metals: Ag, Bi, Cd, Cu, Hg, Pb, Sn, Tl, and Zn.

Many of these electrodes, such as Zn, cannot be used in acidic solutions because they are easily oxidized by H^+.

Zn(s) + 2H^+(aq) ⇌ H2(g) + Zn^2+(aq)

## Electrodes of the Second Kind

The potential of an electrode of the first kind responds to the activity of M^n+. We also can use this electrode to determine the activity of another species if it is in equilibrium with M^n+. For example, the potential of a Ag electrode in a solution of Ag^+ is

E = 0.7996V + 0.05916 log a_(Ag^+)

If we saturate the indicator electrode’s half-cell with AgI, the solubility reaction

AgI(s) ⇌ Ag^+(aq) + I^−(aq)

[Note: corrected; the source prints "Agl(s)" where this reads "AgI(s)". The salt is silver iodide, AgI; the source has a lowercase l for the capital I.]

determines the concentration of Ag^+; thus

a_(Ag^+) = (K_(sp, AgI))/(a_(I^−))

[Note: corrected; the source prints "K_(sp, Agl)" where this reads "K_(sp, AgI)". The solubility product is that of silver iodide, AgI, as the next sentence says; the source has a lowercase l for the capital I.]

where K_sp,AgI is the solubility product for AgI. Substituting Equation (second3) into Equation (second1)

E = 0.7996 V + 0.05916 log((K_(sp, AgI))/(a_(I^−)))

[Note: corrected; the source prints "K_(sp, Agl)" where this reads "K_(sp, AgI)". The solubility product is that of silver iodide, AgI; the source has a lowercase l for the capital I.]

shows that the potential of the silver electrode is a function of the activity of I^–. If we incorporate this electrode into a potentiometric electrochemical cell with a saturated calomel electrode

SCE||AgI(s), I^−(aq, a_(I^−) = x)|Ag(s)

then the cell potential is

E_cell = K − 0.05916 log a_(I^−)

where K is a constant that includes the standard-state potential for the Ag^+/Ag redox couple, the solubility product for AgI, and the reference electrode’s potential.

If an electrode of the first kind responds to the activity of an ion in equilibrium with M^n+, we call it an electrode of the second kind. Two common electrodes of the second kind are the calomel and the silver/silver chloride reference electrodes.

In an electrode of the second kind we link together a redox reaction and another reaction, such as a solubility reaction. You might wonder if we can link together more than two reactions. The short answer is yes. An electrode of the third kind, for example, links together a redox reaction and two other reactions. Such electrodes are less common and we will not consider them in this text.

## Metallic Redox Electrodes

An electrode of the first kind or the second kind develops a potential as the result of a redox reaction that involves the metallic electrode. An electrode also can serve as a source of electrons or as a sink for electrons in an unrelated redox reaction, in which case we call it a redox electrode. The Pt cathode in Figure 23.2.1 is a redox electrode because its potential is determined by the activity of Fe^2+ and Fe^3+ in the indicator half-cell. Note that a redox electrode’s potential often responds to the activity of more than one ion, which limits its usefulness for direct potentiometry.

[Note: corrected; the source prints "The Pt cathode in 23.2.1" where this reads "The Pt cathode in Figure 23.2.1". The reference is to the figure below, whose caption describes the Pt cathode; the source's figure number has lost the word "Figure".]

[Image: Potentiometric electrochemical cell in which the anode is a metallic electrode of the first kind (Ag) and the cathode is a metallic redox electrode (Pt).]

Figure 23.2.1. Potentiometric electrochemical cell in which the anode is a metallic electrode of the first kind (Ag) and the cathode is a metallic redox electrode (Pt).
