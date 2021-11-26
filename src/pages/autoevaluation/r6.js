import React, { forwardRef, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"
import ButtonFindCentre from "../../components/button-find-centre"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import CalloutCovidApp from "../../components/callout-covid-app"

const lang = "fr"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate-home"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content ontario-margin-bottom-0-!">
        <h2 className="ontario-results--subtitle">
          En fonction de vos réponses, nous vous recommandons{" "}
          <strong>d'accorder une attention particulière à votre santé et de signaler tout changement</strong> dû à un
          contact physique étroit avec une personne qui présente des symptômes ou qui a récemment voyagé.
        </h2>
        <p className="ontario-results--subtitle">
          Nos recommandations continuent d’évoluer à mesure que nous en apprenons plus sur le virus.
        </p>
        <p className="ontario-results--subtitle">
          Vérifiez auprès de votre{" "}
          <a
            href="http://www.health.gov.on.ca/fr/common/system/services/phu/locations.aspx"
            target="_blank"
            rel="noopener"
          >
            bureau de santé publique local
          </a>{" "}
          si vous devez prendre d'autres mesures.
        </p>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <div className="ontario-row ontario-row--collapse ontario-margin-top-16-!">
          <div className="ontario-small-12 ontario-medium-6 ontario-large-7 ontario-end ontario-columns">
            <SaveToPDFButton ref={ref} lang={lang} />
          </div>
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <p>Sur cette page :</p>
        <ol>
          <li>
            <AnchorLink to="/autoevaluation/r6#monitor">Surveillez votre santé pendant 14 jours </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r6#activities">Aller au travail, à l’école ou au magasin</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r6#healthy">
              Rester en santé et participer à des rassemblements sociaux{" "}
            </AnchorLink>
          </li>
        </ol>

        <CalloutCovidApp lang="fr" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">1.</span> Surveillez votre santé pendant 14 jours
        </h3>
        <p className="ontario-first-line">
          Prenez note de tout changement à votre état de santé. C'est ce qu'on appelle l'autosurveillance. Les 14 jours
          commencent à partir de la date à laquelle vous avez eu un contact physique étroit avec cette personne.
        </p>
        <p>
          Vous pouvez aller faire vos activités habituelles pendant ces 14 jours{" "}
          <strong>si vous ne présentez pas de symptômes</strong>.{" "}
        </p>

        <h4>Si vous commencez à présenter des symptômes de la COVID-19 </h4>
        <ul>
          <li>auto-isolez-vous (restez chez vous) et refaites cette auto-évaluation </li>
          <li>ne sortez de chez vous que pour vous faire tester dans un centre d'évaluation</li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous vivez</h4>
        <ul>
          <li>ils doivent vérifier auprès du bureau local de santé publique s'il y a d'autres mesures à prendre</li>
          <li>ils doivent signaler tout changement à leur état de santé</li>
          <li>
            les jeunes enfants peuvent présenter des symptômes moins marqués, comme la léthargie ou le manque d'appétit
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

    <div className="ontario-row ontario-results__content" id="activities">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">2.</span> Aller au travail, à l’école ou au magasin
        </h3>

        <h4>Boutiques et magasins</h4>
        <ul>
          <li>
            utilisez la collecte en bordure de trottoir ou ayez recours à la livraison autant que possible pour vos
            achats
          </li>
          <li>porter un masque ou un couvre-visage si vous vous rendez en personne</li>
          <li>faire des courses et des achats une fois par semaine ou moins et aux heures moins fréquentées</li>
          <li>
            gardez une distance d’au moins 2 mètres avec les personnes qui ne font pas partie de votre ménage ou de
            votre cercle social
          </li>
        </ul>

        <h4>Travail et lieux de travail</h4>
        <ul>
          <li>
            travaillez de la maison ou réduisez le nombre de jours où vous êtes au travail en personne (si possible)
          </li>
          <li>
            si vous ne pouvez pas travailler de la maison, assurez-vous que vous et votre entreprise prenez les mesures
            de précaution adéquates pour réduire votre risque
          </li>
          <li>discutez avec votre gestionnaire et votre délégué à la santé et à la sécurité au travail </li>
        </ul>

        <h4>Promenades, exercices physiques, parcs et places</h4>
        <ul>
          <li>vous pouvez vous promener, courir ou faire du vélo </li>
          <li>vous pouvez sortir le chien et faire des pique-niques et barbecues </li>
          <li>
            gardez une distance d’au moins 2 mètres avec les personnes qui ne font pas partie de votre ménage ou de
            votre cercle social
          </li>
        </ul>

        <p className="ontario-margin-top-40-!">
          <a
            href="https://www.ontario.ca/fr/page/deconfinement-de-lontario-par-etapes#section-3"
            target="_blank"
            rel="noopener"
          >
            Informez-vous davantage à propos de la réouverture à l’étape 3.{" "}
            <span className="ontario-show-for-sr">This link will open in a new window.</span>
          </a>
        </p>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="healthy">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">3.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">3.</span>
          Rester en santé et participer à des rassemblements sociaux
        </h3>

        <h4>Distanciation physique et lavage des mains</h4>
        <ul>
          <li>
            gardez une distance d'au moins 2 mètres des personnes avec qui vous n’habitez pas ou qui ne font pas partie
            de votre cercle social
          </li>
          <li>lavez-vous les mains ou désinfectez-les souvent</li>
          <li>
            <a
              href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19"
              target="_blank"
              rel="noopener"
            >
              apprenez à réduire votre exposition au virus
            </a>
          </li>
        </ul>

        <h4>Couvre-visages et masques</h4>
        <ul>
          <li>
            portez-en un dans les espaces publics intérieurs, comme les magasins et les transports en commun (certaines
            régions et collectivités ont rendu le port du masque obligatoire)
          </li>
          <li>
            portez-en un à l’extérieur lorsque vous ne pouvez pas garder une distance d’au moins 2 mètres avec des
            personnes qui ne font pas partie de votre ménage ou de votre cercle social{" "}
          </li>
          <li>couvrez votre bouche et votre nez </li>
          <li>
            <strong>ne le touchez pas</strong> sans d’abord vous laver ou désinfecter les mains
          </li>
          <li>
            <a href="https://www.ontario.ca/fr/page/couvre-visage-et-masques-faciaux" target="_blank" rel="noopener">
              apprenez à porter un couvre-visage ou un masque
            </a>
          </li>
        </ul>

        <h4>Cercles sociaux</h4>
        <ul>
          <li>
            choisissez jusqu'à 10 personnes pour former un cercle (y compris les personnes avec lesquelles vous vivez)
          </li>
          <li>
            vous pouvez interagir à 10 sans vous distancer physiquement (par exemple, en donnant des câlins, en étant à
            moins de 2 mètres)
          </li>
          <li>
            vous ou d'autres personnes de votre cercle <strong>ne pouvez pas</strong> être dans plus d'un cercle
          </li>
          <li>
            <a
              href="https://www.ontario.ca/fr/page/creez-un-cercle-social-durant-la-pandemie-de-covid-19"
              target="_blank"
              rel="noopener"
            >
              apprenez comment créer un cercle social
            </a>
          </li>
        </ul>

        <h4>Rassemblement sociaux</h4>
        <ul>
          <li>
            cela comprend les rassemblements dans les maisons et les cours des gens, les parcs et autres lieux de
            loisirs
          </li>
          <li>
            vous pouvez organiser des rassemblements intérieurs jusqu'à 10 personnes et des rassemblements extérieurs
            jusqu'à 25 personnes
          </li>
          <li>
            <strong>vous ne pouvez</strong> pas combiner des rassemblements intérieurs et extérieurs
          </li>

          <li>
            <strong>vous devez</strong> garder une distance d’au moins 2 mètres avec les personnes qui ne font pas
            partie de votre ménage ou de votre cercle social
          </li>
          <li>vous devez porter un masque ou un couvre-visage </li>
        </ul>
      </div>
    </div>
  </>
))

const R6 = () => {
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} showContactForm={false} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R6
