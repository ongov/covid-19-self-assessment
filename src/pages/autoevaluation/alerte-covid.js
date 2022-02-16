import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import ProgressBar from "../../components/progress-bar"
import { logic } from "../../shared"

export default () => (
  <QuestionTemplate lang="fr" yesLink={logic.q7.yes} noLink={logic.q7.no}>
    <h2>
      Au cours des 10 derniers jours, avez-vous reçu une notification d’exposition envoyée par l’application Alerte
      COVID sur votre cellulaire?
    </h2>
    <p>Si vous avez déjà fait un test de dépistage PCR et que le résultat était négatif, répondre « Non ».</p>

    <ProgressBar progress={70} />
  </QuestionTemplate>
)
