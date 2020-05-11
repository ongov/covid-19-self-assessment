import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Q3 = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q3.yes} noLink={logic.q3.no}>
    <h2>
      Avez-vous travaillé comme soignant, préposé aux services de soutien à la personne ou dans un établissement de
      soins de santé au cours des 14 derniers jours?{" "}
    </h2>
    <p className="ontario-strong-text">
      Ceci inclut la prestation de soins aux personnes présentant ou non des symptômes de la COVID-19.
    </p>
    <p>Par exemple :</p>
    <ul>
      <li>faire du bénévolat dans un établissement de soins de santé</li>
      <li>soutenir les personnes chez elles</li>
      <li>fournir des soins aux membres de la famille</li>
      <li>travailler dans les hôpitaux, les foyers de soins de longue durée ou les maisons de retraite</li>
      <li>les premiers intervenants</li>
    </ul>
  </QuestionTemplate>
)

export default Q3
