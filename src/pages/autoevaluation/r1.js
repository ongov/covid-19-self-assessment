import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../../components/layout"
import { GlobalDispatchContext } from "../../context/global-context-provider"
import "../../stylesheets/accordion.css"
import "../../stylesheets/results.css"

const R1 = () => {
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => dispatch({ type: "SAT_DONE" }), [])

  return (
    <Layout lang="fr" hideFooter isResultsPage>
      <SkipNavContent>
        <div className="ontario-results__callout ontario-results__callout-alert">
          <div className="ontario-row">
            <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
              <div className="ontario-icon__clipboard ontario-icon__clipboard-red"></div>
            </div>
            <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
              <h1>Résultat de l’autoévaluation pour la COVID-19</h1>
              <p>Composez le 911 ou présentez-vous directement au service des urgences le plus près.</p>
              <Link to="/autoevaluation" className="ontario-form--link backBtn" tabIndex="0">
                Faites l’auto-évaluation de nouveau.
              </Link>
            </div>
          </div>
        </div>
      </SkipNavContent>
    </Layout>
  )
}

export default R1
