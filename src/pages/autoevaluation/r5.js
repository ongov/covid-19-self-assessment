import React, { forwardRef, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import CalloutCovidApp from "../../components/callout-covid-app"

const lang = "fr"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate-home"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2 className="ontario-results--subtitle">
          Vous <strong>devez rester chez vous pendant 14 jours</strong> immédiatement après votre retour au Canada.{" "}
        </h2>

        <div className="ontario-margin-top-40-! ontario-hide-for-print">
          <SaveToPDFButton ref={ref} lang={lang} />
        </div>

        <div className="ontario-hide-for-print">
          <p>Sur cette page :</p>
          <ol>
            <li>
              <AnchorLink to="/autoevaluation/r5#stay-at-home">Restez à la maison pendant 14 jours </AnchorLink>
            </li>
            <li>
              <AnchorLink to="/autoevaluation/r5#monitor-your-health">Surveillez votre état de santé </AnchorLink>
            </li>
          </ol>

          <CalloutCovidApp lang="fr" />
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="stay-at-home">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">1.</span> Restez à la maison pendant 14 jours
        </h3>
        <p className="ontario-first-line">
          On appelle cette mesure l'<strong>auto-isolement</strong>.
        </p>
        <p>
          Vous pourriez être porteur du virus sans le savoir et le transmettre aux gens de votre collectivité.{" "}
          <strong>Ne vous rendez pas dans des espaces publics sauf pour une raison essentielle</strong> (comme une
          urgence médicale).
        </p>

        <h4>Couvre-visages et masques</h4>
        <ul>
          <li>
            portez-en un lorsque vous êtes en chemin pour subir un test ou vous rendre à une consultation à l’hôpital{" "}
          </li>
          <li>couvrez votre bouche et votre nez</li>
          <li>
            <strong>ne le touchez pas</strong> sans d’abord vous laver ou désinfecter les mains
          </li>
          <li>
            <a href="https://www.ontario.ca/fr/page/couvre-visage-et-masques-faciaux" target="_blank" rel="noopener">
              apprenez comment porter un couvre-visage et un masque facial
            </a>
          </li>
        </ul>

        <h4>Produits d’épicerie, médicaments et articles essentiels </h4>
        <ul>
          <li>demandez à quelqu’un qui n’habite pas avec vous de vous procurer ces articles </li>
          <li>passez vos commandes par téléphone ou en ligne</li>
          <li>
            <strong>ne vous rendez pas</strong> dans les magasins ou supermarchés en personne{" "}
          </li>
        </ul>

        <h4>Travail et lieux de travail</h4>
        <ul>
          <li>travaillez de la maison (si possible)</li>
          <li>
            si vous ne pouvez pas travailler de la maison, téléphonez à votre gestionnaire et à votre délégué à la santé
            et à la sécurité au travail
          </li>
          <li>informez-les qu’on vous a demandé de vous auto-isoler</li>
          <li>
            discuter avec eux des prochaines étapes pour vous assurer que vous et votre entreprise prenez les bonnes
            précautions en matière de sécurité
          </li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous habitez</h4>
        <ul>
          <li>ils <strong>n’ont pas</strong> à s’auto-isoler, mais ils doivent s’autosurveiller pour voir s’ils ont les symptômes </li>
          <li>restez dans une pièce à l’écart d’eux (si possible) </li>
          <li>utilisez une salle de bains différente (si possible) </li>
          <li>gardez une distance d’au moins 2 mètres dans les espaces communs comme les cuisines ou les salons</li>
          <li>portez un couvre-visage ou un masque lorsque vous êtes en leur présence</li>
        </ul>

        <h4>Personnes avec qui vous n’habitez pas</h4>
        <ul>
          <li>communiquez avec ces personnes par téléphone ou en ligne uniquement </li>
          <li>
            <strong>ne les invitez pas</strong> à la maison et ne socialisez pas en personne
          </li>
        </ul>

        <p className="ontario-margin-top-32-!">
          <a
            href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#section-3"
            target="_blank"
            rel="noopener"
          >
            Obtenez d’autres conseils sur la façon de vous auto-isoler de façon sécuritaire
          </a>
          .
        </p>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" />
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
          Faites attention à votre santé et portez attention à tout changement de votre état de santé.
        </p>

        <p>Présentez-vous dans un centre d’évaluation pour passer un test de diagnostic de la COVID-19 si :</p>
        <ul>
          <li>vous présentez des symptômes</li>
          <li>
            vous vous êtes fait dire de vous faire tester par le service de santé publique local ou par votre
            fournisseur de soins de santé (médecin, médecin de soins primaires)
          </li>
        </ul>

        <p className="ontario-margin-top-32-!">
          <strong>N’allez pas</strong> passer un test de dépistage si vous ne présentez pas de symptômes.
        </p>

        <h4>Colocataires et membres de la famille avec qui vous habitez</h4>
        <ul>
          <li>ils doivent porter attention à tout changement de leur état de santé également (il s’agit de l’autosurveillance)</li>
          <li>
            les jeunes enfants pourraient présenter des symptômes moins précis, par exemple de la léthargie ou un manque
            d’appétit
          </li>
        </ul>
      </div>
    </div>
  </>
))

const R5 = () => {
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} showContactForm={false} showFindAssessmentCentres={true} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R5
