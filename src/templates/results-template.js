import React, { useContext, useEffect } from "react"
import { navigate } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLinks from "../components/social-links"
import { general } from "../localized_content"
import { GlobalDispatchContext } from "../context/global-context-provider"

import "../stylesheets/callouts.css"
import "../stylesheets/results.css"

const ResultsTemplate = ({ lang, resultsContent }) => {
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => dispatch({ type: "SAT_DONE" }), [])

  return (
    <Layout lang={lang} isResultsPage>
      <SEO lang={lang} />
      <div className="ontario-results__callout">
        <div className="ontario-row">
          <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
            <div className="ontario-icon__clipboard"></div>
          </div>
          <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
            <h1>{general[lang].resultsTitle}</h1>
            <button
              className="ontario-button--tertiary ontario-form--link backBtn"
              tabIndex="0"
              type="button"
              onClick={() => {
                dispatch({ type: "SAT_BACK_BUTTON_PRESSED" })
                navigate(-1)
              }}
            >
              <i className="ontario-icon ontario-icon__back-blue" aria-hidden="true"></i>
              {` ${general[lang].backButtonText}`}
            </button>
          </div>
        </div>
      </div>
      <div className="ontario-results__callout__arrow-down"></div>
      {resultsContent}
      <div className="ontario-row ontario-results__content">
        <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
        <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
          <div className="ontario-row">
            <div className="ontario-small-12 ontario-columns">
              <hr className="ontario-hr-short" />
            </div>
          </div>
          <SocialLinks lang={lang} />
        </div>
      </div>
    </Layout>
  )
}

export default ResultsTemplate
