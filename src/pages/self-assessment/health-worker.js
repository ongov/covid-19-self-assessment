import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const HealthWorker = () => (
  <QuestionTemplate lang="en" yesLink={logic.q4.yes} noLink={logic.q4.no}>
    <h2>In the last 14 days, have you or has a person you live with provided health care to someone?</h2>
    <p>People who provide health care can include:</p>
    <ul>
      <li>doctors and nurses</li>
      <li>caregivers</li>
      <li>personal support workers (supporting people in their homes) </li>
      <li>first responders</li>
      <li>those caring for sick or older family members</li>
      <li>those working in hospitals, long-term care facilities or retirement homes </li>
      <li>volunteers in a health care setting</li>
    </ul>
  </QuestionTemplate>
)

export default HealthWorker
