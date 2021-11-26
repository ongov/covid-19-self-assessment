import React, { forwardRef, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"
import ButtonFindCentre from "../../components/button-find-centre"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import CalloutCovidApp from "../../components/callout-covid-app"

const lang = "en"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div>
      <div className="ontario-row">
        <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
          <div className="ontario-icon__self-isolate-home"></div>
        </div>
        <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content ontario-margin-bottom-0-!">
          <h2 className="ontario-results--subtitle">
            Based on your answers, we recommend that you{" "}
            <strong>go to a COVID-19 assessment centre to get tested as soon as you can</strong> because you have symptoms or were in close physical contact with someone who currently has COVID-19.
          </h2>
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

      <div className="ontario-row ontario-results__content ontario-hide-for-print">
        <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
        <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
          <p className="ontario-margin-top-0-!">On this page:</p>
          <ol>
            <li>
              <AnchorLink to="/self-assessment/r7#get-tested">Get tested</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/self-assessment/r7#stay-at-home">Except for testing, stay home for 14 days</AnchorLink>
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

      <div className="ontario-row ontario-results__content" id="stay-at-home">
        <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
          <div className="ontario-infographic-number">1.</div>
        </div>
        <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
          <h3>
            <span className="ontario-show-for-print ontario-infographic-number">1.</span> Get tested
          </h3>
          <p className="ontario-first-line">Go to the nearest assessment centre for a COVID-19 test. </p>

          <div className="ontario-margin-top-32-!">
            <ButtonFindCentre lang={lang} />
          </div>
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
            for 14 days
          </h3>
          <p className="ontario-first-line">
            This is called <strong>self-isolation</strong>. You could be carrying the virus without knowing it and
            spread it to people in your community.
          </p>

          <p>The 14 days start from the date you:</p>

          <ul>
            <li>began experiencing symptoms</li>
            <li>were exposed to the COVID-19-positive person</li>
            <li>got the COVID Alert exposure notification</li>
          </ul>

          <p>
            <strong>Do not go into public spaces unless it is for a critical reason</strong> (like going to an
            assessment centre or for a medical emergency).{" "}
          </p>

          <p>
            These are general guidelines. Follow the instructions of the assessment centre staff after getting tested.
          </p>

          <CalloutCovidApp lang="en"/>

          <h4>Face coverings and masks </h4>
          <ul>
            <li>use one when you are on the way to get a test or visit a hospital</li>
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
              discuss your next steps with them to make sure you and your company are taking the right safety
              precautions
            </li>
          </ul>

          <h4>Roommates and family you live with</h4>
          <ul>
            <li>they should self-isolate only if you test positive for the virus</li>
            <li>stay in a room away from them (if possible)</li>
            <li>use a different bathroom (if possible)</li>
            <li>keep a distance of at least 2 metres in shared spaces like kitchens or living rooms</li>
            <li>wear a face covering or mask when you are around them</li>
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
              <span className="ontario-show-for-sr"> This link will open in a new window.</span>
            </a>{" "}
          </p>
        </div>
      </div>

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
            This is for people you were in close physical contact with in the 2 days before:
          </p>
          <ul>
            <li>your symptoms started </li>
            <li>you were exposed to the COVID-19-positive person</li>
          </ul>

          <p className="ontario-margin-top-24-!">Tell them to:</p>
          <ul>
            <li>pay attention to their health and note if anything changes</li>
            <li>take this self-assessment </li>
          </ul>

          <p className="ontario-margin-top-24-!">If you got a COVID Alert exposure notification, follow the instructions in the app. </p>

          <p>Close physical contact means:</p>
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
            Pay attention to your health and note if anything changes <strong>for 14 days</strong>.
          </p>

          <p>Your doctor or the assessment centre will tell you your next steps and if you need to be re-tested.</p>

          <p>
            <strong>
              Most COVID-19 illnesses are mild. If you start to experience worsening symptoms, please visit your local
              emergency department. Call before you go and let them know you have used this self-assessment.
            </strong>
          </p>

          <h4>Roommates and family you live with</h4>
          <ul>
            <li>they should note any changes to their health too (this is called self-monitoring) </li>
            <li>young children might have less specific symptoms like sluggishness or lack of appetite </li>
          </ul>
        </div>
      </div>
    </div>
  </>
))

const R7 = () => {
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} showContactForm={false} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R7
