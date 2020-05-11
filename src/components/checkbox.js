import React, { useContext } from "react"
import { GlobalDispatchContext, GlobalStateContext } from "../context/global-context-provider"

const Checkbox = ({ id, value, text, supplementaryText }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  return (
    <div className="ontario-checkboxes__item">
      <input
        className="ontario-checkboxes__input"
        id={id}
        name="options"
        type="checkbox"
        value={value}
        checked={state.q2 && state.q2.hasOwnProperty(id)}
        onChange={() => dispatch({ type: "TOGGLE_SYMPTOM", id, value })}
      />
      <label className="ontario-checkboxes__label ontario-checkboxes__label--large" htmlFor={id}>
        {text}
        {supplementaryText && <span className="ontario-hint">{supplementaryText}</span>}
      </label>
    </div>
  )
}

export default Checkbox
