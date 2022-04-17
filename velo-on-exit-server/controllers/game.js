const express = require('express')
const router = express.Router()
const db = require('../models')

// from game, score will be saved to database
// user can access from profile (GET route from users to display scores)

// GET /game
router.get('/:id', async (req, res) => {
  try {
    // find all games
    const game = await db.Game.find({ _id: req.params.id })
    res.json(game)
  } catch (error) {
    console.log(error)
    res.status(503).json({ msg: 'Database or server room is on fire 🔥' })
  }
})

// POST /game/:id (create a score with :id)
router.post('/', async (req, res) => {
  try {
    // create game result for user
    const postGame = await db.Game.create({
      away_team: req.body.away_team,
      date: req.body.date,
      time: req.body.time,
      home_team: req.body.home_team,
      away_sp: req.body.away_sp,
      away_sp_h: req.body.away_sp_h,
      home_sp: req.body.home_sp,
      home_sp_h: req.body.home_sp_h,
    })

    const postedAwayPlayers = await db.Player.create(req.body.away_lineup)
    const postedHomePlayers = await db.Player.create(req.body.home_lineup)

    postedAwayPlayers.forEach((element) => {
      postGame.away_lineup.push(element._id)
    })
    postedHomePlayers.forEach((element) => {
      postGame.home_lineup.push(element._id)
    })
    postedPlayers = { away: postedAwayPlayers, home: postedHomePlayers }
    res.status(201).json({ games: postGame, player: postedPlayers })
  } catch (error) {
    console.log(error)
    res.status(503).json({ msg: 'Database or server room is on fire 🔥' })
  }
})

// DELETE /game/:id (delete a game @ :id)
// router.delete('/:id', async (req, res) => {
//   try {
//     const foundScore = await db.Game.findByIdAndDelete(req.params.id)
//     res.status(204).json({ msg: 'Score has been successfully deleted' })
//   } catch (error) {
//     console.log(error)
//     res.status(503).json({ msg: 'Database or server room is on fire 🔥' })
//   }
// })

module.exports = router
