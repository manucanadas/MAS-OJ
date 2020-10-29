
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 101, location: 'Wellington City'},
        {id: 102, location: 'Porirua'},
        {id: 103, location: 'Eastbourne'},
        {id: 104, location: 'Upper Hutt'}
      ]);
    });
};
