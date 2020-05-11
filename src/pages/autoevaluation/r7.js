import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Callout from "../../components/callout"
import ResultsTemplate from "../../templates/results-template"

const resultsContent = (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-icon__self-isolate-home"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2>
          Contactez un médecin ou Télésanté Ontario. Vous pourriez être admissible à un test de dépistage de la
          COVID-19.
        </h2>
        <p>
          <strong>Ne quittez pas</strong> votre domicile. <strong>N’allez pas</strong> dans un hôpital ou une clinique.
        </p>
        <p>
          Contactez <strong>d’abord</strong> :
        </p>
        <ul>
          <li>
            votre fournisseur de soins primaires (par exemple, votre médecin de famille) par téléphone ou en ligne ou
          </li>
          <li>
            Télésanté Ontario au <a href="tel:+18667970000">1-866-797-0000</a>&nbsp;(pour parler à une infirmière autorisée
          </li>
        </ul>
        <p>Ils vous diront ce qu’il faut faire par la suite. </p>
        <Callout
          title="Volume des appels"
          message="Télésanté Ontario connaît un volume d’appels important et répondra à votre appel aussi rapidement que possible."
        />
      </div>
    </div>

    <div className="ontario-row ontario-results__content">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <p className="ontario-margin-top-0-!">Après avoir appelé, vous devez :</p>
        <ol>
          <li>
            <AnchorLink to="/autoevaluation/r7#stay-at-home">
              Restez à la maison sauf si un médecin ou une infirmière vous demande de partir
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r7#tell-people-youve-been-in-contact-with">
              Parlez aux personnes avec lesquelles vous avez été en contact
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r7#monitor-your-health">Surveillez votre santé</AnchorLink>
          </li>
        </ol>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="stay-at-home">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Restez à la maison, sauf si un médecin ou une infirmière vous dit de partir</h3>
        <p className="ontario-first-line">
          C’est ce qu’on appelle <strong>l’auto-isolement</strong>.
        </p>
        <p>
          Vous pouvez être contagieux. Restez à la maison pour que les autres membres de votre communauté ne tombent pas
          malades.
        </p>
        <h4>Quitter votre domicile</h4>
        <ul>
          <li>
            <strong>ne quittez votre domicile que pour des raisons essentielles</strong> (comme une urgence médicale ou si on vous a dit
            de vous rendre dans un centre d’évaluation)
          </li>
        </ul>

        <h4>Produits alimentaires, médicaments et articles essentiels </h4>
        <ul>
          <li>demandez à une personne extérieure à votre domicile de vous livrer ces articles</li>
          <li>passez des commandes par téléphone ou en ligne</li>
          <li><strong>n’entrez pas</strong> dans les magasins ou les supermarchés en personne</li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous habitez </h4>
        <ul>
          <li>ils doivent aussi s’auto-isoler</li>
          <li>restez dans une pièce éloignée de ces personnes</li>
          <li>gardez une distance d’au moins 2 mètres (6 pieds)</li>
        </ul>

        <h4>Personnes avec qui vous n’habitez pas</h4>
        <ul>
          <li>ne contactez les personnes que par téléphone ou en ligne</li>
          <li><strong>n’invitez pas</strong> les gens ou ne faites pas de rencontres en personne</li>
        </ul>

        <p className="ontario-margin-top-32-!">
          Obtenez d’autres conseils sur la façon de{" "}
          <a href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#section-3">s’auto-isoler</a> en
          toute sécurité pour vous protéger et protéger les autres membres de votre communauté.
        </p>
        <p>
          <strong>
            La majorité des maladies liées à la COVID-19 sont bénignes. Si vos symptômes commencent à s’aggraver,
            veuillez vous rendre au service d’urgence de votre localité. Appelez-les avant de partir et faites-leur
            savoir que vous avez utilisé cet outil d’auto-évaluation.
          </strong>
        </p>
      </div>
    </div>

    <div className="ontario-row">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="tell-people-youve-been-in-contact-with">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Parlez aux personnes avec lesquelles vous avez été en contact</h3>
        <p className="ontario-first-line">
          Vous devez dire <strong>aux personnes de s’auto-isoler si vous avez été en contact étroit</strong> avec elles
          dans les 2 jours précédant le début de vos symptômes.
        </p>

        <h4>Par contact étroit, on entend :</h4>
        <ul>
          <li>une conversation en tête à tête pendant 15 minutes</li>
          <li>être dans la même pièce pendant 2 heures</li>
        </ul>
      </div>
    </div>

    <div className="ontario-row">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor-your-health">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">3.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Surveillez votre santé</h3>
        <p className="ontario-first-line">
          <strong>Surveillez votre santé pendant 14 jours complets</strong> après le début des symptômes.
        </p>

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

const R7 = () => <ResultsTemplate lang="fr" resultsContent={resultsContent} />

export default R7
