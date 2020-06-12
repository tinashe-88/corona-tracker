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
      This statistics for COVID-19 get updated every 8 hours via mathdroid API, 
      which accesses data by John Hopkins University CSSE.
      <br/>
      API source: 
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