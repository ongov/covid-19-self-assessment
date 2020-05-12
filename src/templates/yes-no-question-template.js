import React, { useContext } from "react"

import { GlobalStateContext } from "../context/global-context-provider"
import { general } from "../localized_content"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import YesNoButtons from "../components/yes-no-buttons"
import { questions } from "../localized_content"

const QuestionTemplate = ({ lang, yesLink, noLink, children }) => {
  const state = useContext(GlobalStateContext)

  return (
    <Layout lang={lang}>
      <SEO lang={lang} />
      <Question
        lang={lang}
        title={general[lang].title}
        buttons={
          <YesNoButtons
            lang={lang}
            yesLink={`${general[lang].basePath}${questions[yesLink(state)][lang]}`}
            noLink={`${general[lang].basePath}${questions[noLink(state)][lang]}`}
          />
        }
      >
        {children}
      </Question>
    </Layout>
  )
}

export default QuestionTemplate
