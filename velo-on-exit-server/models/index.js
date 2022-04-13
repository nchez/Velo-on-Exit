require('dotenv').config()
const mongoose = require('mongoose')

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1/velo-on-exit' // i changed the db to rankify

mongoose.connect(MONGODB_URI)

const db = mongoose.connection

db.once('open', () => console.log(`connect to mongo @ ${db.host}:${db.port}`))

db.on('error', (err) => {
  console.log('data center has burned down 🔥')
  console.log(err)
})

module.exports.PlayerLineup = require('./playerLineup')
module.exports.Game = require('./game')
