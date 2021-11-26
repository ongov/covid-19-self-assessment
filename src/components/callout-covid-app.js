import React from "react"
import "../stylesheets/callouts.css"
import { calloutCovidApp } from "../localized_content"


const CalloutCovidApp = ({ lang }) => {
  return (
    <>
        <div className="ontario-row ontario-hide-for-print">
          <div className="ontario-small-12 ontario-columns">
            <div className="ontario-callout ontario-callout--info ontario-padding-top-32-! ontario-margin-top-32-! ontario-margin-bottom-16-!">
              <div className="ontario-row">
                <div className="ontario-small-1 ontario-columns ontario-text-center">
                  <div className="ontario-icon__covidapp"></div>
                </div>
                <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
                  <h3 className="ontario-margin-bottom-16-!">{calloutCovidApp[lang].title}</h3>
                  <p>{calloutCovidApp[lang].content}</p>
                  <p>
                    <a href={calloutCovidApp[lang].linkPath} target="_blank" rel="noopener">
                      {calloutCovidApp[lang].linkText}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default CalloutCovidApp
