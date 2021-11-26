import React from "react"
import styled from "styled-components"

import AlertIcon from "../images/ontario-icon-critical-alert-warning.svg"

const AlertWrapper = styled.div`
  background-color: #ffd440;
  font-weight: 400;
  padding: 1rem 0;
  overflow: hidden;
  width: 100%;
`
const AlertBody = styled.div`
  display: block;
  float: left;
  width: 90%;
  p {
    margin: 0;
    padding: 0;
    line-height: 1.8;
  }
  a,
  a:focus {
    font-weight: bold;
    color: black;
    text-decoration: underline;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
  @media screen and (max-width: 39.9375em) {
    width: 80%;
  }
`
const IconAlert = styled.div`
  background-image: url(${AlertIcon});
  background-size: cover;
  width: 25px;
  height: 25px;
  margin: 0 0.85rem 0 0;
  float: left;
`

export default ({ children }) => (
  <AlertWrapper>
    <div className="ontario-row">
      <div className="ontario-column ontario-small-12">
        <IconAlert />
        <AlertBody>{children}</AlertBody>
      </div>
    </div>
  </AlertWrapper>
)
