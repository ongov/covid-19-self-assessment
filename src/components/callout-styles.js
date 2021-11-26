import styled from "styled-components"

const smallWidth = "max-width: 39.9375em"
const medWidth = "min-width: 40em"
const medWidthMax = "max-width: 72.9375em"
const largeWidth = "min-width: 73em"

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

const CalloutGrey = styled.div`
  padding: 1.5rem 2rem;
  margin-bottom: -1rem;
  background-color: #f2f2f2;
  overflow: hidden;
  @media screen and (${smallWidth}) {
    padding: 1rem;
  }
`

export { CalloutGrey, Column, Row, Icon, smallWidth, medWidth, medWidthMax, largeWidth }
