import React, { useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Button from "../../components/button"
import { CalloutGrey } from "../../components/callout-styles"
import CalloutNoBg from "../../components/callout-no-bg"
import Callout from "../../components/callout-with-border"
// import CalloutCovidLanding from "../../components/callout-get-vaccine-landing"
import CalloutTested from "../../components/callout-have-you-been-tested"
import CalloutVistingLTC from "../../components/callout-visiting-ltc"

import { GlobalDispatchContext } from "../../context/global-context-provider"
import { formatDate, general, questions } from "../../localized_content"

import Warning from "../../images/ontario-icon-warning.svg"

const iconBase = (IconComponent) => `
  background-image: url(${IconComponent});
  background-size: 100%;
  display: inline-block;
`

const IconWarning = styled.span`
  ${iconBase(Warning)}
  width: 23px;
  height: 22px;
  margin-left: -0.25rem;
  @media screen and (max-width: 39.9375em) {
    margin-top: 0.5rem;
  }
`

const CalloutContent = styled.div`
  display: inline-block;
  margin: -1.8rem 0.85rem 0 1rem;
  @media screen and (max-width: 39.9375em) {
    margin: 0;
  }
`

const lang = "en"

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
    navigate(`${general[lang].basePath}${questions.q1[lang]}`)
  }

  return (
    <Layout lang={lang} isLandingPage>
      {/* <CalloutCovidLanding lang="en" /> */}
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
                    <strong>Version 5.4</strong>
                  </p>
                  <p>Updates made to clarify reason for vaccination status question and to reiterate the need to stay home if you are sick with any symptoms.</p>
                </>
              }
            />
            <p className="ontario-lead-statement">
              Take this self-assessment if you were exposed to COVID-19 (novel coronavirus) or have symptoms.
            </p>
            <p className="ontario-lead-statement">You will get a recommendation on what to do next.</p>
            <p className="ontario-lead-statement ontario-margin-bottom-32-!">
              You can also take it on behalf of someone else.
            </p>

            <Callout bgColor="#fef6dc" borderColor="#ffd440" icon={<IconWarning />}>
              <CalloutContent>{general[lang].landingCallout}</CalloutContent>
            </Callout>

            <p className="ontario-margin-top-32-!">
              The self-assessment is only meant as an aid and cannot diagnose you. Anyone who is sick or has any symptoms of illness, including those not listed in this screening tool, should stay home and seek assessment from a health care provider if needed. 
              Consult a health care provider if you have medical questions.
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
