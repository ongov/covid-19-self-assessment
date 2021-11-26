import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Travel = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q9.yes} noLink={logic.q9.no}>
    <h2>Au cours des 14 derniers jours, avez-vous voyagé à l’extérieur du Canada?</h2>
    <p>
      En cas{" "}
      <a
        href="https://voyage.gc.ca/voyage-covid/voyage-restrictions/isolement?_ga=2.136941808.1155910771.1612986876-1649247237.1612986876#exemptions"
        target="_blank"
        rel="noopener"
      >
        d’exemption des exigences de la quarantaine du gouvernement fédéral
      </a>{" "}
      (par exemple, vous êtes complètement vacciné et vous respectez des conditions précises, ou vous êtes un
      travailleur essentiel devant traverser régulièrement la frontière entre le Canada et les États-Unis pour
      travailler), sélectionnez « Non ».
    </p>
  </QuestionTemplate>
)

export default Travel
