import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const CovidExposure = () => (
  <QuestionTemplate lang="en" yesLink={logic.q1.yes} noLink={logic.q1.no}>
    <h2>
       Do any of the following apply to you? 
    </h2>
    <ul>
      <li><strong>I am fully vaccinated against COVID-19</strong> (it has been 14 days or more since your final dose of either a two-dose or a one-dose vaccine series)</li>
      <li><strong>I have tested positive for COVID-19</strong> in the last 90 days (and since been cleared)</li>
    </ul> 
    <p>The reason we ask this question is to give you a result with accurate isolation instructions. We do not collect personal health information in this tool. </p>
  </QuestionTemplate>
)

export default CovidExposure
