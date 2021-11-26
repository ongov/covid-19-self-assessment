import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const RespiratoryExposure = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q10.yes} noLink={logic.q10.no}>
    <h2>Au cours des 14 derniers jours, avez-vous été en contact physique étroit avec une personne qui : </h2>
    <div className="ontario-bulleted-list">
      <span className="ontario-bullet"> • </span>{" "}
      <span className="ontario-list-item">
        est actuellement malade et présente une nouvelle toux, de la fièvre, des difficultés respiratoires ou d’autres
        symptômes associés à la COVID-19?
      </span>
      <div className="ontario-margin-top-8-! ontario-margin-bottom-4-!">
        <span className="ontario-margin-right-16-!">&nbsp;</span>ou
      </div>
      <span className="ontario-bullet"> • </span>
      <span className="ontario-list-item">est rentrée de l’étranger au cours des deux dernières semaines?</span>
    </div>
    <p className="ontario-margin-top-32-!">Par contact physique étroit, on entend :</p>
    <ul>
      <li>être à moins de 2 mètres dans la même pièce, le même espace de travail ou la même zone</li>
      <li>vivre dans la même demeure</li>
      <li>être dans la même classe</li>
    </ul>
  </QuestionTemplate>
)

export default RespiratoryExposure
