import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const CovidExposure = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q8.yes} noLink={logic.q8.no}>
    <h2>
      Au cours des 14 derniers jours, avez-vous été en contact physique étroit avec une personne qui est actuellement
      atteinte de la COVID‑19?
    </h2>
    <p>Ceci comprend la réception d’une notification d’exposition envoyée par l’application Alerte COVID.</p>
    <p>Par contact physique étroit, on entend :</p>
    <ul>
      <li>être à moins de 2 mètres dans la même pièce, le même espace de travail ou la même zone</li>
      <li>vivre dans la même demeure</li>
      <li>se trouver dans la même salle de classe</li>
    </ul>
  </QuestionTemplate>
)

export default CovidExposure
