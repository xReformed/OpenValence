---
title: "16.2: Entropy"
book: "Chemistry 1e (OpenStax)"
chapter: "16: Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/16%3A_Thermodynamics/16.02%3A_Entropy"
author: "OpenStax"
license: "CC BY 4.0"
---

In 1824, at the age of 28, Nicolas Léonard Sadi Carnot (Figure 16.2.1) published the results of an extensive study regarding the efficiency of steam heat engines. In a later review of Carnot's findings, Rudolf Clausius introduced a new thermodynamic property that relates the spontaneous heat flow accompanying a process to the temperature at which the process takes place. This new property was expressed as the ratio of the reversible heat (qrev) and the kelvin temperature (T). The term reversible process refers to a process that takes place at such a slow rate that it is always at equilibrium and its direction can be changed (it can be "reversed") by an infinitesimally small change in some condition. Note that the idea of a reversible process is a formalism required to support the development of various thermodynamic concepts; no real processes are truly reversible, rather they are classified as irreversible.

Figure 16.2.1: (a) Nicholas Léonard Sadi Carnot's research into steam-powered machinery and (b) Rudolf Clausius's later study of those findings led to groundbreaking discoveries about spontaneous heat flow processes.

Similar to other thermodynamic properties, this new quantity is a state function, and so its change depends only upon the initial and final states of a system. In 1865, Clausius named this property entropy (S) and defined its change for any process as the following:

ΔS = qrev / T

The entropy change for a real, irreversible process is then equal to that for the theoretical reversible process that involves the same initial and final states.

## Entropy and Microstates

Following the work of Carnot and Clausius, Ludwig Boltzmann developed a molecular-scale statistical model that related the entropy of a system to the number of microstates possible for the system. A microstate (Ω) is a specific configuration of the locations and energies of the atoms or molecules that comprise a system like the following:

S = k ln Ω

Here k is the Boltzmann constant and has a value of 1.38 × 10^−23 J/K.

As for other state functions, the change in entropy for a process is the difference between its final (Sf) and initial (Si) values:

ΔS = Sf − Si
= k ln Ωf − k ln Ωi
= k ln(Ωf / Ωi)

For processes involving an increase in the number of microstates of the system, Ωf > Ωi, the entropy of the system increases, ΔS > 0. Conversely, processes that reduce the number of microstates in the system, Ωf < Ωi, yield a decrease in system entropy, ΔS < 0. This molecular-scale interpretation of entropy provides a link to the probability that a process will occur as illustrated in the next paragraphs.

Figure 16.2.2: The sixteen microstates associated with placing four particles in two boxes are shown. The microstates are collected into five distributions—(a), (b), (c), (d), and (e)—based on the numbers of particles in each box.
Five rows of diagrams that look like dominoes are shown and labeled a, b, c, d, and e. Row a has one "domino" that has four dots on the left side, red, green, blue and yellow in a clockwise pattern from the top left, and no dots on the right. Row b has four "dominos," each with three dots on the left and one dot on the right. The first shows a "domino" with green, yellow and blue on the left and red on the right. The second "domino" has yellow, blue and red on the left and green on the right. The third "domino" has red, green and yellow on the left and blue on the right while the fourth has red, green and blue on the left and yellow on the right. Row c has six "dominos", each with two dots on either side. The first has a red and green on the left and a blue and yellow on the right. The second has a red and blue on the left and a green and yellow on the right while the third has a yellow and red on the left and a green and blue on the right. The fourth has a green and blue on the left and a red and yellow on the right. The fifth has a green and yellow on the left and a red and blue on the right. The sixth has a blue and yellow on the left and a green and red on the right. Row d has four "dominos," each with one dot on the left and three on the right. The first "domino" has red on the left and a blue, green and yellow on the right. The second has a green on the left and a red, yellow and blue on the right. The third has a blue on the left and a red, green and yellow on the right. The fourth has a yellow on the left and a red, green and blue on the right. Row e has 1 "domino" with no dots on the left and four dots on the right that are red, green, blue and yellow.

Consider the general case of a system comprised of N particles distributed among n boxes. The number of microstates possible for such a system is n^N. For example, distributing four particles among two boxes will result in 2^4 = 16 different microstates as illustrated in Figure 16.2.2. Microstates with equivalent particle arrangements (not considering individual particle identities) are grouped together and are called distributions (sometimes called macrostates or configurations). The probability that a system will exist with its components in a given distribution is proportional to the number of microstates within the distribution. Since entropy increases logarithmically with the number of microstates, the most probable distribution is therefore the one of greatest entropy.

For this system, the most probable configuration is one of the six microstates associated with distribution (c) where the particles are evenly distributed between the boxes, that is, a configuration of two particles in each box. The probability of finding the system in this configuration is

6/16 = 3/8

The least probable configuration of the system is one in which all four particles are in one box, corresponding to distributions (a) and (e), each with a probability of

1/16

The probability of finding all particles in only one box (either the left box or right box) is then

(1/16 + 1/16) = 2/16 = 1/8

As you add more particles to the system, the number of possible microstates increases exponentially (2^N). A macroscopic (laboratory-sized) system would typically consist of moles of particles (N ~ 10^23), and the corresponding number of microstates would be staggeringly huge. Regardless of the number of particles in the system, however, the distributions in which roughly equal numbers of particles are found in each box are always the most probable configurations.

The most probable distribution is therefore the one of greatest entropy.

The previous description of an ideal gas expanding into a vacuum is a macroscopic example of this particle-in-a-box model. For this system, the most probable distribution is confirmed to be the one in which the matter is most uniformly dispersed or distributed between the two flasks. The spontaneous process whereby the gas contained initially in one flask expands to fill both flasks equally therefore yields an increase in entropy for the system.

Figure 16.2.3: This shows a microstate model describing the flow of heat from a hot object to a cold object. (a) Before the heat flow occurs, the object comprised of particles A and B contains both units of energy and is represented by a distribution of three microstates. (b) If the heat flow results in an even dispersal of energy (one energy unit transferred), a distribution of four microstates results. (c) If both energy units are transferred, the resulting distribution has three microstates.
Three rows labeled a, b, and c are shown and each contains rectangles with two sides where the left side is labeled, "A," and "B," and the right is labeled, "C," and "D." Row a has three rectangles where the first has a dot above and below the letter A, the second has a dot above the A and B, and the third which has a dot above and below the letter B. Row b has four rectangles; the first has a dot above A and C, the second has a dot above A and D, the third has a dot above B and C and the fourth has a dot above B and D. Row c has three rectangles; the first has a dot above and below the letter C, the second has a dot above C and D and the third has a dot above and below the letter D.

A similar approach may be used to describe the spontaneous flow of heat. Consider a system consisting of two objects, each containing two particles, and two units of energy (represented as "*") in Figure 16.2.3. The hot object is comprised of particles A and B and initially contains both energy units. The cold object is comprised of particles C and D, which initially has no energy units. Distribution (a) shows the three microstates possible for the initial state of the system, with both units of energy contained within the hot object. If one of the two energy units is transferred, the result is distribution (b) consisting of four microstates. If both energy units are transferred, the result is distribution (c) consisting of three microstates. And so, we may describe this system by a total of ten microstates. The probability that the heat does not flow when the two objects are brought into contact, that is, that the system remains in distribution (a), is 3/10. More likely is the flow of heat to yield one of the other two distributions, the combined probability being 7/10. The most likely result is the flow of heat to yield the uniform dispersal of energy represented by distribution (b), the probability of this configuration being 4/10. As for the previous example of matter dispersal, extrapolating this treatment to macroscopic collections of particles dramatically increases the probability of the uniform distribution relative to the other distributions. This supports the common observation that placing hot and cold objects in contact results in spontaneous heat flow that ultimately equalizes the objects' temperatures. And, again, this spontaneous process is also characterized by an increase in system entropy.

### Example 16.2.1: Determination of ΔS

Consider the system shown here. What is the change in entropy for a process that converts the system from distribution (a) to (c)?

A diagram shows one rectangle with two sides that has four dots, red, green, yellow and blue written on the left side. A right-facing arrow leads to six more two-sided rectangles, each with two dots on the left and right sides. The first rectangle has a red and green dot on the left and a blue and yellow on the right, while the second shows a red and blue on the left and a green and yellow on the right. The third rectangle has a red and yellow dot on the left and a blue and green on the right, while the fourth shows a green and blue on the left and a red and yellow on the right. The fifth rectangle has a yellow and green dot on the left and a blue and red on the right, while the sixth shows a yellow and blue on the left and a green and red on the right.

**Solution**

We are interested in the following change:

The initial number of microstates is one, the final six:

ΔS = k ln(Ωc / Ωa)
= 1.38 × 10^−23 J/K × ln(6/1)
= 2.47 × 10^−23 J/K

The sign of this result is consistent with expectation; since there are more microstates possible for the final state than for the initial state, the change in entropy should be positive.

### Exercise 16.2.1

Consider the system shown in Figure 16.2.3. What is the change in entropy for the process where all the energy is transferred from the hot object (AB) to the cold object (CD)?

**Answer**

0 J/K

## Predicting the Sign of ΔS

The relationships between entropy, microstates, and matter/energy dispersal described previously allow us to make generalizations regarding the relative entropies of substances and to predict the sign of entropy changes for chemical and physical processes. Consider the phase changes illustrated in Figure 16.2.4. In the solid phase, the atoms or molecules are restricted to nearly fixed positions with respect to each other and are capable of only modest oscillations about these positions. With essentially fixed locations for the system's component particles, the number of microstates is relatively small. In the liquid phase, the atoms or molecules are free to move over and around each other, though they remain in relatively close proximity to one another. This increased freedom of motion results in a greater variation in possible particle locations, so the number of microstates is correspondingly greater than for the solid. As a result, Sliquid > Ssolid and the process of converting a substance from solid to liquid (melting) is characterized by an increase in entropy, ΔS > 0. By the same logic, the reciprocal process (freezing) exhibits a decrease in entropy, ΔS < 0.

Figure 16.2.4: The entropy of a substance increases (ΔS > 0) as it transforms from a relatively ordered solid, to a less-ordered liquid, and then to a still less-ordered gas. The entropy decreases (ΔS < 0) as the substance transforms from a gas to a liquid and then to a solid.
Three stoppered flasks are shown with right and left-facing arrows in between each; the first is labeled above as, "delta S greater than 0," and below as, "delta S less than 0," while the second is labeled above as, "delta S greater than 0," and below as, "delta S less than 0." A long, right-facing arrow is drawn above all the flasks and labeled, "Increasing entropy." The left flask contains twenty-seven particles arranged in a cube in the bottom of the flask and is labeled, "Crystalline solid," below. The middle flask contains twenty-seven particles dispersed randomly in the bottom of the flask and is labeled, "Liquid," below. The right flask contains twenty-seven particles dispersed inside of the flask and moving rapidly and is labeled, "Gas," below.

Now consider the vapor or gas phase. The atoms or molecules occupy a much greater volume than in the liquid phase; therefore each atom or molecule can be found in many more locations than in the liquid (or solid) phase. Consequently, for any substance, Sgas > Sliquid > Ssolid, and the processes of vaporization and sublimation likewise involve increases in entropy, ΔS > 0. Likewise, the reciprocal phase transitions, condensation and deposition, involve decreases in entropy, ΔS < 0.

According to kinetic-molecular theory, the temperature of a substance is proportional to the average kinetic energy of its particles. Raising the temperature of a substance will result in more extensive vibrations of the particles in solids and more rapid translations of the particles in liquids and gases. At higher temperatures, the distribution of kinetic energies among the atoms or molecules of the substance is also broader (more dispersed) than at lower temperatures. Thus, the entropy for any substance increases with temperature (Figure 16.2.5).

Figure 16.2.5: Entropy increases as the temperature of a substance is raised, which corresponds to the greater spread of kinetic energies. When a substance melts or vaporizes, it experiences a significant increase in entropy.
Two graphs are shown. The y-axis of the left graph is labeled, "Fraction of molecules," while the x-axis is labeled, "Velocity, v (m/s)," and has values of 0 through 1,500 along the axis with increments of 500. Four lines are plotted on this graph. The first, labeled, "100 K," peaks around 200 m/s while the second, labeled, "200 K," peaks near 300 m/s and is slightly lower on the y-axis than the first. The third line, labeled, "500 K," peaks around 550 m/s and is lower than the first two on the y-axis. The fourth line, labeled, "1000 K," peaks around 750 m/s and is the lowest of the four on the y-axis. Each line gets increasingly broad. The second graph has a y-axis labeled, "Entropy, S," with an upward-facing arrow and an x-axis labeled, "Temperature (K)," and a right-facing arrow. The graph has three equally spaced columns in the background, labeled, "Solid," "Liquid," and, "Gas," from left to right. A line extends slightly upward through the first column in a slight upward direction, then goes straight up in the transition between the first two columns. It then progresses in a slight upward direction through the second column, then goes up dramatically between the second and third columns, then continues in a slight upward direction once more. The first vertical region of this line is labeled, "Melting," and the second is labeled, "Boiling."

The entropy of a substance is influenced by the structure of the particles (atoms or molecules) that comprise the substance. With regard to atomic substances, heavier atoms possess greater entropy at a given temperature than lighter atoms, which is a consequence of the relation between a particle's mass and the spacing of quantized translational energy levels (which is a topic beyond the scope of our treatment). For molecules, greater numbers of atoms (regardless of their masses) increase the ways in which the molecules can vibrate and thus the number of possible microstates and the system entropy.

Finally, variations in the types of particles affect the entropy of a system. Compared to a pure substance, in which all particles are identical, the entropy of a mixture of two or more different particle types is greater. This is because of the additional orientations and interactions that are possible in a system comprised of nonidentical components. For example, when a solid dissolves in a liquid, the particles of the solid experience both a greater freedom of motion and additional interactions with the solvent particles. This corresponds to a more uniform dispersal of matter and energy and a greater number of microstates. The process of dissolution therefore involves an increase in entropy, ΔS > 0.

Considering the various factors that affect entropy allows us to make informed predictions of the sign of ΔS for various chemical and physical processes as illustrated in Example 16.2.2.

### Example 16.2.2: Predicting the Sign of ∆S

Predict the sign of the entropy change for the following processes. Indicate the reason for each of your predictions.

- One mole liquid water at room temperature ⟶ one mole liquid water at 50 °C
- Ag+(aq) + Cl−(aq) ⟶ AgCl(s)
- C6H6(l) + (15/2)O2(g) ⟶ 6CO2(g) + 3H2O(l)
- NH3(s) ⟶ NH3(l)

**Solution**

- positive, temperature increases
- negative, reduction in the number of ions (particles) in solution, decreased dispersal of matter
- negative, net decrease in the amount of gaseous species
- positive, phase transition from solid to liquid, net increase in dispersal of matter

### Exercise 16.2.2

Predict the sign of the entropy change for the following processes. Give a reason for your prediction.

- NaNO3(s) ⟶ Na+(aq) + NO3−(aq)
- the freezing of liquid water
- CO2(s) ⟶ CO2(g)
- CaCO3(s) ⟶ CaO(s) + CO2(g)

**Answer a**

Positive; The solid dissolves to give an increase of mobile ions in solution.

**Answer b**

Negative; The liquid becomes a more ordered solid.

**Answer c**

Positive; The relatively ordered solid becomes a gas.

**Answer d**

Positive; There is a net production of one mole of gas.

## Summary

Entropy (S) is a state function that can be related to the number of microstates for a system (the number of ways the system can be arranged) and to the ratio of reversible heat to kelvin temperature. It may be interpreted as a measure of the dispersal or distribution of matter and/or energy in a system, and it is often described as representing the "disorder" of the system. For a given substance, S_solid < S_liquid ≪ S_gas; in a given physical state at a given temperature, entropy is typically greater for heavier atoms or more complex molecules. Entropy increases when a system is heated and when solutions form. Using these guidelines, the sign of entropy changes for some chemical reactions may be reliably predicted.

## Key Equations

- ΔS = qrev / T
- S = k ln W
- ΔS = k ln(Wf / Wi)

[Note: the Key Equations write the number of microstates as W, while the body of the section writes it as Ω. The two symbols denote the same quantity.]
