import social from "./social"
import footer from "./footer"
import questions from "./questions"
import returnTemplate from "./return-template"
import onsetTemplate from "./onset-template"
import calloutSignup from "./callout-signup"
import feedback from "./feedback"
import contactForm from "./contact-form"
import submissionSuccess from "./callout-submission-success"

const general = {
  en: {
    lang: "english",
    lang_abbr: "EN",
    basePath: "/self-assessment/",
    title: "COVID-19 self-assessment",
    resultsTitle: "COVID-19 self-assessment result",
    backButtonText: "Back to previous page",
    continueButtonText: "Continue",
    yes: "Yes",
    no: "No",
    skipNavText: "Skip to main content",
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
  },
}

export {
  general,
  social,
  footer,
  questions,
  returnTemplate,
  onsetTemplate,
  calloutSignup,
  feedback,
  contactForm,
  submissionSuccess,
}
