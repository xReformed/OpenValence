---
title: "26.10: Real Gases Are Expressed in Terms of Partial Fugacities"
book: "Physical Chemistry (LibreTexts)"
chapter: "26: Chemical Equilibrium"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/26%3A_Chemical_Equilibrium/26.10%3A_Real_Gases_Are_Expressed_in_Terms_of_Partial_Fugacities"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The relationship for chemical potential

μ = μ^o + RT ln(p/(p^o))

was derived assuming ideal gas behavior. But for real gases that deviate widely from ideal behavior, the expression has only limited applicability. In order to use the simple expression on real gases, a “fudge” factor is introduced called fugacity. Using fugacity instead of pressure, the chemical potential expression becomes

μ = μ^o + RT ln(f/(f^o))

where f is the fugacity. Fugacity is related to pressure, but contains all of the deviations from ideality within it. To see how it is related to pressure, consider that a change in chemical potential for a single component system can be expressed as

dμ = Vdp − SdT

[Note: corrected; the source prints "dμ − Vdp − SdT" where this reads "dμ = Vdp − SdT". An equation: dμ = Vdp − SdT.]

and so

((∂μ)/(∂p))_T = V

Differentiating the expression for chemical potential above with respect to pressure at constant temperature results in

[Note: corrected; the source prints "with respect to pressure at constant volume" where this reads "with respect to pressure at constant temperature". The derivatives are at constant T, as their subscripts show.]

((∂μ)/(∂p))_T = {((∂)/(∂p))[μ^o + RT ln(f/(f^o))]}

which simplifies to

((∂μ)/(∂p))_T = RT[(∂ln(f))/(∂p)]_T = V

Multiplying both sides by p/RT gives

p[(∂ln(f))/(∂p)]_T = pV/RT = Z

[Note: corrected; the source prints "[(∂ln(f))/(∂p)]_T = pV/RT = Z" where this reads "p[(∂ln(f))/(∂p)]_T = pV/RT = Z". Multiplying by p/RT puts p on the left: (∂ln f/∂p)_T = Z/p.]

where Z is the compression factor as discussed previously. Now, we can use the expression above to obtain the fugacity coefficient γ, as defined by

f = γp

Taking the natural logarithm of both sides yields

ln f = ln γ + ln p

or

ln γ = ln f − ln p

Using some calculus and substitutions from above,

∫((∂ln γ)/(∂p))_T dp = ∫((∂ln f)/(∂p) − (∂ln p)/(∂p))_T dp

= ∫(Z/p − 1/p)_T dp

[Note: corrected; the source prints "= ∫(Z/(∂p) − 1/(∂p))_T dp" where this reads "= ∫(Z/p − 1/p)_T dp". (∂ln f/∂p)_T = Z/p and (∂ln p/∂p)_T = 1/p; the result below is right.]

Finally, integrating from 0 to p yields

ln γ = ∫0^p ((Z − 1)/p)_T dp

If the gas behaves ideally, γ = 1. In general, this will be the limiting value as p → 0 since all gases behave ideal as the pressure approaches 0. The advantage to using the fugacity in this manner is that it allows one to use the expression

μ = μ^o + RT ln(f/(f^o))

to calculate the chemical potential, insuring that Equation (eq3) holds even for gases that deviate from ideal behavior!
