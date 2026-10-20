---
title: "2.5: A Vibrating Membrane"
book: "Physical Chemistry (LibreTexts)"
chapter: "2: The Classical Wave Equation"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/02%3A_The_Classical_Wave_Equation/2.05%3A_A_Vibrating_Membrane"
author: "Delmar"
license: "CC BY-NC-SA 4.0"
---

### Learning Objectives

- To apply the wave equations to a two-dimensional membrane (rectangles and circles)
- To recognize the possible geometries of a nodes in two-dimensional systems

So far, we’ve looked at waves in one dimension, traveling along a string or sound waves going down a narrow tube. However, waves in higher dimensions than one are very familiar—water waves on the surface of a pond, or sound waves moving out from a source in three dimensions. It is pleasant to find that these waves in higher dimensions satisfy wave equations which are a very natural extension of the one we found for a string, and—very important—they also satisfy the Principle of Superposition, in other words, if waves meet, you just add the contribution from each wave. In the next two paragraphs, we go into more detail, but this Principle of Superposition is the crucial lesson.

## The Wave Equation and Superposition in More Dimensions

What happens in higher dimensions? Let’s consider two dimensions, for example waves in an elastic sheet like a drumhead. If the rest position for the elastic sheet is the (x, y) plane, so when it’s vibrating it’s moving up and down in the z-direction, its configuration at any instant of time is a function. u(x, y, t)

In fact, we could do the same thing we did for the string, looking at the total forces on a little bit and applying Newton’s Second Law. In this case that would mean taking one little bit of the drumhead, and instead of a small stretch of string with tension pulling the two ends, we would have a small square of the elastic sheet, with tension pulling all around the edge. Remember that the net force on the bit of string came about because the string was curving around, so the tensions at the opposite ends tugged in slightly different directions, and did not cancel. The (∂^2)/(∂x^2) term measured that curvature, the rate of change of slope. In two dimensions, thinking of a small square of the elastic sheet, things are more complicated. Visualize the bit of sheet to be momentarily like a tiny patch on a balloon, you’ll see it curves in two directions, and tension forces must be tugging all around the edges. The total force on the little square comes about because the tension forces on opposite sides are out of line if the surface is curving around, now we have to add two sets of almost-opposite forces from the two pairs of sides. The math is not shown here, but it is at least plausible that the equation is:

[Note: corrected; the source prints "The math is now shown here" where this reads "The math is not shown here". A typing error that reverses the meaning.]

(∂^2 u(x, y, t))/(∂x^2) + (∂^2 u(x, y, t))/(∂y^2) = 1/v^2 · (∂^2 u(x, y, t))/(∂t^2)

The physics of this equation is that the acceleration of a tiny bit of the sheet comes from out-of-balance tensions caused by the sheet curving around in both the x- and y-directions, this is why there are the two terms on the left hand side.

And, going to three dimensions is easy: add one more term to give

(∂^2 u(x, y, , z, t))/(∂x^2) + (∂^2 u(x, y, z, t))/(∂y^2) + (∂^2 u(x, y, z, t))/(∂z^2) = 1/v^2 · (∂^2 u(x, y, z, t))/(∂t^2)

This sum of partial differentiations in space is so common in physics that there’s a shorthand:

∇^2 = (∂^2)/(∂x^2) + (∂^2)/(∂y^2) + (∂^2)/(∂z^2)

[Note: corrected; the source prints "∇^2 = ((∂^2)/(∂x^2), (∂^2)/(∂y^2), (∂^2)/(∂z^2))" where this reads "∇^2 = (∂^2)/(∂x^2) + (∂^2)/(∂y^2) + (∂^2)/(∂z^2)". The Laplacian is the sum of the three second derivatives, as the sentence above says.]

so Equation (2.5.2) can be more easily written as

∇^2 u(x, y, z, t) = 1/v^2 · (∂^2 u(x, y, z, t))/(∂t^2)

Just as we found in one dimension traveling harmonic waves (no boundary conditions)

u(x, t) = A sin(kx − ωt)

with ω = vk, you can verify that the three-dimensional equation has harmonic solutions

[Note: corrected; the source prints "with ω = νk," where this reads "with ω = vk,". v is the wave speed, as in the wave equation above.]

u(x, y, z, t) = A sin(kx x + ky y + kz z − ωt)

[Note: corrected; the source prints "A sin(kx x + kx + kz z − ωt)" where this reads "A sin(kx x + ky y + kz z − ωt)". The middle term is ky y, as |k| below shows.]

with ω = v|k⃗| where |k| = √(kx^2 + ky^2 + kz^2).

[Note: corrected; the source prints "with ω = ν|k⃗|" where this reads "with ω = v|k⃗|". v is the wave speed.]

k⃗ is a vector in the direction the wave is moving. The electric and magnetic fields in a radio wave or light wave have just this form (or, closer to the source, a very similar equivalent expression for outgoing spheres of waves, rather than plane waves).

It’s important to realize that the 2D wave equation (Equation (2.5.1)) is still a linear equation, so the Principle of Superposition still holds. If two waves on an elastic sheet, or the surface of a pond, meet each other, the result at any point is given by simply adding the displacements from the individual waves. We’ll begin by thinking about waves propagating freely in two and three dimensions, than later consider waves in restricted areas, such as a drum head.

## Vibrational Modes of a Rectangular Membrane

A one-dimensional wave does not have a choice in how it propagates: it just moves along the line (well, it could get partly reflected by some change in the line and part of it go backwards). However, when we go to higher dimensions, how a wave disturbance starting in some localized region spreads out is far from obvious. But we can begin by recalling some simple cases: dropping a pebble into still water causes an outward moving circle of ripples. If we grant that light is a wave, we notice a beam of light changes direction on going from air into glass. Of course, it is not immediately evident that light is a wave: we’ll talk a lot more about that later. A few solutions (both temporal and spatials) are shown below together with their quantum numbers (nx and ny).

The (nx = 1, ny = 1) Solution
3D surface plot displaying a gradient from white to deep magenta, labeled with mode details. Grid lines create a 3D perspective.
The (nx = 1, ny = 2) Solution
The (nx = 2, ny = 1) Solution
The (nx = 2, ny = 2) Solution
Figure 2.5.1: Select Vibrational Modes of a Rectangular Membrane. Animations courtesy of Dr. Dan Russell via Grad. Prog. Acoustics, Penn State).

Solving for the function u(x, y, t) in a vibrating, rectangular membrane is done in a similar fashion by separation of variables, and setting boundary conditions. The solved function is very similar, where

u(x, y, t) = A_nm cos(ω_nm t + φ_nm) sin((nx πx)/a) sin((ny πy)/b)

where

- a is the length of the rectangular membrane and b is the width, and
- nx and ny are two quantum numbers (one in each dimension).

As with the solutions to 1-D wave equations, a node is a point (or line) on a structure that does not move while the rest of the structure is vibrating.

### Example 2.5.1: Nodal Geometries in Rectangular Membranes

For the following 2-D solutions in Figure 2.5.1, how many nodes are there, what is the geometry and how would you characterize them?

a. (nx = 1, ny = 1
b. (nx = 2, ny = 1

**Solution a**

The (nx = 1, ny = 1 solution in Figure 2.5.1 has zero nodes. That is, no spot in the membrane (other than the boundaries) is not moving during the motion of the membrane.

**Solution b**

The (nx = 2, ny = 1 solution in Figure 2.5.1 has one node. It is a line at half the length of the x direction and extends over the entire length of the y direction.

### Exercise 2.5.1

For the (nx = 2, ny = 2 solution to a rectangular membrane in Figure 2.5.1 : how many nodes are there, what is the geometry and how would you characterize them?

**Answer**

There are two nodes. They are lines and one is at half the length of the x direction and extends over the entire length of the y direction and one if and one is at half the length of the y direction and extends over the entire length of the x direction

## Vibrational Modes of a Circular Membrane

The basic principles of a vibrating rectangular membrane applies to other 2-D members including circular membranes. However, the mathematics and solutions are a bit more complicated. The solutions are best represented in polar notation (instead of rectangular like in Equation (2.5.6b)) and have the following functional form

u(r, θ, t) = Jm(λ_mn r) cos mθ cos cλ_mn t

where Jm are Bessel functions (these are oscillatory functions) and λ are constants. This system has two quantum numbers (m and n) that serve the same function as nx and ny do in the rectangular membranes. In the animations in Figure 2.5.2 , the nodal diameters and circles show up as white regions that do not oscillate, while the red and blue regions indicate positive and negative displacements.

[Image: 3D graph of a surface plot showing a smooth gradient from yellow at the edges to orange at the center, with grid lines.]

[Image: 3D surface plot displaying a circular shape with a peak in the center, colored in gradients from red to blue and yellow.]

[Image: 3D surface plot of an oval shape, displaying color gradients from blue to orange, indicating varying values across the surface.]

Figure 2.5.2: Select Vibrational Modes of a Circular Membrane. (CC BY-SA-ND 4.0; Dan Russell, via Grad. Prog. Acoustics, Penn State.

Figure 2.5.2 (left) shows the fundamental mode shape for a vibrating circular membrane, while the other two modes are excited modes with more complex nodal character.

### Exercise 2.5.2

How many nodes are there in the three solutions for a circular membrane in Figure 2.5.2, what are their geometries, and how would you characterize them?

**Answer**

(left) zero nodes

(middle) two nodes. They are circular at approximately 1/3 and 2/3 the radius (these are radial nodes = at fixed radii)

(right) four nodes. They are lines at 45° angle from the center (these are angular nodes = at fixed angles).
