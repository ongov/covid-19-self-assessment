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
          En fonction de vos réponses, nous vous recommandons de <strong>vous rendre à un centre d’évaluation de la
          COVID-19 pour passer un test de dépistage dans les plus brefs délais</strong>, parce que vous présentez des
          symptômes ou que vous avez été en contact physique étroit avec une personne qui a actuellement la
          COVID‑19.
        </h2>
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
        <p className="ontario-margin-top-0-!">Sur cette page : </p>
        <ol>
          <li>
            <AnchorLink to="/autoevaluation/r7#get-tested">Passez un test de dépistage</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r7#stay-at-home">
              Sauf si vous devez subir un test, restez à la maison pendant 14 jours
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

    <div className="ontario-row ontario-results__content" id="get-tested">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print ontario-infographic-number">1.</span> Passez un test de dépistage
        </h3>
        <p className="ontario-first-line">
          Rendez-vous au centre d’évaluation le plus près pour passer un test de dépistage de la COVID-19.
        </p>

        <div className="ontario-margin-top-32-!">
          <ButtonFindCentre lang={lang} />
        </div>

      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" aria-hidden="true" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="stay-at-home">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">2.</span> Sauf si vous devez subir un test, restez à la maison
          pendant 14 jours
        </h3>
        <p className="ontario-first-line">
          On appelle cette mesure l'<strong>auto-isolement</strong>. Vous pourriez être porteur du virus sans le savoir
          et le transmettre aux gens de votre collectivité.
        </p>

        <p>Les 14 jours commencent à partir de la date à laquelle vous :</p>
        <ul>
          <li>avez commencé à ressentir des symptômes</li>
          <li>avez été exposé à la personne testée positive à la COVID-19</li>
          <li>avez reçu une alerte sur l’application mobile Alerte COVID</li>
        </ul>

        <p>
          <strong>Ne vous rendez pas dans des espaces publics sauf pour une raison essentielle</strong> (par exemple
          pour vous rendre dans un centre d’évaluation ou dans le cas d’une urgence médicale).
        </p>

        <p>
          Il s’agit de directives générales. Suivez les directives du personnel du centre d’évaluation après avoir subi
          votre test.
        </p>

        <CalloutCovidApp lang="fr"/>

        <h4>Couvre-visages et masques</h4>
        <ul>
          <li>
            portez-en un lorsque vous êtes en chemin pour subir un test ou vous rendre à une consultation à l’hôpital
          </li>
          <li>couvrez votre bouche et votre nez</li>
          <li>
            <strong>ne le touchez pas</strong> sans d’abord vous laver ou désinfecter les mains
          </li>
          <li>
            <a href="https://www.ontario.ca/fr/page/couvre-visage-et-masques-faciaux" target="_blank" rel="noopener">
              apprenez comment porter et utiliser les couvre-visages et masques
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
          <li>informez-les qu’on vous a demandé de vous auto-isoler </li>
          <li>
            si vous ne pouvez pas travailler de la maison, assurez-vous que vous et votre entreprise prenez les
            mesures de précaution adéquates pour réduire votre risque
          </li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous habitez</h4>
        <ul>
          <li>ils devraient s’auto-isoler seulement si vous avez reçu un diagnostic positif au virus </li>
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

    <div className="ontario-row ontario-results__content" id="tell-people-youve-been-in-contact-with">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">3.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">3.</span> Informez les gens avec qui vous avez été en contact
          physique étroit
        </h3>
        <p className="ontario-first-line">
          Cela concerne les personnes avec lesquelles vous avez été en contact physique étroit au
          cours des deux jours précédents :
        </p>
        <ul>
          <li>vos symptômes ont commence</li>
          <li>vous avez été exposé à la personne positive à la COVID-19 </li>
        </ul>

        <p className="ontario-margin-top-24-!">Vous devez leur dire de :</p>
        <ul>
          <li>porter attention à leur santé et de signaler tout changement à leur état de santé </li>
          <li>faire cette auto-évaluation </li>
        </ul>

        <p className="ontario-margin-top-24-!">
          Si vous avez reçu une alerte de l’application mobile Alerte COVID, suivez les instructions de l’application.
        </p>

        <p>Par contact physique étroit, on entend : </p>
        <ul>
          <li>être à moins de 2 mètres dans la même pièce, le même espace de travail ou la même zone</li>
          <li>vivre dans la même demeure</li>
          <li>être dans la même classe </li>
        </ul>
      </div>
    </div>

    <div className="ontario-row">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor-your-health">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">4.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">4.</span> Surveillez votre état de santé{" "}
        </h3>
        <p className="ontario-first-line">
          Faites attention à votre santé et portez attention à tout changement de votre état de santé{" "}
          <strong>pendant 14 jours</strong>.
        </p>

        <p>
          Votre médecin ou le centre d'évaluation vous dira vos prochaines étapes et si vous devez subir un nouveau
          test.
        </p>

        <p>
          <strong>
            La majorité des cas de COVID-19 sont légers. Si vos symptômes commencent à s’aggraver, veuillez visiter les
            services des urgences de votre région. Veuillez téléphonez avant de vous y présenter et informez-les que
            vous avez utilisé cette auto-évaluation.
          </strong>
        </p>

        <h4>Colocataires et membres de la famille avec qui vous habitez </h4>
        <ul>
          <li>ils doivent porter attention à tout changement de leur état de santé également (il s’agit de l’autosurveillance) </li>
          <li>
            les jeunes enfants pourraient présenter des symptômes moins précis, par exemple de la léthargie ou un manque
            d’appétit
          </li>
        </ul>
      </div>
    </div>
  </>
))

const R7 = () => {
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} showContactForm={false} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R7
