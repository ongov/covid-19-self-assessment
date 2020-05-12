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

const Layout = ({ lang, hideFooter, isResultsPage, children }) => {
  const state = useContext(GlobalStateContext)

  // This restricts direct access to pages and
  // redirects any such request back to the start
  useEffect(() => {
    if (!state.in_progress) {
      navigate(general[lang].basePath, {
        replace: true,
      })
    }
  }, [])

  return (
    <>
      <div className="ontario-text-center">
        <SkipNavLink>{general[lang].skipNavText}</SkipNavLink>
      </div>
      <Header lang={lang} />
      <main id="main-content">
        {isResultsPage ? (
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
