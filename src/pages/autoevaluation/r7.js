import React, { forwardRef, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { general } from "../../localized_content"

import ResultsTemplate from "../../templates/results-template"
import SaveToPDFButton from "../../components/save-to-pdf-button"
import PrintPageButton from "../../components/print-page-button"
import CalloutGetVaccine from "../../components/callout-get-vaccine"
import NearbyAssessmentCentres from "../../components/nearby-assessment-centres"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate-home" />
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content ontario-margin-bottom-0-!">
        <h2 className="ontario-results--subtitle">
          En fonction de vos réponses, nous vous recommandons de <strong>subir un test (et non un test antigénique rapide) et vous auto-isoler</strong>,
          parce que vous présentez des symptômes ou êtes un « contact étroit » d’une personne actuellement atteinte de
          la COVID-19.
        </h2>
        <p className="ontario-results--subtitle">
          Suivez les conseils de la santé publique si vous avez déjà passé un test de dépistage ou que vous avez reçu
          votre congé.
        </p>
        <p className="ontario-results--subtitle">
          Nos lignes directrices pour les enfants et les adultes continuent d’évoluer à mesure que nous en apprenons
          antage sur la COVID-19, la façon dont elle se propage et ses différents effets sur les gens.
        </p>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <div className="ontario-row ontario-row--collapse ontario-margin-top-32-!">
          <div className="ontario-small-12 ontario-columns">
            <SaveToPDFButton ref={ref} lang={lang} classname="print-save-button" />
          </div>
          <div className="ontario-small-12 ontario-columns">
            <PrintPageButton lang={lang} classname="print-save-button" />
          </div>
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns">&nbsp;</div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <p className="ontario-margin-top-0-!">Sur cette page : </p>
        <ol>
          <li>
            <AnchorLink to="/autoevaluation/r7#get-tested">Passez un test de dépistage</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/autoevaluation/r7#stay-at-home">
              Sauf si vous devez subir un test, restez à la maison
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

        <p>
          Puisque vous avez des symptômes ou que vous avez été exposé à la COVID-19, vous pouvez uniquement subir un
          test de dépistage dans un centre d’évaluation, une pharmacie participante ou un laboratoire communautaire participant. Les
          tests antigéniques rapides ou trousses d'auto-prélèvement sont seulement offerts aux personnes ne présentant pas de
          symptômes ou n’ayant pas été exposées.
        </p>

        <div className="ontario-margin-top-32-!">
          <NearbyAssessmentCentres lang={lang} />
        </div>

        <h4>Si vous avez des symptômes, mais aucune exposition connue à la COVID-19</h4>
        <p>
          Prenez rendez-vous et présentez-vous à l’emplacement de test le plus près pour subir un test de dépistage de
          la COVID-19 dès que vous le pouvez.
        </p>

        <p>
          Si vous croyez que vous avez un rhume ou la grippe, vous devriez tout de même subir un test ou discuter avec
          votre médecin. Les symptômes du rhume et de la grippe sont semblables à ceux de la COVID-19.
        </p>

        <h4>Si vous savez à quel moment vous avez été exposé à une personne atteinte de la COVID-19</h4>

        <p>
          Subissez un test dans les sept jours suivant l’exposition (demeurez en isolement pendant ces journées). Prenez
          rendez-vous et présentez-vous à l’emplacement de test le plus près pour subir un test de dépistage de la
          COVID-19.
        </p>

        <h4>Si vous ignorez à quel moment vous avez été exposé à une personne atteinte de la COVID-19</h4>

        <p>
          Prenez rendez-vous et présentez-vous à l’emplacement de test le plus près pour subir un test de dépistage de
          la COVID-19 dès que possible.
        </p>
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
        </h3>
        <p className="ontario-first-line">
          On appelle cette mesure l’<strong>auto-isolement</strong>. Vous pourriez être porteur du virus sans le savoir
          et le transmettre aux gens de votre collectivité.
        </p>

        <p>
          <strong>Ne vous rendez pas dans des espaces publics sauf pour une raison essentielle</strong> (par exemple
          pour vous rendre dans un centre de dépistage ou dans le cas d’une urgence médicale).
        </p>

        <p>
          Il s’agit de directives générales. Suivez les directives du personnel du centre de dépistage après avoir subi
          votre test.
        </p>

        <h4>Si vous avez des symptômes, mais aucune exposition connue à la COVID-19 </h4>
        <p>
          Restez chez vous pendant 10 jours. Les 10 jours commencent à partir de la date à laquelle vous avez commencé à
          ressentir des symptômes.
        </p>

        <p>
          Vous n’avez plus à vous auto-isoler si vous passez un test de dépistage et que le résultat est négatif (vous
          n’avez pas le virus) et que vous vous sentez mieux.
        </p>

        <h4>Si vous avez été exposé à une personne positive à la COVID-19</h4>
        <p>
          Restez chez vous pendant 10 jours et surveillez les symptômes. Les 10 jours commencent à partir de la date à
          laquelle vous avez été exposé.
        </p>

        <p>Il s’agit de 10 jours, car c’est le temps qu’il faut pour que les symptômes apparaissent.</p>

        <h4>Si vous avez reçu une alerte d’exposition de l’application Alerte COVID</h4>
        <p>Restez chez vous jusqu’à ce que vous obteniez le résultat de votre test de dépistage.</p>
        <p>
          Vous n’avez plus à vous auto-isoler si vous passez le test et que le résultat est négatif (vous n’avez pas le
          virus) et que vous vous sentez bien.
        </p>

        <h4>Colocataires et membres de la famille avec qui vous habitez</h4>
        <ul>
          <li>
            Colocataires et membres de la famille entièrement vaccinés :
            <ul>
              <li>
                ces personnes <strong>n’ont pas besoin</strong> de s’auto-isoler
              </li>
              <li>
                vérifiez auprès de votre{" "}
                <a
                  href="http://www.health.gov.on.ca/fr/common/system/services/phu/locations.aspx"
                  target="_blank"
                  rel="noopener"
                >
                  bureau de santé publique local
                </a>{" "}
                si vous devez prendre d’autres mesures
              </li>
            </ul>
          </li>
          <li>
            Colocataires et membres de la famille non vaccinés :
            <ul>
              <li>
                ces personnes doivent s’auto-isoler jusqu’à ce que vous receviez un résultat négatif au test de
                dépistage de la COVID-19 ou que vous receviez un diagnostic d’une autre maladie
              </li>
              <li>restez dans une pièce à l’écart d’eux (si possible) </li>
              <li>utilisez une salle de bains différente (si possible) </li>
              <li>gardez une distance d’au moins 2 mètres dans les espaces communs comme les cuisines ou les salons</li>
              <li>portez un couvre-visage ou un masque lorsque vous êtes en leur présence</li>
            </ul>
          </li>
        </ul>

        <h4>Couvre-visages et masques</h4>
        <ul>
          <li>
            portez-en un lorsque vous êtes en chemin pour subir un test ou vous rendre à une consultation à l’hôpital
          </li>
          <li>couvrez votre bouche, votre nez et votre menton</li>
          <li>
            <strong>ne le touchez pas</strong> sans d’abord vous laver ou désinfecter les mains
          </li>
          <li>
            <a href="https://www.ontario.ca/fr/page/couvre-visage-et-masques-faciaux" target="_blank" rel="noopener">
              apprenez comment porter et utiliser les couvre-visages et masques{" "}
              <span className="ontario-show-for-sr">{general[lang].newWindow}</span>
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
            si vous ne pouvez pas travailler de la maison, assurez-vous que vous et votre entreprise prenez les mesures
            de précaution adéquates pour réduire votre risque
          </li>
          <li>
            <a
              href="https://www.ontario.ca/fr/document/votre-guide-de-la-loi-sur-les-normes-demploi-0/conge-special-en-raison-une-maladie-infectieuse"
              target="_blank"
              rel="noopener"
            >
              informez-vos pour savoir si vous avez droit à un congé spécial en raison d’une maladie infectieuse{" "}
            </a>
            (votre employeur ne peut pas vous mettre à la porte si vous prenez ce congé)
          </li>
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
          .<span className="ontario-show-for-sr">{general[lang].newWindow}</span>
        </p>

        <CalloutGetVaccine lang="fr" />
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
          Il s’agit des personnes avec lesquelles vous étiez en contact physique étroit :
        </p>
        <ul>
          <li>2 jours avant le début de vos symptômes</li>
          <li>
            pendant les jours entre maintenant et le moment où vous avez été exposé à la personne positive à la COVID-19
          </li>
        </ul>
        <p className="ontario-margin-top-24-!">
          Si vous avez reçu une alerte de l’application mobile Alerte COVID, suivez les instructions de l’application.
        </p>
        <p className="ontario-margin-top-24-!">Vous devez leur dire de :</p>
        <ul>
          <li>porter attention à leur santé et de signaler tout changement à leur état de santé </li>
          <li>faire cette auto-évaluation </li>
        </ul>
        <p>Par contact physique étroit, on entend l’une ou l’autre des situations suivantes : </p>
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
          <strong>pendant 10 jours</strong>.
        </p>

        <p>
          Votre médecin ou le centre de dépistage vous dira vos prochaines étapes et si vous devez subir un nouveau
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
          <li>
            ils doivent porter attention à tout changement de leur état de santé également (il s’agit de
            l’autosurveillance)
          </li>
        </ul>
      </div>
    </div>
  </>
))

const R7 = () => {
  const lang = "fr"
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R7
