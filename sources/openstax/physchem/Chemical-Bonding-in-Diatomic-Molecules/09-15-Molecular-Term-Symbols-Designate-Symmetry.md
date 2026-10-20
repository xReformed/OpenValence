---
title: "9.15: Molecular Term Symbols Designate Symmetry"
book: "Physical Chemistry (LibreTexts)"
chapter: "9: Chemical Bonding in Diatomic Molecules"
source_url: "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/09%3A_Chemical_Bonding_in_Diatomic_Molecules/9.15%3A_Molecular_Term_Symbols_Designate_Symmetry"
author: "Anonymous"
license: "CC BY-NC-SA 4.0"
---

The quantum numbers for diatomic molecules are similar from the atomic quantum numbers. Be cautious, because the rules for finding the possible combinations are different. The total orbital angular momentum quantum number For the molecular case, this number is called Λ instead of L. It follows the same naming convention as L, except that instead of using capital English letters, it uses capital Greek letters:

- Λ = 0 → Σ
- Λ = 1 → Π
- Λ = 2 → Δ
- Λ = 3 → Φ

Unlike L, there is not a general formula for finding the possible combinations of Λ. You have to examine the individual microstates. This is easier than it sounds.

- The total magnetic quantum number ML: ML works like Ml with atoms, except that there is no formula for finding the combinations.
- The total spin magnetic quantum number MS: MS works exactly like Ms. Electrons can either point with or against the z ‐ axis, and being in a molecular orbital versus an atomic orbital doesn’t change this. MS = m_s1 + m_s2, which for two electrons ranges from +1 to −1.

[Note: corrected; the source prints "MS can range from m_s1 + m_s2 to m_s1 − m_s2." where this reads "MS = m_s1 + m_s2, which for two electrons ranges from +1 to −1.". MS is the sum of the electrons' ms values.]

## Two New Symmetries: Parity and Reflection

Molecular orbitals are more complex than atomic ones and require more modifiers to completely define. Parity (sometimes called “inversion”) tells you if the orbital is symmetric or anti‐symmetric when an inversion operation is performed. The symmetry notation u and g are sometimes used when describing molecular orbitals. This refers to the operation of inversion, which requires starting at an arbitrary point in the orbital, traveling straight through the center, and then continuing outwards an equal distance from the center. The orbital is designated g (for gerade, even) if the phase is the same, and u (for ungerade, uneven) if the phase changes sign.

[Image not described in source]

To determine whether or not a given state is g or u, find the parity of each individual open‐shell electron and uses these simple (Laporte rules):

- g + g → g
- g + u → u
- u + u → g

### Example 9.15.1: Open Shell Configuration

[Note: corrected; the source prints "Closed Shell Configuration" where this reads "Open Shell Configuration". The configuration has two unpaired electrons.]

What is the parity of the state 1σg^2 1σu^2 2σg^2 2σu^2 1πu^1 1πu^1 ?

[Note: corrected; the source prints "2σu^2 2πu^1 2πu^1" where this reads "2σu^2 1πu^1 1πu^1". The first π orbitals are 1πu (B2: 1σg^2 1σu^2 2σg^2 2σu^2 1πu^2).]

**Solution**

Since both open shell electrons are ungerade, the overall parity is g. Helpful hint: bonding sigma orbitals and anti ‐ bonding pi orbitals are always gerade. Anti ‐ bonding sigmas and bonding pis are always ungerade. Draw them and see for yourself.

<!-- end of example -->

Reflection determines if a given orbital is symmetric or anti‐symmetric upon reflection through a plane that contains both nuclei. The choice of symmetry planes is arbitrary. As long as you pick a plane and stick with it, you will always get the right answer. When an orbital is symmetric, it is labeled +. When an orbital is anti ‐ symmetric, it is labeled ‐ . To find the overall reflection of a state, use these rules:

- (+)(+) → +
- (+)(‐) → ‐
- (‐)(‐) → +

[Note: corrected; the source prints "(+)(+) \rightarrow +" where this reads "(+)(+) → +"; the source prints "(+)(‐) \rightarrow ‐" where this reads "(+)(‐) → ‐"; the source prints "(‐)(‐) \rightarrow +" where this reads "(‐)(‐) → +". The source has TeX outside its math here.]

Reflection only applies to Σ states! For Λ > 0, there are no reflection labels! If you experiment with the rules, you will quickly realize why this is the case.

### Example 9.15.2

What is the reflection of the state 1σg^2 1σu^2 2σg^2 2σu^2 1πu^1 1πu^1 ?

[Note: corrected; the source prints "2σu^2 2πu^1 2πu^1" where this reads "2σu^2 1πu^1 1πu^1". As above, 1πu.]

**Solution**

You need to know what the orbitals look like. Draw a picture and then pick a plane. For this example, the plane of the page is selcted, but the orthogonal plane would have worked just as well.

[Image not described in source]

The “vertical” orbital is + The “horizontal” orbital is ‐ Since one is + and one is ‐ , the overall reflection is ‐ . Try using the orthogonal plane and convince yourself that you still get the same answer.

### Example 9.15.3: Oxygen

What are the term symbols for O2 ?

**Solution**

The molecular orbital diagram for O2 is

[Image not described in source]

Where I chose arbitrary configurations for the last two electrons.

There are two open ‐ shell electrons occupying the anti‐bonding πg orbitals. These are the only electrons that matter. It is easiest to simply draw all of the permutations and figure out the bounds on Λ and ML by inspection. If we do this, it is easy to see that Λ = 2,0 and that ML = 2,0, −2

[Image not described in source]

| Ms = −1 | Ms = 0 | Ms = 1 |
| --- | --- | --- |
| 0 | 1 | 0 |
| 1 | 2 | 1 |
| 0 | 1 | 0 |

[Note: corrected; the source prints "| Ms = 2 |" where this reads "| Ms = 1 |". Two electrons give Ms = −1, 0 or +1.]

The top row is a Λ = 2 MS = 0 state, so it is ^1Δ. Both electrons are in the rightmost orbital. This orbital is gerade, and (g)(g) = g, so the parity label is g. We do not assign reflection labels to non Σ states, so the term symbol is ^1Δg. After removing the used up microstates, the chart becomes

| Ms = −1 | Ms = 0 | Ms = 1 |
| --- | --- | --- |
| 1 | 1 | 1 |

[Note: corrected; the source prints "| Ms = 2 |" where this reads "| Ms = 1 |"; the source prints "| 1 | 1 | 0 |" where this reads "| 1 | 1 | 1 |". After the ^1Δ microstates are removed, the ML = 0 row still has Ms = −1, 0 and +1, as the text says (three spin configurations).]

This is a Λ =0 state with three possible spin configurations, so it is ^3Σ. We know that the electrons are in different sub‐orbitals (if you cannot see this, try drawing all of the possible combinations that give Λ = 0). Both of the orbitals are gerade, so the overall parity is gerade. One of the orbitals will be +, the other will be ‐ . The final answer is ^3Σg^−, ^1Δg and ^1Σg^+ (ground state ^3Σg^−)

[Note: corrected; the source prints "The final answer is ^1Δg\(^3Σg^+" where this reads "The final answer is ^3Σg^−, ^1Δg and ^1Σg^+ (ground state ^3Σg^−)". With one orbital + and the other −, the Σ term is Σ^− (as (+)(−) → − above); the last microstate left gives ^1Σg^+. The source's TeX is broken here.]

### Exercise 9.15.1

Write the term symbols for O2^−

**Solution**

First draw the electron configuration diagram.

[Image not described in source]

There are only two possible configurations. It should be easy to see that the term symbol is ^2Πg.
