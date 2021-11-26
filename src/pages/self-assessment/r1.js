import React from "react"
import { Link } from "gatsby"
import SeverelySymptomaticTemplate from "../../templates/severely-symptomatic-template"

const R1 = () => (
  <SeverelySymptomaticTemplate lang="en">
    <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
      <h1>COVID-19 self-assessment result</h1>
      <p>Call 911 or go directly to your nearest emergency department.</p>
      <Link to="/self-assessment" className="ontario-form--link backBtn ontario-hide-for-print" tabIndex="0">
        Take the self-assessment again.
      </Link>
    </div>
  </SeverelySymptomaticTemplate>
)

export default R1
