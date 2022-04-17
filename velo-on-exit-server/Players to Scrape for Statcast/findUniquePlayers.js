const db = require('../models')
const fs = require('fs')

const findUniquePlayers = async () => {
  try {
    todays_date = new Date().toLocaleDateString('en-US').replaceAll('/', '')
    console.log(todays_date)
    const uniquePlayers = await db.PlayerLineup.find({}).distinct('mlb_id')
    // const foundPlayer = await db.PlayerLineup.find({ mlb_id: '405395' })
    // console.log(foundPlayer)
    const playerArr = uniquePlayers.map(async (element, index) => {
      const foundPlayer = await db.PlayerLineup.findOne({
        mlb_id: element,
      })
      correctedName = foundPlayer.player_name
        .toLowerCase()
        .replace('.', '')
        .replace("'", '')
        .replace(' ', '-')
      return { name: correctedName, mlb_id: foundPlayer.mlb_id }
    })
    const completedPlayerArr = await Promise.all(playerArr)
    const jsonPlayerArr = JSON.stringify(completedPlayerArr)
    fs.writeFile(
      `${todays_date}uniqueplayers.json`,
      jsonPlayerArr,
      'utf8',
      (err) => {
        if (err) console.log(err)
      }
    )
  } catch (err) {
    console.log(err)
  }
}

findUniquePlayers()
