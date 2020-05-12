import React from "react"

const Radio = ({ id, name, labelText, supplementaryText, innerRef, onChangeInner }) => {
  return (
    <div className="ontario-radios__item">
      <input className="ontario-radios__input" type="radio" value={id} id={id} name={name} onChange={onChangeInner} />
      <label className="ontario-label ontario-radios__label ontario-radios__label--large" htmlFor={id}>
        {labelText}
        {supplementaryText && <span className="ontario-hint">{supplementaryText}</span>}
      </label>
    </div>
  )
}

export default Radio
