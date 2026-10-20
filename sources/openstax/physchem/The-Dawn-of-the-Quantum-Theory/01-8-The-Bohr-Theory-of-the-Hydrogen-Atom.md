---
title: "1.8: The Bohr Theory of the Hydrogen Atom"
book: "Physical Chemistry (LibreTexts)"
chapter: "1: The Dawn of the Quantum Theory"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/01%3A_The_Dawn_of_the_Quantum_Theory/1.08%3A_The_Bohr_Theory_of_the_Hydrogen_Atom"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- Introduce the fundamentals behind the Bohr Atom and demonstrate it can predict the Rydberg's equation for the atomic spectrum of hydrogen

## Rutherford's Failed Planetary Atom

Ernest Rutherford had proposed a model of atoms based on the α-particle scattering experiments of Hans Geiger and Ernest Marsden. In these experiments helium nuclei (α-particles) were shot at thin gold metal foils. Most of the particles were not scattered; they passed unchanged through the thin metal foil. Some of the few that were scattered were scattered in the backward direction; i.e. they recoiled. This backward scattering requires that the foil contain heavy particles. When an α-particle hits one of these heavy particles it simply recoils backward, just like a ball thrown at a brick wall. Since most of the α-particles don’t get scattered, the heavy particles (the nuclei of the atoms) must occupy only a very small region of the total space of the atom. Most of the space must be empty or occupied by very low-mass particles. These low-mass particles are the electrons that surround the nucleus.

There are some basic problems with the Rutherford model. The Coulomb force that exists between oppositely charge particles means that a positive nucleus and negative electrons should attract each other, and the atom should collapse. To prevent the collapse, the electron was postulated to be orbiting the positive nucleus. The Coulomb force (discussed below) is used to change the direction of the velocity, just as a string pulls a ball in a circular orbit around your head or the gravitational force holds the moon in orbit around the Earth. The origin for this hypothesis that suggests this perspective is plausible is the similarity of gravity and Coulombic interactions. The expression for the force of gravity between two masses (Newton's Law of gravity) is

F_gravity∝(m1 m2)/r^2

with m1 and m2 representing the mass of object 1 and 2, respectively and r representing the distance between the objects centers

The expression for the Coulomb force between two charged species is

F_Coulomb∝(Q1Q2)/r^2

with Q1 and Q2 representing the charge of object 1 and 2, respectively and r representing the distance between the objects centers.

However, this analogy has a problem too. An electron going around in a circle is constantly being accelerated because its velocity vector is changing. A charged particle that is being accelerated emits radiation. This property is essentially how a radio transmitter works. A power supply drives electrons up and down a wire and thus transmits energy (electromagnetic radiation) that your radio receiver picks up. The radio then plays the music for you that is encoded in the waveform of the radiated energy.

Figure 1.8.1: The classical death spiral of an electron around a nucleus. (CC BY-NC; Ümit Kaya via LibreTexts)
Diagram illustrating an atom, showing an electron orbiting a nucleus along a dashed spiral path.

If the orbiting electron is generating radiation, it is losing energy. If an orbiting particle loses energy, the radius of the orbit decreases. To conserve angular momentum, the frequency of the orbiting electron increases. The frequency increases continuously as the electron collapses toward the nucleus. Since the frequency of the rotating electron and the frequency of the radiation that is emitted are the same, both change continuously to produce a continuous spectrum and not the observed discrete lines. Furthermore, if one calculates how long it takes for this collapse to occur, one finds that it takes about 10^−11 seconds. This means that nothing in the world based on the structure of atoms could exist for longer than about 10^−11 seconds. Clearly something is terribly wrong with this classical picture, which means that something was missing at that time from the known laws of physics.

[Note: angular momentum is not conserved as the electron spirals in: the radiation carries it away, and for a circular orbit it falls as √r. The frequency rises because, for a circular orbit under the Coulomb force, it varies as r^−3/2. The text is left as printed.]

### Conservative Forces can be explained with Potentials

A conservative force is dependent only on the position of the object. If a force is conservative, it is possible to assign a numerical value for the potential at any point. When an object moves from one location to another, the force changes the potential energy of the object by an amount that does not depend on the path taken. The potential can be constructed as simple derivatives for 1-D forces:

F = −dV/dx

or as gradients in 3-D forces

F = −∇V

where ∇ is the vector of partial derivatives

∇ = ((∂)/(∂x), (∂)/(∂y), (∂)/(∂z))

The most familiar conservative forces are gravity and Coulombic forces.

The Coulomb force law (Equation (1.8.2)) comes from the corresponding Coulomb potential (sometimes call electrostatic potential)

V(r) = (kQ1Q2)/r

and it can be easily verified that the Coulombic force from this interaction (F(r)) is

F(r) = −dV/dr

As r is varied, the energy will change, so that we have an example of a potential energy curve V(r) (Figure 1.8.2; left). If Q1 and Q2 are the same sign, then the curve which is a purely repulsive potential, i.e., the energy increases monotonically as the charges are brought together and decreases monotonically as they are separated. From this, it is easy to see that like charges (charges of the same sign) repel each other.

[Image: Graph showing a decreasing curve, indicating a function approaching a horizontal asymptote along the x-axis.]

[Image: Graph showing a curve approaching a horizontal asymptote, with labeled axes indicating increase in values.]

Figure 1.8.2: Potential energy curve for the Coulomb interactions between two charges of same sign (left) and opposite signs (right). (CC BY-NC; Ümit Kaya via LibreTexts)

If the charges are of opposite sign, then the curve appears roughly Figure 1.8.2; right and this is a purely attractive potential. Thus, the energy decreases as the charges are brought together, implying that opposite charges attract

## The Bohr Model

It is observed that line spectra discussed in the previous sections show that hydrogen atoms absorb and emit light at only discrete wavelengths. This observation is connected to the discrete nature of the allowed energies of a quantum mechanical system. Quantum mechanics postulates that, in contrast to classical mechanics, the energy of a system can only take on certain discrete values. This leaves us with the question: How do we determine what these allowed discrete energy values are? After all, it seems that Planck's formula for the allowed energies came out of nowhere.

The model we will describe here, due to Niels Bohr in 1913, is an early attempt to predict the allowed energies for single-electron atoms such as H, He^+, Li^2+, Be^3+, etc. Although Bohr's reasoning relies on classical concepts and hence, is not a correct explanation, the reasoning is interesting, and so we examine this model for its historical significance.

Figure 1.8.3: Bohr atom with an electron revolving around a fixed nucleus. (CC BY-NC; Ümit Kaya via LibreTexts)
Diagram illustrating an electron's circular path around a proton, highlighting the attraction force between them.

Consider a nucleus with charge + Ze and one electron orbiting the nucleus. In this analysis, we will use another representation of the constant k in Coulomb's law (Equation (1.8.5)), which is more commonly represented in the form:

k = 1/(4πε0)

where ε0 is known as the permittivity of free space with the numerical value ε0 = 8.8541878 × 10^−12 C^2 J^−1 m^−1.

The total energy of the electron (the nucleus is assumed to be fixed in space at the origin) is the sum of kinetic and potential energies:

E_total = (p^2/(2 me)) (kinetic energy) − (Ze^2/(4πε0 r)) (potential energy)

The force on the electron is

F⃗ = −(Ze^2/(4πε0 r^3))r

and its magnitude is

F = |F⃗| = Ze^2/(4πε0 r^3)|r| = Ze^2/(4πε0 r^2)

since F⃗ = me a⃗, the magnitude, it follows that |F⃗| = me|a⃗|. If we assume that the orbit is circular, then the acceleration is purely centripetal, so

|a| = v^2/r

where v is the velocity of the electron. Equating force |F| to me|a|, we obtain

Ze^2/(4πε0 r^2) = me v^2/r

or

Ze^2/(4πε0) = me v^2 r

or

(Ze^2 me r)/(4πε0) = (me vr)^2

The reason for writing the equation this way is that the quantity me vr is the classical orbital angular momentum of the electron. Bohr was familiar with Maxwell's theory of classical electromagnetism and knew that in a classical theory, the orbiting electron should radiate energy away and eventually collapse into the nucleus (Figure 1.8.1 ). He circumvented this problem by following Planck's idea underlying blackbody radiation and positing that the orbital angular momentum me vr of the electron could only take on specific values

me vr = nħ

with n = 1,2,3, ....

Note that the electron must be in motion, so n = 0 is not allowed.

Substituting Equation (1.8.15) into the Equation (1.8.14), we find

(Ze^2 me r)/(4πε0) = n^2(ħ)^2

Equation (1.8.16) implies that orbits could only have certain allowed radii

rn = ((4πε0 ħ^2)/(Ze^2 me))n^2

= ((a0)/Z)n^2

with n = 1,2,3, .... The collection of constants has been defined to be a0

a0 = (4πε0 ħ^2)/(e^2 me)

a quantity that is known as the Bohr radius.

We can also calculate the allowed momenta since me vr = nħ, and p = me v. Thus,

pn rn = nħ

pn = (nħ)/(rn)

= (ħZ)/(a0 n)

= (Ze^2 me)/(4πε0 ħn)

From pn and rn, we can calculate the allowed energies from

En = (pn^2)/(2 me) − Ze^2/(4πε0 rn)

Substituting in the expressions for pn and rn and simplifying gives

En = −(Z^2 e^4 me)/(32π^2ε0^2ħ^2) · 1/n^2 = −(e^4 me)/(8ε0^2 h^2) · Z^2/n^2

We can redefine a new energy scale by defining the Rydberg as

1 Ry = (e^4 me)/(8ε0^2 h^2) = 2.18 × 10^−18 J.

and this simplifies the allowed energies predicted by the Bohr model (Equation (1.8.20)) as

En = −(2.18 × 10^−18)(Z^2/n^2) J = −(Z^2/n^2) Ry

Hence, the energy of the electron in an atom also is quantized. Equation (1.8.21) gives the energies of the electronic states of the hydrogen atom. It is very useful in analyzing spectra to represent these energies graphically in an energy-level diagram. An energy-level diagram has energy plotted on the vertical axis with a horizontal line drawn to locate each energy level (Figure 1.8.4 ).

Figure 1.8.4: Energy levels predicted by the Bohr model of hydrogen (Z = 1). (CC BY-NC; Ümit Kaya via LibreTexts)
Diagram illustrating hydrogen's emission spectrum with labeled spectral series (Lyman, Balmer, Paschen, Brackett, Pfund) and energy levels.

These turn out to be the correct energy levels, apart from small corrections that cannot be accounted for in this pseudo-classical treatment. Despite the fact that the energies are essentially correct, the Bohr model masks the true quantum nature of the electron, which only emerges from a fully quantum mechanical analysis.

### Exercise 1.8.1

Calculate a value for the Bohr radius using Equation (1.8.16) to check that this equation is consistent with the value 52.9 pm. What would the radius be for n = 1 in the Li^2+ ion?

**Answer**

Starting from Equation (1.8.16) and solving for r:

(Ze^2 me r)/(4πε0) = n^2ħ^2

r = (4 n^2ħ^2πε0)/(Ze^2 me)

with

- e is the fundamental charge: e = 1.60217662 × 10^−19 C
- me is the mass of an electron: me = 9.10938356 × 10^−31 kg
- εo is the permittivity of free space: εo = 8.854 × 10^−12 C^2 N^−1 m^−2
- ħ is the reduced planks constant: ħ = 1.0546 × 10^−34 m^2 kg/s

[Note: corrected; the source prints "e = 1.60217662 × 10^−19 C^2" where this reads "e = 1.60217662 × 10^−19 C". Charge is in coulombs, as in the calculation below.]

For the ground-state of the hydrogen atom: Z = 1 and n = 1.

r = (4ħ^2πε0)/(e^2 me)

= (4(1.0546 × 10^−34 m^2 kg/s)^2 × π × 8.854 × 10^−12 C^2 N^−1 m^−2)/((1.60217662 × 10^−19 C)^2(9.10938356 × 10^−31 kg))

= 5.29 × 10^−11 m = 52.9 pm

For the ground-state of the lithium +2 ion: Z = 3 and n = 1

r = (4ħ^2πε0)/(3e^2 me)

= (4(1.0546 × 10^−34 m^2 kg/s)^2 × π × 8.854 × 10^−12 C^2 N^−1 m^−2)/(3(1.60217662 × 10^−19 C)^2(9.10938356 × 10^−31 kg))

= 1.76 × 10^−11 m = 17.6 pm

As expected, the Li^2+ has a smaller radius than the H atoms because of the increased nuclear charge.

### Exercise 1.8.2 : Rydberg states

How do the radii of the hydrogen orbits vary with n? Prepare a graph showing r as a function of n. States of hydrogen atoms with n = 200 have been prepared (called Rydberg states). What is the diameter of the atoms in these states?

**Answer**

This is a straightforward application of Equation of (1.8.16B). The hydrogen atom has only certain allowable radii and these radii can be predicted from the equation that relates them with each n. Note that the electron must be in motion so n = 0 is not allowed.

This plot shows the relationship of radius as a function of n. Note that at n = 1 the radius is not zero. (CC BY-NC; Ümit Kaya via LibreTexts)
Graph showing a curve with data points, labeled on the x-axis as "Processing E" and the y-axis indicating "Measured Value."

[Note: the line after the caption is the image's alt text, which reads as machine-written and does not describe the image, which is a plot of orbit radius against n; the caption above describes it.]

4πε0 = 1.113 × 10^−10 C^2 J^−1 m^−1 and ħ = 1.054 × 10^−34 Js, also knowing

e = 1.602 × 10^−19 C with

me = 9.109 × 10^−31 kg

and Z is the nuclear charge, we use this equation directly. A simplification can be made by taking advantage of the fact that

a0 = (4πε0 ħ^2)/(e^2 me)

resulting in

rn = ((a0)/Z)n^2

where a0 = 5.292 × 10^−11 m which is the Bohr Radius.

Suppose we want to find the radius where n = 200.n^2 = 40000 so plugging in directly we have

rn = (((5.292 × 10^−11))/((1)))(40000)

= 2.117 × 10^−6 m

for the radius of a hydrogen atom with an electron excited to the n = 200 state. The diameter is then 4.234 × 10^−6 m.

## The Wave Argument for Quantization

The above discussion is based off of a classical picture of an orbiting electron with the quantization from the angular momentum (Equation (1.8.15)) requirement lifted from Planck's quantization arguments. Hence, only allows certain trajectories are stable (with differing radii). However, as discussed previously, the electron will have a wavelike property also with a de Broglie wavelength λ

λ = h/p

Hence, a larger momentum p implies a shorter wavelength. That means as n increases (Equation (1.8.21)), the wavelength must also increase; this is a common feature in quantum mechanics and will be often observed. In the Bohr atom, the circular symmetry and the wave property of the electron requires that the electron waves have an integer number of wavelengths (Figure 1.8.5A). If not, then the waves will overlap imperfectly and cancel out (i.e., the electron will cease to exist) as demonstrated in Figure 1.8.5B.

[Note: corrected; the source prints "(Figure 1.8.1A)" where this reads "(Figure 1.8.5A)"; the source prints "in Figure 1.8.1B" where this reads "in Figure 1.8.5B". The electron waves fitted around an orbit are in Figure 1.8.5; Figure 1.8.1 is the classical death spiral.]

[Image: A diagram showing a blue curve within a black circle, with a grey point and a pink arrow indicating direction.]

[Image: A circular graph with intricate blue curves and a central point, featuring a pink arrow indicating direction.]

Figure 1.8.5: Waves on a string have a wavelength related to the length of the string, allowing them to interfere constructively. (A) If we imagine the string bent into a closed circle, we get a rough idea of how electrons in circular orbits can interfere constructively. (B) If the wavelength does not fit into the circumference, the electron interferes destructively; it cannot exist in such an orbit. (CC BY-NC; Ümit Kaya via LibreTexts)

A more detailed discussion of the effect of electron waves in atoms will be discuss in the following chapters.

## Derivation of the Rydberg Equation from Bohr Model

Given a prediction of the allowed energies of a system, how could we go about verifying them? The general experimental technique known as spectroscopy permits us to probe the various differences between the allowed energies. Thus, if the prediction of the actual energies, themselves, is correct, we should also be able to predict these differences. Let us assume that we are able to place the electron in Bohr's hydrogen atom into an energy state En for n > 1, i.e. one of its so-called excited states. The electron will rapidly return to its lowest energy state, known as the ground state and, in doing so, emit light. The energy carried away by the light is determined by the condition that the total energy is conserved (Figure 1.8.6 ).

Figure 1.8.6: A simple illustration of Bohr's model of the atom, with an electron making quantum leaps. (CC BY-SA 3.0 unported; Kurzon via Wikipedia)
Diagram of an atom showing a blue dot (nucleus) and red dot (electron) within concentric circles.

Thus, if ni is the integer that characterizes the initial (excited) state of the electron, and nf is the final state (here we imagine that nf = 1, but is applicable in cases that nf < ni, i.e., emission)

E_nf = E_ni − hν

or

ν = (E_ni − E_nf)/h = ((Z^2 e^4 me)/(8ε0^2 h^3))(1/(nf^2) − 1/(ni^2))

We can now identify the Rydberg constant RH with the ratio of constants on the right hand side of Equation (1.8.23)

RH = (me e^4)/(8ε0^2 h^3)

[Note: as defined here from Equation (1.8.23), which gives a frequency, RH is in s^−1 (about 3.29 × 10^15 s^−1). The wavenumber form used in Sections 1.4 and 1.5, 109,737 cm^−1, is this divided by the speed of light: (me e^4)/(8ε0^2 h^3 c).]

Evaluating RH from the fundamental constants in this formula gives a value within 0.5% of that obtained experimentally from the hydrogen atom spectrum.

Thus, by observing the emitted light, we can determine the energy difference between the initial and final energy levels, which results in the emission spectra discussed in Sections 1.4 and 1.5. Different values of nf determine which emission spectrum is observed, and the examples shown in the figure are named after the individuals who first observed them. The figure below shows some of the transitions possible for different nf and ni values discussed previously.

Figure 1.8.7: Electron Transitions Responsible for the Various Series of Lines Observed in the Emission Spectrum of Hydrogen. The Lyman series of lines is due to transitions from higher-energy orbits to the lowest-energy orbit (n = 1); these transitions release a great deal of energy, corresponding to radiation in the ultraviolet portion of the electromagnetic spectrum. The Paschen, Brackett, and Pfund series of lines are due to transitions from higher-energy orbits to orbits with n = 3, 4, and 5, respectively; these transitions release substantially less energy, corresponding to infrared radiation. Orbits are not drawn to scale. (CC BY-NC-SA 3.0; anonymous)
Diagram illustrating the hydrogen spectral series with labeled lines for Lyman, Balmer, Paschen, Brackett, and Pfund series.

If the atom absorbs light it ends up in an excited state as a result of the absorption. The absorption is only possible for light of certain frequencies, and again, conservation of energy determines what these frequencies are. If light is absorbed, then the final energy E_nf will be related to the initial energy E_ni with nf > ni by

E_nf = E_ni + hν

or

ν = (E_nf − E_ni)/h = ((Z^2 e^4 me)/(8ε0^2 h^3))(1/(ni^2) − 1/(nf^2))

### Exercise 1.8.3

a. Calculate the energy of a photon that is produced when an electron in a hydrogen atom goes from an orbit with n = 4 to an orbit with n = 1.
b. What happens to the energy of the photon as the initial value of n approaches infinity?

**Answer**

a:

E_nf = E_ni − hν

E_photon = hν = E_ni − E_nf

[Note: corrected; the source prints "E_photon = hν = E_nf − E_ni" where this reads "E_photon = hν = E_ni − E_nf". From E_nf = E_ni − hν, the photon carries away E_ni − E_nf, which is what the next line evaluates.]

= ((Z^2 e^4 me)/(8εo^2 h^2))(1/(nf^2) − 1/(ni^2))

= ((e^4 me)/(8εo^2 h^2))(1/(1^2) − 1/(4^2))

= 2.18 × 10^−18(1 − 1/16)

= 2.04 × 10^−18 J

b:

As ni → ∞

E_photon = ((e^4 me)/(8εo^2 h^2))(1/(nf^2) − 1/(ni^2))

1/(ni^2) → 0

E_photon → ((e^4 me)/(8εo^2 h^2))(1/(nf^2))



Bohr’s proposal explained the hydrogen atom spectrum, the origin of the Rydberg formula, and the value of the Rydberg constant. Specifically it demonstrated that the integers in the Rydberg formula are a manifestation of quantization. The energy, the angular momentum, and the radius of the orbiting electron all are quantized. This quantization also parallels the concept of stable orbits in the Bohr model. Only certain values of E, M, and r are possible, and therefore the electron cannot collapse onto the nucleus by continuously radiating energy because it can only have certain energies, and it cannot be in certain regions of space. The electron can only jump from one orbit (quantum state) to another. The quantization means that the orbits are stable, and the electron cannot spiral into the nucleus in spite of the attractive Coulomb force.

Although Bohr’s ideas successfully explained the hydrogen spectrum, they failed when applied to the spectra of other atoms. In addition a profound question remained. Why is angular momentum quantized in units of ħ? As we shall see, de Broglie had an answer to this question, and this answer led Schrödinger to a general postulate that produces the quantization of angular momentum as a consequence. This quantization is not quite as simple as proposed by Bohr, and we will see that it is not possible to determine the distance of the electron from the nucleus as precisely as Bohr thought. In fact, since the position of the electron in the hydrogen atom is not at all as well defined as a classical orbit (such as the moon orbiting the earth) it is called an orbital. An electron orbital represents or describes the position of the electron around the nucleus in terms of a mathematical function called a wavefunction that yields the probability of positions of the electron.

## Contributors and Attributions

- Mark Tuckerman (New York University)
- David M. Hanson, Erica Harvey, Robert Sweeney, Theresa Julia Zielinski ("Quantum States of Atoms and Molecules")
- Template:Contriboundless
