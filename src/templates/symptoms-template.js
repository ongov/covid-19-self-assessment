import React, { useContext } from "react"
import { navigate } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import ContinueButton from "../components/continue-button"
import { GlobalStateContext, GlobalDispatchContext } from "../context/global-context-provider"
import Checkbox from "../components/checkbox"
import Callout from "../components/callout-blue"
import { general, questions, calloutSymptoms } from "../localized_content"
import { symptomsTitle, symptoms, logic, addSymptomsToGTMDataLayer } from "../shared"

const SymptomsTemplate = ({ lang, children }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  const handleContinueClick = () => {
    addSymptomsToGTMDataLayer(state)
    dispatch({ type: "SYMPTOMS_CONTINUE_CLICKED" })
    navigate(`${general[lang].basePath}${questions[logic.q5.cont(state)][lang]}`)
  }

  return (
    <Layout lang={lang}>
      <SEO lang={lang} />
      <Question
        lang={lang}
        title={general[lang].title}
        buttons={<ContinueButton lang={lang} clickHandler={handleContinueClick} />}
      >
        <div className="ontario-form-group">
          <fieldset className="ontario-fieldset">
            <legend>{symptomsTitle[lang].text}</legend>
            <p>{symptomsTitle[lang].sup_text}</p>
            <Callout message={calloutSymptoms[lang].message} />
            <div className="ontario-question__options">
              <div className="ontario-checkboxes">
                {Object.keys(symptoms).map((id) => (
                  <Checkbox
                    key={id}
                    id={id}
                    value={symptoms[id].value}
                    text={symptoms[id][lang].text}
                    labelStyle="--large"
                    supplementaryText={symptoms[id][lang].sup_text || ""}
                    checkboxState={state.q5 && state.q5.hasOwnProperty(id)}
                    checkboxOnChange={() => dispatch({ type: "TOGGLE_SYMPTOM", id, value: symptoms[id].value })}
                  />
                ))}
              </div>
            </div>
          </fieldset>
        </div>
        {children}
      </Question>
    </Layout>
  )
}

export default SymptomsTemplate
