import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"

import LocationCard from "./nearby-location-card"
import ButtonMoreLocations from "./button-more-locations"

import { GlobalStateContext } from "../context/global-context-provider"

import "../stylesheets/global.css"
import "../stylesheets/layout.css"
import "../stylesheets/headings.css"

import axios from "axios"

import { nearbyAssessmentCentres } from "../localized_content"
import { assessmentCentreServiceAvailable, sortAssessmentCentresByDistance, getResultsScreenId } from "../utils"

const Container = styled.div`
  max-width: 994px;
  background: #cfeded;
  border-radius: 4px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`

const Lead = styled.h4`
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.25rem;
  letter-spacing: 0.0025rem;
  color: #000000;
  margin-bottom: 1.5rem;
  margin-top: 0 !important;
`

const CardsContainer = styled.div`
  display: flex;
  @media screen and (max-width: 39.9375em) {
    flex-direction: column;
  }
`

const HelpText = styled.p``

export default ({ lang }) => {
  const state = useContext(GlobalStateContext)
  const postalCode = state.q4
  const symptomatic = getResultsScreenId(lang) !== "r8"

  const [postalCodes, setPostalCodes] = useState([])
  const [assessmentCentres, setAssessmentCentres] = useState([])
  const [nearbyLocations, setNearbyLocations] = useState([])

  useEffect(() => {
    axios.get("/covid-19-ac-assets/data/postal_codes.json").then((response) => setPostalCodes(response.data))

    axios
      .get("/covid-19-ac-assets/data/locations.json")
      .then((response) =>
        setAssessmentCentres(response.data.filter((centre) => assessmentCentreServiceAvailable(centre.active)))
      )
  }, [])

  useEffect(() => {
    if (
      !postalCode ||
      !postalCodes ||
      postalCodes.length === 0 ||
      !assessmentCentres ||
      assessmentCentres.length === 0
    ) {
      return
    }

    const location = postalCodes.find((code) => code.pcd.toLowerCase() === postalCode.toLowerCase())

    if (location) {
      setNearbyLocations(
        sortAssessmentCentresByDistance({
          latitude: location.lat,
          longitude: location.lng,
          locationList: assessmentCentres,
        }).slice(0, 3)
      )
    }
  }, [postalCodes, assessmentCentres, postalCode, symptomatic])

  return (
    nearbyLocations &&
    nearbyLocations.length > 0 && (
      <Container>
        <Lead>{nearbyAssessmentCentres[lang].lead}</Lead>
        <HelpText>{nearbyAssessmentCentres[lang].helpText}</HelpText>
        <CardsContainer>
          {nearbyLocations.map((loc) => (
            <LocationCard lang={lang === "fr" ? "fr" : "en"} location={loc} key={loc.location_id} />
          ))}
        </CardsContainer>
        <ButtonMoreLocations
          link={`${nearbyAssessmentCentres[lang].assessmentCentresPath}?pcd=${postalCode}&s=${symptomatic}`}
          title={nearbyAssessmentCentres[lang].buttonLead}
          helpText={nearbyAssessmentCentres[lang].helpText}
        />
      </Container>
    )
  )
}
