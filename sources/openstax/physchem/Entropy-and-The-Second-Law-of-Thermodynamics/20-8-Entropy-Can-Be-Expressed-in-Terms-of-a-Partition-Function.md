---
title: "20.8: Entropy Can Be Expressed in Terms of a Partition Function"
book: "Physical Chemistry (LibreTexts)"
chapter: "20: Entropy and The Second Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20%3A_Entropy_and_The_Second_Law_of_Thermodynamics/20.08%3A_Entropy_Can_Be_Expressed_in_Terms_of_a_Partition_Function"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

We have seen that the partition function of a system gives us the key to calculate thermodynamic functions like energy or pressure as a moment of the energy distribution. We can extend this formulism to calculate the entropy of a system once its Q is known. We can start with Boltzmann's (statistical) definition of entropy:

S = k ln(W)

with

W = (A!)/(Πj aj!)

Combining these equations, we obtain:

S_ensemble = k ln((A!)/(Πj aj!))

Rearranging:

S_ensemble = k ln(A!) − kΣj ln(aj!)

Using Sterling's approximation:

S_ensemble = kA ln A − kA − kΣj aj ln aj + kΣj aj

= kA ln A − kΣj aj ln aj

Since:

Σj aj = A

The probability of finding the system in state j is:

[Note: corrected; the source prints "in state aj is:" where this reads "in state j is:". aj is the number of systems in state j.]

pj = (aj)/A

Rearranging:

aj = pj A

Plugging in:

S_ensemble = kA ln A − kΣj pj A ln(pj A)

Rearranging:

S_ensemble = kA ln A − kΣj pj A ln pj − kΣj pj A ln A

If A is constant, then:

kΣj pj A ln A = kA ln AΣj pj

Since:

Σj pj = 1

We get:

S_ensemble = kA ln A − kΣj pj A ln pj − kA ln A

The first and last term cancel out:

S_ensemble = −kΣj pj A ln pj

We can divide by A to get the entropy of the system:

S_system = −kΣj pj ln pj

If all the pj are zero except for the for one, then the system is perfectly ordered and the entropy of the system is zero. The probability of being in state j is

pj = (e^(−βEj))/Q

Plugging Equation (eq15) into Equation (eq10) results in

S = −kΣj((e^(−βEj))/Q) ln((e^(−βEj))/Q)

= −kΣj((e^(−βEj))/Q)(−βEj − ln Q)

= βkΣj(Ej e^(−βEj))/Q + ((k ln Q)/Q)Σj e^(−βEj)

[Note: corrected; the source prints "= −βkΣj(Ej e^(−βEj))/Q" where this reads "= βkΣj(Ej e^(−βEj))/Q". −k ln pj contains −k(−βEj) = +βkEj; only this sign gives S = U/T + k ln Q below.]

Making use of:

βk = 1/T

And:

Σ(e^(−βEj))/Q = Σpj = 1

We obtain:

S = U/T + k ln Q
