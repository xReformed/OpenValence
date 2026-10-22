---
title: "27.3: The Distribution of Molecular Speeds is Given by the Maxwell-Boltzmann Distribution"
book: "Physical Chemistry (LibreTexts)"
chapter: "27: The Kinetic Theory of Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/27%3A_The_Kinetic_Theory_of_Gases/27.03%3A_The_Distribution_of_Molecular_Speeds_is_Given_by_the_Maxwell-Boltzmann_Distribution"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## The Boltzmann Distribution

If we were to plot the number of molecules whose velocities fall within a series of narrow ranges, we would obtain a slightly asymmetric curve known as a velocity distribution. The peak of this curve would correspond to the most probable velocity. This velocity distribution curve is known as the Maxwell-Boltzmann distribution, but is frequently referred to only by Boltzmann's name. The Maxwell-Boltzmann distribution law was first worked out around 1860 by the great Scottish physicist, James Clerk Maxwell (1831-1879), who is better known for discovering the laws of electromagnetic radiation. Later, the Austrian physicist Ludwig Boltzmann (1844-1906) put the relation on a sounder theoretical basis and simplified the mathematics somewhat. Boltzmann pioneered the application of statistics to the physics and thermodynamics of matter and was an ardent supporter of the atomic theory of matter at a time when it was still not accepted by many of his contemporaries.

[Image: Black and white portrait of a man with a beard and mustache, looking directly at the viewer.]

[Image: Sepia-toned portrait of a man with glasses and a thick beard, dressed in 19th-century formal attire.]

Figure 27.3.1: Maxwell (left) and Boltzmann (right) are responsible for describing the velocity distribution of gas molecules

In section 27.2 we saw that the distribution function for molecular speeds in the x direction is given by:

f(vx) = √(m/(2πkB T)) (normalization term) exp((−mvx^2)/(2 kB T)) (exponential term)

However, real gas samples have molecules not only with a distribution of molecular speeds and but also a random distribution of directions. Using normal vector magnitude properties (or simply using the Pythagorean Theorem), it can be seen that

⟨v^2⟩ = ⟨vx^2⟩ + ⟨vy^2⟩ + ⟨vz^2⟩

[Note: corrected; the source prints "⟨v⟩^2 = ⟨vx⟩^2 + ⟨vy⟩^2 + ⟨vz⟩^2" where this reads "⟨v^2⟩ = ⟨vx^2⟩ + ⟨vy^2⟩ + ⟨vz^2⟩". The means of the squares add (v^2 = vx^2 + vy^2 + vz^2 for each molecule); the squares of the means do not, and ⟨vx⟩ = 0.]

Since the direction of travel is random, the velocity can have any component in x, y, or z directions with equal probability. As such, the average value of the x, y, or z components of velocity should be the same. And so

⟨v^2⟩ = 3⟨vx^2⟩

[Note: corrected; the source prints "⟨v⟩^2 = 3⟨vx⟩^2" where this reads "⟨v^2⟩ = 3⟨vx^2⟩". As above.]

Substituting this into the expression for pressure yields

p = ((N_tot m)/(3V))⟨v^2⟩

[Note: corrected; the source prints "⟨v⟩^2" where this reads "⟨v^2⟩". As above: the mean-square speed.]

All that remains is to determine the form of the distribution of velocity magnitudes the gas molecules can take. In his 1860 paper (Illustrations of the dynamical theory of gases. Part 1. On the motions and collisions of perfectly elastic spheres, 1860), Maxwell proposed a form for this distribution of speeds which proved to be consistent with observed properties of gases (such as their viscosities). He derived this expression based on a transformation of coordinate system from Cartesian coordinates (x, y, z) to spherical polar coordinates (v, θ, φ). In this new coordinate system, v represents the magnitude of the velocity (or the speed) and all of the directional data is carried in the angles θ and φ. The infinitesimal volume unit becomes

dvx dvy dvz = v^2 sin(θ) dv dθ dφ

[Note: corrected; the source prints "dx dy dz = v^2 sin(θ) dv dθ dφ" where this reads "dvx dvy dvz = v^2 sin(θ) dv dθ dφ". The volume element is in velocity space, here and below.]

Applying this transformation of coordinates Maxwell’s distribution took the following form

f(v) = 4πv^2(m/(2πkB T))^(3/2) exp((−mv^2)/(2 kB T))

### The Distribution of Speed over all Directions

The Distribution of Kinetic Energy in Three Dimensions

As noted above, the distribution function of molecular energies for one dimension is

f(vx) = √(m/(2πkB T)) exp((−mvx^2)/(2 kB T))

To obtain a three-dimensional probability distribution, you multiply the distribution function for each of the three dimensions so that

f(vx, vy, vz) = (m/(2πkB T))^(3/2) exp((−mv^2)/(2 kB T))

given v^2 = vx^2 + vy^2 + vz^2

[Note: corrected; the source prints "given ⟨v⟩^2 = ⟨vx⟩^2 + ⟨vy⟩^2 + ⟨vz⟩^2" where this reads "given v^2 = vx^2 + vy^2 + vz^2". The product of the three exponentials uses each molecule's v^2 = vx^2 + vy^2 + vz^2; no averages enter.]

The Conversion of Energy Distribution to Speed Distribution

To convert the three-dimensional energy distribution to a speed distribution over all space, the energy distribution must be summed over all directions. This sum is usually described by imagining a "velocity space" in spherical polar coordinates. As noted above, in this new coordinate system, v represents the magnitude of the velocity (or the speed) and all of the directional data is carried in the angles θ and φ. The infinitesimal volume unit becomes

dvx dvy dvz = v^2 sin(θ) dv dθ dφ

[Note: corrected; the source prints "dx dy dz = v^2 sin(θ) dv dθ dφ" where this reads "dvx dvy dvz = v^2 sin(θ) dv dθ dφ". As above.]

You integrate over θ and φ to sum over all space, thus

f(v) = (m/(2πkB T))^(3/2) exp((−mv^2)/(2 kB T))∫0^π ∫0^(2π) v^2 sin θdφdθ (=4πv^2)

This equation is rearranged to give

f(v) = 4πv^2(m/(2πkB T))^(3/2) exp((−mv^2)/(2 kB T))

This function can be thought of as having three basic parts to it: a normalization constant (N), a velocity dependence (v^2), and an exponential term that contains the kinetic energy (½mv^2).

Because the function represents the fraction of molecules with the speed v, the sum of the fractions for all possible velocities must be unity. This sum can be calculated as an integral. The normalization constant ensures that

∫0^∞ f(v)dv = 1

Thus the normalization constant is

N = 4π√((m/(2πkB T))^3)

## Velocity distributions depend on temperature and mass

Higher temperatures allow a larger fraction of molecules to acquire greater amounts of kinetic energy, causing the Boltzmann plots to spread out. Figure 27.3.2 shows how the Maxwell-Boltzmann distribution is affected by temperature. At lower temperatures, the molecules have less energy. Therefore, the speeds of the molecules are lower and the distribution has a smaller range. As the temperature of the molecules increases, the distribution flattens out. Because the molecules have greater energy at higher temperature, the molecules are moving faster.

Notice how the left ends of the plots are anchored at zero velocity (f(v) goes to zero there, since it is proportional to v^2: almost no molecules are at rest.) As a consequence, the curves flatten out as the higher temperatures make additional higher-velocity states of motion more accessible. The area under each plot is the same for a constant number of molecules.

[Note: corrected; the source prints "(there will always be a few molecules that happen to be at rest.)" where this reads "(f(v) goes to zero there, since it is proportional to v^2: almost no molecules are at rest.)". f(v) ∝ v^2 e^(−mv^2/2kB T) is zero at v = 0, which is why the curves start at zero.]

Figure 27.3.2: Maxwell Distribution of speeds for hydrogen molecules at differing temperatures.
Graph showing the Maxwell distribution of speeds of hydrogen (H₂) at three temperatures: 25 K (blue), 50 K (red), and 100 K (green).

[Note: corrected; the source prints "200 K (red), 300 K (blue), and 400 K (green)" where this reads "25 K (blue), 50 K (red), and 100 K (green)". The image's alt text, machine-written, misreads the image; this describes it. The curves themselves are drawn with exp(−mv^2/kB T), without the 2 of Equation (27.3.1): each peak sits at 1/√2 of the true most probable speed and half its height; so are those of Figure 27.3.3. That is left as printed.]

### Calculating the Average Speed

Using the Maxwell distribution as a distribution of probabilities, the average molecular speed in a sample of gas molecules can be determined.

⟨v⟩ = ∫0^∞ v f(v)dv

[Note: corrected; the source prints "⟨v⟩ = ∫_−∞^∞ v f(v)dv" where this reads "⟨v⟩ = ∫0^∞ v f(v)dv". A speed runs from 0 to ∞, the range on which f(v) is normalized, here and in the next two lines; the result uses the 0-to-∞ integral.]

= ∫0^∞ v 4π√((m/(2πkB T))^3)v^2 exp((−mv^2)/(2 kB T)) dv

[Note: corrected; the source prints "= ∫_−∞^∞ v 4π" where this reads "= ∫0^∞ v 4π". As above.]

= 4π√((m/(2πkB T))^3)∫0^∞ v^3 exp((−mv^2)/(2 kB T)) dv

[Note: corrected; the source prints "∫_−∞^∞ v^3" where this reads "∫0^∞ v^3". As above.]

The following can be found in a table of integrals:

∫0^∞ x^(2n + 1)e^(−ax^2)dx = (n!)/(2a^(n + 1))

So

⟨v⟩ = 4π√((m/(2πkB T))^3)[1/(2(m/(2 kB T))^2)]

Which simplifies to

⟨v⟩ = ((8 kB T)/(πm))^(1/2)

Note: the value of ⟨v⟩ is twice that of ⟨|vx|⟩ which was derived in Section 27.2!

[Note: corrected; the source prints "twice that of ⟨vx⟩ which was derived in an earlier example!" where this reads "twice that of ⟨|vx|⟩ which was derived in Section 27.2!". The mean of |vx| (⟨vx⟩ itself is zero), derived in Section 27.2, not in an example.]

⟨v⟩ = 2⟨|vx|⟩

[Note: corrected; the source prints "⟨v⟩ = 2⟨vx⟩" where this reads "⟨v⟩ = 2⟨|vx|⟩". As above.]

### Example 27.3.1 :

What is the average value of the squared speed according to the Maxwell distribution law?

**Solution**

⟨v^2⟩ = ∫0^∞ v^2 f(v)dv

[Note: corrected; the source prints "⟨v^2⟩ = ∫_−∞^∞ v^2 f(v)dv" where this reads "⟨v^2⟩ = ∫0^∞ v^2 f(v)dv". As for ⟨v⟩: 0 to ∞, here and in the next two lines.]

= ∫0^∞ v^2 4π√((m/(2πkB T))^3)v^2 exp((−mv^2)/(2 kB T)) dv

[Note: corrected; the source prints "= ∫_−∞^∞ v^2 4π" where this reads "= ∫0^∞ v^2 4π". As above.]

= 4π√((m/(2πkB T))^3)∫0^∞ v^4 exp((−mv^2)/(2 kB T)) dv

[Note: corrected; the source prints "∫_−∞^∞ v^4" where this reads "∫0^∞ v^4". As above.]

A table of integrals indicates that

∫0^∞ x^(2n)e^(−ax^2)dx = ((1·3·5…(2 n − 1))/(2^(n + 1)a^n))√(π/a)

Substitution (noting that n = 2) yields

⟨v^2⟩ = 4π√((m/(2πkB T))^3)[((1·3)/(2^3(m/(2 kB T))^2))√(π/((m/(2 kB T))))]

which simplifies to

⟨v^2⟩ = (3 kB T)/m

Note: The square root of this average squared speed is called the root mean square (RMS) speed, and has the value

v_rms = √(⟨v^2⟩) = ((3 kB T)/m)^(1/2)

<!-- end of example -->

All gases have the same average kinetic energy (½mv^2) at the same temperature, so the fraction of molecules with higher velocities will increase as m, and thus the molecular weight, decreases. Figure 27.3.3 shows the dependence of the Maxwell-Boltzmann distribution on molecule mass. On average, heavier molecules move more slowly than lighter molecules. Therefore, heavier molecules will have a smaller speed distribution, while lighter molecules will have a speed distribution that is more spread out.

[Note: corrected; the source prints "All molecules have the same kinetic energy (½mv^2) at the same temperature" where this reads "All gases have the same average kinetic energy (½mv^2) at the same temperature". Individual molecules have a distribution of energies; the average, (3/2)kB T, is the same for every gas.]

Figure 27.3.3: Maxwell Distribution of speeds at 800 K for different gasses of differing molecular masses.
Graph depicting the Maxwell distribution of particle speeds at 800 K, with curves for He (blue), Ar (red) and Xe (green).

[Note: corrected; the source prints "with red, blue, and green curves representing different categories" where this reads "with curves for He (blue), Ar (red) and Xe (green)". The image's alt text, machine-written, misreads the image; this describes it.]

## Related Speed Expressions

Usually, we are more interested in the speeds of molecules rather than their component velocities. The Maxwell–Boltzmann distribution for the speed follows immediately from the distribution of the velocity vector, above. Note that the speed of an individual gas particle is:

v = √(vx^2 + vy^2 + vz^2)

[Note: corrected; the source prints "vy^2 = vz^2" where this reads "vy^2 + vz^2". A plus sign, not "=".]

Three speed expressions can be derived from the Maxwell-Boltzmann distribution:

- the most probable speed,
- the average speed, and
- the root-mean-square speed.

The most probable speed is the maximum value on the distribution plot (Figure 27.3.4 ). This is established by finding the velocity when the derivative of Equation (27.3.1) is zero

(df(v))/dv = 0

which is

v_mp = √((2RT)/M)

[Image: A single curve for O2 at T = 300 K, probability against velocity v (m/s), with the most probable speed v_p and the root-mean-square speed v_rms marked.]

[Note: corrected; the source prints "Graph showing probability distribution with a red curve, labeled axes for relative speed, and marked points for P₀ and vₜ." where this reads "A single curve for O2 at T = 300 K, probability against velocity v (m/s), with the most probable speed v_p and the root-mean-square speed v_rms marked.". The image's alt text, machine-written, misreads the image; this describes it. The caption's first sentence, on curves at higher temperatures, belongs to another figure in the OpenStax book it is taken from; it is left as printed.]

Figure 27.3.4 : The Maxwell-Boltzmann distribution is shifted to higher speeds and is broadened at higher temperatures. from OpenStax. The speed at the top of the curve is called the most probable speed because the largest number of molecules have that speed.

The average speed is the sum of the speeds of all the molecules divided by the number of molecules.

v_avg = v̄ = ∫0^∞ vf(v)dv = √((8RT)/(πM))

The root-mean-square speed is square root of the average speed-squared.

v_rms = √(⟨v^2⟩) = √((3RT)/M)

[Note: corrected; the source prints "v_rms = v̄^2 = √((3RT)/M)" where this reads "v_rms = √(⟨v^2⟩) = √((3RT)/M)". The root of the mean-square speed; v̄ was just used for the mean speed.]

where

- R is the gas constant,
- T is the absolute temperature and
- M is the molar mass of the gas.

It always follows that for gases that follow the Maxwell-Boltzmann distribution:

v_mp < v_avg < v_rms

## Problems

1. Using the Maxwell-Boltzman function, calculate the fraction of argon gas molecules with a speed of 305 m/s at 500 K.
2. If the system in problem 1 has 0.46 moles of argon gas, how many molecules have the speed of 305 m/s?
3. Calculate the values of C_mp, C_avg, and C_rms for xenon gas at 298 K.
4. From the values calculated above, label the Boltzmann distribution plot with the approximate locations of C_mp, C_avg, and C_rms.
5. What will have a larger speed distribution, helium at 500 K or argon at 300 K? Helium at 300 K or argon at 500 K? Argon at 400 K or argon at 1000 K?

**Answers**

1. 0.00141
2. 3.92 × 10^20 argon molecules
3. c_mp = 194.27 m/s, c_avg = 219.21 m/s, c_rms = 237.93 m/s
4. As stated above, C_mp is the most probable speed, thus it will be at the top of the distribution curve. To the right of the most probable speed will be the average speed, followed by the root-mean-square speed.
5. Hint: Use the related speed expressions to determine the distribution of the gas molecules: helium at 500 K. helium at at 300 K. argon at 1000 K.

## Sources

1. Dunbar, R.C. Deriving the Maxwell Distribution J. Chem. Ed. 1982, 59, 22-23.
2. Peckham, G.D.; McNaught, I.J.; Applications of the Maxwell-Boltzmann Distribution J. Chem. Ed. 1992, 69, 554-558.
3. Chang, R. Physical Chemistry for the Biosciences, 25-27.
4. HyperPhysics: http://hyperphysics.phy-astr.gsu.edu...maxspe.html#c3

## Contributors and Attributions

- Prof. David Blauch (Davidson College)
- Stephen Lower, Professor Emeritus (Simon Fraser U.) Chem1 Virtual Textbook
- Adam Maley (Hope College)
- Patrick E. Fleming (Department of Chemistry and Biochemistry; California State University, East Bay)
- Stephanie Schaertel (Grand Valley State University)
- Tom Neils (Grand Rapids Community College, editing)
