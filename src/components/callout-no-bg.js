import React from "react"
import "../stylesheets/callouts.css"

const CalloutNoBg = ({ message }) => (
  <div className="ontario-row">
    <div className="ontario-small-12 ontario-columns">
      <div className="ontario-callout ontario-callout--no-bg ontario-padding-top-4-! ontario-padding-bottom-4-! ontario-margin-top-16-! ontario-margin-bottom-16-!">
        {message}
      </div>
    </div>
  </div>
)

export default CalloutNoBg
