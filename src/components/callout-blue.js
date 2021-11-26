import React from "react"
import styled from "styled-components"
import {Column, Row, smallWidth, medWidth} from "./callout-styles.js"

const CalloutStyle = styled.div `
  background-color: #DBE9F5;
  border-left: 4px solid #3193CC;
  padding: 1.2rem 2rem 1.2rem 0.9375rem;
  margin: 2.5rem 0;
`

const RowMargin = styled(Row)`
  overflow: hidden;
  @media screen and (${smallWidth}) {
    margin: 0;
  }
`

const LeftCol = styled(Column)`
  @media screen and (${smallWidth}) {
    width: 100%;
    padding: 0;
  }
  @media screen and (${medWidth}) {
    width: 16.66667%;
  }
`

const Heading = styled.h2`
  font-size: 19px;
`

const CTA = styled.a`
  background-color: #DBE9F5;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: none;
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 600;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: calc(14 / 9);
  min-width: 10rem;
  padding: calc((1rem + 0.25rem) / 2) 1.5rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
 `

const Callout = ({ heading, message, link, linkText }) =>(
  <CalloutStyle>
    <RowMargin>
      <Column>
        <Heading>{heading}</Heading>
        <p className="ontario-margin-bottom-4-!">{message}</p>
        <p className="ontario-margin-bottom-0-!"><CTA href={link} className="ontario-button ontario-button--secondary">{linkText}</CTA></p>
      </Column>
    </RowMargin>
  </CalloutStyle>
)

export default Callout