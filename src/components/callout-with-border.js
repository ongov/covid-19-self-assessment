import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${(props) => props.bgColor};
  border-left: 4px solid ${(props) => props.borderColor};
  position: relative;
  max-width: 72rem;
  width: 100%;
  padding: 1.8rem 0 1rem 0;
  margin: ${(props) => props.margin};
  overflow: hidden;
  @media screen and (max-width: 39.9375em) {
    padding: 1rem 1.25rem 1rem 0;
  }
`

const Icon = styled.div`
  position: relative;
  padding-left: calc(2rem / 2);
  padding-right: calc(2rem / 2);
  box-sizing: border-box;
  float: left;
`

const Heading = styled.div`
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.4;
  margin: 0.2rem 2rem 0 6rem;
`

const Content = styled.div`
  margin: 0.25rem 2rem 1rem 2rem;
  @media screen and (max-width: 39.9375em) {
    margin: 0.25rem 0 1rem 0;
    float: left;
    width: 80%;
  }
`

export default ({ icon, heading, children, margin, bgColor, borderColor }) => (
  <Container margin={margin} bgColor={bgColor} borderColor={borderColor}>
    <Icon>{icon}</Icon>
    <Heading>{heading}</Heading>
    {children && <Content>{children}</Content>}
  </Container>
)
