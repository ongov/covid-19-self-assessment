import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { GlobalDispatchContext } from "../../context/global-context-provider"
import "../../stylesheets/accordion.css"
import "../../stylesheets/results.css"

const R1 = () => {
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => dispatch({ type: "SAT_DONE" }), [])

  return (
    <Layout lang="en" hideFooter isResultsPage>
      <div className="ontario-results__callout ontario-results__callout-alert">
        <div className="ontario-row">
          <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
            <div className="ontario-icon__clipboard ontario-icon__clipboard-red"></div>
          </div>
          <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
            <h1>COVID-19 self-assessment result</h1>
            <p>Call 911 or go directly to your nearest emergency department.</p>
            <Link to="/self-assessment" className="ontario-form--link backBtn" tabIndex="0">
              Take the self-assessment again.
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default R1
