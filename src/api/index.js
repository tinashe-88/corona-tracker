import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

// Function used to fetch data
export const getData = async (country) => {
  let mutableUrl = url

  if(country){
    mutableUrl = `${url}/countries/${country}`
  }

  try {
    const { 
      data: { confirmed, recovered, deaths, lastUpdate } 
    } = await axios.get(mutableUrl)

    return { confirmed, recovered, deaths, lastUpdate }
  } catch(e){
    console.log(e)
  } 
}

// Function used to fetch daily data
export const getDailyData  = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)
    const editedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))

    return editedData
  } catch(e){
    console.log(e)
  }
}

export const getCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`)

    const countriesData = countries.map(country => ({
      name: country.name,
      iso2: country.iso2,
    }))

    return countriesData

  } catch(e){
    console.log(e)
  }
}