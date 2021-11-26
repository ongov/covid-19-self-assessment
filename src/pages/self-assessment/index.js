import React, { useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Button from "../../components/button"
import { smallWidth } from "../../components/callout-styles.js"
import CalloutNoTitle from "../../components/callout-no-title"
import CalloutNoBg from "../../components/callout-no-bg"
import CalloutCovidLanding from "../../components/callout-covid-app-landing"
import CalloutTested from "../../components/callout-have-you-been-tested"
import CalloutVistingLTC from "../../components/callout-visiting-ltc"
import Callout from "../../components/callout-blue"

import { GlobalDispatchContext } from "../../context/global-context-provider"
import { formatDate } from "../../localized_content"

const lang = "en"

const CalloutGrey = styled.div`
  padding: 1.5rem 2rem;
  margin-bottom: -1rem;
  background-color: #f2f2f2;
  overflow: hidden;
  @media screen and (${smallWidth}) {
    padding: 1rem;
  }
`

const IndexPage = () => {
  const {
    currentBuildDate: { currentDate },
  } = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)

  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    dispatch({ type: "SAT_START" })
    navigate("/self-assessment/severe-symptoms")
  }

  return (
    <Layout lang={lang} isLandingPage>
      <CalloutCovidLanding lang="en" />
      <SEO lang={lang} />
      <nav role="navigation">
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
            <ul className="ontario-breadcrumbs">
              <li>
                <a href="https://www.ontario.ca/page/government-ontario">Home</a>
              </li>
              <li>
                <a href="https://covid-19.ontario.ca/">COVID-19</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SkipNavContent>
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
            <h1>COVID-19 self-assessment</h1>
            <CalloutNoBg
              message={
                <>
                  <p>
                    <strong>{`Last updated: ${formatDate(new Date(Date.parse(currentDate)), lang)}`}</strong>
                    <br />
                    <br />
                    <strong>Version 4.0</strong>
                    <br />
                    Updated questions and results to align with newest public health guidance.
                  </p>
                </>
              }
            />
            <p className="ontario-lead-statement">
              Take this self-assessment if you’re worried you were exposed to COVID-19 (novel coronavirus) or have
              symptoms.
            </p>
            <p className="ontario-lead-statement">You will get a recommendation on what to do next.</p>
            <p className="ontario-lead-statement">You can also take it on behalf of someone else.</p>
            <CalloutNoTitle
              messagemain="If this is a medical emergency, call 911."
              message="Advise them of your symptoms and if you have recently travelled."
            />

            <Callout
              heading="Students, parents, and school staff"
              message="Answer a few questions before leaving for school."
              linkText="COVID-19 school screening"
              link="https://covid-19.ontario.ca/school-screening"
            />

            <p className="ontario-margin-top-32-!">
              The self-assessment is only meant as an aid and cannot diagnose you. Consult a health care provider if you
              have medical questions.
            </p>
            <div className="ontario-text-center ontario-margin-top-40-! ontario-margin-bottom-40-! ontario-landing__button">
              <Button text="Start self-assessment" clickHandler={handleClick} />
            </div>
          </div>
        </div>
        <CalloutGrey>
          <div className="ontario-row ontario-row--collapse">
            <div className="ontario-small-12 ontario-large-6 ontario-columns">
              <CalloutVistingLTC lang={lang} />
            </div>

            <div className="ontario-small-12 ontario-large-6 ontario-columns">
              <CalloutTested lang={lang} />
            </div>
          </div>
        </CalloutGrey>
      </SkipNavContent>
    </Layout>
  )
}

export default IndexPage
