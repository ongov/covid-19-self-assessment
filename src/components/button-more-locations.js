import React from "react"
import styled from "styled-components"
import NewWindowIcon from "../images/ontario-icon__new-window.svg"

const Container = styled.div`
  display: block;
  text-align: center;
  margin: 2rem auto;

  a {
    margin: 0;
  }
`

const NewWindowIconSpan = styled.span`
  background-image: url(${NewWindowIcon});
  background-size: 100%;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: auto auto auto 0.5rem;
  position: relative;
  top: 0.2rem;
`

export default ({ link, title, helpText }) => (
  <Container>
    <a href={link} className="ontario-button ontario-button--primary" target="_blank" rel="noopener">
      {title}
      <span className="ontario-show-for-sr">{helpText}</span>
      <NewWindowIconSpan />
    </a>
  </Container>
)
