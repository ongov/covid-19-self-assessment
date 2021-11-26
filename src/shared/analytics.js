const addSymptomsToGTMDataLayer = (state) => {
  if (window && window.dataLayer) {
    window.dataLayer.push({
      event: "covid-19-sat-submit-symptoms",
      symptoms: state.q5 ? Object.keys(state.q5) : [],
      symptomScore: state.symptomScore || 0,
    })
  }
}

const addSubmitResponseCodeToGTMDataLayer = (responseCode, event) => {
  if (window && window.dataLayer) {
    window.dataLayer.push({
      event,
      responseCode,
    })
  }
}

export { addSymptomsToGTMDataLayer, addSubmitResponseCodeToGTMDataLayer }
