---
title: "5.1: A Harmonic Oscillator Obeys Hooke's Law"
book: "Physical Chemistry (LibreTexts)"
chapter: "5: The Harmonic Oscillator and the Rigid Rotor"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/05%3A_The_Harmonic_Oscillator_and_the_Rigid_Rotor/5.01%3A_A_Harmonic_Oscillator_Obeys_Hooke's_Law"
author: "Flowlerm"
license: "CC BY-NC-SA 4.0"
---

The motion of two atoms in a diatomic molecule can be separated into translational, vibrational, and rotational motions. Both rotation and vibrational motions are internal motions that do not change the center of mass for the molecule (Figure 5.1.1 ), which is described by translational motion. Quantum translational motions can be modeled with the particle in a box model discussed previously and rotation and vibration can be modeled via the rigid rotor and harmonic oscillator models, respectively.

Figure 5.1.1: Two atoms connected by a vibrating bond. There is a rotation around the common center of mass, and oscillation in bond distance. (CC SA-BY, 3.0; www.cleonis.nl).
An illustration of a wavy line with two round ends, resembling a spring or wave pattern.

Before delving into the quantum mechanical harmonic oscillator, we will introduce the classical harmonic oscillator (i.e., involving classical mechanics) to build an intuition that we will extend to the quantum world. A classical description of the vibration of a diatomic molecule is needed because the quantum mechanical description begins with replacing the classical energy with the Hamiltonian operator in the Schrödinger equation. It also is interesting to compare and contrast the classical description with the quantum mechanical picture.

## The Classical Harmonic Oscillator

Simple harmonic oscillators about a potential energy minimum can be thought of as a ball rolling frictionlessly in a curved dish or a pendulum swinging frictionlessly back and forth (Figure 5.1.2 ). The restoring forces are precisely the same in either horizontal direction.

Figure 5.1.2: A mass connected to a spring that follows Hooke's law is a system that, when displaced from its equilibrium position (xo = 0), experiences a restoring force, F that is proportional to the displacement, x from the equilibrium length (xo). (CC BY-NC; Ümit Kaya via LibreTexts)
Illustration showing spring force scenarios: A) spring at equilibrium, B) spring compressed (x<0), C) spring stretched (x>0).

If we consider the bond to behave like a mass on a spring (Figure 5.1.2 ), then this restoring force (F) is proportional to the displacement (x) from the equilibrium length (xo) - this is Hooke's Law:

F = −kx

where k is the force constant. Hooke's Law says that the force is proportional to, but in opposite direction to, the displacement (x). The force constant reflects the stiffness of the spring. The idea incorporated into the application of Hooke's Law to a diatomic molecule is that when the atoms move away from their equilibrium positions, a restoring force is produced that increases proportionally with the displacement from equilibrium. The potential energy for such a system increases quadratically with the displacement.

V(x) = (1/2)kx^2

Hooke's Law or the harmonic (i.e. quadratic) potential given by Equation (5.1.3) is an excellent approximation for the vibrational oscillations of molecules. The magnitude of the force constant k depends upon the nature of the chemical bond in molecular systems just as it depends on the nature of the spring in mechanical systems. The larger the force constant, the stiffer the spring or the stiffer the bond. Since it is the electron distribution between the two positively charged nuclei that holds them together, a double bond with more electrons has a larger force constant than a single bond, and the nuclei are held together more tightly.

### Caution

A stiff bond with a large force constant is not necessarily a strong bond with a large dissociation energy. A harmonic oscillator has no dissociation energy since it CANNOT be broken - there is always a restoring force to keep the molecule together. This is one of many deficiencies in using the harmonic oscillator model to describe molecular vibrations.

### Two atoms or one?

You may have questioned the applicability of the harmonic oscillator model involving one moving mass bound to a fix wall via a spring like in Figure 5.1.2 for the vibration of a diatomic molecule with two moving masses like in Figure 5.1.1 . It turned out the two are mathematically the same with internal vibration motion described by a single reduced particle with a reduced mass μ.

Figure 5.1.3: Diagrams of the coordinate systems and relevant vectors for the motion of (a) a two-particle diatomic molecule with atoms of mass m1 and m2 and (b) the equivalent one-particle pseudo-particle of reduced mass μ. (CC BY-NC; Ümit Kaya via LibreTexts)
A diagram showing three circles labeled "A," "B," and "C," connected by red lines, indicating relationships or interactions.

For a diatomic molecule, Figure 5.1.3 , the vector r⃗ corresponds to the internuclear axis. The magnitude or length of r is the bond length, and the orientation of r in space gives the orientation of the internuclear axis in space. Changes in the orientation correspond to rotation of the molecule, and changes in the length correspond to vibration. The change in the bond length from the equilibrium bond length is the vibrational coordinate for a diatomic molecule.

### Example 5.1.1

a. Show that minus the first derivative of the harmonic potential energy function in Equation (5.1.3) with respect to x is the Hooke's Law force in Equation (5.1.2).
b. Show that the second derivative is the force constant, k.
c. At what value of x is the potential energy a minimum; at what value of x is the force zero?
d. Sketch graphs to compare the potential energy and the force for a system with a large force constant to one with a small force constant.

**Solution a**

Hooke's Law for a spring entails that the force applied on a spring F is equal to the force constant, −k times the distance compressed or stretched, x (Equation (5.1.2)). The derivative of V(x) = 0.5 kx^2 is

V'(x) = (2)(1/2)kx = kx.

The negative of this is −V'(x) = −kx which is exactly equal to Hooke's Law.

**Solution b**

The second derivative

V"(x) = (d/dx)kx = k

Thus, the second derivative of this equation for potential energy is equal to the force constant, k.

**Solution c**

To find the minimum potential energy, it is easiest to set the first derivative equal to zero and solve for x. When V'(x) = kx = 0 then x must be equal to zero. Thus, the minimum potential energy is when x=0. Plugging this into Hooke's Law, F(0) = −k(0) = 0 so this is also the value for x when the force is zero.

**Solution d**

[Image: Graph showing two parabolas: one in red for y = (1/2)x^2 and one in green for y = x^2.]

The force constant has a drastic effect on both the potential energy and the force. A system with a large force constant requires minimal change in x to have a drastic change in potential energy or force, whereas a system with a small force constant is the exact opposite phenomenon.

## Solving the Harmonic Oscillator Model

The classical equation of motion for a one-dimensional simple harmonic oscillator with a particle of mass m attached to a spring having spring constant k is

m (d^2 x(t))/dt^2 = −kx(t)

which can be rewritten in the standardform:

(d^2 x(t))/dt^2 + (k/m)x(t) = 0

Equation (5.1.4a) is a linear second-order differential equation that can be solved by the standard method of factoring and integrating. The resulting solution to Equation (5.1.4a) is

x(t) = xo sin(ωt + φ)

with

ω = √(k/m)

and the momentum has time dependence

p = mv

= mxo ω cos(ωt + φ)

Figure 5.1.4 show the displacement of the bond from its equilibrium length as a function of time. Such motion is called harmonic.

Figure 5.1.4: Solution to the Harmonic Oscillator. Displacement (y-axis) is plotted as a function of time.
Graph of a sine wave with a point marked on the curve, illustrating periodic motion.

### Example 5.1.2

Substitute the following functions into Equation (5.1.4b) to demonstrate that they are both possible solutions to the classical equation of motion.

a. x(t) = x0 e^(iωt)
b. x(t) = x0 e^(−iωt)

where

ω = √(k/m)

Note that the Greek symbol ω for frequency represents the angular frequency 2πν.

**Solution a**

This requires simply placing the given function x(t) = x0 e^(iωt) into Equation (5.1.4b).

(d^2 x(t))/dt^2 + (k/m)x(t) = 0

(d^2/dt^2)(xo e^(iωt)) + (k/m)xo e^(iωt) = 0

xo (d^2/dt^2)(e^(iωt)) + (k/m)xo e^(iωt) = 0

xo i^2ω^2(e^(iωt)) + (k/m)xo e^(iωt) = 0

xo i^2ω^2 e^(iωt) + (k/m)xo e^(iωt) = 0

xo i^2ω^2 + (k/m)xo = 0

−xo k/m + (k/m)xo = 0 with ω = √(k/m)

**Solution b**

This requires simply placing the given function x(t) = x0 e^(−iωt) into Equation (5.1.4b).

(d^2 x(t))/dt^2 + (k/m)x(t) = 0

(d^2/dt^2)(xo e^(−iωt)) + (k/m)xo e^(−iωt) = 0

xo (d^2/dt^2)(e^(−iωt)) + (k/m)xo e^(−iωt) = 0

xo i^2ω^2(e^(−iωt)) + (k/m)xo e^(−iωt) = 0

xo i^2ω^2 e^(−iωt) + (k/m)xo e^(−iωt) = 0

xo i^2ω^2 + (k/m)xo = 0

−xo k/m + (k/m)xo = 0 with ω = √(k/m)

### Exercise 5.1.1

Show that sine and cosine functions also are solutions to Equation (5.1.4b).

**Answer**

Using Equation (5.1.4b)

(d^2 x(t))/dt^2 + (k/m)x(t) = 0

with ω = √(k/m).

For

x(t) = xo sin(ωt + φ)

Take the second derivative of x(t)

(d^2 x(t))/dt^2 = −ω^2 xo sin(ωt + φ)

[Note: corrected; the source prints "(d^2 x(t))/dt = −ω^2 xo sin" where this reads "(d^2 x(t))/dt^2 = −ω^2 xo sin". A second derivative: d^2x/dt^2.]

= −ω^2 xo sin(ωt + φ)

[Note: corrected; the source prints "= ω^2 xo sin(ωt + φ)" where this reads "= −ω^2 xo sin(ωt + φ)". The minus sign of the line above carries through.]

= −(k/m)xo sin(√(k/m)t + φ)

Plug in x(t) and the second derivative of x(t) into Equation (5.1.4b)

−(k/m)xo sin(√(k/m)t + φ) + (k/m)xo sin(√(k/m)t + φ) = 0

Hence, the sine equation is a solution to Equation (5.1.4b)

We do the same for the cosine function

x(t) = xo cos(ωt + φ)

Take the second derivative of x(t)

(d^2 x(t))/dt^2 = −ω^2 xo cos(ωt + φ)

[Note: corrected; the source prints "(d^2 x(t))/dt = −ω^2 xo cos" where this reads "(d^2 x(t))/dt^2 = −ω^2 xo cos". A second derivative: d^2x/dt^2.]

= −ω^2 xo cos(ωt + φ)

= −(k/m)xo cos(√(k/m)t + φ)

Plug in x(t) and the second derivative of x(t) into Equation (5.1.4b)

−(k/m)xo cos(√(k/m)t + φ) + (k/m)xo cos(√(k/m)t + φ) = 0

The cosine equation is also a solution to Equation (5.1.4b).

### Exercise 5.1.2

Identify what happens to the frequency of the motion as the force constant increases in one case and as the mass increases in another case. If the force constant is increased 9-fold and the mass is increased by 4-fold, by what factor does the frequency change?

**Answer**

This is a simple application of Equation (5.1.6). As the force constant increases, the frequency of the motion increases, while as the mass increases, the frequency of the motion decreases. If the force constant increased 9-fold and the mass increased 4-fold,

ω = √((9 k)/(4 m)) = (3/2)√(k/m)

[Note: corrected; the source prints "= (3/2)(k/m)" where this reads "= (3/2)√(k/m)". √(9k/4m) = (3/2)√(k/m); the factor of 3/2 is right.]

The entire frequency of motion would increase by a factor of 3/2.

## Harmonic Oscillator Energies

The energy of the vibration is the sum of the kinetic energy and the potential energy. The momentum associated with the harmonic oscillator is

p = m dx/dt

so combining Equations (5.1.8) and (5.1.3), the total energy can be written as

E = T + V

= p^2/(2 m) + (k/2)x^2

The total energy of the harmonic oscillator is equal to the maximum potential energy stored in the spring when x = ±A, called the turning points (Figure 5.1.5 ). The total energy (Equation (5.1.9)) is continuously being shifted between potential energy stored in the spring and kinetic energy of the mass.

Figure 5.1.5: The potential V(x) for a harmonic oscillator. Vertical axis energy; horizontal axis displacement x. The potential energy V(x) = ½kx^2 is shown in red. (Paul Wormer Wikipedia).
Graph of a parabolic potential function V(x) with energy E, showing symmetry around the origin.

The motion of a classical oscillator is confined to the region where its kinetic energy is nonnegative, which is what the energy relation Equation (5.1.9) says. Physically, it means that a classical oscillator can never be found beyond its turning points, and its energy depends only on how far the turning points are from its equilibrium position. The energy of a classical oscillator changes in a continuous way. The lowest energy that a classical oscillator may have is zero, which corresponds to a situation where an object is at rest at its equilibrium position. The zero-energy state of a classical oscillator simply means no oscillations and no motion at all (a classical particle sitting at the bottom of the potential well in Figure 5.1.5 ). When an object oscillates, no matter how big or small its energy may be, it spends the longest time near the turning points, because this is where it slows down and reverses its direction of motion. Therefore, the probability of finding a classical oscillator between the turning points is highest near the turning points and lowest at the equilibrium position. (Note that this is not a statement of preference of the object to go to lower energy. It is a statement about how quickly the object moves through various regions.)

### Example 5.1.3

a. What happens to the frequency of the oscillation as the vibration is excited with more and more energy?
b. What happens to the maximum amplitude of the vibration as it is excited with more and more energy?

**Solution**

a. Frequency

The energy of the harmonic oscillator can be written as

Ev = hν(v + 1/2)

[Note: corrected; the source prints "Ev = hv(v + 1/2)" where this reads "Ev = hν(v + 1/2)". The frequency is ν; v is the quantum number.]

and the frequency of oscillation is ω = √(k/m). Notice that the frequency depends only on the stiffness (k) and reduced mass (μ) of the oscillator and not on the energy. Hence, increasing the energy of the vibrations does not affects its frequency.

b. Amplitude

The kinetic and potential terms for energy of the harmonic oscillator can be written as

E = K + V

= (1/2)mω^2 A^2 sin^2ωt + (1/2)kA^2 cos^2ωt

with ω = √(k/m) so

E = (1/2)kA^2(sin^2ωt + cos^2ωt)

= (1/2)kA^2

The maximum amplitude of the vibration will increase as the energy increases.

### Exercise 5.1.3

If a molecular vibration is excited by collision with another molecule and is given a total energy E_hit as a result, what is the maximum amplitude of the oscillation? Is there any constraint on the magnitude of energy that can be introduced?

**Answer**

The equation that defines the energy of a molecular vibration can be approximated is:

E_hit = T + V = p^2/(2 m) + (k/2)x^2

[Note: corrected; the source prints "+ (k/2)x" where this reads "+ (k/2)x^2". The potential energy is (k/2)x^2.]

The maximum amplitude of a harmonic oscillator is equal to x when the kinetic energy term of total energy equals zero

E_hit = (k/2)x^2

[Note: corrected; the source prints "E_hit = (k/2)x" where this reads "E_hit = (k/2)x^2". The potential energy is (k/2)x^2, which gives the x = √((2/k)E_hit) below.]

Solving for x gives the maximum amplitude:

x = √((2/k)E_hit)

The constraint for the energy that can be introduced cannot be greater than the energy required to break the bond between atoms.
