import React, { forwardRef, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"
import ButtonFindCentre from "../../components/button-find-centre"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import CalloutCovidApp from "../../components/callout-covid-app"

const lang = "en"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate-home"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content ontario-margin-bottom-0-!">
        <h2 className="ontario-results--subtitle">
          Based on your answers, we recommend that you{" "}
          <strong>pay extra attention to your health and note if anything changes</strong> because you were in close
          physical contact with someone who has symptoms or recently travelled.
        </h2>
        <p className="ontario-results--subtitle">
          Our recommendations continue to evolve as we learn more about the virus.
        </p>
        <p className="ontario-results--subtitle">
          Check with your{" "}
          <a
            href="http://www.health.gov.on.ca/en/common/system/services/phu/locations.aspx"
            target="_blank"
            rel="noopener"
          >
            local public health unit <span className="ontario-show-for-sr">This link will open in a new window.</span>
          </a>{" "}
          to find out if there are any other actions you need to take.
        </p>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <div className="ontario-row ontario-margin-top-16-!">
          <div className="ontario-small-12 ontario-medium-6 ontario-large-7 ontario-end ontario-columns">
            <SaveToPDFButton ref={ref} lang={lang} />
          </div>
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <p>On this page:</p>
        <ol>
          <li>
            <AnchorLink to="/self-assessment/r6#monitor">Monitor your health for 14 days </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r6#activities">Going to work, school, or shopping </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r6#healthy">Staying healthy and social gatherings</AnchorLink>
          </li>
        </ol>

        <CalloutCovidApp lang="en" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">1.</span> Monitor your health for 14 days
        </h3>
        <p className="ontario-first-line">
          Take note of any changes to your health. This is called self-monitoring. The 14 days start from the date you
          made close physical contact with that person.
        </p>

        <p>
          You can go and do your normal activities during the 14 days <strong>if you do not have symptoms</strong>.
        </p>

        <h4>If you start experiencing symptoms of COVID-19</h4>
        <ul>
          <li>self-isolate (stay home) and take this self-assessment again</li>
          <li>only leave to get tested at an assessment centre</li>
        </ul>

        <h4>Roommates and family you live with</h4>
        <ul>
          <li>
            they should check with the local public health unit to find out if there are any other actions they need to
            take{" "}
          </li>
          <li>they should note any changes to their health</li>
          <li>young children might have less specific symptoms like sluggishness or lack of appetite   </li>
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

    <div className="ontario-row ontario-results__content" id="activities">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">2.</span> Going to work, school, or shopping
        </h3>

        <h4>Shops and stores</h4>
        <ul>
          <li>use curbside pickup or get items delivered as much as you can</li>
          <li>wear a face covering or mask if you go into retail or grocery stores</li>
          <li>get groceries and do errands once a week or less and at off-peak times</li>
          <li>keep a distance of at least 2 metres from people who are not in your household or social circle</li>
        </ul>

        <h4>Work and workspaces</h4>
        <ul>
          <li>work from home or reduce the number of days you are at work in person (if possible)</li>
          <li>
            if you cannot work from home, make sure you and your company are taking the right safety precautions to
            avoid the spread of the virus
          </li>
          <li>discuss with your manager and occupational health and safety representative</li>
        </ul>

        <h4>Walks, exercise, parks, and squares</h4>
        <ul>
          <li>you can go on walks, runs, and bike rides</li>
          <li>you can take the dog out and have picnics and barbeques</li>
          <li>keep a distance of at least 2 metres from people who are not in your household or social circle</li>
        </ul>

        <p className="ontario-margin-top-40-!">
          <a href="https://www.ontario.ca/page/reopening-ontario-stages#section-3" target="_blank" rel="noopener">
            Learn more about Stage 3 reopening.{" "}
            <span className="ontario-show-for-sr">This link will open in a new window.</span>
          </a>
        </p>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" aria-hidden="true" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="healthy">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">3.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">3.</span> Staying healthy and social gatherings
        </h3>

        <h4>Physical distancing and hand washing</h4>
        <ul>
          <li>keep a distance of at least 2 metres from people who are not in your household or social circle</li>
          <li>wash or sanitize your hands often </li>
          <li>
            <a href="https://www.ontario.ca/page/covid-19-stop-spread#section-1" target="_blank" rel="noopener">
              learn how to reduce your exposure to the virus{" "}
              <span className="ontario-show-for-sr">This link will open in a new window.</span>
            </a>
          </li>
        </ul>

        <h4>Face coverings and masks</h4>
        <ul>
          <li>
            wear one in public indoor spaces, like stores and transit vehicles (some regions and communities have made
            this mandatory){" "}
          </li>
          <li>
            wear one outdoors when you cannot keep a distance of at least 2 metres from people who are not in your
            household or social circle{" "}
          </li>
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

        <h4>Social circles</h4>
        <ul>
          <li>choose up to 10 people to form a circle with (including people you live with)</li>
          <li>the 10 of you can interact without physical distancing (like giving hugs, being closer than 2 metres)</li>
          <li>
            you or others in your circle <strong>cannot</strong> be in more than 1 circle
          </li>
          <li>
            <a href="https://www.ontario.ca/page/create-social-circle-during-covid-19" target="_blank" rel="noopener">
              learn how to create a social circle{" "}
              <span className="ontario-show-for-sr">This link will open in a new window.</span>
            </a>
          </li>
        </ul>

        <h4>Social gatherings</h4>
        <ul>
          <li>this includes gatherings in people’s homes and backyards, parks, and other recreational areas</li>
          <li>you can have indoor gatherings with up to 10 people and outdoor gatherings with up to 25 people</li>
          <li>
            <strong>you cannot</strong> combine indoor and outdoor gatherings
          </li>

          <li>
            <strong>you must</strong> keep a distance of at least 2 metres from people who are not in your household or
            social circle{" "}
          </li>
          <li>wear a face covering or mask </li>
        </ul>
      </div>
    </div>
  </>
))

const R6 = () => {
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} showContactForm={false} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R6
