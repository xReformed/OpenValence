---
title: "26.2: Migration Rates of Solutes"
book: "Instrumental Analysis (LibreTexts)"
chapter: "26: Introduction to Chromatographic Separations"
source_url: "https://chem.libretexts.org/Bookshelves/Analytical_Chemistry/Instrumental_Analysis_(LibreTexts)/26%3A_Introduction_to_Chromatographic_Separations/26.02%3A_Migration_Rates_of_Solutes"
author: "Harveyd"
license: "CC BY-NC-SA 4.0"
---

Our ability to separate two solutes depends on the equilibrium interactions of the solute with the stationary phase and the mobile phase, which affects both the time it takes a solute to travel through the column and the width of the solute's elution profile. In this section we consider the rate at which the solute moves through the column.

[Note: corrected; the source prints "which effects both" where this reads "which affects both". The verb meaning "influences" is "affects".]

## Distribution Constants

Let’s assume we can describe a solute’s distribution between the mobile phase and stationary phase using the following equilibrium reaction

S_m ⇌ S_s

where S_m is the solute in the mobile phase and S_s is the solute in the stationary phase. The equilibrium constant for this reaction is an equilibrium partition coefficient, K_D.

KD = ([S_s])/([S_m])

This is not a trivial assumption. In this section we are, in effect, treating the solute’s equilibrium between the mobile phase and the stationary phase as if it is identical to the equilibrium in a simple liquid–liquid extraction carried out in a separatory funnel. You might question whether this is a reasonable assumption. There is an important difference between the two experiments that we need to consider. In a liquid–liquid extraction the two phases remain in contact with each other at all times, allowing for a true equilibrium. In chromatography, however, the mobile phase is in constant motion. A solute that moves into the stationary phase from the mobile phase will equilibrate back into a different portion of the mobile phase; this does not describe a true equilibrium.

So, we ask again: Can we treat a solute’s distribution between the mobile phase and the stationary phase as an equilibrium process? The answer is yes, if the mobile phase velocity is slow relative to the kinetics of the solute’s movement back and forth between the two phases. In general, this is a reasonable assumption.

[Note: corrected; the source prints "between the two phase." where this reads "between the two phases.". The noun refers to both phases and is plural.]

## Retention Time

We can characterize a chromatographic peak’s properties in several ways, two of which are shown in Figure 26.2.1. Retention time, t_r, is the time between the sample’s injection and the maximum response for the solute’s peak. A chromatographic peak’s baseline width, w, as shown in Figure 26.2.1, is determined by extending tangent lines from the inflection points on either side of the peak through the baseline. Although usually we report t_r and w using units of time, we can report them using units of volume by multiplying each by the mobile phase’s velocity, or report them in linear units by measuring distances with a ruler.

For example, a solute’s retention volume,V_r, is t_r × u where u is the mobile phase’s velocity through the column.

[Note: A time multiplied by a linear velocity gives a length, not a volume. To report t_r and w as volumes, multiply by the mobile phase's volumetric flow rate (for example, mL/min); the u here (and in 27.1's V_r = t_r × u) has to be read as that flow rate, while in 26.3 u is the mobile phase's linear velocity.]

Figure 26.2.1: Chromatogram showing a solute’s retention time, t_r, and baseline width, w, and the column’s void time, t_m, for nonretained solutes. In this section we focus on retention time; we will consider the width of the solute's peak in Section 26.3.
Chromatogram showing a solute’s retention time, tr, and baseline width, w, and the column’s void time, tm, for nonretained solutes. In this section we focus on retention time; we will consider the width of the solute's peak in Section 26.3.

In addition to the solute’s peak, Figure 26.2.1 also shows a small peak that elutes shortly after the sample is injected into the mobile phase. This peak contains all nonretained solutes, which move through the column at the same rate as the mobile phase. The time required to elute the nonretained solutes is called the column’s void time, t_m.

## The Rate of Solute Migration: The Retention Factor

In the absence of any additional equilibrium reactions in the mobile phase or the stationary phase, K_D is equivalent to the distribution ratio, D,

D = ([S_s])/([S_m]) = ((molS)_s/V_s)/((molS)_m/V_m) = KD

[Note: corrected; the source prints "([S0])" where this reads "([S_s])". The distribution ratio is the solute's concentration in the stationary phase over that in the mobile phase, [S_s]/[S_m], as in K_D above and the moles-per-volume form that follows.]

where V_s and V_m are the volumes of the stationary phase and the mobile phase, respectively.

A conservation of mass requires that the total moles of solute remain constant throughout the separation; thus, we know that the following equation is true.

(molS)_tot = (molS)_m + (molS)_s

Solving Equation (mig4) for the moles of solute in the stationary phase and substituting into Equation (mig3) leaves us with

[Note: corrected; the source prints "substituting into Equation (mig2)" where this reads "substituting into Equation (mig3)". The substitution is into the distribution ratio written in moles and volumes, Equation (mig3), which gives the equation that follows; Equation (mig2) is K_D in concentrations.]

D = ({(mol S)_tot − (mol S)_m}/V_s)/((mol S)_m/V_m)

Rearranging this equation and solving for the fraction of solute in the mobile phase, f_m, gives

f_m = ((mol S)_m)/((mol S)_tot) = (V_m)/(DV_s + V_m)

Because we may not know the exact volumes of the stationary phase and the mobile phase, we simplify Equation (mig6) by dividing both the numerator and the denominator by V_m; thus

f_m = (V_m/V_m)/(DV_s/V_m + V_m/V_m) = 1/(DV_s/V_m + 1) = 1/(1 + k)

where k

k = D × (V_s)/(V_m)

is the solute’s retention factor. Note that the larger the retention factor, the more the distribution ratio favors the stationary phase, leading to a more strongly retained solute and a longer retention time.

Other (older) names for the retention factor are capacity factor, capacity ratio, and partition ratio, and it sometimes is given the symbol k^′. Keep this in mind if you are using other resources. Retention factor is the approved name from the IUPAC Gold Book.

We can determine a solute’s retention factor from a chromatogram by measuring the column’s void time, t_m, and the solute’s retention time, t_r (see Figure 26.2.1). Solving Equation (mig7) for k, we find that

k = (1 − f_m)/(f_m)

Earlier we defined f_m as the fraction of solute in the mobile phase. Assuming a constant mobile phase velocity, we also can define f_m as

f_m = ( time spent in the mobile phase )/( total time spent on the column ) = (t_m)/(t_r)

[Note: corrected; the source prints "( time spent in the stationary phase )" where this reads "( total time spent on the column )". f_m is the fraction of the solute's time spent in the mobile phase, t_m/t_r, and the retention time t_r is the total time on the column (mobile phase plus stationary phase), not the time spent in the stationary phase alone.]

Substituting back into Equation (mig9) and rearranging leaves us with

k = (1 − (tm)/(tr))/((t_m)/(t_r)) = (t_r − t_m)/(t_m) = (t_r^′)/(t_m)

where t_r^′ is the adjusted retention time.

### Example 26.2.1

In a chromatographic analysis of low molecular weight acids, butyric acid elutes with a retention time of 7.63 min. The column’s void time is 0.31 min. Calculate the retention factor for butyric acid.

**Solution**

k_but = (t_r − t_m)/(t_m) = (7.63 min−0.31 min)/(0.31 min) = 23.6

<!-- end of example -->

Figure 26.2.2: Chromatogram for Exercise 26.2.1.
Chromatogram for Exercise 26.2.1.

[Note: The section has no Exercise 26.2.1; the exercise this chromatogram was drawn for is not on the source page.]

## Relative Migration Rates: The Selectivity Factor

Selectivity is a relative measure of the retention of two solutes, which we define using a selectivity factor, α

α = (kB)/(kA) = (t_(r, B) − t_m)/(t_(r, A) − t_m)

where solute A has the smaller retention time. When two solutes elute with identical retention time, α = 1.00; for all other conditions α > 1.00.

### Example 26.2.2

In the chromatographic analysis for low molecular weight acids described in Example 26.2.1, the retention time for isobutyric acid is 5.98 min. What is the selectivity factor for isobutyric acid and butyric acid?

**Solution**

First we must calculate the retention factor for isobutyric acid. Using the void time from Example 26.2.1 we have

k_iso = (t_r − t_m)/(t_m) = (5.98 min−0.31 min)/(0.31 min) = 18.3

The selectivity factor, therefore, is

α = (k_but)/(k_iso) = 23.6/18.3 = 1.29
