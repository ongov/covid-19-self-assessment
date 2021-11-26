import React from "react"
import OnsetTemplate from "../../templates/onset-template"
import { onsetTemplate as onsetTemplateChoices } from "../../localized_content"

const lang = "fr"

const SymptomsOnset = () => (
  <OnsetTemplate
    lang={lang}
    questionId="q9"
    question="À quand remonte votre dernier contact physique étroit avec cette personne? "
    title="Last time of contact"
    choices={onsetTemplateChoices[lang].filter(item => item.id !== "more-than-two-weeks-ago")}
  />
)

export default SymptomsOnset
