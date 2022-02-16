import React from "react"
import Postalcode from "../../templates/postalcode-template"
import ProgressBar from "../../components/progress-bar"

const lang = "en"

export default () => (
  <Postalcode
    lang={lang}
    questionId="q4"
    question="What are the first 3 characters of your postal code?"
    title={`The first 3 characters only tell us your general area and not your street name or number. 
    We use them to find nearby testing locations for you.`}
  >
    <ProgressBar progress={40} />
  </Postalcode>
)
