import React from "react"

import { general } from "../localized_content"

export default ({ lang, classname }) => (
  <button className={`ontario-button ontario-button--secondary ${classname}`} onClick={() => window.print()}>
    {general[lang].printPage} <span className="ontario-icon__print"></span>
  </button>
)
