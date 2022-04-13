const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
  {
    //{'away_team': None, 'date': None, 'time': None, 'home_team': None, 'away_sp': None, 'away_sp_h': None, 'home_sp': None, 'home_sp_h': None, 'away_lineup': [], 'home_lineup': []}
    away_team: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 4,
    },
    home_team: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    away_sp: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 40,
    },
    away_sp_h: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1,
    },
    home_sp: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 40,
    },
    home_sp_h: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1,
    },
    away_lineup: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
      },
    ],
    home_lineup: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
      },
    ],
  },
  { timestamps: true }
)

// create and export the model
module.exports = mongoose.model('Game', gameSchema)
