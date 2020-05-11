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
        <h2>You must stay at home for 14 days after your symptoms began.</h2>

        <p>
          You <strong>do not</strong> need to contact a doctor or Telehealth Ontario for an assessment.
        </p>
        <ol>
          <li>
            <AnchorLink to="/self-assessment/r2#stay-at-home">Stay at home for 14 days</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r2#tell-people-youve-been-in-contact-with">
              Tell people you’ve been in contact with
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r2#monitor-your-health">Monitor your health</AnchorLink>
          </li>
        </ol>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="stay-at-home">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Stay at home for 14 days</h3>
        <p className="ontario-first-line">
          This is called <strong>self-isolation</strong>.
        </p>
        <p>You may be contagious. Stay inside so people in your community don’t get sick.</p>
        <h4>Leaving your home</h4>
        <ul>
          <li>
            <strong>only leave your home for critical reasons</strong> (like a medical emergency)
          </li>
        </ul>

        <h4>COVID-19 test</h4>
        <ul>
          <li>
            <strong>do not</strong> go into a hospital or clinic to get a COVID-19 test unless you are asked to by a
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
          <li>they must self-isolate too</li>
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
          the people in your community. {" "}
        </p>
      </div>
    </div>

    <div className="ontario-row">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="tell-people-youve-been-in-contact-with">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Tell people you’ve been in contact with</h3>

        <p className="ontario-first-line">
          You must <strong>tell people to self-isolate if you were in close contact</strong> with them in the 2 days
          before your symptoms began.
        </p>

        <h4>Close contact means:</h4>
        <ul>
          <li>a face-to-face conversation for 15 minutes</li>
          <li>being in the same room for 2 hours</li>
        </ul>
      </div>
    </div>

    <div className="ontario-row">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor-your-health">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">3.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Monitor your health</h3>

        <p className="ontario-first-line">
          <strong>Monitor your health for a full 14 days</strong> after your symptoms started.
        </p>

        <p>
          <Link to="/self-assessment">Take this self-assessment again</Link> at the end of the 14-day period or sooner if
          you:
        </p>
        <ul>
          <li>start feeling more sick</li>
          <li>develop new symptoms</li>
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

const R2 = () => <ResultsTemplate lang="en" resultsContent={resultsContent} />

export default R2
