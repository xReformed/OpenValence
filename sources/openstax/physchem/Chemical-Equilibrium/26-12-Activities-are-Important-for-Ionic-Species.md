---
title: "26.12: Activities are Important for Ionic Species"
book: "Physical Chemistry (LibreTexts)"
chapter: "26: Chemical Equilibrium"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26%3A_Chemical_Equilibrium/26.12%3A_Activities_are_Important_for_Ionic_Species"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

### Weak electrolytes

We have seen that strong electrolytes are non-ideal even at tiny concentrations and that even the Debye-Hückel theory only allowed us to work at very small concentrations of strong electrolytes. The same problems are encountered with weak electrolytes but they are compounded by the equilibrium that is inherent to their solutions. Take acetic acid as in household vinegar:

HAc + H2O ⇌ Ac^− + H3O^+

We can write the equilibrium constant as:

K = (a_(Ac^−) a_(H3O^+))/(a_HAc a_H2O)

As

a_H2O = 1

K = (a_(Ac−) a_(H3O^+))/(a_HAc)

At an initial concentration of say 0.1 mol/l the activity coefficient for HAc (being a neutral species) is essentially one, but for the other species we should write:

(a_(Ac^−) a_(H3O^+)) = [Ac^−][H3O^+]γ_±^2

The value of γ_±^2 is not unity and this will affect the equilibrium. In first approximation we will ignore that fact and write:

K = ([Ac^−][H3O^+])/([HAc]) = 1.74 × 10^−5

(We can either write [mol.l] as dimensions or drop them, depending on whether we are talking about K or K_c)

At equilibrium we would get:

K = x^2/(0.1 − x) = 1.74 × 10^−5

which yields

x = 1.31 × 10^−3 mol/l

We can now use Debye-Hückel theory to estimate the means ionic activity coefficient but the concentrations are already to high for that. Instead we will use one of its extensions:

ln γ_± = −1.173|z_(+)z_(−)|(√I)/(1 + √I)

The ionic strength is ½ ([Ac^-]+[H3O^+]) =x

Although we do not know x precisely the value we have is at least a starting point. We can use it to calculate a first approximation for γ_±^2. We find a value of 0.921. We then divide the value of K by this value and recalculate x. It changes from x=1.31 10^-3 mol/l to x=1.365 10^-3 mol/l. Now we can repeat this process until the value of x does not change appreciably anymore (converges). This process is called iteration. The final value is about x=1.37 10^-3 mol/l.

As can be seen the non-ideality does change the values from the ones you would have calculated before entering this course, but the difference is not staggering, at least if no other solutes are present.

| Question: does the equilibrium change if we add 0.5 mol/l NaCl to the solution? |
| --- |

## Solubility products

For solubility products the differences can be more important. Take BaF2 in water K= 1.7 10^-6.

K = γ_±^3[Ba^2+][F^−]^2

[Note: corrected; the source prints "[F^−]2" where this reads "[F^−]^2". Two fluoride ions: [F^−] squared.]

Let's start by assuming ideality and say that γ_±^3=1 and say that :[Ba^2+]=x

[F^−] = 2x

Thus K= x (4x^2) so x= 7.52 10^-3 mol/lit

The ionic strength is

I = (1/2)(+2)^2 x + (−1)^2 x = 3x

The extended Debye-Hückel theory gives γ_± =0.736 this raises x to 0.0102. Repeating the process a few times we find x=0.011. This means an increase of about 45% due to non-ideal behavior for this sparingly soluble salt. Again the presence of other solutes may induce larger effects because they add to the ionic strength.

[Note: corrected; the source prints "an increase of about 30%" where this reads "an increase of about 45%". x rises from 7.52 × 10^−3 to about 0.011, by about 45%; 30% is the rise as a fraction of the final value.]

### Exercise

Even pure water contains OH^- and H3O^+ ions. The K for this equilibrium is 10^-14. How does the pH change if we add 0.5 m/lit of a strong electrolyte M^2+ X^2-? CH 431/Lecture 17/answer2
