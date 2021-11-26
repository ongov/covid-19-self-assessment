import React, { forwardRef, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { general } from "../../localized_content"

import ResultsTemplate from "../../templates/results-template"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import PrintPageButton from "../../components/print-page-button"
import NearbyAssessmentCentres from "../../components/nearby-assessment-centres"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate-home" />
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content ontario-margin-bottom-0-!">
        <h2 className="ontario-results--subtitle">
          Selon vos réponses et votre situation vaccinale, vous <strong>n’avez pas besoin de vous auto-isoler</strong>.
          Toutefois, nous vous recommandons de <strong>subir un test PCR et de surveiller votre état de santé</strong>, car
          vous êtes un « contact étroit » d’une personne actuellement atteinte de la COVID-19.
        </h2>
        <p className="ontario-results--subtitle">
          Vérifiez auprès de votre{" "}
          <a
            href="http://www.health.gov.on.ca/fr/common/system/services/phu/locations.aspx"
            target="_blank"
            rel="noopener"
          >
            bureau de santé publique local
          </a>{" "}
          si vous devez prendre d’autres mesures.
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
        <div className="ontario-row ontario-row--collapse ontario-margin-top-32-!">
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
        <p className="ontario-margin-top-0-!">Sur cette page : </p>
        <ol>
          <li>
            <AnchorLink to="/autoevaluation/r9#get-tested">Passez un test de dépistage</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r9#monitor-your-health">Surveillez votre état de santé </AnchorLink>
          </li>
        </ol>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="get-tested">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print ontario-infographic-number">1.</span> Passez un test de dépistage
        </h3>

        <p>
          Puisque vous avez été exposé à la COVID-19, vous pouvez uniquement subir un test de dépistage dans un centre
          d’évaluation, une pharmacie participante  ou un laboratoire communautaire participant. Les tests antigéniques rapides ou trousses d'auto-prélèvement 
          sont seulement offerts aux personnes ne présentant pas de symptômes ou n’ayant pas été
          exposées.
        </p>

        <div className="ontario-margin-top-32-!">
          <NearbyAssessmentCentres lang={lang} />
        </div>

        <h4>Si vous savez à quel moment vous avez été exposé à une personne atteinte de la COVID-19</h4>

        <p>
          Faites-vous tester 7 jours après avoir été exposé (vous n’avez pas besoin d’être en isolement durant ces
          jours). Prenez rendez-vous et présentez-vous au centre de dépistage le plus près pour subir un test de
          dépistage de la COVID-19.
        </p>

        <h4>Si vous ignorez à quel moment vous avez été exposé à une personne atteinte de la COVID-19</h4>

        <p>
          Prenez rendez-vous et présentez-vous à l’emplacement de test le plus près pour subir un test de dépistage de
          la COVID-19 dès que possible.
        </p>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor-your-health">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">2.</span> Surveillez votre état de santé{" "}
        </h3>
        <p className="ontario-first-line">
          Nos recommandations continuent d’évoluer à mesure que nous en apprenons plus sur le virus.
        </p>

        <p>
          Prenez note de tout changement à votre état de santé pendant 10 jours. C’est ce qu’on appelle{" "}
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

        <h4>Si vous commencez à présenter des symptômes de la COVID-19</h4>
        <ul>
          <li>auto-isolez-vous (restez chez vous) et refaites cette auto-évaluation</li>
          <li>
            ne sortez de chez vous que pour vous faire tester (prenez d’abord un
            rendez-vous)
          </li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous vivez</h4>
        <ul>
          <li>ces personnes n’ont pas besoin de s’auto-isoler</li>
          <li>ils doivent signaler tout changement à leur état de santé</li>
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

        <h4>Travail et lieux de travail</h4>
        <ul>
          <li>travaillez de la maison (si possible)</li>
          <li>
            si vous ne pouvez pas travailler de la maison, informez votre employeur de votre « exposition à un contact
            étroit » pour faire en sorte que vous et votre entreprise preniez les précautions de sécurité appropriées
          </li>
          <li>discutez avec votre gestionnaire et votre délégué à la santé et à la sécurité au travail </li>
        </ul>
      </div>
    </div>
  </>
))

const R7 = () => {
  const lang = "fr"
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R7
