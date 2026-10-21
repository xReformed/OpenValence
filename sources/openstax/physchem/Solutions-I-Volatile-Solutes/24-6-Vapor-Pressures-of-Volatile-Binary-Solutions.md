---
title: "24.6: Vapor Pressures of Volatile Binary Solutions"
book: "Physical Chemistry (LibreTexts)"
chapter: "24: Solutions I - Volatile Solutes"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/24%3A_Solutions_I_-_Volatile_Solutes/24.06%3A_Vapor_Pressures_of_Volatile_Binary_Solutions"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The behaviors of ideal solutions of volatile compounds follow Raoult’s Law. Henry’s Law can be used to describe the deviations from ideality. Henry's law states:

PB = kH xB

[Note: corrected; the source prints "PB = kH PB^o" where this reads "PB = kH xB". Henry's law is linear in the mole fraction of B, as the Example below uses it (10^5 Pa = 5.98 × 10^−4 kH).]

For which the Henry’s Law constant (kH) is determined for the specific compound. Henry’s Law is often used to describe the solubilities of gases in liquids. The relationship to Raoult’s Law is summarized in Figure 24.6.1.

Figure 24.6.1: The relationship between Raoult's Law and Henry's Law for a binary mixture.
Graph illustrating Henry's Law and Raoult's Law, plotting pressure against mole fraction (x₃) with labeled curves.

Henry’s Law is depicted by the upper straight line and Raoult’s Law by the lower.

### Example 24.6.1: Solubility of Carbon Dioxide in Water

The solubility of CO2(g) in water at 25 ^oC is 3.32 x 10^-2 M with a partial pressure of CO2 over the solution of 1 bar. Assuming the density of a saturated solution to be 1 kg/L, calculate the Henry’s Law constant for CO2.

**Solution**

In one L of solution, there is 1000 g of water (assuming the mass of CO2 dissolved is negligible.)

(1000 g)((1 mol)/(18.02 g)) = 55.5 mol H2O

[Note: corrected; the source prints "= 55 mol H2O" where this reads "= 55.5 mol H2O". 1000/18.02 = 55.5, the value used below.]

The solubility of CO2 can be used to find the number of moles of CO2 dissolved in 1 L of solution also:

(3.32 × 10^−2 mol)/L·1 L = 3.32 × 10^−2 mol CO2

and so the mol fraction of CO2 is

χb = (3.32 × 10^−2 mol)/(55.5 mol) = 5.98 × 10^−4

And so

10^5 Pa = 5.98 × 10^−4 kH

or

kH = 1.67 × 10^8 Pa

[Note: corrected; the source prints "kH = 1.67 × 10^9 Pa" where this reads "kH = 1.67 × 10^8 Pa". 10^5 Pa/(5.98 × 10^−4) = 1.67 × 10^8 Pa.]

## Azeotropes

An azeotrope is defined as the common composition of vapor and liquid when they have the same composition.

Figure 24.6.2: Phase diagrams for (left) a maximum boiling point azeotrope and (right) a minimum boiling point azeotrope.
Phase diagram showing temperature (T) against composition (x) with labels for vapor and liquid phases.
Phase diagram showing temperature (T) vs. composition (x) with regions for vapor and liquid phases.

[Note: corrected; the source prints "(right) Ta maximum boiling point azeotrope" where this reads "(right) a minimum boiling point azeotrope". The right-hand diagram has its boiling-point minimum at the azeotrope, as the text below says the figure shows both kinds.]

Azeotropes can be either maximum boiling or minimum boiling, as show in Figure 24.6.2; left. Regardless, distillation cannot purify past the azeotrope point, since the vapor and the liquid phases have the same composition. If a system forms a minimum boiling azeotrope and has a range of compositions and temperatures at which two liquid phases exist, the phase diagram might look like Figure 24.6.3:

[Note: corrected; the source prints "the phase diagram might look like Figure 24.6.2; right:" where this reads "the phase diagram might look like Figure 24.6.3:". Figure 24.6.3, which follows, is the diagram with a two-liquid region below a minimum-boiling azeotrope.]

Figure 24.6.3: Phase diagram for a binary solution with the boiling point of a minimum boiling azeotrope that is higher that when components are miscible (single phase).
Phase diagram showing temperature vs. composition with regions for one-phase liquid, two-phase liquid, and vapor.

Another possibility that is common is for two substances to form a two-phase liquid, form a minimum boiling azeotrope, but for the azeotrope to boil at a temperature below which the two liquid phases become miscible. In this case, the phase diagram will look like the diagram in Example 24.6.2.

[Note: corrected; the source prints "the phase diagram will look like Figure 24.6.3." where this reads "the phase diagram will look like the diagram in Example 24.6.2.". The diagram in which the azeotrope boils below the temperature at which the liquids become miscible is the one in the Example that follows; Figure 24.6.3 is the case above.]

### Example 24.6.2

[Note: corrected; the source prints "### Example 24.6.1" where this reads "### Example 24.6.2". The second Example of the section; the first is 24.6.1.]

In the diagram, make up of a system in each region is summarized below the diagram. The point e indicates the azeotrope composition and boiling temperature.

[Image: Graph depicting a phase diagram with temperature on the vertical axis and composition on the horizontal axis, showing liquid phases.]

I. Single phase liquid (mostly compound A)
II. Single phase liquid (mostly compound B)
III. Single phase liquid (mostly A) and vapor
IV. Single phase liquid (mostly B) and vapor
V. Vapor (miscible at all mole fractions since it is a gas)

**Solution**

Within each two-phase region (III, IV, and the two-phase liquid region, the lever rule will apply to describe the composition of each phase present. So, for example, the system with the composition and temperature represented by point b (a single-phase liquid which is mostly compound A, designated by the composition at point a, and vapor with a composition designated by that at point c), will be described by the lever rule using the lengths of tie lines l_A and l_B.

### Gibbs-Duhem and Henry's law

What happens when Raoult does not hold over the whole range? Recall that in a gas:

μj = μj^o + RT ln((Pj)/(P^o))

or

μj = μj^o + RT ln Pj

after dropping P^o = 1 bar out of the notation. Note that numerically this does not matter, since Pj is now assumed to be dimensionless.

Let's consider dμ1 at constant temperature:

dμ1 = RT((∂ln P1)/(∂x1))dx1

likewise:

dμ2 = RT((∂ln P2)/(∂x2))dx2

If we substitute into the Gibbs-Duhem expression we get:

x1((∂ln P1)/(∂x1))dx1 + x2((∂ln P2)/(∂x2))dx2 = 0

Because dx1 = −dx2:

x1((∂ln P1)/(∂x1)) = x2((∂ln P2)/(∂x2))

(This is an alternative way of writing Gibbs-Duhem).

If in the limit for x1 → 1 Raoult Law holds then

P1 → x1P1^*

Thus:

(∂ln P1)/(∂x1) = 1/(x1)

and

(x1)/(x1) = x2 (∂ln P2)/(∂x2)

1 = x2 (∂ln P2)/(∂x2)

1/(x2) = (∂ln P2)/(∂x2)

We can integrate Equation (EqA12) to form a logarithmic impression, but it will have an integration constant:

ln P2 = ln x2 + constant

This constant of integration can be folded into the logarithm as a multiplicative constant, K

ln P2 = ln(Kx2)

So for x1 → 1 (i.e., x2 → 0), we get that

P2 = Kx2

where K is some constant, but not necessarily P^*. What this shows is that when one component follows Raoult the other must follow Henry and vice versa. (Note that the ideal case is a subset of this case, in that the value of K then becomes P^* and the linearity must hold over the whole range.)

## Margules Functions

Of course a big drawback of the Henry law is that it only describes what happens at the two extremes of the phase diagram and not in the middle. In cases of moderate non-ideality, it is possible to describe the whole range (at least in good approximation) using a Margules function:

P1 = (x1P1^*)f_Mar

The function f_Mar has the shape:

f_Mar = exp[αx2^2 + βx2^3 + δx2^4 + ....]

[Note: corrected; the source prints "δx2^3" where this reads "δx2^4". Each term is the next power of x2.]

Notice that the Margules function involves the mole fraction of the opposite component. It is an exponential with a series expansion. with the constant and linear term missing. As you can see the function has a number of parameters α, β, δ etc. that need to be determined by experiment. In general, the more the system diverges from ideality, the more parameters you need. Using Gibbs-Duhem is is possible to translate the expression for P1 into the corresponding one for P2.
