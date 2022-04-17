const db = require('./models')
const fs = require('fs')
const { format } = require('path')
const filePath = '../grab-dat-data/current_player_stats.txt'

const currentPlayerSeasonsSince2020Array = JSON.parse(fs.readFileSync(filePath))
console.log(currentPlayerSeasonsSince2020Array)
const formattedSeasonsArray = []

// for (let i = 0; i < currentPlayerSeasonsSince2020Array.length; i++) {
//   formattedSeasonsArray.push(currentPlayerSeasonsSince2020Array[i]['hr']),
//     formattedSeasonsArray.push(currentPlayerSeasonsSince2020Array[i]['ab']),
//     formattedSeasonsArray.push(
//       currentPlayerSeasonsSince2020Array[i]['slg1000']
//     ),
//     formattedSeasonsArray.push(currentPlayerSeasonsSince2020Array[i]['ops1000'])
// }
// console.log(formattedSeasonsArray)

const populatePlayerSeasons = async () => {
  // game_date,pitcher,exit_velo ,launch_angle,distance,direction,pitch_speed,pitch_type,mlb_id
  let slgVals = []
  for (let i = 0; i < currentPlayerSeasonsSince2020Array.length; i++) {
    for (const property in currentPlayerSeasonsSince2020Array[i]) {
      // if (currentPlayerSeasonsSince2020Array[i][property].charAt(0) === '.') {
      //   currentPlayerSeasonsSince2020Array[i][property] =
      //     '0' + currentPlayerSeasonsSince2020Array[i][property]
      //   console.log(currentPlayerSeasonsSince2020Array[i][property])
      // }
      if (currentPlayerSeasonsSince2020Array[i][property].includes('--')) {
        currentPlayerSeasonsSince2020Array[i][property] === '0.000'
      }
      slgVals.push(currentPlayerSeasonsSince2020Array[i]['slg1000'])
    }

    newSeasonObj = {
      sport_id: currentPlayerSeasonsSince2020Array[i]['sport_id'],
      league_short: currentPlayerSeasonsSince2020Array[i]['league_short'],
      hr: parseInt(currentPlayerSeasonsSince2020Array[i]['hr']),
      team_id: currentPlayerSeasonsSince2020Array[i]['team_id'],
      season: currentPlayerSeasonsSince2020Array[i]['season'],
      ab: parseInt(currentPlayerSeasonsSince2020Array[i]['ab']),
      hldr: parseInt(currentPlayerSeasonsSince2020Array[i]['hldr']),
      league: currentPlayerSeasonsSince2020Array[i]['league'],
      sport_code: currentPlayerSeasonsSince2020Array[i]['sport_code'],
      ao: parseInt(currentPlayerSeasonsSince2020Array[i]['ao']),
      slg1000:
        parseInt(currentPlayerSeasonsSince2020Array[i]['slg1000']) * 1000,
      team_full: currentPlayerSeasonsSince2020Array[i]['team_full'],
      ops1000:
        parseInt(currentPlayerSeasonsSince2020Array[i]['ops1000']) * 1000,
      team_abbrev: currentPlayerSeasonsSince2020Array[i]['team_abbreb'],
      hbp: parseInt(currentPlayerSeasonsSince2020Array[i]['hbp']),
      rbi: parseInt(currentPlayerSeasonsSince2020Array[i]['rbi']),
      go_ao1000:
        parseInt(currentPlayerSeasonsSince2020Array[i]['go_ao1000']) * 1000,
      hfly: parseInt(currentPlayerSeasonsSince2020Array[i]['hfly']),
      lob: parseInt(currentPlayerSeasonsSince2020Array[i]['lob']),
      xbh: parseInt(currentPlayerSeasonsSince2020Array[i]['xbh']),
      end_date: currentPlayerSeasonsSince2020Array[i]['end_date'],
      bb: parseInt(currentPlayerSeasonsSince2020Array[i]['bb']),
      np: parseInt(currentPlayerSeasonsSince2020Array[i]['np']),
      hgnd: parseInt(currentPlayerSeasonsSince2020Array[i]['hgnd']),
      roe: parseInt(currentPlayerSeasonsSince2020Array[i]['roe']),
      sb: parseInt(currentPlayerSeasonsSince2020Array[i]['sb']),
      player_id: currentPlayerSeasonsSince2020Array[i]['player_id'],
      avg1000:
        parseInt(currentPlayerSeasonsSince2020Array[i]['avg1000']) * 1000,
      sf: parseInt(currentPlayerSeasonsSince2020Array[i]['sf']),
      sac: parseInt(currentPlayerSeasonsSince2020Array[i]['sac']),
      wo: parseInt(currentPlayerSeasonsSince2020Array[i]['wo']),
      team_short: currentPlayerSeasonsSince2020Array[i]['team_short'],
      hpop: parseInt(currentPlayerSeasonsSince2020Array[i]['hpop']),
      so: parseInt(currentPlayerSeasonsSince2020Array[i]['so']),
      gidp_opp: parseInt(currentPlayerSeasonsSince2020Array[i]['gidp_opp']),
      gidp: parseInt(currentPlayerSeasonsSince2020Array[i]['gidp']),
      ppa100: parseInt(currentPlayerSeasonsSince2020Array[i]['ppa100']) * 100,
      d: parseInt(currentPlayerSeasonsSince2020Array[i]['d']),
      tpa: parseInt(currentPlayerSeasonsSince2020Array[i]['tpa']),
      league_full: currentPlayerSeasonsSince2020Array[i]['league_full'],
      g: parseInt(currentPlayerSeasonsSince2020Array[i]['g']),
      h: parseInt(currentPlayerSeasonsSince2020Array[i]['h']),
      ibb: parseInt(currentPlayerSeasonsSince2020Array[i]['ibb']),
      go: parseInt(currentPlayerSeasonsSince2020Array[i]['go']),
      team_seq: currentPlayerSeasonsSince2020Array[i]['team_seq'],
      tb: parseInt(currentPlayerSeasonsSince2020Array[i]['tb']),
      cs: parseInt(currentPlayerSeasonsSince2020Array[i]['cs']),
      r: parseInt(currentPlayerSeasonsSince2020Array[i]['r']),
      t: parseInt(currentPlayerSeasonsSince2020Array[i]['t']),
      babip1000:
        parseInt(currentPlayerSeasonsSince2020Array[i]['babip1000']) * 1000,
      obp1000:
        parseInt(currentPlayerSeasonsSince2020Array[i]['obp1000']) * 1000,
      sport: currentPlayerSeasonsSince2020Array[i]['sport'],
      league_id: currentPlayerSeasonsSince2020Array[i]['league_id'],
    }
    // formattedSeasonsArray.push(newSeasonObj)
    // for (const property in newSeasonObj) {
    //   if (!newSeasonObj[property]) {
    //     newSeasonObj[property] = 0
    //   }
    // }
  }
  // const postSeasons = await db.ApiHitterSeason.create(formattedSeasonsArray)
  // console.log(postSeasons)
  console.log(slgVals)
}
// console.log(formattedSeasonsArray)
// populatePlayerSeasons()
console.log('seed function was completed to player season db.')
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
// const renameGameObj = (obj) => {
//   let renamedObj = {
//     game_date: obj['Game Date'],
//     pitcher: obj.Pitcher,
//     exit_velo: parseInt(obj['EV (MPH)']),
//     result: obj.Result,
//     launch_angle: parseInt(obj['LA (°)']),
//     distance: parseInt(obj['Dist (ft)']),
//     direction: obj.Direction,
//     pitch_speed: obj['Pitch (MPH)'],
//     pitch_type: obj['Pitch Type'],
//     mlb_id: obj.mlb_id,
//   }
//   if (!parseInt(obj['EV (MPH)'])) {
//     delete renamedObj.exit_velo
//   }
//   if (!parseInt(obj['LA (°)'])) {
//     delete renamedObj.launch_angle
//   }
//   if (!obj.Pitcher) {
//     delete renamedObj.pitcher
//     renamedObj.hitter = obj.Hitter
//   }
//   if (!parseInt(obj['Dist (ft)'])) {
//     delete renamedObj.distance
//   }
//   if (!obj.Direction) {
//     delete renamedObj.direction
//   }
//   return renamedObj
// }

// const addPlayerToMongo = async (arr) => {
//   await db.StatcastHitterGame.create(arr)
// }

// fs.readdir(`${filePath}`, async (err, files) => {
//   if (err) {
//     console.log(err)
//   } else {
//     let newGameObjArray = []
//     files.map(async (file) => {
//       const statcastGameArr = JSON.parse(fs.readFileSync(`${filePath}${file}`))
//       for (let i = 0; i < statcastGameArr.length; i++) {
//         const mongooseGameObj = renameGameObj(statcastGameArr[i])
//         newGameObjArray.push(mongooseGameObj)
//       }
//     })

//     addPlayerToMongo(newGameObjArray)
//     console.log('db was populated with files in scraped_data')
//   }
// })
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
