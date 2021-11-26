import React, { forwardRef, useRef } from "react"
import { general } from "../../localized_content"

import ResultsTemplate from "../../templates/results-template"
import ButtonFindCentre from "../../components/button-find-centre"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import PrintPageButton from "../../components/print-page-button"
import CalloutGetVaccine from "../../components/callout-get-vaccine"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate-home" />
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content ontario-margin-bottom-0-!">
        <h2 className="ontario-results--subtitle">
          En fonction de vos réponses, vous <strong>n’avez pas besoin de vous auto-isoler ou de subir un test</strong>.
          Nous vous recommandons{" "}
          <strong>d’accorder une attention particulière à votre santé et de signaler tout changement</strong> dû à un
          contact physique étroit avec une personne qui présente des symptômes ou qui a récemment voyagé.
        </h2>
        <p className="ontario-results--subtitle">
          Suivez les conseils de votre <a href="http://www.health.gov.on.ca/fr/common/system/services/phu/locations.aspx" target="_blank" rel="noopener">bureau de santé publique local</a> ou d'un fournisseur de soins de santé, notamment en ce qui concerne les symptômes à surveiller et le moment où il faut effectuer un test de la COVID-19.
        </p>
        <p className="ontario-results--subtitle">
          Si vous vous sentez malade ou indisposé, restez chez vous. Parlez-en à un médecin si nécessaire.
        </p>
        <p className="ontario-results--subtitle">
          Pour protéger votre collectivité et le système de soins de santé, vous devez{" "}
          <strong>
            porter un couvre-visage ou un masque lorsqu’exigé, maintenir une distance physique avec les autres et vous
            laver les mains le plus possible.
          </strong>
        </p>
        <p className="ontario-results--subtitle">
          <a href="https://covid-19.ontario.ca/fr/zones-et-restrictions" target="_blank" rel="noopener">
            Obtenez les renseignements les plus récents sur les restrictions et fermetures.
          </a>
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

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <CalloutGetVaccine lang="fr" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">&nbsp;</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">1.</span> Votre santé et le dépistage
        </h3>
        <p className="ontario-first-line">
          Nos recommandations continuent d’évoluer à mesure que nous en apprenons plus sur le virus.
        </p>
        <p>
          Prenez note de tout changement à votre état de santé <strong>pendant 10 jours</strong>. C’est ce qu’on appelle{" "}
          <a
            href="https://www.publichealthontario.ca/-/media/documents/ncov/factsheet-covid-19-self-monitor.pdf?la=fr"
            target="_blank"
            rel="noopener"
          >
            l’autosurveillance
          </a>
          . Les 10 jours commencent à partir de la date à laquelle vous avez eu un contact physique étroit avec cette
          personne.
        </p>

        <h4>Si vous commencez à présenter des symptômes de la COVID-19 </h4>
        <ul>
          <li>auto-isolez-vous (restez chez vous) et refaites cette auto-évaluation </li>
          <li>
            ne sortez de chez vous que pour vous faire tester dans un centre d’évaluation, une pharmacie participante ou un laboratoire communautaire participant (prenez d’abord un
            rendez-vous)
          </li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous vivez</h4>
        <ul>
          <li>ils doivent vérifier auprès du bureau local de santé publique s’il y a d’autres mesures à prendre</li>
          <li>ils doivent signaler tout changement à leur état de santé</li>
        </ul>

        <h4>Distanciation physique et lavage des mains</h4>
        <ul>
          <li>gardez une distance d’au moins 2 mètres des personnes avec qui vous n’habitez pas</li>
          <li>lavez-vous les mains ou désinfectez-les souvent</li>
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
          <li>portez-en un dans les espaces publics intérieurs, comme les magasins et les transports en commun</li>
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

        <div className="ontario-margin-top-40-! ontario-hide-for-print">
          <ButtonFindCentre lang={lang} />
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" aria-hidden="true" />
      </div>
    </div>
  </>
))

const R6 = () => {
  const lang = "fr"
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R6
