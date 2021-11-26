import React from "react"
import "../stylesheets/callouts.css"
import { feedback } from "../localized_content"

const CalloutFeedback = ({ altContentProperty, lang }) => (
  <div className="ontario-row ontario-hide-for-print">
    <div className="ontario-small-12 ontario-columns">
      <div className="ontario-callout ontario-callout--info ontario-margin-top-0-! ontario-padding-top-32-! ontario-padding-left-0-!">
        <div className="ontario-row">
          <div className="ontario-small-2 ontario-medium-1 ontario-columns ontario-text-center">
            <div className="ontario-icon__feedback"></div>
          </div>
          <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
            <h2 className="ontario-margin-bottom-16-!">{feedback[lang].title}</h2>
            <p>
              <a href={feedback[lang].link} rel="noopener" target="_blank">
                {altContentProperty ? feedback[lang][altContentProperty] : feedback[lang].content}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CalloutFeedback
