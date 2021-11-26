import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const SevereSymptoms = () => (
  <QuestionTemplate lang="en" yesLink={logic.q2.yes} noLink={logic.q2.no}>
    <h2>Are you currently experiencing any of these issues? Call 911 if you are.</h2>
    <ul>
      <li>
        Severe difficulty breathing
        <br />
        <span className="ontario-hint">(struggling for each breath, can only speak in single words)</span>
      </li>
      <li>
        Severe chest pain
        <br />
        <span className="ontario-hint">(constant tightness or crushing sensation)</span>
      </li>
      <li>Feeling confused or unsure of where you are</li>
      <li>Losing consciousness</li>
    </ul>
  </QuestionTemplate>
)

export default SevereSymptoms
