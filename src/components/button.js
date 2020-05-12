import React from "react"

const Button = ({ text, clickHandler, isDisabled }) => (
  <button className="ontario-button--primary" type="button" tabIndex="0" onClick={clickHandler} disabled={isDisabled}>
    {text}
  </button>
)

export default Button
