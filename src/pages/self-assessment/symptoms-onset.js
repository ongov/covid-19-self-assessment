import React from "react"
import OnsetTemplate from "../../templates/onset-template"
import { onsetTemplate as onsetTemplateChoices } from "../../localized_content"

const lang = "en"

const SymptomsOnset = () => (
  <OnsetTemplate
    lang={lang}
    questionId="q3"
    question="When did your symptoms start?"
    choices={onsetTemplateChoices[lang]}
  />
)

export default SymptomsOnset
