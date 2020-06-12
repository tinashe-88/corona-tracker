import React from 'react'

import {
  Card,
  Chart,
  Country,
  Layout,
  ErrorBoundary
} from './components'

import {ReactComponent as CoronaLogo} from './assets/images/coronavirus.svg'

import { getData } from './api'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount(){
    const response = await getData()

    this.setState({
      data: response
    })
  }

  handleCountryChange = async (country) => {
    const countryChangeData = await getData(country)
    
    this.setState({
      data: countryChangeData,
      country
    })
  }

  render(){
    const { data, country } = this.state
    return (
      <>
        <Layout>
          <h1>Tracking COVID-19</h1>
          <CoronaLogo />
          <ErrorBoundary>
            <Card data={data}/>
            <Country
              handleCountryChange={this.handleCountryChange}
            />
            <Chart 
              data={data}
              country={country}
            />
          </ErrorBoundary>
        </Layout>
      </>
    )
  }
}

export default App
