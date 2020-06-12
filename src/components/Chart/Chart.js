import React, { useState, useEffect } from 'react'
import {
  Line,
  Bar
} from 'react-chartjs-2'

import { getDailyData } from '../../api'


import {
  ChartContainer
} from './Charts.styles'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyDate] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setDailyDate(await getDailyData())
    }

    fetchApi()
  }, [])

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(255, 183, 0, 0.5)', 'rgba(25, 169, 115, 0.5)', 'rgba(255, 114, 92, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value], 
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date ),
          datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#FFB700',
            backgroundColor: 'rgba(255, 211, 100, 0.3)',
            fill: true,
          }, {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: '#FF725C',
            backgroundColor: 'rgba(255, 182, 171, 0.8)',
            fill: true,
          }]
        }}
        height={500}
        width={700}
        options={{ maintainAspectRatio: false }}
      />
    ) : null
  )

  return (
    <ChartContainer>
      {country ? barChart : lineChart}
    </ChartContainer>
  )

}

export default Chart