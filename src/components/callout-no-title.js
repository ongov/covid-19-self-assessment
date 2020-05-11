import React from "react"
import "../stylesheets/callouts.css"

const CalloutNoTitle = ({ messagemain, message }) => (
  <div className="ontario-callout ontario-callout--warning">
  <div className="ontario-row ontario-row--collapse">
  <div className="ontario-small-12 ontario-columns">
  <span className="ontario-icon__warning--bottom"><i
className="ontario-icon ontario-icon__warning"
aria-hidden="true"
  ></i></span>
  <span className="ontario-callout--warning__message--bottom"><strong>{messagemain}</strong> {message}</span>
  </div>
  </div>
</div>
)

export default CalloutNoTitle
