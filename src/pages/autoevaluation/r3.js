import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"

const resultsContent = (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-icon__self-isolate"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2>Restez à la maison autant que possible.</h2>
        <p>Vous <strong>n’avez pas besoin</strong> de contacter un médecin ou Télésanté Ontario pour une évaluation.</p>
        <ol>
          <li>
            <AnchorLink to="/autoevaluation/r3#avoid-going-out">Évitez de sortir en public </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r3#monitor-your-health">Surveillez votre santé</AnchorLink>
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
          C’est ce qu’on appelle <strong>la distanciation physique</strong>.
        </p>
        <p>Limitez votre temps à l’extérieur et avec les autres pour ralentir la propagation du virus. </p>

        <h4>Quitter votre domicile</h4>
        <ul>
          <li>restez à la maison autant que possible</li>
          <li>évitez le transport en commun, sauf si vous devez l’utiliser</li>
        </ul>

        <h4>Épiceries, pharmacies et banques </h4>
        <ul>
          <li>faites les courses une fois par semaine (ou moins)</li>
          <li>n’allez à la pharmacie ou à la banque qu’en cas d’absolue nécessité</li>
          <li>passez des commandes par téléphone ou en ligne</li>
        </ul>

        <h4>Promenades et exercice</h4>
        <ul>
          <li>vous pouvez faire des promenades dans le quartier</li>
          <li>vous pouvez faire du jogging ou du vélo</li>
          <li> gardez une distance d’au moins 2 mètres (6 pieds) des autres personnes</li>
        </ul>

        <h4>Dans les espaces publics</h4>
        <ul>
          <li>évitez les grands groupes</li>
          <li>
            gardez une distance d’au moins 2 mètres (6 pieds) avec les personnes avec qui vous ne vivez pas dans les
            parcs et les magasins {" "}
          </li>
        </ul>

        <h4>Personnes avec qui vous n’habitez pas</h4>
        <ul>
          <li>ne contactez les personnes que par téléphone ou en ligne</li>
          <li><strong>n’invitez pas</strong> les gens ou ne faites pas de rencontres en personne</li>
        </ul>

        <p className="ontario-margin-top-32-!">
          Informez-vous sur{" "}
          <a href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#distanciation-physique">
            la distanciation physique
          </a>
          .
        </p>
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
        <h3>Surveillez votre santé </h3>
        <p className="ontario-first-line">
          <Link to="/autoevaluation">Refaites cette auto-évaluation</Link> si vous :
        </p>
        <ul>
          <li>commencez à vous sentir malade (difficultés respiratoires, fièvre ou nouvelle toux)</li>
          <li>
            entrez en contact étroit avec une personne qui a des difficultés respiratoires, de la fièvre ou de la toux
          </li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous habitez</h4>
        <ul>
          <li>elles devraient surveiller leur santé aussi</li>
          <li>
            les jeunes enfants peuvent présenter des symptômes moins précis, comme la léthargie ou le manque d’appétit
          </li>
        </ul>
      </div>
    </div>
  </>
)

const R3 = () => <ResultsTemplate lang="fr" resultsContent={resultsContent} />

export default R3
