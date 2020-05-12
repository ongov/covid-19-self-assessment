import React, { useContext } from "react"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Button from "../../components/button"
import CalloutNoTitle from "../../components/callout-no-title"
import CalloutNoBg from "../../components/callout-no-bg"
import { GlobalDispatchContext } from "../../context/global-context-provider"

const IndexPage = () => {
  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    dispatch({ type: "SAT_START" })
    navigate("/self-assessment/severe-symptoms")
  }

  return (
    <Layout lang="en">
      <SEO lang="en" />
      <nav role="navigation">
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
            <ul className="ontario-breadcrumbs">
              <li>
                <a href="https://www.ontario.ca/page/government-ontario">Home</a>
              </li>
              <li>
                <a href="https://www.ontario.ca/page/health-care-ontario">Health and wellness</a>
              </li>
              <li>
                <a href="https://covid-19.ontario.ca/">COVID-19</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SkipNavContent>
        <h1>COVID-19 self-assessment</h1>
        <CalloutNoBg
          message={
            <>
              <p>
                <strong>Version 3.0</strong>
                <br />
                <strong>Last updated: May 8, 2020</strong>
                <br />
                Added new essential worker questions and option to sign up for a follow-up call.
              </p>
            </>
          }
        />
        <p className="ontario-lead-statement">
          Take this self-assessment if you think you were exposed to COVID-19 (novel coronavirus) or have symptoms.
        </p>
        <p className="ontario-lead-statement">You will get a recommendation on what to do next.</p>
        <p className="ontario-lead-statement">You can also take it on behalf of someone else.</p>
        <CalloutNoTitle
          messagemain="If this is a medical emergency, call 911."
          message="Advise them of your symptoms and if you have recently travelled."
        />
        <p className="ontario-margin-top-32-!">
          The self-assessment is only meant as an aid and cannot diagnose you. If you have medical questions, consult a
          health practitioner or your{" "}
          <a href="http://www.health.gov.on.ca/en/common/system/services/phu/locations.aspx">
            local public health unit
          </a>
          .
        </p>
        <div className="ontario-text-center ontario-margin-top-40-! ontario-landing__button">
          <Button text="Start self-assessment" clickHandler={handleClick} />
        </div>
      </SkipNavContent>
    </Layout>
  )
}

export default IndexPage
