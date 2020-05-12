import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const CovidExposure = () => (
  <QuestionTemplate lang="en" yesLink={logic.q8.yes} noLink={logic.q8.no}>
    <h2>
      In the last 14 days, have you been in close physical contact with someone who tested positive for COVID-19?{" "}
    </h2>
    <p>Close physical contact means:</p>
    <ul>
      <li>a face-to-face conversation for 15 minutes</li>
      <li>being in the same room for 2 hours</li>
      <li>living in the same home</li>
      <li>working in the same workplace</li>
    </ul>
  </QuestionTemplate>
)

export default CovidExposure
