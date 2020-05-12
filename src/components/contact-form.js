import React, { useState, useContext } from "react"
import scrollToElement from "scroll-to-element"
import { useForm } from "react-hook-form"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import axios from "axios"
import { getDaysInMonth } from "date-fns"

import { GlobalStateContext, GlobalDispatchContext } from "../context/global-context-provider"
import Checkbox from "../components/checkbox"
import { months, addSubmitResponseCodeToGTMDataLayer } from "../shared"
import { general, contactForm } from "../localized_content"

const ContactForm = ({ lang }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  const [termsOfUseConsent, setTermsOfUseConsent] = useState(false)
  const [contactConsent, setContactConsent] = useState(false)
  const [submitClicked, setSubmitClicked] = useState(false)

  const currentYear = new Date().getFullYear()

  const { register, handleSubmit, errors, getValues } = useForm()

  const getResultsScreenId = () => {
    const url = typeof window !== "undefined" ? window.location.pathname : ""
    const basePathLength = general[lang].basePath.length
    return url.substring(basePathLength, basePathLength + 2)
  }

  const onSubmit = data => {
    const { dob_day, dob_month, dob_year, email, first_name, last_name, phone, postal_code, sex_at_birth } = data
    const dob = `${dob_year}-${("" + (months[lang].indexOf(dob_month) + 1)).padStart(2, "0")}-${dob_day.padStart(
      2,
      "0"
    )}`
    const outcome = getResultsScreenId()
    const personalInfo = { first_name, last_name, dob, phone, postal_code, outcome, lang }
    const payload = {
      ...state,
      ...personalInfo,
    }
    if (email) payload.email = email
    if (sex_at_birth) payload.sex_at_birth = sex_at_birth

    delete payload.in_progress

    axios
      .post(process.env.GATSBY_OAG_API_URL, payload, {
        headers: { "Content-Type": "application/json" },
      })
      .then(res => {
        dispatch({ type: "CONTACT_FORM_SUBMITTED_OK", message: res })

        scrollToElement("#submission-success", {
          offset: 0,
          duration: 1000,
        })

        addSubmitResponseCodeToGTMDataLayer(200)
      })
      .catch(err => {
        dispatch({ type: "CONTACT_FORM_SUBMITTED_WITH_ERRORS", error: err })

        scrollToElement("#submission-failed", {
          offset: 0,
          duration: 1000,
        })

        addSubmitResponseCodeToGTMDataLayer((err.response && err.response.status) || 500)
      })
  }

  const handleSubmitClick = e => {
    if (e.target.disabled || !Object.keys(errors).length) return

    setSubmitClicked(true)

    if (state.hasOwnProperty("contact_form_submitted_ok") && !state["contact_form_submitted_ok"]) {
      dispatch({ type: "CONTACT_FORM_RESUBMITTED" })
    }

    scrollToElement("#top", {
      offset: 0,
      duration: 1000,
    })
  }

  const numDaysInMonth = () => {
    const { dob_month, dob_year } = getValues()
    const cur = new Date()
    return parseInt(dob_year) === cur.getFullYear() && months[lang].indexOf(dob_month) === cur.getMonth()
      ? cur.getDate()
      : getDaysInMonth(new Date(dob_year, months[lang].indexOf(dob_month)))
  }

  const validateDate = () => {
    const { dob_day, dob_month, dob_year } = getValues()
    if (!dob_day || !dob_month || !dob_year) return true
    return dob_day <= numDaysInMonth()
  }

  const validateMonth = () => {
    const { dob_month, dob_year } = getValues()
    if (!dob_year) return true
    const cur = new Date()
    return parseInt(dob_year) === cur.getFullYear() ? months[lang].indexOf(dob_month) <= cur.getMonth() : true
  }

  return (
    <>
      {!state.contact_form_submitted_ok && (
        <form onSubmit={handleSubmit(onSubmit)} className="ontario-row ontario-form" id="contact-form">
          <div className="ontario-small-12 ontario-columns">
            <div className="ontario-callout--double ontario-background-grey ontario-margin-top-0-!" id="top">
              {submitClicked && errors && Object.keys(errors).length > 0 && (
                <div className="ontario-callout ontario-callout--alert ontario-margin-top-0-!">
                  <div className="ontario-row">
                    <div className="ontario-small-12 ontario-columns">
                      <i className="ontario-icon__error ontario-callout__icon-error" aria-hidden="true"></i>
                      <span className="ontario-callout__title--error">
                        {contactForm[lang].validation_error_main.title}
                      </span>
                    </div>
                  </div>
                  <div className="ontario-row">
                    <div className="ontario-small-12 ontario-columns">
                      <div className="ontario-margin-top-16-! ontario-margin-bottom-32-!">
                        {contactForm[lang].validation_error_main.list_heading}
                        <ul>
                          {(errors.first_name || errors.last_name) && (
                            <li>
                              <AnchorLink to={`${window.location.pathname}#first_name`}>
                                {contactForm[lang].validation_error_main.name_error}
                              </AnchorLink>
                            </li>
                          )}
                          {(errors.dob_day || errors.dob_month || errors.dob_year) && (
                            <li>
                              <AnchorLink to={`${window.location.pathname}#dob_day`}>
                                {contactForm[lang].validation_error_main.dob_error}
                              </AnchorLink>
                            </li>
                          )}
                          {errors.postal_code && (
                            <li>
                              <AnchorLink to={`${window.location.pathname}#postal_code`}>
                                {contactForm[lang].validation_error_main.postal_code_error}
                              </AnchorLink>
                            </li>
                          )}
                          {errors.phone && (
                            <li>
                              <AnchorLink to={`${window.location.pathname}#phone`}>
                                {contactForm[lang].validation_error_main.phone_number_error}
                              </AnchorLink>
                            </li>
                          )}
                          {errors.email && (
                            <li>
                              <AnchorLink to={`${window.location.pathname}#email`}>
                                {contactForm[lang].validation_error_main.email_error}
                              </AnchorLink>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {state.hasOwnProperty("contact_form_submitted_ok") && !state.contact_form_submitted_ok && (
                <div className="ontario-callout ontario-callout--alert ontario-margin-top-0-!" id="submission-failed">
                  <div className="ontario-row">
                    <div className="ontario-small-12 ontario-columns">
                      <i className="ontario-icon__error ontario-callout__icon-error" aria-hidden="true"></i>
                      <span className="ontario-callout__title--error">
                        {contactForm[lang].submit_error_server.title}
                      </span>
                    </div>
                  </div>
                  <div className="ontario-row">
                    <div className="ontario-small-12 ontario-columns">
                      <div className="ontario-margin-top-16-! ontario-margin-bottom-32-!">
                        {contactForm[lang].submit_error_server.content}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <h2 className="ontario-form__title">{contactForm[lang].form.heading}</h2>
              {contactForm[lang].form.instructions}
              <div className="ontario-row">
                <div className="ontario-small-12 ontario-columns">
                  <h3>{contactForm[lang].form.name.heading}</h3>
                </div>
                <div className="ontario-small-12 ontario-medium-5 ontario-columns">
                  <div className="ontario-form-group">
                    <label className="ontario-label" htmlFor="first_name">
                      {contactForm[lang].form.name.first_name.label}
                    </label>
                    <input
                      className={`ontario-input${errors.first_name && "--error"}`}
                      type="text"
                      id="first_name"
                      name="first_name"
                      ref={register({
                        required: true,
                        maxLength: 80,
                        pattern: {
                          value: /^([A-Za-zàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]+)([[A-Za-zàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]+|[ ]|[-,.'])*$/gm,
                          message: contactForm[lang].form.name.first_name.invalid_message,
                        },
                      })}
                    />
                    {errors.first_name && (
                      <div className="ontario-form__message-error">
                        {errors.first_name.message || contactForm[lang].form.name.first_name.empty_message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="ontario-small-12 ontario-medium-5 ontario-end ontario-columns">
                  <div className="ontario-form-group">
                    <label className="ontario-label" htmlFor="last_name">
                      {contactForm[lang].form.name.last_name.label}
                    </label>
                    <input
                      className={`ontario-input${errors.last_name && "--error"}`}
                      type="text"
                      id="last_name"
                      name="last_name"
                      ref={register({
                        required: true,
                        maxLength: 120,
                        pattern: {
                          value: /^([A-Za-zàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]+)([[A-Za-zàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]+|[ ]|[-,.'])*$/gm,
                          message: contactForm[lang].form.name.last_name.invalid_message,
                        },
                      })}
                    />
                    {errors.last_name && (
                      <div className="ontario-form__message-error">
                        {errors.last_name.message || contactForm[lang].form.name.last_name.empty_message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="ontario-row">
                <div className="ontario-small-12 ontario-columns">
                  <h3>{contactForm[lang].form.dob.heading}</h3>
                </div>
                <div className="ontario-small-12 ontario-columns">
                  <div className="ontario-accordion">
                    <span className="ontario-target-fix" id="accordionBirth"></span>
                    <div>
                      <span className="ontario-target-fix" id="accordionBirth1"></span>
                      <a href="#accordionBirth1" id="open-accordionBirth1" title="open">
                        {`${contactForm[lang].form.dob.accordion_heading} `}
                      </a>
                      <a href="#accordionBirth" id="close-accordionBirth1" title="close">
                        {`${contactForm[lang].form.dob.accordion_heading} `}
                      </a>
                      <div className="ontario-accordion-content">
                        <p>{contactForm[lang].form.dob.accordion_content}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ontario-small-12 ontario-medium-3 ontario-columns">
                  <div className="ontario-form-group">
                    <label className="ontario-label" htmlFor="dob_day">
                      {contactForm[lang].form.dob.day.label}
                    </label>
                    <input
                      type="text"
                      className={`ontario-input${errors.dob_day && "--error"}`}
                      name="dob_day"
                      id="dob_day"
                      minLength="1"
                      maxLength="2"
                      min="1"
                      max="31"
                      ref={register({
                        required: true,
                        maxLength: 2,
                        pattern: {
                          value: /\b([1-9]|[012][0-9]|3[01])\b/,
                          message: contactForm[lang].form.dob.day.invalid_message,
                        },
                        validate: () =>
                          validateDate() ||
                          (lang === "en"
                            ? `There are only ${numDaysInMonth()} days in this month.`
                            : `Ce mois ne compte que ${numDaysInMonth()} jours.`),
                      })}
                    />
                    {errors.dob_day && (
                      <div className="ontario-form__message-error">
                        {errors.dob_day.message || contactForm[lang].form.dob.day.empty_message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="ontario-small-12 ontario-medium-3 ontario-columns">
                  <div className="ontario-form-group">
                    <label className="ontario-label" htmlFor="dob_month">
                      {contactForm[lang].form.dob.month.label}
                    </label>
                    <select
                      className={`ontario-input${errors.dob_month && "--error"} ontario-dropdown`}
                      name="dob_month"
                      id="dob_month"
                      ref={register({
                        required: true,
                        validate: () =>
                          validateMonth() ||
                          (lang === "en"
                            ? `There are only ${new Date().getMonth() + 1} months in this year`
                            : `Cette année ne compte que ${new Date().getMonth() + 1} mois.`),
                      })}
                    >
                      <option value="">{contactForm[lang].form.dob.month.select_title}</option>
                      {months &&
                        months[lang].map(mth => (
                          <option key={mth} value={mth}>
                            {mth}
                          </option>
                        ))}
                    </select>
                    {errors.dob_month && (
                      <div className="ontario-form__message-error">
                        {errors.dob_month.message || contactForm[lang].form.dob.month.empty_message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="ontario-small-12 ontario-medium-3 ontario-end ontario-columns">
                  <div className="ontario-form-group">
                    <label className="ontario-label" htmlFor="dob_year">
                      {contactForm[lang].form.dob.year.label}
                    </label>
                    <input
                      type="text"
                      className={`ontario-input${errors.dob_year && "--error"}`}
                      name="dob_year"
                      id="dob_year"
                      maxLength="4"
                      ref={register({
                        required: true,
                        max: currentYear,
                        min: currentYear - 120,
                        minLength: 4,
                        maxLength: 4,
                        pattern: { value: /^[12]\d{3}$/, message: contactForm[lang].form.dob.year.invalid_message },
                        validate: value => {
                          const currentYear = new Date().getFullYear()
                          return (
                            (value >= currentYear - 120 && value <= currentYear) ||
                            contactForm[lang].form.dob.year.invalid_message
                          )
                        },
                      })}
                    />
                    {errors.dob_year && (
                      <div className="ontario-form__message-error">
                        {errors.dob_year.message || contactForm[lang].form.dob.year.empty_message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="ontario-row">
                <div className="ontario-small-12 ontario-columns">
                  <h3>{contactForm[lang].form.sex.heading}</h3>
                </div>
                <div className="ontario-small-12 ontario-columns">
                  <div className="ontario-accordion">
                    <span className="ontario-target-fix" id="accordionSexAtBirth"></span>
                    <div>
                      <span className="ontario-target-fix" id="accordionSexAtBirth1"></span>
                      <a href="#accordionSexAtBirth1" id="open-accordionSexAtBirth1" title="open">
                        {`${contactForm[lang].form.sex.accordion_heading} `}
                      </a>
                      <a href="#accordionSexAtBirth" id="close-accordionSexAtBirth1" title="close">
                        {`${contactForm[lang].form.sex.accordion_heading} `}
                      </a>
                      <div className="ontario-accordion-content">
                        <p>{contactForm[lang].form.sex.accordion_content}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ontario-small-12 ontario-medium-5 ontario-large-4 ontario-end ontario-columns">
                  <div className="ontario-form-group">
                    <label className="ontario-label ontario-show-for-sr" htmlFor="sex_at_birth">
                      {contactForm[lang].form.sex.label}
                    </label>
                    <select
                      className={`ontario-input${errors.sex_at_birth && "--error"} ontario-dropdown`}
                      id="sex_at_birth"
                      name="sex_at_birth"
                      ref={register}
                    >
                      {contactForm[lang].form.sex.options.map(opt => (
                        <option value={opt.value} key={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.sex_at_birth && (
                      <div className="ontario-form__message-error">{contactForm[lang].form.sex.empty_message}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="ontario-row">
                <div className="ontario-small-12 ontario-columns">
                  <h3>{contactForm[lang].form.postal_code.heading}</h3>
                </div>
                <div className="ontario-small-12 ontario-columns">
                  <div className="ontario-accordion">
                    <span className="ontario-target-fix" id="accordionPostalCode"></span>
                    <div>
                      <span className="ontario-target-fix" id="accordionPostalCode1"></span>
                      <a href="#accordionPostalCode1" id="open-accordionPostalCode1" title="open">
                        {`${contactForm[lang].form.postal_code.accordion_heading} `}
                      </a>
                      <a href="#accordionPostalCode" id="close-accordionPostalCode1" title="close">
                        {`${contactForm[lang].form.postal_code.accordion_heading} `}
                      </a>
                      <div className="ontario-accordion-content">
                        <p>{contactForm[lang].form.postal_code.accordion_content}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ontario-small-12 ontario-medium-5 ontario-large-3 ontario-end ontario-columns">
                  <div className="ontario-form-group">
                    <label className="ontario-label ontario-show-for-sr" htmlFor="postal_code">
                      {contactForm[lang].form.postal_code.label}
                    </label>
                    <input
                      className={`ontario-input${errors.postal_code && "--error"}`}
                      type="text"
                      id="postal_code"
                      name="postal_code"
                      ref={register({
                        required: true,
                        pattern: {
                          value: /^(?!.*[DFIOQUdfioqu])[A-VXYa-vxy][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]$/,
                          message: contactForm[lang].form.postal_code.invalid_message,
                        },
                      })}
                    />
                    {errors.postal_code && (
                      <div className="ontario-form__message-error">
                        {errors.postal_code.message || contactForm[lang].form.postal_code.empty_message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="ontario-row">
                <div className="ontario-small-12 ontario-columns">
                  <h3>{contactForm[lang].form.phone_number.heading}</h3>
                </div>
                <div className="ontario-small-12 ontario-medium-5 ontario-large-3 ontario-end ontario-columns">
                  <div className="ontario-form-group">
                    <label className="ontario-label ontario-show-for-sr" htmlFor="phone">
                      {contactForm[lang].form.phone_number.label}
                    </label>
                    <input
                      className={`ontario-input${errors.phone && "--error"}`}
                      type="tel"
                      id="phone"
                      name="phone"
                      ref={register({
                        required: true,
                        minLength: 10,
                        maxLength: 14,
                        pattern: {
                          value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                          message: contactForm[lang].form.phone_number.invalid_message,
                        },
                      })}
                    />
                    {errors.phone && (
                      <div className="ontario-form__message-error">
                        {errors.phone.message || contactForm[lang].form.phone_number.empty_message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="ontario-row">
                <div className="ontario-small-12 ontario-columns">
                  <h3>{contactForm[lang].form.email.heading}</h3>
                </div>
                <div className="ontario-small-12 ontario-medium-6 ontario-end ontario-columns">
                  <div className="ontario-form-group ontario-margin-bottom-16-!">
                    <label className="ontario-label ontario-show-for-sr" htmlFor="email">
                      {contactForm[lang].form.email.label}
                    </label>
                    <input
                      className={`ontario-input${errors.email ? "--error" : " ontario-margin-bottom-16-!"}`}
                      type="text"
                      id="email"
                      name="email"
                      ref={register({
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: contactForm[lang].form.email.invalid_message,
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="ontario-form__message-error ontario-margin-bottom-16-!">
                        {errors.email && contactForm[lang].form.email.invalid_message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="ontario-callout ontario-callout--white ontario-margin-top-16-!">
                <div className="ontario-row">
                  <div className="ontario-small-12 ontario-columns">
                    <i className="ontario-icon ontario-icon__info" aria-hidden="true"></i>
                    <span className="ontario-callout__title--info">{contactForm[lang].form.term_of_use.heading}</span>
                  </div>
                </div>
                <div className="ontario-row">
                  <div className="ontario-small-12 ontario-columns">
                    <div className="ontario-margin-top-16-! ontario-margin-bottom-32-!">
                      {contactForm[lang].form.term_of_use.info}
                    </div>
                    <div className="ontario-form-group ontario-margin-bottom-16-!">
                      <fieldset className="ontario-fieldset">
                        <legend className="ontario-fieldset__legend ontario-show-for-sr">Consent options</legend>
                        <div className="ontario-checkboxes ontario-margin-bottom-0-!">
                          <Checkbox
                            id="terms-of-use"
                            name="terms-of-use"
                            text={contactForm[lang].form.term_of_use.toi_checkbox_label}
                            checkboxState={termsOfUseConsent}
                            checkboxOnChange={e => setTermsOfUseConsent(e.target.checked)}
                          />
                          <Checkbox
                            id="contact-consent"
                            name="contact-consent"
                            text={contactForm[lang].form.term_of_use.contact_consent_label}
                            checkboxState={contactConsent}
                            checkboxOnChange={e => setContactConsent(e.target.checked)}
                          />
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ontario-text-center">
                <button
                  type="submit"
                  className="ontario-button--primary"
                  disabled={!(termsOfUseConsent && contactConsent)}
                  onClick={handleSubmitClick}
                >
                  {contactForm[lang].form.submit_button.label}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  )
}

export default ContactForm
