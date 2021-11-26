import React from "react"
import social from "./social"
import { footer, queensPrinter } from "./footer"
import questions from "./questions"
import feedback from "./feedback"
import submissionSuccess from "./callout-submission-success"
import ages from "./ages"
import labResults from "./labresults"
import resultsDate from "./time-stamp"
import buttonFindCentre from "./button-find-centre"
import formatDate from "./date-format"
import resourcesContent from "./callout-resources-content"
import calloutGetVaccine from "./callout-get-vaccine"
import calloutSymptoms from "./callout-symptoms"
import nearbyAssessmentCentres from "./nearby-assessment-centres"

const general = {
  en: {
    lang: "english",
    lang_abbr: "EN",
    basePath: "/self-assessment/",
    title: "COVID-19 self-assessment",
    resultsTitle: "COVID-19 self-assessment result",
    backButtonText: "Back to previous page",
    continueButtonText: "Continue",
    skipButtonText: "Skip",
    yes: "Yes",
    no: "No",
    skipNavText: "Skip to main content",
    printPage: "Print self-assessment result",
    savePDF: "Save self-assessment result (PDF)",
    pdfFileName: "COVID-19 Self-Assessment Result",
    postalCode: "Postal code (X1X)",
    screeningCalloutHeading: "Screening a child younger than 18?",
    screeningCalloutText:
      "Use the COVID-19 school screening to get recommendations that are more specific for children (younger than 18 years old).",
    screeningCalloutLink: "https://covid-19.ontario.ca/school-screening/",
    newWindow: "This link will open in a new window",
    lockdownAlert: (
      <p>
        Read the {" "}
        <a href="https://www.ontario.ca/page/reopening-ontario" target="_blank" rel="noopener">
          plan to safely reopen Ontario
        </a>
        {" "}and continue to follow the{" "}
        <a href="https://covid-19.ontario.ca/public-health-measures" target="_blank" rel="noopener">
        restrictions and public health measures
        </a>
        .
      </p>
    ),
    landingCallout: (
      <>
        <p className="ontario-margin-top-0-!">
          <strong>If this is a medical emergency, call 911.</strong> Advise them of your symptoms and if you have
          recently travelled.
        </p>

        <p>
          Everyone in your household who is not fully vaccinated must stay home if anyone has COVID-19 symptoms or is
          waiting for test results after experiencing symptoms.
        </p>

        <p className="ontario-margin-bottom-0-!">
          Stay home until the person with symptoms gets a negative COVID-19 test result, or is cleared by public health,
          or is diagnosed with another illness.
        </p>
      </>
    ),
  },
  fr: {
    lang: "français",
    lang_abbr: "FR",
    basePath: "/autoevaluation/",
    title: "COVID-19 auto-évaluation",
    resultsTitle: "Résultat de l’auto-évaluation pour la COVID-19",
    backButtonText: "Retour à la page précédente",
    continueButtonText: "Continuer",
    yes: "Oui",
    no: "Non",
    skipNavText: "Passer directement au contenu principal",
    printPage: "Imprimer résultat de l’auto-évaluation",
    savePDF: "Enregistrer résultat de l’auto-évaluation (PDF)",
    pdfFileName: "Résultat de l’auto-évaluation pour la COVID-19",
    postalCode: "Code postal (X1X)",
    screeningCalloutHeading: "Vous effectuez un dépistage chez un enfant de moins de 18 ans?",
    screeningCalloutText:
      "Faites le dépistage de la COVID-19 pour les écoles et obtenez des recommandations qui concernent plus particulièrement les enfants (de moins de 18 ans).",
    screeningCalloutLink: "https://covid-19.ontario.ca/depistage-pour-les-ecoles/",
    newWindow: "Ce lien s’ouvre dans une nouvelle fenêtre",
    lockdownAlert: (
      <p>
        Consultez le{" "}
        <a href="https://www.ontario.ca/fr/page/deconfinement-de-lontario" target="_blank" rel="noopener">
          plan pour un déconfinement prudent en Ontario
        </a>
        {" "}et Continuez de suivre les{" "}
        <a href="https://covid-19.ontario.ca/fr/mesures-de-sante-publique" target="_blank" rel="noopener">
          restrictions et les mesures de santé publique
        </a>
        .
      </p>
    ),
    landingCallout: (
      <>
        <p className="ontario-margin-top-0-!">
          <strong>S’il s’agit d’une urgence médicale, composez le 911.</strong> Veuillez les informer de vos symptômes
          et indiquez si vous avez voyagé récemment.
        </p>

        <p>
          Toutes les personnes d’un même foyer qui n’est pas complètement vacciné doivent rester à la maison si l’un des
          membres du foyer présente des symptômes de la COVID-19 ou attend le résultat du test de diagnostic qu’il a
          fait par suite de l’apparition de symptômes.
        </p>

        <p className="ontario-margin-bottom-0-!">
          Toutes les personnes doivent rester à la maison jusqu’à ce que la personne présentant des symptômes reçoive un
          résultat négatif au test de diagnostic de la COVID-19 ou un autre diagnostic ou qu’elle soit autorisée à
          sortir par un bureau de santé publique.
        </p>
      </>
    ),
  },
}

export {
  general,
  social,
  footer,
  queensPrinter,
  questions,
  feedback,
  submissionSuccess,
  ages,
  labResults,
  resultsDate,
  buttonFindCentre,
  formatDate,
  resourcesContent,
  calloutGetVaccine,
  calloutSymptoms,
  nearbyAssessmentCentres,
}
