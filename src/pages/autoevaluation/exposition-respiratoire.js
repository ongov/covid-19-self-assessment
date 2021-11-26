import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const RespiratoryExposure = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q8.yes} noLink={logic.q8.no}>
    <h2>Avez-vous été en <a href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#contact" target="_blank" rel="noopener">contact physique étroit</a> (sans porter l’équipement de protection individuelle approprié) avec une personne avec qui vous n'habitez pas et qui : </h2>
    <div className="ontario-bulleted-list">
      <span className="ontario-bullet"> • </span>{" "}
      <span className="ontario-list-item">
        est malade et présente les symptômes associés à la COVID-19 (énumérés ci-dessous) au cours des 10 derniers jours?
      </span>

      <p className="ontario-margin-top-8-! ontario-margin-bottom-8-!">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ou</p>

      <span className="ontario-bullet"> • </span>
      <span className="ontario-list-item">est rentrée de l’étranger au cours des 14 derniers jours?</span>
    </div>
    <p className="ontario-margin-top-32-!">
      <strong>Enfants (17 ans ou moins) :</strong> fièvre et/ou frissons, toux ou toux aboyante, essoufflement, diminution ou perte du goût ou de l'odorat, nausées, vomissements et/ou diarrhée 
    </p>
    <p>
      <strong>Adultes (18 ans ou plus) :</strong> fièvre et/ou frissons, toux ou toux aboyante, essoufflement, diminution ou perte du goût ou de l'odorat, fatigue, douleurs musculaires 
    </p>
    
    <p>Si la personne présentant des symptômes a reçu un vaccin contre la COVID-19 au cours des 48 dernières heures et ressent une fatigue légère, des douleurs musculaires ou articulaires qui ont commencé seulement après la vaccination, sélectionnez « Non ».</p>
  </QuestionTemplate>
)

export default RespiratoryExposure
