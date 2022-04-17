import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useState } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function PlayerPage({ playerData }) {
  // const [dates, setDates] = useState([])
  // const [spots, setSpots] = useState([])
  const positionsArr = []
  playerData.lineup.forEach((element, index) => {
    if (positionsArr.includes(element.position) === false) {
      positionsArr.push(element.position)
    }
  })
  const playerDates = playerData.lineup.map((element) => {
    return new Date(element.date).toLocaleDateString()
  })
  const playerSpots = playerData.lineup.map((element) => {
    return element.spot
  })
  const exitVelos = playerData.statcast.map((element) => {
    return element.exit_velo
  })
  const exitVeloDates = playerData.statcast.map((element) => {
    return element.game_date
  })
  console.log(playerData.statcast)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    // reverse y1 axis ticks so y-axis is 1 at the top of the graph
    // scales: {
    //   y1: {
    //     reverse: true,
    //   },
    // },
  }

  const chartData = {
    labels: playerDates,
    datasets: [
      {
        label: 2022,
        data: playerSpots,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y1',
      },
    ],
  }
  const chartDataVelo = {
    labels: exitVeloDates,
    datasets: [
      {
        label: 2022,
        data: exitVelos,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y1',
      },
    ],
  }

  const positions = positionsArr.map((element, index) => {
    return <li key={`positions-index-${index}`}>{element}</li>
  })
  return (
    <div>
      <h1>Player Page for: {playerData.lineup[0].player_name}</h1>
      <h2>Position(s) Played</h2>
      <ul>{positions}</ul>
      <Line options={options} data={chartData} />
      <Line options={options} data={chartDataVelo} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const playerId = context.params.playerId
  // Fetch data from external API
  const res = await fetch(`http://localhost:3001/player/${playerId}`)
  const playerData = await res.json()
  // Pass data to the page via props
  return { props: { playerData } }
}
