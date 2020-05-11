import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"

const resultsContent = (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-icon__self-isolate-home"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2>You should stay at home and monitor your health because you are part of an at-risk group.</h2>
        <p>
          You <strong>do not</strong> need to contact a doctor or Telehealth Ontario for an assessment.{" "}
        </p>
        <ol>
          <li>
            <AnchorLink to="/self-assessment/r4#stay-at-home">Stay at home</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r4#monitor-your-health">Monitor your health</AnchorLink>
          </li>
        </ol>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="stay-at-home">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Stay at home</h3>
        <p className="ontario-first-line">
          This is called <strong>self-isolation</strong>.
        </p>
        <p>You should do this to protect yourself because you said one of the following applies to you:</p>
        <ul>
          <li>are 65 years old or older </li>
          <li>have a condition that affects your immune system (for example, HIV/AIDS)</li>
          <li>have a chronic health condition (for example, diabetes, heart condition)</li>
          <li>are getting treatment that affects your immune system (for example, chemotherapy)</li>
        </ul>
        <h4>Leaving your home</h4>
        <ul>
          <li>
            <strong>only leave your home for critical reasons</strong> (like a medical emergency)
          </li>
        </ul>

        <h4>COVID-19 test</h4>
        <ul>
          <li>
            <strong>do not</strong> go into a hospital or clinic to get a COVID-19 test unless you are asked to by a
            doctor or health care provider
          </li>
        </ul>

        <h4>Groceries, medications and essential items</h4>
        <ul>
          <li>get someone who does not live with you to deliver these items</li>
          <li>place orders over the phone or online</li>
          <li>
            <strong>do not</strong> go into stores or supermarkets in person
          </li>
        </ul>

        <h4>Roommates and family you live with</h4>
        <ul>
          <li>stay in a room away from them</li>
          <li>keep a distance of at least 6 feet (2 metres)</li>
        </ul>

        <h4>People you do not live with</h4>
        <ul>
          <li>only contact them over the phone or online</li>
          <li>
            <strong>do not</strong> invite them over or socialize in person
          </li>
        </ul>

        <p className="ontario-margin-top-32-!">
          Get more tips on how to safely{" "}
          <a href="https://www.ontario.ca/page/covid-19-stop-spread#section-3">self-isolate</a> to protect yourself and
          others in your community. {" "}
        </p>
      </div>
    </div>

    <div className="ontario-row">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" />
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
          <li>start feeling sick (difficulty breathing, fever or new cough)</li>
          <li>come into close contact with someone who has difficulty breathing, a fever or a cough</li>
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

const R4 = () => <ResultsTemplate lang="en" resultsContent={resultsContent} />

export default R4
