const fs = require('fs')
const filePath = '../../grab-dat-data/scraped_statcast_data/'

fs.readdir(`${filePath}`, async (err, files) => {
  if (err) {
    console.log(err)
  } else {
    let idArray = []
    files.forEach((file) => {
      idArray.push(parseInt(file.slice(-11, -5)))
    })
    console.log(
      idArray.sort((a, b) => {
        return b - a
      })
    )
  }
})
