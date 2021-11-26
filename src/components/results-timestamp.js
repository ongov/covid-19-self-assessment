import React from "react"
import { general } from "../localized_content"
import { resultsDate } from "../localized_content"

const TimeStamp = ({ lang }) => {
  return (
    <>
      <p className="ontario-results__timestamp">{resultsDate[lang].date}</p>
    </>
  )
}

export default TimeStamp