import React, { useContext } from "react"
import "../stylesheets/callouts.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { calloutSignup as localizedContent } from "../localized_content"
import { GlobalStateContext } from "../context/global-context-provider"

const CalloutSignUp = ({ lang }) => {
  const state = useContext(GlobalStateContext)

  return (
    <>
      {!state.contact_form_submitted_ok && (
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
            <div className="ontario-callout ontario-callout--info ontario-margin-top-0-! ontario-padding-top-32-! ontario-padding-left-0-!">
              <div className="ontario-row">
                <div className="ontario-small-1 ontario-columns ontario-text-center">
                  <div className="ontario-icon__phone"></div>
                </div>
                <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
                  <h3 className="ontario-margin-bottom-16-!">{localizedContent[lang].title}</h3>
                  <p>{localizedContent[lang].content}</p>
                  <p>
                    <AnchorLink
                      className="ontario-button--secondary"
                      to={`${typeof window !== "undefined" && window.location.pathname}#contact-form`}
                    >
                      {localizedContent[lang].linkText}
                    </AnchorLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CalloutSignUp
