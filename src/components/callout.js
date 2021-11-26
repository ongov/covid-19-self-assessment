import React from "react"
import "../stylesheets/callouts.css"

const Callout = ({ title, message }) => (
  <div className="ontario-callout ontario-callout--warning">
    <div className="ontario-row ontario-row--collapse">
      <div className="ontario-small-12 ontario-columns">
        <i
          className="ontario-icon__warning"
          aria-hidden="true"
        ></i>
        <span className="ontario-callout__title--warning">{title}</span>
      </div>
    </div>
    <div className="ontario-row ontario-row--collapse">
      <div className="ontario-small-12 ontario-columns"><p>{message}</p></div>
    </div>
  </div>
)

export default Callout
