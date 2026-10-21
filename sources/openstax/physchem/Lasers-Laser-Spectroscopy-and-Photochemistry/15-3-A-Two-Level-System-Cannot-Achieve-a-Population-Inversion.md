---
title: "15.3: A Two-Level System Cannot Achieve a Population Inversion"
book: "Physical Chemistry (LibreTexts)"
chapter: "15: Lasers, Laser Spectroscopy, and Photochemistry"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/15%3A_Lasers_Laser_Spectroscopy_and_Photochemistry/15.03%3A_A_Two-Level_System_Cannot_Achieve_a_Population_Inversion"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## Lasing in Two-Level Systems

For the sake of our studies, let's first consider a laser medium whose atoms have only two energy states: a ground state and one excited state. In such an idealized atom the only possible transitions are excitation from the ground state to the excited state and de-excitation from the excited state back into ground state. Could such an atom be used to make a laser?

There are several important conditions that our laser must satisfy. First of all, the light that it produces must be coherent. That is to say, it must emit photons that are in-phase with one another. Secondly, it should emit monochromatic light, i.e. photons of the same frequency (or wavelength). Thirdly, it would be desirable if our laser's output were collimated, producing a sharply defined "pencil-like" beam of light (this is not crucial, but clearly a desirable condition). Lastly, it would also be desirable for our laser to be efficient, i.e. the higher the ratio of output energy - to - input energy, the better.

Let us begin by examining the requirements for our first condition for lasing, coherence. This condition is satisfied only when the lasing transition occurs through stimulated emission. As we have already seen, stimulated emission produces identical photons that are of equal energy and phase and travel in the same direction. But for stimulated emission to take place a "passer-by" photon whose energy is just equal to the de-excitation energy must approach the excited atom before it de-excites via spontaneous emission. Typically, a photon emitted by the spontaneous emission serves as the seed to trigger a collection of stimulated emissions. Still, if the lifetime of the excited state is too short, then there will not be enough excited atoms around to undergo stimulated emission. So, the first criteria that we need to satisfy is that the upper lasing state must have a relatively long lifetime, otherwise known as a meta-stable state, with typical lifetimes in the milliseconds range. In addition to the requirement of a long lifetime, we need to ensure that the likelihood of absorption of the "passer-by" photons is minimized. This likelihood is directly related to the ratio of the atoms in their ground state versus those in the excited state. The smaller this ratio, the more likely that the "passer-by" photon will cause a stimulated emission rather than get absorbed. So, to satisfy this requirement, we need to produce a population inversion: create more atoms in the excited state than those in the ground state.

Another way of stating the above set of conditions is that the rate of absorption must be less than the rate of stimulated emission

B21ρν(ν21)N2 (rate of stimulated emission) > B12ρν(ν12)N1 (rate of absorption)

As shown in the previous section, B21 = B12 and ρν(ν12) = ρν(ν21), thus Equation (15.3.1) becomes

N2 > N1.

Hence, if N2 > N1 then there is a population inversion.

Population inversion cannot be achieved in a two-level atom by pumping. Such a task would require a very strong pumping transition that would send any decaying atom back into its excited state. This would be similar to reversing the flow of water in a waterfall. Even an arbitrarily strong pump only brings the populations toward equality, since absorption and stimulated emission have the same B coefficient. In a sense, the pumping transition would have to work against the lasing transition.

[Note: corrected; the source prints "Achieving population inversion in a two-level atom is not very practical." where this reads "Population inversion cannot be achieved in a two-level atom by pumping."; the source prints "It can be done but is very energy costly and inefficient." where this reads "Even an arbitrarily strong pump only brings the populations toward equality, since absorption and stimulated emission have the same B coefficient.". At steady state N2/N1 = Bρ/(Bρ + A21) < 1 for any pump strength, as the title of this section says.]

Figure 15.3.1: A two-level lasing system. (CC BY-NC; Ümit Kaya via LibreTexts)
Diagram illustrating atomic transitions: before, during, and after photon emission between excited and ground states.

It is clear, from figure 15.3.1, that in the two-level atom the pump is, in a way, the laser itself! Such a two-level laser would work only in jolts. That is to say, once the population inversion is achieved the laser would lase. But immediately it would end up with more atoms in the lower level. Such two-level lasers involve a more complicated process. We will see, in later material, examples of these in the context of excimer lasers, which are pulsed lasers. For continuous lasing action, we need to consider other possibilities, such as a three-level atom.
