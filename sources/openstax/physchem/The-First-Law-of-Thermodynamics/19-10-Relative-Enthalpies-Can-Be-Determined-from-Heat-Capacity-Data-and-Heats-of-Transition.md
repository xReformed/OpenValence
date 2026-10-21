---
title: "19.10: Relative Enthalpies Can Be Determined from Heat Capacity Data and Heats of Transition"
book: "Physical Chemistry (LibreTexts)"
chapter: "19: The First Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/19%3A_The_First_Law_of_Thermodynamics/19.10%3A_Relative_Enthalpies_Can_Be_Determined_from_Heat_Capacity_Data_and_Heats_of_Transition"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

It should be stressed that there are no absolute enthalpies. All that is properly defined are differences in enthalpy ΔH and these are only defined for processes

### When dealing with enthalpies

Define the Process

For example for the process of:

Process 1: heating ice from -20^oC to -0^oC

We could write ΔH1 = ∫ C_(P,ice). dT from T=253K to T=273K = H(273) -H(253). But before moving beyond the melting point first a different process needs to take place, that of

Process 2: melting

This gives us Δ_fus H = H_liquid - H_solid (both at 273K!). When we heat the liquid water further to say +20^oC we would have to integrate over the heat capacity of the liquid.

Process 3: heating water from 0^oC to +20^oC

We could write

ΔH3 = ∫C_(P, water) dT

from T=273K to T=293K = H(293)-H(273).

The total change in enthalpy between -20 and +20 would be the sum of the three enthalpy changes.

ΔH_totalprocess = ΔH1 + Δ_fus H + ΔH3

Of course we could consider doing the same calculation for any temperature between -20 and +20 and summarize all our results in a graph. The three processes can thus schematically be shown in Figure 19.10.1 .

[Image: Schematic plot of enthalpy against temperature: a line for ice, a vertical jump at the melting point, then a slightly steeper line for liquid water.]

[Note: corrected; the source prints "[Image: Graph showing the relationship between temperature (x-axis) and energy (y-axis), with a noticeable increase at higher temperatures.]" where this reads "[Image: Schematic plot of enthalpy against temperature: a line for ice, a vertical jump at the melting point, then a slightly steeper line for liquid water.]". The image's alt text, machine-written, misreads the image; this describes it.]

Figure 19.10.1 : Schematic enthalpy function showing the jump at the melting point

Notice that the slopes (i.e. the heat capacities!) before and after the melting point differ. The slope for the liquid is a little steeper because the liquid has more degrees of freedom and therefore the heat capacity of the liquid tends to be higher than of the solid. In the figure the enthlapy curves are shown as straight lines. This would be the case if the heat capacities are constant over the temperature interval. Although C_p is typically a 'slow' or 'weak' function of temperature it usually does change a bit, which means that the straight lines for H become curves.

> Although C_p is typically a 'slow' or 'weak' function of temperature and is well approximated as a constant.

Notice that for process two, the temperature is constant, that means that ΔT or dT is zero, but ΔH is finite, consequently ΔH/ΔT is infinitly large. Taking the limit for ΔT going to zero, we get a derivative:

((∂H)/(∂T))_p = Cp

This derivative, the heat capacity must undergo a singularity: the slope is infinitely large (i.e, the H curve goes straight up). When there are more phase transitions, more discontinuities in H and singularities in Cp result (Figure 19.10.1 ). Note that H(T) − H(0), not H(T) is plotted to avoid the question what the absolute enthalpy is.

### Scanning calorimetry

There is technique that allows us to measure the heat capacity as a function of temperature fairly directly. It is called Differential Scanning Calorimetry (DSC). You put a sample in a little pan and put the pan plus an empty reference pan in the calorimeter. The instrument heats up both pans with a constant heating rate. Both pans get hotter by conduction, but the heat capacity of the filled pan is obviously bigger. This means that the heat flow into the sample pan must be a bit bigger than into the empty one. This differential heat flow induces a tiny temperature difference ΔT between the two pans that can be measured. This temperature difference is proportional to the heat flow difference which is proportional to the heat capacity difference.

ΔT ∝ ΔΦ ∝ Δ_betweenpans Cp = Cp^(sample) (ifthepanscancel)

[Note: corrected; the source prints "ΔT ∼ ΔΦ ∼" where this reads "ΔT ∝ ΔΦ ∝". The text says proportional; the source's ~ shows only as a space.]

However, there are number of serious broadening issues with the technique. If you melt something you will never get to see the infinite singularity of the heat capacity. Instead it broadens out into a peak. If you integrate the peak you get the Δ_fusion H and the onset is calibrated to give you the melting point.

The ideal heat capacity signal and its broadened DSC signal
Graph showing an integrated area under a peak, labeled with temperature (T) and phase states: solid and lipid.

It is even possible to heat the sample with a rate that fluctuates with a little sine wave. This "Modulated DSC" version can even give you the (small) difference in Cp before and after the melting event.
