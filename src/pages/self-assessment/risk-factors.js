import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const RiskFactors = () => (
  <QuestionTemplate lang="en" yesLink={logic.q7.yes} noLink={logic.q7.no}>
    <h2>Are you in any of these at-risk groups?</h2>
    <ul>
      <li>65 years old or older</li>
      <li>pregnant or recently gave birth</li>
      <li>
        getting treatment that compromises (weakens) your immune system
        <br />
        <span className="ontario-hint">
          (for example, chemotherapy, medication for transplants, corticosteroids,{" "}
          <abbr title="tumor necrosis factor">TNF</abbr> inhibitors)
        </span>
      </li>
      <li>
        having a condition that compromises (weakens) your immune system
        <br />
        <span className="ontario-hint">(for example, lupus, rheumatoid arthritis, other autoimmune disorder)</span>
      </li>
      <li>
        having a chronic (long-lasting) health condition
        <br />
        <span className="ontario-hint">(for example, diabetes, emphysema, asthma, heart condition)</span>
      </li>
      <li>
        regularly going to a hospital or health care setting for a treatment
        <br />
        <span className="ontario-hint">(for example, dialysis, surgery, cancer treatment)</span>
      </li>
    </ul>
  </QuestionTemplate>
)

export default RiskFactors
