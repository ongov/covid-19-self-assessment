import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Q8 = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q8.yes} noLink={logic.q8.no}>
    <h2>Êtes-vous en contact étroit avec une personne qui :</h2>
    <div className="ontario-bulleted-list">
      <span className="ontario-bullet"> • </span>{" "}
      <span className="ontario-list-item">présente de nouveaux symptômes respiratoires?</span>
      <div className="ontario-margin-top-8-! ontario-margin-bottom-4-!">
        <span className="ontario-margin-right-16-!">&nbsp;</span>ou
      </div>
      <span className="ontario-bullet"> • </span>
      <span className="ontario-list-item">a récemment voyagé à l'étranger?</span>
    </div>
    <p className="ontario-margin-top-32-!">
      Les symptômes respiratoires peuvent comprendre de la fièvre, de la toux ou des difficultés respiratoires.
    </p>
  </QuestionTemplate>
)

export default Q8
