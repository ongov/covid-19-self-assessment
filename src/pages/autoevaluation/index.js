import React, { useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Button from "../../components/button"
import CalloutNoTitle from "../../components/callout-no-title"
import CalloutNoBg from "../../components/callout-no-bg"
import CalloutResources from "../../components/callout-resources"
import CalloutCovidLanding from "../../components/callout-covid-app-landing"
import CalloutTested from "../../components/callout-have-you-been-tested"
import CalloutVistingLTC from "../../components/callout-visiting-ltc"

import { GlobalDispatchContext } from "../../context/global-context-provider"
import { formatDate } from "../../localized_content"
import { smallWidth } from "../../components/callout-styles"
import Callout from "../../components/callout-blue"

const lang = "fr"

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
    navigate("/autoevaluation/symptômes-graves")
  }

  return (
    <Layout lang={lang} isLandingPage>
      <CalloutCovidLanding lang="fr" />
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
                    <strong>Version 4.0</strong>
                    <br />
                    Mise à jour des questions et des résultats en vue de les aligner sur les dernières orientations en
                    matière de santé publique.
                  </p>
                </>
              }
            />
            <p className="ontario-lead-statement">
              Faites cette auto-évaluation si vous craignez avoir été exposé à la COVID-19 (nouveau coronavirus) ou si
              vous présentez des symptômes.
            </p>

            <p className="ontario-lead-statement">
              Vous obtiendrez une recommandation sur la prochaine étape à suivre.
            </p>

            <p className="ontario-lead-statement">
              Vous pouvez également faire l’évaluation au nom de quelqu’un d’autre.
            </p>
            <CalloutNoTitle
              messagemain="S’il s’agit d’une urgence médicale, composez le 911."
              message="Veuillez les informer de vos symptômes et indiquez si vous avez voyagé récemment."
            />

            <Callout
              heading="Élèves, parents et personnel scolaire"
              message="Veuillez répondre à quelques questions avant de partir pour l’école"
              linkText="Dépistage de la COVID-19 pour les écoles"
              link="https://covid-19.ontario.ca/depistage-pour-les-ecoles/"
            />

            <p className="ontario-margin-top-32-!">
              L’auto-évaluation a uniquement pour but de vous aider et ne peut poser un diagnostic. Si vous avez des
              questions d’ordre médical, consultez un fournisseur de soins de santé.
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
