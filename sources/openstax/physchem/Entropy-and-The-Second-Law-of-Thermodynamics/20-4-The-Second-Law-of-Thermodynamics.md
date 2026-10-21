---
title: "20.4: The Second Law of Thermodynamics"
book: "Physical Chemistry (LibreTexts)"
chapter: "20: Entropy and The Second Law of Thermodynamics"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/20%3A_Entropy_and_The_Second_Law_of_Thermodynamics/20.04%3A_The_Second_Law_of_Thermodynamics"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

## Spontaneity of an isolated system

An isolated system is a little more than just adiabatic. In the latter heat cannot get in or out. In an isolated system nothing gets in or out, neither heat nor mass nor even any radiation, such as light. The isolated system is like a little universe all to itself.

Let us consider a zero law process. We have two identical blocks of metal, say aluminum. They are each at thermal equilibrium, but at different temperatures. They are brought into contact with each other but isolated from the rest of the universe.

[Image: Diagram showing two sections labeled TA (gray) and TB (white) with a double-headed arrow indicating a heat transfer, q.]

- Second law (Clausius statement): Heat will flow from hot to cold
- First law: There is no change in total energy

[Note: corrected; the source prints "- Zeroth law: Heat will flow from hot to cold" where this reads "- Second law (Clausius statement): Heat will flow from hot to cold". The zeroth law is about thermal equilibrium being transitive.]

so:

dUA = −dUB

There is also no work so:

dUA = δqA + 0

Because w = 0, δq equals the state-function change dU in this case, otherwise this equality does not hold. As there is only one term on the right there is only one path (along q). So we could write:

[Note: corrected; the source prints "Because U is a state function this makes q a state function as well" where this reads "Because w = 0, δq equals the state-function change dU in this case". Heat is never a state function; here it equals dU only because no work is done.]

dUA = dqA

This implies that we do not need to worry about reversible and irreversible paths as there is only one path. Since:

dS = (δq_rev)/T

In this particular case:

TdS = δq_rev = dU

Thus we get:

dS = (dUA)/(TA) + (dUB)/(TB) = (dUA)/(TA) − (dUA)/(TB) = dUA(1/(TA) − 1/(TB))

Clearly as long as the two temperatures are not the same dS is not zero and entropy is not conserved. Instead it is increasing. Over time, the temperatures will become the same (if the blocks are identical, the final temperature is the average of TA and TB) and the entropy will reach a maximum.

[Image: Graph of the entropy of the two blocks rising to a maximum as their temperatures become equal.]

[Note: corrected; the source prints "[Image: A simple black outline of a bat silhouette.]" where this reads "[Image: Graph of the entropy of the two blocks rising to a maximum as their temperatures become equal.]". The image's alt text, machine-written, misreads the image; this describes it.]

For our two identical blocks of metal (with same heat capacity, CV), we can, in fact, derive that the entropy change:

ΔS = CV ln[(TA + TB)^2/(4TA TB)].

[Note: corrected; the source prints "ln[(TA^2 + TB^2)/(4TA TB)]" where this reads "ln[(TA + TB)^2/(4TA TB)]". With Tf = (TA + TB)/2, ΔS = CV ln[Tf^2/(TA TB)]; as printed it would be negative for TA = TB.]

This is indeed a positive quantity. In general, we can say for an isolated system:

dS ≥ 0

Thus if we are dealing with a spontaneous (and isolated) process dS > 0 and entropy is being produced. This gives us a criterion for spontaneity.

## Entropy exchange of an open system

In an isolated system dS represents the produced entropy dS_prod and this is a good criterion for spontaneity. Of course the requirement that the system is isolated is very restrictive and makes the criterion as good as useless... What happens in a system that can exchange heat with the rest of the universe? We do have entropy changes in that case, but part of them may have nothing to do with production, because we also have to consider the heat that is exchanged.

dS = dS_prod + dS_exchange

If the process is reversible (that is completely non-spontaneous) we are dealing with δq_rev so that dS_exchange = δq_rev/T, but that is also what dS_tot is equal to (by definition). This leaves no room for entropy production.

So we have:

Isolated: dS = dS_prod + 0

Reversible dS = 0 + δq_rev/T

Notice that this demonstrates that for non-isolated systems entropy change is not a good criterion for spontaneity at all... In the case the heat exchange is irreversible part of the entropy is entropy production by the system:

Irreversible: dS = dS_prod + δq_irrev/T

dS > δq_irrev/T in this case.

Generalizing the isolated, irreversible and reversible cases we may say:

dS ≥ (δq)/T

This is the Clausius inequality.
