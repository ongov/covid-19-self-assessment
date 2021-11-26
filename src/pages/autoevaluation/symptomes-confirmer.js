import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

export default () => (
  <QuestionTemplate lang="fr" yesLink={logic.q16.yes} noLink={logic.q16.no}>
    <h2>Vos symptômes sont-ils normaux pour vous (en lien avec une cause ou un problème de santé connus)?</h2>
    <p>
      Vous devriez parler à un médecin si vous vous sentez malade ou si vous pensez avoir un rhume ou une grippe, car
      les symptômes sont similaires à ceux de la COVID-19.
    </p>
  </QuestionTemplate>
)
