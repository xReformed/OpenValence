---
title: "2.4: Significant Figures"
book: "Beginning Chemistry (Ball)"
chapter: "2: Measurements"
source_url: "https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Beginning_Chemistry_(Ball)/02%3A_Measurements/2.04%3A_Significant_Figures"
author: "Anonymous"
license: "CC BY-NC-SA 3.0"
---

## 2.4: Significant Figures

### Learning Objective

- Apply the concept of significant figures to limit a measurement to the proper number of digits.
- Recognize the number of significant figures in a given quantity.
- Limit mathematical results to the proper number of significant figures.

If you use a calculator to evaluate the expression 337/217, you will get the following:

337 ÷ 217 = 1.5529953917

and so on for many more digits. Although this answer is correct, it is somewhat presumptuous. You start with two values that each have three digits, and the answer has _twelve_ digits? That does not make much sense from a strict numerical point of view.

Consider using a ruler to measure the width of an object, as shown in Figure 2.4.1. The object is definitely more than 1 cm long, so we know that the first digit in our measurement is 1. We see by counting the tick marks on the ruler that the object is at least three ticks after the 1. If each tick represents 0.1 cm, then we know the object is at least 1.3 cm wide. But our ruler does not have any more ticks between the 0.3 and the 0.4 marks, so we can't know exactly how much the next decimal place is. But with a practiced eye we can estimate it. Let us estimate it as about six-tenths of the way between the third and fourth tick marks, which estimates our hundredths place as 6, so we identify a measurement of 1.36 cm for the width of the object.

Figure 2.4.1: Expressing Width. What is the proper way to express the width of this object?
A gray rectangular object is shown above a unitless ruler.

Does it make any sense to try to report a thousandths place for the measurement? No, it doesn't; we are not exactly sure of the hundredths place (after all, it was an estimate only), so it would be fruitless to estimate a thousandths place. Our best measurement, then, stops at the hundredths place, and we report 1.36 cm as proper measurement.

This concept of reporting the proper number of digits in a measurement or a calculation is called significant figures. Significant figures (sometimes called significant digits) represent the limits of what values of a measurement or a calculation we are sure of. The convention for a measurement is that the quantity reported should be all known values and the first estimated value. The conventions for calculations are discussed as follows.

### Example 2.4.1

Use each diagram to report a measurement to the proper number of significant figures.

[Image: Pressure gauge in units pounds per square inch.]

[Image: A measuring ruler with a blank light blue block underneath.]

**Solution**

1. The arrow is between 4.0 and 5.0, so the measurement is at least 4.0. The arrow is between the third and fourth small tick marks, so it's at least 0.3. We will have to estimate the last place. It looks like about one-third of the way across the space, so let us estimate the hundredths place as 3. Combining the digits, we have a measurement of 4.33 psi (psi stands for "pounds per square inch" and is a unit of pressure, like air in a tire). We say that the measurement is reported to three significant figures.
2. The rectangle is at least 1.0 cm wide but certainly not 2.0 cm wide, so the first significant digit is 1. The rectangle's width is past the second tick mark but not the third; if each tick mark represents 0.1, then the rectangle is at least 0.2 in the next significant digit. We have to estimate the next place because there are no markings to guide us. It appears to be about halfway between 0.2 and 0.3, so we will estimate the next place to be a 5. Thus, the measured width of the rectangle is 1.25 cm. Again, the measurement is reported to three significant figures.

### Exercise 2.4.1

What would be the reported width of this rectangle?

[Image: A measuring ruler with a blank light blue block underneath.]

**Answer**

0.63 cm

In many cases, you will be given a measurement. How can you tell by looking what digits are significant? For example, the reported population of the United States is 306,000,000. Does that mean that it is _exactly_ three hundred six million, or is some estimation occurring?

The following conventions dictate which numbers in a reported measurement are significant and which are not significant:

1. Any nonzero digit is significant.
2. Any zeros between nonzero digits (i.e., embedded zeros) are significant.
3. Zeros at the end of a number without a decimal point (i.e., trailing zeros) are not significant; they serve only to put the significant digits in the correct positions. However, zeros at the end of any number with a decimal point are significant.
4. Zeros at the beginning of a decimal number (i.e., leading zeros) are not significant; again, they serve only to put the significant digits in the correct positions.

So, by these rules, the population figure of the United States has only three significant figures: the 3, the 6, and the zero between them. The remaining six zeros simply put the 306 in the millions position. (See Figure 2.4.2 for another example.)

Figure 2.4.2: Significant Figures. How many of the numbers in this display are actually significant? (Public Domain.)
The beginning digits of pi are shown: 3.14159.

### Example 2.4.2

Give the number of significant figures in each measurement.

- a. 36.7 m
- b. 0.006606 s
- c. 2,002 kg
- d. 306,490,000 people

**Solution**

- a. By rule 1, all nonzero digits are significant, so this measurement has three significant figures.
- b. By rule 4, the first three zeros are not significant, but by rule 2 the zero between the sixes is; therefore, this number has four significant figures.
- c. By rule 2, the two zeros between the twos are significant, so this measurement has four significant figures.
- d. The four trailing zeros in the number are not significant, but the other five numbers are, so this number has five significant figures.

### Exercise 2.4.2

Give the number of significant figures in each measurement.

- a. 0.000601 m
- b. 65.080 kg

**Answer a**

three significant figures

**Answer b**

five significant figures

How are significant figures handled in calculations? It depends on what type of calculation is being performed. If the calculation is an addition or a subtraction, the rule is as follows: limit the reported answer to the rightmost column that all numbers have significant figures in common. For example, if you were to add 1.2 and 4.21, we note that the first number stops its significant figures in the tenths column, while the second number stops its significant figures in the hundredths column. We therefore limit our answer to the tenths column.

[Image: 1.2 and 4.41 are added to get 5.61. The final answer is limited to 5.6.]

We drop the last digit—the 1—because it is not significant to the final answer.

The dropping of positions in sums and differences brings up the topic of rounding. Although there are several conventions, in this text we will adopt the following rule: the final answer should be rounded up if the first dropped digit is 5 or greater, and rounded down if the first dropped digit is less than 5.

[Image: 77.2 and 10.46 are added to get 87.66. The final answer is limited and rounded up to 87.7.]

### Example 2.4.3

Express the final answer to the proper number of significant figures.

- a. 101.2 + 18.702 = ?
- b. 202.88 − 1.013 = ?

**Solution**

- a. If we use a calculator to add these two numbers, we would get 119.902. However, most calculators do not understand significant figures, and we need to limit the final answer to the tenths place. Thus, we drop the 02 and report a final answer of 119.9 (rounding down).
- b. A calculator would answer 201.867. However, we have to limit our final answer to the hundredths place. Because the first number being dropped is 7, which is greater than 5, we round up and report a final answer of 201.87.

### Exercise 2.4.3

Express the answer for

3.445 + 90.83 − 72.4

to the proper number of significant figures.

**Answer**

21.9

If the operations being performed are multiplication or division, the rule is as follows: limit the answer to the number of significant figures that the data value with the _least_ number of significant figures has. So if we are dividing 23 by 448, which have two and three significant figures respectively, we should limit the final reported answer to two significant figures (the lesser of two and three significant figures):

23 ÷ 448 = 0.051339286 ≈ 0.051

The same rounding rules apply in multiplication and division as they do in addition and subtraction.

### Example 2.4.4: Significant Figures

Express the final answer to the proper number of significant figures.

- a. 76.4 × 180.4 = ?
- b. 934.9 ÷ 0.00455 = ?

**Solution**

- a. The first number has three significant figures, while the second number has four significant figures. Therefore, we limit our final answer to three significant figures: 76.4 × 180.4 = 13,782.56 = 13,800.
- b. The first number has four significant figures, while the second number has three significant figures. Therefore, we limit our final answer to three significant figures: 934.9 ÷ 0.00455 = 205,472.5275… = 205,000.

### Exercise 2.4.4

Express the final answer to the proper number of significant figures.

- a. 22.4 × 8.314 = ?
- b. 1.381 ÷ 6.02 = ?

**Answer a**

186

**Answer b**

0.229

As you have probably realized by now, the biggest issue in determining the number of significant figures in a value is the zero. Is the zero significant or not? One way to unambiguously determine whether a zero is significant or not is to write a number in scientific notation. Scientific notation will include zeros in the coefficient of the number _only if they are significant_. Thus, the number 8.666 × 10^6 has four significant figures. However, the number 8.6660 × 10^6 has five significant figures. That last zero is significant; if it were not, it would not be written in the coefficient. So, when in doubt about expressing the number of significant figures in a quantity, use scientific notation and include the number of zeros that are truly significant.

## Summary

- Significant figures in a quantity indicate the number of known values plus one place that is estimated.
- There are rules for which numbers in a quantity are significant and which are not significant.
- In calculations involving addition and subtraction, limit significant figures based on the rightmost place that all values have in common.
- In calculations involving multiplication and division, limit significant figures to the least number of significant figures in all the data values.
