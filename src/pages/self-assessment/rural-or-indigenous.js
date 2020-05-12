import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const RuralOrIndigenous = () => (
  <QuestionTemplate lang="en" yesLink={logic.q13.yes} noLink={logic.q13.no}>
    <h2>Do you live in a rural, remote, isolated or Indigenous community?</h2>
    <p>Examples include:</p>
    <ul>
      <li>communities outside a town of less than 1,000 people </li>
      <li>communities accessed by boat or winter roads</li>
      <li>if you have a 0 (zero) as the second character in your postal code </li>
      <li>reserves</li>
    </ul>
  </QuestionTemplate>
)

export default RuralOrIndigenous
