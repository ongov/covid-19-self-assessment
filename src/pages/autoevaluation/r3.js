import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"

const lang = "fr"

const resultsContent = (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-icon__self-isolate"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2>
          Sur la base de vos réponses, nous vous recommandons de{" "}
          <strong>continuer à demeurer à la maison et à limiter le temps que vous passez à l’extérieur</strong> parce
          que vous ne semblez pas présenter de symptômes ou faire partie d’un groupe à risque.
        </h2>
        <p>
          Vous <strong>n’avez pas</strong> besoin de communiquer avec un médecin ou avec Télésanté Ontario pour subir
          une évaluation à l’heure actuelle.
        </p>

        <p>Sur cette page :</p>
        <ol>
          <li>
            <AnchorLink to="/autoevaluation/r3#avoid-going-out">Évitez de sortir en public </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r3#monitor-your-health">Surveillez votre état de santé</AnchorLink>
          </li>
        </ol>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="avoid-going-out">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Évitez de sortir en public</h3>
        <p className="ontario-first-line">
          Cette mesure se nomme <strong>distanciation physique</strong>.
        </p>
        <p>
          Limitez le temps que vous passez à l’extérieur et avec des gens avec qui vous n’habitez pas pour ralentir la
          propagation du virus.{" "}
        </p>

        <h4>Quitter votre domicile</h4>
        <ul>
          <li>restez à la maison le plus possible</li>
          <li>évitez de prendre le transport en commun sauf si c’est absolument nécessaire </li>
          <li>travaillez de la maison (si possible)</li>
        </ul>

        <h4>Épiceries, pharmacies et banques </h4>
        <ul>
          <li>allez faire l’épicerie une fois par semaine ou moins </li>
          <li>présentez-vous dans les pharmacies et les banques uniquement si c’est absolument nécessaire </li>
          <li>passez vos commandes par téléphone ou en ligne </li>
        </ul>

        <h4>Faites des promenades et de l’activité physique avec les personnes avec qui vous habitez </h4>
        <ul>
          <li>vous pouvez faire une promenade dans votre voisinage </li>
          <li>vous pouvez faire de la course à pied ou du vélo dans les environs </li>
          <li>gardez une distance d’au moins 2 mètres (6 pieds) avec les gens avec qui vous n’habitez pas </li>
        </ul>

        <h4>Dans les lieux publics</h4>
        <ul>
          <li>évitez les grands groupes </li>
          <li>
            gardez une distance d’au moins 2 mètres (6 pieds) avec les gens avec qui vous n’habitez pas dans les parcs
            et les magasins{" "}
          </li>
        </ul>

        <h4>Personnes avec qui vous n’habitez pas</h4>
        <ul>
          <li>communiquez avec ces personnes par téléphone ou en ligne uniquement </li>
          <li>
            <strong>ne les invitez pas</strong> à la maison et ne socialisez pas en personne
          </li>
        </ul>

        <div className="ontario-margin-top-32-!">
          <p>Renseignez-vous sur :</p>
          <ul>
            <li>
              {" "}
              <a
                href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#distanciation-physique"
                target="_blank"
                rel="noopener"
              >
                la distanciation physique
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#section-1"
                target="_blank"
                rel="noopener"
              >
                la façon de réduire votre exposition au virus
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="ontario-row">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor-your-health">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Surveillez votre état de santé</h3>
        <p className="ontario-first-line">
          <Link to="/autoevaluation">Faites cette auto-évaluation de nouveau</Link> si vous :
        </p>
        <ul>
          <li>commencez à vous sentir malade (difficulté à respirer, fièvre ou nouvelle toux)</li>
          <li>
            êtes en contact physique étroit avec une personne qui a de la difficulté à respirer, qui fait de la fièvre
            ou qui présente une nouvelle toux
          </li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous habitez</h4>
        <ul>
          <li>ils doivent eux aussi surveiller leur état de santé </li>
          <li>
            les jeunes enfants pourraient présenter des symptômes moins précis, par exemple de la léthargie ou un manque
            d’appétit
          </li>
        </ul>
      </div>
    </div>
  </>
)

const R3 = () => (
  <ResultsTemplate lang={lang} showContactForm={false}>
    {resultsContent}
  </ResultsTemplate>
)

export default R3
