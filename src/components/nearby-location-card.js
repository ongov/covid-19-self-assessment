import React from "react"
import styled from "styled-components"

import { nearbyAssessmentCentres } from "../localized_content"

const LocationCardContainer = styled.div`
  display: inline-block;
  width: 33.333%;
  background: #fff;
  border-radius: 4px;
  padding: 1rem;
  margin-right: 1rem;

  &:last-child {
    margin: 0;
  }

  @media screen and (max-width: 39.9375em) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

const LocationCardContent = `
  letter-spacing: 0.0025rem;
  font-size: 1.1875rem;
  font-weight: bold;
  line-height: 1.75rem;
  margin: 0;
`

const LocationCardLink = styled.a`
  ${LocationCardContent}
  color: #0066cc;
`

const LocationCardDistance = styled.p`
  ${LocationCardContent}
  color: #000;
`

export default ({ lang, location }) => {
  // We use English location name if French is not available
  const locationName = location[`location_name${lang === "fr" ? "_fr" : ""}`] || location.location_name

  const isLocationValid = locationName && location.location_id && location.dist

  return isLocationValid ? (
    <LocationCardContainer>
      <LocationCardLink
        href={`${nearbyAssessmentCentres[lang].assessmentCentresPath}?lid=${location.location_id}`}
        target="_blank"
        rel="noopener"
      >
        {locationName}
      </LocationCardLink>
      <LocationCardDistance>{`(${location.dist.toFixed(2)}\xA0km${
        lang === "en" ? " away" : ""
      })`}</LocationCardDistance>
    </LocationCardContainer>
  ) : null
}
