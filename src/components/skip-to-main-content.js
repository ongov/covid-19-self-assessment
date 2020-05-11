import React from "react"

const SkipToMainContent = ({ lang }) => (
  <div className="ontario-text-center">
    <a href="#main-content" className="ontario-show-on-focus skip-link">
      {lang === "fr" ? `Passer directement au contenu principal` : `Skip to main content`}
    </a>
  </div>
)

export default SkipToMainContent
