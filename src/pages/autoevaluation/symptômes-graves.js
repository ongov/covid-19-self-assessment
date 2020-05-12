import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const SevereSymptoms = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q1.yes} noLink={logic.q1.no}>
    <h2>Présentez-vous actuellement l’un ou l’autre de ces problèmes? Si c’est le cas, composez le 911.</h2>
    <ul>
      <li>
        Difficultés respiratoires graves
        <br />
        <span className="ontario-hint">(effort pour chaque respiration, ne pouvoir s’exprimer qu’avec des mots simples)</span>
      </li>
      <li>
        Fortes douleurs à la poitrine
        <br />
        <span className="ontario-hint">(sensation constante d’oppression ou d’écrasement)</span>
      </li>
      <li>
        Sentiment de confusion, ne pas savoir où vous êtes
      </li>
      <li>Perte de conscience</li>
    </ul>
  </QuestionTemplate>
)

export default SevereSymptoms
