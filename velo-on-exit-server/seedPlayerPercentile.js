const db = require('./models')

let playerArrToAdd = []
const getAllPlayerSeasons = async () => {
  let arrsOfNumCategories = {}
  const allSeasons = await db.ApiHitterSeason.find()
  checkArray = []
  //   allSeasons.length
  for (let i = 0; i < 20; i++) {
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
          console.log('hooray')
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

  console.log(arrsOfNumCategories)
}
// if (
//   checkArray.includes(
//     `${allSeasons[i]['player_id']}_${allSeasons[i]['season']}`
//   )
// ) {
//   console.log(
//     allSeasons[i]['player_id'] +
//       ' ' +
//       allSeasons[i]['season'] +
//       ' ' +
//       allSeasons[i]['team_id']

getAllPlayerSeasons()

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
