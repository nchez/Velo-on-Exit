const fs = require('fs')
playerObj = JSON.parse(
  fs.readFileSync(
    '../grab-dat-data/scraped_statcast_data/20220414-albert-pujols-405395.json'
  )
)
console.log(Object.keys(playerObj[0]))

// statcast games have this "Game Date": "2022-04-13"
