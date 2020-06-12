import React from 'react'

import {
  Footer,
  Navbar
} from '../index'

import GlobalStyle from '../../globalStyles'

import { 
  Container, 
  ContentContainer, 
  LayoutStyles 
} from './Layout.styles'

const Layout = ({children, ...props}) => (
  <LayoutStyles>
    <GlobalStyle/>
    <Navbar/>
    <Container {...props}>
      <ContentContainer>
        {children}
      </ContentContainer>
    </Container>
    <Footer/>
  </LayoutStyles>
)

export default Layout