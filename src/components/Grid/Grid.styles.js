import styled from 'styled-components'

export const GridContainer = styled.div`
  padding: 24px;
  border-radius: 4px;
  margin: auto;
  display: flex;
  outline: 0;
  position: relative;
  justify-content: center;
`

export const GridStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: calc(100% + 24px);
  margin: -12px;
`

export const GridItem = styled.div`
  padding: 12px;
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
  margin: 0;
  box-sizing: border-box;
`