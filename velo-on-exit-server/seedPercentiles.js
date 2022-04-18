const db = require('./models')
const fs = require('fs')
let arrayToAdd = 'array.json'

arrayToAdd = JSON.parse(fs.readFileSync(arrayToAdd))
// for (let i = 0; i < arrayToAdd.length; i++) {
//   if (Array.from(arrayToAdd[i]['player_id']).length === 6) {
//   } else {
//     console.log('oh no')
//   }
// }
// console.log('you reached the end')
db.PlayerPercentile.create(arrayToAdd)
console.log('percentiles added')
