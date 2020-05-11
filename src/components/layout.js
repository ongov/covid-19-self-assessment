import React, { useContext, useEffect } from "react"
import { navigate } from "@reach/router"

import { GlobalStateContext } from "../context/global-context-provider"
import SkipToMainContent from "./skip-to-main-content"
import Header from "./header"
import Footer from "./footer"
import { general } from "../localized_content"
import "../stylesheets/theme.css"
import "../stylesheets/sat-style.css"
import "../stylesheets/print.css"

const Layout = ({ lang, hideFooter, isResultsPage, children }) => {
  const state = useContext(GlobalStateContext)

  useEffect(() => {
    if (!state.in_progress) {
      navigate(general[lang].basePath, {
        replace: true,
      })
    }
  }, [])

  return (
    <>
      <SkipToMainContent lang={lang} />
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
