import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

export default () => (
  <QuestionTemplate lang="en" yesLink={logic.q7.yes} noLink={logic.q7.no}>
    <h2>In the last 10 days, have you received a COVID Alert exposure notification on your cell phone?</h2>
    <p>If you already went for a PCR test and got a negative result, select "No."</p>
  </QuestionTemplate>
)
