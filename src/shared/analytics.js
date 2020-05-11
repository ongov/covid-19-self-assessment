const addSymptomsToGTMDataLayer = state => {
  if (window && window.dataLayer) {
    window.dataLayer.push({
      event: "covid-19-sat-submit-symptoms",
      symptoms: state.q2 ? Object.keys(state.q2) : [],
      symptomScore: state.symptomScore || 0,
    })
  }
}

export default addSymptomsToGTMDataLayer
