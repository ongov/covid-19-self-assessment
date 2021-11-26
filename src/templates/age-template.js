import React, { useContext, useState } from "react"
import { navigate } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import ContinueButton from "../components/continue-button"
import Callout from "../components/callout-blue"
import { GlobalStateContext, GlobalDispatchContext } from "../context/global-context-provider"
import { general, questions } from "../localized_content"
import Radio from "../components/radio"
import { logic } from "../shared"

const AgeTemplate = ({ lang, question, questionId, title, choices }) => {
  const radioButtonGroup = `${questionId}-age`

  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  const [continueDisabled, setContinueDisabled] = useState(true)

  const handleOptionSelect = (e) => {
    setContinueDisabled(false)

    dispatch({
      type: "AGE_RADIO_SELECTED",
      question: questionId,
      response: e.target.id,
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
            {title}

            <Callout
              heading={general[lang].screeningCalloutHeading}
              link={general[lang].screeningCalloutLink}
              linkText={general[lang].screeningCalloutText}
            />

            <div className="ontario-question__options">
              <div className="ontario-radios">
                {choices &&
                  choices.map((item) => (
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

export default AgeTemplate
