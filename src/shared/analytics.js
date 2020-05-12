const addSymptomsToGTMDataLayer = state => {
  if (window && window.dataLayer) {
    window.dataLayer.push({
      event: "covid-19-sat-submit-symptoms",
      symptoms: state.q2 ? Object.keys(state.q2) : [],
      symptomScore: state.symptomScore || 0,
    })
  }
}

const addSubmitResponseCodeToGTMDataLayer = responseCode => {
  if (window && window.dataLayer) {
    window.dataLayer.push({
      event: "covid-19-sat-submit-response-code",
      responseCode,
    })
  }
}

export { addSymptomsToGTMDataLayer, addSubmitResponseCodeToGTMDataLayer }
