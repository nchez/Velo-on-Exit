export default function PlayerSearch() {}

export async function getServerSideProps(context) {
  const playerId = context.params.playerId
  // Fetch data from external API
  const res = await fetch(`http://localhost:3001/player/${playerId}`)
  const playerData = await res.json()
  // Pass data to the page via props
  return { props: { playerData } }
}
