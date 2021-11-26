import social from "./social"
import { footer, queensPrinter } from "./footer"
import questions from "./questions"
import returnTemplate from "./return-template"
import onsetTemplate from "./onset-template"
import calloutSignup from "./callout-signup"
import feedback from "./feedback"
import contactForm from "./contact-form"
import submissionSuccess from "./callout-submission-success"
import ages from "./ages"
import labResults from "./labresults"
import resultsDate from "./time-stamp"
import buttonFindCentre from "./button-find-centre"
import formatDate from "./date-format"
import resourcesContent from "./callout-resources-content"
import calloutCovidApp from "./callout-covid-app"

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
    savePDF: "Save self-assessment result (PDF)",
    pdfFileName: "COVID-19 Self-Assessment Result",
    postalCode: "Postal code (X1X)",
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
    savePDF: "Enregistrer le résultat de l’auto-évaluation (PDF)",
    pdfFileName: "Résultat de l’auto-évaluation pour la COVID-19",
    postalCode: "Code postal (X1X)",
  },
}

export {
  general,
  social,
  footer,
  queensPrinter,
  questions,
  returnTemplate,
  onsetTemplate,
  calloutSignup,
  feedback,
  contactForm,
  submissionSuccess,
  ages,
  labResults,
  resultsDate,
  buttonFindCentre,
  formatDate,
  resourcesContent,
  calloutCovidApp,
}
