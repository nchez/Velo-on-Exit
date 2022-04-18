const db = require('./models')
const fs = require('fs')

let playerArrToAdd = []
const getAllPlayerSeasons = async (arr) => {
  let arrsOfNumCategories = {}
  const allSeasons = await db.ApiHitterSeason.find()
  checkArray = []
  for (let i = 0; i < allSeasons.length; i++) {
    //  *** This 'formats' the data, gets rid of any duplicate player, team, year seasons .   due to api data output if player add/removed to roster throughout season?
    if (
      checkArray.includes(
        `${allSeasons[i]['player_id']}_${allSeasons[i]['season']}_${allSeasons[i]['team_short']}`
      )
    ) {
      continue
    } // end of the remove duplicate function ///
    for (const keys in allSeasons[i]['_doc']) {
      if (typeof allSeasons[i][keys] === 'number') {
        //    checking if empty object exists
        // arrsOfNumCategories[keys][0] -- this wasnt working -- got back undefined
        if (Object.keys(arrsOfNumCategories).length === 0) {
          arrsOfNumCategories[`${keys}`] = [allSeasons[i][keys]]
        } else if (typeof arrsOfNumCategories[`${keys}`] === 'undefined') {
          arrsOfNumCategories[keys] = [allSeasons[i][keys]]
          continue
        } else {
          arrsOfNumCategories[keys].push(allSeasons[i][keys])
          continue
        }
      }
    }
  }
  //   // L => # of vals from set that are lower than or equal to data value
  //   //  N => total # of values in set
  // }
  delete arrsOfNumCategories.__v
  for (let i = 0; i < allSeasons.length; i++) {
    console.log(i)
    let playerPercentObject = {}
    for (let j = 0; j < Object.keys(arrsOfNumCategories).length; j++) {
      const countBelow = arrsOfNumCategories[
        `${Object.keys(arrsOfNumCategories)[j]}`
      ].filter(
        (x) => x <= allSeasons[i][`${Object.keys(arrsOfNumCategories)[j]}`]
      ).length
      const percentile =
        (countBelow /
          arrsOfNumCategories[`${Object.keys(arrsOfNumCategories)[j]}`]
            .length) *
        100

      playerPercentObject[`${Object.keys(arrsOfNumCategories)[j]}Perc`] =
        percentile
      playerPercentObject[`${Object.keys(arrsOfNumCategories)[j]}`] =
        allSeasons[i][`${Object.keys(arrsOfNumCategories)[j]}`]
      playerPercentObject['player_id'] = allSeasons[i]['player_id']
      //   console.log(allSeasons[i]['player_id'])
      playerPercentObject['season'] = allSeasons[i]['season']
    }

    arr.push(playerPercentObject)
  }

  const data = JSON.stringify(arr)
  fs.writeFileSync('./array.json', data)
  //   for (let i = 0; i < Object.keys(arrsOfNumCategories); i++) {
  //       newPlayerPercentObject = {}
  //   }
  //   return playerPercentilesToAdd
}

getAllPlayerSeasons(playerArrToAdd)

// const arrayToAdd = getAllPlayerSeasons()

// const populatePlayerPercentile = async () => {
//   const allPercentiles = await db.PlayerPercentile.create({ arrayToAdd })

//   console.log(allPercentiles)
// }

// populatePlayerPercentile()

// const getHitterStats = async () => {}

// const populatePlayerPercentile = async () => {
//   const allSeasons = await db.ApiHitterSeason.find()
//   for (let i = 0; i < allSeasons.length; i++) {
//     const newPlayerObj = {}
//     playerArrToAdd.push(newPlayerObj)
//   }
//   // percentile rank = L / N * 100
//   // L => # of vals from set that are lower than or equal to data value
//   //  N => total # of values in set
// }
// // console.log(formattedSeasonsArray)
// populatePlayerPercentile()
// console.log('seed function was completed to player season db.')
