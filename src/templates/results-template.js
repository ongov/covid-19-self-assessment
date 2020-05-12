import React, { useContext, useEffect } from "react"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLinks from "../components/social-links"
import ContactForm from "../components/contact-form"
import CalloutFeedback from "../components/callout-feedback"
import CalloutSubmissionSuccess from "../components/callout-submission-success"
import { general } from "../localized_content"
import { GlobalDispatchContext, GlobalStateContext } from "../context/global-context-provider"

import "../stylesheets/callouts.css"
import "../stylesheets/results.css"

const ResultsTemplate = ({ lang, showContactForm = true, children }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => dispatch({ type: "SAT_DONE" }), [])

  return (
    <Layout lang={lang} isResultsPage>
      <SEO lang={lang} />
      {state.contact_form_submitted_ok && <CalloutSubmissionSuccess lang={lang} />}
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
      <SkipNavContent>{children}</SkipNavContent>
      <div className="ontario-row ontario-results__content">
        <div className="ontario-large-1 ontario-columns ontario-show-for-large-only">&nbsp;</div>
        <div className="ontario-small-12 ontario-large-10 ontario-end ontario-columns">
          {showContactForm && <ContactForm lang={lang} />}
          <CalloutFeedback lang={lang} />
          <SocialLinks lang={lang} />
        </div>
      </div>
    </Layout>
  )
}

export default ResultsTemplate
