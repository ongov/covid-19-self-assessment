import React, { forwardRef, useRef } from "react"
import { general } from "../../localized_content"

import ProgressBar from "../../components/progress-bar"
import ResultsTemplate from "../../templates/results-template"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import PrintPageButton from "../../components/print-page-button"
import CalloutGetVaccine from "../../components/callout-get-vaccine"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate" />
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2 className="ontario-results--subtitle">
          Selon vos réponses, <strong>vous n’avez pas besoin de vous auto-isoler ou de subir un test</strong>.
        </h2>

        <p className="ontario-results--subtitle">Si vous vous sentez malade ou indisposé, restez chez vous. Parlez-en à un médecin si nécessaire.</p>

        <p className="ontario-results--subtitle">
          Pour protéger votre collectivité et le système de soins de santé, vous devez{" "}
          <strong>
            porter un couvre-visage ou un masque lorsqu’exigé, maintenir une distance physique avec les autres et vous
            laver les mains le plus possible.
          </strong>
        </p>

        <ProgressBar progress={100} />


        <p className="ontario-results--subtitle">
          <a href="https://covid-19.ontario.ca/fr/zones-et-restrictions" target="_blank" rel="noopener">
            Obtenez les renseignements les plus récents sur les restrictions et fermetures.
          </a>
        </p>

        <div className="ontario-row ontario-row--collapse ontario-margin-top-40-! ontario-hide-for-print">
          <div className="ontario-small-12 ontario-columns">
            <SaveToPDFButton ref={ref} lang={lang} classname="print-save-button" />
          </div>
          <div className="ontario-small-12 ontario-columns">
            <PrintPageButton lang={lang} classname="print-save-button" />
          </div>
        </div>

        <div className="ontario-hide-for-print">
          <CalloutGetVaccine lang="fr" />
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="your-health">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        &nbsp;
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Votre santé et le dépistage </h3>

        <p>
          Faites attention à votre santé et portez attention à tout changement de votre état de santé. C’est ce qu’on
          appelle de{" "}
          <a
            href="https://www.publichealthontario.ca/-/media/documents/ncov/factsheet-covid-19-self-monitor.pdf?la=fr"
            target="_blank"
            rel="noopener"
          >
            l’autosurveillance <span className="ontario-show-for-sr">{general[lang].newWindow}</span>
          </a>
          .
        </p>

        <h4>
          Les personnes qui sont « à risque » doivent porter une attention très particulière à leur état de santé et
          faire preuve d’une extrême prudence lorsqu’elles se trouvent à l’extérieur de leur domicile. Ces personnes
          incluent celles :{" "}
        </h4>
        <ul>
          <li>âgées de plus de 70 ans </li>
          <li>ayant un problème de santé existant </li>
          <li>ayant un système immunitaire compromis (affaibli)</li>
        </ul>

        <h4>Distanciation physique et lavage des mains</h4>
        <ul>
          <li>gardez une distance d’au moins 2 mètres avec les personnes qui ne font pas partie de votre ménage</li>
          <li>lavez vos mains ou désinfectez-les souvent</li>
          <li>
            <a
              href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19"
              target="_blank"
              rel="noopener"
            >
              apprenez à réduire votre exposition au virus{" "}
              <span className="ontario-show-for-sr">{general[lang].newWindow}</span>
            </a>
          </li>
        </ul>

        <h4>Couvre-visages et masques</h4>
        <ul>
          <li>
            portez-en un dans les espaces publics intérieurs, par exemple les magasins et les véhicules de transport en
            commun
          </li>
          <li>
            portez-en un à l’extérieur lorsque vous ne pouvez pas garder une distance d’au moins 2 mètres avec des
            personnes qui ne font pas partie de votre ménage{" "}
          </li>
          <li>couvrez votre bouche, votre nez et votre menton</li>
          <li>
            <strong>ne le touchez pas</strong> sans d’abord vous laver ou désinfecter les mains
          </li>
          <li>
            <a href="https://www.ontario.ca/fr/page/couvre-visage-et-masques-faciaux" target="_blank" rel="noopener">
              apprenez à porter un couvre-visage ou un masque{" "}
              <span className="ontario-show-for-sr">{general[lang].newWindow}</span>
            </a>
          </li>
        </ul>

        <h4>Se faire tester</h4>
        <p>Il est conseillé que vous subissiez un test de dépistage de la COVID-19 dans certaines situations.</p>
        <div className="ontario-row ontario-hide-for-print">
          <div className="ontario-small-12 ontario-columns">
            <a
              href="https://covid-19.ontario.ca/fr/information-sur-le-depistage-et-les-centres-de-depistage-de-la-covid-19"
              className="ontario-button ontario-button--primary"
            >
              Renseignez-vous sur le test de dépistage{" "}
              <span className="ontario-show-for-sr">{general[lang].newWindow}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" />
      </div>
    </div>
  </>
))

const R3 = () => {
  const lang = "fr"
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R3
