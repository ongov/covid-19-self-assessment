import React from "react"
import "../stylesheets/callouts.css"
import { submissionSuccess } from "../localized_content"

const calloutSubmissionSuccess = ({ lang }) => (
  <div className="ontario-form__message-success" id="submission-success">
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-columns ontario-form__message-success--icon">
        <i className="ontario-icon__success ontario-callout__icon-success" aria-hidden="true" />
      </div>
      <div className="ontario-small-11 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <p className="ontario-form__message-success--title">{submissionSuccess[lang].title}</p>
        <p>{submissionSuccess[lang].description}</p>
      </div>
    </div>
  </div>
)

export default calloutSubmissionSuccess
