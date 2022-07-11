const PlayersRepository = require('../repository')

module.exports = async (filters = {}) => {
  return await PlayersRepository.find({
    ...filters
  })
}