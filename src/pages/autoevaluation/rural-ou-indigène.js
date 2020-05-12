import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const RuralOrIndigenous = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q13.yes} noLink={logic.q13.no}>
    <h2>Habitez-vous dans une collectivité rurale, éloignée, isolée ou autochtone?</h2>
    <p>Voici des exemples : </p>
    <ul>
      <li>collectivités à l’extérieur d’une municipalité de moins de 1 000 habitants</li>
      <li>collectivités accessibles par bateau ou routes d’hiver</li>
      <li>le deuxième caractère de votre code postal est 0 (zéro)</li>
      <li>réserves</li>
    </ul>
  </QuestionTemplate>
)

export default RuralOrIndigenous
