import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const CovidExposure = () => (
  <QuestionTemplate lang="en" yesLink={logic.q8.yes} noLink={logic.q8.no}>
    <h2>
      In the last 14 days, have you been in close physical contact with someone who currently has COVID-19?
    </h2>
    <p>This includes getting a COVID Alert exposure notification.</p>

    <p>Close physical contact means:</p>
    <ul>
      <li>being less than 2 metres away in the same room, workspace, or area</li>
      <li>living in the same home</li>
      <li>being in the same classroom</li>
    </ul>
  </QuestionTemplate>
)

export default CovidExposure
