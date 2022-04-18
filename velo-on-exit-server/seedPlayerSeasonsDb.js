const db = require('./models')
const fs = require('fs')
const filePath = '../grab-dat-data/current_player_stats.txt'

const currentPlayerSeasonsSince2020Array = JSON.parse(fs.readFileSync(filePath))
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
  for (let i = 0; i < currentPlayerSeasonsSince2020Array.length; i++) {
    for (const property in currentPlayerSeasonsSince2020Array[i]) {
      // if (currentPlayerSeasonsSince2020Array[i][property].charAt(0) === '.') {
      //   currentPlayerSeasonsSince2020Array[i][property] =
      //     '0' + currentPlayerSeasonsSince2020Array[i][property]
      //   console.log(currentPlayerSeasonsSince2020Array[i][property])
      // }
      if (currentPlayerSeasonsSince2020Array[i][property].includes('--')) {
        currentPlayerSeasonsSince2020Array[i][property] = '0.000'
      }
      if (currentPlayerSeasonsSince2020Array[i][property].includes('*')) {
        currentPlayerSeasonsSince2020Array[i][property] = '0.000'
      }
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
      slg1000: parseFloat(currentPlayerSeasonsSince2020Array[i]['slg']) * 1000,
      team_full: currentPlayerSeasonsSince2020Array[i]['team_full'],
      ops1000: parseFloat(currentPlayerSeasonsSince2020Array[i]['ops']) * 1000,
      team_abbrev: currentPlayerSeasonsSince2020Array[i]['team_abbreb'],
      hbp: parseInt(currentPlayerSeasonsSince2020Array[i]['hbp']),
      rbi: parseInt(currentPlayerSeasonsSince2020Array[i]['rbi']),
      // go_ao1000: too many validation errors
      //   parseFloat(currentPlayerSeasonsSince2020Array[i]['go_ao']) * 1000,
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
      avg1000: parseFloat(currentPlayerSeasonsSince2020Array[i]['avg']) * 1000,
      sf: parseInt(currentPlayerSeasonsSince2020Array[i]['sf']),
      sac: parseInt(currentPlayerSeasonsSince2020Array[i]['sac']),
      wo: parseInt(currentPlayerSeasonsSince2020Array[i]['wo']),
      team_short: currentPlayerSeasonsSince2020Array[i]['team_short'],
      hpop: parseInt(currentPlayerSeasonsSince2020Array[i]['hpop']),
      so: parseInt(currentPlayerSeasonsSince2020Array[i]['so']),
      gidp_opp: parseInt(currentPlayerSeasonsSince2020Array[i]['gidp_opp']),
      gidp: parseInt(currentPlayerSeasonsSince2020Array[i]['gidp']),
      ppa100: parseFloat(currentPlayerSeasonsSince2020Array[i]['ppa']) * 100,
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
        parseFloat(currentPlayerSeasonsSince2020Array[i]['babip']) * 1000,
      obp1000: parseFloat(currentPlayerSeasonsSince2020Array[i]['obp']) * 1000,
      sport: currentPlayerSeasonsSince2020Array[i]['sport'],
      league_id: currentPlayerSeasonsSince2020Array[i]['league_id'],
    }
    formattedSeasonsArray.push(newSeasonObj)
  }
  const postSeasons = await db.ApiHitterSeason.create(formattedSeasonsArray)
}
// console.log(formattedSeasonsArray)
populatePlayerSeasons()
console.log('seed function was completed to player season db.')
