// built in link for SSR optimization and SEO from next
import Link from 'next/link'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function Navbar() {
  const handlePlayerSearch = () => {}
  return (
    <nav>
      <Button variant="outlined">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Button>
      <Button variant="outlined">
        <Link href="/players">
          <a>Players</a>
        </Link>
      </Button>
      <Button variant="outlined">
        <Link href="/leaderboards">
          <a>Leaderboards</a>
        </Link>
      </Button>
      <Button variant="outlined">
        <Link href="/lineups">
          <a>Lineups</a>
        </Link>
      </Button>
    </nav>
  )
}
