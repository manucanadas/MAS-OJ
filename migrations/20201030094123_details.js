
exports.up = function(knex) {
    return knex.schema.createTable('details', (table) => {
        table.increments('id').primary()
        table.integer('location_id')
        table.string('name')
        table.decimal('length')
        table.string('duration')
        table.string('difficulty')
        table.boolean('dog_friendly')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('details')
};
