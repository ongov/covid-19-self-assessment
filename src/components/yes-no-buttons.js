import React, { useContext, useEffect, useState } from "react"
import { navigate } from "@reach/router"
import Button from "./button"
import { general, questions } from "../localized_content"
import { GlobalDispatchContext } from "../context/global-context-provider"

const YesNoButtons = ({ lang, noLink, yesLink }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const [url, setUrl] = useState()

  useEffect(() => {
    setUrl(window.location.pathname)
  }, [])

  const handleClick = (toLink, isYes = false) => {
    const splitUrl = url.split("/")
    const urlFragment = splitUrl.pop() || splitUrl.pop()
    const questionId = Object.keys(questions).find(key => questions[key][lang] === decodeURIComponent(urlFragment))
    dispatch({ type: "YES_NO_RESPONSE", question: questionId, response: isYes })
    navigate(toLink)
  }

  return (
    <div className="ontario-form__button-wrapper ontario-text-center">
      <Button text={general[lang].no} clickHandler={() => handleClick(noLink)} />
      <Button text={general[lang].yes} clickHandler={() => handleClick(yesLink, true)} />
    </div>
  )
}

export default YesNoButtons
