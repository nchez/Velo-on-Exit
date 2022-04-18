const express = require('express')
const router = express.Router()
const db = require('../models')
const fs = require('fs')

router.get('/', (req, res) => {
  try {
    // find all games
    // const players = JSON.parse(fs.readFileSync('../4142022uniqueplayers.json'))
    const players = JSON.parse(fs.readFileSync('./4142022uniqueplayers.json'))
    res.json({ players: players })
  } catch (error) {
    console.log(error)
    res.status(503).json({ msg: 'Database or server room is on fire 🔥' })
  }
})

module.exports = router
