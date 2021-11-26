import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const CovidExposure = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q6.yes} noLink={logic.q6.no}>
    <h2>
      Au cours des 10 derniers jours, avez-vous été identifié comme étant un « contact proche » d'une personne qui a
      actuellement le COVID-19?
    </h2>
    <p>Si la santé publique vous a avisé/e que vous n’avez pas besoin de vous isoler, sélectionnez « Non ».</p>
  </QuestionTemplate>
)

export default CovidExposure
