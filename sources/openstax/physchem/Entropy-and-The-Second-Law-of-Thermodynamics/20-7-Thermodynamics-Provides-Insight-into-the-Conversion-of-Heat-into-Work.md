---
title: "20.7: Thermodynamics Provides Insight into the Conversion of Heat into Work"
book: "Physical Chemistry (LibreTexts)"
chapter: "20: Entropy and The Second Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20%3A_Entropy_and_The_Second_Law_of_Thermodynamics/20.07%3A_Thermodynamics_Provides_Insight_into_the_Conversion_of_Heat_into_Work"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Heat and work are both forms of transferring energy, and under the right circumstance, one form may be transformed into the other. However, the second law of thermodynamics puts a limitation on this. To go from work to heat is called dissipation and there is no limitation on this at all. In fact it was through dissipation (by friction) that we discovered that heat and work were both forms of energy. There is, however, a limitation on converting heat to work.

## The Carnot Cycle

Let's consider a circular, reversible path of an ideal gas on a PV diagram in Figure 20.7.1:

Figure 20.7.1: A circular, reversible path of a Carnot cycle as an ideal gas on a PV diagram. (CC BY 4.0; Jerry LaRue via LibreTexts)
Graph illustrating a pressure-volume relationship with labeled processes: adiabatic heating, isothermal expansion, adiabatic cooling, and isothermal compression.

This cycle forms the 4-stage Carnot cycle heat engine. A heat engine converts heat energy into work. The cycle consists of:

1. Isothermal expansion at the hot temperature, Th: ΔU1 = w1 + qh = 0
2. Adiabatic cooling from Th to Tc: ΔU2 = w2
3. Isothermal compression at the cold temperature, Tc: ΔU3 = w3 + qc = 0
4. Adiabatic heating from Tc to Th: ΔU4 = w4

The total four-step process produces work because w_hot > w_cold. The work is the integral under the upper isotherm minus the one under the lower curve, i.e. the surface area in between.

### Sadi Carnot

Sadi Carnot was a French engineer at the beginning of the 19th century. He considered a cyclic process involving a cylinder filled with gas. This cycle the Carnot cycle contributed greatly to the development of thermodynamics and the improvement of the steam engine. Carnot demonstrated that the cold temperature on the right is as important as the heat source on the left in defining the possible efficiency of a heat engine

Figure 20.7.2: Animation of a typical vertical triple-expansion engine. (CC SA-BY 2.5; Emoscopes)
Animation of a vertical triple-expansion steam engine.

[Note: corrected; the source prints "Diagram of three locks with colored lines and multiple rods, illustrating a mechanism or system." where this reads "Animation of a vertical triple-expansion steam engine.". The image's alt text, machine-written, misreads the image; this describes it.]

## Efficiency

Of course we spend good money on the fuel to start the cycle by heating things up. So how much work do we get for the heat we put in? In other words, we want to know how efficient our heat engine is. The efficiency, η of a heat engine is:

η = (|w_cycle|)/(qh) = (qh + qc)/(qh) = 1 + (qc)/(qh)

To get the work of the cycle, we can make use of internal energy as a state function. As the path is circular the circular integrals for U is zero:

∮dU = ΔU_cycle

= ΣΔUi

= w1 + qh + w2 + w3 + qc + w4

= 0

Rearranging:

qh + qc = −w1 − w2 − w3 − w4

= −w_cycle

An ideal engine would take qh → qc with 100% efficiency. The work of the cycle will be equivalent to the heat transfer. For ideal gases:

1. w1 = −RTh ln((VB)/(VA)) = −qh
2. dU = δw = C̄V dT → w2 = C̄V(Tc − Th)
3. w3 = −RTc ln((VD)/(VC)) = −qc
4. w4 = C̄V(Th − Tc)

Finding an expression for w_cycle:

w_cycle = −RTh ln((VB)/(VA)) + C̄V(Tc − Th) − RTc ln((VD)/(VC)) + C̄V(Th − Tc)

= −RTh ln((VB)/(VA)) − RTc ln((VD)/(VC)) = −R(Th − Tc) ln((VB)/(VA))

We have an expression for work, so we can evaluate the efficiency, η. The efficiency of the Carnot engine is:

η = (|w_cycle|)/(qh) = (R(Th − Tc) ln((VB)/(VA)))/(RTh ln((VB)/(VA))) = (Th − Tc)/(Th) = 1 − (Tc)/(Th)

Paths (2) and (4) are adiabats, so we can also use entropy, S, to get the same solution:

∮dS = (qh)/(Th) + (qc)/(Tc) = 0

Therefore:

(qc)/(qh) = −(Tc)/(Th)

And we get that:

η = 1 + (qc)/(qh) = 1 − (Tc)/(Th)

As you see we can only get full efficiency if T_cold is 0 K, which is never (i.e., we always waste energy). Another implication is that if Tc = Th then no work can be obtained, no matter how much energy is available in the from of heat. Or in other words, if one dissipates work into heat isothermally, none of it can be retrieved. Equation (eff) is not very forgiving at all. Just imaging that you have a heat source of say 400 K (a superheated pool of water, e.g. a geyser) and you are dumping in the river at room temperature 300 K. The best efficiency you'll ever get is:

η = 1 − 300/400 = 25%

[Note: corrected; the source prints "= 24%" where this reads "= 25%". 1 − 0.75 = 0.25.]

Sadly, you'd be dumping three quarters of your energy as heat in the river (and that is best case scenario as there are always more losses, e.g. due to friction). The arrow saying QC in Figure 20.7.3 should then be three times as fat as the one that says w.

Figure 20.7.3: Carnot engine diagram (modern) - where an amount of heat Q_H flows from a high temperature T_H furnace through the fluid of the "working body" (working substance) and the remaining heat Q_C flows into the cold sink T_C, thus forcing the working substance to do mechanical work W on the surroundings, via cycles of contractions and expansions. (Public Domain; Eric Gaba)
Schematic diagram showing a working body with two heat sources, labeled "Hot" and "Cold," and energy flow indicators.

## Heat pumps

So getting our work from heat is hard and always less than 100% successful. The other way around should be easy. After all, we can dissipate work into heat freely even under isothermal conditions!

What happens if we let the heat engine run backwards? Consider reversing all the flows in the above diagram. Obviously we must put in work to make the cycle run in reverse. The heat will now flow from cold to hot, say from your cold garden into your nice and warm apartment. The amount of heat you get in your humble abode will be the sum of all the work (say 100 Joules) you dissipate plus the heat you pumped out of the garden (say 300 Joules). Thus if you are willing to pay for the energy you dissipate (100 Joules), you may well end up with a total of 400 Joules of heat in your apartment! Obviously if it is heat you after this is a better deal than just dissipating the work in your apartment (by burning some oil). Then you'd only get 100 J for your precious buck.

Dissipating it as electrical heating is even worse because you would

1. first burn (a lot more!) oil to generate heat
2. use this heat to produce electrical work at great expense because a lot of the heats gets dumped at the low temperature side (the river or so)
3. dissipate the work again in your apartment (without using it to pump any heat out of the garden)

Refrigerators are also heat pumps. They heat the kitchen by pumping heat from its innards to the kitchen. If I keep the door open, however, all it does is dissipate precious electrical work, because the pumped heat will flow back into its innards and spoil the milk.

## Stirling Engine

Let's consider another type of heat engine, the Stirling engine. The Stirling engine uses a circular reversible path in an ideal PV diagram in Figure 20.7.4:

Figure 20.7.4: an ideal PV diagram of the Stirling engine. (CC BY 4.0; Jerry LaRue via LibreTexts)
PV diagram of the Stirling cycle: isothermal expansion and compression joined by constant-volume heating and cooling.

[Note: corrected; the source prints "Graph displaying pressure versus volume with labeled isothermal processes: heating, expansion, cooling, and compression." where this reads "PV diagram of the Stirling cycle: isothermal expansion and compression joined by constant-volume heating and cooling.". The heating and cooling steps are isochoric. The image's alt text, machine-written, misreads the image; this describes it.]

The path consists of four steps:

1. Isothermal expansion at the hot temperature Th: q1 = qh = −w and we get work out (i.e., negative work): wh = −RTh ln((VB)/(VA))
2. Isochoric heating from Tc to Th (with constant CV): q2 = CV ΔT
3. Isothermal compression at the cold temperature Tc: q3 = qc = −w and we must put work in (i.e., positive work): wc = −RTc ln((VD)/(VC)) = RTc ln((VB)/(VA))
4. Isochoric cooling from Th to Tc (with constant CV): q4 = −CV ΔT

[Note: corrected; the source prints "q2 = (CV)/ΔT" where this reads "q2 = CV ΔT"; the source prints "q4 = −(CV)/ΔT" where this reads "q4 = −CV ΔT". Heat at constant volume is CV ΔT. (The order of the steps is also muddled: after the expansion at Th the gas is cooled at constant volume, and heated again before the expansion; the efficiency is unaffected.)]

Notice that this gray area vanishes if Th = Tc. Obviously how cold the cold side is of great importance! The amount of work is also equal to the difference in the heat picked up at high temperature qh and dumped at low temperature qc. The isochoric heats cancel. The problem is that qc is only zero if the cold temperature is 0 K. That means that we can never get all the heat we pick up at high temperatures to come out as work.
