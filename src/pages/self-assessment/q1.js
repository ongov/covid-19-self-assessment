import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Q1 = () => (
  <QuestionTemplate lang="en" yesLink={logic.q1.yes} noLink={logic.q1.no}>
    <h2>
      Are you experiencing <strong>any</strong> of the following symptoms?
    </h2>
    <ul>
      <li>
        severe difficulty breathing
        <br />
        <span className="ontario-hint">(struggling for each breath, can only speak in single words)</span>
      </li>
      <li>
        severe chest pain
        <br />
        <span className="ontario-hint">(constant tightness or crushing sensation)</span>
      </li>
      <li>
        feeling confused
        <br />
        <span className="ontario-hint">(for example, unsure of where you are)</span>
      </li>
      <li>losing consciousness</li>
    </ul>
  </QuestionTemplate>
)

export default Q1
