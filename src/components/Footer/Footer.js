import React from 'react'

import {
  FooterText,
  FooterContainer
} from './Footer.styles'

const Footer = () => (
  <FooterContainer>
    <FooterText>
      © {new Date().getFullYear()}, Created by
      {` `}
      <a 
        href={`https://twitter.com/@tinashe_88`}
        target="__blank"
        rel="noopener noreferrer"
      >
        tinashe88
      </a>
    </FooterText>
    <FooterText>
      Statistics for COVID-19 will be updated every 8+ hours via mathdroid API, 
      which accesses the data from John Hopkins University CSSE.
      <br/>
      API source:{` `}
      <a 
        href={`https://github.com/mathdroid/covid-19-api`}
        target="__blank"
        rel="noopener noreferrer"
      >
        mathdroid API
      </a>
    </FooterText>
  </FooterContainer>
)

export default Footer