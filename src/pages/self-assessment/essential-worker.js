import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const EssentialWorker = () => (
  <QuestionTemplate lang="en" yesLink={logic.q5.yes} noLink={logic.q5.no}>
    <h2>Are you an essential worker, as defined by the government of Ontario? </h2>

    <p>Examples of industries with {" "}<a href="https://www.ontario.ca/page/list-essential-workplaces" rel="noopener" target="_blank">essential workers <span className="ontario-show-for-sr">This link will open in a new window.</span></a>{" "} include:</p>
    <ul>
      <li>food and beverage</li>
      <li>health care</li>
      <li>construction</li>
      <li>manufacturing</li>
      <li>agriculture</li>
    </ul>
  </QuestionTemplate>
)

export default EssentialWorker
