import styled from 'styled-components'

export const LayoutStyles = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
  margin-top: 64px;

  @media (min-width: 600px){
    max-width: 95%;
    padding-left: 22px;
    padding-right: 22px;
  }
`

export const Container = styled.main`
  
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`