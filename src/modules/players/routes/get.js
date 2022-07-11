const { Types } = require('mongoose')

module.exports = async (req, res) => {

  let filters = buildFilters(req)
  
}

const buildFilters = (req) => {
  const { name, birthDate, country, team } = req.query

  let filters = {}

  if (name)
    filters.name = new RegExp(`^${name}.*$`)
  if (birthDate)
    filters.birthDate = new Date(birthDate)
  if (country)
    filters.country = new RegExp(`^${country}.*$`)
  if (team)
    filters.team = Types.ObjectId(team)

  return filters
}