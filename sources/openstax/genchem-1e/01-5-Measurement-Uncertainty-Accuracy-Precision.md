---
title: "1.4: Measurement Uncertainty, Accuracy, and Precision"
book: "Chemistry 1e (OpenStax)"
chapter: "1. Essential Ideas of Chemistry"
source_url: "https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_1e_(OpenSTAX)/01%3A_Essential_Ideas_of_Chemistry/1.05%3A_Measurement_Uncertainty_Accuracy_and_Precision"
author: "OpenStax"
license: "CC BY 4.0"
---

Counting is the only type of measurement that is free from uncertainty, provided the number of objects being counted does not change while the counting process is underway. The result of such a counting measurement is an example of an exact number. If we count eggs in a carton, we know exactly how many eggs the carton contains. The numbers of defined quantities are also exact. By definition, 1 foot is exactly 12 inches, 1 inch is exactly 2.54 centimeters, and 1 gram is exactly 0.001 kilogram. Quantities derived from measurements other than counting, however, are uncertain to varying extents due to practical limitations of the measurement process used.

## 1.5.1: Significant Figures in Measurement

The numbers of measured quantities, unlike defined or directly counted quantities, are not exact. To measure the volume of liquid in a graduated cylinder, you should make a reading at the bottom of the meniscus, the lowest point on the curved surface of the liquid.

Figure 1.5.1: To measure the volume of liquid in this graduated cylinder, you must mentally subdivide the distance between the 21 and 22 mL marks into tenths of a milliliter, and then make a reading (estimate) at the bottom of the meniscus.
A 25 millilter graduated cylinder filled with liquid. The markings on the cylinders is zoomed in to show the bottom of the meniscus between 21 and 22 milliliters.

Refer to the illustration in Figure 1.5.1. The bottom of the meniscus in this case clearly lies between the 21 and 22 markings, meaning the liquid volume is certainly greater than 21 mL but less than 22 mL. The meniscus appears to be a bit closer to the 22-mL mark than to the 21-mL mark, and so a reasonable estimate of the liquid’s volume would be 21.6 mL. In the number 21.6, then, the digits 2 and 1 are certain, but the 6 is an estimate. Some people might estimate the meniscus position to be equally distant from each of the markings and estimate the tenth-place digit as 5, while others may think it to be even closer to the 22-mL mark and estimate this digit to be 7. Note that it would be pointless to attempt to estimate a digit for the hundredths place, given that the tenths-place digit is uncertain. In general, numerical scales such as the one on this graduated cylinder will permit measurements to one-tenth of the smallest scale division. The scale in this case has 1-mL divisions, and so volumes may be measured to the nearest 0.1 mL.

This concept holds true for all measurements, even if you do not actively make an estimate. If you place a quarter on a standard electronic balance, you may obtain a reading of 6.72 g. The digits 6 and 7 are certain, and the 2 indicates that the mass of the quarter is likely between 6.71 and 6.73 grams. The quarter weighs about 6.72 grams, with a nominal uncertainty in the measurement of ± 0.01 gram. If we weigh the quarter on a more sensitive balance, we may find that its mass is 6.723 g. This means its mass lies between 6.722 and 6.724 grams, an uncertainty of 0.001 gram. Every measurement has some uncertainty, which depends on the device used (and the user’s ability). All of the digits in a measurement, including the uncertain last digit, are called significant figures or significant digits. Note that zero may be a measured value; for example, if you stand on a scale that shows weight to the nearest pound and it shows “120,” then the 1 (hundreds), 2 (tens) and 0 (ones) are all significant (measured) values.

Whenever you make a measurement properly, all the digits in the result are significant. But what if you were analyzing a reported value and trying to determine what is significant and what is not? Well, for starters, all nonzero digits are significant, and it is only zeros that require some thought. We will use the terms “leading,” “trailing,” and “captive” for the zeros and will consider how to deal with them.

The left diagram uses the example of 3090. The zero in the hundreds place is labeled “captive” and the zero in the ones place is labeled trailing. The right diagram uses the example 0.008020. The three zeros in the ones, tenths, and hundredths places are labeled “leading.” The zero in the ten-thousandths place is labeled “captive” and the zero in the millionths place is labeled “trailing.”
Starting with the first nonzero digit on the left, count this digit and all remaining digits to the right. This is the number of significant figures in the measurement unless the last digit is a trailing zero lying to the left of the decimal point.

The left diagram uses the example of 1267 meters. The number 1 is the first nonzero figure on the left. 1267 has 4 significant figures in total. The right diagram uses the example of 55.0 grams. The number 5 in the tens place is the first nonzero figure on the left. 55.0 has 3 significant figures. Note that the 0 is to the right of the decimal point and therefore is a significant figure.
Captive zeros result from measurement and are therefore always significant. Leading zeros, however, are never significant—they merely tell us where the decimal point is located.

The left diagram uses the example of 70.607 milliliters. The number 7 is the first nonzero figure on the left. 70.607 has 5 significant figures in total, as all figures are measured including the 2 zeros. The right diagram uses the example of 0.00832407 M L. The number 8 is the first nonzero figure on the left. 0.00832407 has 6 significant figures.

The leading zeros in this example are not significant. We could use exponential notation (as described in Appendix B) and express the number as 8.32407
10−3; then the number 8.32407 contains all of the significant figures, and 10−3 locates the decimal point.

The number of significant figures is uncertain in a number that ends with a zero to the left of the decimal point location. The zeros in the measurement 1,300 grams could be significant or they could simply indicate where the decimal point is located. The ambiguity can be resolved with the use of exponential notation: 1.3 x 103 (two significant figures), 1.30 x 103 (three significant figures, if the tens place was measured), or 1.300 x 103 (four significant figures, if the ones place was also measured). In cases where only the decimal-formatted number is available, it is prudent to assume that all trailing zeros are not significant.

This figure uses the example of 1300 grams. The one and the 3 are significant figures as they are clearly the result of measurement. The 2 zeros could be significant if they were measured or they could be placeholders.When determining significant figures, be sure to pay attention to reported values and think about the measurement and significant figures in terms of what is reasonable or likely—that is, whether the value makes sense. For example, the official January 2014 census reported the resident population of the US as 317,297,725. Do you think the US population was correctly determined to the reported nine significant figures, that is, to the exact number of people? People are constantly being born, dying, or moving into or out of the country, and assumptions are made to account for the large number of people who are not actually counted. Because of these uncertainties, it might be more reasonable to expect that we know the population to within perhaps a million or so, in which case the population should be reported as 317 million.

A second important principle of uncertainty is that results calculated from a measurement are at least as uncertain as the measurement itself. We must take the uncertainty in our measurements into account to avoid misrepresenting the uncertainty in calculated results. One way to do this is to report the result of a calculation with the correct number of significant figures, which is determined by the following three rules for rounding numbers:

1. When we add or subtract numbers, we should round the result to the same number of decimal places as the number with the least number of decimal places (the least precise value in terms of addition and subtraction).
2. When we multiply or divide numbers, we should round the result to the same number of digits as the number with the least number of significant figures (the least precise value in terms of multiplication and division).
3. If the digit to be dropped (the one immediately to the right of the digit to be retained) is less than 5, we “round down” and leave the retained digit unchanged; if it is more than 5, we “round up” and increase the retained digit by 1; if the dropped digit _is_ 5, we round up or down, whichever yields an even value for the retained digit. (The last part of this rule may strike you as a bit odd, but it’s based on reliable statistics and is aimed at avoiding any bias when dropping the digit “5,” since it is equally close to both possible values of the retained digit.)

The following examples illustrate the application of this rule in rounding a few different numbers to three significant figures:

- 0.028675 rounds “up” to 0.0287 (the dropped digit, 7, is greater than 5)
- 18.3384 rounds “down” to 18.3 (the dropped digit, 3, is less than 5)
- 6.8752 rounds “up” to 6.88 (the dropped digit is 5, and the retained digit is even)
- 92.85 rounds “down” to 92.8 (the dropped digit is 5, and the retained digit is even)

Let’s work through these rules with a few examples.

### Example 1.5.1: Rounding Numbers

Round the following to the indicated number of significant figures:

- a. 31.57 (to two significant figures)
- b. 8.1649 (to three significant figures)
- c. 0.051065 (to four significant figures)
- d. 0.90275 (to four significant figures)

**Solution**

- a. 31.57 rounds “up” to 32 (the dropped digit is 5, and the retained digit is even)
- b. 8.1649 rounds “down” to 8.16 (the dropped digit, 4, is less than 5)
- c. 0.051065 rounds “down” to 0.05106 (the dropped digit is 5, and the retained digit is even)
- d. 0.90275 rounds “up” to 0.9028 (the dropped digit is 5, and the retained digit is even)

### Exercise 1.5.1

Round the following to the indicated number of significant figures:

- a. 0.424 (to two significant figures)
- b. 0.0038661 (to three significant figures)
- c. 421.25 (to four significant figures)
- d. 28,683.5 (to five significant figures)

**Answer a**

0.42

**Answer b**

0.00387

**Answer c**

421.2

**Answer d**

28,684

### Example 1.5.2: Addition and Subtraction with Significant Figures

Rule: When we add or subtract numbers, we should round the result to the same number of decimal places as the number with the least number of decimal places (i.e., the least precise value in terms of addition and subtraction).

- a. Add 1.0023 g and 4.383 g.
- b. Subtract 421.23 g from 486 g.

**Solution**

(a)

```
  1.0023 g
+ 4.383  g
----------
  5.3853 g
```

Answer is 5.385 g (round to the thousandths place; three decimal places)

(b)

```
  486    g
- 421.23 g
----------
   64.77 g
```

Answer is 65 g (round to the ones place; no decimal places)

Two annotated calculations. (a) In 1.0023 + 4.383, the final 3 of 1.0023 is in the ten thousandths place and 4.383 ends in the thousandths place, which is the least precise; the sum 5.3853 is therefore rounded to the thousandths place, dropping the final 3 to give 5.385. (b) In 486 − 421.23, the value 486 is precise only to the ones place; the difference 64.77 is therefore rounded to the ones place, dropping the .77 to give the answer 65 g.

### Exercise 1.5.2

- a. Add 2.334 mL and 0.31 mL.
- b. Subtract 55.8752 m from 56.533 m.

**Answer a**

2.64 mL

**Answer b**

0.658 m

### Example 1.5.3: Multiplication and Division with Significant Figures

Rule: When we multiply or divide numbers, we should round the result to the same number of digits as the number with the least number of significant figures (the least precise value in terms of multiplication and division).

- a. Multiply 0.6238 cm by 6.6 cm.
- b. Divide 421.23 g by 486 mL.

**Solution**

(a)

0.6238 cm × 6.6 cm = 4.11708 cm^2 → result is 4.1 cm^2 (round to two significant figures)

four significant figures × two significant figures → two significant figures answer

(b)

421.23 g / 486 mL = 0.86728... g/mL → result is 0.867 g/mL (round to three significant figures)

five significant figures / three significant figures → three significant figures answer

### Exercise 1.5.3

- a. Multiply 2.334 cm and 0.320 cm.
- b. Divide 55.8752 m by 56.53 s.

**Answer a**

0.747 cm^2

**Answer b**

0.9884 m/s

In the midst of all these technicalities, it is important to keep in mind the reason why we use significant figures and rounding rules—to correctly represent the certainty of the values we report and to ensure that a calculated result is not represented as being more certain than the least certain value used in the calculation.

### Example 1.5.4: Calculation with Significant Figures

One common bathtub is 13.44 dm long, 5.920 dm wide, and 2.54 dm deep. Assume that the tub is rectangular and calculate its approximate volume in liters.

**Solution**

```
V = l × w × d
  = 13.44 dm × 5.920 dm × 2.54 dm
  = 202.09459...dm^3 (value from calculator)
  = 202 dm^3, or 202 L (answer rounded to three significant figures)
```

### Exercise 1.5.4: Determination of Density Using Water Displacement

What is the density of a liquid with a mass of 31.1415 g and a volume of 30.13 cm^3?

**Answer**

1.034 g/mL

### Example 1.5.5

A piece of rebar is weighed and then submerged in a graduated cylinder partially filled with water, with results as shown.

A graduated cylinder filled with liquid is shown. One shows the level before the rebar is added and the other shows the level with the rebar submerged in the liquid. Rebar mass is 69.658 grams, final volume is 22.4 milliliters, and initial volume is 13.5 milliliters.

- a. Use these values to determine the density of this piece of rebar.
- b. Rebar is mostly iron. Does your result in (a) support this statement? How?

**Solution**

The volume of the piece of rebar is equal to the volume of the water displaced:

volume = 22.4 mL − 13.5 mL = 8.9 mL = 8.9 cm^3

(rounded to the nearest 0.1 mL, per the rule for addition and subtraction)

The density is the mass-to-volume ratio:

density = mass / volume = 69.658 g / 8.9 cm^3 = 7.8 g/cm^3

(rounded to two significant figures, per the rule for multiplication and division)

The density of iron is 7.9 g/cm^3, very close to that of rebar, which lends some support to the fact that rebar is mostly iron.

### Exercise 1.5.5

An irregularly shaped piece of a shiny yellowish material is weighed and then submerged in a graduated cylinder, with results as shown.

A graduated cylinder filled with liquid is shown. One shows the level before the material is added and the other shows the level with the material submerged in the liquid. Mass is 51.842 grams, final volume is 19.8 milliliters, and initial volume is 17.1 milliliters.

- a. Use these values to determine the density of this material.
- b. Do you have any reasonable guesses as to the identity of this material? Explain your reasoning.

**Answer a**

19 g/cm^3

**Answer b**

It is likely gold; it has the right appearance for gold and very close to the density given for gold.

## 1.5.3: Accuracy and Precision

Scientists typically make repeated measurements of a quantity to ensure the quality of their findings and to know both the precision and the accuracy of their results. Measurements are said to be precise if they yield very similar results when repeated in the same manner. A measurement is considered accurate if it yields a result that is very close to the true or accepted value. Precise values agree with each other; accurate values agree with a true value. These characterizations can be extended to other contexts, such as the results of an archery competition (Figure 1.5.2).

Figure 1.5.2: (a) These arrows are close to both the bull’s eye and one another, so they are both accurate and precise. (b) These arrows are close to one another but not on target, so they are precise but not accurate. (c) These arrows are neither on target nor close to one another, so they are neither accurate nor precise.

Suppose a quality control chemist at a pharmaceutical company is tasked with checking the accuracy and precision of three different machines that are meant to dispense 10 ounces (296 mL) of cough syrup into storage bottles. She proceeds to use each machine to fill five bottles and then carefully determines the actual volume dispensed, obtaining the results tabulated in Table 1.5.2.

Table 1.5.2: Volume (mL) of Cough Medicine Delivered by 10-oz (296 mL) Dispensers
| Dispenser #1 | Dispenser #2 | Dispenser #3 |
| --- | --- | --- |
| 283.3 | 298.3 | 296.1 |
| 284.1 | 294.2 | 295.9 |
| 283.9 | 296.0 | 296.1 |
| 284.0 | 297.8 | 296.0 |
| 284.1 | 293.9 | 296.1 |

Considering these results, she will report that dispenser #1 is precise (values all close to one another, within a few tenths of a milliliter) but not accurate (none of the values are close to the target value of 296 mL, each being more than 10 mL too low). Results for dispenser #2 represent improved accuracy (each volume is less than 3 mL away from 296 mL) but worse precision (volumes vary by more than 4 mL). Finally, she can report that dispenser #3 is working well, dispensing cough syrup both accurately (all volumes within 0.1 mL of the target volume) and precisely (volumes differing from each other by no more than 0.2 mL).

## Summary

Quantities can be exact or measured. Measured quantities have an associated uncertainty that is represented by the number of significant figures in the measurement. The uncertainty of a calculated value depends on the uncertainties in the values used in the calculation and is reflected in how the value is rounded. Measured values can be accurate (close to the true value) and/or precise (showing little variation when measured repeatedly).
