import React from "react"
import Postalcode from "../../templates/postalcode-template"

const lang = "en"

export default () => (
  <Postalcode
    lang={lang}
    questionId="q4"
    lang={lang}
    question="What are the first 3 characters of your postal code?"
    title={`Help us locate
    where the virus is potentially spreading by providing this anonymous information.
    The first 3 characters only tell us your general area and not your street name or number.
    `}
  />
)
