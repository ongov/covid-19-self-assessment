import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const RiskFactors = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q7.yes} noLink={logic.q7.no}>
    <h2>Faites-vous partie de l’un ou l’autre de ces groupes à risque?</h2>
    <ul>
      <li>
        Je reçois des traitements qui compromettent (affaiblissent) mon système immunitaire <br />
        <span className="ontario-hint">(par exemple, chimiothérapie, médicament pour greffés, corticostéroïdes, inhibiteurs du {" "}<abbr title="facteur de nécrose tumorale">TNF</abbr>)</span>
      </li>
      <li>
        J’ai un problème de santé qui compromet (affaiblit) mon système immunitaire
        <br />
        <span className="ontario-hint">(par exemple, lupus, polyarthrite rhumatoïde ou autre trouble du système immunitaire)</span>
      </li>
      <li>
        Je souffre d’une maladie chronique
        <br />
        <span className="ontario-hint">
          (par exemple, diabète, emphysème, asthme, problèmes cardiaques, <abbr>MPOC</abbr>)
        </span>
      </li>
      <li>
          Je me rends régulièrement à l’hôpital ou dans un établissement de soins de santé pour recevoir un traitement<br/>
          <span className="ontario-hint">(par exemple, dialyse, opération, traitement contre le cancer)</span>
      </li>
    </ul>
  </QuestionTemplate>
)

export default RiskFactors
