---
title: "2.2: The Schrödinger equation, particle in a box, and atomic wavefunctions"
book: "Inorganic Chemistry (LibreTexts)"
chapter: "2: Atomic Structure"
source_url: "https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Inorganic_Chemistry_(LibreTexts)/02%3A_Atomic_Structure/2.02%3A_The_Schrodinger_equation_particle_in_a_box_and_atomic_wavefunctions"
author: "Khaas"
license: "CC BY-NC-SA 4.0"
---

Considering the failures of the Bohr model, Erwin Schrödinger and Werner Heisenberg proposed a major change in the paradigm regarding the electron. In several breakthrough papers (1925-1927) they attributed wave properties to electrons and they each received Nobel prizes for developing the theories of Wave Mechanics (or the "New Quantum Mechanics"). This approach treated electrons as having "dual" nature: possessing properties of both waves and particles. Schrödinger's Equation describes the behavior of the electron (in a hydrogen atom) in three dimensions. It is a mathematical equation that defines the electron’s position, mass, total energy, and potential energy. The simplest form of the Schrödinger Equation is as follows:

Ĥψ = Eψ

where Ĥ is the Hamiltonian operator, E is the energy of the electron, and ψ is the wavefunction.

## The Hamiltonian, Ĥ

The Hamiltonian operator is like a set of instructions that tells us what to do with the function that follows it. A Hamiltonian operator is a function over three-dimensional space that corresponds to the sum of kinetic energies and potential energies of the particles in a system, one electron and its nucleus in this case. The Hamiltonian operator for a one-electron system is:

Ĥ = ((−h^2)/(8π^2 me))((∂^2)/(∂x^2) + (∂^2)/(∂y^2) + (∂^2)/(∂z^2)) − Ze^2/(4πε0 r),

where h is Planck's constant, me is the mass of the electron, e is the charge of the electron, r is the distance from the nucleus (r = √(x^2 + y^2 + z^2)), Z is the charge of the nucleus, and 4πε0 is the permittivity of a vacuum.

### Kinetic Energy

The first part of the Hamiltonian written above, ((−h^2)/(8π^2 me))((∂^2)/(∂x^2) + (∂^2)/(∂y^2) + (∂^2)/(∂z^2)) describes the kinetic energy of the electron. This is the energy due to motion of the electron.

### Potential energy

The second part written above, (−Ze^2)/(4πε0 r), describes the potential energy of the electron, and is commonly written as V(r) or V(x, y, z).

V(x, y, z) = (−Ze^2)/(4πε0 r) = (−Ze^2)/(4πε0√(x^2 + y^2 + z^2))

[Note: corrected; the source prints "V(x, y, x)" where this reads "V(x, y, z)". The potential energy is a function of x, y and z.]

The potential energy depends on the attractive electrostatic force between the electron and the nucleus. You might notice that this attraction is essentially the same as the electrostatic force defined by Coulomb's law. And, just as in Coulomb's law, when two opposite charges are attracted to one another, the potential energy of the force is negative. Thus, when an electron is close to the nucleus, the potential energy is a large negative number corresponding to a strong attractive force. When an electron is farther from the nucleus, the potential energy is still negative but with a smaller magnitude, corresponding to a weaker attractive force. If the electron is very far from the nucleus (r = ∞) then the attractive force, and the potential energy, is zero.

## The Wavefunction, ψ

In simple terms, the wavefunction (ψ) of an electron describes the electron's position in space, relative to the nucleus. The square of the ψ describes an atomic orbital. We can't define the position too exactly because we would violate the Heisenberg Uncertainty principle, but we can define its wave. A simple example of a ψ is described in the next section: Particle in a Box. Here, we will describe the ψ in general terms. Generally, in a one-electron atom, the electron ψ is defined by the wave's distance from the nucleus and its angle with respect to the x, y, and z axes of the atom's Cartesian coordinates (the nucleus is at the origin). The general form of the (ψ) for an electron in a hydrogen atom can be written as follows:

ψ_(n, l, ml) = R_(n, l)(r) × Y_(l, ml)(θ, φ)

[Note: corrected; the source prints "R_(n, l)(r) + Y_(l, ml)(θ, φ)" where this reads "R_(n, l)(r) × Y_(l, ml)(θ, φ)". The wavefunction is the product of its radial and angular parts, as the equation in 2.2.2 gives.]

### Quantum Numbers define ψ

The (ψ) is defined by three of the quantum numbers: n, l, and ml. These quantum numbers will be discussed more in a later section (2.2.2) The radial variation, R, depends on the electron's distance from the nucleus. The quantum numbers n (energy level) and l (orbital type) define R. Since n must be an integer, there are only certain allowed values for the solution to the wavefunction.

The angular variation, Y, depends on the angle with respect to the x, y, and z coordinates, and depends on the quantum numbers l (the orbital type) and ml (the angular momentum, or the specific orbital). For example px lies along the x axis, while py points in a different direction in space.

For review, a list of the quantum numbers, their values, and meanings are in the table below.

| SYMBOL | NAME | VALUES | MEANING |
| --- | --- | --- | --- |
| n | principal | 1,2,3...(any integer) | energy level, shell |
| l | angular momentum | 0 → n − 1 | subshell, 0 = s,1 = p,2 = d,3 = f... this is the angular dependence of the orbital, shape of the orbital; *letters have historical meaning, sharp, principle, diffuse, fundamental |
| ml | magnetic | + l → −l | orientation of angular momentum in space, orbital |
| ms | spin | +1/2, −1/2 | the imaginary property we call "spin", up or down |

## Some important considerations and limitations

Although it might seem like there could be any value of x, y, and z for the Hamiltonian, these values are limited by the allowed positions of electrons according to ψ, which is limited by integer values of n. In other words the allowed solutions are quantized. However, there are an infinite number of values for n from n = 1 → ∞, so there are also infinite solutions to the Schrödinger equation.

The ψ describes the wave properties of an electron. The probability of finding the electron somewhere in space is the square of the wavefunction (ψ^2 or ψψ^*). In other words, ψ^2 describes the shape and size of an electron's orbital (the shapes you already know).

There are some requirements for a physically realistic and meaningful solution for ψ, and thus ψ^2.

1. There is only one possible value for ψ for any set of the three quantum numbers n, l, ml.
2. The ψ approaches zero as r approaches infinity, and so ψ^2 also approaches zero as r → ∞.
3. The wavefunction must be normalized. In other words, the total probability of finding the electron in all of space must be 1. ∫_(all space) ψA ψA^*dτ = 1
4. Any two orbitals must not occupy the same space. In other words, any two orbitals in an atom are orthogonal. If ψA and ψB are wavefunctions for different orbitals in the same atom, ∫_(all space) ψA ψB^*dτ = 0
5. The probability of finding the electron anywhere in infinite space must be defined. This means that the wave functions and their first derivatives must be continuous (i.e. not change abruptly from one point to the next).

## Awesome Sources for further reading

- +Plus: https://plus.maths.org/content/schrodinger-1

## 2.2.1: Particle in a Box

The particle in the box is a model that can illustrate how a wave equation works. Although it does not represent a real situation, we can limit our model to just one dimension (the x-dimension, for instance) such that the Schrödinger equation becomes significantly simplified. Despite being unrealistic, this simplification is quite useful for gaining an understanding of the Schrödinger equation.

### The model of a particle in a box

The particle in the box is a hypothetical situation with a particle trapped in a one-dimensional “box”. Let’s not get hung-up on the fact that the common object called a “box” is typically an object with three dimensions instead of just one dimension. And let’s also not get hung up on the word “particle”. This is a particle that has properties of a wave…so it is unlike the macroscopic particle that you’re probably imagining. This “box” is more like a line, or an x-axis; it is just a one-dimensional space in which a particle-wave is trapped.

Figure 2.2.1.1: An illustration of the particle in the box model (particle not shown). The box is actually just a one-dimensional space, often assigned to the x-dimension (the x-axis). The particle has wave properties and is trapped in the box. Since no forces act on the particle inside the box, the particle's potential energy inside the box is zero (V = 0) and its potential energy outside the box is infinite (V = ∞). (CC-BY-NC-SA; Kathryn Haas)

The particle-wave can only exist inside the walls (where 0 < x < a), along the x axis in the figure shown above. In terms of energy, the potential energy is zero (V = 0) because the particle is in an energetically-favorable position here. On the other hand, outside the box, the particle cannot exist and the potential energy is infinitely large (V = ∞) outside the walls (where x < 0 or x > a). This means that it is infinitely unfavorable for the particle-wave to exist outside the box, and so it never does. The particle-wave is trapped between the walls, along the 1-dimensional x axis, and there are no forces acting on the particle-wave inside this “box”.

#### The Schrödinger wave equation for a particle in a box

The particle in a box model lets us consider a simple version of the Schrödinger equation. Before we simplify, let's take another look at the full Hamiltonian for a particle-wave in three dimensions (see equation 2.2.2) and the simplest form of the Schrödinger equation (see equation 2.2.1). Both of these equations are described in the previous section and are written below for convenience.

The Schrödinger Equation (from equation 2.2.1): Ĥψ = Eψ

The Hamiltonian in three dimensions (from equation 2.2.2):

Ĥ = ((−h^2)/(8π^2 me))((∂^2)/(∂x^2) + (∂^2)/(∂y^2) + (∂^2)/(∂z^2)) − Ze^2/(4πε0 r)

In the particle in a box model, there is only one dimension, x. Because the y and z values are zero, we can drop y and z out of our Hamiltonian equation. And, since V = 0 inside the box, we can drop the whole part of the Hamiltonian equation that describes the potential energy ((−Ze^2)/(4πε0 r)). This leaves us with a much simplified Hamiltonian operator, which we can then use to write the Schrödinger wave equation for a particle moving in one dimension. One last thing we'll do is use a more general value m for the mass of the particle, rather than me that specifically represents the mass of an electron. The Schrödinger equation for a particle-wave in a one-dimensional box is:

((−h^2)/(8π^2 m))((∂^2ψ(x))/(∂x^2)) = Eψ

#### Exercise 2.2.1.1

Follow the steps that were described in the last paragraph to find Equation (1DSchr) from equation 2.2.1 and 2.2.2. In other words, derive the Schrödinger Equation for the particle in a box given the three-dimensional Hamiltonian and Schrödinger Equations.

**Answer**

Here is the Hamitlonian Equation for in three dimensions.

Ĥ = ((−h^2)/(8π^2 m))((∂^2)/(∂x^2) + (∂^2)/(∂y^2) + (∂^2)/(∂z^2)) − Ze^2/(4πε0 r)

There are two parts to this equation: the kinetic energy contribution and the potential energy contribution. While the first part of this expression, ((−h^2)/(8π^2 m))((∂^2)/(∂x^2) + (∂^2)/(∂y^2) + (∂^2)/(∂z^2)), is the kinetic energy contribution, the second part of the expression, −Ze^2/(4πε0 r), is the potential energy (V) contribution.

(1) Simplify the expression for kinetic energy

Your particle-wave is moving in only one dimension. We can arbitrarily choose the dimension x. This means that x is a variable and will have some value from 0 to a. On the other hand, the particle does not move in the other two dimensions, y and z. You can assign the position of the particle along x and y axes as zero or you can just understand that they do not exist in any significant capacity in our 1-D space. Either way, you can just drop them out of the kinetic energy part of the Hamiltonian, as so:

When y = z = 0 and the particle-wave only exists/moves in the x dimension, ((−h^2)/(8π^2 m))((∂^2)/(∂x^2) + (∂^2)/(∂y^2) + (∂^2)/(∂z^2)) = ((−h^2)/(8π^2 m))((∂^2)/(∂x^2))

And the overall Hamiltonian is simplified:

Ĥ = ((−h^2)/(8π^2 m))((∂^2)/(∂x^2)) − Ze^2/(4πε0 r)

(2) Simplify the expression for potential energy (V).

The particle's potential energy inside the box is zero (V = 0). Therefore, V = −Ze^2/(4πε0 r) = 0. We can simply drop the potential energy portion from the Hamiltonian because its value is zero.

The simplified Hamiltonian is now:

Ĥ = ((−h^2)/(8π^2 m))((∂^2)/(∂x^2))

(3) Substitute the simplified Hamiltonian into the Schrödinger Equation.

The Schrödinger is: Ĥψ = Eψ

When the simplified Hamiltonian is substituted into this equation, the result is the 1-D Schrödinger Equation (1DSchr).

(((−h^2)/(8π^2 m))((∂^2ψ(x))/(∂x^2))) = Eψ

### The wavefunction of a one-dimensional wave

Although we've simplified the Schrödinger Equation by considering the particle in the box, Equation (1DSchr) may still look mysterious to you. But it's simpler than you might realize. Let's unpack it! Here we'll go through the steps of deriving the 1-dimensional wavefunction for the particle in a box. We won't try to derive a three-dimensional wavefunction for a "real" electron, but when you understand how to find the 1-dimensional wavefunction, and what it tells us, then you can conceptually extend this to understand what the wavefunction tells us about electrons in three dimensions.

Let's dissect Equation (1DSchr). Here it is again for reference:

(−h^2)/(8π^2 me)((∂^2ψ(x))/(∂x^2)) = Eψ

The expression (−h^2)/(8π^2 me) is just a negative constant. This negative constant is multiplied by the second derivative of the wavefunction in the expression above. And E is a constant multiplied by that same function. We can rearrange this equation as follows:

(∂^2ψ(x))/(∂x^2) = ((−8π^2 me E)/h^2)ψ = −Cψ

where C is just the constant; C = (8π^2 me E)/h^2

To an expert in the mathematical field of Differential Equations, this expression (1DSchr) follows a familiar pattern that makes it easy to translate. If you're not an expert in differential equations, that is OK; you'll just have to bear with this while things get a little "hand-wavy" and try Exercise 2.2.1.2 to prove it to yourself that the following "hand waviness" is true. An expert in differential equations could tell you that when the second derivative of a function is equal to a negative constant times that same function, the function can be written in terms of sin and cos, as shown in Equation (wf1) (that was the hand-wavy part...see, not so bad):

ψ = A sin(rx) + B cos(sx)

A, B, r, and s are constants in Equation (wf1). This expression is useful because it is in a form that we could plot with a graphing program (or calculator). However, to do so we must know the constants A, B, r, and s.

#### What are r and s?

If we substitute expression (wf1) into Equation (1DSchr) and solve for r and s, we find the expressions below.

r = s = √(2 me E)((2π)/h)

This shows us that r and s are equal and constant; we know the values for π, h, and me, and we can solve for the constant E.

#### Exercise 2.2.1.2: Prove that Equation (wf1) is true

Show that Equation (wf1) is true in the case that Equation (Schrx) ( (∂^2ψ(x))/(∂x^2) = −Cψ) is true. Also consider Equation (rs) (r, s are constants and r = s) and explain why the constant r must equal s.

To do this problem, you'll also need to know the basic differentiation rules of sin and cos functions, given below for convenience.

Differentiation Rules for sin and cos:

(d/dx)(sin(rx)) = r cos(rx), where r is a constant.

(d/dx)(cos(rx)) = −r sin(rx), where r is a constant.

**Answer**

You can show that (wf1) is true by substituting (wf1) back into Equation (Schrx); in other words take the second derivative of the function, ψ = A sin(rx) + B cos(sx) to show that (∂^2ψ(x))/(∂x^2) = −Cψ. C, r, and s are arbitrary constants, and r = s. The actual value of these constants is irrelevant for this problem. Here is one way to approach the problem:

(1) Substitute ψ = A sin(rx) + B cos(sx) into (∂^2ψ(x))/(∂x^2) = −Cψ.

(∂^2)/(∂x^2)(A sin(rx) + B cos(sx)) = −Cψ

(2) Take the first and second derivative of A sin(rx) + B cos(sx).

The result of taking the first derivative...

(∂)/(∂x)(rA cos(rx) − sB sin(sx)) = −Cψ

...and the second derivative...

−r^2 A sin(rx) − s^2 B cos(sx) = −Cψ

This is where we see that the only way ψ = A sin(rx) + B cos(sx) is if we can factor the values r^2 and s^2 out of the left side. We have a hint that r = s from the discussion above and Equation (rs). Now we see that this is a necessary condition for the expression −r^2 A sin(rx) − s^2 B cos(sx) = −Cψ to be true.

(3) Simplify

If r = s, then r^2 = s^2 and we can replace s with r in the equation above, as so...

−r^2 A sin(rx) − r^2 B cos(sx) = −Cψ

Now, we can factor the constant, −r^2 out of the left side of this expression,

−r^2(A sin(rx) + B cos(sx)) = −Cψ

Now we see that ψ = A sin(rx) + B cos(sx) when −C = −r^2. In other words, we have shown that ψ = A sin(rx) + B cos(sx) is true.

Why is this a useful exercise?

Although it is difficult to explain the derivation of the expression ψ = A sin(rx) + B cos(sx) without differential equations and only knowing that (∂^2ψ(x))/(∂x^2) = −Cψ, to show this is true is as simple as solving this exercise. This exercise is here to help you review your calculus and to show you that the "hand waving" in the text above is not magic, but it is coming from math that you have seen in your calculus courses. Math is crucial for explaining the nature of the universe! Eat your vegetables and practice your math.

#### Exercise (rs)

*Complete Exercise 2.2.1.2 before attempting this one.

Derive the expression for r below (from Equation (rs)) using the 1-D wavefunction ((wf1): ψ = A sin(rx) + B cos(sx)) and the 1-D Schrödinger equation ((1DSchr): (((−h^2)/(8π^2 me))((∂^2ψ(x))/(∂x^2)) = Eψ)).

r = ((2π)/h)√(2 me E)

**Answer**

The steps below could be carried out in a different sequence:

(1) Rearrange

Let's move all constants to the right side of (1DSchr) so that we arrive at the expression that is shown in part of Equation (Schrx) .

(∂^2ψ(x))/(∂x^2) = ((−8π^2 me E)/h^2)ψ

(2) Take the second derivative of ψ, which we found in Exercise 2.2.1.2.

(∂^2ψ(x))/(∂x^2) = −r^2(A sin(rx) + B cos(sx)) = ((−8π^2 me E)/h^2)ψ

And since ψ = A sin(rx) + B cos(sx), we can simplify this by dividing both sides by ψ (or by A sin(rx) + B cos(sx)).

**recall that s = r. So, you could have substituted r for s in the expression above, and you'd still be on the right track.

−r^2 = (−8π^2 me E)/h^2

(3) Solve for r (*we already showed r = s in the Exercise 2.2.1.2).

r = √((8π^2 me E)/h^2) = ((2π)/h)√(2 me E)

#### What are A and B?

We can find the possible values of A and B by looking at the possible extremes for the value of x. In our model in Figure 2.2.1.1, we can see that x can have values from 0 → a. The two extremes, where x = 0 and x = a, lie at the walls of the box. The electron cannot exist beyond these values because it is trapped inside the walls, so its wavefunction must be zero at x = 0 and x = a.

The case where x = 0 can help us find the value of B. We just said that the wavefunction must be zero where x = 0. This means:

ψ_(x=0) = A sin(rx) + B cos(sx) = A sin(0) + B cos(0) = 0

Because A sin(0) = 0, the expression can be simplified to:

ψ_(x=0) = B cos(0) = B(1) = 0

Now we can see that there is only one possible value for the constant, B, that would allow this expression to be true, B = 0. And since B is constant then it will always be zero despite the value of x. This simplifies our 1-D wavefunction:

ψ = A sin(rx)

The case where x = a can help us find the value for A. Since the wavefunction must be zero where x = a:

ψ_(x=a) = A sin(rx) = A sin(ra) = 0

In this case, A cannot be zero because if both A and B are zero, the wavefunction is zero at all values of x, and so our wavefunction would not exist inside the box. So, let's assume A is not zero. Then, it must be the case that

sin(ra) = 0

and then because of the way that sin functions work, the quantity ra must be an integer value of π if sin(ra) = 0.

ra = ±nπ

where n = 1,2,3... any non-zero integer. We can ignore negative values here since both positive and negative values of r will give the same value for sin(ra). We can then solve for r:

r = (nπ)/a

and substitute the value r = (nπ)/a into Equation (wf2) to get:

ψ = A sin((nπx)/a)

Recall that the square of the wavefunction (ψ^2) gives the probability of finding the electron anywhere in space. In our model, the probability of finding the particle-wave inside the box is unity (it is 1). Mathematically, this is the normalizing requirement (expressed as ∫ψA ψA^*dτ = 1), which can be solved to find the value of A.

A = √(2/a)

Now, we can substitute the value of A into expression (wf3), and we have a wavefunction that can be visualized using any graphing program/calculator!

ψ = √(2/a)(sin((nπx)/a))

#### What is the energy (E) of a particle in the box?

So, now you can see how a 1-D wavefunction can be solved. But how do we find the E of the electron from this? Well, in order to not distract you earlier, we skipped over a very simple way to do this. The E falls right out of the equations you just saw. We can set the two expressions we found above for the constant r, (equations (rs) and (r)) equal to one another and then solve for E:

r = (nπ)/a = √(2 mE)((2π)/h)

E = (n^2 h^2)/(8 ma^2)

Expression (E) can be used to calculate the energy of a particle in a one-dimensional box of length a, given its integer energy level, n. Here we can see that the energy is quantized because n is an integer (n = 1,2,3...). In other words, n is a quantum number.

### Making sense of the particle in a box: plotting the 1-D ψ and ψ^2.

No matter whether you're dealing with a 1-dimensional or 3-dimensional wave equation, the wavefunction itself (ψ) describes the particle's wave properties. This ψ doesn't have actual physical meaning, so it's hard to imagine what it "looks like" other than just plotting its function. However, the probability of finding the particle-wave at any specific position along the x-axis between x = 0 and x = a is more physically meaningful. The probability of finding the particle is proportional to the square of the wave function, which is represented by either ψ^2 or, sometimes, ψψ^*. The plots of the functions for ψ and ψ^2 for the first three possible values of n are shown below in Figure 2.2.1.2. You could create plots similar to these simply by plotting the function shown in Equation (wf4). To plot, you just need to assign a value of n, and it is convenient to assign the length of the box as a = 1. The plot generated would have the general ratio of x/a on the x axis, and thus would be relevant for any length box.

Figure 2.2.1.2: Plots of the 1-D ψ and ψ^2 for n = 1, n = 2, and n = 3 of a box of length a. The wavefunction (ψ) is plotted as a thick solid, dashed, or dotted line. The square of the wavefunction (ψ^2), which represents the probability of finding the particle at position x, is plotted as the thinner lines and is shaded. Solid lines represent n = 1, dashed lines represent n = 2, and dotted lines represent n = 3. (CC-BY-NC-SA; Kathryn Haas)

[Note: corrected; the source prints "The square of the wavefunction (ψ), which" where this reads "The square of the wavefunction (ψ^2), which". The thinner, shaded lines are ψ^2.]

The graphs above represent "solutions" to the wave function. For example, the solution n = 1 gives the plot shown in Figure 2.2.1.2 B. The solution of n = 2 is plotted in Figure 2.2.1.2 C, and so on. These values for n are some of the possible solutions to the 1-dimensional ψ, and they yield descriptions of the wave behavior and probability of finding a particle in 1-dimensional space.

### How does this apply to atoms?

The 1-dimensional particle in a box does not represent a real situation; but rather, it is a simple model that we can use to understand a more complex system, like a electron orbiting the nucleus in three dimensions. It's useful to recognize the analogies here that might represent something familiar in a real situation.

x = 0 is analogous to the nucleus in an atom. Here in the particle in a box model, ψ = 0 and there is zero probability of finding an electron. When this is extended to an atom, this position is analogous to the nucleus (at the origin of a coordinate system where x = y = z = 0. A 3-dimensional ψ is also zero at the nucleus and the electron cannot exist there; also, ψ approaches zero as it approaches this position in both the particle in a box model and in a more realistic case of an electron in an atom.

[Note: this holds for orbitals with l > 0, but not for s orbitals: an s orbital's ψ is largest at the nucleus (r = 0), as the radial wavefunctions in 2.2.2 show. The paragraph is left as printed.]

x = a is analogous to a boundary surface far from the nucleus. In the particle in a box model, the 1-dimensional ψ is zero at x = a. This is analogous to an electron's ψ approaching zero as it gets further from the nucleus. There will be a more in depth description of boundary surface in the next section (2.2.2). You already know this as the outermost surface of an electron orbital. One minor but notable difference between the 1-dimensional particle in a box and the case of a real atom is that the ψ in three dimensions approaches but never quite reaches zero as distance from the nucleus increases, while ψ = 0 for x = a in the more simple case of a 1-dimensional particle in a box.

A change in sign of the ψ (and where both psi = 0 and ψ^2 = 0) is a node. In both the 1-dimensional particle in a box model and in the more realistic 3-dimensional case, a node is found where the ψ changes sign. At this point, ψ = ψ^2 = 0; in other words there is zero probability of finding the particle or electron at these points. It is easy to spot these points in the plots above because the wave function crosses the x-axis and the ψ^2 meets zero.

#### Exercise 2.2.1.4

Identify the points on plots B, C, and D in Figure 2.2.1.2 that are nodes. How many nodes are there for n = 1, n = 2, and n = 3?

**Answer**

The nodes are annotated with red circles on the figure below. Panel B (n = 1) has zero nodes. There are two points where ψ = 0 in the case of n = 1, but these points are at the walls of the box and they are not nodes. The walls of the box are analogous to the nucleus and the boundary surface of an electron orbital. Panel C (n = 2) has one node where the ψ crosses zero. Panel D (n = 3) shows two nodes.

[Image not described in source]

#### Exercise 2.2.1.5

Use a graphing program to plot the 1-dimensional ψ and ψ^2 for n = 1,2,3,4. How many nodes are there for n = 4? Is this expected? Predict how many nodes we should expect for n = 5.

You can use any plotting program to do this, and if you aren't familiar with any, try this one: Desmos

**Answer**

You can use any plotting program to do this. This is the function you should plot (it is Equation (wf4)):

ψ = √(2/a)(sin((nπx)/a))

For n=1: Assign a value of n = 1, as stated in the problem. In the text above, it also states that it is convenient to assign a value of a = 1. Assigning these values results in the following function:

ψ = √(2/1)(sin((1πx)/1)) and simplifying leads to ψ = √2(sin(πx))

For n=2,3,4 you would repeat the process above. You will get the following functions:

For n=2: ψ = √2(sin(2πx))

For n=3: ψ = √2(sin(3πx))

For n=4: ψ = √2(sin(4πx))

In a program like Desmos, you need to input the function correctly. It's useful to know the code for at least one graphing program. For Desmos, and most others, you can find help online. For example, the correct input for Desmos for the n=4 case is sqrt(2)*(sin(4*pi*x)). But, you have to type it in because copy/paste doesn't work. You'll also want to display your graph only from x = 0 to x = 1 by hitting the settings button (a little wrench in the upper right corner) and changing the x scale. Go ahead and change the y scale too, to y = −2 to y = 2. If you do this, you should get something that looks like this:

[Image not described in source]

To graph the square of each wavefunction, you'd just square the functions that we just plotted:

[Image not described in source]

In both the case of ψ and ψ^2, the n = 4 function shows three nodes (see the bolded purple line, where nodes are tiny grey spots on the axis). This follows a pattern that you might have noticed with the cases of n = 1,2, and 3 where the number of nodes is n − 1 (nodes = n − 1). We should expect three nodes for n = 4 based on this pattern, and four nodes for n = 5.

In the next section, we will extend these ideas qualitatively to three dimensions. While there is only one quantum number in one dimension, there are three quantum numbers in three dimensions that (when combined) give discrete descriptions of an electron in three-dimensional space (plus a fourth quantum number that explains other properties of the electron).

## 2.2.2: Quantum Numbers and Atomic Wave Functions

The one-dimensional particle in a box model from the previous section shows us how a wavefunction works in one dimension (the x- dimension). In one dimension, the wavefunction requires only one quantum number, n. A full explanation of the three-dimensional wavefunction for an electron is outside of the scope of this course. Instead, we will focus on gaining a conceptual understanding by extending knowledge of the one-dimensional wavefunction to a three-dimensional space.

### Quantum numbers

Extending the wavefunction to three dimensions requires a total of three quantum numbers. In addition to n, which we saw in the one-dimensional case, we also need l and ml to express the wavefunction in three dimensions. A complete solution to the Schrödinger equation, both the three-dimensional wavefunction and energy, includes a set of three quantum numbers (n, l, ml). The wavefunction describes what we know as an atomic orbital; it defines the region in space where the electron is located. Additionally, there is a fourth quantum number, ms. The ms quantum number accounts for the observed interaction of electrons with an applied magnetic field; it is an additional postulate that is not part of the wavefunction. These four quantum numbers are described below.

The quantum number, n: This is the principle quantum number. This number represents the shell, including both the overall energy of the electron in that shell and the size of that shell. An allowed value for n is any non-zero, positive integer (1, 2, 3, 4, ... etc are allowed, but 4.1 is not allowed).

The quantum number, l: This is the angular momentum quantum number that corresponds to the subshell and its shape. It represents the angular dependence of the subshell, or the "shape" of the orbitals within a subshell. The allowed values of l depend on n. The allowed values of l for an electron in shell n are integer values between 0 to n − 1, or l = 0 → n − 1. These values correspond to the orbital shape where l = 0 is an s-orbital, l = 1 is a p-orbital, l = 2 is a d-orbital, and l = 3 is an f-orbital.

The quantum number ml: This is the magnetic quantum number. Its possible values give the number of orbitals within a subshell and its specific value gives the orbital's orientation in space. The allowed values of ml depend on the value of l. The value of ml is allowed to be any positive or negative integer between + l and −l. In other terms, ml = + l → −l. For example, if the electron is in a 3-p-orbital, then n = 3, l = 1, and the possible values of ml are −1,0, and +1. Since there are three possible values of ml there are three orbitals in the p subshell. The specific ml value defines in which of the three possible p-orbitals (px, py, or pz) the electron exists. In the case of the s subshell, there is only one value, ml = 0 because l = 0. The one value corresponds to the fact that there is only one s orbital in any shell.

The quantum number ms: This quantum number accounts for the electron's "spin". In short, electrons interact with magnetic fields in a way that is similar to how a tiny bar magnet would interact with a magnetic field. The allowed values for ms are +1/2 and −1/2.

Table 2.2.2.1. Quantum Numbers

| SYMBOL | NAME | VALUES | MEANING |
| --- | --- | --- | --- |
| n | principal | 1,2,3...(any integer) | energy level, shell |
| l | angular momentum | 0 → n − 1 | subshell, 0 = s,1 = p,2 = d,3 = f... this is the angular dependence of the orbital, shape of the orbital; *letters have historical meaning, sharp, principle, diffuse, fundamental |
| ml | magnetic | + l → −l | orientation of angular momentum in space, orbital |
| ms | spin | +1/2, −1/2 | the imaginary property we call "spin", up or down |

### 1-Electron Wavefunctions (Atomic orbitals)

One simplified representation of the three-dimensional wavefunction is shown below. This representation breaks the wavefunction into two parts: the radial contribution (R_(n, l)(r)) and the angular contribution (Y_(l, ml)(θ, φ)).

ψ_(n, l, ml) = R_(n, l)(r) × Y_(l, ml)(θ, φ)

Allowed Energies

From the wavefunction, we can find the allowed energies of an electron in an atom. We have not given you the more complex form of the wavefunction where you'd need to derive (E) from (WF1) because it is outside the scope of this course. Instead, consider the process that we used to derive the energy of a particle in a one-dimensional box in the previous section. A similar process can be used to find the energy of an electron in three dimensions, shown in (E).

En = −hcRZ^2/n^2 = −(13.607 eV)(Z/n)^2,

where n is the principle quantum number, h is Planck's constant, c is the speed of light, R is the Rydberg constant, and Z is the charge of the nucleus. It is useful to know that the value of hcR = 13.6 eV. This is also the value of the ionization energy of an electron in a hydrogen atom. This equation only works for hydrogenic atoms (atoms or ions that are "like" hydrogen in that they have only one electron).

#### Exercise 2.2.2.1

The energy that it takes to eject a ground-state electron from a hydrogen atom (its ionization energy, IE) is measured to be approximately 13.6 eV, while the IE energy of a He^+ ion is four times greater at 54.4 eV. These values can be predicted using both Equation (E) and the Rydberg equation.

a. Using Equation (E) for allowed energies of electrons in a hydrogen atom, derive the energy of the ground state electron in H. Then repeat this process for a He^+ ion. What do the values indicate about the relative attraction between an electron and the nuclei of these two hydrogenic atoms?
b. Show that the IE of H's 1s electron can also be predicted by the Rydberg formula (equation 2.1.2.2).

**Answer a**

Use Equation (E) . For a hydrogen atom with one proton, Z = 1, and the ground state energy level is the lowest energy level, n = 1. Therefore, the energy of an electron in the ground state of a H atom is:

En = −hcRZ^2/n^2 = −13.607 eV(1/1)^2 = −13.607 eV, or approximately −13.6 eV. Thus, the IE (energy necessary to remove that electron) is +13.6 eV.

We can use the same process to find the ground state energy of an electron in He^+. This time, Z = 2 because helium has two protons in its nucleus, and as before, the ground state is n = 1.

En = −hcRZ^2/n^2 = −13.607 eV(2/1)^2 = −54.428 eV, or approximately −54.4 eV. Thus, the IE is +54.4 eV.

These ground-state energies are the same as the energy required to remove the ground state electron from H and He^+. In other words, these are the predicted ground state IE values for one electron in H and He^+. The measured IEs for these two species are in fact 13.6 eV and 54.4 eV, respectively.

The He^+ ion has a more negative value for its ground state energy with a magnitude four times greater than that of the ground state H electron. This means that the He^+ electron is more strongly attracted to the (+2) nucleus than the H electron is attracted to the (+1) nucleus, and more energy is required to eject the He^+ electron than the H electron. It takes more energy to remove the electron from He^+ than from H. This makes sense in light of Coulomb's law: The attractive force between the H nucleus (+1) and an electron (-1) would be weaker than that of a He nucleus (+2) and an electron (-1) because the positive charge of the He nucleus has a greater magnitude.

Answer )

The Rydberg equation is: 1/λ = E(cm^−1) = RH (1/(nl^2) − 1/(nh^2)) where nl and nh are positive integers, nh > nl, and the Rydberg constant (RH), has a value of 1.09737 × 10^7m^−1. We should set nl = 1 to represent the initial ground state, and nh = ∞ to represent the removal of the electron from the atom.

Step 1.

Calculate Energy (in m^-1) using the Rydberg equation:

E = RH(1/(nl^2) − 1/(nh^2)) = 1.09737 × 10^7 m^−1(1/(1^2) − 1/(∞^2)) = 1.09737 × 10^7 m^−1(1 − 0) = 1.09737 × 10^7 m^−1

Ultimately, we want a value of energy in units of eV so we can compare it to the answers in part (a), but our value here is in units of inverse meters (m^-1). A quick internet search can tell you the conversion between inverse centimeters (cm^-1) and eV is 1 eV = 8065.6 cm^−1.

Step 2.

Convert from m^-1 to cm^-1 to eV so that we can compare to the answer in part (a):

1.09737 × 10^7 1/m × (1 m)/(100 cm) × (1 eV)/(8065.6 1/cm) = 13.6056 eV, or approximately 13.6 eV.

#### Exercise 2.2.2.2

Which of the following are hydrogenic atoms? H, H^+, H^-, He, He^2+, He^+, He^-, Li, Li^3+, Li^2+, Li^+, Li^- .

**Answer**

Hydrogenic atoms are atoms or ions that contain only one electron. H, He^+, and Li^2+ are hydrogenic atoms/ions that contain only one electron.

#### Radial and Angular contributions to the wavefunction:

##### Radial contribution, R_(n, l)(r)

The radial part of the wavefunction, R_(n, l)(r) gives the radial variation of ψ. In other words, R_(n, l)(r) defines how the wavefunction depends on the distance of the electron from the nucleus (the radius). The R_(n, l)(r) parts of the wavefunction for a hydrogenic atom are listed in Table 2.2.2.2, and they are plotted in Figure 2.2.2.1. Notice that the R_(n, l)(r) of all s-orbitals (solid lines) reaches a maximum at r = 0. This is unique to the s-orbitals' R_(n, l)(r). The R_(n, l)(r) of p- and d-orbitals orbitals approaches zero as r approaches zero. This has important consequences for how closely an electron in these orbitals can approach the nucleus.

Figure 2.2.2.1: Plots of the radial wavefunction, R_(n, l)(r), for the first three shells. The wavefunctions are plotted relative to r/(a0), where a0 = 52.9 pm = 0.529Å is the Bohr Radius (the radius of a hydrogen 1s orbital). The expressions for these radial wavefunctions (R_(n, l)(r)) are shown in Table 2.2.2.2. (Kathryn Haas; CC-NC-BY-SA)

Table 2.2.2.2. Radial wavefunctions (R(r)) for the first three shells of a hydrogen atom. Z is the nuclear charge, and a0 = 52.9 pm = 0.529Å is the Bohr radius (the radius of a hydrogen 1s orbital). For the H atom, Z = 1 (the nuclear charge of hydrogen). Plotting of the functions can be simplified if we set a0 = 1 and plot the functions with respect to r/a0, which was done to find the plots shown in Figure 2.2.2.1.

| Orbital | n | l | R_(n, l)(r) |
| --- | --- | --- | --- |
| 1s | 1 | 0 | 2[Z/(a0)]^(3/2)e^(−Zr/a0) |
| 2s | 2 | 0 | [Z/(2a0)]^(3/2)(2 − Zr/(a0))e^(−Zr/2a0) |
| 2p | 2 | 1 | (1/(√3))[Z/(2a0)]^(3/2)(Zr/(a0))e^(−Zr/2a0) |
| 3s | 3 | 0 | (2/27)[Z/(3a0)]^(3/2)(27 − 18 Zr/(a0) + 2(Zr/(a0))^2)e^(−Zr/3a0) |
| 3p | 3 | 1 | (1/(81√3))[(2Z)/(a0)]^(3/2)(6 − Zr/(a0))(Zr/(a0))e^(−Zr/3a0) |
| 3d | 3 | 2 | (1/(81√15))[(2Z)/(a0)]^(3/2)(Zr/(a0))^2 e^(−Zr/3a0) |

[Note: corrected; the source prints "| 2s | 2 | 0 | 2[Z/(2a0)]" where this reads "| 2s | 2 | 0 | [Z/(2a0)]"; the source prints "| 2p | 2 | 1 | (1/(√3))[Z/(3a0)]" where this reads "| 2p | 2 | 1 | (1/(√3))[Z/(2a0)]"; the source prints "(27 − 18 Zr/(a0) − 2(Zr/(a0))^2)" where this reads "(27 − 18 Zr/(a0) + 2(Zr/(a0))^2)". These are the standard hydrogen-like radial functions. As printed, the 2s function has an extra factor of 2, the 2p function has 3a0 for 2a0, and the 3s polynomial has a minus sign before its squared term; none of the three is normalized, and the 3s function would have one radial node instead of the two the table of nodes below gives.]

#### Radial probability function, 4πr^2(R_(n, l)(r))^2

Just like in the particle-in-a-box model, the square of the wavefunction is proportional to the probability of finding a particle (electron) at some point in space. The square of the radial part of the wavefunction is called the radial distribution function 4πr^2(R_(n, l)(r))^2, and it describes the probability of locating the electron at some distance r away from the nucleus. When we normalize the probability functions by dividing the function by its integral over all space, we get the plots shown in Figure 2.2.2.2. The normalized probability functions are compared to the original radial part of the wavefunctions in Figure 2.2.2.3. The most probable distance for finding an electron is shown by the maximum value of the function. For an electron in the 1s orbital of H, the most probable distance from the nucleus occurs at r = 1a0. This is the Bohr Radius, and it has a value of a0 = 52.9 pm = 0.529Å. It is convenient to plot the functions of the hydrogen atomic orbitals relative to the size of its smallest orbital, the 1s orbital; this is the reason we plot R_(n, l)(r) and 4πr^2(R_(n, l)(r))^2 relative to r/(a0).

Figure 2.2.2.2: Plots of the normalized radial probability functions for the first three shells. The radial wavefunctions (R_(n, l)(r)) are shown in Table 2.2.2.2. (Kathryn Haas; CC-NC-BY-SA)

Figure 2.2.2.2: Plots of the normalized radial probability function for each orbital in the first three shells (shaded curves). The radial wavefunctions are also shown (Table 2.2.2.2). The y-axis on the left of each plot corresponds to the radial wavefunction (line); the y-axis on the right of each plot corresponds to the radial probability function (shaded). (Kathryn Haas; CC-NC-BY-SA)

#### Radial nodes

From the discussion of the 1-dimensional particle in a box, we learned that nodes exist where ψ = 0. In the case of the 3-dimensional wavefunction, there are two different types of nodes: radial nodes and angular nodes. Radial nodes occur where the radial part of the wavefunction is zero (R(x) = 0). These are easy to find by plotting the radial part of the wavefunction and finding where the radial part of the wavefunction (and the radial probability function) is zero (where R_(n, l)(r) = 0) and where 4πr^2(R_(n, l)(r))^2 = 0. These nodes are spherical in shape and depend on the energy level and subshell (the values of n and l). The number of radial nodes is n − l − 1. An example of a radial node is the single node that occurs in the 2s orbital (2 − 0 − 1 = 1 node). In contrast, the 1s orbital has zero radial nodes (1 − 0 − 1 = 0 nodes). Where there is a node, there is zero probability of finding an electron.

Figure 2.2.2.3: Visualization of the 1s and 2s atomic orbitals. Each orbital is shown as both an electron probability density plot and a contour plot above its wavefunction and probability density function. The 1s orbital has zero radial nodes. The 2s orbital has one radial node where its wavefunction changes sign and its radial probability function is zero. (Kathryn Haas; CC-BY-SA)

#### Boundary surfaces

A true node occurs where the probability of finding an electron is zero. Nodes occur where ψ = ψ^2 = 0. Far from the nucleus, the probability of finding the electron rapidly approaches zero, but is never exactly zero. What this means is that it is rather improbable to find the electron at far distances from the nucleus, but it's not impossible. The rapid fall of probability creates a boundary surface rather than a node. The boundary surface represents the area around the nucleus where the electron exists most of the time.

#### Exercise 2.2.2.1

How many radial nodes are in the s, p, d, and f orbitals in the first four shells? n = 1,2,3,4?

**Answer**

You can approach this answer by using the mathematical relationship between the number of radial nodes and the values of n and l: number of radial nodes is n − 1 − l. You could also notice the pattern that the first orbital of any type (1s, 2p, 3d...) has zero radial nodes, the second orbital of a type (2s, 3p, 4d...) has one radial node, the third orbital of a type has two radial nodes (3s, 4p, 5d...)...etc.

A full list of all of the orbitals in the first four shells and their number of radial nodes is below. It's a good idea to prove to yourself that the numbers given below are consistent with the plots of the orbitals' wavefunctions for those orbitals in the first three shells:

s-orbitals:

1s: n − 1 − l = 1 − 1 − 0 = 0, zero radial nodes

2s: n − 1 − l = 2 − 1 − 0 = 1, one radial node

3s: n − 1 − l = 3 − 1 − 0 = 2, two radial nodes

4s: n − 1 − l = 4 − 1 − 0 = 3, three radial nodes

p-orbitals

2p: n − 1 − l = 2 − 1 − 1 = 0, zero radial nodes

3p: n − 1 − l = 3 − 1 − 1 = 1, one radial node

4p: n − 1 − l = 4 − 1 − 1 = 2, two radial nodes

d-orbitals

3d: n − 1 − l = 3 − 1 − 2 = 0, zero radial nodes

4d: n − 1 − l = 4 − 1 − 2 = 1, one radial nodes

f-orbital

4f: n − 1 − l = 4 − 1 − 3 = 0, zero radial nodes

#### Exercise 2.2.2.1

Draw a rough plot of the following:

a. The radial wavefunction, R_(n, l)(r) and the probability density function, 4πr^2(R_(n, l)(r))^2, for the 1s orbital.
b. The radial wavefunction, R_(n, l)(r) and the probability density function, 4πr^2(R_(n, l)(r))^2, for the 4s orbital.

Answer, 1s

The 1s orbital's R_(n, l)(r) reaches a maximum near the origin and approaches zero far from the nucleus. The 4πr^2(R_(n, l)(r))^2 approaches zero at the origin, has a maximum intensity at the Bohr radius, and approaches zero far from the nucleus (its boundary surface).

[Image not described in source]

Answer, 4s

Like all s orbitals, the 4s orbital's R_(n, l)(r) reaches a maximum near X=0, but it would be less intense than the function of the 1s, 2s, and 3s orbitals. It should have three radial nodes and so its wavefunction would change sign three times. This would give four regions of electron density in the probability function while the function would approach zero (boundary surface) far from the nucleus.

[Image not described in source]

##### Angular contribution, Y_(l, ml)(θ, φ), and angular probability function, (Y_(l, ml)(θ, φ))^2

[Image not described in source]

The angular contribution to the wavefunction, Y_(l, ml)(θ, φ), describes the wavefunction's shape, or the angle with respect to a coordinate system. To describe the direction in space, we use spherical coordinates that tell us distance and orientation in 3-dimensional space. There are three spherical coordinates: r, φ, and θ. r is the radius, or the actual distance from the origin. φ and θ are angles. φ is measured from the positive x axis in the xy plane and may be between 0 and 2π. θ is measured from the positive z axis towards the xy plane and may be between 0 and π.

Y_(l, ml)(θ, φ) = (1/(4π))^(1/2)y(θ, φ)

Y_(l, ml)(θ, φ), is slightly more difficult to describe than the radial contribution was. This is partly because Y_(l, ml)(θ, φ) contains imaginary numbers, which have no real, physical meaning. However, the angular part of the wavefunction becomes more "real" when you square it to get angular probability density, a more tangible concept described as the shapes of orbitals.

The values of θ, φ, and y(θ, φ) for orbitals in the hydrogen atom are listed in Table 2.2.2.3. But Y_(l, ml)(θ, φ) is only a mathematical function and has no real physical meaning. The square of the angular wavefunction, Y_(l, ml)(θ, φ)^2, gives the probability of finding the electron at a point in space on a ray described by (φ, θ). Thus Y_(l, ml)(θ, φ)^2 describes the shape of the orbital.

[Note: corrected; the source prints "The square of the radial wavefunction, Y_(l, ml)" where this reads "The square of the angular wavefunction, Y_(l, ml)". Y_(l, ml)(θ, φ) is the angular part of the wavefunction.]

Table 2.2.2.3. Components of the angular wavefunction and the resulting orbital shapes. The plots in the two right hand columns were created using Desmos and Mathematica: specifically "Spherical Harmonics" from the Wolfram Demonstrations Project, http://demonstrations.wolfram.com/SphericalHarmonics/ and "Visualizing Atomic Orbitals" demonstrations.wolfram.com/Vi...tomicOrbitals/.

| subshell | ml (orbital) | θ | φ | Plots of θ^2 | orbital shapes |
| --- | --- | --- | --- | --- | --- |
| l = 0, s | ml = 0 | 1/(√2) | 1/(√(2π)) | [Image not described in source] | [Image not described in source] |
| l = 1, p | ml = 0 | ((√6)/2) cos θ | 1/(√(2π)) | [Image not described in source] | [Image not described in source] |
| l = 1, p | ml = +1 | ((√3)/2) sin θ | (1/(√(2π)))e^(iφ) | [Image not described in source] | [Image not described in source] |
| l = 1, p | ml = −1 | ((√3)/2) sin θ | (1/(√(2π)))e^(−iφ) | [Image not described in source] | [Image not described in source] |
| l = 2, d | 0 | ((√10)/4)(3 cos^2θ − 1) | 1/(√(2π)) | [Image not described in source] | [Image not described in source] |
| l = 2, d | ml = +1 | ((√15)/2) sin θ cos θ | (1/(√(2π)))e^(iφ) | [Image not described in source] | [Image not described in source] |
| l = 2, d | ml = −1 | ((√15)/2) sin θ cos θ | (1/(√(2π)))e^(−iφ) | [Image not described in source] | [Image not described in source] |
| l = 2, d | ml = +2 | ((√15)/4) sin^2θ | (1/(√(2π)))e^(i2φ) | [Image not described in source] | [Image not described in source] |
| l = 2, d | ml = −2 | ((√15)/4) sin^2θ | (1/(√(2π)))e^(−i2φ) | [Image not described in source] | [Image not described in source] |

#### Angular nodes

Angular nodes exist where (Y_(l, ml)(θ, φ))^2 = 0. These nodes are planar in shape, and they depend on the value of l. The number of angular nodes in any orbital is equal to l. This means that s-orbitals (l = 0) have zero angular nodes, p-orbitals (l = 1) have one angular node, d-orbitals (l = 2) have two angular nodes, and so on. Planar nodes can be flat planes (like the nodes in all p orbitals) or they can have a conical shape, like the two angular nodes in the d_(Z^2) orbital. Angular nodes in some p and d orbitals are shown in Figure 2.2.2.4.

Figure 2.2.2.4: The angular nodes in p-orbitals and d-orbitals are shown. Every p orbital has one angular node, and every d orbital has two angular nodes. The number of angular nodes in any orbital is equal to the value of the quantum number, l. (CC BY-NC-SA; anonymous by request)

### Atomic Orbitals

Atomic orbitals result from a combination of both the radial and angular contributions of the wavefunction. Atomic orbitals can have both angular nodes and radial nodes, depending on the values of n and l.

The chart below compares the radial variation, angular variation, and their combinations (orbitals).

| Orbital | Radial Probability | Radial Nodes | Angular Probability | Angular Nodes | Combination (Orbital) | Total Nodes |
| --- | --- | --- | --- | --- | --- | --- |
| 1s | [Image not described in source] | 0 | [Image not described in source] | 0 | [Image not described in source] | 0 |
| 2s | [Image not described in source] | 1 | [Image not described in source] | 0 | [Image not described in source] | 1 |
| 2p | [Image not described in source] | 0 | [Image not described in source] | 1 | [Image not described in source] | 1 |
| 3s | [Image not described in source] | 2 | [Image not described in source] | 0 | [Image not described in source] | 2 |
| 3p | [Image not described in source] | 1 | [Image not described in source] | 1 | [Image not described in source] | 2 |
| 3d | [Image not described in source] | 0 | [Image not described in source] | 2 | [Image not described in source] | 2 |

## 2.2.3: Aufbau Principle

### Introduction

The Aufbau Principle (also called the building-up principle or the Aufbau rule) states that, in the ground state of an atom or ion, electrons fill atomic orbitals of the lowest available energy level before occupying higher-energy levels. In general, an electron will occupy an atomic orbital with the lowest value of n, l, ml, in that order of priority. The value of ms for an unpaired electron is conventionally assigned a value of +1/2. Each electron in an atom/ion must have a unique set of values for all four quantum numbers.

### The Ground State of Hydrogenic Atoms/Ions

In a hydrogenic atom/ion, there is only one electron. In this case, the only factor determining energy is the value of n. The ground state will always be the 1s orbital (n = 1, l = 0, ml = 0, ms = +1/2).

### The Ground State of Multi-electron Atoms/Ions

In atoms/ions with two or more electrons, the ground state electron configuration (1) minimizes the total energy of the electrons, (2) obeys the Pauli exclusion principle, (3) obeys Hunds rule of maximum multiplicity, and (4) considers the exchange interaction. These "rules" are described below.

| (1) Electrons will occupy the lowest energy orbitals in order to minimize the total energy. The two quantum numbers that are related to energy in multi-electron atoms are n, and l. Thus, orbitals with the lowest values of n and l will fill first. | [Image not described in source] Figure 2.2.3.1. The order of filling of ground state electron orbitals is 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, etc... (CC-BY-NC-SA; Kathryn Haas) |
| --- | --- |
| (2) Hund's rule of maximum multiplicity states that for a given electron configuration, the lowest energy arrangement of electrons in degenerate orbitals is the one with the greatest "multiplicity," where multiplicity is the number of unpaired electrons (n) plus 1 (multiplicity = n + 1). This rule is used to predict the ground state of an atom or molecule with one or more open electronic shells. Hund's rule is based on empirical observation of atomic spectra, and it is a consequence of the energy required to pair two electrons in the same orbital. This energy of repulsion between two electrons in the same orbitals is a Coulombic energy of repulsion, Πc, caused by two electrons with like charge sharing the same area of space (an orbital). When more than one electron occupies a set of degenerate orbitals, the most favorable arrangement is one where the number of paired electrons is minimized. A simplified definition of Hund's rule is that the lowest energy arrangement is the one with the greatest number of unpaired electrons. This implies that if two or more orbitals of equal energy are available, electrons will occupy them singly before filling them in pairs. Examples of ground state arrangements of electrons in three degenerate p-orbitals is given in the figure shown here. | [Image: Hunds Rule maximizes the number of unpaired electrons in degenerate orbitals.] Figure 2.2.3.2. Hund's rule is that spin multiplicity must be maximized in the ground state. (Kathryn Haas; CC-NC-BY-SA) |
| (3) The Pauli exclusion principle states that it is impossible for two electrons of a multi-electron atom to have the same set of values for all four quantum numbers. Two electrons in different orbitals will have a different set of n, l, and ml values. When two electrons reside in the same orbital, they posses the same n, l, and ml values, therefore their m_s must be different. Thus, two electrons in the same orbital must have opposite half-integer spin projections of +1/2 and −1/2. | [Image: The Pauli exclusion principle tells us that two electrons in the same orbital must have opposite spin.] Figure 2.2.3.3. Pauli's principle tells us that paired electrons must have opposite spin. (Kathryn Haas; CC-NC-BY-SA) |
| (4) The exchange interaction is sometimes called the exchange energy or exchange force. However, it is not a true energy or force. Rather, it is a quantum mechanical effect that takes place between identical particles. The exchange interaction results in a ground state electron configuration with unpaired electrons all being of the same spin. Unpaired electrons are conventionally written in the "spin up" direction. | [Image: The exchange interaction requires that unpaired electrons have the same spin; spin up by convention.] Figure 2.2.3.4. Unpaired electrons should have identical spins due to the exchange interaction. (Kathryn Haas; CC-NC-BY-SA) |

### Trends in Expected Electron Configuration

The four "rules" above can be used as guidelines to predict the ground state electron configuration of atoms, the filling of subshells, and the configuration of electrons in degenerate orbitals. However, the utility of these guidelines for predicting actual electron configurations requires more nuanced knowledge of the relative energy levels of orbitals.

Generally, orbital energy levels directly correspond to their shell number. Additionally, orbitals within a shell generally follow the energetic trend where s<p<d<f. Although these general trends for relative orbital energy levels hold true for most of the main block elements (the s - and p-blocks), there are important exceptions in the orbital energy levels of transition metal atoms and ions of the d- and f-blocks.

Figure 2.2.3.5: This is a depiction of the periodic table that highlights the s-, p-, d-, and f- blocks in different colors. Violations of the expected trend in electron configurations are outlined in a heavy black line. Several elements of the d block and f block violate the general trends in electron configuration because their orbital energy levels do not follow general trends. (CC-BY-NC-SA; Kathryn Haas)

Elements that violate general trends in electron configuration are outlined with a dark line in Figure 2.2.3.5. All of the exceptions are within the d- and f- blocks, and the violations are caused by an unexpected order of the orbital energy levels.

In the next section you will learn why the orbital energy levels correlate with shell number and why subshells within a shell usually follow the trend that s<p<d<f. You will also learn why there are occasional exceptions to this trend and how these exceptions influence elemental properties.

### References

1. Miessler, Gary L., and Donald A. Tarr. Inorganic Chemistry. Upper Saddle River, NJ: Pearson Prentice Hall, 2010. Print.
2. Brown, Ian David. The Chemical Bond in Inorganic Chemistry the Bond Valence Model. Oxford: Oxford UP, 2006. Print.

## 2.2.4: Shielding

### Introduction

Coulomb's Law is from classical physics; it tells us that particles with opposite electrostatic charge are attracted to each other, and the larger the charge on either particle or the closer the distance between them, the stronger the attraction. Coulomb's law explains why atomic size decreases as the charge on the nucleus increases, but it can't explain the nuances and variations in size as we go across the periodic table. Coulomb's Law also explains why electrons in different shells (n), at different distances from the nucleus, have different energies. But on its own, Coulomb's law doesn't quite explain why electron subshells within a shell (like 2s vs. 2p) would have different energies. To explain these things, we need to consider how both electron shielding and penetration result in variations in effective nuclear charge (Z*) that depend on shell and subshell.

### Effective Nuclear Charge (Z*)

| [Image not described in source] Figure 2.2.4.1. In a lithium atom, the nuclear charge (Z) is +3. 1s electrons experience an effective nuclear charge (Z*) of +2.69, and 2s electrons experience an Z* of +1.28. (CC-BY-NC-SA; Kathryn Haas) |
| --- |

Coulombs' law works well for predicting the energy of an electron in a hydrogen atom (because H has only one electron). It also works for hydrogen-like atoms: any nucleus with exactly one electron (a He^+ ion, for example, has one electron). However, Coulomb's law is insufficient for predicting the energies of electrons in multi-electron atoms and ions.

Electrons within a multi-electron atom interact with the nucleus and with all other electrons. Each electron in a multi-electron atom experiences both attraction to the nucleus and repulsion from interactions with other electrons. The presence of multiple electrons decreases the nuclear attraction to some extent. Each electron in a multi-electron atom experiences a different magnitude of (and attraction to) the nuclear charge depending on what specific shell and subshell the electron occupies. The amount of positive nuclear charge experienced by any individual electron is the effective nuclear charge (Z*).

For example, in lithium (Li), none of the three electrons "feel" the full +3 charge from the nucleus (see Figure 2.2.4.1). Rather, each electron "feels" a Z* that is less than the actual Z and that depends on the electron's orbital. The actual nuclear charge in Li is Z = +3; the 1s electrons experience a Z^* = +2.69, and the 2s electron experiences a Z^* = +1.28. In general, core electrons (or the electrons closest to the nucleus), "feel" a Z* that is close to, but less than, Z. On the other hand, outer valence electrons experience a Z* that is much less than Z.

In summary:

- Core electrons: Z^*⪅Z
- Valence electrons: Z^*≪Z

### Shielding:

Shielding is the reduction of true nuclear charge (Z) to the effective nuclear charge (Z*) by other electrons in a multi-electron atom or ion. Shielding occurs in all atoms and ions that have more than one electron. H is the only atom in which shielding does not occur.

Explanation of shielding: Electrons in a multi-electron atom interact with the nucleus and all other electrons in the atom. To describe shielding, we can use a simplified model of the atom: we will choose an electron-of-interest in a multi-electron atom and treat all the "other" electrons as a group of spherically-distributed negative charge. Classical electrostatics allows us to treat spherical distribution of charge as a point of charge at the center of the distribution. Thus, we consider all the "other" electrons in our atom as a point of negative charge in the center of the atom. While the positive charge of the nucleus provides an attractive force toward our electron, the negative charge distribution at the center of the atom would provide a repulsive force. The attractive and repulsive forces would partially cancel each other; but since there are less "other" electrons than there are protons in our atom, the nuclear charge is never completely canceled. The "other" electrons partially block, or shield, part of the nuclear charge so that our electron-of-interest experiences a partially-reduced nuclear charge, the Z*.

In reality, there is not a one-for-one "canceling" of the nuclear charge by each electron. Partly due to penetration, no single electron can completely shield a full unit of positive charge. Core electrons shield valence electrons, but valence electrons have little effect on the Z* of core electrons. The ability to shield, and be shielded by, other electrons strongly depends the electron orbital's average distance from the nucleus and its penetration; thus shielding depends on both shell (n) and subshell (l).

#### Shielding depends on electron penetration

Coulomb's law shows us that distance of an electron from its nucleus is important in determining the electron's energy (its attraction to the nucleus). The shell number (n) determines approximately how far an electron is from the nucleus on average. Thus, all orbitals in the same shell (s,p,d) have similar sizes and similar average distance of their electrons from the nucleus. But there is another distance-related factor that plays a critical role in determining orbital energy levels: penetration. Penetration describes the ability of an electron in a given subshell to penetrate into other shells and subshells to get close to the nucleus. Penetration is the extent to which an electron can approach the nucleus. Penetration depends on both the shell (n) and subshell (l).

The penetration of individual orbitals can be visualized using the radial probability functions. For example, Figure 2.2.4.2 below shows plots of the radial probability function of the 1s, 2s, and 2p orbitals. From these plots, we can see that the 1s orbital is able to approach the closest to the nucleus; thus it is the most penetrating. While the 2s and 2p have most of their probability at a farther distance from the nucleus (compared to 1s), the 2s orbital and the 2p orbital have different extents of penetration. Notice that the 2s orbital is able to penetrate the 1s orbital because of the central 2s lobe. The 2p orbital penetrates somewhat into the 1s, but it cannot approach the nucleus as closely as the 2s orbital can. While the 2s orbital penetrates more than 2p (the 2s orbital can approach closer to the nucleus), the 2p is slightly closer on average than 2s. The order of Z* in 2s and 2p subshells depends on which factor (average distance or penetration) is more important. In the first two rows of the periodic table, penetration is the dominant factor that results in 2s having a lower energy than 2p (see Figure 2.2.4.4 for values).

Figure 2.2.4.2: Orbital Penetration. A comparison of the radial probability distribution of the 2s and 2p orbitals for various states of the hydrogen atom shows that the 2s orbital penetrates inside the 1s orbital more than the 2p orbital does. Consequently, when an electron is in the small inner lobe of the 2s orbital, it experiences a relatively large value of Z*, which causes the energy of the 2s orbital to be lower than the energy of the 2p orbital.

An electron orbital's penetration affects its ability to shield other electrons and affects the extent to which it is shielded by other electrons. In general, electron orbitals that have greater penetration experience stronger attraction to the nucleus and less shielding by other electrons; these electrons thus experience a larger Z*. Electrons in orbitals that have greater penetration also shield other electrons to a greater extent.

Within the same shell value (n), the penetrating power of an electron follows this trend in subshells (l):

[Note: corrected; the source prints "subshells (m_l):" where this reads "subshells (l):". Subshells are labelled by l; m_l labels the orbitals within a subshell.]

s>p>d>f

### Exercises

#### Exercises

1. Compare the 2s and 2p orbitals: (a) Which is closer to the nucleus on average? (b) Which is more penetrating? (c) Which orbital experiences a stronger Z* and is thus lower in energy (consider your experience, but also inspect Figures 1.1.2.3 and 1.1.2.4 from the previous page)? Please explain.
2. Peruse the Hyperphysics page (click) that shows radial probability functions of several orbitals (click around on various orbitals). Compare the 2p and 3s orbitals: (a) Which is farther from the nucleus on average? (b) Which is more penetrating? (c) Which orbital is lower in energy?
3. Which atom, Li, or N, has a stronger valence Z*? Explain why.
4. Explain why 2s and 2p subshells are completely degenerate in a hydrogen atom.
5. Which atom has a smaller radius: Be or F? Explain.
6. Which electrons shield others more effectively: 3p or 3d?
7. Use the clues given in the figures below to label the radial distribution functions shown.

[Image not described in source]

8. Examine the plots on the right in the previous question, above. Note that this is a plot showing the probability density for the 3s, 3p, and 3d subshells. (a) For which of these three functions is the highest probability density at the smallest r value (which is closest to the nucleus on average)? Is this the same subshell that penetrates most? (b) Use this example to describe how penetration and shielding result in a splitting of subshell energy level in multi-electron atoms.
9. Explain why the ground state (most energetically favorable) electron configuration of Be is 1s^2 2s^2 rather than alternative configurations like 1s^2 2s^1 2p^1 or 1s^2 2p^2.

**Answer 1**

(a) The 2p orbital is closer to the nucleus on average.

[Note: corrected; the source prints "(a) The 2s orbital is closer" where this reads "(a) The 2p orbital is closer". On average a 2p electron is the closer one (in hydrogen the mean distance is 5a0 for 2p and 6a0 for 2s), although 2s is the more penetrating; the answer to question 2(c) also relies on 2p being close to the nucleus on average.]

(b) The 2s orbital is more penetrating than 2p.

(c) You might "know" that the 2s orbital is lower in energy than 2p because 2s fills first. But a close inspection of Figures 1.1.2.3 and 1.1.2.4 from the previous page indicates that while the 2s and 2p elements are degenerate in Ne (element 10), for elements with atomic number 11 and greater 2p has a higher Z* than 2s! This example illustrates that both average distance and penetration are factors in determining Z*, and the factor that is more important may change as we increase in atomic number.

**Answer 2**

(a) The 3s orbital reaches farther away from the nucleus and is on average farther from the nucleus than 2p.

(b) The 3s orbital is more penetrating than 2p, even though 3s is farther on average!

(c) The 2p orbital is lower in energy than 3s; this is because 2p is still significantly closer to the nucleus on average and experiences a stronger Z*. (Penetration is not the only consideration!)

**Answer 3**

A nitrogen atom has a stronger effective nuclear charge (Z*) than lithium due to its greater number of protons; even though N also has more electrons that would shield the nuclear charge, each electron only partially shields each proton. This means that atoms with greater atomic number always have greater Z* for any given electron.

**Answer 4**

The hydrogen atom has only one electron; thus there is no shielding to consider. When there are not other electrons to shield the nucleus, penetration and shielding are irrelevant, and subshells within a shell are degenerate.

**Answer 5**

Fluorine has a smaller radius than beryllium because F has a greater valence Z* and therefore pulls the valence electrons closer to the nucleus and provides a smaller atomic radius.

**Answer 6**

3p shields better than 3d because p orbitals penetrate more than d orbitals within the same shell.

**Answer 7**

[Image not described in source]

**Answer 8**

3d is closest on average, but 3s penetrates most. The three subshells of n = 3 differ in their average distance and in their ability to penetrate; these factors result in differences in the Z* experienced by electrons in each orbital. We would expect 3s to be lowest in energy followed by 3p and then 3d.

**Answer 9**

This question is asking why the 2s orbital fills in Be before 2p is occupied. This is a multi-electron atom, therefore core electrons shield the 2s and 2p orbitals to different extents. In Be we expect the 2s orbital to fill before 2p because 2s penetrates more and experiences a higher Z*.

### Slater's rules for estimating Z*

| [Image not described in source] Figure 2.2.4.3. Diagram illustrating effective nuclear charge according to Slater's rules. |
| --- |

The Z* can be estimated using a number of different methods; probably the best known and most commonly used method is known as Slater's Rules. Slater developed a set of rules to estimate Z* based on how many other electrons exist in the atom and on the orbital location of the electron-of-interest. These two factors are important determinants in shielding, and they are used to calculate a shielding constant (S) used in Slater's formula:

Z* = Z − S

where Z is the actual nuclear charge (the atomic number) and Z* is the effective nuclear charge.

In the calculation of S, it is assumed that electrons closer to the nucleus than our electron-of-interest cancel some of the nuclear charge; those farther from the nucleus have no effect. To calculate S, all the relevant orbitals in an atom are written out in order of increasing energy, separating them into in "groups". Each change in shell number is a new group; s and p subshells are in the same group but d and f orbitals are their own group. You write out all the orbitals using parentheses until you get to the group of the electron-of-interest, like this:

(1s)(2s,2p)(3s,3p)(3d)(4s,4p)(4d)(4f)(5s,5p) etc.

**Critical: The orbitals must be written in order of increasing energy!

1. Electrons in the same Group(): Each other electron (not counting the electron-of-interest) in the same group () as the chosen electron, contributes 0.35 to S. Conceptually, this means electrons in the same group shield each other 35%.
2. Electrons in Groups() to the left:
   - If the electron-of-interest is in a d or f subshell, every electron in groups () to the left contributes 1.00 to S. Conceptually, this means that d and f electrons are shielded 100% by all electrons in the same shell with a smaller value of l, as well as all electrons in lower shells (n).
   - If the electron-of-interest is in an s or p subshell, all electrons in the next lower shell (n - 1) contribute 0.85 to S. And all the electrons in even lower shells contribute 1.00 to S. Conceptually, this means that s and p electrons are shielded 85% by the electrons one shell lower, and 100% by all electrons in shells n - 2 or lower.
3. 1s electrons: S of a 1s electron is just S=0.3, no matter the element.

#### A video explaining how to use Slater's Rules

[Video not described in source]

#### Example 2.2.4.1: Fluorine, Neon, and Sodium

What is the Z* experienced by the valence electrons in the three isoelectronic species: fluorine anion (F^-), neutral neon atom (Ne), and sodium cation (Na^+)?

**Solution**

Each species has 10 electrons, and the number of core electrons is 2 (10 total electrons - 8 valence), but the effective nuclear charge varies because each has a different atomic number (Z). The approximate Z* can be found with Slater's Rules. For all of these species, we would calculate the same sigma value:

Calculating S: (1s)(2s,2p), S = 2(0.85) + 7(0.35) = 1.7 + 2.45 = 4.15

Fluorine anion: Z* = 9 − S = 9 − 4.15 = 4.85

Neon atom: Z* = 10 − S = 10 − 4.15 = 5.85

Sodium Cation: Z* = 11 − S = 11 − 4.15 = 6.85

So, the sodium cation has the greatest effective nuclear charge.

#### Exercise 2.2.4.1

Calculate Z* for a 3d-electron in a zinc (Zn) atom.

**Answer**

Write out the relevant orbitals: (1s)(2s,2p)(3s,3p)(3d) ~~(4s)~~

Notice that although 4s is fully occupied, we don't include it because in Zn, 4s is higher in energy than 3d. Therefore, 4s is to the right of the d electrons we are considering. The electron-of-interest is in 3d, so the other nine electrons in 3d each contribute 0.35 to the value of S. The other 18 electrons each contribute 1 to the value of S.

S = 18(1) + 9(0.35) = 21.15

Z* = 30 − 21.15 = 8.85

So, although the nuclear charge of Zn is 30, the 3d electrons only experience a Z*≈8.85!

#### "Best" values for Z*

Slater's rules are a set of simple rules for predicting S and Z* based on empirical evidence from quantum mechanical calculations. In other words, the Z* calculated from Slater's rules are approximate values. The values considered to be the most accurate are derived from quantum mechanical calculations directly. You can find these values in a nice chart on the Wikipedia article of Effective Nuclear Charge. The chart is recreated here in Figure 2.2.4.3 for convenience:

Figure 2.2.4.4: This chart shows Z* values calculated by Clementi et al. in 1963 and 1967 that are consistent with SCF Calculations. This chart was created using data from the Wikipedia article on Effective Nuclear Charge. (Kathryn Haas; CC-NC-BY-SA)

#### Z* modulates attraction

When valence electrons experience less nuclear charge than core electrons, different electrons experience different magnitudes of attraction to the nucleus. A modified form of Coulomb's Law is written below, where e is the charge of an electron, Z* is the effective nuclear charge experienced by that electron, and r is the radius (distance of the electron from the nucleus).

F_eff = k (Z*e^2)/r^2

This formula suggests that if we can estimate Z*, then we can predict the attractive force experienced by, and the energy of, an electron in a multi-electron atom (ex. Li).

The attraction of the nucleus to valence electrons determines the atomic or ionic size, ionization energy, electron affinity, and electronegativity. The stronger the attraction, and the stronger Z*, the closer the electrons are pulled toward the nucleus. This in turn results in a smaller size, higher ionization energy, higher electron affinity, and stronger electronegativity.

### General Periodic Trends in Z*

Close inspection of Figure 2.2.4.3 and analysis of Slater's rules indicate that there are some predictable trends in Z*. The data from Figure 2.2.4.3 is plotted below in Figure 2.2.4.4 to provide a visual aid to the discussion below.

Figure 2.2.4.5: The Z* values for electrons in each subshell of the first 54 elements (H to Xe). Each subshell is plotted as a different series (see legend) and the valence shell is highlighted by a solid black line with open circles. (Kathryn Haas; CC-NC-BY-SA)

#### Trends in Z* for electrons in a specific shell and subshell

The Z* for electrons in a given shell and subshell generally increases as atomic number increases; this trend holds true going across the periodic table and down the periodic table. Convince yourself that this is true for any subshell by examining Figure 2.2.4.4. (CC-BY-NC-SA; Kathryn Haas)

Do you notice any exceptions to this general trend?

Inspection of Figure 2.2.4.4 should confirm for you that the Z* increases as Z increases for electrons in any subshell (like the 1s subshell for example, which is plotted above as a red line with square points). You can see this trend as the positive slope in each series. There is one obvious exception in Period 5 in elements 39 (Y) to 41 (Nb; the Z* of 4s actually decreases across these three elements as atomic number increases. There is also an exception between Y and Zr in the 3d subshell, and between Tc and Ru in the 5s subshell.

#### For valence electrons:

It is useful to understand trends in valence Z* because the valence Z* determines atomic/ionic properties and chemical reactivity. The trends in the valence Z* are not simple because as atomic number increases, the valence shell and/or subshell also changes. The valence Z* is indicated in Figure 2.2.4.4 as a black line with open circles.

Down the table: As we go down a column of the periodic table, the valence Z* increases. This is a simple trend because type of subshell is consistent and there is an increase only in shell and in atomic number, Z. This trend is best illustrated by inspection of Figure 2.2.4.3.

Across the table: the trend depends on shell and subshell, but generally Z* increases across a period.

Periods 1-3 (s and p only): As we go across the table in periods 1-3, the shell stays constant as Z increases and the subshell changes from s to p. In these periods, there is a gradual increase in valence Z* as we move across any of the first three periods.

Periods 4 and 5 (s, p, and d): Now we have some more complex trends because valence subshell and shell are changing as we increase in atomic number. Notice that the valence Z* generally increases going across a period as long as the subshell isn't changing; the exception is within the 4d subshell (elements 39-44 or Y-Ru). In general, going from an (n)s subshell to an (n − 1)d subshell, there a relatively large increase in valence Z*. And in going from an (n − 1)d subshell to an (n)p subshell, there is a relatively large decrease in Z*.

From one period to another: From Figure 2.2.4.4, we can see that as we increase Z by one proton, going from one period to the next, there is a relatively large decrease in Z* (from Ne to Na, for example). This is because as Z increases by a small interval, the shell number increases, and so the electrons in the valence shell are much farther from the nucleus and are more shielded by all the electrons in the lower shell numbers.

### Exercises

#### Exercise 2.2.4.2

1. Compare trends in Z* and atomic size. Explain how and why atomic size depends on Z*.
2. Compare trends in Z* and ionization energy. Explain how and why ionization energy depends on Z*.

**Answer**

1. On the periodic table, atomic radius generally decreases across the periods (left to right) and increases down the groups. As atomic number increases across the periodic table, nuclear charge (Z) increases and Z* increases. In turn, the atomic radius decreases because the higher nuclear charge (and thus higher Z*) pulls electrons closer to the nucleus. Atomic radius increases down the periodic table because the shell number increases. Despite an increase in Z* going down the periodic table, larger atomic radii result from electrons occupying higher shells.
2. Ionization energies (IE) are inversely related to atomic radius; IE increases across the periods and decreases down the groups. Since the nucleus holds valence electrons more strongly (due to higher Z*) across the periods, IE increases because valence electrons are harder to remove. Down the periodic table, larger atomic radii cause electrons in valence orbitals to be shielded by core electrons. Recall that shielding reduces the nuclear charge available to electrons in higher orbital levels, resulting in a lower Z*. With more shielding and lower Z*, the valence electrons are held less tightly by the nucleus such that ionization energy decreases (i.e., valence electrons are easier to remove).

[Note: the valence Z* rises down a group, as item 1 says and the Z* values earlier on this page show; ionization energy falls down a group because the valence electrons are in higher shells, farther from the nucleus. The paragraph is left as printed.]

### References

1. Petrucci, Ralph H., William S. Harwood, F. Geoffrey Herring, and Jeffry D. Madura. General Chemistry: Principles and Modern Applications, Ninth Edition. Pearson Education Inc. Upper Saddle River, New Jersey: 2007.
2. Raymond Chang. Physical Chemistry for Biological Sciences. Sausalito, California: University Science Books, 2005
3. R. S. Mulliken, Electronic Structures of Molecules and Valence. II General Considerations, Physical Review, vol. 41, pp. 49-71 (1932)
4. Anastopoulos, Charis (2008). Particle Or Wave: The Evolution of the Concept of Matter in Modern Physics. Princeton University Press. pp. 236–237. ISBN 0691135126. http://books.google.com/?id=rDEvQZhpltEC&pg=PA236.

### Contributors and Attributions

- Sidra Ayub (UCD), Alan Chu (UCD)
- Emily V Eames (City College of San Francisco)
- Curated or created by Kathryn Haas
