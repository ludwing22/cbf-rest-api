const mongoose = require('mongoose')
const { Schema, Types } = mongoose

const playersSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  birthDate: Date,
  country: {
    type: String,
    required: true
  },
  team: {
    type: Types.ObjectId,
    ref: 'teams',
    index: true
  }
})

module.exports = playersSchema