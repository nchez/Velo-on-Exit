const db = require('./models')
const fs = require('fs')
const filePath = '../grab-dat-data/scraped_statcast_data/'

// grab directories from scraped_data
/*
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
            const statcastGameObj = JSON.parse(
              fs.readFileSync(`${filePath}${dir}/${file}`)
            )
            const postGame = await db.Game.create({
              // game_date,pitcher,exit_velo ,launch_angle,distance,direction,pitch_speed,pitch_type,mlb_id
              game_date: statcastGameObj['Game Date'],
              pitcher: statcastGameObj.Pitcher,
              exit_velo: parseInt(statcastGameObj['EV (MPH)']),
              result: statcastGameObj.Result,
              launch_angle: parseInt(statcastGameObj['LA (°)']),
              distance: parseInt(statcastGameObj['Dist (ft)']),
              direction: statcastGameObj.Direction,
              pitch_speed: statcastGameObj['Pitch (MPH)'],
              pitch_type: statcastGameObj['Pitch Type'],
              mlb_id: statcastGameObj.mlb_id,
            })
          })
        }
      })
    })
  }
})
*/
const renameGameObj = (obj) => {
  let renamedObj = {
    game_date: obj['Game Date'],
    pitcher: obj.Pitcher,
    exit_velo: parseInt(obj['EV (MPH)']),
    result: obj.Result,
    launch_angle: parseInt(obj['LA (°)']),
    distance: parseInt(obj['Dist (ft)']),
    direction: obj.Direction,
    pitch_speed: obj['Pitch (MPH)'],
    pitch_type: obj['Pitch Type'],
    mlb_id: obj.mlb_id,
  }
  if (!parseInt(obj['EV (MPH)'])) {
    delete renamedObj.exit_velo
  }
  if (!parseInt(obj['LA (°)'])) {
    delete renamedObj.launch_angle
  }
  if (!obj.Pitcher) {
    delete renamedObj.pitcher
    renamedObj.hitter = obj.Hitter
  }
  if (!parseInt(obj['Dist (ft)'])) {
    delete renamedObj.distance
  }
  if (!obj.Direction) {
    delete renamedObj.direction
  }
  return renamedObj
}

const addPlayerToMongo = async (arr) => {
  await db.StatcastHitterGame.create(arr)
}

fs.readdir(`${filePath}`, async (err, files) => {
  if (err) {
    console.log(err)
  } else {
    let newGameObjArray = []
    files.map(async (file) => {
      const statcastGameArr = JSON.parse(fs.readFileSync(`${filePath}${file}`))
      for (let i = 0; i < statcastGameArr.length; i++) {
        const mongooseGameObj = renameGameObj(statcastGameArr[i])
        newGameObjArray.push(mongooseGameObj)
      }
    })

    addPlayerToMongo(newGameObjArray)
    console.log('db was populated with files in scraped_data')
  }
})
// let statcastGameObj = JSON.parse(
//   fs.readFileSync(
//     `../grab-dat-data/scraped_statcast_data/20220414-christian-yelich-592885.json`
//   )
// )

// let newGameObjArray = []
// for (let i = 0; i < statcastGameObj.length; i++) {
//   const mongooseGameObj = renameGameObj(statcastGameObj[i])
//   //   console.log(mongooseGameObj)
//   newGameObjArray.push(mongooseGameObj)
// }

// test seed statcastDb on one player -- Christian Yelich

// addPlayerToMongo()

// to read file
// const data = JSON.parse(fs.readFileSync(filePath))
