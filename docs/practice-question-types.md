# Practice question types

What kinds of practice questions OpenValence should ask, how each one is graded, and the order to build them in. This is the plan for the "adaptive practice mode" on the [roadmap](../README.md#roadmap). Built so far: numeric and multiple-choice questions, graded in the browser with one try each, a random set of 10 from each section's pool, a score per set, and the next section locked until a set scores 6 or more out of 10 (see [Where the questions come from](#where-the-questions-come-from)). Each attempt is saved in the browser as the question ID, correct or incorrect, and the answer given. Mastery currently counts finished sections (a section is finished when the reader continues past it with Next, or Finish at the end of a book); unit conversion, significant-figure checks, and turning scores into mastery levels are not built yet.

## Principles

The same rules that govern answers govern practice:

- **Grounded.** Every question comes from a textbook section, and its explanation cites that section. A student who gets it wrong should be one click from the passage that teaches it.
- **Code grades whatever code can grade.** Numbers, formulas, and multiple-choice answers have one right answer, so a program checks them — exactly, the same way every time, for free. Claude grades only what genuinely needs judgment (written explanations), and always against a rubric and the source passage.
- **Wrong answers should diagnose.** The point isn't a score; it's finding out *which* idea is missing. Distractors map to specific misconceptions, and multi-step problems are graded step by step.

## Question types

| Type | Example | Tests | Grading |
| ---- | ------- | ----- | ------- |
| Numeric answer | "How many moles are in 36.0 g of water?" | Applying formulas | Automatic, with tolerance |
| Multiple choice | "Which is a chemical change? (a) melting ice (b) rusting iron …" | Concepts and common misconceptions | Automatic |
| Formula or equation input | "Write the formula for aluminum oxide." "Balance this equation." | Writing chemistry correctly | Automatic, with your own parser and balancer |
| Identification / short answer | "Name CaCl₂." "Classify salt water." | Recall and vocabulary | Automatic, if answers are normalized |
| Step-by-step problems | A stoichiometry problem split into: moles of CH₄ → moles of CO₂ → grams of CO₂ | Where exactly the student goes wrong | Automatic, per step |
| Find the mistake | "This solution got 55 g. Which step is wrong?" | Deeper understanding | Multiple choice or Claude |
| Explain in your own words | "Why does adding a catalyst not change the equilibrium?" | Real understanding | Claude with a rubric |

### Numeric answer

The workhorse for calculation topics: stoichiometry, gas laws, pH, enthalpy, equilibrium.

- **Tolerance, not string matching.** Accept answers within a relative tolerance (start with ±1%) so `2.00`, `2.0`, and `1.998` all count for 36.0 g of water.
- **Units are part of the answer.** Parse the unit and convert before comparing, so `2.00 mol` and `2000 mmol` are both right, while `2.00 g` is wrong for the right reason.
- **Grade significant figures separately.** A correct value with the wrong number of significant figures should be marked "right, but check your sig figs", not wrong — otherwise mastery scores measure rounding, not chemistry.
- **Compute answers in code.** Store the inputs and the formula, and let the calculator tools (roadmap platform item 6) produce the expected value, rather than typing answers in by hand.

### Multiple choice

The fastest way to test concepts, and the best way to catch misconceptions.

- **Every distractor is a known misconception.** For "which is a chemical change?", *melting ice* tests the phase-change-is-chemical misconception; *dissolving sugar* tests the dissolving-is-reacting one. Store which misconception each distractor represents, so a wrong pick tells the student — and the mastery model — what to review.
- **Shuffle the order** each time the question is shown.
- Avoid "all of the above" and "none of the above"; they test test-taking, not chemistry.

### Formula or equation input

Writing chemistry correctly is its own skill, separate from understanding it.

- **Formulas** ("aluminum oxide" → `Al2O3`): parse the input into elements and counts and compare those, not the raw text. Decide per question whether the conventional order matters — `O3Al2` has the right atoms but isn't how chemists write aluminum oxide, so it should be "almost: write the metal first", not simply wrong. Reuse the chemistry-notation parsing the web app already has in [chemText.ts](../web/src/lib/chemText.ts) for display.
- **Balanced equations**: check that every element and the total charge balance, and that the coefficients are the smallest whole numbers — don't compare against one stored answer, because `2H2 + O2 → 2H2O` has equivalent forms. The equation balancer (roadmap platform item 7) does the checking.
- **Show where it's wrong**, element by element: "oxygen: 2 on the left, 1 on the right".

### Identification / short answer

Naming, classifying, and vocabulary: "Name CaCl₂" → *calcium chloride*; "Classify salt water" → *homogeneous mixture*.

- **Normalize before comparing**: case, extra spaces, hyphens, and the Roman-numeral forms (`iron(III) chloride`, `iron (III) chloride`, `ferric chloride` if the book accepts it).
- **Keep a list of accepted answers per question**, taken from the textbook's own wording. If the book never uses a synonym, don't accept it silently — flag it for review instead.
- Short answers that need a sentence belong in "Explain in your own words", not here.

### Step-by-step problems

Multi-step calculations split into graded steps, so the feedback is "your mole ratio was wrong", not just "wrong".

- **Each step is its own numeric or formula question**: for burning methane, *moles of CH₄* → *moles of CO₂* (the 1 : 1 ratio) → *grams of CO₂*.
- **Carry the student's own value forward.** If step 1 is wrong but step 2 is done correctly with that wrong value, step 2 is marked correct ("error carried forward"). Otherwise one early slip makes every later step look wrong and the diagnosis is useless.
- The corpus's worked **Examples** are already written as steps, which makes them the natural source for these.

### Find the mistake

Show a worked solution with one deliberate error and ask which step is wrong.

- **Start as multiple choice** ("which step?"): automatic grading, and it already tests deeper understanding than solving.
- **Upgrade later** to "explain what's wrong", graded by Claude with a rubric.
- The corpus supplies real material: the `[Note: …]` corrections mark places where the textbook itself printed a wrong answer or a broken step (see [Transcription conventions](../README.md#transcription-conventions)).

### Explain in your own words

Open-ended explanations: "Why does adding a catalyst not change the equilibrium?"

- **Claude grades with a rubric and the source passage**, not from its own knowledge. The rubric lists the two or three points a full answer must make (here: a catalyst speeds up the forward and reverse reactions equally; it lowers the activation energy; it doesn't change K) and the grade is how many points the answer makes.
- **Return feedback, not just a score**: which points were made, which were missed, with a citation to the passage that covers the missing one.
- **Check the grader.** Hand-grade a sample of answers and compare, and re-check whenever the prompt or model changes — the same discipline as the retrieval evals. This is the only type that costs money per answer and can disagree with itself.

## Where the questions come from

- **OpenValence's own questions, one file per section:** `questions/<book>/<chapter>/<section>.json` (for example [questions/beginning-chemistry/03-atoms-molecules-and-ions/3.4.json](../questions/beginning-chemistry/03-atoms-molecules-and-ions/3.4.json)), imported into the database with `dotnet run --project ingest -- questions` and served to section pages by the API (`GET /api/questions/{book}/{section}`). These are the graded practice set: written for the app rather than taken from the book, so they can be in gradable formats, cover sections that have no exercises, and carry misconception feedback. Section pages show them after the text, under "Check yourself", and grade them on the spot. Each section's file is a pool: a student sees 10 drawn at random, so every question has to stand on its own, and every section of *Beginning Chemistry* has a pool of up to 30, smaller for short sections such as 13.2 and 14.5 (7.2, 8.2 and 9.2 are still to do; the short Prelude sections have none). Numeric and multiple-choice questions work today; the question types in [web/src/lib/types.ts](../web/src/lib/types.ts) document each field, and the import checks every file against them ([core/QuestionFiles.cs](../core/QuestionFiles.cs)) before anything is written. Answers are stored as numbers, so write the calculated value, not the calculation. The answers still reach the browser along with the questions — fine for self-practice; graded tests would need the API to do the grading.
- **The book's Examples and Exercises stay in the section text**, word for word, as "compare with the book's solution" cards. Don't paraphrase them into the question file: a book exercise with only its numbers changed is still an adaptation of the book, under its license.
- **Worked Examples and in-chapter Exercises in the corpus** are also a source of ideas. Both textbooks include them with answers, already tied to a section (for example, Exercise 10.3.1 in *Beginning Chemistry*: 108 g of benzene freezing releases 13.8 kJ), which helps when writing numeric, step-by-step, and short-answer questions.
- **Use the corrected answer, never the misprint.** Where a section carries a `[Note: …]`, the printed answer may be wrong (*Beginning Chemistry* §12.4 works one step from the wrong quantity; its note gives the corrected 0.1106 g NaOH). Every seeded question must be checked against its note.
- **Recompute every number** with the calculator tools rather than trusting a transcription.
- End-of-chapter exercise pages were not transcribed, so they are not available as a source.

## Recording results for mastery

To drive mastery levels, every attempt should record at least:

| Field | Why |
| ----- | --- |
| Question ID and type | Which skill was tested |
| Section ID (for example `introductory/12-8-Buffers`) | Mastery is tracked per textbook section — use book-prefixed IDs, since the books share section numbers |
| Correct / partially correct / incorrect | The score |
| Which step or distractor, if wrong | The diagnosis — this is what makes the review useful |
| Timestamp | So older results count less, and review can be spaced out over time |

Where this data lives — the browser, or an account and database — is a separate decision; see the discussion of login and storage before building it.

## Build order

1. **Numeric answer and multiple choice** — fully automatic and the most common question types; enough for a first practice mode.
2. **Identification / short answer** — automatic once normalization and accepted-answer lists exist.
3. **Step-by-step problems** — reuses numeric grading, adds error-carried-forward.
4. **Formula and equation input** — needs the formula parser and the equation balancer (roadmap platform item 7).
5. **Find the mistake** — as multiple choice first.
6. **Explain in your own words** — last, because it's the only type that needs Claude grading, a rubric per question, and its own evaluation.
