import React from "react"
import SymptomsTemplate from "../../templates/symptoms-template"
import ProgressBar from "../../components/progress-bar"

const Symptomes = () => (
    <SymptomsTemplate lang="fr">
        <ProgressBar progress={50} />
    </SymptomsTemplate>
)

export default Symptomes