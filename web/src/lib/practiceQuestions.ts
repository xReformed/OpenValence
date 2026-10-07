import type { BookKey, Question } from "./types";

export const PRACTICE: Partial<Record<`${BookKey}/${string}`, Question[]>> = {
  "beginning-chemistry/1.2": [
    {
      id: "matter-not-matter",
      type: "multiple-choice",
      prompt: "Which of these is not matter?",
      choices: [
        { text: "A dream you had last night", correct: true },
        {
          text: "The helium inside a party balloon",
          why: "Helium is a gas, but it still has mass and takes up space, so it is matter. Gases are easy to forget, like air.",
        },
        {
          text: "A grain of sand",
          why: "A grain of sand has mass and takes up space, so it is matter.",
        },
        {
          text: "A glass of orange juice",
          why: "Orange juice has mass and takes up space, so it is matter.",
        },
      ],
      explanation:
        "Matter is anything that has mass and takes up space. A dream is a thought, and thoughts, ideas, emotions, and hopes are not matter.",
    },
    {
      id: "chemical-property-paper",
      type: "multiple-choice",
      prompt: "Which of these is a chemical property of a sheet of paper?",
      choices: [
        { text: "It burns when lit with a match", correct: true },
        {
          text: "It is white",
          why: "Color describes the paper as it exists, so it is a physical property.",
        },
        {
          text: "It is a solid at room temperature",
          why: "Phase (solid, liquid, or gas) is a physical property.",
        },
        {
          text: "It is 28 centimeters long",
          why: "Size describes the paper as it exists, so it is a physical property.",
        },
      ],
      explanation:
        "Chemical properties describe how matter changes form in the presence of other matter, as when paper burns. Color, phase, and size describe matter as it exists: physical properties.",
    },
    {
      id: "chemical-change-egg",
      type: "multiple-choice",
      prompt: "Which of these is a chemical change?",
      choices: [
        { text: "An egg cooking in a frying pan", correct: true },
        {
          text: "A puddle of water freezing into ice",
          why: "Freezing changes only the phase, from liquid to solid, so it is a physical change.",
        },
        {
          text: "A chocolate bar melting in the sun",
          why: "Melting changes the phase, not the chemical composition, so it is a physical change.",
        },
        {
          text: "A log being split into firewood",
          why: "Splitting changes size and shape, not what the wood is made of, so it is a physical change.",
        },
      ],
      explanation:
        "In a chemical change, the chemical composition changes and new forms of matter are made, as when an egg cooks. Freezing, melting, and cutting change only physical properties such as phase, size, and shape.",
    },
    {
      id: "dissolving-sugar",
      type: "multiple-choice",
      prompt:
        "You stir sugar into hot tea until you can no longer see it. What kind of change is that?",
      choices: [
        {
          text: "A physical change: the sugar and tea form a mixture",
          correct: true,
        },
        {
          text: "A chemical change, because the sugar seems to disappear",
          why: "The sugar is still there, mixed so finely that you can't see it, just as salt dissolved in water is still present.",
        },
        {
          text: "A chemical change, because the tea is hot",
          why: "Heat alone doesn't make a change chemical. What matters is whether the chemical composition changes and new substances form.",
        },
      ],
      explanation:
        "Dissolved sugar in tea is a homogeneous mixture, a physical combination of substances. The sugar's chemical composition doesn't change.",
    },
    {
      id: "element-definition",
      type: "multiple-choice",
      prompt: "What makes a substance an element rather than a compound?",
      choices: [
        {
          text: "It cannot be broken down into simpler substances by ordinary chemical means",
          correct: true,
        },
        {
          text: "It is a solid at room temperature",
          why: "Phase doesn't decide it: nonmetal elements, for instance, exist in a variety of phases at room temperature.",
        },
        {
          text: "It is found in nature",
          why: "Compounds such as water are found in nature too.",
        },
        {
          text: "It has the same properties throughout",
          why: "That's true of every substance, compounds included. An element is the simplest type of substance.",
        },
      ],
      explanation:
        "An element is the simplest type of chemical substance: it can't be broken down into simpler substances by ordinary chemical means. A compound is a combination of more than one element.",
    },
    {
      id: "compound-sugar",
      type: "multiple-choice",
      prompt:
        "Table sugar is a single substance made of three elements: carbon, hydrogen, and oxygen. What kind of matter is it?",
      choices: [
        { text: "A compound", correct: true },
        {
          text: "An element",
          why: "An element is the simplest type of substance and can't be broken down further. Sugar is made of three elements.",
        },
        {
          text: "A mixture",
          why: "A mixture is a physical combination of more than one substance. Sugar is one substance, with properties of its own.",
        },
      ],
      explanation:
        "A compound is a combination of more than one element, and it behaves as a completely different substance from its elements.",
    },
    {
      id: "heterogeneous-cereal",
      type: "multiple-choice",
      prompt: "A bowl of cereal with milk is…",
      choices: [
        { text: "A heterogeneous mixture", correct: true },
        {
          text: "A homogeneous mixture",
          why: "In a homogeneous mixture you can't tell the substances apart, but here you can see the cereal and the milk separately.",
        },
        {
          text: "A compound",
          why: "The cereal and milk are only mixed physically; they don't combine into one new substance.",
        },
      ],
      explanation:
        "In a heterogeneous mixture it is easy to tell, sometimes by the naked eye, that more than one substance is present.",
    },
    {
      id: "metal-properties",
      type: "multiple-choice",
      prompt:
        "An element can be hammered into thin sheets, drawn into wires, and conducts electricity well. What is it?",
      choices: [
        { text: "A metal", correct: true },
        {
          text: "A nonmetal",
          why: "Nonmetals are brittle when solid, conduct electricity and heat poorly, and can't be made into sheets or wires.",
        },
        {
          text: "A semi-metal",
          why: "Semi-metals have some properties of metals and some of nonmetals; this element has all the metal properties listed.",
        },
      ],
      explanation:
        "Metals are malleable (they can be pounded into thin sheets), ductile (they can be drawn into thin wires), and conduct electricity and heat well.",
    },
    {
      id: "mercury-metal",
      type: "multiple-choice",
      prompt: "Mercury is a liquid at room temperature. Is it a metal?",
      choices: [
        {
          text: "Yes: it's the well-known exception to metals being solid at room temperature",
          correct: true,
        },
        {
          text: "No: metals are always solid at room temperature",
          why: "Almost all are, but mercury is the well-known exception.",
        },
        {
          text: "No: an element can't be a liquid",
          why: "Elements exist in different phases at room temperature; nonmetals, for example, come in a variety of phases.",
        },
      ],
      explanation:
        "At room temperature metals are solid, with mercury the well-known exception. It still has all the other expected properties of a metal.",
    },
  ],

  "beginning-chemistry/1.3": [
    {
      id: "science-definition",
      type: "multiple-choice",
      prompt: "Which best describes science?",
      choices: [
        {
          text: "A process of knowing about the natural universe through observation and experiment",
          correct: true,
        },
        {
          text: "Any knowledge that people have agreed on",
          why: "Agreement alone describes contrived things like language, where everyone agrees what \"blue\" means. Science deals only with what occurs naturally.",
        },
        {
          text: "Careful thinking about the world, without the need for experiments",
          why: "That is a process of knowing (the ancient Greeks simply sat and thought), but science relies on observation and experiment.",
        },
        {
          text: "A fixed set of facts that are never revised",
          why: "Science is a process: hypotheses are stated, tested, and refined.",
        },
      ],
      explanation:
        "Science is the process of knowing about the natural universe through observation and experiment. It isn't the only process of knowing, but it is the best one humanity has devised so far.",
    },
    {
      id: "testable-hypothesis",
      type: "multiple-choice",
      prompt: "Which of these could be a scientific hypothesis?",
      choices: [
        {
          text: "If an iron nail is left in salt water, then it will rust faster than one left in plain water",
          correct: true,
        },
        {
          text: "Red is a more beautiful color than blue",
          why: "Beauty is a matter of taste. No experiment or observation could support or refute it.",
        },
        {
          text: "Chemistry is the most enjoyable science",
          why: "This is an opinion. No experiment or observation could support or refute it.",
        },
      ],
      explanation:
        "A scientific hypothesis must be something that can be supported or refuted through carefully crafted experimentation or observation. It is often written as an if/then statement: a possibility (if) and what may happen because of it (then).",
    },
    {
      id: "elements-by-experiment",
      type: "multiple-choice",
      prompt:
        "Everything in the natural universe is made from only about 115 elements, yet matter takes so many different forms. How did science establish what the elements are?",
      choices: [
        {
          text: "Through decades of tests and millions of experiments",
          correct: true,
        },
        {
          text: "By looking at the world around us",
          why: "Looking around suggests the opposite: matter takes so many forms that the idea wasn't obvious. That is why experiments were needed.",
        },
        {
          text: "By reasoning alone, as the ancient Greeks did",
          why: "The concept of the element is only about 200 years old, and it came from experiment, not from sitting and thinking.",
        },
      ],
      explanation:
        "Experiments are necessary because the natural universe is not always obvious. It took decades of tests and millions of experiments to establish what the elements actually are.",
    },
    {
      id: "everyday-theory",
      type: "multiple-choice",
      prompt:
        "A friend says, \"I have a theory: the soda went flat because the cap was loose.\" In science's terms, what is their guess?",
      choices: [
        { text: "A hypothesis", correct: true },
        {
          text: "A theory",
          why: "In science, a theory summarizes an overwhelming amount of evidence and explains a large number of observations. Everyday speech uses \"theory\" for a guess, which science calls a hypothesis.",
        },
        {
          text: "A law",
          why: "A scientific law is a specific statement thought never to be violated by the natural universe. An untested guess is far from that.",
        },
      ],
      explanation:
        "An educated guess about how the natural universe works is a hypothesis. Theory and law mean something different in science than in common usage, so it's important to use their proper definitions.",
    },
    {
      id: "law-vs-speed-limit",
      type: "multiple-choice",
      prompt:
        "How is a scientific law, such as the law of gravitation, different from a speed limit?",
      choices: [
        {
          text: "A speed limit is a rule that can be broken; a scientific law is thought never to be violated by the natural universe",
          correct: true,
        },
        {
          text: "They're the same kind of thing: rules that people agreed on",
          why: "A speed limit is made up by people. A scientific law describes how the natural universe itself works.",
        },
        {
          text: "A scientific law is a guess that hasn't been tested yet",
          why: "That's a hypothesis. A law is the highest understanding of the natural universe that science has.",
        },
      ],
      explanation:
        "A scientific law is a specific statement thought never to be violated by the entire natural universe, like the law of gravitation: all matter attracts all other matter. In common usage, a law is an arbitrary limitation that can be broken, with potential consequences.",
    },
    {
      id: "astronomy-is-science",
      type: "multiple-choice",
      prompt: "Which of these fields is part of science?",
      choices: [
        { text: "Astronomy, the study of stars and planets", correct: true },
        {
          text: "Grammar, the rules of a language",
          why: "Language is contrived: its speakers agreed on what each word means. Science deals only with what occurs naturally.",
        },
        {
          text: "Etiquette, the rules of polite behavior",
          why: "Rules of politeness are made up by people. They aren't part of the natural universe.",
        },
        {
          text: "Legal studies, the study of a country's laws",
          why: "A country's laws are made by people. Despite the shared word, they aren't scientific laws, which describe the natural universe.",
        },
      ],
      explanation:
        "Science is concerned only with the natural universe. Stars and planets occur naturally, so astronomy is a science; grammar, etiquette, and a country's laws are all made up by people.",
    },
    {
      id: "biochemist",
      type: "multiple-choice",
      prompt:
        "A scientist studies the chemical reactions that happen inside living cells. What might they be called?",
      choices: [
        { text: "A biochemist", correct: true },
        {
          text: "A geologist",
          why: "Geology is the study of the earth.",
        },
        {
          text: "A physicist",
          why: "Physics is concerned with the fundamental interactions between matter and energy, not with living organisms in particular.",
        },
      ],
      explanation:
        "The boundaries between scientific fields aren't always readily apparent. Someone who studies the chemistry of biological organisms works across biology and chemistry, and may be labeled a biochemist.",
    },
    {
      id: "quantitative-flask",
      type: "multiple-choice",
      prompt: "Which of these is a quantitative description?",
      choices: [
        { text: "The flask holds 250 milliliters of water", correct: true },
        {
          text: "The solution is pale blue",
          why: "Color describes a quality, so this is qualitative.",
        },
        {
          text: "The metal block is heavy",
          why: "\"Heavy\" describes a quality without giving an amount, like \"your math book is heavy.\" It's qualitative.",
        },
        {
          text: "The gas has a sharp smell",
          why: "Smell describes a quality, so this is qualitative.",
        },
      ],
      explanation:
        "A quantitative description gives a specific amount of something, usually found by counting or measuring it. Color, smell, and words like \"heavy\" describe qualities, so those descriptions are qualitative.",
    },
    {
      id: "bubbles-qualitative",
      type: "multiple-choice",
      prompt:
        "\"There are a lot of bubbles in this soda.\" Is that a qualitative or a quantitative description?",
      choices: [
        {
          text: "Qualitative: \"a lot\" isn't a specific amount",
          correct: true,
        },
        {
          text: "Quantitative: it says how much",
          why: "It hints at an amount, but \"a lot\" isn't counted or measured. A quantitative description gives a specific amount, such as 650 pages in a book.",
        },
      ],
      explanation:
        "Quantitative descriptions give a specific amount, found by counting or measuring. \"A lot of bubbles\" describes the soda without a number, so it is qualitative.",
    },
    {
      id: "soda-hiss",
      type: "multiple-choice",
      prompt: "Why does a can of soda hiss and fizz when you open it?",
      choices: [
        {
          text: "Carbon dioxide dissolved under high pressure escapes and comes out of solution once the pressure is released",
          correct: true,
        },
        {
          text: "The water in the soda starts to boil",
          why: "Nothing is heated. The bubbles are carbon dioxide coming out of solution.",
        },
        {
          text: "Yeast in the soda starts to ferment",
          why: "Yeast makes the carbon dioxide in some sparkling wines, such as champagne. Soda is made by forcing pure carbon dioxide into it at very high pressure.",
        },
        {
          text: "Air rushes into the can",
          why: "The hiss is gas leaving the can: the excess carbon dioxide escapes.",
        },
      ],
      explanation:
        "Soda is sealed with pure carbon dioxide at high pressure, which lets more of it dissolve in the water. Opening the can releases the pressure: the excess gas escapes with a hiss, and dissolved carbon dioxide comes out of solution as tiny bubbles.",
    },
  ],

  "beginning-chemistry/2.2": [
    {
      id: "sci-exponent-large",
      type: "numeric",
      prompt: "In scientific notation, 48,200,000 is written 4.82 × 10^{n}. What is n?",
      answer: 7,
      explanation:
        "48,200,000 = 4.82 × 10,000,000, and 10,000,000 = 10^7. The decimal point moves 7 places to give 4.82, a number between 1 and 10, and a number greater than 1 has a positive power of 10: 4.82 × 10^7.",
    },
    {
      id: "sci-exponent-small",
      type: "numeric",
      prompt: "In scientific notation, 0.0000306 is written 3.06 × 10^{n}. What is n?",
      answer: -5,
      explanation:
        "0.0000306 = 3.06 × 1/100,000, and 1/100,000 = 10^−5. The decimal point moves 5 places to give 3.06, and a number between 0 and 1 has a negative power of 10: 3.06 × 10^−5.",
    },
    {
      id: "sci-coefficient",
      type: "numeric",
      prompt: "What is the coefficient when 520,400 is written in scientific notation?",
      answer: 5.204,
      explanation:
        "Write the first nonzero digit, a decimal point, then the rest of the digits, leaving off the extra zeros at the end: 520,400 = 5.204 × 10^5. The coefficient, the part multiplied by the power of 10, is 5.204.",
    },
    {
      id: "calculator-display",
      type: "numeric",
      prompt:
        "Some calculators show only the coefficient and the power of 10, leaving out the \"× 10\". One display reads 4.6 −03. What number is that?",
      answer: 0.0046,
      explanation:
        "The display means 4.6 × 10^−3. A negative power of 10 means a number less than one: 4.6 × 1/1,000 = 0.0046.",
    },
    {
      id: "sunlight-travel-time",
      type: "numeric",
      prompt:
        "The Earth is about 9.3 × 10^7 miles from the sun, and light travels about 1.86 × 10^5 miles every second. How many seconds does sunlight take to reach the Earth?",
      answer: 9.3e7 / 1.86e5,
      unit: "s",
      explanation:
        "Enter both numbers into your calculator in scientific notation and divide: (9.3 × 10^7)/(1.86 × 10^5) = 5.0 × 10^2 s, or 500 seconds, a little over 8 minutes.",
    },
  ],

  "beginning-chemistry/2.3": [
    {
      id: "si-unit-mass",
      type: "multiple-choice",
      prompt: "Which is the SI unit of mass?",
      choices: [
        { text: "The kilogram (kg)", correct: true },
        {
          text: "The gram (g)",
          why: "Prefixes attach to the gram, but the SI unit of mass is the kilogram, which means 1,000 g.",
        },
        {
          text: "The pound (lb)",
          why: "The pound isn't an SI unit. A kilogram is about 2.2 pounds.",
        },
        {
          text: "The meter (m)",
          why: "The meter is the SI unit of length.",
        },
      ],
      explanation:
        "SI is based on fundamental units: the meter (m) for length, the kilogram (kg) for mass, and the second (s) for time. The kilogram is the one that already has a prefix: kilo- means 1,000 ×.",
    },
    {
      id: "ms-to-s",
      type: "numeric",
      prompt: "A camera flash lasts 2.5 ms. How many seconds is that?",
      answer: 2.5e-3,
      unit: "s",
      explanation:
        "Milli- means 1/1,000 ×, so a millisecond is one-thousandth of a second: 2.5 ms = 2.5 × 1/1,000 s = 0.0025 s, or 2.5 × 10^−3 s.",
    },
    {
      id: "mega-vs-milli",
      type: "multiple-choice",
      prompt: "A mass is written as 3 Mg. What unit is that?",
      choices: [
        { text: "Megagrams: each is 1,000,000 g", correct: true },
        {
          text: "Milligrams: each is 1/1,000 g",
          why: "Milligrams are written mg, with a lowercase m. A capital M means mega-, 1,000,000 ×.",
        },
        {
          text: "Micrograms: each is 1/1,000,000 g",
          why: "Micro- is written with the Greek letter μ (mu), so micrograms are μg.",
        },
      ],
      explanation:
        "A unit's abbreviation combines the prefix's abbreviation with the unit's. The case matters: M is mega- (1,000,000 ×) and m is milli- (1/1,000 ×), so Mg is megagrams and mg is milligrams.",
    },
    {
      id: "box-volume-liters",
      type: "numeric",
      prompt: "A box measures 10 cm × 10 cm × 5.0 cm. What is its volume in liters?",
      answer: (10 * 10 * 5.0) / 1000,
      unit: "L",
      explanation:
        "Volume is length × width × height: 10 cm × 10 cm × 5.0 cm = 500 cm^3. A liter is 1,000 cm^3, so the box holds 500/1,000 = 0.50 L, which is also 500 mL, since 1 mL = 1 cm^3.",
    },
    {
      id: "train-velocity",
      type: "numeric",
      prompt: "A train travels 120 km in 1.5 h. What is its velocity in kilometers per hour?",
      answer: 120 / 1.5,
      unit: "km/h",
      explanation:
        "The word per implies division: velocity is distance divided by time. Dividing the numbers gives 120/1.5 = 80, and dividing the units gives km/h, so the velocity is 80 km/h.",
    },
  ],

  "beginning-chemistry/2.4": [
    {
      id: "sigfigs-count-zeros",
      type: "numeric",
      prompt: "How many significant figures are in the measurement 0.04050 g?",
      answer: 4,
      explanation:
        "The leading zeros only put the digits in the correct positions (rule 4), so they don't count. The 4 and 5 are significant (rule 1), the zero between them is significant (rule 2), and the last zero comes after the decimal point, so it is significant too (rule 3): four significant figures.",
    },
    {
      id: "sigfigs-scientific-notation",
      type: "multiple-choice",
      prompt:
        "A mass is reported as 52,000 g, but it was measured to three significant figures. Which way of writing it shows that?",
      choices: [
        { text: "5.20 × 10^4 g", correct: true },
        {
          text: "5.2 × 10^4 g",
          why: "That shows only two significant figures. A coefficient includes a zero only if it is significant.",
        },
        {
          text: "52,000 g",
          why: "Zeros at the end of a number without a decimal point aren't significant (rule 3), so 52,000 shows only two significant figures.",
        },
        {
          text: "5.200 × 10^4 g",
          why: "That shows four significant figures: every zero in the coefficient counts.",
        },
      ],
      explanation:
        "Scientific notation includes zeros in the coefficient only if they are significant, so 5.20 × 10^4 g shows exactly three: the 5, the 2, and the zero.",
    },
    {
      id: "sigfigs-sum",
      type: "numeric",
      prompt: "Report 12.52 + 349.0 + 8.24 to the proper number of significant figures.",
      answer: 369.8,
      tolerance: 0,
      explanation:
        "A calculator gives 369.76. 349.0 stops its significant figures in the tenths column, so the answer is limited to the tenths place. The first dropped digit is 6, which is 5 or greater, so round up: 369.8.",
    },
    {
      id: "sigfigs-area",
      type: "numeric",
      prompt:
        "A rectangle measures 4.5 cm by 12.33 cm. What is its area, to the proper number of significant figures?",
      answer: 55,
      unit: "cm²",
      tolerance: 0,
      explanation:
        "A calculator gives 4.5 × 12.33 = 55.485. In multiplication, limit the answer to the least number of significant figures in the data: 4.5 has two, so the area has two. The first dropped digit is 4, less than 5, so round down: 55 cm^2.",
    },
    {
      id: "sigfigs-product-zeros",
      type: "multiple-choice",
      prompt: "What is 6.022 × 0.0150, to the proper number of significant figures?",
      choices: [
        { text: "0.0903", correct: true },
        {
          text: "0.090",
          why: "That's two significant figures, but 0.0150 has three: its last zero comes after the decimal point, so it is significant (rule 3).",
        },
        {
          text: "0.09033",
          why: "That keeps four significant figures. The answer is limited to the least number in the data: three, from 0.0150.",
        },
        {
          text: "0.09",
          why: "That's only one significant figure. The leading zeros of 0.0150 don't count, but the 1, the 5, and the last 0 do.",
        },
      ],
      explanation:
        "6.022 has four significant figures and 0.0150 has three (its leading zeros don't count; its last zero, after the decimal point, does). So the product gets three: 6.022 × 0.0150 = 0.09033, which rounds down to 0.0903.",
    },
  ],

  "beginning-chemistry/12.6": [
    {
      id: "kw-oh-from-h",
      type: "numeric",
      prompt: "A solution has [H^+] = 2.5 × 10^−4 M. What is its [OH^−]?",
      answer: 1.0e-14 / 2.5e-4,
      unit: "M",
      explanation:
        "Kw = [H^+][OH^−] = 1.0 × 10^−14, so [OH^−] = (1.0 × 10^−14)/(2.5 × 10^−4) = 4.0 × 10^−11 M.",
    },
    {
      id: "kw-acid-lowers-oh",
      type: "multiple-choice",
      prompt:
        "Adding an acid to pure water raises [H^+]. What happens to [OH^−]?",
      choices: [
        {
          text: "It falls, so that [H^+][OH^−] stays 1.0 × 10^−14",
          correct: true,
        },
        {
          text: "It rises along with [H^+]",
          why: "[H^+] and [OH^−] move in opposite directions: their product is fixed at Kw.",
        },
        {
          text: "It stays at 1.0 × 10^−7 M",
          why: "Only pure water has [OH^−] = 1.0 × 10^−7 M; adding acid changes it.",
        },
        {
          text: "It drops to zero",
          why: "[OH^−] gets smaller but never reaches zero: [H^+][OH^−] is always 1.0 × 10^−14.",
        },
      ],
      explanation:
        "Kw = [H^+][OH^−] = 1.0 × 10^−14 in any aqueous solution, so as one concentration goes up, the other must go down.",
    },
  ],

  "beginning-chemistry/12.7": [
    {
      id: "ph-from-h",
      type: "numeric",
      prompt: "What is the pH of a solution with [H^+] = 3.2 × 10^−5 M?",
      answer: -Math.log10(3.2e-5),
      explanation: "pH = −log[H^+] = −log(3.2 × 10^−5) = 4.49.",
    },
    {
      id: "ph-classify-basic",
      type: "multiple-choice",
      prompt: "A solution has a pH of 9.2. How would you describe it?",
      choices: [
        { text: "Basic", correct: true },
        { text: "Acidic", why: "Acidic solutions have a pH below 7." },
        { text: "Neutral", why: "Only a pH of exactly 7 is neutral." },
      ],
      explanation:
        "A pH above 7 means the solution is basic; below 7, acidic; exactly 7, neutral.",
    },
  ],

  "beginning-chemistry/16.3": [
    {
      id: "name-2-methylpentane",
      type: "multiple-choice",
      prompt:
        "A five-carbon chain has a methyl group on its second carbon. What is its name?",
      choices: [
        { text: "2-methylpentane", correct: true },
        {
          text: "4-methylpentane",
          why: "Number the chain from the end nearer the substituent, so it gets the lowest possible number.",
        },
        {
          text: "2-methylbutane",
          why: "The parent name counts the whole main chain, which has five carbons: pentane.",
        },
        {
          text: "hexane",
          why: "2-methylpentane and hexane are isomers (both C6H14), but a branched molecule's name must show its branch.",
        },
      ],
      explanation:
        "The main chain has five carbons (pentane), and numbering from the nearer end puts the methyl group on carbon 2: 2-methylpentane.",
    },
    {
      id: "substituent-order",
      type: "multiple-choice",
      prompt:
        "In the name 3-ethyl-2-methylhexane, why does ethyl come before methyl?",
      choices: [
        {
          text: "Substituents are listed in alphabetical order",
          correct: true,
        },
        {
          text: "The larger substituent comes first",
          why: "Size doesn't decide the order; ethyl would come first even if it were the smaller group.",
        },
        {
          text: "The substituent with the lower position number comes first",
          why: "Methyl is on carbon 2 and ethyl on carbon 3, yet ethyl comes first: the order is alphabetical.",
        },
      ],
      explanation:
        "Different substituents are listed in alphabetical order, each with its position number: e (ethyl) comes before m (methyl).",
    },
  ],
};

export function practiceFor(book: BookKey, section: string): Question[] {
  return PRACTICE[`${book}/${section}`] ?? [];
}
