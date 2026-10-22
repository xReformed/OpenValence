---
title: "27.2: The Gaussian Distribution of One Component of the Molecular Velocity"
book: "Physical Chemistry (LibreTexts)"
chapter: "27: The Kinetic Theory of Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/27%3A_The_Kinetic_Theory_of_Gases/27.02%3A_The_Gaussian_Distribution_of_One_Component_of_the_Molecular_Velocity"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

As was shown in section 27.1, the pressure of an ideal gas is given as the total force exerted per unit area

P = (F_tot)/A = N_tot((mvx^2)/V) = ((N_tot m)/V)vx^2

The question then becomes how to deal with the velocity term. Initially, it was assumed that all of the molecules had the same velocity, and so the magnitude of the velocity in the x-direction was merely a function of the trajectory. However, real samples of gases comprise molecules with an entire distribution of molecular speeds and trajectories. To deal with this distribution of values, we replaced (vx^2) with the average of the squared velocity in the x direction ⟨vx^2⟩.

[Note: corrected; the source prints "with the squared average of velocity in the x direction ⟨vx⟩^2." where this reads "with the average of the squared velocity in the x direction ⟨vx^2⟩.". ⟨vx^2⟩, the mean of the square, not ⟨vx⟩^2, the square of the mean: ⟨vx⟩ = 0, which would give no pressure.]

P = ((N_tot m)/V)⟨vx^2⟩

[Note: corrected; the source prints "⟨vx⟩^2" where this reads "⟨vx^2⟩". As above: ⟨vx^2⟩.]

The distribution function for velocities in the x direction, known as the Maxwell-Boltzmann distribution, is given by:

f(vx) = √(m/(2πkB T)) (normalization term) exp((−mvx^2)/(2 kB T)) (exponential term)

This function has two parts: a normalization constant and an exponential term. The normalization constant is derived by noting that

∫_−∞^∞ f(vx)dvx = 1

### Normalizing the Maxwell-Boltzmann Distribution

The Maxwell-Boltzmann distribution has to be normalized because it is a continuous probability distribution. As such, the sum of the probabilities for all possible values of v_x must be unity. And since vx can take any value between -∞ and ∞, then Equation (27.2.2) must be true. So if the form of f(vx) is assumed to be

f(vx) = N exp((−mvx^2)/(2 kB T))

The normalization constant N can be found from

∫_−∞^∞ f(vx)dvx = ∫_−∞^∞ N exp((−mvx^2)/(2 kB T))dvx = 1

The expression can be simplified by letting α = m/2kB T:

N∫_−∞^∞ exp(−αvx^2)dvx = 1

A table of definite integrals says that

∫_−∞^∞ e^(−ax^2)dx = √(π/a)

So

N√(π/α) = 1

Thus,

N = √(α/π) = (m/(2πkB T))^(1/2)

And thus the normalized distribution function is given by

f(vx) = (m/(2πkB T))^(1/2)exp(−(mvx^2)/(2 kB T))

### Calculating an Average from a Probability Distribution

Calculating an average for a finite set of data is fairly easy. The average is calculated by

x̄ = (1/N)Σ_(i=1)^N xi

But how does one proceed when the set of data is infinite? Or how does one proceed when all one knows are the probabilities for each possible measured outcome? It turns out that that is fairly simple too!

x̄ = Σ_(i=1)^N xi Pi

where Pi is the probability of measuring the value xi. This can also be extended to problems where the measurable properties are not discrete (like the numbers that result from rolling a pair of dice) but rather come from a continuous parent population. In this case, if the probability is of measuring a specific outcome, the average value can then be determined by

x̄ = ∫xP(x)dx

where P(x) is the function describing the probability distribution, and with the integration taking place across all possible values that x can take.

### Calculating the average velocity in the x direction

A value that is useful (and will be used in further developments) is the average velocity in the x direction. This can be derived using the probability distribution, as shown in the mathematical development box above. The average value of vx is given by

⟨vx⟩ = ∫_−∞^∞ vx f(vx)dx

This integral will, by necessity, be zero. This must be the case as the distribution is symmetric, so that half of the molecules are traveling in the +x direction, and half in the –x direction. These motions will have to cancel. So, a more satisfying result will be given by considering the magnitude of vx, which gives the speed in the x direction. Since this cannot be negative, and given the symmetry of the distribution, the problem becomes

⟨|vx|⟩ = 2∫0^∞ vx f(vx)dx

In other words, we will consider only half of the distribution, and then double the result to account for the half we ignored.

For simplicity, we will write the distribution function as

f(vx) = N exp(−αvx^2)

where

N = (m/(2πkB T))^(1/2)

and

α = m/(2 kB T).

A table of definite integrals shows

∫0^∞ xe^(−ax^2)dx = 1/(2a)

so

⟨|vx|⟩ = 2N(1/(2α)) = N/α

[Note: corrected; the source prints "⟨vx⟩ = 2N" where this reads "⟨|vx|⟩ = 2N". This is the mean of |vx| defined above; ⟨vx⟩ itself is zero, as the text says.]

Substituting our definitions for N and α produces

⟨|vx|⟩ = (m/(2πkB T))^(1/2)((2 kB T)/m) = ((2 kB T)/(πm))^(1/2)

[Note: corrected; the source prints "⟨vx⟩ = (m/" where this reads "⟨|vx|⟩ = (m/". As above: ⟨|vx|⟩.]

This expression indicates the average speed for motion in one direction.

It is important to note that equation (27.2.1) describes the distribution function for one component of the molecular velocity. Because a molecule is able to move in a positive or a negative direction, the range of one component of the molecular velocity (vx in this case) is −∞ to ∞. This distribution of velocities is a Gaussian distribution of velocities, as shown in Figure 27.2.1 .

[Image: Two red Gaussian curves centred on vx = 0, for 300 K and 1000 K, with axes vx / m s⁻¹ and f(vx)/1000.]

[Note: corrected; the source prints "Graph showing a red curve with peaks, labeled on the x-axis as "v_s / m·s⁻¹" and the y-axis as "f(v_s) / 1000"." where this reads "Two red Gaussian curves centred on vx = 0, for 300 K and 1000 K, with axes vx / m s⁻¹ and f(vx)/1000.". The image's alt text, machine-written, misreads the image; this describes it. The plotted values are 1000 f(vx), in s m⁻¹, not f(vx)/1000 as the axis says.]

Figure 27.2.1 : Distribution of the x component of the velocity of a nitrogen molecule at 300 K and 1000 K. (CC BY-NC; Ümit Kaya via LibreTexts)

We will find in section 27.3 that the distribution of molecular speeds is not a Gaussian distribution.

## Contributors and Attributions

- Patrick E. Fleming (Department of Chemistry and Biochemistry; California State University, East Bay)
- Tom Neils (Grand Rapids Community College, editing)
