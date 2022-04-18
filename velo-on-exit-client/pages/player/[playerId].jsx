import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

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
// import { useState } from 'react'
import * as React from 'react'

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

  // color cells based on percentile
  const percentileBackground = (percentile) => {
    const numberPerc = parseFloat(percentile)
    const alpha = 0.5
    let r = numberPerc * 2.55
    let b = 255 - numberPerc * 2.55
    let rgbString = `${r.toString()}, 0, ${b.toString()}, ${alpha}`
    // b = 255 - percentile * 2.55
    // console.log(`${r.toString()}, 0, ${b}, ${alpha}`)
    return rgbString
  }
  console.log(percentileBackground(playerData.seasons[2]['bbPerc']))
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
    return element.game_date.slice(0, 10)
  })
  const playerPercentiles = playerData.seasons.map((element) => {
    return {
      Year: element.season,
      bb: element.bb,
      bbPerc: element.bbPerc,
      so: element.so,
      soPerc: element.soPerc,
      ibb: element.ibb,
      ibbPerc: element.ibbPerc,
      tb: element.tb,
      tbPerc: element.tbPerc,
      xbh: element.xbh,
      xbhPerc: element.xbhPerc,
      hrPerc: element.hrPerc,
      hr: element.hr,
      r: element.r,
      rPerc: element.rPerc,
      rbiPerc: element.rbiPerc,
      rbi: element.rbi,
      avg: element.avg1000 / 1000,
      avgPerc: element.avg1000Perc,
      obpPerc: element.obp1000Perc,
      obp: element.obp1000 / 1000,
      slg: element.slg1000 / 1000,
      slgPerc: element.slg1000Perc,
      ops: element.ops1000 / 1000,
      opsPerc: element.ops1000Perc,
    }
  })
  const tableHeaders = (
    <TableRow>
      <TableCell align="right">Season</TableCell>
      <TableCell align="right">BB</TableCell>
      <TableCell align="right">SO</TableCell>
      <TableCell align="right">IBB</TableCell>
      <TableCell align="right">TB</TableCell>
      <TableCell align="right">XBH</TableCell>
      <TableCell align="right">HR</TableCell>
      <TableCell align="right">R</TableCell>
      <TableCell align="right">RBI</TableCell>
      <TableCell align="right">AVG</TableCell>
      <TableCell align="right">OBP</TableCell>
      <TableCell align="right">SLG</TableCell>
      <TableCell align="right">OPS</TableCell>
    </TableRow>
  )
  const tableBody = playerPercentiles.map((element, index) => {
    return (
      <TableRow
        key={element.Year}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {element.Year}
        </TableCell>
        <TableCell
          style={{
            backgroundColor: `rgba(${percentileBackground(element.bbPerc)})`,
          }}
          align="right"
        >
          {element.bb}
        </TableCell>
        <TableCell
          style={{
            backgroundColor: `rgba(${percentileBackground(element.soPerc)})`,
          }}
          align="right"
        >
          {element.so}
        </TableCell>
        <TableCell
          style={{
            backgroundColor: `rgba(${percentileBackground(element.ibbPerc)})`,
          }}
          align="right"
        >
          {element.ibb}
        </TableCell>
        <TableCell
          style={{
            backgroundColor: `rgba(${percentileBackground(element.tbPerc)})`,
          }}
          align="right"
        >
          {element.tb}
        </TableCell>
        <TableCell
          style={{
            backgroundColor: `rgba(${percentileBackground(element.xbhPerc)})`,
          }}
          align="right"
        >
          {element.xbh}
        </TableCell>
        <TableCell
          style={{
            backgroundColor: `rgba(${percentileBackground(element.hrPerc)})`,
          }}
          align="right"
        >
          {element.hr}
        </TableCell>
        <TableCell
          style={{
            backgroundColor: `rgba(${percentileBackground(element.rPerc)})`,
          }}
          align="right"
        >
          {element.r}
        </TableCell>
        <TableCell
          style={{
            backgroundColor: `rgba(${percentileBackground(element.rbiPerc)})`,
          }}
          align="right"
        >
          {element.rbi}
        </TableCell>
        <TableCell
          style={{
            backgroundColor: `rgba(${percentileBackground(element.avgPerc)})`,
          }}
          align="right"
        >
          {element.avg}
        </TableCell>
        <TableCell
          style={{
            backgroundColor: `rgba(${percentileBackground(element.obpPerc)})`,
          }}
          align="right"
        >
          {element.obp}
        </TableCell>
        <TableCell
          style={{
            backgroundColor: `rgba(${percentileBackground(element.slgPerc)})`,
          }}
          align="right"
        >
          {element.slg}
        </TableCell>
        <TableCell
          style={{
            backgroundColor: `rgba(${percentileBackground(element.opsPerc)})`,
          }}
          align="right"
        >
          {element.ops}
        </TableCell>
      </TableRow>
    )
  })

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
    scales: {
      y1: {
        reverse: true,
      },
    },
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
        yAxisID: 'y2',
      },
    ],
  }

  const positions = positionsArr.map((element, index) => {
    return (
      <li key={`positions-index-${index}`} align="center">
        {element}
      </li>
    )
  })
  return (
    <div>
      <h1 align="center">{playerData.lineup[0].player_name} Stats</h1>
      <h3 align="center">Position(s) Played</h3>
      <ul align="center">{positions}</ul>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>{tableHeaders}</TableHead>
          <TableBody>{tableBody}</TableBody>
        </Table>
      </TableContainer>
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
