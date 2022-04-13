// next provides hooks for using params
import { useRouter } from 'next/router'

export default function PlayerPage({ data }) {
  // open an instance of useRouter
  const router = useRouter()

  // pull the path param (called query) from the router object
  const { playerId } = router.query
  console.log(data)
  return (
    <div>
      <h1>Player Page for: {playerId}</h1>
    </div>
  )
}

export async function getServerSideProps(context) {
  console.log(context.params.playerId)
  const playerId = context.params.playerId
  // Fetch data from external API
  const res = await fetch(`http://localhost:3001/player/${playerId}`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}
