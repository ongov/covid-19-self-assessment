import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"

const resultsContent = (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-icon__self-isolate-home"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2>Vous devriez rester à la maison et surveiller votre santé, car vous faites partie d’un groupe à risque.</h2>
        <p>Vous <strong>n’avez pas besoin</strong> de contacter un médecin ou Télésanté Ontario pour une évaluation.</p>
        <ol>
          <li>
            <AnchorLink to="/autoevaluation/r4#stay-at-home">Restez à la maison </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r4#monitor-your-health">Surveillez votre santé </AnchorLink>
          </li>
        </ol>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="stay-at-home">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Restez à la maison </h3>
        <p className="ontario-first-line">
          C’est ce qu’on appelle <strong>l’auto-isolement</strong>.
        </p>
        <p>
          Vous devriez le faire pour vous protéger parce que vous avez dit que l’une des situations suivantes s’applique
          à vous :
        </p>
        <ul>
          <li>vous avez 65 ans ou plus</li>
          <li>vous souffrez d’une maladie qui affecte votre système immunitaire (par exemple, le VIH/sida)</li>
          <li>vous avez un problème de santé chronique (par exemple, diabète, maladie cardiaque)</li>
          <li>vous suivez un traitement qui affecte votre système immunitaire (par exemple, la chimiothérapie)</li>
        </ul>

        <h4>Quitter votre domicile</h4>
        <ul>
          <li>
            <strong>ne quittez votre domicile que pour des raisons essentielles</strong> (comme une urgence médicale)
          </li>
        </ul>

        <h4>Test de dépistage de la COVID-19</h4>
        <ul>
          <li>
            <strong>ne vous rendez pas</strong> dans un hôpital ou une clinique pour faire un test de dépistage de la
            COVID-19, sauf si un médecin ou un fournisseur de soins de santé vous le demande
          </li>
        </ul>

        <h4>Produits alimentaires, médicaments et articles essentiels</h4>
        <ul>
          <li>demandez à une personne extérieure à votre domicile de vous livrer ces articles</li>
          <li>passez des commandes par téléphone ou en ligne</li>
          <li>
            <strong>n’entrez pas</strong> dans les magasins ou les supermarchés en personne
          </li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous habitez</h4>
        <ul>
          <li>restez dans une pièce éloignée de ces personnes</li>
          <li>garder une distance d’au moins 2 mètres (6 pieds)</li>
        </ul>

        <h4>Personnes avec qui vous n’habitez pas</h4>
        <ul>
          <li>ne contactez les personnes que par téléphone ou en ligne</li>
          <li><strong>n’invitez pas</strong> les gens ou ne faites pas de rencontres en personne</li>
        </ul>

        <p className="ontario-margin-top-32-!">
          Obtenez d’autres conseils sur la façon de{" "}
          <a href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#section-3">s’auto-isoler</a> en
          toute sécurité pour vous protéger et protéger les autres membres de votre communauté.  {" "}
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
        <h3>Surveillez votre santé</h3>
        <p className="ontario-first-line">
          <Link to="/autoevaluation">Refaites cette auto-évaluation</Link> si vous : 
        </p>
        <ul>
          <li>commencez à vous sentir malade (difficultés respiratoires, fièvre ou nouvelle toux)</li>
          <li>
            entrez en contact étroit avec une personne qui a des difficultés respiratoires, de la fièvre ou de la toux
          </li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous habitez </h4>
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

const R4 = () => <ResultsTemplate lang="fr" resultsContent={resultsContent} />

export default R4
