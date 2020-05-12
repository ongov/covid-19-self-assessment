import React, { useContext, useState } from "react"
import { navigate } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import ContinueButton from "../components/continue-button"
import { GlobalStateContext, GlobalDispatchContext } from "../context/global-context-provider"
import { general, questions, onsetTemplate } from "../localized_content"
import Radio from "../components/radio"
import { logic } from "../shared"

const OnsetTemplate = ({ lang, question, questionId, title, choices }) => {
  const radioButtonGroup = `${questionId}-onset`

  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  const [continueDisabled, setContinueDisabled] = useState(true)

  const handleOptionSelect = e => {
    setContinueDisabled(false)

    const responseData = e.target.id === "i-dont-remember" ? "past-week" : e.target.id
    const responseText = onsetTemplate["en"].find(item => item.id === responseData).labelText

    dispatch({
      type: "ONSET_RADIO_SELECTED",
      question: questionId,
      response: responseText,
    })
  }

  const handleContinueClick = () => {
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
            <legend className="ontario-show-for-sr">{title}</legend>
            <div className="ontario-question__options">
              <div className="ontario-radios">
                {choices &&
                  choices.map(item => (
                    <Radio
                      key={item.id}
                      labelText={item.labelText}
                      supplementaryText={item.supplementaryText}
                      name={radioButtonGroup}
                      id={item.id}
                      onChangeInner={handleOptionSelect}
                    />
                  ))}
              </div>
            </div>
          </fieldset>
        </div>
      </Question>
    </Layout>
  )
}

export default OnsetTemplate
