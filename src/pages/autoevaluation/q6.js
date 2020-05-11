import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Q6 = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q6.yes} noLink={logic.q6.no}>
    <h2>Avez-vous voyagé à l'extérieur du Canada au cours des 14 derniers jours?</h2>
  </QuestionTemplate>
)

export default Q6
