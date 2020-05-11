import React from "react"
import { navigate } from "@reach/router"
import "../stylesheets/forms.css"
import "../stylesheets/question.css"

import { general } from "../localized_content"

const Question = ({ lang, title, buttons, children }) => {
  return (
    <div className="ontario-question-content__wrapper--outer">
      <h1>{title}</h1>
      <button
        className="ontario-button--tertiary ontario-form--link backBtn"
        tabIndex="0"
        type="button"
        onClick={() => navigate(-1)}
      >
        <i className="ontario-icon ontario-icon__back-blue" aria-hidden="true"></i>
        {` ${general[lang].backButtonText}`}
      </button>
      <div className="ontario-question-content__wrapper--inner">{children}</div>
      {buttons}
    </div>
  )
}

export default Question
