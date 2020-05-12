import React from "react"
import OnsetTemplate from "../../templates/onset-template"
import { onsetTemplate as onsetTemplateChoices } from "../../localized_content"

const lang = "fr"

const SymptomsOnset = () => (
  <OnsetTemplate
    lang={lang}
    questionId="q3"
    question="À quel moment vos symptômes sont-ils apparus?"
    choices={onsetTemplateChoices[lang]}
  />
)

export default SymptomsOnset
