import React, { useContext, useEffect } from "react"
import { navigate } from "@reach/router"
import { GlobalStateContext } from "../context/global-context-provider"
import { SkipNavLink } from "@reach/skip-nav"

import Header from "./header"
import Footer from "./footer"
import { general } from "../localized_content"
import "../stylesheets/theme.css"
import "../stylesheets/sat-style.css"
import "../stylesheets/print.css"

const Layout = ({ lang, hideFooter, isResultsPage, isLandingPage, altHeaderLink, children }) => {
  const state = useContext(GlobalStateContext)

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window.location.pathname.startsWith("/assessment-centre-locations") ||
        window.location.pathname.startsWith("/emplacements-centres-devaluation"))
    ) {
      return
    }

    if (process.env.GATSBY_IS_PROD_ENV && !state.in_progress) {
      navigate(general[lang].basePath, {
        replace: true,
      })
    }
  }, [])

  return (
    <>
      <div className="ontario-text-center ontario-hide-for-print">
        <SkipNavLink>{general[lang].skipNavText}</SkipNavLink>
      </div>
      <Header lang={lang} link={altHeaderLink} />
      <main id="main-content">
        {isResultsPage || isLandingPage ? (
          children
        ) : (
          <div className="ontario-row">
            <div className="ontario-small-12 ontario-columns">{children}</div>
          </div>
        )}
      </main>
      {!hideFooter && <Footer lang={lang} />}
    </>
  )
}

export default Layout
