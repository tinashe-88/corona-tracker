import styled from 'styled-components'

export const CardContainer = styled.div`
  min-width: 275px;
  overflow: hidden;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  flex-direction: column;

  @media (min-width: 600px){
    flex-direction: row;
    
  }
`

const CardContent = styled.div`
  padding: 16px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  width: 100%;
`

export const InfectedStyles = styled(CardContent)`
  border-left: 10px solid ${props => props.theme.colors.infected};
`

export const RecoveredStyles = styled(CardContent)`
  border-left: 10px solid ${props => props.theme.colors.recovered};
`

export const DeathStyles = styled(CardContent)`
  border-left: 10px solid ${props => props.theme.colors.deaths};
`

export const CardTitle = styled.h3`

`

export const TextContent = styled.p`
  font-size: 14px;
  margin-bottom: 0.35em;
`

export const NumberInfected = styled(TextContent)`
  color: ${props => props.theme.colors.infected};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 600;
`

export const NumberRecoveries = styled(TextContent)`
  color: ${props => props.theme.colors.recovered};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 600;
`

export const NumberDeaths = styled(TextContent)`
  color: ${props => props.theme.colors.deaths};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 600;
`

export const AltText = styled(TextContent)`
  color: #d3d3d3;
`

export const DateStyles = styled.span`
  font-weight: bold;
  color: #d1d1d1;
`