// statcast games have this "Game Date": "2022-04-13"
const db = require('./models')

const testFunction = async () => {
  const foundSeasons = await db.ApiHitterSeason.find({
    player_id: '405395',
  })
  for (let i = 0; i < foundSeasons.length; i++) {
    console.log(foundSeasons[i]['season'] + ' ' + foundSeasons[i]['team_full'])
  }
}

testFunction()
