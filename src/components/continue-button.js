import React from "react"

import Button from "./button"
import { general } from "../localized_content"

const ContinueButton = ({ lang, clickHandler, isDisabled }) => {
  return (
    <div className="ontario-form__button-wrapper ontario-text-center">
      <Button text={general[lang].continueButtonText} clickHandler={clickHandler} isDisabled={isDisabled} />
    </div>
  )
}

export default ContinueButton
