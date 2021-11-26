import React, { forwardRef, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import CalloutCovidApp from "../../components/callout-covid-app"

const lang = "en"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate-home"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2 className="ontario-results--subtitle">
          You <strong>must stay at home for 14 days</strong> immediately after your return to Canada.{" "}
        </h2>{" "}
        <div className="ontario-margin-top-40-! ontario-hide-for-print">
          <SaveToPDFButton ref={ref} lang={lang} />
        </div>
        <div className="ontario-hide-for-print">
          <p>On this page:</p>
          <ol>
            <li>
              <AnchorLink to="/self-assessment/r5#stay-at-home">Stay at home for 14 days</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/self-assessment/r5#monitor-your-health">Monitor your health</AnchorLink>
            </li>
          </ol>

          <CalloutCovidApp lang="en" />
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="stay-at-home">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print ontario-infographic-number">1.</span> Stay at home for 14 days
        </h3>
        <p className="ontario-first-line">
          This is called <strong>self-isolation</strong>.
        </p>
        <p>
          You could be carrying the virus without knowing it and spread it to people in your community.{" "}
          <strong>Do not go into public spaces unless it is for a critical reason</strong> (like a medical emergency).
        </p>

        <h4>Face coverings and masks </h4>
        <ul>
          <li>use one when you cannot keep a distance from people (like when visiting a hospital) </li>
          <li>cover both your mouth and nose</li>
          <li>
            <strong>do not</strong> touch it without washing or sanitizing your hands first
          </li>
          <li>
            <a href="https://www.ontario.ca/page/face-coverings-and-face-masks" target="_blank" rel="noopener">
              learn how to wear and use face coverings and masks{" "}
              <span className="ontario-show-for-sr">This link will open in a new window.</span>
            </a>
          </li>
        </ul>

        <h4>Groceries, medications, and essential items</h4>
        <ul>
          <li>get someone who does not live with you to deliver these items</li>
          <li>place orders over the phone or online</li>
          <li>
            <strong>do not</strong> go into stores or supermarkets in person
          </li>
        </ul>

        <h4>Work and workspaces</h4>
        <ul>
          <li>call your manager and occupational health and safety representative</li>
          <li>let them know you have been instructed to self-isolate</li>
          <li>work from home (if possible)</li>
          <li>
            if you cannot work from home, discuss your next steps with them to make sure you and your company are taking
            the right safety precautions
          </li>
        </ul>

        <h4>Roommates and family you live with</h4>
        <ul>
          <li>
            they <strong>do not</strong> need to self-isolate, but monitor themselves for symptoms{" "}
          </li>
          <li>stay in a room away from them (if possible)</li>
          <li>use a different bathroom (if possible)</li>
          <li>keep a distance of at least 2 metres in shared spaces like kitchens or living rooms</li>
          <li>wear a face covering or mask when you are around them </li>
        </ul>

        <h4>People you do not live with</h4>
        <ul>
          <li>only contact them over the phone or online</li>
          <li>
            <strong>do not</strong> invite them over or socialize in person
          </li>
        </ul>

        <p className="ontario-margin-top-32-!">
          <a href="https://www.ontario.ca/page/covid-19-stop-spread#section-3" rel="noopener" target="_blank">
            Get more tips on how to safely self-isolate{" "}
            <span className="ontario-show-for-sr">This link will open in a new window.</span>
          </a>{" "}
        </p>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" aria-hidden="true" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor-your-health">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print ontario-infographic-number">2.</span> Monitor your health
        </h3>
        <p className="ontario-first-line">
          Pay attention to your health and note if anything changes. Visit an assessment centre for a COVID-19 test if
          you:
        </p>
        <ul>
          <li>have symptoms</li>
          <li>
            were told to get tested by your local public health unit or your health care provider (doctor, primary care
            physician)
          </li>
        </ul>

        <p className="ontario-margin-top-32-!">
          <strong>Do not</strong> get a test if you do not have symptoms.
        </p>

        <h4>Roommates and family you live with</h4>
        <ul>
          <li>they should note any changes to their health too (this is called self-monitoring) </li>
          <li>young children might have less specific symptoms like sluggishness or lack of appetite </li>
        </ul>
      </div>
    </div>
  </>
))

const R5 = () => {
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} showContactForm={false} showFindAssessmentCentres={true} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R5
