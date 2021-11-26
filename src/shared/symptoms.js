import React from "react"

const symptomsTitle = {
  en: {
    text: "Are you currently experiencing any of these symptoms?",
    sup_text:
      "Choose any/all that are new, worsening, and not related to other known causes or conditions you already have.",
  },
  fr: {
    text: "Présentez-vous actuellement l’un des symptômes suivants?",
    sup_text:
      "Sélectionnez tous les symptômes qui sont nouveaux, qui s’aggravent et qui ne sont pas liés à d'autres causes ou affections connues dont vous souffrez déjà.",
  },
}

const symptoms = {
  fever_and_or_chills: {
    en: {
      text: "Fever and/or chills",
      sup_text: "Temperature of 37.8 degrees Celsius/100 degrees Fahrenheit or higher",
    },
    fr: {
      text: "Fièvre ou frissons",
      sup_text: "Température de 37,8 degrés Celsius/100 degrés Fahrenheit ou plus",
    },
    value: "1",
  },
  cough_or_barking_cough: {
    en: {
      text: "Cough or barking cough (croup)",
      sup_text:
        "Continuous, more than usual, making a whistling noise when breathing (not related to asthma, post-infectious reactive airways, COPD, or other known causes or conditions you already have)",
    },
    fr: {
      text: "Toux ou toux aboyante (laryngite)",
      sup_text:
        "Continue et plus forte que d’habitude, bruit de sifflement lors de la respiration (non liée à l'asthme, aux voies respiratoires réactionnelles post-infectieuses, à la MPOC ou à d'autres causes ou affections connues dont vous souffrez déjà)",
    },
    value: "1",
  },
  shortness_of_breath: {
    en: {
      text: "Shortness of breath",
      sup_text:
        "Out of breath, unable to breathe deeply (not related to asthma or other known causes or conditions you already have)",
    },
    fr: {
      text: "Essoufflement",
      sup_text:
        "Être essoufflé, incapable de respirer profondément (non lié à l'asthme ou à d'autres causes ou affections connues dont vous souffrez déjà)",
    },
    value: "1",
  },
  lost_taste_smell: {
    en: {
      text: "Decrease or loss of taste or smell",
      sup_text:
        "Not related to seasonal allergies, neurological disorders, or other known causes or conditions you already have",
    },
    fr: {
      text: "Diminution ou perte du goût ou de l’odorat",
      sup_text:
        "Non liée à des allergies saisonnières, des troubles neurologiques ou d'autres causes ou affections connues dont vous souffrez déjà",
    },
    value: "1",
  },
  muscle_aches: {
    en: {
      text: "Muscle aches/joint pain",
      sup_text: (
        <>
          Unusual, long-lasting (not related to <strong>getting a COVID-19 vaccine and/or flu shot in the last 48 hours</strong>, a
          sudden injury, fibromyalgia, or other known causes or conditions you already have)
        </>
      ),
    },
    fr: {
      text: "Douleurs musculaires/articulaires",
      sup_text: (
        <>
          Inhabituelles, de longue durée (non liées{" "}
          <strong>à l’administration du vaccin contre la COVID-19 et/ou vaccin contre la grippe au cours des dernières 48 heures</strong>, à une
          blessure soudaine, à une fibromyalgie ou à d'autres causes ou affections connues dont vous souffrez déjà)
        </>
      ),
    },
    value: "1",
  },
  fatigue: {
    en: {
      text: "Extreme tiredness",
      sup_text: (
        <>
          Unusual, fatigue, lack of energy (not related to{" "}
          <strong>getting a COVID-19 vaccine and/or flu shot in the last 48 hours</strong>, depression, insomnia, thyroid dysfunction,
          or other known causes or conditions you already have)
        </>
      ),
    },
    fr: {
      text: "Fatigue extrême",
      sup_text: (
        <>
          Inhabituelle, fatigue, manque d'énergie (non liée{" "}
          <strong>à l’administration du vaccin contre la COVID-19 et/ou vaccin contre la grippe au cours des dernières 48 heures</strong>, à une
          dépression, à une insomnie, à un dysfonctionnement de la thyroïde ou à d'autres causes ou affections connues
          dont vous souffrez déjà)
        </>
      ),
    },
    value: "1",
  },
  none_of_the_above: { en: { text: "None of the above" }, fr: { text: "Aucun des symptômes ci\u2011dessus" } },
}

const noSymptomsId = "none_of_the_above"

export { symptomsTitle, symptoms, noSymptomsId }
