
exports.up = function(knex) {
    return knex.schema.createTable('locations', (table) => {
        table.increments('id').primary()
        table.string('location')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('locations')
};

