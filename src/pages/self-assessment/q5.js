import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Q5 = () => (
  <QuestionTemplate lang="en" yesLink={logic.q5.yes} noLink={logic.q5.no}>
    <h2>Do any of the following apply to you?</h2>
    <ul>
      <li>I am 65 years old or older</li>
      <li>
        I have a condition that affects my immune system <br />
        <span className="ontario-hint">(for example, HIV/AIDS, lupus, other autoimmune disorder)</span>
      </li>
      <li>
        I have a chronic health condition
        <br />
        <span className="ontario-hint">(for example, diabetes, emphysema, asthma, heart condition)</span>
      </li>
      <li>
        I am getting treatment that affects my immune system
        <br />
        <span className="ontario-hint">
          (for example, chemotherapy, corticosteroids, <abbr title="tumor necrosis factor">TNF</abbr> inhibitors)
        </span>
      </li>
    </ul>
  </QuestionTemplate>
)

export default Q5
