import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Q5 = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q5.yes} noLink={logic.q5.no}>
    <h2>L'une des situations suivantes s'applique-t-elle à vous? </h2>
    <ul>
      <li>J’ai 65 ans ou plus </li>
      <li>
        J'ai une maladie qui affecte mon système immunitaire <br />
        <span className="ontario-hint">(par exemple, le VIH/sida, le lupus, d'autres maladies auto-immunes)</span>
      </li>
      <li>
        Je souffre d'une maladie chronique
        <br />
        <span className="ontario-hint">(par exemple, le diabète, l'emphysème, l'asthme, les problèmes cardiaques)</span>
      </li>
      <li>
        Je suis un traitement qui affecte mon système immunitaire
        <br />
        <span className="ontario-hint">
          (par exemple, la chimiothérapie, les corticostéroïdes, les inhibiteurs du{" "}
          <abbr title="facteur de nécrose tumorale">TNF</abbr>)
        </span>
      </li>
    </ul>
  </QuestionTemplate>
)

export default Q5
