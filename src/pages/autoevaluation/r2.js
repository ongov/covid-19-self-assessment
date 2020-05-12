import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"
import CalloutSignUp from "../../components/callout-signup"

const lang = "fr"

const resultsContent = (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-icon__self-isolate-home"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2>Sur la base de vos réponses, nous vous recommandons de <strong>rester à la maison pendant 14 jours</strong> parce que vous présentez des symptômes. </h2>

        <p>
          Vous <strong>n'avez pas besoin</strong> de communiquer avec un médecin ou avec Télésanté Ontario pour subir une évaluation à l’heure actuelle.
        </p>

        <p>Sur cette page :</p>
        <ol>
          <li>
            <AnchorLink to="/autoevaluation/r2#stay-at-home">Restez à la maison pendant 14 jours suivant l’apparition de vos symptômes </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r2#tell-people-youve-been-in-contact-with">
              Avisez les gens avec qui vous avez été en contact physique étroit
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r2#monitor-your-health">Surveillez votre état de santé </AnchorLink>
          </li>
        </ol>
      </div>
    </div>

    <CalloutSignUp lang={lang}></CalloutSignUp>

    <div className="ontario-row ontario-results__content" id="stay-at-home">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Restez à la maison pendant 14 jours suivant l’apparition de vos symptômes</h3>
        <p className="ontario-first-line">
          On appelle cette mesure <strong>l’auto-isolement</strong>.
        </p>
        <p>
          Vous pourriez être contagieux. Restez à l’intérieur pour éviter que les gens de votre collectivité ne tombent malades.
        </p>
        <h4>Quitter votre domicile</h4>
        <ul>
          <li>
            <strong>quittez votre domicile uniquement pour des raisons essentielles</strong> (comme une urgence médicale)
          </li>
        </ul>

        <h4>Test de dépistage de la COVID-19</h4>
        <ul>
          <li>
            <strong>ne vous présentez pas</strong> à l’hôpital ou à une clinique pour subir un test de dépistage de la COVID-19 sauf si un médecin ou un
            fournisseur de soins de santé vous demande de le faire
          </li>
        </ul>

        <h4>Aller au travail</h4>
        <ul>
          <li>travaillez de la maison (si possible)</li>
          <li>si vous ne pouvez pas travailler de la maison, téléphonez à votre gestionnaire et à votre délégué à la santé et à la sécurité au travail</li>
          <li>informez-les si vous présentez des symptômes ou si on vous a demandé de vous isoler</li>
          <li>discutez des prochaines étapes avec eux pour faire en sorte que vous et votre entreprise preniez les mesures de sécurité appropriées</li>
        </ul>

        <h4>Produits d’épicerie, médicaments et articles essentiels</h4>
        <ul>
          <li>demandez à quelqu’un qui n’habite pas avec vous de vous procurer ces articles </li>
          <li>passez vos commandes par téléphone ou en ligne</li>
          <li>
            <strong>ne vous rendez pas</strong> dans les magasins ou supermarchés en personne
          </li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous habitez</h4>
        <ul>
          <li>ils devraient eux aussi s’auto-isoler</li>
          <li>restez dans une pièce à l’écart d’eux (si possible)</li>
          <li>utilisez une salle de bains différente (si possible) </li>
          <li>gardez une distance d’au moins 2 mètres (6 pieds) dans les espaces communs comme la cuisine ou le salon </li>
        </ul>

        <h4>Personnes avec qui vous n’habitez pas</h4>
        <ul>
          <li>communiquez avec ces personnes par téléphone ou en ligne uniquement </li>
          <li>
            <strong>ne les invitez pas</strong> à la maison et ne socialisez pas en personne
          </li>
        </ul>

        <div className="ontario-margin-top-32-!">
          <p>Afin de mieux vous protéger ainsi que les autres membres de votre collectivité :</p>
          <ul>
            <li>obtenez d’autres conseils sur la façon de{" "}
            <a href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#section-3" target="_blank" rel="noopener">vous auto-isoler de façon sécuritaire </a> {" "}</li>
            <li>renseignez-vous sur {" "}<a href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#section-2" target="_blank" rel="noopener">le port d’un couvre-visage et d’un masque</a>{" "}</li>
          </ul>
        </div>

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
        <h3>Avisez les gens avec qui vous avez été en contact physique étroit</h3>

        <p className="ontario-first-line">
          Vous devriez dire aux gens de <strong>surveiller leur état de santé et de s’auto-isoler</strong> si vous avez été en contact physique étroit
          avec eux dans les 2 jours précédant l’apparition de vos symptômes.
        </p>

        <h4>Par contact physique étroit, on entend :</h4>
        <ul>
          <li>une conversation face à face pendant 15 minutes </li>
          <li>se trouver dans la même pièce pendant deux heures</li>
          <li>vivre dans la même demeure</li>
          <li>travailler au même endroit</li>
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
        <h3>Surveillez votre état de santé</h3>

        <p className="ontario-first-line">
          <strong>Surveillez votre état de santé pendant 14 jours complets</strong> suivant l’apparition de vos symptômes.
        </p>

        <p>
          <Link to="/autoevaluation">Faites cette auto-évaluation de nouveau</Link> à la fin de la période de 14 jours ou avant si vous :
        </p>
        <ul>
          <li>commencez à vous sentir encore plus malade</li>
          <li>développez de nouveaux symptômes</li>
          <li>êtes en contact physique étroit avec une personne qui a de la difficulté à respirer, qui fait de la fièvre ou qui présente une nouvelle toux </li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous habitez </h4>
        <ul>
          <li>ils doivent eux aussi surveiller leur état de santé</li>
          <li>
            les jeunes enfants pourraient présenter des symptômes moins précis, par exemple de la léthargie ou un manque d’appétit
          </li>
        </ul>
      </div>
    </div>
  </>
)

const R2 = () => <ResultsTemplate lang={lang}>{resultsContent}</ResultsTemplate>

export default R2
