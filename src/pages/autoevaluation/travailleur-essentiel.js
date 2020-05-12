import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const EssentialWorker = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q5.yes} noLink={logic.q5.no}>
    <h2>Êtes-vous un travailleur essentiel au sens où l’entend le gouvernement de l'Ontario? </h2>

    <p>Voici des exemples d’industries comptant des <a href="https://www.ontario.ca/fr/page/liste-des-lieux-de-travail-essentiels" target="_blank" rel="noopener">travailleurs essentiels</a> :</p>
    <ul>
      <li>alimentation</li>
      <li>soins de santé</li>
      <li>construction</li>
      <li>fabrication</li>
      <li>agriculture</li>
    </ul>
  </QuestionTemplate>
)

export default EssentialWorker
