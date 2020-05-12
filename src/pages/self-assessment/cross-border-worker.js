import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const CrossBorderWorker = () => (
  <QuestionTemplate lang="en" yesLink={logic.q12.yes} noLink={logic.q12.no}>
    <h2>Are you regularly crossing the Canada-US border for work?</h2>
  </QuestionTemplate>
)

export default CrossBorderWorker
