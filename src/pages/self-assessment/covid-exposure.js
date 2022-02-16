import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import ProgressBar from "../../components/progress-bar"
import { logic } from "../../shared"

const CovidExposure = () => (
  <QuestionTemplate lang="en" yesLink={logic.q6.yes} noLink={logic.q6.no}>
    <h2>In the last 10 days, have you been identified as a “close contact” of someone who currently has COVID-19?</h2>

    <p>If public health has advised you that you do not need to self-isolate, select “No.” </p>

    <ProgressBar progress={60} />
  </QuestionTemplate>
)

export default CovidExposure
