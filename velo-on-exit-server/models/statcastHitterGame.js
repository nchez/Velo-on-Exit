const mongoose = require('mongoose')

const statcastHitterGameSchema = new mongoose.Schema(
  {
    game_date: {
      type: Date,
      required: true,
    },
    pitcher: {
      type: String,
      required: false,
    },
    hitter: {
      type: String,
      required: false,
    },
    result: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 40,
    },
    exit_velo: {
      type: Number,
      required: false,
      minlength: 0,
      maxlength: 10,
    },
    launch_angle: {
      type: Number,
      required: false,
      minlength: 0,
      maxlength: 4,
    },
    distance: {
      type: Number,
      required: false,
      minlength: 1,
      maxlength: 10,
    },
    direction: {
      type: String,
      required: false,
      minlength: 0,
      maxlength: 20,
    },
    pitch_speed: {
      type: Number,
      required: false,
      minlength: 0,
      maxlength: 6,
    },
    pitch_type: {
      type: String,
      required: false,
      minlength: 0,
      maxlength: 15,
    },
    mlb_id: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 10,
    },
  },
  { timestamps: true }
)

// create and export the model
module.exports = mongoose.model('StatcastHitterGame', statcastHitterGameSchema)
