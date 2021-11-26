import React, { useContext, useEffect } from "react"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../components/layout"
import { GlobalDispatchContext } from "../context/global-context-provider"
import "../stylesheets/results.css"

const SeverelySymptomaticTemplate = ({ children, lang }) => {
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    dispatch({ type: "SAT_DONE" })
  }, [])

  return (
    <Layout lang={lang} hideFooter isResultsPage>
      <SkipNavContent>
        <div className="ontario-results__callout ontario-results__callout-alert">
          <div className="ontario-row">
            <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
              <div className="ontario-icon__clipboard ontario-icon__clipboard-red"></div>
            </div>
            {children}
          </div>
        </div>
      </SkipNavContent>
    </Layout>
  )
}

export default SeverelySymptomaticTemplate
