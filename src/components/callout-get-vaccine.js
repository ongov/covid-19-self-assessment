import React from "react"
import "../stylesheets/callouts.css"
import { calloutGetVaccine } from "../localized_content"

const CalloutGetVaccine = ({ lang }) => {
  return (
    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <div className="ontario-callout ontario-callout--info ontario-margin-top-0-! ontario-padding-top-32-! ontario-padding-left-0-!">
          <div className="ontario-row">
            <div className="ontario-small-2 ontario-medium-1 ontario-columns ontario-text-center">
              <div className="ontario-icon__info"></div>
            </div>
            <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
              <h3 className="ontario-margin-bottom-16-!">{calloutGetVaccine[lang].title}</h3>
              <p>{calloutGetVaccine[lang].content}</p>
              <p>
                <a href={calloutGetVaccine[lang].linkPath} target="_blank" rel="noopener">
                  {calloutGetVaccine[lang].linkText}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalloutGetVaccine
