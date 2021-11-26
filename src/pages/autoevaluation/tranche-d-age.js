import React from "react"
import AgeTemplate from "../../templates/age-template"
import { ages as ageChoices } from "../../localized_content"

const lang = "fr"

const Age = () => (
  <AgeTemplate
    lang={lang}
    questionId="q3"
    question="Quel âge avez-vous?"
    title="Nous recueillons ces renseignements anonymes afin de mieux comprendre comment le virus affecte différents groupes d’âge."
    choices={ageChoices[lang]}
  />
)

export default Age
