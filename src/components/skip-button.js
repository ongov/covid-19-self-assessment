import React from "react"

import Button from "./button"
import { general } from "../localized_content"

const SkipButton = ({ lang, clickHandler, isDisabled }) => {
  return (
    <div className="ontario-form__button-wrapper ontario-text-center">
      <Button text={general[lang].skipButtonText} clickHandler={clickHandler} isDisabled={isDisabled} />
    </div>
  )
}

export default SkipButton
