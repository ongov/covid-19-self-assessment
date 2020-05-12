import { onsetTemplate } from "../localized_content"
const moreThanTwoWeeksAgoLabels = ["en", "fr"].map(
  lang => onsetTemplate[lang].find(item => item.id === "more-than-two-weeks-ago").labelText
)
/*
    q1: "severe-symptoms"
    q2: "symptoms"
    q3: "symptoms-onset"
    q4: "health-worker"
    q5: "essential-worker"
    q6: "congregate-setting"
    q7: "risk-factors"
    q8: "covid-exposure"
    q9: "exposure-date"
    q10: "respiratory-exposure"
    q11: "respiratory-exposure-date"
    q12: "cross-border-worker"
    q13: "rural-or-indigenous"
    q14: "travel"
    q15: "travel-return"

    r2 - symptomatic, self-isolate
    r3 - practice physical distancing
    r4 - at-risk, self-isolate
    r5 - travel, self-isolate
    r6 - possible exposure, self-isolate
    r7 - call telehealth/doctor
*/
export default {
  q1: { yes: () => "r1", no: () => "q2" },
  q2: { cont: state => (state.symptomScore ? "q3" : "q7") },
  q3: { cont: state => (moreThanTwoWeeksAgoLabels.includes(state.q3) ? "r7" : "q4") },
  q4: { yes: state => (state.symptomScore && state.symptomScore >= 0.5 ? "r7" : "r2"), no: () => "q5" },
  q5: { yes: state => (state.symptomScore && state.symptomScore >= 0.75 ? "r7" : "r2"), no: () => "q6" },
  q6: { yes: state => (state.symptomScore && state.symptomScore >= 0.5 ? "r7" : "r2"), no: () => "q7" },
  q7: { yes: state => (state.symptomScore && state.symptomScore >= 0.5 ? "r7" : "r4"), no: () => "q8" },
  q8: { yes: () => "q9", no: () => "q10" },
  q9: { cont: state => (state.symptomScore && state.symptomScore >= 0.75 ? "r7" : "r6") },
  q10: { yes: () => "q11", no: state => (state.symptomScore ? "q12" : "q14") },
  q11: { cont: state => (state.symptomScore && state.symptomScore >= 1 ? "r7" : "r6") },
  q12: { yes: state => (state.symptomScore && state.symptomScore >= 0.5 ? "r7" : "r2"), no: () => "q13" },
  q13: { yes: state => (state.symptomScore && state.symptomScore >= 0.75 ? "r7" : "r2"), no: () => "q14" },
  q14: {
    yes: () => "q15",
    no: state => (state.symptomScore && state.symptomScore >= 1 ? "r7" : state.symptomScore ? "r2" : "r3"),
  },
  q15: { cont: state => (state.symptomScore && state.symptomScore >= 1 ? "r7" : "r5") },
}
