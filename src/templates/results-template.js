import React, { useContext, useEffect } from "react"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLinks from "../components/social-links"
import CalloutFeedback from "../components/callout-feedback"
import CalloutSubmissionSuccess from "../components/callout-submission-success"
import TimeStamp from "../components/results-timestamp"
import ButtonFindCentre from "../components/button-find-centre"
import SaveToPDFButton from "../components/save-to-pdf-button"

import { general } from "../localized_content"
import { GlobalDispatchContext, GlobalStateContext } from "../context/global-context-provider"

import "../stylesheets/callouts.css"
import "../stylesheets/results.css"
import "../stylesheets/pdf-styles.css"

const ResultsTemplate = ({ lang, showFindAssessmentCentres = false, elToPrintRef, children }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    dispatch({ type: "SAT_DONE" })
  }, [])

  return (
    <div ref={elToPrintRef}>
      <Layout lang={lang} isResultsPage>
        <SEO lang={lang} />
        {state.contact_form_submitted_ok && <CalloutSubmissionSuccess lang={lang} />}
        <div className="ontario-results__callout">
          <div className="ontario-row">
            <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
              <div className="ontario-icon__clipboard ontario-hide-for-print" />
            </div>
            <div className="ontario-small-10 ontario-medium-11 ontario-large-9 ontario-end ontario-columns">
              <h1>{general[lang].resultsTitle}</h1>

              <TimeStamp lang={lang} />

              <button
                className="ontario-button--tertiary ontario-form--link backBtn"
                tabIndex="0"
                type="button"
                onClick={() => {
                  dispatch({ type: "SAT_BACK_BUTTON_PRESSED" })
                  navigate(-1)
                }}
              >
                <i className="ontario-icon__back-blue" aria-hidden="true" />
                {` ${general[lang].backButtonText}`}
              </button>
            </div>
          </div>
        </div>
        <div className="ontario-results__callout__arrow-down" />
        <SkipNavContent>{children}</SkipNavContent>
        <div className="ontario-row ontario-results__content">
          <div className="ontario-large-1 ontario-columns ontario-show-for-large-only">&nbsp;</div>
          <div className="ontario-small-12 ontario-large-10 ontario-end ontario-columns">
            <div className="ontario-row ontario-row--collapse ontario-hide-for-print">
              {showFindAssessmentCentres && (
                <div className="ontario-small-12 ontario-medium-6 ontario-large-5 ontario-columns">
                  <ButtonFindCentre lang={lang} />
                </div>
              )}
              <div className="ontario-small-12 ontario-medium-6 ontario-large-7 ontario-columns">
                <SaveToPDFButton lang={lang} ref={elToPrintRef} />
              </div>
            </div>
          </div>
        </div>
        <div className="ontario-row ontario-results__content">
          <div className="ontario-large-1 ontario-columns ontario-show-for-large-only">
            <div className="ontario-infographic-number">&nbsp;</div>
          </div>
          <div className="ontario-small-12 ontario-large-10 ontario-end ontario-columns ontario-margin-bottom-24-!">
            <CalloutFeedback lang={lang} />
            <SocialLinks lang={lang} />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ResultsTemplate
