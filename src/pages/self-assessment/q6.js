import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Q6 = () => (
  <QuestionTemplate lang="en" yesLink={logic.q6.yes} noLink={logic.q6.no}>
    <h2>Have you travelled outside of Canada in the last 14 days?</h2>
  </QuestionTemplate>
)

export default Q6
