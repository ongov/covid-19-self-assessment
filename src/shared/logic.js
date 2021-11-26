/*
    q1: "fully-vaccinated"
    q2: "severe-symptoms"
    q3: "age-range"
    q4: "postal-code"
    q5: "symptoms"
    q6: "covid-exposure"
    q7: "covid-alert"
    q8: "respiratory-exposure"
    q9: "travel"
  
    r1 - call 911
    r3 - practice physical distancing
    r5 - travel, self-isolate
    r6 - possible exposure, self-isolate
    r7 - call telehealth/doctor 
    r9 - test but not isolate
*/
export default {
  q1: { yes: () => "q2", no: () => "q2" },
  q2: { yes: () => "r1", no: () => "q3" },
  q3: { cont: () => "q4" },
  q4: { cont: () => "q5" },
  q5: { cont: (state) => (state.symptomScore ? "r7" : "q6") },
  q6: { yes: (state) => (state.q1 ? "r9" : "r7"), no: () => "q7" },
  q7: { yes: (state) => (state.q1 ? "r9" : "r7"), no: () => "q8" },
  q8: { yes: () => "r6", no: () => "q9" },
  q9: { yes: (state) => (state.q1 ? "r3" : "r5"), no: () => "r3" },
}
