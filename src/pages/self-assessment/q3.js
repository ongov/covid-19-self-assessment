import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Q3 = () => (
  <QuestionTemplate lang="en" yesLink={logic.q3.yes} noLink={logic.q3.no}>
    <h2>Have you worked as a caregiver, personal support worker, or in a health care setting in the last 14 days?</h2>
    <p className="ontario-strong-text">This includes providing care to people with or without COVID-19 symptoms.</p>
    <p>Examples include:</p>
    <ul>
      <li>volunteering in a health care setting</li>
      <li>supporting people in their homes</li>
      <li>providing care to family members </li>
      <li>working in hospitals, long-term care facilities or retirement homes</li>
      <li>first responders</li>
    </ul>
  </QuestionTemplate>
)

export default Q3
