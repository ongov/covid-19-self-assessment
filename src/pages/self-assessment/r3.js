import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"

const lang = "en"

const resultsContent = (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-icon__self-isolate"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2>
          Based on your answers, we recommend that you{" "}
          <strong>continue staying home and limiting your time outside</strong> because you do not seem to have symptoms
          or be part of an at-risk group.{" "}
        </h2>

        <p>
          You <strong>do not</strong> need to contact a doctor or Telehealth Ontario for an assessment at this time.
        </p>
        <p>On this page:</p>
        <ol>
          <li>
            <AnchorLink to="/self-assessment/r3#avoid-going-out">Avoid going out in public</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r3#monitor-your-health">Monitor your health</AnchorLink>
          </li>
        </ol>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="avoid-going-out">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Avoid going out in public</h3>
        <p className="ontario-first-line">
          This is called <strong>physical distancing</strong>.
        </p>
        <p>Limit your time outside and with people you do not live with to slow the spread of the virus.</p>
        <h4>Leaving your home</h4>
        <ul>
          <li>stay home as much as possible</li>
          <li>avoid public transit unless you must use it</li>
          <li>work from home (if possible) </li>
        </ul>

        <h4>Grocery stores, pharmacies, and banks </h4>
        <ul>
          <li>go grocery shopping once a week or less</li>
          <li>only visit pharmacies and banks when absolutely necessary</li>
          <li>place orders over the phone or online</li>
        </ul>

        <h4>Walks and exercise with people you live with</h4>
        <ul>
          <li>you can go on neighbourhood walks</li>
          <li>you can jog or bike around</li>
          <li>keep a distance of at least 6 feet (2 metres) from people you do not live with</li>
        </ul>

        <h4>In public spaces</h4>
        <ul>
          <li>avoid large groups</li>
          <li>keep a distance of at least 6 feet (2 metres) from people you do not live with in parks and stores</li>
        </ul>

        <h4>People you do not live with</h4>
        <ul>
          <li>only contact them over the phone or online</li>
          <li>
            <strong>do not</strong> invite them over or socialize in person
          </li>
        </ul>

        <div className="ontario-margin-top-32-!">
          Learn more about:
          <ul>
            <li>
              {" "}
              <a
                href="https://www.ontario.ca/page/covid-19-stop-spread#physical-distancing"
                rel="noopener"
                target="_blank"
              >
                physical distancing <span className="ontario-show-for-sr">This link will open in a new window.</span>
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://www.ontario.ca/page/covid-19-stop-spread#section-1" rel="noopener" target="_blank">
                reducing your exposure to the virus{" "}
                <span className="ontario-show-for-sr">This link will open in a new window.</span>
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="ontario-row">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" aria-hidden="true" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor-your-health">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Monitor your health</h3>
        <p className="ontario-first-line">
          <Link to="/self-assessment">Take this self-assessment again</Link> if you:
        </p>
        <ul>
          <li>start feeling sick (difficulty breathing, fever, or new cough)</li>
          <li>come into close physical contact with someone who has difficulty breathing, a fever or a new cough </li>
        </ul>

        <h4>Roommates and family you live with</h4>
        <ul>
          <li>they should monitor their health too</li>
          <li>young children might have less specific symptoms like sluggishness or lack of appetite </li>
        </ul>
      </div>
    </div>
  </>
)

const R3 = () => (
  <ResultsTemplate lang={lang} showContactForm={false}>
    {resultsContent}
  </ResultsTemplate>
)

export default R3
