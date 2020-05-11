import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Q7 = () => (
  <QuestionTemplate lang="en" yesLink={logic.q7.yes} noLink={logic.q7.no}>
    <h2>Has someone you are in close contact with tested positive for COVID-19? </h2>
    <p className="ontario-strong-text">For example, someone in your household or workplace.</p>
  </QuestionTemplate>
)

export default Q7
