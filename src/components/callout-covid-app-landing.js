import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {Column, smallWidth, medWidth, medWidthMax, largeWidth} from "./callout-styles.js"
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { resourcesContent } from "../localized_content"


import CovidAlertLogo from "../images/icon_covidalert-full.svg"
import Chevron from "../images/ontario-icon-black-chevron.svg"

const CalloutStyle = styled.div`
  background-color: #cfeded;
  margin-bottom: 0;
  padding: 1.5rem 0;
  position: relative;
  overflow: hidden;
  top: -2rem;
  @media screen and (${smallWidth}) {
   padding: 2rem 0 1.5rem 0;
   top: -1rem;
  }
  button {
    background: none;
  }
`

const Row = styled(Accordion)`
  display: block;
  margin: auto;
  max-width: 72rem;
  width: 100%;
`

const LeftCol = styled(Column)`
  @media only screen and (${smallWidth}) {
    width: 83.33333%;
  }
  @media only screen and (${medWidth}) and (${medWidthMax}) {
    width: 83.33333%;
  }
  @media only screen and (${largeWidth}) {
    width: 83.33333%;
  }
`

const RightCol = styled(Column)`
  @media only screen and (${smallWidth}) {
    width: 16.66667%;
    padding-left: 0;
  }
  @media only screen and (${medWidth}) and (${medWidthMax}){
    width: 16.66667%;
  }
  @media only screen and (${largeWidth}) {
    width: 16.66667%;
  }
`

const Icon = styled.div`
  background: url(${CovidAlertLogo});
  background-size: 100%;
  display: block;
  float: right;
  @media only screen and (${smallWidth}) {
    width: 47px;
    height: 51px;
    position: relative;
  }
  @media only screen and (${medWidth}) and (${medWidthMax}) {
    width: 77px;
    height: 107px;
  }
  @media only screen and (${largeWidth}) {
    width: 87px;
    height: 121px;
  }
`

const Heading = styled.h2 `
  @media only screen and (${smallWidth}) { 
    font-size: 1.4375rem;
    margin: -1rem 0 0 2rem;
   }
   @media only screen and (${medWidth}) and (${medWidthMax}) { 
    font-size: 1.6875rem;
   }
`

const AccordionItemButtonHeading = styled(AccordionItemButton)`
  &:focus {
    box-shadow: 0 0 0 4px #009adb;
    outline: 4px solid transparent;
  }
  &::before {
    @media only screen and (${smallWidth}) { 
      display: block;
      content: url(${Chevron});
      height: .55rem;
      width: 1.1rem;
      position: relative;
      top: -0.2rem;
   }
  }

  &[aria-expanded=true]::before, &[aria-selected=true]::before {
      transform: rotate(180deg) translate(-4px,-2px);
      position: relative;
      top: 0.5rem;   
  }
 `

const AccordionItemPanelContent = styled(AccordionItemPanel)`
  @media only screen and (${smallWidth}) {
    margin-left: 2rem;
  }
`
/*
 * This function checks for screen size on load and if we are on a desktop
 * computer the filters accordion is expanded by default. Otherwise it's closed.
 */
const CalloutCovidLanding = ({lang}) => {
  const [accordionOpen, setAccordionOpen] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const smallScreen = window.matchMedia("screen and (max-width: 39.9375em)");
      if (smallScreen.matches) {
        setAccordionOpen(false);
      }
    }
  }, []);

  return (
    <>
    <CalloutStyle>
      <Row allowZeroExpanded onChange={() => setAccordionOpen((cur) => !cur)}>
        <AccordionItem dangerouslySetExpanded={accordionOpen}>
          <LeftCol>
            <AccordionItemButtonHeading>
              <Heading>{resourcesContent[lang].resource_one.title}</Heading>
            </AccordionItemButtonHeading>
            <AccordionItemPanelContent>
              <p>{resourcesContent[lang].resource_one.content}</p>
              <a href={resourcesContent[lang].resource_one.link} className="ontario-button ontario-button--secondary ontario-button--noBG">{resourcesContent[lang].resource_one.linkText}</a>
            </AccordionItemPanelContent>
          </LeftCol>
          <RightCol>
            <Icon/>
          </RightCol>
        </AccordionItem>
      </Row>
    </CalloutStyle>
    </>
  )
}

export default CalloutCovidLanding