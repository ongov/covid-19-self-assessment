import React, { useContext, useState } from "react"
import { navigate } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import ContinueButton from "../components/continue-button"
import { GlobalStateContext, GlobalDispatchContext } from "../context/global-context-provider"
import { general, questions } from "../localized_content"
import { logic } from "../shared"

const PostalcodeLocation = ({ lang, question, questionId, title, children }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  const [continueDisabled, setContinueDisabled] = useState(true)
  const [postalCode, setPostalCode] = useState()

  const postalCodeRegex = /^(?!.*[DFIOQUdfioqu])[A-VXYa-vxy][0-9][A-Za-z]$/
  const isPostalCodeValid = code => code.match(postalCodeRegex) != null

  const handlePostalCodeChange = e => {
    setPostalCode(e.target.value)
    setContinueDisabled(!isPostalCodeValid(e.target.value))
  }

  const handleContinueClick = e => {
    dispatch({
      type: "POSTALCODE-X1X",
      question: questionId,
      response: postalCode,
    })

    navigate(`${general[lang].basePath}${questions[logic[questionId].cont(state)][lang]}`)
  }

  return (
    <Layout lang={lang}>
      <SEO lang={lang} />
      <Question
        lang={lang}
        title={general[lang].title}
        buttons={<ContinueButton lang={lang} clickHandler={handleContinueClick} isDisabled={continueDisabled} />}
      >
        <h2>{question}</h2>

        <div className="ontario-form-group">
          <fieldset className="ontario-fieldset">
            {title}
            <div className="ontario-form-group">
              <p className="ontario-hint ontario-margin-top-16-! ontario-margin-bottom-8-!">{general[lang].postalCode}</p>
              <input
                className="ontario-input ontario-input--3-char-width"
                onChange={handlePostalCodeChange}
                type="text"
                maxLength="3"
                id="postalcode-xix"
              />
            </div>
          </fieldset>
        </div>
        {children}
      </Question>
    </Layout>
  )
}

export default PostalcodeLocation
