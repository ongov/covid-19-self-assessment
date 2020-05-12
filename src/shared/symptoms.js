const symptomsTitle = {
  en: "Are you currently experiencing any of these symptoms? Choose any/all that apply.",
  fr: "Présentez-vous actuellement l’un ou l’autre de ces symptômes? Choisissez l’un ou tous les symptômes qui s’appliquent.",
}

const symptoms = {
  fever: {
    en: {
      text: "Fever",
      sup_text: "(feeling hot to the touch, a temperature of 37.8 degrees Celsius or higher)",
    },
    fr: {
      text: "Fièvre",
      sup_text: "(sensation de chaleur au toucher, température de 37,8 degrés Celsius ou plus)",
    },
    value: "1",
  },
  chills: { en: { text: "Chills" }, fr: { text: "Frissons" }, value: "0.5" },
  cough_new: {
    en: { text: "Cough that's new or worsening", sup_text: "(continuous, more than usual)" },
    fr: { text: "Toux nouvelle ou qui s’aggrave", sup_text: "(continue, plus que d’habitude)" },
    value: "1",
  },
  barking_cough: {
    en: {
      text: "Barking cough, making a whistling noise when breathing",
      sup_text: "(croup)",
    },
    fr: {
      text: "Toux qui ressemble à un aboiement, grincement ou sifflement durant la respiration  ",
      sup_text: "(laryngotrachéite aiguë)",
    },
    value: "1",
  },
  shortness_of_breath: {
    en: { text: "Shortness of breath", sup_text: "(out of breath, unable to breathe deeply)" },
    fr: { text: "Essoufflement", sup_text: "(souffle court, incapacité à respirer profondément)" },
    value: "1",
  },
  sore_throat: { en: { text: "Sore throat" }, fr: { text: "Mal de gorge" }, value: "0.25" },
  difficulty_swallowing: {
    en: { text: "Difficulty swallowing" },
    fr: { text: "Difficulté à avaler" },
    value: "0.25",
  },
  hoarse_voice: {
    en: { text: "Hoarse voice", sup_text: "(more rough or harsh than normal)" },
    fr: { text: "Voix enrouée", sup_text: "(plus rude que d’habitude)" },
    value: "0.25",
  },
  runny_nose: {
    en: { text: "Runny nose", sup_text: "(not related to seasonal allergies or other known causes or conditions)" },
    fr: { text: "Nez qui coule",  sup_text: "(sans lien avec des allergies saisonnières ou d’autres causes ou problèmes de santé connus)" }, value: "0.25" },
  stuffy_nose: {
    en: { text: "Stuffy or congested nose", sup_text: "(not related to seasonal allergies or other known causes or conditions)" },
    fr: { text: "Nez bouché ou congestionné", sup_text: "(sans lien avec des allergies saisonnières ou d’autres causes ou problèmes de santé connus)" },
    value: "0.25",
  },
  lost_taste_smell: {
    en: { text: "Lost sense of taste or smell" },
    fr: { text: "Perte du sens du goût ou de l’odorat" },
    value: "0.5",
  },
  headache: { en: { text: "Headache" }, fr: { text: "Mal de tête" }, value: "0.25" },
  digestive_issues: {
    en: { text: "Digestive issues", sup_text: "(nausea/vomiting, diarrhea, stomach pain)" },
    fr: { text: "Problèmes digestifs", sup_text: "(nausées ou vomissements, diarrhée, maux de ventre)" },
    value: "0.5",
  },
  fatigue: {
    en: { text: "Extreme tiredness that is unusual", sup_text: "(fatigue, lack of energy)" },
    fr: { text: "Fatigue extrême inhabituelle", sup_text: "(fatigue, manque d'énergie)" },
    value: "0.5",
  },
  falling_down: {
    en: { text: "Falling down often" },
    fr: { text: "Chutes fréquentes" },
    value: "1",
  },
  kids_symptoms: {
    en: { text: "For young children and infants: sluggishness or lack of appetite" },
    fr: { text: "Pour les jeunes enfants et les nourrissons : léthargie ou manque d’appétit" },
    value: "1",
  },
  none_of_the_above: { en: { text: "None of the above" }, fr: { text: "Aucune de ces réponses" }, value: "0" },
}

const noSymptomsId = "none_of_the_above"

export { symptomsTitle, symptoms, noSymptomsId }
