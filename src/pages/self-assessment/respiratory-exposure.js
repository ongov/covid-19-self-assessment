import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const RespiratoryExposure = () => (
  <QuestionTemplate lang="en" yesLink={logic.q10.yes} noLink={logic.q10.no}>
    <h2>In the last 14 days, have you been in close physical contact with a person who either: </h2>
    <div className="ontario-bulleted-list">
      <span className="ontario-bullet"> • </span>{" "}
      <span className="ontario-list-item">is currently sick with a new cough, fever, or difficulty breathing? </span>
      <div className="ontario-margin-top-8-! ontario-margin-bottom-4-!">
        <span className="ontario-margin-right-16-!">&nbsp;</span>or
      </div>
      <span className="ontario-bullet"> • </span>
      <span className="ontario-list-item">returned from outside of Canada in the last 2 weeks?</span>
    </div>
    <p className="ontario-margin-top-32-!">Close physical contact means:</p>
    <ul>
      <li>a face-to-face conversation for 15 minutes</li>
      <li>being in the same room for 2 hours </li>
      <li>living in the same home</li>
      <li>working in the same workplace</li>
    </ul>
  </QuestionTemplate>
)

export default RespiratoryExposure
