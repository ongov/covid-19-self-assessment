import React, { useState, useEffect, useContext } from "react"
import { subDays, eachDayOfInterval, format } from "date-fns"
import { useForm } from "react-hook-form"
import { navigate } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import ContinueButton from "../components/continue-button"
import { GlobalStateContext, GlobalDispatchContext } from "../context/global-context-provider"
import { general, questions } from "../localized_content"
import { logic, months } from "../shared"
import { returnTemplate } from "../localized_content"

const ReturnTemplate = ({ lang, question, questionId, datePrefix }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  const { register, handleSubmit } = useForm()

  const [daysInMonthDisplayed, setDaysInMonthDisplayed] = useState([])
  const [dayId, monthId] = [`${datePrefix}-day`, `${datePrefix}-month`]

  const today = new Date()
  const interval = eachDayOfInterval({ start: subDays(today, 14), end: subDays(today, 1) })
  const getMonths = interval => Array.from(new Set(interval.map(day => day.getMonth()))).reverse()

  const getDaysByMonth = (interval, month) =>
    interval
      .filter(day => day.getMonth() === month)
      .map(day => day.getDate())
      .reverse()

  const validMonths = getMonths(interval)

  const validDaysInMonths = validMonths.reduce((acc, mth) => {
    acc[mth] = getDaysByMonth(interval, mth)
    return acc
  }, {})

  const handleMonthChange = e => setDaysInMonthDisplayed(validDaysInMonths[e.target.value])

  useEffect(() => setDaysInMonthDisplayed(validDaysInMonths[validMonths[0]]), [])

  const handleClick = data => {
    const dateSelected = parseInt(data[dayId])
    const daySelected = interval.find(day => day.getDate() === dateSelected)
    dispatch({ type: "RETURN_DATE_CONTINUE_CLICKED", returnDate: format(daySelected, "yyyy-MM-dd") })
    navigate(`${general[lang].basePath}${questions[logic[questionId].cont(state)][lang]}`)
  }

  return (
    <Layout lang={lang}>
      <SEO lang={lang} />
      <Question
        lang={lang}
        title={general[lang].title}
        buttons={
          <ContinueButton
            lang={lang}
            linkTo={`${general[lang].basePath}${logic[questionId].cont(state)}`}
            clickHandler={handleSubmit(handleClick)}
          />
        }
      >
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
            <h3>{question}</h3>
          </div>
          <div className="ontario-small-4 ontario-large-3 ontario-columns">
            <div className="ontario-form-group">
              <label className="ontario-label" htmlFor={monthId}>
                {returnTemplate[lang].month}
              </label>
              <select
                className="ontario-input ontario-dropdown"
                name={monthId}
                id={monthId}
                onChange={handleMonthChange}
                ref={register}
              >
                {validMonths.map(mth => (
                  <option key={mth} value={mth}>
                    {months[lang][mth]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="ontario-small-4 ontario-large-3 ontario-end ontario-columns">
            <div className="ontario-form-group">
              <label className="ontario-label" htmlFor={dayId}>
                {returnTemplate[lang].day}
              </label>
              <select className="ontario-input ontario-dropdown" name={dayId} id={dayId} ref={register}>
                {daysInMonthDisplayed.map(day => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Question>
    </Layout>
  )
}

export default ReturnTemplate
