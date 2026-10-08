import balancingIcon from "../../assets/concept/balancing.webp";
import type { Concept } from "../types";

const balancing: Concept = {
  slug: "balancing",
  title: "Chemical balancing",
  icon: balancingIcon,
  status: "planned",
  summary:
    "A levelled path through balancing chemical equations, from counting atoms to redox and disproportionation.",
  span: "atom counting to disproportionation",
  stages: [
    {
      levels: [
        { skill: "Atom counting (subscripts, coefficients, parentheses, hydrates)", tag: "atom-counting" },
        { skill: "Synthesis and decomposition, with state symbols", tag: "basic-balancing" },
        { skill: "Odd/even trick", tag: "odd-even" },
        { skill: "Single and double replacement", tag: "replacement-reactions" },
        { skill: "Polyatomic ions as units", tag: "polyatomic-ions" },
        { skill: "Word equations to balanced equations", tag: "word-equations" },
        { skill: "Hydrocarbon combustion (including fractional method)", tag: "combustion" },
        { skill: "Combustion of fuels containing oxygen", tag: "combustion-o-fuel" },
        { skill: "Predicting products", tag: "predicting-products" },
        { skill: "Net ionic equations", tag: "net-ionic" },
        { skill: "Many-element equations (algebraic method)", tag: "algebraic-method" },
        { skill: "Redox in acidic solution", tag: "redox-acidic" },
        { skill: "Redox in basic solution", tag: "redox-basic" },
        { skill: "Disproportionation", tag: "disproportionation" },
      ],
    },
  ],
};

export default balancing;
