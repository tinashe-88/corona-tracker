import React, { useState, useEffect } from 'react'

import { getCountries } from '../../api'

import {
  CountryContainer,
  LabelStyles,
  InputContainer,
  SelectStyles,
  OptionStyles
} from './Country.styles'

const Country = ({ handleCountryChange }) => {
  const [countriesData, setCountriesData] = useState([])
  useEffect(() => {
    const getData = async () => {
      setCountriesData(await getCountries())
    }

    getData()
  }, [setCountriesData])
  
  return (
    <CountryContainer>
      <LabelStyles>
        Select country:
      </LabelStyles>
      <InputContainer>
        <SelectStyles 
          defaultValue="" 
          onChange={(e) => {
            handleCountryChange(e.target.value)
          }}
        >
          <OptionStyles value="">Global</OptionStyles>
          {
            countriesData.map(country => (
              <OptionStyles 
                value={country.name}
                key={country.name}
                defaultValue={``}
              >
                {country.name}
              </OptionStyles>
            ))
          }
        </SelectStyles>
      </InputContainer>
    </CountryContainer>
  )
}

export default Country