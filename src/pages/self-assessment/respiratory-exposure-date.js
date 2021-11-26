import React from "react"
import OnsetTemplate from "../../templates/onset-template"
import { onsetTemplate as onsetTemplateChoices } from "../../localized_content"

const lang = "en"

const SymptomsOnset = () => (
  <OnsetTemplate
    lang={lang}
    questionId="q11"
    question="When did you last have close physical contact with that person?"
    title="Last time of contact"
    choices={onsetTemplateChoices[lang].filter(item => item.id !== "more-than-two-weeks-ago")}
  />
)

export default SymptomsOnset
