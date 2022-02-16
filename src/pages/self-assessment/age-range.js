import React from "react"
import AgeTemplate from "../../templates/age-template"
import { ages as ageChoices } from "../../localized_content"
import ProgressBar from "../../components/progress-bar"

const lang = "en"

const Age = () => (
  <AgeTemplate
    lang={lang}
    questionId="q3"
    question="How old are you?"
    title="We collect this anonymous information to better understand how the virus affects different age groups."
    choices={ageChoices[lang]}
  >
      <ProgressBar progress={30} />
  </AgeTemplate>
)

export default Age
