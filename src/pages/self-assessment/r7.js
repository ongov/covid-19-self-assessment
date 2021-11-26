import React, { forwardRef, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { general } from "../../localized_content"

import ResultsTemplate from "../../templates/results-template"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import PrintPageButton from "../../components/print-page-button"
import CalloutGetVaccine from "../../components/callout-get-vaccine"
import NearbyAssessmentCentres from "../../components/nearby-assessment-centres"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <div>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate-home" />
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content ontario-margin-bottom-0-!">
        <h2 className="ontario-results--subtitle">
          Based on your answers, we recommend that you <strong>get a COVID-19 test (not a rapid antigen test) and self-isolate</strong> because you have
          symptoms or are a &quot;close contact&quot; of someone who currently has COVID-19.
        </h2>
        <p className="ontario-results--subtitle">
          Follow the advice of public health if you have already been tested or cleared.
        </p>
        <p className="ontario-results--subtitle">
          Our guidelines for children and adults continue to evolve as we learn more about COVID-19, how it spreads, and
          how it affects people in different ways.
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
            <AnchorLink to="/self-assessment/r7#get-tested">Get tested</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r7#stay-at-home">Except for testing, stay home</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r7#tell-people-youve-been-in-contact-with">
              Tell people you have been in close physical contact with
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/self-assessment/r7#monitor-your-health">Monitor your health </AnchorLink>
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
          Since you have symptoms or have been exposed to COVID-19, get tested at an assessment centre, participating pharmacy, or participating
          community lab. Rapid antigen/self-test kits are only available for those without symptoms
          or exposure.
        </p>

        <div className="ontario-margin-top-32-!">
          <NearbyAssessmentCentres lang={lang} />
        </div>
        <h4>If you have symptoms but no known exposure to COVID-19</h4>
        <p>Make an appointment and go to the nearest testing location for a COVID-19 test as soon as you can.</p>
        <p>
          If you think you have a cold or the flu, you should still get tested or talk with a doctor. Symptoms are
          similar to COVID-19.
        </p>
        <h4>If you know when you were exposed to a COVID-19-positive person</h4>
        <p>
          Get tested 7 days after being exposed (stay in isolation during these days). Make an appointment and go to the
          nearest testing location for a COVID-19 test.
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

    <div className="ontario-row ontario-results__content" id="stay-at-home">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print ontario-infographic-number">2.</span> Except for testing, stay home
        </h3>
        <p className="ontario-first-line">
          This is called <strong>self-isolation</strong>. You could be carrying the virus without knowing it and spread
          it to people in your community.
        </p>

        <p>
          <strong>Do not go into public spaces unless it is for a critical reason</strong> (like going to a testing
          location or for a medical emergency).{" "}
        </p>

        <p>These are general guidelines. Follow the instructions of the testing location staff after getting tested.</p>

        <h4>If you have symptoms but no known exposure to COVID-19</h4>

        <p>Stay home for 10 days. The 10 days start from the date you began feeling symptoms.</p>

        <p>
          You do not have to self-isolate anymore if you get tested and the result is negative (you do not have the
          virus) and you are feeling better.{" "}
        </p>

        <h4>If you were exposed to a COVID-19-positive person</h4>

        <p>Stay home for 10 days and monitor for symptoms. The 10 days start from the date you were exposed. </p>

        <p>It is 10 days because that is how long it may take for symptoms to appear.</p>

        <h4>If you got a COVID Alert exposure notification</h4>

        <p>Stay home until you get your test result.</p>

        <p>
          You do not have to self-isolate anymore if you get tested and the result is negative (you do not have the
          virus) and you are feeling good.
        </p>

        <h4>Roommates and family you live with</h4>
        <ul>
          <li>
            Fully vaccinated roommates and family:
            <ul>
              <li>
                they <strong>do not need</strong> to self-isolate
              </li>
              <li>
                check your{" "}
                <a
                  href="http://www.health.gov.on.ca/en/common/system/services/phu/locations.aspx"
                  target="_blank"
                  rel="noopener"
                >
                  local public health unit’s website
                </a>{" "}
                or call to see if there are any actions they need to take
              </li>
            </ul>
          </li>
          <li>
            Unvaccinated roommates and family:
            <ul>
              <li>
                they need to self-isolate until you get a negative COVID-19 test result or are diagnosed with another
                illness
              </li>
              <li>stay in a room away from them (if possible)</li>
              <li>use a different bathroom (if possible)</li>
              <li>keep a distance of at least 2 metres in shared spaces like kitchens or living rooms</li>
              <li>wear a face covering or mask when you are around them</li>
            </ul>
          </li>
        </ul>

        <h4>Face coverings and masks </h4>
        <ul>
          <li>use one when you are on the way to get a test or visit a hospital</li>
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

        <h4>Groceries, medications, and essential items </h4>
        <ul>
          <li>get someone who does not live with you to deliver these items </li>
          <li>place orders over the phone or online</li>
          <li>
            <strong>do not</strong> go into stores or supermarkets in person
          </li>
        </ul>

        <h4>Work and workspaces</h4>
        <ul>
          <li>work from home (if possible)</li>
          <li>if you cannot work from home, call your manager and occupational health and safety representative</li>
          <li>let them know you have been instructed to self-isolate </li>
          <li>
            discuss your next steps with them to make sure you and your company are taking the right safety precautions
          </li>
          <li>
            <a
              href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/infectious-disease-emergency-leave"
              target="_blank"
              rel="noopener"
            >
              find out if you are eligible for job-protected infectious disease emergency leave
            </a>{" "}
            (your employer cannot fire you for taking this leave)
          </li>
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
            Get more tips on how to safely self-isolate.
            <span className="ontario-show-for-sr">{general[lang].newWindow}</span>
          </a>{" "}
        </p>
      </div>
    </div>

    <CalloutGetVaccine lang="en" />

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" aria-hidden="true" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="tell-people-youve-been-in-contact-with">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">3.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print ontario-infographic-number">3.</span> Tell people you have been in
          close physical contact with
        </h3>
        <p className="ontario-first-line ontario-results__content--r7">
          This is for people you were in close physical contact with in the:
        </p>
        <ul>
          <li>2 days before your symptoms started </li>
          <li>days between now and when you were exposed to the COVID-19-positive person</li>
        </ul>
        <p className="ontario-margin-top-24-!">
          If you got a COVID Alert exposure notification, follow the instructions in the app.{" "}
        </p>
        <p className="ontario-margin-top-24-!">Tell them to:</p>
        <ul>
          <li>pay attention to their health and note if anything changes</li>
          <li>take this self-assessment </li>
        </ul>

        <p>Close physical contact means any of the following:</p>
        <ul>
          <li>being less than 2 metres away in the same room, workspace, or area</li>
          <li>living in the same home</li>
          <li>being in the same classroom </li>
        </ul>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" aria-hidden="true" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor-your-health">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">4.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print ontario-infographic-number">4.</span> Monitor your health
        </h3>
        <p className="ontario-first-line">
          Pay attention to your health and note if anything changes <strong>for 10 days</strong>.
        </p>

        <p>Your doctor or the testing location  will tell you your next steps and if you need to be re-tested.</p>

        <p>
          <strong>
            Most COVID-19 illnesses are mild. If you start to experience worsening symptoms, please visit your local
            emergency department. Call before you go and let them know you have used this self-assessment.
          </strong>
        </p>

        <h4>Roommates and family you live with</h4>
        <ul>
          <li>they should note any changes to their health too (this is called self-monitoring) </li>
        </ul>
      </div>
    </div>
  </div>
))

const R7 = () => {
  const lang = "en"
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R7
