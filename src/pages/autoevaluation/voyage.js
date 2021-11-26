import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Travel = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q14.yes} noLink={logic.q14.no}>
    <h2>Avez-vous voyagé à l’extérieur du Canada au cours des 14 derniers jours?</h2>
    <p>Sont exclus les travailleurs essentiels qui traversent de façon régulière la frontière Canada-États-Unis. </p>
  </QuestionTemplate>
)

export default Travel
