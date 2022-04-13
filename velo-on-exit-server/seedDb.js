const db = require('./models')
const fs = require('fs')
const filePath = '../grab-dat-data/scraped_data/'
/*
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
  */
// grab directories from scraped_data
fs.readdir(`${filePath}`, async (err, files) => {
  if (err) {
    console.log(err)
  } else {
    // read each file from each directory // I do not like how nested this is
    files.forEach((dir) => {
      fs.readdir(`${filePath}${dir}`, (err, files) => {
        if (err) {
          console.log(err)
        } else {
          files.map(async (file) => {
            const gameObj = JSON.parse(
              fs.readFileSync(`${filePath}${dir}/${file}`)
            )
            const postGame = await db.Game.create({
              away_team: gameObj.away_team,
              date: gameObj.date,
              time: gameObj.time,
              home_team: gameObj.home_team,
              away_sp: gameObj.away_sp,
              away_sp_h: gameObj.away_sp_h,
              home_sp: gameObj.home_sp,
              home_sp_h: gameObj.home_sp_h,
            })
            const postedAwayPlayers = await db.PlayerLineup.create(
              gameObj.away_lineup
            )
            const postedHomePlayers = await db.PlayerLineup.create(
              gameObj.home_lineup
            )

            postedAwayPlayers.forEach((element) => {
              postGame.away_lineup.push(element._id)
            })
            postedHomePlayers.forEach((element) => {
              postGame.home_lineup.push(element._id)
            })
          })
        }
      })
    })
  }
})

// to read file
// const data = JSON.parse(fs.readFileSync(filePath))
