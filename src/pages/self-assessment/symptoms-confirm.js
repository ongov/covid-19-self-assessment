import React, { useContext } from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

export default () => (
  <QuestionTemplate lang="en" yesLink={logic.q16.yes} noLink={logic.q16.no}>
    <h2>Are your symptoms normal for you (related to a known cause or condition)?</h2>
    <p>
      You should talk with a doctor if you feel sick or think you have the cold or flu because symptoms are similar to
      COVID-19.
    </p>
  </QuestionTemplate>
)
