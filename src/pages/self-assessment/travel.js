import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import ProgressBar from "../../components/progress-bar"
import { logic } from "../../shared"

const Travel = () => (
  <QuestionTemplate lang="en" yesLink={logic.q9.yes} noLink={logic.q9.no}>
    <h2>In the last 14 days, have you travelled outside of Canada?</h2>
    <p>
      If{" "}
      <a
        href="https://travel.gc.ca/travel-covid/travel-restrictions/isolation#exemptions"
        target="_blank"
        rel="noopener"
      >
        exempt from federal quarantine requirements
      </a>{" "}
      (for example, you are fully vaccinated and have met the specific conditions, or an essential worker who crosses
      the Canada-US border regularly for work), select “No.”
    </p>

    <ProgressBar progress={90} />
  </QuestionTemplate>
)

export default Travel
