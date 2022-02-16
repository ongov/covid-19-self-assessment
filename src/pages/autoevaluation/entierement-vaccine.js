import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import ProgressBar from "../../components/progress-bar"
import { logic } from "../../shared"

const CovidExposure = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q1.yes} noLink={logic.q1.no}>
    <h2>Est-ce que l’un de ces énoncés s’applique à votre situation?</h2>  
    <ul>
      <li><strong>Je suis entièrement vaccinée/vacciné contre la COVID-19</strong> (il s’est écoulé 14 jours ou plus depuis votre dernière dose d’une série d’un vaccin à deux doses ou à une dose)</li>
      <li><strong>J’ai reçu un résultat positif à un test de dépistage de la COVID-19</strong> au cours des 90 derniers jours (et j’ai depuis été déclaré rétablie/rétabli)</li>
    </ul> 
    <p>La raison pour laquelle nous posons cette question est de vous donner un résultat avec des instructions d'isolement précises. Nous ne recueillons pas de renseignements personnels sur la santé dans cet outil.</p>

    <ProgressBar progress={10} />
  </QuestionTemplate>
)

export default CovidExposure
