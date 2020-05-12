import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const CovidExposure = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q8.yes} noLink={logic.q8.no}>
    <h2>Au cours des 14 derniers jours, avez-vous été en contact physique étroit avec une personne ayant reçu un résultat positif au test de dépistage de la COVID-19?</h2>

    <p>Par contact physique étroit, on entend :</p>
    <ul>
      <li>avoir une conversation face à face pendant 15 minutes</li>
      <li>se trouver dans la même pièce pendant deux heures</li>
      <li>vivre dans la même demeure</li>
      <li>travailler au même endroit</li>
    </ul>
  </QuestionTemplate>
)

export default CovidExposure
