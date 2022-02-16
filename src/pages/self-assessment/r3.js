import React, { forwardRef, useRef } from "react"
import { general } from "../../localized_content"

import ProgressBar from "../../components/progress-bar"
import ResultsTemplate from "../../templates/results-template"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import PrintPageButton from "../../components/print-page-button"
import CalloutGetVaccine from "../../components/callout-get-vaccine"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate" />
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2 className="ontario-results--subtitle">
          Based on your answers, you <strong>do not need to self-isolate or get tested</strong>.
        </h2>
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

        <ProgressBar progress={100} />

        <p className="ontario-results--subtitle">
          <a href="https://covid-19.ontario.ca/zones-and-restrictions" target="_blank" rel="noopener">
            Get the latest restriction and closure information.
          </a>
        </p>

        <div className="ontario-row ontario-row--collapse ontario-margin-top-40-! ontario-hide-for-print">
          <div className="ontario-small-12 ontario-columns">
            <SaveToPDFButton ref={ref} lang={lang} classname="print-save-button" />
          </div>
          <div className="ontario-small-12 ontario-columns">
            <PrintPageButton lang={lang} classname="print-save-button" />
          </div>
        </div>

        <div className="ontario-hide-for-print">
          <CalloutGetVaccine lang="en" />
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="your-health">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">&nbsp;</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Your health and testing</h3>
        <p>
          Pay attention to your health and note if anything changes. This is called{" "}
          <a
            href="https://www.publichealthontario.ca/-/media/documents/ncov/factsheet-covid-19-self-monitor.pdf?la=en"
            target="_blank"
            rel="noopener"
          >
            self-monitoring
          </a>
          .
        </p>

        <h4>
          People who are “at risk” should pay extra close attention to their health and be extra cautious when outside
          their home. This includes people:
        </h4>
        <ul>
          <li>older than 70 </li>
          <li>with an existing health condition</li>
          <li>with a compromised (weakened) immune system</li>
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
          <li>wear one in public indoor spaces, like stores and transit vehicles</li>
          <li>
            wear one outdoors when you cannot keep a distance of at least 2 metres from people you do not live with
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

        <h4>Getting tested</h4>
        <p>There are certain situations for when you should get a COVID-19 test.</p>
        <div className="ontario-row ontario-hide-for-print">
          <div className="ontario-small-12 ontario-columns">
            <a
              href="https://covid-19.ontario.ca/covid-19-test-and-testing-location-information"
              className="ontario-button ontario-button--primary"
            >
              Find out about testing
            </a>
          </div>
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

const R3 = () => {
  const lang = "en"
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R3
