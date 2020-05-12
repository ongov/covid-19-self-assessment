import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const HealthWorker = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q4.yes} noLink={logic.q4.no}>
    <h2>
      Au cours des 14 derniers jours, est-ce que vous ou une personne avec qui vous habitez avez prodigué des soins de santé à quelqu’un? {" "}
    </h2>
    <p>Les personnes qui prodiguent des soins de santé peuvent inclure les suivantes :  </p>
    <ul>
      <li>médecins et personnel infirmier</li>
      <li>soignants</li>
      <li>préposés aux services de soutien à la personne (qui aident les gens à leur domicile) </li>
      <li>premiers répondants</li>
      <li>ceux qui prennent soin de membres de la famille malades ou plus âgés </li>
      <li>ceux qui travaillent dans les hôpitaux, les établissements de soins de longue durée ou les maisons de retraite </li>
      <li>les bénévoles dans un établissement de soins de santé</li>
    </ul>
  </QuestionTemplate>
)

export default HealthWorker
