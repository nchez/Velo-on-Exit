const mongoose = require('mongoose')

const playerLineupSchema = new mongoose.Schema(
  {
    // ['player_name'] ['b_ref_id'] ['mlb_id']['position']['bat']['spot']
    player_name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 40,
    },
    b_ref_id: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 10,
    },
    mlb_id: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 10,
    },
    position: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 4,
    },
    bat: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1,
    },
    spot: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1,
    },
    date: {
      type: String,
      required: true,
    },
    opp_sp_h: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1,
    },
  },
  { timestamps: true }
)

// create and export the model
module.exports = mongoose.model('PlayerLineup', playerLineupSchema)
