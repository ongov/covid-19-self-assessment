import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import ProgressBar from "../../components/progress-bar"
import { logic } from "../../shared"

const RespiratoryExposure = () => (
  <QuestionTemplate lang="en" yesLink={logic.q8.yes} noLink={logic.q8.no}>
    <h2>Have you been in <a href="https://www.ontario.ca/page/covid-19-stop-spread#contact" target="_blank" rel="noopener">close physical contact</a> (while not wearing the appropriate personal protective equipment) with someone you don’t live with who either: </h2>
    <ul>
      <li>
        is sick with symptoms associated with COVID-19 (listed below) in the last 10 days?
      </li>
    </ul>
      <p className="ontario-margin-top-0-! ontario-margin-bottom-32-!">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or</p>
    <ul>
      <li>returned from outside of Canada in the last 14 days?</li>
    </ul>
    <p className="ontario-margin-top-32-!">
      <strong>Children (17 years old or younger):</strong> fever and/or chills, cough or barking cough, shortness of breath, decrease or loss of taste or smell, nausea, vomiting and/or diarrhea 
    </p>
    <p>
      <strong>Adults (18 years old or older):</strong> fever and/or chills, cough or barking cough, shortness of breath, decrease or loss of taste or smell, tiredness, muscle aches 
    </p>

    <p>If the person with symptoms got a COVID-19 vaccine in the last 48 hours and is experiencing mild fatigue, muscle aches, and/or joint pain that only began after vaccination, select “No.”</p>

    <ProgressBar progress={80} />
  </QuestionTemplate>
)

export default RespiratoryExposure
