import React from "react"
import Postalcode from "../../templates/postalcode-template"

const lang = "fr"

export default () => (
  <Postalcode
    lang={lang}
    questionId="q4"
    lang={lang}
    question="Quels sont les 3 premiers caractères de votre code postal?"
    title={`Aidez-nous à localiser où le virus se propage potentiellement en fournissant cette information anonymisée. 
    Les 3 premiers caractères nous indiquent seulement votre région générale et pas le nom de votre rue ou votre adresse.
    `}
  />
)
