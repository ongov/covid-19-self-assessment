import React, { useContext } from "react"
import { navigate } from "@reach/router"

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
    navigate("/autoevaluation/q1")
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
      <h1>Auto-évaluation de la COVID-19</h1>
      <CalloutNoBg
        message={
          <>
            <p>
              <strong>Version 2.8</strong>
              <br />
              <strong>Dernière mise à jour : 16 avril 2020</strong>
              <br />
              Mise à jour de la gamme des symptômes et amélioration des instructions sur les écrans de résultats.
            </p>
            <br />
          </>
        }
      />
      <p className="ontario-lead-statement">
        Faites cette auto-évaluation si vous pensez avoir été exposé à la COVID-19 (nouveau coronavirus) ou si vous avez
        des symptômes. Vous obtiendrez des informations sur la marche à suivre.
      </p>
      <p className="ontario-lead-statement">Vous pouvez également la faire au nom de quelqu'un d'autre. </p>
      <CalloutNoTitle
        messagemain="S'il s'agit d'une urgence médicale, appelez le 911."
        message="Informez-les de vos symptômes et si vous avez des antécédents de voyage récents."
      />
      <p className="ontario-margin-top-32-!">
        <strong>Ces informations ne sont pas destinées à fournir des conseils médicaux.</strong> Si vous avez des
        questions d'ordre médical, consultez un professionnel de la santé ou votre{" "}
        <a href="http://www.health.gov.on.ca/fr/common/system/services/phu/locations.aspx">
          bureau de santé publique local
        </a>
        .
      </p>
      <div className="ontario-text-center ontario-margin-top-40-!">
        <Button text="Commencer l’auto-évaluation" clickHandler={handleClick} />
      </div>
    </Layout>
  )
}

export default IndexPage
