import React, { forwardRef, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { general } from "../../localized_content"

import ResultsTemplate from "../../templates/results-template"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import PrintPageButton from "../../components/print-page-button"
import NearbyAssessmentCentres from "../../components/nearby-assessment-centres"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <div>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate-home" />
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content ontario-margin-bottom-0-!">
        <h2 className="ontario-results--subtitle">
          Based on your answers and vaccination status, you <strong>do not need to self-isolate</strong>. However, we
          recommend that you <strong>get a PCR test and monitor your health</strong> because you are a “close contact” of
          someone who currently has COVID-19.
        </h2>
        <p className="ontario-results--subtitle">
          Check with your{" "}
          <a
            href="http://www.health.gov.on.ca/en/common/system/services/phu/locations.aspx"
            target="_blank"
            rel="noopener"
          >
            local public health unit <span className="ontario-show-for-sr">{general[lang].newWindow}</span>
          </a>{" "}
          to find out if there are any other actions you need to take.
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

    <div className="ontario-row ontario-results__content ontario-hide-for-print">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <p className="ontario-margin-top-0-!">On this page:</p>
        <ol>
          <li>
            <AnchorLink to="/self-assessment/r9#get-tested">Get tested</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r9#monitor-your-health">Monitor your health </AnchorLink>
          </li>
        </ol>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="get-tested">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print ontario-infographic-number">1.</span> Get tested
        </h3>

        <p>
          Since you have been exposed to COVID-19, get tested at an assessment centre, participating pharmacy, or participating community lab.
          Rapid antigen/self-test kits tests are only available for those without symptoms or exposure.
        </p>

        <div className="ontario-margin-top-32-!">
          <NearbyAssessmentCentres lang={lang} />
        </div>
        <h4>If you know when you were exposed to a COVID-19-positive person</h4>
        <p>
          Get tested 7 days after being exposed (you <strong>do not</strong> need to stay in isolation during these
          days). Make an appointment and go to the nearest testing location for a COVID-19 test.
        </p>
        <h4>If you do not know when you were exposed to a COVID-19-positive person</h4>
        <p>Make an appointment and go to the nearest testing location for a COVID-19 test as soon as you can.</p>
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
          <span className="ontario-show-for-print ontario-infographic-number">4.</span> Monitor your health
        </h3>
        <p className="ontario-first-line">Our recommendations continue to evolve as we learn more about the virus.</p>
        <p>
          Take note of any changes to your health <strong>for 10 days</strong>. This is called{" "}
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
          <li>only leave to get tested (make an appointment first)</li>
        </ul>

        <h4>Roommates and family you live with</h4>
        <ul>
          <li>
            they <strong>do not</strong> need to self-isolate
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

        <h4>Work and workspaces</h4>
        <ul>
          <li>work from home (if possible)</li>
          <li>
            if you cannot work from home, tell your employer about your “close contact exposure” to make sure you and
            your company are taking the right safety precautions
          </li>
          <li>discuss with your manager and occupational health and safety representative </li>
        </ul>
      </div>
    </div>
  </div>
))

const R9 = () => {
  const lang = "en"
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R9
