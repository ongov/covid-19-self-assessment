import React, { useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Button from "../../components/button"
import Callout from "../../components/callout-with-border"
import CalloutNoBg from "../../components/callout-no-bg"
// import CalloutCovidLanding from "../../components/callout-get-vaccine-landing"
import CalloutTested from "../../components/callout-have-you-been-tested"
import CalloutVistingLTC from "../../components/callout-visiting-ltc"

import { GlobalDispatchContext } from "../../context/global-context-provider"
import { formatDate, general, questions } from "../../localized_content"
import { CalloutGrey } from "../../components/callout-styles"

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
const lang = "fr"

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
      {/* <CalloutCovidLanding lang="fr" /> */}
      <SEO lang={lang} />
      <nav role="navigation">
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
            <ul className="ontario-breadcrumbs">
              <li>
                <a href="https://www.ontario.ca/fr/page/gouvernement-de-lontario">Accueil</a>
              </li>
              <li>
                <a href="https://covid-19.ontario.ca/fr">COVID-19</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SkipNavContent>
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
            <h1>Auto-évaluation pour la COVID-19</h1>
            <CalloutNoBg
              message={
                <>
                  <p>
                    <strong>{`Dernière version : ${formatDate(new Date(Date.parse(currentDate)), lang)}`}</strong>
                    <br />
                    <br />
                    <strong>Version 5.4</strong>
                  </p>
                  <p>Des mises à jour ont été faites pour préciser la raison de la question sur le statut vaccinal et pour réitérer la nécessité de rester à la maison si vous êtes malade et présentez des symptômes.</p>
                </>
              }
            />
            <p className="ontario-lead-statement">
              Faites cette auto-évaluation si vous avez été exposé à la COVID-19 (nouveau coronavirus) ou si vous
              présentez des symptômes.
            </p>

            <p className="ontario-lead-statement">
              Vous obtiendrez une recommandation sur la prochaine étape à suivre.
            </p>

            <p className="ontario-lead-statement ontario-margin-bottom-32-!">
              Vous pouvez également faire l’évaluation au nom de quelqu’un d’autre.
            </p>

            <Callout bgColor="#fef6dc" borderColor="#ffd440" icon={<IconWarning />}>
              <CalloutContent>{general[lang].landingCallout}</CalloutContent>
            </Callout>

            <p className="ontario-margin-top-32-!">
              L’auto-évaluation a uniquement pour but de vous aider et ne peut poser un diagnostic. Toute personne malade ou présentant des symptômes de maladie, y compris ceux qui ne figurent pas dans cet outil de dépistage, doit rester chez elle et consulter un professionnel de la santé si nécessaire. 
              Si vous avez des questions d’ordre médical, consultez un fournisseur de soins de santé.
            </p>
            <div className="ontario-text-center ontario-margin-top-40-!">
              <Button text="Commencer l’auto-évaluation" clickHandler={handleClick} />
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
