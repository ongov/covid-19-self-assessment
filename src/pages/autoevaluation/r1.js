import React from "react"
import { Link } from "gatsby"
import SeverelySymptomaticTemplate from "../../templates/severely-symptomatic-template"

const R1 = () => (
  <SeverelySymptomaticTemplate lang="fr">
    <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
      <h1>Résultat de l’autoévaluation pour la COVID-19</h1>
      <p>Composez le 911 ou présentez-vous directement au service des urgences le plus près.</p>
      <Link to="/autoevaluation" className="ontario-form--link backBtn" tabIndex="0">
        Faites l’auto-évaluation de nouveau.
      </Link>
    </div>
  </SeverelySymptomaticTemplate>
)

export default R1
