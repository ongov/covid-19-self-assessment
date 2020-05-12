import React, { useContext } from "react"

const Checkbox = ({ id, value, text, supplementaryText, labelStyle, checkboxState, checkboxOnChange }) => {
  return (
    <div className="ontario-checkboxes__item">
      <input
        className="ontario-checkboxes__input"
        id={id}
        name={id}
        type="checkbox"
        value={value}
        checked={checkboxState}
        onChange={checkboxOnChange}
      />
      <label className={`ontario-checkboxes__label ontario-checkboxes__label${labelStyle}`} htmlFor={id}>
        {text}
        {supplementaryText && <span className="ontario-hint">{supplementaryText}</span>}
      </label>
    </div>
  )
}

export default Checkbox
