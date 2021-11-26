import React, { forwardRef, useRef } from "react"
import { general } from "../../localized_content"

import ResultsTemplate from "../../templates/results-template"
import ButtonFindCentre from "../../components/button-find-centre"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import PrintPageButton from "../../components/print-page-button"
import CalloutGetVaccine from "../../components/callout-get-vaccine"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate-home" />
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content ontario-margin-bottom-0-!">
        <h2 className="ontario-results--subtitle">
          Based on your answers, you <strong>do not need to self-isolate or get tested</strong>. However, we recommend
          that you <strong>pay extra attention to your health and note if anything changes</strong> because you were in
          close physical contact with someone who has symptoms or recently travelled.
        </h2>
        <p className="ontario-results--subtitle">
          Follow the advice of your <a href="https://www.health.gov.on.ca/en/common/system/services/phu/locations.aspx" target="_blank" rel="noopener">local public health unit</a> or a health care provider, including what symptoms to monitor for and when to get a COVID-19 test.
        </p>
        <p className="ontario-results--subtitle">
          If you feel sick or not well, please stay
          home. Talk with a doctor if necessary.
        </p>
        <p className="ontario-results--subtitle">
          To protect your community and the health care system,{" "}
          <strong>
            wear a face covering or mask when required, keep a physical distance from others, and wash your hands as
            much as possible.
          </strong>
        </p>
        <p className="ontario-results--subtitle">
          <a href="https://covid-19.ontario.ca/zones-and-restrictions" target="_blank" rel="noopener">
            Get the latest restriction and closure information.
          </a>
        </p>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <div className="ontario-row ontario-row--collapse ontario-margin-top-16-!">
          <div className="ontario-small-12 ontario-columns">
            <SaveToPDFButton ref={ref} lang={lang} classname="print-save-button" />
          </div>
          <div className="ontario-small-12 ontario-columns">
            <PrintPageButton lang={lang} classname="print-save-button" />
          </div>
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <CalloutGetVaccine lang="en" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        &nbsp;
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Your health and testing</h3>
        <p className="ontario-first-line">Our recommendations continue to evolve as we learn more about the virus.</p>
        <p>
          Take note of any changes to your health for <strong>10 days</strong>. This is called{" "}
          <a
            href="https://www.publichealthontario.ca/-/media/documents/ncov/factsheet-covid-19-self-monitor.pdf?la=en"
            target="_blank"
            rel="noopener"
          >
            self-monitoring
          </a>
          . The 10 days start from the date you made close physical contact with that person.
        </p>

        <h4>If you start experiencing symptoms of COVID-19</h4>
        <ul>
          <li>self-isolate (stay home) and take this self-assessment again</li>
          <li>only leave to get tested at an assessment centre, participating pharmacy, or participating community lab (make an appointment first)</li>
        </ul>

        <h4>Roommates and family you live with</h4>
        <ul>
          <li>
            they should check with the local public health unit to find out if there are any other actions they need to
            take{" "}
          </li>
          <li>they should note any changes to their health</li>
        </ul>

        <h4>Physical distancing and hand washing</h4>
        <ul>
          <li>keep a distance of at least 2 metres from people you do not live with</li>
          <li>wash or sanitize your hands often </li>
          <li>
            <a href="https://www.ontario.ca/page/covid-19-stop-spread#section-1" target="_blank" rel="noopener">
              learn how to reduce your exposure to the virus{" "}
              <span className="ontario-show-for-sr">{general[lang].newWindow}</span>
            </a>
          </li>
        </ul>

        <h4>Face coverings and masks</h4>
        <ul>
          <li>wear one in public indoor spaces, like stores and transit vehicles </li>
          <li>
            wear one outdoors when you cannot keep a distance of at least 2 metres from people you do not live with{" "}
          </li>
          <li>cover your mouth, nose, and chin</li>
          <li>
            <strong>do not</strong> touch it without washing or sanitizing your hands first
          </li>
          <li>
            <a href="https://www.ontario.ca/page/face-coverings-and-face-masks" target="_blank" rel="noopener">
              learn how to wear and use face coverings and masks{" "}
              <span className="ontario-show-for-sr">{general[lang].newWindow}</span>
            </a>
          </li>
        </ul>

        <div className="ontario-margin-top-40-! ontario-hide-for-print">
          <ButtonFindCentre lang={lang} />
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" aria-hidden="true" />
      </div>
    </div>
  </>
))

const R6 = () => {
  const lang = "en"
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R6
