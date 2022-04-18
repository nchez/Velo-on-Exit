import TextField from '@mui/material/TextField'
import { useState, useEffect } from 'react'
import Link from '@mui/material/Link'

export default function PlayerSearch({ players }) {
  const [search, setSearch] = useState('')
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  //   const formatPlayers = players.map((element) => {
  //     element.replace('-', ' ')
  //   })
  const formatPlayers = players.players.map((element) => {
    return [element.name.replace('-', ' '), element.mlb_id]
  })
  const [results, setResults] = useState(formatPlayers)
  //   let results = (
  //     <ul>
  //       {formatPlayers.map((element) => {
  //         return <li>{element}</li>
  //       })}
  //     </ul>
  //   )
  useEffect(() => {
    setResults(
      formatPlayers.filter((element) => {
        return element[0].includes(search.toLowerCase())
      })
    )
  }, [search])
  const searchResults = results.map((element, index) => {
    return (
      <li key={`index-${index}`}>
        <Link underline="hover" href={`/player/${element[1]}`}>
          {element[0]}
        </Link>
      </li>
    )
  })

  return (
    <>
      <h1>Search For Players</h1>
      <TextField
        id="filled-basic"
        label="Search For Player"
        variant="filled"
        value={search}
        onChange={handleChange}
      />
      <ul>{search != '' ? searchResults : null}</ul>
    </>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3001/playersearch`)
  const players = await res.json()
  // Pass data to the page via props
  return { props: { players } }
}
