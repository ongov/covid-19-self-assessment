import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Q1 = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q1.yes} noLink={logic.q1.no}>
    <h2>Présentez-vous l'un des symptômes suivants?</h2>
    <ul>
      <li>
        difficultés respiratoires graves
        <br />
        <span className="ontario-hint">(effort pour chaque respiration, ne peut parler qu'en mots simples)</span>
      </li>
      <li>
        fortes douleurs à la poitrine
        <br />
        <span className="ontario-hint">(sensation constante d'oppression ou d'écrasement)</span>
      </li>
      <li>
        sentiment de confusion
        <br />
        <span className="ontario-hint">(par exemple, ne pas savoir où vous êtes)</span>
      </li>
      <li>perte de la conscience</li>
    </ul>
  </QuestionTemplate>
)

export default Q1
