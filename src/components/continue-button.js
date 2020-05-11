import React, { useContext } from "react"
import { navigate } from "@reach/router"
import Button from "./button"
import { GlobalDispatchContext, GlobalStateContext } from "../context/global-context-provider"
import { general } from "../localized_content"
import { addSymptomsToGTMDataLayer } from "../shared"

const ContinueButton = ({ lang, linkTo }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const handleClick = () => {
    addSymptomsToGTMDataLayer(state)
    dispatch({ type: "CONTINUE_CLICKED" })
    navigate(linkTo)
  }

  return (
    <div className="ontario-form__button-wrapper ontario-text-center">
      <Button text={general[lang].continueButtonText} clickHandler={handleClick} />
    </div>
  )
}

export default ContinueButton
