const PlayersRepository = require('../repository')

module.exports = async (_id) => {
  return await PlayersRepository.findById(_id)
}