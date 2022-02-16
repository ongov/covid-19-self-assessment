import React from "react"
import SymptomsTemplate from "../../templates/symptoms-template"
import ProgressBar from "../../components/progress-bar"

const Symptoms = () => (
    <SymptomsTemplate lang="en">
        <ProgressBar progress={50} />
    </SymptomsTemplate>
)

export default Symptoms
