import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const RespiratoryExposure = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q10.yes} noLink={logic.q10.no}>
    <h2>Au cours des 14 derniers jours, avez-vous été en contact physique étroit avec une personne qui : </h2>
    <div className="ontario-bulleted-list">
      <span className="ontario-bullet"> • </span>{" "}
      <span className="ontario-list-item">est actuellement malade et présente une nouvelle toux, fait de la fièvre ou a de la difficulté à respirer? </span>
      <div className="ontario-margin-top-8-! ontario-margin-bottom-4-!">
        <span className="ontario-margin-right-16-!">&nbsp;</span>ou
      </div>
      <span className="ontario-bullet"> • </span>
      <span className="ontario-list-item">qui est revenue d’un séjour à l’extérieur du Canada au cours des 2 dernières semaines?  </span>
    </div>
    <p className="ontario-margin-top-32-!">
      Par contact physique étroit, on entend :
    </p>
    <ul>
      <li>avoir une conversation face à face pendant 15 minutes </li>
      <li>se trouver dans la même pièce pendant deux heures </li>
      <li>vivre dans la même demeure </li>
      <li>travailler au même endroit</li>
    </ul>
  </QuestionTemplate>
)

export default RespiratoryExposure
