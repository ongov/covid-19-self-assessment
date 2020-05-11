/*
    q3 - healthcare workers
    q4 - rural
    q5 - at-risk
    q6 - travel
    q7 - exposure to covid-19
    q8 - exposure to respiratory symptoms

    r2 - symptomatic, self-isolate
    r3 - practice physical distancing
    r4 - at-risk, self-isolate
    r5 - travel, self-isolate
    r6 - possible exposure, self-isolate
    r7 - call telehealth/doctor
*/
export default {
  q1: { yes: () => "r1", no: () => "q2" },
  q2: {
    // q2 is the symptoms question with a continue button
    cont: state => (state.symptomScore ? "q3" : "q5"),
  },
  q3: { yes: state => (state.symptomScore && state.symptomScore >= 0.5 ? "r7" : "r2"), no: () => "q4" },
  q4: { yes: state => (state.symptomScore && state.symptomScore >= 0.75 ? "r7" : "r2"), no: () => "q5" },
  q5: { yes: state => (state.symptomScore && state.symptomScore >= 0.5 ? "r7" : "q6"), no: () => "q6" },
  q6: {
    yes: state => {
      if (state.symptomScore >= 1) return "r7"
      if (state.q5) return "r4"
      return "r5"
    },
    no: () => "q7",
  },
  q7: {
    yes: state => {
      if (state.symptomScore >= 0.75) return "r7"
      if (state.q5) return "r4"
      return "r6"
    },
    no: () => "q8",
  },
  q8: {
    yes: state => {
      if (state.symptomScore >= 1) return "r7"
      if (state.q5) return "r4"
      return "r6"
    },
    no: state => {
      if (state.symptomScore >= 1) return "r7"
      if (state.q5) return "r4"
      return state.symptomScore ? "r2" : "r3"
    },
  },
}
