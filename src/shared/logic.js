import { onsetTemplate } from "../localized_content"
/*
    q1: "severe-symptoms"
    q2: "symptoms"
    q3: "age-range"
    q4: "postal-code"
    q5: "symptom-onset"
    q7: "risk-factors"
    q8: "covid-exposure"
    q9: "exposure-date"
    q10: "respiratory-exposure"
    q11: "respiratory-exposure-date"
    q14: "travel"
    q15: "travel-return"
    q16: "symptoms-confirm"

    r2 - symptomatic, self-isolate
    r3 - practice physical distancing
    r4 - at-risk, self-isolate
    r5 - travel, self-isolate
    r6 - possible exposure, self-isolate
    r7 - call telehealth/doctor 
*/
export default {
  q1: { yes: () => "r1", no: () => "q3" },
  q3: { cont: () => "q4" },
  q4: { cont: () => "q2" },
  q2: { cont: state => (state.symptomScore ? "q16" : "q7") },
  q5: { cont: () => "r7" },
  q7: { yes: () => "q8", no: () => "q8" },
  q8: { yes: () => "q9", no: () => "q10" },
  q9: { cont: () => "r7" },
  q10: { yes: () => "q11", no: () => "q14" },
  q11: { cont: () => "r6" },
  q14: { yes: () => "q15", no: state => (state.q7 || (state.q3 && parseInt(state.q3[0])) > 6 ? "r4" : "r3") },
  q15: { cont: () => "r5" },
  q16: { yes: () => "q7", no: () => "q5" },
}
