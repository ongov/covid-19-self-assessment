import axios from "axios"
import { addSubmitResponseCodeToGTMDataLayer } from "../shared"
import getResultsScreenId from "./get-results-screen-id"

const responseCodeGTMEvent = "covid-19-sat-submit-non-phi-data-response-code"

const sendNonPhiData = (state, lang) => {
  const outcome = getResultsScreenId(lang)
  const payload = { ...state, lang, outcome }
  delete payload.in_progress

  axios
    .post(process.env.GATSBY_OAG_API_URL, payload, {
      headers: { "Content-Type": "application/json" },
    })
    .then(() => {
      const responseCodeGTMEvent = "covid-19-sat-submit-non-phi-data-response-code"
      addSubmitResponseCodeToGTMDataLayer(200, responseCodeGTMEvent)
    })
    .catch(err => {
      addSubmitResponseCodeToGTMDataLayer((err.response && err.response.status) || 500, responseCodeGTMEvent)
    })

  if (!process.env.GATSBY_IS_PROD_ENV) {
    console.log(`Dispatched non-PHI payload: ${JSON.stringify(payload)}`)
  }
}

export default sendNonPhiData
