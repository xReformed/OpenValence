---
title: "19.3: Work and Heat are not State Functions"
book: "Physical Chemistry (LibreTexts)"
chapter: "19: The First Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/19%3A_The_First_Law_of_Thermodynamics/19.03%3A_Work_and_Heat_are_not_State_Functions"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## Heat and work are path functions

Heat (q) and work (w) are path functions, not state functions:

1. They are path dependent.
2. They are energy transfer → they are not intrinsic to the system.

### Path Functons

Functions that depend on the path taken, such as work (w) and heat (q), are referred to as path functions.

## Reversible versus irreversible

Let's consider a piston that is being compressed at constant temperature (isothermal) to half of its initial volume:

1. Start with cylinder 1 liter, both external and internal pressure 1 bar.
2. Peg the piston in a fixed position.
3. Put cylinder in a pressure chamber with P_ext = 2 bar.
4. Suddenly pull the peg.

[Image: Diagram showing a process flow with labeled blocks in varying colors, including red and grey, representing steps or actions.]

Figure 19.3.1 : A piston is being irreversibly and isothermally compressed under constant external pressure from state 1 to state 2.

The piston will shoot down till the internal and external pressures balance out again and the volume is 1/2 L. Notice that the external pressure was maintained constant at 2 bar during the peg-pulling and that the internal and external pressures were not balanced at all time. In a P − V diagram of an ideal gas, P is a hyperbolic function of V under constant temperature (isothermal), but this refers to the internal pressure of the gas. It is the external one that counts when computing work and they are not necessarily the same. As long as P_external is constant, work is represented by a rectangle.

[Image: Graph illustrating a Pressure (P) vs. Volume (V) plot, showing curves and two points labeled 1 and 2, with external pressure marked.]

Figure 19.3.2 : The system is being irreversibly and isothermally compressed from state 1 to 2. The amount of work being done on the system is shown by the shaded area.

[Note: corrected; the source prints "Figure 19.3.1 : The system is being irreversibly" where this reads "Figure 19.3.2 : The system is being irreversibly". As above.]

The amount of work being done is equal to the shaded region and in equation:

w = −∫_V1^V2 P_ext dV = −P_ext(V2 − V1) = −P_ext ΔV

[Note: corrected; the source prints "w = −∫_V1^V2 PdV = −P_ext(V2 − V1) = −PΔV" where this reads "w = −∫_V1^V2 P_ext dV = −P_ext(V2 − V1) = −P_ext ΔV". In this irreversible step the external pressure counts, as the text says.]

This is more work than the reversible compression needs. Work is being done on the system, so the overall work being done is positive. Let's repeat the experiment, but this time the piston will compress reversibly over infinitesimally small steps where the P_ext = P_system:

[Note: corrected; the source prints "This represents the maximum amount of work that can be done for an isothermal compression." where this reads "This is more work than the reversible compression needs.". A higher external pressure would need still more work; the reversible path needs the least.]

[Image: Graph depicting pressure (P) vs. volume (V) with a curve and shaded area representing work done, labeled points 1 and 2.]

Figure 19.3.3 : The system is being reversibly and isothermally compressed from state 1 to 2. The amount of work being done on the system is shown by the shaded area. Note that for a compression, a reversible process does less work than an irreversible process.

[Note: corrected; the source prints "Figure 19.3.1 : The system is being reversibly" where this reads "Figure 19.3.3 : The system is being reversibly". As above.]

For an ideal gas, the amount of work being done along the reversible compression is:

w = −∫_V1^V2 PdV = −nRT∫_V1^V2 (1/V) dV = −nRT ln((V2)/(V1))

[Note: corrected; the source prints "−nRT∫_V1^V2 1/V =" where this reads "−nRT∫_V1^V2 (1/V) dV =". dV missing.]

The amount of work being done to the two systems are not the same in the two diagrams (see the gray areas). Work is not a state, but a path function, as it depends on the path taken. You may say, what's the big difference. In both cases, the system is compressed from state 1 to state 2. The key is the word suddenly. By pegging the position in place for the first compression, we have created a situation where the external pressure is higher than the internal pressure (P_ext > P). Because work is done suddenly by pulling the peg out, the internal pressure is struggling to catch up with the external one. During the second compression, we have P_ext = P at all times. It's a bit like falling off a cliff versus gently sliding down a hill. Path one is called an irreversible path, the second a reversible path.

### Reversible vs. Irreversible Processes

A reversible path is a path that follows a series of states at rest (i.e., the forces are allowed to balance at all times). In an irreversible one the forces only balance at the very end of the process.

Notice that less work is being done on the reversible isothermal compression than the one-step irreversible isothermal compression. In fact, the minimum amount of work that can be done during a compression always occurs along the reversible path.

### Isothermal Expansion

Let's consider a piston that is being expanded at constant temperature (isothermal) to twice of its initial volume:

1. Start with cylinder 1 liter in a pressure chamber with both an external and internal pressure of 2 bar.
2. Peg the piston in a fixed position.
3. Take the cylinder out of the pressure chamber with P_ext= 1 bar.
4. Suddenly pull the peg.

[Image: A diagram showing a black background with gray and red horizontal bars, depicting a model or process.]

Figure 19.3.4 : A piston is being irreversibly and isothermally expanded under constant external pressure from state 1 to state 2.

[Note: corrected; the source prints "Figure 19.3.1 : A piston is being irreversibly and isothermally expanded" where this reads "Figure 19.3.4 : A piston is being irreversibly and isothermally expanded". The six figures on this page are all numbered 19.3.1 in the source; they are 19.3.1 to 19.3.6.]

The piston will shoot up till the internal and external pressures balance out again and the volume is 2 L. Notice that the external pressure was maintained constant at 1 bar during the peg-pulling and that the internal and external pressures were not balanced at all time.

[Image: Graph showing a pressure-volume (P-V) curve with two points labeled 1 and 2, and an external pressure line (P_ext).]

Figure 19.3.5 : The system is being irreversibly and isothermally expanded from state 1 to 2. The amount of work being done by the system is shown by the shaded area.

[Note: corrected; the source prints "Figure 19.3.1 : The system is being irreversibly" where this reads "Figure 19.3.5 : The system is being irreversibly". As above.]

The amount of irreversible work being done is again equal to the shaded region and the equation:

w = −P_ext ΔV = −P_ext(V2 − V1)

[Note: corrected; the source prints "w = −PΔV = −P_ext(V2 − V1) = −PΔV" where this reads "w = −P_ext ΔV = −P_ext(V2 − V1)". The external pressure counts.]

This is less work than the reversible expansion delivers. Work is being done by the system, so the overall work being done is negative. Let's repeat the experiment, but this time the piston will expand reversibly over infinitesimally small steps where the P_ext = P_system:

[Note: corrected; the source prints "This represents the minimum amount of work that can be done for an isothermal expansion. Work is being done on the system, so the overall work being done is negative. Let's repeat the experiment, but this time the piston will compress reversibly" where this reads "This is less work than the reversible expansion delivers. Work is being done by the system, so the overall work being done is negative. Let's repeat the experiment, but this time the piston will expand reversibly". In an expansion the system does the work; and the next step is a reversible expansion. A free expansion would do no work at all, so this is not a minimum.]

[Image: Graph showing pressure (P) vs. volume (V) with a curved line indicating a relationship, labeled points 1 and 2.]

Figure 19.3.6 : The system is being reversibly and isothermally expanded from state 1 to 2. The amount of work being done by the system is shown by the shaded area. Note that for an expansion, a reversible process does more work than an irreversible process.

[Note: corrected; the source prints "Figure 19.3.1 : The system is being reversibly" where this reads "Figure 19.3.6 : The system is being reversibly". As above.]

Notice that not only is more work is being done than the one-step irreversible isothermal expansion, and it is equal in magnitude, but opposite in sign, to the work needed to compress the gas reversibly back from 2 L to 1 L. This is the maximum amount of work that can be done during an expansion.

[Note: corrected; the source prints "but it is the same amount of work being done as the reversible isothermal compression." where this reads "and it is equal in magnitude, but opposite in sign, to the work needed to compress the gas reversibly back from 2 L to 1 L.". The page's reversible compression (1 L to 0.5 L) takes 69.3 J and this expansion gives 138.6 J.]
