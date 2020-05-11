import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Q4 = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q4.yes} noLink={logic.q4.no}>
    <h2>Vivez-vous dans une communauté rurale, isolée, éloignée ou autochtone?</h2>
    <p>C'est le cas, par exemple, des communautés qui :</p>
    <ul>
      <li>se trouvent à la campagne en dehors d'une ville de moins de 1 000 habitants</li>
      <li>ont un 0 (zéro) comme deuxième caractère dans le code postal </li>
      <li>sont accessibles par bateau ou par routes d’hiver</li>
      <li>sont dans une réserve </li>
    </ul>
  </QuestionTemplate>
)

export default Q4
