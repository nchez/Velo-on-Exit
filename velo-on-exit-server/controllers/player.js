const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/:id', async (req, res) => {
  try {
    // find all games
    const player = await db.Player.find({ mlb_id: req.params.id })
    res.json(player)
  } catch (error) {
    console.log(error)
    res.status(503).json({ msg: 'Database or server room is on fire 🔥' })
  }
})

module.exports = router
