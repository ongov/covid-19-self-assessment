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
    navigate("/autoevaluation/symptômes-graves")
  }

  return (
    <Layout lang="fr">
      <SEO lang="fr" />
      <nav role="navigation">
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
            <ul className="ontario-breadcrumbs">
              <li>
                <a href="https://www.ontario.ca/fr/page/gouvernement-de-lontario">Accueil</a>
              </li>
              <li>
                <a href="https://www.ontario.ca/fr/page/les-soins-de-sante-en-ontario">Les soins de santé en Ontario</a>
              </li>
              <li>
                <a href="https://covid-19.ontario.ca/fr">COVID-19</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SkipNavContent>
        <h1>Auto-évaluation pour la COVID-19</h1>
        <CalloutNoBg
          message={
            <>
              <p>
                <strong>Version 3,0</strong>
                <br />
                <strong>Dernière version : 8 mai 2020 </strong>
                <br />
                Ajout de nouvelles questions concernant les travailleurs essentiels et option de s’inscrire pour
                recevoir un appel de suivi.
              </p>
            </>
          }
        />
        <p className="ontario-lead-statement">
          Faites cette auto-évaluation si vous croyez que vous avez été exposé à la COVID-19 (nouveau coronavirus) ou si
          vous présentez des symptômes.
        </p>

        <p className="ontario-lead-statement">Vous obtiendrez une recommandation sur la prochaine étape à suivre.</p>

        <p className="ontario-lead-statement">Vous pouvez également faire l’évaluation au nom de quelqu’un d’autre.</p>
        <CalloutNoTitle
          messagemain="S’il s’agit d’une urgence médicale, composez le 911."
          message="Veuillez les informer de vos symptômes et indiquez si vous avez voyagé récemment."
        />
        <p className="ontario-margin-top-32-!">
          L’auto-évaluation a uniquement pour but de vous aider et ne peut poser un diagnostic. Si vous avez des
          questions d’ordre médical, consultez un praticien de la santé ou le{" "}
          <a href="http://www.health.gov.on.ca/fr/common/system/services/phu/locations.aspx">
            bureau de santé publique de votre région
          </a>
          .
        </p>
        <div className="ontario-text-center ontario-margin-top-40-!">
          <Button text="Commencer l’auto-évaluation" clickHandler={handleClick} />
        </div>
      </SkipNavContent>
    </Layout>
  )
}

export default IndexPage
