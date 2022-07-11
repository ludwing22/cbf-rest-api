const PlayersRepository = require('../repository')

module.exports = async (player) => {
  return PlayersRepository.insertOne(player)
}