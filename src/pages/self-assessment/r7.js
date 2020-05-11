import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Callout from "../../components/callout"
import ResultsTemplate from "../../templates/results-template"

const resultsContent = (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-icon__self-isolate-home"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2>Contact a doctor or Telehealth Ontario. You may be eligible for a COVID-19 test.</h2>
        <p>
          <strong>Do not</strong> leave your home. <strong>Do not</strong> go into a hospital or clinic.
        </p>
        <p>
          <strong>First</strong>, contact either:
        </p>
        <ul>
          <li>your primary care provider (for example, family doctor) over the phone or online</li>
          <li>
            Telehealth Ontario at&nbsp;<a href="tel:+18667970000">1-866-797-0000</a>&nbsp;(to speak with a registered nurse)
          </li>
        </ul>
        <p>They will tell you what to do next.</p>
        <Callout
          title="Call volumes"
          message="Telehealth Ontario is experiencing heavy call volumes and will get to your call as quickly as they can."
        />
      </div>
    </div>

    <div className="ontario-row ontario-results__content">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <p className="ontario-margin-top-0-!">After calling, you must:</p>
        <ol>
          <li>
            <AnchorLink to="/self-assessment/r7#stay-at-home">
              Stay at home unless told to leave by a doctor or nurse
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r7#tell-people-youve-been-in-contact-with">
              Tell people you’ve been in contact with
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r7#monitor-your-health">Monitor your health</AnchorLink>
          </li>
        </ol>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="stay-at-home">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Stay at home unless told to leave by a doctor or nurse</h3>
        <p className="ontario-first-line">
          This is called <strong>self-isolation</strong>.
        </p>
        <p>You may be contagious. Stay inside so people in your community don’t get sick.</p>
        <h4>Leaving your home</h4>
        <ul>
          <li>
            <strong>only leave your home for critical reasons</strong> (like a medical emergency or if you were told to
            go to an assessment centre)
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
          others in your community.
        </p>
        <p>
          <strong>
            The majority of COVID-19 illnesses are mild. If you start to experience worsening symptoms, please visit
            your local emergency department. Call before you go and let them know you have used this self-assessment
            tool.
          </strong>
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

        <h4>Roommates and family you live with</h4>
        <ul>
          <li>they should monitor their health too</li>
          <li>young children might have less specific symptoms like sluggishness or lack of appetite </li>
        </ul>
      </div>
    </div>
  </>
)

const R7 = () => <ResultsTemplate lang="en" resultsContent={resultsContent} />

export default R7
