import React from 'react'
import CountUp from 'react-countup'
import { ThemeProvider } from 'styled-components'

import Grid from '../Grid/Grid'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

import {
  CardContainer,
  InfectedStyles,
  RecoveredStyles,
  DeathStyles,
  CardTitle,
  TextContent,
  NumberDeaths,
  NumberInfected,
  NumberRecoveries,
  AltText,
  DateStyles
} from './Card.styles'

const theme = {
  colors: {
    infected: "#FFB700",
    recovered: "#19A974",
    deaths: "#FF725C",
    black: "#333333",
    white: "#f1f1f1",
    gray: "#777777"
  },
  fontSizes: {
    sm: "1em",
    md: "2em",
    lg: "3em"
  }
}

const Card = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {
  if(!confirmed){
    return <LoadingSpinner/>
  }
  
  return (
    <ThemeProvider theme={theme}>
      <CardContainer>
        <Grid>
          <InfectedStyles>
            <CardTitle>
              Confirmed Infections
            </CardTitle>
            <NumberInfected>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3.5}
                separator={', '}
              />
            </NumberInfected>
            <AltText>
              As of: {` `}
                <DateStyles>
                  {new Date(lastUpdate).toDateString()}
                </DateStyles>
            </AltText>
            <TextContent>
              Number of active Covid-19 cases.
            </TextContent>
          </InfectedStyles>
        </Grid>
        <Grid>
          <RecoveredStyles>
            <CardTitle>
              Confirmed Recovered
            </CardTitle>
            <NumberRecoveries>
              <CountUp
                start={0}
                end={recovered.value}
                duration={3.5}
                separator={', '}
              />
            </NumberRecoveries>
            <AltText>
              As of: {` `}
                <DateStyles>
                  {new Date(lastUpdate).toDateString()}
                </DateStyles>
            </AltText>
            <TextContent>
              Number of Covid-19 recoveries.
            </TextContent>
          </RecoveredStyles>
        </Grid>
        <Grid>
          <DeathStyles>
            <CardTitle>
              Confirmed Deaths
            </CardTitle>
            <NumberDeaths>
              <CountUp
                start={0}
                end={deaths.value}
                duration={3.5}
                separator={', '}
              />
            </NumberDeaths>
            <AltText>
              As of:{` `} 
                <DateStyles>
                  {new Date(lastUpdate).toDateString()}
                </DateStyles>
            </AltText>
            <TextContent>
              Number of Covid-19 casualties.
            </TextContent>
          </DeathStyles>
        </Grid>
      </CardContainer>
    </ThemeProvider>
  )
}

export default Card