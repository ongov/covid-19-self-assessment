import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const CrossBorderWorker = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q12.yes} noLink={logic.q12.no}>
    <h2>Franchissez-vous régulièrement la frontière canado-américaine pour le travail? </h2>
  </QuestionTemplate>
)

export default CrossBorderWorker
