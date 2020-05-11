import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Q7 = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q7.yes} noLink={logic.q7.no}>
    <h2>Une personne avec laquelle vous êtes en contact étroit a-t-elle été diagnostiquée positive à la COVID-19?</h2>
    <p className="ontario-strong-text">Par exemple, une personne de votre foyer ou de votre lieu de travail.</p>
  </QuestionTemplate>
)

export default Q7
