---
title: "29.9: The Michaelis-Menten Mechanism for Enzyme Catalysis"
book: "Physical Chemistry (LibreTexts)"
chapter: "29: Chemical Kinetics II- Reaction Mechanisms"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/29%3A_Chemical_Kinetics_II-_Reaction_Mechanisms/29.09%3A_The_Michaelis-Menten_Mechanism_for_Enzyme_Catalysis"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Enzymes are biological catalysts and functional proteins. Enzymes contain specificity in its protein structure in order to have its specialized function. It usually contains more than one subunit and they are critical to sustain life. Enzymes can increase the chemical reactions in living cells. However, enzymes are not consumed in the reaction and their main function is to assist in bringing the substrates together so they can undergo normal reaction faster.

The first enzyme, diastase, was found in malt extract in the early 1830s. Later, in 1877, the term enzyme was used to replace the term ferment. Some scientists believe that ferments must contain living cells and some think ferments could be non-living cells. Finally, in the 1920s, Sumner crystallized an enzyme, urease, and then properties of enzyme then was more clearly understood. Until today, enzymes are still the popular research field that many people are subject to study.

[Note: corrected; the source prints "The first enzyme was found in the process of fermentation in milk and alcohol during the nineteenth century. Later in the early 1830s, the term enzyme was used to replace the term ferment." where this reads "The first enzyme, diastase, was found in malt extract in the early 1830s. Later, in 1877, the term enzyme was used to replace the term ferment."; the source prints "Sumner purified the structure of enzyme" where this reads "Sumner crystallized an enzyme, urease,". Payen and Persoz isolated diastase in 1833; Wilhelm Kühne coined "enzyme" in 1877; in 1926 James Sumner crystallized urease, showing that enzymes are proteins.]

## Michaelis-Menten Kinetics

In biological systems, enzymes act as catalysts and play a critical role in accelerating reactions, anywhere from 10^3 to 10^17 times faster than the reaction would normally proceed. Enzymes are high-molecular weight proteins that act on a substrate, or reactant molecule, to form one or more products. In 1913, Leonor Michaelis and Maude Menten proposed the following reaction mechanism for enzymatic reactions:

E + S ⇌ (k1, k_−1) ES → (k2) E + P

where E is the enzyme, ES is the enzyme-substrate complex, and P is the product. In the first step, the substrate binds to the active site of the enzyme. In the second step, the substrate is converted into the product and released from the enzyme. For this mechanism, we can assume that the concentration of the enzyme-substrate complex, ES, is small and employ a steady-state approximation:

[Note: corrected; the source prints "released from the substrate" where this reads "released from the enzyme". The product leaves the enzyme.]

(d[ES])/dt = k1[E][S]−k_−1[ES]_ss − k2[ES]_ss ≈ 0

Furthermore, because the enzyme is unchanged throughout the reaction, we express the total enzyme concentration as a sum of enzyme and enzyme-substrate complex:

[E]0 = [ES] + [E]

Plugging Equation (Eq23) into Equation (Eq22), we obtain

0 = k1([E]0−[ES]_ss)[S]−k_−1[ES]_ss − k2[ES]_ss

[Note: corrected; the source prints "−k_−1[ES]_ss + k2[ES]_ss" where this reads "−k_−1[ES]_ss − k2[ES]_ss". ES is used up by step 2, as the rate equation above and the result below have it.]

Solving for [ES]_ss

[ES]_ss = (k1[E]0[S])/(k1[S] + k_−1 + k2) = ([E]0[S])/([S] + (k_−1 + k2)/(k1))

We can then write the reaction rate of the product as

(d[P])/dt = k2[ES]_ss = (k2[E]0[S])/([S] + (k_−1 + k2)/(k1)) = (k2[E]0[S])/([S] + KM)

where KM is the Michaelis constant. Equation (Eq26) is known as the Michaelis-Menten equation. The result for Michaelis-Menten kinetics equivalent to that for a unimolecular gas phase reaction catalyzed on a solid surface. In the limit where there is a large amount of substrate present ([S] ≫ KM) Equation (Eq26) reduces to

(d[P])/dt = r_max = k2[E]0

which is a 0^th order reaction, since [E]0 is a constant. The value k2[E]0 represents the maximum rate, r_max, at which the enzymatic reaction can proceed. The rate constant, k2, is also known as the turnover number, which is the number of substrate molecules converted to product in a given time when all the active sites on the enzyme are occupied. Figure 29.9.4 displays the dependence of the reaction rate on the substrate concentration, [S]. This plot is known as the Michaelis-Menten plot. Examining the figure, we can see that the reaction rate reaches a maximum value of k2[E]0 at large values of [S].

Figure 29.9.4: Rate dependence on substrate concentration for an enzymatic reaction.
Graph showing the relationship between substrate concentration [S] (x-axis) and reaction rate r (y-axis), indicating a saturation curve.

Another commonly-used plot in examining enzyme kinetics is the Lineweaver-Burk plot, in with the inverse of the reaction rate, 1/r, is plotted against the inverse of the substrate concentration 1/[S]. Rearranging Equation (Eq26),

1/r = (KM + [S])/(k2[E]0[S]) = (KM)/(k2[E]0) · 1/([S]) + 1/(k2[E]0)

The Lineweaver-Burk plot results in a straight line with the slope equal to KM/k2[E]0 and y-intercept equal to 1/k2[E]0.

## Contributors and Attributions

- Mark Tuckerman (New York University)
