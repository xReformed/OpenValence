---
title: "16.1: All Dilute Gases Behave Ideally"
book: "Physical Chemistry (LibreTexts)"
chapter: "16: The Properties of Gases"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/16%3A_The_Properties_of_Gases/16.01%3A_All_Dilute_Gases_Behave_Ideally"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

Ideal gases have no interactions between the particles, hence, the particles do not exert forces on each other. However, particles do experience a force when they collide with the walls of the container. Let us assume that each collision with a wall is elastic. Let us assume that the gas is in a cubic box of length a and that two of the walls are located at x = 0 and at x = a. Thus, a particle moving along the x direction will eventually collide with one of these walls and will exert a force on the wall when it strikes it, which we will denote as Fx. Since every action has an equal and opposite reaction, the wall exerts a force −Fx on the particle.

[Image: Diagram illustrating particles represented as red circles, with a gray barrier and a force Fx indicated by a horizontal arrow.]

According to Newton’s second law, the force −Fx on the particle in this direction gives rise to an acceleration via

−Fx = max = m (Δvx)/Δt

Here, Δt represents the time interval between collisions with the same wall of the box. In an elastic collision, all that happens to the velocity is that it changes sign. Thus, if vx is the velocity in the x direction before the collision, then −vx is the velocity after, and Δvx = −vx − vx = −2 vx, so that

[Note: corrected; the source prints "Here, t represents the time interval" where this reads "Here, Δt represents the time interval". The equations use Δt.]

−Fx = −2 m (vx)/Δt

Since the particles have no forces acting upon them, except for when they collide iwht the wall container, the particles move at constant speed. Thus, a collision between a particle and, say, the wall at x = 0 will not change the particle’s speed. Before it strikes this wall again, it will proceed to the wall at x = a first, bounce off that wall, and then return to the wall at x = 0. The total distance in the x direction traversed is 2a, and since the speed in the x direction is always vx, the interval Δt = (2a)/(vx). Consequently, the force is:

−Fx = −(mvx^2)/a

Thus, the force that the particle exerts on the wall is:

Fx = (mvx^2)/a

The mechanical definition of pressure is the average force over area:

P = (⟨F⟩)/A

where ⟨F⟩ is the average force exerted by all N particles on a wall of the box of area A. Here A = a^2. If we use the wall at x = 0 we have been considering, then

P = (N⟨Fx⟩)/a^2

because we have N particles hitting the wall. Hence:

P = (Nm⟨vx^2⟩)/a^3

from our study of the Maxwell-Boltzmann distribution, we found that:

⟨vx^2⟩ = (kB T)/m

Hence, since a^3 = V:

P = (NkB T)/V

= nRT/V

which is the ideal gas law. It relates the pressure, volume, and temperature of an ideal gas and is referred to as an equation of state. An equation of state is a relation between variables and describes the state of matter under a set of given physical conditions. One way to visualize any equation of state is to plot isotherms, which are graphs of P vs. V at fixed values of T . For the ideal-gas equation of state, some of the isotherms are shown in the figure below (left panel): If we plot P vs. T at fixed volume (called the isochores), we obtain the plot in the right panel. What is important to note, here, is that an ideal gas can exist only as a gas. It is not possible for an ideal gas to condense into some kind of “ideal liquid”. In other words, a phase transition from gas to liquid can be modeled only if interparticle interactions are properly accounted for.

Figure 16.1.1: (Left) Pressure vs. volume for different temperatures (isotherms of the ideal-gas equation of state. (Right) Pressure vs. temperature for different densities ρ = N/V.
Left: ideal-gas P–V isotherms at temperatures T1, T2, T3; right: P–T lines (isochores) for different densities ρ.

[Note: corrected; the source prints "Two diagrams depicting thermodynamic processes: left shows isotherms (T1, T2, T3) in a P-V graph; right illustrates lines (P1, P2, P3) in a similar context." where this reads "Left: ideal-gas P–V isotherms at temperatures T1, T2, T3; right: P–T lines (isochores) for different densities ρ.". The image's alt text, machine-written, misreads the image; this describes it.]

We can rearrange the ideal gas equation of state to put all the constants and variables on one side:

PV/nRT = 1 = Z

Z is called the compressibility factor of the gas. In an ideal gas, if we compress the gas by increasing P , the volume decreases as well so as to keep Z = 1. For a real gas, Z, therefore, gives us a measure of how much the gas deviates from ideal-gas behavior.

[Note: corrected; the source prints "Z is called the compressibility of the gas." where this reads "Z is called the compressibility factor of the gas.". Z is the compressibility factor, as the caption of Figure 16.1.2 calls it; the compressibility is −(1/V)(∂V/∂P)T.]

Figure 16.1.2: A graph of the compressibility factor (Z) vs. pressure shows that gases can exhibit significant deviations from the behavior predicted by the ideal gas law. from Openstax (CC-BY)
Graph depicting multiple curves representing different gases (N₂, CH₄, H₂, CO₂) over a range of pressures (0-1600).

Figure 16.1.2 shows a plot of Z vs. P for several real gases and for an ideal gas. The plot shows that for sufficiently low pressures (hence, low densities), each gas approaches ideal-gas behavior, as expected.

## Extensive and Intensive Properties in Thermodynamics

Before we discuss ensembles and how we construct them, we need to introduce an important distinction between different types of thermodynamic properties that are used to characterize the ensemble. This distinction is extensive and intensive properties.

Thermodynamics always divides the universe into a system and its surroundings with a boundary between them. The unity of all three of these is the thermodynamic universe.

[Image: Diagram of a system with a labeled boundary, surrounded by the surrounding area, shown against a blue background.]

Now suppose we allow the system to grow in such a way that both the number of particles and the volume grow with the ratio N/V remaining constant. Any property that increases as we grow the system in this way is called an extensive property. Any property that remains the same as we grow the system in this way is called intensive.

The ideal gas equation of state can be written in an intensive form:

[Note: corrected; the source prints "can be written in an extensive form:" where this reads "can be written in an intensive form:". PV̄ = RT and P = ρRT use the intensive V̄ and ρ, as the text below says.]

PV = nRT

PV̄ = RT

P = ρRT

where V̄ = V/n is called the molar volume and ρ = n/V is called the molar density. Unlike V , which increases as the number of moles increases (an extensive quantity, V̄ and ρ do not exhibit this dependence and, therefore, are called intensive. The compressibility factor can also be written in an intensive form:

[Note: corrected; the source prints "ρ = N/V is called density" where this reads "ρ = n/V is called the molar density"; the source prints "Compressibility can also be written in an intensive form:" where this reads "The compressibility factor can also be written in an intensive form:". P = ρRT needs the molar density n/V; with the number density N/V it would be P = ρkB T. And Z is the compressibility factor.]

Z = PV/nRT

= (PV̄)/RT

= P/(ρRT)

Some examples of intensive and extensive properties include:

- Extensive: number of particles (N), moles (n), volume (V), mass (m), energy, free energy
- Intensive: pressure (P), density (ρ), molar heat capacity (C), temperature (T)

## Contributors and Attributions

- Mark Tuckerman (New York University)
- Jerry LaRue (Chapman University)
