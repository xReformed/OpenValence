---
title: "17.4: Heat Capacity at Constant Volume is the Change in Internal Energy with Temperature"
book: "Physical Chemistry (LibreTexts)"
chapter: "17: Boltzmann Factor and Partition Functions"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17%3A_Boltzmann_Factor_and_Partition_Functions/17.04%3A_Heat_Capacity_at_Constant_Volume_is_the_Change_in_Internal_Energy_with_Temperature"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The heat capacity at constant volume (CV) is defined to be the change in internal energy with respect to temperature:

CV = ((∂U)/(∂T))_(N, V)

Since:

E = −(∂ln(Q(N, V, β)))/(∂β)

We see that:

CV = (∂U)/(∂T)

= (∂U)/(∂β) · (∂β)/(∂T)

= 1/kT^2 · ((∂^2)/(∂β^2)) ln Q(N, V, β)

= kβ^2 ((∂^2)/(∂β^2)) ln Q(N, V, β)

where k is the Boltzmann constant. Energy can be stored in materials/gases via populating the specific degrees of freedom that exist in the sample. Understanding how this occurs requires the usage of Quantum Mechanics.

## Dulong-Petit Law on the Heat Capacities of Solids

Pierre Louis Dulong and Alexis Thérèse Petit conducted experiments in 1819 on three dimensional solid crystals to determine the heat capacities of a variety of these solids (Heat capacity is the solids ability to absorb and retain heat). Dulong and Petit discovered that all investigated solids had a heat capacity of approximately 2.49 x 10^4 J kilomole^-1 K^-1 at around 298 K or room temperature. The result from their experiment was explained by considering every atom inside the solid as an oscillator with six degrees of freedom (an oscillator can be thought of as a spring connecting all the atoms in the solid lattice). These springs extend into three dimensional space. The more energy that is added to the solid the more these springs vibrate. Each degree of freedom has an average energy of (1/2)kT, where k is the Boltzmann constant and T is the absolute temperature. Thus,

[Note: corrected; the source prints "Each atom has an energy of (1/2)kT" where this reads "Each degree of freedom has an average energy of (1/2)kT". Each of an atom's six degrees of freedom has kT/2, giving 3kT per atom and CV = 3R.]

[Note: corrected; the source prints "Alexis Thèrèse Petit" where this reads "Alexis Thérèse Petit". The spelling of Petit's name.]

CV = (6R)/2 = 3R (Dulong-Petit Law)

The number 6 in this equation is the number of degrees of freedom for the molecule. Petit and Dulong suggested that these results supported their foundation for the heat capacity of solids. The explanation for Petit and Dulong's experiment was not sufficient when it was discovered that heat capacity decreased as temperature approached absolute zero. The degrees of freedom do not slow down or cease to move when the solid reaches a sufficiently cold temperature. An additional model was proposed to explain this deviance. Two main theories were developed to explain this puzzling deviance in the heat capacity experiments. The first was constructed by Einstein and the second was authored by Debye.

Figure 17.4.1: In a simple model of a solid element, each atom is attached to others by six springs, two for each possible motion: x, y, and z. Each of the three motions corresponds to two degrees of freedom, one for kinetic energy and one for potential energy. (CC BY-SA 4.0; OpenStax).
Diagram depicting particles arranged in a lattice structure, each connected to its neighbors by springs along x, y and z.

[Note: corrected; the source prints "illustrating joint exchange between red spheres and connections." where this reads "each connected to its neighbors by springs along x, y and z.". The caption is about atoms joined by springs. The image's alt text, machine-written, misreads the image; this describes it.]

## Einstein's Theory on the Heat Capacities of Solids

Einstein assumed three things when he investigated the heat capacity of solids. First, he assumed that each solid was composed of a lattice structure consisting of N atoms. Each atom was treated as moving independently in three dimensions within the lattice (3 degrees of freedom). This meant that the entire lattice's vibrational motion could be described by a total of 3N motions, or degrees of freedom. Secondly, he assumed that the atoms inside the solid lattice did not interact with each other and thirdly, all of the atoms inside the solid vibrated at the same frequency. The third point highlights the main difference in Einstein's and Debye's two models.

Einstein's first point is accurate because the experimental data supported his hypothesis, however his second point is not because if atoms inside a solid could not interact, sound could not propagate through it. For example, a tuning fork's atoms, when struck, interact with one another to create sound which travels through air to the listener's ear. Atoms also interact in a solid when they are heated. Take for example a frying pan. If the pan is heated on one side, the heat transfers throughout the metal effectively warming the entire pan. Molecules that make up the frying pan interact to transfer heat. Much in the same way the oscillators in a solid interact when energy is added to the system. The extent of these interactions lead to the physically observed heat capacity.

The heat capacity of a solid at a constant volume is

CV = ((∂U)/(∂T))_V

= 3Nk((θE)/T)^2

× (exp((θE)/T))/((exp((θE)/T) − 1)^2)

[Note: corrected; the source prints "= (exp((θE)/T))/((exp((θE)/T) − 1)^2)" where this reads "× (exp((θE)/T))/((exp((θE)/T) − 1)^2)". This factor multiplies the line above, CV = 3Nk(θE/T)^2 · e^(θE/T)/(e^(θE/T) − 1)^2; the source's alignment sets it as a further equality. The limits below follow only from the product.]

where

- θE = hν/k is the Einstein temperature,
- h is Planck's constant,
- k is Boltzmann's constant, and
- ν is the oscillator frequency of the atoms inside the solid.

[Note: corrected; the source prints "θE = hv/k" where this reads "θE = hν/k". ν is the frequency.]

The Einstein temperature's accessibility of the vibrational energy inside of a solid molecule determines the heat capacity of that solid. The greater the accessibility the greater the heat capacity. If the vibrational energy is easily accessible the collisions in the molecule have a greater probability of exciting the atom into an upper vibrational level. This is displayed below.

Figure 17.4.2: This Figure illustrates the effect of the Einstein temperature on the likelihood of an oscillator absorbing energy from a collision and transferring that energy into stored heat or heat capacity. As the Einstein temperature increases, the probability of an oscillator being excited to the next vibrational state decreases. (CC BY-NC 4.0; Ümit Kaya via LibreTexts)
Diagram of how the Einstein temperature affects the chance that an oscillator is excited to its next vibrational level.

[Note: corrected; the source prints "As the Einstein temperature increases, the greater the probability of an oscillator being excited to the next vibrational state." where this reads "As the Einstein temperature increases, the probability of an oscillator being excited to the next vibrational state decreases."; the source prints "Bar graph representing data with various heights of red bars and blue horizontal lines, labeled with orange dots illustrating values." where this reads "Diagram of how the Einstein temperature affects the chance that an oscillator is excited to its next vibrational level.". Excitation goes as e^(−θE/T): a higher θE means a lower probability, as for diamond below. The image's alt text, machine-written, misreads the image; this describes it.]

So the Einstein temperature specifically indicates the probability that a molecule has in its degrees of freedom to store energy in its atomic oscillators (or bonds). Comparing the Einstein temperature to the traditional classical values of Heat capacity will illustrate the differences the specific strengths (high temperature) and weaknesses (low temperature) of the Einstein model.

Figure 17.4.3: This graph shows the accuracy of the of the Einstein temperature at low temperatures. The classical model is effective at temperatures above 10 Einstein Temperatures. (Cc BY-NC; Ümit Kaya via LibreTexts)
Graph of heat capacity against temperature: the Einstein model rising to the classical (Dulong-Petit) value.

[Note: corrected; the source prints "Graph displaying a blue curve representing data growth over time, with a red line indicating a threshold." where this reads "Graph of heat capacity against temperature: the Einstein model rising to the classical (Dulong-Petit) value.". The caption plots against temperature, not time. The image's alt text, machine-written, misreads the image; this describes it.]

Thus, in the high temperature limit ((θE)/T ≪ 1) (i.e., the temperature is very large compared to the Einstein temperature) then

CV ≈ 3Nk = 3 nR.

Einstein's model reveals the accuracy of the Petit and Dulong model and models high temperatures accurately. However, just as Petit and Dulong's model decreased in accuracy as the temperature decreased, so followed Einstein's.

When examining the extremely low temperature limit: (θE)/T ≫ 1, it can be seen:

CV = 3Nk((θE)/T)^2 e^{(−θE)/T}

As temperature (T) goes to zero, the exponential portion of the above equation goes to zero and therefore CV also approaches zero. This supports the experimental values as temperature approaches zero the heat capacity of the solid likewise decreases to zero.

Einstein's theory also explains solids that exhibit a low heat capacity even at relatively high temperatures. An example of such a solid is diamond. The heat capacity of diamond approaches 3Nk as temperature greatly increases. Einstein's model supports this through the definition of an Einstein temperature. As the Einstein temperature increases, ν must increase likewise. This is the equivalent of each atom possessing more energy and therefore vibrating more rapidly within the solid itself. The oscillator frequency, ν, can be written as:

ν = (1/(2π))√(κ/μ)

where κ is the force constant and μ is the reduced mass. This formula better predicts solids with high force constants or low reduced masses. This corrects deviations from the Petit and Dulong model.

Figure 17.4.4: This graph indicates the heat capacity of several solid metals as a function of the Einstein temperature: θE = hν/(kB).
Graph showing heat capacity versus temperature for different materials, with colored data points and a fitted curve.

[Note: corrected; the source prints "θE = hv/(kB)." where this reads "θE = hν/(kB).". ν is the frequency.]

Essentially the Einstein temperature allows for the heat capacity equation and the vibrational frequencies in the solid to change as the temperature changes. This effectively adjusts for the deviations seen in the Petit/Dulong model. As the temperature increases or decreases, the Einstein temperature increases or decreases likewise to mirror the actual physical activity within the solid.

[Note: in Einstein's model θE = hν/k is a constant of the solid; it is T/θE that changes with temperature. The text is left as printed.]

Figure 17.4.5: This plot shows the heat capacity of lead compared to the expected values calculated from Einstein's model.
Graph showing heat capacity vs. temperature (T) with data points and curves plotted on axes.

Einstein's model predicts relatively low temperatures well. However, when decreasing from approximately 15 K, Einstein's model deviates from experimental values. Also, this can be observed, although not as dramatically, for temperatures from 25 K to 30 K. Clearly a term or correction is still missing from Einstein's model to increase its accuracy.
