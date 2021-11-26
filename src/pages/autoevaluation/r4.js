import React, { forwardRef, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"
import CalloutSignUp from "../../components/callout-signup"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import CalloutCovidApp from "../../components/callout-covid-app"
import ButtonFindCentre from "../../components/button-find-centre"

const lang = "fr"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2 className="ontario-results--subtitle">
          Selon vos réponses, vous êtes à risque de souffrir d’une maladie grave si vous contractez la COVID-19. Nous
          vous recommandons{" "}
          <strong>
            de discuter avec un médecin à propos de l’auto-isolement, de diminuer le temps que vous passez à l’extérieur
            de votre domicile, de porter un couvre-visage ou un masque et de garder le plus possible une distance avec
            les autres.
          </strong>
        </h2>

        <div className="ontario-margin-top-40-! ontario-hide-for-print">
          <SaveToPDFButton ref={ref} lang={lang} />
        </div>

        <div className="ontario-hide-for-print">
          <p>Sur cette page :</p>
          <ol>
            <li>
              <AnchorLink to="/autoevaluation/r4#your-health">Votre santé et le dépistage</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/autoevaluation/r4#community">Votre collectivité</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/autoevaluation/r4#activities">Vos activités</AnchorLink>
            </li>
          </ol>

          <CalloutCovidApp lang="fr" />
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="your-health">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">1.</span> Votre santé et le dépistage
        </h3>
        <p className="ontario-first-line">
          Vous êtes « à risque » parce que la COVID-19 affecte sévèrement les personnes qui :
        </p>
        <ul>
          <li>ont plus de 70 ans</li>
          <li>ont un problème de santé connu</li>
          <li>ont un système immunitaire affaibli</li>
        </ul>
        <p>Nos recommandations continuent d’évoluer à mesure que nous en apprenons plus sur le virus.</p>
        <p>
          <strong>Toutefois, discutez avec un médecin</strong> pour vous assurer de prendre les bonnes décisions pour
          votre santé.
        </p>
        <p>
          N’oubliez pas que le fait de quitter votre domicile et de vous réunir avec des personnes avec qui vous
          n’habitez pas comporte encore des risques.
        </p>
        <p>
          <strong>Soyez extrêmement prudent</strong> si vous quittez votre domicile.
        </p>
        <h4>Auto-isolement</h4>
        <ul>
          <li>
            selon votre situation, envisagez de rester chez vous et de ne partir que pour des raisons essentielles
            (comme une urgence médicale)
          </li>
          <li>c'est le meilleur moyen de réduire votre risque de contracter le virus</li>
          <li>
            <a
              href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#section-3"
              target="_blank"
              rel="noopener"
            >
              apprenez à vous auto-isoler
            </a>
          </li>
        </ul>

        <h4>Distanciation physique et lavage des mains</h4>
        <ul>
          <li>
            gardez une distance d’au moins 2 mètres avec les personnes qui ne font pas partie de votre ménage ou de
            votre cercle social
          </li>
          <li>éviter les endroits où cela peut être difficile (comme dans les transports en commun)</li>
          <li>lavez vos mains ou désinfectez-les souvent</li>
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
            portez-en un dans les espaces publics intérieurs, par exemple les magasins et les véhicules de transport en
            commun (certaines régions ont rendu le port du masque ou du couvre-visage obligatoire)
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

        <h4>Passez un test de dépistage dans un centre d'évaluation si :</h4>
        <ul>
          <li>vous commencez à vous sentir malade</li>
          <li>
            vous entrez en contact physique étroit avec une personne qui présente des symptômes ou qui a été récemment
            diagnostiquée comme ayant la COVID-19
          </li>
          <li>vous prévoyez visiter une maisons de soins infirmiers ou un foyer de soins de longue durée</li>
        </ul>

        <p className="ontario-margin-top-40-!">
          Faites attention à votre santé et portez attention à tout changement de votre état de santé. C’est ce qu’on
          appelle de l’autosurveillance.
        </p>

        <div className="ontario-margin-top-40-! ontario-hide-for-print">
          <ButtonFindCentre lang={lang} />
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="community">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">2.</span> Votre communauté
        </h3>

        <h4>Cercles sociaux</h4>
        <ul>
          <li>
            choisissez jusqu'à 10 personnes pour former un cercle (y compris les personnes avec lesquelles vous vivez)
          </li>
          <li>
            vous pouvez interagir à 10 sans vous éloigner physiquement (comme pour donner des câlins, être à moins de 2
            mètres){" "}
          </li>
          <li>
            vous ou d'autres personnes de votre entourage <strong>ne pouvez pas</strong> être dans plus d'un cercle
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
          <li>portez un couvre-visage ou un masque </li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous habitez</h4>
        <ul>
          <li>ils doivent porter attention à tout changement de leur état de santé et signaler tout changement </li>
          <li>
            les jeunes enfants pourraient présenter des symptômes moins précis, par exemple de la léthargie ou un manque
            d’appétit
          </li>
        </ul>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" aria-hidden="true" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="activities">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">3.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print ontario-infographic-number">3.</span> Vos activités
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
          <li>discutez avec votre gestionnaire et votre délégué à la santé et à la sécurité au travail</li>
        </ul>

        <h4>Promenades, exercices physiques, parcs et places</h4>
        <ul>
          <li>portez un couvre-visage ou un masque lorsque vous êtes à l’extérieur de votre domicile</li>
          <li>vous pouvez vous promener, courir ou faire du vélo</li>
          <li>vous pouvez sortir le chien et faire des pique-niques et barbecues</li>
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
  </>
))

const R4 = () => {
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} showContactForm={false} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R4
