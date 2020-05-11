import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Q8 = () => (
  <QuestionTemplate lang="en" yesLink={logic.q8.yes} noLink={logic.q8.no}>
    <h2>Are you in close contact with a person who either:</h2>
    <div className="ontario-bulleted-list">
      <span className="ontario-bullet"> • </span>{" "}
      <span className="ontario-list-item">is sick with new respiratory symptoms?</span>
      <div className="ontario-margin-top-8-! ontario-margin-bottom-4-!">
        <span className="ontario-margin-right-16-!">&nbsp;</span>or
      </div>
      <span className="ontario-bullet"> • </span>
      <span className="ontario-list-item">recently travelled outside of Canada?</span>
    </div>
    <p className="ontario-margin-top-32-!">Respiratory symptoms can include fever, cough or difficulty breathing.</p>
  </QuestionTemplate>
)

export default Q8
