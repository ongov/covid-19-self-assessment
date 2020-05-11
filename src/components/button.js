import React from "react"

const Button = ({ text, clickHandler }) => (
  <button className="ontario-button--primary" type="button" tabIndex="0" onClick={clickHandler}>
    {text}
  </button>
)

export default Button
