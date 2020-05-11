import React, { useContext } from "react"

import { GlobalStateContext } from "../context/global-context-provider"
import { general } from "../localized_content"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import YesNoButtons from "../components/yes-no-buttons"

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
            yesLink={`${general[lang].basePath}${yesLink(state)}`}
            noLink={`${general[lang].basePath}${noLink(state)}`}
          />
        }
      >
        {children}
      </Question>
    </Layout>
  )
}

export default QuestionTemplate
