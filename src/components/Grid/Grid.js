import React from 'react'

import {
  GridContainer,
  GridStyle,
  GridItem
} from './Grid.styles'

const Grid = ({children}) => (
  <GridContainer>
    <GridStyle>
      <GridItem>
        {children}
      </GridItem>
    </GridStyle>
  </GridContainer>
)

export default Grid