require('dotenv').config()
require('./models')
const express = require('express')
// do not need cors yet **** ask instructors if it's okay to keep this installed or only use when needed
// const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

// middlewares

// app.use(cors()) see comment above
app.use(express.json())

const myMiddleWare = (req, res, next) => {
  console.log(`incoming request: ${req.method} - ${req.url}`)
  // move along there
  next()
}

app.use(myMiddleWare)

app.get('/', (req, res) => {
  res.json({ msg: 'welcome to the user app 👋' })
})

// controllers
app.use('/game', require('./controllers/game'))
app.use('/player', require('./controllers/playerLineup'))
// app.use('/api-v1/game', require('./controllers/api-v1/game'))

app.listen(PORT, () =>
  console.log(
    `listening to the smooth sounds of port ${PORT} in the morning 🌊`
  )
)
