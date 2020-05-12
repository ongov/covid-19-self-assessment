import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const CongregateSetting = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q6.yes} noLink={logic.q6.no}>
    <h2>Au cours des 14 derniers jours, avez-vous habité ou travaillé dans l’un ou l’autre de ces endroits?</h2>
    <ul>
      <li>Hôpitaux</li>
      <li>Établissement de soins de longue durée ou maison de retraite</li>
      <li>Refuge pour sans-abri</li>
      <li>Prison ou établissement correctionnel</li>
      <li>Foyer de groupe</li>
      <li>Logement communautaire d’aide à la vie autonome</li>
      <li>Milieu lié à un handicap</li>
      <li>Maison de soins palliatifs</li>
      <li>Centre de réadaptation</li>
      <li>Service de garde pour travailleurs essentiels</li>
    </ul>
  </QuestionTemplate>
)

export default CongregateSetting
