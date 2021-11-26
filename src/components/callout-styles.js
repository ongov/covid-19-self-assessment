import React from "react"
import styled from "styled-components";

const Column = styled.div`
  position: relative;
  padding-left: calc(2rem / 2);
  padding-right: calc(2rem / 2);
  box-sizing: border-box;
  float: left;
`

const Row = styled.div`
  margin: 0 -1rem;
  max-width: 72rem;
  width: 100%;
  @media print {
    display: none;
  }
`

const Icon = styled.div`
  background-size: 100%;
  display: inline-block;
  text-align: center;
`

const smallWidth = "max-width: 39.9375em"
const medWidth = "min-width: 40em"
const medWidthMax = "max-width: 72.9375em"
const largeWidth = "min-width: 73em"

export { Column, Row, Icon, smallWidth, medWidth, medWidthMax, largeWidth}