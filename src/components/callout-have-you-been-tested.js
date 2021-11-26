import React from "react"
import styled from "styled-components"
import {Column, Row, smallWidth, medWidth, medWidthMax, largeWidth} from "./callout-styles.js"
import { resourcesContent } from "../localized_content"

import IconCovidTest from "../images/ontario-icon--app.svg"

const RowMargin = styled(Row)`
  overflow: hidden;
  @media screen and (${smallWidth}) {
    margin: 0 0 3rem 0;
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

const RightCol = styled(Column)`
  @media screen and (${smallWidth}) {
    width: 100%;
    padding: 0;
  }
  @media screen and (${medWidth}) {
    width: 83.33333%;
  }
`

const Icon = styled.div`
  background: url(${IconCovidTest});
  background-size: 100%;
  width: 53px;
  height: 67px;
  @media screen and (${medWidthMax}) {
    margin: 0 auto 1rem auto;
  }
  @media screen and (${largeWidth}) {
    margin-left: 1rem;
  }
`

const Heading = styled.h2`
  font-size: 19px;
`

const CalloutTested = ({ lang }) => (
  <RowMargin>
    <LeftCol>
      <Icon />
    </LeftCol>
    <RightCol>
      <Heading>{resourcesContent[lang].resource_three.title}</Heading>
      <p>{resourcesContent[lang].resource_three.content}</p>
      <p><a href={resourcesContent[lang].resource_three.link} rel="noopener" target="_blank">{resourcesContent[lang].resource_three.linkText}</a></p>
    </RightCol>
  </RowMargin>
)

export default CalloutTested
