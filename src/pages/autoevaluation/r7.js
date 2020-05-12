import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Callout from "../../components/callout"
import ResultsTemplate from "../../templates/results-template"

const lang = "fr"

const resultsContent = (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-icon__self-isolate-home"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2>
          Sur la base de vos réponses, nous vous recommandons de{" "}
          <strong>communiquer avec un médecin ou avec Télésanté Ontario</strong> parce que vous présentez certains
          symptômes. Vous pourriez vous qualifier pour subir un test de dépistage de la COVID-19.
        </h2>
      </div>
    </div>

    <div className="ontario-row ontario-results__content">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <p className="ontario-margin-top-0-!">Sur cette page : </p>
        <ol>
          <li>
            <AnchorLink to="/autoevaluation/r7#contact-doctor">
              Communiquer avec un médecin ou avec Télésanté Ontario
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r7#stay-at-home">
              Restez à la maison sauf si un médecin ou un membre du personnel infirmier vous
              demande de quitter
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r7#tell-people-youve-been-in-contact-with">
              Avisez les gens avec qui vous avez été en contact physique étroit
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r7#monitor-your-health">Surveillez votre état de santé </AnchorLink>
          </li>
        </ol>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="contact-doctor">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Communiquer avec un médecin ou avec Télésanté Ontario</h3>
        <p>
          <strong>Ne quittez pas</strong> votre demeure et ne vous rendez pas à un centre d’évaluation en ce moment.
        </p>
        <p>
          Vous devez tout d’abord faire l’une des choses suivantes :
        </p>
        <ul>
          <li>
            communiquer avec votre fournisseur de soins primaires (par exemple, votre médecin de famille) par téléphone ou en ligne
          </li>
          <li>visiter <a href="http://www.seethedoctor.ca" target="_blank" rel="noopener">seethedoctor.ca</a> (en anglais seulement) si vous ne pouvez avoir accès à votre fournisseur de soins primaires </li>
          <li>
            téléphoner à Télésanté Ontario au <a href="tel:+18667970000">1-866-797-0000</a>&nbsp;pour parler à un membre du personnel infirmier autorisé
          </li>
        </ul>
        <p>Ils vous indiqueront la prochaine chose à faire. </p>
        <Callout
          title="Volume des appels"
          message="Télésanté Ontario connaît un volume d’appels important et répondra à votre appel aussi rapidement que possible."
        />
      </div>
    </div>

    <div className="ontario-row">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" aria-hidden="true" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="stay-at-home">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          Restez à la maison sauf si un médecin ou un membre du personnel infirmier vous demande
          de quitter{" "}
        </h3>
        <p className="ontario-first-line">
          On appelle cette mesure l'<strong>auto-isolement</strong>.
        </p>
        <p>
          Vous pourriez être contagieux. Restez à l’intérieur pour éviter que les gens de votre collectivité ne tombent
          malades.
        </p>
        <h4>Quitter votre domicile</h4>
        <ul>
          <li>
            <strong>quittez votre domicile uniquement pour des raisons essentielles</strong> (comme une urgence médicale
            ou si un médecin ou un membre du personnel infirmier vous a demandé de vous rendre dans un centre
            d’évaluation)
          </li>
        </ul>

        <h4>Aller au travail</h4>
        <ul>
          <li>travaillez de la maison (si possible)</li>
          <li>si vous ne pouvez pas travailler de la maison, téléphonez à votre gestionnaire et à votre délégué à la santé et à la sécurité au travail</li>
          <li>informez-les si vous présentez des symptômes ou si on vous a demandé de vous isoler</li>
          <li>discutez des prochaines étapes avec eux pour faire en sorte que vous et votre entreprise preniez les mesures de sécurité appropriées</li>
        </ul>

        <h4>Produits d’épicerie, médicaments et articles essentiels </h4>
        <ul>
          <li>demandez à quelqu’un qui n’habite pas avec vous de vous procurer ces articles </li>
          <li>passez vos commandes par téléphone ou en ligne</li>
          <li>
            <strong>ne vous rendez pas</strong> dans les magasins ou supermarchés en personne{" "}
          </li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous habitez</h4>
        <ul>
          <li>ils devraient eux aussi s’auto-isoler</li>
          <li>restez dans une pièce à l’écart d’eux (si possible) </li>
          <li>utilisez une salle de bains différente (si possible) </li>
          <li>
            gardez une distance d’au moins 2 mètres (6 pieds) dans les espaces communs comme la cuisine ou le salon
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
          <p>Afin de mieux vous protéger ainsi que les autres membres de votre collectivité :</p>
          <ul>
            <li>
              obtenez d’autres conseils sur la façon de{" "}
              <a
                href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#section-3"
                target="_blank"
                rel="noopener"
              >
                vous auto-isoler de façon sécuritaire
              </a>{" "}
            </li>
            <li>
              renseignez-vous sur{" "}
              <a
                href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#section-2"
                target="_blank"
                rel="noopener"
              >
                le port d’un couvre-visage et d’un masque
              </a>{" "}
            </li>
          </ul>
        </div>

        <p>
          <strong>
            La majorité des cas de COVID-19 sont légers. Si vos symptômes commencent à s’aggraver, veuillez visiter les
            services des urgences de votre région. Veuillez téléphonez avant de vous y présenter et informez-les que
            vous avez utilisé cette auto-évaluation.
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
        <div className="ontario-infographic-number">3.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Avisez les gens avec qui vous avez été en contact physique étroit </h3>
        <p className="ontario-first-line">
          Vous devriez aviser les gens <strong>de surveiller leur état de santé et de s’auto-isoler</strong> si vous
          avez été en contact physique étroit avec eux dans les 2 jours précédant l’apparition de vos symptômes.
        </p>

        <h4>Par contact physique étroit, on entend : </h4>
        <ul>
          <li>une conversation face à face pendant 15 minutes </li>
          <li>se trouver dans la même pièce pendant deux heures </li>
          <li>vivre dans la même demeure </li>
          <li>travailler au même endroit </li>
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
        <div className="ontario-infographic-number">4.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>Surveillez votre état de santé </h3>
        <p className="ontario-first-line">
          <strong>Surveillez votre état de santé pendant 14 jours complets</strong> suivant l’apparition de vos
          symptômes.
        </p>

        <h4>Colocataires et membres de la famille avec qui vous habitez </h4>
        <ul>
          <li>ils doivent eux aussi surveiller leur état de santé</li>
          <li>
            les jeunes enfants pourraient présenter des symptômes moins précis, par exemple de la léthargie ou un manque
            d’appétit
          </li>
        </ul>
      </div>
    </div>
  </>
)

const R7 = () => (
  <ResultsTemplate lang={lang} showContactForm={false}>
    {resultsContent}
  </ResultsTemplate>
)

export default R7
