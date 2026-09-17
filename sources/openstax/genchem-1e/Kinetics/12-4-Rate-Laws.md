---
title: "12.4: Rate Laws"
book: "Chemistry 1e (OpenStax)"
chapter: "12: Kinetics"
source_url: "https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/12%3A_Kinetics/12.04%3A_Rate_Laws"
author: "OpenStax"
license: "CC BY 4.0"
---

As described in the previous module, the rate of a reaction is affected by the concentrations of reactants. Rate laws or rate equations are mathematical expressions that describe the relationship between the rate of a chemical reaction and the concentration of its reactants. In general, a rate law (or differential rate law, as it is sometimes called) takes this form:

rate = k[A]^m[B]^n[C]^p …

in which [A], [B], and [C] represent the molar concentrations of reactants, and k is the rate constant, which is specific for a particular reaction at a particular temperature. The exponents m, n, and p are usually positive integers (although it is possible for them to be fractions or negative numbers). The rate constant k and the exponents m, n, and p must be determined experimentally by observing how the rate of a reaction changes as the concentrations of the reactants are changed. The rate constant k is independent of the concentration of A, B, or C, but it does vary with temperature and surface area.

The exponents in a rate law describe the effects of the reactant concentrations on the reaction rate and define the reaction order. Consider a reaction for which the rate law is:

rate = k[A]^m[B]^n

If the exponent m is 1, the reaction is first order with respect to A. If m is 2, the reaction is second order with respect to A. If n is 1, the reaction is first order in B. If n is 2, the reaction is second order in B. If m or n is zero, the reaction is zero order in A or B, respectively, and the rate of the reaction is not affected by the concentration of that reactant. The overall reaction order is the sum of the orders with respect to each reactant. If m = 1 and n = 1, the overall order of the reaction is second order (m + n = 1 + 1 = 2).

The rate law:

rate = k[H2O2]

describes a reaction that is first order in hydrogen peroxide and first order overall. The rate law:

rate = k[C4H6]^2

describes a reaction that is second order in C4H6 and second order overall. The rate law:

rate = k[H+][OH−]

describes a reaction that is first order in H+, first order in OH−, and second order overall.

### Example 12.4.1: Writing Rate Laws from Reaction Orders

An experiment shows that the reaction of nitrogen dioxide with carbon monoxide:

NO2(g) + CO(g) ⟶ NO(g) + CO2(g)

is second order in NO2 and zero order in CO at 100 °C. What is the rate law for the reaction?

**Solution**

The reaction will have the form:

rate = k[NO2]^m[CO]^n

The reaction is second order in NO2; thus m = 2. The reaction is zero order in CO; thus n = 0. The rate law is:

rate = k[NO2]^2[CO]^0 = k[NO2]^2

Remember that a number raised to the zero power is equal to 1, thus [CO]^0 = 1, which is why we can simply drop the concentration of CO from the rate equation: the rate of reaction is solely dependent on the concentration of NO2. When we consider rate mechanisms later in this chapter, we will explain how a reactant's concentration can have no effect on a reaction despite being involved in the reaction.

### Exercise 12.4.1A

The rate law for the reaction:

H2(g) + 2NO(g) ⟶ N2O(g) + H2O(g)

has been experimentally determined to be rate = k[NO]^2[H2]. What are the orders with respect to each reactant, and what is the overall order of the reaction?

**Answer**

- order in NO = 2;
- order in H2 = 1;
- overall order = 3

### Exercise 12.4.1B

In a transesterification reaction, a triglyceride reacts with an alcohol to form an ester and glycerol. Many students learn about the reaction between methanol (CH3OH) and ethyl acetate (CH3CH2OCOCH3) as a sample reaction before studying the chemical reactions that produce biodiesel:

CH3OH + CH3CH2OCOCH3 ⟶ CH3OCOCH3 + CH3CH2OH

The rate law for the reaction between methanol and ethyl acetate is, under certain conditions, experimentally determined to be:

rate = k[CH3OH]

What is the order of reaction with respect to methanol and ethyl acetate, and what is the overall order of reaction?

**Answer**

- order in CH3OH = 1;
- order in CH3CH2OCOCH3 = 0;
- overall order = 1

It is sometimes helpful to use a more explicit algebraic method, often referred to as the method of initial rates, to determine the orders in rate laws. To use this method, we select two sets of rate data that differ in the concentration of only one reactant and set up a ratio of the two rates and the two rate laws. After canceling terms that are equal, we are left with an equation that contains only one unknown, the coefficient of the concentration that varies. We then solve this equation for the coefficient.

### Example 12.4.2: Determining a Rate Law from Initial Rates

Ozone in the upper atmosphere is depleted when it reacts with nitrogen oxides. The rates of the reactions of nitrogen oxides with ozone are important factors in deciding how significant these reactions are in the formation of the ozone hole over Antarctica (Figure 12.4.1). One such reaction is the combination of nitric oxide, NO, with ozone, O3:

Figure 12.4.1: Over the past several years, the atmospheric ozone concentration over Antarctica has decreased during the winter. This map shows the decreased concentration as a purple area. (credit: modification of work by NASA)
A view of Earth's southern hemisphere is shown. A nearly circular region of approximately half the diameter of the image is shown in shades of purple, with Antarctica appearing in a slightly lighter color than the surrounding ocean areas. Immediately outside this region is a narrow bright blue zone followed by a bright green zone. In the top half of the figure, the purple region extends slightly outward from the circle and the blue zone extends more outward to the right of the center as compared to the lower half of the image. In the upper half of the image, the majority of the space outside the purple region is shaded green, with a few small strips of interspersed blue regions. The lower half however shows the majority of the space outside the central purple zone in yellow, orange, and red. The red zones appear in the lower central and left regions outside the purple zone. To the lower right of this image is a color scale that is labeled "Total Ozone (Dobson units)." This scale begins at 0 and increases by 100's up to 700. At the left end of the scale, the value 0 shows a very deep purple color, 100 is indigo, 200 is blue, 300 is green, 400 is a yellow-orange, 500 is red, 600 is pink, and 700 is white.

NO(g) + O3(g) ⟶ NO2(g) + O2(g)

This reaction has been studied in the laboratory, and the following rate data were determined at 25 °C.

| Trial | [NO] (mol/L) | [O3] (mol/L) | Δ[NO2]/Δt (mol L^−1 s^−1) |
| --- | --- | --- | --- |
| 1 | 1.00 × 10^−6 | 3.00 × 10^−6 | 6.60 × 10^−5 |
| 2 | 1.00 × 10^−6 | 6.00 × 10^−6 | 1.32 × 10^−4 |
| 3 | 1.00 × 10^−6 | 9.00 × 10^−6 | 1.98 × 10^−4 |
| 4 | 2.00 × 10^−6 | 9.00 × 10^−6 | 3.96 × 10^−4 |
| 5 | 3.00 × 10^−6 | 9.00 × 10^−6 | 5.94 × 10^−4 |

Determine the rate law and the rate constant for the reaction at 25 °C.

**Solution**

The rate law will have the form:

rate = k[NO]^m[O3]^n

We can determine the values of m, n, and k from the experimental data using the following three-part process:

- Determine the value of m from the data in which [NO] varies and [O3] is constant. In the last three experiments, [NO] varies while [O3] remains constant. When [NO] doubles from trial 3 to 4, the rate doubles, and when [NO] triples from trial 3 to 5, the rate also triples. Thus, the rate is also directly proportional to [NO], and m in the rate law is equal to 1.

- Determine the value of n from data in which [O3] varies and [NO] is constant. In the first three experiments, [NO] is constant and [O3] varies. The reaction rate changes in direct proportion to the change in [O3]. When [O3] doubles from trial 1 to 2, the rate doubles; when [O3] triples from trial 1 to 3, the rate also triples. Thus, the rate is directly proportional to [O3], and n is equal to 1. The rate law is thus:

  rate = k[NO]^1[O3]^1 = k[NO][O3]

- Determine the value of k from one set of concentrations and the corresponding rate.

  k = rate / ([NO][O3])
  = (6.60 × 10^−5 mol L^−1 s^−1) / ((1.00 × 10^−6 mol L^−1)(3.00 × 10^−6 mol L^−1))
  = 2.20 × 10^7 L mol^−1 s^−1

  The large value of k tells us that this is a fast reaction that could play an important role in ozone depletion if [NO] is large enough.

### Exercise 12.4.2

Acetaldehyde decomposes when heated to yield methane and carbon monoxide according to the equation:

CH3CHO(g) ⟶ CH4(g) + CO(g)

Determine the rate law and the rate constant for the reaction from the following experimental data:

| Trial | [CH3CHO] (mol/L) | −Δ[CH3CHO]/Δt (mol L^−1 s^−1) |
| --- | --- | --- |
| 1 | 1.75 × 10^−3 | 2.06 × 10^−11 |
| 2 | 3.50 × 10^−3 | 8.24 × 10^−11 |
| 3 | 7.00 × 10^−3 | 3.30 × 10^−10 |

**Answer**

rate = k[CH3CHO]^2 with k = 6.73 × 10^−6 L/mol/s

### Example 12.4.3: Determining Rate Laws from Initial Rates

Using the initial rates method and the experimental data, determine the rate law and the value of the rate constant for this reaction:

2NO(g) + Cl2(g) ⟶ 2NOCl(g)

| Trial | [NO] (mol/L) | [Cl2] (mol/L) | −Δ[NO]/(2Δt) (mol L^−1 s^−1) |
| --- | --- | --- | --- |
| 1 | 0.10 | 0.10 | 0.00300 |
| 2 | 0.10 | 0.15 | 0.00450 |
| 3 | 0.15 | 0.10 | 0.00675 |

**Solution**

The rate law for this reaction will have the form:

rate = k[NO]^m[Cl2]^n

As in Example 12.4.2, we can approach this problem in a stepwise fashion, determining the values of m and n from the experimental data and then using these values to determine the value of k. In this example, however, we will use a different approach to determine the values of m and n:

- Determine the value of m from the data in which [NO] varies and [Cl2] is constant. We can write the ratios with the subscripts x and y to indicate data from two different trials:

  rate_x / rate_y = (k[NO]_x^m[Cl2]_x^n) / (k[NO]_y^m[Cl2]_y^n)

  Using the third trial and the first trial, in which [Cl2] does not vary, gives:

  rate 3 / rate 1 = 0.00675/0.00300 = (k(0.15)^m(0.10)^n) / (k(0.10)^m(0.10)^n)

  After canceling equivalent terms in the numerator and denominator, we are left with:

  0.00675/0.00300 = (0.15)^m / (0.10)^m

  which simplifies to:

  2.25 = (1.5)^m

  We can use natural logs to determine the value of the exponent m:

  ln(2.25) = m ln(1.5)
  ln(2.25)/ln(1.5) = m
  2 = m

  We can confirm the result easily, since 1.5^2 = 2.25.

- Determine the value of n from data in which [Cl2] varies and [NO] is constant.

  rate 2 / rate 1 = 0.00450/0.00300 = (k(0.10)^m(0.15)^n) / (k(0.10)^m(0.10)^n)

  Cancelation gives:

  0.0045/0.0030 = (0.15)^n / (0.10)^n

  which simplifies to:

  1.5 = (1.5)^n

  Thus n must be 1, and the form of the rate law is:

  rate = k[NO]^m[Cl2]^n = k[NO]^2[Cl2]

- Determine the numerical value of the rate constant k with appropriate units. The units for the rate of a reaction are mol/L/s. The units for k are whatever is needed so that substituting into the rate law expression affords the appropriate units for the rate. In this example, the concentration units are mol^3/L^3. The units for k should be mol^−2 L^2/s so that the rate is in terms of mol/L/s.

  To determine the value of k once the rate law expression has been solved, simply plug in values from the first experimental trial and solve for k:

  0.00300 mol L^−1 s^−1 = k(0.10 mol L^−1)^2(0.10 mol L^−1)^1
  k = 3.0 mol^−2 L^2 s^−1

### Exercise 12.4.3

Use the provided initial rate data to derive the rate law for the reaction whose equation is:

OCl−(aq) + I−(aq) ⟶ OI−(aq) + Cl−(aq)

| Trial | [OCl−] (mol/L) | [I−] (mol/L) | Initial Rate (mol/L/s) |
| --- | --- | --- | --- |
| 1 | 0.0040 | 0.0020 | 0.00184 |
| 2 | 0.0020 | 0.0040 | 0.00092 |
| 3 | 0.0020 | 0.0020 | 0.00046 |

Determine the rate law expression and the value of the rate constant k with appropriate units for this reaction.

**Answer**

rate 2 / rate 3 = 0.00092/0.00046 = (k(0.0020)^x(0.0040)^y) / (k(0.0020)^x(0.0020)^y)

2.00 = 2.00^y

y = 1

rate 1 / rate 2 = 0.00184/0.00092 = (k(0.0040)^x(0.0020)^y) / (k(0.0020)^x(0.0040)^y)

2.00 = 2^x / 2^y
2.00 = 2^x / 2^1
4.00 = 2^x
x = 2

Substituting the concentration data from trial 1 and solving for k yields:

rate = k[OCl−]^2[I−]^1
0.00184 = k(0.0040)^2(0.0020)^1
k = 5.75 × 10^4 mol^−2 L^2 s^−1

## Reaction Order and Rate Constant Units

In some of our examples, the reaction orders in the rate law happen to be the same as the coefficients in the chemical equation for the reaction. This is merely a coincidence and very often not the case. Rate laws may exhibit fractional orders for some reactants, and negative reaction orders are sometimes observed when an increase in the concentration of one reactant causes a decrease in reaction rate. A few examples illustrating these points are provided:

NO2 + CO ⟶ NO + CO2      rate = k[NO2]^2
CH3CHO ⟶ CH4 + CO      rate = k[CH3CHO]^2
2N2O5 ⟶ 2NO2 + O2      rate = k[N2O5]
2NO2 + F2 ⟶ 2NO2F      rate = k[NO2][F2]
2NO2Cl ⟶ 2NO2 + Cl2      rate = k[NO2Cl]

It is important to note that rate laws are determined by experiment only and are not reliably predicted by reaction stoichiometry.

Reaction orders also play a role in determining the units for the rate constant k. In Example 12.4.2, a second-order reaction, we found the units for k to be L mol^−1 s^−1, whereas in Example 12.4.3, a third order reaction, we found the units for k to be mol^−2 L^2/s. More generally speaking, the units for the rate constant for a reaction of order (m + n) are mol^(1−(m+n)) L^((m+n)−1) s^−1. Table 12.4.1 summarizes the rate constant units for common reaction orders.

Table 12.4.1: Rate Constants for Common Reaction Orders

| Reaction Order | Units of k |
| --- | --- |
| (m + n) | mol^(1−(m+n)) L^((m+n)−1) s^−1 |
| zero | mol/L/s |
| first | s^−1 |
| second | L/mol/s |
| third | mol^−2 L^2 s^−1 |

Note that the units in the table can also be expressed in terms of molarity (M) instead of mol/L. Also, units of time other than the second (such as minutes, hours, days) may be used, depending on the situation.

## Summary

Rate laws provide a mathematical description of how changes in the amount of a substance affect the rate of a chemical reaction. Rate laws are determined experimentally and cannot be predicted by reaction stoichiometry. The order of reaction describes how much a change in the amount of each substance affects the overall rate, and the overall order of a reaction is the sum of the orders for each substance present in the reaction. Reaction orders are typically first order, second order, or zero order, but fractional and even negative orders are possible.
