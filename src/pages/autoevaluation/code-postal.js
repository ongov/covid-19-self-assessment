import React from "react"
import Postalcode from "../../templates/postalcode-template"

const lang = "fr"

export default () => (
  <Postalcode
    lang={lang}
    questionId="q4"
    question="Quels sont les 3 premiers caractères de votre code postal?"
    title={`Les trois premiers caractères nous indiquent seulement 
    votre région générale et non pas le nom de votre rue ou votre 
    adresse. Nous nous en servons pour trouver des centres de 
    dépistage près de chez vous.`}
  />
)
