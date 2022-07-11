const mongoose = require('mongoose')
const playersSchema = require('../models')

class PlayersRepositoryClass {
  static findByIdExemple (id) {
    return this.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(id)
        }
      }
    ])
  }
}

playersSchema.loadClass(PlayersRepositoryClass)

const PlayersRepository = mongoose.model('players', playersSchema)

module.exports = PlayersRepository