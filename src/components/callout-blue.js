import React from "react"
import styled from "styled-components"
import { Column, Row, smallWidth } from "./callout-styles"

const CalloutStyle = styled.div`
  background-color: #dbe9f5;
  border-left: 4px solid #3193cc;
  padding: 1.2rem 2rem 1.2rem 0.9375rem;
  margin: 2.5rem 0;
`

const RowMargin = styled(Row)`
  overflow: hidden;
  @media screen and (${smallWidth}) {
    margin: 0;
  }
`

const Heading = styled.h2`
  font-size: 19px;
`

const Callout = ({ heading, message, link, linkText, className }) => (
  <CalloutStyle>
    <RowMargin>
      <Column>
        <Heading>{heading}</Heading>
        <p className="ontario-margin-bottom-4-!">{message}</p>
        <p className="ontario-margin-bottom-0-!">
          <a href={link} target="_blank" rel="noopener" className={className}>
            {linkText}
          </a>
        </p>
      </Column>
    </RowMargin>
  </CalloutStyle>
)

export default Callout
