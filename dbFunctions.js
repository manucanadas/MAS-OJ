
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getRegion (id, db = connection) {
  return db ('details')
  .join('locations' , 'details.location_id' , 'locations.id')
  .where('locations.location', id)
  .select()
}

module.exports = {
    getRegion
}