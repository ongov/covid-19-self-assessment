import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const CongregateSetting = () => (
  <QuestionTemplate lang="en" yesLink={logic.q6.yes} noLink={logic.q6.no}>
    <h2>In the last 14 days, have you lived or worked in any of these places?</h2>
    <ul>
      <li>Hospital</li>
      <li>Long-term care or retirement community</li>
      <li>Homeless shelter</li>
      <li>Prison or correctional facility</li>
      <li>Group home</li>
      <li>Community supported living</li>
      <li>Disability-specific community</li>
      <li>Hospice</li>
      <li>Rehab centre</li>
      <li>Day care for essential workers</li>
    </ul>
  </QuestionTemplate>
)

export default CongregateSetting
