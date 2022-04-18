const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/:id', async (req, res) => {
  try {
    // find all games
    const player = await db.PlayerLineup.find({ mlb_id: req.params.id }).sort(
      'date'
    )
    const statcastPlayer = await db.StatcastHitterGame.find({
      mlb_id: req.params.id,
    }).sort({ game_date: 'asc' })
    const apiSeasons = await db.PlayerPercentile.find({
      player_id: req.params.id,
    }).sort({ season: 'asc' })
    console.log(statcastPlayer)
    res.json({ lineup: player, statcast: statcastPlayer, seasons: apiSeasons })
  } catch (error) {
    console.log(error)
    res.status(503).json({ msg: 'Database or server room is on fire 🔥' })
  }
})

module.exports = router
